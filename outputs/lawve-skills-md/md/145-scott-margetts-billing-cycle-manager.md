---
id: "a7eccb8d-e747-5cfa-b018-1984f9f45bdc"
title: "Billing Cycle Manager"
title_cn: "计费周期管理器"
slug: "billing-cycle-manager"
url: "https://lawve.ai/@scott-margetts/skill/billing-cycle-manager"
author: "Scott Margetts"
author_slug: "scott-margetts"
category: "legal-operations"
language: "en"
license: "Apache 2.0"
jurisdictions: "INT"
status: "active"
views: 306
downloads: 67
created_at: "2026-03-17T13:51:43+01:00"
updated_at: "2026-04-30T12:35:44.769050+02:00"
source_index: 145
---

# 计费周期管理器

原始名称：`Billing Cycle Manager`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/billing-cycle-manager

## 中文 README

# 计费周期管理器

**插件：** LPM 核心  
**技能编号：** 19 中的 8  
**状态：** v1 已构建 - 第 1 阶段测试正在进行中

---

## 它的作用

跨五种模式处理计费周期的运营执行：每月账单准备、当地律师发票审核和支付处理、客户账单查询响应、现金流建模以及杠杆和烧钱分析。

这是执行层。预算和费用经理进行财务分析——WIP 比例、差异评论、FTC 范围。计费周期经理在操作上对此采取行动：本月计费的内容、如何处理信用证费用、当客户拒绝时如何应对、现金流状况是否可持续，以及人员配置是否会将问题控制在预算范围内。

---

## 它不做什么

- **财务分析和差异评论** - 即预算和费用经理（技能 7）。该技能接收 WIP 位置并对其起作用；它不会重新运行比例分析。
- **范围变更评估** — 范围变更控制器（技能 3）确定有争议的工作是否在范围之内或之外。该技能利用这种决心来捍卫或解决客户的计费查询。
- **LC 生命周期管理** — 本地法律顾问经理（技能 11）处理 LC 选择、参与条款、绩效监控和关系升级。该技能根据商定的条款审查单个信用证发票；关系层面的问题升级为当地法律顾问经理。

---

## 主要输入场景

1. **月末帐单准备** — WIP 可用，合作伙伴需要帐单说明。什么被计费，什么被推迟，什么被记录下来。

2. **信用证发票到达** — 根据预算和范围进行审查，确定付款处理方式（直通、直接计费或延期）、批准或查询行项目。

3. **客户对发票提出质疑** — 重建立场，确定是否辩护、调整或注销，起草回应。

4. **现金流建模** — 短期到期的信用证发票，长期的客户收据。对资金缺口进行建模，确定峰值风险，提出管理行动建议。

5. **杠杆率和消耗分析** — 实际人员配置与预算假设的比较、当前速度的预测总成本、利润轨迹。

---

## 输入

- 按事项/阶段/收费者划分的 WIP 数据（粘贴、上传 CSV/Excel 或描述）
- LC 发票（上传、粘贴或描述）
- LC 约定书或范围摘要
- 客户账单查询（电子邮件或描述）
- 按等级记录的时间（用于杠杆分析）
- 预期的客户账单金额和付款条件（用于现金流建模）
- 收费基础和 AFA 结构（如适用）

---

## 输出

默认情况下，所有输出都会生成为“.docx”文件。计费文档是事务记录 - 它们属于事务文件夹。
| Mode | Primary output | Secondary output |
|---|---|---|
| Mode 1 — Bill prep | Billing instruction table | CSV billing export |
| Mode 2 — LC invoice review | Approved/queried amounts + disbursement treatment | LC query letter (if required) |
| Mode 3 — Client billing query | Query response draft | Internal position memo |
| Mode 4 — Cashflow modelling | Funding gap table (weekly/monthly) | Management actions list |
| Mode 5 — Leverage and burn | Leverage table + gearing note | Predicted total cost range |
| Direction | Partner skill | What passes |
|---|---|---|
| Receives from | budget-and-fee-manager | WIP review table and confirmed write-off positions → Mode 1 inputs |
| Receives from | scope-change-controller | Scope baseline → Mode 3 defence for informally-requested work |
| Receives from | matter-intake-scoping | LC engagement terms → Mode 2 review reference |
| Sends to | budget-and-fee-manager | Confirmed billing amounts and write-offs → realisation update |
| Sends to | local-counsel-manager | LC invoice anomalies unresolved by query → relationship escalation |
| Sends to | status-report-drafter | Billing cycle summary → financial section of next status report |
---

