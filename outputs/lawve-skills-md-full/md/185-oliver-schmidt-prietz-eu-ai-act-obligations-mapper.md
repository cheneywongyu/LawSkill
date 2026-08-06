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
source_index: 185
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 欧盟人工智能法案义务映射器

原始名称：`EU AI Act Obligations Mapper`  
作者：Oliver Schmidt-Prietz  
分类：compliance  
来源：https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-obligations-mapper  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

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

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

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

---

## SKILL.md Original

---
name: eu-ai-act-obligations-oliver-schmidt-prietz
description: |
  Maps the full set of legal obligations for the EU AI Act based on role + risk tier, producing an actionable compliance matrix with RACI assignments and implementation priorities. This skill should be used when the user asks to "map AI Act obligations", "check what we need to do under the AI Act", "create a compliance checklist", "check deployer obligations", "assess provider duties", or mentions Art. 26, Art. 16-17, AI literacy Art. 4, DPIA, fundamental rights assessment, or "Pflichtenkatalog" under the AI Act.
metadata:
  author: Oliver Schmidt-Prietz
  license: AGPL-3.0
  version: 2026.06.05
---

# EU AI Act Obligations Mapper

Map the full set of legal obligations based on **role + risk tier** under the AI Act (Regulation (EU) 2024/1689), producing an actionable compliance matrix with RACI assignments and implementation priorities.

## Disclaimer (show at session start, do not block)

> **Important:** This skill provides structured AI Act obligations guidance based on the EU AI Act (Regulation (EU) 2024/1689). It is not legal advice. Implementation of compliance measures should involve qualified legal counsel and relevant technical experts. Effective dates for high-risk obligations reflect the AI Omnibus 2026 postponement (Annex III: 2 December 2027; Annex I: 2 August 2028).

---

## When to Search the Web

**On activation — search for:**
```
EU AI Act harmonized standards EN ISO implementing requirements [current year]
EU AI Act conformity assessment notified bodies guidance [current year]
```

**For management systems — search for:**
```
ISO 42001 AI management system alignment EU AI Act [current year]
EU AI Act quality management system requirements guidance
```

**For national rules — search for:**
```
[user's jurisdiction] AI Act national implementation measures [current year]
[user's jurisdiction] AI Act supervisory authority designation
```

**For conformity assessment — search for:**
```
EU AI Act conformity assessment procedures latest guidance
EU AI Act notified body designations [current year]
```

---

## Workflow: Ask Questions ONE AT A TIME

### Phase 1: Input Context (Context-Aware Adaptive Intake)

**Step 1 — Context detection (always first):**

> "Let's map your AI Act obligations."
>
> If you've already done a prior AI Act assessment (risk classification, role determination, or a quick triage), paste the Assessment Context block below. Otherwise, describe your situation in your own words.

**Step 2 — Coverage analysis (internal — do not show this table to the user):**

Map the context block or narrative to these 6 fields:

| # | Field | Source in context block | Fallback |
|---|-------|----------------------|----------|
| 1 | Risk classification | "Classification:" line | Ask |
| 2 | Organizational role | "Role:" line | Ask |
| 3 | Organization size | "Org Size:" line | Ask |
| 4 | Sector | "Sector:" line | Ask |
| 5 | Jurisdiction(s) | "Jurisdiction:" line | Ask |
| 6 | Existing frameworks | Not in context block | Always ask |

If the risk tier has not been classified yet → run a risk-tier classification first (AI-system test under Art. 3(1); prohibited / high-risk / GPAI / limited / minimal).
If the role hasn't been determined yet → determine it first (provider / deployer / importer / distributor under Art. 3 and Art. 25).

**Step 3 — Adaptive follow-up:**

- If context block provided → confirm extracted fields, then ask only about gaps. Fields 1-5 are typically covered; only field 6 (existing frameworks) needs asking.
- If narrative provided → extract what's covered, ask about remaining gaps in a single grouped question.
- If minimal information provided → ask about all missing fields in a single prompt, grouped conversationally.

Existing compliance status is always asked since it's new information not carried in the context block. Frame conversationally:

> "One more thing — which compliance foundations do you already have in place? (Risk management, data quality, QMS, DPIA, incident reporting, AI literacy training, or starting from scratch)"

Maximum 2 interaction turns for intake. If a field remains unclear, mark as `[UNCLEAR — proceeding with cautious assumptions]`.

---

### Phase 2: Obligation Mapping

Based on role + risk tier, load the applicable obligation set.

Read the relevant reference files:

