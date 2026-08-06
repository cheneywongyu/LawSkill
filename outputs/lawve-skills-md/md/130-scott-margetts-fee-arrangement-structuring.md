---
id: "07c5177a-dceb-527b-8ca2-a9cc18b30112"
title: "Fee Arrangement Structuring"
title_cn: "费用安排结构"
slug: "fee-arrangement-structuring"
url: "https://lawve.ai/@scott-margetts/skill/fee-arrangement-structuring"
author: "Scott Margetts"
author_slug: "scott-margetts"
category: "legal-operations"
language: "en"
license: "Apache 2.0"
jurisdictions: ""
status: "active"
views: 176
downloads: 21
created_at: "2026-04-05T16:26:51.496905+02:00"
updated_at: "2026-04-30T12:41:59.196272+02:00"
source_index: 130
---

# 费用安排结构

原始名称：`Fee Arrangement Structuring`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/fee-arrangement-structuring

## 中文 README

# 费用安排结构

**OCM 技能插件** — 技能 4（共 8 项）
**状态：** 完成 — 第 1 阶段和第 2 阶段已测试

---

## 这个技能有什么作用

在内部法律团队和外部法律顾问之间安排商业费用。设计 AFA（固定、上限、项圈、混合、分阶段、成功），评估范围是否支持拟议的结构，为费用谈判准备商业立场，根据交付数据审查现有安排，并评估范围外的索赔。

五种模式涵盖整个 AFA 生命周期——从初始设计到范围争议响应。

---

## 模式
| Mode | Trigger | Output |
|------|---------|--------|
| 1 — AFA Design | "Structure the fee" / "Design an AFA" / "Move off hourly" / "Fixed fee for this work" | AFA Recommendation Memo + GC Sign-off Brief |
| 2 — Scope-to-Fee Matching | "Does scope support a fixed fee?" / "Can we do a cap on this?" | Scope-Fee Assessment + Recommendation Note |
| 3 — AFA Negotiation Brief | "Negotiate the fee" / "Renegotiate the arrangement" / "AI should reduce the cost" | Negotiation Brief + Talking Points |
| 4 — AFA Health Check | "Is our AFA holding?" / "Fee health check" / "Cap is being approached" | AFA Health Assessment + Action Recommendation |
| 5 — Scope Dispute Assessment | "Firm is claiming OOS" / "Is this in scope?" / "Is this OOS?" | Scope Assessment + Dispute Response Note |
| Stage | Skill |
|-------|-------|
| Billing rules | engagement-terms-billing-guidelines (Skill 1) |
| Panel design | panel-design-selection (Skill 2) |
| Firm selection | rfp-pitch-management (Skill 3) |
| **Fee arrangements** | **fee-arrangement-structuring (Skill 4) ← this skill** |
| Matter instruction | matter-allocation-instruction (Skill 5) |
| Invoice review | invoice-review-compliance (Skill 6) |
| Performance management | performance-scorecard (Skill 7) |
| Panel review | panel-review-rationalisation (Skill 8) |
| Skill | Connection |
|-------|-----------|
| engagement-terms-billing-guidelines (Skill 1) | OCG sets AFA policy preference; this skill designs the specific arrangement for a matter. |
| rfp-pitch-management (Skill 3) | Competitive fee proposals from the RFP process anchor the negotiation position. |
| matter-allocation-instruction (Skill 5) | Agreed fee arrangement is referenced in the matter instruction template. |
| invoice-review-compliance (Skill 6) | AFA type determines invoice structure and compliance rules. Fixed fee invoices reviewed differently from hourly. |
| budget-and-fee-manager (LPM Core) | AFA structure agreed here → phase-based budget built and WIP monitored in budget-and-fee-manager. |
| scope-change-controller (LPM Core) | Scope drift identified in Mode 4 should be logged and controlled in scope-change-controller. |
---

## 关键设计决策

**与 LPM Core 的边界。** 费用安排结构设计并协商跨事务和公司关系的商业结构。预算和费用管理器（LPM 核心）构建基于阶段的预算并监控该结构内单个事项的 WIP 差异。 AFA 技能同意的安排是预算技能监控的。

**范围状态作为设计输入。**模式 1 使用范围状态（已定义/部分定义/未定义）作为 AFA 选择中的主要变量。未定义的范围+固定费用=风险转移给公司并相应定价。该技能明确地指出了这一点，而不是设计一个会失败的 AFA。

**用于范围争议的模式 5。** 在测试显示“公司表示这超出范围”时在最初的 4 模式设计之后添加，是与健康检查或重新协商不同的工作流程。该模式产生一个评估，参考约定条款来验证或质疑索赔。

**管辖区调整。** 利率基准默认为英国/英镑。美国（AmLaw 数据）和澳大利亚基准可用 — 在飞行前或输入中注明。

