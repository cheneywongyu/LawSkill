---
id: "262cc35d-e55a-55b4-a078-d47004cec4a7"
title: "Timeline Generator"
title_cn: "时间线生成器"
slug: "timeline-generator"
url: "https://lawve.ai/@scott-margetts/skill/timeline-generator"
author: "Scott Margetts"
author_slug: "scott-margetts"
category: "legal-operations"
language: "en"
license: "Apache 2.0"
jurisdictions: "INT"
status: "active"
source_index: 143
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 时间线生成器

原始名称：`Timeline Generator`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/timeline-generator  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

# 时间线生成器

**Claude 的 LPM 核心插件的一部分**

根据事务计划构建依赖网络和关键路径。制作交互式视觉时间线。模拟当事情花费的时间比计划的时间长时，项目完成会发生什么情况。

---

## 它的作用

从您的事项计划中获取任务列表 - 具有依赖性类型 (FS/FF/SS) 和持续时间估计 - 并计算哪些任务位于关键路径上，哪些任务有浮动，以及当出现问题时程序完成会发生什么情况。

四种模式：

**模式 1 — 基线构建。** 在事项设置时，构建依赖网络，识别关键路径和近关键任务，生成交互式 HTML 甘特图。向前或向后调度——如果客户有固定的完成期限，该技能将通过网络向后工作，得出每项任务所需的开始日期，并立即标记程序是否已经不足。

**模式 2 — 假设分析。** 中间事项：对建议的延迟进行建模并获得完整的级联影响。哪些任务发生了变化，哪些里程碑发生了变化，关键路径是否发生了变化，客户需要知道什么？生成客户通知草稿并与受影响的当地律师进行沟通。提供恢复选项（崩溃、快速通道、延迟）供 LPM 和合作伙伴考虑。

**模式 3 — 基线更新。** 确认更改，对基线进行版本化（计划调整的较小增量，结构变化的主要增量），仅针对受影响的任务生成原始日期与修订日期的比较表。触发跨技能切换。

**模式 4 — 工作流或管辖区视图。** 为单个工作流或管辖区提取经过过滤的时间线 — 用于当地法律顾问沟通、合作伙伴工作流更新或完整计划网络过多的任何情况。浮点值是从整个网络继承的，而不是在子集上重新计算。上游限制和下游里程碑以独特的视觉处理方式显示，因此接收者无需看到完整的程序即可了解其门控。

---

## 依赖类型

**FF（完成到完成）— 并行执行工作中的主导模式。** 两个工作流同时运行；约束控制它们相对于彼此完成的时间。示例：股利决议于周一完成；股份转让必须在周四之前完成。两者从一开始就并行运行——FF+3d 延迟控制传输何时关闭。在甘特图中显示为连接两个条形终点的括号，并标记了滞后值。
**FS（完成到开始）— 严格的法律排序要求。** 一项任务只有在另一项任务完全完成后才能开始。德国实体注册必须在荷兰解散开始之前完成——不可能并行执行，因为下游步骤的法律有效性取决于上游步骤的完成。也与监管窗口的滞后一起使用：提交备案 → [30 WD 滞后] → 收到决定 → 继任者开始。

**SS（开始到开始）。** 两个工作流必须按协调顺序启动，但随后可以独立进行。

---

## 何时使用

- 根据启动计划制定初始事项时间表
- 客户有固定的完成日期——是否可以实现，我们需要什么日期开始？
- 德国律师表示监管窗口是 12 周，而不是 8 周——有何举措？
- 一项近乎关键的任务已经下滑——它是否取代了关键路径？
- 确认延迟并更新计划基线
- 当地律师询问他们的时间表——提出仅限德国或仅限就业的观点

---

## 输入

**最小可行输入：** 任务 ID、持续时间（工作日）、前置任务、依赖类型 (FS/FF/SS) 以及开始日期或固定结束日期。

**首选输入：** 从 Matter-plan-builder 导出的结构化 CSV — 这提供了完整的 13 字段任务模式，其中所有依赖项数据均已预先格式化。

**对于模式 2：** 现有基线（作为文件或粘贴）加上简单语言的建议更改。粘贴电子邮件 - 该技能可识别受影响的任务并对级联进行建模。

**对于模式 4：** 完整基线加上要过滤的工作流或管辖区名称。

---

## 视觉输出

主要输出是在 Claude 中内联渲染的交互式 HTML 画布甘特图 — 不是文本表，也不是 Mermaid。它在时间线可视化方面产生比 PowerPoint 或 Excel 更好的输出，并且可以直接截屏以用于状态报告或客户端平台。

甘特图包括：
- 红色条表示关键路径任务，绿色条表示非关键任务
- 浮动显示为褪色的条形扩展，并标有以天为单位的值
- FF 依赖性显示为终点之间的括号，并标记有滞后 — 而不是箭头
- FS 依赖关系作为方向箭头
- 计划完成和阶段关口的里程碑钻石
- 用于实时级联建模的假设滑块，其中监管窗口位于关键路径上
- 在模式 4 中：灰色条表示上游约束，不同的里程碑标记表示下游程序关卡

---

## 关键行为
**浮点值是继承的，而不是重新计算。** 在工作流视图（模式 4）中，浮点值始终来自完整网络计算。在完整程序中至关重要的任务在过滤视图中也至关重要 - 过滤器不会创建不存在的浮动。

**向后安排标记。** 当提供固定的完成日期时，如果所需的开始日期已过去，则技能会立即标记 - 程序在开始之前就处于赤字状态。

**监管滞后 - 三种情况。** 当滞后代表外部确定窗口时，该技能会确认它是硬性最小值还是预期持续时间。对于预期持续时间，它会产生三种情况：最佳情况、预期情况和+50%——分析需要在窗口打开之前与客户进行截止日期风险对话。

