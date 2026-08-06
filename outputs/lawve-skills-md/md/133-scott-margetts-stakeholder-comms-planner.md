---
id: "3cbdc68a-2717-51f0-aca1-8a43e42721ab"
title: "Stakeholder Comms Planner"
title_cn: "利益相关者沟通规划师"
slug: "stakeholder-comms-planner"
url: "https://lawve.ai/@scott-margetts/skill/stakeholder-comms-planner"
author: "Scott Margetts"
author_slug: "scott-margetts"
category: "legal-operations"
language: "en"
license: "Apache 2.0"
jurisdictions: "INT"
status: "active"
views: 185
downloads: 471
created_at: "2026-03-17T13:51:43+01:00"
updated_at: "2026-04-30T12:40:53.081015+02:00"
source_index: 133
---

# 利益相关者沟通规划师

原始名称：`Stakeholder Comms Planner`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/stakeholder-comms-planner

## 中文 README

# 利益相关者沟通规划者

**插件：** LPM 核心  
**技能编号：** 9 项（共 19 项）  
**状态：** v1 已构建 - 第 1 阶段测试正在进行中

---

## 它的作用

跨四种模式设计和维护法律事务的沟通架构：利益相关者映射、沟通计划设计、大型项目的报告层次结构设计以及利益相关者格局变化时的中期事务沟通更新。

核心问题是：在复杂的问题上，沟通结构是不断演变的，而不是被设计出来的。错误的人获得了太多的信息，正确的人却获得了太少的信息，而且没有人有意这样做。这项技能使设计在事项设置时变得明确——利益相关者登记、报告流、节奏、层次结构——并在整个事项生命周期中保持它的维护。

---

## 它不做什么

- **状态报告** — 状态报告起草者（技能 1）生成报告。该技能设计谁接收它们、以什么频率以及以什么格式接收它们。这两种技能旨在一起使用：设置时的利益相关者-沟通-规划者，每个报告周期的状态报告-起草者。
- **资源规划** — 团队结构和人员配置决策由资源规划人员处理（技能 10）。这项技能捕捉了团队成员作为利益相关者的身份以及他们需要接收什么；它本身不设计团队。
- **当地法律顾问管理** — LC 沟通节奏和指令格式由当地法律顾问经理处理（技能 11）。此技能将 LC 领导视为沟通计划中的利益相关者。

---

## 主要输入场景

1. **新事项设置** — 识别所有利益相关者，按影响力和兴趣进行分类，分配沟通角色，设计内部和面向客户的流程的报告节奏。

2. **多管辖区计划** — 建立三层报告层次结构（管辖区 → 区域 → 计划 → 客户），定义升级阈值，并在导致关系损害之前解决总部与地区的联系问题。

3. **利益相关者格局变化** - 关键联系人发生变化，客户进行了重组，或者添加了新的工作流程。更新沟通计划，无需从头开始。

4. **合作伙伴询问如何构建客户沟通** — 设计满足客户信息需求、适合合作伙伴可用性并减少客户临时沟通的报告节奏。

---

## 输入

- 事项描述和已知各方（客户联系人、内部团队、第三方）
- 客户组织结构（客户端谁向谁报告）
- 报告偏好和限制（合作伙伴可用性、客户报告窗口、董事会会议时间表）
- 事项时间表和阶段结构（来自事项计划构建者，如果有）
- 利益相关者格局变化的描述（模式 4）

---

## 输出

默认情况下，所有输出都会生成为“.docx”文件。利益相关者登记册和沟通计划是事项记录 - 它们属于事项文件夹。
| Mode | Primary output | Secondary output |
|---|---|---|
| Mode 1 — Stakeholder mapping | Stakeholder register | CSV export for SharePoint tracking |
| Mode 2 — Communication plan | Communication schedule + stream design | CSV export |
| Mode 3 — Reporting hierarchy | Hierarchy diagram + tier descriptions + escalation thresholds | — |
| Mode 4 — Mid-matter update | Updated stakeholder register + revised communication plan | Change summary |
| Direction | Partner skill | What passes |
|---|---|---|
| Receives from | matter-intake-scoping | Stakeholder list and client org structure → Mode 1 input |
| Receives from | matter-plan-builder | Phase structure and milestone schedule → Mode 2 cadence design |
| Sends to | status-report-drafter | Who receives which report format and at what frequency |
| Sends to | timeline-generator | Communication milestones as fixed-date constraints |
| Sends to | scope-change-controller | Who has authority to approve scope changes |
| Sends to | billing-cycle-manager | Billing contact and financial communication cadence |
**关于敏感性的说明：** 利益相关者登记敏感性和影响/利益分类是内部分析工具。它们绝不能出现在面向客户的文件中。

---

## 跨技能交接


---

## 设计笔记

**权力/利益框架。** 利益相关者按其影响事项结果的权力及其对进展的兴趣进行分类，而不是按其资历进行分类。参与日常运营的初级内部联系人可能需要比完全委托事务的首席高管进行更深入的沟通管理。

**两个流程，单独设计。** 内部报告（例外管理 - 需要合作伙伴关注的内容）和面向客户的报告（管理信心 - 展示有效的进度管理）具有不同的目的和不同的标准。最常见的通信失败是将它们视为同一流。

**总部与地区问题。** 在涉及多个客户端联系人的跨境事务中，冲突的通信层次结构会导致到达客户组织不同部门的信息不一致。该技能在设置时明确指出问题并产生明确的解决方案：每个报告流指定一个主要联系人，在第一次更新发布之前与合作伙伴达成一致。

