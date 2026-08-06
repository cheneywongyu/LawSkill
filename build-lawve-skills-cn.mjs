import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const inputPath = "lawve-skills-full.json";
const outputDir = "outputs/lawve-skills-cn";
const cachePath = path.join(outputDir, "translation-cache.json");
const workbookPath = path.join(outputDir, "lawve-skills-readme-cn.xlsx");
const previewPath = path.join(outputDir, "preview.png");
let activeCache = null;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function chunkText(text, maxChars = 2600) {
  const parts = [];
  let current = "";
  for (const line of text.split("\n")) {
    const candidate = current ? `${current}\n${line}` : line;
    if (candidate.length > maxChars && current) {
      parts.push(current);
      current = line;
    } else {
      current = candidate;
    }
  }
  if (current) parts.push(current);
  return parts.flatMap((part) => {
    if (part.length <= maxChars) return [part];
    const chunks = [];
    for (let i = 0; i < part.length; i += maxChars) chunks.push(part.slice(i, i + maxChars));
    return chunks;
  });
}

function splitMarkdown(text) {
  const blocks = [];
  let buffer = [];
  let code = false;
  for (const line of text.split("\n")) {
    if (line.trim().startsWith("```")) {
      if (buffer.length) {
        blocks.push({ type: code ? "code" : "text", value: buffer.join("\n") });
        buffer = [];
      }
      blocks.push({ type: "code", value: line });
      code = !code;
      continue;
    }
    if (code || line.trim().startsWith("|") || /^ {4,}/.test(line)) {
      if (buffer.length && blocks.at(-1)?.type !== "code") {
        blocks.push({ type: "text", value: buffer.join("\n") });
        buffer = [];
      }
      blocks.push({ type: "code", value: line });
    } else {
      buffer.push(line);
    }
  }
  if (buffer.length) blocks.push({ type: code ? "code" : "text", value: buffer.join("\n") });
  return blocks;
}

async function translatePlain(text, cache) {
  const normalized = text.trim();
  if (!normalized) return text;
  if (cache[normalized]) return cache[normalized];

  const chunks = chunkText(normalized);
  const translatedChunks = [];
  for (const chunk of chunks) {
    let lastError;
    for (let attempt = 1; attempt <= 4; attempt++) {
      try {
        const url = `https://translate.plausibility.cloud/api/v1/en/zh/${encodeURIComponent(chunk)}`;
        const response = await fetch(url);
        if (response.status === 429) throw new Error("429 Too Many Requests");
        if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
        const payload = await response.json();
        if (!payload.translation) throw new Error("translation failed");
        translatedChunks.push(payload.translation);
        await sleep(250);
        lastError = null;
        break;
      } catch (error) {
        lastError = error;
        const waitMs = String(error.message).includes("429") ? 10000 * attempt : 1000 * attempt;
        await sleep(waitMs);
      }
    }
    if (lastError) throw lastError;
  }
  const translated = translatedChunks.join("\n");
  cache[normalized] = translated;
  if (activeCache) await saveCache(activeCache);
  return translated;
}

async function translateMarkdown(markdown, cache) {
  if (!markdown?.trim()) return "";
  const output = [];
  for (const block of splitMarkdown(markdown)) {
    if (block.type === "code") {
      output.push(block.value);
    } else {
      output.push(await translatePlain(block.value, cache));
    }
  }
  return output.join("\n");
}

function compactReadme(readme) {
  return readme.length > 32000 ? `${readme.slice(0, 31950)}\n\n[内容因 Excel 单元格限制截断]` : readme;
}

async function loadCache() {
  if (!existsSync(cachePath)) return {};
  return JSON.parse(await fs.readFile(cachePath, "utf8"));
}

async function saveCache(cache) {
  await fs.writeFile(cachePath, JSON.stringify(cache, null, 2));
}

