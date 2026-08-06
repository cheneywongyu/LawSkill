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
source_index: 144
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 预算和费用经理

原始名称：`Budget and Fee Manager`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/budget-and-fee-manager  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

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

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

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

---

## SKILL.md Original

---
name: budget-and-fee-manager-scott-margetts
description: "Matter budgeting and ongoing WIP/variance monitoring. Build phase-based fee estimates at matter setup, run bottom-up budgets by jurisdiction or workstream, calculate contingency, and structure AFA arrangements (fixed fee, capped fee, phased fixed fees). Ongoing monitoring: WIP tracking against budget, proportionality assessment (spend vs progress), variance commentary with root cause analysis, forecast-to-complete, realisation monitoring, write-off analysis. Trigger on: 'build a budget', 'fee estimate', 'what will this cost', 'WIP review', 'budget vs actual', 'how are we tracking against budget', 'we're over budget', 'realisation is poor', 'what's our ETC', 'budget for the German workstream', 'model the financial impact of this scope change', 'draft a fee adjustment', 'write-off analysis', 'how much contingency', 'AFA structure', 'fixed fee estimate', 'budget update', 'forecast to complete'."
metadata:
  author: Scott Margetts
  license: Apache-2.0
  version: 2026.03.17
---

# Budget and Fee Manager

## Purpose

Build, monitor, and adjust fee budgets across the full matter lifecycle. At matter setup: translate scope into a phase-based fee estimate with contingency and AFA structure. In flight: run WIP reviews that explain variance, not just report it. When spend has outpaced delivery: assess recoverability and present options. When scope changes are confirmed: model the financial impact.

