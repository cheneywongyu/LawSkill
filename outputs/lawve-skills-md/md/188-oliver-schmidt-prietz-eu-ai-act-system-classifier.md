---
id: "67be74be-5137-5058-a0bd-bbc17e13e78e"
title: "EU AI Act System Classifier"
title_cn: "欧盟人工智能法案系统分类器"
slug: "eu-ai-act-system-classifier"
url: "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-system-classifier"
author: "Oliver Schmidt-Prietz"
author_slug: "oliver-schmidt-prietz"
category: "compliance"
language: "en"
license: "AGPL 3.0"
jurisdictions: "EU"
status: "active"
views: 497
downloads: 395
created_at: "2026-03-16T01:00:00+01:00"
updated_at: "2026-03-16T01:00:00+01:00"
source_index: 188
---

# 欧盟人工智能法案系统分类器

原始名称：`EU AI Act System Classifier`  
作者：Oliver Schmidt-Prietz  
分类：compliance  
来源：https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-system-classifier

## 中文 README

# EU AI Act 系统分类器 — 部署指南

> 📄 **【查看交互技能页面→】(https://oliverschmidtprietz.github.io/EU-AI-Act-Suite/ai-act-classifier/)**

请参阅 [CHANGELOG.md](CHANGELOG.md) 了解版本历史记录。

## 概述

欧盟人工智能法案系统分类器 — Claude 的结构化人工智能法案评估技能，可提供：

- **艺术。 2 范围排除分析**（军事、个人使用、纯研发、上市前、国际执法）以及系统描述通知的目标
- **艺术。 3(1) 人工智能系统定义测试**——基于委员会指南和经合组织人工智能框架的 7 个标准分析
- **开源豁免清单** — 艺术的专用路径。 2(12)（人工智能系统）和艺术。 53(2)（GPAI 型号）
- **艺术。根据委员会指南，进行 5 种禁止做法筛查**，并以主题为中心进行阅读
- **高风险分类** — 附件一产品安全途径 + 附件三基于应用的途径
- **艺术。 6（3）例外评估**与艺术。 6(4) 文件要求
- **GPAI模型评估**与风险等级分类并行运行——标准GPAI（第53条）和系统性风险GPAI（第55条）
- **艺术。 50 个透明度义务触发器** 以及实践准则多层标记指导
- **针对附件三高风险类别（就业、教育、生物识别、执法等）的具体行业指南**
- **按风险等级和提供商/部署者角色查找合规期限**
- **分类仪表板输出** — 单页摘要，包含法律依据、截止日期和后续行动

## 文件结构
```
ai-act-classifier/
├── SKILL.md                              # Main skill instructions (deploy this)
├── CHANGELOG.md                          # Version history
├── evals/
│   └── evals.json                        # 3 test cases (with-skill vs. baseline)
└── references/
    ├── ai-system-definition.md           # Art. 3(1) 7-criteria test + worked examples
    ├── scope-exclusions.md               # Art. 2 exclusion checklists (incl. open-source)
    ├── prohibited-practices.md           # Art. 5 prohibitions — full subject-centric analysis
    ├── high-risk-annexes.md              # Annex I + Annex III routes
    ├── art6-exception.md                 # Art. 6(3) exception with Art. 6(4) docs
    ├── gpai-systemic-risk.md             # Art. 51/53/55 GPAI thresholds and obligations
    ├── art50-transparency.md             # Art. 50 transparency + Code of Practice marking
    ├── sector-guidance.md                # Sector-specific high-risk guidance
    ├── jurisdiction-requirements.md      # Member-state-specific implementation notes
    ├── compliance-deadlines.md           # Deadlines by tier + role
    ├── enforcement-framework.md          # Penalties, market surveillance, AI Office
    └── case-studies.md                   # Worked classification examples
```
## 部署

### Claude.ai（用户技能）

1. 转到 **设置 → 个人资料 → 自定义技能**（或同等内容）
2.上传整个`ai-act-classifier/`文件夹结构
3.当您提到AI法案分类、风险等级、KI-Verordnung、附件III、禁止做法或GPAI系统性风险时，该技能将自动触发

### 克劳德代码/自定义 MCP 设置

1. 将 `ai-act-classifier/` 文件夹复制到您的技能目录：
   ```bash
   cp -r ai-act-classifier/ /path/to/your/skills/user/ai-act-classifier/
   ```
| Phase | Description |
|-------|-------------|
| **Phase 1: Scope Gate** | Art. 2 exclusion analysis (military, personal, R&D, pre-market, ILE) + open-source checklist (Art. 2(12) / Art. 53(2)) |
| **Phase 2: AI System Test** | Art. 3(1) 7-criteria definition test grounded in Commission guidelines and OECD framework |
| **Phase 3: Risk Classification** | Steps 1–3 in sequence (Art. 5 → Annex I → Annex III + Art. 6(3) exception); Step 4 GPAI assessment runs **in parallel**; Step 5 Art. 50 transparency check |
| **Phase 4: Classification Dashboard** | Single-page output: risk tier, legal basis, deadlines, obligations summary, next-step recommendations |
| Feature | Description |
|---------|-------------|
| Scope Exclusion (Art. 2) | System-description-informed targeting — only relevant exclusions surfaced |
| Open-Source Checklist | Dedicated 3-step process for Art. 2(12) AI systems and Art. 53(2) GPAI models |
| AI System Definition | 7-criteria Art. 3(1) test with Commission/OECD guidance |
| Prohibited Practices | Art. 5 screening — subject-centric reading per Commission Guidelines |
| High-Risk: Annex I | Product-safety route (Art. 6(1)) |
| High-Risk: Annex III | Application-based route (Art. 6(2)) with Art. 6(3) exception |
| Art. 6(3) Exception | Documented carve-out with Art. 6(4) registration obligations |
| GPAI Assessment | Parallel track — standard GPAI (Art. 53) + systemic-risk GPAI (Art. 55) |
| Art. 50 Transparency | Interaction, synthetic content, emotion recognition, deepfake labeling |
| Sector Guidance | Targeted guidance for Annex III categories (employment, education, biometrics, etc.) |
| Jurisdiction Notes | Member-state-specific implementation requirements |
| Deadline Lookup | Compliance dates by tier (prohibited / high-risk / GPAI / Art. 50 / minimal) |
| Classification Dashboard | Single-page summary output |
| Document | Reference |
|----------|-----------|
| EU AI Act | Regulation (EU) 2024/1689 |
| Commission Guidelines on AI System Definition | Art. 3(1) interpretation |
| Commission Guidelines on Prohibited AI Practices | Art. 5 enforcement reading |
| Commission Guidelines on High-Risk Classification | Art. 6 + Annex III |
| OECD AI Framework | Underlying technical definition |
| GPAI Code of Practice | Art. 53/55 implementation |
| Art. 50 Code of Practice (Transparency) | Multi-layered marking framework |
2. 确保该技能已在您的配置中注册

## 用法

### 快速入门

描述您想要分类的人工智能技术：

> “我们正在构建一个简历筛选工具，为我们的人力资源团队对求职者进行排名。
> 它使用经过微调的大模型根据职位描述对候选人进行评分。我们是吗
> 需要根据《人工智能法案》将其视为高风险吗？”

该技能将激活并引导您完成分类。

### 触发短语

- “根据人工智能法案对人工智能系统进行分类”/“人工智能法案风险等级”
- “这是人工智能系统吗？” /“第 3(1) 条”/“禁止的做法？”
- “高风险分类”/“附件三”/“第 6 条例外”
-“GPAI 系统性风险”/“KI-Verordnung”/“Risikoklassifizierung”

> 对于*不*生成分类的纯文章查找问题，请回答
> 它直接来自引用的法规文本，而不是运行分类器。

### 工作流程


## 能力总结


## 监管依据


## 许可和免责声明

该技能根据欧盟人工智能法案（法规（EU）2024/1689）、委员会指南和经合组织人工智能框架提供结构化指导。它不构成法律建议。最终分类决定应由具有《人工智能法案》专业知识的合格法律顾问参与。

根据 AGPL-3.0 许可。

> **质量保证：** 该技能附带了“evals/”文件夹中的评估测试，我运行该测试来根据预期结果检查其输出。

---

*由 Oliver Schmidt-Prietz 创建 — [OneZero Legal](https://onezero.legal)*

---

## Original README

# EU AI Act System Classifier — Deployment Guide

> 📄 **[View the interactive skill page →](https://oliverschmidtprietz.github.io/EU-AI-Act-Suite/ai-act-classifier/)**

See [CHANGELOG.md](CHANGELOG.md) for version history.

## Overview

EU AI Act System Classifier — a structured AI Act assessment skill for Claude that provides:

- **Art. 2 scope-exclusion analysis** (military, personal use, pure R&D, pre-market, international law enforcement) with system-description-informed targeting
- **Art. 3(1) AI system definition test** — 7-criteria analysis grounded in Commission guidelines and the OECD AI framework
- **Open-source exemption checklists** — dedicated paths for Art. 2(12) (AI systems) and Art. 53(2) (GPAI models)
- **Art. 5 prohibited-practice screening** with subject-centric reading per Commission Guidelines
- **High-risk classification** — Annex I product safety route + Annex III application-based route
- **Art. 6(3) exception assessment** with Art. 6(4) documentation requirements
- **GPAI model assessment** running in parallel with risk-tier classification — standard GPAI (Art. 53) and systemic-risk GPAI (Art. 55)
- **Art. 50 transparency-obligation triggers** with Code of Practice multi-layered marking guidance
- **Sector-specific guidance** for high-risk Annex III categories (employment, education, biometrics, law enforcement, etc.)
- **Compliance deadline lookup** by risk tier and provider/deployer role
- **Classification Dashboard output** — single-page summary with legal basis, deadlines, and follow-up actions

## File Structure

```
ai-act-classifier/
├── SKILL.md                              # Main skill instructions (deploy this)
├── CHANGELOG.md                          # Version history
├── evals/
│   └── evals.json                        # 3 test cases (with-skill vs. baseline)
└── references/
    ├── ai-system-definition.md           # Art. 3(1) 7-criteria test + worked examples
    ├── scope-exclusions.md               # Art. 2 exclusion checklists (incl. open-source)
    ├── prohibited-practices.md           # Art. 5 prohibitions — full subject-centric analysis
    ├── high-risk-annexes.md              # Annex I + Annex III routes
    ├── art6-exception.md                 # Art. 6(3) exception with Art. 6(4) docs
    ├── gpai-systemic-risk.md             # Art. 51/53/55 GPAI thresholds and obligations
    ├── art50-transparency.md             # Art. 50 transparency + Code of Practice marking
    ├── sector-guidance.md                # Sector-specific high-risk guidance
    ├── jurisdiction-requirements.md      # Member-state-specific implementation notes
    ├── compliance-deadlines.md           # Deadlines by tier + role
    ├── enforcement-framework.md          # Penalties, market surveillance, AI Office
    └── case-studies.md                   # Worked classification examples
```

## Deployment

### Claude.ai (User Skills)

1. Go to **Settings → Profile → Custom Skills** (or equivalent)
2. Upload the entire `ai-act-classifier/` folder structure
3. The skill will auto-trigger when you mention AI Act classification, risk tiers, KI-Verordnung, Annex III, prohibited practices, or GPAI systemic risk

### Claude Code / Custom MCP Setup

1. Copy the `ai-act-classifier/` folder to your skills directory:
   ```bash
   cp -r ai-act-classifier/ /path/to/your/skills/user/ai-act-classifier/
   ```
2. Ensure the skill is registered in your configuration

## Usage

### Quick Start

Describe the AI technology you want to classify:

> "We're building a CV-screening tool that ranks job applicants for our HR team.
> It uses a fine-tuned LLM to score candidates against job descriptions. Do we
> need to treat this as high-risk under the AI Act?"

The skill will activate and walk you through the classification.

### Trigger Phrases

- "Classify an AI system under the AI Act" / "AI Act risk tier"
- "Is this an AI system?" / "Art. 3(1)" / "Prohibited practice?"
- "High-risk classification" / "Annex III" / "Art. 6 exception"
- "GPAI systemic risk" / "KI-Verordnung" / "Risikoklassifizierung"

> For a pure article-lookup question *without* producing a classification, answer
> it directly from the cited regulation text rather than running the classifier.

### Workflow

| Phase | Description |
|-------|-------------|
| **Phase 1: Scope Gate** | Art. 2 exclusion analysis (military, personal, R&D, pre-market, ILE) + open-source checklist (Art. 2(12) / Art. 53(2)) |
| **Phase 2: AI System Test** | Art. 3(1) 7-criteria definition test grounded in Commission guidelines and OECD framework |
| **Phase 3: Risk Classification** | Steps 1–3 in sequence (Art. 5 → Annex I → Annex III + Art. 6(3) exception); Step 4 GPAI assessment runs **in parallel**; Step 5 Art. 50 transparency check |
| **Phase 4: Classification Dashboard** | Single-page output: risk tier, legal basis, deadlines, obligations summary, next-step recommendations |

## Capabilities Summary

| Feature | Description |
|---------|-------------|
| Scope Exclusion (Art. 2) | System-description-informed targeting — only relevant exclusions surfaced |
| Open-Source Checklist | Dedicated 3-step process for Art. 2(12) AI systems and Art. 53(2) GPAI models |
| AI System Definition | 7-criteria Art. 3(1) test with Commission/OECD guidance |
| Prohibited Practices | Art. 5 screening — subject-centric reading per Commission Guidelines |
| High-Risk: Annex I | Product-safety route (Art. 6(1)) |
| High-Risk: Annex III | Application-based route (Art. 6(2)) with Art. 6(3) exception |
| Art. 6(3) Exception | Documented carve-out with Art. 6(4) registration obligations |
| GPAI Assessment | Parallel track — standard GPAI (Art. 53) + systemic-risk GPAI (Art. 55) |
| Art. 50 Transparency | Interaction, synthetic content, emotion recognition, deepfake labeling |
| Sector Guidance | Targeted guidance for Annex III categories (employment, education, biometrics, etc.) |
| Jurisdiction Notes | Member-state-specific implementation requirements |
| Deadline Lookup | Compliance dates by tier (prohibited / high-risk / GPAI / Art. 50 / minimal) |
| Classification Dashboard | Single-page summary output |

## Regulatory Basis

| Document | Reference |
|----------|-----------|
| EU AI Act | Regulation (EU) 2024/1689 |
| Commission Guidelines on AI System Definition | Art. 3(1) interpretation |
| Commission Guidelines on Prohibited AI Practices | Art. 5 enforcement reading |
| Commission Guidelines on High-Risk Classification | Art. 6 + Annex III |
| OECD AI Framework | Underlying technical definition |
| GPAI Code of Practice | Art. 53/55 implementation |
| Art. 50 Code of Practice (Transparency) | Multi-layered marking framework |

## License & Disclaimer

This skill provides structured guidance based on the EU AI Act (Regulation (EU) 2024/1689), Commission guidelines, and the OECD AI framework. It does not constitute legal advice. Final classification decisions should involve qualified legal counsel with AI Act expertise.

Licensed under AGPL-3.0.

> **Quality assurance:** this skill ships with evaluation tests in the `evals/` folder, which I run to check its outputs against expected results.

---

*Created by Oliver Schmidt-Prietz — [OneZero Legal](https://onezero.legal)*
