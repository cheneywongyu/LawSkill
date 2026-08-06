---
id: "44d993da-2779-5195-9e5d-f1d72644f6f3"
title: "Legal Analysis Forge"
title_cn: "法律分析锻造"
slug: "legal-analysis-forge"
url: "https://lawve.ai/@oliver-schmidt-prietz/skill/legal-analysis-forge"
author: "Oliver Schmidt-Prietz"
author_slug: "oliver-schmidt-prietz"
category: "legal-research"
language: "en"
license: "AGPL 3.0"
jurisdictions: "EU"
status: "active"
views: 38
downloads: 8
created_at: "2026-06-09T11:35:19.806614+02:00"
updated_at: "2026-06-09T11:55:08.626122+02:00"
source_index: 55
---

# 法律分析锻造

原始名称：`Legal Analysis Forge`  
作者：Oliver Schmidt-Prietz  
分类：legal-research  
来源：https://lawve.ai/@oliver-schmidt-prietz/skill/legal-analysis-forge

## 中文 README

# 法律分析锻造

> 📄 **【查看互动技能页面→】(https://oliverschmidtprietz.github.io/EU-Legal-Analysis-Forge/)**

对欧盟数字监管文件进行结构化法律分析的**快速锻造**。给定法规、指令、委员会指南、EDPB 意见、CJEU 判决、AG 意见、国家 DPA 决定、行为准则、统一标准或咨询文件草案，该技能可以描述文件的特征，引出所需的可交付成果，并生成量身定制的专家提示。该提示可以在会话中执行以生成可交付成果，并且始终为使用该技能的从业者提供简单的英语解释。

有关完整的六步工作流程，请参阅 [SKILL.md](SKILL.md)。
有关版本历史记录，请参阅 [CHANGELOG.md](CHANGELOG.md)。

## 这个技能有什么作用

给定欧盟数字监管文件和可交付类型，该技能：

- **描述**文件的特征——工具类型、约束力、发行人和法律依据、状态、主题、部门接口、有争议的解释举措、时间应用、通俗语言摘要。
- **生成定制的专家提示**，由角色标记、文档上下文、任务描述、分析框架（一般法律解释规则加上特定文档的审查点）、引文约定、注册限制、输出结构和自检协议组成。
- **可选择在会话中执行提示**以直接生成可交付成果，并在交付前应用自检。
- **始终在正式输出的同时生成简单的英语解释**；用户选择是否将其集成到可交付成果中。

支持的交付类型：利益相关者咨询响应、内部合规备忘录、外部客户备忘录、公共评论（LinkedIn/博客/时事通讯）、会议演讲准备、内部风险评估、诉讼摘要输入、比较分析、水平扫描输入、技能输入。

## 范围

仅限欧盟数字法规：GDPR、AI 法案、数据法案、DGA、DSA、DMA、NIS2（包括 BSIG-neu）、ePrivacy、CRA、DORA、eIDAS 2.0、PLD（Dir. 2024/2853）、AI 责任指令以及相邻的辅助文书（授权法案、实施法案、协调标准、行为准则）。

超出范围：竞争、知识产权、税收、就业、部门法不涉及数字堆栈。对于运营合规性（DPIA、DPA 起草、AI 法案义务映射、RoPA、违规响应、NIS2 范围界定），技能将转向组合中的相关合规技能，而不是吸收任务。

## 部署
将此技能放在您的 Claude Code 技能目录中（`~/.claude/skills/` 或工作区级别）。当用户提供欧盟数字监管文件并要求提供结构化分析、咨询回复、备忘录、简报或类似的交付成果（英语或德语）时，Claude 会自动转到该文件。除了“WebFetch”（用于实时研究）和“pdf-processing-anthropic”（用于 PDF 摄取）之外，该技能不需要任何外部工具配置；两者都是标准的克劳德代码功能。

默认情况下，输出写入用户的当前工作目录。

## 免责声明

这项技能不是法律建议。它强制执行解释纪律、引文卫生和反幻觉协议，但不能保证准确性。欧盟文书不断发展，只有欧盟法院才能给出权威解释。在合格的顾问的指导下使用。

## 许可证

AGPL-3.0（请参阅 repo-root 许可证文件）。

> **质量保证：** 该技能附带了“evals/”文件夹中的评估测试，我运行该测试来根据预期结果检查其输出。

---

*由 Oliver Schmidt-Prietz 创建 — [OneZero Legal](https://onezero.legal)*

---

## Original README

# legal-analysis-forge

> 📄 **[View the interactive skill page →](https://oliverschmidtprietz.github.io/EU-Legal-Analysis-Forge/)**

A **prompt forge** for structured legal analysis of EU digital regulation documents. Given a Regulation, Directive, Commission Guidelines, EDPB Opinion, CJEU judgment, AG Opinion, national DPA decision, code of conduct, harmonised standard, or draft consultation document, the skill characterises the document, elicits the desired deliverable, and produces a tailored expert prompt. The prompt can be executed in-session to generate the deliverable, and is always accompanied by a plain-English explainer for the practitioner using the skill.

For the full six-step workflow, see [SKILL.md](SKILL.md).
For version history, see [CHANGELOG.md](CHANGELOG.md).

## What this skill does

Given an EU digital regulation document and a deliverable type, the skill:

- **Characterises** the document — instrument type, binding force, issuer and legal basis, status, subject matter, sectoral interfaces, contestable interpretive moves, temporal application, plain-language summary.
- **Generates a tailored expert prompt** assembled from a role marker, document context, task description, analytical framework (general legal interpretation rules plus document-specific scrutiny points), citation conventions, register constraints, output structure, and a self-check protocol.
- **Optionally executes the prompt** in-session to produce the deliverable directly, applying the self-check before delivery.
- **Always produces a plain-English explainer** alongside the formal output; the user chooses whether to integrate it into the deliverable.

Deliverable types supported: stakeholder consultation response, internal compliance memo, external client memo, public commentary (LinkedIn / blog / newsletter), conference talk preparation, internal risk assessment, litigation brief input, comparative analysis, horizon-scan entry, skill input.

## Scope

EU digital regulation only: GDPR, AI Act, Data Act, DGA, DSA, DMA, NIS2 (incl. BSIG-neu), ePrivacy, CRA, DORA, eIDAS 2.0, PLD (Dir. 2024/2853), AI Liability Directive, and adjacent secondary instruments (delegated acts, implementing acts, harmonised standards, codes of conduct).

Out of scope: competition, IP, tax, employment, sectoral law not touching the digital stack. For operational compliance (DPIA, DPA drafting, AI Act obligations mapping, RoPA, breach response, NIS2 scoping), the skill routes to the relevant compliance skill in the portfolio rather than absorbing the task.

## Deployment

Place this skill in your Claude Code skill directory (`~/.claude/skills/` or workspace-level). Claude routes to it automatically when a user provides an EU digital regulation document and asks for structured analysis, a consultation response, a memo, a briefing, or comparable deliverable — in English or German. The skill does not require any external tool configuration beyond `WebFetch` (for live research) and `pdf-processing-anthropic` (for PDF ingestion); both are standard Claude Code capabilities.

Outputs are written to the user's current working directory by default.

## Disclaimer

This skill is not legal advice. It enforces interpretive discipline, citation hygiene, and an anti-hallucination protocol, but it does not guarantee accuracy. EU instruments evolve and only the CJEU can give authoritative interpretation. Use under qualified counsel.

## License

AGPL-3.0 (see repo-root LICENSE file).

> **Quality assurance:** this skill ships with evaluation tests in the `evals/` folder, which I run to check its outputs against expected results.

---

*Created by Oliver Schmidt-Prietz — [OneZero Legal](https://onezero.legal)*
