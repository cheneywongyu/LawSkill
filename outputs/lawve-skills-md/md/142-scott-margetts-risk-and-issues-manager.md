---
id: "6e952619-3372-5c2c-a3b8-e54ee33b78a0"
title: "Risk and Issues Manager"
title_cn: "风险和问题经理"
slug: "risk-and-issues-manager"
url: "https://lawve.ai/@scott-margetts/skill/risk-and-issues-manager"
author: "Scott Margetts"
author_slug: "scott-margetts"
category: "legal-operations"
language: "en"
license: "Apache 2.0"
jurisdictions: "INT"
status: "active"
views: 274
downloads: 502
created_at: "2026-03-17T13:51:43+01:00"
updated_at: "2026-04-30T12:37:16.172263+02:00"
source_index: 142
---

# 风险和问题经理

原始名称：`Risk and Issues Manager`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/risk-and-issues-manager

## 中文 README

# 风险和问题经理

法律事务的 RAID 日志方法 — 风险、假设、问题和决策。维护日志，从通信中提取隐藏的决策和假设，并从事项设置中识别操作风险。

## 这个技能有什么作用

法律事务会产生一系列连续的决策、承诺和风险信号——分布在电子邮件链、通话记录和非正式通信中——这些信息很少在任何结构化的地方被捕获。其结果是，假设被依赖但从未被记录，决策在出现争议时无法重建，风险在问题出现前六周就在通信中显现出来。

该技能有两件事：它将 RAID 日志维护为动态文档，并提取应该包含在其中但实际上没有的条目 - 扫描通信以查找已传达但从未记录的决策、假设、风险和范围信号。

## 三种操作模式

**模式 1 — RAID 日志维护：** 创建、更新和管理 RAID 日志的四个组成部分。添加新条目、升级问题风险、关闭已解决的项目并生成当前状态 RAID 报告。

**模式 2 — 从通信中提取决策：** 粘贴电子邮件链、会议记录或通话记录。该技能扫描决策、风险、假设、问题和范围信号（包括隐式信号），并生成准备添加到日志中的结构化条目。这是最常用的模式：查找当时应该记录但没有记录的内容。

**模式 3 — 从上下文中识别风险：** 描述事项设置和技能，根据事项类型、司法管辖区、团队结构、时间表和商业安排识别关键操作风险。在事项设置时主动识别风险，而不是在执行过程中发现风险。

## RAID 中的 A 是假设

假设跟踪是法律事务 RAID 方法中最常未被充分利用的组成部分。假设是所依赖的前提，但可能不成立——对于复杂的跨境事务，一个失败的假设（监管批准时间表、实体结构有效性、交易对手能力）可能会重新规划整个执行计划。

该技能将假设跟踪视为一流的输出，而不是事后的想法。这里捕获的假设提供了物质摄入范围界定的长期假设，建立了校准数据，使未来的范围界定更加准确。

## 输入

- 电子邮件链、通话记录、会议记录（用于决策提取）
- 当前 RAID 日志（用于维护和更新）
- 事项设置描述（用于主动风险识别）
- 问题纳入范围界定的范围摘要（用于假设候选列表）

## 输出

默认情况下，所有输出均生成为 .docx，文档标题中包含客户名称、客户编号、案件名称和案件编号。

- RAID 日志（完整的四组件寄存器）
- RAID 报告（异常管理摘要 — 需要注意的项目、最近升级的项目、最近关闭的项目）
- 来自决策提取的结构化条目（准备添加到日志中）
- 风险识别报告（主动，从事项设置）

## 跨技能交接

- **确定范围信号**→范围变更控制器来评估工作是否超出商定范围
- **确定财务风险** → 预算和费用经理进行财务影响评估
- **时间线影响** → 时间线生成器重新计算关键路径和下游影响
- **RAID 日志已更新** → 状态报告起草者可以参考下一个状态报告中的条目
- **利益相关者升级** → 利益相关者沟通规划者采用适当的沟通方法
- **结束时的假设表现** → 物质吸收范围界定常设假设登记以供未来范围界定校准

---

## Original README

# risk-and-issues-manager

RAID log methodology for legal matters — risks, assumptions, issues, and decisions. Maintains the log, extracts buried decisions and assumptions from correspondence, and identifies operational risks from matter setup.

## What this skill does

Legal matters generate a continuous stream of decisions, commitments, and risk signals — spread across email chains, call notes, and informal communications — that rarely get captured anywhere structured. The result is assumptions that were relied upon but never recorded, decisions that can't be reconstructed when a dispute arises, and risks that were visible in the correspondence six weeks before they became issues.

The skill does two things: it maintains the RAID log as a living document, and it extracts the entries that should be in it but aren't — scanning correspondence for decisions, assumptions, risks, and scope signals that were communicated but never logged.

## Three operating modes

**Mode 1 — RAID log maintenance:** Create, update, and manage the four components of the RAID log. Add new entries, escalate risks to issues, close resolved items, and produce a current-state RAID report.

**Mode 2 — Decision extraction from correspondence:** Paste an email chain, meeting notes, or call notes. The skill scans for decisions, risks, assumptions, issues, and scope signals — including implicit ones — and produces structured entries ready to add to the log. This is the most commonly useful mode: finding the things that should have been logged at the time but weren't.

**Mode 3 — Risk identification from context:** Describe the matter setup and the skill identifies the key operational risks based on matter type, jurisdictions, team structure, timeline, and commercial arrangements. Proactive risk identification at matter setup rather than discovery mid-execution.

## The A in RAID is Assumptions

Assumption tracking is the most consistently underused component of RAID methodology on legal matters. Assumptions are premises being relied upon that may not hold — and on complex cross-border matters, a single failed assumption (regulatory approval timeline, entity structure validity, counterparty capacity) can reprogramme the entire execution plan.

The skill treats assumption tracking as a first-class output, not an afterthought. Assumptions captured here feed matter-intake-scoping's standing-assumptions register at matter close — building the calibration data that makes future scoping more accurate.

## Inputs

- Email chains, call notes, meeting notes (for decision extraction)
- Current RAID log (for maintenance and update)
- Matter setup description (for proactive risk identification)
- Scope summary from matter-intake-scoping (for assumption candidate list)

## Outputs

All outputs produced as .docx by default, with client name, client number, matter name, and matter number in the document header.

- RAID log (full four-component register)
- RAID report (management-by-exception summary — items requiring attention, recently escalated, recently closed)
- Structured entries from decision extraction (ready to add to log)
- Risk identification report (proactive, from matter setup)

## Cross-skill handoffs

- **Scope signal identified** → scope-change-controller to assess whether work is outside agreed scope
- **Financial risk identified** → budget-and-fee-manager for financial impact assessment
- **Timeline impact** → timeline-generator to recalculate critical path and downstream impacts
- **RAID log updated** → status-report-drafter can reference entries in the next status report
- **Stakeholder escalation** → stakeholder-comms-planner for appropriate communication approach
- **Assumption performance at close** → matter-intake-scoping standing-assumptions register for future scoping calibration
