---
id: "d225a231-48bc-5cea-b08c-5cff7ea7511c"
title: "Matter Plan Builder"
title_cn: "事项计划生成器"
slug: "matter-plan-builder"
url: "https://lawve.ai/@scott-margetts/skill/matter-plan-builder"
author: "Scott Margetts"
author_slug: "scott-margetts"
category: "legal-operations"
language: "en"
license: "Apache 2.0"
jurisdictions: "INT"
status: "active"
source_index: 135
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 事项计划生成器

原始名称：`Matter Plan Builder`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/matter-plan-builder  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

# 事务计划生成器

将商定的范围转化为团队可以实际执行的结构化事务计划。阶段、工作流、里程碑、依赖关系、所有者分配、事项设置 - 以及在整个执行过程中保持计划最新的维护架构。

## 这个技能有什么作用

只存在于合作伙伴头脑中的计划就不是计划。这是一个意图。该技能的功能是使计划变得明确：分配所有权、对工作进行排序、标记依赖性以及生成其他 LPM 学科可以参考的输出。

该技能以五种模式运行，根据问题复杂性和规划阶段进行调整：

**模式 1 — 完整计划。** 完成计划的范围。事项计划以及每个工作流的工作流计划。对于具有明确团队的中等复杂性问题的默认设置。与计划一起产生事项设置建议。

**模式 2 — 仅事项计划。** 阶段、工作流程、里程碑和所有者。工作流计划是工作流领导的责任——该技能产生事项计划和他们应该遵循的模板。专为大型多司法管辖区项目而设计，在这些项目中，在中心进行完整的工作流规划是不切实际的。

**模式 3 — 工作流计划。** 任务级别详细信息中的单个工作流或管辖区。对于工作流领导拥有和维护。

**模式 4 — 滚动波。** 详细规划当前阶段；仅在里程碑处存根后续阶段。在尚未定义完整范围时使用 - 常见于监管事务、第二阶段范围取决于第一阶段确定的复杂交易以及动员早期的大型项目。

**模式 5 — 根据通信进行计划更新。** 实践中最常用的模式。接受电子邮件、通话记录或会议记录，并建议对现有计划进行更新作为确认列表。 LPM 确认、驳回或编辑每个项目。更新后的计划在确认后将作为新版本生成。

**模式 5 的存在是因为替代方案（要求律师直接更新计划）行不通。**律师不更新计划。这些信息存在于他们的电子邮件和头脑中。 LPM 的工作就是从这些来源中提取信息。模式5删除了手动提取步骤：Claude读取信件，提出更新，LPM的角色从数据输入转变为判断。

## 与其他 LPM 核心技能的关系

该技能位于 LPM 核心架构的中间。它消耗来自物质接收范围的范围并生成下游引用的所有基线：
**事项纳入范围** → 范围摘要直接提供给计划。模式 2 输出字段按设计映射到计划输入 — 包含工作流范围、排除 OOS 标记、阶段持续时间限制的约束、事项计划里程碑列表的里程碑。

**范围变更控制器** → 完成的计划是范围变更控制器在整个事件中管理的范围基线。批准的范围变更会随着模式 5 的触发而回流，从而产生版本化的计划更新。

**时间线生成器** → 依赖关系标记的任务列表（带有 FS/FF/SS/SF 标记）是时间线生成器的主要输入，用于关键路径计算和假设分析。

**状态报告起草者** → 里程碑登记册是报告基线。进度是根据里程碑而不是任务完成百分比来报告的。

**风险和问题管理器** → 信息依赖性和计划假设是事件打开时的 RAID 日志种子条目。

## 输入

- 问题吸收范围界定的范围摘要（结构化、现场映射）
- 业务约定书、术语标题或同等范围描述
- 团队名单（或确认姓名为 TBC - 技能在继续之前询问）
- 类似事项的先前计划（可选，用作计划先例）
- 在 M365 连接模式下：SharePoint 文档、优先事项计划、Outlook 启动信件

## 输出

所有输出均以 .docx 格式生成。每个计划都附带用于 SharePoint 列表导入的结构化数据导出 (CSV) — 这使得模式 5 更新和连接模式监控成为可能。

- 事项计划 (.docx)：事项计划、每个工作流的工作流计划、事项设置建议、RAID 日志打开条目、通信计划、跨技能切换提示
- 结构化数据导出（.csv）：具有完整字段集的所有任务和里程碑条目
- 计划版本历史记录：每次更新都会生成一个新的版本文件 - v1.0、v1.1 等。之前的版本将保留作为事项审计跟踪
- 工作流领导模板（模式 2）：领导必须遵循其工作流计划的格式

## 标准任务字段

每个计划中的每个任务条目都包含 13 个字段：

唯一 ID（事务范围、稳定、永不重新分配）|任务 ID（人类可读、计划内参考）|任务总结|任务描述 |业主|截止日期 |持续时间（天）|前任|依赖类型（FS/FF/SS/SF）|里程碑 |状态 |进度说明|任务代码

忽略任何这些字段的计划条目无法推动执行、状态报告或升级。这是一个清单，而不是一个计划。

