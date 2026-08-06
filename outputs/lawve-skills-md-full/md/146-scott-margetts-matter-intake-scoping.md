---
id: "fe146bf1-437f-5e68-8d9c-a1391a794119"
title: "Matter Intake Scoping"
title_cn: "物质摄入范围"
slug: "matter-intake-scoping"
url: "https://lawve.ai/@scott-margetts/skill/matter-intake-scoping"
author: "Scott Margetts"
author_slug: "scott-margetts"
category: "legal-operations"
language: "en"
license: "Apache 2.0"
jurisdictions: "INT"
status: "active"
source_index: 146
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 物质摄入范围

原始名称：`Matter Intake Scoping`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/matter-intake-scoping  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

# 问题摄入范围

整个预执行弧的事务范围 — 从非结构化客户数据到结构化摘要，再到所有其他 LPM 学科参考的商定基线，并在 LPM 继承没有记录基线时提供中期事务恢复模式。

## 这个技能有什么作用

四种操作模式：

**模式 1 — 预参与：** 获取客户发送的所有内容 — 电子邮件、组织结构图、数据室索引、通话记录 — 并将其组织成结构化简报，合作伙伴可以从中编写提案。检测来源之间的冲突，将置信标签应用于每个数据点，标记外部知识注意事项，并生成按优先顺序排列的开放问题列表。不写提案；使书写速度更快。

**模式 2 — 快速摄入：** 在确认参与后立即运行。以范围变更控制器在事务的整个生命周期内管理的结构化格式捕获商定的范围基线——包含、排除、假设、约束、里程碑、费用基础。生成 LPM 参与定义以与合作伙伴达成协议。

**模式 3 — 全面吸收：** 模式 2 加上完整的利益相关者矩阵、全面的假设日志、成功标准、初步风险登记册和启动议程。对于大型或复杂的事情。

**模式 4 — 中期问题恢复：** 从计费数据和通信向后进行工作，以重建原始范围基线，确定更改的内容和方式，并生成结构化增量表并移交给范围更改控制器。最常见的实际入口点。

## 文件夹结构
```
matter-intake-scoping/
├── SKILL.md                                  # Core methodology — install this
├── README.md                                 # This file
└── references/
    ├── standing-assumptions.md               # Assumption performance register — populate this
    └── matter-type-profiles/
        └── template.md                       # Matter type profile template — duplicate and populate
```
## 提供和未提供的内容

**提供：** 方法论 — 模式、工作流程、置信度标签系统、冲突检测逻辑、输出格式、跨技能切换点、M365 连接模式指导。

**未提供：** 法律和运营内容。 `references/` 文件故意是空的脚手架。它们的结构被定义；他们的内容属于部署该技能的公司。

这种区别是有意为之的。组织客户数据和捕获范围基线的方法是通用且可转移的。关于德国解散计划通常采用哪些假设、哪些司法管辖区需要提交哪些监管文件以及奥地利合规实体结构是什么样子的具体知识——这是该公司积累的实践专业知识。它应该由公司保留，而不是由第三方编码。

## 您的公司需要填充什么

**`参考文献/stand-assections.md`**

按物质类型划分的假设绩效记录——哪些假设一致成立，哪些违反，以及后果如何。随着时间的推移，从物质回顾中填充。技能的模式 1 和模式 2 使用此文件来生成校准的假设候选列表，而不是不加批判地导入最后一个问题的列表。

首先捕获最大容量物质类型的三种最常见的故障模式。从那里开始构建。

**`references/matter-type-profiles/[type].md`**

每种案件类型一个文件（例如“corporate-dissolution.md”、“cross-border-merger.md”）。每个配置文件都确定了哪些知识领域通常与该事项类型相关——适用哪些监管阈值、出现哪些执行要求、通常出现哪些假设。复制“template.md”并填充。

技能在模式 1 的步骤 1 中路由到这些配置文件。在没有填充配置文件的情况下，该技能仍然有效 - 它依靠常识并标记差距。通过填充的配置文件，它会自动显示特定于物质类型的标志。

## v2 架构笔记

