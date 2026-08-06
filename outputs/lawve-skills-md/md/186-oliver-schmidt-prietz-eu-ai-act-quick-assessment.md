---
id: "5a69da51-85a8-5729-8da6-5ba48215c2b4"
title: "EU AI Act Quick Assessment"
title_cn: "欧盟人工智能法案快速评估"
slug: "eu-ai-act-quick-assessment"
url: "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-quick-assessment"
author: "Oliver Schmidt-Prietz"
author_slug: "oliver-schmidt-prietz"
category: "compliance"
language: "en"
license: "AGPL 3.0"
jurisdictions: "EU"
status: "active"
views: 692
downloads: 425
created_at: "2026-03-16T01:00:00+01:00"
updated_at: "2026-03-16T01:00:00+01:00"
source_index: 186
---

# 欧盟人工智能法案快速评估

原始名称：`EU AI Act Quick Assessment`  
作者：Oliver Schmidt-Prietz  
分类：compliance  
来源：https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-quick-assessment

## 中文 README

# 欧盟人工智能法案快速评估 — 部署指南

> 📄 **【查看互动技能页面→】(https://oliverschmidtprietz.github.io/EU-AI-Act-Suite/ai-act-quick/)**

请参阅 [CHANGELOG.md](CHANGELOG.md) 了解版本历史记录。

## 概述

欧盟 AI 法案快速评估 — 快速 15-25 分钟分类以进行初步分类：

- **自适应 2 批次摄入** - 最少的问题，系统描述通知
- **6 步门序列** — 范围、AI 系统测试、禁止、附件 I、附件 III、GPAI
- **具有置信度的初步分类输出**
- **已确定级别的合规期限**
- **管辖区标志**强调成员国的具体考虑因素
- **提供模板** — 升级为全面评估的选项（分类、角色确定、义务映射、正式报告）
- **清晰的范围边界** - 设计用于分类，而不是最终确定

## 文件结构
```
ai-act-quick/
├── SKILL.md                              # Main skill instructions (deploy this)
├── CHANGELOG.md                          # Version history
├── evals/
│   └── evals.json                        # Test cases
└── references/
    ├── quick-decision-tree.md            # 6-step gate sequence
    ├── compliance-deadlines.md           # Tier-by-tier deadline lookup
    └── jurisdiction-flags.md             # Member State-specific flags
```
## 部署

### Claude.ai（用户技能）

1. 转到 **设置 → 个人资料 → 自定义技能**（或同等内容）
2.上传整个`ai-act-quick/`文件夹结构
3.该技能将在“快速AI行为检查”、“初步评估”、“Schnellprüfung”或“Ersteinschätzung”时自动触发

### 克劳德代码/自定义 MCP 设置

1. 将 `ai-act-quick/` 文件夹复制到您的技能目录：
   ```bash
   cp -r ai-act-quick/ /path/to/your/skills/user/ai-act-quick/
   ```
| Phase | Description |
|-------|-------------|
| **Phase 1: Quick Context** | Adaptive 2-batch intake (system description + role/jurisdiction) |
| **Phase 2: Rapid Classification** | 6-step gate sequence — scope, AI-system, prohibited, Annex I, Annex III, GPAI |
| **Phase 3: Preliminary Output** | Tier verdict + confidence + jurisdiction flags + deadlines |
| **Phase 4: Template Offer** | Optional escalation to a full assessment (classification, role determination, obligation mapping, formal report) |
| Feature | Description |
|---------|-------------|
| Adaptive Intake | Description-informed minimal-question flow (2 batches) |
| 6-Step Gate | Scope → AI-system → prohibited → Annex I → Annex III → GPAI |
| Confidence Tagging | Each verdict carries a HIGH / MEDIUM / LOW confidence indicator |
| Deadline Lookup | Tier-specific compliance dates |
| Jurisdiction Flags | Member-State-specific signals (BSI / CNIL / Garante / etc.) |
| Escalation | Smooth escalation to a full assessment (classification, role determination, obligation mapping, report) |
| Scope Discipline | Outputs explicitly marked PRELIMINARY — not a substitute for full assessment |
| Document | Reference |
|----------|-----------|
| EU AI Act | Regulation (EU) 2024/1689 |
| Art. 5 / Annex I / Annex III | Risk-tier classification anchors |
| Art. 51 / 53 / 55 | GPAI thresholds and obligations |
| Compliance deadlines | Title XIII + Commission implementation timeline |
2. 确保该技能已在您的配置中注册

## 用法

### 快速入门

转储您对系统的了解：

>“请快速检查一下 AI 法案 - 我们是柏林的一家 SaaS，销售会议摘要
> 使用 GPT-4 转录呼叫并生成操作项的工具。客户
> 是欧盟企业。 《人工智能法案》是否适用，适用于哪一层级？”

该技能将进行 15-25 分钟的分类，并自信地返回初步判断。

### 触发短语

- “AI法案快速评估”/“初步检查”/“AI法案是否适用？”
-“Schnellprüfung”/“Ersteinschätzung”/“AI 法案分类”
- “运行快速分类”

### 工作流程


## 能力总结


## 监管依据


## 许可和免责声明

这是基于法规 (EU) 2024/1689 的初步人工智能法案评估，旨在快速分类。它不是法律建议，也不能取代全面评估——通过完整的风险等级分类、角色确定、义务映射、正式报告和合格的法律顾问来验证结果。

根据 AGPL-3.0 许可。

> **质量保证：** 该技能附带了“evals/”文件夹中的评估测试，我运行该测试来根据预期结果检查其输出。

---

*由 Oliver Schmidt-Prietz 创建 — [OneZero Legal](https://onezero.legal)*

---

## Original README

# EU AI Act Quick Assessment — Deployment Guide

> 📄 **[View the interactive skill page →](https://oliverschmidtprietz.github.io/EU-AI-Act-Suite/ai-act-quick/)**

See [CHANGELOG.md](CHANGELOG.md) for version history.

## Overview

EU AI Act Quick Assessment — fast 15–25 minute triage for preliminary classification:

- **Adaptive 2-batch intake** — minimal questions, system-description-informed
- **6-step gate sequence** — scope, AI-system test, prohibited, Annex I, Annex III, GPAI
- **Preliminary classification output** with confidence level
- **Compliance deadlines** for the identified tier
- **Jurisdiction flags** highlighting Member-State-specific considerations
- **Template offer** — option to escalate to a full assessment (classification, role determination, obligation mapping, formal report)
- **Clear scope boundary** — designed for triage, not final determination

## File Structure

```
ai-act-quick/
├── SKILL.md                              # Main skill instructions (deploy this)
├── CHANGELOG.md                          # Version history
├── evals/
│   └── evals.json                        # Test cases
└── references/
    ├── quick-decision-tree.md            # 6-step gate sequence
    ├── compliance-deadlines.md           # Tier-by-tier deadline lookup
    └── jurisdiction-flags.md             # Member State-specific flags
```

## Deployment

### Claude.ai (User Skills)

1. Go to **Settings → Profile → Custom Skills** (or equivalent)
2. Upload the entire `ai-act-quick/` folder structure
3. The skill will auto-trigger on "quick AI Act check", "preliminary assessment", "Schnellprüfung", or "Ersteinschätzung"

### Claude Code / Custom MCP Setup

1. Copy the `ai-act-quick/` folder to your skills directory:
   ```bash
   cp -r ai-act-quick/ /path/to/your/skills/user/ai-act-quick/
   ```
2. Ensure the skill is registered in your configuration

## Usage

### Quick Start

Dump what you know about the system:

> "Quick AI Act check please — we're a SaaS in Berlin selling a meeting-summary
> tool that transcribes calls and produces action items using GPT-4. Customers
> are EU businesses. Does the AI Act apply, and what tier?"

The skill will run a 15–25 minute triage and return a preliminary verdict with confidence.

### Trigger Phrases

- "Quick AI Act assessment" / "Preliminary check" / "Does the AI Act apply?"
- "Schnellprüfung" / "Ersteinschätzung" / "AI Act triage"
- "Run a quick classification"

### Workflow

| Phase | Description |
|-------|-------------|
| **Phase 1: Quick Context** | Adaptive 2-batch intake (system description + role/jurisdiction) |
| **Phase 2: Rapid Classification** | 6-step gate sequence — scope, AI-system, prohibited, Annex I, Annex III, GPAI |
| **Phase 3: Preliminary Output** | Tier verdict + confidence + jurisdiction flags + deadlines |
| **Phase 4: Template Offer** | Optional escalation to a full assessment (classification, role determination, obligation mapping, formal report) |

## Capabilities Summary

| Feature | Description |
|---------|-------------|
| Adaptive Intake | Description-informed minimal-question flow (2 batches) |
| 6-Step Gate | Scope → AI-system → prohibited → Annex I → Annex III → GPAI |
| Confidence Tagging | Each verdict carries a HIGH / MEDIUM / LOW confidence indicator |
| Deadline Lookup | Tier-specific compliance dates |
| Jurisdiction Flags | Member-State-specific signals (BSI / CNIL / Garante / etc.) |
| Escalation | Smooth escalation to a full assessment (classification, role determination, obligation mapping, report) |
| Scope Discipline | Outputs explicitly marked PRELIMINARY — not a substitute for full assessment |

## Regulatory Basis

| Document | Reference |
|----------|-----------|
| EU AI Act | Regulation (EU) 2024/1689 |
| Art. 5 / Annex I / Annex III | Risk-tier classification anchors |
| Art. 51 / 53 / 55 | GPAI thresholds and obligations |
| Compliance deadlines | Title XIII + Commission implementation timeline |

## License & Disclaimer

This is a preliminary AI Act assessment based on Regulation (EU) 2024/1689, designed for rapid triage. It is not legal advice and does not replace a full assessment — validate results with a full risk-tier classification, role determination, obligation mapping, formal report, and qualified legal counsel.

Licensed under AGPL-3.0.

> **Quality assurance:** this skill ships with evaluation tests in the `evals/` folder, which I run to check its outputs against expected results.

---

*Created by Oliver Schmidt-Prietz — [OneZero Legal](https://onezero.legal)*
