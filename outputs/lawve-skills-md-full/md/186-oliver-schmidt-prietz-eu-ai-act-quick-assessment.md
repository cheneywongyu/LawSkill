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
source_index: 186
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 欧盟人工智能法案快速评估

原始名称：`EU AI Act Quick Assessment`  
作者：Oliver Schmidt-Prietz  
分类：compliance  
来源：https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-quick-assessment  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

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

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

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

---

## SKILL.md Original

---
name: eu-ai-act-triage-oliver-schmidt-prietz
description: |
  Fast 15-25 minute triage for preliminary EU AI Act classification and compliance assessment. This skill should be used when the user asks to "do a quick AI Act assessment", "check if the AI Act applies to us", "run a preliminary classification", "do an AI Act triage", "quick check", "preliminary assessment", "Schnellprüfung", "Ersteinschätzung", or needs a fast initial assessment before committing to full analysis.
metadata:
  author: Oliver Schmidt-Prietz
  license: AGPL-3.0
  version: 2026.06.05
---

# EU AI Act Quick Assessment

Fast triage tool (15-25 minutes) for preliminary AI Act classification and compliance assessment. Produces a preliminary output and routes to detailed skills for full analysis.

## Disclaimer (show at session start, do not block)

> **Important:** This is a preliminary AI Act assessment based on Regulation (EU) 2024/1689, designed for rapid triage. It is not legal advice and does not replace a full assessment — validate results with a full risk-tier classification, an Art. 6 high-risk depth analysis where the high-risk branch is plausible, a role determination, an obligation mapping, a formal report, and qualified legal counsel. Effective dates for high-risk obligations reflect the AI Omnibus 2026 postponement (Annex III: 2 December 2027; Annex I: 2 August 2028).

---

## When to Search the Web

**On activation — search for:**
```
EU AI Act latest enforcement updates [current year]
EU AI Act Commission guidelines status [current year]
```

---

## Quick Assessment Workflow

### Phase 1: Quick Context (Adaptive 2-Batch Flow)

Gather context through a conversational 2-batch approach. Maximum 2 interaction turns — 1 if the user is detailed, 2 if gaps remain.

#### Batch 1: Essential Questions (always asked)

Present these three questions with a natural, conversational welcome:

> **Let's get started with a quick EU AI Act assessment.**
>
> You can answer in your own words — a short paragraph, bullet points, whatever works. I'll ask follow-up questions only if I need more detail.
>
> **1. What does the AI system do?** (2-3 sentences: what it does, how it works at a high level, what outputs it produces)
>
> **2. Where is the system deployed?** (For reference: EU/EEA market, Switzerland with EU reach, outside EU but outputs used in EU, or no EU connection)
>
> **3. What is your organization's relationship to it?** (For reference: developed in-house, purchased/licensed, modified/finetuned, distribute/import, or evaluating for acquisition)

#### Coverage Analysis (internal — not shown to user)

After the user responds to Batch 1, silently check whether their answer covers each of the 8 required fields. Be generous with extraction — e.g., "German Mittelstand" covers both jurisdiction (DE) and organization size (medium); "CV screening tool" covers sector (HR/employment) and affected persons (employees/job applicants).

| # | Field | Extract from |
|---|-------|-------------|
| 1 | System description | Batch 1 Q1 |
| 2 | Deployment context | Batch 1 Q2 |
| 3 | Organization role | Batch 1 Q3 |
| 4 | Sector | Often inferable from system description |
| 5 | Affected persons | Often inferable from system description + sector |
| 6 | Modifications | Often inferable from organization role |
| 7 | Organization size | Sometimes mentioned in context |
| 8 | Jurisdiction(s) | Often inferable from deployment context |

Mark each field: **Covered** / **Partially covered** / **Not covered**.

#### Batch 2: Adaptive Follow-Up (only if gaps remain)

- **All 8 fields covered** → Skip Batch 2. Briefly confirm your extractions and proceed to Phase 2.
- **Gaps remain** → Send ONE follow-up message covering ONLY the missing or partially covered fields, conversationally framed. Do not re-ask what was already answered.
- **Partially covered fields** → Use confirmation prompts, not full re-asks. Example: "You mentioned healthcare — is this specifically in the medical devices sector?"
- **Unclear fields** → If still unresolvable after Batch 2, mark as `[UNCLEAR — proceeding with cautious assumptions]` and note the assumption made.

Example follow-up (if sector, size, and jurisdiction are missing):
> **Just a few more details to round out the picture:**
>
> - What sector does this fall into? (e.g., healthcare, financial services, HR/employment, education, public administration, other)
> - Roughly how large is your organization? (e.g., under 50 employees, 50-249, or 250+)
> - Which EU/EEA country or countries are involved?