## 事项设置决定
事务设置是此技能的一部分，而不是计划完成后委派的计费管理任务。计费系统中事务的配置方式（单一事务 vs 分阶段结构、任务代码设计、计费指令）直接决定了您以后可以提取哪些数据。如果设置错误，就会导致项目在整个生命周期中付出代价。该功能会在计划的同时生成事项设置建议，并在启动时分发计费说明。

## 结构化数据导出和 SharePoint 列表

每个计划输出都包含包含完整任务和里程碑字段集的 CSV 导出。这是 SharePoint 列表架构 - 部署此技能的公司应使用初始计划构建中的结构化导出来配置实际列表设置。

仅以 Word 文档形式存在的计划无法由 Claude 更新。 SharePoint 列表中的计划可以。结构化出口是连接它们的桥梁。

## 跨技能交接

- **来自物质接收范围：** 模式 2/3 范围摘要 - 通过步骤 1 中的字段映射表消耗
- **来自范围变更控制器：** 批准的范围变更触发模式 5；计划版本确认后
- **到时间线生成器：** 带有 FS/FF/SS/SF 标签的依赖标记任务列表
- **致范围变更控制器：** 已完成的计划作为范围基线传递
- **致状态报告起草者：** 作为报告基准的里程碑登记册和工作流程结构
- **致风险和问题经理：** 作为 RAID 日志种子条目的信息依赖性和假设
- **致计费周期管理器：** 任务代码结构和计费指令

## M365 连接模式

启用 M365 MCP 连接器（Claude 团队/企业）后，此技能可以在 SharePoint 中搜索相同类型的先前事项计划、提取范围摘要和约定信函、在 Outlook 中搜索启动通信、从事项计划创建启动日历邀请，以及将已批准的任务和里程碑推送到 Planner 或 Teams 进行实时跟踪。

不带连接器：通过直接粘贴或上传来提供范围摘要、先前计划和信件。

---

*LPM 核心插件 — 技能 2（共 14 项）|法律行动咨询有限公司|阿帕奇2.0*

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

# matter-plan-builder

Convert agreed scope into a structured matter plan the team can actually execute against. Phases, workstreams, milestones, dependencies, owner assignments, matter setup — plus the maintenance architecture that keeps the plan current throughout execution.

## What this skill does

A plan that exists only in the partner's head is not a plan. It is an intention. The function of this skill is to make the plan explicit: assign ownership, sequence the work, flag dependencies, and produce an output every other LPM discipline can reference.

The skill operates in five modes scaled to matter complexity and planning stage:

**Mode 1 — Full plan.** Scope to complete plan. Matter plan plus workstream plans for every workstream. Default for matters of moderate complexity with a defined team. Produces matter setup recommendations alongside the plan.

**Mode 2 — Matter plan only.** Phases, workstreams, milestones, and owners. Workstream plans are the responsibility of workstream leads — the skill produces the matter plan and the template they should follow. Designed for large multi-jurisdiction programmes where full workstream planning at the centre is impractical.

**Mode 3 — Workstream plan.** A single workstream or jurisdiction in task-level detail. For the workstream lead to own and maintain.

**Mode 4 — Rolling wave.** Plan the current phase in full detail; stub subsequent phases at milestones only. Used when full scope is not yet defined — common in regulatory matters, complex transactions where Phase 2 scope depends on a Phase 1 determination, and large programmes early in mobilisation.

**Mode 5 — Plan update from correspondence.** The most frequently needed mode in practice. Accepts emails, call notes, or meeting notes and proposes updates to the existing plan as a confirmation list. The LPM confirms, dismisses, or edits each item. The updated plan is produced as a new version on confirmation.

**Mode 5 exists because the alternative — asking lawyers to update the plan directly — does not work.** Lawyers do not update plans. The information exists in their emails and in their heads. The LPM's job is to extract it from those sources. Mode 5 removes the manual extraction step: Claude reads the correspondence, proposes the updates, and the LPM's role shifts from data entry to judgment.

## Relationship with other LPM Core skills

This skill sits in the middle of the LPM Core architecture. It consumes scope from matter-intake-scoping and produces the baseline everything downstream references:

**matter-intake-scoping** → scope summary feeds the plan directly. Mode 2 output fields map to plan inputs by design — inclusions to workstream scope, exclusions to OOS flags, constraints to phase duration limits, milestones to the matter plan milestone list.

**scope-change-controller** → the completed plan is the scope baseline scope-change-controller manages throughout the matter. Approved scope changes flow back as Mode 5 triggers, producing a versioned plan update.

**timeline-generator** → the dependency-flagged task list (with FS/FF/SS/SF tags) is the primary input to timeline-generator for critical path calculation and what-if analysis.

**status-report-drafter** → the milestone register is the reporting baseline. Progress is reported against milestones, not task completion percentages.

**risk-and-issues-manager** → information dependencies and plan assumptions are RAID log seed entries on matter opening.

## Inputs

- Scope summary from matter-intake-scoping (structured, field-mapped)
- Engagement letter, heads of terms, or equivalent scope description
- Team roster (or confirmation that names are TBC — the skill asks before proceeding)
- Prior plans for comparable matters (optional, used as planning precedent)
- In M365 connected mode: SharePoint documents, prior matter plans, Outlook kickoff correspondence