该技能旨在引用插件根级别的“共享知识/”层 - 法律和司法知识文件（执行要求、实体类型、监管阈值），这些文件由部署公司填充并由 LPM 和律师技能使用。该层尚未构建。当它出现时，该技能的路由机制已经被设计为可以使用它。 “references/”中的“matter-type-profiles/”文件是桥梁——它们指向共享知识领域，而不是直接包含合法内容。
## 跨技能交接

- **致范围变更控制器：** 模式 2/3 范围摘要是 SCC 管理的基线。通过“使用此范围摘要设置范围基线”来传递它。
- **致风险和问题经理：** 初始假设日志成为 RAID 日志中的 A 条目。
- **致预算和费用经理：** 范围参数是自下而上预算构建的输入。
- **来自持续改进引擎：** 问题关闭时的假设性能数据提供“references/stand-asminations.md”。如果没有这个，学习循环就没有重新进入点。

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

# matter-intake-scoping

Matter scoping across the full pre-execution arc — from unstructured client data to a structured brief, through to the agreed baseline that every other LPM discipline references, with a mid-matter recovery mode for when the LPM inherits with no documented baseline.

## What this skill does

Four operating modes:

**Mode 1 — Pre-engagement:** Takes whatever the client has sent — emails, org charts, data room indexes, call notes — and organises it into a structured brief the partner can write a proposal from. Detects conflicts across sources, applies confidence labels to every data point, flags external knowledge considerations, and produces a prioritised open questions list. Does not write the proposal; makes writing it fast.

**Mode 2 — Quick intake:** Runs immediately after engagement is confirmed. Captures the agreed scope baseline — inclusions, exclusions, assumptions, constraints, milestones, fee basis — in a structured format that scope-change-controller manages for the life of the matter. Produces an LPM involvement definition for agreement with the partner.

**Mode 3 — Full intake:** Mode 2 plus full stakeholder matrix, comprehensive assumptions log, success criteria, preliminary risk register, and kickoff agenda. For large or complex matters.

**Mode 4 — Mid-matter recovery:** Works backwards from billing data and correspondence to reconstruct the original scope baseline, identify what has changed and how, and produce a structured delta table and handoff to scope-change-controller. The most common actual entry point.

## Folder structure

```
matter-intake-scoping/
├── SKILL.md                                  # Core methodology — install this
├── README.md                                 # This file
└── references/
    ├── standing-assumptions.md               # Assumption performance register — populate this
    └── matter-type-profiles/
        └── template.md                       # Matter type profile template — duplicate and populate
```

## What is and isn't provided

**Provided:** The methodology — modes, workflows, confidence labelling system, conflict detection logic, output formats, cross-skill handoff points, M365 connected mode guidance.

**Not provided:** Legal and operational content. The `references/` files are intentionally empty scaffolding. Their structure is defined; their content belongs to the firm deploying the skill.

This distinction is deliberate. The methodology for organising client data and capturing a scope baseline is generic and transferable. The specific knowledge about what assumptions typically hold on German dissolution programmes, what regulatory filings are required across which jurisdictions, and what a compliant entity structure looks like in Austria — that is the firm's accumulated practice expertise. It should stay with the firm, not be encoded by a third party.

## What your firm needs to populate

**`references/standing-assumptions.md`**

A performance register of assumptions by matter type — which assumptions hold consistently, which breach, and with what consequence. Populated over time from matter retrospectives. The skill's Mode 1 and Mode 2 consume this file to produce a calibrated assumptions candidate list rather than importing last matter's list uncritically.

Start by capturing the three most common failure modes on your highest-volume matter type. Build from there.

**`references/matter-type-profiles/[type].md`**

One file per matter type (e.g. `corporate-dissolution.md`, `cross-border-merger.md`). Each profile identifies which knowledge domains are typically relevant for that matter type — which regulatory thresholds apply, what execution requirements arise, what assumptions commonly appear. Duplicate `template.md` and populate.

The skill routes to these profiles in Step 1 of Mode 1. Without populated profiles, the skill still works — it falls back on general knowledge and flags the gap. With populated profiles, it surfaces matter-type-specific flags automatically.

## v2 architecture note

