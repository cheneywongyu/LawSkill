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
source_index: 187
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 欧盟人工智能法案角色确定

原始名称：`EU AI Act Role Determination`  
作者：Oliver Schmidt-Prietz  
分类：compliance  
来源：https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-role-determination  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

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

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

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

---

## SKILL.md Original

---
name: eu-ai-act-roles-oliver-schmidt-prietz
description: |
  Determines the organization's role (provider, deployer, importer, distributor, or quasi-provider) and assesses Art. 25 quasi-provider risk of the EU AI Act. This skill should be used when the user asks to "determine AI Act roles", "check if we are provider or deployer", "assess quasi-provider status", "check Art. 25 substantial modification", "check value chain responsibilities", or mentions "Betreiber", "Anbieter", "wesentliche Veränderung", or finetuning implications under the AI Act.
metadata:
  author: Oliver Schmidt-Prietz
  license: AGPL-3.0
  version: 2026.06.05
---

# EU AI Act Role Determination

Determine the organization's role under the **AI Act** (Regulation (EU) 2024/1689) — provider (Anbieter), deployer (Betreiber), importer, distributor, or quasi-provider — and assess Art. 25 quasi-provider risk.

## Disclaimer (show at session start, do not block)

> **Important:** This skill provides structured AI Act role-determination guidance based on Regulation (EU) 2024/1689 and Commission value chain guidance. It is not legal advice. Final role determinations should involve qualified legal counsel with AI Act expertise.

---

## When to Search the Web

**On activation — search for:**
```
EU AI Act Commission guidance provider deployer roles value chain [current year]
EU AI Act Art. 25 substantial modification guidance latest
```

**For finetuning assessment — search for:**
```
EU AI Act finetuning substantial modification technical standards [current year]
EU AI Act open source model modification provider status
```

**For value chain obligations — search for:**
```
EU AI Act provider deployer responsibility allocation guidance [current year]
EU AI Act Art. 25(2) original provider support duty interpretation
```

---

## Workflow: Ask Questions ONE AT A TIME

### Phase 1: Context Gathering (Adaptive Intake)

**Prior Assessment Context (optional):**
> "If you have previously run another EU AI Act skill, you may paste the Assessment Context block here. This pre-fills several fields and avoids redundant input."

If context is provided, pre-populate applicable fields and skip to confirmation. If any field conflicts with user answers, flag the inconsistency.

**Batch 1 — Open-ended question (single prompt):**

> "Let's determine your organization's role under the EU AI Act."
>
> You can answer in your own words — a short paragraph or bullet points. I'll ask follow-up questions only if needed.
>
> **Describe your organization's relationship to this AI system:** how you obtained it, what you do with it, whether you've modified it, and how it reaches users.

**Coverage Analysis (internal — do not show this table to the user):**

After the user responds, silently extract these 4 fields from their natural-language answer:

| # | Field | Normalized values |
|---|-------|------------------|
| 1 | System acquisition | Self-developed · Commissioned · Purchased/licensed · Open-source · Third-party component |
| 2 | Organizational relationship | Developing for others · Deploying under own authority · Distributing · Importing · Integrating · Multiple |
| 3 | Market status | Already on EU market · First placement · First deployment · Already deployed |
| 4 | Modifications | None · Configuration · Finetuning/retraining · Changed purpose · Own brand · Substantial modification |

Apply generous extraction — e.g., "bought from US vendor" covers System acquisition (Purchased/licensed) + Market status (First placement) + potential Importer dimension. "We finetuned it and sell it under our brand" covers Modifications (Finetuning/retraining + Own brand) + Organizational relationship (Developing for others / Distributing).

**Batch 2 — Adaptive follow-up (only if needed):**

