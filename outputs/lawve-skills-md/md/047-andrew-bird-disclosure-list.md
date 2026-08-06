---
id: "fed42f44-83c4-54c0-9afc-b2a0da908100"
title: "disclosure-list"
title_cn: "披露清单"
slug: "disclosure-list"
url: "https://lawve.ai/@andrew-bird/skill/disclosure-list"
author: "Andrew Bird"
author_slug: "andrew-bird"
category: "litigation"
language: "en"
license: "MIT"
jurisdictions: "UK"
status: "active"
views: 32
downloads: 7
created_at: "2026-06-09T14:38:02.269145+02:00"
updated_at: "2026-06-11T08:54:16.357228+02:00"
source_index: 47
---

# 披露清单

原始名称：`disclosure-list`  
作者：Andrew Bird  
分类：litigation  
来源：https://lawve.ai/@andrew-bird/skill/disclosure-list

## 中文 README

# 披露列表

找出在英格兰和威尔士的民事案件中您必须将哪些文件移交给另一方，并建立正式清单 - 纠正令人困惑的部分：适用哪种披露制度。

在商业和财产法院，这是根据实践指示 57AD 进行的披露试点（现在是永久性的，其模型 A-E）；在其他地方，它是 CPR 第 31 部分下的标准披露。如果使用通用工具来获取“披露列表”，它通常会默认为旧的 CPR 31，而完全错过 PD 57AD。对于初级诉讼人员、内部法律顾问和没有先例银行的小型团队：选择制度，选择每个问题的模型，构建披露审查文件，并起草证书作为当事人亲自签署的脚手架。

## 安装