## Outputs

All outputs produced as .docx. Every plan is accompanied by a structured data export (CSV) for SharePoint List import — this is what makes Mode 5 updates and connected-mode monitoring possible.

- Matter plan (.docx): matter plan, workstream plans per workstream, matter setup recommendations, RAID log opening entries, communication schedule, cross-skill handoff prompts
- Structured data export (.csv): all task and milestone entries with full field set
- Plan version history: every update produces a new versioned file — v1.0, v1.1, etc. Prior versions are retained as the matter audit trail
- Workstream lead template (Mode 2): the format leads must follow for their workstream plans

## Standard task fields

Every task entry in every plan contains 13 fields:

Unique ID (matter-scoped, stable, never reassigned) | Task ID (human-readable, within-plan reference) | Task Summary | Task Description | Owner | Due Date | Duration (days) | Predecessor(s) | Dependency Type (FS/FF/SS/SF) | Milestone | Status | Progress Notes | Task Code

A plan entry that omits any of these fields cannot drive execution, status reporting, or escalation. It is a list, not a plan.

## The matter setup decision

Matter setup is part of this skill — not a billing admin task delegated after the plan is complete. How the matter is configured in the billing system (single matter vs phased structure, task code design, billing instruction) directly determines what data you can extract later. Getting it wrong at setup costs the project throughout its lifetime. This skill produces matter setup recommendations alongside the plan and distributes a billing instruction at kickoff.

## Structured data export and SharePoint List

Every plan output includes a CSV export with the full task and milestone field set. This is the SharePoint List schema — firms deploying this skill should configure the List at matter setup using the structured export from the initial plan build.

A plan that exists only as a Word document cannot be updated by Claude. A plan in a SharePoint List can. The structured export is what bridges them.

## Cross-skill handoffs

- **From matter-intake-scoping:** Mode 2/3 scope summary — consumed via field mapping table in Step 1
- **From scope-change-controller:** Approved scope changes trigger Mode 5; plan versioned on confirmation
- **To timeline-generator:** Dependency-flagged task list with FS/FF/SS/SF tags
- **To scope-change-controller:** Completed plan passed as scope baseline
- **To status-report-drafter:** Milestone register and workstream structure as reporting baseline
- **To risk-and-issues-manager:** Information dependencies and assumptions as RAID log seed entries
- **To billing-cycle-manager:** Task code structure and billing instruction

## M365 connected mode

When the M365 MCP connector is enabled (Claude Team/Enterprise), this skill can search SharePoint for prior matter plans of the same type, pull scope summaries and engagement letters, search Outlook for kickoff correspondence, create kickoff calendar invites from the matter plan, and push approved tasks and milestones to Planner or Teams for live tracking.

Without the connector: provide scope summaries, prior plans, and correspondence by pasting or uploading directly.

---

*LPM Core Plugin — Skill 2 of 14 | LegalOps Consulting Limited | Apache 2.0*

---

## SKILL.md Original

---
name: matter-plan-builder-scott-margetts
description: "Convert agreed scope into a structured matter plan — phases, workstreams, milestones, dependencies, owner assignments, and matter setup decisions. Use when planning a new matter, running a kickoff, building a workstream plan, structuring phases, setting up task codes, or producing a plan to drive status reporting. Trigger on: 'build a plan', 'matter plan', 'project plan', 'what are the phases', 'workstream plan', 'how do we sequence this', 'who owns what', 'task codes', 'matter setup', 'workstream plan', 'matter plan', 'rolling wave', 'plan the next phase', 'what comes first', 'kickoff agenda'."
metadata:
  author: Scott Margetts
  license: Apache-2.0
  version: 2026.03.17
---

# Matter Plan Builder

## Purpose

Convert agreed scope into a structured matter plan the team can execute against. A plan that exists only in the partner's head is not a plan — it is an intention. The function of this skill is to make the plan explicit, assign ownership, sequence the work, and produce an output that every other LPM discipline can reference.

This skill takes the output of matter-intake-scoping (or an equivalent scope description) and produces the planning layer. scope-change-controller manages that plan as the baseline throughout the matter. status-report-drafter reports progress against it. timeline-generator adds dependency logic and critical path visualisation.

**The matter setup decision is part of this skill.** How the matter is configured in the billing system — single matter vs phased structure, task codes, matter numbers — directly affects whether the data collected is useful for reporting, billing, and future scoping. Getting it wrong at setup costs the project throughout its lifetime. This is not a billing admin task. It is a strategic planning decision that must be made before time starts being recorded.

---

## Operating Modes

### Mode 1 — Full plan (most matters)
Scope to complete plan. Matter plan (phases, workstreams, milestones, key dependencies, owners) plus workstream plans for each workstream. Produces matter setup recommendations alongside the plan. Default mode for matters of moderate complexity with a defined team.

**Mode 1 produces a workstream plan for every workstream without exception.** If there are five workstreams, five workstream plans are produced. Do not produce the first workstream and note that others "follow the same format" — produce them all. Mode 2 is the correct mode when a matter plan without workstream detail is needed. If a user invokes Mode 1 on a matter with many workstreams and full workstream plans would be disproportionate, ask whether Mode 2 is more appropriate before proceeding.

