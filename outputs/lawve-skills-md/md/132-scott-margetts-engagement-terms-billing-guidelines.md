---
id: "480ec9b4-590d-54a3-8b41-85d7130cbc09"
title: "Engagement Terms Billing Guidelines"
title_cn: "参与条款 计费指南"
slug: "engagement-terms-billing-guidelines"
url: "https://lawve.ai/@scott-margetts/skill/engagement-terms-billing-guidelines"
author: "Scott Margetts"
author_slug: "scott-margetts"
category: "legal-operations"
language: "en"
license: "Apache 2.0"
jurisdictions: ""
status: "active"
views: 172
downloads: 151
created_at: "2026-04-05T16:30:09.965883+02:00"
updated_at: "2026-04-30T12:41:01.754713+02:00"
source_index: 132
---

# 参与条款 计费指南

原始名称：`Engagement Terms Billing Guidelines`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/engagement-terms-billing-guidelines

## 中文 README

# 参与条款计费指南

**OCM 技能插件** — 技能 1（共 8 项）
**状态：** 完成 — 第 1 阶段和第 2 阶段已测试

---

## 这个技能有什么作用

起草、审查和维护外部法律顾问指南 (OCG) — 一份运营文件，规定了外部律师事务所如何计费、配备人员、沟通和提供法律服务的期望。

OCG 是内部法律运营职能部门可采用的成本最低、影响最大的单一干预措施。 60% 的内部团队没有这些。在 40% 这样做的人中，87% 几乎不执行。该技能编码了构建根据团队成熟度水平校准的 OCG 并生成内部业务案例以使其采用的方法。

---

## 模式
| Mode | Trigger | Output |
|------|---------|--------|
| 1 — Draft OCG | "Draft billing guidelines" / "We don't have billing guidelines" / "Write an OCG" | OCG document + GC Briefing Note + cover email |
| 2 — Review and Gap Analysis | "Review our guidelines" / "What's missing from our OCG" | Gap Analysis + GC Briefing Note |
| 3 — Targeted Update | "Update the AI clause" / "Add D&I requirements" / "Strengthen the rate review terms" | Replacement section text + GC Note |
| 4 — Internal Business Case | "GC briefing on billing guidelines" / "How do I get buy-in for OCGs" | GC Decision Memo |
| Stage | Skill |
|-------|-------|
| **Billing rules** | **engagement-terms-billing-guidelines (Skill 1) ← this skill** |
| Panel design | panel-design-selection (Skill 2) |
| Firm selection | rfp-pitch-management (Skill 3) |
| Fee arrangements | fee-arrangement-structuring (Skill 4) |
| Matter instruction | matter-allocation-instruction (Skill 5) |
| Invoice review | invoice-review-compliance (Skill 6) |
| Performance management | performance-scorecard (Skill 7) |
| Panel review | panel-review-rationalisation (Skill 8) |
| Skill | Connection |
|-------|-----------|
| fee-arrangement-structuring (Skill 4) | OCG sets AFA policy preferences. Skill 4 designs the specific arrangement for a matter. |
| matter-allocation-instruction (Skill 5) | OCG is the standing document; the matter instruction references it per engagement. |
| invoice-review-compliance (Skill 6) | OCG defines the rules that invoice review enforces. Weak OCG = nothing to measure against. |
| performance-scorecard (Skill 7) | OCG compliance rate is a scorecard metric. Scorecard identifies non-compliance → OCG update strengthens the provision. |
| panel-review-rationalisation (Skill 8) | OCG adherence is a panel retention criterion. |
---

## 关键设计决策

**成熟度校准。** 输出长度、组件覆盖范围和执行强度由成熟度级别（早期/中级/高级）驱动。早期团队获得简洁、协作的 OCG。高级团队获得全面的规定并正式执行。从低起点开始——不断提升成熟度比放弃公司已经推迟的条款更容易。

** 15 个组成部分的框架。** 差距分析（模式 2）根据结构化最佳实践框架进行评估，涵盖费率治理、计费格式、禁止收费、人员配置、人工智能透明度、D&I 等。项目级评估，而不是总分——用户需要知道要修复哪些具体条款。

**每种模式中面向 GC 的输出。**每种模式都会生成操作文档和面向 GC/领导力的文档。用户需要工具和内部外壳来使用它。

**人工智能计费条款。** 所有成熟度级别均包含人工智能政策条款。 59% 的内部法律顾问不知道公司是否在处理事务时使用人工智能。 OCG 是制定披露要求和人工智能计费规则的地方。

