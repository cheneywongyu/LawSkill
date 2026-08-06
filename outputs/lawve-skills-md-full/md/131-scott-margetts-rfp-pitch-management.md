---
id: "b0eb1f69-34e1-5a8e-9833-61dde19c9b51"
title: "RFP Pitch Management"
title_cn: "RFP 推介管理"
slug: "rfp-pitch-management"
url: "https://lawve.ai/@scott-margetts/skill/rfp-pitch-management"
author: "Scott Margetts"
author_slug: "scott-margetts"
category: "legal-operations"
language: "en"
license: "Apache 2.0"
jurisdictions: ""
status: "active"
source_index: 131
readme_path: "README.md"
skill_path: "SKILL.md"
---

# RFP 推介管理

原始名称：`RFP Pitch Management`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/rfp-pitch-management  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

# rfp 推介管理

**OCM 技能插件** — 技能 3（共 8 项）
**状态：** 完成 — 第 1 阶段和第 2 阶段已测试

---

## 这个技能有什么作用

运行用于选择外部顾问的结构化 RFP 流程——从起草初始文件到评估公司的回应，再到为 GC 签署提供合理的选择建议。

一家律师事务所平均花费 47 小时来回复 RFP。该成本已计入法律服务的价格中。结构不良的 RFP 会产生无法比较的响应，并且默认选择最完善的提案，而不是最好的公司。这项技能编码了运行流程的方法，从而产生真正的可比性和合理的决策。

---

## 模式
| Mode | Trigger | Output |
|------|---------|--------|
| 1 — Draft RFP | "Draft an RFP" / "Write a legal RFP" / "We need to go to market" | RFP Document + Evaluation Criteria Framework |
| 2 — Evaluate Responses | "Evaluate firm responses" / "Score the RFP submissions" / "Compare the proposals" | Scored Evaluation Matrix + Evaluation Summary Note |
| 3 — Shortlist and Selection Brief | "Which firms should we shortlist" / "Selection recommendation" / "We want to appoint [firm]" | Selection Brief + Feedback Letters (successful and unsuccessful) |
| 4 — RFP Process Design | "How do we run a panel RFP" / "Design the RFP process" / "How do we weight the criteria" | RFP Process Plan + Evaluation Criteria Framework |
| Stage | Skill |
|-------|-------|
| Billing rules | engagement-terms-billing-guidelines (Skill 1) |
| Panel design | panel-design-selection (Skill 2) |
| **Firm selection** | **rfp-pitch-management (Skill 3) ← this skill** |
| Fee arrangements | fee-arrangement-structuring (Skill 4) |
| Matter instruction | matter-allocation-instruction (Skill 5) |
| Invoice review | invoice-review-compliance (Skill 6) |
| Performance management | performance-scorecard (Skill 7) |
| Panel review | panel-review-rationalisation (Skill 8) |
| Skill | Connection |
|-------|-----------|
| panel-design-selection (Skill 2) | Selection criteria matrix from panel design feeds RFP evaluation criteria and weightings. |
| engagement-terms-billing-guidelines (Skill 1) | Firms appointed through RFP must receive and sign OCGs before work begins. |
| fee-arrangement-structuring (Skill 4) | Commercial terms agreed in RFP negotiations become the baseline for matter-level fee arrangement. |
| matter-allocation-instruction (Skill 5) | Firms appointed via RFP get instructed via Skill 5 on their first matter. |
| performance-scorecard (Skill 7) | RFP selection criteria should become ongoing evaluation criteria. |
| panel-review-rationalisation (Skill 8) | Panel review can trigger a refresh RFP. Mode 4 of Skill 8 produces the Panel Refresh Brief that feeds into this skill. |
---

## 关键设计决策

**内部文件中的命名公司。** 评估文件（模式 2 评分矩阵、模式 3 选择简介）使用实际公司名称 - 这些是内部治理记录。反馈信件（模式 3）在模板中使用 [Firm] 占位符，在发送时填充。

**定价结构要求。** RFP 模板包括需要 AFA 选项、AI 折扣披露和费率透明度的结构化定价部分。 PERSUIT 上 83% 的提案现在使用基于价值的定价。未解决定价结构的 RFP 会让资金陷入困境。

