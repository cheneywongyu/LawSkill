import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";

const workspaceRoot = "/Users/lilithium/Desktop/my-project";
const sourcePath = path.join(workspaceRoot, "outputs/lawve-skills-cn/lawve-skills-cn.json");
const outputDir = path.join(workspaceRoot, "outputs/lawve-skills-md-full");
const mdDir = path.join(outputDir, "md");
const rawDir = path.join(outputDir, "raw");
const translatedJsonPath = path.join(outputDir, "lawve-skills-readme-skill-cn.json");
const rowsJsonPath = path.join(outputDir, "lawve-skills-full-md-index.rows.json");
const cachePath = path.join(outputDir, "translation-cache.json");
const previousCachePath = path.join(workspaceRoot, "outputs/lawve-skills-cn/translation-cache.json");
const xlsxPath = path.join(outputDir, "lawve-skills-full-md-index.xlsx");
const pythonPath = "/Users/lilithium/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3";
const apiBase = "https://api.lawve.ai";
const shouldTranslate = process.env.TRANSLATE !== "false";

let activeCache = null;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function safeSegment(value) {
  return String(value || "untitled")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90)
    .toLowerCase() || "untitled";
}

function yamlString(value) {
  return JSON.stringify(value ?? "");
}

function chunkText(text, maxChars = 800) {
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
  let frontmatter = false;
  const lines = text.split("\n");

  function flush(type = "text") {
    if (!buffer.length) return;
    blocks.push({ type, value: buffer.join("\n") });
    buffer = [];
  }

  for (const [index, line] of lines.entries()) {
    if (index === 0 && line.trim() === "---") {
      flush();
      frontmatter = true;
      buffer.push(line);
      continue;
    }
    if (frontmatter) {
      buffer.push(line);
      if (line.trim() === "---" && buffer.length > 1) {
        flush("code");
        frontmatter = false;
      }
      continue;
    }
    if (line.trim().startsWith("```")) {
      flush(code ? "code" : "text");
      buffer.push(line);
      flush("code");
      code = !code;
      continue;
    }
    if (code || line.trim().startsWith("|") || /^ {4,}/.test(line)) {
      flush("text");
      buffer.push(line);
      flush("code");
    } else {
      buffer.push(line);
    }
  }
  flush(code || frontmatter ? "code" : "text");
  return blocks;
}

async function translatePlain(text, cache) {
  const normalized = text.trim();
  if (!normalized) return text;
  if (cache[normalized]) return cache[normalized];

  const chunks = chunkText(normalized);
  const translatedChunks = new Array(chunks.length);
  let nextIndex = 0;
  async function worker() {
    while (nextIndex < chunks.length) {
      const index = nextIndex;
      nextIndex += 1;
      translatedChunks[index] = await translateChunk(chunks[index], cache);
    }
  }
  await Promise.all(Array.from({ length: Math.min(3, chunks.length) }, () => worker()));

  const translated = translatedChunks.join("\n");
  cache[normalized] = translated;
  if (activeCache) await saveCache(activeCache);
  return translated;
}

