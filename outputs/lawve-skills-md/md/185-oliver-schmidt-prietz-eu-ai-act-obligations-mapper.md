---
id: "d63f36f2-475a-5ba3-a6c5-e2cac6a8c072"
title: "EU AI Act Obligations Mapper"
title_cn: "欧盟人工智能法案义务映射器"
slug: "eu-ai-act-obligations-mapper"
url: "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-obligations-mapper"
author: "Oliver Schmidt-Prietz"
author_slug: "oliver-schmidt-prietz"
category: "compliance"
language: "en"
license: "AGPL 3.0"
jurisdictions: "EU"
status: "active"
views: 419
downloads: 426
created_at: "2026-03-16T01:00:00+01:00"
updated_at: "2026-03-16T01:00:00+01:00"
source_index: 185
---

# 欧盟人工智能法案义务映射器

原始名称：`EU AI Act Obligations Mapper`  
作者：Oliver Schmidt-Prietz  
分类：compliance  
来源：https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-obligations-mapper

## 中文 README

# 欧盟人工智能法案义务映射器 — 部署指南

> 📄 **【查看互动技能页面→】(https://oliverschmidtprietz.github.io/EU-AI-Act-Suite/ai-act-obligations/)**

请参阅 [CHANGELOG.md](CHANGELOG.md) 了解版本历史记录。

## 概述

欧盟人工智能法案义务映射器 — 为给定角色 + 风险层生成可操作的合规矩阵：

- **角色 × 层级义务矩阵** — 禁止、高风险、GPAI、艺术的提供商、部署者、进口商、分销商。 50，最小
- 每项义务的 **RACI 分配**（负责/负责/咨询/通知）
- **实施优先事项** 根据合规期限排序
- **技术措施** — 风险管理、数据治理、日志记录、透明度、人工监督、准确性/稳健性、网络安全
- **组织措施** — 质量管理、上市后监控、事件报告、合格评定
- **管理体系** — 要求的内容（例如 QMS 第 17 条）与建议的内容
- **需要进行影响评估**（DPIA、FRIA、合格评定）并进行交叉引用
- **GDPR Crosswalk** —《人工智能法案》和 GDPR 义务之间的重叠和相互作用
- **监管叠加** - 特定部门层（银行、医疗设备、就业）
- **艺术。 6(4) 文档** 对艺术的支持。 6(3)-例外用户
- **欧盟数据库注册**附件三高风险系统的工作流程
- **具有优先决策树的合规路线图**

## 文件结构
```
ai-act-obligations/
├── SKILL.md                                  # Main skill instructions (deploy this)
├── CHANGELOG.md                              # Version history
├── evals/
│   └── evals.json                            # Test cases
└── references/
    ├── high-risk-provider-obligations.md     # Art. 16, 9, 10, 11, 12, 13, 14, 15
    ├── high-risk-deployer-obligations.md     # Art. 26, 27 (FRIA)
    ├── gpai-obligations.md                   # Art. 53, 55, Code of Practice
    ├── low-risk-obligations.md               # Art. 50 transparency + voluntary measures
    ├── technical-measures.md                 # Risk mgmt, data governance, logging, etc.
    ├── organizational-measures.md            # QMS, post-market monitoring, incident reporting
    ├── management-systems.md                 # Art. 17 QMS specifics
    ├── conformity-assessment.md              # Annex VI/VII procedures
    ├── post-market-monitoring.md             # Art. 72 post-market system
    ├── eu-database-registration.md           # Art. 71 EU database workflow
    ├── art6-4-documentation.md               # Art. 6(4) exception documentation
    ├── fria-template.md                      # Fundamental Rights Impact Assessment scaffold
    ├── gdpr-crosswalk.md                     # AI Act ↔ GDPR mapping
    ├── regulatory-overlays.md                # Sector-specific compliance layers
    ├── compliance-roadmap.md                 # Priority decision tree + sequencing
    └── case-studies.md                       # Worked obligation-mapping examples
```
## 部署

### Claude.ai（用户技能）

1. 转到 **设置 → 个人资料 → 自定义技能**（或同等内容）
2.上传整个`ai-act-obligations/`文件夹结构
3. 当您要求映射义务、建立合规清单或评估《人工智能法案》下的提供商/部署者职责时，该技能将自动触发

### 克劳德代码/自定义 MCP 设置

1. 将 `ai-act-obligations/` 文件夹复制到您的技能目录：
   ```bash
   cp -r ai-act-obligations/ /path/to/your/skills/user/ai-act-obligations/
   ```
| Phase | Description |
|-------|-------------|
| **Phase 1: Input Context** | Context-aware adaptive intake — role, risk tier, sector, jurisdiction; consumes prior skill output if provided |
| **Phase 2: Obligation Mapping** | Tier-specific obligation list with priority decision tree |
| **Phase 3: Implementation Roadmap** | Sequenced plan against deadlines with quick-win identification |
| **Phase 4: Obligations Matrix Output** | RACI-tagged matrix: technical measures, organisational measures, management systems, impact assessments, GDPR cross-refs |
| Feature | Description |
|---------|-------------|
| Role × Tier Matrix | All combinations (provider/deployer/importer/distributor × prohibited/high-risk/GPAI/Art. 50/minimal) |
| RACI Assignments | Per-obligation R/A/C/I tagging |
| Technical Measures | Art. 9, 10, 11, 12, 13, 14, 15 implementation guidance |
| Organisational Measures | Art. 17 QMS, post-market monitoring, incident reporting |
| Conformity Assessment | Annex VI / VII procedure routing |
| EU Database Registration | Art. 71 high-risk system registration |
| FRIA Support | Art. 27 fundamental rights impact assessment scaffold |
| GDPR Crosswalk | Mapping to GDPR obligations (DPIA, controller/processor) |
| Sector Overlays | Banking, medical devices, employment, biometrics |
| Compliance Roadmap | Priority decision tree + deadline-aware sequencing |
| Document | Reference |
|----------|-----------|
| EU AI Act | Regulation (EU) 2024/1689 — Titles III, IV, V |
| Art. 9–15 | Technical requirements for high-risk systems |
| Art. 16–17 | Provider obligations + QMS |
| Art. 26–27 | Deployer obligations + FRIA |
| Art. 50 | Transparency obligations |
| Art. 53, 55 | GPAI obligations (standard + systemic risk) |
| Art. 71 | EU database registration |
| Art. 72 | Post-market monitoring |
| GPAI Code of Practice | Art. 53 implementation framework |
| GDPR | Crosswalk for DPIA + controller/processor obligations |
2. 确保该技能已在您的配置中注册

## 用法

### 快速入门

告诉技能您的角色和风险等级（或仅描述系统）：

> “我们是用于信用评分的高风险人工智能系统的部署者
> 德国。我们有什么义务，我们应该优先考虑什么
> 前 6 个月？”

该技能将生成包含 RACI 和优先级的定制义务矩阵。

### 触发短语

-“绘制人工智能法案义务”/“检查我们需要做什么”/“合规清单”
- “部署者义务”/“提供商职责”/“第 26 条”/“第 16-17 条”
- “人工智能素养第 4 条”/“DPIA”/“FRIA”/“基本权利评估”
- “Pflichten目录”

### 工作流程


## 能力总结


## 监管依据


## 许可和免责声明

该技能提供基于法规 (EU) 2024/1689 的结构化《人工智能法案》义务指导。这不是法律建议。合规措施的实施应有合格的法律顾问和相关技术专家参与。

根据 AGPL-3.0 许可。

> **质量保证：** 该技能附带了“evals/”文件夹中的评估测试，我运行该测试来根据预期结果检查其输出。

---

*由 Oliver Schmidt-Prietz 创建 — [OneZero Legal](https://onezero.legal)*

---

## Original README

# EU AI Act Obligations Mapper — Deployment Guide

> 📄 **[View the interactive skill page →](https://oliverschmidtprietz.github.io/EU-AI-Act-Suite/ai-act-obligations/)**

See [CHANGELOG.md](CHANGELOG.md) for version history.

## Overview

EU AI Act Obligations Mapper — produces an actionable compliance matrix for a given role + risk tier:

- **Role × tier obligation matrix** — provider, deployer, importer, distributor across prohibited, high-risk, GPAI, Art. 50, minimal
- **RACI assignments** for each obligation (Responsible / Accountable / Consulted / Informed)
- **Implementation priorities** sequenced against compliance deadlines
- **Technical measures** — risk management, data governance, logging, transparency, human oversight, accuracy/robustness, cybersecurity
- **Organisational measures** — quality management, post-market monitoring, incident reporting, conformity assessment
- **Management systems** — what is required (e.g., Art. 17 QMS) vs. recommended
- **Impact assessments** required (DPIA, FRIA, conformity assessment) with cross-references
- **GDPR crosswalk** — overlap and interplay between AI Act and GDPR obligations
- **Regulatory overlays** — sector-specific layers (banking, medical devices, employment)
- **Art. 6(4) documentation** support for Art. 6(3)-exception users
- **EU database registration** workflow for Annex III high-risk systems
- **Compliance roadmap** with priority decision tree

## File Structure

```
ai-act-obligations/
├── SKILL.md                                  # Main skill instructions (deploy this)
├── CHANGELOG.md                              # Version history
├── evals/
│   └── evals.json                            # Test cases
└── references/
    ├── high-risk-provider-obligations.md     # Art. 16, 9, 10, 11, 12, 13, 14, 15
    ├── high-risk-deployer-obligations.md     # Art. 26, 27 (FRIA)
    ├── gpai-obligations.md                   # Art. 53, 55, Code of Practice
    ├── low-risk-obligations.md               # Art. 50 transparency + voluntary measures
    ├── technical-measures.md                 # Risk mgmt, data governance, logging, etc.
    ├── organizational-measures.md            # QMS, post-market monitoring, incident reporting
    ├── management-systems.md                 # Art. 17 QMS specifics
    ├── conformity-assessment.md              # Annex VI/VII procedures
    ├── post-market-monitoring.md             # Art. 72 post-market system
    ├── eu-database-registration.md           # Art. 71 EU database workflow
    ├── art6-4-documentation.md               # Art. 6(4) exception documentation
    ├── fria-template.md                      # Fundamental Rights Impact Assessment scaffold
    ├── gdpr-crosswalk.md                     # AI Act ↔ GDPR mapping
    ├── regulatory-overlays.md                # Sector-specific compliance layers
    ├── compliance-roadmap.md                 # Priority decision tree + sequencing
    └── case-studies.md                       # Worked obligation-mapping examples
```

## Deployment

### Claude.ai (User Skills)

1. Go to **Settings → Profile → Custom Skills** (or equivalent)
2. Upload the entire `ai-act-obligations/` folder structure
3. The skill will auto-trigger when you ask to map obligations, build a compliance checklist, or assess provider/deployer duties under the AI Act

### Claude Code / Custom MCP Setup

1. Copy the `ai-act-obligations/` folder to your skills directory:
   ```bash
   cp -r ai-act-obligations/ /path/to/your/skills/user/ai-act-obligations/
   ```
2. Ensure the skill is registered in your configuration

## Usage

### Quick Start

Tell the skill your role and risk tier (or just describe the system):

> "We're the deployer of a high-risk AI system used for credit scoring in
> Germany. What obligations do we have, and what should we prioritise in
> the first 6 months?"

The skill will produce a tailored obligation matrix with RACI and priorities.

### Trigger Phrases

- "Map AI Act obligations" / "Check what we need to do" / "Compliance checklist"
- "Deployer obligations" / "Provider duties" / "Art. 26" / "Art. 16-17"
- "AI literacy Art. 4" / "DPIA" / "FRIA" / "fundamental rights assessment"
- "Pflichtenkatalog"

### Workflow

| Phase | Description |
|-------|-------------|
| **Phase 1: Input Context** | Context-aware adaptive intake — role, risk tier, sector, jurisdiction; consumes prior skill output if provided |
| **Phase 2: Obligation Mapping** | Tier-specific obligation list with priority decision tree |
| **Phase 3: Implementation Roadmap** | Sequenced plan against deadlines with quick-win identification |
| **Phase 4: Obligations Matrix Output** | RACI-tagged matrix: technical measures, organisational measures, management systems, impact assessments, GDPR cross-refs |

## Capabilities Summary

| Feature | Description |
|---------|-------------|
| Role × Tier Matrix | All combinations (provider/deployer/importer/distributor × prohibited/high-risk/GPAI/Art. 50/minimal) |
| RACI Assignments | Per-obligation R/A/C/I tagging |
| Technical Measures | Art. 9, 10, 11, 12, 13, 14, 15 implementation guidance |
| Organisational Measures | Art. 17 QMS, post-market monitoring, incident reporting |
| Conformity Assessment | Annex VI / VII procedure routing |
| EU Database Registration | Art. 71 high-risk system registration |
| FRIA Support | Art. 27 fundamental rights impact assessment scaffold |
| GDPR Crosswalk | Mapping to GDPR obligations (DPIA, controller/processor) |
| Sector Overlays | Banking, medical devices, employment, biometrics |
| Compliance Roadmap | Priority decision tree + deadline-aware sequencing |

## Regulatory Basis

| Document | Reference |
|----------|-----------|
| EU AI Act | Regulation (EU) 2024/1689 — Titles III, IV, V |
| Art. 9–15 | Technical requirements for high-risk systems |
| Art. 16–17 | Provider obligations + QMS |
| Art. 26–27 | Deployer obligations + FRIA |
| Art. 50 | Transparency obligations |
| Art. 53, 55 | GPAI obligations (standard + systemic risk) |
| Art. 71 | EU database registration |
| Art. 72 | Post-market monitoring |
| GPAI Code of Practice | Art. 53 implementation framework |
| GDPR | Crosswalk for DPIA + controller/processor obligations |

## License & Disclaimer

This skill provides structured AI Act obligations guidance based on Regulation (EU) 2024/1689. It is not legal advice. Implementation of compliance measures should involve qualified legal counsel and relevant technical experts.

Licensed under AGPL-3.0.

> **Quality assurance:** this skill ships with evaluation tests in the `evals/` folder, which I run to check its outputs against expected results.

---

*Created by Oliver Schmidt-Prietz — [OneZero Legal](https://onezero.legal)*