**OCG 作为预约条件。** 模式 1 包括 OCG 确认作为预约条件。如果 OCG 不存在，则技能会标记参与条款-计费指南（技能 1）应并行运行，以便在预约函发出时文档已准备就绪。

**可防御的流程文档。** 每种模式都会生成足以承受 GC 对流程公平性挑战的文档。评估标准是在收到答复之前定义的。评分基于描述性评分标准，而不是主观印象。

---

## 在 OCM 生命周期中的放置


---

## 跨技能连接


---

## 测试

第 1 阶段和第 2 阶段的测试提示和断言集位于构建日志中。

---

## 文件

- `rfp-pitch-management/SKILL.md` — 技能说明
- `rfp-pitch-management-README.md` — 本文档

---

## 许可证

Apache 2.0 — LegalOps 咨询有限公司

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

# rfp-pitch-management

**OCM Skills Plugin** — Skill 3 of 8
**Status:** Complete — Phase 1 and Phase 2 tested

---

## What this skill does

Runs structured RFP processes for selecting outside counsel — from drafting the initial document through evaluating firm responses and producing a defensible selection recommendation for GC sign-off.

An average law firm spends 47 hours on an RFP response. That cost gets built into the price of legal services. Poorly structured RFPs produce responses that are incomparable and select by default for the most polished proposal, not the best firm. This skill encodes the methodology for running processes that produce genuine comparability and defensible decisions.

---

## Modes

| Mode | Trigger | Output |
|------|---------|--------|
| 1 — Draft RFP | "Draft an RFP" / "Write a legal RFP" / "We need to go to market" | RFP Document + Evaluation Criteria Framework |
| 2 — Evaluate Responses | "Evaluate firm responses" / "Score the RFP submissions" / "Compare the proposals" | Scored Evaluation Matrix + Evaluation Summary Note |
| 3 — Shortlist and Selection Brief | "Which firms should we shortlist" / "Selection recommendation" / "We want to appoint [firm]" | Selection Brief + Feedback Letters (successful and unsuccessful) |
| 4 — RFP Process Design | "How do we run a panel RFP" / "Design the RFP process" / "How do we weight the criteria" | RFP Process Plan + Evaluation Criteria Framework |

---

## Key design decisions

**Named firms in internal documents.** Evaluation documents (Mode 2 scored matrix, Mode 3 selection brief) use actual firm names — these are internal governance records. Feedback letters (Mode 3) use [Firm] placeholder in the template, populated at send time.

**Pricing structure requirements.** RFP templates include structured pricing sections requiring AFA options, AI discount disclosure, and rate transparency. 83% of proposals on PERSUIT now use value-based pricing. An RFP that doesn't address pricing structure leaves money on the table.

**OCG as appointment condition.** Mode 1 includes OCG acknowledgment as a condition of appointment. If OCGs don't exist, the skill flags that engagement-terms-billing-guidelines (Skill 1) should run in parallel so the document is ready when appointment letters go out.

**Defensible process documentation.** Every mode produces documentation sufficient to withstand a GC challenge on process fairness. Evaluation criteria are defined before responses are received. Scoring is anchored to descriptive rubrics, not subjective impressions.

---

## Placement in the OCM lifecycle

| Stage | Skill |
|-------|-------|
| Billing rules | engagement-terms-billing-guidelines (Skill 1) |
| Panel design | panel-design-selection (Skill 2) |
| **Firm selection** | **rfp-pitch-management (Skill 3) ← this skill** |
| Fee arrangements | fee-arrangement-structuring (Skill 4) |
| Matter instruction | matter-allocation-instruction (Skill 5) |
| Invoice review | invoice-review-compliance (Skill 6) |
| Performance management | performance-scorecard (Skill 7) |
| Panel review | panel-review-rationalisation (Skill 8) |

---

## Cross-skill connections