**节奏是一项设计决策。**正确的报告频率取决于事项阶段、风险级别、客户偏好和决策密度，而不取决于最后一个事项做了什么。该技能会在设置时提示这些问题，而不是默认使用标准模板。

---

## 来源参考

- Linton，*法律项目管理* (2014) — 第 8 章（利益相关者和客户沟通）：权力/利益网格、利益相关者矩阵、沟通计划结构、RASIC 角色。
- CLOC，*法律团队的 LPM* (2017) — 第 2/3 阶段：沟通节奏、报告指标、外部顾问计费指南。
- 贝尔法斯特 LPM 大型项目演示（2019 年 10 月）——项目层次结构、客户报告、内部报告、总部与地区案例研究。

---

## Original README

# stakeholder-comms-planner

**Plugin:** LPM Core  
**Skill number:** 9 of 19  
**Status:** v1 built — Phase 1 testing in progress

---

## What it does

Designs and maintains the communication architecture for legal matters across four modes: stakeholder mapping, communication plan design, reporting hierarchy design for large programmes, and mid-matter comms updates when the stakeholder landscape changes.

The central problem: on complex matters, communication structures evolve rather than being designed. The wrong people get too much information, the right people too little, and nobody intended it that way. This skill makes the design explicit at matter setup — stakeholder register, reporting streams, cadence, hierarchy — and keeps it maintained through the matter lifecycle.

---

## What it does not do

- **Status reporting** — status-report-drafter (Skill 1) produces the reports. This skill designs who receives them, at what frequency, and in what format. The two skills are designed to be used together: stakeholder-comms-planner at setup, status-report-drafter at each reporting cycle.
- **Resource planning** — team structure and staffing decisions are handled by resource-planner (Skill 10). This skill captures who the team members are as stakeholders and what they need to receive; it does not design the team itself.
- **Local counsel management** — LC communication cadence and instruction format are handled by local-counsel-manager (Skill 11). This skill captures LC leads as stakeholders in the communication plan.

---

## Primary input scenarios

1. **New matter setup** — identify all stakeholders, classify by influence and interest, assign communication roles, design the reporting rhythm for both internal and client-facing streams.

2. **Multi-jurisdiction programme** — build a three-tier reporting hierarchy (jurisdiction → regional → programme → client), define escalation thresholds, and resolve the HQ vs regions contact problem before it causes relationship damage.

3. **Stakeholder landscape change** — a key contact has changed, the client has restructured, or a new workstream has been added. Update the communication plan without starting from scratch.

4. **Partner asks how to structure client communication** — design a reporting rhythm that meets the client's information needs, fits the partner's availability, and reduces ad hoc communication from the client.

---

## Inputs

- Matter description and known parties (client contacts, internal team, third parties)
- Client organisational structure (who reports to whom on the client side)
- Reporting preferences and constraints (partner availability, client reporting windows, board meeting schedules)
- Matter timeline and phase structure (from matter-plan-builder if available)
- Description of stakeholder landscape changes (for Mode 4)

---

## Outputs

All outputs produced as `.docx` files by default. Stakeholder registers and communication plans are matter records — they belong in the matter folder.

| Mode | Primary output | Secondary output |
|---|---|---|
| Mode 1 — Stakeholder mapping | Stakeholder register | CSV export for SharePoint tracking |
| Mode 2 — Communication plan | Communication schedule + stream design | CSV export |
| Mode 3 — Reporting hierarchy | Hierarchy diagram + tier descriptions + escalation thresholds | — |
| Mode 4 — Mid-matter update | Updated stakeholder register + revised communication plan | Change summary |

**Note on sensitivity:** Stakeholder register sensitivities and influence/interest classifications are internal analytical tools. They must never appear in client-facing documents.

---

## Cross-skill handoffs

| Direction | Partner skill | What passes |
|---|---|---|
| Receives from | matter-intake-scoping | Stakeholder list and client org structure → Mode 1 input |
| Receives from | matter-plan-builder | Phase structure and milestone schedule → Mode 2 cadence design |
| Sends to | status-report-drafter | Who receives which report format and at what frequency |
| Sends to | timeline-generator | Communication milestones as fixed-date constraints |
| Sends to | scope-change-controller | Who has authority to approve scope changes |
| Sends to | billing-cycle-manager | Billing contact and financial communication cadence |

---

## Design notes

**Power/interest framework.** Stakeholders are classified by their power to influence the matter outcome and their interest in its progress — not by their seniority. A junior in-house contact with daily operational involvement may warrant more intensive communication management than a C-suite executive who has delegated the matter entirely.

**Two streams, designed separately.** Internal reporting (management by exception — what requires partner attention) and client-facing reporting (managed confidence — demonstrating competent progress management) have different purposes and different standards. The most common communication failure is treating them as the same stream.

**The HQ vs regions problem.** On cross-border matters with multiple client-side contacts, conflicting communication hierarchies cause inconsistent information reaching different parts of the client organisation. This skill names the problem explicitly at setup and produces a clear resolution: one named primary contact per reporting stream, agreed with the partner before the first update goes out.

**Cadence is a design decision.** The right reporting frequency depends on matter phase, risk level, client preference, and decision density — not on what the last matter did. This skill prompts those questions at setup rather than defaulting to a standard template.

---

## Source references

- Linton, *Legal Project Management* (2014) — Chapter 8 (Stakeholder and Client Communication): power/interest grid, stakeholder matrix, communication plan structure, RASIC roles.
- CLOC, *LPM for Legal Teams* (2017) — Stage 2/3: communication cadence, reporting metrics, outside counsel billing guidelines.
- Belfast LPM Large Projects presentation (Oct 2019) — project hierarchy, client reporting, internal reporting, HQ vs regions case study.