- If all 4 fields are clearly covered → skip Batch 2 entirely. Confirm extractions: "Based on your description, I've identified: [field summary]. Does this look correct?"
- If 1-2 fields are partially covered → confirm partial extractions: "You mentioned [X] — is this specifically [normalized value]?"
- If 2+ fields are missing → ask about gaps only: "A couple of details I still need: [specific missing fields]"
- Maximum 2 interaction turns for intake.

**Information Normalization (internal):**

Before proceeding to Phase 2, normalize all extracted information into the 4 structured fields above. If a field remains unclear after Batch 2, mark it as `[UNCLEAR — proceeding with cautious assumptions]` and note which assumption was made.

---

### Phase 2: Primary Role Determination

Read [references/role-definitions.md](references/role-definitions.md) for full legal definitions.

Apply the decision tree through Art. 3(3)-(7):

```
ROLE DETERMINATION DECISION TREE

System acquisition + Organizational relationship → Role mapping:

Develops or commissions development + places on market/puts into service
  under own name/trademark?
  └─ YES → PROVIDER (Anbieter) — Art. 3(3)

Uses AI system under own authority in professional capacity?
  └─ YES → DEPLOYER (Betreiber) — Art. 3(4)

Imports AI system from third country to place on EU market?
  └─ YES → IMPORTER (Einführer) — Art. 3(6)

Makes AI system available on EU market (not as provider/importer)?
  └─ YES → DISTRIBUTOR (Händler) — Art. 3(7)

Integrates AI system into product as manufacturer?
  └─ YES → Product manufacturer — Art. 25(3), treated as PROVIDER
```

**Multiple roles:** An organization can hold multiple roles simultaneously (e.g., provider of one system and deployer of another). Assess each system separately.

**Output after primary role determination:**

> "Based on your answers, your primary role appears to be **[Role]** under Art. 3([X]) AI Act.
> [Brief reasoning based on answers]"

### Role Determination Visual Decision Tree

```
                ┌──────────────────────────────┐
                │ Did your org DEVELOP or       │
                │ COMMISSION the AI system?     │
                └──────────────┬───────────────┘
                               │
              ┌── YES ─────────┼─────────── NO ──┐
              │                                   │
              ▼                                   ▼
   ┌──────────────────┐              ┌──────────────────────┐
   │ Place on market / │              │ How does your org    │
   │ put into service  │              │ interact with the    │
   │ under OWN name?   │              │ system?              │
   └────────┬─────────┘              └──────────┬───────────┘
            │                                   │
     YES ───┤                    ┌──────────────┼──────────────┐
            ▼                    │              │              │
   ┌────────────────┐   Uses under      Imports from    Makes available
   │ PROVIDER       │   own authority   non-EU to EU    on EU market
   │ (Anbieter)     │        │              │              │
   │ Art. 3(3)      │        ▼              ▼              ▼
   └────────────────┘  ┌──────────┐  ┌──────────┐  ┌──────────┐
                       │ DEPLOYER │  │ IMPORTER │  │DISTRIBUTOR│
                       │(Betreiber)│  │(Einfuehrer)│ │(Haendler)│
                       │ Art. 3(4)│  │ Art. 3(6)│  │ Art. 3(7)│
                       └──────────┘  └──────────┘  └──────────┘

   Note: Product manufacturers integrating AI → Art. 25(3) → PROVIDER
```

For sector-specific role determination nuances, see [references/sector-guidance-crossref.md](references/sector-guidance-crossref.md). For worked role determination examples, see [references/case-studies.md](references/case-studies.md).

---

### Phase 3: Quasi-Provider Risk Assessment (Art. 25)

**Only proceed with this phase if:**
1. The system is high-risk, AND
2. The user is not already classified as the original provider

Read [references/quasi-provider-scenarios.md](references/quasi-provider-scenarios.md) and [references/substantial-modification.md](references/substantial-modification.md).

> "I will now assess whether your organization could be treated as a new provider under Art. 25 ('quasi-provider'). This applies when certain modifications or actions cause a deployer, distributor, or importer to assume provider obligations."

