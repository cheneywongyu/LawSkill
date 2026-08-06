---
id: "387bf4ca-bc5d-5db8-9911-b22ccf33bd9b"
title: "EU AI Act Examination Report Generator"
title_cn: "欧盟人工智能法案审查报告生成器"
slug: "eu-ai-act-examination-report-generator"
url: "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-examination-report-generator"
author: "Oliver Schmidt-Prietz"
author_slug: "oliver-schmidt-prietz"
category: "compliance"
language: "en"
license: "AGPL 3.0"
jurisdictions: "EU"
status: "active"
views: 414
downloads: 413
created_at: "2026-03-16T01:00:00+01:00"
updated_at: "2026-04-05T08:47:34.828000+02:00"
source_index: 181
---

# 欧盟人工智能法案审查报告生成器

原始名称：`EU AI Act Examination Report Generator`  
作者：Oliver Schmidt-Prietz  
分类：compliance  
来源：https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-examination-report-generator

## 中文 README

# 欧盟人工智能法案审查报告生成器 — 部署指南

> 📄 **【查看互动技能页面→】(https://oliverschmidtprietz.github.io/EU-AI-Act-Suite/ai-act-report/)**

请参阅 [CHANGELOG.md](CHANGELOG.md) 了解版本历史记录。

## 概述

欧盟人工智能法案审查报告生成器 — 生成正式的、结构化的人工智能法案合规评估报告，适用于法律文件、审计跟踪和监管查询：

- **9节报告结构** — 简介、系统描述、范围排除检查、适用范围、预期目的、风险分类、适用义务、风险标记、结论
- **上下文优先的自适应摄入** - 消耗先前的评估输出（分类、角色确定、义务映射、快速分类）（如果可用）
- **输入验证阶段** - 明确的阶段 1.5 在起草之前标记缺失或不一致的上下文
- **基于引文的散文** - 合法引文索引使文章引用保持一致
- 针对成员国特定合规项目的**司法管辖区清单**
- **交付前的质量检查阶段**（第 3 阶段）
- **Word 文档导出** 以及格式化输出（第 4 阶段）
- **输出模板**用于评估、差距分析、监管机构提交和内部备忘录

## 文件结构
```
ai-act-report/
├── SKILL.md                              # Main skill instructions (deploy this)
├── CHANGELOG.md                          # Version history
├── evals/
│   └── evals.json                        # Test cases
└── references/
    ├── report-template.md                # 9-section master template
    ├── output-templates.md               # Variant templates (assessment, gap, regulator, memo)
    ├── legal-citations-index.md          # Article-reference index for consistency
    ├── interpretation-aids.md            # Commission/EDPB interpretation hooks
    ├── jurisdiction-checklists.md        # Member-State-specific compliance items
    ├── compliance-timeline.md            # Deadline anchors per tier
    ├── docx-formatting.md                # Word output formatting spec
    └── case-studies.md                   # Worked report examples
```
## 部署

### Claude.ai（用户技能）

1. 转到 **设置 → 个人资料 → 自定义技能**（或同等内容）
2.上传整个`ai-act-report/`文件夹结构
3. 该技能将在“生成 AI Act 报告”、“Prüfbericht”、“创建合规性评估”或“导出为 Word”时自动触发

### 克劳德代码/自定义 MCP 设置

1. 将 `ai-act-report/` 文件夹复制到您的技能目录：
   ```bash
   cp -r ai-act-report/ /path/to/your/skills/user/ai-act-report/
   ```
| Phase | Description |
|-------|-------------|
| **Phase 1: Input Collection** | Context-first adaptive intake — consumes prior skill outputs if present |
| **Phase 1.5: Input Validation** | Explicit gate flagging missing or inconsistent inputs before drafting |
| **Phase 2: Report Generation** | 9-section template populated with citations and jurisdiction overlays |
| **Phase 3: Quality Check** | Pre-delivery review for consistency and completeness |
| **Phase 4: Word Export** | Optional formatted .docx output |
| Section | Content |
|---------|---------|
| 1. Introduction | Purpose, scope of the assessment, methodology note |
| 2. System Description | Functionality, deployment context, users |
| 3. Preliminary Check — Scope Exclusions (Art. 2) | Military, R&D, personal, ILE, open-source checks |
| 4. Scope of Application | Territorial scope (Art. 2), addressee analysis |
| 5. Intended Purpose (Art. 3(12)) | Provider-declared intended use |
| 6. Risk Classification | Tier verdict with Art. 5 / Annex I / Annex III / GPAI / Art. 50 analysis |
| 7. Applicable Obligations | Role × tier obligation map with legal citations |
| 8. Risk Flags & Recommendations | Open issues, follow-up actions, monitoring items |
| 9. Conclusion | Summary verdict + next steps |
| Feature | Description |
|---------|-------------|
| 9-Section Template | Audit-ready structure for legal files and regulator submissions |
| Context Consumption | Reads prior classification / role-determination / obligation-mapping / quick-triage outputs |
| Input Validation Gate | Phase 1.5 explicitly flags missing/inconsistent inputs |
| Citation Index | Consistent article references across sections |
| Jurisdiction Overlays | Member-State-specific compliance items |
| Quality Check | Phase 3 pre-delivery review |
| Word Export | Formatted .docx output for archiving and distribution |
| Output Variants | Assessment, gap analysis, regulator submission, internal memo |
| Document | Reference |
|----------|-----------|
| EU AI Act | Regulation (EU) 2024/1689 |
| Art. 2, 3, 5, 6, 50–55 | Citation anchors for each report section |
| Commission Guidelines | Used in interpretation aids |
| National implementation | Jurisdiction-specific checklist data |
2. 确保该技能已在您的配置中注册

## 用法

### 快速入门

要么重新开始，要么从先前的技能输出中移交上下文：

> “为我们的人力资源筛选系统生成正式的《人工智能法案》合规报告。
> 我已经运行了分类器（高风险，附件 III Nr. 4）和角色
> 技能（我们是部署者）。请收集完整的 Prüfbericht 和
> 将其导出为 Word 文档。”

该技能将验证上下文、起草 9 部分的报告、运行质量检查并提供 .docx 导出。

### 触发短语

- “生成人工智能法案报告”/“Prüfbericht”/“合规性评估报告”
- “记录人工智能法案分析”/“导出为 Word”
- “创建正式的人工智能法案评估”

### 工作流程


## 报告结构


## 能力总结


## 监管依据


## 许可和免责声明

该技能根据 (EU) 2024/1689 法规生成结构化 AI 法案报告模板。这不是法律建议。报告在监管使用之前应由合格的法律顾问进行审查和验证。

根据 AGPL-3.0 许可。

> **质量保证：** 该技能附带了“evals/”文件夹中的评估测试，我运行该测试来根据预期结果检查其输出。

---

*由 Oliver Schmidt-Prietz 创建 — [OneZero Legal](https://onezero.legal)*

---

## Original README

# EU AI Act Examination Report Generator — Deployment Guide

> 📄 **[View the interactive skill page →](https://oliverschmidtprietz.github.io/EU-AI-Act-Suite/ai-act-report/)**

See [CHANGELOG.md](CHANGELOG.md) for version history.

## Overview

EU AI Act Examination Report Generator — produces a formal, structured AI Act compliance assessment report suitable for legal files, audit trails, and regulatory inquiries:

- **9-section report structure** — introduction, system description, scope-exclusion check, scope of application, intended purpose, risk classification, applicable obligations, risk flags, conclusion
- **Context-first adaptive intake** — consumes prior assessment outputs (classification, role determination, obligation mapping, quick triage) when available
- **Input validation phase** — explicit Phase 1.5 to flag missing or inconsistent context before drafting
- **Citation-grounded prose** — legal citations index keeps article references consistent
- **Jurisdiction checklists** for Member-State-specific compliance items
- **Quality-check phase** before delivery (Phase 3)
- **Word document export** with formatted output (Phase 4)
- **Output templates** for assessment, gap analysis, regulator submission, and internal memo

## File Structure

```
ai-act-report/
├── SKILL.md                              # Main skill instructions (deploy this)
├── CHANGELOG.md                          # Version history
├── evals/
│   └── evals.json                        # Test cases
└── references/
    ├── report-template.md                # 9-section master template
    ├── output-templates.md               # Variant templates (assessment, gap, regulator, memo)
    ├── legal-citations-index.md          # Article-reference index for consistency
    ├── interpretation-aids.md            # Commission/EDPB interpretation hooks
    ├── jurisdiction-checklists.md        # Member-State-specific compliance items
    ├── compliance-timeline.md            # Deadline anchors per tier
    ├── docx-formatting.md                # Word output formatting spec
    └── case-studies.md                   # Worked report examples
```

## Deployment

### Claude.ai (User Skills)

1. Go to **Settings → Profile → Custom Skills** (or equivalent)
2. Upload the entire `ai-act-report/` folder structure
3. The skill will auto-trigger on "generate AI Act report", "Prüfbericht", "create compliance assessment", or "export as Word"

### Claude Code / Custom MCP Setup

1. Copy the `ai-act-report/` folder to your skills directory:
   ```bash
   cp -r ai-act-report/ /path/to/your/skills/user/ai-act-report/
   ```
2. Ensure the skill is registered in your configuration

## Usage

### Quick Start

Either start fresh or hand over context from prior skill output:

> "Generate a formal AI Act compliance report for our HR screening system.
> I've already run the classifier (high-risk, Annex III Nr. 4) and the roles
> skill (we're the deployer). Please assemble the full Prüfbericht and
> export it as a Word document."

The skill will validate the context, draft the 9-section report, run a quality check, and offer .docx export.

### Trigger Phrases

- "Generate AI Act report" / "Prüfbericht" / "Compliance assessment report"
- "Document the AI Act analysis" / "Export as Word"
- "Create a formal AI Act assessment"

### Workflow

| Phase | Description |
|-------|-------------|
| **Phase 1: Input Collection** | Context-first adaptive intake — consumes prior skill outputs if present |
| **Phase 1.5: Input Validation** | Explicit gate flagging missing or inconsistent inputs before drafting |
| **Phase 2: Report Generation** | 9-section template populated with citations and jurisdiction overlays |
| **Phase 3: Quality Check** | Pre-delivery review for consistency and completeness |
| **Phase 4: Word Export** | Optional formatted .docx output |

## Report Structure

| Section | Content |
|---------|---------|
| 1. Introduction | Purpose, scope of the assessment, methodology note |
| 2. System Description | Functionality, deployment context, users |
| 3. Preliminary Check — Scope Exclusions (Art. 2) | Military, R&D, personal, ILE, open-source checks |
| 4. Scope of Application | Territorial scope (Art. 2), addressee analysis |
| 5. Intended Purpose (Art. 3(12)) | Provider-declared intended use |
| 6. Risk Classification | Tier verdict with Art. 5 / Annex I / Annex III / GPAI / Art. 50 analysis |
| 7. Applicable Obligations | Role × tier obligation map with legal citations |
| 8. Risk Flags & Recommendations | Open issues, follow-up actions, monitoring items |
| 9. Conclusion | Summary verdict + next steps |

## Capabilities Summary

| Feature | Description |
|---------|-------------|
| 9-Section Template | Audit-ready structure for legal files and regulator submissions |
| Context Consumption | Reads prior classification / role-determination / obligation-mapping / quick-triage outputs |
| Input Validation Gate | Phase 1.5 explicitly flags missing/inconsistent inputs |
| Citation Index | Consistent article references across sections |
| Jurisdiction Overlays | Member-State-specific compliance items |
| Quality Check | Phase 3 pre-delivery review |
| Word Export | Formatted .docx output for archiving and distribution |
| Output Variants | Assessment, gap analysis, regulator submission, internal memo |

## Regulatory Basis

| Document | Reference |
|----------|-----------|
| EU AI Act | Regulation (EU) 2024/1689 |
| Art. 2, 3, 5, 6, 50–55 | Citation anchors for each report section |
| Commission Guidelines | Used in interpretation aids |
| National implementation | Jurisdiction-specific checklist data |

## License & Disclaimer

This skill produces structured AI Act report templates based on Regulation (EU) 2024/1689. It is not legal advice. Reports should be reviewed and validated by qualified legal counsel before regulatory use.

Licensed under AGPL-3.0.

> **Quality assurance:** this skill ships with evaluation tests in the `evals/` folder, which I run to check its outputs against expected results.

---

*Created by Oliver Schmidt-Prietz — [OneZero Legal](https://onezero.legal)*