### Mode 2 — Matter plan only (large programmes)
Phases, workstreams, high-level milestones, and owners only. Workstream plans are the responsibility of workstream leads — this skill produces the matter plan and the template workstream leads should follow. Produces the dependency-flagged plan for timeline-generator.

### Mode 3 — Workstream plan (workstream detail)
A single workstream or jurisdiction plan built in detail. Input: the matter plan (or equivalent) plus the workstream scope. Output: task-level plan with sequencing, dependencies, durations, and owners. Designed for the workstream lead to own and maintain.

### Mode 4 — Rolling wave
For matters where full scope is not yet defined. Plan the current phase in full detail. Produce a stub plan for subsequent phases — milestones only, no task detail. Flag the trigger points at which the next phase needs to be planned in detail. The stub is a placeholder, not a commitment — mark it as such.

### Mode 5 — Plan update from correspondence
The most frequently needed mode in practice. Accepts emails, call notes, or meeting notes and proposes updates to the existing plan — status changes, progress notes, due date revisions, new blockers, completed tasks. The LPM reviews and confirms; they do not create the updates manually.

This mode exists because the alternative — asking lawyers to update the plan directly — does not work. Lawyers do not update plans. The information exists in their emails and in their heads. The LPM's job is to extract it from those sources without creating a manual data-entry burden that takes longer than the matter itself.

Input: existing plan (uploaded as file or pasted) + correspondence since last update. Output: proposed plan changes, presented as a confirmation list. The LPM confirms, dismisses, or edits each proposed change. The updated plan is produced as a new version (.docx and structured export) on confirmation.

In connected mode, this mode can be triggered automatically — Claude monitors matter correspondence and surfaces proposed updates without waiting for the LPM to initiate.

---

## Step-by-Step Process

### Step 1: Confirm the scope baseline
Read all provided materials. Identify whether a structured scope summary exists (from matter-intake-scoping Mode 2/3) or whether scope must be reconstructed from the input. If reconstructing: identify matter type, client objectives, key deliverables, jurisdictions involved, and known constraints. Flag scope gaps before proceeding — a plan built on incomplete scope will need rebuilding.

If scope is thin, surface the gaps: what do we need to know before we can build this plan? List them explicitly. Do not produce a plan that buries assumptions without flagging them.

**Before producing any plan output, confirm owner names.** A plan distributed at kickoff with "[SA name]" placeholders throughout is not a usable plan — it is a draft. If owner names have not been provided in the input, stop and ask before producing any output: "To assign ownership correctly, I need the names of the leads for each workstream. Please confirm: [list workstreams identified from scope]. If names are not yet confirmed, say so and I will produce the plan with [TBC — confirm before distributing] placeholders and flag it as DRAFT."

Do not proceed to plan output until the user has responded — either with names, or with an explicit instruction to proceed with TBC placeholders. Do not silently infer that placeholders are acceptable because the user said they don't know who's doing what. The user must make that call explicitly.

**Consuming matter-intake-scoping Mode 2 output:**
When a Mode 2 scope summary from matter-intake-scoping is provided, map its fields directly to plan inputs — do not treat it as generic prose to be reinterpreted:

| matter-intake-scoping field | Maps to plan input |
|---|---|
| Inclusions | Workstream scope and deliverables — what each workstream must produce |
| Exclusions | Explicit out-of-scope items — flag in plan notes to prevent drift |
| Assumptions | RAID log A-entries on matter opening; also populate dependency register where assumptions are information dependencies |
| Constraints | Phase duration limits, resource constraints, fixed external dates |
| Milestones | Matter plan milestone list starting point — validate against phase pattern before finalising |
| Fee basis | Matter setup recommendations — phased vs single matter, whether fee structure requires phase-level tracking |
| LPM involvement definition | Communication schedule and plan maintenance responsibilities |

If any of these fields are absent from the scope summary, flag the gap before producing the plan.

### Step 2: Identify phases and workstreams
Break the matter into phases (sequential stages with defined entry/exit criteria) and workstreams (parallel lines of work that run across phases). These are different dimensions of the same plan.

**Phases** are time-based and sequential. Movement between phases should be a deliberate decision — a phase gate — not just elapsed time. Phase gates are moments where the partner (and sometimes the client) confirms: the prior phase work is complete to the required standard, the conditions for the next phase are met, and the team is authorised to proceed. Common phase patterns by matter type are in the domain knowledge section below.

**Workstreams** are function-based and often parallel: Corporate, Tax, Employment, Real Estate, Regulatory, Finance. On multi-jurisdiction matters, workstreams may be replicated per jurisdiction (Germany Corporate, Netherlands Corporate) or structured as a single cross-border workstream with jurisdiction leads beneath it. The right structure depends on whether jurisdictions are executing the same work in parallel or different work that converges.

The matter plan is the intersection: which workstreams are active in which phases, what each produces, and who owns it.

