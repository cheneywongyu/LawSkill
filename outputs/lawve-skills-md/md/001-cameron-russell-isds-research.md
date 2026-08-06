---
id: "f24bb7f8-6919-4c29-be2f-8d105eb63b5b"
title: "isds-research"
title_cn: "信息安全发展研究"
slug: "isds-research"
url: "https://lawve.ai/@cameron-russell/skill/isds-research"
author: "Cameron Russell"
author_slug: "cameron-russell"
category: "litigation"
language: "en"
license: "AGPL 3.0"
jurisdictions: ""
status: "active"
views: 26
downloads: 2
created_at: "2026-07-16T18:50:53.565890+02:00"
updated_at: "2026-07-16T18:50:53.565890+02:00"
source_index: 1
---

# 信息安全发展研究

原始名称：`isds-research`  
作者：Cameron Russell  
分类：litigation  
来源：https://lawve.ai/@cameron-russell/skill/isds-research

## 中文 README

# ISDS 研究技能

这是针对投资者与国家争端解决 (ISDS) 裁决的基于检索的研究援助。它通过从 ICSID、PCA 和其他官方来源检索**按需提供的主要文件**来回答有关投资争议案件和主题的问题，以在实际裁决文本中提供基本答案，并提供精确（段落/页）的引用。它遵守其所依赖的公共数据库的条款；它从不抓取或托管语料库，并且仅引用实际检索到的文本。

**不是法律建议。**

## 如何在克劳德中安装

1. **下载技能。** 在此处下载打包的 ZIP 文件：https://github.com/ccrnyc/isds-research/releases/latest/download/isds-research.zip （或者，从此存储库的 [发布页面](../../releases) 下载）。
2. **确保启用“云代码执行和文件创建”，以便技能可以运行**。在 Free/Pro/Max 计划中：转到“设置”>“功能”> 并确保“云代码执行和文件创建”已打开。在团队/企业计划中：您的组织所有者在组织设置 > 技能下启用技能。
3. **上传技能。** 进入自定义 > 技能，点击“+”或“添加”→“上传技能”，然后选择 ZIP。选择技能并将其打开。

要使用该技能，只需提出 ISDS 问题 - 例如*“Tecmed 诉墨西哥案中法庭如何阐明公平公正的待遇标准？”* 克劳德将自动调用该技能。

有关完整功能，请参阅下面的**网络要求**。

## 这里有什么

- `SKILL.md` — 代理技能：工作流程、合规护栏、归因/免责声明和黄金法则（基本，不要回忆）。
- `WRITEUP.md` — 设计说明：为什么以这种方式构建，如何评估（10 项裁决评估；版本 1.0 总体评级为 A−），以及 *Saluka*→*Macetex* 幻像引用发现。
- `scripts/fetch_icsid_award.py` — 列出 ICSID 案例页面上的文档，下载您选择的文档，显示其第一页，以便您可以确认它是正确的文档，然后提取段落感知文本（完整的 PDF，无截断），并带有可选的查询匹配。处理段落标记约定（`154.`和括号内的`[324]`，自动检测）和每个部分/章节编号重新启动（例如Macetx）：标题确认的重新启动产生章节相关引用（“第IV部分 - D章，第7段”）；无法识别的编号约定会触发明确的警告，要求退回到基于页面的引用。
- `scripts/query_unctad_excel.py` — 过滤本地 UNCTAD 完整数据 Excel 快照（`data/`）以查找“案例”问题：被告、条约、结果、违约、部门、规则、年份、仲裁员、自由文本的任意组合；提取 ICSID 案例编号（它们位于案例名称/链接文本内，而不是专用列）；标记快照数据假定已过时的行（“LIVE_CHECK”：在快照处待处理、后续待处理或最近活动）；并附加强制性数据新鲜度页脚（快照日期、贸发会议的非详尽警告，以及导航器“更新日期”日期的限制≤1×/天实时检查，离线时降级为“最后已知”）。
- `data/` — **您自己的 UNCTAD 官方完整数据 Excel 副本**存放在其中（2023 年 12 月 31 日发布的版本中有 1,332 个案例；实时导航器比它早运行约 2 年）。 **该文件不包含在本存储库中** — UNCTAD 的条款禁止重新分发；请参阅下面的下载部分。仅在本地用于非商业过滤，从未重新发布。