**Scenario 1 — Own Name/Brand — Art. 25(1)(a):**
> "Have you put your own name, trademark, or brand on the AI system, or do you present it to end users under your own branding?"

If YES → **quasi-provider under Art. 25(1)(a)**. Organization assumes full provider obligations.

**Scenario 2 — Substantial Modification — Art. 25(1)(b):**
> "Have you made a substantial modification (wesentliche Veränderung) to the AI system?"

Read [references/substantial-modification.md](references/substantial-modification.md) for the 3-step checklist.

Apply the 3-step determination:

**Step 1: Identify the change**
> "What specific changes were made to the AI system? (technical parameters, data, architecture, deployment context)"

**Step 2: Assess foreseeability**
> "Were these changes foreseen or covered in the original provider's conformity assessment or intended purpose documentation?"

**Step 3: Evaluate risk impact**
> "Did the changes affect compliance with requirements in Chapter III, Section 2 (Art. 8-15), or did they alter the system's risk profile?"

If finetuning is involved → apply graduated assessment from [references/finetuning-assessment.md](references/finetuning-assessment.md):

| Finetuning Level | Risk of Substantial Modification |
|------------------|----------------------------------|
| PEFT/Adapter (LoRA, QLoRA) | Low — typically does not constitute substantial modification |
| Layer-wise finetuning | Medium — may constitute substantial modification depending on scope |
| Full model retraining | High — likely constitutes substantial modification |

**Scenario 3 — Changed Intended Purpose — Art. 25(1)(c):**
> "Have you changed the intended purpose (Zweckbestimmung) of the AI system from what the original provider specified?"

If YES → **quasi-provider under Art. 25(1)(c)**. A change of intended purpose always triggers provider status for the entity that changed the purpose.

**Scenarios 4-5 — Product Manufacturer Integration — Art. 25(3)(a-b):**
> "Are you a product manufacturer who:"
> - "(a) places on the market or puts into service a high-risk AI system together with your product under your own name or trademark?"
> - "(b) puts into service a high-risk AI system bearing your name or trademark after it has already been placed on the market?"

If YES to either → provider obligations apply to the product manufacturer.

**Art. 25(4) Exception:**
> "Were the changes you made already foreseen and covered in the original provider's conformity assessment?"

If YES → Art. 25(4) applies — the original conformity assessment remains valid, and Art. 25(1)(b) does not trigger quasi-provider status.

### Quasi-Provider Trigger Assessment Decision Tree

```
              ┌──────────────────────────────────┐
              │ Is the system HIGH-RISK and       │
              │ obtained from another provider?   │
              └───────────────┬──────────────────┘
                              │
               NO ────────────┼──────────── YES
               │                             │
               ▼                             ▼
    ┌─────────────────┐       ┌──────────────────────────┐
    │ Art. 25 does    │       │ Check 3 triggers:        │
    │ not apply.      │       └──────────┬───────────────┘
    │ Stay in primary │                  │
    │ role.           │    ┌─────────────┼─────────────┐
    └─────────────────┘    │             │             │
                           ▼             ▼             ▼
                   ┌────────────┐ ┌────────────┐ ┌────────────┐
                   │ Own name/  │ │ Substantial│ │ Changed    │
                   │ brand?     │ │ modifica-  │ │ intended   │
                   │ Art.25(1a) │ │ tion?      │ │ purpose?   │
                   └─────┬──────┘ │ Art.25(1b) │ │ Art.25(1c) │
                         │        └─────┬──────┘ └─────┬──────┘
                    YES ─┤         YES ─┤          YES ─┤
                         │              │               │
                         │         ┌────▼─────┐        │
                         │         │Art. 25(4)│        │
                         │         │Foreseen? │        │
                         │         └────┬─────┘        │
                         │         YES ─┤── NO         │
                         │              │    │         │
                         │    No quasi- │    │         │
                         │    provider  │    │         │
                         │              │    │         │
                         ▼              │    ▼         ▼
                   ┌─────────────────────────────────────┐
                   │  QUASI-PROVIDER                     │
                   │  Full Art. 16 provider obligations  │
                   │  New conformity assessment required  │
                   └─────────────────────────────────────┘
```

