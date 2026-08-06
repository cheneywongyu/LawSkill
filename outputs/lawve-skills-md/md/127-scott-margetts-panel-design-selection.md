---
id: "0964ef84-b094-5f4b-b161-4683129d19db"
title: "Panel Design Selection"
title_cn: "面板设计选择"
slug: "panel-design-selection"
url: "https://lawve.ai/@scott-margetts/skill/panel-design-selection"
author: "Scott Margetts"
author_slug: "scott-margetts"
category: "legal-operations"
language: "en"
license: "Apache 2.0"
jurisdictions: ""
status: "active"
views: 142
downloads: 144
created_at: "2026-04-05T16:36:19.628165+02:00"
updated_at: "2026-04-30T12:43:20.830869+02:00"
source_index: 127
---

# 面板设计选择

原始名称：`Panel Design Selection`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/panel-design-selection

## 中文 README

# 面板设计选择

**OCM 技能插件** — 技能 2（共 8 项）
**状态：** 完成 — 第 1 阶段和第 2 阶段已测试

---

## 这个技能有什么作用

设计小组结构，定义公司选择标准，进行正确采购分析，并评估内部法律团队的覆盖范围差距，以建立或正规化其外部法律顾问小组。

小组设计不是小组审查。设计询问：面板应该是什么样子？审查询问：面板性能正常吗？这项技能构建了框架。小组审查合理化（技能8）针对它的措施。

---

## 模式
| Mode | Trigger | Output |
|------|---------|--------|
| 1 — Panel Design | "Design our panel" / "How many firms do we need" / "Panel structure" | Panel Design Document + GC Briefing Note |
| 2 — Selection Criteria Framework | "Firm selection criteria" / "How do we choose firms" / "Weight the criteria" | Selection Criteria Matrix + GC Briefing Note |
| 3 — Right-Sourcing Analysis | "Right-sourcing" / "Are we sending work to the right firms" / "Do we need BigLaw for this" | Right-Sourcing Analysis + GC Briefing Note |
| 4 — Coverage Gap Analysis | "Panel gaps" / "We need a firm for [area]" / "Too many firms" / "Consolidate" | Coverage Assessment + GC Briefing Note |
| Stage | Skill |
|-------|-------|
| Billing rules | engagement-terms-billing-guidelines (Skill 1) |
| **Panel design** | **panel-design-selection (Skill 2) ← this skill** |
| Firm selection | rfp-pitch-management (Skill 3) |
| Fee arrangements | fee-arrangement-structuring (Skill 4) |
| Matter instruction | matter-allocation-instruction (Skill 5) |
| Invoice review | invoice-review-compliance (Skill 6) |
| Performance management | performance-scorecard (Skill 7) |
| Panel review | panel-review-rationalisation (Skill 8) |
| Skill | Connection |
|-------|-----------|
| rfp-pitch-management (Skill 3) | Panel structure and selection criteria feed directly into RFP design and evaluation. |
| engagement-terms-billing-guidelines (Skill 1) | Panel tier determines OCG intensity. Strategic partners may have negotiated terms. |
| performance-scorecard (Skill 7) | Selection criteria framework is the baseline for ongoing performance measurement. |
| panel-review-rationalisation (Skill 8) | This skill builds the framework; Skill 8 assesses the panel against it. |
| matter-allocation-instruction (Skill 5) | Panel structure determines which firm gets which type of matter. |
---

## 关键设计决策

**双重用途标准框架。** 选择标准矩阵（模式 2）专为 RFP 评估（rfp-pitch-management）和持续绩效衡量（绩效记分卡）而设计。您选择公司的标准应该是您评估它们的标准。如果框架只用过一次选型，然后归档，那就失败了。

**用于正确采购的 ABC 分层。** 模式 3 将工作分为三层 - 复杂/战略 (A)、专家/实质性 (B)、常规/批量 (C) - 并根据它们映射当前的提供商分配。最常见的不匹配是 A 级提供商的 C 级工作。这就是财务影响所在。

**关系维度已标记。** 影响与 GC 具有密切关系的公司的正确采购建议已明确标记。分析是关于工作，而不是公司。 GC 决定如何采取行动。

**试点优先的重新分配。** 正确采购建议包括建议的试点范围，而不是大规模重新分配。试点提供证据来支持更广泛的变革。

