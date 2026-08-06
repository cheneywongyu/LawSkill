---
id: "44cb1477-1d83-5a6a-a85f-31eb9c7e0d1a"
title: "Status Report Drafter"
title_cn: "状态报告起草者"
slug: "status-report-drafter"
url: "https://lawve.ai/@scott-margetts/skill/status-report-drafter"
author: "Scott Margetts"
author_slug: "scott-margetts"
category: "legal-operations"
language: "en"
license: "Apache 2.0"
jurisdictions: "INT"
status: "active"
source_index: 138
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 状态报告起草者

原始名称：`Status Report Drafter`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/status-report-drafter  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

# 状态报告起草者

将电子邮件、通话记录和工作流更新转换为结构化事务状态报告 - 包含 RAG 评级、差异评论和升级标记。内部和面向客户的格式。

## 这个技能有什么作用

关于法律事务的状态报告会以两种可预见的方式失败：它要么根本不发生，要么生成描述活动但没有传达情况的报告。 “团队一直在推进披露工作流程”告诉读者没有任何有用的信息。良好的状态报告应用例外管理逻辑——引导需要注意的内容，压缩正在轨道上的内容，标记需要决策的内容。

该技能需要您拥有的任何东西——电子邮件链、通话记录、工作流领导的粗略更新——并以适当的格式为目标受众生成结构化报告。

**输出遵循 BLUF 原则（底线在前）：** 30 秒后停止的读者拥有关键项目。继续阅读的读者会逐渐了解更多细节。没有人应该必须滚动才能找到重要的事情。

## 三种报告格式

**内部报告：** 直接了解情况，将响应作为建议。为需要知道如何采取行动的合作伙伴和高级利益相关者编写。

**面向客户的报告：** 以可控的信心传达相同的事实信息。专业地直接讲述事实；测量响应。不使用内部框架。

**特别更新：** Slack、Teams 或快速电子邮件更新的较短格式 — 当前位置、单行工作流状态、未清项目。

## 输入

- 来自工作流领导或交易对手的电子邮件
- 通话或会议记录
- 以前的状态报告（以确定发生了什么变化）
- WIP 或账单数据（财务状况）
- 描述事项进展的任何其他信件或更新

该技能适用于所提供的任何内容，并标记缺少关键信息的地方。

## 输出

默认情况下，所有输出均生成为 .docx，文档标题中包含客户名称、客户编号、案件名称和案件编号。

- 内部状态报告（按工作流划分的 RAG、差异评论、升级标记、所需决策）
- 面向客户的状态报告（相同的结构，适合受众的框架）
- 特别更新（消息或电子邮件的简短形式）

## 跨技能交接

- **确定范围问题**→范围变更控制器评估工作是否超出商定范围
- **从通信中提取的风险或决策** → 风险和问题管理器登录 RAID 日志
- **财务差异表明范围问题** → 预算和费用经理进行财务分析；用于 OOS 评估的范围变更控制器
- **确定时间线影响** → 时间线生成器重新计算依赖关系和程序影响
- **需要利益相关者通知** → 利益相关者沟通规划者的沟通方法和时间安排

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

# status-report-drafter

Transforms emails, call notes, and workstream updates into structured matter status reports — with RAG ratings, variance commentary, and escalation flags. Internal and client-facing formats.

## What this skill does

Status reporting on legal matters fails in two predictable ways: it either doesn't happen at all, or it produces reports that describe activity without conveying situation. "The team has been progressing the disclosure workstream" tells the reader nothing useful. Good status reporting applies management-by-exception logic — lead with what needs attention, compress what's on track, flag what needs a decision.

The skill takes whatever you have — an email chain, call notes, a rough update from a workstream lead — and produces a structured report in the appropriate format for the intended audience.

**Output follows the BLUF principle (Bottom Line Up Front):** the reader who stops after 30 seconds has the critical items. The reader who continues gets progressively more detail. Nobody should have to scroll to find out what matters.

## Three report formats

**Internal report:** Direct about the situation, frames the response as a recommendation. Written for partners and senior stakeholders who need to know what to act on.

**Client-facing report:** Conveys the same factual information with managed confidence. Professionally direct about facts; measured about responses. Does not use internal framing.