### Step 3: Identify milestones and dependencies
Milestones are binary — done or not done. Not "75% complete." Not "progressing well." A milestone marks the completion of something significant: regulatory filing submitted, DD report issued, transaction documents agreed, execution complete. Every milestone must have a named owner and a target date.

Flag dependencies explicitly. Three types matter in legal work:

**Predecessor dependencies** — X cannot start until Y is complete. These are the critical path candidates. Tag them by type for timeline-generator: FS (Finish-to-Start), FF (Finish-to-Finish), SS (Start-to-Start), SF (Start-to-Finish). The most common in legal work is FS — one thing must finish before the next can start. FF and SS arise most often in multi-jurisdiction matters where parallel workstreams must reach a milestone together before converging.

**Shared resource dependencies** — X and Y both require the same person at the same time. Surface these at planning stage. Resource-planner handles the detailed analysis; this skill flags the conflict.

**Information dependencies** — X cannot proceed without confirmation from an external party: a regulatory body, the counterparty, a tax authority, a client internal team. These are the most dangerous because their duration is outside the firm's control. For every information dependency: who is providing it, what is the expected lead time, and what is the downstream impact if delayed by two weeks / four weeks.

### Step 4: Assign owners
Every workstream needs a single named owner. Not "the London team" — a person. Not "local counsel" — a named firm and, where known, a named individual. Ownership without accountability is a workstream that will drift.

Below the workstream owner: identify whether each workstream has sufficient resource at the right level. Gearing matters — a workstream staffed only with senior associates will be expensive and slow on routine tasks; a workstream with no senior resource will escalate everything. Flag gearing concerns; resource-planner handles the detailed analysis.

### Step 5: Build matter setup recommendations
Document the matter configuration before the plan is finalised. This is easiest to get right at setup and hardest to fix once the matter is running.

**Single matter or phased structure?**
A single matter with one code simplifies billing for straightforward work. Phased matters allow phase-level financial tracking and phase-gate cost controls — essential where client approval is required before proceeding, or where the fee arrangement changes between phases.

**Task code design:**
Task codes determine what data you can extract. Design them to match the reporting the matter will require:
- If status reports have a row per workstream, each workstream needs a code
- If the budget was built by jurisdiction, each jurisdiction needs a code
- If there will be a phase-gate cost discussion with the client, each phase needs a code
- If there will be a local counsel cost comparison at close, each external firm needs a code

The most common failure: generic codes (e.g. "Corporate," "Tax") when the matter has identifiable sub-workstreams. The data becomes too aggregated to be useful for anything except the total figure.

**Billing instruction:**
Once task codes are agreed, produce a one-paragraph billing instruction specifying which code covers which work. Distribute at kickoff. Without it, each timekeeper guesses, and data quality degrades within the first billing cycle.

### Step 6: Produce the plan
Produce outputs in sequence: matter plan first, workstream plans per workstream, then matter setup recommendations. Each is a standalone output for the relevant audience.

**Matter plan format:**
- Phase summary: phase name, entry criteria, exit criteria, duration estimate, owner, key milestones
- Workstream summary: workstream, owner, active phases, key deliverables, dependencies flagged by type
- Dependency register: dependency, type (predecessor / resource / information), dependent task, blocking task, owner, impact if delayed

**Workstream plan format (per workstream):**

Task table — required columns in this order. Do not omit any column, even if a field is empty:

| Unique ID | Task ID | Task Summary | Task Description | Owner | Due Date | Duration (days) | Predecessor(s) | Dep Type | Milestone | Status | Progress Notes | Task Code |

- **Unique ID:** [MatterCode]-T-[sequential number, matter-scoped, never reused] — e.g. 88234-T-001, 88234-T-002. Continues across all workstreams — Corporate tasks might be 88234-T-001 to 88234-T-012, Employment 88234-T-013 to 88234-T-019. Do not restart numbering per workstream.
- **Task ID:** Human-readable within-plan reference (e.g. WS1-T01) — used in the document for readability and predecessor references.
- **Due Date:** Specific calendar date. Not a phase reference. Not "Week 3." A date.
- **Predecessor(s):** Task ID (human-readable) or "None" — never leave blank.
- **Progress Notes:** Leave blank if not started — but the column must be present.

Milestone list: Unique ID | Milestone ID | Milestone Description | Owner | Target Date | Predecessor Task(s) | Phase Gate? | RAG

Open items: assumptions, outstanding information requests, external confirmations needed.

**Kickoff agenda (produce on request):**
Draft from the matter plan: scope confirmation, workstream introductions, milestone walk-through, dependency flags, matter setup briefing (task codes and billing instruction), escalation path, next review date.

---

## Domain Knowledge — Matter Type Phase Patterns

Starting points, not prescriptions. The value is in documenting how this matter's phases differ from the standard pattern and why.

**Corporate transaction (M&A, carve-out, disposal):**
Preparation → Due Diligence → Negotiation → Signing → Regulatory / Conditions Precedent → Completion → Post-Completion

Phase gates: DD report sign-off before negotiation commences; board/client approval before signing; CP satisfaction confirmation before completion is scheduled. Post-completion actions (filings, registrations, notifications) are frequently under-planned — they have no revenue attached and get de-prioritised. Plan them explicitly.

