---
id: "9cc997fc-33f9-5b84-9a17-a2a75cd30c54"
title: "Legal Diagram"
title_cn: "法律图解"
slug: "legal-diagram"
url: "https://lawve.ai/@sam-zhai/skill/legal-diagram"
author: "Sam Zhai - 翟禹森"
author_slug: "sam-zhai"
category: "legal-operations"
language: "en"
license: "MIT"
jurisdictions: "INT"
status: "active"
source_index: 41
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 法律图解

原始名称：`Legal Diagram`  
作者：Sam Zhai - 翟禹森  
分类：legal-operations  
来源：https://lawve.ai/@sam-zhai/skill/legal-diagram  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

一张图片可能胜过一千个字。法律工作肯定需要很多文字。那么为什么要用文字来描述图像呢？停止重读文件。开始看事情。

最新更新：https://github.com/nanparth/ai-skill-hub

/legal-diagram 将密集的法律文档、事项说明和头脑风暴转储转换为清晰、可编辑的美人鱼图，使战略制定和沟通更加清晰、快捷。使用时间表和甘特图来揭示时间顺序差距，使用流程图和决策树来绘制诉讼路径和谈判可能性，并使用实体关系或类图来阐明所有权、控制权和公司结构。

上传源文件（.md、.docx、.pdf、.xlsx 或 .pptx）、粘贴文本或描述您正在处理的问题。 /legal-diagram 引导您通过一个简单的交互流程来设置技能并创建时间表、甘特图、组织结构图、义务清单、诉讼流程图、决策树、公司结构图等。

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

A picture may be worth a thousand words. Legal work sure runs on lots of words. So why words when picture? Stop rereading the files. Start seeing the matter.

Latest updates at: https://github.com/nanparth/ai-skill-hub

/legal-diagram turns dense legal documents, matter notes, and brainstorming dumps into clear, editable Mermaid diagrams to make strategizing and communicating clearer and faster. Use timelines and Gantt charts to uncover chronology gaps, flowcharts and decision trees to map litigation paths and negotiation possibilities, and entity relationship or class diagrams to clarify ownership, control, and corporate structure.

Upload source files (.md, .docx, .pdf, .xlsx, or .pptx), paste text, or describe the issue you’re working on. /legal-diagram guides you through a simple interactive process to setup the skill and create timelines, Gantt charts, org charts, obligation checklists, litigation flowcharts, decision trees, corporate structure diagrams, and more.

---

## SKILL.md Original

---
name: legal-diagram
description: 'Generate Mermaid diagrams for legal purposes. Use when the user says "generate a legal diagram", "diagram this contract/matter/process", "map the parties", "create a timeline of events", "compliance obligation map", "visualise this deal", "create a flowchart for", "draw the corporate structure", "funds flow diagram", "privilege decision tree", "export as HTML diagram", or "legal mermaid diagram". Also use when the user supplies a legal document (.md/.docx/.pdf/.xlsx/.pptx) and asks for a visual, chart, map, or diagram.'
effort: high
context: full
argument-hint: '[file path | "pasted text" | matter description] [diagram type] [--guided] [--direct] [--html] [--tutorial]'
---

# /legal-diagram

Standalone skill: turn legal material into a context-appropriate Mermaid diagram, with an optional downloadable HTML figure. A structure-preserving Python engine extracts a typed ground truth; directive-driven LLM enrichment fills the gaps; a selector picks the diagram type; the diagram is generated natively.

## Routing gate

Read user's message and pick a branch.

1. **Tutorial** — signals: "tutorial", "show me how", "first time", "demo", "walk me through", or a first-run question. → Load `workflows/tutorial.md`.
2. **Setup** — signals: "check setup", "install deps", "is setup ready". → Load `shared/setup-check.md`, run `check_setup.py`, report.
3. **Direct** (power user, at most one interruption) — an explicit fast signal: a diagram type named (plain or technical), "just make it", "just generate", "quick", `--direct`, or `--fast`. → Load `workflows/direct.md`.
4. **Guided** (default, interactive) — `--guided`, "step by step", "build it with me", or any real request with no fast signal (a file, pasted text, or a matter description). → Load `workflows/guided.md`.