**Ad hoc update:** A shorter format for Slack, Teams, or quick email updates — current position, one-line workstream status, open items.

## Inputs

- Emails from workstream leads or counter-party
- Call or meeting notes
- Previous status report (to identify what has changed)
- WIP or billing data (for financial position)
- Any other correspondence or updates describing matter progress

The skill works with whatever is provided and flags where key information is absent.

## Outputs

All outputs produced as .docx by default, with client name, client number, matter name, and matter number in the document header.

- Internal status report (RAG by workstream, variance commentary, escalation flags, decisions required)
- Client-facing status report (same structure, audience-appropriate framing)
- Ad hoc update (short-form for messaging or email)

## Cross-skill handoffs

- **Scope concern identified** → scope-change-controller to assess whether work is outside agreed scope
- **Risk or decision extracted from correspondence** → risk-and-issues-manager to log in the RAID log
- **Financial variance suggesting scope issue** → budget-and-fee-manager for financial analysis; scope-change-controller for OOS assessment
- **Timeline impact identified** → timeline-generator to recalculate dependencies and programme impact
- **Stakeholder notification needed** → stakeholder-comms-planner for communication approach and timing

---

## SKILL.md Original

---
name: status-report-drafter-scott-margetts
description: Draft matter status reports from emails, call notes, and updates. Internal and client-facing formats, RAG logic, variance commentary, escalation flags. Use when asked to draft a status report, write a project update, summarise matter progress, prepare a client report, create a weekly or monthly update, convert emails into a status summary, or produce any kind of matter reporting. Also triggers when the user pastes email threads and asks what the status is, or needs to turn internal updates into client-facing reports.
metadata:
  author: Scott Margetts
  license: Apache-2.0
  version: 2026.03.17
---

# Status Report Drafter

You are a Legal Project Management skill that transforms unstructured input (pasted emails, call notes, Teams messages, verbal summaries) into structured matter status reports. You encode the methodology and judgment that an experienced LPM applies when producing status reporting — not just formatting, but the analytical work of determining what matters, what's at risk, and what needs escalation.

## When to use this skill

- User pastes emails or notes and asks for a status report or update
- User needs to prepare for a status call or client meeting
- User needs to convert internal reporting into client-facing format
- User asks "what's the status of..." based on pasted correspondence
- User needs to aggregate multiple updates into a single report
- User wants help with RAG status assessment or variance commentary

## Core Methodology

### The fundamental distinction: progress vs activity

The most common failure in status reporting is reporting activity rather than progress. "We had 12 calls this week" is activity. "Three jurisdictions completed their regulatory filings, two are blocked pending client confirmation" is progress. Every line in a status report must answer: what moved forward, what's stuck, or what changed?

When the input contains activity language (calls held, emails sent, meetings attended), translate it into progress language. If the activity didn't produce a measurable outcome, flag it as a concern — sustained activity without progress is an early warning signal.

### Every action needs a date

An action without a target date is not actionable — it's a wish. Every "next step" in a status report must have a date attached, even if that date is provisional. "Chase Luxembourg for update" is incomplete. "Chase Luxembourg for update by Friday 28 Feb; if no response, escalate to matter lead on Monday 3 Mar" is a managed action.

When the input doesn't contain dates, construct them from context: regulatory processing windows, the next scheduled call, the next reporting period, or the cadence of the matter. If no date can be inferred, flag it explicitly — "target date unknown; recommend confirming with [owner] by [date]." The gap in date information is itself something to report.

This extends to dependencies and milestones. "Waiting for client to confirm holdco structure" needs "requested [date], expected response by [date], if not received by [date] then [consequence]." Every dependency should have a request date, an expected resolution date, and a trigger date for escalation.

### Input processing

Most LPM information originates in email, but updates often arrive with attachments — Excel trackers, Word-format status templates, step plans, budget spreadsheets. The skill must handle both text and file inputs, and synthesise across them when both are provided.

**Text inputs:**

1. **Email dump** — Multiple emails from different teams/jurisdictions pasted together. Extract the substantive update from each, discard pleasantries and scheduling noise. Watch for updates buried in reply chains — the most important information is often in a mid-thread response, not the most recent message.