**Corporate reorganisation (multi-jurisdiction):**
Scoping / Structure Design → Sequencing → Jurisdiction-Level Execution → Completion / Registration Confirmations → Post-Completion (strike-offs, deregistrations, final filings)

Key dependency pattern: jurisdictions that must complete before others can begin are the structural critical path. This is not a scheduling preference — it is a legal sequencing requirement. Identify the dependency chain early and pass it to timeline-generator as hard FS dependencies. The reorg-step-plan-builder skill in the LPM for M&A plugin provides detailed methodology for this matter type.

Phase gates: structure design sign-off before execution commences; prerequisite jurisdiction completions before dependent jurisdictions begin; final registration confirmations before post-completion actions start.

**Litigation / arbitration:**
Pleadings → Disclosure / Discovery → Evidence → Hearing → Post-Hearing / Enforcement

Information dependency pattern: third-party disclosure, expert availability, and hearing dates are all outside the firm's control. Plan what is within the firm's control in detail; flag the external dependencies explicitly with duration ranges.

Phase gates: strategy confirmation before pleadings filed; disclosure strategy agreed before document review commences; evidence strategy confirmed before witness statements prepared.

**Regulatory (licensing, authorisation):**
Assessment → Application Preparation → Submission → Regulatory Review Period → Determination → Implementation

The regulatory review period is an information dependency of unknown duration. It blocks some downstream activities entirely and others only partially. At planning stage: identify what can run in parallel during review, what is blocked until determination, and the minimum / expected / maximum duration range.

**Finance / capital markets:**
Mandate / Structuring → Documentation → Due Diligence → Marketing / Roadshow → Signing → Settlement / Closing

Phase gates: documentation agreed before marketing commences; DD confirmed before final terms are set. Timeline compression is the dominant pressure in capital markets work — the plan must be built to accommodate acceleration without losing track of what has been skipped or deferred.

---

## Domain Knowledge — Common Planning Failures

**The plan is built but never distributed.** The partner approves it, the LPM files it, the team never sees it. A plan nobody knows about has no effect on behaviour. Distribute at kickoff. Reference at every status call. Update when scope changes.

**Milestones are confused with activities.** "Draft SPA" is an activity. "SPA agreed and execution-ready" is a milestone. Status reports against activities produce noise; against milestones, signal. Every workstream should have at least one milestone per reporting period. If it doesn't, the workstream has no meaningful status to report.

**Dependencies are identified but not managed.** A dependency register that isn't reviewed is documentation, not management. Review at every status call: which predecessors are at risk, which information requests are outstanding, which external confirmations haven't arrived. The predecessor that slips without anyone noticing is the one that shifts the critical path.

**Rolling wave planning is treated as failure.** It isn't. On complex matters, detailed planning beyond the current phase is often premature. The rolling wave approach is disciplined: plan the current phase in detail, stub the next, set a trigger milestone for when the next phase gets planned. The stub is not a failure — it is an acknowledgment that premature planning is as dangerous as no planning.

**Matter setup is delegated to billing admin.** The configuration decision must be made by the LPM or partner before the matter opens. Once time is being recorded, reconfiguring codes strands historical data. The billing team executes the configuration. The LPM designs it.

**Workstream owners are organisations, not people.** "Local counsel — Germany" is not an owner. When a workstream slips and escalation is needed, a name is needed.

**The plan isn't updated when scope changes.** scope-change-controller manages scope changes. But a change that doesn't flow through to the plan produces a plan that no longer reflects what the team is doing. When scope-change-controller logs an approved change, assess whether the plan needs updating — and update it.

**Workstream plans are submitted but never read against each other.** On large programmes, the central LPM receives workstream workstream plans but never reviews them cross-workstream. The critical path crosses workstream boundaries; no individual workstream lead sees it. The central LPM holds the cross-workstream view — identifying where workstream milestones create programme-level dependencies is the primary planning value-add.

**Plan maintenance falls entirely to the LPM.** This is the dominant failure mode in practice. Lawyers do not update task plans — not because they are negligent, but because updating a SharePoint List or Excel tracker is not how legal work gets communicated. Legal work gets communicated in email. The information required to keep the plan current exists in the correspondence; extracting it and entering it into a structured format is a manual translation task that the LPM performs for the entire matter. On a 12-month cross-border reorg with 40+ active workstreams, this is hundreds of hours of work that adds no analytical value — it is transcription.

The consequence is data degradation. Tasks show "In progress" for weeks because nobody updated them to "Complete." Due dates drift because the LPM didn't catch the date change buried in a jurisdiction email. Progress notes become stale. The plan stops reflecting reality. Status reports built from the plan become unreliable. The partner loses confidence in the reporting. The investment in planning is retrospectively judged as wasted effort.

The solution is not to ask lawyers to update the plan more diligently. It is to remove the manual extraction step entirely. Mode 5 exists for this reason: Claude reads the correspondence, proposes the updates, and the LPM confirms. The LPM's role shifts from data entry to judgment — which is where their value actually lies. In connected mode, this operates continuously: the plan is always one confirmation away from being current.

---

## Standard Plan Fields