## 跨技能交接


---

## 设计笔记

**支付处理决定是操作性的，而不是行政性的。**无论信用证费用是通过、直接计费还是递延，都会对现金、关系和增值税产生影响。该技能对三选项框架和默认选项（选项 A - 传递）进行编码，并带有明确的条件来确定何时适合替代方案。

**现金流建模是一流的输出，而不是标志。** 信用证付款期限（30-45 天）和客户付款期限（60-180 天）之间的结构性不匹配是可预测的且会反复出现。对于具有大量信用证费用的多司法管辖区计划，峰值资金缺口可能会很大。该技能使用每周/每月的资金缺口表进行建模，并产生具体的管理行动，而不是一般性建议。

**杠杆分析将计费执行与预算预测联系起来。**如果实际负债与预算假设存在重大差异，则预测的总成本会发生变化 - 无论总工时是否正常。涉及合作伙伴较多的问题比假设的预算更昂贵；初级问题可能会导致返工，从而导致成本超支。杠杆表使这一点在成为冲销问题之前就可见一斑。

**减记纪律是方法论，而不是管理。** 该技能将减记编码为需要指定原因和合作伙伴授权的管理决策，而不是为了使数字整洁而进行的更正。如今，为了避免一场困难的对话而进行的减记会产生一个更难以解释的实现问题。

---

## 来源参考

- Linton，*法律项目管理* (2014) — 第 4 章（事项成本核算：计费执行、冲销）；第 1 章（事项关闭：最终确定发票、关闭事项成本中心）。
- Levy，*法律项目管理* (2015) — 注销原因；计费纪律；与客户就费用进行沟通。
- CLOC，*法律团队的 LPM* (2017) — 第 2 阶段：与外部顾问签署计费指南。第三阶段：遵守计费准则，及时计费。
- 种子材料：`budget-and-fee-manager-seed-material-from-status-report-build.md` — 源系统上下文（SAP、Aderant、Elite；单独跟踪的 LC 发票）；财务披露排序。

---

## Original README

# billing-cycle-manager

**Plugin:** LPM Core  
**Skill number:** 8 of 19  
**Status:** v1 built — Phase 1 testing in progress

---

## What it does

Handles the operational execution of the billing cycle across five modes: monthly bill preparation, local counsel invoice review and disbursement treatment, client billing query response, cashflow modelling, and leverage and burn analysis.

This is the execution layer. Budget-and-fee-manager produces the financial analysis — WIP proportionality, variance commentary, FTC ranges. Billing-cycle-manager acts on it operationally: what gets billed this month, how LC fees are treated, how to respond when the client pushes back, whether the cashflow position is sustainable, and whether the staffing mix is going to land the matter within budget.

---

## What it does not do

- **Financial analysis and variance commentary** — that is budget-and-fee-manager (Skill 7). This skill receives the WIP position and acts on it; it does not re-run the proportionality analysis.
- **Scope change assessment** — scope-change-controller (Skill 3) determines whether disputed work is in or out of scope. This skill uses that determination to defend or resolve client billing queries.
- **LC lifecycle management** — local-counsel-manager (Skill 11) handles LC selection, engagement terms, performance monitoring, and relationship escalation. This skill reviews individual LC invoices against agreed terms; relationship-level issues escalate to local-counsel-manager.

---

## Primary input scenarios

1. **End-of-month bill prep** — WIP available, partner wants a billing instruction. What gets billed, what gets deferred, what gets written down.

