---
id: "604a8816-4cbe-57ba-8ccf-495565f22b4b"
title: "NIS2 Navigator"
title_cn: "NIS2 导航器"
slug: "nis2-navigator"
url: "https://lawve.ai/@oliver-schmidt-prietz/skill/nis2-navigator"
author: "Oliver Schmidt-Prietz"
author_slug: "oliver-schmidt-prietz"
category: "compliance"
language: "en"
license: "AGPL 3.0"
jurisdictions: "EU, FR, DE"
status: "active"
source_index: 174
readme_path: "README.md"
skill_path: "SKILL.md"
---

# NIS2 导航器

原始名称：`NIS2 Navigator`  
作者：Oliver Schmidt-Prietz  
分类：compliance  
来源：https://lawve.ai/@oliver-schmidt-prietz/skill/nis2-navigator  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

# NIS2 合规性导航器 — 部署指南

> 📄 **【查看交互技能页面→】(https://oliverschmidtprietz.github.io/NIS2-Navigator/)**

请参阅 [CHANGELOG.md](CHANGELOG.md) 了解版本历史记录。

## 概述

NIS2 合规导航器 — 范围分类，艺术。 21 差距分析以及欧盟指令 2022/2555 下的合规路线图：

- **范围和分类** — 附件一/附件二 + 基本实体与重要实体的确定
- **艺术。 21 项差距分析**，10 项风险管理措施的成熟度评分为 0-4
- **每项措施的 ISO 27001 交叉引用**，以利用现有的认证工作
- **合规路线图**以及优先框架（法律曝光、依赖性、快速获胜）
- **深入德国 BSIG-neu 覆盖** — § 30 BSIG 注册、NIS2UmsuCG 细节
- **IT、FR、NL、AT、ES 的配置文件** — 特定国家/地区的实体类型分类法和监管机构
- **管理层简报模板**（第 20 条/第 38 条 BSIG）用于董事会级责任
- **事件报告框架**，包含时间表和升级路径
- **供应链安全**考虑因素贯穿始终
- **最终评估报告** 整合范围、差距和路线图

## 文件结构
```
nis2-navigator/
├── SKILL.md                              # Main skill instructions (deploy this)
├── CHANGELOG.md                          # Version history
└── references/
    ├── sector-classification.md          # Annex I / II sector taxonomy + entity-size rules
    ├── art21-measures.md                 # The 10 risk-management measures (Art. 21(2)(a)-(j))
    ├── germany-nis2umsucg.md             # § 30 BSIG, NIS2UmsuCG, BSI registration
    ├── eu-jurisdiction-profiles.md       # IT, FR, NL, AT, ES — entity taxonomy + SA contacts
    ├── regulatory-sources.md             # Official EU + Member State source catalog
    └── templates.md                      # Output templates (gap analysis, roadmap, briefing)
```
## 部署

### Claude.ai（用户技能）

1. 转到 **设置 → 个人资料 → 自定义技能**（或同等内容）
2.上传整个`nis2-navigator/`文件夹结构
3.该技能将在“NIS2”、“BSIG”、“BSIG-neu”、“NIS2UmsuCG”、“附件I/II”、“基本实体”或“第21条差距分析”上自动触发

### 克劳德代码/自定义 MCP 设置

1. 将 `nis2-navigator/` 文件夹复制到您的技能目录：
   ```bash
   cp -r nis2-navigator/ /path/to/your/skills/user/nis2-navigator/
   ```
| Phase | Description |
|-------|-------------|
| **Session Init** | Disclaimer, web search for recent developments, jurisdiction focus selection |
| **Phase 1: Scope & Classification** | Annex I/II routing, essential vs. important, jurisdiction-specific overlays (~5 min) |
| **Phase 2: Art. 21 Gap Analysis** | 0–4 maturity scoring across the 10 measures with ISO 27001 anchors (~15 min) |
| **Phase 3: Compliance Roadmap** | Prioritisation framework + Germany-specific items + Art. 20 / § 38 BSIG management briefing |
| **Output** | Final Assessment Report consolidating scope, gaps, and roadmap |
| Feature | Description |
|---------|-------------|
| Scope Classification | Annex I/II + essential/important + jurisdiction-specific overlays |
| Art. 21 Gap Analysis | 0–4 maturity scoring across all 10 measures |
| ISO 27001 Crossref | Each measure mapped to ISO 27001 controls |
| Roadmap Prioritisation | Legal-exposure-aware sequencing with quick-win identification |
| Germany Deep Coverage | § 30 BSIG, NIS2UmsuCG, BSI registration workflow |
| EU Profiles | IT, FR, NL, AT, ES — entity taxonomy + SA contacts |
| Management Briefing | Art. 20 / § 38 BSIG board-level liability briefing template |
| Final Report | Audit-ready assessment report consolidating all phases |
| Document | Reference |
|----------|-----------|
| NIS2 Directive | EU Directive 2022/2555 |
| Art. 21 | 10 risk-management measures |
| Art. 23 | Incident reporting obligations |
| Art. 20 | Management body responsibilities |
| Annex I / II | Sector and entity-type taxonomy |
| BSIG-neu (DE) | German NIS2UmsuCG transposition, § 30, § 38 |
| ISO 27001 | Risk-management measure crossref |
2. 确保该技能已在您的配置中注册

## 用法

### 快速入门

描述您的组织：

> “我们是一家德国云服务提供商，拥有 80 名员工，营业额为 1500 万欧元。
> 我们属于 NIS2 范围吗？如果是的话，请给我一个与艺术的差距分析。 21 和一个
> 12 个月路线图。”

该技能将对范围进行分类、运行差距分析并生成分阶段的路线图。

### 触发短语

-“NIS2”/“NIS-2”/“BSIG”/“BSIG-neu”/“NIS2UmsuCG”
- “基本实体”/“重要实体”/“附件一/二”
- “第 21 条差距分析”/“NIS2 准备情况”/“网络安全合规性评估”
- “BSI 注册”/“§ 30 BSIG”
- “Cyberbeveiligingswet”/“Loi Résilience”/“decreto Legislativo 138”

### 工作流程


## 能力总结


## 监管依据


## 许可和免责声明

该技能提供基于欧盟指令 2022/2555 和国家换位法的结构化 NIS2 合规指南。这不是法律建议。最终的合规决策应涉及组织的 CISO/信息安全官和在网络安全监管方面经验丰富的合格法律顾问。

根据 AGPL-3.0 许可。

> **质量保证：** 该技能附带了“evals/”文件夹中的评估测试，我运行该测试来根据预期结果检查其输出。

---

*由 Oliver Schmidt-Prietz 创建 — [OneZero Legal](https://onezero.legal)*

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

# NIS2 Compliance Navigator — Deployment Guide

> 📄 **[View the interactive skill page →](https://oliverschmidtprietz.github.io/NIS2-Navigator/)**

See [CHANGELOG.md](CHANGELOG.md) for version history.

## Overview

NIS2 Compliance Navigator — scope classification, Art. 21 gap analysis, and compliance roadmap under EU Directive 2022/2555:

- **Scope & classification** — Annex I / Annex II + essential vs. important entity determination
- **Art. 21 gap analysis** with 0–4 maturity scoring across the 10 risk-management measures
- **ISO 27001 cross-references** for each measure to leverage existing certification work
- **Compliance roadmap** with prioritisation framework (legal exposure, dependency, quick wins)
- **Deep German BSIG-neu coverage** — § 30 BSIG registration, NIS2UmsuCG specifics
- **Profiles for IT, FR, NL, AT, ES** — country-specific entity-type taxonomies and supervisory authorities
- **Management briefing template** (Art. 20 / § 38 BSIG) for board-level liability
- **Incident reporting framework** with timelines and escalation paths
- **Supply chain security** considerations integrated throughout
- **Final assessment report** consolidating scope, gaps, and roadmap

## File Structure

```
nis2-navigator/
├── SKILL.md                              # Main skill instructions (deploy this)
├── CHANGELOG.md                          # Version history
└── references/
    ├── sector-classification.md          # Annex I / II sector taxonomy + entity-size rules
    ├── art21-measures.md                 # The 10 risk-management measures (Art. 21(2)(a)-(j))
    ├── germany-nis2umsucg.md             # § 30 BSIG, NIS2UmsuCG, BSI registration
    ├── eu-jurisdiction-profiles.md       # IT, FR, NL, AT, ES — entity taxonomy + SA contacts
    ├── regulatory-sources.md             # Official EU + Member State source catalog
    └── templates.md                      # Output templates (gap analysis, roadmap, briefing)
```

## Deployment

### Claude.ai (User Skills)

1. Go to **Settings → Profile → Custom Skills** (or equivalent)
2. Upload the entire `nis2-navigator/` folder structure
3. The skill will auto-trigger on "NIS2", "BSIG", "BSIG-neu", "NIS2UmsuCG", "Annex I/II", "essential entity", or "Art. 21 gap analysis"

### Claude Code / Custom MCP Setup

1. Copy the `nis2-navigator/` folder to your skills directory:
   ```bash
   cp -r nis2-navigator/ /path/to/your/skills/user/nis2-navigator/
   ```
2. Ensure the skill is registered in your configuration

## Usage

### Quick Start

Describe your organisation:

> "We're a German cloud-services provider with 80 employees and €15M turnover.
> Do we fall under NIS2? If yes, give me a gap analysis against Art. 21 and a
> 12-month roadmap."

The skill will classify scope, run the gap analysis, and produce a phased roadmap.

### Trigger Phrases

- "NIS2" / "NIS-2" / "BSIG" / "BSIG-neu" / "NIS2UmsuCG"
- "Essential entity" / "Important entity" / "Annex I/II"
- "Art. 21 gap analysis" / "NIS2 readiness" / "Cybersecurity compliance assessment"
- "BSI registration" / "§ 30 BSIG"
- "Cyberbeveiligingswet" / "Loi Résilience" / "decreto legislativo 138"

### Workflow

| Phase | Description |
|-------|-------------|
| **Session Init** | Disclaimer, web search for recent developments, jurisdiction focus selection |
| **Phase 1: Scope & Classification** | Annex I/II routing, essential vs. important, jurisdiction-specific overlays (~5 min) |
| **Phase 2: Art. 21 Gap Analysis** | 0–4 maturity scoring across the 10 measures with ISO 27001 anchors (~15 min) |
| **Phase 3: Compliance Roadmap** | Prioritisation framework + Germany-specific items + Art. 20 / § 38 BSIG management briefing |
| **Output** | Final Assessment Report consolidating scope, gaps, and roadmap |

## Capabilities Summary

| Feature | Description |
|---------|-------------|
| Scope Classification | Annex I/II + essential/important + jurisdiction-specific overlays |
| Art. 21 Gap Analysis | 0–4 maturity scoring across all 10 measures |
| ISO 27001 Crossref | Each measure mapped to ISO 27001 controls |
| Roadmap Prioritisation | Legal-exposure-aware sequencing with quick-win identification |
| Germany Deep Coverage | § 30 BSIG, NIS2UmsuCG, BSI registration workflow |
| EU Profiles | IT, FR, NL, AT, ES — entity taxonomy + SA contacts |
| Management Briefing | Art. 20 / § 38 BSIG board-level liability briefing template |
| Final Report | Audit-ready assessment report consolidating all phases |

## Regulatory Basis

| Document | Reference |
|----------|-----------|
| NIS2 Directive | EU Directive 2022/2555 |
| Art. 21 | 10 risk-management measures |
| Art. 23 | Incident reporting obligations |
| Art. 20 | Management body responsibilities |
| Annex I / II | Sector and entity-type taxonomy |
| BSIG-neu (DE) | German NIS2UmsuCG transposition, § 30, § 38 |
| ISO 27001 | Risk-management measure crossref |

## License & Disclaimer

This skill provides structured NIS2 compliance guidance based on EU Directive 2022/2555 and national transposition laws. It is not legal advice. Final compliance decisions should involve your organisation's CISO / Information Security Officer and qualified legal counsel experienced in cybersecurity regulation.

Licensed under AGPL-3.0.

> **Quality assurance:** this skill ships with evaluation tests in the `evals/` folder, which I run to check its outputs against expected results.

---

*Created by Oliver Schmidt-Prietz — [OneZero Legal](https://onezero.legal)*

---

## SKILL.md Original

---
name: nis2-navigator
description: |
  NIS2 Compliance Navigator — scope classification, Art. 21 gap analysis (0-4 maturity scoring), and compliance roadmap under EU Directive 2022/2555 with deep German BSIG-neu coverage and profiles for Italy, France, Netherlands, Austria, Spain. Use when: (1) User mentions "NIS2", "NIS-2", "BSIG", "BSIG-neu", "NIS2UmsuCG", "Cyberbeveiligingswet", "Loi Résilience", "NISG", "decreto legislativo 138", (2) User asks if their organization falls under NIS2 or needs a cybersecurity compliance assessment, (3) User mentions essential/important entities, Annex I/II, BSI registration, § 30 BSIG, incident reporting, management body liability, supply chain security, (4) User wants a NIS2 gap analysis, readiness assessment, or compliance roadmap, (5) User asks about NIS2 fines, enforcement, or Nachweispflicht, (6) User asks about NIS2 in any EU Member State.
metadata:
  author: "Oliver Schmidt-Prietz"
  license: "agpl-3.0"
  version: "2026-06-05"
---

# NIS2 Compliance Navigator

Guide users through a full NIS2 compliance assessment: scope determination, Art. 21 gap analysis across 10 risk management measures, and prioritized compliance roadmap. Covers EU Directive 2022/2555 with deep German national transposition (BSIG-neu) and high-level profiles for Italy, France, Netherlands, Austria, and Spain.

## Session Initialization

### 1. Display Disclaimer (show at session start, do not block)

> **Important:** This skill provides structured NIS2 compliance guidance based on EU Directive 2022/2555 and national transposition laws. It is not legal advice. Final compliance decisions should involve your organisation's CISO / Information Security Officer and qualified legal counsel experienced in cybersecurity regulation.

### 2. Web Search on Activation

Search for current regulatory developments before starting — NIS2 transposition is still evolving in many Member States, and enforcement practice is developing rapidly:
```
NIS2 enforcement updates [current year]
NIS2 implementing regulation EU Commission [current year]
```

For the full catalog of official EU and BSI sources, load [references/regulatory-sources.md](references/regulatory-sources.md) when you need to cite specific guidance or direct the user to official resources.

### 3. Determine Jurisdiction Focus

> "Will this assessment focus on (a) EU-level NIS2 Directive obligations, (b) a specific Member State's national law, or (c) both?"

- **EU-level only** → Use Directive references (Art. 21, Art. 23, Annexes I/II)
- **Germany** → Load [references/germany-nis2umsucg.md](references/germany-nis2umsucg.md). Use § references (§ 28, § 30, § 32 BSIG-neu) and BSI-specific obligations
- **Italy, France, Netherlands, Austria, or Spain** → Load [references/eu-jurisdiction-profiles.md](references/eu-jurisdiction-profiles.md). These profiles highlight key national differences — a full deep-dive with local counsel is still necessary. Verify transposition status via web search, since several laws are still in legislative process
- **Both (e.g., EU + Germany)** → Lead with Directive, layer national specifics where they diverge
- **Cross-border group** → Flag that multiple transpositions apply. Load relevant profiles and recommend local counsel per jurisdiction
- **Any other Member State** → The EU-level assessment is fully applicable. National specifics will need separate research

---

## Phase 1: Scope & Classification (~5 minutes)

Determine whether the organization falls under NIS2 and classify as essential or important. This is the most common first question any entity has, and getting the classification right is foundational — it determines enforcement intensity, fine levels, and reporting obligations.

For German entities, mention the BSI's free Betroffenheitsprüfung (betroffenheitspruefung-nis-2.bsi.de) as a complementary first step. Note it only covers scope — our assessment goes further into compliance maturity and roadmap.

Ask questions ONE AT A TIME in this order:

| # | Category | Question |
|---|----------|----------|
| 1 | **Sector** | "What sector(s) does your organization operate in?" Offer Annex I/II categories as reference. |
| 2 | **Services** | "What specific services do you provide within that sector?" (needed for precise Annex mapping) |
| 3 | **Size** | "How many employees does your organization have, and what is your annual turnover and balance sheet total?" |
| 4 | **Group structure** | "Is your organization part of a corporate group? If so, are the NIS2-relevant activities at group or entity level?" |
| 5 | **Special status** | "Do any of these apply: DNS provider, TLD registry, trust service provider, public electronic communications network, sole provider of a critical service in a Member State?" |

### Classification Logic

Load [references/sector-classification.md](references/sector-classification.md) for the full Annex I/II sector mapping and size thresholds.

**Decision tree:**

1. **Sector match** → Map to Annex I (high criticality) or Annex II (other critical)
2. **Size test** → Medium: ≥50 employees OR (turnover >€10M AND balance sheet >€10M). Large: ≥250 employees OR (turnover >€50M AND balance sheet >€43M)
3. **Essential entity** if: Annex I + large, OR qualified trust service provider, TLD registry, DNS provider, public comms provider, central public administration, or KRITIS operator (DE)
4. **Important entity** if: Annex I + medium, OR Annex II + medium/large
5. **Regardless-of-size**: Check special categories in reference file
6. **Out of scope** if: Below medium thresholds AND no special status
7. **DORA check**: Financial entities under DORA are excluded from NIS2 Art. 21 and Art. 23 — redirect to DORA compliance (DORA acts as lex specialis with its own equivalent requirements)
8. **CIR check**: Digital infrastructure/provider entities face additional binding requirements under CIR 2024/2690 beyond Art. 21 — flag early

**Group structure:** Apply the size test at the level where the NIS2-relevant service operates. Consolidated figures apply with operational integration. Independent entities within a group: assess separately.

### Classification Output

> **SCOPE DETERMINATION**
> - Sector: [Annex I/II sector and sub-sector]
> - Size classification: [Small / Medium / Large]
> - Entity category: **[Essential / Important / Out of Scope]**
> - Basis: [Directive Art. / national law reference]
> - Special flags: [DORA exclusion / CIR applies / Regardless-of-size / None]
>
> *If Germany:* BSI registration [required/not required], status [completed / overdue]

**Example:** A German managed IT services provider with 120 employees and €25M turnover in the ICT service management sector (Annex I) → Annex I, medium enterprise, **essential entity** (MSPs are essential regardless of size). BSI registration required (overdue since 6 March 2026). CIR 2024/2690 applies. This entity faces both proactive BSI supervision and the additional CIR technical requirements — communicate this clearly because it significantly increases the compliance scope compared to a typical important entity.

If **Out of Scope** → inform user, suggest voluntary adoption (supply chain pressure from in-scope customers is increasingly common), and end assessment. Otherwise proceed to Phase 2.

---

## Phase 2: Art. 21 Gap Analysis (~15 minutes)

Walk through the 10 risk management measures from Art. 21(2)(a)–(j) / § 30 BSIG-neu. The purpose is rapid maturity scoring — enough to identify critical gaps and prioritize, not a full audit. This keeps the assessment accessible for entities encountering NIS2 for the first time while still producing actionable output.

Load [references/art21-measures.md](references/art21-measures.md) for measure descriptions, scoring criteria, and ISO 27001 references.

### Assessment Approach

For each measure, ask ONE targeted question, then score on a 0–4 scale:

| Score | Level | Description |
|-------|-------|-------------|
| 0 | **Non-existent** | No awareness, no measures |
| 1 | **Ad hoc** | Informal, reactive, person-dependent |
| 2 | **Defined** | Documented but inconsistently applied |
| 3 | **Managed** | Consistently implemented, monitored, reviewed |
| 4 | **Optimized** | Continuously improved, measured, integrated into enterprise risk management |

### ISO 27001 References

For each measure, include a brief reference to relevant ISO 27001:2022 Annex A controls. Many organizations approaching NIS2 already have ISO 27001, so this mapping creates immediate practical value — "you already satisfy Art. 21(2)(a) through your A.5.1 and A.5.2 controls" is the kind of output that saves hours of consultant time.

### The 10 Measures

Walk through each measure sequentially. For each:
1. Briefly explain what NIS2 requires (1–2 sentences)
2. Ask the targeted assessment question
3. Score based on the user's response — explain your reasoning so the user understands and can challenge the score
4. Note key gaps if score ≤ 2

Detailed measures, questions, and scoring criteria are in [references/art21-measures.md](references/art21-measures.md).

### Gap Analysis Output

After scoring all 10 measures, present a summary table:

```markdown
## NIS2 Gap Analysis Summary

| # | Measure (Art. 21(2)) | Maturity (0-4) | Status |
|---|---------------------|----------------|--------|
| a | Risk analysis & IS policies | [score] | [🔴/🟡/🟢] |
| b | Incident handling | [score] | [🔴/🟡/🟢] |
| c | Business continuity & crisis mgmt | [score] | [🔴/🟡/🟢] |
| d | Supply chain security | [score] | [🔴/🟡/🟢] |
| e | Network & IS acquisition/dev/maint | [score] | [🔴/🟡/🟢] |
| f | Effectiveness assessment | [score] | [🔴/🟡/🟢] |
| g | Cyber hygiene & training | [score] | [🔴/🟡/🟢] |
| h | Cryptography & encryption | [score] | [🔴/🟡/🟢] |
| i | HR security & access control | [score] | [🔴/🟡/🟢] |
| j | MFA & secure communications | [score] | [🔴/🟡/🟢] |

**Overall Score: [X] / 40**
**Overall Rating: [🔴 Critical / 🟡 Needs Improvement / 🟢 On Track]**
```

Traffic light: 🔴 = 0–1, 🟡 = 2, 🟢 = 3–4. Overall: 🔴 ≤ 15, 🟡 16–29, 🟢 ≥ 30.

**Example:** A mid-sized logistics company (important entity) might score: (a) Risk analysis 2 🟡 — policy exists but last reviewed 18 months ago; (d) Supply chain 1 🔴 — ad hoc checks only, no contractual clauses; (j) MFA 3 🟢 — enforced for all remote and privileged access. Overall 19/40, 🟡 Needs Improvement. Top priorities: supply chain security and incident handling.

---

## Phase 3: Compliance Roadmap

Generate a prioritized remediation roadmap based on the gap analysis.

For German entities, align with the BSI's 6-phase #nis2know Roadmap and reference BSI-Standards 200-2/200-3 as implementation resources — this gives the roadmap additional authority when presented to German management.

### Prioritization Framework

Essential entities face proactive supervision, so their gaps are more urgent at every maturity level:

| | Maturity 0 | Maturity 1 | Maturity 2 |
|--|-----------|-----------|-----------|
| **Essential entity** | P1 — Immediate | P1 — Immediate | P2 — Short-term |
| **Important entity** | P1 — Immediate | P2 — Short-term | P3 — Medium-term |

Measures at maturity 3–4 → maintenance mode (not in roadmap).

- **P1 — Immediate** (0–3 months): Fundamental gaps, acute risk
- **P2 — Short-term** (3–6 months): Significant gaps, structured remediation
- **P3 — Medium-term** (6–12 months): Enhancement to full maturity

### Roadmap Output

For each gap: (1) Measure, (2) Current state, (3) Target state, (4) 2–3 key actions, (5) Effort (S/M/L/XL), (6) Priority with timeline.

### Germany-Specific Items

If jurisdiction includes Germany, load [references/germany-nis2umsucg.md](references/germany-nis2umsucg.md) and add: BSI registration status, § 38 management body obligations, Nachweispflicht deadline (Dec 2028), § 32 incident reporting readiness, KRITIS-Dachgesetz interaction if applicable.

### Management Briefing (Art. 20 / § 38 BSIG)

Include a management body section in every roadmap. NIS2 Art. 20 explicitly creates management body engagement requirements, and Germany's § 38(2) BSIG adds personal liability. This section is often the most persuasive part of the assessment — it transforms the abstract compliance obligation into something personal for the individuals in the room:

> **Management Body Obligations**
> - Approve risk management measures (Art. 20(1) / § 38(1) BSIG)
> - Undergo regular cybersecurity training (Art. 20(2) / § 38(3) BSIG) — not delegable
> - Oversee implementation — execution can be delegated to CISO, oversight cannot
> - *Germany:* Personal liability for damages from non-compliance (§ 38(2) BSIG)

---

## Output: Final Assessment Report

Combine all three phases using the template in [references/templates.md](references/templates.md).

**Report structure:**
1. Executive Summary (scope verdict, overall score, top 3 priorities)
2. Scope & Classification Detail
3. Gap Analysis Scoring Table
4. Prioritized Compliance Roadmap
5. Management Body Obligations
6. Jurisdiction-Specific Requirements (if applicable)
7. Recommended Next Steps

---

## Key Guardrails

The non-obvious pitfalls that trip up real assessments:

1. **Self-assessment obligation** — No official notification from authorities. Entities must determine their own status. Many don't realize they're in scope
2. **Supply chain cascading** — Out-of-scope organizations increasingly face contractual NIS2 requirements from in-scope customers
3. **Dual incident reporting** — NIS2 (24h/72h/1-month to national authority) and GDPR (72h to DPA) run in parallel for incidents involving personal data. Different timelines, recipients, and content
4. **Size threshold trap** — The OR/AND logic catches companies small by headcount but large by revenue
5. **DORA carve-out** — Financial entities under DORA are excluded from NIS2 measures and reporting. Redirect, don't assess
6. **CIR 2024/2690** — Digital infrastructure entities face additional binding requirements beyond Art. 21
7. **Commission amendments (Jan 2026)** — Proposed, not in force. Mention for strategic awareness only

## More EU regulation skills

This skill works standalone. Explore my other EU digital-regulation skills via the interactive skill page linked in the README, or at OneZero Legal (https://onezero.legal).