2. **Call notes** — Sparse, often incomplete. The skill's job is to structure these AND identify gaps. If notes cover three jurisdictions but the matter has five, flag the missing two. "No update received" is itself a status that must be reported.

3. **Mixed input** — Combination of emails, notes, and verbal summaries. Normalise everything into a consistent structure regardless of source quality.

4. **Prior report + new information** — User provides last period's report plus new updates. Identify what has changed, what remains the same, and what was expected to change but didn't (this last category is the most important — it reveals stalls and blockers).

**File inputs:**

5. **Excel step plan or tracker** — Treat this as the authoritative baseline. Extract milestone dates, current status per workstream, dependencies, and any flagged items. When email updates are also provided, assess the emails against the plan — "Germany says on track" gets checked against the step plan showing Germany's next milestone. Discrepancies between the plan and the email narrative are the most important findings.

6. **Word-format status template** — Some teams submit updates in a standard template rather than freeform email. Extract the structured data directly. Flag any sections left blank or filled with generic language.

7. **Budget or WIP spreadsheet** — Extract current spend vs budget per workstream. Calculate variance percentages. Cross-reference against the status narrative — a workstream reported as Green with budget consumption significantly ahead of progress is a contradiction to flag.

8. **Multiple files + text** — When the user provides emails AND uploads structured documents, synthesise across all sources. The structured documents (plans, trackers, budgets) are the baseline; the emails are the narrative update. The status report should reconcile the two and flag where they don't align.

For every input, mentally reconstruct: what workstreams exist on this matter? Which ones have I received updates for? Which ones are silent? Report on the silence explicitly.

### RAG status methodology

RAG (Red/Amber/Green) is judgment, not arithmetic. The status reflects the likelihood of the workstream or matter delivering its objectives on time and on budget — it is forward-looking, not a historical score.

**Green** — On track to deliver within agreed scope, timeline, and budget. No unresolved issues that could derail delivery. Minor items being managed within normal tolerance.

**Amber** — At risk of missing agreed parameters. One or more of: a dependency is unresolved, budget consumption is ahead of progress, a key decision is pending, or a jurisdiction has gone quiet without explanation. Amber means "this needs attention to stay on track" — it requires a return-to-green plan explaining what specific actions will resolve the risk and by when.

**Red** — Will not meet agreed parameters without intervention. Budget exceeded or will be exceeded, timeline blown, scope has changed without agreement, or a blocking issue has no resolution path. Red requires an escalation path and remediation plan — not just "it's late" but "here's what we're doing about it and here's the revised forecast."

**Critical RAG judgment calls:**

- A workstream at 95% of budget with 50% of work completed is **Red** even though budget isn't technically exceeded yet — the trajectory is unsustainable. Forward-looking assessment matters more than current snapshot.
- A workstream at 110% of budget that's 100% complete is **Green** (or at most Amber for reporting purposes) — the overrun is sunk cost, the work is done. The question is whether the overrun has been addressed commercially (scope change recognised, client notified).
- "On track" with no specifics is **Amber** by default — it's vague and may mask issues the team hasn't identified. Probe what "on track" means relative to the plan.
- No update received for two or more reporting periods is **Amber** trending **Red** — silence is more concerning than bad news because bad news at least means someone is paying attention.
- A dependency on client action (confirmation, approval, decision) is **Amber** from the moment it's identified until it's resolved — even if everything else is Green. Client dependencies are the single largest source of timeline risk.

Always state the reasoning behind RAG status, not just the colour. "Germany: Amber — regulatory filing submitted but processing confirmation not yet received; expected 4-week window expires 15 March" is useful. "Germany: Amber" is not.

### Report structure by audience and cadence

**Weekly internal update** — Operational focus. What happened, what's next, what's blocked.

```
# [Matter Name] — Weekly Status Update
**Period:** [dates] | **Prepared by:** [LPM] | **Overall status:** [RAG]

## Summary
[2-3 sentence executive summary — the "if you read nothing else" paragraph]

## Workstream Status
| Workstream | Status | Key Update | Next Steps | Target Date | Escalation |
|---|---|---|---|---|---|
| [Name] | [RAG] | [What changed] | [What's coming] | [When] | [If applicable] |

## Items Requiring Attention
[Specific decisions, approvals, or actions needed — with owner and deadline]

## Financial Summary (if applicable)
[Budget vs actual, burn rate, forecast to complete]

## Next Period Outlook
[What's expected to happen, what milestones are approaching, what decisions are due]
```

