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
source_index: 5
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 直布罗陀法律、监管与合规开源情报

原始名称：`Gibraltar Legal, Regulatory & Compliance OSINT`  
作者：Philip Vasquez  
分类：legal-research  
来源：https://lawve.ai/@philip-vasquez/skill/gibraltar-legal-regulatory-compliance-osint  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

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

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

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

---

## SKILL.md Original

---
name: "gibraltar-law-osint-philip-vasquez"
description: "A jurisdiction-grounding reference file for AI assistants working on Gibraltar legal, regulatory, and compliance research. Corrects systematic errors AI models make when applying English law to Gibraltar — a distinct jurisdiction under the Gibraltar Constitution Order 2006, with its own court hierarchy, civil procedure rules, employment law, and regulatory framework. Covers the source hierarchy, court structure, civil procedure divergences (14-day deemed service, post-Jackson reforms not adopted), employment law specifics (uncapped discrimination awards, 5-employee redundancy threshold), FSC financial services regulation, AML/KYC compliance sources, Gibraltar Companies Act 2014 with UBO public register, and a structured directory of official public record sources. Includes research profiles for lawyers, compliance professionals, and due diligence practitioners. Not legal advice."
metadata:
  author: "Philip Vasquez"
  license: "cc-by-4.0"
  version: "2026-07-08"
---

# Gibraltar Legal, Regulatory & Compliance OSINT
**A skills file for AI assistants**  
*Gibraltar's public information landscape — legal framework, official sources, and research methodology*

**Author:** Philip Vasquez LLB LLM, Gibraltar barrister  
**LinkedIn:** https://www.linkedin.com/in/philipvasquez | **X/Twitter:** @philipvasquez  
**Licence:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — free to use, share, and adapt with attribution  
**Version:** 1.6 | June 2026

---

## Why Public Information Matters

Governments and official bodies publish vast amounts of information — company registrations, court judgments, regulatory licences, parliamentary debates, planning applications — because the public has a right to see it. The whole point of a public record is that it is public. Lawyers use it to advise clients. Compliance teams use it to satisfy regulatory obligations. Businesses use it to check counterparties before signing contracts.

The challenge is not access in principle. It is access in practice. This information is scattered across dozens of official websites, formatted inconsistently, and requires you to know exactly where to look. This file is designed to help AI systems navigate Gibraltar's public information landscape accurately — understanding which sources exist, what they contain, and how they relate to the legal and regulatory framework.

*Further reading: https://www.gibcheck.com/why-public-information*

---

## About Gibraltar

Gibraltar is a British Overseas Territory at the southern tip of the Iberian Peninsula, population approximately 33,000. Its legal system is based on English common law, substantially modified by local legislation. Its constitution is the Gibraltar Constitution Order 2006. Final appeals go to the Privy Council in London.

