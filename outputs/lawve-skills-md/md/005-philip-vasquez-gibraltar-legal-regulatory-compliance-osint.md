---
id: "2c7343cd-3e7f-52a5-9524-be5accae3336"
title: "Gibraltar Legal, Regulatory & Compliance OSINT"
title_cn: "直布罗陀法律、监管与合规开源情报"
slug: "gibraltar-legal-regulatory-compliance-osint"
url: "https://lawve.ai/@philip-vasquez/skill/gibraltar-legal-regulatory-compliance-osint"
author: "Philip Vasquez"
author_slug: "philip-vasquez"
category: "legal-research"
language: "en"
license: "CC BY 4.0"
jurisdictions: "GI"
status: "active"
views: 45
downloads: 5
created_at: "2026-07-08T19:28:12.568399+02:00"
updated_at: "2026-07-08T19:28:52.401117+02:00"
source_index: 5
---

# 直布罗陀法律、监管与合规开源情报

原始名称：`Gibraltar Legal, Regulatory & Compliance OSINT`  
作者：Philip Vasquez  
分类：legal-research  
来源：https://lawve.ai/@philip-vasquez/skill/gibraltar-legal-regulatory-compliance-osint

## 中文 README

# 直布罗陀法律、监管与合规开源情报

**开源技能文件，用于在直布罗陀的法律、监管和合规环境中奠定人工智能助理的基础。**

