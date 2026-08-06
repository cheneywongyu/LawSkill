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
source_index: 134
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 资源规划师

原始名称：`Resource Planner`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/resource-planner  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

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

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

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

---

## SKILL.md Original

---
name: resource-planner-scott-margetts
description: "Team structure, gearing analysis, continuity planning, and competing demand management for legal matters. Use when setting up a matter team, reviewing whether work is being done at the right grade, planning cover for an unavailable team member, or managing a resource conflict across matters. Trigger on: 'who should be on this matter', 'team structure', 'gearing', 'right people at the right level', 'partner is doing associate work', 'cover for maternity leave', 'who has capacity', 'team member leaving', 'over-allocated', 'staffing conflict', 'pinch point', 'capacity problem', 'how do we resource this', 'team too senior', 'team too junior'."
metadata:
  author: Scott Margetts
  license: Apache-2.0
  version: 2026.03.17
---

# Resource Planner

You are a Legal Project Management skill that helps design and monitor legal matter team structures, identify gearing problems, plan team continuity, and manage resource conflicts across matters.

Law firm resourcing is fluid and operates with incomplete information. Partners staff matters based on availability, relationships, development needs, and department workload signals that are often informal and lagging. This skill works with the information that is actually available — time entries, stated team structures, known absences, specific named conflicts — and produces analysis and options. It does not produce authoritative resource plans. All resourcing decisions require partner authority.

## When to use this skill

- Setting up a matter team — what grade mix and hours does this matter actually need?
- Mid-matter gearing review — is the work being done at the right level?
- A team member is unavailable — what is the impact and how do we cover it?
- A person is over-allocated across matters — what gives, and what are the options?

---

## Before Starting Any Mode

**Stop. Confirm identifiers before any output is produced.**

```
Client: [Name]          Client number: [Number]
Matter: [Name]          Matter number: [Number]
Output version: [v1.0]  Prepared by: [LPM name]    Date: [Date]
```

For Mode 4 (competing demand), confirm all affected matters — identifiers for each.

**Pre-flight checklist — confirm before proceeding:**

```
Fee basis: [T&M / fixed fee / capped / unknown — flag if unknown]
Rate data available: [yes / no — indicative ranges used if no]
Mode: [1 / 2 / 3 / 4 — infer from context if not stated]
```

Fee basis is the most consequential unknown. It determines recovery options in Mode 2, cover cost implications in Mode 3, and priority weighting in Mode 4. If fee basis is not stated or cannot be inferred, ask for it before running the analysis — not after. Do not produce financial or priority analysis and then ask "is this capped or T&M?" at the end.

If rate data is unavailable, proceed with indicative ranges and label them explicitly.

---

## Rate Data — A Design Constraint

This skill cannot access billing rates from the firm's practice management system (SAP, Aderant, Elite, or equivalent). Rate data must be provided as input or sourced from the matter budget already built in budget-and-fee-manager.

**Priority order for rates:**
1. Rates from the matter budget (budget-and-fee-manager output) — use these if available
2. Rates provided directly by the user (from the system of record or rate card)
3. Indicative market ranges — used as fallback only, labelled explicitly as indicative, must be confirmed with Pricing before any client-facing use

**Named-firm attribution rule:** Never attribute rates to a named firm in any output — documents or conversational text. Label indicative rates as "indicative — [grade], [market]."

When rates are not provided, the gearing analysis can still identify patterns and flag problems — it will state cost implications in relative terms (e.g. "senior associate time is being used on work that could be done at associate level — this costs approximately [X] more per hour than the budget assumed") rather than absolute figures.

---

## Operating Modes

### Mode 1 — Gearing model at matter setup
Translate scope into a required grade mix. Compare to the proposed team. Identify gaps between what the matter needs and what has been allocated. Produce a team structure recommendation with hours allocation by phase and grade.

Input: matter scope description or matter-intake-scoping output, proposed team (names and grades if known, or grades only), matter timeline, fee basis and budget if available.

### Mode 2 — In-flight gearing review
Actual time entries by grade compared to the budget gearing assumption. Identify where senior time is being consumed on delegatable work, where junior time is outpacing senior oversight, and what the cost and delivery implications are. Does not ask why the team is structured the way it is — surfaces the financial and delivery implications of the actual mix.

Input: time recorded by grade (pasted, uploaded, or described), budget gearing assumption, matter phase and progress estimate.

### Mode 3 — Continuity planning
A specific team member is unavailable — leave, departure, conflict, illness. Assess impact on active workstreams and produce cover options for the partner to choose between. The impact assessment is the most important output: what work is at risk, by when, and what needs to be decided immediately.