This skill produces the financial analysis that status-report-drafter summarises. It receives confirmed OOS conclusions from scope-change-controller and models their financial impact. It does not execute billing (billing-cycle-manager handles that) and does not produce the client-facing financial summary (status-report-drafter consumes this skill's output and presents it).

---

## Identifier Block — Required Before Any Output

Stop and confirm before proceeding:

```
Client: [Name]          Client number: [Number]
Matter: [Name]          Matter number: [Number]
Report date: [Date]     Prepared by: [LPM name]
```

If any identifier is missing, ask for it. Do not produce output without the complete block.

---

## Operating Modes

### Mode 1 — Budget Build
At matter setup: produce a phase-based fee budget from agreed scope. Triggered by a partner asking for an estimate, a scoping brief, or the structured output of matter-intake-scoping.

Input: scope description (email, brief, or matter-intake-scoping output), jurisdiction list, team structure, indicative timeline, AFA preference if known.

### Mode 2 — WIP Review
Month-end or mid-matter: assess actual spend against budget, explain variance, produce a forecast-to-complete. The standard financial health check.

Input: WIP data (pasted figures, uploaded Excel/CSV, or text description), progress narrative or self-reported completion percentages, phase/workstream structure matching the budget baseline.

### Mode 3 — Realisation Alert
Spend is disproportionate to progress. The partner needs options now — this is not a scheduled review.

Input: current WIP position, progress assessment, original budget, any known causes. Often arrives as a forwarded email from a partner or billing manager flagging the position.

### Mode 4 — AFA Tracking
Matter running on a fixed fee, capped fee, or other alternative fee arrangement. Track burn against the cap, calculate the breach point, and identify the decision trigger — the point at which the partner must act, before the cap is breached.

Input: agreed fee or cap amount, recorded WIP to date, estimated completion percentage or remaining task description.

### Mode 5 — Fee Adjustment
A confirmed scope change (from scope-change-controller) requires financial impact modelling and a fee adjustment communication.

Input: original budget baseline, confirmed OOS description with estimated scope, any commercial context (relationship sensitivity, recovery appetite).

---

## Domain Knowledge — Budget Build

### Estimating approach
Three approaches, applied in order of available information:

**Analogous estimating** — use a comparable completed matter as the reference. Adjust explicitly for scope differences — do not apply a comparable budget without documenting what changed and why. The adjustments are the analytical content; the analogous figure is only the anchor.

**Bottom-up estimating** — break into phases and workstreams, estimate each component, aggregate. Most accurate when scope is defined. Requires agreement on who does what at which grade. Build at the workstream × phase intersection, not as a lump sum. Lump sums cannot be monitored meaningfully mid-matter.

**Parametric estimating** — use a unit rate (£X per entity restructured, £Y per jurisdiction, £Z per regulatory filing) calibrated against historical data. Useful for large multi-jurisdiction programmes where per-jurisdiction bottom-up is impractical. Always state the parametric rate and its source.

For most matters: analogous for the initial estimate, bottom-up once scope is agreed and team structure is confirmed.

### Phase structure
Budget at phase level at minimum. On complex matters, budget at workstream × phase.

Standard phases for transactional work:
- **Scoping and setup** — intake, team briefing, kick-off, matter plan build, system setup
- **Execution phases** — named by legal milestone or deliverable, not "Phase 1/2/3"
- **Coordination** — multi-jurisdiction oversight, LC management, status cadence. Routinely underestimated; always budget explicitly
- **Completion and close** — final documents, signing logistics, post-close filings, matter close

**Coordination uplift benchmarks** (apply to execution phase subtotal):
- 2–5 jurisdictions: 10–15%
- 6–10 jurisdictions: 15–20%
- 11+ jurisdictions: 20–25%

These are starting points, not formulas. Scope complexity, counterparty behaviour, and client communication intensity all push the number up. Flag that it is an estimate with an explicit assumption, not a fixed percentage.

### Contingency
Contingency is a named reserve against identified risks — not padding and not a rounding provision. Keep it separate from the base estimate in the budget table so it can be consumed, returned, or re-held against a different risk as the matter evolves.

Ranges by complexity:
- Low (single jurisdiction, well-defined scope, familiar client and matter type): 5–10%
- Medium (2–5 jurisdictions, some structural unknowns, standard matter type): 10–15%
- High (6+ jurisdictions, novel structure, regulatory uncertainty, new client or counterparty): 15–25%

Justify the contingency percentage in 2–3 sentences — name the two or three specific risks it is held against. Unjustified contingency gets cut. Justified contingency with named risks is defensible.

**Management reserve** is distinct from contingency. It covers scope changes that cannot be anticipated at outset. Do not bundle with contingency. If the partner asks for it to be included, label it separately.

### AFA structures
**Fixed fee** — agreed total for defined scope. Risk sits with the firm. Requires tight scope definition and a functioning scope change mechanism. Build an internal T&M budget regardless — the fixed fee is the billing ceiling, but the internal budget tells you how much margin is being consumed.

**Capped fee** — T&M up to an agreed cap. Client bears downside risk to the cap; firm bears upside risk beyond it. Budget internally against the cap as the ceiling.

**Phased fixed fees** — fixed fee per phase, agreed at or before each phase gate. Reduces uncertainty for both parties when later phases cannot be scoped at outset. Recommended for multi-phase transactions with significant structural unknowns.

**Success fee elements** — base fee plus a contingent element tied to outcome. Budget internally against base only; the contingent element is potential upside, not a cost target.

**AFA monitoring rule** — at any point on an AFA matter the system must answer: what percentage of the agreed fee has been consumed, and what percentage of the work is complete? If the first number is materially higher than the second, the matter needs attention. Track this explicitly at every WIP review on AFA matters.

---

## Domain Knowledge — WIP Monitoring

### The proportionality test
This is the most important metric in any WIP review. Not "how much have we spent?" but "how much have we spent relative to how much work is done?"

60% of budget consumed with 60% of work complete: on track. 85% of budget consumed with 50% of work complete: the trajectory will not land within budget. 30% of budget consumed with 80% of work complete: investigate before declaring it good news.

Run the proportionality test explicitly for every workstream in every review. State the result as a number — do not describe it.

### Variance threshold and commentary
Flag every workstream where spend exceeds budget by more than the agreed threshold (default 10–15%; confirm with the partner at matter setup and record in the matter plan). Above threshold, provide root cause commentary using the four-question framework. Below threshold, note the position without extended commentary.

**Four-question variance analysis** — for every overrun above threshold, answer all four:
1. **Root cause** — the specific cause, not a generalisation. "Germany is complex" is not a root cause. "Entity count was 7, not 3 as scoped" is.
2. **Pattern** — one-off or systemic? A one-off event (counterparty delay, unexpected regulatory requirement) is manageable. Systemic means the remaining budget assumption is also wrong.
3. **Recoverable?** — can the overrun be absorbed within the remaining budget for this workstream, or has the total projected cost already exceeded budget?
4. **Scope signal?** — does this overrun indicate the original scope assumptions were wrong? If yes, hand off to scope-change-controller. Variance caused by scope creep is not a financial problem — it is a scope management problem that happens to have a financial consequence.

### Forecast-to-complete (FTC)
The forward-looking metric. Not what has been spent — what will be spent in total, and whether that is within budget.

Calculate two ways and present both:
- **Burn rate method** — (actual to date ÷ estimated % complete) = projected total. Compare to budget.
- **Remaining work method** — estimate the cost of tasks that remain, add actual to date. Use the task list from matter-plan-builder if available.

Always produce FTC as a range: lower bound (remaining work completes as scoped at normal efficiency), upper bound (current burn rate continues). A point estimate falsely implies precision. The range is the honest answer and the useful one.

### Underspend scepticism
A workstream significantly below budget is not automatically good news. Confirm which of three explanations applies before reporting it:
1. Work is genuinely simpler than expected — confirm, return surplus to contingency
2. Work has not started or is significantly delayed — flag as a progress risk
3. Time has not been recorded against this matter code — recoverable, but needs to be confirmed and corrected before the WIP report is finalised

Never report a material underspend without a confirmed explanation for it.

### Self-reported completion scepticism
The last 10% of a workstream routinely consumes 30% of its remaining budget. When a team reports near-completion, ask what specific tasks remain and who owns them. "Tidying up" and "nearly there" are not task descriptions — they are early warning signs.

When self-reported completion is above 80% AND remaining work is described vaguely ("just X left", "nearly there", "final documents"), produce this challenge explicitly in the variance commentary — required, not optional:

> "[Description] is not a task description. Confirm specifically: what documents or deliverables remain, who is drafting them, whether any client or counterparty inputs are outstanding, and whether there are any dependencies on TU2/TU3/other workstreams. Until confirmed, ETC upper bound assumes [X]% of workstream budget remains."

Apply explicit scepticism even when the proportionality test shows a workstream on track — a −3pp gap at 85% self-reported completion is not confirmation of good health if the remaining task description is vague.

### Realisation
Realisation = fees billed ÷ fees recorded at standard rates. A realisation problem means the firm is working more than it is recovering.

Monitor:
- **Write-offs** — fees recorded but not billed. Flag when cumulative write-offs exceed 5% of matter budget. Distinguish instructed write-offs (partner decision, often correct and appropriate) from incurred write-offs (inefficiency or unbillable WIP).
- **Rate discounts** — agreed discounts should be reflected in the budget as the discounted rate, not the rack rate. A budget built at rack rate for a matter running at a 15% discount is wrong before it starts.

### Query/chase loop
When WIP data contains an anomaly that cannot be explained from available information:
1. Identify the anomaly precisely
2. Draft a specific query to the responsible team — produce a draft email or message, not a list of action items. Action items tell the LPM what to do. A draft query does it.
3. Incorporate the explanation into the variance commentary once received
4. If the explanation reveals OOS work, hand off to scope-change-controller immediately

Query draft format — required for every unexplained anomaly:
```
To: [Name / role]
Re: [Matter] — [Workstream] WIP query

[Workstream] shows [£X] recorded against [£Y] budget at [Z]% self-reported completion [/ zero progress / no time entries since [date]]. Before the WIP review is finalised, I need the following confirmed by [date]:

1. [Specific question — what happened, what is the cause]
2. [Specific question — what remains and who owns it]
3. [Specific question — are there any cost items that should be assessed for write-off]

If any of the above indicates work outside the agreed scope, this will be referred to scope-change-controller immediately.
```

### Financial disclosure sequencing
Do not communicate specific overrun amounts to the client until: (a) the WIP position has been reconciled, (b) write-offs have been processed and the net billing figure is confirmed, (c) the commercial response has been agreed with the partner. Until then: "we are monitoring fees in [workstream] — we'll provide a full update in the next financial report." Provisional overrun figures that may change damage trust more than a delayed but accurate number.

---

## Output Format

All outputs from this skill are produced as .docx files unless the user explicitly requests otherwise. Skill outputs are matter records — they belong in the matter folder.

### Mode 1 — Budget table
Required column header row (use exactly):

| Phase | Workstream | Grade | Est. hours | Rate (£/hr) | Subtotal (£) | Notes |

Summary rows below the detail:
| | | **Base estimate total** | | | **£[X]** | |
| | | **Coordination uplift ([X]%)** | | | **£[X]** | |
| | | **Contingency ([X]% — [brief justification])** | | | **£[X]** | |
| | | **Total budget** | | | **£[X]** | |

For AFA matters, add beneath the total:
"AFA structure: [Fixed / Capped / Phased fixed]. Agreed fee / cap: £[X]. Internal margin at budget: [X]%. Partner review required if margin falls below [X]%."

**Named-firm attribution rule:** Never reference a named firm anywhere in skill output — in documents, tables, or conversational text. This includes attributing rates, policies, practices, or organisational structures to any named law firm. The skill does not know any firm's actual structure, rates, or policies. Use "assumed — confirm with Pricing", "confirm with Finance", or "firm policy — confirm before applying." The rule applies to everything this skill produces, not just formal documents.

### Mode 2 — WIP review table
Required column header row:

| Workstream / Jurisdiction | Budget (£) | Actual to date (£) | Budget consumed (%) | Est. % complete | Proportionality gap | ETC low (£) | ETC high (£) | Status |

**Proportionality gap:** Express as the difference between budget consumed % and estimated % complete. "+18pp" means spend is running 18 percentage points ahead of work completion. "−12pp" means spend is below progress — investigate. A gap of ±10pp is normal tolerance.

**Status values** — use exact labels, no abbreviation:

`On track` | `Watch` | `Overrun — recoverable` | `Overrun — requires action` | `Underspend — investigate`

For workstreams that are simultaneously underspent and a programme risk (e.g. budget consumed 20%, progress 0%, deadline approaching), use dual status: `Underspend — investigate | Programme risk — action required`. A status field that reports the financial position as healthy when the programme is broken is worse than no status field.

Variance commentary block — produce for every workstream outside tolerance:

```
[Workstream]: [X]% of budget consumed, [Y]% complete. Proportionality gap: [+/−Zpp].
Root cause: [Specific cause]
Pattern: [One-off / Systemic]
Recovery: [Recoverable within remaining budget / Requires fee adjustment / Scope signal — refer to scope-change-controller]
Action: [Specific next step with owner and date]
```

### Mode 3 — Realisation alert memo
Produce as a .docx file. Mode 3 is a decision document — it belongs in the matter folder, not in the chat window.

Required structure:

1. **Position** — produce as a table with these rows: Agreed fee/cap | Recorded WIP | Cap over by | WIP as % of agreed fee | Self-reported completion | Projected total (burn rate method: WIP ÷ % complete) | Projected total (remaining work method: WIP + estimated remaining cost) | Proportionality gap | Current realisation (if billed at cap). Two projected total methods are required — they frequently produce different numbers. The range between them is the honest answer.

2. **Completion scepticism — required on all AFA matters in Mode 3:** On a matter in a loss position, there is a behavioural incentive to overstate completion percentage — a higher completion figure makes the trajectory appear less bad. Do not accept self-reported completion above 60% without producing this challenge explicitly: "Self-reported completion of [X]% has not been independently verified. If actual completion is [X−15]%, projected total rises to [£Y]. Recommend confirming remaining tasks with the team before the partner conversation."

3. **Root cause** — most likely specific explanation; rank by likelihood; frame the diagnostic question for the partner conversation

4. **Options** — three, with financial impact quantified: (a) Absorb — write-off amount and realisation at completion; (b) Recover — what OOS must be documented, estimated recovery; (c) Hybrid — what gets absorbed, what is recoverable, net realisation

5. **Recommendation** — which option and why; confirm root cause must be established before any client conversation

6. **Decision required by** — date and named partner; state what happens if decision is deferred (WIP continues accruing at current burn rate — quantify per week)

### Mode 4 — AFA tracking table
Required column header row:

| Matter | Fee basis | Agreed fee/cap | Recorded WIP | Headroom remaining | Burn rate (per week) | Projected total | Position | Decision required? |

**Headroom remaining** = Agreed fee − Recorded WIP. This is the number that matters operationally.

**Burn rate** = Recorded WIP ÷ weeks elapsed. Use to calculate when headroom exhausts at current pace.

**Projected total** = Recorded WIP + (remaining work estimate). If projected total exceeds agreed fee, calculate the breach point as a date.

**Position values:** Within cap — monitoring | Cap risk — watch | Approaching breach — decision required | Cap breached — escalate immediately

**Decision trigger:** The point at which options must be exercised — not the breach point. If the cap exhausts in 3 weeks at current burn rate, the decision trigger is now.

Narrative block (produce alongside the table):
```
[Matter]: [Fee basis]. Agreed [fee/cap]: £[X]. Recorded WIP: £[Y] ([Z]% consumed).
Estimated completion: [A]%. Proportionality gap: [+/−Bpp].
Projected total at current burn rate: £[C] ([D]% of cap). Headroom: £[E].
[If breach projected]: Decision required by [date]. Options: [list].
```

### Mode 5 — Fee adjustment
Two outputs:
- **Internal memo** — confirms OOS scope, quantifies financial impact against original budget, recommends adjustment amount, requests partner sign-off
- **Client-facing letter (if required)** — describes additional scope, explains why it was not included in the original estimate, states the fee adjustment, cross-references the scope change notice from scope-change-controller

### Structured data export
Every Mode 1 and Mode 2 output is accompanied by a CSV export of the budget or WIP table. This is the input for SharePoint tracking and the starting point for the next WIP review. Produce inline as a labelled section if a file cannot be attached.

---

## LPM vs Attorney Boundary

**LPM:** Phase-based estimating, contingency calculation, AFA structure design, WIP proportionality analysis, variance root cause assessment, realisation monitoring, write-off analysis, client financial disclosure sequencing, fee adjustment drafting.

**Attorney:** Billing judgment on individual time entries; whether a fee is professionally appropriate; recoverability of costs from a counterparty; professional rules on billing disclosure; legal minimum periods (consultation, notice, regulatory); whether a compressed programme is legally compliant.

**Hard rule on legislation:** Do not name specific statutes, regulations, or case law in skill outputs. If a delay or programme compression raises a legal compliance question (minimum consultation periods, regulatory filing windows, notice requirements), flag it as: "This timeline change may engage legal minimum period requirements — legal team to confirm compliance before programme is agreed with client." Do not characterise the legal risk, identify the relevant legislation, or draw a compliance conclusion. That is attorney work.

---

## Cross-Skill Handoffs

- **From matter-intake-scoping:** The scoping brief and jurisdiction list are the primary input for Mode 1. Consume the matter brief output directly — do not start from a blank brief if one exists.
- **From scope-change-controller:** Confirmed OOS with a scope change notice reference triggers Mode 5. Do not re-assess whether the work is in scope — that is scope-change-controller's determination. Model the financial impact of the confirmed OOS only.
- **AFA matters:** At matter setup, flag to the partner that Mode 4 will be the ongoing monitoring mode. Budget is still built in Mode 1 (internal T&M estimate, regardless of the external fee basis). Mode 4 then tracks burn against the agreed fee at each review.
- **To status-report-drafter:** The WIP review table and FTC range are the financial inputs for the next status report. Pass with: "Updated financial position — consume for the financial summary section. Variance commentary below."
- **To scope-change-controller:** When Mode 2 variance analysis identifies a root cause that indicates a scope assumption was wrong (not an efficiency issue), flag as an OOS trigger. Pass with: "Variance in [workstream] appears scope-driven, not efficiency-driven — scope-change-controller to assess whether OOS documentation is required."
- **To billing-cycle-manager:** Confirmed FTC and write-off positions from Mode 2/3 feed into the billing cycle. Pass the WIP review output with confirmed positions for billing preparation.
- **From risk-and-issues-manager:** A breached financial assumption in the RAID log (e.g. "assumed 3 entities; confirmed 7") is a Mode 5 trigger once the assumption breach has been scoped and confirmed.

---

**Professional tone principle — client-facing outputs:** All client-facing drafts and communications use professional, respectful language throughout. Avoid any framing that positions the firm against the client, implies the client is acting in bad faith, or characterises a professional exchange as adversarial. Fee adjustment conversations are sensitive commercial discussions — the tone should be factual, collegial, and solution-oriented.

---

## M365 Connected Mode (Optional)

**Connected mode invocation rule:** Search connected systems (Outlook, SharePoint, Teams) when doing so adds value — not as a default first step when sufficient input is already in the prompt.

- **Sufficient input already provided:** User has pasted WIP data, budget figures, or correspondence with full context. Engage with what is there. Do not search first — it adds friction without adding information.
- **Input is incomplete or proactive surfacing is warranted:** User references something that should be retrieved, or connected mode is running in background/scheduled mode. Search proactively — this is the inverted invocation model and is the highest-value connected mode behaviour.

The distinction is whether the user has already provided what is needed. If yes, work with it. If no, or if proactive surfacing serves the LPM, search.

When the M365 MCP connector is enabled (Claude Team/Enterprise), this skill can:
- Search Outlook for fee-related correspondence — partner budget discussions, client billing queries, LC fee cap exchanges — and surface these as WIP review triggers before the LPM has to ask
- Pull WIP export files from the matter's SharePoint folder directly, without copy-pasting figures
- Update a running budget tracker in SharePoint after each Mode 2 review, versioned by review date
- Search for fee adjustment precedents in the matter folder to inform Mode 5 letter drafting

Without the connector: paste WIP data directly or upload the spreadsheet. The skill operates fully in manual mode.

---

## Time-Sensitive Assumptions

The following elements of this skill encode assumptions that may become stale:

- **Rate benchmarks** — all hourly rate references use approximate UK law firm benchmarks current as of 2025. Confirm prevailing rates with the firm's pricing team before use.
- **Coordination uplift percentages** — calibrated against general international LPM practice. Validate against firm historical data where available.
- **Contingency ranges** — based on general LPM methodology. Adjust for matter type, client relationship, and firm risk appetite.
- **Realisation threshold (5%)** — a general benchmark. Confirm the firm's agreed threshold at matter setup.
