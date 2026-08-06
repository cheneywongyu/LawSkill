---
id: "bad77e42-677c-52db-afde-a317eda0e7d5"
title: "Resource Planner"
title_cn: "资源规划师"
slug: "resource-planner"
url: "https://lawve.ai/@scott-margetts/skill/resource-planner"
author: "Scott Margetts"
author_slug: "scott-margetts"
category: "legal-operations"
language: "en"
license: "Apache 2.0"
jurisdictions: "INT"
status: "active"
views: 199
downloads: 471
created_at: "2026-03-17T13:51:43+01:00"
updated_at: "2026-04-30T12:40:21.532869+02:00"
source_index: 134
---

# 资源规划师

原始名称：`Resource Planner`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/resource-planner

## 中文 README

# 资源规划器

**插件：** LPM 核心  
**技能编号：** 19 中的 10  
**状态：** v1 已构建 - 第 1 阶段测试正在进行中

---

## 它的作用

设计事务团队结构，识别传动问题，规划团队连续性，并对事务之间的资源冲突进行建模。处理实际可用的内容——时间条目、规定的团队结构、已知的缺勤、特定的命名冲突——并为合作伙伴提供分析和选项。

律师事务所的资源是流动的。合作伙伴根据非正式且滞后的可用性、关系和工作量信号来进行人员配置。该技能不会产生权威的资源计划或解决冲突。它对情况进行建模，揭示财务和交付影响，并构建合作伙伴需要做出的决策。

---

## 它不做什么

- **做出人员配置决策** - 合作伙伴根据事务分配人员。该技能模型和旗帜。
- **访问实时费率或 WIP 数据** — 费率必须作为输入提供或源自事项预算。实时系统数据需要实践管理 MCP 连接器（请参阅 SKILL.md 中的 M365 部分 - 未来功能）。
- **询问人员配置的基本原理** - 实际年级组合的技能表面成本和交付影响。它没有询问为什么团队是这样构建的。
- **解决职业责任问题** - 冲突筛选、监督义务和资格要求是律师的职责范围。

---

## 主要输入场景

1. **事项设置** — 将范围转化为所需的成绩组合，与提议的团队进行比较，找出差距。

2. **中期装备审查** - 实际时间条目显示团队正在错误的水平上工作。对成本影响进行建模并标记模式。

3. **团队成员无法工作** — 休假、离职、冲突、生病。评估对活动工作流的影响，制定涵盖选项，确定所需的决策。

4. **跨事项的竞争需求** — 某个特定人员的分配过多。对冲突进行建模，确定可以提供什么，为合作伙伴提供选择。

---

## 输入

- 事项范围描述或事项范围界定输出
- 提议的团队（成绩和姓名，如果知道的话）
- 按年级记录的时间（粘贴、上传的 CSV 或描述）
- 事项预算和杠杆假设（来自预算和费用经理，如果有的话）
- 评级数据——来自事项预算、记录系统或用户陈述（用作后备的指示范围）
- 指定缺勤、出发日期或竞争事项要求
- 能力信号——“谁有能力？”电子邮件主题、日历描述、WIP 描述

---

## 输出

默认情况下，所有输出都会生成为“.docx”文件。
| Mode | Primary output | Secondary output |
|---|---|---|
| Mode 1 — Gearing model | Team structure table with grade/hours/cost by phase | CSV export |
| Mode 2 — Gearing review | Actual vs budget gearing table + variance commentary | CSV export |
| Mode 3 — Continuity planning | Impact assessment + cover options + handover requirements | Decision list for partner |
| Mode 4 — Competing demand | Conflict map + options with trade-offs | Decision list for partner |
| Direction | Partner skill | What passes |
|---|---|---|
| Receives from | matter-intake-scoping | Scope complexity assessment → Mode 1 gearing model |
| Receives from | matter-plan-builder | Phase/task structure → grade-by-phase breakdown |
| Receives from | budget-and-fee-manager | Budget gearing assumption + rates → Mode 2 baseline |
| Receives from | timeline-generator | Milestone dates → continuity planning urgency assessment |
| Sends to | budget-and-fee-manager | Gearing deviation → reforecast trigger |
| Sends to | billing-cycle-manager | Actual grade mix → leverage and burn analysis |
| Sends to | status-report-drafter | Resource constraints affecting delivery → risks section |
---

## 关于费率数据的注释

此技能无法从实践管理系统中提取计费费率。费率应从事项预算（预算和费用经理输出）中提供或直接说明。指示性市场范围仅用作后备，在面向客户使用之前必须与定价部门确认。未来的实践管理 MCP 连接器将支持实时速率和 WIP 数据 - 有关详细信息，请参阅 SKILL.md。

---

## 跨技能交接


---

## 设计笔记

**资源现实被编码在技能中。**该技能明确承认律师事务所能力数据是非正式的、滞后的和自我报告的。它按可靠性对输入信号进行排名（日历 > 时间条目 > 电子邮件回复 > WIP），并在每次容量分析中标记数据年份。这可以防止模型将陈旧的图片呈现为明确的图片。

**实践管理集成是一条指定的未来路径。**指向 SAP、Aderant、Elite 或同等产品的自定义 MCP 服务器将提供实时费率和 WIP 数据。技能方法是相同的——数据质量提高。这在 M365 连接模式部分中记录为 v2 集成路径。

**授权测试是核心分析步骤。** 对于每个工作块：是否可以由比当前人员低一级的人以足够的质量完成这项工作？如果是，那就是一个具有成本影响的授权机会。如果团队中不存在等级，那就是资源缺口。

---

## 来源参考