async function buildWorkbook(skills) {
  const workbook = Workbook.create();
  const sheet = workbook.worksheets.add("Skills 中文");
  sheet.showGridLines = false;

  const headers = [
    "Skill 名称",
    "中文名称",
    "作者",
    "分类",
    "URL",
    "README 原文",
    "README 中文",
  ];
  const rows = skills.map((skill) => [
    skill.title,
    skill.title_cn,
    skill.author_name,
    skill.category,
    skill.url,
    compactReadme(skill.readme || ""),
    compactReadme(skill.readme_cn || ""),
  ]);

  sheet.getRangeByIndexes(0, 0, rows.length + 1, headers.length).values = [headers, ...rows];
  sheet.freezePanes.freezeRows(1);

  const used = sheet.getRangeByIndexes(0, 0, rows.length + 1, headers.length);
  used.format.font.name = "Aptos";
  used.format.font.size = 10;
  used.format.wrapText = true;
  used.format.verticalAlignment = "top";

  const header = sheet.getRange("A1:G1");
  header.format.fill.color = "#1F4E79";
  header.format.font.color = "#FFFFFF";
  header.format.font.bold = true;
  header.format.rowHeight = 28;
  header.format.horizontalAlignment = "center";

  sheet.getRange(`A2:E${rows.length + 1}`).format.wrapText = false;
  sheet.getRange(`F2:G${rows.length + 1}`).format.wrapText = true;
  sheet.getRange(`A2:G${rows.length + 1}`).format.rowHeight = 96;
  sheet.getRange(`A1:G${rows.length + 1}`).format.borders = {
    insideHorizontal: { style: "thin", color: "#D9E2EC" },
    top: { style: "thin", color: "#B8C7D9" },
    bottom: { style: "thin", color: "#B8C7D9" },
  };

  sheet.getRange("A:A").format.columnWidth = 28;
  sheet.getRange("B:B").format.columnWidth = 30;
  sheet.getRange("C:C").format.columnWidth = 22;
  sheet.getRange("D:D").format.columnWidth = 22;
  sheet.getRange("E:E").format.columnWidth = 46;
  sheet.getRange("F:F").format.columnWidth = 72;
  sheet.getRange("G:G").format.columnWidth = 72;

  const summary = workbook.worksheets.add("Summary");
  summary.showGridLines = false;
  summary.getRange("A1:B5").values = [
    ["项目", "值"],
    ["来源", "https://lawve.ai/skills"],
    ["Skill 数量", skills.length],
    ["有 README 的数量", skills.filter((skill) => skill.readme?.trim()).length],
    ["翻译说明", "中文列为机器翻译，保留原文列便于核对。"],
  ];
  summary.getRange("A1:B1").format.fill.color = "#1F4E79";
  summary.getRange("A1:B1").format.font.color = "#FFFFFF";
  summary.getRange("A1:B1").format.font.bold = true;
  summary.getRange("A:B").format.columnWidth = 34;
  summary.getRange("A1:B5").format.wrapText = true;
  summary.getRange("A1:B5").format.borders = { preset: "all", style: "thin", color: "#D9E2EC" };

  const inspect = await workbook.inspect({
    kind: "table",
    range: "Skills 中文!A1:G8",
    include: "values",
    tableMaxRows: 8,
    tableMaxCols: 7,
    tableMaxCellChars: 80,
  });
  console.log(inspect.ndjson);

  const errors = await workbook.inspect({
    kind: "match",
    searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
    options: { useRegex: true, maxResults: 50 },
    summary: "final formula error scan",
  });
  console.log(errors.ndjson);

  const preview = await workbook.render({
    sheetName: "Skills 中文",
    range: "A1:G12",
    scale: 1,
    format: "png",
  });
  await fs.writeFile(previewPath, new Uint8Array(await preview.arrayBuffer()));

  const output = await SpreadsheetFile.exportXlsx(workbook);
  await output.save(workbookPath);
}

await fs.mkdir(outputDir, { recursive: true });
const source = JSON.parse(await fs.readFile(inputPath, "utf8"));
const cache = await loadCache();
activeCache = cache;
const translated = [];

for (let index = 0; index < source.skills.length; index++) {
  const skill = source.skills[index];
  const titleCn = await translatePlain(skill.title, cache);
  const readmeCn = await translateMarkdown(skill.readme || "", cache);
  translated.push({ ...skill, title_cn: titleCn, readme_cn: readmeCn });
  if ((index + 1) % 10 === 0 || index === source.skills.length - 1) {
    await saveCache(cache);
    console.log(`translated ${index + 1}/${source.skills.length}`);
  }
}

await fs.writeFile(
  path.join(outputDir, "lawve-skills-cn.json"),
  JSON.stringify(
    {
      source: source.source,
      translated_at: new Date().toISOString(),
      count: translated.length,
      skills: translated,
    },
    null,
    2,
  ),
);

await buildWorkbook(translated);
console.log(workbookPath);
