---
id: "d472abef-8600-5f66-966f-6249dd3ca7f2"
title: "cpr-letter-drafter"
title_cn: "CPR 信件起草人"
slug: "cpr-letter-drafter"
url: "https://lawve.ai/@andrew-bird/skill/cpr-letter-drafter"
author: "Andrew Bird"
author_slug: "andrew-bird"
category: "litigation"
language: "en"
license: "MIT"
jurisdictions: "UK"
status: "active"
source_index: 45
readme_path: "README.md"
skill_path: "SKILL.md"
---

# CPR 信件起草人

原始名称：`cpr-letter-drafter`  
作者：Andrew Bird  
分类：litigation  
来源：https://lawve.ai/@andrew-bird/skill/cpr-letter-drafter  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

# cpr 信函起草者

根据索赔的*正确*预诉讼协议，撰写您在英格兰和威尔士民事案件中起诉某人之前发送的正式信函（启动预诉讼时钟的索赔前信函）。

适用的协议（债务、专业疏忽、房屋年久失修、人身伤害或行动前行为的默认实践指示）会改变规则，而普通信件会忽略这些规则。对于初级诉讼人员、内部法律顾问和没有先例银行可借鉴的小律师事务所来说：它抓住了一般草案所跳过的内容——30 天的债务索赔响应窗口、专业过失初步通知——然后是索赔信的顺序——并标记了律师确认的时效日期，而不是将其陈述为事实。

## 安装

