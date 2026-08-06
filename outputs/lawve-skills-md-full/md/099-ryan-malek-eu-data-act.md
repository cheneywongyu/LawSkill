---
id: "0964d622-0a58-52b8-b7dd-e8cff593ab36"
title: "EU Data Act"
title_cn: "欧盟数据法"
slug: "eu-data-act"
url: "https://lawve.ai/@ryan-malek/skill/eu-data-act"
author: "Ryan Malek"
author_slug: "ryan-malek"
category: "compliance"
language: "en"
license: "AGPL 3.0"
jurisdictions: "EU"
status: "active"
source_index: 99
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 欧盟数据法

原始名称：`EU Data Act`  
作者：Ryan Malek  
分类：compliance  
来源：https://lawve.ai/@ryan-malek/skill/eu-data-act  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

# 欧盟数据法案技能

为就欧盟数据法案提供咨询的律师提供面向工作流程的技能
（条例（欧盟）2023/2854）。

该技能可在五个工作流程中生成律师风格的 Word 输出 -
分类、起草、查找、分析和审核——逐字引用
来自捆绑源文本（法规 2023/2854 和 EC FAQ v1.4）以及
指出委员会的示范合同条款（建议、
2025 年 11 月 19 日）直接咨询。

**作者：** 瑞恩·马利克
**反馈/问题：** [LinkedIn](https://www.linkedin.com/in/theryanmalek/)
**分发方式：** Github、Counselcoder.com、Lawvable
**项目站点：** [counselcoder.com](https://counselcoder.com)
**许可证：** AGPL-3.0（参见“许可证”）
**这不是法律建议。** 请参阅“许可证”以获取完整的免责声明。

---

## 这是给谁的

内部法律顾问和外部从业人员就欧盟数据法案提供咨询
合规性——包括工业物联网、汽车、医疗设备、
SaaS、金融服务和云客户端。

该技能假设用户是一名合格的律师。它没有解释
GDPR 基础知识、SaaS 的含义或律师已经了解的其他概念。

## 它的作用

五个工作流程，每个工作流程都有自己的参考文件：
| Mode      | Trigger                                                                         | Output (Word)                                              |
|-----------|---------------------------------------------------------------------------------|------------------------------------------------------------|
| classify  | "Is this offering a connected product / related service / DPS / overlap?"      | Classification memo with reasoning                         |
| draft     | "Draft me [pre-contract disclosure / Art. 25 clauses / refusal letter / etc.]" | Editable Word document, marked as starting point           |
| lookup    | "What does Article X say?" or "What is the deadline for Y?"                    | Verbatim quote + FAQ tie-ins + cross-refs                  |
| analyze   | "Can my client refuse on trade-secret grounds here?"                            | Structured legal analysis applying the framework           |
| audit     | "Compare this offering against the regulation"                                  | Gap-analysis checklist with severity flags                 |
技能始终：

- 在起草之前询问特定事项的事实（侧面建议、部门、成员国），而不是依赖全局配置。
- 当事实触发汽车/医疗/DORA/NIS2/AI法案/CRA/其他部门法律时，出现**部门重叠警告**。
- 逐字引用“assets/source/*”（无记忆释义）。
- 在依赖它的每个输出中将**委员会常见问题解答视为非权威**。
- 在每个 Word 输出中附加简短的 **免责声明**。

## 它不做什么

- **无法律建议。** 该技能会生成律师审阅的草稿。
- **无部门特别法。** 相邻制度（Reg. 2018/858、MDR、DORA、NIS2、AI Act、CRA 等）已标记，未涵盖。
- **没有成员国实施法。** 技能要点为艺术。 37个主管部门；国家覆盖必须进行独立检查。
- **无多语言输出。** 仅英语。使用您自己的大模型进行翻译。
- **无自动源更新。** 该技能是版本化的静态快照。货币通过已验证的印章和新的 Lawvable 版本进行检查。

## 安装

### 克劳德代码（一条命令）
```bash
git clone https://github.com/counselos/eu-data-act ~/data-act-skill
cd ~/data-act-skill
bash install.sh
```
该脚本将文件夹符号链接到“~/.claude/skills/data-act-ryan-malek/”（通过描述自动触发），并添加“~/.claude/commands/data-act-ryan-malek.md”（显式“/data-act-ryan-malek”斜杠命令）。设置“COPY=1”以安装固定副本而不是符号链接。

使用“bash install.sh --check”进行验证。使用“bash install.sh --uninstall”卸载。

### 其他平台

- **Claude Agent SDK** — 相同的文件夹布局；通过SDK的技能目录进行注册。
- **Codex CLI** — 无本地技能发现；运行“codex”时“cd”到文件夹中，或者使用“Use the Skill at /path/to/data-act-ryan-malek/SKILL.md ...”打开提示。
- **根本不需要代理** — 直接打开模板和参考文件。 Python 脚本独立运行。

### 依赖关系

**Pandoc**（用于 Word 导出）：
```bash
# macOS
brew install pandoc

# Linux
sudo apt-get install pandoc
```
Word 导出使用 pandoc 和参考模板 (`assets/styles/lawyer-reference.docx`) 来实现正确的 Calibri/海军标题/页码/表格网格样式。如果没有 pandoc，“/data-act-ryan-malek”适用于聊天答案和查找，但 Word 导出步骤会失败，并显示清晰的安装消息。

**Python** (3.10+) 和这些包（仅当脚本运行时）：
```bash
pip install python-docx pypdf
```
该技能可以离线使用。任何最终用户功能都不需要网络访问。

## 如何使用

两种调用方式，均支持：

### 斜线命令（显式）
```
/data-act-ryan-malek                                      ← shows the mode menu
/data-act-ryan-malek classify [offering description]      ← classify mode
/data-act-ryan-malek draft [what to draft]                ← draft mode
/data-act-ryan-malek lookup [Art. 25(2)(a)]               ← verbatim lookup
/data-act-ryan-malek analyze [scenario]                   ← apply law to facts
/data-act-ryan-malek audit [existing offering]            ← gap analysis
```
### 自动触发（隐式）

只需描述任务即可。该技能的描述与以下短语匹配：

> “我需要根据《数据法》对客户的联网仪表进行分类。”
>
> “给我起草一份第 25 条合同条款。”
>
> “第 25(2)(g) 条有何规定？”
>
> “我的客户可以以商业秘密为由拒绝此访问请求吗？”

模型自动调用该技能。

没有设置。该技能是开箱即用的零配置。

**默认情况下，交付内容存在于聊天中。** 聊天回答后，该技能会提供导出到 Word 的功能。默认情况下，Word 文件会保存到律师的当前工作目录中的“./Data Actoutputs/{date}_{type}.docx”下，而不会保存在技能文件夹中。律师可以通过以下方式保留不同的位置：
```
/data-act-ryan-malek save-here          # always save to current folder, don't ask
/data-act-ryan-malek save-to-desktop    # always save to ~/Desktop/Data Act outputs/
/data-act-ryan-malek ask-where-to-save  # ask each time (default)
```
## 更新模型

此技能是法规 (EU) 2023/2854、委员会数据法常见问题解答和相关来源的**版本化静态快照**。它不会在您的计算机上自动更新。更新通过新的 Lawvable 版本进行。

**如何保持最新状态：**

1. **当欧盟委员会发布新的常见问题解答版本、理事会通过修正案或部门指南变更影响捆绑材料时，就会发布新版本**。每个版本都会更新“CHANGELOG.md”和“_versions.json”验证日期。
2. **Lawvable 分发新版本。** 更新通知显示在您的 Lawvable 客户端中。要获取最新版本，请通过 Lawvable 重新下载。您的问题文件夹和 Word 输出保持不变。
3. **每个可交付成果都印有“来源已验证[日期]”行。** 这出现在每个聊天答案和 Word 备忘录的末尾，并带有实时 EUR-Lex 和 EC 常见问题解答 URL。如果您觉得标记的日期很旧（超过几个月），请在依赖输出之前重新下载该技能。已验证的戳记是您需要的唯一信号；您不必监视任何东西。

静态快照模型是经过深思熟虑的：它使安装保持简单，绝不让后台进程接触您的工作，并将过时信号直接放入您可以看到的工作产品中。

## 每个下载者都是其副本的维护者

原始创建者在分发后不会维护、更新、监控或支持技能的副本。每个下载者：

- 对其副本的流通性和准确性承担全部责任。
- 可以在 AGPL-3.0 许可证下自由修改、分叉和重新分发。请注意，AGPL-3.0 是强 Copyleft：衍生作品（包括作为网络服务运行的作品）必须在 AGPL-3.0 下发布，并且源代码可供用户使用。
- 应该从他们为客户制作的输出中删除原始创建者的名字（Word 页脚已经没有归属）。

这是设计使然——该技能是您实践的起点，而不是您订阅的服务。

## 文件夹布局
```
data-act/
├── SKILL.md                # Orchestrator (read first)
├── LICENSE                 # AGPL-3.0 + legal-advice disclaimer
├── README.md               # This file
├── CHANGELOG.md            # Version-only entries
├── install.sh              # One-command install for Claude Code
├── config.json             # output_dir preference (cwd / desktop / custom path)
├── commands/
│   └── data-act-ryan-malek.md   # Slash-command definition (/data-act-ryan-malek)
├── references/             # Knowledge layer, read on demand
├── assets/
│   ├── source/             # Verbatim regulation, FAQ; SCC pointer
│   ├── templates/          # Drafting starters (md → Word via pandoc)
│   ├── styles/             # lawyer-reference.docx for pandoc styling
│   ├── decision-trees/     # Walkable Q&A
│   └── examples/           # Worked examples
└── scripts/                # Python helpers
```
## 资源捆绑

- 2023 年 12 月 13 日第 (EU) 2023/2854 号法规（数据法）——逐字文本
- 欧盟委员会关于数据法案 v1.4 的常见问题解答，2026 年 1 月 22 日 — 逐字文本
- 委员会“数据法案解释”页面 — 快照
- 委员会关于标准合同条款/示范合同条款（附件）的建议，2025 年 11 月 19 日 — **仅结构化指针**（`assets/source/model-contractual-terms.md`）；规范的 PDF 位于委员会的网站上，应直接查阅条款文本

前三个是根据各自的公共信息制度重新分发的。该建议被引用但未被重新分发。

## 版本控制

语义版本控制。主要版本涉及实质性常见问题解答修订、法规修订或范围变更。次要添加模板、示例、参考。拼写错误和澄清的补丁。

本次发布：v1.0.0。请参阅“CHANGELOG.md”。

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

# EU Data Act Skill

A workflow-oriented skill for lawyers advising on the EU Data Act
(Regulation (EU) 2023/2854).

The skill produces lawyer-style Word output across five workflows —
classification, drafting, lookup, analysis, and audit — citing verbatim
from bundled source texts (Regulation 2023/2854 and EC FAQ v1.4) and
pointing to the Commission's model contractual terms (Recommendation,
19 November 2025) for direct consultation.

**Author:** Ryan Malek
**Feedback / questions:** [LinkedIn](https://www.linkedin.com/in/theryanmalek/)
**Distributed via:** Github, Counselcoder.com, Lawvable
**Project site:** [counselcoder.com](https://counselcoder.com)
**License:** AGPL-3.0 (see `LICENSE`)
**This is not legal advice.** See `LICENSE` for the full disclaimer.

---

## Who this is for

In-house counsel and external practitioners advising on EU Data Act
compliance — including industrial IoT, automotive, medical device,
SaaS, financial services, and cloud clients.

The skill assumes the user is a qualified lawyer. It does not explain
GDPR basics, what SaaS means, or other concepts a lawyer already knows.

## What it does

Five workflows, each with its own reference file:

| Mode      | Trigger                                                                         | Output (Word)                                              |
|-----------|---------------------------------------------------------------------------------|------------------------------------------------------------|
| classify  | "Is this offering a connected product / related service / DPS / overlap?"      | Classification memo with reasoning                         |
| draft     | "Draft me [pre-contract disclosure / Art. 25 clauses / refusal letter / etc.]" | Editable Word document, marked as starting point           |
| lookup    | "What does Article X say?" or "What is the deadline for Y?"                    | Verbatim quote + FAQ tie-ins + cross-refs                  |
| analyze   | "Can my client refuse on trade-secret grounds here?"                            | Structured legal analysis applying the framework           |
| audit     | "Compare this offering against the regulation"                                  | Gap-analysis checklist with severity flags                 |

The skill always:

- Asks for matter-specific facts (side advised, sector, member state) before drafting, rather than relying on global config.
- Surfaces a **sectoral overlay warning** when facts trigger automotive / medical / DORA / NIS2 / AI Act / CRA / other sectoral law.
- Cites **verbatim** from `assets/source/*` (no paraphrase from memory).
- Frames the **Commission FAQ as non-authoritative** in every output that relies on it.
- Appends a short **disclaimer** to every Word output.

## What it does not do

- **No legal advice.** The skill produces drafts the lawyer reviews.
- **No sectoral lex specialis.** Adjacent regimes (Reg. 2018/858, MDR, DORA, NIS2, AI Act, CRA, etc.) are flagged, not covered.
- **No member-state implementing law.** Skill points to Art. 37 competent authorities; national overlays must be checked independently.
- **No multilingual output.** English only. Use your own LLM for translation.
- **No automatic source updates.** The skill is a versioned static snapshot. Currency is checked through the verified-as-of stamp and new Lawvable releases.

## Install

### Claude Code (one command)

```bash
git clone https://github.com/counselos/eu-data-act ~/data-act-skill
cd ~/data-act-skill
bash install.sh
```

The script symlinks the folder to `~/.claude/skills/data-act-ryan-malek/` (auto-trigger by description) and adds `~/.claude/commands/data-act-ryan-malek.md` (explicit `/data-act-ryan-malek` slash command). Set `COPY=1` to install a fixed copy instead of symlinks.

Verify with `bash install.sh --check`. Uninstall with `bash install.sh --uninstall`.

### Other platforms

- **Claude Agent SDK** — same folder layout; register via the SDK's skill directory.
- **Codex CLI** — no native skill discovery; either `cd` into the folder when running `codex`, or open the prompt with `Use the skill at /path/to/data-act-ryan-malek/SKILL.md ...`.
- **No agent at all** — open templates and reference files directly. Python scripts run standalone.

### Dependencies

**Pandoc** (for Word export):

```bash
# macOS
brew install pandoc

# Linux
sudo apt-get install pandoc
```

Word export uses pandoc with a reference template (`assets/styles/lawyer-reference.docx`) for proper Calibri / navy heading / page-number / table-grid styling. Without pandoc, `/data-act-ryan-malek` works for chat answers and lookups but the Word export step fails with a clear install message.

**Python** (3.10+) and these packages (only when scripts run):

```bash
pip install python-docx pypdf
```

The skill works offline. No network access is required for any end-user feature.

## How to use

Two invocation styles, both supported:

### Slash command (explicit)

```
/data-act-ryan-malek                                      ← shows the mode menu
/data-act-ryan-malek classify [offering description]      ← classify mode
/data-act-ryan-malek draft [what to draft]                ← draft mode
/data-act-ryan-malek lookup [Art. 25(2)(a)]               ← verbatim lookup
/data-act-ryan-malek analyze [scenario]                   ← apply law to facts
/data-act-ryan-malek audit [existing offering]            ← gap analysis
```

### Auto-trigger (implicit)

Just describe the task. The skill's description matches phrases like:

> "I need to classify my client's connected meter under the Data Act."
>
> "Draft me an Article 25 contract clause set."
>
> "What does Article 25(2)(g) say?"
>
> "Can my client refuse this access request on trade-secret grounds?"

The model invokes the skill automatically.

There is no setup. The skill is zero-config out of the box.

**The deliverable lives in chat by default.** After the chat answer, the skill offers to export to Word. Word files are saved to the lawyer's current working directory under `./Data Act outputs/{date}_{type}.docx` by default — never inside the skill folder. The lawyer can persist a different location with:

```
/data-act-ryan-malek save-here          # always save to current folder, don't ask
/data-act-ryan-malek save-to-desktop    # always save to ~/Desktop/Data Act outputs/
/data-act-ryan-malek ask-where-to-save  # ask each time (default)
```

## Update model

This skill is a **versioned static snapshot** of Regulation (EU) 2023/2854, the Commission Data Act FAQ, and related sources. It does not auto-update on your machine. Updates flow through new Lawvable releases.

**How you stay current:**

1. **A new release is published** when the European Commission ships a new FAQ version, when the Council adopts amendments, or when sectoral guidance changes affect the bundled materials. Each release updates `CHANGELOG.md` and the `_versions.json` verified-as-of date.
2. **Lawvable distributes new versions.** Update notifications surface in your Lawvable client. To get the latest, redownload through Lawvable. Your matter folders and Word outputs are untouched.
3. **Every deliverable stamps a "Sources verified [date]" line.** This appears at the end of every chat answer and Word memo, with the live EUR-Lex and EC FAQ URLs. If the stamped date looks old to you (more than a few months), redownload the skill before relying on the output. The verified-as-of stamp is the only signal you need; you do not have to monitor anything.

The static-snapshot model is deliberate: it keeps installation simple, never lets a background process touch your work, and puts the staleness signal directly into the work product where you can see it.

## Each downloader is the maintainer of their copy

The original creator does not maintain, update, monitor, or support copies of the Skill after distribution. Each downloader:

- Is solely responsible for the currency and accuracy of their copy.
- May freely modify, fork, and redistribute under the AGPL-3.0 license. Note that AGPL-3.0 is strong copyleft: derivative works (including those run as a network service) must be released under AGPL-3.0 with source available to users.
- Should remove the original creator's name from outputs they produce for clients (the Word footer is already clean of attribution).

This is by design — the skill is a starting point for your practice, not a service you are subscribing to.

## Folder layout

```
data-act/
├── SKILL.md                # Orchestrator (read first)
├── LICENSE                 # AGPL-3.0 + legal-advice disclaimer
├── README.md               # This file
├── CHANGELOG.md            # Version-only entries
├── install.sh              # One-command install for Claude Code
├── config.json             # output_dir preference (cwd / desktop / custom path)
├── commands/
│   └── data-act-ryan-malek.md   # Slash-command definition (/data-act-ryan-malek)
├── references/             # Knowledge layer, read on demand
├── assets/
│   ├── source/             # Verbatim regulation, FAQ; SCC pointer
│   ├── templates/          # Drafting starters (md → Word via pandoc)
│   ├── styles/             # lawyer-reference.docx for pandoc styling
│   ├── decision-trees/     # Walkable Q&A
│   └── examples/           # Worked examples
└── scripts/                # Python helpers
```

## Sources bundled

- Regulation (EU) 2023/2854 of 13 December 2023 (the Data Act) — verbatim text
- European Commission FAQ on the Data Act, v1.4, 22 January 2026 — verbatim text
- Commission "Data Act Explained" page — snapshot
- Commission Recommendation on standard contractual clauses / model contractual terms (annex), 19 November 2025 — **structured pointer only** (`assets/source/model-contractual-terms.md`); the canonical PDF is at the Commission's site and should be consulted directly for clause text

The first three are redistributed under their respective public-information regimes. The Recommendation is referenced but not redistributed.

## Versioning

Semantic versioning. Major version bump on substantive FAQ revisions, regulation amendments, or scope changes. Minor for added templates, examples, references. Patch for typos and clarifications.

This release: v1.0.0. See `CHANGELOG.md`.

---

## SKILL.md Original

---
name: data-act-ryan-malek
description: EU Data Act (Regulation (EU) 2023/2854) skill for lawyers. Use when the user asks about Data Act classification, drafting, lookup, analysis, or audit. Triggers include "Data Act", "Regulation 2023/2854", "connected product", "related service", "data processing service", "DPS switching", "Article 3(2) pre-contract", "Article 25 contract", "trade-secret handbrake", "international government access", "Chapter VI cloud switching", "Article 50 timeline", "FAQ Q22a", "data holder", "exportable data", "functional equivalence", "Art. 4(10) competing product", and similar EU Data Act phrases. The skill produces lawyer-style Word output and cites verbatim from bundled regulation and FAQ source texts.
metadata:
  author: "Ryan Malek"
  license: "agpl-3.0"
  version: "2026-05-12"
---

1. Read `references/method.md`, `references/gotchas.md`, and `references/house-style.md` before answering.
2. When you need facts from the lawyer to proceed (mode, side advised, sector, timing, etc.), use the `AskUserQuestion` tool to present multiple-choice options as a clickable panel. Batch related questions into one call. Only fall back to plain-text A/B/C/D if `AskUserQuestion` is unavailable in the current client.
3. To answer a regulation or FAQ question, search `assets/source/regulation-2023-2854.md` (headings: `## Article N`, `## Recital N`) or `assets/source/faq-v1.4.md` (headings: `## FAQ Q[N|Na]`). Quote verbatim. Never paraphrase from memory; if the provision is not in the source files, report a skill defect.
4. To produce a drafting starter, fill the relevant template in `assets/templates/` (see `assets/templates/README.md`). Do not rewrite templates.
5. For depth on specific topics, read `references/trade-secret-ladder.md`, `references/art-13-unfair-terms.md`, `references/gdpr-overlay.md`, or `references/sectoral-overlays.md` only when relevant.
6. After the chat answer, offer Word export via `scripts/render_docx.py`. The script appends the disclaimer footer.
