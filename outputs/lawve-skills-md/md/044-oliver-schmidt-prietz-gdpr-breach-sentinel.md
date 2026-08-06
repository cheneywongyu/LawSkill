---
id: "7a0e5de0-be37-5aeb-a552-7d5f2ba3ab7d"
title: "GDPR Breach Sentinel"
title_cn: "GDPR 违规哨兵"
slug: "gdpr-breach-sentinel"
url: "https://lawve.ai/@oliver-schmidt-prietz/skill/gdpr-breach-sentinel"
author: "Oliver Schmidt-Prietz"
author_slug: "oliver-schmidt-prietz"
category: "data-protection"
language: "en"
license: "AGPL 3.0"
jurisdictions: "EU"
status: "active"
views: 728
downloads: 498
created_at: "2026-02-09T01:00:00+01:00"
updated_at: "2026-06-11T20:58:58.848819+02:00"
source_index: 44
---

# GDPR 违规哨兵

原始名称：`GDPR Breach Sentinel`  
作者：Oliver Schmidt-Prietz  
分类：data-protection  
来源：https://lawve.ai/@oliver-schmidt-prietz/skill/gdpr-breach-sentinel

## 中文 README

# Breach Sentinel — 部署指南

> 📄 **【查看互动技能页面→】(https://oliverschmidtprietz.github.io/GDPR-Breach-Sentinel/)**

请参阅 [CHANGELOG.md](CHANGELOG.md) 了解版本历史记录。

## 概述

GDPR 违规响应哨兵 — Claude 的一项高级事件响应技能，可提供：

- **违规资格分类** — “这算不算个人数据泄露？”工作流程之前的门
- **ENISA 严重性评估** 与边界分数分析，连接到艺术。 33/34法定法律测试
- **与 EDPB 模板对齐的违规证据文件** 镜像用于违规通知的 EDPB 模板 [2026]（草案、公众咨询）
- **EDPB 案例匹配** 针对 18 个记录的违规场景（作为类比，有规定的限制）
- **专用艺术。 34 决策模块** — 高风险测试，所有三个艺术。 34(3) 例外情况，沟通策略
- **战略案例咨询** — 高级法律顾问级别的分析和建议
- **动态网络研究**，用于执行先例和 SA 特定指南，并具有来源纪律
- **针对特定事件量身定制的灵活缓解方案**
- **SA 联系人目录** 具有特定管辖区的门户查找功能
- **人工智能法艺术。 73 涉及高风险人工智能系统的交叉点**
- **部门平行制度屏幕**（NIS2、DORA、eIDAS、ePrivacy、保险、劳资委员会）
- **审核就绪的 .docx 文档生成**（证据文件、第 33 条、第 34 条、合规日志、跟进/撤回等）
- **通知后案件跟踪**
- **处理器跟踪正确** - 立即通知控制器（第 33(2) 条）、合同 DPA 窗口、移交包；无虚拟 72 小时处理器截止日期

## 文件结构
```
breach-sentinel/
├── SKILL.md                              # Main skill instructions (deploy this)
├── evals/
│   └── evals.json                        # 13 test cases, 132 assertions
└── references/
    ├── enisa-methodology.md              # ENISA scoring tables, legal bridge, worked examples
    ├── edpb-template-evidence-file.md    # EDPB Template [2026] field map + evidence file builder
    ├── art34-communication.md            # Art. 34 decision framework incl. all 34(3) exceptions
    ├── parallel-regimes.md               # AI Act Art. 73 depth + NIS2/DORA/eIDAS/etc. screen
    ├── edpb-cases.md                     # 18 EDPB breach case scenarios + analogy rules
    ├── templates.md                      # 17 document templates (Art. 33/34, handoff, follow-up …)
    ├── strategic-advisory.md             # Advisory framework, principles, tone examples
    ├── mitigation-playbook.md            # Design principles, output format, action categories
    ├── post-notification-tracking.md     # Tracking dashboard template
    └── web-research.md                   # Search query templates, source discipline, DE routing
```
## 部署

### Claude.ai（用户技能）

1. 转到 **设置 → 个人资料 → 自定义技能**（或同等内容）
2.上传整个`breach-sentinel/`文件夹结构
3. 当您提及数据泄露时，该技能将自动触发，艺术。 33/34、“Datenpanne”或相关主题

### 克劳德代码/自定义 MCP 设置

1. 将 `breach-sentinel/` 文件夹复制到您的技能目录：
   ```bash
   cp -r breach-sentinel/ /path/to/your/skills/user/breach-sentinel/
   ```
| Mode | When to Use |
|------|-------------|
| **Guided** | You're unsure about details; skill asks questions one by one |
| **Fast Path** | You have all the facts; dump them and get an instant assessment |
| **Emergency** | <12 hours remaining on notification clock |
| Feature | Description |
|---------|-------------|
| Breach Qualification Triage | Gate before the workflow: security incident vs. personal data breach (Art. 4(12)) |
| ENISA Severity Calculation | Full SE = (DPC × EI) + CB with contextual adjustments — as decision support |
| Art. 33/34 Legal Bridge | Written bridge from score → facts → safeguards → statutory conclusions in every assessment |
| EDPB Evidence File | Filled dossier mirroring the EDPB Template [2026] (draft) — all 7 sections, portal-ready |
| Art. 34 Decision Module | High-risk test, exceptions 34(3)(a)/(b)/(c), communication strategy, decision memo |
| Evidence Posture | Facts / assumptions / unknowns discipline with confidence level in every assessment |
| Borderline Score Analysis | Extra scrutiny for scores near 2.0/3.0/4.0 thresholds |
| EDPB Case Matching | Maps to 18 documented scenarios from Guidelines 01/2021 — as analogies with stated limits |
| Strategic Advisory | Senior counsel-level analysis: hidden risks, SA strategy, leverage points |
| Dynamic Web Research | Current enforcement precedents and SA guidance, with source discipline rules |
| SA Contact Lookup | Finds notification portal URLs and jurisdiction-specific requirements |
| Germany SA Routing | Correctly routes to BfDI vs. LfDI/LDA based on entity type |
| Mitigation Playbook | Case-specific, flexibly structured action plan with owners and deadlines |
| AI Act Integration | Art. 73 serious incident screening (definition, deadlines, applicability) for AI breaches |
| Parallel-Regime Screen | NIS2, DORA, eIDAS, ePrivacy, criminal, insurance, contractual, works council |
| Processor Track | Art. 33(2) without-undue-delay duty, contractual DPA windows, handoff package |
| Document Generation | Audit-ready .docx files — 17 templates incl. follow-up, withdrawal, late-notification |
| Post-Notification Tracking | Ongoing case management dashboard incl. follow-up and withdrawal milestones |
| Document | Reference |
|----------|-----------|
| GDPR Articles 33 & 34 | Breach notification obligations |
| EDPB Guidelines 9/2022 v2.0 | Personal data breach notification |
| EDPB Guidelines 01/2021 v2.0 | Examples regarding breach notification |
| EDPB Template [2026] v1.0 | Personal data breach notification template — DRAFT, public consultation until 5 Aug 2026 |
| ENISA Severity Methodology | Risk assessment formula and scoring |
| EU AI Act (Reg. 2024/1689) | Art. 73 serious incident reporting (applies from 2 Aug 2026) |
2. 确保该技能已在您的配置中注册

## 用法

### 快速入门

只需告诉 Claude 有关违规的信息：

> “我们刚刚发现外部攻击者窃取了我们的客户数据库。 
> 大约 2,000 条包含姓名、电子邮件和付款数据的记录。我们的总部位于慕尼黑。 
> 这件事发生在昨天下午 3 点。”

该技能将激活并引导您完成评估。

### 触发短语

- “我们发生了数据泄露”/“Datenpanne”/“Datenschutzverletzung”
- “我们需要通知SA吗？” /“72 小时”/“第 33 条”
- “帮我评估此违规行为”/“ENISA 评估”
- “生成违规通知文件”

### 模式


## 能力总结


## 监管依据


## 许可和免责声明

该技能根据公开的 GDPR 监管材料提供指导。它不构成法律建议。所有通知决定均应由合格的法律顾问和您组织的 DPO 参与。

---

*由 Oliver Schmidt-Prietz 创建 — OneZero Legal

---

## Original README

# Breach Sentinel — Deployment Guide

> 📄 **[View the interactive skill page →](https://oliverschmidtprietz.github.io/GDPR-Breach-Sentinel/)**

See [CHANGELOG.md](CHANGELOG.md) for version history.

## Overview

GDPR Breach Response Sentinel — an advanced incident response skill for Claude that provides:

- **Breach qualification triage** — "is this even a personal data breach?" gate before the workflow
- **ENISA severity assessment** with borderline score analysis, bridged to the Art. 33/34 statutory legal tests
- **EDPB-template-aligned breach evidence file** mirroring the EDPB Template [2026] for breach notification (draft, public consultation)
- **EDPB case matching** against 18 documented breach scenarios (as analogies, with limits stated)
- **Dedicated Art. 34 decision module** — high-risk test, all three Art. 34(3) exceptions, communication strategy
- **Strategic case advisory** — senior counsel-level analysis and recommendations
- **Dynamic web research** for enforcement precedents and SA-specific guidance, with source discipline
- **Flexible mitigation playbooks** tailored to the specific incident
- **SA contact directory** with jurisdiction-specific portal lookup
- **AI Act Art. 73 intersection** for breaches involving high-risk AI systems
- **Sectoral parallel-regime screen** (NIS2, DORA, eIDAS, ePrivacy, insurance, works council)
- **Audit-ready .docx document generation** (evidence file, Art. 33, Art. 34, compliance logs, follow-up/withdrawal, etc.)
- **Post-notification case tracking**
- **Processor track done right** — notify controller without undue delay (Art. 33(2)), contractual DPA windows, handoff package; no phantom 72h processor deadline

## File Structure

```
breach-sentinel/
├── SKILL.md                              # Main skill instructions (deploy this)
├── evals/
│   └── evals.json                        # 13 test cases, 132 assertions
└── references/
    ├── enisa-methodology.md              # ENISA scoring tables, legal bridge, worked examples
    ├── edpb-template-evidence-file.md    # EDPB Template [2026] field map + evidence file builder
    ├── art34-communication.md            # Art. 34 decision framework incl. all 34(3) exceptions
    ├── parallel-regimes.md               # AI Act Art. 73 depth + NIS2/DORA/eIDAS/etc. screen
    ├── edpb-cases.md                     # 18 EDPB breach case scenarios + analogy rules
    ├── templates.md                      # 17 document templates (Art. 33/34, handoff, follow-up …)
    ├── strategic-advisory.md             # Advisory framework, principles, tone examples
    ├── mitigation-playbook.md            # Design principles, output format, action categories
    ├── post-notification-tracking.md     # Tracking dashboard template
    └── web-research.md                   # Search query templates, source discipline, DE routing
```

## Deployment

### Claude.ai (User Skills)

1. Go to **Settings → Profile → Custom Skills** (or equivalent)
2. Upload the entire `breach-sentinel/` folder structure
3. The skill will auto-trigger when you mention data breaches, Art. 33/34, "Datenpanne", or related topics

### Claude Code / Custom MCP Setup

1. Copy the `breach-sentinel/` folder to your skills directory:
   ```bash
   cp -r breach-sentinel/ /path/to/your/skills/user/breach-sentinel/
   ```
2. Ensure the skill is registered in your configuration

## Usage

### Quick Start

Just tell Claude about a breach:

> "We just discovered that an external attacker exfiltrated our customer database. 
> About 2,000 records with names, emails, and payment data. We're based in Munich. 
> This happened yesterday at 3pm."

The skill will activate and walk you through the assessment.

### Trigger Phrases

- "We had a data breach" / "Datenpanne" / "Datenschutzverletzung"
- "Do we need to notify the SA?" / "72 hours" / "Art. 33"
- "Help me assess this breach" / "ENISA assessment"
- "Generate breach notification documents"

### Modes

| Mode | When to Use |
|------|-------------|
| **Guided** | You're unsure about details; skill asks questions one by one |
| **Fast Path** | You have all the facts; dump them and get an instant assessment |
| **Emergency** | <12 hours remaining on notification clock |

## Capabilities Summary

| Feature | Description |
|---------|-------------|
| Breach Qualification Triage | Gate before the workflow: security incident vs. personal data breach (Art. 4(12)) |
| ENISA Severity Calculation | Full SE = (DPC × EI) + CB with contextual adjustments — as decision support |
| Art. 33/34 Legal Bridge | Written bridge from score → facts → safeguards → statutory conclusions in every assessment |
| EDPB Evidence File | Filled dossier mirroring the EDPB Template [2026] (draft) — all 7 sections, portal-ready |
| Art. 34 Decision Module | High-risk test, exceptions 34(3)(a)/(b)/(c), communication strategy, decision memo |
| Evidence Posture | Facts / assumptions / unknowns discipline with confidence level in every assessment |
| Borderline Score Analysis | Extra scrutiny for scores near 2.0/3.0/4.0 thresholds |
| EDPB Case Matching | Maps to 18 documented scenarios from Guidelines 01/2021 — as analogies with stated limits |
| Strategic Advisory | Senior counsel-level analysis: hidden risks, SA strategy, leverage points |
| Dynamic Web Research | Current enforcement precedents and SA guidance, with source discipline rules |
| SA Contact Lookup | Finds notification portal URLs and jurisdiction-specific requirements |
| Germany SA Routing | Correctly routes to BfDI vs. LfDI/LDA based on entity type |
| Mitigation Playbook | Case-specific, flexibly structured action plan with owners and deadlines |
| AI Act Integration | Art. 73 serious incident screening (definition, deadlines, applicability) for AI breaches |
| Parallel-Regime Screen | NIS2, DORA, eIDAS, ePrivacy, criminal, insurance, contractual, works council |
| Processor Track | Art. 33(2) without-undue-delay duty, contractual DPA windows, handoff package |
| Document Generation | Audit-ready .docx files — 17 templates incl. follow-up, withdrawal, late-notification |
| Post-Notification Tracking | Ongoing case management dashboard incl. follow-up and withdrawal milestones |

## Regulatory Basis

| Document | Reference |
|----------|-----------|
| GDPR Articles 33 & 34 | Breach notification obligations |
| EDPB Guidelines 9/2022 v2.0 | Personal data breach notification |
| EDPB Guidelines 01/2021 v2.0 | Examples regarding breach notification |
| EDPB Template [2026] v1.0 | Personal data breach notification template — DRAFT, public consultation until 5 Aug 2026 |
| ENISA Severity Methodology | Risk assessment formula and scoring |
| EU AI Act (Reg. 2024/1689) | Art. 73 serious incident reporting (applies from 2 Aug 2026) |

## License & Disclaimer

This skill provides guidance based on publicly available GDPR regulatory materials. It does not constitute legal advice. All notification decisions should involve qualified legal counsel and your organization's DPO.

---

*Created by Oliver Schmidt-Prietz — OneZero Legal
