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
views: 275
downloads: 483
created_at: "2026-03-17T13:51:43+01:00"
updated_at: "2026-04-30T12:40:13.561215+02:00"
source_index: 135
---

# 事项计划生成器

原始名称：`Matter Plan Builder`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/matter-plan-builder

## 中文 README

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

## Original README

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