**滞后约定。** 滞后从前一个 EF 之后的工作日开始向前计数。 FS 滞后于 EF 5 月 7 日星期三的 5 WD → 后继 ES = 5 月 14 日星期三。

**关键路径结构变化。** 当假设分析将关键路径从一个序列转移到另一个序列时，级联影响表会显示每个任务的 CP 状态变化 - 新关键/仍然关键/现在接近关键/未更改 - 因此 LPM 知道将监控注意力重定向到哪里，而不仅仅是发生了多少变化。

**版本控制。** 用于计划调整的小增量（v1.0 → v1.1）。结构变化的主要增量（v1.0→v2.0）——新阶段、添加或删除的工作流。

---

## 跨技能交接

**消耗：**
- 问题计划构建器结构化导出（依赖关系标记的任务和里程碑列表） - 切换提示：“从此计划构建依赖关系网络和关键路径”
- 风险和问题管理器 RAID 违规通知 - 信息依赖性的假设违规是模式 2 触发器

**饲料：**
- 状态报告起草者：修订里程碑日期→更新报告基线
- 范围更改控制器：如果程序恢复需要范围更改→范围信号
- 问题计划构建器：如果模式 2 确认计划结构发生变化 → 模式 5 计划更新触发
- 风险和问题经理：已确认的延迟记录为问题；可压缩滞后假设记录为风险
- 利益相关者沟通规划者：修订里程碑日期和模式 2 沟通草案

---

## M365 连接模式（克劳德团队/企业）

当启用 M365 连接器时：
- 直接从 SharePoint 提取事务计划 — 无需上传
- 监控 Outlook 中是否存在表明时间线变化的电子邮件，并将其显示为模式 2 触发器
- 确认模式 3 后更新 SharePoint 列表或 Planner 中的里程碑日期
- 在 Outlook 草稿模式下起草客户通知以供合作伙伴审核

---

## LPM 核心插件的一部分

LPM 核心插件对适用于任何法律事务的操作方法进行了编码。时间线生成器位于技术中心：所有其他技能要么生成为该技能提供数据的数据，要么消耗其生成的时间线数据。

**满足此要求的技能：** 事项计划制定者、风险和问题经理
**消耗这一技能的技能：**状态报告起草者、范围变更控制者、事项计划制定者（模式5）、利益相关者沟通计划者、风险和问题经理

