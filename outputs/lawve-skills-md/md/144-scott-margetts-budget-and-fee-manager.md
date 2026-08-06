---
id: "9113d2de-2efc-54cb-af91-9846f5979e55"
title: "Budget and Fee Manager"
title_cn: "预算和费用经理"
slug: "budget-and-fee-manager"
url: "https://lawve.ai/@scott-margetts/skill/budget-and-fee-manager"
author: "Scott Margetts"
author_slug: "scott-margetts"
category: "legal-operations"
language: "en"
license: "Apache 2.0"
jurisdictions: "INT"
status: "active"
views: 279
downloads: 97
created_at: "2026-03-17T13:51:00+01:00"
updated_at: "2026-04-30T12:36:12.094532+02:00"
source_index: 144
---

# 预算和费用经理

原始名称：`Budget and Fee Manager`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/budget-and-fee-manager

## 中文 README

# 预算和费用经理

**插件：** LPM 核心  
**技能编号：** 19 中的 7  
**状态：** v1 完成 — 第 1 阶段已通过，第 2 阶段已准备就绪

---

## 它的作用

建立并监控整个案件生命周期的费用预算。

在事项设置时，它将商定的范围转化为基于阶段的费用估算——按工作流程和管辖范围进行细分，计算并证明意外事件的合理性，并从第一天起就建立起监控的 AFA 结构（固定费用、上限费用、分阶段固定费用）。

在运行过程中，它会进行 WIP 审查：使用比例测试根据预算评估实际支出（相对于进度的支出，而不仅仅是相对于预算的支出），在根本原因层面解释差异，以及按范围而不是点估计计算的预测完成情况。

当支出超过交付速度时，它会模拟以下选项：吸收、通过费用调整恢复或混合。当范围变更由范围变更控制者确认后，它会对财务影响进行建模并起草费用调整沟通。

---

## 它不做什么

- **运营计费执行** — 即计费周期管理器（技能 8）。每月帐单准备、信用证发票审核、客户帐单查询和分配计划不属于此技能的范围。
- **状态报告财务摘要** — 状态报告起草者（技能 1）介绍状态报告的财务部分。该技能可生成状态报告起草者所使用的基础分析。这些技能旨在一起使用，而不是替代。
- **范围变更评估** — 范围变更控制器（技能 3）确定工作是否在范围之内或之外。该技能模拟了已确认的 OOS 工作的财务影响。它不做出输入/输出决定。

---

## 主要输入场景

1. **在事项设置时建立预算** - 合作伙伴要求提供费用估算（通过电子邮件、电话或启动时）。范围可以被完全定义或部分描述。这项技能会产生结构化的、基于阶段的估计，而不是毫无作用的标题数字。

2. **月末 WIP 审核** — 可获得实际支出（从 WIP 系统粘贴、以电子表格形式上传或以文本形式描述）。该技能运行比例测试、解释方差并生成完成预测。

3. **实现警报** - 支出远远超出进度，合作伙伴需要选择。该技能评估可恢复性并提出三个选项（吸收、恢复、混合）并量化财务影响。
4. **AFA 跟踪** — 事务按固定费用、上限费用或其他替代费用安排运行。该技能在每次审核时跟踪约定费用的消耗，计算决策触发点（在违反上限之前必须行使期权的点），并提供期权。

5. **已确认的 OOS 的费用调整** — 范围变更控制者已评估并记录了范围外的变更。该技能模拟财务影响并起草内部备忘录和面向客户的费用调整函。

---

## 输入

- 范围描述：电子邮件、范围界定简介或问题接收范围界定输出
- WIP 数据：粘贴文本、上传的 Excel/CSV 或描述的图形
- 来自范围变更控制器的范围变更通知（模式 5）
- AFA 事宜的商定费用或上限（模式 4）
- 团队结构和收费者等级/费率信息
- AFA 偏好和相关商业背景

---

## 输出

