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
views: 763
downloads: 95
created_at: "2026-03-27T08:21:06.517077+01:00"
updated_at: "2026-04-26T17:46:50.805113+02:00"
source_index: 174
---

# NIS2 导航器

原始名称：`NIS2 Navigator`  
作者：Oliver Schmidt-Prietz  
分类：compliance  
来源：https://lawve.ai/@oliver-schmidt-prietz/skill/nis2-navigator

## 中文 README

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

## Original README

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
