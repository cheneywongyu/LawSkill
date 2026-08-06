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
source_index: 157
readme_path: "README.md"
skill_path: "SKILL.md"
---

# DPIA 哨兵

原始名称：`DPIA Sentinel`  
作者：Oliver Schmidt-Prietz  
分类：data-protection  
来源：https://lawve.ai/@oliver-schmidt-prietz/skill/dpia-sentinel  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

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

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

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

---

## SKILL.md Original

---
name: dpia-sentinel-oliver-schmidt-prietz
description: |
  GDPR Data Protection Impact Assessment (DPIA) guidance under Article 35 GDPR, EDPB Guidelines WP 248 rev.01, EDPB Opinion 28/2024 (AI), and national SA blacklists/whitelists. Triggers: "DPIA", "DSFA", "Datenschutz-Folgenabschätzung", "impact assessment", "Art. 35", "do I need a DPIA", descriptions of new high-risk processing (profiling, AI, biometrics, large-scale monitoring, special category data), Art. 36 prior consultation questions, national blacklist/whitelist queries.
metadata:
  author: Oliver Schmidt-Prietz
  license: AGPL-3.0
  version: 2026.06.05
---


# DPIA Sentinel

## Disclaimer (show at session start, do not block)

> **Important:** This skill provides structured GDPR Article 35 guidance based on EDPB Guidelines and national SA requirements. It is not legal advice. Involve your DPO (Art. 35(2)) and qualified counsel for final decisions.

## Routing

Determine what the user needs and load references accordingly:

| User Need | Load These References | Action |
|-----------|----------------------|--------|
| "Do I need a DPIA?" / threshold question | `references/edpb-criteria.md` + relevant jurisdiction file(s) | Run threshold assessment |
| Full DPIA | `edpb-criteria.md` + jurisdiction(s) + `references/risk-catalog.md` + `scoring.md` | Walk through assessment phases |
| Document generation (.docx) — custom format | `references/dpia-custom-population.md` + `references/templates.md` + docx skill | Populate custom template .docx (unpack → fill tables → repack) |
| Document generation (.docx) — EDPB 2026 format | `references/edpb-2026-population.md` + `references/edpb-2026-template.md` + docx skill | Populate official EDPB template .docx (unpack → fill tables → repack) |
| Specific legal question | Load relevant reference only | Answer directly |

**Jurisdiction selection:** Ask two questions: (1) Where is the controller's main establishment? (2) Where are the data subjects located? Load **all** jurisdiction files that are relevant — this may be multiple files for multi-jurisdictional processing. See `references/edpb-criteria.md` → "Multi-Jurisdictional DPIA Analysis" for the full decision framework.

Available jurisdiction files:
- `references/jurisdictions/de-dsk.md` — Germany
- `references/jurisdictions/fr-cnil.md` — France
- `references/jurisdictions/ie-dpc.md` — Ireland
- `references/jurisdictions/be-apd.md` — Belgium
- `references/jurisdictions/nl-ap.md` — Netherlands
- `references/jurisdictions/it-garante.md` — Italy
- `references/jurisdictions/pl-uodo.md` — Poland
- `references/jurisdictions/whitelists.md` — France, Czech Republic, Spain, Austria

For jurisdictions not covered by a dedicated file, rely on the EDPB nine-criteria analysis in `references/edpb-criteria.md` and note that the user should check their national SA's Art. 35(4) list directly.

## Assessment Flow

**Threshold → Description → Asset Inventory → Necessity → Proportionality → Inherent Risks (Track A+B) → Mitigations → Residual Risk → Art. 36 Check → Documentation**

This is the logical sequence, not a rigid script. Adapt to the user: if they provide rich context upfront, skip intake questions. If they're experienced, move faster. If they're new to DPIAs, explain more.

**Asset Inventory** (per EDPB Template 2026, Section 1.3): Collect risk-relevant assets — hardware, software, APIs/models, personnel, sites/premises, organisational assets. Group by logical module or technical layer. Include only assets whose compromise would plausibly impact data subjects' rights and freedoms.

**Necessity and Proportionality** are separate upstream gates (EDPB Template 2026, Section 3). Necessity: is the processing effective and least intrusive? Proportionality: do the benefits justify the impacts? These must be assessed *before* the risk mitigation phase.

**Two risk tracks** (per EDPB Template 2026): Track A identifies inherent-by-design risks (from processing working as intended). Track B identifies operational risks (from accidental/unlawful/abnormal events). Both are scored using the same L×S + modulating factors methodology in `references/scoring.md`.

The assessment is **iterative**: if mitigations in later stages change the processing design, revisit earlier analysis and flag this to the user.

## Legal Precision Points

These are areas where Claude's training knowledge may be imprecise. Always apply these rules:

1. **Art. 35(3) triggers are absolute.** If any of the three mandatory cases apply (systematic extensive automated evaluation with legal/significant effect; large-scale special category/criminal data; systematic monitoring of publicly accessible areas on large scale), a DPIA is required — no balancing, no judgment call.