**支出基准。** 小组规模建议以年度支出基准为基础，而不是抽象的最佳实践。 200 万英镑以下：3-5 家公司。 200 万英镑至 1000 万英镑：5-10。超过 1000 万英镑：8-15+。

---

## 在 OCM 生命周期中的放置


---

## 跨技能连接


---

## 测试

第 1 阶段和第 2 阶段的测试提示和断言集位于构建日志中。

---

## 文件

- `panel-design-selection/SKILL.md` — 技能说明
- `panel-design-selection-README.md` — 本文档

---

## 许可证

Apache 2.0 — LegalOps 咨询有限公司

---

## Original README

# panel-design-selection

**OCM Skills Plugin** — Skill 2 of 8
**Status:** Complete — Phase 1 and Phase 2 tested

---

## What this skill does

Designs panel structures, defines firm selection criteria, runs right-sourcing analysis, and assesses coverage gaps for in-house legal teams building or formalising their outside counsel panel.

Panel design is not panel review. Design asks: what should the panel look like? Review asks: is the panel performing? This skill builds the framework. Panel-review-rationalisation (Skill 8) measures against it.

---

## Modes

| Mode | Trigger | Output |
|------|---------|--------|
| 1 — Panel Design | "Design our panel" / "How many firms do we need" / "Panel structure" | Panel Design Document + GC Briefing Note |
| 2 — Selection Criteria Framework | "Firm selection criteria" / "How do we choose firms" / "Weight the criteria" | Selection Criteria Matrix + GC Briefing Note |
| 3 — Right-Sourcing Analysis | "Right-sourcing" / "Are we sending work to the right firms" / "Do we need BigLaw for this" | Right-Sourcing Analysis + GC Briefing Note |
| 4 — Coverage Gap Analysis | "Panel gaps" / "We need a firm for [area]" / "Too many firms" / "Consolidate" | Coverage Assessment + GC Briefing Note |

---

## Key design decisions

**Dual-use criteria framework.** The selection criteria matrix (Mode 2) is designed for both RFP evaluation (rfp-pitch-management) and ongoing performance measurement (performance-scorecard). The criteria you select firms on should be the criteria you evaluate them against. If the framework is used once for selection and then filed, it has failed.

**ABC tiering for right-sourcing.** Mode 3 classifies work into three tiers — Complex/Strategic (A), Specialist/Substantial (B), Routine/Volume (C) — and maps current provider allocation against them. The most common mismatch is Tier C work at Tier A providers. That's where the financial impact sits.

**Relationship dimension flagged.** Right-sourcing recommendations that affect a firm the GC has a strong relationship with are explicitly flagged. The analysis is about the work, not the firm. The GC decides how to act on it.

**Pilot-first reallocation.** Right-sourcing recommendations include a recommended pilot scope rather than wholesale reallocation. A pilot produces evidence that makes the case for broader change.

**Benchmarks by spend.** Panel size recommendations are anchored to annual spend benchmarks rather than abstract best practice. Under £2m: 3–5 firms. £2m–£10m: 5–10. Over £10m: 8–15+.

---

## Placement in the OCM lifecycle

| Stage | Skill |
|-------|-------|
| Billing rules | engagement-terms-billing-guidelines (Skill 1) |
| **Panel design** | **panel-design-selection (Skill 2) ← this skill** |
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
| rfp-pitch-management (Skill 3) | Panel structure and selection criteria feed directly into RFP design and evaluation. |
| engagement-terms-billing-guidelines (Skill 1) | Panel tier determines OCG intensity. Strategic partners may have negotiated terms. |
| performance-scorecard (Skill 7) | Selection criteria framework is the baseline for ongoing performance measurement. |
| panel-review-rationalisation (Skill 8) | This skill builds the framework; Skill 8 assesses the panel against it. |
| matter-allocation-instruction (Skill 5) | Panel structure determines which firm gets which type of matter. |

---

## Testing

Phase 1 and Phase 2 test prompts and assertion sets are in the build log.

---

## Files

- `panel-design-selection/SKILL.md` — skill instructions
- `panel-design-selection-README.md` — this document

---

## Licence

Apache 2.0 — LegalOps Consulting Limited
