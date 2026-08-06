---
id: "b0eb1f69-34e1-5a8e-9833-61dde19c9b51"
title: "RFP Pitch Management"
title_cn: "RFP 推介管理"
slug: "rfp-pitch-management"
url: "https://lawve.ai/@scott-margetts/skill/rfp-pitch-management"
author: "Scott Margetts"
author_slug: "scott-margetts"
category: "legal-operations"
language: "en"
license: "Apache 2.0"
jurisdictions: ""
status: "active"
views: 168
downloads: 151
created_at: "2026-04-05T16:39:17.812386+02:00"
updated_at: "2026-04-30T12:41:12.708347+02:00"
source_index: 131
---

# RFP 推介管理

原始名称：`RFP Pitch Management`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/rfp-pitch-management

## 中文 README

# rfp 推介管理

**OCM 技能插件** — 技能 3（共 8 项）
**状态：** 完成 — 第 1 阶段和第 2 阶段已测试

---

## 这个技能有什么作用

运行用于选择外部顾问的结构化 RFP 流程——从起草初始文件到评估公司的回应，再到为 GC 签署提供合理的选择建议。

一家律师事务所平均花费 47 小时来回复 RFP。该成本已计入法律服务的价格中。结构不良的 RFP 会产生无法比较的响应，并且默认选择最完善的提案，而不是最好的公司。这项技能编码了运行流程的方法，从而产生真正的可比性和合理的决策。

---

## 模式
| Mode | Trigger | Output |
|------|---------|--------|
| 1 — Draft RFP | "Draft an RFP" / "Write a legal RFP" / "We need to go to market" | RFP Document + Evaluation Criteria Framework |
| 2 — Evaluate Responses | "Evaluate firm responses" / "Score the RFP submissions" / "Compare the proposals" | Scored Evaluation Matrix + Evaluation Summary Note |
| 3 — Shortlist and Selection Brief | "Which firms should we shortlist" / "Selection recommendation" / "We want to appoint [firm]" | Selection Brief + Feedback Letters (successful and unsuccessful) |
| 4 — RFP Process Design | "How do we run a panel RFP" / "Design the RFP process" / "How do we weight the criteria" | RFP Process Plan + Evaluation Criteria Framework |
| Stage | Skill |
|-------|-------|
| Billing rules | engagement-terms-billing-guidelines (Skill 1) |
| Panel design | panel-design-selection (Skill 2) |
| **Firm selection** | **rfp-pitch-management (Skill 3) ← this skill** |
| Fee arrangements | fee-arrangement-structuring (Skill 4) |
| Matter instruction | matter-allocation-instruction (Skill 5) |
| Invoice review | invoice-review-compliance (Skill 6) |
| Performance management | performance-scorecard (Skill 7) |
| Panel review | panel-review-rationalisation (Skill 8) |
| Skill | Connection |
|-------|-----------|
| panel-design-selection (Skill 2) | Selection criteria matrix from panel design feeds RFP evaluation criteria and weightings. |
| engagement-terms-billing-guidelines (Skill 1) | Firms appointed through RFP must receive and sign OCGs before work begins. |
| fee-arrangement-structuring (Skill 4) | Commercial terms agreed in RFP negotiations become the baseline for matter-level fee arrangement. |
| matter-allocation-instruction (Skill 5) | Firms appointed via RFP get instructed via Skill 5 on their first matter. |
| performance-scorecard (Skill 7) | RFP selection criteria should become ongoing evaluation criteria. |
| panel-review-rationalisation (Skill 8) | Panel review can trigger a refresh RFP. Mode 4 of Skill 8 produces the Panel Refresh Brief that feeds into this skill. |
---

## 关键设计决策

**内部文件中的命名公司。** 评估文件（模式 2 评分矩阵、模式 3 选择简介）使用实际公司名称 - 这些是内部治理记录。反馈信件（模式 3）在模板中使用 [Firm] 占位符，在发送时填充。

**定价结构要求。** RFP 模板包括需要 AFA 选项、AI 折扣披露和费率透明度的结构化定价部分。 PERSUIT 上 83% 的提案现在使用基于价值的定价。未解决定价结构的 RFP 会让资金陷入困境。

**OCG 作为预约条件。** 模式 1 包括 OCG 确认作为预约条件。如果 OCG 不存在，则技能会标记参与条款-计费指南（技能 1）应并行运行，以便在预约函发出时文档已准备就绪。

**可防御的流程文档。** 每种模式都会生成足以承受 GC 对流程公平性挑战的文档。评估标准是在收到答复之前定义的。评分基于描述性评分标准，而不是主观印象。

