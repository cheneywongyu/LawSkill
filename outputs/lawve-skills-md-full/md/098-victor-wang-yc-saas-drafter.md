---
id: "2e92a74c-3ddd-5381-8e2e-59d8c163d8a9"
title: "YC SaaS Drafter"
title_cn: "YC SaaS 起草者"
slug: "yc-saas-drafter"
url: "https://lawve.ai/@victor-wang/skill/yc-saas-drafter"
author: "Victor Wang"
author_slug: "victor-wang"
category: "commercial-law"
language: "en"
license: "MIT"
jurisdictions: "US"
status: "active"
source_index: 98
readme_path: "README.md"
skill_path: "SKILL.md"
---

# YC SaaS 起草者

原始名称：`YC SaaS Drafter`  
作者：Victor Wang  
分类：commercial-law  
来源：https://lawve.ai/@victor-wang/skill/yc-saas-drafter  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

# YC SaaS 绘图技巧

克劳德技能，从 Y Combinator 标准表单 SaaS 模板开始起草定制的**客户协议**。进行结构化接收，应用 18 个始终开启的默认值，将原始 YC 表格转变为专业起点，根据交易处理 12 个有条件决策，并输出一个干净的“.docx”以及一份面向律师的备忘录，解释每项更改。

专为希望 YC 模板作为基准但没有起草注释、可选脚手架和粗糙边缘的初创公司创始人及其顾问而构建。

## 它的作用

- 将“SaaS 服务协议”更名为“客户协议”
- 添加适当的数据隐私部分（§2.5）
- 将保修重组为独家补救措施/客户保修/测试版免责声明
- 将 SLA 和支持合并到一个附件 B 中
- 删除每个“[OPTIONAL]”、“*[注意：...]*”和起草注释
- 替代交易变量（公司、客户、费用、管辖法律等）
- 标记律师审查项目（DPA 需求、ML 培训权利、服务中的 IP 所有权等）

生产：
1. `[公司]_[客户]_客户_协议_DRAFT.docx`
2. `[Company]_[Customer]_Customer_Agreement_Memo.md` — 记录每项更改

## 如何使用

这是克劳德特工的技能。使用方法：

1. 将此文件夹放入您的 Claude 技能目录（例如，Claude Code / Cowork 的“~/.claude/skills/”，或您使用的任何 Claude 产品的技能文件夹）。
2. 使用触发短语开始对话，例如：
   - 《起草YC SaaS协议》
   - “我需要一份从 YC 表格开始的客户协议”
   - “与 [客户] 的新 SaaS 交易”
3. 回答入学问题。克劳德将确认您的选择、制作草稿并交付备忘录。

## 这个仓库里有什么
```
yc-saas-drafting-skill/
├── SKILL.md                              # Entry point — workflow and rules
├── assets/
│   └── YC_Form_SaaS_Agreement.docx       # YC's published standard form
└── references/
    ├── intake-questions.md               # 15 question groups with branching
    ├── decision-matrix.md                # Maps answers to template actions
    └── supplementary-language.md         # Verbatim clause text by anchor ID
```
决策矩阵告诉 Claude **要改变什么**。补充语言给出了要插入的**准确文本**。该技能不会即兴创作合同语言。

## 归因

`assets/YC_Form_SaaS_Agreement.docx` 是 Y Combinator 的标准形式 SaaS 协议，由 YC 发布供初创公司使用。 Y Combinator 与此技能无关。

## 不能替代律师

这项技能产生了起草的起点。每个输出都包含一份备忘录，其中包含需要律师审查的标记项目 - DPA 需求、ML 培训权利、实施服务中的 IP 所有权、衍生数据所有权和数据保留。未经律师对这些要点进行审查，请勿发送草稿。

## 许可证

[麻省理工学院](./LICENSE) — 版权所有 (c) 2026 Victor @ stokebuilder

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

# YC SaaS Drafting Skill