Despite its size, Gibraltar is a significant centre for financial services (FSC-regulated firms spanning investment, insurance, payment services, and DLT/crypto), online gambling (one of the world's earliest remote gambling jurisdictions), and maritime activity (a major Mediterranean bunkering port). Its regulatory standards are broadly aligned with UK and EU frameworks, though it operates as an independent regulatory jurisdiction post-Brexit.

Gibraltar was removed from the FATF grey list in February 2024. It is currently negotiating a treaty governing its relationship with the EU Schengen area, with provisional application targeted from July 2026. See https://www.gibraltarschengen.com for ongoing developments.

---

## Part I — Principles of Gibraltar Law

*For practitioner-depth coverage with full case citations, see the Principles of Gibraltar Law series at https://www.gibcheck.com/legal/principles*

### Sources of Law — The Analytical Hierarchy

The correct order of precedence when analysing any Gibraltar legal question:

1. **Gibraltar Constitution Order 2006** — supreme law; inconsistent Gibraltar legislation is void
2. **Orders in Council** — Crown prerogative instruments; take precedence over domestic statute
3. **Acts of the Gibraltar Parliament**
4. **Statutory Instruments** made under Gibraltar Acts
5. **Retained EU law** — preserved under the Gibraltar European Union (Withdrawal) Act 2019
6. **Received English common law and equity** — as applied by the Riera principle and the English Law (Application) Act 1962
7. **English case law** — persuasive but not binding

**Critical point:** Gibraltar courts are not bound by English case law. English decisions are highly persuasive starting points but the divergence matters most in constitutional law, civil procedure, and employment — all areas where Gibraltar has developed its own jurisprudence.

*Full article: https://www.gibcheck.com/legal/principles/legal-development*

### Constitutional Law and Fundamental Rights

The GCO 2006 contains a justiciable Bill of Rights (ss.1–18), enforceable before the Supreme Court under s.16 by **Notice of Constitutional Motion**. Gibraltar courts adopt a generous and purposive approach to constitutional interpretation.

Section 1 is itself a substantive source of rights, including the right to security of the person — absent from the ECHR. Section 7 (private and family life) is among the most frequently litigated. The three-stage proportionality framework governs all derogation analysis.

Key domestic authorities: *Aidasani* (property rights, s.1(c)); *Alvarado v Secretary of State for Defence* (proportionality confirmed); *Rodriguez v Minister of Housing* [2009] UKPC 52 (s.14 free-standing); *P v HM Attorney-General* [2013–15 Gib LR 165] (incompatibility with ss.7 and 14).

*Full article: https://www.gibcheck.com/legal/principles/constitutional-law*

### Court Structure and the Judiciary

Gibraltar's judicial system is modelled entirely on the English system. Source: Gibraltar Court Service (https://www.gcs.gov.gi/justice-system).

**Court hierarchy (ascending):**

**Magistrates' Court** — all criminal matters commence here. Constituted by the Stipendiary Magistrate or lay Justices of the Peace. The Stipendiary Magistrate also holds the office of **Coroner**. Current Stipendiary Magistrate and Coroner: **Charles Bonfante**.

**Supreme Court** — unlimited civil and criminal jurisdiction (s.60(1) GCO 2006). Exercises all superior court functions (no separate High Court, Crown Court, or County Court). Comprises the Chief Justice and three Puisne Judges. Also exercises constitutional jurisdiction (s.16 GCO 2006) and admiralty jurisdiction (Admiralty Jurisdiction (Gibraltar) Order 1987). The Registrar of the Supreme Court is also the Admiralty Marshal.

Current judiciary:
- **Chief Justice:** the Hon. Mr Justice Dudley
- **Puisne Judges:** Mr Justice Yeats; Mr Justice Restano; Mr Justice Happold
- **Registrar:** Karl Tonna

**Court of Appeal** — not permanently resident; convenes for two sitting periods per year; panels drawn mainly from the English Court of Appeal (minimum three judges, odd number). Current members include Sir Nigel Davis, Sir Patrick Elias, Sir Adrian Fulford, and Sir Nicholas Underhill. *Verify the current President of the Court of Appeal against the live GCS page before relying on any named appointment.*

**Privy Council** — final appeal; decisions bind all Gibraltar courts. BOT decisions (Bermuda, Cayman, BVI) carry strong persuasive authority. Appeals as of right for civil matters of £50,000+.

**Employment Tribunal** — parallel jurisdiction for employment matters; renamed from Industrial Tribunal on 13 October 2016; decisions appeal to Supreme Court on points of law only.

**The legal profession:** Gibraltar has approximately 260 lawyers on the Roll, 24 of whom hold King's Counsel status. The profession is fully fused — no split between barristers and solicitors. The **LSRA** (https://lsra.gi), established by the Legal Services Act 2017 (in force 30 December 2022), is the independent statutory regulator. Practising without authorisation is a criminal offence. The chief legal adviser to the Crown is HM **Attorney General** (currently Michael Llamas KC). The **Director of Public Prosecutions**, heading the Office of Criminal Prosecutions and Litigation (OCPL), is Christian Rocca KC.

The Gibraltar Courts Service was created in October 2010, unifying Supreme and Magistrates' Court administration. A new courthouse was completed in May 2012 (four Supreme Courts, two Magistrates' Courts, one Coroner's Court).

**Court fees, forms and practice directions:**
- Court fees: https://www.gcs.gov.gi/court-fees (seven 2025 PDF schedules)
- General forms (Supreme Court): https://www.gcs.gov.gi/general-forms/supreme-court
- General forms (Magistrates' Court): https://www.gcs.gov.gi/general-forms/magistrates-court
- Circulars to Chambers (practice directions): https://www.gcs.gov.gi/circulars-to-chambers
- AML/CFT enforcement notices: https://www.gcs.gov.gi/aml-cft

*Full article: https://www.gibcheck.com/legal/principles/court-structure*

### Civil Litigation and Procedure

Civil procedure is governed by the **Supreme Court Rules 2000 (SCR 2000)** together with the **CPR** of England and Wales, applied under s.38A of the Supreme Court Act 1960.

**Key rules that diverge from English practice:**
- **Service:** Deemed service by post in Gibraltar is **14 days** — confirmed in *Francis v Clifton-Psaila*
- **Costs:** Costs follow the event under CPR r.44.2 — confirmed in *Gibtelecom Ltd v GRA* [2023/GSC/017]
- **Post-Jackson reforms:** Not adopted in Gibraltar. Success fees under CFAs require independent analysis.
- **Cross-border enforcement post-Brexit:** Brussels Regulation framework displaced; pre-2021 authority should not be relied upon
- **Legal aid:** administered by the Registrar of the Supreme Court under the Legal Aid and Assistance Act 1960. Criminal "legal aid" and civil "legal assistance" apply. Historic financial thresholds (subject to change): income ≤ £5,000/year; capital ≤ £350. Defamation proceedings are excluded. Verify current thresholds with the Supreme Court Registry (277 Main Street).

**Judgments database:** searchable at https://www.gcs.gov.gi/judgments — covers Supreme Court and Court of Appeal decisions from 1997, Sentencing Pronouncements from January 2016. The Gibraltar Laws site carries reported judgments back to 1812.

*Full article: https://www.gibcheck.com/legal/principles/civil-litigation*

### Jury Service

Source: Gibraltar Court Service (https://www.gcs.gov.gi/jury-service). Governed by Supreme Court Act ss.19C–22F.

**Eligibility:** aged 18–65 (volunteers aged 65–71 may serve); qualified electors or persons with 5 years' continuous residence in Gibraltar.

**Disqualifications:** persons with a mental disability; persons on bail; persons sentenced to life imprisonment or 5+ years' custody; persons who have served a custodial or suspended sentence within the last 10 years.

**Automatic excusals (s.19G):** ministers of religion; Members of Parliament; practising lawyers and notaries; former judges; serving members of HM Forces.

**Deferral:** once only, at the court's discretion.

**Penalties:** failure to attend without good cause — fine at level 3; serving while disqualified — fine at level 5. Contempt of court for disclosing jury deliberations carries a maximum of 2 years' imprisonment.

### Lasting Powers of Attorney

Source: Gibraltar Court Service (https://www.gcs.gov.gi/lasting-powers-of-attorney).

Gibraltar has a statutory Lasting Power of Attorney (LPA) regime. Two forms of LPA are available: **health and welfare**; and **property and financial affairs**. An LPA Code of Practice, blank templates, and an easy-read guide are published by the GCS. Court fees for LPAs are set out in the LPA fee schedule (one of the seven 2025 fee schedules at https://www.gcs.gov.gi/court-fees).

### Employment Law

Employment law in Gibraltar is statute-based. The principal instrument is the **Employment Act 1932** (as heavily amended — significant revisions in 2016, 2023 and 2025). Discrimination is governed by the standalone **Equal Opportunities Act 2006** (in force 1 March 2007).

**Key Gibraltar-specific divergences from English employment law:**
- **Collective redundancy threshold:** 5 employees at one establishment within 90 days (vs 20 in England)
- **No weekly pay cap:** no statutory cap on weekly pay for redundancy calculations; total capped at 52 weeks' pay
- **Uncapped discrimination awards:** Equal Opportunities Act 2006 awards have no ceiling
- **Unfair dismissal compensation:** Basic Award + Compensatory Award; compensatory award capped at 104 weeks
- **Ordinary qualifying period:** 52 weeks of continuous employment (Employment Act s.60)
- **Entitled/non-entitled workers:** failure to secure a work permit for a non-entitled worker carries a £3,000 fixed-penalty notice
- **Redundancy pay tax exemption:** statutory redundancy payments are normally income-tax exempt

**Protected grounds under the Equal Opportunities Act 2006 (s.3):** age; disability; pregnancy or maternity; racial or ethnic origin; religion or belief; sex; sexual orientation; victimisation; gender reassignment. **Nationality is expressly excluded** (s.4(2)).

*Full article: https://www.gibcheck.com/legal/principles/employment-law*

### Public Law and Judicial Review

**Judicial review** under **section 17B of the Supreme Court Act 1960**, mirroring English judicial review. **Grounds:** illegality; irrationality; procedural impropriety; legitimate expectation; proportionality. **Time limit:** three months; **permission** required.

**Constitutional jurisdiction** under section 16 GCO 2006 (Notice of Constitutional Motion) runs in parallel. **Abuse of process** — per *Marrache v AG* [2013–14 Gib LR 520] — prevents use of constitutional motions to circumvent the JR time limit.

The **Attorney-General** is the nominal Crown defendant under s.12 Crown Proceedings Act 1951 (Gibraltar). In proceedings touching the Governor's constitutional functions, the Governor may be the correct defendant (per *Marrache*).

*Full article: https://www.gibcheck.com/legal/principles/public-law*

### Gibraltar Companies — Key Compliance Facts

*Sources: Gibraltar Companies House; Income Tax Office. Compiled and verified by company.gi, Gibraltar Company Guides (https://company.gi/guide), May 2026. Verify all figures against current primary sources before relying on them.*

Gibraltar companies are incorporated under the Companies Act 2014. Most compliance obligations run from the **incorporation anniversary** or **accounting year-end**. Key deadlines:

| Obligation | Form | Deadline | Fee | Late penalty (first year) |
|-----------|------|----------|-----|--------------------------|
| Annual Return | FAR01 | 30 days from anniversary | £103 | £257.50 → £309 → £360.50 → £412 |
| Accounts filing | — | 12 months from year-end (10 months for public companies) | £26 | £206.50 (>13 months) → £335 (>24 months) |
| Tax Return | CT1 | 9 months after month-end of accounting period | Free | By company size (from £100 Micro to £1,500 Large) |
| Payments on Account | — | 28 February and 30 September (two instalments of 50%) | — | 10% surcharge; further 20% after 90 days |
| PAYE monthly | — | 15th of each month | — | — |
| PAYE annual forms | P8/P10/P12 | 31 July (tax year: 1 July – 30 June) | — | — |
| Director/secretary changes | FDMS01–04 | 14 days | £26 | — |
| Registered office change | FREG01 | 30 days | £26 | — |
| UBO update | — | 28 days from any change | — | — |

**Gibraltar company incorporation (DIY):** from £110 (£100 registration fee + £10 capital duty); approximately 3 working days (expedited 24 hours for £200). Five required forms: FINC01 (application), FINC02 (secretary consent), FINC30 (memorandum), FINC40 (articles), FINC23 (compliance statement). Strike-off may begin after 3 years of non-filing (Companies Act 2014, s.411).

**Gibraltar tax rate:** 15% corporation tax (as of 2026, under the Financial Services (Income Tax) Act).

**Ultimate Beneficial Ownership:** Gibraltar has had a public UBO register since 2020 — the first UK Overseas Territory to implement one. Following HM Government press release 111/2026 (23 February 2026), the register is now **free and publicly searchable** at https://ubosearch.egov.gi. The reporting threshold is 25% or more of shares, voting rights, or significant control. Changes must be reported within 28 days.

**Official registers and tools:**
- Companies House Gibraltar (e-Registry, paid): https://www.companieshouse.gi
- UBO public search (free): https://ubosearch.egov.gi
- company.gi compliance tools and form generator (free API, no authentication): https://company.gi/developers


### Sports Law in Gibraltar

Gibraltar's sports-law framework is not codified in a single statute. The **Gibraltar Sports and Leisure Authority Act 2002** establishes the statutory body for public sports facilities; individual associations operate as private bodies under the general law of associations; anti-doping is covered by UK Anti-Doping (UKAD); and most sports-governance disputes are litigated through international federations and the Court of Arbitration for Sport (CAS) rather than domestic courts.

**Gibraltar Football Association (GFA):** The GFA's 18-year campaign for international recognition — centred on *CAS 2002/O/410 (GFA v UEFA)* and three subsequent CAS awards — established that international sporting bodies cannot apply retrospective rule changes to block a pre-existing valid application (*venire contra factum proprium*). Gibraltar was admitted to UEFA on 24 May 2013 and to FIFA on 13 May 2016 (172–12 Congress vote following the CAS award of 2 May 2016). The GFA's journey is documented in Philip Vasquez and Julian Santos, *The Journey of Gibraltar's Football Association* (LawInSport, 2015): https://www.lawinsport.com/topics/item/the-journey-of-gibraltar-s-football-association-part-1-progress-to-uefa-fifa-membership

**Gibraltar Rugby Football Union (GRFU):** Admitted to Rugby Europe on 5 December 2025 as its 49th member, following a Paris court annulment of a procedurally tainted 2013 Stockholm rejection vote — an example of national civil-court litigation succeeding where CAS was not the chosen forum.

**CAS and Gibraltar:** The four foundational cases — CAS 2002/O/410 (2003), the 2006 award, the 2011 award, and the 2016 GFA v FIFA award — constitute Gibraltar's most significant body of international sports arbitration. The *venire contra factum proprium* principle these cases applied is now the template used by other Gibraltar associations seeking international recognition.

*Full article: https://www.gibcheck.com/legal/principles/sports-law*

### Key Legislation Reference

| Area | Primary legislation |
|------|-------------------|
| Constitution & rights | Gibraltar Constitution Order 2006 |
| Courts & civil procedure | Supreme Court Act 1960; Magistrates' Court Act 1961; SCR 2000 |
| English law reception | English Law (Application) Act 1962 |
| Brexit | Gibraltar European Union (Withdrawal) Act 2019 |
| Employment | Employment Act 1932 (as amended, incl. 2025) |
| Discrimination | Equal Opportunities Act 2006 |
| Companies | Companies Act 2014 |
| Financial services | Financial Services Act 2019 |
| Gambling | Gambling Act 2005 (amended; new framework April 2026) |
| Sports governance | Gibraltar Sports and Leisure Authority Act 2002 |
| DLT/crypto | Financial Services (DLT Providers) Regulations 2017 |
| Data protection | Data Protection Act 2004 (broadly GDPR-equivalent) |
| Legal profession | Legal Services Act 2017 |
| AML | Proceeds of Crime Act 2015 |
| UBO | Register of Ultimate Beneficial Owners, Nominators and Appointors Regulations 2017 |
| Crown proceedings | Crown Proceedings Act 1951 (Gibraltar) |
| Legal aid | Legal Aid and Assistance Act 1960 |
| LPA | Lasting Powers of Attorney regime |
| Coroner | Coroner Act |
| Jury service | Supreme Court Act ss.19C–22F |

---

## Part II — Official Sources and Where to Search

### Court Cases and Judgments

| | |
|---|---|
| **Gibraltar Court Service** | https://www.gcs.gov.gi/judgments |
| **Gibraltar Laws — Judgments** | https://www.gibraltarlaws.gov.gi/judgments |
| **Search on GibCheck** | https://www.gibcheck.com/search |

Searchable database spanning 1997–2026 (Supreme Court and Court of Appeal). Sentencing Pronouncements from January 2016. The Gibraltar Laws site carries reported judgments back to 1812. GCS and Gibraltar Laws are distinct sources — search both.

### Legislation and Bills

| | |
|---|---|
| **Gibraltar Laws** | https://www.gibraltarlaws.gov.gi |
| **Bills before Parliament** | https://www.gibraltarlaws.gov.gi/bills |
| **Search on GibCheck** | https://www.gibcheck.com/search |
| **Legal reference** | https://www.gibcheck.com/legal/principles |

Always check amendment history before citing any provision.

### Employment Tribunal

| | |
|---|---|
| **Official source** | https://www.employmenttribunal.gov.gi |
| **Search on GibCheck** | https://www.gibcheck.com/search |

### Hansard — Parliamentary Debates

| | |
|---|---|
| **Hansard** | https://www.parliament.gi/proceedings-of-parliament/hansard |
| **Notice of Questions** | https://www.parliament.gi/proceedings-of-parliament/notice-of-questions |
| **Search on GibCheck** | https://www.gibcheck.com/search |

### FSC — Financial Services Commission

| | |
|---|---|
| **FSC Regulated Entities** | https://www.fsc.gi/regulated-entities |
| **FSC Public Warnings** | https://www.fsc.gi/news/warnings |
| **Search on GibCheck** | https://www.gibcheck.com/search |

### Gambling Division

| | |
|---|---|
| **Official source** | https://gamblingdivision.gov.gi |
| **Search on GibCheck** | https://www.gibcheck.com/search |

### OFT — Business Licences

| | |
|---|---|
| **Official source** | https://www.oft.gov.gi |
| **Search on GibCheck** | https://www.gibcheck.com/search |

### Legal Practitioners

| | |
|---|---|
| **LSRA Register** | https://lsra.gi |
| **GCS Practitioners List** | https://www.gcs.gov.gi/list-of-practitioners-notaries-etc |
| **GibCheck Practitioners** | https://www.gibcheck.com/legal |

### Companies House and Company Information

| | |
|---|---|
| **Companies House e-Registry (paid)** | https://www.companieshouse.gi |
| **UBO Public Register (free)** | https://ubosearch.egov.gi |
| **company.gi guides and tools** | https://company.gi/guide |

### HM Government — Press Releases

| | |
|---|---|
| **Official source** | https://www.gibraltar.gov.gi/press-releases |
| **Search on GibCheck** | https://www.gibcheck.com/search |

### Courts — Forms, Fees and Procedure

| | |
|---|---|
| **Court fees (2025 schedules)** | https://www.gcs.gov.gi/court-fees |
| **Supreme Court forms** | https://www.gcs.gov.gi/general-forms/supreme-court |
| **Magistrates' Court forms** | https://www.gcs.gov.gi/general-forms/magistrates-court |
| **Practice directions (Circulars to Chambers)** | https://www.gcs.gov.gi/circulars-to-chambers |
| **AML/CFT enforcement notices** | https://www.gcs.gov.gi/aml-cft |
| **Lasting Powers of Attorney** | https://www.gcs.gov.gi/lasting-powers-of-attorney |
| **Jury service** | https://www.gcs.gov.gi/jury-service |

### Maritime

| | |
|---|---|
| **Gibraltar Port Authority** | https://www.gibraltarport.com |
| **GibCheck Maritime** | https://www.gibcheck.com/maritime |

### Aviation

| | |
|---|---|
| **Gibraltar Airport** | https://www.gibraltarairport.gi |
| **GibCheck Aviation** | https://www.gibcheck.com/aviation |

### Gibraltar Regulatory Authority

| | |
|---|---|
| **Official source** | https://www.gra.gi |

Regulates communications, broadcasting, data protection, and competition.

---


### Gibraltar News & Publisher Directory

**GibCheck Publishers page:** https://www.gibcheck.com/publishers

A curated directory of news outlets, government agencies, trade bodies, and industry associations covering Gibraltar — each linking to the publisher's official site. Useful for researchers tracking who publishes what in Gibraltar's information landscape.

| Type | Key publishers |
|------|---------------|
| **News** | Gibraltar Chronicle (daily since 1801); Gibraltar Broadcasting Corporation (GBC); Your Gibraltar TV (online); The Olive Press (Gibraltar/Spain coverage); VOX Gibraltar |
| **Government** | Gibraltar Finance Centre; Income Tax Office Gibraltar |
| **Business** | Gibraltar Chamber of Commerce; Gibraltar Federation of Small Businesses (GFSB) |
| **Industry** | Gibraltar Betting and Gaming Association (GBGA); Gibraltar Association for New Technologies (GANT); Gibraltar Electronic Money Association (GEMA); Gibraltar Bankers' Association (GBA); Gibraltar Funds & Investments Association (GFIA); Startup Grind Gibraltar |

Note: sources already indexed by GibCheck (Companies House, FSC, HM Government press releases, Gibraltar Laws, Hansard, court judgments) appear on the search and sources pages, not in the publishers directory.

## Part III — Research Profiles

### Compliance & AML/KYC

Minimum verification set: FSC register → Gambling Division (if applicable) → OFT licence → LSRA (if legal firm) → court judgments (adverse civil findings) → FSC warnings → UBO register (https://ubosearch.egov.gi). Multiple AML supervisory authorities operate in parallel under the Proceeds of Crime Act 2015. Register verification is preliminary — cross-reference across judgment databases and press releases.

**GibCheck search:** https://www.gibcheck.com/search

### Gibraltar Lawyer / Legal Researcher

Apply the source hierarchy. Search Gibraltar case law first (GCS + Gibraltar Laws). Check current legislation text and amendment history before citing. Key divergences from English law — deemed service (14 days), post-Jackson costs reforms not adopted, cross-border enforcement post-Brexit — require Gibraltar-specific analysis. For legal aid queries, contact the Supreme Court Registry directly (thresholds may be outdated).

**GibCheck legal reference:** https://www.gibcheck.com/legal/principles  
**GibCheck practitioners:** https://www.gibcheck.com/legal

### Parliamentary & Legislative Researcher

Bills + Hansard Second Reading + Notice of Questions + Press Releases constitute the complete public parliamentary record. Monitor for consequential legislation arising from the Gibraltar–EU treaty (https://www.gibraltarschengen.com).

### Journalist & Public Interest Researcher

Civil judgments are the highest-information public source. The UBO register (now free at https://ubosearch.egov.gi) is a significant new resource for beneficial ownership research. Employment Tribunal decisions are frequently overlooked. Named Questions in Hansard often surface matters before press coverage.

### Company Due Diligence

For any Gibraltar entity: OFT licence → Companies House e-Registry (paid; https://www.companieshouse.gi) → UBO register (free; https://ubosearch.egov.gi) → FSC register (if regulated) → Gambling Division (if gambling) → court judgments. company.gi (https://company.gi) provides free compliance tools and verified deadline/form information for Gibraltar companies; it is not a live registry lookup.

### Maritime & Aviation Researcher

**Maritime:** https://www.gibcheck.com/maritime  
**Aviation:** https://www.gibcheck.com/aviation

---

## A Note on AI and Gibraltar Research

AI assistants have limited knowledge of Gibraltar-specific law and regulation — the jurisdiction is small and underrepresented in training data. Errors are common on procedural detail, company compliance obligations, and the distinction between English and Gibraltar rules. This file provides the framework; official sources provide the authority.

**GibCheck** (https://www.gibcheck.com) indexes Gibraltar's public records across official datasets in one searchable interface. Its legal reference section: https://www.gibcheck.com/legal/principles

---

## Principles of Gibraltar Law — Article Series

| Article | URL |
|---------|-----|
| The Legal Development of Gibraltar | https://www.gibcheck.com/legal/principles/legal-development |
| Constitutional Law and Fundamental Rights | https://www.gibcheck.com/legal/principles/constitutional-law |
| Court Structure and Jurisdiction | https://www.gibcheck.com/legal/principles/court-structure |
| Civil Litigation and Procedure | https://www.gibcheck.com/legal/principles/civil-litigation |
| Employment Law in Gibraltar | https://www.gibcheck.com/legal/principles/employment-law |
| Public Law and Judicial Review | https://www.gibcheck.com/legal/principles/public-law |
| Sports Law in Gibraltar | https://www.gibcheck.com/legal/principles/sports-law |

Coming soon: Family Law; Criminal Law & Procedure; EU Law in Gibraltar; Maritime Law & Admiralty; Probate & Administration of Estates; Companies & Corporate Compliance; Jury Service & Court Procedure; International Law; Mutual Legal Assistance.

*Full series: https://www.gibcheck.com/legal/principles*

---


## Part IV — Gibraltar Company Terms: Key Glossary

*The following terms and definitions are drawn from the company.gi Gibraltar Company Glossary (https://company.gi/guide/glossary), an independent reference resource verified against official Gibraltar Companies House and Income Tax Office guidance. Used here with attribution under company.gi's content usage policy (short-form factual reference). Always verify against primary sources.*

Understanding Gibraltar-specific terminology is essential for accurate company due diligence and compliance research. The following terms are those most commonly misunderstood or confused by practitioners unfamiliar with Gibraltar's company law framework.

### Regulatory Bodies

**Companies House** (also: Registrar of Companies, Companies Registry) — the government department that registers companies and holds public company records. Receives Annual Returns, Accounts, and director/secretary change notifications. Entirely separate from the Income Tax Office. Website: https://www.companieshouse.gi

**Income Tax Office** (also: ITO, Tax Office) — handles all corporate and personal tax matters. Receives CT1 tax returns and tax payments. Entirely separate from Companies House.

**OFT** (also: Office of Fair Trading) — issues business licences in Gibraltar. A licence is required before a company can trade. The OFT may require proof of residency entitlement before issuing a licence. Website: https://www.oft.gov.gi

**ETB** (also: Employment Service, Gibraltar Employment Service, Employment Trading Board) — handles employment registrations. Companies register as employers here; working directors register as employees (using the Notice of Terms of Engagement, not the self-employment registration).

**DIHA** (also: Department of Immigration and Home Affairs) — handles residency and immigration matters. Can provide written confirmation of residency approval for business licence applications.

**GFSC / FSC** (also: Gibraltar Financial Services Commission) — regulates financial services and DLT companies. Gibraltar was the first jurisdiction globally to regulate DLT companies. Website: https://www.fsc.gi

### Key Company Filing Concepts

**Annual Return** (also: FAR01, Confirmation Statement) — a yearly filing with Companies House confirming company details: directors, shareholders, registered office. Due within 30 days of the company's incorporation anniversary. Form: FAR01 (for companies with share capital); FAR02 (without share capital). ⚠️ *Commonly confused with Tax Return — these are entirely separate filings going to separate bodies.*

**Accounts** (also: Annual Accounts, Financial Statements) — the company's financial records for the year, filed with Companies House within 13 months of year-end. Public record. ⚠️ *Not the same as the Tax Return (CT1), which goes to the Income Tax Office.*

**CT1** (also: Corporate Tax Return, Tax Return) — the form reporting company profits to the Income Tax Office. Due 9 months after the end of the accounting period. Must include accounts and tax computation.

**Tax Year** — the government's fixed 12-month period running from 1 July to 30 June. Different from a company's accounting year, which the company chooses itself.

**Accounting Reference Period** (also: Financial Year, Year-End) — the company's chosen financial year, defaulting to 31 December. Can be changed using form ACC70 (fee: £25).

**Corporate Tax** — tax on company profits. Currently 15% for most Gibraltar companies; 20% for utilities. Reported via CT1 to the Income Tax Office.

**Payments on Account** (also: POA, Advance Tax Payments) — advance corporate tax payments based on the previous year's liability. Two payments per year: 28 February and 30 September, each equal to 50% of the estimated liability.

**PAYE** (Pay As You Earn) — tax deducted from employee wages. Employers pay PAYE to the Income Tax Office by the 15th of each month. Annual PAYE forms (P8/P10/P12) due 31 July.

### Key Company Forms

| Form | Purpose | Deadline | Fee |
|------|---------|----------|-----|
| FAR01 | Annual Return (companies with share capital) | 30 days from anniversary | ~£100–£103 |
| FAR02 | Annual Return (companies without share capital) | 30 days from anniversary | — |
| CT1 | Corporate Tax Return | 9 months after year-end | Free |
| ACC70 | Change accounting reference period (year-end date) | — | £25 |
| FMEM01 | Amend Articles of Association | — | £25 |
| FDMS01 | New director/secretary appointment | 14 days | £26 |
| FDMS02 | Director/secretary resignation | 14 days | £26 |
| FDMS03 | Change of director/secretary details | 14 days | £26 |
| FDMS04 | Director/secretary termination | 14 days | £26 |
| FCIS01 | Share allotment notification | 1 month | £26 |
| FREG01 | Registered office change | 30 days | £26 |
| FINC01–FINC40 | Incorporation pack (FINC01, 02, 23, 30, 40) | On incorporation | ~£100 |

### Company Structure Terms

**Articles of Association** (also: Articles, Company Constitution) — the company's internal rulebook covering decision-making, shareholder rights, and director powers. Filed on incorporation; amended using FMEM01 (£25).

**Registered Office** — the company's official address in Gibraltar. Must be a physical address (not a PO Box). Home addresses are permitted. Changes notified within 30 days using FREG01.

**Share Capital** (also: Authorised Capital, Issued Capital) — the total value of shares the company can issue, stated in its Articles.

**Share Allotment** (also: Issuing Shares) — issuing new shares within the authorised share capital. Must be notified to Companies House within 1 month using FCIS01. Late penalty from £100.

**Secretary** — a company officer responsible for administrative compliance. Optional in Gibraltar (unlike the historical UK requirement). Changes notified within 14 days.

**DLT** (Distributed Ledger Technology) — technology recording transactions across multiple computers with no single controlling party. Blockchain is one type of DLT. Gibraltar was the first jurisdiction globally to license DLT businesses under the Financial Services (DLT Providers) Regulations 2017.

**Premises Waiver** — an exemption from the OFT requirement to have physical office premises for a business licence. Available for remote workers or client-facing businesses.

*Source: company.gi Gibraltar Company Glossary (https://company.gi/guide/glossary), verified against Gibraltar Companies House and Income Tax Office official guidance. company.gi is an independent platform, not affiliated with any government body. Always verify terms and figures against primary sources.*

---

## About the Author

**Philip Vasquez LLB LLM** is a Gibraltar barrister, former Special Projects Lead at a UK fintech specialising in private company information data across the EU, and co-founder of one of Gibraltar's first licensed DLT companies. He has been involved in Gibraltar's technology and regulatory community since 2015, including as an executive member of GANT (Gibraltar Association for New Technologies). He has published on litigation funding, fintech, DLT, and regulatory matters.

This file is released in the belief that public information should be easy to find and not gatekept by technical barriers.

- **LinkedIn:** https://www.linkedin.com/in/philipvasquez
- **X / Twitter:** @philipvasquez

---

*Released under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Free to use, share, and adapt with attribution: Gibraltar Legal, Regulatory & Compliance OSINT — Philip Vasquez LLB LLM (2026).*

*Company compliance information sourced from Gibraltar Companies House and Income Tax Office official guidance, as compiled and verified by company.gi (https://company.gi/guide), May 2026. Court and justice system information sourced from the Gibraltar Court Service (https://www.gcs.gov.gi). This file does not constitute legal or professional advice. Verify all information against primary sources. Note the date of any search.*