This skill is designed to reference a `shared-knowledge/` layer at the plugin root level — legal and jurisdictional knowledge files (execution requirements, entity types, regulatory thresholds) that are populated by the deploying firm and consumed by both LPM and attorney skills. That layer is not yet built. When it is, this skill's routing mechanism is already designed to use it. The `matter-type-profiles/` files in `references/` are the bridge — they point to shared-knowledge domains rather than containing legal content directly.

## Cross-skill handoffs

- **To scope-change-controller:** Mode 2/3 scope summary is the baseline SCC manages. Pass it with "set up the scope baseline using this scope summary."
- **To risk-and-issues-manager:** Initial assumptions log becomes A-entries in the RAID log.
- **To budget-and-fee-manager:** Scope parameters are inputs for bottom-up budget construction.
- **From continuous-improvement-engine:** Assumption performance data at matter close feeds `references/standing-assumptions.md`. Without this, the learning loop has no re-entry point.

---

## SKILL.md Original

---
name: matter-intake-scoping-scott-margetts
description: "Matter scoping across the full pre-execution arc — organise client data into a structured brief, capture the agreed baseline, or reconstruct scope mid-flight. Use when making sense of client information before a proposal, scoping a new matter, running a kickoff, defining scope, mapping stakeholders, or inheriting a matter mid-flight. Trigger on: 'make sense of this', 'structure this for the proposal', 'scope this matter', 'new matter', 'kickoff', 'what are we doing', 'who are the stakeholders', 'what does success look like', 'matter setup', 'intake', 'I've inherited this matter', 'organise this client data'."
metadata:
  author: Scott Margetts
  license: Apache-2.0
  version: 2026.03.17
---

# Matter Intake and Scoping

## Purpose

Support the LPM across the full pre-execution arc: from unstructured client data to a structured brief the partner can write a proposal from, through to the agreed baseline that every other LPM discipline references.

The LPM's role is structural, not determinative. In pre-engagement, the job is removing the painful data-assembly phase — taking whatever the client has thrown at the legal team and organising it so the partner and senior associate can start making legal and commercial decisions rather than hunting through emails. What the firm proposes to do, and at what price, belongs to the partner. The LPM makes that work fast.

This skill operates in four modes:

1. **Pre-engagement** — organise unstructured client data into a structured brief. The primary mode.
2. **Quick intake** — capture the agreed baseline after engagement is confirmed.
3. **Full intake** — comprehensive baseline for large or complex matters.
4. **Mid-matter recovery** — reconstruct baseline when the LPM inherits mid-flight.

### Output format

All outputs from this skill are produced as .docx files unless the user explicitly requests otherwise. These are matter records — they belong in the matter folder, not in the chat window. Inline text is not an acceptable substitute for any mode's primary output. If the user has not asked for a specific format, default to .docx without prompting.

### Knowledge infrastructure

This skill references two types of supporting files:

**Skill references** (in `references/` alongside this file):
- `standing-assumptions.md` — assumption performance register by matter type, maintained by the firm
- `matter-type-profiles/[type].md` — which knowledge domains are relevant for each matter type; routes to shared-knowledge files

**Shared-knowledge files** (in `shared-knowledge/` at the plugin root, populated by the deploying firm):
- Legal and jurisdictional knowledge files (execution requirements, entity types, regulatory thresholds, etc.)
- Referenced by both LPM and attorney skills; consumed differently by each
- The LPM skill flags that an issue exists and recommends it be addressed. Attorney skills use the same files to do the substantive analysis.

The routing mechanism is this skill's responsibility. The content of the knowledge files belongs to the firm deploying it — populated from their own practice expertise, not from this skill.

---

## Mode 1: Pre-engagement client data structuring

### The problem this solves

A client sends a mandate. It arrives as six emails, two org charts, a prior transaction file, a data room link, and notes from a discovery call. The partner needs to get a proposal out. Before they can write a single line of proposed scope, someone has to organise that material into something coherent.

That task — data compilation, conflict detection, gap identification — is painful, time-consuming, and requires no legal judgment. It wastes partner and senior associate time. The LPM does it once, cleanly, so the legal team starts from a brief rather than a pile.

### What this mode produces

