---
id: "7607b769-c769-5495-a2df-9954b76868e1"
title: "Local Counsel Manager"
title_cn: "当地法律顾问经理"
slug: "local-counsel-manager"
url: "https://lawve.ai/@scott-margetts/skill/local-counsel-manager"
author: "Scott Margetts"
author_slug: "scott-margetts"
category: "legal-operations"
language: "en"
license: "Apache 2.0"
jurisdictions: "INT"
status: "active"
views: 215
downloads: 519
created_at: "2026-03-17T13:51:43+01:00"
updated_at: "2026-04-30T12:40:04.300745+02:00"
source_index: 136
---

# 当地法律顾问经理

原始名称：`Local Counsel Manager`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/local-counsel-manager

## 中文 README

# 本地顾问经理

**插件：** LPM 核心插件（技能 11 / 14）
**部分：** [Claude 的 LPM 技能](https://github.com/legalopsconsulting/lpm-skills)
**状态：** 第二阶段完成

---

## 这个技能有什么作用

管理跨司法管辖区法律事务的外部本地法律顾问生命周期——从公司选择和参与设置到指令管理、绩效监控、范围执行和关系升级。

该技能建立在一个简单的洞察之上：大多数 LC 问题是指令失败，而不是能力失败。信用证公司将模糊性解释为授权。范围字母中的间隙会导致范围蔓延。电子邮件中嵌入的时间表假设成为无证承诺。这项技能旨在防止这些故障，并在故障发生时对其进行有效管理。

---

## 模式
| Mode | When to use |
|---|---|
| **Mode 1 — Selection and setup** | Selecting LC for a jurisdiction, setting up a new engagement |
| **Mode 2 — Instruction design** | Drafting or amending LC instructions |
| **Mode 3 — Performance monitoring** | Managing the check-in cadence, tracking response health, escalating underperformance |
| **Mode 4 — Scope enforcement and escalation** | LC signals overreach; billing anomalies referred from invoice review; relationship-level issues |
| Mode | Primary output |
|---|---|
| Mode 1 | Selection recommendation memo |
| Mode 2 | Instruction letter (formal, ready to issue); instruction amendments |
| Mode 3 | Email draft for current escalation stage; escalation path action table; check-in cadence recommendation |
| Mode 4 | Scope response letter; attorney action table; relationship escalation briefing note |
| Skill | Relationship |
|---|---|
| matter-intake-scoping | Jurisdiction list and scope baseline → LC selection and instruction design |
| scope-change-controller | OOS change records → instruction amendments |
| billing-cycle-manager | LC invoice anomalies → scope enforcement and relationship escalation |
| matter-plan-builder | LC milestones and dependencies → check-in cadence |
| timeline-generator | Cascaded deadline changes → instruction amendments |
| stakeholder-comms-planner | LC firm registration as external stakeholders |
| status-report-drafter | LC performance issues → risks and issues section |
| Mode | When to use |
|---|---|
| **Mode 1 — Selection and setup** | Selecting LC for a jurisdiction, setting up a new engagement |
| **Mode 2 — Instruction design** | Drafting or amending LC instructions |
| **Mode 3 — Performance monitoring** | Managing the check-in cadence, tracking response health, escalating underperformance |
| **Mode 4 — Scope enforcement and escalation** | LC signals overreach; billing anomalies referred from invoice review; relationship-level issues |
| Mode | Primary output |
|---|---|
| Mode 1 | Selection recommendation memo |
| Mode 2 | Instruction letter (formal, ready to issue); instruction amendments |
| Mode 3 | Check-in cadence schedule; LC network tracker (`.docx` + CSV export) |
| Mode 4 | Scope response letter; relationship escalation briefing note |
| Skill | Relationship |
|---|---|
| matter-intake-scoping | Jurisdiction list and scope baseline → LC selection and instruction design |
| scope-change-controller | OOS change records → instruction amendments |
| billing-cycle-manager | LC invoice anomalies → scope enforcement and relationship escalation |
| matter-plan-builder | LC milestones and dependencies → check-in cadence |
| timeline-generator | Cascaded deadline changes → instruction amendments |
| stakeholder-comms-planner | LC firm registration as external stakeholders |
| status-report-drafter | LC performance issues → risks and issues section |
---

## 使用说明 (v1)

**模式 4 — 粘贴电子邮件：** 直接粘贴来自 LC 联系人的电子邮件时，请在粘贴前添加前缀“[FROM LC]”。这告诉技能电子邮件是传入的 LC 信函，而不是用于审核的出站草稿。如果没有标签，请用自己的话描述情况：*“我们的德国信用证已通过电子邮件发送，表示他们需要修改费用估算 - 这是他们的电子邮件。”*

**模式 3 - 升级草稿：** 该技能生成当前升级阶段（第 3 天、第 5 天或第 7 天 - 以适用者为准）的电子邮件草稿以及作为命名操作表的完整升级路径。在每个后续阶段再次调用该技能。

---

## 它不做什么

- **信用证发票审核和支付处理** — 由 [billing-cycle-manager](../billing-cycle-manager/) 处理。此技能设计发票审核所依赖的参与架构。这两种技能是相互依赖的。
- **信用证建议的法律质量评估** — 律师职能。该技能管理的是操作关系，而不是法律内容。
- **冲突筛选** — 律师和风险职能。这项技能可确保流程得到遵循；它不运行间隙。

---

## 输入

- 事项范围描述或事项范围界定输出
- LC 说明信（适用于模式 2–4）
- LC 通信 — 在粘贴的电子邮件中添加“[FROM LC]”前缀，以实现可靠的模式 4 路由
- 事项时间表和里程碑列表
- 信用证业务的收费基础和预算分配

---

## 输出

所有输出均以“.docx”文件形式生成。案件记录属于案件文件夹。


---

## 应用的设计原则

该技能应用了【LPM核心插件设计原则】(../README.md)，包括：

- **电子邮件优先输入** — LC 通信是所有模式的主要输入
- **默认情况下的文档输出** — 指示函和范围响应函是合同文档，而不是聊天输出
- **自动捕获，表面确认** - 技能草拟输出； LPM 在发送前确认
- **嵌入现有工作流程** — 指令修订、升级电子邮件和范围响应与 Outlook 和事项文件夹结构集成
- **LPM 与律师边界** — 技能设计和执行参与架构；律师拥有合伙人级别的法律质量和关系对话
- **文档输出的模板框架** — 说明信、范围响应信和升级电子邮件是技能填充的结构化模板，而不是技能决定是否生成的输出

---

## 此人所使用的技能


---
## 许可证

阿帕奇2.0。请参阅[许可证](../../许可证)。

---

## 这个技能有什么作用

管理跨司法管辖区法律事务的外部本地法律顾问生命周期——从公司选择和参与设置到指令管理、绩效监控、范围执行和关系升级。

该技能建立在一个简单的洞察之上：大多数 LC 问题是指令失败，而不是能力失败。信用证公司将模糊性解释为授权。范围字母中的间隙会导致范围蔓延。电子邮件中嵌入的时间表假设成为无证承诺。这项技能旨在防止这些故障，并在故障发生时对其进行有效管理。

---

## 模式


---

## 它不做什么

- **信用证发票审核和支付处理** — 由 [billing-cycle-manager](../billing-cycle-manager/) 处理。此技能设计发票审核所依赖的参与架构。这两种技能是相互依赖的。
- **信用证建议的法律质量评估** — 律师职能。该技能管理的是操作关系，而不是法律内容。
- **冲突筛选** — 律师和风险职能。这项技能可确保流程得到遵循；它不运行间隙。

---

## 输入

- 事项范围描述或事项范围界定输出
- LC 说明信（适用于模式 2–4）
- 信用证信函（电子邮件、发票摘录、范围查询）
- 事项时间表和里程碑列表
- 信用证业务的收费基础和预算分配

---

## 输出

所有输出均以“.docx”文件形式生成。案件记录属于案件文件夹。


---

## 应用的设计原则

该技能应用了【LPM核心插件设计原则】(../README.md)，包括：

- **电子邮件优先输入** — LC 通信是所有模式的主要输入
- **默认情况下的文档输出** — 指示函和范围响应函是合同文档，而不是聊天输出
- **自动捕获，表面确认** - 技能草拟输出； LPM 在发送前确认
- **嵌入现有工作流程** — 指令修订、升级电子邮件和范围响应与 Outlook 和事项文件夹结构集成
- **LPM 与律师边界** — 技能设计和执行参与架构；律师拥有合伙人级别的法律质量和关系对话

---

## 此人所使用的技能


---

## 许可证

阿帕奇2.0。请参阅[许可证](../../许可证)。

---

## Original README

# local-counsel-manager

**Plugin:** LPM Core Plugin (Skill 11 of 14)
**Part of:** [LPM Skills for Claude](https://github.com/legalopsconsulting/lpm-skills)
**Status:** Phase 2 complete

---

## What this skill does

Manages the external local counsel lifecycle on multi-jurisdiction legal matters — from firm selection and engagement setup through instruction management, performance monitoring, scope enforcement, and relationship escalation.

The skill is built around a simple insight: most LC problems are instruction failures, not capability failures. LC firms interpret ambiguity as authorisation. Gaps in scope letters become scope creep. Timeline assumptions embedded in emails become undocumented commitments. This skill is designed to prevent those failures — and to manage them efficiently when they occur.

---

## Modes

| Mode | When to use |
|---|---|
| **Mode 1 — Selection and setup** | Selecting LC for a jurisdiction, setting up a new engagement |
| **Mode 2 — Instruction design** | Drafting or amending LC instructions |
| **Mode 3 — Performance monitoring** | Managing the check-in cadence, tracking response health, escalating underperformance |
| **Mode 4 — Scope enforcement and escalation** | LC signals overreach; billing anomalies referred from invoice review; relationship-level issues |

---

## Usage notes (v1)

**Mode 4 — pasted emails:** When pasting an email directly from an LC contact, prefix it with `[FROM LC]` before pasting. This tells the skill the email is incoming LC correspondence, not an outbound draft for review. Without the tag, describe the situation in your own words: *"Our German LC has emailed saying they need to revise their fee estimate — here is their email."*

**Mode 3 — escalation drafts:** The skill produces the email draft for the current escalation stage (Day 3, Day 5, or Day 7 — whichever applies) plus the full escalation path as a named action table. Invoke the skill again for each subsequent stage.

---

## What it doesn't do

- **LC invoice review and disbursement treatment** — handled by [billing-cycle-manager](../billing-cycle-manager/). This skill designs the engagement architecture that invoice review depends on. The two skills are interdependent.
- **Legal quality assessment of LC advice** — attorney function. This skill manages the operational relationship, not the legal content.
- **Conflict screening** — attorney and risk function. This skill ensures the process is followed; it does not run the clearance.

---

## Inputs

- Matter scope description or matter-intake-scoping output
- LC instruction letter (for Modes 2–4)
- LC correspondence — prefix pasted emails with `[FROM LC]` for reliable Mode 4 routing
- Matter timeline and milestone list
- Fee basis and budget allocation for the LC engagement

---

## Outputs

All outputs produced as `.docx` files. Matter records belong in the matter folder.

| Mode | Primary output |
|---|---|
| Mode 1 | Selection recommendation memo |
| Mode 2 | Instruction letter (formal, ready to issue); instruction amendments |
| Mode 3 | Email draft for current escalation stage; escalation path action table; check-in cadence recommendation |
| Mode 4 | Scope response letter; attorney action table; relationship escalation briefing note |

---

## Design principles applied

This skill applies the [LPM Core Plugin design principles](../README.md), including:

- **Email-first input** — LC correspondence is the primary input across all modes
- **Document output by default** — instruction letters and scope response letters are contractual documents, not chat output
- **Automate capture, surface for confirmation** — the skill drafts the output; the LPM confirms before sending
- **Embed in existing workflows** — instruction amendments, escalation emails, and scope responses integrate with Outlook and the matter folder structure
- **LPM vs attorney boundary** — the skill designs and enforces the engagement architecture; attorneys own legal quality and relationship conversations at partnership level
- **Template skeleton for document outputs** — instruction letter, scope response letter, and escalation emails are structured templates the skill populates, not outputs the skill decides whether to produce

---

## Skills this one works with

| Skill | Relationship |
|---|---|
| matter-intake-scoping | Jurisdiction list and scope baseline → LC selection and instruction design |
| scope-change-controller | OOS change records → instruction amendments |
| billing-cycle-manager | LC invoice anomalies → scope enforcement and relationship escalation |
| matter-plan-builder | LC milestones and dependencies → check-in cadence |
| timeline-generator | Cascaded deadline changes → instruction amendments |
| stakeholder-comms-planner | LC firm registration as external stakeholders |
| status-report-drafter | LC performance issues → risks and issues section |

---

## License

Apache 2.0. See [LICENSE](../../LICENSE).

---

## What this skill does

Manages the external local counsel lifecycle on multi-jurisdiction legal matters — from firm selection and engagement setup through instruction management, performance monitoring, scope enforcement, and relationship escalation.

The skill is built around a simple insight: most LC problems are instruction failures, not capability failures. LC firms interpret ambiguity as authorisation. Gaps in scope letters become scope creep. Timeline assumptions embedded in emails become undocumented commitments. This skill is designed to prevent those failures — and to manage them efficiently when they occur.

---

## Modes

| Mode | When to use |
|---|---|
| **Mode 1 — Selection and setup** | Selecting LC for a jurisdiction, setting up a new engagement |
| **Mode 2 — Instruction design** | Drafting or amending LC instructions |
| **Mode 3 — Performance monitoring** | Managing the check-in cadence, tracking response health, escalating underperformance |
| **Mode 4 — Scope enforcement and escalation** | LC signals overreach; billing anomalies referred from invoice review; relationship-level issues |

---

## What it doesn't do

- **LC invoice review and disbursement treatment** — handled by [billing-cycle-manager](../billing-cycle-manager/). This skill designs the engagement architecture that invoice review depends on. The two skills are interdependent.
- **Legal quality assessment of LC advice** — attorney function. This skill manages the operational relationship, not the legal content.
- **Conflict screening** — attorney and risk function. This skill ensures the process is followed; it does not run the clearance.

---

## Inputs

- Matter scope description or matter-intake-scoping output
- LC instruction letter (for Modes 2–4)
- LC correspondence (emails, invoice extracts, scope queries)
- Matter timeline and milestone list
- Fee basis and budget allocation for the LC engagement

---

## Outputs

All outputs produced as `.docx` files. Matter records belong in the matter folder.

| Mode | Primary output |
|---|---|
| Mode 1 | Selection recommendation memo |
| Mode 2 | Instruction letter (formal, ready to issue); instruction amendments |
| Mode 3 | Check-in cadence schedule; LC network tracker (`.docx` + CSV export) |
| Mode 4 | Scope response letter; relationship escalation briefing note |

---

## Design principles applied

This skill applies the [LPM Core Plugin design principles](../README.md), including:

- **Email-first input** — LC correspondence is the primary input across all modes
- **Document output by default** — instruction letters and scope response letters are contractual documents, not chat output
- **Automate capture, surface for confirmation** — the skill drafts the output; the LPM confirms before sending
- **Embed in existing workflows** — instruction amendments, escalation emails, and scope responses integrate with Outlook and the matter folder structure
- **LPM vs attorney boundary** — the skill designs and enforces the engagement architecture; attorneys own legal quality and relationship conversations at partnership level

---

## Skills this one works with

| Skill | Relationship |
|---|---|
| matter-intake-scoping | Jurisdiction list and scope baseline → LC selection and instruction design |
| scope-change-controller | OOS change records → instruction amendments |
| billing-cycle-manager | LC invoice anomalies → scope enforcement and relationship escalation |
| matter-plan-builder | LC milestones and dependencies → check-in cadence |
| timeline-generator | Cascaded deadline changes → instruction amendments |
| stakeholder-comms-planner | LC firm registration as external stakeholders |
| status-report-drafter | LC performance issues → risks and issues section |

---

## License

Apache 2.0. See [LICENSE](../../LICENSE).
