---
id: "41d9d397-063a-510d-8f8a-4cc687dfa050"
title: "EU AI Act Role Determination"
title_cn: "欧盟人工智能法案角色确定"
slug: "eu-ai-act-role-determination"
url: "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-role-determination"
author: "Oliver Schmidt-Prietz"
author_slug: "oliver-schmidt-prietz"
category: "compliance"
language: "en"
license: "AGPL 3.0"
jurisdictions: "EU"
status: "active"
views: 336
downloads: 373
created_at: "2026-03-16T01:00:00+01:00"
updated_at: "2026-03-16T01:00:00+01:00"
source_index: 187
---

# 欧盟人工智能法案角色确定

原始名称：`EU AI Act Role Determination`  
作者：Oliver Schmidt-Prietz  
分类：compliance  
来源：https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-role-determination

## 中文 README

# 欧盟人工智能法案角色确定 — 部署指南

> 📄 **【查看互动技能页面→】(https://oliverschmidtprietz.github.io/EU-AI-Act-Suite/ai-act-roles/)**

请参阅 [CHANGELOG.md](CHANGELOG.md) 了解版本历史记录。

## 概述

欧盟人工智能法案角色确定——确定组织在人工智能价值链中的角色并评估准提供商风险：

- **主要角色确定** — 提供商、部署者、进口商、分销商
- **准提供商风险评估（第 25 条）** — 实质性修改、品牌重塑、预期目的变更、高风险重新调整用途
- **视觉决策树**用于主要角色和准提供者触发器
- **微调评估**——微调 GPAI 模型何时会触发准提供商义务？
- **根据艺术进行实质性修改分析**。 3(23) 和委员会指南
- **价值链义务映射** — 哪些义务与哪些角色相关
- **人力资源/劳动力人工智能部署的雇佣法叠加**
- **行业指南交叉参考**，了解特定行业角色的细微差别
- **角色确定仪表板**输出具有法律依据和后续行动

## 文件结构
```
ai-act-roles/
├── SKILL.md                              # Main skill instructions (deploy this)
├── CHANGELOG.md                          # Version history
├── evals/
│   └── evals.json                        # Test cases
└── references/
    ├── role-definitions.md               # Provider, deployer, importer, distributor — Art. 3 definitions
    ├── substantial-modification.md       # Art. 3(23) substantial-modification analysis
    ├── quasi-provider-scenarios.md       # Art. 25 trigger scenarios
    ├── finetuning-assessment.md          # When fine-tuning becomes substantial modification
    ├── value-chain-obligations.md        # Obligation map per role
    ├── compliance-deadlines.md           # Deadline anchors per role
    ├── employment-law-overlay.md         # HR/workforce-specific overlay
    ├── sector-guidance-crossref.md       # Sector-specific role considerations
    └── case-studies.md                   # Worked role-determination examples
```
## 部署

### Claude.ai（用户技能）

1. 转到 **设置 → 个人资料 → 自定义技能**（或同等内容）
2.上传整个`ai-act-roles/`文件夹结构
3.该技能将在“AI行动角色”、“提供者与部署者”、“准提供者”、“第25条”、“实质性修改”或“Anbieter / Betreiber”时自动触发

### 克劳德代码/自定义 MCP 设置

1. 将 `ai-act-roles/` 文件夹复制到您的技能目录：
   ```bash
   cp -r ai-act-roles/ /path/to/your/skills/user/ai-act-roles/
   ```
| Phase | Description |
|-------|-------------|
| **Phase 1: Context Gathering** | Adaptive intake — what the organisation does with the AI, source/origin of the system |
| **Phase 2: Primary Role Determination** | Visual decision tree — provider / deployer / importer / distributor |
| **Phase 3: Quasi-Provider Risk Assessment (Art. 25)** | Trigger assessment tree — substantial modification, rebranding, purpose change, high-risk repurposing |
| **Phase 4: Role Determination Dashboard** | Output: primary role + quasi-provider verdict + legal basis + obligations preview |
| Feature | Description |
|---------|-------------|
| Primary Role Determination | Provider, deployer, importer, distributor — visual decision tree |
| Quasi-Provider Assessment | Art. 25 trigger tree (substantial modification, rebranding, purpose change, high-risk repurposing) |
| Fine-Tuning Analysis | When fine-tuning a GPAI model becomes substantial modification |
| Substantial Modification | Art. 3(23) analysis with Commission guidance |
| Value Chain Mapping | Obligations per role, feeding into obligation mapping |
| Employment-Law Overlay | HR/workforce-specific role considerations |
| Sector Cross-References | Sector-specific role nuances |
| Role Dashboard | Single-page output with verdict + legal basis + next steps |
| Document | Reference |
|----------|-----------|
| EU AI Act | Regulation (EU) 2024/1689 |
| Art. 3 | Definitions — provider, deployer, importer, distributor |
| Art. 3(23) | Substantial modification definition |
| Art. 25 | Responsibilities along the AI value chain (quasi-provider) |
| Commission Value Chain Guidance | Quasi-provider trigger interpretation |
| Art. 16, 26 | Obligations per primary role |
2. 确保该技能已在您的配置中注册

## 用法

### 快速入门

描述您的组织如何使用人工智能：

>“我们是一家德国银行。我们从以下机构获得了现成的信用评分模型的许可
> 一家美国供应商，根据我们自己的数据对其进行了微调，并为我们的输出重新命名了
> 客户。我们是提供者、部署者还是准提供者？”

该技能将遍历主要角色和准提供者树。

### 触发短语

- “确定 AI Act 角色”/“提供者还是部署者？” /“我们是部署者吗？”
- “准提供商”/“第 25 条”/“实质性修改”/“Wesentliche Veränderung”
- “价值链责任”/“Anbieter”/“Betreiber”
- “微调会让我们成为提供商吗？”

### 工作流程


## 能力总结


## 监管依据


## 许可和免责声明

该技能根据法规 (EU) 2024/1689 和委员会价值链指南提供结构化的《人工智能法案》角色确定指南。这不是法律建议。最终的角色决定应由具有《人工智能法案》专业知识的合格法律顾问参与。

根据 AGPL-3.0 许可。

> **质量保证：** 该技能附带了“evals/”文件夹中的评估测试，我运行该测试来根据预期结果检查其输出。

---

*由 Oliver Schmidt-Prietz 创建 — [OneZero Legal](https://onezero.legal)*

---

## Original README

# EU AI Act Role Determination — Deployment Guide

> 📄 **[View the interactive skill page →](https://oliverschmidtprietz.github.io/EU-AI-Act-Suite/ai-act-roles/)**

See [CHANGELOG.md](CHANGELOG.md) for version history.

## Overview

EU AI Act Role Determination — determines the organisation's role in the AI value chain and assesses quasi-provider risk:

- **Primary role determination** — provider, deployer, importer, distributor
- **Quasi-provider risk assessment (Art. 25)** — substantial modification, rebranding, intended-purpose change, high-risk repurposing
- **Visual decision trees** for primary role and quasi-provider triggers
- **Fine-tuning assessment** — when does fine-tuning a GPAI model trigger quasi-provider obligations?
- **Substantial modification analysis** per Art. 3(23) and Commission guidance
- **Value chain obligation mapping** — which obligations attach to which role
- **Employment-law overlay** for HR/workforce AI deployments
- **Sector guidance cross-reference** for sector-specific role nuances
- **Role Determination Dashboard** output with legal basis and follow-up actions

## File Structure

```
ai-act-roles/
├── SKILL.md                              # Main skill instructions (deploy this)
├── CHANGELOG.md                          # Version history
├── evals/
│   └── evals.json                        # Test cases
└── references/
    ├── role-definitions.md               # Provider, deployer, importer, distributor — Art. 3 definitions
    ├── substantial-modification.md       # Art. 3(23) substantial-modification analysis
    ├── quasi-provider-scenarios.md       # Art. 25 trigger scenarios
    ├── finetuning-assessment.md          # When fine-tuning becomes substantial modification
    ├── value-chain-obligations.md        # Obligation map per role
    ├── compliance-deadlines.md           # Deadline anchors per role
    ├── employment-law-overlay.md         # HR/workforce-specific overlay
    ├── sector-guidance-crossref.md       # Sector-specific role considerations
    └── case-studies.md                   # Worked role-determination examples
```

## Deployment

### Claude.ai (User Skills)

1. Go to **Settings → Profile → Custom Skills** (or equivalent)
2. Upload the entire `ai-act-roles/` folder structure
3. The skill will auto-trigger on "AI Act role", "provider vs deployer", "quasi-provider", "Art. 25", "substantial modification", or "Anbieter / Betreiber"

### Claude Code / Custom MCP Setup

1. Copy the `ai-act-roles/` folder to your skills directory:
   ```bash
   cp -r ai-act-roles/ /path/to/your/skills/user/ai-act-roles/
   ```
2. Ensure the skill is registered in your configuration

## Usage

### Quick Start

Describe what your organisation does with the AI:

> "We're a German bank. We licensed an off-the-shelf credit-scoring model from
> a US vendor, fine-tuned it on our own data, and rebranded the output for our
> customers. Are we the provider, deployer, or quasi-provider?"

The skill will walk through primary-role and quasi-provider trees.

### Trigger Phrases

- "Determine AI Act role" / "Provider or deployer?" / "Are we the deployer?"
- "Quasi-provider" / "Art. 25" / "Substantial modification" / "Wesentliche Veränderung"
- "Value chain responsibilities" / "Anbieter" / "Betreiber"
- "Does fine-tuning make us the provider?"

### Workflow

| Phase | Description |
|-------|-------------|
| **Phase 1: Context Gathering** | Adaptive intake — what the organisation does with the AI, source/origin of the system |
| **Phase 2: Primary Role Determination** | Visual decision tree — provider / deployer / importer / distributor |
| **Phase 3: Quasi-Provider Risk Assessment (Art. 25)** | Trigger assessment tree — substantial modification, rebranding, purpose change, high-risk repurposing |
| **Phase 4: Role Determination Dashboard** | Output: primary role + quasi-provider verdict + legal basis + obligations preview |

## Capabilities Summary

| Feature | Description |
|---------|-------------|
| Primary Role Determination | Provider, deployer, importer, distributor — visual decision tree |
| Quasi-Provider Assessment | Art. 25 trigger tree (substantial modification, rebranding, purpose change, high-risk repurposing) |
| Fine-Tuning Analysis | When fine-tuning a GPAI model becomes substantial modification |
| Substantial Modification | Art. 3(23) analysis with Commission guidance |
| Value Chain Mapping | Obligations per role, feeding into obligation mapping |
| Employment-Law Overlay | HR/workforce-specific role considerations |
| Sector Cross-References | Sector-specific role nuances |
| Role Dashboard | Single-page output with verdict + legal basis + next steps |

## Regulatory Basis

| Document | Reference |
|----------|-----------|
| EU AI Act | Regulation (EU) 2024/1689 |
| Art. 3 | Definitions — provider, deployer, importer, distributor |
| Art. 3(23) | Substantial modification definition |
| Art. 25 | Responsibilities along the AI value chain (quasi-provider) |
| Commission Value Chain Guidance | Quasi-provider trigger interpretation |
| Art. 16, 26 | Obligations per primary role |

## License & Disclaimer

This skill provides structured AI Act role-determination guidance based on Regulation (EU) 2024/1689 and Commission value chain guidance. It is not legal advice. Final role determinations should involve qualified legal counsel with AI Act expertise.

Licensed under AGPL-3.0.

> **Quality assurance:** this skill ships with evaluation tests in the `evals/` folder, which I run to check its outputs against expected results.

---

*Created by Oliver Schmidt-Prietz — [OneZero Legal](https://onezero.legal)*