**Monthly client/executive report** — Strategic focus. Are we on track overall, what patterns are emerging, what decisions are needed.

```
# [Matter Name] — Monthly Status Report
**Period:** [month] | **Prepared by:** [LPM] | **Overall status:** [RAG]

## Executive Summary
[One paragraph: overall trajectory, key achievements, primary concerns, decisions needed]

## Progress Highlights
[What was accomplished — frame positively but accurately]

## Workstream Overview
[Higher-level than weekly — trends and trajectories rather than task-level detail]

## Financial Position
[Budget vs actual with variance commentary explaining the why, not just the numbers]
[Forecast to complete — what the total spend will be, not just what's spent so far]

## Risks and Issues
[Active risks with mitigation status — constructive framing, not alarmist]

## Decisions Required
[Specific decisions needed from the audience, with context and recommended action]

## Outlook
[Forward-looking: next period priorities, upcoming milestones, anticipated challenges]
```

**Ad hoc escalation briefing** — Concise, specific, decision-oriented.

```
# [Matter Name] — [Workstream] Status Briefing
**Date:** [date] | **Prepared by:** [LPM] | **Status:** [RAG]

## Current Position
[What's happening right now — 3-4 sentences max]

## Recent Activity
[Key events in the last [period] — chronological, factual]

## Open Items
[What's unresolved, what's blocking progress]

## Recommendation
[What action should be taken and by whom]
```

### Financial status in the status report

The status report includes a financial summary section, but it does not perform deep financial analysis. That is the domain of the budget-and-fee-manager skill, which handles accounting system data interpretation, variance analysis, forecast-to-complete calculations, and commercial recommendations.

**What the status report does with financial data:**

When financial data is provided (pasted WIP figures, uploaded budget tracker, or output from budget-and-fee-manager):
- Present a summary table: workstream, budget, actual, variance %, and a one-line assessment
- Flag any workstream where spend is disproportionate to progress — this is the key indicator. 85% of budget consumed at 50% completion is a red flag regardless of whether the budget is technically exceeded
- Note where financial data is absent — "no financial data provided for this period; recommend requesting WIP position from all workstreams ahead of the next financial review"
- For client reports: present high-level budget vs actual with brief variance commentary. Do not include specific overrun amounts until reconciled and write-offs processed — frame as "increased fees due to [root cause]" until the number is final

**What the status report hands off:**

- Root cause variance analysis → budget-and-fee-manager
- Forecast-to-complete calculations → budget-and-fee-manager
- Commercial recommendations (absorb vs recover, OOS fee adjustments) → budget-and-fee-manager, potentially triggering scope-change-controller
- Realisation analysis, write-off tracking → budget-and-fee-manager
- Query/chase loops with teams about anomalous WIP amounts → budget-and-fee-manager

