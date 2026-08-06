---
id: "54c8f6db-67b9-586f-959a-8ef0c46f17ce"
title: "pdf-editor"
title_cn: "pdf编辑器"
slug: "pdf-editor"
url: "https://lawve.ai/@openai/skill/pdf-editor"
author: "OpenAI"
author_slug: "openai"
category: "adobe-acrobat"
language: "en"
license: "Apache 2.0"
jurisdictions: ""
status: "active"
source_index: 198
readme_path: "README.md"
skill_path: "SKILL.md"
---

# pdf编辑器

原始名称：`pdf-editor`  
作者：OpenAI  
分类：adobe-acrobat  
来源：https://lawve.ai/@openai/skill/pdf-editor  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

用于全面 PDF 阅读和创建以及视觉质量控制的工具包。用于处理 PDF（.pdf 文件）以执行以下操作：(1) 读取现有 PDF 或从现有 PDF 中提取内容，(2) 创建具有专业格式的新 PDF 文档，(3) 生成需要精确排版和设计的报告、文档或布局，或任何其他 PDF 阅读或生成任务。

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

Toolkit for comprehensive PDF reading and creation with visual quality control. Use to work with PDFs (.pdf files) for: (1) Reading or extracting content from existing PDFs, (2) Creating new PDF documents with professional formatting, (3) Generating reports, documents, or layouts that require precise typography and design, or any other PDF reading or generation tasks.

---

## SKILL.md Original

---
name: pdf-processing-openai
description: "Toolkit for comprehensive PDF reading, reviwing, and creation with visual quality control. Use to work with PDFs (.pdf files) for: (1) Reading or extracting content from existing PDFs, (2) Creating new PDF documents with professional formatting, (3) Generating reports, documents, or layouts that require precise typography and design, or any other PDF reading or generation tasks."
metadata:
  author: OpenAI
  license: Apache-2.0
  version: 2026.01.30
---

# PDF Skill

## When to use
- Read or review PDF content where layout and visuals matter.
- Create PDFs programmatically with reliable formatting.
- Validate final rendering before delivery.

## Workflow
1. Prefer visual review: render PDF pages to PNGs and inspect them.
   - Use `pdftoppm` if available.
   - If unavailable, install Poppler or ask the user to review the output locally.
2. Use `reportlab` to generate PDFs when creating new documents.
3. Use `pdfplumber` (or `pypdf`) for text extraction and quick checks; do not rely on it for layout fidelity.
4. After each meaningful update, re-render pages and verify alignment, spacing, and legibility.

## Temp and output conventions
- Use `tmp/pdfs/` for intermediate files; delete when done.
- Write final artifacts under `output/pdf/` when working in this repo.
- Keep filenames stable and descriptive.

## Dependencies (install if missing)
Prefer `uv` for dependency management.

Python packages:
```
uv pip install reportlab pdfplumber pypdf
```
If `uv` is unavailable:
```
python3 -m pip install reportlab pdfplumber pypdf
```
System tools (for rendering):
```
# macOS (Homebrew)
brew install poppler

# Ubuntu/Debian
sudo apt-get install -y poppler-utils
```

If installation isn't possible in this environment, tell the user which dependency is missing and how to install it locally.

## Environment
No required environment variables.

## Rendering command
```
pdftoppm -png $INPUT_PDF $OUTPUT_PREFIX
```

## Quality expectations
- Maintain polished visual design: consistent typography, spacing, margins, and section hierarchy.
- Avoid rendering issues: clipped text, overlapping elements, broken tables, black squares, or unreadable glyphs.
- Charts, tables, and images must be sharp, aligned, and clearly labeled.
- Use ASCII hyphens only. Avoid U+2011 (non-breaking hyphen) and other Unicode dashes.
- Citations and references must be human-readable; never leave tool tokens or placeholder strings.

## Final checks
- Do not deliver until the latest PNG inspection shows zero visual or formatting defects.
- Confirm headers/footers, page numbering, and section transitions look polished.
- Keep intermediate files organized or remove them after final approval.