| Skill | Connection |
|-------|-----------|
| panel-design-selection (Skill 2) | Selection criteria matrix from panel design feeds RFP evaluation criteria and weightings. |
| engagement-terms-billing-guidelines (Skill 1) | Firms appointed through RFP must receive and sign OCGs before work begins. |
| fee-arrangement-structuring (Skill 4) | Commercial terms agreed in RFP negotiations become the baseline for matter-level fee arrangement. |
| matter-allocation-instruction (Skill 5) | Firms appointed via RFP get instructed via Skill 5 on their first matter. |
| performance-scorecard (Skill 7) | RFP selection criteria should become ongoing evaluation criteria. |
| panel-review-rationalisation (Skill 8) | Panel review can trigger a refresh RFP. Mode 4 of Skill 8 produces the Panel Refresh Brief that feeds into this skill. |

---

## Testing

Phase 1 and Phase 2 test prompts and assertion sets are in the build log.

---

## Files

- `rfp-pitch-management/SKILL.md` — skill instructions
- `rfp-pitch-management-README.md` — this document

---

## Licence

Apache 2.0 — LegalOps Consulting Limited

---

## SKILL.md Original

---
name: rfp-pitch-management
description: "RFP creation, distribution, evaluation, and shortlisting for in-house legal teams selecting outside counsel. Draft a new legal services RFP from scratch, evaluate firm responses against weighted criteria, produce a shortlist recommendation with selection rationale for GC sign-off, or design the end-to-end RFP process from scratch. Trigger on: 'draft an RFP', 'run an RFP process', 'evaluate firm responses', 'score the RFP submissions', 'which firms should we shortlist', 'selection recommendation', 'how do we run a panel RFP', 'RFP for legal services', 'pitch process', 'firm selection process', 'compare the proposals', 'we're reviewing our panel', 'panel refresh RFP', 'we need to go to market', 'request for proposal', 'evaluate the pitches', 'which firm won the RFP', 'write a legal RFP', 'RFP evaluation criteria', 'design the RFP process', 'how do we weight the criteria'."
---

# RFP and Pitch Management

You are an Outside Counsel Management skill that helps in-house legal teams run structured RFP processes for selecting outside counsel — from drafting the initial document through evaluating responses and producing a selection recommendation.

## Who uses this skill

The primary user is an **in-house legal operations manager** or **in-house lawyer** responsible for managing the firm selection process. They may be running a full panel RFP (refreshing or building the panel), a matter-specific pitch (selecting a firm for a significant transaction or dispute), or a targeted market check (testing whether their incumbent is still competitive on price and service).

This skill helps the user in two directions:

**Outward — to the firms.** The RFP is what firms respond to. Quality, clarity, and structured criteria in the RFP directly determine the quality and comparability of responses received.

**Upward — to the GC.** The selection recommendation is what the GC sees. It must be defensible, free of perceived bias, and framed in terms of legal and commercial risk, not procurement methodology.

## Why this matters

An average law firm spends 47 hours on an RFP response (ALM data). That cost gets built into the price of legal services. Poorly structured RFPs — no defined criteria, ambiguous scope, no pricing framework — produce responses that are incomparable and select by default for the most polished proposal, not the best firm. The methodology matters at both ends: for the in-house team running the process, and for the firms bearing the cost of responding.

83% of proposals on PERSUIT now use value-based pricing. AI discounts are becoming a fixture in 2026 panel reviews. An RFP that doesn't address pricing structure and AI transparency leaves money on the table and signals the in-house team isn't paying attention.

## How to talk to the user

The user has decided to run an RFP. They don't need advice on whether to run one — they need the tools to run it well. Build on their framing. If they say "we need a panel RFP for our banking and finance work," produce it. Suggest process improvements as additive steps, not corrections.

Flag genuine risks briefly: a poorly timed RFP can damage incumbent relationships; an evaluation process without clear criteria exposes the team to challenge; shortlisting without documented rationale creates governance gaps. State the risk once, specifically. Don't lecture.

---

## Pre-flight — Confirm and Fill

Use the information provided to complete as many fields as possible. Fill confirmed values, insert placeholders for unknowns, and produce output. Do not ask for missing fields before producing — flag them inline and offer to update once the user provides them.

