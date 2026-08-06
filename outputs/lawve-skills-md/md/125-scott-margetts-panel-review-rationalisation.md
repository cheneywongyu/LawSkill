---
id: "8a2a1b35-2ca3-5155-8fba-568bcc55475a"
title: "Panel Review Rationalisation"
title_cn: "小组审查合理化"
slug: "panel-review-rationalisation"
url: "https://lawve.ai/@scott-margetts/skill/panel-review-rationalisation"
author: "Scott Margetts"
author_slug: "scott-margetts"
category: "legal-operations"
language: "en"
license: "Apache 2.0"
jurisdictions: ""
status: "active"
views: 142
downloads: 146
created_at: "2026-04-05T16:37:06.193522+02:00"
updated_at: "2026-04-30T12:43:46.289060+02:00"
source_index: 125
---

# 小组审查合理化

原始名称：`Panel Review Rationalisation`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/panel-review-rationalisation

## 中文 README

# 小组审查合理化

**OCM 技能插件** — 技能 8（共 8 项）
**状态：** 完成 — 第 1 阶段和第 2 阶段已测试。已发布的模式 3 和 4 具有已知的故障模式（见下文）。

---

## 这个技能有什么作用

执行年度小组审查周期和持续的小组治理决策。将绩效记分卡数据、计费合规记录和步出模式综合为面板级建议。生成公司退出、覆盖范围差距评估和竞争更新流程的文档。

涵盖完整的小组治理工作流程：年度健康评估到公司退出和槽位刷新。

---

## 模式
| Mode | Trigger | Output |
|------|---------|--------|
| 1 — Panel Health Assessment | "Review our panel" / "Annual panel review" / "Is our panel working" | Panel Health Report + GC Panel Review Note |
| 2 — Firm Exit Management | "Exit [firm] from the panel" / "Write the exit notice" / "Formal panel removal" | Firm Exit Notice and Transition Plan + Internal Exit Record |
| 3 — Coverage Gap Analysis | "We have a gap" / "We don't have anyone for [area]" / "Coverage gap" | Coverage Gap Report + Remediation Options Note |
| 4 — Panel Refresh Brief | "Refresh the panel" / "Fill the gap" / "Competitive process for [area]" | Panel Refresh Brief + RFP Scope Note |
| Stage | Skill |
|-------|-------|
| Billing rules | engagement-terms-billing-guidelines (Skill 1) |
| Panel design | panel-design-selection (Skill 2) |
| Firm selection | rfp-pitch-management (Skill 3) |
| Fee arrangements | fee-arrangement-structuring (Skill 4) |
| Matter instruction | matter-allocation-instruction (Skill 5) |
| Invoice review | invoice-review-compliance (Skill 6) |
| Performance management | performance-scorecard (Skill 7) |
| **Panel review** | **panel-review-rationalisation (Skill 8) ← this skill** |
| Skill | Connection |
|-------|-----------|
| performance-scorecard (Skill 7) | Scorecard tier per firm feeds Mode 1 Panel Health Assessment. Primary data input. |
| invoice-review-compliance (Skill 6) | Billing compliance rate and violation records feed Mode 1. |
| matter-allocation-instruction (Skill 5) | Step-out log and matter allocation records feed Mode 1 and Mode 3 gap identification. |
| panel-design-selection (Skill 2) | Defines original panel structure and selection criteria against which review assesses each firm. |
| rfp-pitch-management (Skill 3) | Receives Mode 4 Panel Refresh Brief as input. Executes the competitive process to fill an identified slot. |
| engagement-terms-billing-guidelines (Skill 1) | OCG adherence is a panel retention criterion in Mode 1. |
---

## 关键设计决策

**退出前的改进计划。** 领域知识编码了改进计划要求：在没有事先改进计划的情况下以性能为由退出是很难辩护的。模式 2 不会使其成为二元门 - 内部退出记录有一个记录历史的“先前改进计划”字段。

**模式 2 类型 2 占位符。** 公司退出通知使用 [公司] 作为有意的审核门 - 即使在会话中提供公司名称，它也会在外部文档中保持为 [公司]。内部退出记录使用公司的实际名称。与发票审核合规（技能 6）中的正式不合规通知相同的模式。

**退出作为领先指标。** 退出频率与三种诊断相关：覆盖范围差距、表现不佳的面板公司或面板纪律失败。这是将模式 3（间隙识别）连接回模式 1（面板运行状况）并转发到模式 4（刷新）的方法。

**模式 4 作为移交文件。** 小组更新简报被视为 rfp-pitch-management（技能 3）的范围输入，而不是独立的决定。模板包括一个交接指令块，将适当的技能 3 模式命名为下一步。

**后果框架。** 模式 1 小组健康报告将每个公司映射到四个建议之一：保留、观察、改进计划或退出审查。每项建议都定义了触发标准和后果。

---

## 已知限制 — 模式 3 和 4

模式 3 和 4 已记录在第 2 阶段测试期间识别的故障模式。在模式 3 上进行了四次基于指令的修复尝试，在模式 4 上进行了三次基于指令的修复尝试，但故障模式没有发生任何变化。

**模式 3 失败模式：** 生成带有编号战略选项的咨询散文，而不是结构化的覆盖差距报告模板。以报价或问题菜单结束。

**模式 4 失败模式：** 生成技能 3 执行文档（RFP、长名单、指定公司的能力调查问卷）而不是面板刷新简报模板。网络搜索在文档前运行。可能会出现帐户级别上下文。

**根本原因：** 当输入是对话式（模式 3）或面向执行（模式 4）时，丰富的领域知识会覆盖模板指令。当模型具有足够的领域知识来生成合理的替代内容时，它会忽略第一个标记锚点和 IS/IS NOT 定义。

