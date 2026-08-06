---
id: "8e37c5d6-2f9c-50fd-8ef4-9a5aead886a2"
title: "unfair-dismissal-screener"
title_cn: "不公平解雇筛选器"
slug: "unfair-dismissal-screener"
url: "https://lawve.ai/@andrew-bird/skill/unfair-dismissal-screener"
author: "Andrew Bird"
author_slug: "andrew-bird"
category: "employment-law"
language: "en"
license: "MIT"
jurisdictions: "UK"
status: "active"
source_index: 38
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 不公平解雇筛选器

原始名称：`unfair-dismissal-screener`  
作者：Andrew Bird  
分类：employment-law  
来源：https://lawve.ai/@andrew-bird/skill/unfair-dismissal-screener  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

# 不公平解雇筛选器

根据英格兰和威尔士不公平解雇框架筛选解雇（提议的或已经完成的），并显示其暴露的位置。

大多数驳回案件在法庭上失败的原因是程序而非实质内容。该技能构建了资格服务问题，检查不需要资格期的自动不公平类别，并构建了 Burchell / Polkey / 合理响应范围分析，然后提出了具体的程序缺陷 - 作为律师验证的草案，而不是公平性的确定。雇主在解雇前决定是否继续进行，以及双方在解雇后评估预期索赔的强度。