These are the minimum required fields for each plan component. A plan entry that omits any of these fields cannot be used to drive execution, status reporting, or escalation — it is a list, not a plan.

### Workstream header (one per workstream)
| Field | Purpose |
|---|---|
| Unique ID | Stable matter-scoped identifier assigned on creation and never changed — e.g. [MatterCode]-WS-001. Used by other skills to reference this workstream in RAID entries, scope change notices, and status reports |
| Workstream name | Consistent label used across all plan documents and status reports |
| Owner (named individual) | Accountable for workstream delivery — one person, not a team or firm |
| Phase(s) active | Which phases this workstream operates in |
| Task code | The billing code all time in this workstream is recorded against |
| Escalation contact | Who the owner escalates to if a workstream issue cannot be resolved at owner level |

### Task entry (one per task)
| Field | Purpose |
|---|---|
| Unique ID | Stable matter-scoped identifier assigned on creation and never changed — e.g. [MatterCode]-T-001. Used by other skills to reference this task in RAID entries, scope change notices, and status updates. Never reassigned even if the task is moved, renamed, or restructured. |
| Task ID | Human-readable reference code (e.g. WS1-T01) for use within the plan document |
| Task summary | Single-line label — verb + noun ("Prepare tax opinion", "Submit regulatory filing") |
| Task description | Multi-line detail — what is being done, what the output is, any constraints or instructions |
| Workstream | Which workstream this task belongs to — must match the workstream header label exactly |
| Phase | Which phase this task falls in — must match the phase name in the matter plan |
| Milestone | Which milestone this task contributes to — links task-level execution to milestone-level reporting |
| Owner | Named individual responsible for completion |
| Due date | Target completion date — specific date, not a phase reference |
| Duration estimate | Working days — not calendar days unless explicitly stated. Even rough estimates surface planning gaps. |
| Predecessor(s) | Task ID(s) that must complete before this task can start — required for critical path calculation |
| Dependency type | FS / FF / SS / SF — for timeline-generator |
| Status | Not started / In progress / Complete / Blocked |
| Progress notes | Free text — current position, blockers, next action. Updated at each status review. |
| Task code | Billing code for time recorded against this task |

### Milestone entry (one per milestone)
| Field | Purpose |
|---|---|
| Unique ID | Stable matter-scoped identifier assigned on creation and never changed — e.g. [MatterCode]-M-001. Used by other skills to reference this milestone in timeline-generator, status reports, and phase gate records |
| Milestone ID | Human-readable reference code (e.g. WS1-M01) for use within the plan document |
| Milestone description | Binary statement of completion — "X submitted", "Y agreed", "Z registered" |
| Owner | Named individual responsible for confirming completion |
| Target date | Specific date, not a phase reference |
| Predecessor task(s) | Task IDs that must complete for this milestone to be reached |
| RAG status | Green / Amber / Red — assessed at each status review |
| Phase gate? | Yes / No — whether completion of this milestone triggers a phase gate decision |

### Dependency entry (one per flagged dependency)
| Field | Purpose |
|---|---|
| Dependency ID | Short reference code |
| Type | Predecessor / Resource / Information |
| Blocking item | What must complete or be received |
| Dependent item | What cannot proceed until the blocking item resolves |
| Owner of blocking item | Who is responsible for the blocking item (may be external) |
| Expected resolution date | Target date for the blocking item to resolve |
| Impact if delayed 2 weeks | Programme-level impact — which milestones move, by how much |
| Impact if delayed 4 weeks | Programme-level impact at greater delay |

A dependency register with no "impact if delayed" column is not a risk management tool. It is a list of things that might go wrong with no assessment of how wrong.

---

## Communication Rhythm

The plan must include the meeting and reporting cadence — not as a stakeholder-comms-planner output, but as plan infrastructure. A plan with no review cadence baked in goes stale immediately and is never formally maintained.

**Standard cadence elements to include in every plan:**

**Status call (internal):** Frequency (weekly / fortnightly), attendees (workstream owners minimum), purpose (milestone progress against plan, dependency review, escalation triage). The plan is reviewed at this call — not just discussed. If the plan is not on screen, it is not being managed.

**Client reporting:** Frequency (weekly / monthly / milestone-triggered), format (status report from status-report-drafter), owner of report preparation.

**Phase gate review:** Scheduled at the start of each phase for the end of the current phase. Owner: partner and LPM. Purpose: confirm phase completion criteria are met, authorise progression. Not a status call — a decision point.

**Plan review:** Frequency (monthly on most matters, fortnightly on fast-moving ones). Purpose: assess whether the plan still reflects the scope, flag tasks that have drifted from the plan, update estimates. Owner: LPM. The output of a plan review is either a confirmed plan or an updated plan — not a verbal reassurance that "things are on track."

**Billing review:** Frequency (monthly, aligned with billing cycle). Purpose: review WIP against task codes, identify time recorded to wrong codes, confirm task code allocations for upcoming work. Owner: LPM with billing-cycle-manager.

Add a summary communication schedule to the matter plan document: meeting type, frequency, owner, linked plan output.

---

## Output Format

All outputs produced as .docx unless the user explicitly requests otherwise. These are matter records — they belong in the matter folder.