2. **LC invoice arrives** — review against budget and scope, determine disbursement treatment (pass-through, direct billing, or deferred), approve or query line items.

3. **Client challenges an invoice** — reconstruct the position, determine whether to defend, adjust, or write off, draft the response.

4. **Cashflow modelling** — LC invoices due on short terms, client receipts on long terms. Model the funding gap, identify peak exposure, propose management actions.

5. **Leverage and burn analysis** — actual staffing mix against budget assumptions, predicted total cost at current pace, margin trajectory.

---

## Inputs

- WIP data by matter/phase/fee-earner (pasted, uploaded CSV/Excel, or described)
- LC invoices (uploaded, pasted, or described)
- LC engagement letter or scope summary
- Client billing query (email or described)
- Time recorded by grade (for leverage analysis)
- Expected client billing amounts and payment terms (for cashflow modelling)
- Fee basis and AFA structure where applicable

---

## Outputs

All outputs produced as `.docx` files by default. Billing documents are matter records — they belong in the matter folder.

| Mode | Primary output | Secondary output |
|---|---|---|
| Mode 1 — Bill prep | Billing instruction table | CSV billing export |
| Mode 2 — LC invoice review | Approved/queried amounts + disbursement treatment | LC query letter (if required) |
| Mode 3 — Client billing query | Query response draft | Internal position memo |
| Mode 4 — Cashflow modelling | Funding gap table (weekly/monthly) | Management actions list |
| Mode 5 — Leverage and burn | Leverage table + gearing note | Predicted total cost range |

---

## Cross-skill handoffs

| Direction | Partner skill | What passes |
|---|---|---|
| Receives from | budget-and-fee-manager | WIP review table and confirmed write-off positions → Mode 1 inputs |
| Receives from | scope-change-controller | Scope baseline → Mode 3 defence for informally-requested work |
| Receives from | matter-intake-scoping | LC engagement terms → Mode 2 review reference |
| Sends to | budget-and-fee-manager | Confirmed billing amounts and write-offs → realisation update |
| Sends to | local-counsel-manager | LC invoice anomalies unresolved by query → relationship escalation |
| Sends to | status-report-drafter | Billing cycle summary → financial section of next status report |

---

## Design notes

**The disbursement treatment decision is operational, not administrative.** Whether LC fees are passed through, billed direct, or deferred has cash, relationship, and VAT implications. The skill encodes the three-option framework and the default (Option A — pass-through) with explicit conditions for when the alternatives are appropriate.

**Cashflow modelling is a first-class output, not a flag.** The structural mismatch between LC payment terms (30–45 days) and client payment terms (60–180 days) is predictable and recurring. On a multi-jurisdiction programme with material LC fees, the peak funding gap can be significant. The skill models it with a weekly/monthly funding gap table and produces specific management actions, not generic advice.

**Leverage analysis connects billing execution to budget forecasting.** If actual gearing is materially different from the budget assumption, the predicted total cost changes — regardless of whether total hours are on track. A partner-heavy matter is more expensive than the budget assumed; a junior-heavy matter may produce rework that drives its own cost overrun. The leverage table makes this visible before it becomes a write-off problem.

**Write-down discipline is methodology, not administration.** The skill encodes write-down as a management decision requiring named reasons and partner authorisation — not a correction to make the numbers tidy. The write-down that avoids a difficult conversation today creates a realisation problem that is harder to explain at matter close.

---

## Source references

- Linton, *Legal Project Management* (2014) — Chapter 4 (Matter Costing: billing execution, write-offs); Chapter 1 (Matter Closure: finalise invoices, close matter cost centre).
- Levy, *Legal Project Management* (2015) — write-off causes; billing discipline; client communication on fees.
- CLOC, *LPM for Legal Teams* (2017) — Stage 2: billing guidelines sign-off with outside counsel. Stage 3: compliance with billing guidelines, timely billing.
- Seed material: `budget-and-fee-manager-seed-material-from-status-report-build.md` — source system context (SAP, Aderant, Elite; LC invoices tracked separately); financial disclosure sequencing.