---

## 在 OCM 生命周期中的放置


---

## 跨技能连接


---

## 测试

第 1 阶段和第 2 阶段的测试提示和断言集位于构建日志中。

---

## 文件

- `rfp-pitch-management/SKILL.md` — 技能说明
- `rfp-pitch-management-README.md` — 本文档

---

## 许可证

Apache 2.0 — LegalOps 咨询有限公司

---

## Original README

# rfp-pitch-management

**OCM Skills Plugin** — Skill 3 of 8
**Status:** Complete — Phase 1 and Phase 2 tested

---

## What this skill does

Runs structured RFP processes for selecting outside counsel — from drafting the initial document through evaluating firm responses and producing a defensible selection recommendation for GC sign-off.

An average law firm spends 47 hours on an RFP response. That cost gets built into the price of legal services. Poorly structured RFPs produce responses that are incomparable and select by default for the most polished proposal, not the best firm. This skill encodes the methodology for running processes that produce genuine comparability and defensible decisions.

---

## Modes

| Mode | Trigger | Output |
|------|---------|--------|
| 1 — Draft RFP | "Draft an RFP" / "Write a legal RFP" / "We need to go to market" | RFP Document + Evaluation Criteria Framework |
| 2 — Evaluate Responses | "Evaluate firm responses" / "Score the RFP submissions" / "Compare the proposals" | Scored Evaluation Matrix + Evaluation Summary Note |
| 3 — Shortlist and Selection Brief | "Which firms should we shortlist" / "Selection recommendation" / "We want to appoint [firm]" | Selection Brief + Feedback Letters (successful and unsuccessful) |
| 4 — RFP Process Design | "How do we run a panel RFP" / "Design the RFP process" / "How do we weight the criteria" | RFP Process Plan + Evaluation Criteria Framework |

---

## Key design decisions

**Named firms in internal documents.** Evaluation documents (Mode 2 scored matrix, Mode 3 selection brief) use actual firm names — these are internal governance records. Feedback letters (Mode 3) use [Firm] placeholder in the template, populated at send time.

**Pricing structure requirements.** RFP templates include structured pricing sections requiring AFA options, AI discount disclosure, and rate transparency. 83% of proposals on PERSUIT now use value-based pricing. An RFP that doesn't address pricing structure leaves money on the table.

**OCG as appointment condition.** Mode 1 includes OCG acknowledgment as a condition of appointment. If OCGs don't exist, the skill flags that engagement-terms-billing-guidelines (Skill 1) should run in parallel so the document is ready when appointment letters go out.

**Defensible process documentation.** Every mode produces documentation sufficient to withstand a GC challenge on process fairness. Evaluation criteria are defined before responses are received. Scoring is anchored to descriptive rubrics, not subjective impressions.

---

## Placement in the OCM lifecycle

| Stage | Skill |
|-------|-------|
| Billing rules | engagement-terms-billing-guidelines (Skill 1) |
| Panel design | panel-design-selection (Skill 2) |
| **Firm selection** | **rfp-pitch-management (Skill 3) ← this skill** |
| Fee arrangements | fee-arrangement-structuring (Skill 4) |
| Matter instruction | matter-allocation-instruction (Skill 5) |
| Invoice review | invoice-review-compliance (Skill 6) |
| Performance management | performance-scorecard (Skill 7) |
| Panel review | panel-review-rationalisation (Skill 8) |

---

## Cross-skill connections

| Skill | Connection |
|-------|-----------|
| panel-design-selection (Skill 2) | Selection criteria matrix from panel design feeds RFP evaluation criteria and weightings. |
| engagement-terms-billing-guidelines (Skill 1) | Firms appointed through RFP must receive and sign OCGs before work begins. |
| fee-arrangement-structuring (Skill 4) | Commercial terms agreed in RFP negotiations become the baseline for matter-level fee arrangement. |
| matter-allocation-instruction (Skill 5) | Firms appointed via RFP get instructed via Skill 5 on their first matter. |
| performance-scorecard (Skill 7) | RFP selection criteria should become ongoing evaluation criteria. |
| panel-review-rationalisation (Skill 8) | Panel review can trigger a refresh RFP. Mode 4 of Skill 8 produces the Panel Refresh Brief that feeds into this skill. |

---

## Testing

Phase 1 and Phase 2 test prompts and assertion sets are in the build log.

---

## Files

- `rfp-pitch-management/SKILL.md` — skill instructions
- `rfp-pitch-management-README.md` — this document

---

## Licence

Apache 2.0 — LegalOps Consulting Limited