**Deployer + High-Risk** → Read [references/high-risk-deployer-obligations.md](references/high-risk-deployer-obligations.md)
**Provider + High-Risk** → Read [references/high-risk-provider-obligations.md](references/high-risk-provider-obligations.md)
**Any role + Low-Risk/Minimal** → Read [references/low-risk-obligations.md](references/low-risk-obligations.md)
**Non-high-risk Annex III (Art. 6(3) exception)** → Read [references/art6-4-documentation.md](references/art6-4-documentation.md)
**GPAI provider** → Read [references/gpai-obligations.md](references/gpai-obligations.md)
**FRIA-triggering deployer** → Read [references/fria-template.md](references/fria-template.md) for Art. 27 FRIA methodology and fillable template
**Provider conformity assessment** → Read [references/conformity-assessment.md](references/conformity-assessment.md) for Art. 43 track selection, EU Declaration, and CE marking
**Provider post-market monitoring** → Read [references/post-market-monitoring.md](references/post-market-monitoring.md) for Art. 72 monitoring system design and serious incident reporting
**EU database registration** → Read [references/eu-database-registration.md](references/eu-database-registration.md) for Art. 49 registration process (provider and deployer tracks)
**All roles** → Art. 4 AI competence obligation always applies

**Obligation count preview:**

> "Based on your role as **[Role]** of a **[risk tier]** system, you have **N obligations** across K categories. I'll walk through them in 4 batches."

**Batched assessment (4 batches replacing per-obligation questioning):**

Present obligations grouped by category. For each batch, show a table with all obligations in that category and ask the user to respond to the entire batch at once:

| Batch | Category | Typical obligations |
|-------|----------|-------------------|
| 1 | Technical Measures | Use per instructions, monitoring, input data, log retention, data quality |
| 2 | Organizational Measures | Oversight persons, inform affected persons, employee info, AI competence, incident reporting, registration, authority cooperation |
| 3 | Management Systems | Risk management, data quality mgmt, QMS, post-market monitoring |
| 4 | Impact Assessments | DPIA, FRIA |

For each batch, present a table:

> **Batch [X] of 4: [Category]**
>
> | # | Obligation | Legal Basis | Priority | Status |
> |---|-----------|-------------|----------|--------|
> | 1 | [obligation] | [article] | [Immediate/Short-term/Ongoing] | Already in place / Partially addressed / Not yet addressed |
>
> "For each obligation, indicate: already in place, partially addressed, or not yet addressed. You can respond with just the numbers (e.g., '1,3 = in place; 2,4 = partial; 5 = not addressed')."

**Progress indicator** after each batch: "Batch [X] of 4 complete. [N] obligations remaining."

**Smart defaults:** If the user indicated "starting from scratch" in Phase 1, default all obligations to "not yet addressed" and confirm: "Since you're starting from scratch, I've marked all obligations as not yet addressed. Any exceptions?"

Target: 4-5 interaction turns instead of 20+.

Flag priority levels: **critical timeline obligations first** (e.g., Art. 26(6) 6-month log retention must be operational from day one).

#### GDPR Cross-Reference Checks

Read [references/gdpr-crosswalk.md](references/gdpr-crosswalk.md).

At relevant obligation points, suggest existing GDPR skills:

| Obligation | Trigger | Suggestion |
|-----------|---------|------------|
| Art. 26(9) DPIA | High-risk deployer | "Perform a DPIA incorporating the provider's Art. 13 information about system capabilities and limitations" |
| Art. 26(11) inform affected persons | Deployer transparency | "Prepare a combined AI Act/GDPR transparency notice covering Art. 26(11) and Art. 13/14 GDPR" |
| Art. 10 data governance | Provider data quality | "Conduct a data inventory review mapping AI training data against GDPR data quality and minimization principles" |
| Art. 26(7) employee information | Workplace AI | "Prepare employee AI transparency documentation combining Art. 26(7) and GDPR Art. 13/14 requirements" |
| Art. 26(5) serious incidents | Incident detected | "Establish a dual incident reporting procedure covering both AI Act (Art. 73) and GDPR (Art. 33/34) timelines" |
| Personal data processing | Any AI processing personal data | "Review your GDPR Art. 28 processor agreement to include AI Act cooperation provisions (Art. 25(2))" |

### Obligation Priority Decision Tree

