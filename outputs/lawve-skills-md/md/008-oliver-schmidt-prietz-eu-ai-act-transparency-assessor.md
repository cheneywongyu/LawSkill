---
id: "9c1b0dc7-8bed-513f-b83e-a1a9c254e67e"
title: "EU AI Act Transparency Assessor"
title_cn: "欧盟人工智能法案透明度评估员"
slug: "eu-ai-act-transparency-assessor"
url: "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-transparency-assessor"
author: "Oliver Schmidt-Prietz"
author_slug: "oliver-schmidt-prietz"
category: "compliance"
language: "en"
license: "AGPL 3.0"
jurisdictions: "EU"
status: "active"
views: 52
downloads: 7
created_at: "2026-07-05T12:53:56.101250+02:00"
updated_at: "2026-07-05T16:08:10.836855+02:00"
source_index: 8
---

# 欧盟人工智能法案透明度评估员

原始名称：`EU AI Act Transparency Assessor`  
作者：Oliver Schmidt-Prietz  
分类：compliance  
来源：https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-transparency-assessor

## 中文 README

# 欧盟人工智能法案第 50 条透明度评估员 — 部署指南

请参阅 [CHANGELOG.md](CHANGELOG.md) 了解版本历史记录。

## 概述

欧盟人工智能法案 **第 50 条透明度评估员** - 一项独立但具有套件意识的技能，可识别哪些
艺术的。 50(1)–(5) 透明度义务适用于系统并指导必须实施的内容，并通过
当。它产生两个可交付成果：正式的**迷你报告**和每项义务**合规检查表**
带有间隙标志。

- **五项职责，两种角色** — 50(1) 交互披露和 50(2) 合成内容标记（提供商）；
  50(3) 情感/生物识别通知和 50(4) 深度伪造/公共利益文本标签（部署者）； 50(5)
  交付质量（横切）
- **触发 + 豁免逻辑** — 普通消费者显而易见性测试 (50(1))，辅助功能
  豁免（50（2）），艺术。 5 门 (50(3))，以及狭窄的 50(4) 例外
- **实施深度** — 最终实践守则的分层标记架构，欧盟官方
  标签图标集和每种模式的放置
- **已注明日期、综合意识路线图** - 2026年8月2日，2026年12月2日遗产宽限期（2026年6月29日由理事会通过，
  等待 OJ）、2026 年 7 月 22 日签署截止日期以及 2027 年 2 月 2 日代码互操作日期
- **独立但可链接** — 摄取分类器的“ASSESSMENT CONTEXT”块并发出自己的
  便携式艺术。 50 合规块

## 文件结构
```
ai-act-transparency/
├── SKILL.md                              # Main skill instructions (deploy this)
├── CHANGELOG.md                          # Version history
├── evals/
│   └── evals.json                        # Test cases
└── references/
    ├── art50-duties.md                   # The five duties + 50(6) governance
    ├── obviousness-and-exceptions.md     # Obviousness test, exemptions, boundaries, cross-provision interactions
    ├── code-of-practice-final.md         # Final Code of Practice (10 Jun 2026) — provider marking + deployer labelling
    ├── commission-guidelines-art50.md    # Draft Commission Guidelines (8 May 2026)
    ├── eu-labelling-icons.md             # Official EU icon set + design/placement requirements
    ├── timeline-and-grace.md             # Dated roadmap + Digital Omnibus grace (adopted, awaiting OJ)
    ├── implementation-checklists.md      # Provider / deployer / SME action checklists
    ├── report-template-art50.md          # Mini-report, checklist, and portable compliance block templates
    └── sources.md                        # Audit-grade source manifest (URLs, status, last-checked, uncertainty tiers)
```
## 部署

### Claude.ai（用户技能）

1. 转到 **设置 → 个人资料 → 自定义技能**（或同等内容）
2.上传整个`ai-act-transparency/`文件夹结构
3.技能自动触发“第50条透明度义务”，“我们是否需要标记AI内容/
   deepfakes”、“AI 聊天机器人披露”、“合成内容标记”、“Kennzeichnungspflicht”或
   “透明”

### 克劳德代码/自定义 MCP 设置

1. 将 `ai-act-transparency/` 文件夹复制到您的技能目录：
   ```bash
   cp -r ai-act-transparency/ /path/to/your/skills/user/ai-act-transparency/
   ```
