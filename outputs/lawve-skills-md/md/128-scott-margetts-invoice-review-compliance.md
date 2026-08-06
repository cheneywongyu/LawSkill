---
id: "52a61a0f-ea76-578b-a713-5c6963aa2cb8"
title: "Invoice Review Compliance"
title_cn: "发票审核合规性"
slug: "invoice-review-compliance"
url: "https://lawve.ai/@scott-margetts/skill/invoice-review-compliance"
author: "Scott Margetts"
author_slug: "scott-margetts"
category: "legal-operations"
language: "en"
license: "Apache 2.0"
jurisdictions: ""
status: "active"
views: 169
downloads: 159
created_at: "2026-04-05T16:33:06.874635+02:00"
updated_at: "2026-04-30T12:42:14.348746+02:00"
source_index: 128
---

# 发票审核合规性

原始名称：`Invoice Review Compliance`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/invoice-review-compliance

## 中文 README

# 发票审核合规性

**OCM 技能插件** — 技能 6（共 8 项）
**状态：** 完成 — 第 1 阶段和第 2 阶段已测试

---

## 这个技能有什么作用

根据计费准则审查外部顾问发票，按类别标记不合规条目，并生成批准、减少、拒绝和传达这些决定所需的文件。涵盖完整的发票合规工作流程：从单项审核到正式的公司升级。

无论有或没有电子计费平台均可使用。在电子计费系统到位的情况下，LEDES 格式和 UTBMS 编码是硬门。在没有电子账单系统的情况下，通过电子邮件提交发票是渠道，UTBMS 编码是尽力而为的标志。

---

## 模式
| Mode | Trigger | Output |
|------|---------|--------|
| 1 — Invoice Line-Item Review | "Review this invoice" / "Flag the billing issues" / "Check against our guidelines" | Line-Item Review Report + Invoice Approval Note |
| 2 — Invoice Rejection Communication | "Write the rejection letter" / "Communicate the reductions to the firm" | Invoice Rejection Letter + Internal Rejection Record |
| 3 — Review Process Setup | "Build an invoice checklist" / "How should we review invoices?" / "Set up our review process" | Invoice Review Checklist + Reviewer Guidance Note |
| 4 — Compliance Pattern Analysis | "The firm keeps doing this" / "Recurring violations" / "Escalate the billing issue" | Compliance Pattern Summary + Formal Non-Compliance Notice |
| Category | Action | Examples |
|----------|--------|---------|
| Block billing | REJECT | Multiple tasks with different UTBMS codes in a single entry |
| Prohibited fees | REJECT | Invoice prep, conflict checks, training, ramp-up, clerical work |
| Rate violation | REJECT | Unapproved rate, unapproved timekeeper, volume discount not applied |
| Staffing violation | REJECT or REDUCE | Multiple timekeepers at event without approval, daily hours cap exceeded |
| Description violation | REDUCE or APPROVE WITH NOTE | "Services rendered", "Document review" — no specific task described |
| Internal comms excess | REDUCE | Internal firm communications >10% of invoice total |
| Expense violation | REJECT or REDUCE | Overhead expenses, first-class travel, expense markups |
| Late submission | REDUCE | 60+ days late: 20% reduction; 90+ days: possible rejection |
| Stage | Skill |
|-------|-------|
| Billing rules | engagement-terms-billing-guidelines (Skill 1) |
| Panel design | panel-design-selection (Skill 2) |
| Firm selection | rfp-pitch-management (Skill 3) |
| Fee arrangements | fee-arrangement-structuring (Skill 4) |
| Matter instruction | matter-allocation-instruction (Skill 5) |
| **Invoice review** | **invoice-review-compliance (Skill 6) ← this skill** |
| Performance management | performance-scorecard (Skill 7) |
| Panel review | panel-review-rationalisation (Skill 8) |
| Skill | Connection |
|-------|-----------|
| engagement-terms-billing-guidelines (Skill 1) | The OCG defines the rules this skill enforces. Mode 3 checklist reflects Skill 1 output. |
| fee-arrangement-structuring (Skill 4) | Fee arrangement type determines invoice structure. Fixed fee invoices reviewed differently from hourly. |
| matter-allocation-instruction (Skill 5) | Instruction gaps are the upstream cause of most compliance failures. Mode 4 pattern analysis prompts the instruction gap check. |
| performance-scorecard (Skill 7) | Invoice compliance data feeds the billing adherence component of the performance scorecard. |
模式 5 — 对话指南：为不太成熟的团队准备与外部顾问进行计费对话的结构化指南，当团队需要提出合规问题但缺乏正式的不合规通知的流程成熟度时制作。

---

## 关键设计决策

**规则与指南的区别。** 四个操作值 - 拒绝、减少、批准（带注释）、批准 - 映射到规则/指南的区别。拒绝严重 OCG 违规行为（禁止收费、费率违规、集体计费）。减少酌情判断（时间过长、描述质量）。这种区别使得审查决定是站得住脚的。

**七阶段审查清单。** 模式 3 按照审查者实际工作的顺序进行审查：机械检查 → 行项目审查 → 禁止费用 → 开支 → UTBMS 编码 → 内部通信阈值 → 预算。 REJECT-重相前置。

**记录了上游原因。**领域知识明确地将计费合规性失败与指令质量联系起来。模式4模式分析提示：这是企业失败还是指令差距？交叉参考事项分配指令模式4（指令审核）。

**PDF 发票摄取。** 模式 1 接受上传的 PDF 发票。该技能提取行项目并将其映射到计费指南，而不需要用户重新格式化。

