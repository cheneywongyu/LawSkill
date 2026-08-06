---
id: "a2a73ba7-8ee8-5c78-bd08-cec6c97bf8ec"
title: "Matter Allocation Instruction"
title_cn: "事项分配说明"
slug: "matter-allocation-instruction"
url: "https://lawve.ai/@scott-margetts/skill/matter-allocation-instruction"
author: "Scott Margetts"
author_slug: "scott-margetts"
category: "legal-operations"
language: "en"
license: "Apache 2.0"
jurisdictions: ""
status: "active"
views: 151
downloads: 148
created_at: "2026-04-05T16:34:19.484638+02:00"
updated_at: "2026-04-30T12:43:39.352950+02:00"
source_index: 126
---

# 事项分配说明

原始名称：`Matter Allocation Instruction`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/matter-allocation-instruction

## 中文 README

# 事项分配指令

**OCM 技能插件** — 技能 5（共 8 项）
**状态：** 完成 — 第 1 阶段和第 2 阶段已测试

---

## 这个技能有什么作用

执行事项分配和公司参与，从公司选择到现场、正确指导的事项。使用正确的采购框架将合适的公司与新事务相匹配。生成准备发送的完整事项指令。生成可关闭冲突清除、约定书、OCG 和电子账单关卡的入职清单。审核现有指令是否存在缺陷，并准备发送补救说明。

这是已溯源事务的执行层。小组设计选择（技能 2）定义了哪些公司在小组中。 RFP 推介管理（技能 3）通过竞争过程选择公司。这项技能指导选定的公司并关闭入职大门。

---

## 模式
| Mode | Trigger | Output |
|------|---------|--------|
| 1 — Matter Allocation | "Which firm should handle this" / "Allocate this matter" / "Who should we use" | Matter Allocation Recommendation + GC/Budget Holder Note |
| 2 — Instruction Template | "Instruct the firm" / "Write the instruction" / "Draft the instruction letter" | Matter Instruction (email-ready) + Internal Allocation Record |
| 3 — Firm Onboarding | "Onboard the firm" / "Set up the matter" / "What do we need before they start" | Matter Onboarding Checklist + Firm Onboarding Confirmation Request |
| 4 — Instruction Audit | "Is our instruction complete" / "Review the instruction" / "What's missing" | Instruction Gap Assessment + Instruction Remediation Note |
| Stage | Skill |
|-------|-------|
| Billing rules | engagement-terms-billing-guidelines (Skill 1) |
| Panel design | panel-design-selection (Skill 2) |
| Firm selection | rfp-pitch-management (Skill 3) |
| Fee arrangements | fee-arrangement-structuring (Skill 4) |
| **Matter instruction** | **matter-allocation-instruction (Skill 5) ← this skill** |
| Invoice review | invoice-review-compliance (Skill 6) |
| Performance management | performance-scorecard (Skill 7) |
| Panel review | panel-review-rationalisation (Skill 8) |
| Skill | Connection |
|-------|-----------|
| panel-design-selection (Skill 2) | Defines which firms are on the panel and at what tier. Mode 1 allocates within that structure. |
| rfp-pitch-management (Skill 3) | Firms appointed via RFP are first instructed via this skill. |
| fee-arrangement-structuring (Skill 4) | Agreed AFA is referenced in the instruction template. |
| engagement-terms-billing-guidelines (Skill 1) | OCGs are a prerequisite confirmed at onboarding. Mode 3 closes the acknowledgment gate. |
| invoice-review-compliance (Skill 6) | Instruction gaps (no UTBMS requirement, no staffing disclosure) are the upstream cause of invoice compliance failures. |
| matter-intake-scoping (LPM Core) | The matter instruction is the client-side equivalent of the LPM intake — same information, different audience. |
---

## 关键设计决策

**冲突清除作为硬门。** 模式 3 第 1 阶段的门按顺序排列以阻止工作开始。模式 2 包括作为独立条款的冲突清除。模式 4 将其不存在标记为严重。不是提醒——结构控制。

**指导时的电子账单设置。** 被视为具有 2 个工作日截止日期和明确所有权的指定入职项目。由于没有人告诉公司的计费联系人格式要求，因此以 PDF 形式发送的发票没有 UTBMS 代码，这是指令过程中的失败，而不是发票审核过程中的失败。

**模式 1 中的正确采购逻辑。** 分配建议根据七个正确采购因素进行评分。默认的 BigLaw 偏差（分配给 A 层，因为这是关系所在）被称为常见故障模式。测试：这件事是否需要 B 级公司明显无法提供的技能或规模？

**电子邮件就绪说明。** 模式 2 输出的结构可直接粘贴到发送给监督合作伙伴的电子邮件中。说明通过电子邮件发出。使用前需要转换的技能输出会产生摩擦，从而减少采用。

**指导时报告节奏。**模式 2 包括作为命名字段的报告节奏、格式和首次报告日期。这是客户有杠杆作用的时候。