| Phase | Description |
|-------|-------------|
| **Phase 1: Intake** | System description + optional `ASSESSMENT CONTEXT` ingestion |
| **Phase 2: Role Determination** | Provider / deployer / both |
| **Phase 3: Trigger Determination** | Per-duty trigger + obviousness/exception test |
| **Phase 4: Implementation Deep-Dive** | What to build per triggered duty |
| **Phase 5: Dated Roadmap** | Omnibus-aware deadlines |
| **Phase 6: Output** | Mini-report + checklist + portable compliance block |
| Document | Reference |
|----------|-----------|
| EU AI Act | Regulation (EU) 2024/1689, Article 50 + recitals 132–137 |
| Deepfake definition | Art. 3(60) |
| Penalty band | Art. 99(4) — Tier 2 (EUR 15M / 3%) |
| Code of Practice on Transparency of AI-Generated Content | Final, 10 June 2026 (Art. 50(7)) |
| Commission Guidelines on Art. 50 | Draft, 8 May 2026 (Art. 96(1)(d)) |
| Digital Omnibus | 50(2) legacy-marking grace to 2 Dec 2026 — adopted (Council final green light 29 Jun 2026), awaiting OJ publication |
2. 确保该技能已在您的配置中注册

## 用法

### 快速入门

要么重新开始，要么从先前的技能中移交背景：

> “我们正在以我们自己的品牌推出人工智能支持聊天机器人和图像生成器。第 50 条是什么
> 透明度义务适用，我们实施什么以及何时实施？”

或者来自分类器的链：

> “这是分类器中的评估上下文块 - 评估我们的第 50 条透明度义务
> 并出示报告和清单。”

### 触发短语

- “检查第 50 条透明度义务”/“Transparenzpflichten”
- “我们需要标记人工智能内容/深度伪造吗”/“Kennzeichnungspflicht”
-“人工智能聊天机器人披露”/“合成内容标记”/“水印”
- “我们必须根据第 50 条实施什么以及何时实施”

### 工作流程


## 监管依据


## 许可和免责声明

这种技能产生结构化的艺术。 50 透明度指南基于法规 (EU) 2024/1689，最终版本
人工智能生成内容透明度的实践准则，以及委员会的草案Art。 50 条指南。它
不是法律建议。本准则是自愿性的，遵守并不是合规的确凿证据；只有
CJEU可以对艺术进行权威解释。 50. 输出结果应在之前由合格的法律顾问进行审查
监管使用。

根据 AGPL-3.0 许可 - 请参阅存储库根目录中的 [LICENSE](../../LICENSE)。

---

*由 Oliver Schmidt-Prietz 创建 - OneZero Legal*

---

## Original README

# EU AI Act Article 50 Transparency Assessor — Deployment Guide

See [CHANGELOG.md](CHANGELOG.md) for version history.

## Overview

EU AI Act **Article 50 Transparency Assessor** — a standalone-but-suite-aware skill that identifies which
of the Art. 50(1)–(5) transparency duties apply to a system and guides what must be implemented and by
when. It produces two deliverables: a formal **mini-report** and a per-obligation **compliance checklist**
with gap flags.

- **Five duties, two roles** — 50(1) interaction disclosure and 50(2) synthetic-content marking (provider);
  50(3) emotion/biometric notice and 50(4) deepfake/public-interest-text labelling (deployer); 50(5)
  delivery quality (cross-cutting)
- **Trigger + exemption logic** — the average-consumer obviousness test (50(1)), the assistive-function
  exemption (50(2)), the Art. 5 gate (50(3)), and the narrow 50(4) exceptions
- **Implementation depth** — the final Code of Practice's layered marking architecture, the official EU
  labelling icon set, and per-modality placement
- **Dated, Omnibus-aware roadmap** — 2 Aug 2026, the 2 Dec 2026 legacy grace (adopted by Council 29 Jun 2026,
  awaiting OJ), the 22 Jul 2026 signatory deadline, and the 2 Feb 2027 Code interoperability date
- **Standalone but chainable** — ingests the classifier's `ASSESSMENT CONTEXT` block and emits its own
  portable Art. 50 compliance block

## File Structure

