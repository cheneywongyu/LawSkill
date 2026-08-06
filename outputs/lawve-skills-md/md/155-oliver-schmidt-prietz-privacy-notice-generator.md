---
id: "338866b7-3d36-512d-a77b-71d922939d8c"
title: "Privacy Notice Generator"
title_cn: "隐私声明生成器"
slug: "privacy-notice-generator"
url: "https://lawve.ai/@oliver-schmidt-prietz/skill/privacy-notice-generator"
author: "Oliver Schmidt-Prietz"
author_slug: "oliver-schmidt-prietz"
category: "data-protection"
language: "en"
license: "AGPL 3.0"
jurisdictions: "EU"
status: "active"
views: 555
downloads: 440
created_at: "2026-02-09T01:00:00+01:00"
updated_at: "2026-04-30T12:27:56.578411+02:00"
source_index: 155
---

# 隐私声明生成器

原始名称：`Privacy Notice Generator`  
作者：Oliver Schmidt-Prietz  
分类：data-protection  
来源：https://lawve.ai/@oliver-schmidt-prietz/skill/privacy-notice-generator

## 中文 README

# 欧盟隐私声明 — 部署指南

> 📄 **【查看互动技能页面→】(https://oliverschmidtprietz.github.io/GDPR-Privacy-Notice-EU/)**

## 概述

泛欧盟 GDPR 隐私声明生成器 — Claude 的一项综合起草技能，可将具有管辖权意识、符合 GDPR 的隐私声明生成为专业 .docx 文档：

- **五种通知类型**：网站/应用程序、申请人、员工、业务合作伙伴 (B2B)、B2C 客户
- **多司法管辖区覆盖**：德国 (DSGVO+BDSG+TDDDG)、法国 (RGPD+LIL+LCEN)、奥地利、意大利、西班牙、荷兰、比利时、IE、英国 GDPR
- **多语言支持**：德语、法语、英语 — 提供双语和泛欧盟选项
- **《人工智能法案》透明度整合**：艺术。 50 人工智能法案披露要求
- **类型驱动的摄入量**：针对每种通知类型量身定制的数据类别、法律依据和保留默认值
- **艺术。 13/14 合规性验证**：交付前的结构化检查表
- **Cookie 和跟踪部分**：带有 CMP 集成指南
- **艺术。 21 异议框**：视觉上突出，根据 GDPR 要求单独呈现
- **DPIA 指标筛选**：艺术时的标志。可能需要35次评估
- **可审计的 .docx 输出** 具有专业格式

## 文件结构
```
privacy-notice-eu/
├── SKILL.md                              # Main skill instructions (deploy this)
└── references/
    ├── templates.md                      # Document template: structure, formatting, translations
    ├── EU_COMMON.md                      # Pan-EU GDPR requirements (Art. 13/14 checklist, legal bases)
    ├── DE.md                             # Germany-specific requirements (BDSG, TDDDG, DSK guidance)
    ├── FR.md                             # France-specific requirements (CNIL recommendations, LIL, LCEN)
    ├── OTHER_EU.md                       # AT, IT, ES, NL, BE, IE, UK GDPR specifics
    └── NOTICE_TYPES.md                   # Type profiles: section maps, data categories, intake questions
```
## 部署

### Claude.ai（用户技能）

1. 转到 **设置 → 个人资料 → 自定义技能**（或同等内容）
2.上传整个`privacy-notice-eu/`文件夹结构
3. 当您提及隐私声明、数据保护、保密政策、艺术时，该技能将自动触发。 13/14，或相关主题

### 克劳德代码/自定义 MCP 设置

1. 将 `privacy-notice-eu/` 文件夹复制到您的技能目录：
   ```bash
   cp -r privacy-notice-eu/ /path/to/your/skills/user/privacy-notice-eu/
   ```
| Step | Description |
|------|-------------|
| **1. Scope** | Notice type, jurisdiction(s), language, template choice |
| **2. Intake** | Type-driven collection: controller info, data inventory, legal bases, processors, cookies, AI |
| **3. Draft** | Generate notice from template + type profile + collected information |
| **4. Verify** | Art. 13/14 compliance check + type-specific checks + AI Act check |
| **5. Deliver** | Professional .docx output with post-generation checklist |
| Type | Typical Use Case |
|------|------------------|
| **Website / App** | Visitors, users, subscribers — includes sub-types (brochure, e-commerce, SaaS, mobile, marketplace, AI platform) |
| **Applicant** | Job applicants and candidates |
| **Employee** | Employees, contractors, interns |
| **B2B Partner** | Contact persons at vendors, suppliers, clients |
| **B2C Customer** | End consumers in purchase/service relationships |
| **Combined** | Multiple audiences in one or linked notices |
| Document | Reference |
|----------|-----------|
| GDPR Articles 13 & 14 | Information duties to data subjects |
| GDPR Article 21(4) | Prominent presentation of right to object |
| GDPR Article 22 | Automated decision-making transparency |
| EU AI Act Article 50 | AI transparency obligations |
| BDSG (Germany) | Sec. 26 employee data, DPO thresholds |
| CNIL Recommendations (France) | 2020 privacy notice guidance |
| TDDDG (Germany) | Telemedien/cookie requirements |
2. 确保该技能已在您的配置中注册

## 用法

### 快速入门

只要告诉克劳德你需要什么：

> “我需要我们的 SaaS 平台的隐私声明。我们是一家位于柏林的德国有限责任公司，
> 针对德国和法国的客户。我们使用 Google Analytics、Stripe 进行付款，
> 以及用于人工智能聊天机器人功能的 OpenAI。”

该技能将激活并引导您完成摄入过程。

### 触发短语

- “创建隐私声明”/“Datenschutzerklaerung erstellen”/“politique deconfidentialite”
- “我们网站的隐私政策”/“GDPR 第 13 条”
- “Bewerber-Datenschutz”/“申请人隐私声明”
- “员工数据保护通知”/“Beschaeftigten-Datenschutz”

### 工作流程


### 通知类型


## 监管依据


## 版本历史

请参阅[CHANGELOG.md](CHANGELOG.md)。

## 许可和免责声明

该技能根据公开的 GDPR 监管材料提供起草指导。它不构成法律建议。所有隐私声明在发布前均应由合格的数据保护顾问和您组织的 DPO 进行审核。

> **质量保证：** 该技能附带了“evals/”文件夹中的评估测试，我运行该测试来根据预期结果检查其输出。

---

*由 Oliver Schmidt-Prietz 创建 — [OneZero Legal](https://onezero.legal)*

---

## Original README

# Privacy Notice EU — Deployment Guide

> 📄 **[View the interactive skill page →](https://oliverschmidtprietz.github.io/GDPR-Privacy-Notice-EU/)**

## Overview

Pan-EU GDPR Privacy Notice Generator — a comprehensive drafting skill for Claude that produces jurisdiction-aware, GDPR-compliant privacy notices as professional .docx documents:

- **Five notice types**: Website/App, Applicant, Employee, Business Partner (B2B), B2C Customer
- **Multi-jurisdiction coverage**: DE (DSGVO+BDSG+TDDDG), FR (RGPD+LIL+LCEN), AT, IT, ES, NL, BE, IE, UK GDPR
- **Multi-language support**: German, French, English — with bilingual and pan-EU options
- **AI Act transparency integration**: Art. 50 AI Act disclosure requirements
- **Type-driven intake**: data categories, legal bases, and retention defaults tailored to each notice type
- **Art. 13/14 compliance verification**: structured checklist before delivery
- **Cookie & tracking section**: with CMP integration guidance
- **Art. 21 objection box**: visually prominent, separate presentation per GDPR requirement
- **DPIA indicator screening**: flags when Art. 35 assessment may be needed
- **Audit-ready .docx output** with professional formatting

## File Structure

```
privacy-notice-eu/
├── SKILL.md                              # Main skill instructions (deploy this)
└── references/
    ├── templates.md                      # Document template: structure, formatting, translations
    ├── EU_COMMON.md                      # Pan-EU GDPR requirements (Art. 13/14 checklist, legal bases)
    ├── DE.md                             # Germany-specific requirements (BDSG, TDDDG, DSK guidance)
    ├── FR.md                             # France-specific requirements (CNIL recommendations, LIL, LCEN)
    ├── OTHER_EU.md                       # AT, IT, ES, NL, BE, IE, UK GDPR specifics
    └── NOTICE_TYPES.md                   # Type profiles: section maps, data categories, intake questions
```

## Deployment

### Claude.ai (User Skills)

1. Go to **Settings → Profile → Custom Skills** (or equivalent)
2. Upload the entire `privacy-notice-eu/` folder structure
3. The skill will auto-trigger when you mention privacy notices, Datenschutzerklaerung, politique de confidentialite, Art. 13/14, or related topics

### Claude Code / Custom MCP Setup

1. Copy the `privacy-notice-eu/` folder to your skills directory:
   ```bash
   cp -r privacy-notice-eu/ /path/to/your/skills/user/privacy-notice-eu/
   ```
2. Ensure the skill is registered in your configuration

## Usage

### Quick Start

Just tell Claude what you need:

> "I need a privacy notice for our SaaS platform. We're a German GmbH based in Berlin,
> targeting customers in Germany and France. We use Google Analytics, Stripe for payments,
> and OpenAI for an AI chatbot feature."

The skill will activate and walk you through the intake process.

### Trigger Phrases

- "Create a privacy notice" / "Datenschutzerklaerung erstellen" / "politique de confidentialite"
- "Privacy policy for our website" / "Art. 13 GDPR"
- "Bewerber-Datenschutz" / "applicant privacy notice"
- "Employee data protection notice" / "Beschaeftigten-Datenschutz"

### Workflow

| Step | Description |
|------|-------------|
| **1. Scope** | Notice type, jurisdiction(s), language, template choice |
| **2. Intake** | Type-driven collection: controller info, data inventory, legal bases, processors, cookies, AI |
| **3. Draft** | Generate notice from template + type profile + collected information |
| **4. Verify** | Art. 13/14 compliance check + type-specific checks + AI Act check |
| **5. Deliver** | Professional .docx output with post-generation checklist |

### Notice Types

| Type | Typical Use Case |
|------|------------------|
| **Website / App** | Visitors, users, subscribers — includes sub-types (brochure, e-commerce, SaaS, mobile, marketplace, AI platform) |
| **Applicant** | Job applicants and candidates |
| **Employee** | Employees, contractors, interns |
| **B2B Partner** | Contact persons at vendors, suppliers, clients |
| **B2C Customer** | End consumers in purchase/service relationships |
| **Combined** | Multiple audiences in one or linked notices |

## Regulatory Basis

| Document | Reference |
|----------|-----------|
| GDPR Articles 13 & 14 | Information duties to data subjects |
| GDPR Article 21(4) | Prominent presentation of right to object |
| GDPR Article 22 | Automated decision-making transparency |
| EU AI Act Article 50 | AI transparency obligations |
| BDSG (Germany) | Sec. 26 employee data, DPO thresholds |
| CNIL Recommendations (France) | 2020 privacy notice guidance |
| TDDDG (Germany) | Telemedien/cookie requirements |

## Version History

See [CHANGELOG.md](CHANGELOG.md).

## License & Disclaimer

This skill provides drafting guidance based on publicly available GDPR regulatory materials. It does not constitute legal advice. All privacy notices should be reviewed by qualified data protection counsel and your organization's DPO before publication.

> **Quality assurance:** this skill ships with evaluation tests in the `evals/` folder, which I run to check its outputs against expected results.

---

*Created by Oliver Schmidt-Prietz — [OneZero Legal](https://onezero.legal)*
