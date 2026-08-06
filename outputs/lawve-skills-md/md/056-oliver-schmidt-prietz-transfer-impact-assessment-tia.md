---
id: "21f69471-5b72-5a7d-a5da-72c6bd71a563"
title: "Transfer Impact Assessment (TIA)"
title_cn: "转移影响评估（TIA）"
slug: "transfer-impact-assessment-tia"
url: "https://lawve.ai/@oliver-schmidt-prietz/skill/transfer-impact-assessment-tia"
author: "Oliver Schmidt-Prietz"
author_slug: "oliver-schmidt-prietz"
category: "data-protection"
language: "en"
license: "AGPL 3.0"
jurisdictions: "EU"
status: "active"
views: 53
downloads: 16
created_at: "2026-06-09T08:36:28.471994+02:00"
updated_at: "2026-06-09T09:51:45.250407+02:00"
source_index: 56
---

# 转移影响评估（TIA）

原始名称：`Transfer Impact Assessment (TIA)`  
作者：Oliver Schmidt-Prietz  
分类：data-protection  
来源：https://lawve.ai/@oliver-schmidt-prietz/skill/transfer-impact-assessment-tia

## 中文 README

# TIA（传输影响评估）— 部署指南

> 📄 **【查看互动技能页面→】(https://oliverschmidtprietz.github.io/GDPR-Transfer-Impact-Assessment/)**

## 概述

GDPR 转移影响评估技能 - 针对 Claude 的结构化第五章转移指南。组合：

- **EDPB 建议 01/2020** 六步方法（监管支柱）
- **CNIL TIA 指南**（最终版本，2025 年 1 月）——结构化评估表和三步第 3 步结论
- **EDPB 建议 02/2020** — 监督法评估的四个基本保障框架
- **EDPB 指南 05/2021** — 转学资格的三个累积标准，包含 12 个示例场景
- **罗森塔尔方法**影响 — 务实的步骤 3 C 块（“该数据的现实风险”），无需统计概率计算
- **12 个预先构建的国家概况** — 美国（非 DPF）、美国（DPF）、英国、印度、中国、巴西、澳大利亚、新加坡、土耳其、阿联酋、南非、俄罗斯 + 通用调查问卷
- **平衡的艺术。 49 治疗** — EDPB 指南 2/2018 + OLG München (21 U 3882/25 e, 2026) 司法反立场
- **审计就绪输出** — Markdown 报告 + .docx 正式文档 + 用于 RoPA 交换的 JSON 增量

## 文件结构
```
skills/tia/
├── SKILL.md                              # Main skill instructions (deploy this)
├── CHANGELOG.md                          # Version history
├── README.md                             # This file
├── evals/
│   └── evals.json                        # 12 behavioural test cases
└── references/
    ├── edpb-six-steps.md                 # EDPB Rec 01/2020 methodology
    ├── essential-guarantees.md           # EDPB Rec 02/2020 four-pillar framework
    ├── transfer-qualification.md         # EDPB Guidelines 05/2021 — 3 criteria + 12 examples
    ├── art49-derogations.md              # Art. 49 balanced assessment (EDPB + judicial)
    ├── supplementary-measures.md         # Catalog (technical / contractual / organisational)
    ├── schrems-ii-holdings.md            # C-311/18 key holdings + implications
    ├── tia-template.md                   # Document template structure
    ├── interchange-delta.md              # RoPA delta format
    ├── sources.md                        # Regulatory source references
    └── country-profiles/
        ├── us-non-dpf.md                # USA outside DPF
        ├── us-dpf.md                    # USA DPF-certified
        ├── uk-post-adequacy.md          # UK (adequacy renewed Dec 2025)
        ├── in.md                        # India
        ├── cn.md                        # China
        ├── br.md                        # Brazil
        ├── au.md                        # Australia
        ├── sg.md                        # Singapore
        ├── tr.md                        # Turkey
        ├── ae.md                        # UAE (DIFC / ADGM / mainland)
        ├── za.md                        # South Africa
        ├── ru.md                        # Russia
        └── generic-assessment.md        # Guided questionnaire for unlisted countries
```
## 部署

### Claude.ai（用户技能）

1. 转至 **设置 → 个人资料 → 自定义技能**（或同等内容）。
2. 上传整个 `tia/` 文件夹结构。
3.技能在“TIA”、“转让影响评估”、“Schrems II”、“第三国转让”、“第46条”、“第49条”和类似术语上触发。

### 克劳德代码/自定义设置
```bash
# Symlink the skill from the monorepo
ln -s ~/CLAUDE_PROJECTS/SKILLS/claude-skills/skills/tia ~/.claude/skills/tia
```
| Mode | When | Output |
|---|---|---|
| Single transfer assessment | One known transfer | Markdown + .docx TIA |
| Batch / registry | Multiple transfers | Registry + per-transfer pipeline + Transfer Risk Summary |
| Discovery (standalone) | No RoPA, multiple transfers | Discovery walkthrough → registry → assessments |
| RoPA import | Has RoPA sidecar | Import transfers → assess each |
| Adequacy fast-track | Destination has adequacy | Lightweight assessment + monitoring triggers |
| Art. 49 path | Derogation potentially applies | Balanced assessment (EDPB + judicial) |
| Transfer qualification only | "Is this even a transfer?" | Qualification finding |
| Review / update | Existing TIA + legal change | Re-assessment of affected sections |
| Format | Purpose |
|---|---|
| Markdown TIA Report | In-session preview, working document |
| .docx Formal TIA Document | Compliance file, CNIL-style tables, sign-off block |
| JSON Delta | RoPA interchange — patches `tia_ref`, `tia_status`, `supplementary_measures[]`, dates |
| Transfer Risk Summary | One-page executive overview for batch assessments |
| Document | Reference | Purpose |
|---|---|---|
| GDPR Chapter V | Arts. 44–49 | Statute |
| Schrems II | CJEU C-311/18 (16 July 2020) | Adequacy + TIA obligation |
| EDPB Rec 01/2020 | v2.0 (18 June 2021) | Six-step methodology |
| EDPB Rec 02/2020 | (10 November 2020) | Essential guarantees |
| EDPB Guidelines 05/2021 | v2.0 (14 February 2023) | Transfer qualification |
| EDPB Guidelines 2/2018 | (25 May 2018) | Art. 49 derogations (EDPB view) |
| CNIL TIA Guide | January 2025 (final) | Practical structured tables |
| OLG München, 21 U 3882/25 e | (11 May 2026) | Art. 49(1)(b) for global services |
| Implementing Decision (EU) 2023/1795 | (10 July 2023) | EU-US DPF adequacy |
| Skill | Direction | What flows |
|---|---|---|
| RoPA | Inbound | Read sidecar; filter third-country transfers; pre-populate Step 1 |
| RoPA | Outbound | Emit delta file per assessed transfer (conforming to RoPA inbound schema v1.0) |
| DPIA Sentinel | Flag only | If Step 3 reveals high-risk processing, flag for Art. 35 DPIA consideration (no auto-trigger) |
## 用法

### 快速入门

触发技能的提示示例：

- “我们正在使用 SCC 模块 2 将 HR 数据传输到我们位于印度的工资处理器。我需要采取补充措施吗？”
- “我需要为我们的美国云提供商提供 TIA - 他们经过了 DPF 认证。”
- “来自我们印度分处理商的远程支持访问是否被视为第五章转移？”
- “我们可以依据第 49(1)(b) 条将我们的全球 SaaS 用户数据流向美国吗？”

### 触发短语

- “TIA”，“转让影响评估”
——《施雷姆斯 II》，《第五章》
- “第 44 / 45 / 46 / 47 / 49 条”
-“转移到[国家]”（美国、印度、中国等）
- “SCC 评估”、“BCR”
- “补充措施”
- “DPF传输”、“欧盟-美国数据隐私框架”
- “充分性决定”
- “基本保证”
- “Drittlandsübermittlung”、“Drittlandtransfer”

### 评估模式


## 输出


## 监管依据


## 跨技能整合


## 版本历史

请参阅 [CHANGELOG.md](CHANGELOG.md) 了解完整的版本历史记录。

## 许可和免责声明

AGPL-3.0。请参阅存储库许可证。

**此技能提供基于 EDPB 建议、CNIL 指南和新兴判例法的结构化 GDPR 第五章指南。这不是法律建议。让您的 DPO 和合格的律师参与最终决定，特别是在技能标记为暂停或重组的转移的情况下。该技能的国家/地区概况反映了截至每个概况中所述的“最后验证”日期的法律和实践 - 在正式使用之前验证当前状态。**

> **质量保证：** 该技能附带了“evals/”文件夹中的评估测试，我运行该测试来根据预期结果检查其输出。

---

*由 Oliver Schmidt-Prietz 创建 — [OneZero Legal](https://onezero.legal)*

---

## Original README

# TIA (Transfer Impact Assessment) — Deployment Guide

> 📄 **[View the interactive skill page →](https://oliverschmidtprietz.github.io/GDPR-Transfer-Impact-Assessment/)**

## Overview

GDPR Transfer Impact Assessment skill — structured Chapter V transfer guidance for Claude. Combines:

- **EDPB Recommendations 01/2020** six-step methodology (regulatory backbone)
- **CNIL TIA Guide** (final version, January 2025) — structured assessment tables and three-way Step 3 conclusion
- **EDPB Recommendations 02/2020** — four essential guarantees framework for surveillance-law assessment
- **EDPB Guidelines 05/2021** — three cumulative criteria for transfer qualification, with 12 example scenarios
- **Rosenthal method** influence — pragmatic Step 3 Block C ("realistic risk to this data") without statistical probability calculations
- **12 pre-built country profiles** — US (non-DPF), US (DPF), UK, India, China, Brazil, Australia, Singapore, Turkey, UAE, South Africa, Russia + generic questionnaire
- **Balanced Art. 49 treatment** — EDPB Guidelines 2/2018 + OLG München (21 U 3882/25 e, 2026) judicial counter-position
- **Audit-ready output** — Markdown report + .docx formal document + JSON delta for RoPA interchange

## File Structure

```
skills/tia/
├── SKILL.md                              # Main skill instructions (deploy this)
├── CHANGELOG.md                          # Version history
├── README.md                             # This file
├── evals/
│   └── evals.json                        # 12 behavioural test cases
└── references/
    ├── edpb-six-steps.md                 # EDPB Rec 01/2020 methodology
    ├── essential-guarantees.md           # EDPB Rec 02/2020 four-pillar framework
    ├── transfer-qualification.md         # EDPB Guidelines 05/2021 — 3 criteria + 12 examples
    ├── art49-derogations.md              # Art. 49 balanced assessment (EDPB + judicial)
    ├── supplementary-measures.md         # Catalog (technical / contractual / organisational)
    ├── schrems-ii-holdings.md            # C-311/18 key holdings + implications
    ├── tia-template.md                   # Document template structure
    ├── interchange-delta.md              # RoPA delta format
    ├── sources.md                        # Regulatory source references
    └── country-profiles/
        ├── us-non-dpf.md                # USA outside DPF
        ├── us-dpf.md                    # USA DPF-certified
        ├── uk-post-adequacy.md          # UK (adequacy renewed Dec 2025)
        ├── in.md                        # India
        ├── cn.md                        # China
        ├── br.md                        # Brazil
        ├── au.md                        # Australia
        ├── sg.md                        # Singapore
        ├── tr.md                        # Turkey
        ├── ae.md                        # UAE (DIFC / ADGM / mainland)
        ├── za.md                        # South Africa
        ├── ru.md                        # Russia
        └── generic-assessment.md        # Guided questionnaire for unlisted countries
```

## Deployment

### Claude.ai (User Skills)

1. Go to **Settings → Profile → Custom Skills** (or equivalent).
2. Upload the entire `tia/` folder structure.
3. The skill triggers on "TIA", "Transfer Impact Assessment", "Schrems II", "third-country transfer", "Art. 46", "Art. 49", and similar terms.

### Claude Code / Custom Setup

```bash
# Symlink the skill from the monorepo
ln -s ~/CLAUDE_PROJECTS/SKILLS/claude-skills/skills/tia ~/.claude/skills/tia
```

## Usage

### Quick Start

Example prompts that trigger the skill:

- "We're using SCCs Module 2 to transfer HR data to our payroll processor in India. Do I need supplementary measures?"
- "I need a TIA for our US cloud provider — they're DPF-certified."
- "Is remote support access from our Indian sub-processor considered a Chapter V transfer?"
- "Can we rely on Art. 49(1)(b) for our global SaaS user data flows to the US?"

### Trigger Phrases

- "TIA", "Transfer Impact Assessment"
- "Schrems II", "Chapter V"
- "Art. 44 / 45 / 46 / 47 / 49"
- "transfer to [country]" (US, India, China, etc.)
- "SCCs assessment", "BCRs"
- "supplementary measures"
- "DPF transfer", "EU-US Data Privacy Framework"
- "adequacy decision"
- "essential guarantees"
- "Drittlandsübermittlung", "Drittlandtransfer"

### Assessment Modes

| Mode | When | Output |
|---|---|---|
| Single transfer assessment | One known transfer | Markdown + .docx TIA |
| Batch / registry | Multiple transfers | Registry + per-transfer pipeline + Transfer Risk Summary |
| Discovery (standalone) | No RoPA, multiple transfers | Discovery walkthrough → registry → assessments |
| RoPA import | Has RoPA sidecar | Import transfers → assess each |
| Adequacy fast-track | Destination has adequacy | Lightweight assessment + monitoring triggers |
| Art. 49 path | Derogation potentially applies | Balanced assessment (EDPB + judicial) |
| Transfer qualification only | "Is this even a transfer?" | Qualification finding |
| Review / update | Existing TIA + legal change | Re-assessment of affected sections |

## Outputs

| Format | Purpose |
|---|---|
| Markdown TIA Report | In-session preview, working document |
| .docx Formal TIA Document | Compliance file, CNIL-style tables, sign-off block |
| JSON Delta | RoPA interchange — patches `tia_ref`, `tia_status`, `supplementary_measures[]`, dates |
| Transfer Risk Summary | One-page executive overview for batch assessments |

## Regulatory Basis

| Document | Reference | Purpose |
|---|---|---|
| GDPR Chapter V | Arts. 44–49 | Statute |
| Schrems II | CJEU C-311/18 (16 July 2020) | Adequacy + TIA obligation |
| EDPB Rec 01/2020 | v2.0 (18 June 2021) | Six-step methodology |
| EDPB Rec 02/2020 | (10 November 2020) | Essential guarantees |
| EDPB Guidelines 05/2021 | v2.0 (14 February 2023) | Transfer qualification |
| EDPB Guidelines 2/2018 | (25 May 2018) | Art. 49 derogations (EDPB view) |
| CNIL TIA Guide | January 2025 (final) | Practical structured tables |
| OLG München, 21 U 3882/25 e | (11 May 2026) | Art. 49(1)(b) for global services |
| Implementing Decision (EU) 2023/1795 | (10 July 2023) | EU-US DPF adequacy |

## Cross-Skill Integration

| Skill | Direction | What flows |
|---|---|---|
| RoPA | Inbound | Read sidecar; filter third-country transfers; pre-populate Step 1 |
| RoPA | Outbound | Emit delta file per assessed transfer (conforming to RoPA inbound schema v1.0) |
| DPIA Sentinel | Flag only | If Step 3 reveals high-risk processing, flag for Art. 35 DPIA consideration (no auto-trigger) |

## Version History

See [CHANGELOG.md](CHANGELOG.md) for full version history.

## License & Disclaimer

AGPL-3.0. See repository LICENSE.

**This skill provides structured GDPR Chapter V guidance based on EDPB Recommendations, CNIL guidance, and emerging case law. It is not legal advice. Involve your DPO and qualified counsel for final decisions, especially where the skill flags a transfer for suspension or restructuring. The skill's country profiles reflect the law and practice as of the "Last verified" date stated in each profile — verify current status before formal use.**

> **Quality assurance:** this skill ships with evaluation tests in the `evals/` folder, which I run to check its outputs against expected results.

---

*Created by Oliver Schmidt-Prietz — [OneZero Legal](https://onezero.legal)*