A Claude skill that drafts a customized **Customer Agreement** starting from the Y Combinator standard form SaaS template. Runs a structured intake, applies 18 always-on defaults that turn the raw YC form into a professional starting point, handles 12 conditional decisions based on the deal, and outputs a clean `.docx` plus a lawyer-facing memo explaining every change.

Built for startup founders and their counsel who want YC's template as a baseline but without the drafting annotations, optional scaffolding, and rough edges.

## What it does

- Renames "SaaS Services Agreement" to "Customer Agreement" throughout
- Adds a proper data privacy section (§2.5)
- Restructures warranties into exclusive remedy / customer warranty / beta disclaimer
- Consolidates SLA and support into a single Exhibit B
- Strips every `[OPTIONAL]`, `*[Note: ...]*`, and drafting annotation
- Substitutes deal variables (company, customer, fees, governing law, etc.)
- Flags attorney-review items (DPA need, ML training rights, IP ownership in services, etc.)

Produces:
1. `[Company]_[Customer]_Customer_Agreement_DRAFT.docx`
2. `[Company]_[Customer]_Customer_Agreement_Memo.md` — every change documented

## How to use

This is a Claude Agent skill. To use it:

1. Drop this folder into your Claude skills directory (e.g., `~/.claude/skills/` for Claude Code / Cowork, or the skills folder of whichever Claude product you use).
2. Start a conversation with a trigger phrase like:
   - "Draft a YC SaaS agreement"
   - "I need a Customer Agreement starting from the YC form"
   - "New SaaS deal with [customer]"
3. Answer the intake questions. Claude will confirm your selections, produce the draft, and deliver the memo.

## What's in this repo

```
yc-saas-drafting-skill/
├── SKILL.md                              # Entry point — workflow and rules
├── assets/
│   └── YC_Form_SaaS_Agreement.docx       # YC's published standard form
└── references/
    ├── intake-questions.md               # 15 question groups with branching
    ├── decision-matrix.md                # Maps answers to template actions
    └── supplementary-language.md         # Verbatim clause text by anchor ID
```

The decision matrix tells Claude **what** to change. The supplementary language gives the **exact text** to insert. The skill does not improvise contract language.

## Attribution

The `assets/YC_Form_SaaS_Agreement.docx` is Y Combinator's standard form SaaS Agreement, published by YC for startup use. Y Combinator is not affiliated with this skill.

## Not a substitute for a lawyer

This skill produces a drafting starting point. Every output includes a memo with flagged items that require attorney review — DPA need, ML training rights, IP ownership in implementation services, derivative data ownership, and data retention. Do not send a draft without counsel review on those points.

## License

[MIT](./LICENSE) — Copyright (c) 2026 Victor @ stokebuilder

---

## SKILL.md Original

---
name: yc-saas-drafter
description: |
  Drafts a customized Customer Agreement starting from the Y Combinator
  standard form SaaS template. Tailors the agreement through structured intake
  questions covering fee structure, data handling, ML rights, implementation
  services, and more. Applies 18 always-on defaults that transform the raw YC
  form into a professional starting point (renamed to "Customer Agreement",
  data privacy section added, warranty restructured, consolidated SLA/support
  exhibit, etc.). Produces a clean .docx and a lawyer-facing memo explaining
  every change from the YC standard. Use when user says "draft a SaaS
  agreement", "YC SaaS", "startup SaaS contract", "customer agreement",
  "SaaS subscription agreement", or "I need a SaaS agreement starting from
  the YC form". Also trigger when the user is a startup founder discussing
  SaaS contracting, even if they don't mention YC specifically.
metadata:
  author: "Victor Wang"
  license: "mit"
  version: "2026-05-12"
---

## Output Requirements

The final .docx must read like a lawyer drafted it. The output must contain:

- **Zero** YC drafting annotations (`*[Note:...]*`, `*[OPTIONAL:...]*`)
- **Zero** placeholder scaffolding (`[OPTIONAL]` markers, option guides)
- **Zero** unfilled template brackets — except deliberate `[TBD — description]`
  markers for values the user couldn't provide, documented in the memo

The agreement title is "Customer Agreement" — NOT "SaaS Services Agreement".

