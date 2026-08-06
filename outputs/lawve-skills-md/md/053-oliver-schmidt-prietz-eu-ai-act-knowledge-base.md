---
id: "54477ed5-9253-5c06-9dab-9cf3e7b9f2bc"
title: "EU AI Act Knowledge Base"
title_cn: "欧盟人工智能法案知识库"
slug: "eu-ai-act-knowledge-base"
url: "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-knowledge-base"
author: "Oliver Schmidt-Prietz"
author_slug: "oliver-schmidt-prietz"
category: "compliance"
language: "en"
license: "AGPL 3.0"
jurisdictions: "EU"
status: "active"
views: 61
downloads: 21
created_at: "2026-06-09T11:49:40.174631+02:00"
updated_at: "2026-06-09T11:55:26.161339+02:00"
source_index: 53
---

# 欧盟人工智能法案知识库

原始名称：`EU AI Act Knowledge Base`  
作者：Oliver Schmidt-Prietz  
分类：compliance  
来源：https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-knowledge-base

## 中文 README

# 欧盟人工智能法案知识引擎 — 部署指南

> 📄 **【查看互动技能页面→】(https://oliverschmidtprietz.github.io/EU-AI-Act-Suite/ai-act-knowledge/)**

请参阅 [CHANGELOG.md](CHANGELOG.md) 了解版本历史记录。

## 概述

欧盟人工智能法案知识引擎——基于 70 份欧盟官方源文件的权威监管问答技能：

- **文章级引文**来自法规 (EU) 2024/1689 全文
- **完整序言 + 13 个标题** 包含结构化参考文件（标题 I–XIII）
- 关于人工智能系统定义、禁止做法、高风险分类和数字综合的**委员会指南**
- **EDPB/EDPS 意见** 包括意见 28/2024（AI-DPIA 相互作用）和 2026 联合意见
- **实践守则** — GPAI 守则（3 个版本）、透明度守则（草案 + 概述）
- **FRIA 材料** — 艺术。 27文本，丹麦学院指南，ECNL实用指南
- **统一标准** — 艺术。 40 框架、prEN 18286、JTC 21 路线图
- 针对银行、医疗设备、人员配备、医疗保健、执法的**特定行业指南**
- **国家实施跟踪** - 德国人工智能法案、监管沙箱、国家服务台
- **事件报告模板** — GPAI 严重事件，艺术。 73 高风险指南草案

## 文件结构
```
ai-act-knowledge/
├── SKILL.md                          # Main skill instructions (deploy this)
├── CHANGELOG.md                      # Version history
└── references/                       # 70 reference files across 15 subdirectories
    ├── core/                         # Regulation text by Title (I–XIII) + preamble + Annex III + decision trees
    ├── guidelines/                   # Commission guidelines (AI system definition, prohibited, GPAI, omnibus)
    ├── codes-of-practice/            # GPAI Code + Transparency Code (multiple versions)
    ├── opinions/                     # EDPB/EDPS opinions (2021, 2026, 28/2024)
    ├── standards/                    # Art. 40 harmonised standards, prEN 18286, JTC 21
    ├── fria/                         # Art. 27 FRIA — text + practical guides
    ├── governance/                   # AI Office FAQ, AI Pact, enforcement, timeline
    ├── national/                     # National implementation (DE bill, sandboxes, service desks)
    ├── sector-specific/              # Banking, medical devices, staffing
    ├── cybersecurity/                # ENISA advisories
    ├── law-enforcement/              # Europol AI policing
    ├── compliance-guides/            # AI literacy, SME guide, copyright/TDM, whistleblowing
    ├── impact-assessments/           # Commission IA + supporting study + healthcare 2026
    └── templates/                    # GPAI training data, serious incident, high-risk draft
```
## 部署

### Claude.ai（用户技能）

1. 转到 **设置 → 个人资料 → 自定义技能**（或同等内容）
2.上传整个`ai-act-knowledge/`文件夹结构
3. 当您询问 AI 法案条款、要求、处罚、GPAI 义务、FRIA 或任何 AI 法案主题时，该技能将自动触发

### 克劳德代码/自定义 MCP 设置

1. 将 `ai-act-knowledge/` 文件夹复制到您的技能目录：
   ```bash
   cp -r ai-act-knowledge/ /path/to/your/skills/user/ai-act-knowledge/
   ```
| Step | Description |
|------|-------------|
| **1. Classify Question** | Topic Router determines which reference subdirectory(ies) to consult |
| **2. Load References** | Read targeted reference files (article text, guidelines, opinions, codes) |
| **3. Synthesise** | Produce answer with article-level citations and cross-references to related provisions |
| Feature | Description |
|---------|-------------|
| Article-Level Q&A | Direct answers grounded in the full regulation text (preamble + 13 Titles) |
| Commission Guidelines | AI system definition, prohibited practices, high-risk, Digital Omnibus |
| EDPB/EDPS Opinions | 2021 joint, 2026 joint, Opinion 28/2024 (AI-DPIA) |
| Codes of Practice | GPAI Code (3 versions), Transparency Code (drafts + overview) |
| FRIA Materials | Art. 27 text + Danish Institute and ECNL practical guides |
| Harmonised Standards | Art. 40 framework, prEN 18286, JTC 21 roadmap |
| Sector Guidance | Banking, medical devices, staffing, healthcare, law enforcement |
| National Implementation | German AI bill, regulatory sandboxes, Member State service desks |
| Incident Templates | GPAI serious incident reporting, Art. 73 high-risk draft |
| Cross-Framework | AI Act ↔ GDPR, ENISA cybersecurity overlays |
| Document | Reference |
|----------|-----------|
| EU AI Act | Regulation (EU) 2024/1689 (full text + recitals) |
| Commission Guidelines | AI system definition, Art. 5 prohibitions, Art. 6 high-risk, Digital Omnibus |
| EDPB Opinion 28/2024 | DPIA for AI processing |
| EDPB-EDPS Joint Opinions | 2021 and 2026 |
| GPAI Code of Practice | Art. 53/55 implementation framework |
| Art. 50 Code of Practice | Transparency labeling framework |
| Art. 40 Harmonised Standards | JTC 21 framework, prEN 18286 |
| ENISA Advisories | AI cybersecurity, standardisation |
2. 确保该技能已在您的配置中注册

## 用法

### 快速入门

询问任何《人工智能法案》问题：

> “第 27 条对基本权利影响评估有何要求，以及
> 它何时适用于高风险系统的部署者？”

该技能将路由到正确的参考文件并生成引用的答案。

### 触发短语

- “解释第 X 条”/“第 X 条说了什么？” /《人工智能法案要求》
- “GPAI义务”/“高风险人工智能”/“禁止的人工智能实践”
- 《人工智能法案和 GDPR》/《基本权利影响评估》/《人工智能素养》
-“KI-Verordnung”/“Hochrisiko-KI”/“GPAI-Verhaltenskodex”

> 对于产生分类决策（而不是
> 知识答案），要求进行结构化的风险等级分类。

### 工作流程


## 能力总结


## 监管依据


## 许可和免责声明

该技能提供基于法规 (EU) 2024/1689 和欧盟官方机构来源的结构化 AI 法案监管信息。这不是法律建议。具体的合规决策应由具有《人工智能法案》专业知识的合格法律顾问参与。

根据 AGPL-3.0 许可。

> **质量保证：** 该技能附带了“evals/”文件夹中的评估测试，我运行该测试来根据预期结果检查其输出。

---

*由 Oliver Schmidt-Prietz 创建 — [OneZero Legal](https://onezero.legal)*

---

## Original README

# EU AI Act Knowledge Engine — Deployment Guide

> 📄 **[View the interactive skill page →](https://oliverschmidtprietz.github.io/EU-AI-Act-Suite/ai-act-knowledge/)**

See [CHANGELOG.md](CHANGELOG.md) for version history.

## Overview

EU AI Act Knowledge Engine — an authoritative regulatory Q&A skill grounded in 70 official EU source documents:

- **Article-level citations** from the full text of Regulation (EU) 2024/1689
- **Full preamble + 13 Titles** covered by structured reference files (Titles I–XIII)
- **Commission guidelines** on AI system definition, prohibited practices, high-risk classification, and Digital Omnibus
- **EDPB/EDPS opinions** including Opinion 28/2024 (AI-DPIA interplay) and 2026 joint opinion
- **Codes of Practice** — GPAI Code (3 versions), Transparency Code (drafts + overview)
- **FRIA materials** — Art. 27 text, Danish Institute guide, ECNL practical guide
- **Harmonised standards** — Art. 40 framework, prEN 18286, JTC 21 roadmap
- **Sector-specific guidance** for banking, medical devices, staffing, healthcare, law enforcement
- **National implementation tracking** — German AI bill, regulatory sandboxes, national service desks
- **Incident reporting templates** — GPAI serious incident, Art. 73 high-risk draft guidance

## File Structure

```
ai-act-knowledge/
├── SKILL.md                          # Main skill instructions (deploy this)
├── CHANGELOG.md                      # Version history
└── references/                       # 70 reference files across 15 subdirectories
    ├── core/                         # Regulation text by Title (I–XIII) + preamble + Annex III + decision trees
    ├── guidelines/                   # Commission guidelines (AI system definition, prohibited, GPAI, omnibus)
    ├── codes-of-practice/            # GPAI Code + Transparency Code (multiple versions)
    ├── opinions/                     # EDPB/EDPS opinions (2021, 2026, 28/2024)
    ├── standards/                    # Art. 40 harmonised standards, prEN 18286, JTC 21
    ├── fria/                         # Art. 27 FRIA — text + practical guides
    ├── governance/                   # AI Office FAQ, AI Pact, enforcement, timeline
    ├── national/                     # National implementation (DE bill, sandboxes, service desks)
    ├── sector-specific/              # Banking, medical devices, staffing
    ├── cybersecurity/                # ENISA advisories
    ├── law-enforcement/              # Europol AI policing
    ├── compliance-guides/            # AI literacy, SME guide, copyright/TDM, whistleblowing
    ├── impact-assessments/           # Commission IA + supporting study + healthcare 2026
    └── templates/                    # GPAI training data, serious incident, high-risk draft
```

## Deployment

### Claude.ai (User Skills)

1. Go to **Settings → Profile → Custom Skills** (or equivalent)
2. Upload the entire `ai-act-knowledge/` folder structure
3. The skill will auto-trigger when you ask about AI Act articles, requirements, penalties, GPAI obligations, FRIA, or any AI Act topic

### Claude Code / Custom MCP Setup

1. Copy the `ai-act-knowledge/` folder to your skills directory:
   ```bash
   cp -r ai-act-knowledge/ /path/to/your/skills/user/ai-act-knowledge/
   ```
2. Ensure the skill is registered in your configuration

## Usage

### Quick Start

Ask any AI Act question:

> "What does Art. 27 require for a Fundamental Rights Impact Assessment, and
> when does it apply to deployers of high-risk systems?"

The skill will route to the right reference files and produce a cited answer.

### Trigger Phrases

- "Explain Art. X" / "What does Article X say?" / "AI Act requirements"
- "GPAI obligations" / "High-risk AI" / "Prohibited AI practices"
- "AI Act and GDPR" / "Fundamental rights impact assessment" / "AI literacy"
- "KI-Verordnung" / "Hochrisiko-KI" / "GPAI-Verhaltenskodex"

> For assessment workflows that produce a classification decision (rather than a
> knowledge answer), ask for a structured risk-tier classification.

### Workflow

| Step | Description |
|------|-------------|
| **1. Classify Question** | Topic Router determines which reference subdirectory(ies) to consult |
| **2. Load References** | Read targeted reference files (article text, guidelines, opinions, codes) |
| **3. Synthesise** | Produce answer with article-level citations and cross-references to related provisions |

## Capabilities Summary

| Feature | Description |
|---------|-------------|
| Article-Level Q&A | Direct answers grounded in the full regulation text (preamble + 13 Titles) |
| Commission Guidelines | AI system definition, prohibited practices, high-risk, Digital Omnibus |
| EDPB/EDPS Opinions | 2021 joint, 2026 joint, Opinion 28/2024 (AI-DPIA) |
| Codes of Practice | GPAI Code (3 versions), Transparency Code (drafts + overview) |
| FRIA Materials | Art. 27 text + Danish Institute and ECNL practical guides |
| Harmonised Standards | Art. 40 framework, prEN 18286, JTC 21 roadmap |
| Sector Guidance | Banking, medical devices, staffing, healthcare, law enforcement |
| National Implementation | German AI bill, regulatory sandboxes, Member State service desks |
| Incident Templates | GPAI serious incident reporting, Art. 73 high-risk draft |
| Cross-Framework | AI Act ↔ GDPR, ENISA cybersecurity overlays |

## Regulatory Basis

| Document | Reference |
|----------|-----------|
| EU AI Act | Regulation (EU) 2024/1689 (full text + recitals) |
| Commission Guidelines | AI system definition, Art. 5 prohibitions, Art. 6 high-risk, Digital Omnibus |
| EDPB Opinion 28/2024 | DPIA for AI processing |
| EDPB-EDPS Joint Opinions | 2021 and 2026 |
| GPAI Code of Practice | Art. 53/55 implementation framework |
| Art. 50 Code of Practice | Transparency labeling framework |
| Art. 40 Harmonised Standards | JTC 21 framework, prEN 18286 |
| ENISA Advisories | AI cybersecurity, standardisation |

## License & Disclaimer

This skill provides structured AI Act regulatory information based on Regulation (EU) 2024/1689 and official EU institutional sources. It is not legal advice. Specific compliance decisions should involve qualified legal counsel with AI Act expertise.

Licensed under AGPL-3.0.

> **Quality assurance:** this skill ships with evaluation tests in the `evals/` folder, which I run to check its outputs against expected results.

---

*Created by Oliver Schmidt-Prietz — [OneZero Legal](https://onezero.legal)*