---

## 违规类别


---

## 在 OCM 生命周期中的放置


---

## 跨技能连接


---

## 测试

第 1 阶段和第 2 阶段的测试提示和断言集位于构建日志中。

---

## 文件

- `invoice-review-compliance/SKILL.md` — 技能说明
- `invoice-review-compliance-README.md` — 本文档

---

## 许可证

Apache 2.0 — LegalOps 咨询有限公司

---

## Original README

# invoice-review-compliance

**OCM Skills Plugin** — Skill 6 of 8
**Status:** Complete — Phase 1 and Phase 2 tested

---

## What this skill does

Reviews outside counsel invoices against billing guidelines, flags non-compliant entries by category, and produces the documents needed to approve, reduce, reject, and communicate those decisions. Covers the full invoice compliance workflow: line-item review through to formal firm escalation.

Works with or without an e-billing platform. Where an e-billing system is in place, LEDES format and UTBMS coding are hard gates. Where there is no e-billing system, invoice submission by email is the channel and UTBMS coding is a best-efforts flag.

---

## Modes

| Mode | Trigger | Output |
|------|---------|--------|
| 1 — Invoice Line-Item Review | "Review this invoice" / "Flag the billing issues" / "Check against our guidelines" | Line-Item Review Report + Invoice Approval Note |
| 2 — Invoice Rejection Communication | "Write the rejection letter" / "Communicate the reductions to the firm" | Invoice Rejection Letter + Internal Rejection Record |
| 3 — Review Process Setup | "Build an invoice checklist" / "How should we review invoices?" / "Set up our review process" | Invoice Review Checklist + Reviewer Guidance Note |
| 4 — Compliance Pattern Analysis | "The firm keeps doing this" / "Recurring violations" / "Escalate the billing issue" | Compliance Pattern Summary + Formal Non-Compliance Notice |

Mode 5 — Conversation Guide: a structured guide for less mature teams preparing for a billing conversation with outside counsel, produced when the team needs to raise compliance issues but lacks the process maturity for a formal non-compliance notice.

---

## Key design decisions

**Rule vs. guideline distinction.** Four action values — REJECT, REDUCE, APPROVE WITH NOTE, APPROVE — map to the rule/guideline distinction. REJECT for hard OCG breaches (prohibited fees, rate violations, block billing). REDUCE for discretionary judgments (excessive time, description quality). The distinction makes review decisions defensible.

**Seven-phase review checklist.** Mode 3 sequences review in the order a reviewer would actually work: mechanical checks → line-item review → prohibited fees → expenses → UTBMS coding → internal comms threshold → budget. REJECT-heavy phases front-loaded.

**Upstream cause documented.** Domain knowledge explicitly connects billing compliance failures to instruction quality. Mode 4 pattern analysis prompts: is this a firm failing or an instruction gap? Cross-reference to matter-allocation-instruction Mode 4 (Instruction Audit).

**PDF invoice ingestion.** Mode 1 accepts uploaded PDF invoices. The skill extracts line items and maps them against billing guidelines without requiring the user to reformat.

---

## Violation categories

| Category | Action | Examples |
|----------|--------|---------|
| Block billing | REJECT | Multiple tasks with different UTBMS codes in a single entry |
| Prohibited fees | REJECT | Invoice prep, conflict checks, training, ramp-up, clerical work |
| Rate violation | REJECT | Unapproved rate, unapproved timekeeper, volume discount not applied |
| Staffing violation | REJECT or REDUCE | Multiple timekeepers at event without approval, daily hours cap exceeded |
| Description violation | REDUCE or APPROVE WITH NOTE | "Services rendered", "Document review" — no specific task described |
| Internal comms excess | REDUCE | Internal firm communications >10% of invoice total |
| Expense violation | REJECT or REDUCE | Overhead expenses, first-class travel, expense markups |
| Late submission | REDUCE | 60+ days late: 20% reduction; 90+ days: possible rejection |

---

## Placement in the OCM lifecycle

| Stage | Skill |
|-------|-------|
| Billing rules | engagement-terms-billing-guidelines (Skill 1) |
| Panel design | panel-design-selection (Skill 2) |
| Firm selection | rfp-pitch-management (Skill 3) |
| Fee arrangements | fee-arrangement-structuring (Skill 4) |
| Matter instruction | matter-allocation-instruction (Skill 5) |
| **Invoice review** | **invoice-review-compliance (Skill 6) ← this skill** |
| Performance management | performance-scorecard (Skill 7) |
| Panel review | panel-review-rationalisation (Skill 8) |

---

## Cross-skill connections

| Skill | Connection |
|-------|-----------|
| engagement-terms-billing-guidelines (Skill 1) | The OCG defines the rules this skill enforces. Mode 3 checklist reflects Skill 1 output. |
| fee-arrangement-structuring (Skill 4) | Fee arrangement type determines invoice structure. Fixed fee invoices reviewed differently from hourly. |
| matter-allocation-instruction (Skill 5) | Instruction gaps are the upstream cause of most compliance failures. Mode 4 pattern analysis prompts the instruction gap check. |
| performance-scorecard (Skill 7) | Invoice compliance data feeds the billing adherence component of the performance scorecard. |

---

## Testing

Phase 1 and Phase 2 test prompts and assertion sets are in the build log.

---

## Files

- `invoice-review-compliance/SKILL.md` — skill instructions
- `invoice-review-compliance-README.md` — this document

---

## Licence

Apache 2.0 — LegalOps Consulting Limited
