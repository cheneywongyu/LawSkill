---
id: "08d4d3d3-75f4-5700-a5a9-ddb866eb7aef"
title: "EU AI Act High-Risk Classifier"
title_cn: "欧盟人工智能法案高风险分类器"
slug: "eu-ai-act-high-risk-classifier"
url: "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-high-risk-classifier"
author: "Oliver Schmidt-Prietz"
author_slug: "oliver-schmidt-prietz"
category: "compliance"
language: "en"
license: "AGPL 3.0"
jurisdictions: "EU"
status: "active"
views: 55
downloads: 17
created_at: "2026-06-09T11:43:29.816546+02:00"
updated_at: "2026-06-09T11:55:17.676878+02:00"
source_index: 54
---

# 欧盟人工智能法案高风险分类器

原始名称：`EU AI Act High-Risk Classifier`  
作者：Oliver Schmidt-Prietz  
分类：compliance  
来源：https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-high-risk-classifier

## 中文 README

# ai-行为-高风险

> 📄 **【查看互动技能页面→】(https://oliverschmidtprietz.github.io/EU-AI-Act-Suite/ai-act-high-risk/)**

**欧盟人工智能法案第 1 条高风险分类的深度评估技能。 6**（条例（EU）2024/1689），以欧盟委员会的Art.6草案为基础。 6(5) 分类指南（一般原则、附件一、附件三）于 2026 年发布，供利益相关方协商。

有关完整的分类工作流程，请参阅 [SKILL.md](SKILL.md)。
有关版本历史记录，请参阅 [CHANGELOG.md](CHANGELOG.md)。

## 这个技能有什么作用

给定人工智能系统描述和预期目的证据，确定系统在以下情况下是否属于高风险：

- **艺术。 6(1) + 附件 I** — 根据需要第三方合格评定的欧盟协调立法，人工智能系统作为产品或产品的安全组件。
- **艺术。 6(2) + 附件 III** — 人工智能系统属于八个高风险用例领域之一（生物识别、关键基础设施、教育、就业、基本服务、执法、移民、司法/民主），但须遵守第 6(2) 条。 6(3)异常过滤和剖析重新异常。

输出结构化决策块 + 从业者备忘录 + JSON 交换工件。

## 部署

将此技能放在您的 Claude Code 技能目录中（`~/.claude/skills/` 或工作区级别）。克劳德将在用户提示提及附件一/附件三/艺术时调用它。 6 分类，或者当广泛的风险等级分类已经指出可能需要深度评估的高风险分支时。

## 免责声明

这项技能不是法律建议。它所借鉴的委员会指导方针是草案，不具有约束力（只有欧盟法院可以给出权威解释）。在合格的顾问的指导下使用。

## 许可证

AGPL-3.0（请参阅 repo-root 许可证文件）。

> **质量保证：** 该技能附带了“evals/”文件夹中的评估测试，我运行该测试来根据预期结果检查其输出。

---

*由 Oliver Schmidt-Prietz 创建 — [OneZero Legal](https://onezero.legal)*

---

## Original README

# ai-act-high-risk

> 📄 **[View the interactive skill page →](https://oliverschmidtprietz.github.io/EU-AI-Act-Suite/ai-act-high-risk/)**

Depth assessment skill for the **EU AI Act high-risk classification under Art. 6** (Regulation (EU) 2024/1689), grounded in the European Commission's draft Art. 6(5) classification guidelines (general principles, Annex I, Annex III) published for stakeholder consultation in 2026.

For the full classification workflow, see [SKILL.md](SKILL.md).
For version history, see [CHANGELOG.md](CHANGELOG.md).

## What this skill does

Given an AI system description and intended-purpose evidence, determines whether the system is high-risk under:

- **Art. 6(1) + Annex I** — AI system as product or safety component of a product under Union harmonisation legislation requiring third-party conformity assessment.
- **Art. 6(2) + Annex III** — AI system falling into one of eight high-risk use-case areas (biometrics, critical infrastructure, education, employment, essential services, law enforcement, migration, justice/democracy), subject to the Art. 6(3) exception filter and profiling re-exception.

Outputs a structured decision block + practitioner memo + JSON interchange artefact.

## Deployment

Place this skill in your Claude Code skill directory (`~/.claude/skills/` or workspace-level). Claude will invoke it on user prompts mentioning Annex I / Annex III / Art. 6 classification, or whenever a broad risk-tier triage has already pointed to a likely high-risk branch that needs the depth assessment.

## Disclaimer

This skill is not legal advice. The Commission guidelines it draws on are draft and non-binding (only the CJEU can give authoritative interpretation). Use under qualified counsel.

## License

AGPL-3.0 (see repo-root LICENSE file).

> **Quality assurance:** this skill ships with evaluation tests in the `evals/` folder, which I run to check its outputs against expected results.

---

*Created by Oliver Schmidt-Prietz — [OneZero Legal](https://onezero.legal)*
