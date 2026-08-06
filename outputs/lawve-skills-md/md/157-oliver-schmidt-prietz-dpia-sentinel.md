---
id: "45068a2d-55bf-5c9f-81f8-7eebf4686419"
title: "DPIA Sentinel"
title_cn: "DPIA 哨兵"
slug: "dpia-sentinel"
url: "https://lawve.ai/@oliver-schmidt-prietz/skill/dpia-sentinel"
author: "Oliver Schmidt-Prietz"
author_slug: "oliver-schmidt-prietz"
category: "data-protection"
language: "en"
license: "AGPL 3.0"
jurisdictions: "EU"
status: "active"
views: 908
downloads: 562
created_at: "2026-02-10T01:00:00+01:00"
updated_at: "2026-04-30T12:26:57.979060+02:00"
source_index: 157
---

# DPIA 哨兵

原始名称：`DPIA Sentinel`  
作者：Oliver Schmidt-Prietz  
分类：data-protection  
来源：https://lawve.ai/@oliver-schmidt-prietz/skill/dpia-sentinel

## 中文 README

# DPIA Sentinel — 部署指南

> 📄 **【查看互动技能页面→】(https://oliverschmidtprietz.github.io/GDPR-DPIA-Sentinel/)**

## 概述

GDPR 数据保护影响评估 Sentinel — Claude 的结构化 DPIA 指导技能，可提供：

- **根据艺术进行阈值评估**。 35(3) 强制触发因素和 EDPB 九项标准分析
- **跨 7 个欧盟成员国（德国、法国、爱尔兰、比利时、荷兰、意大利、波兰）的多司法管辖区黑名单/白名单检查**
- **EDPB 2026 DPIA 模板支持** — 以官方统一的欧盟格式生成文档（第 0-6 节）
- **双轨风险模型** — 根据 EDPB 方法论的固有设计风险（轨道 A）和运营风险（轨道 B）
- 从数据主体的角度来看，具有调节因素的 **5×5 风险评估**
- **所有措施的实施状态跟踪**（计划/部分实施/已实施）
- **必要性和相称性**作为单独的上游评估门
- 风险相关处理基础设施的**资产库存**
- **艺术。 36 事先咨询** 四种结果判决的决策支持
- **AI 双阶段分析** 根据 EDPB 意见 28/2024（训练与部署）
- **通过模板填充生成可审计的 .docx 文档**（EDPB 2026 格式、自定义 12 节报告、阈值备忘录、执行摘要、第 36 条包）

## 文件结构
```
dpia-skill/
├── SKILL.md                              # Main skill instructions (deploy this)
├── CHANGELOG.md                          # Version history
└── references/
    ├── edpb-criteria.md                  # EDPB nine criteria + multi-jurisdictional framework
    ├── edpb-2026-template.md             # EDPB 2026 DPIA template field-by-field spec
    ├── edpb-2026-template-v1.docx        # Official EDPB template .docx (populatable)
    ├── edpb-2026-population.md           # Table-by-table population guide for the template
    ├── edpb-2026-explainer.md            # EDPB 2026 methodology reference
    ├── dpia-custom-template-v1.docx      # Custom 12-section DPIA template .docx (populatable)
    ├── dpia-custom-population.md         # Population guide for custom template
    ├── scoring.md                        # 5×5 risk scoring + modulating factors + two tracks
    ├── risk-catalog.md                   # Common DPIA risks by processing type (Track A+B)
    ├── templates.md                      # Document templates (5 formats)
    ├── sources.md                        # Regulatory source references
    └── jurisdictions/
        ├── de-dsk.md                     # Germany — DSK blacklist
        ├── fr-cnil.md                    # France — CNIL blacklist
        ├── ie-dpc.md                     # Ireland — DPC blacklist
        ├── be-apd.md                     # Belgium — APD blacklist
        ├── nl-ap.md                      # Netherlands — AP blacklist
        ├── it-garante.md                 # Italy — Garante blacklist
        ├── pl-uodo.md                    # Poland — UODO blacklist
        └── whitelists.md                 # FR, CZ, ES, AT whitelist exemptions
```
## 部署

### Claude.ai（用户技能）

1. 转到 **设置 → 个人资料 → 自定义技能**（或同等内容）
2.上传整个`dpia-skill/`文件夹结构
3.当你提到DPIA、DSFA、Art时，该技能会自动触发。 35、或描述高风险处理

### 克劳德代码/自定义 MCP 设置

1. 将 `dpia-skill/` 文件夹复制到您的技能目录：
   ```bash
   cp -r dpia-skill/ /path/to/your/skills/user/dpia-skill/
   ```
| Phase | Description |
|-------|-------------|
| **Threshold** | Art. 35(3) triggers + nine-criteria analysis + national blacklist checks |
| **Description** | Systematic processing description per Art. 35(7)(a) |
| **Asset Inventory** | Risk-relevant assets grouped by type (EDPB 2026, Section 1.3) |
| **Necessity** | Effectiveness + least-intrusive test (upstream gate) |
| **Proportionality** | Benefits vs. impact balancing (upstream gate) |
| **Inherent Risks** | Track A (by-design) + Track B (operational), 5×5 matrix + modulating factors |
| **Mitigation** | Technical, organizational, and legal measures with implementation status |
| **Residual Risk** | Overall verdict: APPROVED / CONDITIONALLY APPROVED / CONSULT SA / REJECTED |
| **Documentation** | Audit-ready .docx generation (EDPB 2026 or custom format) |
| Template | Description |
|----------|-------------|
| EDPB 2026 DPIA Report | Official harmonised format (Sections 0–6, recognized by all EU SAs) |
| Full DPIA Report (custom) | Custom 12-section assessment with threshold analysis + annexes |
| Threshold Justification Memo | 2-3 page document explaining why a DPIA is NOT required |
| Executive Summary | 1-2 page board/leadership summary |
| Art. 36 Consultation Package | Submission package for SA prior consultation |
| Document | Reference |
|----------|-----------|
| GDPR Article 35 | DPIA obligation |
| GDPR Article 36 | Prior consultation |
| EDPB DPIA Template v1.0 (March 2026) | Harmonised EU-wide DPIA structure |
| EDPB Guidelines WP 248 rev.01 | DPIA methodology and nine criteria |
| EDPB Opinion 28/2024 | DPIA for AI processing |
| EDPB Guidelines 01/2025 | Pseudonymisation as risk reducer |
| National SA Art. 35(4) lists | Mandatory DPIA blacklists (7 jurisdictions) |
2. 确保该技能已在您的配置中注册

## 用法

### 快速入门

只需描述您的处理活动：

>“我们计划部署一个人工智能系统，根据求职者的简历对他们进行评分
> 和视频采访。该系统将在德国、法国和荷兰使用。
> 我们需要 DPIA 吗？”

该技能将激活并指导您完成评估。

### 触发短语

- “我需要 DPIA 吗？” /“DSFA”/“Datenschutz-Folgenabschaetzung”
- “第 35 条”/“影响评估”/“高风险处理”
- “我们希望部署人工智能......”/“分析”/“大规模监控”
- “生成 DPIA 报告”

### 评估流程


## 文档类型


## 监管依据


## 版本历史

请参阅 [CHANGELOG.md](CHANGELOG.md) 了解完整的版本历史记录。

## 许可和免责声明

该技能根据公开的 GDPR 监管材料提供结构化指导。它不构成法律建议。所有 DPIA 决定均应涉及您的 DPO（第 35(2) 条）和合格的法律顾问。

> **质量保证：** 该技能附带了“evals/”文件夹中的评估测试，我运行该测试来根据预期结果检查其输出。

---

*由 Oliver Schmidt-Prietz 创建 — [OneZero Legal](https://onezero.legal)*

---

## Original README

# DPIA Sentinel — Deployment Guide

> 📄 **[View the interactive skill page →](https://oliverschmidtprietz.github.io/GDPR-DPIA-Sentinel/)**

## Overview

GDPR Data Protection Impact Assessment Sentinel — a structured DPIA guidance skill for Claude that provides:

- **Threshold assessment** against Art. 35(3) mandatory triggers and EDPB nine-criteria analysis
- **Multi-jurisdictional blacklist/whitelist checks** across 7 EU Member States (DE, FR, IE, BE, NL, IT, PL)
- **EDPB 2026 DPIA Template support** — generate documents in the official harmonised EU format (Sections 0–6)
- **Two-track risk model** — inherent-by-design risks (Track A) and operational risks (Track B) per EDPB methodology
- **5×5 risk assessment** with modulating factors, from the data subject's perspective
- **Implementation status tracking** for all measures (Planned / Partially Implemented / Implemented)
- **Necessity and proportionality** as separate upstream assessment gates
- **Asset inventory** for risk-relevant processing infrastructure
- **Art. 36 prior consultation** decision support with four-outcome verdict
- **AI dual-phase analysis** per EDPB Opinion 28/2024 (training vs. deployment)
- **Audit-ready .docx document generation** via template population (EDPB 2026 format, custom 12-section report, threshold memo, executive summary, Art. 36 package)

## File Structure

```
dpia-skill/
├── SKILL.md                              # Main skill instructions (deploy this)
├── CHANGELOG.md                          # Version history
└── references/
    ├── edpb-criteria.md                  # EDPB nine criteria + multi-jurisdictional framework
    ├── edpb-2026-template.md             # EDPB 2026 DPIA template field-by-field spec
    ├── edpb-2026-template-v1.docx        # Official EDPB template .docx (populatable)
    ├── edpb-2026-population.md           # Table-by-table population guide for the template
    ├── edpb-2026-explainer.md            # EDPB 2026 methodology reference
    ├── dpia-custom-template-v1.docx      # Custom 12-section DPIA template .docx (populatable)
    ├── dpia-custom-population.md         # Population guide for custom template
    ├── scoring.md                        # 5×5 risk scoring + modulating factors + two tracks
    ├── risk-catalog.md                   # Common DPIA risks by processing type (Track A+B)
    ├── templates.md                      # Document templates (5 formats)
    ├── sources.md                        # Regulatory source references
    └── jurisdictions/
        ├── de-dsk.md                     # Germany — DSK blacklist
        ├── fr-cnil.md                    # France — CNIL blacklist
        ├── ie-dpc.md                     # Ireland — DPC blacklist
        ├── be-apd.md                     # Belgium — APD blacklist
        ├── nl-ap.md                      # Netherlands — AP blacklist
        ├── it-garante.md                 # Italy — Garante blacklist
        ├── pl-uodo.md                    # Poland — UODO blacklist
        └── whitelists.md                 # FR, CZ, ES, AT whitelist exemptions
```

## Deployment

### Claude.ai (User Skills)

1. Go to **Settings → Profile → Custom Skills** (or equivalent)
2. Upload the entire `dpia-skill/` folder structure
3. The skill will auto-trigger when you mention DPIA, DSFA, Art. 35, or describe high-risk processing

### Claude Code / Custom MCP Setup

1. Copy the `dpia-skill/` folder to your skills directory:
   ```bash
   cp -r dpia-skill/ /path/to/your/skills/user/dpia-skill/
   ```
2. Ensure the skill is registered in your configuration

## Usage

### Quick Start

Just describe your processing activity:

> "We're planning to deploy an AI system that scores job applicants based on their CVs
> and video interviews. The system will be used across Germany, France, and the Netherlands.
> Do we need a DPIA?"

The skill will activate and guide you through the assessment.

### Trigger Phrases

- "Do I need a DPIA?" / "DSFA" / "Datenschutz-Folgenabschaetzung"
- "Art. 35" / "impact assessment" / "high-risk processing"
- "We want to deploy AI for..." / "profiling" / "large-scale monitoring"
- "Generate a DPIA report"

### Assessment Flow

| Phase | Description |
|-------|-------------|
| **Threshold** | Art. 35(3) triggers + nine-criteria analysis + national blacklist checks |
| **Description** | Systematic processing description per Art. 35(7)(a) |
| **Asset Inventory** | Risk-relevant assets grouped by type (EDPB 2026, Section 1.3) |
| **Necessity** | Effectiveness + least-intrusive test (upstream gate) |
| **Proportionality** | Benefits vs. impact balancing (upstream gate) |
| **Inherent Risks** | Track A (by-design) + Track B (operational), 5×5 matrix + modulating factors |
| **Mitigation** | Technical, organizational, and legal measures with implementation status |
| **Residual Risk** | Overall verdict: APPROVED / CONDITIONALLY APPROVED / CONSULT SA / REJECTED |
| **Documentation** | Audit-ready .docx generation (EDPB 2026 or custom format) |

## Document Types

| Template | Description |
|----------|-------------|
| EDPB 2026 DPIA Report | Official harmonised format (Sections 0–6, recognized by all EU SAs) |
| Full DPIA Report (custom) | Custom 12-section assessment with threshold analysis + annexes |
| Threshold Justification Memo | 2-3 page document explaining why a DPIA is NOT required |
| Executive Summary | 1-2 page board/leadership summary |
| Art. 36 Consultation Package | Submission package for SA prior consultation |

## Regulatory Basis

| Document | Reference |
|----------|-----------|
| GDPR Article 35 | DPIA obligation |
| GDPR Article 36 | Prior consultation |
| EDPB DPIA Template v1.0 (March 2026) | Harmonised EU-wide DPIA structure |
| EDPB Guidelines WP 248 rev.01 | DPIA methodology and nine criteria |
| EDPB Opinion 28/2024 | DPIA for AI processing |
| EDPB Guidelines 01/2025 | Pseudonymisation as risk reducer |
| National SA Art. 35(4) lists | Mandatory DPIA blacklists (7 jurisdictions) |

## Version History

See [CHANGELOG.md](CHANGELOG.md) for full version history.

## License & Disclaimer

This skill provides structured guidance based on publicly available GDPR regulatory materials. It does not constitute legal advice. All DPIA decisions should involve your DPO (Art. 35(2)) and qualified legal counsel.

> **Quality assurance:** this skill ships with evaluation tests in the `evals/` folder, which I run to check its outputs against expected results.

---

*Created by Oliver Schmidt-Prietz — [OneZero Legal](https://onezero.legal)*