---

## 在 OCM 生命周期中的放置


---

## 跨技能连接


---

## 测试

第 1 阶段和第 2 阶段的测试提示和断言集位于构建日志中。

---

## 文件

- `fee-arrangement-structuring/SKILL.md` — 技能说明
- `fee-arrangement-structuring-README.md` — 本文档

---

## 许可证

Apache 2.0 — LegalOps 咨询有限公司

---

## Original README

# fee-arrangement-structuring

**OCM Skills Plugin** — Skill 4 of 8
**Status:** Complete — Phase 1 and Phase 2 tested

---

## What this skill does

Structures commercial fee arrangements between in-house legal teams and outside counsel. Designs AFAs (fixed, capped, collar, blended, phased, success), assesses whether scope supports a proposed structure, prepares commercial positions for fee negotiations, reviews existing arrangements against delivery data, and assesses out-of-scope claims.

Five modes covering the full AFA lifecycle — from initial design through to scope dispute response.

---

## Modes

| Mode | Trigger | Output |
|------|---------|--------|
| 1 — AFA Design | "Structure the fee" / "Design an AFA" / "Move off hourly" / "Fixed fee for this work" | AFA Recommendation Memo + GC Sign-off Brief |
| 2 — Scope-to-Fee Matching | "Does scope support a fixed fee?" / "Can we do a cap on this?" | Scope-Fee Assessment + Recommendation Note |
| 3 — AFA Negotiation Brief | "Negotiate the fee" / "Renegotiate the arrangement" / "AI should reduce the cost" | Negotiation Brief + Talking Points |
| 4 — AFA Health Check | "Is our AFA holding?" / "Fee health check" / "Cap is being approached" | AFA Health Assessment + Action Recommendation |
| 5 — Scope Dispute Assessment | "Firm is claiming OOS" / "Is this in scope?" / "Is this OOS?" | Scope Assessment + Dispute Response Note |

---

## Key design decisions

**Boundary with LPM Core.** fee-arrangement-structuring designs and negotiates the commercial structure across matters and firm relationships. budget-and-fee-manager (LPM Core) builds the phase-based budget and monitors WIP variance on a single matter within that structure. The arrangement the AFA skill agrees is what the budget skill monitors.

**Scope status as a design input.** Mode 1 uses scope status (Defined / Partially defined / Undefined) as a primary variable in AFA selection. Undefined scope + fixed fee = risk transferred to the firm and priced accordingly. The skill names this explicitly rather than designing an AFA that will fail.

**Mode 5 for scope disputes.** Added after the initial 4-mode design when testing showed that "the firm says this is out of scope" is a distinct workflow from health check or renegotiation. The mode produces an assessment that either validates or challenges the claim with reference to the engagement terms.

**Jurisdiction adaptation.** Rate benchmarks default to UK/GBP. US (AmLaw data) and Australian benchmarks available — stated in pre-flight or within input.

---

## Placement in the OCM lifecycle

| Stage | Skill |
|-------|-------|
| Billing rules | engagement-terms-billing-guidelines (Skill 1) |
| Panel design | panel-design-selection (Skill 2) |
| Firm selection | rfp-pitch-management (Skill 3) |
| **Fee arrangements** | **fee-arrangement-structuring (Skill 4) ← this skill** |
| Matter instruction | matter-allocation-instruction (Skill 5) |
| Invoice review | invoice-review-compliance (Skill 6) |
| Performance management | performance-scorecard (Skill 7) |
| Panel review | panel-review-rationalisation (Skill 8) |

---

## Cross-skill connections

| Skill | Connection |
|-------|-----------|
| engagement-terms-billing-guidelines (Skill 1) | OCG sets AFA policy preference; this skill designs the specific arrangement for a matter. |
| rfp-pitch-management (Skill 3) | Competitive fee proposals from the RFP process anchor the negotiation position. |
| matter-allocation-instruction (Skill 5) | Agreed fee arrangement is referenced in the matter instruction template. |
| invoice-review-compliance (Skill 6) | AFA type determines invoice structure and compliance rules. Fixed fee invoices reviewed differently from hourly. |
| budget-and-fee-manager (LPM Core) | AFA structure agreed here → phase-based budget built and WIP monitored in budget-and-fee-manager. |
| scope-change-controller (LPM Core) | Scope drift identified in Mode 4 should be logged and controlled in scope-change-controller. |

---

## Testing

Phase 1 and Phase 2 test prompts and assertion sets are in the build log.

---

## Files

- `fee-arrangement-structuring/SKILL.md` — skill instructions
- `fee-arrangement-structuring-README.md` — this document

---

## Licence

Apache 2.0 — LegalOps Consulting Limited