默认情况下，所有输出均生成为“.docx”文件。技能输出是事项记录，属于事项文件夹。
| Mode | Primary output | Secondary output |
|---|---|---|
| Mode 1 — Budget build | Phase-based budget table with contingency | CSV budget export |
| Mode 2 — WIP review | WIP review table + variance commentary | CSV WIP export |
| Mode 3 — Realisation alert | One-page options memo for partner decision | — |
| Mode 4 — AFA tracking | AFA tracking table + narrative block | — |
| Mode 5 — Fee adjustment | Internal memo + client-facing letter | Updated budget comparison table |
| Direction | Partner skill | What passes |
|---|---|---|
| Receives from | matter-intake-scoping | Scope baseline and jurisdiction list → Mode 1 input |
| Receives from | scope-change-controller | Confirmed OOS notice → Mode 5 trigger |
| Receives from | risk-and-issues-manager | Breached financial assumption (RAID log) → Mode 5 trigger |
| Sends to | status-report-drafter | WIP table and FTC range → financial summary section |
| Sends to | scope-change-controller | Variance commentary identifying scope-driven overrun → OOS assessment |
| Sends to | billing-cycle-manager | Confirmed WIP position and write-off decisions → billing prep |
---

## 跨技能交接


---

## 设计笔记

**比例相对于绝对方差。** 该技能的核心分析步骤是将支出百分比与进度百分比进行比较，而不是将支出百分比与 100% 进行比较。如果 90% 的工作完成，那么预算 85% 的工作流程不是问题。如果工作完成了50%，那就是一个严重的问题。比例测试强制对每个工作流、每次审核明确进行这种比较。

**FTC 是一个范围，而不是一个点。** 完成预测是作为一个范围生成的（如果剩余工作按范围完成，则为下限；如果当前的消耗率继续，则为上限）。点估计意味着在中间情况下无法获得的精度。该范围更诚实，对合作伙伴决策更有用。

**将怀疑作为方法论。** 支出不足和接近完成的自我报告都需要经过具体确认才能按面值接受。该技能将这些怀疑检查编码为明确的步骤，而不是可选的判断。

**从第一天开始就进行 AFA 监控。** 在 AFA 事务上，监控问题发生了变化：不再是“我们是否超出预算？”但是“我们消耗的约定费用是否多于我们交付的约定工作量？”该技能会自动将此测试应用于设置时识别为 AFA 的任何事项。

---

## 来源参考

- Linton，*法律项目管理* (2014) — 第 4 章：物质成本核算。类比、自下而上和参数估计；应急评估；预测和方差分析。
- CLOC，*法律团队的 LPM* (2017) — 第 2 阶段（规划）：预算要素。第三阶段（执行）：费用预算到实际监控。
- 国际律师事务所LPM实践（2018）——按工作流和市场划分的每周费用报告；燃烧率监测。
- 种子材料：“budget-and-fee-manager-seed-material-from-status-report-build.md”——从状态报告起草者构建中删除的财务方法（2026 年 3 月 3 日）。所有核心分析原理都源于这里。

---

## Original README

# budget-and-fee-manager

**Plugin:** LPM Core  
**Skill number:** 7 of 19  
**Status:** v1 complete — Phase 1 passed, Phase 2 ready

---

## What it does

Builds and monitors fee budgets across the full matter lifecycle.

At matter setup, it translates agreed scope into a phase-based fee estimate — broken down by workstream and jurisdiction, with contingency calculated and justified, and AFA structures (fixed fee, capped fee, phased fixed fees) set up for monitoring from day one.

In flight, it runs WIP reviews: actual spend assessed against budget using a proportionality test (spend relative to progress, not just spend relative to budget), variance explained at root cause level, and forecast-to-complete calculated as a range rather than a point estimate.

When spend has outpaced delivery, it models the options: absorb, recover via fee adjustment, or a hybrid. When scope changes are confirmed by scope-change-controller, it models the financial impact and drafts the fee adjustment communication.

---

## What it does not do

- **Operational billing execution** — that is billing-cycle-manager (Skill 8). Monthly billing prep, LC invoice review, client billing queries, and allocation schedules are out of scope for this skill.
- **Status report financial summary** — status-report-drafter (Skill 1) presents the financial section of the status report. This skill produces the underlying analysis that status-report-drafter consumes. The skills are designed to be used together, not as alternatives.
- **Scope change assessment** — scope-change-controller (Skill 3) determines whether work is in or out of scope. This skill models the financial impact of confirmed OOS work. It does not make the in/out determination.

---

## Primary input scenarios