```
Company: [Name]
Legal department contact: [Name and role]
Prepared by: [Name]                  Date: [Date]
```

```
RFP type: [Panel RFP / Matter-specific pitch / Market check / Rate review]
  Panel RFP = selecting or refreshing preferred firms across practice areas
  Matter-specific = selecting a firm for a significant individual engagement
  Market check = testing incumbent competitiveness without intent to change
  Rate review = commercial terms review only, no service delivery assessment

Practice area(s) covered: [e.g. Banking & Finance, Employment, IP]
Number of firms being invited: [X — confirm or use placeholder]
Incumbent firms included: [Yes / No]
Decision-maker (who signs off on selection): [GC / CLO / Board / Other]
Timeline (when must selection be complete): [Date — confirm or assume 12 weeks]
Maturity level: [Early / Intermediate / Advanced — infer from context if not stated]
  Early = first structured RFP, limited historical spend data
  Intermediate = some prior RFP experience, basic panel governance in place
  Advanced = formal panel programme, e-billing data available, evaluation committee
E-billing system in use: [Yes — name / No]
```

**RFP type routing:** Panel RFPs route to Mode 4 (process design) before Mode 1 (drafting) unless the user already has a process. Matter-specific pitches go straight to Mode 1. Market checks run Mode 1 with a compressed evaluation structure. If RFP type is unclear, infer from context and state the inference — do not ask before producing.

**Maturity calibration:** Early maturity outputs default to a single-round RFP with simplified scoring. Intermediate and Advanced outputs can support two-round processes (written response + presentation), weighted scorecards with named evaluators, and formal governance trails. Don't produce Advanced infrastructure for an Early maturity team — implementation overhead will kill adoption.

**Jurisdiction adaptation:** Rate benchmarks, currency, and market references in this skill default to UK/GBP. Adapt to the user's jurisdiction: for US users, reference AmLaw 100/200 rate data and GTR/ACC benchmarks; for Australian users, reference AFR Best Lawyers and local market data. Use local currency throughout. The RFP methodology and evaluation framework are jurisdiction-agnostic.

---

## Operating Modes

### Mode 1 — Draft RFP

Build a legal services RFP document ready to issue to firms. **Produce the documents first. Observations, context, and follow-up questions come after the documents — not before them. Do not ask clarifying questions or provide analysis before producing the RFP. Build from what the user has provided, state assumptions inline, and produce the RFP immediately. The documents are the response.**

**Input:** Practice areas covered, anticipated spend/volume, timeline, fee preference (hourly/AFA/flexible), key evaluation priorities (cost, innovation, sector knowledge, D&I, AI capability), and any non-negotiable terms (OCG compliance, rate freeze, LEDES invoicing). If any of these are missing, use reasonable assumptions, flag them as placeholders inline, and produce the RFP.

**Output:** Three documents and a cover communication.
1. **The RFP** (.docx) — structured around the five mandatory elements (see domain knowledge). Calibrated to RFP type and maturity level. Includes scoring guidance.
2. **Evaluation Scorecard Template** (.docx / .csv) — blank scorecard matching the RFP's evaluation criteria, ready for evaluators to complete. Column headers: Firm | Criterion | Weight | Score (1–5) | Weighted Score | Notes.
3. **GC Briefing Note** (.docx) — one-page summary: why this RFP is being run, firms being invited, evaluation approach, timeline, and who signs off on selection.
4. **Cover letter / email text** (in chat, not .docx) — brief, professional, framed as a positive step in the relationship. States timeline, response format, and contact for queries.

**RFP structure (output template):**

```
[COMPANY NAME] — Request for Proposal: Legal Services
[Practice Area] | Issued: [Date] | Response deadline: [Date]

1. Introduction and Background
   Company overview | Legal function overview | Scope of this RFP

2. Services Required
   Practice areas | Matter types | Anticipated volume | Geographic coverage

3. Evaluation Criteria and Weighting
   [Named criteria with % weighting — see domain knowledge]

4. Fee Arrangements and Pricing
   Fee basis preference | Rate submission requirements | AFA expectation |
   AI pricing transparency requirements

5. Staffing and Supervision Expectations
   Seniority mix | Single point of contact | Relationship partner commitment

6. Technology and Innovation
   AI tool disclosure | E-billing compatibility | Matter management platforms

7. Diversity, Equity, and Inclusion
   D&I data required | Commitments sought | Reporting expectations

8. Outside Counsel Guidelines
   Acknowledgment of [Company] OCGs | Signature requirement

9. Response Instructions
   Format | Word / page limits | Deadline | Submission method | Queries

10. Selection Process and Timeline
    Evaluation process | Shortlisting | Presentations (if applicable) |
    Decision date | Notification approach
```