async function translateChunk(chunk, cache) {
  const normalized = chunk.trim();
  if (!normalized) return chunk;
  if (cache[normalized]) return cache[normalized];

  let lastError;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const url = `https://translate.plausibility.cloud/api/v1/en/zh/${encodeURIComponent(normalized)}`;
      const response = await fetch(url);
      if (response.status === 429) throw new Error("429 Too Many Requests");
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      const payload = await response.json();
      if (!payload.translation) throw new Error("translation failed");
      cache[normalized] = payload.translation;
      await sleep(250);
      return payload.translation;
    } catch (error) {
      lastError = error;
      const message = String(error.message);
      if (!message.includes("429") && normalized.length > 220) break;
      const waitMs = message.includes("429") ? 8000 * attempt : 600 * attempt;
      await sleep(waitMs);
    }
  }

  if (normalized.length > 220) {
    const midpoint = Math.floor(normalized.length / 2);
    const splitAt = Math.max(
      normalized.lastIndexOf("\n", midpoint),
      normalized.lastIndexOf(". ", midpoint),
      normalized.lastIndexOf("; ", midpoint),
      normalized.lastIndexOf(", ", midpoint),
    );
    const cut = splitAt > 80 ? splitAt + 1 : midpoint;
    const left = normalized.slice(0, cut).trim();
    const right = normalized.slice(cut).trim();
    const translated = `${await translateChunk(left, cache)}\n${await translateChunk(right, cache)}`;
    cache[normalized] = translated;
    return translated;
  }

  try {
    const fallbackUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(normalized)}&langpair=en|zh-CN`;
    const response = await fetch(fallbackUrl, { headers: { "user-agent": "Mozilla/5.0" } });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    const payload = await response.json();
    const translated = payload?.responseData?.translatedText;
    if (!translated) throw new Error("fallback translation failed");
    cache[normalized] = translated;
    await sleep(250);
    return translated;
  } catch (fallbackError) {
    console.warn(
      `translation fallback kept original chunk: ${lastError?.message || "unknown error"} / ${
        fallbackError?.message || "fallback error"
      }`,
    );
  }

  return `（以下片段机器翻译失败，保留原文以便核对。）\n${normalized}`;
}

async function translateMarkdown(markdown, cache) {
  if (!markdown?.trim()) return "";
  const output = [];
  for (const block of splitMarkdown(markdown)) {
    output.push(block.type === "code" ? block.value : await translatePlain(block.value, cache));
  }
  return output.join("\n");
}

async function loadCache() {
  if (existsSync(cachePath)) return JSON.parse(await fs.readFile(cachePath, "utf8"));
  if (existsSync(previousCachePath)) return JSON.parse(await fs.readFile(previousCachePath, "utf8"));
  return {};
}

async function saveCache(cache) {
  await fs.writeFile(cachePath, JSON.stringify(cache, null, 2));
}

async function fetchJson(url) {
  const response = await fetch(url, { headers: { "user-agent": "Mozilla/5.0", accept: "application/json" } });
  const text = await response.text();
  if (!response.ok) throw new Error(`${response.status} ${text.slice(0, 160)}`);
  return JSON.parse(text);
}

async function fetchRaw(resourceId, filePath) {
  const url = `${apiBase}/resources/${encodeURIComponent(resourceId)}/raw/${filePath
    .split("/")
    .map(encodeURIComponent)
    .join("/")}`;
  const response = await fetch(url, { headers: { "user-agent": "Mozilla/5.0", accept: "text/plain,*/*" } });
  const text = await response.text();
  if (!response.ok) throw new Error(`${response.status} ${text.slice(0, 160)}`);
  return text;
}

async function fetchSkillFiles(skill) {
  const treeUrl = `${apiBase}/resources/${encodeURIComponent(skill.id)}/files/tree?recursive=true&include_projection_state=false`;
  let tree = [];
  try {
    tree = await fetchJson(treeUrl);
  } catch (error) {
    if (!String(error.message).includes("404")) throw error;
    return { tree, readmePath: "", skillPath: "", readmeMd: skill.readme || "", skillMd: "" };
  }
  const readmePath = tree.find((entry) => entry.path.toLowerCase() === "readme.md")?.path;
  const skillPath = tree.find((entry) => entry.path.toLowerCase() === "skill.md")?.path;
  const readmeMd = readmePath ? await fetchRaw(skill.id, readmePath) : skill.readme || "";
  const skillMd = skillPath ? await fetchRaw(skill.id, skillPath) : "";
  return { tree, readmePath, skillPath, readmeMd, skillMd };
}

function buildMarkdown(skill, index) {
  const readmeCn = skill.readme_md_cn?.trim() || "（源站没有提供 README.md，或翻译内容为空。）";
  const skillCn = skill.skill_md_cn?.trim() || (skill.skill_md?.trim() ? "（SKILL.md 原文已完整抓取，中文翻译待补。）" : "（源站没有提供 SKILL.md。）");
  const readme = skill.readme_md?.trim() || "(No README.md was available from the source files.)";
  const skillMd = skill.skill_md?.trim() || "(No SKILL.md was available from the source files.)";

  return [
    "---",
    `id: ${yamlString(skill.id)}`,
    `title: ${yamlString(skill.title)}`,
    `title_cn: ${yamlString(skill.title_cn)}`,
    `slug: ${yamlString(skill.slug)}`,
    `url: ${yamlString(skill.url)}`,
    `author: ${yamlString(skill.author_name)}`,
    `author_slug: ${yamlString(skill.author_slug)}`,
    `category: ${yamlString(skill.category)}`,
    `language: ${yamlString(skill.language)}`,
    `license: ${yamlString(skill.license_label || skill.license)}`,
    `jurisdictions: ${yamlString((skill.jurisdictions || []).join(", "))}`,
    `status: ${yamlString(skill.status)}`,
    `source_index: ${index}`,
    `readme_path: ${yamlString(skill.readme_path)}`,
    `skill_path: ${yamlString(skill.skill_path)}`,
    "---",
    "",
    `# ${skill.title_cn || skill.title}`,
    "",
    `原始名称：\`${skill.title}\`  `,
    `作者：${skill.author_name || ""}  `,
    `分类：${skill.category || ""}  `,
    `来源：${skill.url || ""}  `,
    "来源类型：外部开源 Lawve skill",
    "",
    "## README.md 中文翻译",
    "",
    readmeCn,
    "",
    "---",
    "",
    "## SKILL.md 中文翻译",
    "",
    skillCn,
    "",
    "---",
    "",
    "## README.md Original",
    "",
    readme,
    "",
    "---",
    "",
    "## SKILL.md Original",
    "",
    skillMd,
    "",
  ].join("\n");
}

