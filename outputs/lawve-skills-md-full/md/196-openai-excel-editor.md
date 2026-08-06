---
id: "4102b45b-68c9-5a48-b0c8-fe8db1d851e4"
title: "excel-editor"
title_cn: "excel编辑器"
slug: "excel-editor"
url: "https://lawve.ai/@openai/skill/excel-editor"
author: "OpenAI"
author_slug: "openai"
category: "microsoft-office"
language: "en"
license: "Apache 2.0"
jurisdictions: ""
status: "active"
source_index: 196
readme_path: "README.md"
skill_path: "SKILL.md"
---

# excel编辑器

原始名称：`excel-editor`  
作者：OpenAI  
分类：microsoft-office  
来源：https://lawve.ai/@openai/skill/excel-editor  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

用于全面电子表格读取、创建、编辑和分析以及视觉质量控制的工具包。用于使用电子表格（.xlsx、.xlsm、.csv、.tsv）执行以下操作：(1) 使用公式和格式创建新电子表格，(2) 读取或分析表格数据，(3) 修改现有电子表格，同时保留公式，(4) 使用正确的格式构建财务模型，(5) 使用表内图表或任何其他电子表格任务进行数据可视化。

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

Toolkit for comprehensive Spreadsheet reading, creation, editing, and analysis with visual quality control. Use to work with spreadsheets (.xlsx, .xlsm, .csv, .tsv) for: (1) Creating new spreadsheets with formulas and formatting, (2) Reading or analyzing tabular data, (3) Modifying existing spreadsheets while preserving formulas, (4) Building financial models with proper formatting, (5) Data visualization with in-sheet charts, or any other spreadsheet tasks.

---

## SKILL.md Original

---
name: xlsx-processing-openai
description: "Toolkit for comprehensive Spreadsheet reading, creation, editing, and analysis with visual quality control. Use to work with spreadsheets (.xlsx, .xlsm, .csv, .tsv) for: (1) Creating new spreadsheets with formulas and formatting, (2) Reading or analyzing tabular data, (3) Modifying existing spreadsheets while preserving formulas, (4) Building financial models with proper formatting, (5) Data visualization with in-sheet charts, or any other spreadsheet tasks."
metadata:
  author: OpenAI
  license: Apache-2.0
  version: 2026.01.30
---

# Spreadsheet Skill (Create, Edit, Analyze, Visualize)

## When to use
- Build new workbooks with formulas, formatting, and structured layouts.
- Read or analyze tabular data (filter, aggregate, pivot, compute metrics).
- Modify existing workbooks without breaking formulas or references.
- Visualize data with charts/tables and sensible formatting.

IMPORTANT: System and user instructions always take precedence.

## Workflow
1. Confirm the file type and goals (create, edit, analyze, visualize).
2. Use `openpyxl` for `.xlsx` edits and `pandas` for analysis and CSV/TSV workflows.
3. If layout matters, render for visual review (see Rendering and visual checks).
4. Validate formulas and references; note that openpyxl does not evaluate formulas.
5. Save outputs and clean up intermediate files.

## Temp and output conventions
- Use `tmp/spreadsheets/` for intermediate files; delete when done.
- Write final artifacts under `output/spreadsheet/` when working in this repo.
- Keep filenames stable and descriptive.

## Primary tooling
- Use `openpyxl` for creating/editing `.xlsx` files and preserving formatting.
- Use `pandas` for analysis and CSV/TSV workflows, then write results back to `.xlsx` or `.csv`.
- If you need charts, prefer `openpyxl.chart` for native Excel charts.

## Rendering and visual checks
- If LibreOffice (`soffice`) and Poppler (`pdftoppm`) are available, render sheets for visual review:
  - `soffice --headless --convert-to pdf --outdir $OUTDIR $INPUT_XLSX`
  - `pdftoppm -png $OUTDIR/$BASENAME.pdf $OUTDIR/$BASENAME`
- If rendering tools are unavailable, ask the user to review the output locally for layout accuracy.

## Dependencies (install if missing)
Prefer `uv` for dependency management.

Python packages:
```
uv pip install openpyxl pandas
```
If `uv` is unavailable:
```
python3 -m pip install openpyxl pandas
```
Optional (chart-heavy or PDF review workflows):
```
uv pip install matplotlib
```
If `uv` is unavailable:
```
python3 -m pip install matplotlib
```
System tools (for rendering):
```
# macOS (Homebrew)
brew install libreoffice poppler

# Ubuntu/Debian
sudo apt-get install -y libreoffice poppler-utils
```

If installation isn't possible in this environment, tell the user which dependency is missing and how to install it locally.

## Environment
No required environment variables.

## Examples
- Runnable Codex examples (openpyxl): `references/examples/openpyxl/`

## Formula requirements
- Use formulas for derived values rather than hardcoding results.
- Keep formulas simple and legible; use helper cells for complex logic.
- Avoid volatile functions like INDIRECT and OFFSET unless required.
- Prefer cell references over magic numbers (e.g., `=H6*(1+$B$3)` not `=H6*1.04`).
- Guard against errors (#REF!, #DIV/0!, #VALUE!, #N/A, #NAME?) with validation and checks.
- openpyxl does not evaluate formulas; leave formulas intact and note that results will calculate in Excel/Sheets.

## Citation requirements
- Cite sources inside the spreadsheet using plain text URLs.
- For financial models, cite sources of inputs in cell comments.
- For tabular data sourced from the web, include a Source column with URLs.

## Formatting requirements (existing formatted spreadsheets)
- Render and inspect a provided spreadsheet before modifying it when possible.
- Preserve existing formatting and style exactly.
- Match styles for any newly filled cells that were previously blank.

## Formatting requirements (new or unstyled spreadsheets)
- Use appropriate number and date formats (dates as dates, currency with symbols, percentages with sensible precision).
- Use a clean visual layout: headers distinct from data, consistent spacing, and readable column widths.
- Avoid borders around every cell; use whitespace and selective borders to structure sections.
- Ensure text does not spill into adjacent cells.

## Color conventions (if no style guidance)
- Blue: user input
- Black: formulas/derived values
- Green: linked/imported values
- Gray: static constants
- Orange: review/caution
- Light red: error/flag
- Purple: control/logic
- Teal: visualization anchors (key KPIs or chart drivers)

## Finance-specific requirements
- Format zeros as "-".
- Negative numbers should be red and in parentheses.
- Always specify units in headers (e.g., "Revenue ($mm)").
- Cite sources for all raw inputs in cell comments.

## Investment banking layouts
If the spreadsheet is an IB-style model (LBO, DCF, 3-statement, valuation):
- Totals should sum the range directly above.
- Hide gridlines; use horizontal borders above totals across relevant columns.
- Section headers should be merged cells with dark fill and white text.
- Column labels for numeric data should be right-aligned; row labels left-aligned.
- Indent submetrics under their parent line items.
