---
id: "cc9ce356-43ea-57e2-8fee-88c149046cdc"
title: "Performance Scorecard"
title_cn: "绩效记分卡"
slug: "performance-scorecard"
url: "https://lawve.ai/@scott-margetts/skill/performance-scorecard"
author: "Scott Margetts"
author_slug: "scott-margetts"
category: "legal-operations"
language: "en"
license: "Apache 2.0"
jurisdictions: ""
status: "active"
views: 156
downloads: 150
created_at: "2026-04-05T16:38:11.211116+02:00"
updated_at: "2026-04-30T12:42:07.376956+02:00"
source_index: 129
---

# 绩效记分卡

原始名称：`Performance Scorecard`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/performance-scorecard

## 中文 README

# 绩效记分卡

**OCM 技能插件** — 技能 7（共 8 项）
**状态：** 完成 — 第 1 阶段和第 2 阶段已测试

---

## 这个技能有什么作用

绩效记分卡设计、事后反馈收集、QBR 准备以及评估外部法律顾问的内部法律运营团队的公司比较。

编码在整个关系生命周期中收集、汇总和处理公司绩效数据的方法——从构建初始评估框架到为小组保留和退出决策提供信息的比较分析。

---

## 模式
| Mode | Trigger | Output |
|------|---------|--------|
| 1 — Scorecard Design | "Build us a scorecard" / "How do we evaluate our firms" / "Design a performance scorecard" | Performance Scorecard Framework + GC Implementation Note |
| 2 — Post-Matter Feedback | "Post-matter feedback form" / "Collect feedback on the firm" / "Feedback at matter close" | Matter Feedback Form + Feedback Collection Note |
| 3 — QBR Preparation | "Prep for the firm review" / "QBR with [firm]" / "Quarterly business review" | QBR Pack (agenda + data summary + talking points) + Internal Briefing Note |
| 4 — Firm Comparison | "Compare the firms" / "Which firm is performing better" / "Rank our panel" | Comparative Scorecard Table + Selection Recommendation Note |
| Stage | Skill |
|-------|-------|
| Billing rules | engagement-terms-billing-guidelines (Skill 1) |
| Panel design | panel-design-selection (Skill 2) |
| Firm selection | rfp-pitch-management (Skill 3) |
| Fee arrangements | fee-arrangement-structuring (Skill 4) |
| Matter instruction | matter-allocation-instruction (Skill 5) |
| Invoice review | invoice-review-compliance (Skill 6) |
| **Performance management** | **performance-scorecard (Skill 7) ← this skill** |
| Panel review | panel-review-rationalisation (Skill 8) |
| Skill | Connection |
|-------|-----------|
| invoice-review-compliance (Skill 6) | Billing compliance rate and rejection records feed quantitative scorecard criteria. Direct input to Modes 1, 3, and 4. |
| matter-allocation-instruction (Skill 5) | Matter close triggers Mode 2 post-matter feedback. |
| panel-review-rationalisation (Skill 8) | Accumulated scorecard data feeds the periodic formal panel review. This skill collects; Skill 8 assesses. |
| rfp-pitch-management (Skill 3) | Historical scorecard data informs RFP evaluation criteria and shortlisting. |
| panel-design-selection (Skill 2) | Scorecard output (particularly Mode 4 comparative data) informs panel retention and exit decisions. |
| engagement-terms-billing-guidelines (Skill 1) | OCG compliance rate is a scorecard metric. |
---

## 关键设计决策

**成熟度校准作为主要设计变量。** 所有四种模式都校准到成熟度级别（每个 ACC 框架为早期/中级/高级）。应用于早期团队的模式 1 会生成 5 个标准的 Excel 记分卡；应用于高级团队时，它会生成一个具有竞争基准的仪表板集成框架。

**模式 4 适用于部分数据。** 公司比较输入可靠地稀疏——所有公司的完整记分卡数据很少同时存在。该模式使用[数据间隙]标记而不是拒绝进行比较。

**两层输出。**每种模式都会生成一个操作文档（用户运行流程所使用的工具）和一个决策者文档（驱动行动的 GC/领导摘要）。

**QBR 常设结构。** 模式 3 编码标准 QBR 议程：绩效审查、计费合规性、正在进行的事项、即将到来的管道、关系和团队问题、行动项目。谈话要点经过调整以解决已知问题，而不是一般性的签到。