**现有 OCG 路由。** 如果用户提供现有 OCG，则即使他们说“帮我起草指南”，该技能也会默认为模式 2（差距分析）。与从头开始相比，改进现有技术更快、破坏性更小。

---

## 在 OCM 生命周期中的放置


---

## 跨技能连接


---

## 测试

第 1 阶段和第 2 阶段的测试提示和断言集位于构建日志中。

---

## 文件

- `engagement-terms-billing-guidelines/SKILL.md` — 技能说明
- `engagement-terms-billing-guidelines-README.md` — 本文档

---

## 许可证

Apache 2.0 — LegalOps 咨询有限公司

---

## Original README

# engagement-terms-billing-guidelines

**OCM Skills Plugin** — Skill 1 of 8
**Status:** Complete — Phase 1 and Phase 2 tested

---

## What this skill does

Drafts, reviews, and maintains outside counsel guidelines (OCGs) — the operational document that sets expectations for how external law firms bill, staff, communicate, and deliver legal services.

OCGs are the single lowest-cost, highest-impact intervention available to an in-house legal ops function. 60% of in-house teams don't have them. Of the 40% that do, 87% barely enforce them. This skill encodes the methodology for building OCGs calibrated to the team's maturity level and producing the internal business case to get them adopted.

---

## Modes

| Mode | Trigger | Output |
|------|---------|--------|
| 1 — Draft OCG | "Draft billing guidelines" / "We don't have billing guidelines" / "Write an OCG" | OCG document + GC Briefing Note + cover email |
| 2 — Review and Gap Analysis | "Review our guidelines" / "What's missing from our OCG" | Gap Analysis + GC Briefing Note |
| 3 — Targeted Update | "Update the AI clause" / "Add D&I requirements" / "Strengthen the rate review terms" | Replacement section text + GC Note |
| 4 — Internal Business Case | "GC briefing on billing guidelines" / "How do I get buy-in for OCGs" | GC Decision Memo |

---

## Key design decisions

**Maturity calibration.** Output length, component coverage, and enforcement intensity are driven by maturity level (Early / Intermediate / Advanced). An Early-stage team gets a concise, collaborative OCG. An Advanced team gets comprehensive provisions with formal enforcement. Start low — escalating maturity is easier than retreating from terms firms have already pushed back on.

**15-component framework.** Gap analysis (Mode 2) assesses against a structured best-practice framework covering rate governance, billing format, prohibited fees, staffing, AI transparency, D&I, and more. Item-level assessment, not an overall score — the user needs to know which specific provisions to fix.

**GC-facing output in every mode.** Every mode produces both the operational document and the GC/leadership-facing document. The user needs the tool and the internal case for using it.

**AI billing clause.** All maturity levels include AI policy provisions. 59% of in-house counsel don't know whether firms are using AI on their matters. The OCG is where disclosure requirements and AI billing rules get established.

**Existing OCG routing.** If the user provides existing OCGs, the skill defaults to Mode 2 (gap analysis) even if they say "help me draft guidelines." Improving what exists is faster and less disruptive than starting from scratch.

---

## Placement in the OCM lifecycle

| Stage | Skill |
|-------|-------|
| **Billing rules** | **engagement-terms-billing-guidelines (Skill 1) ← this skill** |
| Panel design | panel-design-selection (Skill 2) |
| Firm selection | rfp-pitch-management (Skill 3) |
| Fee arrangements | fee-arrangement-structuring (Skill 4) |
| Matter instruction | matter-allocation-instruction (Skill 5) |
| Invoice review | invoice-review-compliance (Skill 6) |
| Performance management | performance-scorecard (Skill 7) |
| Panel review | panel-review-rationalisation (Skill 8) |

---

## Cross-skill connections

| Skill | Connection |
|-------|-----------|
| fee-arrangement-structuring (Skill 4) | OCG sets AFA policy preferences. Skill 4 designs the specific arrangement for a matter. |
| matter-allocation-instruction (Skill 5) | OCG is the standing document; the matter instruction references it per engagement. |
| invoice-review-compliance (Skill 6) | OCG defines the rules that invoice review enforces. Weak OCG = nothing to measure against. |
| performance-scorecard (Skill 7) | OCG compliance rate is a scorecard metric. Scorecard identifies non-compliance → OCG update strengthens the provision. |
| panel-review-rationalisation (Skill 8) | OCG adherence is a panel retention criterion. |

---

## Testing

Phase 1 and Phase 2 test prompts and assertion sets are in the build log.

---

## Files

- `engagement-terms-billing-guidelines/SKILL.md` — skill instructions
- `engagement-terms-billing-guidelines-README.md` — this document

---

## Licence

Apache 2.0 — LegalOps Consulting Limited
