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
views: 97
downloads: 30
created_at: "2026-05-12T17:41:06.090523+02:00"
updated_at: "2026-05-12T17:41:31.500530+02:00"
source_index: 98
---

# YC SaaS 起草者

原始名称：`YC SaaS Drafter`  
作者：Victor Wang  
分类：commercial-law  
来源：https://lawve.ai/@victor-wang/skill/yc-saas-drafter

## 中文 README

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

## Original README

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