[![许可证：CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![版本](https://img.shields.io/badge/version-1.6-blue)]()
[![司法管辖区](https://img.shields.io/badge/jurisdiction-Gibraltar-red)]()
[![文章](https://img.shields.io/badge/legal%20articles-7%20published-green)]()

---

## 这是什么

直布罗陀是一个小司法管辖区，拥有成熟的法律和监管框架，但人工智能模型却经常出错。英国普通法的假设出现了不该出现的地方。程序规则在实践中与英国的同类规则有所不同。官方来源分散在十几个不同的网站上，没有中央索引。

该存储库包含一个可以纠正该问题的结构化技能文件。将其上传到 Claude、Gemini、ChatGPT、Harvey、Legora 或任何人工智能助手，以便在开始研究之前将其建立在可靠的、特定于司法管辖区的知识基础上。

**它不是产品。它是在 CC BY 4.0 下免费发布的参考文件。**

---

## 适合谁

- **直布罗陀律师** — 程序分歧、判例法等级、法院结构、就业和公法
- **合规性和 AML/KYC 专业人员** — FSC、赌博部门、OFT 注册；反洗钱框架；金融行动特别工作组的立场
- **法律研究人员** — 立法、国会议事录、就业法庭判决、司法审查
- **记者和公共利益研究人员** - 法院判决、议会记录、新闻稿
- **开发人员构建直布罗陀特定的人工智能工具** - 请参阅下面的 [API 和集成](#api--integration)

---

## 内容
```
Gibraltar Legal Regulatory Compliance OSINT skill.md   ← The skills file (v1.3)
README.md                                               ← This file
LICENSE                                                 ← CC BY 4.0
```
| Common AI error | Correct position |
|-----------------|-----------------|
| Applies English deemed service rules | Gibraltar deemed service by post is **14 days** — *Francis v Clifton-Psaila* |
| Treats English Court of Appeal decisions as binding | English case law is **persuasive only** — not binding in Gibraltar courts |
| Applies post-Jackson costs reforms | Post-Jackson reforms **not adopted** in Gibraltar |
| Treats Gibraltar as EU member post-2020 | EU law has **not applied since 31 December 2020** |
| States collective redundancy threshold as 20 | Gibraltar threshold is **5 employees** (not 20 as in England) |
| Applies English weekly pay cap to redundancy | **No statutory cap** on weekly pay in Gibraltar redundancy calculations |
| Says discrimination awards are capped | Under the Equal Opportunities Act 2006 discrimination awards are **uncapped** |
| Cites wrong regulator for legal practitioners | The **LSRA** has regulated since 30 December 2022 |
| Refers to the "Industrial Tribunal" | Renamed the **Employment Tribunal** since **13 October 2016** |
| States Gibraltar is not a FIFA member | Gibraltar has been a **FIFA member since 13 May 2016** (172–12 Congress vote following CAS award of 2 May 2016) |
| Cites Attorney-General as always the correct Crown defendant | *Marrache v AG* [2013–14 Gib LR 520] — Governor may be correct defendant in constitutional proceedings |
| Article | URL |
|---------|-----|
| The Legal Development of Gibraltar | https://www.gibcheck.com/legal/principles/legal-development |
| Constitutional Law and Fundamental Rights | https://www.gibcheck.com/legal/principles/constitutional-law |
| Court Structure and Jurisdiction | https://www.gibcheck.com/legal/principles/court-structure |
| Civil Litigation and Procedure | https://www.gibcheck.com/legal/principles/civil-litigation |
| Employment Law in Gibraltar | https://www.gibcheck.com/legal/principles/employment-law |
| Public Law and Judicial Review | https://www.gibcheck.com/legal/principles/public-law |
| **Sports Law in Gibraltar** *(new)* | https://www.gibcheck.com/legal/principles/sports-law |
| Tool | Method |
|------|--------|
| **Claude (Projects)** | Add as a Project document — persists across all conversations in that project |
| **ChatGPT Custom GPTs** | Upload as a knowledge base file |
| **Google Gemini** | Paste into system instructions or upload as context |
| **Harvey / Legora** | Upload as a matter context document |
技能文件涵盖：

- **直布罗陀法律原则** — 来源等级、宪法权利、法院结构、民事诉讼、就业法、公法和司法审查 — 每项原则都带有指向 GibCheck 上完整的从业者深度文章的链接
- **官方数据源** — 直布罗陀主要官方数据集的经过验证的 URL，每个数据集都与相关的 GibCheck 页面配对
- **研究概况** — 合规/反洗钱、法律研究员、议会研究员、记者、海事和航空
- **人工智能集成指南** — 人工智能在直布罗陀方面犯了什么错误，如何验证输出
- **出版商目录** — 涵盖直布罗陀的重要新闻、政府、商业和行业资源，以及 GibCheck 出版商页面的链接

---

## 人工智能关于直布罗陀的错误是什么（这个文件修复了）


---

## 直布罗陀法律原则 — 已出版系列

该技能文件包括 GibCheck 直布罗陀法律原则系列中所有六篇已发表文章的摘要。


即将推出：家庭法；刑法与诉讼程序；直布罗陀欧盟法；海商法和海商法；遗嘱认证和遗产管理；公司及企业合规；国际法;司法协助。

*全系列：https://www.gibcheck.com/legal/principles*

---

## 如何使用

### 作为系统提示符/上下文文件

在开始任何与直布罗陀相关的研究会话之前，复制“直布罗陀法律监管合规性 OSINT Skill.md”的内容并将其作为系统提示或上下文文档粘贴到您的 AI 助手中。

**推荐说明：**

> 使用随附的直布罗陀 OSINT 技能文件作为直布罗陀法律、法规和官方来源的主要参考。清楚地区分此文件中的信息与其他来源的信息。记下您发现的任何差距。

### 使用特定工具


### 作为 llms.txt 参考

原始文件网址：
```
https://raw.githubusercontent.com/Flipsta/Giblegal/main/Gibraltar%20Legal%20Regulatory%20Compliance%20OSINT%20skill.md
```
| Version | Date | Changes |
|---------|------|---------|
| 1.0 | June 2026 | Initial release |
| 1.2 | June 2026 | Expanded profiles; Gibraltar–EU treaty; OFT URL corrected |
| 1.3 | June 2026 | Added Employment Law and Public Law & JR sections (articles now live on GibCheck); added GibCheck parallel links for each official source; maritime and aviation pages added |
| 1.5 | June 2026 | Added Gibraltar company terms glossary (company.gi, attributed); GCS court structure, jury service, LPA sections; UBO register going free |
| 1.6 | June 2026 | Added Sports Law in Gibraltar article (GFA/FIFA/CAS, GRFU Rugby Europe admission, governance framework); added Gibraltar publishers directory; updated legislation reference table |
---

## API 和集成

该技能文件是更广泛的直布罗陀公共记录情报项目的面向公众的层。

**GibCheck** (https://www.gibcheck.com) 是这项工作背后构建的平台，目前处于内测阶段。它提供对直布罗陀官方公共数据集、海事情报页面、航空情报页面、可搜索的法律从业者目录以及与实时记录相连的从业者法律参考的统一搜索。

如果您正在为直布罗陀法律或合规工作流程构建 LLM 集成、RAG 管道或工具，则还有更多内容需要讨论。技能文件是这次对话的开场白。

**联系方式：**
- 领英：https://www.linkedin.com/in/philipvasquez
- X / Twitter：@philipvasquez
- API 文档：https://www.gibcheck.com/api-docs

---

## 版本控制


要获得更新通知：**观看**此存储库→自定义→发布。

---

## 贡献

对于损坏的 URL、缺失的源或更正，欢迎提出请求和问题。在大型 PR 之前打开一个问题。

---

## 许可和归属

根据 **[知识共享归属 4.0 国际 (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)** 发布。

出于任何目的（包括商业用途）免费使用、共享和改编，并注明归属：

> *直布罗陀法律、监管与合规开源情报 — Philip Vasquez 法学学士法学硕士 (2026)。 CC 4.0。 https://github.com/Flipsta/Giblegal*

**作者：** Philip Vasquez 法学学士 法学硕士  
直布罗陀大律师 |英国一家金融科技公司前特别项目负责人，专门研究整个欧盟的私营公司信息数据发表有关诉讼资助和更广泛的法律技术政策的文章  
领英：https://www.linkedin.com/in/philipvasquez

*本文件不构成法律建议。始终根据官方主要来源进行验证。*

---

## Original README

# Gibraltar Legal, Regulatory & Compliance OSINT

**An open-source skills file to ground AI assistants in Gibraltar's legal, regulatory, and compliance landscape.**

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Version](https://img.shields.io/badge/version-1.6-blue)]()
[![Jurisdiction](https://img.shields.io/badge/jurisdiction-Gibraltar-red)]()
[![Articles](https://img.shields.io/badge/legal%20articles-7%20published-green)]()

---

## What This Is

Gibraltar is a small jurisdiction with a mature legal and regulatory framework — but one that AI models consistently get wrong. English common law assumptions bleed in where they shouldn't. Procedural rules diverge from UK equivalents in ways that matter in practice. Official sources are fragmented across a dozen different websites with no central index.

This repository contains a structured skills file that corrects that. Upload it to Claude, Gemini, ChatGPT, Harvey, Legora, or any AI assistant to ground it in reliable, jurisdiction-specific knowledge before you start researching.

**It is not a product. It is a reference file released freely under CC BY 4.0.**

---

## Who It's For

- **Gibraltar lawyers** — procedural divergences, case law hierarchy, court structure, employment and public law
- **Compliance & AML/KYC professionals** — FSC, Gambling Division, OFT registers; AML framework; FATF position
- **Legal researchers** — legislation, Hansard, Employment Tribunal decisions, judicial review
- **Journalists and public interest researchers** — court judgments, parliamentary record, press releases
- **Developers building Gibraltar-specific AI tools** — see [API & Integration](#api--integration) below

---

## Contents

```
Gibraltar Legal Regulatory Compliance OSINT skill.md   ← The skills file (v1.3)
README.md                                               ← This file
LICENSE                                                 ← CC BY 4.0
```

The skills file covers:

- **Principles of Gibraltar Law** — source hierarchy, constitutional rights, court structure, civil procedure, employment law, public law & judicial review — each with a link to the full practitioner-depth article on GibCheck
- **Official Data Sources** — verified URLs for the main official Gibraltar datasets, each paired with the relevant GibCheck page
- **Research Profiles** — compliance/AML, legal researcher, parliamentary researcher, journalist, maritime & aviation
- **AI Integration Guidance** — what AI gets wrong about Gibraltar, how to verify outputs
- **Publishers Directory** — key news, government, business and industry sources covering Gibraltar, with links to the GibCheck publishers page

---

## What AI Gets Wrong About Gibraltar (And This File Fixes)

| Common AI error | Correct position |
|-----------------|-----------------|
| Applies English deemed service rules | Gibraltar deemed service by post is **14 days** — *Francis v Clifton-Psaila* |
| Treats English Court of Appeal decisions as binding | English case law is **persuasive only** — not binding in Gibraltar courts |
| Applies post-Jackson costs reforms | Post-Jackson reforms **not adopted** in Gibraltar |
| Treats Gibraltar as EU member post-2020 | EU law has **not applied since 31 December 2020** |
| States collective redundancy threshold as 20 | Gibraltar threshold is **5 employees** (not 20 as in England) |
| Applies English weekly pay cap to redundancy | **No statutory cap** on weekly pay in Gibraltar redundancy calculations |
| Says discrimination awards are capped | Under the Equal Opportunities Act 2006 discrimination awards are **uncapped** |
| Cites wrong regulator for legal practitioners | The **LSRA** has regulated since 30 December 2022 |
| Refers to the "Industrial Tribunal" | Renamed the **Employment Tribunal** since **13 October 2016** |
| States Gibraltar is not a FIFA member | Gibraltar has been a **FIFA member since 13 May 2016** (172–12 Congress vote following CAS award of 2 May 2016) |
| Cites Attorney-General as always the correct Crown defendant | *Marrache v AG* [2013–14 Gib LR 520] — Governor may be correct defendant in constitutional proceedings |

---

## Principles of Gibraltar Law — Published Series

The skills file includes summaries of all six published articles from GibCheck's Principles of Gibraltar Law series.

| Article | URL |
|---------|-----|
| The Legal Development of Gibraltar | https://www.gibcheck.com/legal/principles/legal-development |
| Constitutional Law and Fundamental Rights | https://www.gibcheck.com/legal/principles/constitutional-law |
| Court Structure and Jurisdiction | https://www.gibcheck.com/legal/principles/court-structure |
| Civil Litigation and Procedure | https://www.gibcheck.com/legal/principles/civil-litigation |
| Employment Law in Gibraltar | https://www.gibcheck.com/legal/principles/employment-law |
| Public Law and Judicial Review | https://www.gibcheck.com/legal/principles/public-law |
| **Sports Law in Gibraltar** *(new)* | https://www.gibcheck.com/legal/principles/sports-law |

Coming soon: Family Law; Criminal Law & Procedure; EU Law in Gibraltar; Maritime Law & Admiralty; Probate & Administration of Estates; Companies & Corporate Compliance; International Law; Mutual Legal Assistance.

*Full series: https://www.gibcheck.com/legal/principles*

---

## How to Use

### As a system prompt / context file

Copy the contents of `Gibraltar Legal Regulatory Compliance OSINT skill.md` and paste it as a system prompt or context document in your AI assistant before starting any Gibraltar-related research session.

**Recommended instruction:**

> Use the attached Gibraltar OSINT skills file as your primary reference for Gibraltar law, regulation, and official sources. Clearly distinguish information from this file from other sources. Note any gaps you identify.

### With specific tools

| Tool | Method |
|------|--------|
| **Claude (Projects)** | Add as a Project document — persists across all conversations in that project |
| **ChatGPT Custom GPTs** | Upload as a knowledge base file |
| **Google Gemini** | Paste into system instructions or upload as context |
| **Harvey / Legora** | Upload as a matter context document |

### As an llms.txt reference

Raw file URL:

```
https://raw.githubusercontent.com/Flipsta/Giblegal/main/Gibraltar%20Legal%20Regulatory%20Compliance%20OSINT%20skill.md
```

---

## API & Integration

This skills file is the public-facing layer of a broader Gibraltar public record intelligence project.

**GibCheck** (https://www.gibcheck.com) is the platform being built behind this work, currently in private beta. It provides unified search across Gibraltar's official public datasets, a maritime intelligence page, an aviation intelligence page, a searchable legal practitioners directory, and a practitioner legal reference wired to live records.

If you are building LLM integrations, RAG pipelines, or tooling for Gibraltar legal or compliance workflows, there is more to discuss. The skills file is the opener for that conversation.

**Get in touch:**
- LinkedIn: https://www.linkedin.com/in/philipvasquez
- X / Twitter: @philipvasquez
- API documentation: https://www.gibcheck.com/api-docs

---

## Versioning

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | June 2026 | Initial release |
| 1.2 | June 2026 | Expanded profiles; Gibraltar–EU treaty; OFT URL corrected |
| 1.3 | June 2026 | Added Employment Law and Public Law & JR sections (articles now live on GibCheck); added GibCheck parallel links for each official source; maritime and aviation pages added |
| 1.5 | June 2026 | Added Gibraltar company terms glossary (company.gi, attributed); GCS court structure, jury service, LPA sections; UBO register going free |
| 1.6 | June 2026 | Added Sports Law in Gibraltar article (GFA/FIFA/CAS, GRFU Rugby Europe admission, governance framework); added Gibraltar publishers directory; updated legislation reference table |

To be notified of updates: **Watch** this repository → Custom → Releases.

---

## Contributing

Pull requests and issues are welcome for broken URLs, missing sources, or corrections. Open an issue before a large PR.

---

## Licence & Attribution

Released under **[Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)**.

Free to use, share, and adapt for any purpose, including commercial use, with attribution:

> *Gibraltar Legal, Regulatory & Compliance OSINT — Philip Vasquez LLB LLM (2026). CC BY 4.0. https://github.com/Flipsta/Giblegal*

**Author:** Philip Vasquez LLB LLM  
Gibraltar barrister | former Special Projects Lead at a UK fintech specialising in private company information data across the EU | published on litigation funding and wider legal technology policy  
LinkedIn: https://www.linkedin.com/in/philipvasquez

*This file does not constitute legal advice. Always verify against official primary sources.*
