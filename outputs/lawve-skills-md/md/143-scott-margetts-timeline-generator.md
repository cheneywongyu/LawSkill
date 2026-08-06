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
views: 342
downloads: 493
created_at: "2026-03-17T13:51:43+01:00"
updated_at: "2026-04-30T12:36:23.773696+02:00"
source_index: 143
---

# 时间线生成器

原始名称：`Timeline Generator`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/timeline-generator

## 中文 README

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

## Original README

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