2. **The two-criteria rule is a presumption, not a mandate.** Meeting 2+ of the 9 EDPB criteria creates a strong presumption a DPIA is needed. But a DPIA *may* be needed with only 1 criterion, and *may* be justified as unnecessary with 2 — if thoroughly documented. See WP 248 rev.01, p. 11.

3. **Art. 9 is cumulative with Art. 6.** Special category data always needs BOTH a legal basis under Art. 6 AND an exception under Art. 9(2). These are separate legal hurdles.

4. **"Large scale" has no fixed number.** The EDPB uses four factors: number of subjects, data volume, duration, geographic extent. An individual doctor is not large scale; a regional hospital is. Never cite a specific numerical threshold.

5. **National blacklists are additive, not exhaustive.** Processing not on a blacklist may still require a DPIA. A blacklist entry in the relevant jurisdiction overrides whitelist exemptions from other jurisdictions.

6. **Multi-jurisdictional processing requires checking ALL relevant blacklists.** Art. 35(4) lists are territorial — the DPIA obligation is triggered if the processing matches a blacklist in ANY jurisdiction where the controller is established OR where data subjects are located. The one-stop-shop mechanism (Art. 56) governs enforcement jurisdiction, but it does NOT limit which Art. 35(4) lists apply to the DPIA obligation itself. A single DPIA can address multiple jurisdictions, but the threshold analysis must run against each applicable national list. See `references/edpb-criteria.md` → "Multi-Jurisdictional DPIA Analysis" for details.

7. **DPIA must happen before processing begins** (Art. 35(1)). It is a pre-processing obligation, not a retroactive compliance exercise. If processing has already started, the DPIA should still be done but note this as a compliance gap.

8. **AI requires dual-phase analysis** (EDPB Opinion 28/2024). Training and deployment are separate processing activities with distinct risk profiles. A deployer cannot simply rely on the model provider's DPIA.

9. **Art. 36 prior consultation is sequential to the DPIA, not part of it.** The DPIA identifies residual risk; if that risk remains high after all feasible mitigations, Art. 36 requires consulting the SA before processing begins. The SA has 8 weeks (extendable by 6).

10. **Pseudonymization as risk reducer** (EDPB Guidelines 01/2025 on Pseudonymisation, adopted 17 January 2025): Effective pseudonymization with technically separated additional information can meaningfully reduce likelihood scores in risk assessment. But it must be genuine — if re-identification is trivial, it doesn't reduce risk.

11. **Risk assessment is from the data subject's perspective.** A DPIA assesses risks to rights and freedoms of natural persons (Recital 75), not corporate/business risks. Identity theft risk to the individual, not reputational risk to the company.

12. **AI Act FRIA is distinct from DPIA.** For high-risk AI systems under the AI Act, a Fundamental Rights Impact Assessment (FRIA) may also be required. DPIA (data protection risks) and FRIA (broader fundamental rights) are complementary — one does not replace the other.

13. **EDPB DPIA Template (v1.0, March 2026)** provides a harmonised EU-wide DPIA structure but does not mandate a specific risk scoring methodology. Controllers may use any established methodology (CNIL PIA, DSK SDM, etc.); the template records the minimum required information in a standardised format. National SA requirements and methodologies remain valid complements. Note: the template was adopted for public consultation — check for final version updates.

## Output Formats

**Threshold result:** Present a clear verdict (DPIA Required / Recommended / Not Required) with the reasoning showing Art. 35(3) check, criteria analysis, and national list check.

**Risk register:** Table with Risk ID, Track (A/B), Description, Rights Category, Likelihood (1-5), Severity (1-5), Score, Modulating Factors, Adjusted Level. Use the scoring methodology in `references/scoring.md`.

**Residual risk overview:** Summary showing total risks by level before and after additional mitigation, plus overall verdict (APPROVED / CONDITIONALLY APPROVED / CONSULT SA / REJECTED).

**Documents:** Both formats use template population (unpack → fill → repack) for consistent styling. Read the docx skill first, then the relevant population guide:
- **EDPB 2026 format:** Populate `references/edpb-2026-template-v1.docx` using `references/edpb-2026-population.md`. Official format recognized by all EU SAs.
- **Custom 12-section format:** Populate `references/dpia-custom-template-v1.docx` using `references/dpia-custom-population.md`. Includes threshold analysis, jurisdictional blacklist detail, risk heat maps, and annexes.

> **If the `.docx` template files are not present** (some hosts, including lawve.ai, store text files only): build the Word document **from scratch with the docx skill following the matching population guide** — the population guides above fully specify every section, table, and field. The pre-styled `.docx` templates are available in the GitHub repo linked at the top of this skill if you want the exact corporate styling.

Ask the user which format they prefer.

## Related GDPR skills

This skill works standalone, but pairs well with my other EU data-protection skills — install any on its own or combine them:

- **GDPR Breach Sentinel** — Art. 33/34 breach response & notification
- **Privacy Notice Generator** — Art. 13/14 privacy notices
- **Transfer Impact Assessment (TIA)** — Chapter V transfer assessments
- **DPA Art. 28** — controller–processor agreements (AVV)
- **Legitimate Interest** — Art. 6(1)(f) LIA / balancing test