---

## 在 OCM 生命周期中的放置


---

## 跨技能连接


---

## 测试

第 1 阶段和第 2 阶段的测试提示和断言集位于构建日志中。

---

## 文件

- `performance-scorecard/SKILL.md` — 技能说明
- `performance-scorecard-README.md` — 本文档

---

## 许可证

Apache 2.0 — LegalOps 咨询有限公司

---

## Original README

# performance-scorecard

**OCM Skills Plugin** — Skill 7 of 8
**Status:** Complete — Phase 1 and Phase 2 tested

---

## What this skill does

Performance scorecard design, post-matter feedback collection, QBR preparation, and firm comparison for in-house legal ops teams evaluating outside counsel.

Encodes the methodology for collecting, aggregating, and acting on firm performance data across the relationship lifecycle — from building the initial evaluation framework through to the comparative analysis that informs panel retention and exit decisions.

---

## Modes

| Mode | Trigger | Output |
|------|---------|--------|
| 1 — Scorecard Design | "Build us a scorecard" / "How do we evaluate our firms" / "Design a performance scorecard" | Performance Scorecard Framework + GC Implementation Note |
| 2 — Post-Matter Feedback | "Post-matter feedback form" / "Collect feedback on the firm" / "Feedback at matter close" | Matter Feedback Form + Feedback Collection Note |
| 3 — QBR Preparation | "Prep for the firm review" / "QBR with [firm]" / "Quarterly business review" | QBR Pack (agenda + data summary + talking points) + Internal Briefing Note |
| 4 — Firm Comparison | "Compare the firms" / "Which firm is performing better" / "Rank our panel" | Comparative Scorecard Table + Selection Recommendation Note |

---

## Key design decisions

**Maturity calibration as the primary design variable.** All four modes calibrate to maturity level (Early / Intermediate / Advanced per ACC framework). Mode 1 applied to an Early-stage team produces a 5-criterion Excel-ready scorecard; applied to an Advanced team it produces a dashboard-integrated framework with competitive benchmarking.

**Mode 4 works with partial data.** Firm comparison input is reliably sparse — full scorecard data rarely exists for all firms simultaneously. The mode uses [Data gap] markers rather than declining to produce the comparison.

**Two-layer output.** Every mode produces an operational document (the tool the user runs the process with) and a decision-maker document (the GC/leadership summary that drives action).

**QBR standing structure.** Mode 3 encodes a standard QBR agenda: performance review, billing compliance, matters in progress, upcoming pipeline, relationship and team issues, action items. Talking points are calibrated to address known issues rather than generic check-ins.

---

## Placement in the OCM lifecycle

| Stage | Skill |
|-------|-------|
| Billing rules | engagement-terms-billing-guidelines (Skill 1) |
| Panel design | panel-design-selection (Skill 2) |
| Firm selection | rfp-pitch-management (Skill 3) |
| Fee arrangements | fee-arrangement-structuring (Skill 4) |
| Matter instruction | matter-allocation-instruction (Skill 5) |
| Invoice review | invoice-review-compliance (Skill 6) |
| **Performance management** | **performance-scorecard (Skill 7) ← this skill** |
| Panel review | panel-review-rationalisation (Skill 8) |

---

## Cross-skill connections

| Skill | Connection |
|-------|-----------|
| invoice-review-compliance (Skill 6) | Billing compliance rate and rejection records feed quantitative scorecard criteria. Direct input to Modes 1, 3, and 4. |
| matter-allocation-instruction (Skill 5) | Matter close triggers Mode 2 post-matter feedback. |
| panel-review-rationalisation (Skill 8) | Accumulated scorecard data feeds the periodic formal panel review. This skill collects; Skill 8 assesses. |
| rfp-pitch-management (Skill 3) | Historical scorecard data informs RFP evaluation criteria and shortlisting. |
| panel-design-selection (Skill 2) | Scorecard output (particularly Mode 4 comparative data) informs panel retention and exit decisions. |
| engagement-terms-billing-guidelines (Skill 1) | OCG compliance rate is a scorecard metric. |

---

## Testing

Phase 1 and Phase 2 test prompts and assertion sets are in the build log.

---

## Files

- `performance-scorecard/SKILL.md` — skill instructions
- `performance-scorecard-README.md` — this document

---

## Licence

Apache 2.0 — LegalOps Consulting Limited