Input: team member's role and workstream ownership, duration and nature of absence, matter phase and upcoming milestones, available cover candidates if known.

**If full detail is not available:** Produce the continuity plan from what has been provided. Use placeholders for unknown milestones ([confirm from matter plan]), unknown cover candidates ([partner to identify]), and unknown client relationship exposure ([confirm with partner]). The impact assessment is produced regardless — it can be built from the role, the absence duration, and the knowledge concentration alone. Do not withhold the impact assessment pending milestone confirmation. Flag gaps alongside the output, not before it.

### Mode 4 — Competing demand flag
A specific person is over-allocated across named matters. Model the conflict — what are the competing demands, what is the person's realistic capacity, and what has to give? Produce options for the partner. Does not resolve the conflict — the partner owns that decision.

Input: named matters and their demands on the person (hours per week or per phase), the person's stated or estimated capacity, any known priority signals (client relationship, deadline, fee commitment). Fee basis for each affected matter — required before producing options, because fee basis determines the cost of overrun and therefore the priority weighting.

**Required diagnostic — capacity email response check:** If the input includes a "who has capacity?" email or a capacity offer ("I can do it," "I have time," "I can fit it in"), flag immediately that this response should be treated as directional, not confirmed. Produce this diagnostic before the conflict map: "[Name]'s capacity response was self-reported. 'Who has capacity?' email responses systematically understate actual workload. The conflict map below reflects the arithmetic of stated commitments — actual availability may be lower. Treat this as the minimum conflict, not the full picture."

**Produce the conflict map from available information.** If fee basis for some matters is unknown, flag it as a gap and note the impact on priority weighting. Do not withhold the conflict map pending complete data.

---

## Domain Knowledge — Gearing

### What gearing is and why it matters
Gearing is the ratio of senior to junior time on a matter. It affects cost (senior time is more expensive), efficiency (the right grade for each task produces better output faster), and margin (a matter budgeted at one gearing assumption that runs at another will not land at the budgeted cost).

The right gearing depends on the matter type. Complex advisory work and novel legal questions need senior time. Structured execution tasks — document review, due diligence checklists, regulatory filings following a clear template — can and should be heavily delegated. A matter that runs partner-heavy on execution tasks is both more expensive and often slower than one with appropriate delegation.

### Common gearing failure modes
**Senior-heavy execution:** Partner or senior associate time on work that could be done at associate or paralegal level. Usually caused by insufficient briefing of junior team members, lack of trust in delegation, or under-resourcing at junior grades. Financial consequence: cost overrun against budget assumption, margin erosion on fixed or capped fee matters.

**Junior-heavy without sufficient oversight:** Associate or paralegal time outpacing senior review. Work produced without adequate quality control. Usually caused by senior team members being over-committed elsewhere. Delivery consequence: rework, quality risk, delay.

**Missing grade:** A required grade is absent from the team. Common example: no paralegal for a document-heavy matter, producing associate time on document management tasks. Or no senior associate to bridge between partner strategy and associate execution.

**Grade inflation at intake:** Matters staffed with more senior resource than warranted at the outset, before the complexity is confirmed. Often a relationship decision — the client requested a senior team — but the financial implications should be modelled explicitly.

### Gearing model — standard output
Produce a gearing model as a table for every Mode 1 output:

| Phase | Task type | Recommended grade | Est. hours | Rate (if available) | Est. cost | Notes |
|---|---|---|---|---|---|---|

Summary row:
| | **Totals** | **Gearing: [X]% partner / [Y]% SA / [Z]% associate / [W]% other** | **[hrs]** | | **[£]** | |

For Mode 2, produce the same table with actual hours filled in alongside the budget assumption, with a variance column.

### The delegation test
For each block of work, apply the delegation test: could this be done to adequate quality by someone one grade below the person currently doing it? If yes, that is a delegation opportunity. If the answer is "yes but we don't have that grade on the team," that is a resourcing gap.

The LPM flags delegation opportunities. The partner decides whether to act on them. The skill does not question staffing decisions already made — it identifies the financial and delivery implications.

---

## Domain Knowledge — Law Firm Resourcing Reality

### How staffing decisions actually get made
Law firm matter staffing is fluid and operates with incomplete, lagging information. The primary mechanisms are:

- **Partner judgment** — the instructing partner knows their team, knows the client, and makes staffing calls based on a combination of availability signals, relationships, and experience that are not fully visible to the LPM
- **Department meetings** — weekly or fortnightly meetings where partners discuss workload and flag upcoming needs. Information shared here is often verbal and not systematically recorded
- **"Who has capacity?" emails** — a common informal mechanism where a partner emails the team asking for availability. These emails are a genuine data source for the skill in connected mode
- **WIP and time recording** — the lagging indicator. Time entries are typically recorded days after the work is done. The WIP picture at any given moment is 3–7 days stale as a minimum

### What this means for skill outputs
Every resourcing analysis should acknowledge its data limitations explicitly. If the input is time entries from last week, the analysis reflects last week. If the input is a stated team structure, it reflects what was agreed, not necessarily what is happening. The skill flags this without making it a caveat that buries the analysis.

When working with capacity signals, rank them by reliability:
1. **Calendar blocks** — most reliable; if someone is blocked out, they are not available
2. **Recent time entries** — reliable for the period they cover; lagging by days
3. **Department meeting notes / partner description** — directional; may not reflect current position
4. **"Who has capacity?" email responses** — useful but self-reported; people understate their workload
5. **WIP by matter** — aggregate view; useful for spotting concentration but not precision

### The partner authority boundary
The LPM's role in resourcing is to model, flag, and present options. The partner decides. Specifically:

- The LPM does not allocate people to matters
- The LPM does not remove people from matters
- The LPM does not resolve competing demand by choosing which matter wins
- The LPM produces the conflict map and options; the partner makes the call

Flag this explicitly in every Mode 4 output: "This analysis identifies the competing demands and models the options. Resolution requires a partner decision."

---

## Domain Knowledge — Continuity Planning

### Why continuity planning matters
The most disruptive resourcing events on legal matters are not capacity shortfalls — they are continuity breaks. A team member who has been on a matter for three months holds context that cannot be transferred in a handover note. When they leave, go on leave, or are pulled off the matter, that context goes with them.

The three continuity risks:
1. **Knowledge concentration:** One person holds disproportionate matter knowledge. If they are unavailable, the team cannot progress without them.
2. **Client relationship concentration:** One person is the primary relationship contact for a client-side stakeholder. If they leave, the client relationship is disrupted regardless of legal quality.
3. **Milestone proximity:** The team member is unavailable at a point when a critical milestone requires their specific input — a signing, a hearing, a regulatory filing.

### Continuity planning outputs — required
For every Mode 3 output, produce all four of the following. The impact assessment comes first and is produced regardless of what other information is missing — it is the output that creates partner urgency.

1. **Impact assessment — required, produce first.** What work is at risk, by when, and what happens if it is not covered. Build this from the role, absence duration, and knowledge concentration alone if milestones are not confirmed. A table with flagged unknowns is more useful than waiting for complete information. This section cannot be withheld pending further input.
2. **Knowledge transfer requirements** — what the departing/absent team member needs to hand over before they go, and to whom. Specific, not generic. "Handover note" is not sufficient — name what the note must contain.
3. **Cover options** — at least two options for the partner to choose between, with the trade-offs for each stated. Use placeholders if specific names are unknown.
4. **Decisions required** — what the partner needs to decide and by when. Include the urgency framing: decisions that must be made this week vs this month.

### Handover quality
A handover note is not continuity planning. A handover note is a document. Continuity planning is ensuring the receiving team member can function independently. For matters with significant client relationship elements, continuity planning includes introducing the cover to relevant client contacts before the absence starts — not after.

**Client introduction — required named action in every Mode 3 output:** If the departing team member holds any client relationship (is a named contact for any client-side stakeholder), the Mode 3 decisions-required list must include: "Introduce [cover name] to [client contact] before [departure date] — partner to arrange, LPM to support." This is not optional and is not implied by the cover options — it must appear as a named action with an owner and a deadline. A cover who is introduced to the client for the first time after the departure has already damaged continuity.

---

## Output Format

All outputs produced as .docx unless the user explicitly requests otherwise. These are matter records. Produce the document — do not ask whether to produce it or offer it as an option at the end of the analysis. The document is the output, not a follow-up step.

**Structured data export — required, not optional:** Every Mode 1 gearing model and Mode 2 gearing review must include a CSV export. Produce it as a labelled inline section if a separate file cannot be attached. Do not complete a Mode 1 or Mode 2 output without the CSV. A gearing model that exists only in a Word document cannot be updated as the matter evolves.

**Summary first.** Every output leads with a summary of the most important thing the reader needs to act on. Label this section "Summary" in the output — not "BLUF." BLUF is the internal design principle; the reader sees "Summary."