**Lane choice.** For a real diagram request with no explicit lane signal, ask one plain-language line before loading: "Want me to just make the diagram, or build it with you step by step?" — "just make it" → `workflows/direct.md`; "step by step" → `workflows/guided.md`; default to step by step. Skip this question when a lane signal is already present. Both lanes share `workflows/generation.md` for the actual build.

**User-facing language (casual-friendly).** Never show Mermaid-internal type names to user. Use the plain-language names in `shared/diagram-type-map.md` § Plain-language names — "timeline", "org chart", "flowchart", "obligation checklist", and so on. Accept plain-word requests too ("make me an org chart") and map them through the same glossary. Legal vocabulary is fine; technical diagram vocabulary stays internal.

## How it works (two-pass extraction)

Pass 1 is deterministic Python (`extract_entities.py`): it normalizes any format into a structure-preserving model, runs a detector registry, and emits a **manifest** (entities + flagged hints + a coverage map + an enrichment-directive list). The script never guesses an entity; an unparseable signal becomes a hint, not a false entity.

Pass 2 is the LLM (`workflows/extract.md`): it executes the manifest's directives against the flagged snippets only, populating `risk_level`, `decision_points`, hierarchies, and cross-links, and may populate a field only with textual support. Then `diagram_selector.py` picks the type and the diagram is generated.

## Scripts

|Script|Role|
|-----------------------------|-------------------------------------------------|
|`scripts/check_setup.py`|Dependency check → `{ok, missing[], installed[]}`|
|`scripts/extract_entities.py`|Orchestrator: normalize → detect → manifest JSON|
|`scripts/diagram_selector.py`|Enriched extraction + intent → recommended type|
|`scripts/render_html.py`|Mermaid + FigureDescription → standalone HTML|

`scripts/normalize/` (format adapters) and `scripts/extraction/` (candidate harvesters, resolver, and materializer) are libraries used by the orchestrator. Install deps once: `pip install -r requirements.txt -c constraints.txt` for release-verified versions, or omit `-c constraints.txt` for broad compatibility testing.

## Workflow loading map

|Need|File|
|------------------------------------------------------------|--------------------------|
|First-run walkthrough + setup gate|`workflows/tutorial.md`|
|Interactive default lane (digest/elicit → menu)|`workflows/guided.md`|
|Power-user lane (read all signals, hard cap 1)|`workflows/direct.md`|
|Shared generation core (select → guard → generate → deliver)|`workflows/generation.md`|
|Two-pass extraction (called by both lanes)|`workflows/extract.md`|
|No-docs intake sets + delivery pattern|`shared/elicitation.md`|
|Standalone HTML figure export|`workflows/html-export.md`|

## Reference loading map

|Need|File|
|-----------------------------------------------------------------|-------------------------------------|
|Dependency-check procedure|`shared/setup-check.md`|
|Per-type guards, entity normalization, parser bugs|`shared/parser-guards.md`|
|FigureDescription fields, captions, legends, risk rubric, caveats|`shared/figure-description-schema.md`|
|30 legal categories → Mermaid type|`shared/diagram-type-map.md`|
|Semantic node categories, palette, CSS class naming|`shared/node-styles.md`|
|Field catalogue + detection tiers + signals|`references/extraction-schema.md`|

## Output

Output is CLI display only: the fenced Mermaid block renders as an artifact in the Claude web app and as syntax-highlighted code in the CLI. No vault note is written. After the block, HTML export is always offered with default Y; the export escapes matter text, runs Mermaid in strict mode, uses vendored Mermaid when present, and loads the pinned CDN fallback only when explicitly enabled. Full output rules: `workflows/generation.md` § Step 5.

## Boundaries

Mermaid is for thinking, planning, explaining, and generating structure. It is not legal advice, not a court-ready exhibit, and not a substitute for legal writing. Every diagram carries a caveat line. Confidential material stays in tools approved for that matter.