```
ai-act-transparency/
├── SKILL.md                              # Main skill instructions (deploy this)
├── CHANGELOG.md                          # Version history
├── evals/
│   └── evals.json                        # Test cases
└── references/
    ├── art50-duties.md                   # The five duties + 50(6) governance
    ├── obviousness-and-exceptions.md     # Obviousness test, exemptions, boundaries, cross-provision interactions
    ├── code-of-practice-final.md         # Final Code of Practice (10 Jun 2026) — provider marking + deployer labelling
    ├── commission-guidelines-art50.md    # Draft Commission Guidelines (8 May 2026)
    ├── eu-labelling-icons.md             # Official EU icon set + design/placement requirements
    ├── timeline-and-grace.md             # Dated roadmap + Digital Omnibus grace (adopted, awaiting OJ)
    ├── implementation-checklists.md      # Provider / deployer / SME action checklists
    ├── report-template-art50.md          # Mini-report, checklist, and portable compliance block templates
    └── sources.md                        # Audit-grade source manifest (URLs, status, last-checked, uncertainty tiers)
```

## Deployment

### Claude.ai (User Skills)

1. Go to **Settings → Profile → Custom Skills** (or equivalent)
2. Upload the entire `ai-act-transparency/` folder structure
3. The skill auto-triggers on "Art. 50 transparency obligations", "do we need to label AI content /
   deepfakes", "AI chatbot disclosure", "synthetic content marking", "Kennzeichnungspflicht", or
   "Transparenzpflichten"

### Claude Code / Custom MCP Setup

1. Copy the `ai-act-transparency/` folder to your skills directory:
   ```bash
   cp -r ai-act-transparency/ /path/to/your/skills/user/ai-act-transparency/
   ```
2. Ensure the skill is registered in your configuration

## Usage

### Quick Start

Either start fresh or hand over context from a prior skill:

> "We're launching an AI support chatbot and an image generator under our own brand. What Article 50
> transparency duties apply, what do we implement, and by when?"

Or chain from the classifier:

> "Here's the ASSESSMENT CONTEXT block from the classifier — assess our Art. 50 transparency obligations
> and produce the report and checklist."

### Trigger Phrases

- "Check Art. 50 transparency obligations" / "Transparenzpflichten"
- "Do we need to label AI content / deepfakes" / "Kennzeichnungspflicht"
- "AI chatbot disclosure" / "synthetic content marking" / "watermarking"
- "What must we implement under Art. 50 and by when"

### Workflow

| Phase | Description |
|-------|-------------|
| **Phase 1: Intake** | System description + optional `ASSESSMENT CONTEXT` ingestion |
| **Phase 2: Role Determination** | Provider / deployer / both |
| **Phase 3: Trigger Determination** | Per-duty trigger + obviousness/exception test |
| **Phase 4: Implementation Deep-Dive** | What to build per triggered duty |
| **Phase 5: Dated Roadmap** | Omnibus-aware deadlines |
| **Phase 6: Output** | Mini-report + checklist + portable compliance block |

## Regulatory Basis

| Document | Reference |
|----------|-----------|
| EU AI Act | Regulation (EU) 2024/1689, Article 50 + recitals 132–137 |
| Deepfake definition | Art. 3(60) |
| Penalty band | Art. 99(4) — Tier 2 (EUR 15M / 3%) |
| Code of Practice on Transparency of AI-Generated Content | Final, 10 June 2026 (Art. 50(7)) |
| Commission Guidelines on Art. 50 | Draft, 8 May 2026 (Art. 96(1)(d)) |
| Digital Omnibus | 50(2) legacy-marking grace to 2 Dec 2026 — adopted (Council final green light 29 Jun 2026), awaiting OJ publication |

## License & Disclaimer

This skill produces structured Art. 50 transparency guidance based on Regulation (EU) 2024/1689, the final
Code of Practice on Transparency of AI-Generated Content, and the Commission's draft Art. 50 Guidelines. It
is not legal advice. The Code is voluntary and adherence is not conclusive evidence of compliance; only the
CJEU can authoritatively interpret Art. 50. Outputs should be reviewed by qualified legal counsel before
regulatory use.

Licensed under AGPL-3.0 — see [LICENSE](../../LICENSE) at the repo root.

---

*Created by Oliver Schmidt-Prietz — OneZero Legal*