**Primary output:** Pre-engagement client brief (docx). Organised, sourced, conflict-flagged raw material for the partner. Does not contain proposed scope, approach, team, or fees — those require judgment that belongs to the partner.

**Secondary output:** Open questions list. Prioritised items requiring partner input (relationship and commercial context the LPM doesn't have) or client input (missing information).

### Step 1: Identify the matter type and load the relevant profile

Before processing inputs, identify the matter type and load the corresponding profile from `references/matter-type-profiles/[type].md`.

The matter-type profile identifies which knowledge domains are typically relevant, which shared-knowledge files to reference for standard flags, what assumptions commonly arise, and what gaps and conflicts typically appear on this matter type.

If no profile exists for this matter type, proceed without one and note the gap — I'd suggest recommending the firm creates a profile from the outputs of this engagement.

### Step 2: Assemble and catalogue the inputs

Take everything provided. Assign each input a source reference ([S1], [S2], etc.). Common sources and what to extract:

- **Discovery / scoping call notes** — business objective, client-stated priorities, timeline pressures, known constraints. The "why" behind the matter. More valuable than any document.
- **Client email correspondence** — scope indicators, entity and jurisdiction references, implied expectations, stated constraints, commercial sensitivities.
- **Org charts / corporate structure documents** — entity count, jurisdiction list, structure complexity, dormant or subsidiary entities.
- **Prior transaction / matter files** — comparable scope, historical assumptions, what changed during execution.
- **Commercial documents (SPA, SHA, LOI, term sheet)** — transaction perimeter, defined terms that constrain scope.
- **Data room index** — entity and document counts, completeness signals.
- **RFP / pitch brief** — stated requirements, evaluation criteria, client-side constraints.

For each input: what does it confirm, what does it imply, what does it contradict with another source?

### Step 3: Apply source-attributed confidence layering

Label every extracted data point with one of four confidence levels. Apply consistently — a brief where everything looks equally solid gives the partner a false picture.

**Confirmed** — stated explicitly in client correspondence or documents. Source cited. Partner can rely on this directly.

**Inferred (from inputs)** — the inputs imply this but it has not been confirmed. Flag for partner or client confirmation before the proposal commits to a position.

**Inferred (from general knowledge)** — not in any client input; identified by applying standard legal, operational, or market knowledge to the matter type and jurisdictions. Always cite the basis. Always mark clearly as external inference. Format: *[Inferred from general knowledge: (basis stated). Recommend specialist confirmation before the proposal addresses this.]*

**Unknown** — relevant to scope but not addressed in any available input. Goes directly to the open questions list.

The distinction between Inferred (from inputs) and Inferred (from general knowledge) matters. The partner needs to know whether a flag came from something the client said or from something the LPM knows about how this type of work operates. Both are useful; they have different epistemic status and different implications for what the partner needs to do next.

### Step 4: Multi-source conflict detection

When inputs contradict each other, surface it explicitly with both sources cited. Do not resolve conflicts — resolution requires partner and client input.

Rate each conflict: **Critical** (proposal cannot be issued without resolution) / **High** (significant scope or relationship implications) / **Medium** (relevant but not proposal-blocking) / **Low** (worth noting).

### Step 5: Apply external knowledge flags

Consult the matter-type profile (Step 1) to identify which shared-knowledge files are relevant for this matter type and jurisdiction mix. For each relevant knowledge domain, check whether the client inputs address it. If not, surface it as an external knowledge flag using the Inferred (from general knowledge) label.

Format for external knowledge flags in the brief:

> **[Flag — [knowledge domain]]** [Issue description and basis]. This has not been addressed in the client inputs. I'd suggest the partner considers whether to include this in the proposal or confirm with specialist counsel before scope is finalised.

Where no shared-knowledge file exists for a relevant domain, note the gap and suggest the firm creates one.

### Step 6: Calibrate the assumptions candidate list

Consult `references/standing-assumptions.md` for this matter type before drafting the assumptions candidate list.

The standing-assumptions file contains the firm's accumulated record of which assumptions hold on which matter types, which breach, and with what consequence. The goal is a calibrated starting position rather than a copy of the last matter's list applied uncritically.

**Copy-paste failure mode to avoid:** Importing the standing list without calibration imports both reliable assumptions and failed ones. Nobody removes assumptions that consistently breach because nobody tracks which ones breach. Nobody adds assumptions for failure modes that appeared in recent retrospectives. The list mutates slowly, based on whoever remembered the last painful matter. The standing-assumptions.md file makes this traceable — but only if it is maintained, which requires the continuous-improvement-engine feeding it at matter close.

**Calibration logic:**
- Retain assumptions that hold consistently — state with confidence
- Strengthen high-failure assumptions — make more precise, lower the deviation threshold
- Surface assumptions that appear repeatedly as undocumented surprises — recommend adding to the standing list
- Flag regulatory timeline assumptions as time-sensitive — these change and must be verified before the proposal commits

**Performance note format:** *"This assumption has held on [X of Y] similar matters / breached on [N] matters, typically due to [pattern] / has not been formally captured but appeared as a surprise on recent matters of this type."*

Where standing-assumptions.md is empty or unpopulated for this matter type, produce the candidate list from first principles and recommend the firm begins capturing performance data going forward.

The assumptions candidate list is for partner review and refinement — raw material, not a finished product. I'd suggest the partner adjusts or rejects items as appropriate and takes ownership of the final list before the proposal is issued.

### Step 7: Draft the pre-engagement client brief

---

**PRE-ENGAGEMENT CLIENT BRIEF**
*DRAFT — For partner and senior associate use. Not for client circulation.*

Client: [Client name] | Client number: [Client number]
Matter: [Matter name / working title] | Matter number: [Matter number]
Prepared by: [LPM name] | Date: [Date]

---

**SUMMARY — Action required before proposal can issue**
Items the partner must resolve, in priority order. Includes unresolved conflicts, open questions requiring relationship or commercial context, and any assumption that materially affects scope or fees. This section is the partner's working list — everything below is the supporting evidence.

---

**1. Conflicts across source materials**
Each conflict with both sources cited, severity rated. Not resolved — for partner decision before the proposal is issued.

**2. Open questions**
Prioritised by impact. Two categories — *For the partner* (relationship or commercial context the LPM doesn't have) and *For the client* (missing information that must be obtained before the proposal is written).

**3. External knowledge flags**
Issues identified from shared-knowledge files or general knowledge not addressed in client inputs. Each marked as Inferred (from general knowledge) with basis stated and specialist confirmation recommended.

**4. Matter context**
Business objective as stated by the client (sources cited). Confidence level noted.

**5. Extracted data points**
Organised by category: entities and structure, jurisdictions, timeline references, stated objectives, fee and commercial references, client-side constraints. Every item source-cited, confidence-labelled.

**6. Assumptions candidate list**
For partner review and refinement. Each candidate with source, confidence level, and performance note where available. I'd suggest the partner takes ownership of the final list before the proposal is issued.

**7. Suggested next steps**
Recommended sequence before the proposal can be issued, ordered by dependency.

**Annex A: Source materials**

| Ref | Document / communication | Type | Date | Key content extracted |
|-----|--------------------------|------|------|-----------------------|
| [S1] | [Title / subject line] | [Email / Docx / Call notes] | [Date] | [What was used] |

*This brief organises client-provided inputs and flags conflicts, gaps, and external knowledge considerations for partner review. It does not contain proposed scope, fees, or legal advice. All judgments on what the firm proposes to do belong to the partner.*

---

### If the partner asks for a draft proposal or scope sections

Produce them. A well-flagged draft the partner edits is better than nothing. But apply all of the following without exception:

**DRAFT labelling — mandatory:**
- Document header block (before the DRAFT warning):
  ```
  Client: [Name]  |  Client number: [Number]
  Matter: [Name]  |  Matter number: [Number]
  Prepared by: [LPM name]  |  Date: [Date]
  ```
- Document header must read: `DRAFT — FOR PARTNER REVIEW AND EDITING. NOT FOR CLIENT CIRCULATION IN THIS FORM.`
- Repeat `[DRAFT]` at the start of every substantive section heading
- Any section requiring legal or commercial judgment that the LPM cannot supply must be left as an explicit stub: `[PARTNER TO COMPLETE — requires your judgment on [specific issue]]`
- PARTNER NOTE flags (see the Summary section above) go at the top of the document, not the end

**The brief comes first.** If scope is requested before the brief has been produced, produce the brief first. The scope draft is built from the brief's extracted data points — without the brief, the scope draft has no traceable basis.

**Confidence labels carry through.** Every scope item in the draft that derives from an Inferred or Unknown data point carries its label inline. The partner can see at a glance what is solid and what they need to validate.

**The draft proposal does not replace the brief.** Both are needed — the brief is the internal working document; the draft proposal is what goes to the partner for editing before client issue.

---

## Mode 2: Quick intake

Runs immediately after engagement is confirmed. 30 minutes. Produces the scope baseline that scope-change-controller manages for the life of the matter.

**Input:** Engagement letter, fee proposal, or confirmed scope email. If nothing exists in writing, work from the verbal agreement and flag the absence — I'd suggest logging an undocumented scope baseline as an A-entry in the RAID log from day one.

**Output:** Matter scope summary, stakeholder register, initial assumptions log, LPM involvement definition, open items list.

**Matter scope summary format:**

```
MATTER SCOPE SUMMARY
Client: [Name]            Client number: [Number]
Matter: [Name]            Matter number: [Number]
Date: [Date]              Version: 1.0
Partner: [Name]           Fee basis: [Fixed/Capped/Hourly/AFA]     Cap: [If applicable]

BUSINESS OBJECTIVE
[One sentence. Why the client is doing this.]

SCOPE INCLUSIONS
[Bullet list. Every quantifiable parameter: X entities, Y jurisdictions.]

SCOPE EXCLUSIONS
[Explicit. If none documented, flag as risk.]

ASSUMPTIONS
[Numbered. Quantified where possible. Owner and validation method for each.]
1. [Statement] — Owner: [Name] — Validate by: [Method / deadline]

CONSTRAINTS
[Timeline, resource, regulatory.]

KEY MILESTONES
[Date — Milestone — Hard / Soft]

FEE BASIS NOTES
[How the fee basis affects scope sensitivity on this matter.]
```

**LPM involvement definition:** I'd suggest agreeing this with the partner at matter setup rather than leaving it assumed. What the LPM owns, facilitates, monitors, and does not do. Framed as a service proposal — not contractual, a shared understanding. The alternative is months of both sides discovering by accident what the other expected.

This is a named output of Mode 2, not optional. Prompt the partner explicitly if the inputs don't already confirm it. If the partner defers the conversation, log it as an open item and flag it again at the first pulse check.

Format:

```
LPM INVOLVEMENT — [Matter name]
Agreed with: [Partner name] | Date: [Date]

OWNS (LPM leads, no partner sign-off required for execution):
- [e.g. Scope baseline maintenance and change log]
- [e.g. Pulse check scheduling and reporting]
- [e.g. RAID log maintenance]

FACILITATES (LPM runs the process; partner makes the call):
- [e.g. Scope change assessment and change notice drafting]
- [e.g. Issue escalation to partner]
- [e.g. Client status reporting — drafted by LPM, issued by partner]

MONITORS (LPM tracks and flags; does not act without instruction):
- [e.g. Budget consumption against fixed fee]
- [e.g. Assumption validity — flags for partner if a condition looks like it may breach]
- [e.g. Timeline against milestones]

NOT IN SCOPE FOR LPM:
- Legal advice and judgment
- Client relationship management
- Fee negotiation and scope commitments to the client

Note: This is a shared understanding, not a contractual document. Review at matter close.
```

**Handoff to scope-change-controller:** Once the scope summary and LPM involvement definition are complete, pass the scope summary to scope-change-controller to set up the scope register. The scope summary is the baseline SCC manages for the life of the matter. Trigger: "set up the scope baseline using this scope summary."

---

## Mode 3: Full intake

For large or complex matters: multi-jurisdiction, fixed or capped fee, 6+ months, multiple workstreams, engagement-sensitive client.

Adds to quick intake:
- Full stakeholder matrix with power/interest assessment — who is the actual decision-maker vs the day-to-day contact. These are often different people; confusing them is a relationship risk.
- Comprehensive assumptions log across six categories: quantitative parameters, regulatory (flag as time-sensitive), client-side, counterparty, data quality, resource availability.
- Success criteria — two versions: operational (on time, within budget, scope delivered) and relationship (how the client will assess whether this was well-managed). I'd suggest asking explicitly: "How will you assess whether this has been well-managed?" Document the answer — it is the benchmark for the matter close assessment.
- Formal LPM involvement definition.
- Preliminary risk register (5–10 items), ready for handoff to risk-and-issues-manager.
- Kickoff agenda.

---

## Mode 4: Mid-matter recovery

The most common actual entry point. The matter is months in, the LPM wasn't involved at setup, no documented baseline exists.

**Input:** Whatever exists — billing system entries, engagement letter, early client emails, team correspondence, call notes. Partial is fine; confidence labels handle the gaps.

**Methodology — works backwards:**

1. Reconstruct original scope from the earliest available document (engagement letter or equivalent). This is the baseline. Treat it as Confirmed if it exists in writing; Inferred if reconstructed from early correspondence.
2. Extract current state from recent correspondence and team knowledge.
3. Identify the delta: what has changed from the reconstructed baseline? Classify each change — absorbed (already done, no formal OOS), suspended (paused, outcome TBD), open (requested but unanswered), agreed (formally scoped in via change notice).
4. Assess open items for urgency — particularly any unanswered client requests, which carry implicit acceptance risk the longer they sit.
5. Produce the three structured outputs below, then offer next steps.

**Output 1 — Reconstructed Matter Scope Summary**

Document header:
```
MID-MATTER RECOVERY REPORT
[Matter name] | Client: [Client name] | Client number: [Client number] | Matter number: [Matter number]
Prepared by: [LPM name] | Date: [Date] | INTERNAL — PRIVILEGED AND CONFIDENTIAL
BASIS: Reconstructed from [source(s)] — original intake not completed.
```

Opening section label: **Immediate actions required**
List the partner-decision items and LPM actions first, in priority order, before any supporting tables or analysis. This is the working list; everything below is evidence.

Then use the Mode 2 scope summary format for the baseline reconstruction.

Confidence labels are mandatory throughout. Any scope parameter not directly confirmed in writing carries Inferred or Unknown status. The summary is honest about what is known and what is being reconstructed. Partner review required before treating this as the operational baseline.

**Output 2 — Delta table**

| # | Change | Type | Source | Date | Status | Action required |
|---|--------|------|--------|------|--------|-----------------|
| 1 | [What changed] | Absorbed / Suspended / Open / Agreed | [Email / call / billing entry] | [Date] | [Done / Paused / Unanswered / Confirmed] | [None / Partner decision / Client response / Change notice] |

Types:
- **Absorbed** — partner or team committed without formal OOS process. Document it; it's done. Prevent it becoming precedent.
- **Suspended** — work paused, outcome unresolved. Flag the two-scenario risk: if it resumes, is there budget? If it descopes, does the fee adjust?
- **Open** — client has requested but no formal response given. Flag days outstanding and implicit acceptance risk.
- **Agreed** — formal change notice issued and accepted. Record for completeness.

**Output 3 — SCC handoff block**

List every delta item being passed to scope-change-controller, with its type and the specific action SCC should take first. Format:

> **Handoff to scope-change-controller**
> The following items from the delta table require scope register entries and/or change notices:
> - [Item 1] — [Type] — [Recommended first action]
> - [Item 2] — [Type] — [Recommended first action]
> Set up the scope baseline using Output 1 as the starting position.

**After producing all three outputs**, offer the immediate next steps — draft change notice for the most urgent open item, burn rate reconstruction, or partner briefing note. The analysis and the deliverables come first; the offer comes after.

---

## Operational knowledge — why intake fails

**The partner wants to start billing.** Intake is overhead; the work is billable. Frame it as matter setup that prevents write-off conversations later.

**"We've done this before."** Repeat matter types generate the most dangerous assumptions — last matter's parameters imported without checking. I'd suggest asking explicitly what assumptions failed last time on any repeat work.

**The client's contact isn't the decision-maker.** Instructions from one person overruled by another is a scope and relationship risk — manageable if identified early.

**Assumptions travel undocumented from pitch to delivery.** The assumptions log is the bridge between what the pitch team built and what the delivery team inherits.

**"What does success look like?" is never asked.** At matter close, client dissatisfaction is hard to diagnose against an expectation that was never articulated. I'd suggest asking at intake.

**LPM involvement is assumed, not agreed.** Define it explicitly at matter setup.

---

## Cross-skill handoff points

- **To scope-change-controller:** Matter scope summary from Mode 2/3 is the baseline SCC manages. Intake produces it; SCC protects it.
- **To risk-and-issues-manager:** Initial assumptions log becomes A-entries in the RAID log.
- **To budget-and-fee-manager:** Scope parameters (entity count, jurisdiction list, workstream structure) are inputs for bottom-up budget construction.
- **To timeline-generator:** Key milestones and hard deadlines are anchor points for timeline construction.
- **To matter-plan-builder:** Scope inclusions and workstream structure are inputs for the matter plan.
- **To stakeholder-comms-planner:** Stakeholder register drives communication cadence design.
- **From continuous-improvement-engine:** Assumption performance data by matter type feeds `references/standing-assumptions.md`. This is the primary consumption point for CIE output — without it, the learning loop has no re-entry point.

---

## LPM vs attorney boundary

**The LPM does:** Assemble and organise inputs. Source-cite everything. Detect conflicts. Apply confidence labels. Flag external knowledge considerations. Calibrate the assumptions candidate list. Define their own role.

**The LPM does not:** Determine what the firm proposes to do. Advise on legal risk. Reach conclusions on issues flagged from shared-knowledge files — those are flagged and referred, not determined.

The four-label confidence system enforces this boundary mechanically. Inferred (from general knowledge) items always carry an explicit source statement and a "recommend specialist confirmation" note. The LPM is the routing layer; the attorney skill or specialist counsel is the analysis layer.

---

**Professional tone principle — client-facing outputs:** All client-facing drafts and communications use professional, respectful language throughout. Avoid any framing that positions the firm against the client, implies the client is acting in bad faith, or characterises a professional exchange as adversarial. Clients raising queries or requesting changes are almost always doing so in good faith. Respond accordingly.

**Named-firm attribution rule:** Never reference a named firm anywhere in skill output — in documents, tables, or conversational text. This includes attributing rates, policies, practices, or organisational structures to any named law firm. The skill does not know any firm's actual structure, rates, or policies. Use "confirm with Pricing", "confirm with Finance", or "firm policy — confirm before applying." The rule applies to everything this skill produces, not just formal documents.

---

## M365 Connected Mode (Optional)

**Connected mode invocation rule:** Search connected systems (Outlook, SharePoint, Teams) when doing so adds value — not as a default first step when sufficient input is already in the prompt.

- **Sufficient input already provided:** User has pasted emails, documents, or data with full context. Engage with what is there. Do not search first — it adds friction without adding information.
- **Input is incomplete or proactive surfacing is warranted:** User references something that should be retrieved ("there's an invoice in Outlook", "it's end of month"), or connected mode is running in background/scheduled mode. Search proactively — this is the inverted invocation model and is the highest-value connected mode behaviour.

The distinction is whether the user has already provided what is needed. If yes, work with it. If no, or if proactive surfacing serves the LPM, search.

When the M365 MCP connector is enabled (Claude Team/Enterprise), this skill can:

- **Search Outlook for prior client and matter correspondence** — pull engagement letters, scope emails, and instruction threads without manual assembly
- **Search SharePoint for `standing-assumptions.md` and prior matter retrospectives** — detect assumption performance patterns automatically
- **Search SharePoint for shared-knowledge files** — surface jurisdiction and matter-type knowledge relevant to the inputs without manual reference
- **Search for prior proposals on comparable mandates** — surface the partner's own prior work as structural reference
- **Check Teams for discovery call summaries and pre-engagement discussions** — capture scope-relevant content that may not appear in email

Without the connector, paste inputs directly, upload documents, or describe the matter context verbally. Manual mode works fully — connected mode removes the assembly overhead and unlocks automatic pattern detection across prior matters.