```
         ┌─────────────────────────┐
         │ ROLE + RISK TIER        │
         └────────────┬────────────┘
                      │
    ┌─────────────────┼──────────────────┐
    │                 │                  │
    ▼                 ▼                  ▼
┌─────────┐   ┌──────────────┐   ┌──────────────┐
│ PROVIDER│   │   DEPLOYER   │   │ GPAI MODEL   │
│         │   │              │   │ PROVIDER     │
└────┬────┘   └──────┬───────┘   └──────┬───────┘
     │               │                  │
     ▼               ▼                  ▼
 High-Risk?      High-Risk?        Systemic Risk?
 ├─ YES:         ├─ YES:           ├─ YES:
 │ Art. 8-17     │ Art. 26         │ Art. 53 + 55
 │ Art. 17 QMS   │ Art. 27 FRIA    ├─ NO:
 │ Art. 9 Risk   │ Art. 26(9) DPIA │ Art. 53
 │ Art. 43 CA    │ Art. 49(3) Reg  └────────────
 │ Art. 49 Reg   └────────────
 │               ├─ NO (Art. 50):
 ├─ NO           │ Art. 50 only
 │ (Art. 50):    ├─ NO (Minimal):
 │ Art. 50       │ Art. 4 only
 │ +Art. 6(4)    └────────────
 │ if Annex III
 └────────────

 ALL ROLES: Art. 4 AI Competence (always applies)
```

For worked obligation mapping examples, see [references/case-studies.md](references/case-studies.md).

---

### Phase 3: Implementation Roadmap

Group obligations by timeline:

**1. IMMEDIATE (before deployment / already overdue if deployed):**
- Use system per operating instructions (Art. 26(1))
- Monitoring system in place (Art. 26(5))
- Qualified oversight persons assigned (Art. 26(2))
- Log retention mechanism active (Art. 26(6))
- AI competence measures (Art. 4)

**2. SHORT-TERM (within 3 months of deployment):**
- Risk management system operational (Art. 9)
- Data quality management (Art. 10)
- Registration in EU database (Art. 49)
- DPIA completed (Art. 26(9))
- FRIA completed if required (Art. 27)
- Employee information (Art. 26(7))

**3. ONGOING (continuous):**
- System monitoring (Art. 26(5))
- Logging and record-keeping (Art. 12, Art. 26(6))
- Incident reporting (Art. 26(5) third sentence)
- Authority cooperation (Art. 26(12))
- Post-market monitoring data contribution

**4. PERIODIC (regular intervals):**
- Risk reassessment (Art. 9 — recommended annually)
- AI competence training updates (Art. 4)
- Documentation review and update
- Testing and validation (Art. 15)

Read [references/technical-measures.md](references/technical-measures.md), [references/organizational-measures.md](references/organizational-measures.md), and [references/management-systems.md](references/management-systems.md) for detailed requirements.

For the full compliance timeline with quarterly action calendar, resource estimates by organization size, and dependency mapping between activities, reference [references/compliance-roadmap.md](references/compliance-roadmap.md).

---

### Phase 4: Obligations Matrix Output

