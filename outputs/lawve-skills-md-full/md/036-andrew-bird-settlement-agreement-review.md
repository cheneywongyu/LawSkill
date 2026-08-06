---
id: "1daa3e71-9557-526c-b7ad-8d78963b9db7"
title: "settlement-agreement-review"
title_cn: "和解协议审查"
slug: "settlement-agreement-review"
url: "https://lawve.ai/@andrew-bird/skill/settlement-agreement-review"
author: "Andrew Bird"
author_slug: "andrew-bird"
category: "employment-law"
language: "en"
license: "Apache 2.0"
jurisdictions: "UK"
status: "active"
source_index: 36
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 和解协议审查

原始名称：`settlement-agreement-review`  
作者：Andrew Bird  
分类：employment-law  
来源：https://lawve.ai/@andrew-bird/skill/settlement-agreement-review  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

# 和解协议审查

审查或起草向员工支付费用以解决其索赔的协议，并标记决定该协议是否真正对他们具有约束力的法定条件。

和解协议仅在满足 1996 年 ERA 第 203 条中的累积条件的情况下禁止法定就业索赔；如果错过了一项，员工可以拿走这笔钱，但仍然可以索赔。该技能检查六个条件并标记明显的差距供律师确认，根据当事人（雇主或雇员）的立场审查实质性条款，并揭示税收和可执行性风险。它不裁定有效性，也不是法律建议。

就业律师在签署前检查协议，内部团队审查离职者的条款，员工顾问对聘书进行压力测试。