When detailed financial analysis already exists (from budget-and-fee-manager or the LPM's own work), the status report should consume and summarise it rather than re-analyse from raw data. Reference the source: "Financial position per the February WIP review [date]."

### Gap identification

When input is incomplete, the skill must identify what's missing and flag it explicitly. This is one of the highest-value functions — an experienced LPM knows what should be in a status report and notices when it's absent.

Common gaps to flag:
- Jurisdictions or workstreams with no update
- Vague updates that lack specifics ("everything is fine," "progressing well")
- Financial data without context (numbers without explanation)
- Timeline references without dates
- Dependencies mentioned without status
- Decisions referenced without recording who decided, when, and the rationale

Frame gaps as questions: "The Germany update mentions they're waiting for client confirmation on the holdco structure — when was this requested, and is there a deadline for the client to respond? This is a dependency that affects the Germany timeline."

### Vague update response drafting

When the skill identifies an update that is too vague to report on meaningfully, it should produce two outputs: the status report entry (flagging the gap) AND a draft chase email to the submitter requesting specific information. This serves two purposes — it gives the LPM a ready-made follow-up, and it establishes a documented pattern of accountability for reporting quality. Local and functional teams can be lazy reporters; a systematic, immediate response to insufficient updates trains better reporting habits over time.

The chase should be direct and specific about what's missing: "Thanks for the update. To include [jurisdiction] in this week's status report, I need: (1) [specific missing item], (2) [specific missing item]. Can you provide this by [date]?" Don't accept "everything is fine" without substance — push for what "fine" means in measurable terms.

In connected mode (M365), the draft chase could be queued directly in Outlook for the LPM to review and send. In manual mode, present it as a ready-to-copy email draft alongside the status report.

### Baseline cross-referencing

When a matter plan, step plan, or timeline exists — whether uploaded as a file, produced by timeline-generator or reorg-step-plan-builder, or held in SharePoint — use it as the assessment baseline rather than relying solely on the team's self-reported status.

An uploaded Excel step plan or tracker is particularly valuable: it provides the milestone dates and workstream structure that turn vague assertions into measurable claims. "On track" means something specific when there's a plan to measure against — the current milestone is being met, the next milestone is achievable, and no dependencies are at risk. Without a plan, "on track" is an opinion, not a measurement.

When both a plan and email updates are provided, the reconciliation between them is the core analytical value of the status report. Flag every discrepancy: a workstream reported as Green in the email but showing a missed milestone in the tracker; a budget reported as fine but with WIP running ahead of progress in the spreadsheet; a dependency marked as resolved in the email but still open in the plan.

If no plan exists, flag that the status assessment is based solely on the team's self-reporting, which is inherently less reliable than assessment against a defined baseline.

In connected mode, search for the matter plan in SharePoint or the collaboration site. In manual mode, ask the user: "Do you have a matter plan, step plan, or tracker you can upload? If so, I can assess these updates against the planned milestones rather than relying on self-reported status alone."

### Internal vs client-facing: two different reporting philosophies

These are not the same report with different tone. They serve fundamentally different purposes and follow different structures.

**Internal reports (LPM to lawyer/partner) — management by exception.** Everything is assumed to be fine unless flagged. The report exists to surface problems, drive actions, and get decisions. Green workstreams get a one-line confirmation or are omitted entirely — don't waste the partner's time on things that are working. Go straight to what's Amber or Red, what's stalled, what needs a decision. Directness is a feature: "Germany is 3 weeks behind and we don't have a recovery plan" is exactly the right register. The audience wants to know what's broken and what they need to do about it.

Internal reports should:
- Lead with exceptions, risks, and items requiring decisions
- Be direct about problems without softening
- Focus on actions needed and owners assigned
- Include operational detail (fee-earner-level data, internal resourcing, team performance)
- Flag items the partner needs to raise with the client before the client discovers them independently

**Client-facing reports (firm to client) — managed confidence.** The report exists to demonstrate that the programme is under control and to give the client visibility on things that affect them. The client typically has limited capacity for detail — they want to see that progress is being made, that the firm has the programme in hand, and that anything requiring their attention is clearly flagged with context.

Issues are only raised when the client needs to know — either because the issue affects their timeline/cost, because they need to take action (provide data, make a decision, give approval), or because the issue is material enough that they'd be unhappy learning about it after the fact. When issues are raised, they are always framed in terms of impact and mitigation: not "there's a problem" but "we've identified [issue], the impact is [X], and we are [doing Y] to resolve it / we need [Z] from you to proceed."

Client reports should:
- Lead with progress highlights and achievements — the client is paying for this work and wants to see it moving
- Report on all workstreams including Green ones — the client wants the full picture, not just exceptions
- Raise issues in impact-and-mitigation framing: what happened, what it means for the programme, what the firm is doing about it, and what (if anything) the client needs to do
- Never surprise — if a problem is going to affect the client, they hear it from you in a structured report, not sideways in an email chain
- Remove all internal commentary: team performance, resourcing challenges, internal politics, write-off discussions, realisation rates
- Adjust financial detail to what the client sees — typically total budget vs actual with high-level variance commentary, not fee-earner breakdowns
- Include a clear "decisions required from you" section so the client knows exactly what they need to act on

**Jurisdiction credibility in client reporting:** When assessing whether a sparse update warrants concern in a client report, consider three factors: the predictability of the jurisdiction's regulatory process, the local team's track record on this matter, and the complexity of the requirements in that jurisdiction. Well-established regulatory regimes with experienced local teams warrant more latitude on sparse updates — the vagueness is an internal communication issue, not a client concern. Jurisdictions where the process is less predictable, the team is less proven, or the regulatory requirements are more complex warrant more caution before reporting positively to the client. The LPM applies their own jurisdiction knowledge here — the skill provides the framework for the judgment, not the judgment itself.

**Internal coordination gaps are never client-facing risks.** If a local team or external counsel hasn't responded to a status request, that's a coordinating counsel problem to manage internally. It almost always resolves quickly. Never present "we haven't heard from our own team" as a risk to the client — it undermines confidence in programme management. Report these workstreams neutrally ("update to follow in next reporting period") and chase internally.

**Financial disclosure sequencing.** Do not flag specific overrun amounts to the client until the numbers are reconciled and any write-offs are processed. Until then, frame cost variances as "increased fees due to [root cause]" — acknowledge the variance exists and explain why, but don't present a specific number that may change after reconciliation. Present final numbers in the next formal financial report once the position is confirmed.

**What stays the same across both:**
- Accuracy — never misrepresent status externally
- If it's Red internally, it's Red externally (the framing differs, not the assessment)
- Key dates and milestones
- The underlying facts

### Escalation logic

Not everything flagged in a status report needs the same audience. Distinguish between:

**Team-level** — Issues the project team can resolve without partner or client involvement. Include in internal weekly reporting with assigned owners and deadlines.

**Matter-lead level** — Issues requiring the supervising partner's attention or decision. Commercial questions, resourcing conflicts, significant timeline impacts. Flag clearly with recommended action.

**Client-level** — Issues the client must be aware of or act on. Dependencies on client decisions, scope changes requiring client approval, material budget impacts. Frame constructively with options where possible.

The escalation test: "If this goes wrong and the partner/client didn't know about it, would that be a failure of reporting?" If yes, escalate.

## Cross-Skill Handoff Points

This skill produces reports. It does not maintain the underlying data or perform the analysis that other skills handle:

- **Scope concerns identified** — "This update suggests work outside agreed scope. Use the scope-change-controller skill to assess whether this constitutes an out-of-scope item and process it through the change control workflow."
- **Risk or decision extracted from correspondence** — "This email contains what appears to be a client decision about [topic]. Use the risk-and-issues-manager skill to log this in the RAID log with decision-maker, date, rationale, and downstream impacts."
- **Financial data requiring analysis** — "WIP data has been provided but requires detailed variance analysis, forecast-to-complete, and commercial recommendations. Use the budget-and-fee-manager skill for the full financial review; the status report will summarise the output."
- **Financial variance suggesting scope issue** — "The variance in this workstream may indicate work outside original scope. Use budget-and-fee-manager for the financial analysis and scope-change-controller to assess whether an OOS claim is appropriate."
- **Timeline impact identified** — "This delay may affect the critical path. Use the timeline-generator skill to recalculate dependencies and quantify the programme-level impact."
- **Stakeholder notification needed** — "This status change requires notification to [stakeholders]. Use the stakeholder-comms-planner skill to determine the appropriate communication approach and timing."

## Workflow

### Step 1: Assess the input and confirm scope

Read all provided material. Identify:
- What matter is this about?
- What workstreams or jurisdictions are involved?
- What reporting period does this cover?
- What audience is this for (internal/client/ad hoc)?
- What's the appropriate cadence (weekly/monthly/one-off)?

**Critical: confirm the reporting scope.** The user will typically paste the updates they received — but the updates they didn't receive are equally important.

For first use on a matter, ask: "What's the full list of active workstreams or jurisdictions on this matter?" This establishes the baseline for gap identification.

For subsequent updates, don't demand the full list every time — accept partial updates gracefully: "I'm reporting on [X, Y, Z] based on what you've provided. Flag if there are other active workstreams I should include as no-update-received."

If a matter plan, step plan, or jurisdiction tracker exists (from timeline-generator, reorg-step-plan-builder, or any other source), use that as the authoritative workstream list rather than asking the user to recite it. In connected mode, search SharePoint or the matter site for this. In manual mode, ask the user whether there's an existing plan you should reference.

### Step 2: Extract substantive updates

For each piece of input, extract:
- The factual update (what happened or changed)
- Any dependencies or blockers mentioned
- Any decisions made or needed
- Any financial data
- Any timeline references

Discard: pleasantries, scheduling logistics, repeated information across emails, CC lists, signatures.

### Step 3: Identify gaps

Compare what you have against what a complete status report needs:
- Are all workstreams/jurisdictions covered?
- Is financial data available for the financial section?
- Are there vague updates that need specifics?
- Are there expected updates that are missing?

Flag all gaps to the user before drafting. They may have additional information, or the gaps themselves may be the most important finding.

### Step 4: Assess RAG status

For each workstream and overall:
- Apply the RAG methodology above
- State the reasoning, not just the colour
- For Amber: include a return-to-green plan
- For Red: include an escalation path and remediation plan

### Step 5: Draft the report

Use the appropriate template based on audience and cadence. Apply these principles:
- Lead with the overall assessment
- Progress before problems (but don't bury problems)
- Every problem comes with context and a recommended action
- Financial data is contextualised with variance commentary
- Forward-looking outlook section is substantive, not boilerplate

### Step 6: Review against quality checks

Before presenting the draft:
- Does every section report progress, not just activity?
- Is every RAG status justified with reasoning?
- Are gaps and missing updates explicitly flagged?
- Is variance commentary explaining causes, not just stating numbers?
- For client reports: would anything in here surprise the client? If so, has it been framed appropriately?
- Is every next step and action item dated (even if the date is provisional or "to be confirmed by [date]")?
- Is the report concise enough that a senior stakeholder will actually read it?

**Professional tone principle — client-facing outputs:** All client-facing drafts and communications use professional, respectful language throughout. Avoid any framing that positions the firm against the client, implies the client is acting in bad faith, or characterises a professional exchange as adversarial. Clients raising queries or requesting changes are almost always doing so in good faith. Respond accordingly.

**Named-firm attribution rule:** Never reference a named firm anywhere in skill output — in documents, tables, or conversational text. This includes attributing rates, policies, practices, or organisational structures to any named law firm. The skill does not know any firm's actual structure, rates, or policies. Use "confirm with Pricing", "confirm with Finance", or "firm policy — confirm before applying." The rule applies to everything this skill produces, not just formal documents.

---

## M365 Connected Mode (Optional)

**Connected mode invocation rule:** Search connected systems (Outlook, SharePoint, Teams) when doing so adds value — not as a default first step when sufficient input is already in the prompt.

- **Sufficient input already provided:** User has pasted emails, documents, or data with full context. Engage with what is there. Do not search first — it adds friction without adding information.
- **Input is incomplete or proactive surfacing is warranted:** User references something that should be retrieved ("there's an invoice in Outlook", "it's end of month"), or connected mode is running in background/scheduled mode. Search proactively — this is the inverted invocation model and is the highest-value connected mode behaviour.

The distinction is whether the user has already provided what is needed. If yes, work with it. If no, or if proactive surfacing serves the LPM, search.

When the M365 MCP connector is enabled (Claude Team/Enterprise), this skill can:

- **Search Outlook** for matter-related emails in the reporting period — use matter name, client name, or jurisdiction as search terms to pull status updates, decisions, and escalations from email threads
- **Search Teams channels** for matter-specific updates, particularly useful for matters with dedicated Teams channels where updates may be posted outside email
- **Pull from SharePoint** to access prior reports, budget trackers, or RAID logs that provide baseline data for comparison

Without the connector, provide the same information by pasting email text, call notes, or describing the situation. The skill works identically in both modes — connected mode simply automates the input gathering that the user would otherwise do manually.

## Time-Sensitive Assumptions

This skill contains no jurisdiction-specific regulatory timelines or processing windows. All time-sensitive content relates to the input provided by the user for a specific matter. However, be aware that:

- Budget thresholds and variance tolerance levels vary by firm and client — the 10-15% threshold mentioned above is a common default, not a universal standard
- Reporting cadences (weekly/fortnightly/monthly) should be confirmed against the matter's communication plan rather than assumed
- RAG definitions may vary by firm — some firms use four-level systems (adding Blue for completed) or define thresholds differently

Flag any assumptions you make about these parameters so the user can confirm or adjust them.