[claude-for-uk-legal](https://github.com/b1rdmania/claude-for-uk-legal) 插件套件的一部分：
```bash
/plugin marketplace add https://github.com/b1rdmania/claude-for-uk-legal
/plugin install uk-litigation-legal@claude-for-uk-legal
```
或者直接安装单个技能：
```bash
cp -r cpr-letter-drafter ~/.claude/skills/cpr-letter-drafter
```
＃＃ 用法
```
/cpr-letter-drafter
/cpr-letter-drafter --protocol=debt
/cpr-letter-drafter --protocol=prof-neg
```
针对与当事人有关的事项、诉讼原因、时间顺序、损失明细以及要披露的文件进行运行。它识别适用的协议（或默认为 PACC），检查限制门，并返回按照协议期望的方式构建的起草的 LBC。

例子：
```
/cpr-letter-drafter --protocol=debt

Claimant: Acme Supplies Ltd. Defendant: J. Khan (sole trader).
Unpaid invoices totalling £18,400 plus contractual interest.
Contract formed 12 Jan 2025; last payment received 3 Mar 2025.
```
它会返回一份债务索赔协议信函，其中包含 30 天的回复窗口、所需的信息表和回复表格参考、账户报表以及供律师确认的限制标记。

## 它的作用

- 确定是否适用特定的行动前协议，或者是否适用关于行动前行为和协议 (PACC) 的默认实践指示。
- 应用该框架的时间安排、内容和披露要求，例如 30 天债务窗口，或专业过失初步通知然后索赔信的顺序。
- 起草当事人的信函、事实、适用于其要素的索赔标题、具体损失及利息、文件、ADR 信号、响应要求和费用。
- 将明显的限制日期显示为“[律师：确认限制日期]”标记，从未作为已确定的事实，并标记应计假设和例外情况。
- 如果此事继续下去，将导致 CPR 第 36 部分和第 44 部分的费用后果。
- 内联标记不确定点 - `[律师：确认 X]`、`[协议]`、`[SME VERIFY]`、`[CITE NEEDED]` — 因此没有任何内容读作已解决。

## 它不做什么

- 发出索赔。 LBC 处于行动前阶段。
- 采用苏格兰或北爱尔兰程序。
- 取代律师关于是否在限制严格的情况下发出保护性要求的呼吁。
- 保证或证明合规性。输出的样式遵循相关协议；在发送之前验证其当前内容、时间安排和附件要求。
- 设置限位位置。它使用的期间是一般默认值；应计日期和例外情况必须由律师检查。

这是供律师审查的草案，而不是法律建议。负责处理此事的律师负责遵守规定以及以公司名义发出的信息。

## 要求

- 克劳德代码或克劳德合作。无需 MCP 连接器。
- 反对的事项——当事人、诉讼理由、时间顺序、损失明细以及要披露的文件。

## 许可证

阿帕奇-2.0。

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

# cpr-letter-drafter

Writes the formal letter you send before suing someone in a civil case in England & Wales — the Letter Before Claim that starts the pre-action clock — under the *right* pre-action protocol for the claim.

Which protocol applies (debt, professional negligence, housing disrepair, personal injury, or the default Practice Direction on Pre-Action Conduct) changes the rules, and a generic letter misses them. For litigation juniors, in-house counsel, and small firms without a precedent bank to copy from: it catches what a general draft skips — the 30-day debt-claim response window, the professional-negligence preliminary-notice-then-letter-of-claim sequence — and flags the limitation date for a solicitor to confirm rather than stating it as fact.

## Install

Part of the [claude-for-uk-legal](https://github.com/b1rdmania/claude-for-uk-legal) plugin suite:

```bash
/plugin marketplace add https://github.com/b1rdmania/claude-for-uk-legal
/plugin install uk-litigation-legal@claude-for-uk-legal
```

Or install the single skill directly:

```bash
cp -r cpr-letter-drafter ~/.claude/skills/cpr-letter-drafter
```

## Usage

```
/cpr-letter-drafter
/cpr-letter-drafter --protocol=debt
/cpr-letter-drafter --protocol=prof-neg
```

Run it against a matter with the parties, cause of action, chronology, loss breakdown, and documents to disclose. It identifies the applicable protocol (or defaults to PACC), checks the limitation gate, and returns a drafted LBC structured the way that protocol expects.

Example:

```
/cpr-letter-drafter --protocol=debt

Claimant: Acme Supplies Ltd. Defendant: J. Khan (sole trader).
Unpaid invoices totalling £18,400 plus contractual interest.
Contract formed 12 Jan 2025; last payment received 3 Mar 2025.
```

It returns a Debt Claims Protocol letter with the 30-day response window, the required information sheet and reply form references, a statement of account, and a limitation marker for the solicitor to confirm.

## What it does

- Identifies whether a specific pre-action protocol applies or whether the default Practice Direction on Pre-Action Conduct and Protocols (PACC) governs.
- Applies that framework's timing, content, and disclosure requirements — for example the 30-day debt window, or the professional negligence preliminary-notice-then-letter-of-claim sequence.
- Drafts the letter with the parties, facts, claim heads applied to their elements, particularised loss with interest, documents, ADR signal, response requirements, and costs.
- Surfaces the apparent limitation date as a `[SOLICITOR: confirm limitation date]` marker, never as settled fact, and flags accrual assumptions and exceptions.
- Surfaces CPR Part 36 and Part 44 costs consequences if the matter proceeds.
- Marks uncertain points inline — `[SOLICITOR: confirm X]`, `[PROTOCOL]`, `[SME VERIFY]`, `[CITE NEEDED]` — so nothing reads as settled.

## What it doesn't do

- Issue the claim. The LBC is pre-action.
- Apply Scottish or Northern Irish procedure.
- Replace counsel's call on whether to issue protectively where limitation is tight.
- Guarantee or certify compliance. The output is styled to follow the relevant protocol; verify its current content, timing, and enclosure requirements before sending.
- Settle the limitation position. The periods it uses are general defaults; the accrual date and exceptions must be checked by a solicitor.

This is a draft for solicitor review, not legal advice. A solicitor with conduct of the matter is responsible for compliance and for what goes out under the firm's name.

## Requirements

- Claude Code or Claude Cowork. No MCP connectors required.
- A matter to run against — parties, cause of action, chronology, loss breakdown, and the documents to disclose.

## License

Apache-2.0.

---

## SKILL.md Original

---
name: "cpr-letter-drafter-andrew-bird"
description: "Writes the formal letter you send before suing someone in a civil case in England & Wales — the Letter Before Claim that starts the pre-action clock. The part it gets right is which pre-action protocol applies — debt, professional negligence, housing disrepair, personal injury, or the default Practice Direction on Pre-Action Conduct — each of which has its own rules a generic letter misses (the 30-day debt window, the professional-negligence preliminary-notice step). It also flags the limitation deadline for a solicitor to confirm rather than stating it as fact. Built for litigation juniors, in-house counsel, and small firms without a precedent to copy. Use when the user says 'draft an LBC', 'letter before claim', 'pre-action letter', 'pre-action protocol', or needs to start the pre-action clock before issuing a civil claim. Verify the current protocol before sending."
argument-hint: "[--protocol=auto|pacc|debt|prof-neg|disrepair|pi|other]"
metadata:
  author: "Andrew Bird"
  license: "mit"
  version: "2026-06-09"
---

# /cpr-letter-drafter

1. Identify whether a specific pre-action protocol applies (debt, professional negligence, housing disrepair, personal injury, construction, judicial review, etc.) or whether the default Practice Direction — Pre-Action Conduct and Protocols (PACC) applies.
2. Apply the relevant timing, content, and disclosure requirements.
3. Draft the LBC with the structure that protocol expects.
4. Surface costs and CPR Part 36 consequences if the matter proceeds.

---

# Letter Before Claim (England & Wales civil)

## Purpose

The pre-action regime narrows issues, encourages settlement, and exposes parties who don't engage to costs sanctions. Non-compliance with PACC or a specific protocol can result in:

- Stay of proceedings until compliance.
- Adverse costs orders (CPR 44).
- Lost interest entitlement.
- Adverse inferences on conduct under CPR 44.2.

## Choosing the framework

| Claim type | Protocol |
|---|---|
| Debt claim where debtor is an individual (incl. sole trader) | Pre-Action Protocol for Debt Claims (Oct 2017) |
| Professional negligence (solicitors, accountants, surveyors, etc.) | Pre-Action Protocol for Professional Negligence |
| Personal injury (≤ £25k portal; > £25k or non-portal) | Pre-Action Protocol for Personal Injury Claims |
| Housing disrepair | Pre-Action Protocol for Housing Disrepair Claims |
| Construction & Engineering | Pre-Action Protocol for Construction and Engineering Disputes |
| Judicial review | Pre-Action Protocol for Judicial Review |
| Defamation | Pre-Action Protocol for Defamation |
| Possession claims | Pre-Action Protocol for Possession Claims by Social Landlords (where applicable) |
| Anything else | Practice Direction on Pre-Action Conduct and Protocols (PACC) — default |

## PACC core requirements (default)

- Concise summary of the claim.
- Basis on which the claim is made.
- Summary of facts.
- What the claimant wants.
- If money: how it is calculated.
- Reasonable period for response (typically 14 days for a simple claim, up to 3 months for a complex one).
- Documents the claimant relies on.
- An indication of an intention to use ADR if response is inadequate.

## Debt Claims Protocol specifics

- Information sheet and reply form must accompany the letter.
- 30 days for the debtor to respond (longer than PACC default).
- Debtor's response form options: I dispute / I admit / I admit in part / I need time / I want ADR.
- Statement of account (if interest or charges added) must be provided.
- Cannot start proceedings until 30 days after the LBC (or longer if debtor reasonably needs time).

## Professional Negligence Protocol specifics

- Preliminary notice (no detailed allegations) first. Recipient acknowledges within 21 days.
- Then Letter of Claim with detailed allegations.
- 3 months for the Letter of Response.
- Encourages mutual disclosure and joint experts.

## Inputs

- Parties (claimant, defendant — Companies House for limited companies; trading name is not enough).
- Cause of action (contract, tort, statutory).
- Facts (chronology).
- Loss / remedy (with breakdown).
- Documents to disclose with the LBC.
- Whether ADR is proposed.
- Time pressure (limitation looming?).

## Limitation gate

These are **general defaults only** — the periods below are starting points, not a settled limitation opinion. The accrual date and any exceptions must be checked by a solicitor for the specific facts.

- Most contract and tort claims: 6 years (Limitation Act 1980 s.5, s.2).
- Personal injury: 3 years (s.11).
- Latent damage: special rules (s.14A — 3 years from knowledge / 15-year long-stop).
- Judicial review: promptly and in any event within 3 months (CPR 54.5).
- Defamation: 1 year (s.4A).

Do **not** state a computed latest-issue date as fact. Exceptions and adjustments that move the date — s.32 deliberate concealment/fraud/mistake, s.14A date of knowledge, contractual variation of the limitation period, contribution claims (s.10), disability, acknowledgment/part payment (s.29) — must be checked by a solicitor before anyone relies on the date.

The LBC does **not** stop limitation. If limitation is near, issue protectively and consider a stay for pre-action compliance.

Surface the computed date as something to confirm, never assert: `[SOLICITOR: confirm limitation date — primary limit appears to expire [date]; check accrual + exceptions; consider protective issue]`.

## Workflow

### Step 1 — Identify protocol
From the claim type. If unclear, default to PACC.

### Step 2 — Limitation check
Surface the apparent latest issue date as a `[SOLICITOR: confirm limitation date]` marker — never as a settled fact. Flag the accrual assumption and any exception that could move it.

### Step 3 — Draft per protocol
Use the relevant template.

### Step 4 — Disclosure with LBC
Identify documents to enclose. Limited disclosure at LBC stage; full disclosure later.

### Step 5 — ADR signal
PACC and most protocols require parties to consider ADR. Stating willingness in the LBC is standard. Refusal to engage in ADR can be costs-penalised (Halsey v Milton Keynes General NHS Trust [2004] EWCA Civ 576); the position was recalibrated in Churchill v Merthyr Tydfil County Borough Council [2023] EWCA Civ 1416, where the Court of Appeal held a court may lawfully stay proceedings to require parties to engage in ADR. Confirm the current ADR-costs position before relying on it.

## Output template (PACC default)

Render the sections below as the finished letter — do not echo this template back, and do not leave bracketed placeholders unfilled. If a value is unknown, insert a clearly-marked `[SOLICITOR: confirm X]` rather than guessing. Any case-law or rule reference the model cannot pin to a section or citation should be marked `[CITE NEEDED — authority]` rather than stated as settled.

[Solicitor letterhead]

[Date]

[Defendant name]
[Address]

**BY EMAIL AND POST**

Dear Sirs,

**Re: [Claimant name] — Letter Before Claim**

We act for [Claimant]. We are writing in accordance with the Practice Direction — Pre-Action Conduct and Protocols [or the relevant protocol].

**Limitation notice:** The primary limitation period for the claim described below appears to expire on `[SOLICITOR: confirm limitation date]`.

## 1. The parties

[Claimant — full legal name, address. Defendant — full legal name, registered office (for companies).]

## 2. Facts

[Numbered chronology of material facts.]

## 3. The claim

[For each cause of action — contract, tort, statutory — state the basis and apply the facts to the elements.]

- **Breach of contract:** The contract was [terms / when formed]. The Defendant breached clause [X] by [act / omission]. The breach caused the loss particularised below.
- **Negligence:** The Defendant owed our client a duty of care because [...]. It breached that duty by [...]. The breach caused [...].
- **Statutory:** [Cite the statute and section, plead the elements, apply the facts.]

## 4. Loss and damage

[Particularised loss with computation.]

- Head 1: [...] £[X]
- Head 2: [...] £[Y]
- Interest under s.35A Senior Courts Act 1981 / s.69 County Courts Act 1984 (or contractual rate if applicable).

**Total: £[Z]**

## 5. Documents

Enclosed:
- [Documents the claimant relies on.]

Please provide:
- [Documents requested from the defendant.]

## 6. ADR

Our client is willing to consider ADR (including mediation). Please indicate within your response whether your client is willing to engage and, if so, your preferred form and timing.

## 7. Response

Please provide a Letter of Response within [21 days / per protocol]. The response should:
- Accept or deny the claim.
- State the facts and matters relied on.
- Identify documents relied on.
- Address the proposal on ADR.

## 8. Costs

If proceedings are issued and our client succeeds, costs will be sought under CPR Part 44. Our client reserves the right to make a CPR Part 36 offer, or a without-prejudice-save-as-to-costs (Calderbank v Calderbank [1976] Fam 93) offer, at any stage.

Yours faithfully,

[Signature]

## Markers

- `[SOLICITOR: confirm limitation date]` — the computed latest-issue date; always confirm, never assert.
- `[PROTOCOL — [name] applies; consider preliminary notice / 30-day debt window / 3-month prof-neg response]`
- `[SME VERIFY — protocol amendments]` — protocol wording or timing the model is unsure is current.
- `[CITE NEEDED — authority]` — a case or rule referenced without a verified citation; check before relying on it.

## What this skill does not do

- Issue the claim. The LBC is pre-action.
- Apply Scottish / NI procedure.
- Replace counsel's call on whether to issue protectively where limitation is tight.
- Guarantee or enforce compliance. The output is styled to follow the PACC or the relevant protocol; it does not certify that the letter is compliant. Verify the current protocol's content, timing, and enclosure requirements before sending.
- Settle the limitation position. The periods in this skill are general defaults; the accrual date and exceptions must be checked by a solicitor.

This is a draft for solicitor review, not legal advice. Verify every citation and the limitation position with counsel before the letter is sent. A solicitor with conduct of the matter — not this prompt — is responsible for compliance and for what goes out under the firm's name.