＃＃ 安装
```bash
git clone https://github.com/b1rdmania/settlement-agreement-review ~/.claude/skills/settlement-agreement-review
```
或者在 [Legalise](https://github.com/b1rdmania/legalise) 工作区中：从技能库中添加它 — 查看清单、授予功能、启用某个事项、从聊天中运行。每次运行都会留下签名的、可审计的记录。

＃＃ 用法
```
/settlement-agreement-review --mode=review --party=employee
/settlement-agreement-review --mode=draft --party=employer
```
根据协议文本和事实运行它：谁要离开、以什么条件、付款明细以及你代表哪一方。在审核模式下，它会返回带有风险标记的标记审核；在草稿模式下，需要完善的干净草稿。

## 它的作用

- 根据 s.203 ERA 的 6 个条件（书面、具体投诉、独立顾问、已确定的顾问、顾问受保、条件声明）检查协议并报告明显状态 - 标记差距以供律师确认。
- 根据当事人的立场审查实质性条款——付款明细、保密和非贬低、参考、保证、限制性契约、索赔表、税务赔偿。
- 根据 ITEPA 2003 提出税务问题，包括 PILON 上的 PENP，每个数字都标记为会计师提示而非权威。
- 输出带有优先更改的评论或干净的草稿。
- 标记每个不确定的内联点 - “[条件差距]”、“[非税务建议]”、“[需要引用]”、“[SME 验证]” - 因此没有任何内容会被视为已解决。

## 它不做什么

- 提供法律建议——它标记了明显的问题，供合格的顾问确认。
- 关于协议是否有效的规则——仅报告明显的第 203 条状态；律师确认有效性。
- 提供员工所需的独立建议——该建议必须来自 ERA 第 203(3A) 条规定的合格顾问。
- 权威地计算税收——每个数字都需要会计师或税务顾问的签字。
- 根据实时来源验证判例法或法规——在依赖之前检查其引用的任何权威。
- 涵盖苏格兰或北爱尔兰（不同的法定框架）。

## 要求

- 克劳德代码或克劳德合作。无需 MCP 连接器。
- 反对的事项：协议文本和周围的事实。

## 许可证

阿帕奇-2.0。

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

# settlement-agreement-review

Reviews or drafts the agreement that pays an employee to settle their claims — and flags the statutory conditions that decide whether it actually binds them.

A settlement agreement only bars statutory employment claims if it satisfies the cumulative conditions in s.203 ERA 1996; miss one and the employee can take the money and still claim. This skill checks the six conditions and flags apparent gaps for a solicitor to confirm, reviews the substantive terms against the party's position (employer or employee), and surfaces the tax and enforceability risks. It does not rule on validity and is not legal advice.

For employment solicitors checking an agreement before sign-off, in-house teams reviewing a leaver's terms, and employees' advisers stress-testing an offer.

## Install

```bash
git clone https://github.com/b1rdmania/settlement-agreement-review ~/.claude/skills/settlement-agreement-review
```

Or in a [Legalise](https://github.com/b1rdmania/legalise) workspace: add it from the skill library — review the manifest, grant capabilities, enable on a matter, run from chat. Every run leaves a signed, auditable record.

## Usage

```
/settlement-agreement-review --mode=review --party=employee
/settlement-agreement-review --mode=draft --party=employer
```

Run it against the agreement text and the facts: who is leaving, on what terms, the payment breakdown, and which side you act for. In review mode it returns a marked-up review with risk flags; in draft mode, a clean draft to refine.

## What it does

- Checks the agreement against the six s.203 ERA conditions (writing, specific complaints, independent adviser, adviser identified, adviser insured, statement of conditions) and reports apparent status — flagging gaps for a solicitor to confirm.
- Reviews the substantive terms — payment breakdown, confidentiality and non-disparagement, reference, warranties, restrictive covenants, claims schedule, tax indemnity — against the party's position.
- Surfaces tax issues under ITEPA 2003, including PENP on a PILON, with every figure marked as an accountant prompt rather than authoritative.
- Outputs either a commented review with prioritised changes or a clean draft.
- Marks every uncertain point inline — `[CONDITION GAP]`, `[NOT TAX ADVICE]`, `[CITE NEEDED]`, `[SME VERIFY]` — so nothing reads as settled.

## What it doesn't do

- Provide legal advice — it flags apparent issues for a qualified adviser to confirm.
- Rule on whether the agreement is valid — it reports apparent s.203 status only; a solicitor confirms validity.
- Provide the independent advice the employee needs — that must come from a qualified adviser per s.203(3A) ERA.
- Compute tax authoritatively — every figure needs accountant or tax counsel sign-off.
- Verify case law or statute against a live source — check any authority it cites before relying on it.
- Cover Scotland or Northern Ireland (different statutory framing).

## Requirements

- Claude Code or Claude Cowork. No MCP connectors required.
- A matter to run against: the agreement text and the surrounding facts.

## License

Apache-2.0.

---

## SKILL.md Original

---
name: "settlement-agreement-review-andrew-bird"
description: "Reviews or drafts the agreement that pays an employee to settle their claims — and flags the statutory conditions that decide whether it actually binds them. Works under s.203 ERA 1996 for England & Wales. Flags apparent s.203 condition gaps for a solicitor to confirm (writing, specific complaints, independent adviser, identification, insurance, statement of conditions), drafts the substantive terms (sum, tax characterisation, confidentiality, references, restrictive covenants, indemnities), and surfaces enforceability risks. Does not rule on validity and is not legal advice. Use when the user says 'review this settlement agreement', 'draft a settlement agreement', 'compromise agreement' (old term), or asks whether an agreement is binding."
argument-hint: "[--mode=review|draft] [--party=employer|employee]"
metadata:
  author: "Andrew Bird"
  license: "apache-2.0"
  version: "2026-06-12"
---

# /settlement-agreement-review

1. Flag apparent gaps against the s.203 ERA 1996 conditions for a solicitor to confirm. This skill does not rule on validity. As legal context: if a condition is genuinely missing, the agreement does not contract out of statutory rights and the employee can still claim — so each gap matters and must be confirmed by a qualified adviser.
2. Review the substantive terms against the party's position (employer or employee).
3. Surface tax issues (ITEPA 2003 — termination payments, PENP). Never present computed figures as authoritative — they are prompts for an accountant to sign off.
4. Output a marked-up version with comments or a clean draft.

---

# Settlement agreement (s.203 ERA 1996)

## Purpose

A settlement agreement is the standard vehicle for compromising employment claims. It must comply with the conditions in s.203 ERA 1996 `[CITE NEEDED — s.203 ERA 1996]` (and equivalent provisions in other statutes — EqA 2010 s.144 `[CITE NEEDED — s.144 EqA 2010]`, TULR(C)A 1992 s.288, etc.) to validly settle the statutory claims it purports to cover. Otherwise the employee remains free to bring a claim. This skill flags apparent gaps in those conditions; it does not rule on whether an agreement is valid — that is for a qualified adviser to confirm.

The other valid vehicle is an ACAS COT3 (recorded by the ACAS conciliator) — no s.203 conditions apply. COT3s are simpler; settlement agreements allow more bespoke terms.

## s.203 statutory conditions (cumulative — all must be satisfied)

1. **In writing.**
2. **Relates to the particular complaint** — generic "all claims" wording without identifying the claims is not enough. List each statutory cause of action by name and section.
3. **Independent adviser** — the employee must have received advice from a "relevant independent adviser" (qualified lawyer, certified trade union official, certified advice centre worker, or other prescribed adviser).
4. **Adviser identified** — name and address in the agreement.
5. **Adviser insured** — a contract of insurance or indemnity provided by a professional body covering the adviser against the risk of loss arising from the advice.
6. **Statement that the conditions are satisfied** — express recital.

As legal context: a genuinely missing condition is fatal — the agreement may still settle contract claims (which don't need s.203 compliance) but won't bar statutory ET claims. Do not treat your read of the conditions as a ruling. Flag any condition that looks missing or doubtful for a solicitor to confirm rather than declaring the agreement invalid.

## Substantive terms — checklist

### Payment

- **Sum** — total compensation payment.
- **Breakdown by head** (every figure below is `[NOT TAX ADVICE — recompute, accountant sign-off]`):
  - Statutory redundancy (s.135 ERA `[CITE NEEDED — s.135 ERA]` — tax-free up to £30k `[SME VERIFY — current £30k threshold]`, doesn't count to PENP).
  - Notice / PILON — taxable as earnings (s.402B ITEPA `[CITE NEEDED — s.402B ITEPA 2003]` — PENP regime).
  - Ex-gratia compensation for loss of office — first £30k tax-free under s.401-403 ITEPA `[CITE NEEDED — s.401-403 ITEPA 2003]` `[SME VERIFY — current £30k threshold]`, balance taxable as employment income.
  - Restrictive covenant payment — taxable as earnings (s.225 ITEPA `[CITE NEEDED — s.225 ITEPA 2003]` — restrictive undertakings).
  - Injury to feelings (discrimination cases) — typically tax-free if causally linked to the discrimination rather than termination (Moorthy litigation `[CITE NEEDED — Moorthy v HMRC]`; HMRC position contested — `[SME VERIFY — current HMRC view]`).
  - Pension contribution.
  - Legal fees contribution (`[SME VERIFY — typical £500-£750 plus VAT]`, paid direct to the adviser).
- **Tax indemnity** — employee indemnifies employer against any further income tax / NICs claimed by HMRC on the termination payment. Standard for employer; employee should resist a broad indemnity that catches tax the employer should have deducted.
- **Payment date** — typically within 14-28 days of the termination date / signature.

### Confidentiality and non-disparagement

- Mutual non-disparagement preferred from employee's side.
- Confidentiality — usually two-way; carve-outs for spouse/partner, professional advisers, regulators (whistleblowing — must not gag protected disclosures, see s.43J ERA `[CITE NEEDED — s.43J ERA 1996]`), HMRC, and court orders. Recent law has tightened on NDAs in discrimination/harassment cases — `[CITE NEEDED — Victims and Prisoners Act 2024]` `[SME VERIFY — Victims and Prisoners Act 2024 NDA restrictions in regulated professions]`.

### Reference

- Agreed wording attached as a schedule.
- "Factual reference only" is a common employer position. Employee should push for a positive agreed reference.
- Obligation on employer to give substantially the same reference to any future enquirer for [X years / indefinitely].

### Warranties and reps

- Employee typically warrants no other unresolved complaints and no knowledge of any matter that would give rise to a complaint.
- Employee returns property, deletes data.
- Employee waives reinstatement / re-engagement.

### Restrictive covenants

- Either confirm existing covenants remain in force (employer position), or release them (employee position).
- Garden leave already served counts against post-termination restraint enforceability.

### Claims covered

- List each statutory claim by name. Generic "all claims" tail is acceptable as a backstop but does not save a missing specific complaint.
- Carve-outs (standard): accrued pension rights, personal injury (latent / unknown), enforcement of the agreement itself.

### Governing law / jurisdiction

- Laws of England and Wales. Exclusive jurisdiction of E&W courts (with ET retained jurisdiction over the underlying employment claims pending settlement).

## Workflow

### Step 1 — Apparent statutory status (flag, do not rule)

Run through the s.203 checklist. Flag any condition that appears missing or doubtful for a solicitor to confirm. Do not declare the agreement valid or invalid — report apparent status only.

### Step 2 — Substantive review

Walk through each substantive term against the checklist. Flag terms that are unusual, missing, or commercially adverse to the user's side.

### Step 3 — Tax review

Review the breakdown. If PILON is being paid, work the PENP formula as a cross-check only — `[NOT TAX ADVICE — recompute, accountant sign-off]` on the result and on every figure. PENP formula: (BP × D) / P — where BP = basic pay in pay period before notice, D = days in unworked notice, P = days in pay period `[SME VERIFY — s.402D ITEPA formula and definitions]`. Do not present the computed PENP or any net figure as authoritative; it is a prompt for an accountant.

### Step 4 — Mark up

Output either: (a) commented review with risk flags, or (b) clean draft.

## Output (review mode)

Render the sections below as the finished review — do not echo this template back, and do not invent terms to fill a section; if the agreement is silent on a head, say so. Lead with the not-legal-advice line.

A reviewer-note line: *not legal advice; flags apparent issues only; verify with a solicitor before relying on anything below; this skill does not rule on the validity of the agreement.*

**Apparent s.203 status** (s.203 ERA / s.144 EqA) — a table of the six conditions, each marked Present / Apparently missing / Unclear, with a note. Then one line: **Apparent status (verify with a solicitor): [conditions appear satisfied / [N] condition(s) appear missing — confirm with a solicitor].** Never state "Valid" or "Invalid".

The conditions to check:

- In writing
- Specific complaints identified (note any that appear missing)
- Independent adviser
- Adviser named and addressed
- Adviser insured (recital)
- s.203 conditions satisfied (recital)

**Substantive review** — a table by clause (payment breakdown, confidentiality, reference, warranties, restrictive covenants, claims schedule, tax indemnity): position, risk to the user's side, suggested change.

**Tax analysis** — every figure carries `[NOT TAX ADVICE — recompute, accountant sign-off]`. Cover PILON / PENP, s.401-403 ITEPA treatment, other heads, and any net-to-employee estimate — all as prompts for an accountant, never as authoritative figures.

**Recommended changes** — numbered list of specific edits in priority order.

**Markers used inline** as you go:

- `[CONDITION GAP — flag for solicitor to confirm]` — a s.203 condition that appears missing or doubtful (not a ruling that the agreement is invalid).
- `[NOT TAX ADVICE — recompute, accountant sign-off]` — on every tax figure.
- `[CITE NEEDED — authority]` — a statute or case referenced without a verified citation.
- `[SME VERIFY — item]` — a threshold, market figure, or contested position counsel should confirm (e.g. HMRC view on injury-to-feelings tax; Victims and Prisoners Act 2024 NDA restrictions; PENP figures).

## What this skill does not do

- Provide legal advice. It flags apparent issues for a qualified adviser to confirm.
- Rule on the validity of the agreement. It reports apparent s.203 status only — a solicitor confirms validity.
- Provide the independent advice the employee needs — that must come from a qualified adviser per s.203(3A) ERA 1996 `[CITE NEEDED — s.203(3A) ERA 1996]`.
- Compute tax authoritatively. Every figure needs accountant / tax counsel sign-off.
- Verify case law or statute against a live source — check any authority it cites before relying on it.
- Cover Scotland / NI (different statutory framing).