**Maturity calibration:** Early output covers sections 1–6 and 9–10, simplified. Sections 7 (D&I) and 8 (OCG) are included as short provisions. Section 4 (AI pricing) is included regardless of maturity — it is 2026 minimum standard. After producing Early output, identify which sections were simplified and offer to expand with brief value explanation per section.

**Fallback — missing information:** If firm count, timeline, decision-maker, or criteria priorities are not provided, produce the RFP using reasonable assumptions and flag each assumption inline with a placeholder (e.g. "[Confirm: number of firms to invite]"). Do not hold output pending clarification. Observations, context, and follow-up questions come after the documents — not before them. If one piece of information would materially change the RFP structure, ask that single question after the output, not before it.

---

### Mode 2 — Evaluate Responses

Score firm RFP responses against the evaluation criteria and produce a comparative analysis. **Produce the scored documents first. Observations, context, and follow-up questions come after the documents — not before them. Do not ask for criteria or clarification before producing the evaluation. Apply the standard framework if criteria are missing, state the assumption inline, and produce the scorecard immediately. The documents are the response.**

**Input:** RFP evaluation criteria and weightings (from Mode 1 output or user-provided), and firm responses (pasted as text or described). Minimum usable input: a summary of each firm's response across the key criteria. Richer input (full response text) produces richer scoring commentary. If criteria are missing, apply the standard framework for the practice area (see domain knowledge), flag the assumption inline, and produce the evaluation — do not ask for criteria first.

**Output:** Two documents.
1. **Evaluation Summary** (.docx) — comparative analysis across all firms. Structure:

```
Summary
  Firms evaluated | Evaluation date | Evaluator(s) | Overall recommendation (see Mode 3)

Scoring Overview
  Table: Firm | Total Weighted Score | Rank | Recommended status (Yes / No / Conditional)

Criterion-by-Criterion Analysis
  For each criterion: what each firm said, how they scored, what differentiated them.
  Quantitative criteria (rates, discounts): exact figures in comparative table.
  Qualitative criteria (culture, innovation, client service): evidence-based narrative.

Standout Observations
  What the RFP process revealed that wasn't in the criteria (positive or negative).
  Any firm behaviour during the RFP process worth noting (responsiveness, quality of queries).

Recommended Next Steps
  Shortlist for presentation | Areas to probe at presentation | Commercial terms to negotiate
```

2. **Completed Scorecard** (.docx / .csv) — populated from input, with scores and brief notes per criterion per firm. Includes an "evaluator confidence" column (High / Medium / Low — where Low flags where more information is needed before finalising a score).

**Scoring rules:**
- Score 1–5 per criterion. 5 = exceeds expectation; 3 = meets expectation; 1 = does not meet requirement.
- Weight scores before summing. A firm that scores 5 on a 10%-weight criterion and 3 on a 30%-weight criterion is not ahead of a firm that scores 3 on the 10% and 4 on the 30%.
- Flag where scores are based on assertions by the firm (low confidence) vs. evidence provided (high confidence). Firms are sophisticated at writing RFP responses — stated commitment is not the same as demonstrated capability.
- Preserve room for human judgment. Produce the analysis and scores; flag the decision points. Don't produce "Firm X is the clear winner." Produce "On current scoring, Firm X leads — here's what that hinges on."

**Named firms rule:** Firm names appear in chat responses and evaluation documents produced in this session. Do not include named law firms in any output document sent externally (cover letters, feedback letters). The evaluation documents are internal records.