＃＃ 安装
```bash
git clone https://github.com/b1rdmania/unfair-dismissal-screener ~/.claude/skills/unfair-dismissal-screener
```
或者在 [Legalise](https://github.com/b1rdmania/legalise) 工作区中：从技能库中添加它 — 查看清单、授予功能、启用某个事项、从聊天中运行。每次运行都会留下签名的、可审计的记录。

＃＃ 用法
```
/unfair-dismissal-screener
/unfair-dismissal-screener --mode=pre-dismissal
/unfair-dismissal-screener --mode=post-dismissal
```
针对包含开始日期、终止生效日期、雇主预付款的原因以及遵循的程序的事项进行审查。它返回一个结构化的屏幕：资格、原因、实质性和程序公平性、指示性风险评分以及说明性补偿范围。

## 它的作用

- 制定资格赛门（第 108 条 ERA）并检查没有资格赛期的自动不公平头球。
- 确定提出的潜在合理理由（第 98(2) 条）及其是否真实。
- 根据合理反应的范围，构建行为案例的 Burchell 分析——真实的信念、合理的理由、合理的调查。
- 构建 Polkey 问题和 ACAS 代码提升，并将其引入说明性补偿范围。
- 生成一个具有可见推理的指示性风险评分，并标记每个内嵌的不确定点——“[CITE NEEDED]”、“[SME VERIFY]”——因此没有任何内容被视为已解决。

## 它不做什么

- 确定公平性——这是法庭对提示从未见过的事实和证人的要求。
- 预测结果——风险评分是指示性的，而不是经过校准的概率。
- 提供法律建议——这是供律师审查的筛选草案，律师拥有结论。
- 精确量化养老金损失，或详细涵盖裁员选择标准的挑战。
- 覆盖苏格兰或北爱尔兰。
- 根据实时来源验证法规或判例法 - 检查每个引文并在依赖之前重新计算每个数字。

## 要求

- 克劳德代码或克劳德合作。无需 MCP 连接器。
- 反对的事项（解雇事实、提出的理由、遵循的程序）。

## 许可证

阿帕奇-2.0。

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

# unfair-dismissal-screener

Screens a dismissal — proposed or already done — against the England & Wales unfair dismissal framework, and shows where it is exposed.

Most dismissals fail in the tribunal on process, not substance. This skill frames the qualifying-service question, checks the automatically-unfair categories that need no qualifying period, and structures the Burchell / Polkey / band-of-reasonable-responses analysis, then surfaces the specific procedural defects — as a draft for a solicitor to verify, not a determination of fairness. For employers deciding whether to proceed before a dismissal, and either side assessing the strength of a prospective claim after one.

## Install

```bash
git clone https://github.com/b1rdmania/unfair-dismissal-screener ~/.claude/skills/unfair-dismissal-screener
```

Or in a [Legalise](https://github.com/b1rdmania/legalise) workspace: add it from the skill library — review the manifest, grant capabilities, enable on a matter, run from chat. Every run leaves a signed, auditable record.

## Usage

```
/unfair-dismissal-screener
/unfair-dismissal-screener --mode=pre-dismissal
/unfair-dismissal-screener --mode=post-dismissal
```

Run it against a matter with the start date, effective date of termination, the reason the employer advances, and the procedure followed. It returns a structured screen: eligibility, reason, substantive and procedural fairness, an indicative risk score, and an illustrative compensation range.

## What it does

- Frames the qualifying-service gate (s.108 ERA) and checks for automatically-unfair heads with no qualifying period.
- Identifies the potentially fair reason advanced (s.98(2)) and whether it is genuine.
- Structures the Burchell analysis for conduct cases — genuine belief, reasonable grounds, reasonable investigation — against the band of reasonable responses.
- Structures the Polkey question and the ACAS Code uplift, and carries them through to an illustrative compensation range.
- Produces an indicative risk score with the reasoning visible, and marks every uncertain point inline — `[CITE NEEDED]`, `[SME VERIFY]` — so nothing reads as settled.

## What it doesn't do

- Determine fairness — that is the Tribunal's call on facts and witnesses the prompt never sees.
- Predict the outcome — the risk score is indicative, not a calibrated probability.
- Give legal advice — it is a draft screen for solicitor review, and a solicitor owns the conclusion.
- Quantify pension loss precisely, or cover redundancy selection-criteria challenges in detail.
- Cover Scotland or Northern Ireland.
- Verify statute or case law against a live source — check every citation and recompute every figure before relying on it.

## Requirements

- Claude Code or Claude Cowork. No MCP connectors required.
- A matter to run against (the dismissal facts, the reason advanced, the procedure followed).

## License

Apache-2.0.

---

## SKILL.md Original

---
name: "unfair-dismissal-screener-andrew-bird"
description: "Screens a dismissal — proposed or already done — against the unfair dismissal framework for England & Wales, and shows where it is exposed. Structures the qualifying-service question, the automatically-unfair categories (no qualifying period), and a Burchell / Polkey / band-of-reasonable-responses analysis for a solicitor to verify — it does not determine fairness. Surfaces specific procedural risks. Use when the user says 'is this unfair', 'screen this dismissal', 'ordinary unfair dismissal', 'automatic unfair dismissal', or wants a structured fairness review before or after dismissal."
argument-hint: "[--mode=pre-dismissal|post-dismissal]"
metadata:
  author: "Andrew Bird"
  license: "mit"
  version: "2026-06-12"
---

# /unfair-dismissal-screener

This skill structures an analysis for a solicitor to verify. It does not determine whether a dismissal was fair — that is the Tribunal's call, on facts and witnesses this prompt never sees.

1. Frame the qualifying service question (s.108 ERA): two years continuous service, **unless** the dismissal falls within an automatically unfair category (no qualifying period required).
2. Identify the potentially fair reason advanced (s.98(2)): conduct, capability, redundancy, illegality, some other substantial reason. If none, s.98(1) — burden on employer to show fair reason.
3. Structure the Burchell analysis (conduct cases): reasonable belief, reasonable investigation, dismissal within the band of reasonable responses.
4. Structure the Polkey question (procedural fairness): if the dismissal was procedurally unfair, what was the chance it would have happened anyway? Reduces compensatory award.
5. Note the ACAS Code position: failure to follow can produce up to 25% uplift (s.207A TULR(C)A 1992).
6. Output an indicative risk score with the reasoning visible — for a solicitor to check, not a prediction.

Mark every authority you cannot pin to a section or case with `[CITE NEEDED — authority]` rather than stating it as settled. Verify each citation before relying on it.

---

# Unfair dismissal screener

## Purpose

Quick, structured fairness assessment. Pre-dismissal: helps an employer decide whether to proceed. Post-dismissal: helps either side assess the strength of a prospective claim.

## Qualifying service gate (s.108 ERA 1996)

Default rule: ordinary unfair dismissal requires **two years' continuous service** (effective from 6 April 2012 for employees who started on or after that date).

**No qualifying period applies if** the dismissal is automatically unfair, including (non-exhaustive).

The statute references below are a starting checklist, not authority. Verify each citation against the live source before relying on it, and mark any you cannot confirm `[CITE NEEDED — authority]`. Items turning on pending or recent legislation are marked `[SME VERIFY]`.

| Category | Statute |
|---|---|
| Whistleblowing — disclosure under s.43B ERA | s.103A ERA |
| Trade union membership or activities | s.152 TULR(C)A 1992 |
| Pregnancy, maternity, parental leave | s.99 ERA |
| Health and safety — designated representative, raising concern | s.100 ERA |
| Asserting a statutory right | s.104 ERA |
| Working Time Regulations | s.101A ERA |
| National Minimum Wage | s.104A ERA |
| TUPE — for ETO reason or in connection with transfer | reg 7 TUPE 2006 |
| Family-friendly rights (paternity, adoption, flexible working request, etc.) | various ERA sections |
| Spent convictions | s.4(3)(b) Rehabilitation of Offenders Act 1974 |
| Jury service | s.98B ERA |
| Discriminatory dismissal | EqA 2010 (which is a separate cause of action — but the dismissal is also "automatically unfair" in effect — plead both) |

`[SME VERIFY]` The Employment Rights Bill 2024–25 is expected to introduce day-one unfair dismissal rights subject to a statutory probation period — this is time-sensitive and may have changed. Confirm the current status, commencement date, and probationary regime before relying on it. `[SME VERIFY — Employment Rights Act 2025 implementation date and probationary regime]`.

## Potentially fair reasons (s.98(2) ERA)

1. Conduct
2. Capability or qualifications
3. Redundancy (specific s.139 definition)
4. Illegality (continued employment would contravene a statutory restriction)
5. Some other substantial reason (SOSR) — catch-all for genuine business reasons not in the first four

The employer must show **the reason** (s.98(1)). The Tribunal then decides whether the dismissal was fair "having regard to the reason shown" (s.98(4)).

## Burchell test (conduct dismissals — British Home Stores v Burchell)

Three limbs:

1. The employer must have a **genuine belief** in the employee's misconduct.
2. The belief must be based on **reasonable grounds**.
3. The employer must have carried out a **reasonable investigation**.

Each limb is assessed by reference to the band of reasonable responses test (Iceland Frozen Foods v Jones — would a reasonable employer in those circumstances have come to that conclusion?). The Tribunal does not substitute its own view.

## Polkey (procedural fairness — Polkey v A.E. Dayton Services)

A dismissal that was substantively justifiable but procedurally unfair is **unfair**, but the compensatory award is reduced by the percentage chance that the employee would have been dismissed in any event had a fair procedure been followed (the "Polkey reduction").

A 100% Polkey reduction (no compensation but still a finding of unfair dismissal) is possible.

## ACAS Code uplift

Failure to follow the ACAS Code of Practice on Disciplinary and Grievance Procedures — applies to conduct and performance dismissals, not redundancy / SOSR — can result in up to **25% uplift** on compensation (s.207A TULR(C)A 1992). Conversely, an employee's unreasonable failure to follow the Code can result in a 25% reduction.

## Workflow

### Step 1 — Eligibility

Qualifying service: yes / no. If no, is there an automatically unfair head? If neither, ordinary unfair dismissal claim is unavailable. Test for discrimination (EqA 2010) which has no qualifying period.

### Step 2 — Reason

What reason does the employer say? Is it within s.98(2)? Note: pretextual reasons fail at this stage — burden on employer.

### Step 3 — Fairness

Apply the relevant framework (Burchell for conduct, capability cases follow a similar pattern with warnings + improvement opportunity; redundancy has its own framework — pool, selection criteria, consultation, suitable alternative employment per Williams v Compair Maxam).

### Step 4 — Procedure

ACAS Code compliance. Investigation, invitation, hearing, right to be accompanied (s.10 Employment Relations Act 1999), decision, right of appeal. Each is a discrete procedural step; failure of any is a procedural defect.

### Step 5 — Polkey + ACAS adjustments

Estimate Polkey % and ACAS uplift, and carry them through to an illustrative compensation range. Any arithmetic here (basic award, compensatory award, Polkey reduction, ACAS uplift) is illustrative only — recompute against current statutory caps and the week's-pay figure before quoting to a client.

### Step 6 — Output

An indicative risk score with the reasoning visible — for a solicitor to verify, not a prediction.

## Output

Produce these sections as the finished screen. Do not echo this template back, and do not invent facts to fill a section — if a fact is unknown, say so. Mark uncertainty inline as you go: `[CITE NEEDED — authority]` for any rule or case you cannot pin to a section or citation, `[SME VERIFY — point]` for time-sensitive, borderline, or solicitor-call items.

# Unfair Dismissal Screen — [Employee name]

## Eligibility

- Start date: [YYYY-MM-DD]
- EDT: [YYYY-MM-DD]
- Continuous service: [X years Y months]
- **Qualifies for ordinary unfair dismissal (s.94 ERA):** [yes/no]
- Automatic unfair heads in play: [list, with statute]
- EqA discrimination overlay: [yes/no — protected characteristic]

## Reason advanced by employer

- Reason: [conduct / capability / redundancy / illegality / SOSR]
- Stated basis: [...]
- Is the reason genuine? [...]

## Fairness analysis

### Substantive (Burchell for conduct):
- Genuine belief: [...]
- Reasonable grounds: [...]
- Reasonable investigation: [...]
- Within band of reasonable responses: [...]

### Procedural (ACAS Code):
- Investigation: [...]
- Written notice of allegation: [...]
- Hearing with right to be accompanied: [...]
- Decision in writing: [...]
- Right of appeal: [...]

## Risk score (indicative)

| Factor | Position |
|---|---|
| Substantive fairness | Strong / Borderline / Weak |
| Procedural fairness | Strong / Borderline / Weak |
| Polkey reduction estimate | [%] |
| ACAS uplift estimate | [%] |

**Overall risk to employer (indicative — for a solicitor to verify, not a prediction): [Low / Medium / High]**

## Compensation range (illustrative — recompute before quoting to a client)

Figures below are illustrative working only. Recompute against the current statutory cap and week's-pay figure before relying on them. `[SME VERIFY — current statutory cap and week's pay]`

- Basic award (s.119 ERA): £[X]
- Compensatory award (s.123 ERA, capped per s.124): £[Y] — range reflecting Polkey
- ACAS uplift: + [up to 25%]
- Illustrative range: £[low] – £[high]

## Recommended actions

- [Pre-dismissal: fix specific procedural defects before proceeding.]
- [Post-dismissal: settlement window / appeal outcome / ET1 strategy.]

## Markers
- `[SME VERIFY — current statutory cap, week's pay, ERB 2025 status]`

## What this skill does not do

- Determine fairness. Whether a dismissal was fair is the Tribunal's call on facts, witnesses, and evidence this prompt never sees. The screen structures the analysis; it does not decide it.
- Predict the outcome. The risk score is indicative — a structured read for a solicitor to verify, not a calibrated probability or a forecast.
- Give legal advice. This is a draft screen for solicitor review, not advice to any party. A qualified solicitor must check every citation, recompute every figure, and own the conclusion before it goes to a client.
- Replace a formal opinion. It is a structured prompt for that conversation, not a substitute for it.
- Quantify pension loss precisely.
- Cover redundancy selection-criteria challenges in detail (separate skill territory).
- Cover Scotland / Northern Ireland.
