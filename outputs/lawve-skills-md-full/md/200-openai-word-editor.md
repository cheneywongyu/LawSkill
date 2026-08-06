---
id: "2bc05591-a384-5de6-97e3-659feb88b5f9"
title: "word-editor"
title_cn: "文字编辑器"
slug: "word-editor"
url: "https://lawve.ai/@openai/skill/word-editor"
author: "OpenAI"
author_slug: "openai"
category: "microsoft-office"
language: "en"
license: "Apache 2.0"
jurisdictions: ""
status: "active"
source_index: 200
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 文字编辑器

原始名称：`word-editor`  
作者：OpenAI  
分类：microsoft-office  
来源：https://lawve.ai/@openai/skill/word-editor  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

用于全面文档阅读和创建以及视觉质量控制的工具包。用于处理 Word 文档（.docx 文件）：(1) 从现有 DOCX 文件中读取或提取内容，(2) 创建具有专业格式的新 Word 文档，(3) 编辑需要精确排版和布局的文档，或任何其他 DOCX 读取或生成任务。

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

Toolkit for comprehensive document reading and creation with visual quality control. Use to work with Word documents (.docx files) for: (1) Reading or extracting content from existing DOCX files, (2) Creating new Word documents with professional formatting, (3) Editing documents requiring precise typography and layout, or any other DOCX reading or generation tasks.

---

## SKILL.md Original

---
name: docx-processing-openai
description: "Toolkit for comprehensive document reading, editing, and creation with visual quality control. Use to work with Word documents (.docx files) for: (1) Reading or extracting content from existing DOCX files, (2) Creating new Word documents with professional formatting, (3) Editing documents requiring precise typography and layout, or any other DOCX reading or generation tasks."
metadata:
  author: OpenAI
  license: Apache-2.0
  version: 2026.01.30
---

# DOCX Skill

## When to use
- Read or review DOCX content where layout matters (tables, diagrams, pagination).
- Create or edit DOCX files with professional formatting.
- Validate visual layout before delivery.

## Workflow
1. Prefer visual review (layout, tables, diagrams).
   - If `soffice` and `pdftoppm` are available, convert DOCX -> PDF -> PNGs.
   - Or use `scripts/render_docx.py` (requires `pdf2image` and Poppler).
   - If these tools are missing, install them or ask the user to review rendered pages locally.
2. Use `python-docx` for edits and structured creation (headings, styles, tables, lists).
3. After each meaningful change, re-render and inspect the pages.
4. If visual review is not possible, extract text with `python-docx` as a fallback and call out layout risk.
5. Keep intermediate outputs organized and clean up after final approval.

## Temp and output conventions
- Use `tmp/docs/` for intermediate files; delete when done.
- Write final artifacts under `output/doc/` when working in this repo.
- Keep filenames stable and descriptive.

## Dependencies (install if missing)
Prefer `uv` for dependency management.

Python packages:
```
uv pip install python-docx pdf2image
```
If `uv` is unavailable:
```
python3 -m pip install python-docx pdf2image
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

## Rendering commands
DOCX -> PDF:
```
soffice -env:UserInstallation=file:///tmp/lo_profile_$$ --headless --convert-to pdf --outdir $OUTDIR $INPUT_DOCX
```

PDF -> PNGs:
```
pdftoppm -png $OUTDIR/$BASENAME.pdf $OUTDIR/$BASENAME
```

Bundled helper:
```
python3 scripts/render_docx.py /path/to/file.docx --output_dir /tmp/docx_pages
```

## Quality expectations
- Deliver a client-ready document: consistent typography, spacing, margins, and clear hierarchy.
- Avoid formatting defects: clipped/overlapping text, broken tables, unreadable characters, or default-template styling.
- Charts, tables, and visuals must be legible in rendered pages with correct alignment.
- Use ASCII hyphens only. Avoid U+2011 (non-breaking hyphen) and other Unicode dashes.
- Citations and references must be human-readable; never leave tool tokens or placeholder strings.

## Final checks
- Re-render and inspect every page at 100% zoom before final delivery.
- Fix any spacing, alignment, or pagination issues and repeat the render loop.
- Confirm there are no leftovers (temp files, duplicate renders) unless the user asks to keep them.