完整插件：[github.com/legalopsconsulting/lpm-skills](https://github.com/legalopsconsulting/lpm-skills)

---

*法律运营咨询有限公司。阿帕奇 2.0.*

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

# timeline-generator

**Part of the LPM Core Plugin for Claude**

Build a dependency network and critical path from a matter plan. Produce an interactive visual timeline. Model what happens to programme completion when things take longer than planned.

---

## What it does

Takes the task list from your matter plan — with dependency types (FS/FF/SS) and duration estimates — and calculates which tasks are on the critical path, which have float, and what happens to programme completion when something slips.

Four modes:

**Mode 1 — Baseline build.** At matter setup, build the dependency network, identify the critical path and near-critical tasks, produce an interactive HTML Gantt. Forward or back scheduling — if the client has a fixed completion deadline, the skill works backwards through the network to derive the required start date for each task, and immediately flags if the programme is already in deficit.

**Mode 2 — What-if analysis.** Mid-matter: model a proposed delay and get the full cascade impact. Which tasks move, which milestones slip, does the critical path change, what does the client need to know? Produces draft client notification and affected local counsel communications. Offers recovery options (crash, fast-track, defer) for the LPM and partner to consider.

**Mode 3 — Baseline update.** Confirm a change, version the baseline (minor increment for schedule adjustments, major for structural changes), produce a comparison table of original vs revised dates for affected tasks only. Triggers cross-skill handoffs.

**Mode 4 — Workstream or jurisdiction view.** Extract a filtered timeline for a single workstream or jurisdiction — for local counsel communications, partner workstream updates, or any situation where the full programme network is too much. Float values are inherited from the full network, not recalculated on the subset. Upstream constraints and downstream milestones are shown with distinct visual treatment so the recipient understands their gating without seeing the full programme.

---

## Dependency types

**FF (Finish-to-Finish) — the dominant pattern in parallel execution work.** Two workstreams run simultaneously; the constraint controls when they finish relative to each other. Example: dividend resolution completes Monday; share transfer must complete by Thursday. Both run in parallel from the start — the FF+3d lag controls when the transfer closes. Shown in the Gantt as a bracket connecting the finish points of the two bars, with the lag value labelled.

**FS (Finish-to-Start) — hard legal sequencing requirements.** One task cannot start until another is fully complete. Germany entity registration must complete before Netherlands dissolution can begin — there is no parallel execution possible because the legal validity of the downstream step depends on the upstream step being complete. Also used with lag for regulatory windows: filing submitted → [30 WD lag] → determination received → successor starts.

**SS (Start-to-Start).** Two workstreams must launch in coordinated sequence but can then proceed independently.

---

## When to use it

- Building the initial matter timeline from a kickoff plan
- Client has a fixed completion date — is it achievable, and what date do we need to start?
- German counsel says the regulatory window is 12 weeks, not 8 — what moves?
- A near-critical task has slipped — has it taken over the critical path?
- Confirming a delay and updating the programme baseline
- Local counsel asks for their timeline — produce a Germany-only or Employment-only view

---

## Inputs

**Minimum viable input:** Task ID, Duration (working days), Predecessor(s), Dependency type (FS/FF/SS), and a start date or fixed end date.

**Preferred input:** The structured CSV export from matter-plan-builder — this provides the full 13-field task schema with all dependency data pre-formatted.

**For Mode 2:** The existing baseline (as a file or pasted) plus the proposed change in plain language. Paste the email — the skill identifies the affected task and models the cascade.

**For Mode 4:** The full baseline plus the workstream or jurisdiction name to filter on.

---

## Visual output

The primary output is an interactive HTML canvas Gantt rendered inline in Claude — not a text table, not Mermaid. It produces better output than PowerPoint or Excel for timeline visualisation and can be screenshotted directly for status reports or client decks.

The Gantt includes:
- Red bars for critical path tasks, green for non-critical
- Float shown as a faded bar extension with the value in days labelled
- FF dependencies shown as a bracket between finish points with the lag labelled — not an arrow
- FS dependencies as directional arrows
- Milestone diamonds at programme completion and phase gates
- What-if slider for real-time cascade modelling where a regulatory window sits on the critical path
- In Mode 4: grey bars for upstream constraints, distinct milestone markers for downstream programme gates

---

## Key behaviours

**Float is inherited, not recalculated.** In workstream views (Mode 4), float values always come from the full network calculation. A task that is critical in the full programme is critical in a filtered view — the filter does not create float that doesn't exist.

**Back-scheduling flag.** When a fixed completion date is provided, the skill flags immediately if the required start date is in the past — the programme is in deficit before it begins.

**Regulatory lag — three scenarios.** When a lag represents an external determination window, the skill confirms whether it is a hard minimum or an expected duration. For expected durations, it produces three scenarios: best case, expected, and +50% — the analysis needed to have the deadline risk conversation with the client before the window opens.

**Lag convention.** Lag counts forward from the working day after predecessor EF. FS lag 5 WD from EF Wednesday 7 May → successor ES = Wednesday 14 May.

**Critical path structure change.** When a what-if analysis shifts the critical path from one sequence to another, the cascade impact table shows CP status change per task — New critical / Remains critical / Now near-critical / Unchanged — so the LPM knows where to redirect monitoring attention, not just how much things have moved.

**Versioning.** Minor increment (v1.0 → v1.1) for schedule adjustments. Major increment (v1.0 → v2.0) for structural changes — new phases, workstreams added or removed.

---

## Cross-skill handoffs

**Consumes:**
- matter-plan-builder structured export (dependency-tagged task and milestone list) — handoff prompt: "Build a dependency network and critical path from this plan"
- risk-and-issues-manager RAID breach notifications — an assumption breach on an information dependency is a Mode 2 trigger

**Feeds:**
- status-report-drafter: revised milestone dates → updated reporting baseline
- scope-change-controller: if programme recovery requires scope changes → scope signal
- matter-plan-builder: if Mode 2 confirms plan structure changes → Mode 5 plan update trigger
- risk-and-issues-manager: confirmed delays logged as Issues; compressible lag assumptions logged as Risks
- stakeholder-comms-planner: revised milestone dates and Mode 2 draft communications

---

## M365 Connected Mode (Claude Team / Enterprise)

When the M365 connector is enabled:
- Pulls the matter plan directly from SharePoint — no upload needed
- Monitors Outlook for emails signalling timeline changes, surfacing them as Mode 2 triggers
- Updates milestone dates in SharePoint Lists or Planner when Mode 3 is confirmed
- Drafts client notifications in Outlook draft mode for partner review

---

## Part of the LPM Core Plugin

The LPM Core Plugin encodes the operational methodology that applies to any legal matter. Timeline-generator sits at the technical centre: every other skill either produces data that feeds this skill or consumes the timeline data it produces.

**Skills that feed this one:** matter-plan-builder, risk-and-issues-manager
**Skills that consume this one:** status-report-drafter, scope-change-controller, matter-plan-builder (Mode 5), stakeholder-comms-planner, risk-and-issues-manager

Full plugin: [github.com/legalopsconsulting/lpm-skills](https://github.com/legalopsconsulting/lpm-skills)

---

*LegalOps Consulting Limited. Apache 2.0.*

---

## SKILL.md Original

---
name: timeline-generator-scott-margetts
description: "Build dependency network and critical path from a matter plan. Produce an interactive Gantt, flag near-critical tasks, and run what-if cascade scenarios when delays occur — showing programme impact and drafting communications. Produces filtered workstream or jurisdiction views for local counsel. Trigger on: 'build a timeline', 'Gantt chart', 'critical path', 'what if X is delayed', 'what moves if', 'schedule impact', 'how does this affect the programme', 'when do we finish', 'can we still close on time', 'if we miss this deadline', 'run a what-if', 'visualise the plan', 'Germany timeline', 'what does the Employment workstream look like', 'timeline for local counsel', 'just show me the [workstream] tasks'."
metadata:
  author: Scott Margetts
  license: Apache-2.0
  version: 2026.03.17
---

# Timeline Generator

## Purpose

Convert a dependency-tagged task list into a visual timeline with critical path analysis. Identify which tasks must complete on time for the matter to close as planned. Model delays before they happen — or calculate their programme-level impact after they do.

The what-if cascade is the central capability. When a jurisdiction delays, a regulatory determination runs long, or a counterparty goes quiet, the question is not just "is this task late" but "which of the twenty-three things downstream of this task now move, by how much, and what does the client need to know?" This skill produces that answer, along with the draft communications.

This skill consumes the structured output of matter-plan-builder and feeds its results back as updated milestone dates to status-report-drafter and scope-change-controller. It sits at the technical centre of the LPM plugin: every other skill produces or consumes timeline data; this skill owns the calculation layer.

---

## Operating Modes

### Mode 1 — Baseline build
At matter setup: build the dependency network from the matter plan, calculate the critical path and near-critical paths, produce the Gantt diagram and dependency summary. This is the timing baseline all future reporting measures against.

Input: matter-plan-builder structured export (CSV) or pasted task table with dependency tags. Minimum viable input: Task ID, Duration (working days), Predecessor(s), Dependency type (FS/FF/SS), and at least one fixed date anchor.

**Forward-scheduling vs back-scheduling:** If a programme start date is known but no fixed end date exists, schedule forward — calculate EF from ES. If a client completion deadline is fixed (the more common scenario in legal work), back-schedule — treat the completion date as the LF of the final task and work backward through the network to derive the required start date for each task. Flag which mode is in use and why. A back-scheduled plan immediately reveals whether the available time is sufficient: if the calculated start date for the first task is in the past, the programme is already in deficit before it begins.

### Mode 2 — What-if analysis
At any point during the matter: propose a change and receive a full cascade impact analysis. "German counsel now says 12 weeks, not 10" → this skill calculates which tasks move, which milestones slip, whether the critical path changes, and what the new programme completion date is. Produces a draft client notification and affected local counsel communications.

Input: existing baseline (uploaded or pasted) + proposed change described in plain language or as extracted from email.

### Mode 3 — Baseline update
Apply a confirmed change: update the timeline, version it, produce a comparison table (original dates vs revised dates for all affected tasks), and trigger cross-skill handoffs to status-report-drafter and scope-change-controller.

Input: existing baseline + confirmed change. Output: versioned updated baseline, comparison table, handoff prompts.

### Mode 4 — Workstream or jurisdiction view
Produce a filtered Gantt and timeline summary for a single workstream or jurisdiction, drawn from the full programme baseline. Use when local counsel needs their timeline without the full programme, when a partner asks for a single workstream update, or when preparing a communication for one team that should not expose programme-wide information.

Input: full baseline (or the relevant subset) + the workstream or jurisdiction to filter on.

**Three categories of task appear in a Mode 4 output:**

1. **In-scope tasks** — tasks belonging to the specified workstream or jurisdiction. Shown as normal coloured bars (critical path red, non-critical green). Float values inherited from the full network — not recalculated on the subset.

2. **Upstream constraints** — tasks in other workstreams that are hard predecessors to in-scope tasks. Shown as grey bars labelled "[External — constrains [Task ID]]." The recipient needs to see these to understand why their tasks have the dates they do, but should not be misled into thinking these are their responsibility.

3. **Downstream milestones** — programme milestones that in-scope tasks feed into. Shown as milestone diamonds labelled "[Programme milestone — [description]]." These give the recipient visibility of what their work is gating without exposing the full downstream network.

**Float must be inherited from the full network calculation, not recalculated on the subset.** A Germany registration task with 0 days float in the full programme has 0 days float in the Germany view. If float were recalculated on the Germany subset alone, tasks that are critical in the full network would appear to have float — which would be wrong and potentially dangerous. Always calculate against the full baseline first, then filter.

---

## Before Starting Any Mode

Confirm the following before running any calculation:

1. **Programme start date** — the date from which durations are calculated. If not provided, ask.
2. **Fixed external dates** — any dates that cannot move: regulatory filing deadlines, contractual completion dates, court dates, end-of-financial-year dates, client board approval windows. These are constraints, not estimates. Flag them explicitly — a fixed date on the critical path changes the calculation entirely.
3. **Duration units** — confirm whether durations are working days (Mon-Fri, default) or calendar days. Never infer.
4. **Working calendar exceptions** — flag any jurisdictions with non-standard working weeks (e.g. Middle East Friday-Saturday weekends, public holiday-heavy periods). Duration estimates that don't account for local calendars are wrong from day one.
5. **Lag/lead values** — where a predecessor has a waiting period before the successor can start (lag: positive days) or where the successor can start before the predecessor finishes (lead: negative days). Common in legal work: "regulatory filing submitted → 6-week determination window before successor can proceed" is a 30-working-day lag on a FS dependency.

**Regulatory lags require clarification and three-scenario modelling:** when a lag represents an external determination window, confirm whether it is (a) a hard minimum — the authority cannot determine before this period regardless of circumstances, or (b) an expected duration — the typical determination period, which could be shorter or longer.

For expected durations, produce three scenarios as a named output — do not just note the risk in prose:
- **Best case:** minimum credible determination period
- **Expected:** the stated duration
- **+50%:** expected duration × 1.5

Show the programme completion date under each scenario. This is the analysis the LPM needs to have the client conversation about deadline risk before the window opens. If the LPM cannot confirm which type the lag is, model as expected duration, produce all three scenarios, and flag the assumption explicitly.

If critical inputs are missing, stop and ask. Do not calculate against an incomplete network — the output will appear precise while being wrong.

---

## Step-by-Step Process

### Step 1: Build the dependency network
List all tasks in topological order — predecessors always appear before successors. Identify:
- **Network start tasks:** tasks with no predecessors (or no in-scope predecessors)
- **Network end tasks:** tasks with no successors — the milestone or task whose completion date is the programme completion date
- **Dependency edges:** for each task, record its predecessor(s) and dependency type (FS/FF/SS) plus any lag/lead value

**Lag convention:** lag counts forward from the working day after predecessor EF. FS lag 5 WD from EF Wednesday 7 May → successor ES = Wednesday 14 May (8, 9, 12, 13, 14 = 5 WD). Day zero is the day after EF, not EF itself. Apply this consistently — a one-day error in lag convention propagates to every downstream task on the same path.

Flag circular dependencies immediately — they are data errors and prevent calculation. A circular dependency means Task A depends on Task B and Task B depends on Task A. They appear most often when a task's predecessors have been entered as successors by mistake.

If the input contains resource or information dependencies (from matter-plan-builder's dependency register) that do not have their own task row, add them as explicit lag values on the FS relationship — do not silently omit them.

### Step 2: Forward pass — calculate Early Start and Early Finish
Work through tasks in topological order. For each task, calculate:

- **ES (Early Start):** the earliest date the task can begin, given its predecessors
- **EF (Early Finish):** ES + Duration (in working days, adjusted for weekends and flagged calendar exceptions)

**By dependency type:**
- **FF (Finish-to-Finish):** Successor EF ≥ Predecessor EF + lag. The successor cannot finish until the predecessor finishes. Both tasks run in parallel; the constraint controls the finish end, not the start. This is the dominant dependency type in multi-jurisdiction execution work — two parallel workstreams converging at a controlled sequence point. Example: dividend resolution completes Monday; share transfer must complete by Thursday. Both run in parallel throughout; the FF+3d lag controls when the transfer can close. If dividend resolution slips, share transfer slips by the same amount — even though both started simultaneously.
- **FS (Finish-to-Start):** Successor ES = Predecessor EF + lag. The successor cannot start until the predecessor finishes. This is the dependency type for hard legal sequencing requirements — Germany entity registration must complete before Netherlands dissolution can begin; there is no parallel execution possible. Also used with lag for regulatory windows: filing submitted → [30 WD lag] → determination received → successor starts.
- **SS (Start-to-Start):** Successor ES ≥ Predecessor ES + lag. The successor cannot start until the predecessor starts. Used when two workstreams must launch in coordinated sequence but can then proceed independently.

When a task has multiple predecessors, its ES is determined by the latest-finishing predecessor (for FS/SS) or the most constraining relationship across all dependency types. Apply each predecessor constraint independently and take the maximum.

Show the forward pass calculation for the critical path tasks and for any task where the constraint is non-obvious. Transparency builds trust in the output — do not present dates without showing how they were derived.

### Step 3: Backward pass — calculate Late Start and Late Finish
Work backwards from the programme end date. The end date is either a fixed constraint (if one was identified in the setup check) or the EF of the last task in the network.

For each task, calculate:
- **LF (Late Finish):** the latest date the task can finish without delaying the programme
- **LS (Late Start):** LF - Duration

**By dependency type (backward pass):**
- **FF:** Predecessor LF = min(Successor LF - lag) across all successors
- **FS:** Predecessor LF = min(Successor LS - lag) across all successors
- **SS:** Predecessor LS = min(Successor LS - lag) across all successors

When a task feeds multiple successors, its LF is constrained by the earliest-requiring successor. Take the minimum.

### Step 4: Calculate float and identify the critical path
For each task:

**Total float = LS − ES = LF − EF**

Float is the amount of schedule flexibility a task has. A task with 10 days of float can slip by up to 10 days without delaying the programme completion date — assuming none of its successors have already consumed that float.

**Zero float = critical path.** The task must complete on its earliest finish date to avoid delaying the programme. Zero float does not mean the task is late — it means it has no buffer.

**Negative float = already late.** The task cannot complete by its latest finish date even if started at its earliest start. This occurs when a fixed deadline constraint is tighter than the network allows. Negative float is a programme-level problem requiring immediate escalation — it cannot be resolved by better scheduling. Flag every task with negative float, name the constraint causing it, and quantify the gap. "T04 has -8 days float: the programme requires completion by 30 June, but the network produces EF of 12 July. An 8-working-day compression is required on the critical path."

**All tasks on the critical path** is a valid and expected result on small linear matters with no parallel paths. It means there is no float anywhere in the network — every task must complete on time. Note this explicitly: "All tasks sit on the critical path. The network has no parallel paths that could provide float. There is no scheduling flexibility in this plan."

**Near-critical path:** tasks with float ≤ the near-critical threshold. Default threshold: 5 working days. The threshold is configurable — a fast-moving matter may use 3 days; a long-running programme may use 10. Ask the LPM to confirm or accept the default before producing the near-critical report. Express as: "The following tasks have float within [threshold] working days of the critical path and warrant active monitoring: [list with float values]."

If the critical path passes through a task whose duration is an information dependency (regulatory determination, counterparty response), flag this explicitly: "Programme completion is contingent on [external event]. The LPM has no control over this duration. Build contingency planning around the minimum/expected/maximum range."

### Step 5: Produce the baseline output
See Output Format section. Produce in order: Gantt diagram, critical path narrative, near-critical tasks table, dependency summary, open calculation assumptions.

### Step 6: What-if cascade (Mode 2 only)
See What-If Cascade Protocol section.

### Step 7: Update and version (Mode 3 only)
Apply the confirmed change to the baseline. Increment the version number. Produce the comparison table. Trigger cross-skill handoffs.

### Step 8: Produce workstream or jurisdiction view (Mode 4 only)
1. Run the full network calculation (Steps 1–4) against the complete baseline first. Float values must come from this full calculation.
2. Identify the filter: which workstream or jurisdiction has been requested?
3. Classify every task as: in-scope / upstream constraint / downstream milestone (see Mode 4 definitions above).
4. Produce the filtered Gantt showing all three categories with distinct visual treatment.
5. Produce a plain-language summary for the recipient: "Your workstream has [X] tasks. The earliest you can start [Task Y] is [Date] — this is gated by [upstream constraint task]. Your work feeds into [programme milestone] on [Date]. Your tasks have [Z] days of float in the full programme."
6. Note explicitly what is not shown: "This view covers the [Germany] workstream only. [X] other workstreams are running in parallel and are not shown here."

---

## Critical Path Methodology — Key Concepts

**Why the critical path matters in legal work:**
The critical path is not a scheduling curiosity — it is the answer to "what do I actually have to manage?" Every matter has tasks that can slip without consequence and tasks that, if they slip one day, slip the programme one day. Experienced LPMs develop intuitive critical path knowledge. This skill makes it explicit, which serves two purposes: it survives the LPM's departure, and it produces defensible programme impact assessments when delays need to be communicated to clients.

**Effort vs duration:**
Duration is the elapsed time to complete a task. Effort is the person-hours applied. They diverge whenever waiting is involved. A two-hour partner review that sits in an inbox for three days before being done has three days duration and two hours effort. In legal work, the waiting periods are frequently longer than the work periods — review cycles, approval queues, regulatory windows. Schedules must be built on duration, not effort. Effort-based scheduling underestimates duration by systematically ignoring the waiting.

**Lag and the regulatory window pattern:**
The most common critical path driver in cross-border legal work is the regulatory window — a period during which work has been submitted to an external body and the firm is waiting for a determination. This is modelled as a FS dependency with a lag equal to the expected determination period. The difficulty is that this lag is uncertain. Model it as: (a) expected case, (b) +2 weeks, (c) +4 weeks. The what-if cascade handles this automatically — it is the primary use case for Mode 2.

**Float is not slack:**
Float belongs to the path, not the task. If Task A has 10 days float and feeds Task B which also has 10 days float, and Task A uses all its float, Task B has zero float remaining. Float consumed by an upstream task disappears for all downstream tasks on the same path. This is why a delay "on a non-critical task" can still shift programme completion — the task wasn't critical at planning time, but consumed float that other tasks were relying on.

**Near-critical is where monitoring effort goes:**
The critical path is managed. Near-critical tasks are where surprises come from — tasks that appeared to have buffer, slipped incrementally, and arrived at zero float without anyone noticing. A near-critical monitoring report, reviewed at every status call, is more valuable than a monthly critical path report that only surfaces problems after the damage is done.

---

## Domain Knowledge — Legal Scheduling Patterns

**FF as the primary execution dependency in parallel workstreams:**
When multiple workstreams run in parallel and must converge at a controlled sequence point, FF+lag is the correct dependency type — not FS. FS would force one task to wait entirely for the other to complete before it could start, losing the benefit of parallel execution. FF allows both to run simultaneously while enforcing the required sequencing at the finish end.

The canonical example: a dividend resolution must be passed on Monday; the related share transfer must complete by Thursday. Both tasks run in parallel from the start of the week. The dependency is not "transfer waits for resolution to finish before it begins" (FS) — both are underway simultaneously. The dependency is "transfer cannot close until 3 working days after resolution passes" (FF, lag = 3 WD).

This pattern repeats across multi-jurisdiction corporate work wherever parallel workstreams must converge in a defined order: parallel entity preparations converging at a group-level signing; parallel regulatory filings converging at a combined determination; parallel DD workstreams converging at a combined report. In each case, the tasks start together or close to it — the constraint is at the end, not the beginning. Model these as FF+lag, not as FS.

**The jurisdiction dependency chain (corporate reorganisations) — FS:**
Multi-jurisdiction reorgs have a structural critical path determined by legal sequencing, not resource availability. Germany must complete before Netherlands because the Dutch entity cannot be dissolved until the German parent relationship is registered. Singapore must complete before HK because of holding company sequencing. These are hard FS dependencies — there is no parallel execution possible, because the legal validity of the downstream step depends on the upstream step being complete. The critical path in a reorg is not the longest sequence of tasks — it is the legal completion sequence for the jurisdiction chain.

**Signing and execution windows:**
Physical signing logistics impose scheduling constraints that do not appear in task lists: wet ink signature requirements, notarisation lead times (3-10 working days per jurisdiction), courier delivery windows, registry queue times. These are not durations — they are fixed calendar events. Model them as milestones with fixed dates, not tasks with estimated durations. A completion that misses the registry queue by one day in a jurisdiction may have a three-week impact if the next registry slot is monthly.

**The counterparty silence pattern:**
Information dependencies on counterparties behave differently from regulatory windows. Regulatory windows have known minimum and expected durations. Counterparty silence is unbounded and often precedes a substantive problem. Model counterparty response windows as: expected (the agreed review period), +50% (realistic slip), and escalation trigger (point at which the LPM escalates). The what-if cascade should always include the escalation trigger scenario.

**Crashing and fast-tracking:**
When the baseline shows a programme end date that does not meet the client's deadline, two compression levers are available: (a) crashing — adding resources to shorten critical path task durations; (b) fast-tracking — converting FS dependencies to FF or SS where the work can genuinely overlap without creating rework. Fast-tracking is risky in legal work because many FS relationships are hard legal sequencing requirements, not scheduling preferences. Converting a legal sequencing FS to FF does not make the downstream work legally valid — it produces errors, not savings. Flag clearly which dependencies can be converted (scheduling preference) and which cannot (legal requirement).

---

## Domain Knowledge — Common Scheduling Failures

**Building the schedule but not the network.** A list of tasks with dates is not a schedule — it is a wish list. The value of this skill is the dependency network. Dates derived from dependency logic are defensible; dates entered as preferences are not.

**Missing the regulatory window on the critical path.** Regulatory determination periods are frequently omitted from task networks because they are not "firm work" — there is nothing to do while waiting. They must appear in the network as lag values or placeholder tasks because they determine when successor tasks can start. A 6-week regulatory window on the critical path that is not modelled produces a programme plan that is 6 weeks shorter than reality.

**Treating all float as available.** See the Float is not slack principle above. Reporting "this task has 10 days float" without tracking how much of that float has already been consumed by upstream delays is incorrect and misleading.

**Not resetting the baseline after a confirmed change.** When a delay is confirmed, the baseline must be updated and versioned. Continuing to report against an outdated baseline produces false variance — tasks appear behind plan because they are behind the old plan, which no longer reflects the agreed programme. Mode 3 exists to force this discipline.

**Not knowing the critical path changes.** On long matters, the critical path shifts as tasks complete and delays accumulate. A task that was near-critical in Month 1 may be on the critical path in Month 4. The critical path calculation must be rerun after every confirmed change — not just at baseline.

**Effort in, duration out.** A task assigned to a partner who is also on four other matters, in a week where two days are blocked by client travel, does not have the same effective duration as a task assigned to a dedicated full-time resource. Duration estimates should reflect reality, not theoretical productivity. Flag duration estimates that assume full-time availability when the resources are known to be shared.

---

## What-If Cascade Protocol

This is the highest-value output this skill produces. A well-run what-if cascade takes a single proposed change and converts it into a programme-level impact analysis in plain English — the communication asset the LPM needs to manage the client conversation.

**Step 1: Identify the proposed change**
What changes? Which task or dependency is affected? By how much? Express as: "[Task ID] duration increases from [X] to [Y] working days" or "[Dependency between Task A and Task B] lag increases from [X] to [Y] working days."

**Step 2: Recalculate forward from the affected task**
Apply the updated duration or lag to the affected task. Recalculate ES/EF forward through all successor tasks using the dependency types. Do not recalculate backward — that is a separate step.

**Step 3: Identify all affected tasks**
A task is affected if its ES or EF changes as a result of the proposed change. Record: Task ID, original EF, revised EF, days shifted.

**Step 4: Identify affected milestones**
Which milestones have predecessor tasks in the affected set? Record: Milestone, original target date, revised target date, days shifted. Milestones are the language of client communication — task-level impacts matter less than milestone-level impacts.

**Step 5: Critical path analysis**
Does the critical path change? Does the proposed change bring a previously non-critical task onto the critical path? Identify any near-critical tasks whose float drops to zero or below as a result of the change.

**Step 6: Programme completion impact**
Does the programme end date change? By how much? Express as: "Programme completion moves from [Date A] to [Date B] — a slip of [X] working days / [Y] calendar weeks."

**Step 7: Produce the cascade impact table — required output, not optional**
Every Mode 2 and Mode 3 output must include this table. Do not substitute prose analysis for the structured table — produce both. The table is the deliverable; the prose is the commentary.

| Task / Milestone | Original date | Revised date | Days shifted | CP status | Workstream |

CP status values: **New critical** / **Remains critical** / **Now near-critical** / **Unchanged**. Sort by days shifted descending. Flag milestones with a separate row marker. This column is the primary management signal — it tells the LPM where to redirect monitoring attention after the change, not just how much things have moved.

**Version history entry (required for Mode 3):**
Every baseline update must include a version history entry: "v[X.Y] — [Date]: [Cause of change]. Impact: [programme completion shift]. Source: [email/document reference, sender, date]." Produce as a named section: "Timeline Version History."

**Versioning convention:** use minor increments (v1.0 → v1.1 → v1.2) for schedule adjustments — duration changes, lag updates, date revisions — where the plan structure is unchanged. Use major increments (v1.0 → v2.0) only for structural changes: new phases added, workstreams removed, dependency network restructured. A Germany registration duration change is v1.1, not v2.0.

**Comparison table (Mode 3):**
The comparison table lists changed tasks and milestones only. Unchanged tasks are omitted — showing 40 rows of "Unchanged" obscures the actual changes. Sort by days shifted descending. End with a summary line: "[X] tasks and [Y] milestones affected. Programme completion shifts [+/- Z working days]."

Sort by days shifted descending. Flag milestones separately. Highlight tasks that become critical as a result of the change.

**Step 8: Draft the communications**
Two outputs:
- **Client notification draft:** "We write to update you on a scheduling development affecting the [matter]. [Cause of delay in neutral terms]. The following milestones are now targeted for [revised dates]. We are [action taken to mitigate / confirm no mitigation available]. Please let us know if you would like to discuss."
- **Affected local counsel notification draft** (where applicable): "Please note a change to the programme timeline affecting your workstream. [Specific impact on their tasks]. Please confirm [any required response / adjusted deadline]."

Flag both as DRAFT — the partner reviews before any client communication goes out.

**Step 9: Offer recovery options**
After presenting the cascade impact, offer to model recovery scenarios. Do not model them silently — the LPM and partner decide whether to pursue compression. Ask: "Do you want me to model recovery options? Available approaches for this matter: (a) [Crash specific tasks — name them and the resource implication]; (b) [Fast-track — convert [specific FS dependency] to SS or FF if the work can genuinely overlap]; (c) [Defer [specific downstream task] to a later phase — flag as scope signal for scope-change-controller]. For each option, I can calculate the revised programme completion date and what it would require."

Flag whether each option is genuinely available: not all FS dependencies can be converted, and not all tasks can be resourced up without creating rework risk. Do not offer crashing or fast-tracking as options where the dependency is a legal sequencing requirement rather than a scheduling preference.

---

## Output Format

All outputs produced as .docx unless the user explicitly requests otherwise. These are matter records — they belong in the matter folder.

Every output includes the identifier block. If client name, matter name, or matter number have not been provided, stop and ask before producing output — do not proceed with placeholders silently:
```
Client: [Name]          Client number: [Number]
Matter: [Name]          Matter number: [Number]
Timeline version: [v1.0]    Calculated by: [LPM name]    Date: [Date]
```

**REQUIRED: Produce an interactive HTML canvas Gantt for every Mode 1, 2, and 3 output.** This is the primary visual output — not optional, not on request. Do not produce a text table as the visual. Do not produce Mermaid as the default. Render the Gantt inline using HTML canvas. If the rendering fails, note the failure explicitly and produce the text table as a fallback — do not silently substitute.

The HTML Gantt must include:
- Colour-coded task bars: critical path in red (#E24B4A), non-critical in green (#1D9E75), regulatory/external wait periods as dashed grey bars
- Float shown as a faded bar extension beyond the task bar, with the float value in days labelled
- FF dependencies shown as a bracket connecting the finish points of the two parallel tasks, with the lag value in a pill label — not as an arrow
- FS dependencies shown as directional arrows between bar ends and starts
- Milestone diamonds at programme completion and phase gates
- Horizontal axis with working week numbers and calendar dates
- Summary metrics above the Gantt: start date, completion date, critical path duration
- What-if slider where a regulatory window or counterparty delay sits on the critical path

For export to a status report or client deck: screenshot the rendered Gantt. A screenshot of a properly rendered HTML Gantt is better than anything built natively in PowerPoint or Excel.

**Fallback — Mermaid gantt:**
Use only when the user explicitly requests a lightweight output for pasting into a document, or when the matter has fewer than 8 tasks. Note FF/SS relationships in the dependency summary table — Mermaid only renders FS natively.

```
gantt
    title [Matter Name] — Timeline v[X]
    dateFormat  YYYY-MM-DD
    excludes weekends
    section [Workstream Name]
    [Task summary] :crit, [id], [start-date], [duration]d
    [Milestone]    :milestone, [id], [date], 0d
```

**Critical path narrative:**
"The critical path runs: [Task A] → [Task B] → [Milestone X] → [Task C] → [Programme end]. Programme completion: [Date]. Critical path duration: [X] working days."

**Near-critical tasks table:**
| Task ID | Task Summary | Workstream | Float (working days) | Predecessor at risk |

**Cascade impact table (Mode 2/3):**
| Task / Milestone | Original date | Revised date | Days shifted | CP status | Workstream |

CP status values: **New critical** (task moves onto critical path), **Remains critical**, **Now near-critical** (task moves off critical path into near-critical band), **Unchanged**. The status change column is the management signal — it tells the LPM where to redirect monitoring attention, not just how much things have moved.

**Workstream view output (Mode 4):**
The filtered Gantt uses three distinct visual treatments:
- In-scope tasks: normal coloured bars (red = critical path, green = non-critical), float extension shown
- Upstream constraints: grey bars, labelled "[External constraint — gates [Task ID]]"
- Downstream milestones: diamonds, labelled "[Programme milestone — [description]]"

Header on the filtered output: "[Workstream/Jurisdiction] view — extracted from full programme baseline v[X.Y]. Float values reflect position in the full programme network, not this view alone. [X] other workstreams not shown."

Do not produce a critical path narrative for a workstream view — the critical path is a property of the full network, not the filtered subset. Instead produce: "Your workstream summary: [X] tasks, earliest start [Date], feeds programme milestone [description] on [Date], [Y] days float in the full programme."

**Structured data export:**
Every timeline output is accompanied by a CSV export containing all tasks with their calculated ES, EF, LS, LF, float, and critical path flag. This is the input format for scheduling software or SharePoint tracking. Produce inline as a labelled section if a file cannot be attached.

**Calculation assumptions (required):**
Every output must close with a named section: "Calculation Assumptions." List: working calendar applied, any duration estimates flagged as uncertain, any information dependencies with assumed lag values, any constraints (fixed dates) that override the calculation. Assumptions that are not documented cannot be challenged and cannot be updated when circumstances change.

---

## Cross-Skill Handoffs

- **From matter-plan-builder:** Dependency-tagged task and milestone list (Mode 2/3 structured export) is the primary input. Consume the 13-field task schema directly — do not reinterpret as prose. The matter-plan-builder handoff prompt should read: "Build a dependency network and critical path from this plan."
- **To risk-and-issues-manager:** When a Mode 2 or 3 change confirms a delay, log it as an Issue in the RAID log (confirmed, not a risk). Separately, if the delay is driven by an assumption that may be compressible (e.g. a process-assumption lag rather than a regulatory requirement), log this as a Risk with the compression question as the review trigger. Pass with: "Germany registration delay confirmed — log as Issue. FF lag assumption may be compressible — log as Risk pending counsel confirmation."
- **To status-report-drafter:** Revised milestone dates and critical path status are the reporting baseline. When a Mode 2 or 3 output changes milestone dates, pass the updated milestone register to status-report-drafter with: "Update the milestone reporting baseline — revised dates below."
- **To scope-change-controller:** If a Mode 2 what-if analysis reveals that the scope of work must change (phases added, jurisdictions dropped, work deferred) to recover the programme, flag this as a scope signal. Pass with: "Proposed programme recovery involves scope changes — scope-change-controller should assess OOS implications."
- **To matter-plan-builder:** If Mode 2 analysis confirms that the plan structure must change (new tasks added, workstreams restructured), trigger a Mode 5 plan update. Pass with: "Cascade analysis confirms these plan changes — matter-plan-builder Mode 5 to apply."
- **To stakeholder-comms-planner:** Revised milestone dates and draft communications from Mode 2 cascade. The comms planner handles routing and timing; this skill drafts the content.
- **From risk-and-issues-manager:** When an assumption in the RAID log is breached — particularly an information dependency on a regulatory body or counterparty — that is a Mode 2 trigger. Pass the RAID entry with the assumption breach flagged.

---

**Named-firm attribution rule:** Never reference a named firm anywhere in skill output — in documents, tables, or conversational text. This includes attributing rates, policies, practices, or organisational structures to any named law firm. The skill does not know any firm's actual structure, rates, or policies. Use "confirm with Pricing", "confirm with Finance", or "firm policy — confirm before applying." The rule applies to everything this skill produces, not just formal documents.

---

## M365 Connected Mode (Optional)

**Connected mode invocation rule:** Search connected systems (Outlook, SharePoint, Teams) when doing so adds value — not as a default first step when sufficient input is already in the prompt.

- **Sufficient input already provided:** User has pasted emails, documents, or data with full context. Engage with what is there. Do not search first — it adds friction without adding information.
- **Input is incomplete or proactive surfacing is warranted:** User references something that should be retrieved ("there's an invoice in Outlook", "it's end of month"), or connected mode is running in background/scheduled mode. Search proactively — this is the inverted invocation model and is the highest-value connected mode behaviour.

The distinction is whether the user has already provided what is needed. If yes, work with it. If no, or if proactive surfacing serves the LPM, search.

When the M365 MCP connector is enabled (Claude Team/Enterprise), this skill can:
- Pull the approved matter plan from SharePoint (the structured export produced by matter-plan-builder) directly, without the LPM having to upload it
- Search Outlook for jurisdiction updates that signal timeline changes — flagging emails where a counterpart mentions delays, revised timelines, or rescheduled actions as Mode 2 triggers
- Update milestone dates in a SharePoint List or Planner when a Mode 3 baseline update is confirmed
- Create or update calendar reminders for milestone due dates and phase gate reviews
- Draft the client notification and local counsel communications in Outlook draft mode for partner review

Without the connector: upload the matter-plan-builder CSV export, paste the relevant email text, and confirm changes directly in the chat.