async function buildWorkbook(rows, skills) {
  const workbookPayload = {
    rows,
    summary: {
      mdCount: rows.length,
      readmeCount: skills.filter((skill) => skill.readme_md?.trim()).length,
      skillCount: skills.filter((skill) => skill.skill_md?.trim()).length,
      mdDir,
      translatedJsonPath,
      emptySkillNames: skills.filter((skill) => !skill.skill_md?.trim()).map((skill) => skill.title).join(", ") || "无",
    },
  };
  await fs.writeFile(rowsJsonPath, JSON.stringify(workbookPayload, null, 2), "utf8");

  const python = String.raw`
import json
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

rows_path = ${JSON.stringify(rowsJsonPath)}
xlsx_path = ${JSON.stringify(xlsxPath)}
with open(rows_path, "r", encoding="utf-8") as f:
    payload = json.load(f)

wb = Workbook()
ws = wb.active
ws.title = "Markdown Paths"
headers = ["序号", "Skill 名称", "中文名称", "分类", "作者", "来源 URL", "Markdown 路径", "相对路径"]
ws.append(headers)
for row in payload["rows"]:
    ws.append([row["no"], row["title"], row["titleCn"], row["category"], row["author"], row["url"], row["mdPath"], row["relativeMdPath"]])

header_fill = PatternFill("solid", fgColor="0F172A")
thin = Side(style="thin", color="E2E8F0")
border = Border(top=thin, bottom=thin)
for cell in ws[1]:
    cell.fill = header_fill
    cell.font = Font(name="Aptos", color="FFFFFF", bold=True, size=10)
    cell.alignment = Alignment(horizontal="center", vertical="center")
for row in ws.iter_rows(min_row=2):
    for cell in row:
        cell.font = Font(name="Aptos", size=10)
        cell.alignment = Alignment(vertical="top", wrap_text=False)
        cell.border = border
for cell in ws["A"]:
    cell.alignment = Alignment(horizontal="center", vertical="top")
ws.freeze_panes = "A2"
widths = [8, 34, 34, 22, 24, 54, 92, 64]
for i, width in enumerate(widths, start=1):
    ws.column_dimensions[get_column_letter(i)].width = width

summary = wb.create_sheet("Summary")
items = [
    ["项目", "值"],
    ["Markdown 文件数", payload["summary"]["mdCount"]],
    ["有 README.md 的数量", payload["summary"]["readmeCount"]],
    ["有 SKILL.md 的数量", payload["summary"]["skillCount"]],
    ["Markdown 目录", payload["summary"]["mdDir"]],
    ["源 JSON", payload["summary"]["translatedJsonPath"]],
    ["说明", "每个 Markdown 文件包含 README.md 和 SKILL.md 的中文翻译与原文。Excel 只保留路径索引。"],
    ["空 SKILL.md", payload["summary"]["emptySkillNames"]],
]
for item in items:
    summary.append(item)
for cell in summary[1]:
    cell.fill = header_fill
    cell.font = Font(name="Aptos", color="FFFFFF", bold=True, size=10)
for row in summary.iter_rows():
    for cell in row:
        cell.font = cell.font.copy(name="Aptos", size=10)
        cell.alignment = Alignment(vertical="top", wrap_text=True)
        cell.border = Border(top=thin, bottom=thin, left=thin, right=thin)
summary.column_dimensions["A"].width = 30
summary.column_dimensions["B"].width = 100

wb.save(xlsx_path)
print(json.dumps({"xlsxPath": xlsx_path, "rows": len(payload["rows"])}, ensure_ascii=False))
`;

  await new Promise((resolve, reject) => {
    const child = spawn(pythonPath, ["-c", python], { stdio: ["ignore", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (data) => {
      stdout += data;
    });
    child.stderr.on("data", (data) => {
      stderr += data;
    });
    child.on("close", (code) => {
      if (code === 0) {
        console.log(stdout.trim());
        resolve();
      } else {
        reject(new Error(stderr || `Python exited with code ${code}`));
      }
    });
  });
}

await fs.mkdir(mdDir, { recursive: true });
await fs.mkdir(rawDir, { recursive: true });

const source = JSON.parse(await fs.readFile(sourcePath, "utf8"));
const cache = await loadCache();
activeCache = cache;
const translated = [];
const rows = [];

for (const [index, skill] of source.skills.entries()) {
  const number = String(index + 1).padStart(3, "0");
  const baseName = `${number}-${safeSegment(skill.author_slug)}-${safeSegment(skill.slug || skill.title)}`;
  console.log(`processing ${index + 1}/${source.skills.length} ${skill.author_slug}/${skill.slug}`);

  const files = await fetchSkillFiles(skill);
  const readmeCn = shouldTranslate ? await translateMarkdown(files.readmeMd || "", cache) : skill.readme_cn || "";
  const skillCn = shouldTranslate ? await translateMarkdown(files.skillMd || "", cache) : "";

  const nextSkill = {
    ...skill,
    readme_path: files.readmePath || "",
    skill_path: files.skillPath || "",
    file_tree: files.tree,
    readme_md: files.readmeMd,
    skill_md: files.skillMd,
    readme_md_cn: readmeCn,
    skill_md_cn: skillCn,
  };
  translated.push(nextSkill);

  await fs.writeFile(path.join(rawDir, `${baseName}.README.md`), files.readmeMd || "", "utf8");
  await fs.writeFile(path.join(rawDir, `${baseName}.SKILL.md`), files.skillMd || "", "utf8");

  const absolutePath = path.join(mdDir, `${baseName}.md`);
  await fs.writeFile(absolutePath, buildMarkdown(nextSkill, index + 1), "utf8");
  rows.push({
    no: index + 1,
    title: skill.title,
    titleCn: skill.title_cn,
    category: skill.category,
    author: skill.author_name,
    url: skill.url,
    mdPath: absolutePath,
    relativeMdPath: path.relative(workspaceRoot, absolutePath),
  });

  if ((index + 1) % 5 === 0 || index === source.skills.length - 1) {
    await saveCache(cache);
    await fs.writeFile(
      translatedJsonPath,
      JSON.stringify(
        {
          source: "https://lawve.ai/en/skills",
          generated_at: new Date().toISOString(),
          count: translated.length,
          skills: translated,
        },
        null,
        2,
      ),
    );
  }
}

await saveCache(cache);
await fs.writeFile(
  translatedJsonPath,
  JSON.stringify(
    {
      source: "https://lawve.ai/en/skills",
      generated_at: new Date().toISOString(),
      count: translated.length,
      skills: translated,
    },
    null,
    2,
  ),
);
await buildWorkbook(rows, translated);

console.log(JSON.stringify({ mdDir, rawDir, xlsxPath, jsonPath: translatedJsonPath, count: rows.length }, null, 2));