If any annotation, note, or non-TBD bracket appears in the output, the draft
is not ready. Fix it before delivering.

---

## Workflow

### Step 1: Load References

Before asking any questions, read all three reference files:

- `references/intake-questions.md` — 15 question groups with branching and defaults
- `references/decision-matrix.md` — maps answers to YC template actions (18 always-apply defaults, 12 conditional decisions, variable substitutions, raise-with-lawyer flags)
- `references/supplementary-language.md` — pre-written clause text anchored by ID (always-apply blocks and conditional blocks)

The decision matrix tells you WHAT to change. The supplementary language gives
you the EXACT TEXT to insert. Do not improvise contract language — if the
matrix says to insert `#DATA-PRIVACY`, use the verbatim text from
supplementary-language.md. The ONE exception is Order Form Service Fees,
where the LLM composes from fee pattern examples.

### Step 2: Run Intake

Follow the questions in `references/intake-questions.md` in order. Apply
branching logic (e.g., skip implementation fee if no implementation, skip
pilot details if no pilot, skip service capacity if flat pricing).

Key principles:
- Offer defaults but let the user override
- Use `[TBD — description]` for any value the user can't provide yet
- Confirm all decisions in a summary before proceeding (template at the
  end of intake-questions.md)
- Do NOT proceed to document assembly without user confirmation

### Step 3: Produce the Agreement

Read the YC template from `assets/YC_Form_SaaS_Agreement.docx`.

Apply modifications in this order:

**First — Always-apply defaults** (decision-matrix.md Section A, items A1-A18):
1. Rename Order Form title → "Order Form Number One"
2. Rename "SaaS Services Agreement" → "Customer Agreement" throughout
3. Update preamble date year
4. Section 1.1 SLA reference — remove [OPTIONAL], always on
5. Section 1.2 — change "Exhibit C" to "Exhibit B"
6. Section 2.2 — strip export controls note (keep the language)
7. Section 2.3 — delete customer indemnity clause + note entirely
8. Section 2.5 — insert `#DATA-PRIVACY` (new section)
9. Section 3.3 — remove optional framing (keep analytics language)
10. Section 6 — restructure into 6.1/6.2/6.3: insert `#WARRANTY-REMEDY`,
    `#CUSTOMER-WARRANTY`, `#BETA-DISCLAIMER`
11. Section 7 — remove optional note, remove "United States" from patent scope
12. Section 8 — strip negotiation note
13. Section 9 — replace YC press release language with `#MARKETING-DEFAULT`
14. Exhibits — replace B + C with `#EXHIBIT-B-CONSOLIDATED`, delete Exhibit C
15. Strip ALL remaining annotations and notes

**Second — Conditional decisions** (decision-matrix.md Section B, items B1-B12):
Walk through each conditional decision. For each, look up the intake answer
and apply the specified action. When the matrix references supplementary
language (e.g., `#NO-AUTO-RENEWAL`), use the verbatim text.

**Third — Variable substitutions** (decision-matrix.md Section C):
Replace all YC placeholders with intake values. Any field not collected →
`[TBD — description]`.

**Fourth — Cleanup:**
- Remove any surviving annotations, brackets, or drafting guidance
- Remove empty paragraphs left by deleted sections
- Verify section numbering is sequential (especially after §2.5 addition
  and §6 restructure into 6.1/6.2/6.3)
- Verify no non-TBD brackets remain

**DocX formatting notes:**
- Exhibit B credit table MUST be a proper Word table, not inline text
- Exhibit B communication channels MUST be a proper Word table
- Section 6 subsections (6.1, 6.2, 6.3) need proper heading formatting
- Section 6.3 (Beta Products) must be ALL CAPS

Produce the output as a .docx file:
`[CompanyName]_[CustomerName]_Customer_Agreement_DRAFT.docx`

Use available document creation tools (native DocX skill, python-docx, or
equivalent) to produce a professionally formatted Word document.

### Step 4: Produce the Lawyer Memo

Create a markdown memo alongside the agreement:
`[CompanyName]_[CustomerName]_Customer_Agreement_Memo.md`