---

### Phase 4: Role Determination Dashboard

```markdown
## AI Act Role Determination
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Organization:    [name]
AI System:       [name]
Date:            [date]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Primary Role:            [Provider / Deployer / Importer / Distributor]
Legal Basis:             [Art. 3(x)]
Quasi-Provider Risk:     [None / Low / Medium / High]
Art. 25 Scenario:        [N/A / Scenario 1-5 with detail]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ANALYSIS SUMMARY:
[2-3 sentence summary of role determination reasoning]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FLAGS:
[e.g., "Finetuning detected — layer-wise modification may trigger Art. 25(1)(b)"]
[e.g., "Purpose change from manufacturer's intended use detected"]
[e.g., "Own branding on third-party system — Art. 25(1)(a) quasi-provider"]
[e.g., "Product manufacturer integration — Art. 25(3) applies"]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESPONSIBILITIES:
Original provider support obligation: [Art. 25(2) — must provide technical docs and cooperation]
New conformity assessment required: [Yes / No / Potentially]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ASSESSMENT CONTEXT (paste into next skill)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
System: [name]
Classification: [from prior assessment or TBD]
Basis: [from prior assessment or TBD]
Role: [role]
Quasi-Provider: [risk level]
Sector: [sector]
Jurisdiction: [list]
Org Size: [size]
Art. 50: [from prior assessment or TBD]
GPAI: [from prior assessment or TBD]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEXT STEPS:
→ Map the applicable obligations to this role and risk tier
→ Generate formal assessment documentation
→ If quasi-provider risk is Medium/High: seek legal counsel for detailed Art. 25 analysis
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Critical Reminders

1. **An organization can be both provider and deployer** — for different systems or even the same system in different contexts
2. **Art. 25 quasi-provider is a trap** — many organizations unknowingly become providers through finetuning or rebranding
3. **Art. 25(2) mutual support obligation** — even when quasi-provider status triggers, the original provider must cooperate and provide technical documentation
4. **Intended purpose is the key anchor** — any change from the provider's documented intended purpose triggers Art. 25(1)(c)
5. **Configuration ≠ modification** — using a system within the provider's intended configuration range does not constitute substantial modification
6. **Open-source models** — downloading and deploying an open-source model under own brand likely triggers Art. 25(1)(a)
7. **Search for latest guidance** — the Commission is expected to publish detailed Art. 25 guidance
8. **Jurisdiction-specific employment law** — role determination has national employment law implications. Reference [references/employment-law-overlay.md](references/employment-law-overlay.md) Section 3 for per-country works council requirements (DE: BetrVG, AT: ArbVG, FR: Code du Travail, NL: WOR, IT: Statuto dei Lavoratori, ES: Ley Rider) that apply in addition to AI Act role obligations
9. **Compliance timeline** — reference [references/compliance-deadlines.md](references/compliance-deadlines.md) for applicable deadlines based on role and risk tier

## Part of the EU AI Act suite

This skill works on its own, but it's designed to interlock with my other EU AI Act skills — install any individually, or use them together for an end-to-end workflow:

- **EU AI Act Quick Assessment** — 15–25 min preliminary triage
- **EU AI Act System Classifier** — risk-tier classification across all five tiers
- **EU AI Act High-Risk Classifier** — depth Annex I / Annex III assessment
- **EU AI Act Obligations Mapper** — obligations by role and risk tier
- **EU AI Act Examination Report Generator** — audit-ready compliance report
- **EU AI Act Knowledge Base** — Q&A over the Act + Commission guidelines

Each is available as a separate skill — install only what you need.
