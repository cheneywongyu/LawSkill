---
id: "0abcb456-94c5-5a3f-9e17-78b63713e289"
title: "Data Processing Agreement Art. 28 GDPR"
title_cn: "数据处理协议艺术。 28 通用数据保护条例"
slug: "data-processing-agreement-art-28-gdpr"
url: "https://lawve.ai/@oliver-schmidt-prietz/skill/data-processing-agreement-art-28-gdpr"
author: "Oliver Schmidt-Prietz"
author_slug: "oliver-schmidt-prietz"
category: "data-protection"
language: "en"
license: "AGPL 3.0"
jurisdictions: "EU"
status: "active"
views: 79
downloads: 16
created_at: "2026-06-09T12:51:06.838730+02:00"
updated_at: "2026-06-13T14:37:30.675330+02:00"
source_index: 42
---

# 数据处理协议艺术。 28 通用数据保护条例

原始名称：`Data Processing Agreement Art. 28 GDPR`  
作者：Oliver Schmidt-Prietz  
分类：data-protection  
来源：https://lawve.ai/@oliver-schmidt-prietz/skill/data-processing-agreement-art-28-gdpr

## 中文 README

# DPA 艺术。 28 GDPR — 部署指南

> 📄 **【查看交互技能页面→】(https://oliverschmidtprietz.github.io/GDPR-Data-Processing-Agreement/)**

请参阅 [CHANGELOG.md](CHANGELOG.md) 了解版本历史记录。

## 概述

DPA 艺术。 28 GDPR — 数据处理协议 (AVV / Auftragsverarbeitungsvertrag) 和 Art. 的审查、起草和修订。 26 联合控制者安排：

- **5 种操作模式** 自动路由 — REVIEW_QUICK、REVIEW_NEG（协商级）、DRAFT、REDLINE、JOINT_CONTROLLER
- **双语输出** — 德语和英语，并行质量
- **两个视角** - 控制器端和处理器端评论
- **两种审查深度** — 快速（第 28(3)(a)–(h) 覆盖范围检查）和谈判级（逐条风险评分）
- **委员会 SCC 锚** — 基于委员会实施决定 (EU) 2021/915
- **模板库** — 商业、混合和严格的 DPA 模板（DE + EN）； JCA 模板（德语 + 英语）
- **常见缺陷目录**，用于在供应商提供的草稿中快速发现
- **谈判后备立场** - 预先起草有争议条款的替代语言
- **SCC 模块指南** — 何时以及如何将模块 1-4 固定到 DPA 上以进行国际传输
- **层选择助手** — 匹配商业/混合/严格模板以处理上下文
- **严格的质量关** — 经过验证的艺术。 28(3) 交货前承保

## 文件结构
```
dpa-art28/
├── SKILL.md                                       # Main skill instructions (deploy this)
├── CHANGELOG.md                                   # Version history
├── references/
│   ├── 2021-915-commission-text-en.md             # Commission Implementing Decision (EU) 2021/915 — EN
│   ├── 2021-915-commission-text-de.md             # Commission Implementing Decision (EU) 2021/915 — DE
│   ├── art28-3-checklist.md                       # Art. 28(3)(a)–(h) coverage checklist
│   ├── art26-joint-controller.md                  # Art. 26 JCA framework
│   ├── common-defects.md                          # Vendor-DPA defect catalog
│   ├── negotiation-fallbacks.md                   # Fallback positions for contentious clauses
│   ├── sccs-module-guide.md                       # International-transfer SCC integration
│   └── tier-selection.md                          # Commercial / hybrid / strict tier helper
├── templates/
│   ├── dpa-commercial-de.md                       # Commercial DPA — DE
│   ├── dpa-commercial-en.md                       # Commercial DPA — EN
│   ├── dpa-hybrid-de.md                           # Hybrid DPA — DE
│   ├── dpa-hybrid-en.md                           # Hybrid DPA — EN
│   ├── dpa-strict-de.md                           # Strict DPA — DE
│   ├── dpa-strict-en.md                           # Strict DPA — EN
│   ├── jca-de.md                                  # JCA template — DE
│   └── jca-en.md                                  # JCA template — EN
└── workflows/
    ├── review-quick.md                            # REVIEW_QUICK procedure
    ├── review-negotiation.md                      # REVIEW_NEG procedure
    ├── draft.md                                   # DRAFT procedure
    ├── redline.md                                 # REDLINE procedure
    └── joint-controller.md                        # JOINT_CONTROLLER procedure
```
## 部署

### Claude.ai（用户技能）

1. 转到 **设置 → 个人资料 → 自定义技能**（或同等内容）
2.上传整个`dpa-art28/`文件夹结构
3. 该技能将在“DPA”、“AVV”、“Auftragsverarbeitung”、“第 28 条合同”、“红线此 DPA”、“JCA”或“联合控制者协议”上自动触发

### 克劳德代码/自定义 MCP 设置

1. 将 `dpa-art28/` 文件夹复制到您的技能目录：
   ```bash
   cp -r dpa-art28/ /path/to/your/skills/user/dpa-art28/
   ```
| Mode | When |
|------|------|
| **REVIEW_QUICK** | Fast Art. 28(3)(a)–(h) coverage check |
| **REVIEW_NEG** | Negotiation-grade clause-by-clause risk scoring |
| **DRAFT** | Produce a new DPA from a chosen template tier |
| **REDLINE** | Mark up an existing draft with proposed changes |
| **JOINT_CONTROLLER** | Art. 26 Joint Controller Arrangement workflow |
| Feature | Description |
|---------|-------------|
| Bilingual (DE/EN) | Parallel quality across both languages |
| Dual Perspective | Controller-side and processor-side review |
| Commission SCC | Built on Implementing Decision (EU) 2021/915 |
| Template Library | 3 DPA tiers × 2 languages + JCA × 2 languages |
| Defect Catalog | Common vendor-DPA defects with diagnostic signals |
| Negotiation Fallbacks | Pre-drafted alternative language for contested clauses |
| SCC Integration | International-transfer module guidance (Modules 1–4) |
| Tier Selection | Commercial / hybrid / strict matched to deal context |
| Quality Gates | Verified Art. 28(3) coverage before delivery |
| Document | Reference |
|----------|-----------|
| GDPR Art. 28 | Controller-processor relationship |
| GDPR Art. 28(3)(a)–(h) | Mandatory DPA content |
| GDPR Art. 26 | Joint controller arrangements |
| Commission Implementing Decision (EU) 2021/915 | EU-wide DPA standard contractual clauses |
| Commission Implementing Decision (EU) 2021/914 | International transfer SCCs (Modules 1–4) |
2. 确保该技能已在您的配置中注册

## 用法

### 快速入门

粘贴 DPA 或索要一份：

> “查看供应商的此 DPA — 我们是控制者。首先快速检查，
> 然后告诉我艺术下缺少什么。 28(3) 以及我应该反驳的内容。”

或者：

> “为欧盟处理商起草一份严格的德文 DPA
> 员工数据，包括我们美国子公司的 SCC 模块 2。”

### 触发短语

-“DPA”/“AVV”/“Auftragsverarbeitung”/“Auftragsverarbeitungsvertrag”
- “合同第 28 条”/“数据处理协议”/“处理者协议”
- “审查此 DPA”/“起草 DPA”/“红线此 DPA”
- “第 26 条安排”/“JCA”/“联合控制人协议”

### 模式路由器


## 能力总结


## 监管依据


## 许可和免责声明

此技能提供了结构化的 GDPR 艺术。 28 / 艺术。 26 承包指导。这不是法律建议。协商的 DPA 和 JCA 在签署前应由合格的数据保护顾问进行审查。

根据 AGPL-3.0 许可。

> **质量保证：** 该技能附带了“evals/”文件夹中的评估测试，我运行该测试来根据预期结果检查其输出。

---

*由 Oliver Schmidt-Prietz 创建 — [OneZero Legal](https://onezero.legal)*

---

## Original README

# DPA Art. 28 GDPR — Deployment Guide

> 📄 **[View the interactive skill page →](https://oliverschmidtprietz.github.io/GDPR-Data-Processing-Agreement/)**

See [CHANGELOG.md](CHANGELOG.md) for version history.

## Overview

DPA Art. 28 GDPR — review, drafting, and redlining of Data Processing Agreements (AVV / Auftragsverarbeitungsvertrag) and Art. 26 Joint Controller Arrangements:

- **5 operating modes** routed automatically — REVIEW_QUICK, REVIEW_NEG (negotiation-grade), DRAFT, REDLINE, JOINT_CONTROLLER
- **Bilingual output** — DE and EN, parallel quality
- **Two perspectives** — controller-side and processor-side reviews
- **Two review depths** — quick (Art. 28(3)(a)–(h) coverage check) and negotiation-grade (clause-by-clause risk scoring)
- **Commission SCC anchor** — built on Commission Implementing Decision (EU) 2021/915
- **Template library** — commercial, hybrid, and strict DPA templates (DE + EN); JCA templates (DE + EN)
- **Common-defects catalog** for fast spotting in vendor-provided drafts
- **Negotiation fallback positions** — pre-drafted alternative language for contentious clauses
- **SCC module guide** — when and how to bolt Modules 1–4 onto a DPA for international transfers
- **Tier selection helper** — match commercial / hybrid / strict template to deal context
- **Strict quality gates** — verified Art. 28(3) coverage before delivery

## File Structure

```
dpa-art28/
├── SKILL.md                                       # Main skill instructions (deploy this)
├── CHANGELOG.md                                   # Version history
├── references/
│   ├── 2021-915-commission-text-en.md             # Commission Implementing Decision (EU) 2021/915 — EN
│   ├── 2021-915-commission-text-de.md             # Commission Implementing Decision (EU) 2021/915 — DE
│   ├── art28-3-checklist.md                       # Art. 28(3)(a)–(h) coverage checklist
│   ├── art26-joint-controller.md                  # Art. 26 JCA framework
│   ├── common-defects.md                          # Vendor-DPA defect catalog
│   ├── negotiation-fallbacks.md                   # Fallback positions for contentious clauses
│   ├── sccs-module-guide.md                       # International-transfer SCC integration
│   └── tier-selection.md                          # Commercial / hybrid / strict tier helper
├── templates/
│   ├── dpa-commercial-de.md                       # Commercial DPA — DE
│   ├── dpa-commercial-en.md                       # Commercial DPA — EN
│   ├── dpa-hybrid-de.md                           # Hybrid DPA — DE
│   ├── dpa-hybrid-en.md                           # Hybrid DPA — EN
│   ├── dpa-strict-de.md                           # Strict DPA — DE
│   ├── dpa-strict-en.md                           # Strict DPA — EN
│   ├── jca-de.md                                  # JCA template — DE
│   └── jca-en.md                                  # JCA template — EN
└── workflows/
    ├── review-quick.md                            # REVIEW_QUICK procedure
    ├── review-negotiation.md                      # REVIEW_NEG procedure
    ├── draft.md                                   # DRAFT procedure
    ├── redline.md                                 # REDLINE procedure
    └── joint-controller.md                        # JOINT_CONTROLLER procedure
```

## Deployment

### Claude.ai (User Skills)

1. Go to **Settings → Profile → Custom Skills** (or equivalent)
2. Upload the entire `dpa-art28/` folder structure
3. The skill will auto-trigger on "DPA", "AVV", "Auftragsverarbeitung", "Art. 28 contract", "redline this DPA", "JCA", or "joint controller agreement"

### Claude Code / Custom MCP Setup

1. Copy the `dpa-art28/` folder to your skills directory:
   ```bash
   cp -r dpa-art28/ /path/to/your/skills/user/dpa-art28/
   ```
2. Ensure the skill is registered in your configuration

## Usage

### Quick Start

Paste a DPA or ask for one:

> "Review this DPA from a vendor — we're the controller. Quick check first,
> then tell me what's missing under Art. 28(3) and what I should push back on."

Or:

> "Draft a strict-tier DPA in German for an EU-based processor handling
> employee data, including SCCs Module 2 for our US subsidiary."

### Trigger Phrases

- "DPA" / "AVV" / "Auftragsverarbeitung" / "Auftragsverarbeitungsvertrag"
- "Art. 28 contract" / "Data processing agreement" / "Processor agreement"
- "Review this DPA" / "Draft a DPA" / "Redline this DPA"
- "Art. 26 arrangement" / "JCA" / "Joint controller agreement"

### Mode Router

| Mode | When |
|------|------|
| **REVIEW_QUICK** | Fast Art. 28(3)(a)–(h) coverage check |
| **REVIEW_NEG** | Negotiation-grade clause-by-clause risk scoring |
| **DRAFT** | Produce a new DPA from a chosen template tier |
| **REDLINE** | Mark up an existing draft with proposed changes |
| **JOINT_CONTROLLER** | Art. 26 Joint Controller Arrangement workflow |

## Capabilities Summary

| Feature | Description |
|---------|-------------|
| Bilingual (DE/EN) | Parallel quality across both languages |
| Dual Perspective | Controller-side and processor-side review |
| Commission SCC | Built on Implementing Decision (EU) 2021/915 |
| Template Library | 3 DPA tiers × 2 languages + JCA × 2 languages |
| Defect Catalog | Common vendor-DPA defects with diagnostic signals |
| Negotiation Fallbacks | Pre-drafted alternative language for contested clauses |
| SCC Integration | International-transfer module guidance (Modules 1–4) |
| Tier Selection | Commercial / hybrid / strict matched to deal context |
| Quality Gates | Verified Art. 28(3) coverage before delivery |

## Regulatory Basis

| Document | Reference |
|----------|-----------|
| GDPR Art. 28 | Controller-processor relationship |
| GDPR Art. 28(3)(a)–(h) | Mandatory DPA content |
| GDPR Art. 26 | Joint controller arrangements |
| Commission Implementing Decision (EU) 2021/915 | EU-wide DPA standard contractual clauses |
| Commission Implementing Decision (EU) 2021/914 | International transfer SCCs (Modules 1–4) |

## License & Disclaimer

This skill provides structured GDPR Art. 28 / Art. 26 contracting guidance. It is not legal advice. Negotiated DPAs and JCAs should be reviewed by qualified data protection counsel before signing.

Licensed under AGPL-3.0.

> **Quality assurance:** this skill ships with evaluation tests in the `evals/` folder, which I run to check its outputs against expected results.

---

*Created by Oliver Schmidt-Prietz — [OneZero Legal](https://onezero.legal)*