#### Information Normalization (internal — before Phase 2)

Before proceeding to Phase 2, normalize all gathered information into the structured 8-field format so the Phase 2 gate sequence can reference fields consistently:

1. **System description** — free text
2. **Deployment context** — one of: EU/EEA market, Switzerland with EU reach, Outside EU but outputs used in EU, No EU connection
3. **Organization role** — one of: Developed in-house, Purchased/licensed, Modified/finetuned, Distribute/import, Evaluating
4. **Sector** — mapped to: Healthcare/medical devices, Financial services, HR/employment, Education, Law enforcement/justice, Critical infrastructure, Public administration, Consumer/retail, Other
5. **Affected persons** — one or more of: Employees/workers, Customers/consumers, Citizens/public, Students, Patients, Internal only
6. **Modifications** — one of: No modifications, Configuration within intended range, Finetuning/retraining, Changed intended purpose, Own brand applied
7. **Organization size** — one of: Micro (<10), Small (10-49), Medium (50-249), Large (250+)
8. **Jurisdiction(s)** — list of EU/EEA Member States or Switzerland

---

### Phase 2: Rapid Classification (6-Step Gate Sequence)

Read [references/quick-decision-tree.md](references/quick-decision-tree.md) for the condensed classification logic.

Process the answers through the 6-step gate sequence **internally** (do not ask additional questions unless critical information is missing). Output the result as a single assessment.

**Gate 1: Scope Check (Art. 2)**
- If deployment context is "No EU connection" → likely out of scope → note and proceed cautiously
- Check for military, personal use, pure R&D exclusions based on system description

**Gate 2: AI System Test (Art. 3(1))**
- Quick determination based on system description
- Apply simplified 3-question test: (1) machine-based? (2) infers/generates beyond rules? (3) influences environment?

**Gate 3: Prohibited Practice Screen (Art. 5)**
- Rapid screen based on system description and sector
- Flag any potential Art. 5 concern for detailed review

**Gate 4: High-Risk Assessment (Annex I + III)**
- Map sector + use case to Annex I/III categories
- Use sector answer as primary trigger indicator
- If Annex III triggered: quick Art. 6(3) exception check
- For a full Art. 6 high-risk depth assessment (Commission Guidelines-grounded), follow this triage with a dedicated high-risk depth analysis (Annex I + Annex III examples, Art. 6(3) exception) when the high-risk branch is plausible.

**Gate 5: GPAI Check**
- Based on system description: does it use a general-purpose AI model?
- If yes: note GPAI obligations

**Gate 6: Transparency Triggers (Art. 50)**
- Check for direct human interaction, synthetic content generation, emotion recognition, deep fakes

---

### Phase 3: Preliminary Output

Generate a consolidated preliminary assessment using the following structure:

```markdown
## AI Act Quick Assessment — PRELIMINARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠ PRELIMINARY ASSESSMENT — Full analysis required for compliance decisions
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

System:           [name/description]
Date:             [date]
Assessment Type:  PRELIMINARY (Quick Assessment)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CLASSIFICATION SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AI System (Art. 3(1)):     [Likely YES / Likely NO / Unclear — full test needed]
Scope (Art. 2):            [In scope / Likely excluded — Art. 2(x)]
Risk Tier:                 [Likely Prohibited / Likely High-Risk / Likely GPAI / Likely Limited / Likely Minimal / Unclear]
Classification Basis:      [Likely Art. 5(1)(x) / Likely Annex III Nr. X / Likely Art. 50 / Likely minimal]
Confidence:                [High / Medium / Low]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ROLE ASSESSMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Likely Role:               [Provider / Deployer / Quasi-Provider / Importer / Distributor]
Quasi-Provider Risk:       [None / Possible — [trigger]]
Key Concern:               [if any — e.g., finetuning may trigger Art. 25]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOP OBLIGATIONS (if high-risk or GPAI)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
| # | Obligation | Article | Urgency | Effort Estimate |
|---|-----------|---------|---------|-----------------|
| 1 | [top obligation] | [Art. X] | [Immediate/Short-term/Ongoing] | [Low/Medium/High] |
| 2 | [second obligation] | [Art. X] | [Immediate/Short-term/Ongoing] | [Low/Medium/High] |
| 3 | [third obligation] | [Art. X] | [Immediate/Short-term/Ongoing] | [Low/Medium/High] |
| 4 | [fourth obligation] | [Art. X] | [Immediate/Short-term/Ongoing] | [Low/Medium/High] |
| 5 | [fifth obligation] | [Art. X] | [Immediate/Short-term/Ongoing] | [Low/Medium/High] |

For ALL risk tiers:
| - | AI competence (Art. 4) | Art. 4 | Immediate (since Feb 2025) | Low-Medium |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPLIANCE TIMELINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Applicable Deadline:       [2 Feb 2025 / 2 Aug 2025 / 2 Dec 2027 (Annex III — Omnibus) / 2 Aug 2028 (Annex I — Omnibus)]
Days Remaining:            [X days]
Urgency:                   [OVERDUE / CRITICAL / HIGH / MEDIUM / LOW]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
JURISDICTION FLAGS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Jurisdiction-specific flags based on deployment country, e.g.:]
[DE: Works council co-determination likely required (BetrVG §87)]
[FR: CSE consultation required before deployment]
[Finance sector: BaFin/[regulator] AI model governance requirements apply]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINANCIAL EXPOSURE (PRELIMINARY)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Maximum penalty:           [EUR XM or X% turnover — Art. 99(X)]
SME proportionality:       [Applies / Does not apply]
Penalty tier:              [Tier 1/2/3]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FLAGS & WARNINGS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[List any flags, e.g.:]
[PROHIBITED PRACTICE RISK — Art. 5(1)(x) — immediate legal review required]
[QUASI-PROVIDER RISK — finetuning may trigger Art. 25]
[PROFILING DETECTED — may affect Art. 6(3) exception]
[GDPR OVERLAP — DPIA likely required under Art. 35 GDPR]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ASSESSMENT CONTEXT (paste into next skill)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
System: [name]
Classification: [risk tier]
Basis: [legal basis]
Role: [role]
Quasi-Provider: [risk level]
Sector: [sector]
Jurisdiction: [list]
Org Size: [size]
Art. 50: [applicable triggers]
GPAI: [yes/no, systemic risk]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RECOMMENDED NEXT STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. → Do a full risk-tier classification with documented reasoning
   [Priority: HIGH / MEDIUM — based on preliminary findings]

2. → Do a detailed role determination (provider/deployer/importer/distributor)
   [Priority: HIGH if quasi-provider risk detected / MEDIUM otherwise]

3. → Do a complete obligation mapping with RACI
   [Priority: HIGH if high-risk / MEDIUM if limited risk]

4. → Generate formal assessment documentation
   [Priority: HIGH for regulatory files / MEDIUM for internal tracking]

5. → Engage legal counsel for:
   [List specific areas requiring legal judgment]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠ This preliminary assessment was generated using the AI Act Quick
  Assessment tool. It provides directional guidance only. All
  determinations marked "Likely" require validation through the
  detailed assessment skills listed above.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### Phase 4: Template Offer (Optional)

After presenting the preliminary assessment, offer:

> "Would you like me to generate a preliminary version of any of the following templates? These will be marked as preliminary and should be finalized after running the full assessment skills."
>
> 1. **Classification Record (Prüfprotokoll)** — preliminary audit trail
> 2. **Compliance Register Entry** — preliminary obligation tracker
> 3. **Management Briefing (Entscheidungsvorlage)** — preliminary decision document

If requested, produce these as preliminary versions of the standard compliance-documentation templates, and mark all outputs prominently as "PRELIMINARY — Full assessment recommended."

---

## Critical Reminders

1. **This is a triage tool** — always recommend a full assessment (classification, role determination, obligation mapping, formal report) before any compliance decision
2. **"Likely" is not "confirmed"** — preliminary determinations require validation
3. **Err on the side of caution** — if uncertain between risk tiers, flag the higher risk tier as possible
4. **Flag uncertainty explicitly** — Low confidence ratings require immediate follow-up with a full assessment
5. **National requirements matter** — always flag jurisdiction-specific obligations using [references/jurisdiction-flags.md]
6. **Compliance timeline** — reference [references/compliance-deadlines.md] for deadline urgency
7. **Enforcement exposure** — for penalty context, note the Art. 99 tiers: up to €35M / 7% of worldwide annual turnover for Art. 5 prohibited-practice violations, and €15M / 3% for other infringements

## Part of the EU AI Act suite

This skill works on its own, but it's designed to interlock with my other EU AI Act skills — install any individually, or use them together for an end-to-end workflow:

- **EU AI Act System Classifier** — risk-tier classification across all five tiers
- **EU AI Act High-Risk Classifier** — depth Annex I / Annex III assessment
- **EU AI Act Role Determination** — provider / deployer / importer / distributor (incl. Art. 25)
- **EU AI Act Obligations Mapper** — obligations by role and risk tier
- **EU AI Act Examination Report Generator** — audit-ready compliance report
- **EU AI Act Knowledge Base** — Q&A over the Act + Commission guidelines

Each is available as a separate skill — install only what you need.