The memo must include:

**1. Deal Summary** — One paragraph: who, what, fee structure, term.

**2. Template Base** — "This agreement is based on the Y Combinator standard
form SaaS Agreement with the following modifications."

**3. Always-Applied Defaults** — Itemized list of every always-apply change
(A1-A18), with brief rationale for each. Example:
- "Renamed to 'Customer Agreement' (professional standard)"
- "Removed 'United States' from IP indemnity patent scope (standard redline)"
- "Added Section 2.5 data privacy and security provisions (essential for modern SaaS)"
- "Added Section 6.2 customer warranty and Section 6.3 beta products disclaimer"

**4. Intake-Driven Decisions** — Each conditional decision and what was
selected. Example:
- "Section 3.2: Customer owns derivative data (bracketed language retained)"
- "Section 5.1: Auto-renewal with 60-day notice"

**5. Items Requiring Attorney Review** — This is critical. For each
raise-with-lawyer flag (decision-matrix.md Section D), include the flag
text verbatim. These are:
- DPA recommendation (almost always needed)
- Implementation services IP ownership (if applicable)
- Derivative data ownership (if company retains)
- ML training on customer content (if applicable)
- Data retention timeline confirmation

**6. TBD Items** — Every `[TBD — description]` in the document, listed so
the founder knows what to fill in before sending.

### Step 5: Deliver

Provide the user with:
1. The clean .docx Customer Agreement
2. The lawyer memo
3. Brief summary: key decisions, TBD count, attorney review items

---

## Decision Points Quick Reference

| # | Location | What's Decided |
|---|----------|---------------|
| B1 | Order Form | Services description (from product intake) |
| B2 | Order Form | Fee structure + service capacity (8 fee types) |
| B3 | Order Form + Exhibit A | Implementation services: include or remove |
| B4 | Order Form | Pilot period: include or remove |
| B5 | §2.1 | Distributed software license: include or remove |
| B6 | §3.2 | Derivative data: customer owns or company retains |
| B7 | §5.1 | Auto-renewal: yes (30/60/90 day notice) or no |
| B8 | §5.2 | Data retention period on termination |
| B9 | §9 | Governing law: state selection |
| B10 | §9 | Marketing formulation: default, more, or less |
| B11 | Exhibit B | SLA availability: 99.9% / 99.95% / 99.99% |
| B12 | Exhibit B | Support details: email, phone, hours, tool |

---

## Supplementary Language Reference

| Anchor | Clause | Type |
|--------|--------|------|
| #DATA-PRIVACY | §2.5 Data privacy & security | Always |
| #WARRANTY-REMEDY | §6.1 Exclusive warranty remedy | Always |
| #CUSTOMER-WARRANTY | §6.2 Customer warranty | Always |
| #BETA-DISCLAIMER | §6.3 Beta products (ALL CAPS) | Always |
| #MARKETING-DEFAULT | §9 Marketing language | Always |
| #EXHIBIT-B-CONSOLIDATED | Exhibit B: SLA + Support | Always |
| #NO-AUTO-RENEWAL | §5.1 Manual renewal replacement | Conditional |
| #FEE-EXAMPLES | Order Form fee patterns (8 types) | Conditional |
| #EXPANDED-DATA-RESTRICTIONS | Sensitive data protections | Conditional |
| #ML-TRAINING | ML model training rights | Conditional |
| #ML-FEDERATED | Federated learning carve-out | Conditional |

---

## What This Skill Does NOT Do

- **Does not draft DPAs.** Flags DPA need in memo; use dpa-drafter separately.
- **Does not handle professional services agreements.** If the deal has
  significant services beyond implementation, use msa-drafter.
- **Does not review or redline incoming contracts.** This drafts from a
  template. For review, use a review skill.
- **Does not invent clause language.** Every modification is a deletion,
  variable substitution, or verbatim insertion from supplementary-language.md.
  Exception: Order Form Service Fees, composed from fee pattern examples.
- **Does not resolve attorney review items.** Flags them in the memo for
  counsel to address.