## 获取UNCTAD数据（必填，一次下载）

该技能的“哪些情况……”（枚举）功能在 UNCTAD 的官方全数据 Excel 上运行，**不包含在本存储库中**：UNCTAD 的[使用条款](https://investmentpolicy.unctad.org/pages/1048/terms-and-conditions-of-use) 允许个人、非商业使用，但禁止重新分发，因此每个用户都直接从 UNCTAD 下载自己的副本（免费，无注册）：

1.查看UNCTAD的[发布页面](https://investmentpolicy.unctad.org/publications/1303/investment-dispute-settlement-navigator-full-isds-data-release-as-of-31-12-2023-in-excel-format-)了解完整数据发布；截至撰写本文时，最新的是 **2023 年 12 月 31 日快照**：[直接下载](https://investmentpolicy.unctad.org/uploaded-files/document/UNCTAD-ISDS-Navigator-data-set-31December2023.xlsx)。
2. 将`.xlsx`放入该技能的`data/`文件夹中。在 Claude 聊天 (Cowork / claude.ai) 中，您只需**将文件上传到 Claude 并要求其将其保存到技能的“data/”文件夹中** — 然后 Claude 将在以后的会话中重复使用该文件，而无需重新上传。

如果您在没有文件的情况下运行技能，“query_unctad_excel.py”会打印这些相同的指令（“DATA_MISSING”），而不是神秘地失败。奖项检索（`fetch_icsid_award.py`）无需 Excel 即可运行；只有枚举需要它。

## 安装并运行
```
pip install requests pdfplumber openpyxl

# (first run) record your preferred language, asked once
python scripts/fetch_icsid_award.py --set-prefer-lang "English"

# 1) list every document on the case page (proceeding, title, date, languages)
python scripts/fetch_icsid_award.py --case "ARB(AF)/00/2" --list

# 2) select one, confirm it from its first page, and search it
python scripts/fetch_icsid_award.py --case "ARB(AF)/00/2" --select 1 --query "fair and equitable treatment"
```
第 2 步打印 CONFIRM 块（案例页标签、检测到的案例编号、首页文本），以便您可以在依赖文档之前对其进行验证，然后打印带有“para N (p.M)”引用的匹配段落，以及所需的 ICSID 归属和非法律建议免责声明。

**语言**被视为属性，而不是过滤器：奖项仅提供西班牙语/法语/等语言。是有效的结果。该工具会检索您的首选语言（如果存在）；如果没有，它不会默默地替换 - 它会列出文档*可用的语言，并询问您要如何继续（阅读现有的 ICSID 版本，或获取带有标记的、非权威的原文翻译），因为该页面并不总是确定哪种语言是权威的。使用 `--select N --lang "<语言>"` 提供选择。

## 网络要求

这些脚本直接获取文档和元数据，因此运行它们的环境需要对这些官方主机进行出站访问：

- `icsid.worldbank.org` — 案例详细信息页面
- `icsidfiles.worldbank.org` — 文档 PDF
- `investmentpolicy.unctad.org` — 您自己下载的 UNCTAD Excel，以及助手的新鲜度检查
- `pca-cpa.org` / `docs.pca-cpa.org` — PCA 案例页面和文档

**italaw 故意不在此列表中。** italaw 文档的默认路径是您在浏览器中手动下载它们（请参阅合规性说明） - 该工具不需要 italaw 网络访问权限，除非您明确批准门控、每个文档的回退。

**请将这些网站添加到您的允许列表中以使用该工具的完整功能。**

- **claude.ai / Cowork 团队或企业计划：** 网络访问由您的组织所有者控制。如果脚本报告被阻止的主机，请与所有者讨论是否可以将这些域添加到允许列表（或启用网络访问）。
- **Claude Code：** 在首次使用时批准每个域的网络提示，或在“settings.json”中预先允许“sandbox.network.allowedDomains”下的主机。

任何设置更改都是您自己进行的——该技能永远不会修改您的设置。这些域管理技能的*脚本*； Claude 的内置网络获取和 Chrome 中的可选 Claude 由您的 Claude 设置单独管理。

## 发现和数据新鲜度（优雅降级）

“哪些情况......”问题遵循**发现阶梯** - 每个梯级都会优雅地降级到下一个梯级，并且答案总是会揭示它所处的梯级：
1. **本地 UNCTAD Excel** (`scripts/query_unctad_excel.py`) — 截至快照日期（当前为 2023 年 12 月 31 日）的完整、可过滤的 UNCTAD 标记案例集。对于快照范围内的问题来说是主要且足够的。
2. **实时导航器搜索** — 用于快照后的新近度窗口。导航器的搜索/列表视图是 JS 渲染的，因此该梯级需要支持 JS 的浏览器渲染：**Chrome 中的 Claude 是可选的先决条件**（安装：https://code.claude.com/docs/en/chrome）。仅限有针对性的搜索；从不批量爬行。
3. **没有 Chrome** — 该技能*不会*失败或伪造完整性：它补充了 ICSID 自己的实时案例数据库（服务器渲染），用于 ICSID 子集和/或有针对性的网络搜索，明确标记为非详尽的指针而不是完整的集合。

命名案例查找永远不需要浏览器：各个 Navigator 案例页面由服务器呈现并通过数字 ID 进行解析 (`/investment-dispute-settlement/cases/{id}/{any-slug}`)。请注意新鲜度层：Excel 快照（2023 年 12 月 31 日）< 实时导航器（本身是一年两次的快照；当前为 2025 年 12 月 31 日）< 机构自己的实时页面 (ICSID/PCA) - 真正的当前状态仅来自最后一层。帮助程序的“LIVE_CHECK”标志标记快照数据假定已过时的行；它的新鲜度检查需要出站网络（在正常机器上工作/克劳德代码；一些沙箱会阻止它，在这种情况下它会报告“现在未验证”并继续）。

## 设计（RAG 管道）
```mermaid
flowchart TD
    Q["User question"] --> C{"Classify the question<br/>(disclosure classes 1&ndash;4)"}

    C -->|"enumeration:<br/>which cases?"| E["UNCTAD Excel helper<br/>(query_unctad_excel.py)<br/>+ mandatory DATA FRESHNESS footer"]
    E -->|"time scope past<br/>the snapshot"| CH["Live Navigator search (JS render,<br/>Claude in Chrome) or ICSID live list /<br/>targeted web search &mdash; flagged non-exhaustive"]
    C -->|"named case:<br/>holdings, quotes"| L["List documents on the case page<br/>(fetch_icsid_award.py --list)"]
    C -->|"full-corpus<br/>analytics"| X["Declared NOT completely answerable;<br/>labeled general-knowledge pointer;<br/>refer to ISLG / Jus Mundi"]

    L --> S["Select by title + date + proceeding<br/>(ask the user if ambiguous)"]
    S --> CF{"CONFIRM against the<br/>document's own first pages"}
    CF -->|"mismatch"| S
    CF -->|"match"| LANG{"Available in the user's<br/>preferred language?"}
    LANG -->|"no"| ASK["STOP &mdash; list available languages,<br/>ask how to proceed"]
    ASK --> EXT
    LANG -->|"yes"| EXT["Paragraph-aware extraction<br/>(marker-convention detection;<br/>section-relative cites on restarts)"]
    EXT --> V["Verify: every quote and pinpoint<br/>re-checked against the retrieved text"]
    V --> A["Grounded answer / memo:<br/>pinpoint cites, flags, freshness footer,<br/>attribution + disclaimer"]

    L -.->|"empty list / blocked host /<br/>delisted document"| F["Fallback ladder:<br/>1. institution page &rarr; 2. JS render &rarr;<br/>3. user-supplied file (italaw last-resort gate) &rarr;<br/>4. companion-decision grounding &rarr;<br/>5. unretrieved lead (disclosed)"]
    F -.-> CF
```
1. **发现** — 上面的阶梯：本地 UNCTAD Excel → JS 渲染的导航器搜索（Claude 在 Chrome 中）→ ICSID 实时列表/公开限制的有针对性的网络搜索。 ICSID 自己的 ICSID 案例数据库（许可机器人）；从未批量收获。
2. **识别** — 获取 ICSID 案例详细信息页面并将*所有*已发布的文档解析为结构化表格（会议记录、标题、日期和每种可用语言 + URL），而不是抓取“第一个英文 PDF”。
3. **确认** — 下载所选文档并阅读其第一页，以验证标题、当事人、案件编号和日期是否与预期文档相符，然后再依赖该文档。
4. **提取** — pdfplumber，逐页检测段落编号，以便答案带有精确引用（完整 PDF，无截断）。
5. **地面** — 仅根据检索到的文本进行回答；如果没有一点，请说出来。
6. **验证** — 在发送之前确认检索到的文本中出现的每个引用/段落。

## 这个工具的优点和缺点是什么

**做得很好：**可验证的研究。单文档问题（“*Tecmed* 如何对待比例性？”）得到基于已确认的原始文本的精确引用的答案。有界比较（“比较主题 A 上的 X、Y、Z”）得到相同的结果，加上所需的完整性检查，以标记（作为明确未经检查的线索）对主题进行全面处理所需的任何其他案例或权限。类别枚举（“哪些条约案例源于委内瑞拉国有化？”）在贸发会议的官方数据集上运行，并披露了其范围和快照日期。

**故意不：**语料库分析。这里没有被删除的奖项语料库（有意设计——请参阅合规说明），也无法访问订阅数据库（投资者国家法律指南、Jus Mundi、italaw 全文）。因此，诸如“主题Z被引用最多的案例”或“仲裁员N多久提出异议”之类的问题无法得到完全回答；该工具是这样说的，提供了一个明确标记的一般知识指针，并将用户引向为该工作构建的数据库。该工具的设计诚实地说明了其局限性：每个答案都说明了实际检查的内容和未检查的内容。

## 合规说明

- **ICSID** 条款允许查看/下载用于个人、非商业用途；没有再分发或衍生数据库。需要归属（脚本发出）。
- **UNCTAD** 仅是发现/元数据；它的机器人会阻止批量/训练爬虫，并且它的条款栏会编译/重新分发其数据集——因此它是在人工指导下或通过有针对性的“Claude-User”获取来使用的，从不批量收获。
- **italaw** 是**最后的手段，仅限于每个案例确认的后备**：首先是官方来源（ICSID/PCA）；默认路径是用户手动下载文档（italaw的条款明确允许手动浏览）；自动获取仅在每个文档人工确认的情况下发生，作为克劳德用户，每个批准一个文档，参考-请勿复制并记录。 italaw 内容永远不会进入任何构建/测试语料库。有关完整条件，请参阅 SKILL.md 中的 italaw 条目。
- 礼貌访问：描述性用户代理、请求之间的礼貌延迟、仅限单文档点播。

## 许可证

版权所有 (C) 2026 卡梅伦·拉塞尔 (ccrnyc)。根据 **GNU Affero 通用公共许可证 v3.0**（仅限 AGPL-3.0）获得许可 — 请参阅 [许可证](许可证)。该程序不附带任何保证。许可证仅涵盖技能的代码和文档；检索到的文件和贸发会议数据集仍受其来源条款的约束（参见合规性说明）。

## 已知限制

- `web_fetch`（无代码回退）将很长的 PDF 截断为约 120k 个字符，这会默默地删除长奖励的后面段落 - 文档深处的内容会从视图中消失。该脚本通过下载文件并使用 pdfplumber 提取来避免这种情况 - 在主机 (`icsidfiles.worldbank.org`) 可访问的地方运行它。请注意，“icsidfiles.worldbank.org”在裸域请求上返回 403，但通常提供真实的 PDF 路径；一些沙箱会阻止网络代理上的主机，在这种情况下在本地或支持网络的环境中运行。
- ICSID 案例详细信息页面在每个案例中呈现不一致：大多数在初始 HTML 中携带文档链接（简单的“请求”可以看到它们），但有些在客户端注入列表。当文档列表返回为空时，技能不会猜测 - 它会诊断原因并回退到支持 JS 的渲染或请求文档 URL（请参阅 SKILL.md 中的检索回退阶梯）。

---

## Original README

# ISDS Research skill

This is a retrieval-grounded research aid for investor-State dispute settlement (ISDS) awards. It answers questions on investment dispute cases and topics by retrieving **primary documents on demand** from ICSID, PCA, and other official sources to ground answers in the actual award text, with pinpoint (paragraph / page) citations. It complies with the terms of the public databases on which it relies; it never scrapes or hosts a corpus, and it cites only text it actually retrieved.

**Not legal advice.**

## How to install in Claude

1. **Download the skill.** Download the packaged ZIP file here: https://github.com/ccrnyc/isds-research/releases/latest/download/isds-research.zip (alternatively, download from this repo's [Releases page](../../releases)).
2. **Ensure "Cloud code execution and file creation" is enabled so skills can run**. On Free/Pro/Max plans: go to Settings > Capabilities > and make sure "Cloud code execution and file creation" is turned on. On Team/Enterprise plans: your organization Owner enables Skills under Organization settings > Skills.
3. **Upload the skill.** Go to Customize > Skills, click "+" or "Add"  → "Upload a skill", and select the ZIP. Select the skill and toggle it on.

To use the skill, just ask an ISDS question — e.g. *"How did the tribunal in Tecmed v. Mexico articulate the fair and equitable treatment standard?"* Claude will invoke the skill automatically.

For full functionality, see **Network requirements** below.

## What's here

- `SKILL.md` — the agent skill: workflow, compliance guardrails, attribution/disclaimer, and the golden rule (ground, don't recall).
- `WRITEUP.md` — design notes: why it's built this way, how it was evaluated (10-item adjudicated eval; version 1.0 graded overall A−), and the *Saluka*→*Methanex* phantom-citation finding.
- `scripts/fetch_icsid_award.py` — lists the documents on an ICSID case page, downloads the one you select, shows its first page(s) so you can confirm it is the right document, then extracts paragraph-aware text (full PDF, no truncation), with optional query matching. Handles both paragraph-marker conventions (`154. ` and bracketed `[324] `, auto-detected) and per-Part/Chapter numbering restarts (e.g. Methanex): heading-confirmed restarts yield section-relative cites ("PART IV - CHAPTER D, para 7"); unrecognized numbering conventions trigger an explicit warning to fall back to page-based cites.
- `scripts/query_unctad_excel.py` — filters the local UNCTAD full-data Excel snapshot (`data/`) for "which cases" questions: any combination of respondent, treaty, outcome, breach, sector, rules, year, arbitrator, free text; extracts ICSID case numbers (they live inside the case-name/link text, not a dedicated column); flags rows whose snapshot data is presumptively stale (`LIVE_CHECK`: pending at snapshot, follow-on pending, or recent activity); and appends a mandatory data-freshness footer (snapshot date, UNCTAD's non-exhaustive caveat, and a throttled ≤1×/day live check of the Navigator's "Updated as of" date, degrading to "last known" when offline).
- `data/` — where **your own copy** of UNCTAD's official full-data Excel lives (1,332 cases in the 31/12/2023 release; the live Navigator runs ~2 years ahead of it). **The file is not included in this repo** — UNCTAD's terms bar redistribution; see the download section below. Used locally for non-commercial filtering only, never republished.

## Get the UNCTAD data (required, one download)

The skill's "which cases…" (enumeration) features run on UNCTAD's official full-data Excel, which is **not included in this repo**: UNCTAD's [Terms of Use](https://investmentpolicy.unctad.org/pages/1048/terms-and-conditions-of-use) permit personal, non-commercial use but bar redistribution, so each user downloads their own copy directly from UNCTAD (free, no registration):

1. Check UNCTAD's [release page](https://investmentpolicy.unctad.org/publications/1303/investment-dispute-settlement-navigator-full-isds-data-release-as-of-31-12-2023-in-excel-format-) for the full-data release; as of this writing the latest is the **31/12/2023 snapshot**: [direct download](https://investmentpolicy.unctad.org/uploaded-files/document/UNCTAD-ISDS-Navigator-data-set-31December2023.xlsx).
2. Put the `.xlsx` in this skill's `data/` folder. In a Claude chat (Cowork / claude.ai), you can simply **upload the file to Claude and ask it to save it into the skill's `data/` folder** — Claude will then reuse it in later sessions without re-uploading.

If you run the skill without the file, `query_unctad_excel.py` prints these same instructions (`DATA_MISSING`) instead of failing cryptically. Award retrieval (`fetch_icsid_award.py`) works without the Excel; only enumeration needs it.

## Install & run

```
pip install requests pdfplumber openpyxl

# (first run) record your preferred language, asked once
python scripts/fetch_icsid_award.py --set-prefer-lang "English"

# 1) list every document on the case page (proceeding, title, date, languages)
python scripts/fetch_icsid_award.py --case "ARB(AF)/00/2" --list

# 2) select one, confirm it from its first page, and search it
python scripts/fetch_icsid_award.py --case "ARB(AF)/00/2" --select 1 --query "fair and equitable treatment"
```

Step 2 prints a CONFIRM block (case-page label, detected case number, first-page text) so you can verify the document before relying on it, then the matching passages with `para N (p.M)` citations, plus the required ICSID attribution and a not-legal-advice disclaimer.

**Language** is treated as an attribute, not a filter: awards available only in Spanish/French/etc. are valid results. The tool retrieves your preferred language when it exists; when it doesn't, it does not silently substitute — it lists the languages the document *is* available in and asks how you want to proceed (read an existing ICSID version, or get a flagged, non-authoritative translation of the original), because the page doesn't always establish which language is authoritative. Supply the choice with `--select N --lang "<language>"`.

## Network requirements

The scripts fetch documents and metadata directly, so the environment running them needs outbound access to these official hosts:

- `icsid.worldbank.org` — case-detail pages
- `icsidfiles.worldbank.org` — the document PDFs
- `investmentpolicy.unctad.org` — your own download of the UNCTAD Excel, and the helper's freshness check
- `pca-cpa.org` / `docs.pca-cpa.org` — PCA case pages and documents

**italaw is deliberately not on this list.** The default route for italaw documents is you downloading them manually in your browser (see Compliance notes) — the tool needs no italaw network access unless you explicitly approve the gated, per-document fallback.

**Please add these sites to your allow list to use the tool's full functionality.**

- **claude.ai / Cowork on Team or Enterprise plans:** network access is controlled by your organization Owner. If the scripts report blocked hosts, discuss with the Owner whether these domains can be added to the allow list (or network access enabled).
- **Claude Code:** approve the per-domain network prompts on first use, or pre-allow the hosts under `sandbox.network.allowedDomains` in your `settings.json`.

Any settings change is yours to make — the skill never modifies your settings. These domains govern the skill's *scripts*; Claude's built-in web fetch and the optional Claude in Chrome are governed separately by your Claude settings.

## Discovery & data freshness (graceful degradation)

"Which cases…" questions follow a **discovery ladder** — each rung degrades gracefully to the next, and the answer always discloses which rung it stands on:

1. **Local UNCTAD Excel** (`scripts/query_unctad_excel.py`) — the complete, filterable set of UNCTAD-tagged cases up to the snapshot date (currently 31/12/2023). Primary and sufficient for questions bounded by the snapshot.
2. **Live Navigator search** — for the recency window after the snapshot. The Navigator's search/list views are JS-rendered, so this rung requires a JS-capable browser render: **Claude in Chrome is an optional prerequisite** (install: https://code.claude.com/docs/en/chrome). Targeted searches only; never bulk-crawled.
3. **Without Chrome** — the skill does *not* fail or fake completeness: it supplements with ICSID's own live case database (server-rendered) for the ICSID subset and/or targeted web search, expressly flagged as non-exhaustive pointers rather than a complete set.

Named-case lookups never need a browser: individual Navigator case pages are server-rendered and resolve by numeric id (`/investment-dispute-settlement/cases/{id}/{any-slug}`). Note the freshness layers: Excel snapshot (31/12/2023) < live Navigator (itself a ~biannual snapshot; currently 31/12/2025) < the institutions' own live pages (ICSID/PCA) — truly current status comes only from the last layer. The helper's `LIVE_CHECK` flag marks rows whose snapshot data is presumptively stale; its freshness check requires outbound network (works on a normal machine / Claude Code; some sandboxes block it, in which case it reports "NOT verified now" and continues).

## Design (the RAG pipeline)

```mermaid
flowchart TD
    Q["User question"] --> C{"Classify the question<br/>(disclosure classes 1&ndash;4)"}

    C -->|"enumeration:<br/>which cases?"| E["UNCTAD Excel helper<br/>(query_unctad_excel.py)<br/>+ mandatory DATA FRESHNESS footer"]
    E -->|"time scope past<br/>the snapshot"| CH["Live Navigator search (JS render,<br/>Claude in Chrome) or ICSID live list /<br/>targeted web search &mdash; flagged non-exhaustive"]
    C -->|"named case:<br/>holdings, quotes"| L["List documents on the case page<br/>(fetch_icsid_award.py --list)"]
    C -->|"full-corpus<br/>analytics"| X["Declared NOT completely answerable;<br/>labeled general-knowledge pointer;<br/>refer to ISLG / Jus Mundi"]

    L --> S["Select by title + date + proceeding<br/>(ask the user if ambiguous)"]
    S --> CF{"CONFIRM against the<br/>document's own first pages"}
    CF -->|"mismatch"| S
    CF -->|"match"| LANG{"Available in the user's<br/>preferred language?"}
    LANG -->|"no"| ASK["STOP &mdash; list available languages,<br/>ask how to proceed"]
    ASK --> EXT
    LANG -->|"yes"| EXT["Paragraph-aware extraction<br/>(marker-convention detection;<br/>section-relative cites on restarts)"]
    EXT --> V["Verify: every quote and pinpoint<br/>re-checked against the retrieved text"]
    V --> A["Grounded answer / memo:<br/>pinpoint cites, flags, freshness footer,<br/>attribution + disclaimer"]

    L -.->|"empty list / blocked host /<br/>delisted document"| F["Fallback ladder:<br/>1. institution page &rarr; 2. JS render &rarr;<br/>3. user-supplied file (italaw last-resort gate) &rarr;<br/>4. companion-decision grounding &rarr;<br/>5. unretrieved lead (disclosed)"]
    F -.-> CF
```

1. **Discovery** — the ladder above: local UNCTAD Excel → JS-rendered Navigator search (Claude in Chrome) → ICSID live list / targeted web search with disclosed limits. ICSID's own case database (permissive robots) for ICSID cases; never bulk-harvested.
2. **Identify** — fetch the ICSID case-detail page and parse *all* published documents into a structured table (proceeding, title, date, and every available language + URL), rather than grabbing "the first English PDF".
3. **Confirm** — download the selected document and read its first page(s) to verify title, parties, case number, and date match the intended document before relying on it.
4. **Extract** — pdfplumber, page-by-page, detecting paragraph numbers so answers carry pinpoint cites (full PDF, no truncation).
5. **Ground** — answer only from retrieved text; if a point isn't there, say so.
6. **Verify** — confirm every quote/paragraph appears in the retrieved text before sending.

## What this tool does well and does not do

**Does well:** verifiable research. Single-document questions ("how did *Tecmed* treat proportionality?") get pinpoint-cited answers grounded in the confirmed primary text. Bounded comparisons ("compare X, Y, Z on topic A") get the same, plus a required completeness check that flags — as expressly unexamined leads — any other cases or lines of authority a full treatment of the topic would need. Category enumeration ("which treaty cases arose from the Venezuelan nationalizations?") runs on UNCTAD's official dataset with its scope and snapshot date disclosed.

**Deliberately does not:** corpus analytics. There is no scraped award corpus here (by design — see Compliance notes) and no access to subscription databases (Investor-State LawGuide, Jus Mundi, italaw full-text). So questions like "the most-cited case on topic Z" or "how often does arbitrator N dissent" cannot be answered completely; the tool says so, offers a clearly-labeled general-knowledge pointer, and refers the user to the databases built for that job. The tool is designed to be honest about its limits: every answer states what was actually examined and what wasn't.

## Compliance notes

- **ICSID** Terms permit viewing/downloading for personal, non-commercial use; no redistribution or derivative database. Attribution required (the script emits it).
- **UNCTAD** is discovery/metadata only; its robots blocks bulk/training crawlers and its Terms bar compiling/redistributing its dataset — so it is used human-directed or via targeted `Claude-User` fetches, never bulk-harvested.
- **italaw** is a **last-resort, per-case-confirmed fallback only**: official sources (ICSID/PCA) first; the default route is the user downloading the document manually (italaw's Terms expressly permit manual browsing); an automated fetch happens only with per-document human confirmation, as Claude-User, one document per approval, reference-don't-reproduce, and logged. italaw content never enters any build/test corpus. See the italaw entry in SKILL.md for the full conditions.
- Polite access: descriptive User-Agent, courtesy delay between requests, single-document on-demand only.

## License

Copyright (C) 2026 Cameron Russell (ccrnyc). Licensed under the **GNU Affero General Public License v3.0** (`AGPL-3.0-only`) — see [LICENSE](LICENSE). This program comes with ABSOLUTELY NO WARRANTY. The license covers the skill's code and documentation only; retrieved documents and the UNCTAD dataset remain governed by their own sources' terms (see Compliance notes).

## Known constraints

- `web_fetch` (the no-code fallback) truncates very long PDFs at ~120k characters, which silently drops the later paragraphs of a long award — a holding deep in the document simply vanishes from view. The script avoids this by downloading the file and extracting with pdfplumber — run it where the host (`icsidfiles.worldbank.org`) is reachable. Note `icsidfiles.worldbank.org` returns 403 on a bare-domain request but serves real PDF paths normally; some sandboxes block the host at the network proxy, in which case run locally or in a network-capable environment.
- ICSID case-detail pages are inconsistently rendered per case: most carry the document links in the initial HTML (plain `requests` sees them), but some inject the list client-side. When the document list comes back empty, the skill does not guess — it diagnoses the cause and falls back to a JS-capable render or asks for the document URL (see the retrieval fallback ladder in SKILL.md).