**影响：** 模式 3 和 4 将生成有关正确主题的有用内容，但可能不遵循模板结构。模式 1 和 2 是干净的。
**未来的修订路径：** 在文档生成之前进行两步摄入交换，或者从根本上不同的设计接受对话注册并以不同的方式路由到结构化输出。

---

## 在 OCM 生命周期中的放置


---

## 跨技能连接


---

## 测试

第 1 阶段和第 2 阶段的测试提示和断言集位于构建日志中。

---

## 文件

- `panel-review-rationalization/SKILL.md` — 技能说明
- `panel-review-rationalization-README.md` — 本文档

---

## 许可证

Apache 2.0 — LegalOps 咨询有限公司

---

## Original README

# panel-review-rationalisation

**OCM Skills Plugin** — Skill 8 of 8
**Status:** Complete — Phase 1 and Phase 2 tested. Modes 3 and 4 published with known failure modes (see below).

---

## What this skill does

Executes the annual panel review cycle and ongoing panel governance decisions. Synthesises performance scorecard data, billing compliance records, and step-out patterns into panel-level recommendations. Produces the documentation for firm exits, coverage gap assessment, and competitive refresh processes.

Covers the full panel governance workflow: annual health assessment through to firm exit and slot refresh.

---

## Modes

| Mode | Trigger | Output |
|------|---------|--------|
| 1 — Panel Health Assessment | "Review our panel" / "Annual panel review" / "Is our panel working" | Panel Health Report + GC Panel Review Note |
| 2 — Firm Exit Management | "Exit [firm] from the panel" / "Write the exit notice" / "Formal panel removal" | Firm Exit Notice and Transition Plan + Internal Exit Record |
| 3 — Coverage Gap Analysis | "We have a gap" / "We don't have anyone for [area]" / "Coverage gap" | Coverage Gap Report + Remediation Options Note |
| 4 — Panel Refresh Brief | "Refresh the panel" / "Fill the gap" / "Competitive process for [area]" | Panel Refresh Brief + RFP Scope Note |

---

## Key design decisions

**Improvement plan before exit.** The domain knowledge encodes the improvement plan requirement: exit on performance grounds without a prior improvement plan is harder to defend. Mode 2 doesn't make this a binary gate — the Internal Exit Record has a "Prior improvement plan" field that documents the history.

**Mode 2 Type 2 placeholder.** The Firm Exit Notice uses [Firm] as a deliberate review gate — it stays as [Firm] in the external document even when the firm name is provided in session. The internal exit record uses the firm's actual name. Same pattern as the Formal Non-Compliance Notice in invoice-review-compliance (Skill 6).

**Step-out as a leading indicator.** Step-out frequency connects to three diagnoses: coverage gap, underperforming panel firm, or panel discipline failure. This is the methodology connecting Mode 3 (gap identification) back to Mode 1 (panel health) and forward to Mode 4 (refresh).

**Mode 4 as hand-off document.** The Panel Refresh Brief is framed as a scoped input to rfp-pitch-management (Skill 3), not a standalone decision. Template includes a hand-off instruction block naming the appropriate Skill 3 mode as the next step.

**Consequence framework.** Mode 1 Panel Health Report maps each firm to one of four recommendations: Retain, Watch, Improvement Plan, or Exit Review. Each recommendation has defined trigger criteria and consequences.

---

## Known limitations — Modes 3 and 4

Modes 3 and 4 have documented failure modes identified during Phase 2 testing. Four instruction-based fix attempts on Mode 3 and three on Mode 4 produced no change in the failure pattern.

**Mode 3 failure pattern:** Produces consulting prose with numbered strategic options instead of the structured Coverage Gap Report template. Closes with offer or question menu.

**Mode 4 failure pattern:** Produces Skill 3 execution documents (RFP, longlist, capabilities questionnaire with named firms) instead of the Panel Refresh Brief template. Web search runs pre-document. Account-level context may appear.

**Root cause:** Rich domain knowledge overrides template instructions when input is conversational (Mode 3) or execution-oriented (Mode 4). The model ignores first-token anchors and IS/IS NOT definitions when it has sufficient domain knowledge to generate plausible alternative content.

**Impact:** Modes 3 and 4 will produce useful content on the right topic but may not follow the template structure. Modes 1 and 2 are clean.

**Future revision path:** Two-step intake exchange before document production, or fundamentally different design accepting conversational register and routing to structured output differently.

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
| Performance management | performance-scorecard (Skill 7) |
| **Panel review** | **panel-review-rationalisation (Skill 8) ← this skill** |

---

## Cross-skill connections

| Skill | Connection |
|-------|-----------|
| performance-scorecard (Skill 7) | Scorecard tier per firm feeds Mode 1 Panel Health Assessment. Primary data input. |
| invoice-review-compliance (Skill 6) | Billing compliance rate and violation records feed Mode 1. |
| matter-allocation-instruction (Skill 5) | Step-out log and matter allocation records feed Mode 1 and Mode 3 gap identification. |
| panel-design-selection (Skill 2) | Defines original panel structure and selection criteria against which review assesses each firm. |
| rfp-pitch-management (Skill 3) | Receives Mode 4 Panel Refresh Brief as input. Executes the competitive process to fill an identified slot. |
| engagement-terms-billing-guidelines (Skill 1) | OCG adherence is a panel retention criterion in Mode 1. |

---

## Testing

Phase 1 and Phase 2 test prompts and assertion sets are in the build log.

---

## Files

- `panel-review-rationalisation/SKILL.md` — skill instructions
- `panel-review-rationalisation-README.md` — this document

---

## Licence

Apache 2.0 — LegalOps Consulting Limited