```markdown
## AI Act Compliance Obligations Matrix
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Role: [Role]  |  Risk Tier: [Tier]  |  Basis: [legal basis]
Organization: [name]  |  Date: [date]

### Technical Measures
| # | Obligation | Legal Basis | Priority | Status | RACI | Effort |
|---|-----------|-------------|----------|--------|------|--------|
| 1 | Use system per operating instructions | Art. 26(1) | Immediate | [ ] | IT=R, Legal=A | Low |
| 2 | Monitor system operation | Art. 26(5) | Immediate | [ ] | IT=R, Compliance=A | Medium |
| 3 | Ensure input data relevance | Art. 26(4) | Immediate | [ ] | IT=R, Business=A | Medium |
| 4 | Retain auto-generated logs (6 months) | Art. 26(6) | Immediate | [ ] | IT=R, Legal=A | Low |
| 5 | Data quality management | Art. 10 | Short-term | [ ] | IT=R, Data=A | High |

### Organizational Measures
| # | Obligation | Legal Basis | Priority | Status | RACI | Effort |
|---|-----------|-------------|----------|--------|------|--------|
| 1 | Assign qualified oversight persons | Art. 26(2) | Immediate | [ ] | HR=R, Legal=A | Medium |
| 2 | Inform affected persons | Art. 26(11) | Immediate | [ ] | Legal=R, Comms=A | Medium |
| 3 | Inform employees/works council | Art. 26(7) | Short-term | [ ] | HR=R, Legal=A | Medium |
| 4 | AI competence training | Art. 4 | Short-term | [ ] | HR=R, Mgmt=A | Medium |
| 5 | Incident reporting procedure | Art. 26(5) s.3 | Immediate | [ ] | Legal=R, IT=C | High |
| 6 | Register use in EU database | Art. 49(3) | Short-term | [ ] | Legal=R | Low |
| 7 | Cooperate with authorities | Art. 26(12) | Ongoing | [ ] | Legal=R, Mgmt=A | Low |

### Management Systems Required
| System | Legal Basis | Scope | Existing? |
|--------|------------|-------|-----------|
| Risk Management | Art. 9 | Continuous lifecycle risk assessment | [ ] |
| Data Quality Mgmt | Art. 10 | Training/validation/test data governance | [ ] |
| Quality Management | Art. 17 | Processes, procedures, compliance concept | [ ] |
| Post-Market Monitoring | Art. 72 | Monitoring throughout lifetime | [ ] |

### Impact Assessments Required
| Assessment | Legal Basis | When | Status |
|-----------|------------|------|--------|
| DPIA | Art. 26(9) + Art. 35 GDPR | Before deployment | [ ] |
| Fundamental Rights Assessment | Art. 27 | Before deployment (public bodies + certain private) | [ ] |

### GDPR Cross-References
| AI Act Obligation | GDPR Parallel | Recommended Action |
|------------------|---------------|----------------|
| Art. 26(9) DPIA | Art. 35 GDPR | Perform DPIA per Art. 35 GDPR incorporating Art. 13 information |
| Art. 26(11) inform persons | Art. 13/14 GDPR | Draft combined AI Act + GDPR transparency notice |
| Art. 10 data governance | Art. 25 GDPR (DPbD) | Conduct data inventory and governance review |
| Art. 26(7) employee info | Art. 13/14 GDPR | Prepare employee AI transparency documentation |
| Incident reporting | Art. 33/34 GDPR | Establish dual AI Act/GDPR incident reporting procedure |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SUMMARY:
TOTAL: [X] obligations | [Y] immediate | [Z] require legal judgment
Timeline: [X] already compliant | [Y] gaps identified | [Z] not yet assessed

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ASSESSMENT CONTEXT (paste into next skill)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
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

NEXT STEPS:
→ Generate formal assessment documentation (classification rationale + obligation matrix)
→ Address [Y] immediate gaps as priority
→ Establish management systems within [timeline]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Critical Reminders

1. **Art. 4 AI competence applies to ALL roles and ALL risk tiers** — even minimal risk systems
2. **Art. 26(6) log retention (6 months)** — must be in place from day one of deployment
3. **Art. 26(9) DPIA** — must be completed BEFORE deployment, not after
4. **Art. 27 FRIA** — required for public bodies, private entities providing public services, and deployers of insurance risk assessment (Annex III Nr. 5(b)) and social benefits eligibility (Annex III Nr. 5(c)) systems
5. **Art. 26(5) incident reporting** — "without undue delay" to provider and authority
6. **SME proportionality** — Art. 62 requires authorities to consider SME capabilities
7. **Transition periods vary** — prohibited practices (Feb 2025), GPAI (Aug 2025), high-risk Annex III (**Dec 2027** — Omnibus-postponed from Aug 2026), high-risk Annex I (**Aug 2028** — Omnibus-postponed from Aug 2027). The AI Omnibus is a legislative-in-progress instrument; verify the current status of the postponement via a web search before relying on these dates.
8. **Search for latest harmonized standards** — technical implementation standards are still being developed
9. **Enforcement exposure** — factor in the penalty tiers when prioritising gaps: up to €35M / 7% of worldwide annual turnover for Art. 5 prohibited-practice violations, and €15M / 3% for other infringements (Art. 99). Enforcement runs through national market-surveillance authorities and, for GPAI, the AI Office.
10. **Jurisdiction-specific obligations** — reference [references/regulatory-overlays.md](references/regulatory-overlays.md) for per-country employment law, financial regulator, and data protection overlay requirements that apply in addition to AI Act obligations
11. **Compliance timeline & resources** — reference [references/compliance-roadmap.md](references/compliance-roadmap.md) for quarterly action calendar, resource estimation by organization size, and phased compliance roadmap template

## Part of the EU AI Act suite

This skill works on its own, but it's designed to interlock with my other EU AI Act skills — install any individually, or use them together for an end-to-end workflow:

- **EU AI Act Quick Assessment** — 15–25 min preliminary triage
- **EU AI Act System Classifier** — risk-tier classification across all five tiers
- **EU AI Act High-Risk Classifier** — depth Annex I / Annex III assessment
- **EU AI Act Role Determination** — provider / deployer / importer / distributor (incl. Art. 25)
- **EU AI Act Examination Report Generator** — audit-ready compliance report
- **EU AI Act Knowledge Base** — Q&A over the Act + Commission guidelines

Each is available as a separate skill — install only what you need.
