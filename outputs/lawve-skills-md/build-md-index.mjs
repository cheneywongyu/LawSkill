import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const workspaceRoot = "/Users/lilithium/Desktop/my-project";
const sourcePath = path.join(workspaceRoot, "outputs/lawve-skills-cn/lawve-skills-cn.json");
const outputDir = path.join(workspaceRoot, "outputs/lawve-skills-md");
const mdDir = path.join(outputDir, "md");
const xlsxPath = path.join(outputDir, "lawve-skills-md-index.xlsx");
const previewPath = path.join(outputDir, "lawve-skills-md-index-preview.png");

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

function buildMarkdown(skill, index) {
  const translated = skill.readme_cn?.trim()
    ? skill.readme_cn.trim()
    : "（源站没有提供 README，或翻译内容为空。）";
  const original = skill.readme?.trim()
    ? skill.readme.trim()
    : "(No README was available from the source page.)";

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
    `views: ${skill.views ?? 0}`,
    `downloads: ${skill.downloads ?? 0}`,
    `created_at: ${yamlString(skill.created_at)}`,
    `updated_at: ${yamlString(skill.updated_at)}`,
    `source_index: ${index}`,
    "---",
    "",
    `# ${skill.title_cn || skill.title}`,
    "",
    `原始名称：\`${skill.title}\`  `,
    `作者：${skill.author_name || ""}  `,
    `分类：${skill.category || ""}  `,
    `来源：${skill.url || ""}`,
    "",
    "## 中文 README",
    "",
    translated,
    "",
    "---",
    "",
    "## Original README",
    "",
    original,
    "",
  ].join("\n");
}

await fs.mkdir(mdDir, { recursive: true });

const source = JSON.parse(await fs.readFile(sourcePath, "utf8"));
const rows = [];

for (const [index, skill] of source.skills.entries()) {
  const number = String(index + 1).padStart(3, "0");
  const filename = `${number}-${safeSegment(skill.author_slug)}-${safeSegment(skill.slug || skill.title)}.md`;
  const absolutePath = path.join(mdDir, filename);
  const relativePath = path.relative(workspaceRoot, absolutePath);
  const markdown = buildMarkdown(skill, index + 1);
  await fs.writeFile(absolutePath, markdown, "utf8");
  rows.push({
    no: index + 1,
    title: skill.title,
    titleCn: skill.title_cn,
    category: skill.category,
    author: skill.author_name,
    url: skill.url,
    mdPath: absolutePath,
    relativeMdPath: relativePath,
  });
}

const workbook = Workbook.create();
const sheet = workbook.worksheets.add("Markdown Paths");
sheet.showGridLines = false;

const headers = ["序号", "Skill 名称", "中文名称", "分类", "作者", "来源 URL", "Markdown 路径", "相对路径"];
const values = rows.map((row) => [
  row.no,
  row.title,
  row.titleCn,
  row.category,
  row.author,
  row.url,
  row.mdPath,
  row.relativeMdPath,
]);

sheet.getRangeByIndexes(0, 0, values.length + 1, headers.length).values = [headers, ...values];
sheet.freezePanes.freezeRows(1);

const used = sheet.getRangeByIndexes(0, 0, values.length + 1, headers.length);
used.format.font.name = "Aptos";
used.format.font.size = 10;
used.format.verticalAlignment = "top";
used.format.wrapText = false;
used.format.borders = {
  insideHorizontal: { style: "thin", color: "#E2E8F0" },
  top: { style: "thin", color: "#CBD5E1" },
  bottom: { style: "thin", color: "#CBD5E1" },
};

const header = sheet.getRange("A1:H1");
header.format.fill.color = "#0F172A";
header.format.font.color = "#FFFFFF";
header.format.font.bold = true;
header.format.rowHeight = 28;
header.format.horizontalAlignment = "center";

sheet.getRange("A:A").format.columnWidth = 8;
sheet.getRange("B:B").format.columnWidth = 34;
sheet.getRange("C:C").format.columnWidth = 34;
sheet.getRange("D:D").format.columnWidth = 22;
sheet.getRange("E:E").format.columnWidth = 24;
sheet.getRange("F:F").format.columnWidth = 54;
sheet.getRange("G:G").format.columnWidth = 92;
sheet.getRange("H:H").format.columnWidth = 64;
sheet.getRange(`A2:A${values.length + 1}`).format.horizontalAlignment = "center";

const summary = workbook.worksheets.add("Summary");
summary.showGridLines = false;
summary.getRange("A1:B6").values = [
  ["项目", "值"],
  ["Markdown 文件数", rows.length],
  ["Markdown 目录", mdDir],
  ["源 JSON", sourcePath],
  ["说明", "每个 Markdown 文件包含元数据、中文 README 翻译和 Original README。Excel 只保留路径索引。"],
  ["空 README", source.skills.filter((skill) => !(skill.readme || "").trim()).map((skill) => skill.title).join(", ") || "无"],
];
summary.getRange("A1:B1").format.fill.color = "#0F172A";
summary.getRange("A1:B1").format.font.color = "#FFFFFF";
summary.getRange("A1:B1").format.font.bold = true;
summary.getRange("A:B").format.columnWidth = 44;
summary.getRange("A1:B6").format.wrapText = true;
summary.getRange("A1:B6").format.borders = { preset: "all", style: "thin", color: "#E2E8F0" };

const inspect = await workbook.inspect({
  kind: "table",
  range: "Markdown Paths!A1:H8",
  include: "values",
  tableMaxRows: 8,
  tableMaxCols: 8,
  tableMaxCellChars: 100,
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
  sheetName: "Markdown Paths",
  range: "A1:H15",
  scale: 1,
  format: "png",
});
await fs.writeFile(previewPath, new Uint8Array(await preview.arrayBuffer()));

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(xlsxPath);

console.log(JSON.stringify({ mdDir, xlsxPath, previewPath, count: rows.length }, null, 2));
