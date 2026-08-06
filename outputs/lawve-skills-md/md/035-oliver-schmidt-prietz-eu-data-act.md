---
id: "322d788f-65e4-5cc6-be08-f94569a2d4e2"
title: "EU Data Act"
title_cn: "欧盟数据法"
slug: "eu-data-act"
url: "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-data-act"
author: "Oliver Schmidt-Prietz"
author_slug: "oliver-schmidt-prietz"
category: "technology-law"
language: "en"
license: "AGPL 3.0"
jurisdictions: "EU"
status: "active"
views: 71
downloads: 18
created_at: "2026-06-11T13:45:42.776878+02:00"
updated_at: "2026-06-16T16:15:42.351061+02:00"
source_index: 35
---

# 欧盟数据法

原始名称：`EU Data Act`  
作者：Oliver Schmidt-Prietz  
分类：technology-law  
来源：https://lawve.ai/@oliver-schmidt-prietz/skill/eu-data-act

## 中文 README

# 欧盟数据法案从业者技能 — 部署指南

> 📄 **【查看互动技能页面→】(https://oliverschmidtprietz.github.io/EU-Data-Act/)**

请参阅 [CHANGELOG.md](CHANGELOG.md) 了解版本历史记录。

## 概述

针对**法规（欧盟）2023/2854**（数据法）的从业者级分析和起草。针对在面向客户或内部环境中使用数据法的高级法律顾问、合规官员和产品顾问进行了校准。

该技能的架构锚是**角色×章节×阶段**。每件事情都通过识别来定位：

- 各方扮演哪些《数据法》角色（用户、数据持有者、数据接收者、第三方、客户、提供商、公共部门机构，以及任何并发的 GDPR 角色）；
- 管辖法规的哪些章节（II-VIII）；
- 问题处于该章流程的哪个阶段。

锚确定加载哪些参考以及技能应用哪个场景卡。

## 覆盖范围
| Chapter | Articles | Operative depth |
|---------|----------|-----------------|
| Ch II | 3–7 | Full — IoT product and related service data; B2C and B2B sharing |
| Ch III | 8–12 | Full — mandatory B2B sharing under other Union law (FRAND, compensation) |
| Ch IV | 13 | Full — unfair contract terms unilaterally imposed in B2B data contracts |
| Ch V | 14–22 | Full — public sector exceptional-need access |
| Ch VI | 23–31 | Full — switching between data processing services |
| Ch VII | 32 | Full — third-country governmental access |
| Ch VIII | 33–36 | Gate-only, except Arts. 34–35 where they serve Ch VI |
| Gate | Reference file | Posture |
|------|----------------|---------|
| GDPR + ePrivacy | `references/gates/gdpr-overlay.md` | Operative when personal data or terminal-equipment access is in scope |
| Trade Secrets Directive (EU) 2016/943 | `references/gates/trade-secrets-directive.md` | Operative when trade-secret protection is claimed or asserted |
| DMA gatekeeper exclusion | `references/gates/dma-gatekeeper.md` | Operative on Art. 5 third-party requests and Art. 6(2)(d) onward sharing |
| Sectoral lex specialis | `references/gates/sectoral-lex-specialis.md` | Warn-only (vehicles, medical devices, DORA, NIS2, CRA, AI Act, eIDAS, energy, agriculture, telecoms) |
| Member State implementing law | `references/gates/member-state.md` | Warn-only (competent authorities, dispute settlement, penalties) |
### 跨政权门


## 文件结构
```
eu-data-act/
├── SKILL.md                              # Entry point and router
├── CHANGELOG.md                          # Version history
├── references/
│   ├── method/
│   │   ├── analysis-method.md            # The seven-step cognitive flow
│   │   └── house-style.md                # Voice, length, citation, structure
│   ├── gates/
│   │   ├── gdpr-overlay.md               # Art. 1(5) bridge, Case A/B, ePrivacy
│   │   ├── trade-secrets-directive.md    # TSD ladder, serious-AND-irreparable
│   │   ├── dma-gatekeeper.md             # Art. 5(3) exclusion, Art. 6(2)(d)
│   │   ├── sectoral-lex-specialis.md     # Warn-only sectoral catalogue
│   │   └── member-state.md               # Warn-only MS implementing law
│   ├── gotchas.md                        # 20 numbered failure-mode entries
│   └── scenarios/                        # Pre-walked role × chapter × stage cards
├── sources/
│   ├── regulation-2023-2854.md           # Verbatim Data Act (119 recitals + 50 articles)
│   ├── faq-v1-4.md                       # Commission FAQ v1.4 (22 Jan 2026, CC BY 4.0)
│   ├── digital-omnibus-amendments-tracker.md
│   ├── mcts-sccs-recommendation-pointer.md
│   ├── vehicle-data-guidance-pointer.md
│   ├── _versions.json                    # Source provenance
│   └── _manifest.sha256                  # Source checksums
├── scripts/
│   └── validate_sources.py               # Source layer validator (20/20 checks)
├── templates/                            # Drafting templates
└── evals/                                # Eval fixtures + grading
```
## 部署

### 克劳德代码（推荐）

将技能文件夹符号链接到“~/.claude/skills/”：
```bash
ln -s ~/CLAUDE_PROJECTS/SKILLS/claude-skills/skills/eu-data-act ~/.claude/skills/eu-data-act
```
### Claude.ai（用户技能）

在“设置”→“个人资料”→“自定义技能”下上传整个“eu-data-act/”文件夹结构。

## 触发短语

- 《数据法》/《Datangesetz》/《条例（欧盟）2023/2854》
- “第 4(1) 条请求”/“第 5(1) 条第三方请求”/“商业秘密手刹”
- 《云切换义务》/《第六章》/《第25条强制性条款》
- “第五章特殊需要”/“第 17 条公共部门请求”
- “第 13 条不公平合同条款”/“第 32 条第三国准入”
- 对特定数据法文章或叙述的引用。

## 源层验证器

在任何版本或下游符号链接之前运行：
```bash
python3 scripts/validate_sources.py --verbose
```
| Document | Reference |
|----------|-----------|
| EU Data Act | Regulation (EU) 2023/2854 |
| Commission FAQ on the Data Act | v1.4 (22 January 2026), CC BY 4.0 |
| Digital Omnibus proposal | COM(2025) 833 final, 19 November 2025 (co-legislator negotiation, not adopted) |
| Trade Secrets Directive | Directive (EU) 2016/943 |
| GDPR | Regulation (EU) 2016/679 |
| ePrivacy Directive | Directive 2002/58/EC |
| Digital Markets Act | Regulation (EU) 2022/1925 |
检查标题分类（每个预期的叙述、文章和常见问题解答问题）、指针文件存在、清单校验和和“_versions.json”结构。 Exit 0 表示所有检查都通过。当前状态：20/20。

## 监管依据


## 许可和免责声明

根据 **AGPL-3.0** 许可。

该技能提供基于欧盟数据法案、委员会常见问题解答和相关欧盟法律的结构化指导。它不构成法律建议。使用该技能产生的实质性交付成果应由具有数据法专业知识的合格法律顾问进行审查。

> **质量保证：** 该技能附带了“evals/”文件夹中的评估测试，我运行该测试来根据预期结果检查其输出。

---

*由 Oliver Schmidt-Prietz 创建 — [OneZero Legal](https://onezero.legal)*

---

## Original README

# EU Data Act Practitioner Skill — Deployment Guide

> 📄 **[View the interactive skill page →](https://oliverschmidtprietz.github.io/EU-Data-Act/)**

See [CHANGELOG.md](CHANGELOG.md) for version history.

## Overview

Practitioner-grade analysis and drafting on **Regulation (EU) 2023/2854** (the Data Act). Calibrated for senior legal counsel, compliance officers, and product counsel working with the Data Act in client-facing or in-house contexts.

The skill's architectural anchor is **role × chapter × stage**. Every matter is positioned by identifying:

- which Data Act roles the parties play (user, data holder, data recipient, third party, customer, provider, public sector body, plus any concurrent GDPR roles);
- which chapter(s) of the regulation govern (II–VIII);
- which stage of that chapter's process the matter is at.

The anchor determines which references load and which scenario card the skill applies.

## Coverage

| Chapter | Articles | Operative depth |
|---------|----------|-----------------|
| Ch II | 3–7 | Full — IoT product and related service data; B2C and B2B sharing |
| Ch III | 8–12 | Full — mandatory B2B sharing under other Union law (FRAND, compensation) |
| Ch IV | 13 | Full — unfair contract terms unilaterally imposed in B2B data contracts |
| Ch V | 14–22 | Full — public sector exceptional-need access |
| Ch VI | 23–31 | Full — switching between data processing services |
| Ch VII | 32 | Full — third-country governmental access |
| Ch VIII | 33–36 | Gate-only, except Arts. 34–35 where they serve Ch VI |

### Cross-regime gates

| Gate | Reference file | Posture |
|------|----------------|---------|
| GDPR + ePrivacy | `references/gates/gdpr-overlay.md` | Operative when personal data or terminal-equipment access is in scope |
| Trade Secrets Directive (EU) 2016/943 | `references/gates/trade-secrets-directive.md` | Operative when trade-secret protection is claimed or asserted |
| DMA gatekeeper exclusion | `references/gates/dma-gatekeeper.md` | Operative on Art. 5 third-party requests and Art. 6(2)(d) onward sharing |
| Sectoral lex specialis | `references/gates/sectoral-lex-specialis.md` | Warn-only (vehicles, medical devices, DORA, NIS2, CRA, AI Act, eIDAS, energy, agriculture, telecoms) |
| Member State implementing law | `references/gates/member-state.md` | Warn-only (competent authorities, dispute settlement, penalties) |

## File structure

```
eu-data-act/
├── SKILL.md                              # Entry point and router
├── CHANGELOG.md                          # Version history
├── references/
│   ├── method/
│   │   ├── analysis-method.md            # The seven-step cognitive flow
│   │   └── house-style.md                # Voice, length, citation, structure
│   ├── gates/
│   │   ├── gdpr-overlay.md               # Art. 1(5) bridge, Case A/B, ePrivacy
│   │   ├── trade-secrets-directive.md    # TSD ladder, serious-AND-irreparable
│   │   ├── dma-gatekeeper.md             # Art. 5(3) exclusion, Art. 6(2)(d)
│   │   ├── sectoral-lex-specialis.md     # Warn-only sectoral catalogue
│   │   └── member-state.md               # Warn-only MS implementing law
│   ├── gotchas.md                        # 20 numbered failure-mode entries
│   └── scenarios/                        # Pre-walked role × chapter × stage cards
├── sources/
│   ├── regulation-2023-2854.md           # Verbatim Data Act (119 recitals + 50 articles)
│   ├── faq-v1-4.md                       # Commission FAQ v1.4 (22 Jan 2026, CC BY 4.0)
│   ├── digital-omnibus-amendments-tracker.md
│   ├── mcts-sccs-recommendation-pointer.md
│   ├── vehicle-data-guidance-pointer.md
│   ├── _versions.json                    # Source provenance
│   └── _manifest.sha256                  # Source checksums
├── scripts/
│   └── validate_sources.py               # Source layer validator (20/20 checks)
├── templates/                            # Drafting templates
└── evals/                                # Eval fixtures + grading
```

## Deployment

### Claude Code (recommended)

Symlink the skill folder into `~/.claude/skills/`:

```bash
ln -s ~/CLAUDE_PROJECTS/SKILLS/claude-skills/skills/eu-data-act ~/.claude/skills/eu-data-act
```

### Claude.ai (User Skills)

Upload the entire `eu-data-act/` folder structure under Settings → Profile → Custom Skills.

## Trigger phrases

- "Data Act" / "Datengesetz" / "Regulation (EU) 2023/2854"
- "Art. 4(1) request" / "Art. 5(1) third-party request" / "trade-secret handbrake"
- "cloud switching obligations" / "Chapter VI" / "Art. 25 mandatory terms"
- "Chapter V exceptional need" / "Art. 17 public-sector request"
- "Art. 13 unfair contract terms" / "Art. 32 third-country access"
- References to specific Data Act articles or recitals.

## Source layer validator

Run before any release or downstream symlink:

```bash
python3 scripts/validate_sources.py --verbose
```

Checks heading taxonomy (every expected recital, article, and FAQ question), pointer-file presence, manifest checksums, and `_versions.json` structure. Exit 0 means all checks pass. Current state: 20/20.

## Regulatory basis

| Document | Reference |
|----------|-----------|
| EU Data Act | Regulation (EU) 2023/2854 |
| Commission FAQ on the Data Act | v1.4 (22 January 2026), CC BY 4.0 |
| Digital Omnibus proposal | COM(2025) 833 final, 19 November 2025 (co-legislator negotiation, not adopted) |
| Trade Secrets Directive | Directive (EU) 2016/943 |
| GDPR | Regulation (EU) 2016/679 |
| ePrivacy Directive | Directive 2002/58/EC |
| Digital Markets Act | Regulation (EU) 2022/1925 |

## License and disclaimer

Licensed under **AGPL-3.0**.

This skill provides structured guidance based on the EU Data Act, the Commission's FAQ, and adjacent EU law. It does not constitute legal advice. Substantive deliverables produced with the skill should be reviewed by qualified legal counsel with Data Act expertise.

> **Quality assurance:** this skill ships with evaluation tests in the `evals/` folder, which I run to check its outputs against expected results.

---

*Created by Oliver Schmidt-Prietz — [OneZero Legal](https://onezero.legal)*