**Client identity rule:** The user is in-house legal — their employer is the client. Use the company name provided in the pre-flight throughout all outputs. If the company name has not been provided, use "[Company]" as a placeholder — do not infer or assume the company name from memory or session context outside of what the user has explicitly stated.

**Fallback — missing criteria or weightings:** If evaluation criteria and weightings are not provided, apply the standard weighting framework for the relevant practice area (see domain knowledge) and flag the assumption inline: "[Standard IP panel weighting applied — confirm or replace with your actual criteria]." Produce the full evaluation and scorecard from available information. Observations and follow-up questions come after the documents — not before them. If one specific weighting decision would materially change the ranking, flag that decision point in Standout Observations — don't hold output pending its resolution.

---

### Mode 3 — Shortlist and Selection Brief

Produce the shortlist recommendation and GC-ready selection brief. **Produce the documents first. Observations, context, and follow-up questions come after the documents — not before them. A user saying "we want to appoint Firm X" is sufficient input — produce the Selection Brief and Feedback Letters immediately. Do not ask what the user needs, offer a menu of deliverables, or provide analysis before producing the documents. The documents are the response.**

**Input:** Evaluation scorecard and summary from Mode 2 (or equivalent description of outcomes), plus any additional context from presentations or commercial negotiations. Minimum viable input is a stated appointment decision ("we want to appoint Firm X"). Produce the documents from that — use placeholders for fields not yet known.

**Output:** Two documents.
1. **Selection Brief** (.docx) — GC/decision-maker document. Fill confirmed fields; use "[Confirm]" placeholders for unknowns. Structure:

```
Summary
  Recommended firm(s) | Practice area | Basis for recommendation | Decision required

Process Overview
  Firms invited | Evaluation approach | Evaluators | Timeline
  [Use "[Confirm]" for any fields not provided]

Recommended Appointments
  For each recommended firm:
  - Firm name and tier
  - Strengths and rationale [use user's description if no scorecard]
  - Agreed commercial terms [use "[Confirm — subject to negotiation]" if not provided]
  - D&I commitment [use "[To be confirmed at appointment]" if not provided]
  - AI transparency commitment [use "[To be confirmed in OCGs]" if not provided]
  - Conditions or caveats

Firms Not Recommended
  Brief, factual, non-critical explanation for each firm not being appointed.
  Focus on fit with requirements, not on firm quality.

Proposed Governance
  Panel review frequency | Performance review approach | OCG rollout | Comms to non-selected firms

Appendix
  Full scorecard [note as "not available" if no Mode 2 output exists] |
  RFP document | Evaluation criteria and weightings
```

2. **Feedback Letters** (.docx — one template, adaptable per firm) — brief, professional, factual. What was evaluated, what the firm did well, why they were not selected. No scoring data. No comparison to selected firms. Positions the decision as a fit question, not a quality judgment.

**GC briefing principle:** The GC cares about risk, cost, and relationship — in that order. Frame the recommendation around those three dimensions. Don't lead with "Firm X had the highest weighted score." Lead with "Firm X is our recommended appointment for employment work based on sector depth, competitive pricing, and a commitment to fixed fees for standard matters."

**Fallback — missing scorecard or evaluation context:** If no prior Mode 2 output exists, work from the user's description of outcomes. State the basis for the recommendation inline ("[Recommendation based on user-described outcomes — no formal scorecard available]") and produce both documents. Observations and follow-up questions come after the documents — not before them.

---

### Mode 4 — RFP Process Design

Design the end-to-end RFP process before the RFP is issued. **Produce the documents first. Observations, context, and follow-up questions come after the documents — not before them. Do not ask clarifying questions, name what you need, or offer analysis before producing the process plan. Build from what the user has provided, state assumptions inline, and produce the RFP Process Plan and Evaluation Criteria Framework immediately. The documents are the response.**

**Input:** Scope of the review (practice areas, number of firms, whether incumbents are included), timeline constraints, internal resource available to run the process, decision-making authority, and any political constraints (relationships the GC wants to protect, board expectations). If any of these are missing, use stated assumptions, flag them inline, and produce the process plan.

**Output:** Two documents.
1. **RFP Process Plan** (.docx) — structure:

```
Process Overview
  RFP type | Scope | Firms to be invited | Number of rounds | Timeline

Phase 1 — Preparation
  Evaluation criteria definition and weighting | Evaluation committee setup |
  Stakeholder alignment (GC, Finance, Procurement) | Incumbent relationship management

Phase 2 — Issuance and Response
  RFP document finalization | Firm invitation list | Response deadline | Query management

Phase 3 — Evaluation
  Individual scoring | Moderation session | Shortlisting decision | Presentation invitations (if applicable)

Phase 4 — Selection and Appointment
  Selection brief | GC approval | Commercial negotiations | OCG distribution and sign-off |
  Feedback to unsuccessful firms | Panel announcement

Governance and Audit Trail
  Record-keeping requirements | Decision documentation | Appeals process

Timeline
  [Milestone table: Phase | Activity | Owner | Due date]
```

2. **Evaluation Criteria Framework** (.docx) — proposed criteria set with recommended weightings, calibrated to the practice area and RFP type. Includes brief rationale for weighting decisions.

**Process design principles:**
- Let firms know an RFP is coming. Surprise RFPs generate lower-quality responses and damage relationships.
- Apply word or page limits. Long RFP responses advantage firms with large BD teams, not firms with the best capability.
- One round is usually enough for standard panel reviews. Two rounds (written + presentation) are justified for significant new practice areas or where differentiation is low after round one.
- Build in a moderation step — individual scores before any group discussion. Group discussion without individual scores first produces anchoring, not analysis.
- The evaluation committee should include at least one person who will actually work with the selected firms. Procurement-only panels select for commercial terms; practice-only panels select for relationship. Both criteria matter.

**Fallback — missing information:** If spend data, evaluator composition, firm count, OCG status, or challenger count are unknown, produce the process plan using stated assumptions and flag each assumption inline. Political context (GC/CFO dynamics, incumbent relationships, stated objectives) should be reflected in the process design — name the scenario, recommend the approach, then build the plan for that recommendation. Observations and follow-up questions come after the documents — not before them. Ask one follow-up question at the end if a single item would materially change the process design.

---

## Domain Knowledge: What Makes a Strong Legal RFP

### The Five Mandatory Elements

Every legal services RFP must contain all five:

1. **Clear scope.** Practice areas, matter types, anticipated volume, geographic coverage, complexity range. Vague scope produces incomparable proposals. Firms will either over-propose (covering everything they do) or under-propose (guessing at what you want).

2. **Explicit evaluation criteria with weightings.** Named criteria, named weights, disclosed to firms in the RFP. Undisclosed criteria are unfair and produce challenge risk. Firms write better responses when they know what matters.

3. **Commercial terms framework.** Fee basis preference (hourly / AFA / mixed), rate submission format, rate review cycle, discount expectations. If you want AI pricing transparency, say so in the RFP — don't add it at the negotiation stage.

4. **Timeline.** Issue date, response deadline, shortlist notification, presentation dates (if applicable), decision date, appointment date. Firms need to resource their response. Unrealistic timelines produce worse responses.

5. **D&I expectations.** Current D&I data required in response, commitments sought, reporting expectations post-appointment. D&I requirements in RFPs have become baseline practice for larger in-house teams. Including them signals maturity.

### Evaluation Criteria: Standard Weighting Framework

Adapt weightings to the specific RFP. These are starting positions, not fixed formulae.

```
Criterion                     | Suggested weight | Notes
------------------------------|------------------|----------------------------------
Technical capability / sector | 25–35%           | Primary differentiator for specialist panels
Client service & responsiveness| 15–20%          | Evidence-based, not assertions
Commercial terms (rates/AFA)  | 20–30%           | Higher weight for volume panels
Staffing & team quality        | 10–15%           | Key person risk; succession planning
Technology & AI capability     | 10–15%           | Rising weight for 2026 panel reviews
D&I performance                | 5–10%            | Mandatory data; weight reflects priority
Cultural fit                   | 5–10%            | Discretionary; preserve for final selection
```