[claude-for-uk-legal](https://github.com/b1rdmania/claude-for-uk-legal) 插件套件的一部分：
```bash
/plugin marketplace add https://github.com/b1rdmania/claude-for-uk-legal
/plugin install uk-litigation-legal@claude-for-uk-legal
```
或者直接安装单个技能：
```bash
cp -r disclosure-list ~/.claude/skills/disclosure-list
```
＃＃ 用法
```
/disclosure-list
/disclosure-list --regime=pd57ad --model=C
/disclosure-list --regime=cpr31
```
针对法院/部门的案件、披露问题、托管人、数据源、日期范围和特权范围进行运行。它识别制度，选择每个问题的扩展披露模型，并返回起草的列表。

示例：商事法庭索赔，您提供披露问题、四位托管人、数据源（Outlook、Teams、共享驱动器、WhatsApp）和日期范围。它返回一份披露审查文档，其中包含每个问题的模型、保管人/来源/关键字表以及标记为脚手架的披露证书草稿。

## 它的作用

- 确定制度 - PD 57AD 适用于商业和财产法院（商业法院、衡平法院、TCC、巡回商业法院、知识产权法院、金融法院），其他地方的 CPR 第 31 部分。
- 每期选择 PD 57AD 扩展披露模型 A–E，模型 C 作为默认值，模型 E 保留用于特殊情况。
- 将保管人、数据源、日期范围和关键字映射到搜索方法中，包括 TAR/预测编码披露。
- 按类别标记候选人特权 - 法律咨询、诉讼、不偏见、共同利益。
- 构建输出：CPR 31 下的 N265 结构文件列表（三部分），或 PD 57AD 下的简化披露审查文件。
- 标记每个不确定的内联点 - “[REGIME]”、“[PRIVILEGE]”、“[GDPR]”、“[SME VERIFY]” - 因此没有任何内容会被视为已解决。

## 它不做什么

- 运行搜索。它范围并列出；搜索发生在模型之外，并且必须在任何列表或声明得到认证之前实际执行。
- 决定特权。它通过描述标记候选人；律师会审查每一份被标记的文件并进行通话。
- 生成已执行的证书。披露声明 (CPR 31.10) 和 PD 57AD 披露证书由当事人亲自签署 - 模型起草脚手架在 DRAFT 横幅后面，它不进行认证。
- 发明文件。每个条目都会追踪到您提供的真实输入。
- 涵盖苏格兰或北爱尔兰程序（佣金和尽职调查；附表 1 RCS）或家庭诉讼。
- 提供法律建议。它是一种绘图辅助工具；在提供任何输出之前，请与顾问核实范围、搜索和权限调用。

## 要求

- 克劳德代码或克劳德合作。无需 MCP 连接器。
- 要反对的事项——法院/部门、问题、保管人、来源、日期范围和特权范围。

## 许可证

阿帕奇-2.0。

---

## Original README

# disclosure-list

Works out which documents you have to hand over to the other side in a civil case in England & Wales, and builds the formal list — getting right the bit that trips people up: which disclosure regime applies.

In the Business and Property Courts that's the Disclosure Pilot under Practice Direction 57AD (now permanent, with its Models A–E); everywhere else it's standard disclosure under CPR Part 31. Ask a general tool for "a disclosure list" and it'll usually default to old CPR 31 and miss PD 57AD entirely. For litigation juniors, in-house counsel, and small teams without a precedent bank: this picks the regime, selects a Model per issue, structures the Disclosure Review Document, and drafts the certificate as scaffolding for the party to sign personally.

## Install

Part of the [claude-for-uk-legal](https://github.com/b1rdmania/claude-for-uk-legal) plugin suite:

```bash
/plugin marketplace add https://github.com/b1rdmania/claude-for-uk-legal
/plugin install uk-litigation-legal@claude-for-uk-legal
```

Or install the single skill directly:

```bash
cp -r disclosure-list ~/.claude/skills/disclosure-list
```

## Usage

```
/disclosure-list
/disclosure-list --regime=pd57ad --model=C
/disclosure-list --regime=cpr31
```

Run it against a matter with the court/division, the issues for disclosure, custodians, data sources, date range, and privilege scope. It identifies the regime, selects the Extended Disclosure Model(s) per issue, and returns the drafted list.

Example: a Commercial Court claim where you give the issues for disclosure, the four custodians, the data sources (Outlook, Teams, a shared drive, WhatsApp), and the date range. It returns a Disclosure Review Document with a model per issue, a custodian/source/keyword table, and a draft Disclosure Certificate marked as scaffolding.

## What it does

- Identifies the regime — PD 57AD for the Business and Property Courts (Commercial, Chancery, TCC, Circuit Commercial, IP, Financial List), CPR Part 31 everywhere else.
- Selects PD 57AD Extended Disclosure Models A–E per issue, with Model C as the default and Model E reserved for exceptional cases.
- Maps custodians, data sources, date ranges, and keywords into a search methodology, including TAR/predictive-coding disclosure.
- Flags privilege candidates by category — legal advice, litigation, without prejudice, common interest.
- Builds the output: an N265-structured List of Documents (three parts) under CPR 31, or a simplified Disclosure Review Document under PD 57AD.
- Marks every uncertain point inline — `[REGIME]`, `[PRIVILEGE]`, `[GDPR]`, `[SME VERIFY]` — so nothing reads as settled.

## What it doesn't do

- Run the search. It scopes and lists; the search happens outside the model and must actually be performed before any list or statement is certified.
- Decide privilege. It flags candidates by description; counsel reviews every flagged document and makes the call.
- Produce an executed certificate. The Disclosure Statement (CPR 31.10) and the PD 57AD Disclosure Certificate are signed personally by the party — the model drafts scaffolding behind a DRAFT banner, it does not make the certification.
- Invent documents. Every entry traces to a real input you supplied.
- Cover Scottish or Northern Irish procedure (Commission and Diligence; Schedule 1 RCS), or family proceedings.
- Give legal advice. It is a drafting aid; verify the scope, the search, and the privilege calls with counsel before serving any output.

## Requirements

- Claude Code or Claude Cowork. No MCP connectors required.
- A matter to run against — court/division, issues, custodians, sources, date range, and privilege scope.

## License

Apache-2.0.