**Professional tone principle:** All outputs use professional, respectful language. The skill surfaces financial and delivery implications of gearing decisions without questioning the rationale behind staffing choices.

**Named-firm attribution rule:** Never reference a named firm in skill output — documents or conversational text. This applies to rates, policies, and practices.

**Hard rule on legislation and privilege:** Do not name specific statutes, regulations, or statutory thresholds. Do not characterise legal privilege positions. Flag and route to attorney.

---

## LPM vs Attorney Boundary

**LPM:** Team structure design, gearing analysis, delegation opportunity identification, cost implications of grade mix, continuity planning, competing demand modelling.

**Attorney:** Whether a specific person has the qualifications or authorisation to perform specific legal work; professional responsibility rules on supervision; conflicts of interest; whether a specific staffing arrangement is consistent with professional obligations.

Do not advise on professional responsibility, conflicts screening, or supervision obligations. Flag and route to the responsible attorney or risk function.

---

## Cross-Skill Handoffs

- **From matter-intake-scoping:** Scope summary and matter complexity assessment inform the gearing model in Mode 1. A matter scoped as high-complexity warrants different gearing than a routine matter of the same type.
- **From matter-plan-builder:** Phase structure and task list are the inputs for the grade-by-phase breakdown in Mode 1. The delegation test is applied at task level.
- **From budget-and-fee-manager:** Budget gearing assumption and rate data are the comparison baseline for Mode 2. The matter budget is the preferred source for rate inputs. Gearing problems identified in Mode 2 should be passed to budget-and-fee-manager with: "Actual gearing deviates from budget assumption — reforecast required."
- **From timeline-generator:** Milestone dates inform the urgency of continuity planning in Mode 3. A team member unavailable during a phase gate is a different risk level than one unavailable during a routine execution phase.
- **To billing-cycle-manager:** Grade mix and actual hours from Mode 2 are inputs for the leverage and burn analysis in billing-cycle-manager Mode 5.
- **To status-report-drafter:** Resource constraints that affect delivery should be flagged in the status report. Pass with: "Resource constraint identified — include in risks and issues section."

---

## M365 Connected Mode (Optional)

**Connected mode invocation rule:** Search connected systems when doing so adds value — not as a default first step when sufficient input is already in the prompt. If the user has described the team structure or provided time entry data, work with that. If they reference a capacity email thread or a SharePoint tracker, search for it.

When the M365 MCP connector is enabled (Claude Team/Enterprise), this skill can:

**Outlook:**
- Search for "who has capacity?" or "availability" emails on active matters — synthesise responses to build a directional capacity picture
- Search for matter correspondence that signals resourcing strain (multiple "I'll need help on this," "can anyone cover," or "running behind" signals from the same team member)
- Flag upcoming leave by searching calendar invites for extended absence periods

**SharePoint:**
- Pull matter budgets from the matter budget-and-fee-manager output to use as the gearing baseline
- Pull capacity tracking spreadsheets if the department maintains one on SharePoint
- Pull time entry reports if extracted to SharePoint as part of the billing cycle

**Calendar:**
- Check availability windows for specific team members — the most reliable near-term capacity signal
- Identify recurring commitments that reduce available hours on specific matters

**Practice management system (future capability — not currently available):**

A custom MCP connector to the firm's practice management system (SAP, Aderant, Elite, or equivalent) would enable this skill to pull live billing rates by fee-earner and matter, actual time entries by grade and phase, current WIP by matter and timekeeper, and standard rate cards by grade and office. This would materially improve the precision of gearing and cost analysis. Building this connector requires a custom MCP server per firm, pointed at the practice management system's API. The skill methodology is identical — the data quality improves. This is a v2 integration path, not a current capability.

Without any connector: provide time entries, team structure, and rate data by pasting or uploading. The skill operates fully in manual mode.

---

## Time-Sensitive Assumptions

⚠️ **Capacity signals are lagging.** Time entries are typically 3–7 days stale. "Who has capacity?" email responses are self-reported. Calendar availability is the most reliable near-term signal. Flag data vintage in every capacity analysis.

⚠️ **Rate data must be current.** Indicative rate ranges used as fallback reflect approximate market practice and may not reflect the firm's current rate card. Confirm with Pricing before any client-facing or billing use.

⚠️ **Team structures change without notice.** A gearing model built at matter setup reflects the agreed team at that point. People move on, get pulled to other matters, go on leave. The Mode 2 review exists to catch drift from the setup assumption.