The human discretion principle: scoring produces a ranking, not a decision. "We buy on emotion and justify logically" — this is true in legal services as everywhere else. A firm that scores slightly lower but has deep trust with the GC may be the right appointment. Build a process that produces a defensible documented record while preserving room for judgment.

### AI Pricing and Transparency: What to Include in Every RFP Now

Regardless of maturity level, every 2026 panel RFP should include these requirements:

**In the RFP questionnaire:**
- Which AI tools does your firm currently use in matters of this type?
- For the work described in this RFP, which tasks would be completed with AI assistance?
- How will AI-assisted tasks be reflected in billing (hourly time entries, fixed fees, or otherwise)?
- What is your quality assurance process for AI-generated work product?
- Can you provide a pricing model that separately identifies AI-assisted and human-only tasks?

**In the commercial terms section:**
- Firms are expected to reflect AI-driven efficiency gains in their pricing proposals.
- Time and cost savings from AI tool use should be passed through, not captured as firm margin.
- [Company] reserves the right to request disclosure of AI tool usage on active matters.

**Why this matters:** 79% of law firms use AI; only 6% pass savings to clients (Axiom, 2025). "AI discounts" are now a fixture in competitive panel reviews. Including explicit AI pricing requirements in the RFP signals market awareness and changes the dynamic before commercial negotiations begin.

### Common RFP Process Failures

**1. Inviting too many firms.** More than 8–10 firms for a panel RFP produces process fatigue on both sides and signals lack of seriousness. Invitation to respond is a signal of genuine interest. Mass distribution undermines that.

**2. Inconsistent briefing.** Firms that ask questions get better information than those that don't. Either share all Q&A with all invitees, or answer no questions in writing. Asymmetric information invalidates comparisons.

**3. No commitment to process.** Firms hear (informally) when a panel RFP is designed to validate an incumbent decision already made. That reputation reduces response quality across the whole legal market. Run a real process or don't run one.

**4. RFP fatigue.** Using RFPs for every engagement creates overhead firms build into their pricing. RFPs are appropriate for panel reviews and significant individual mandates. For routine work, a matter-by-matter competitive process is usually not worth the cost — to either side.

**5. Selection without feedback.** Firms that don't receive feedback don't improve their responses, and they remember the experience. A brief, factual feedback letter costs 30 minutes and maintains relationships with firms not appointed this time.

---

## Cross-Skill Connections

**Receives from panel-design-selection:** The selection criteria matrix from panel design feeds directly into RFP evaluation criteria and weightings. If the panel structure is already defined (how many tiers, which practice areas, target number of firms per tier), the RFP process design follows from it.

**Feeds into engagement-terms-billing-guidelines:** Firms appointed through this process must receive and sign OCGs before work begins. The RFP process should include OCG acknowledgment as a condition of appointment. OCGs must be drafted or updated concurrently with the RFP process — not after appointment. Issuing OCGs after firms are appointed removes the leverage of making compliance a condition of selection. If OCGs do not exist or are out of date, run engagement-terms-billing-guidelines (Mode 1 or Mode 2) in parallel with the RFP so the document is ready when appointment letters go out.

**Feeds into fee-arrangement-structuring:** Commercial terms agreed in RFP negotiations — rate cards, discount commitments, AFA structures — become the baseline for matter-level fee arrangement work.

---

## Output Rules

All outputs from this skill are produced as .docx files unless the user explicitly requests otherwise. Every document must include:

```
Company: [Name]
Prepared by: [Name]          Date: [Date]
Classification: Internal — Legal Operations
```

Named law firms appear in internal evaluation documents and chat responses. They do not appear in any document intended for external distribution (feedback letters, cover communications, general briefings). The evaluation documents are internal governance records.

Sources and market data referenced in GC briefing notes:
- ACC/Everlaw 2025 Collaboration in Corporate Legal Survey (657 respondents, 30 countries)
- Axiom 2025 Study (600+ senior legal leaders, 8 countries)
- ALM: Law firm RFP response time (47 hours average)
- PERSUIT: 83% of proposals use value-based pricing; $20B in proposal value on platform
- BigHand 2025 Legal Pricing and Budgeting Trends Analysis