Every output includes the identifier block:
```
Client: [Name]          Client number: [Number]
Matter: [Name]          Matter number: [Number]
Plan version: [v1.0]    Prepared by: [LPM name]    Date: [Date]
```

Flag rolling wave stubs clearly: **[ROLLING WAVE — [phase name] to be planned in detail at: [trigger milestone]]**

**Structured data export:**
Every plan output is accompanied by a structured data export (CSV or JSON) containing all task and milestone entries with their full field set. This is the input format for a SharePoint List or equivalent system of record. The .docx is for human distribution and reference. The structured export is for machine-readable tracking — it is what makes Mode 5 updates, connected-mode monitoring, and cross-skill data exchange possible.

A plan that exists only as a Word document cannot be updated by Claude. A plan that exists as a SharePoint List can. The standard fields defined in this skill are the SharePoint List schema. Firms deploying this skill should configure the List at matter setup using the structured export from the initial plan build.

Plan versioning: every output is stamped with a version number (v1.0, v1.1, etc.) and date. The prior version is retained. Never overwrite a plan version — the version history is the audit trail of how the matter evolved.

**Every plan output must include all of the following. Do not produce a plan without these elements:**

1. Identifier block (Client, Matter, version, LPM, date)
2. Matter plan (phases, workstream summary, milestone register, dependency register)
3. Communication schedule
4. Matter setup recommendations (task codes, billing instruction)
5. Workstream plan for every workstream — all required columns present (see Step 6)
6. RAID log opening entries
7. Cross-skill handoff prompts (see Cross-Skill Handoffs section) — produce these at the end of every plan output as a named section: "Next Steps — Cross-Skill Handoffs"
8. Structured data export (CSV) — task and milestone entries with all fields. Produce inline as a labelled section if a file cannot be attached.

Items 7 and 8 are not optional extras. A plan with no handoff prompts leaves the LPM to remember which other skills need to be triggered. A plan with no structured export cannot be updated by Claude.

---

## Cross-Skill Handoffs

- **From matter-intake-scoping:** Scope summary (Mode 2/3 output) is the primary input. Scope is set; this skill operationalises it. Consume using the field mapping in Step 1.
- **From scope-change-controller:** When an approved scope change is passed in, treat it as a Mode 5 trigger. Read the change notice, identify which plan components are affected (tasks, milestones, owners, dependencies, phases), propose updates as a confirmation list, and produce an updated plan version on confirmation. A scope change that does not flow through to the plan produces drift — the plan stops reflecting what the team is actually doing. Version the output: if the current plan is v1.2, the post-change plan is v1.3.
- **To timeline-generator:** Dependency-flagged task list and milestone list with dependency type tags (FS/FF/SS/SF). Pass with: "Build a dependency network and critical path from this plan."
- **To scope-change-controller:** Completed plan is the scope baseline. Pass with: "Set up scope baseline — here is the agreed matter plan."
- **To status-report-drafter:** Milestone list and workstream structure are the reporting baseline. status-report-drafter reports progress against milestones, not task completion percentages.
- **To stakeholder-comms-planner:** Workstream owners, phase cadence, and milestone schedule inform communication rhythm design.
- **To resource-planner:** Workstream resource requirements and gearing concerns flagged in the plan.
- **To billing-cycle-manager:** Matter setup recommendations — task codes, phase structure, billing instruction.
- **To risk-and-issues-manager:** Information dependencies and plan assumptions are inputs for the RAID log. Pass as A-entries (Assumptions) and R-entries (Risks) on matter opening.

---

**Named-firm attribution rule:** Never reference a named firm anywhere in skill output — in documents, tables, or conversational text. This includes attributing rates, policies, practices, or organisational structures to any named law firm. The skill does not know any firm's actual structure, rates, or policies. Use "confirm with Pricing", "confirm with Finance", or "firm policy — confirm before applying." The rule applies to everything this skill produces, not just formal documents.

---

## M365 Connected Mode (Optional)

**Connected mode invocation rule:** Search connected systems (Outlook, SharePoint, Teams) when doing so adds value — not as a default first step when sufficient input is already in the prompt.

- **Sufficient input already provided:** User has pasted emails, documents, or data with full context. Engage with what is there. Do not search first — it adds friction without adding information.
- **Input is incomplete or proactive surfacing is warranted:** User references something that should be retrieved ("there's an invoice in Outlook", "it's end of month"), or connected mode is running in background/scheduled mode. Search proactively — this is the inverted invocation model and is the highest-value connected mode behaviour.

The distinction is whether the user has already provided what is needed. If yes, work with it. If no, or if proactive surfacing serves the LPM, search.

When the M365 MCP connector is enabled (Claude Team/Enterprise), this skill can:
- Search SharePoint for prior matter plans of the same type to use as planning precedent
- Pull scope summaries and engagement letters from SharePoint to inform the session
- Search Outlook for kickoff correspondence to identify planning decisions already made
- Create a kickoff calendar invite in Outlook with agenda drafted from the matter plan
- Push approved tasks and milestones to Planner or Teams for live tracking post-kickoff

Without the connector: provide scope summary, prior plans, and relevant correspondence by pasting text or uploading files directly.