1. **Budget build at matter setup** — partner asks for a fee estimate (by email, in a call, or at a kickoff). The scope may be fully defined or partially described. This skill produces a structured, phase-based estimate rather than a headline number with no working.

2. **Month-end WIP review** — actual spend is available (pasted from the WIP system, uploaded as a spreadsheet, or described in text). This skill runs the proportionality test, explains variance, and produces a forecast-to-complete.

3. **Realisation alert** — spend is running materially ahead of progress and the partner needs options. This skill assesses recoverability and presents three options (absorb, recover, hybrid) with financial impact quantified.

4. **AFA tracking** — matter runs on a fixed fee, capped fee, or other alternative fee arrangement. This skill tracks burn against the agreed fee at each review, calculates the decision trigger (the point at which options must be exercised, before the cap is breached), and presents options.

5. **Fee adjustment for confirmed OOS** — scope-change-controller has assessed and documented an out-of-scope change. This skill models the financial impact and drafts the internal memo and client-facing fee adjustment letter.

---

## Inputs

- Scope description: email, scoping brief, or matter-intake-scoping output
- WIP data: pasted text, uploaded Excel/CSV, or described figures
- Scope change notice from scope-change-controller (Mode 5)
- Agreed fee or cap amount for AFA matters (Mode 4)
- Team structure and fee earner grade/rate information
- AFA preference and commercial context where relevant

---

## Outputs

All outputs are produced as `.docx` files by default. Skill outputs are matter records and belong in the matter folder.

| Mode | Primary output | Secondary output |
|---|---|---|
| Mode 1 — Budget build | Phase-based budget table with contingency | CSV budget export |
| Mode 2 — WIP review | WIP review table + variance commentary | CSV WIP export |
| Mode 3 — Realisation alert | One-page options memo for partner decision | — |
| Mode 4 — AFA tracking | AFA tracking table + narrative block | — |
| Mode 5 — Fee adjustment | Internal memo + client-facing letter | Updated budget comparison table |

---

## Cross-skill handoffs

| Direction | Partner skill | What passes |
|---|---|---|
| Receives from | matter-intake-scoping | Scope baseline and jurisdiction list → Mode 1 input |
| Receives from | scope-change-controller | Confirmed OOS notice → Mode 5 trigger |
| Receives from | risk-and-issues-manager | Breached financial assumption (RAID log) → Mode 5 trigger |
| Sends to | status-report-drafter | WIP table and FTC range → financial summary section |
| Sends to | scope-change-controller | Variance commentary identifying scope-driven overrun → OOS assessment |
| Sends to | billing-cycle-manager | Confirmed WIP position and write-off decisions → billing prep |

---

## Design notes

**Proportionality over absolute variance.** The central analytical move in this skill is comparing spend percentage to progress percentage, not spend percentage to 100%. A workstream at 85% of budget is not a problem if 90% of the work is done. It is a significant problem if 50% of the work is done. The proportionality test forces this comparison explicitly for every workstream, every review.

**FTC as a range, not a point.** Forecast-to-complete is produced as a range (lower bound if remaining work completes as scoped; upper bound if current burn rate continues). A point estimate implies precision that is not available at mid-matter. The range is more honest and more useful for partner decision-making.

**Scepticism as methodology.** Underspend and near-completion self-reports both require specific confirmation before being accepted at face value. The skill encodes these scepticism checks as explicit steps, not optional judgments.

**AFA monitoring from day one.** On AFA matters, the monitoring question changes: not "are we over budget?" but "have we consumed more of the agreed fee than we have delivered of the agreed work?" The skill applies this test automatically on any matter identified as AFA at setup.

---

## Source references

- Linton, *Legal Project Management* (2014) — Chapter 4: Matter Costing. Analogous, bottom-up, and parametric estimating; contingency assessment; forecasting and variance analysis.
- CLOC, *LPM for Legal Teams* (2017) — Stage 2 (Planning): budget elements. Stage 3 (Execution): fee budget to actuals monitoring.
- International law firm LPM practice (2018) — weekly fee reporting by workstream and market; burn rate monitoring.
- Seed material: `budget-and-fee-manager-seed-material-from-status-report-build.md` — financial methodology cut from status-report-drafter build (3 March 2026). All core analytical principles originate here.