- Linton，*法律项目管理* (2014) — 第 7 章（人力资源配置和管理）；第 1 章（物质资源和人员管理作为核心 LPM 学科）。
- CLOC，*法律团队的 LPM* (2017) — 第 2 阶段：资源分配和人员配置概况。
- 能力框架草案——案件量管理、优先级、授权、关键点升级。
- 贝尔法斯特 LPM 大型项目（2019 年 10 月）——传动效率、溢出资源规划。
- Lambreth / LawVision (2022) — 资源利用、替代人员配置、优化资源分配。

---

## Original README

# resource-planner

**Plugin:** LPM Core  
**Skill number:** 10 of 19  
**Status:** v1 built — Phase 1 testing in progress

---

## What it does

Designs matter team structures, identifies gearing problems, plans team continuity, and models resource conflicts across matters. Works with what is actually available — time entries, stated team structures, known absences, specific named conflicts — and produces analysis and options for the partner.

Law firm resourcing is fluid. Partners staff based on availability, relationships, and workload signals that are informal and lagging. This skill does not produce authoritative resource plans or resolve conflicts. It models the situation, surfaces the financial and delivery implications, and structures the decisions the partner needs to make.

---

## What it does not do

- **Make staffing decisions** — the partner allocates people to matters. This skill models and flags.
- **Access live rate or WIP data** — rates must be provided as input or sourced from the matter budget. Live system data requires a practice management MCP connector (see M365 section in SKILL.md — future capability).
- **Question staffing rationale** — the skill surfaces cost and delivery implications of the actual grade mix. It does not ask why the team is structured the way it is.
- **Resolve professional responsibility questions** — conflicts screening, supervision obligations, and qualification requirements are attorney territory.

---

## Primary input scenarios

1. **Matter setup** — translate scope into a required grade mix, compare to the proposed team, identify gaps.

2. **Mid-matter gearing review** — actual time entries reveal the team is working at the wrong level. Model the cost implications and flag the pattern.

3. **Team member unavailable** — leave, departure, conflict, illness. Assess impact on active workstreams, produce cover options, identify decisions required.

4. **Competing demand across matters** — a specific person is over-allocated. Model the conflict, identify what gives, produce options for the partner.

---

## Inputs

- Matter scope description or matter-intake-scoping output
- Proposed team (grades and names if known)
- Time recorded by grade (pasted, uploaded CSV, or described)
- Matter budget and gearing assumption (from budget-and-fee-manager if available)
- Rate data — from matter budget, system of record, or stated by user (indicative ranges used as fallback)
- Named absences, departure dates, or competing matter demands
- Capacity signals — "who has capacity?" email threads, calendar description, WIP description

---

## Outputs

All outputs produced as `.docx` files by default.

| Mode | Primary output | Secondary output |
|---|---|---|
| Mode 1 — Gearing model | Team structure table with grade/hours/cost by phase | CSV export |
| Mode 2 — Gearing review | Actual vs budget gearing table + variance commentary | CSV export |
| Mode 3 — Continuity planning | Impact assessment + cover options + handover requirements | Decision list for partner |
| Mode 4 — Competing demand | Conflict map + options with trade-offs | Decision list for partner |

---

## A note on rate data

This skill cannot pull billing rates from the practice management system. Rates should be provided from the matter budget (budget-and-fee-manager output) or stated directly. Indicative market ranges are used as fallback only and must be confirmed with Pricing before any client-facing use. A future practice management MCP connector would enable live rate and WIP data — see SKILL.md for detail.

---

## Cross-skill handoffs

| Direction | Partner skill | What passes |
|---|---|---|
| Receives from | matter-intake-scoping | Scope complexity assessment → Mode 1 gearing model |
| Receives from | matter-plan-builder | Phase/task structure → grade-by-phase breakdown |
| Receives from | budget-and-fee-manager | Budget gearing assumption + rates → Mode 2 baseline |
| Receives from | timeline-generator | Milestone dates → continuity planning urgency assessment |
| Sends to | budget-and-fee-manager | Gearing deviation → reforecast trigger |
| Sends to | billing-cycle-manager | Actual grade mix → leverage and burn analysis |
| Sends to | status-report-drafter | Resource constraints affecting delivery → risks section |

---

## Design notes

**Resourcing reality is encoded in the skill.** The skill explicitly acknowledges that law firm capacity data is informal, lagging, and self-reported. It ranks input signals by reliability (calendar > time entries > email responses > WIP) and flags data vintage in every capacity analysis. This prevents the model from presenting a stale picture as a definitive one.

**Practice management integration is a named future path.** A custom MCP server pointed at SAP, Aderant, Elite, or equivalent would deliver live rate and WIP data. The skill methodology is identical — the data quality improves. This is documented in the M365 Connected Mode section as a v2 integration path.

**The delegation test is the core analytical move.** For each block of work: could this be done to adequate quality by someone one grade below the current person? If yes, that is a delegation opportunity with a cost implication. If the grade doesn't exist on the team, that is a resourcing gap.

---

## Source references

- Linton, *Legal Project Management* (2014) — Chapter 7 (Human Resource Allocation and Management); Chapter 1 (Matter Resourcing and People Management as a core LPM discipline).
- CLOC, *LPM for Legal Teams* (2017) — Stage 2: resource allocation and staffing profile.
- Competency Framework Draft — caseload management, prioritisation, delegation, pinch point escalation.
- Belfast LPM Large Projects (Oct 2019) — gearing efficiency, overflow resource planning.
- Lambreth / LawVision (2022) — resource utilisation, alternative staffing, optimising resource allocation.