---

## 在 OCM 生命周期中的放置


---

## 跨技能连接


---

## 测试

第 1 阶段和第 2 阶段的测试提示和断言集位于构建日志中。

---

## 文件

- `matter-allocation-instruction/SKILL.md` — 技能说明
- `matter-allocation-instruction-README.md` — 本文档

---

## 许可证

Apache 2.0 — LegalOps 咨询有限公司

---

## Original README

# matter-allocation-instruction

**OCM Skills Plugin** — Skill 5 of 8
**Status:** Complete — Phase 1 and Phase 2 tested

---

## What this skill does

Executes matter allocation and firm engagement from firm selection through to a live, properly-instructed matter. Match the right firm to a new matter using the right-sourcing framework. Produce a complete matter instruction ready to send. Generate the onboarding checklist that closes conflict clearance, engagement letter, OCG, and e-billing gates. Audit an existing instruction for gaps with a remediation note ready to send.

This is the execution layer for a matter that has been sourced. Panel-design-selection (Skill 2) defines which firms are on the panel. RFP-pitch-management (Skill 3) selects firms through a competitive process. This skill instructs the selected firm and closes the onboarding gates.

---

## Modes

| Mode | Trigger | Output |
|------|---------|--------|
| 1 — Matter Allocation | "Which firm should handle this" / "Allocate this matter" / "Who should we use" | Matter Allocation Recommendation + GC/Budget Holder Note |
| 2 — Instruction Template | "Instruct the firm" / "Write the instruction" / "Draft the instruction letter" | Matter Instruction (email-ready) + Internal Allocation Record |
| 3 — Firm Onboarding | "Onboard the firm" / "Set up the matter" / "What do we need before they start" | Matter Onboarding Checklist + Firm Onboarding Confirmation Request |
| 4 — Instruction Audit | "Is our instruction complete" / "Review the instruction" / "What's missing" | Instruction Gap Assessment + Instruction Remediation Note |

---

## Key design decisions

**Conflict clearance as a hard gate.** Mode 3 Phase 1 gates are sequenced to block work commencement. Mode 2 includes conflict clearance as a standalone clause. Mode 4 flags its absence as critical. Not a reminder — a structural control.

**E-billing setup at instruction.** Treated as a named onboarding item with a 2-business-day deadline and explicit ownership. The pattern of invoices arriving in PDF without UTBMS codes because no one told the firm's billing contact the format requirement is a process failure at instruction, not at invoice review.

**Right-sourcing logic in Mode 1.** The allocation recommendation scores against seven right-sourcing factors. The default BigLaw bias — allocating to Tier A because that's where the relationship sits — is named as a common failure mode. The test: does this matter require skills or scale that a Tier B firm demonstrably cannot provide?

**Email-ready instruction.** Mode 2 output is structured to paste directly into an email to the supervising partner. Instructions go out by email. A skill output that requires conversion before use creates friction that reduces adoption.

**Reporting cadence at instruction.** Mode 2 includes reporting cadence, format, and first report date as named fields. This is when the client has leverage.

---

## Placement in the OCM lifecycle

| Stage | Skill |
|-------|-------|
| Billing rules | engagement-terms-billing-guidelines (Skill 1) |
| Panel design | panel-design-selection (Skill 2) |
| Firm selection | rfp-pitch-management (Skill 3) |
| Fee arrangements | fee-arrangement-structuring (Skill 4) |
| **Matter instruction** | **matter-allocation-instruction (Skill 5) ← this skill** |
| Invoice review | invoice-review-compliance (Skill 6) |
| Performance management | performance-scorecard (Skill 7) |
| Panel review | panel-review-rationalisation (Skill 8) |

---

## Cross-skill connections

| Skill | Connection |
|-------|-----------|
| panel-design-selection (Skill 2) | Defines which firms are on the panel and at what tier. Mode 1 allocates within that structure. |
| rfp-pitch-management (Skill 3) | Firms appointed via RFP are first instructed via this skill. |
| fee-arrangement-structuring (Skill 4) | Agreed AFA is referenced in the instruction template. |
| engagement-terms-billing-guidelines (Skill 1) | OCGs are a prerequisite confirmed at onboarding. Mode 3 closes the acknowledgment gate. |
| invoice-review-compliance (Skill 6) | Instruction gaps (no UTBMS requirement, no staffing disclosure) are the upstream cause of invoice compliance failures. |
| matter-intake-scoping (LPM Core) | The matter instruction is the client-side equivalent of the LPM intake — same information, different audience. |

---

## Testing

Phase 1 and Phase 2 test prompts and assertion sets are in the build log.

---

## Files

- `matter-allocation-instruction/SKILL.md` — skill instructions
- `matter-allocation-instruction-README.md` — this document

---

## Licence

Apache 2.0 — LegalOps Consulting Limited
