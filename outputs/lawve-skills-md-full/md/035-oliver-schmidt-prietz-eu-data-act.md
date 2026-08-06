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
source_index: 35
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 欧盟数据法

原始名称：`EU Data Act`  
作者：Oliver Schmidt-Prietz  
分类：technology-law  
来源：https://lawve.ai/@oliver-schmidt-prietz/skill/eu-data-act  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

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

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

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

---

## SKILL.md Original

---
name: "eu-data-act-oliver-schmidt-prietz"
description: "Practitioner skill for advising on EU Regulation 2023/2854 (Data Act). Covers Chapters II-VII (IoT data access, mandatory B2B sharing, unfair contract terms, public-sector exceptional need, cloud switching, third-country governmental access) and Chapter VIII (interoperability and smart contracts, gate-only). Use when the user asks about Data Act rights or obligations, drafts a Data Act notice or letter, reviews a data-sharing or cloud-switching contract under the Data Act, runs a Data Act gap analysis, or asks how the Data Act interacts with GDPR, the DMA, the Trade Secrets Directive, or sectoral law. Triggers include \"Data Act\", \"Datengesetz\", \"Regulation (EU) 2023/2854\", \"Art. 4(1) request\", \"Art. 5(1) third-party request\", \"trade-secret handbrake\", \"cloud switching obligations\", \"Chapter VI\", \"Ch V exceptional need\", and references to specific Data Act articles or recitals."
metadata:
  author: "Oliver Schmidt-Prietz"
  license: "agpl-3.0"
  version: "2026-06-11"
---

# EU Data Act practitioner skill

This skill produces practitioner-grade analysis and drafting on Regulation (EU) 2023/2854 (the Data Act). It is calibrated for senior legal counsel, compliance officers, and product counsel working with the Data Act in client-facing or in-house contexts.

The skill's architectural anchor is **role × chapter × stage**. Every matter is positioned by identifying which Data Act roles the parties play (user, data holder, data recipient, third party, customer, provider, public sector body), which chapter of the regulation governs (II-VIII), and which stage of that chapter's process the matter is at (negotiation, request, response, refusal, enforcement). The anchor determines which references and templates load.

## Loading instructions

When invoked, read these files in order:

1. `references/method/analysis-method.md` — the seven-step cognitive flow the skill applies to every substantive matter
2. `references/method/house-style.md` — output style and citation conventions

Then, based on the matter, load:

3. `references/gotchas.md` if the matter touches trade secrets, role mapping, "without undue delay" SLAs, the Art. 4(2) safety/security handbrake, gatekeeper exclusion, Ch VI custom-built carve-out, the sui generis right, or compensation direction. In practice this is most matters; the catalogue is short and worth reading on any substantive question.

4. The applicable gate file(s) in `references/gates/`:
   - `gdpr-overlay.md` whenever personal data is in scope, the user is a natural person, or the scenario involves terminal-equipment access
   - `trade-secrets-directive.md` whenever any data is claimed or might be claimed as a trade secret
   - `dma-gatekeeper.md` whenever a third party in an Art. 5 request could be a DMA-designated gatekeeper, or when downstream sharing under Art. 6(2)(c) is in scope
   - `sectoral-lex-specialis.md` whenever the matter involves a regulated sector (automotive, medical devices, financial services, energy, AI, cybersecurity, agriculture, telecoms)
   - `member-state.md` whenever the matter depends on Member State implementation (competent authority designation, complaint forum, penalties, dispute settlement)

5. The applicable scenario card in `references/scenarios/` (added in Phase 5).

6. Quote from the source files when stating what the regulation or FAQ says:
   - `sources/regulation-2023-2854.md` is the verbatim Data Act
   - `sources/faq-v1-4.md` is the Commission FAQ (non-authoritative; frame as Commission interpretation)
   - `sources/digital-omnibus-amendments-tracker.md` for current-law-vs-proposal discipline on affected provisions
   - `sources/mcts-sccs-recommendation-pointer.md` and `sources/vehicle-data-guidance-pointer.md` for Commission soft-law instruments

Never paraphrase the regulation from training data. Always quote from the source files. If the source file does not contain the needed passage, the analysis must not rely on it.

## Anchor: role × chapter × stage

Before producing any output, the skill positions the matter on the anchor.

**Role.** For every entity in the scenario, identify Data Act role(s) and any concurrent GDPR role(s). The same entity can play multiple roles, and roles can shift across phases of the scenario. Role mapping is the most consequential analytical step; output that hides the mapping is unreliable. See `references/method/analysis-method.md` Step 3.

**Chapter.** Identify which chapter(s) govern. The chapters are functionally distinct:
- **Ch II (Arts. 3-7).** User access to IoT product and related service data; B2C and B2B sharing.
- **Ch III (Arts. 8-12).** Conditions for making data available where mandated by Union law.
- **Ch IV (Art. 13).** Unfair contract terms unilaterally imposed in B2B data-related contracts.
- **Ch V (Arts. 14-22).** Making data available to public sector bodies on exceptional need.
- **Ch VI (Arts. 23-31).** Switching between data processing services.
- **Ch VII (Art. 32).** Unlawful international governmental access to non-personal data held in the Union.
- **Ch VIII (Arts. 33-36).** Interoperability (Art. 33), in-parallel use of data processing services (Art. 34), data processing service interoperability (Art. 35), smart contracts (Art. 36). Operative engagement only where Arts. 34 and 35 apply to Ch VI matters; otherwise gate-only.

Many real matters span chapters. Cross-chapter scenarios get separate analyses per chapter, not blended.

**Stage.** Identify what phase the matter is at. Stages vary by chapter; common ones:
- Ch II: design (Art. 3 pre-contractual transparency), request (Art. 4(1) user, Art. 5(1) third-party), response, safeguards negotiation (Art. 4(6)/5(9)), withholding (Art. 4(7)/5(10)), refusal (Art. 4(8)/5(11)), enforcement.
- Ch III: contract negotiation, FRAND assessment, compensation calculation, dispute.
- Ch IV: contract drafting, term review, unfairness challenge, term severability.
- Ch V: request receipt, decline-or-modify decision, compliance, compensation claim, redress.
- Ch VI: contract review for Art. 25 compliance, notice of switching, transition execution, egress charge dispute, interoperability compatibility.
- Ch VII: receipt of third-country request, Art. 32(3) assessment, national body consultation, response or refusal.

## Scenario routing table

The skill maps user prompts to scenario cards based on the role × chapter × stage anchor. Scenario cards are pre-walked applications of the seven-step method for common matter types. The full table will populate in Phase 5; this is the structural map.

| Role × chapter × stage | Card | Notes |
|------------------------|------|-------|
| User × Ch II × pre-contract transparency review | `ch2-pre-contract-transparency.md` | Art. 3(2)/(3) information obligation; seller, rentor, lessor, related service provider |
| User × Ch II × Art. 4(1) request preparation | `ch2-user-direct-request.md` | Includes identity verification, safeguards expectations |
| User × Ch II × Art. 5(1) third-party request | `ch2-user-third-party-request.md` | Includes gatekeeper check via DMA gate |
| Data holder × Ch II × Art. 4(1) response | `ch2-data-holder-response.md` | Includes scope, format, latency, trade-secret pre-check |
| Data holder × Ch II × Art. 4(2) safety/security handbrake | `ch2-safety-security-handbrake.md` | Bilateral, not unilateral; Art. 37 notification |
| Data holder × Ch II × Art. 4(6)-(7) safeguards and withholding | `ch2-trade-secret-stages-1-2.md` | TSD gate runs |
| Data holder × Ch II × Art. 4(8) refusal | `ch2-trade-secret-stage-3-refusal.md` | Highest-risk drafting; conjunction check |
| Third party × Ch II × Art. 6 permitted use | `ch2-third-party-permitted-use.md` | Closed list of prohibitions |
| Data holder × Ch III × FRAND terms | `ch3-frand-terms.md` | Art. 8 non-discrimination; Art. 9 compensation |
| Data recipient × Ch III × compensation challenge | `ch3-compensation-challenge.md` | Art. 9(4) SME cap; Art. 8(3) non-discrimination |
| Any × Ch IV × unfairness challenge | `ch4-unfairness-challenge.md` | Art. 13 three-test structure; severability |
| Drafter × Ch IV × pre-contract review | `ch4-contract-drafting.md` | Working through Art. 13(4)/(5) lists |
| Public sector body × Ch V × request preparation | `ch5-request-preparation.md` | Art. 17 requirements; Art. 18 decline grounds |
| Data holder × Ch V × decline or modify | `ch5-decline-or-modify.md` | 5/30 working-day window |
| Cross-border × Ch V × Art. 22 cooperation | `ch5-cross-border-cooperation.md` | Mutual assistance procedure |
| Customer × Ch VI × switching contract review | `ch6-customer-contract-review.md` | Art. 25 mandatory terms |
| Provider × Ch VI × Art. 25 compliance check | `ch6-provider-compliance.md` | Notice/transition/retrieval periods |
| Customer × Ch VI × switching execution | `ch6-switching-execution.md` | Functional equivalence (IaaS); open interfaces (PaaS/SaaS) |
| Provider × Ch VI × charge reduction/abolition | `ch6-charges.md` | 12 January 2027 abolition; in-parallel use exception |
| Provider × Ch VI × custom-built carve-out assessment | `ch6-custom-built-carve-out.md` | Art. 31 narrow reading |
| Provider × Ch VII × third-country request | `ch7-third-country-request.md` | Art. 32(3) cumulative limbs; national body consultation |
| Any × cross-chapter × gap analysis | `cross-gap-analysis.md` | Multi-chapter compliance review |
| Any × cross-chapter × GDPR-DA boundary | `cross-gdpr-boundary.md` | Personal vs non-personal allocation; Case A/B |
| Any × Digital Omnibus impact | `cross-omnibus-impact.md` | Provisions affected by COM(2025) 833 final |

Where the prompt does not map cleanly to a scenario card, the skill applies the seven-step method directly from `references/method/analysis-method.md`. Scenario cards are accelerators, not gatekeepers.

## Entry-point UX

The skill infers the anchor from the user's prompt. It asks clarifying questions only for unresolved fields that change the analysis.

**Inferable from typical prompts:**
- Chapter (from the topic: "switching" → Ch VI; "third-party data sharing" → Ch II; "exceptional need request" → Ch V)
- Stage (from the verb: "drafting" → drafting; "reviewing" → review; "responding to" → response)
- Some roles (from named entities or context: "our cloud provider", "as data holder", "the user requests")

**Typically requires asking:**
- Role of the user (is this from the data holder side, the user side, the data recipient side?)
- Personal data scope (does the matter involve personal data? whose?)
- Trade-secret claims (has the data holder claimed any of the data is a trade secret?)
- Temporal scope (when was the contract concluded? when was the product placed on the market?)
- Sectoral context (regulated sector? if so, which?)
- SME or large enterprise status of the relevant party

The skill follows the asking-vs-proceeding rules in `references/method/analysis-method.md`. One question at a time, not checklists. Where assumptions can carry the analysis through both branches, the skill states the assumption and proceeds.

## Output discipline

Every Data Act output produced by this skill must:

1. Lead with the answer. No preamble, no restating the prompt, no apologising for complexity.
2. Make role mapping explicit. Show which Data Act role and which GDPR role each entity plays, by phase.
3. Cite verbatim from the source files. `Art. N(M)` notation, `Recital N`, `FAQ Q[N]` framed as Commission interpretation.
4. Apply limbs one at a time when the test has multiple limbs.
5. Run the relevant gates and state the result in the output, not in a footnote.
6. State temporal applicability when the answer depends on it.
7. Flag the Digital Omnibus where COM(2025) 833 final affects the provisions used.
8. State assumptions where any fact was assumed rather than provided.
9. Lint the output before delivery. Run `python3 scripts/check_house_style.py <path-to-output>` against any generated memo, letter, or drafting input and fix every finding. The default invocation scans the skill's own source files (clean by construction); the path argument is required to lint a generated deliverable. The linter catches em dashes, banned connectors, preambles, and marketing language anywhere in the file — including inside `**bold markdown headers**`, which is the most common drift pattern.

The style is practitioner. No em dashes. No "Furthermore" / "Moreover" / "It should be noted". No CYA padding. The user is the lawyer; the skill produces work the user adopts with minimal edit. See `references/method/house-style.md`.

## When to refuse

The skill refuses the requested output, with explanation, when:

- The request is to draft a stage-3 trade-secret refusal under Art. 4(8) or Art. 5(11) on trade-secret status alone, without the additional showing of highly likely serious AND irreparable economic damage. The skill explains the conjunction requirement and asks for the additional facts.
- The request is to opine on a sectoral question (vehicles, medical devices, DORA, NIS2, CRA, AI Act, eIDAS, energy) without engaging the sectoral overlay. The skill runs the horizontal analysis with the sectoral gate flagged, then redirects sectoral specifics to specialist counsel.
- The request is to interpret a Member State implementing law that has not been notified to the Commission or that the skill cannot verify. The skill provides the horizontal Data Act analysis and flags the gap.
- The request is to predict the outcome of a CJEU reference or national court case. The skill analyses and assesses; it does not adjudicate.

Refusal is not "I can't help." Refusal is "the analysis as posed would be wrong; here is what to do instead."

## Current-law vs proposal discipline

The Commission tabled the Digital Omnibus regulation proposal (COM(2025) 833 final) on 19 November 2025. The proposal includes consequential amendments to the Data Act, particularly to Arts. 4(8), 5(11), 15, 25, 31, and the consolidation of Regulation (EU) 2022/868 (DGA), Directive (EU) 2019/1024 (Open Data Directive), Regulation (EU) 2018/1807 (Free Flow of Non-Personal Data Regulation), and Regulation (EU) 2019/1150 (Platform-to-Business Regulation) into the Data Act. As of the skill's source date (15 May 2026), the proposal is in co-legislator negotiation and has not been adopted.

Every output that touches an affected provision must state the current law first, then flag the proposal second, with status (co-legislator negotiation, not adopted). The Digital Omnibus tracker at `sources/digital-omnibus-amendments-tracker.md` is the reference list.

## Source freshness

Re-check before any major deliverable:

- The Commission's competent authority register (Art. 37(7)) for Member State designations.
- The Commission's dispute settlement body list (Art. 10(6)).
- The Digital Omnibus legislative status.
- The MCTs and SCCs Recommendation page for any updates.
- The Vehicle Data Guidance page for any updates.
- Designated DMA gatekeepers list for current designations.

The skill does not maintain these as static lists. Source-of-truth is the Commission's public register at the time of the deliverable.

## Validator

The source layer is validated by `scripts/validate_sources.py`. Run before any release:

```
python3 scripts/validate_sources.py --verbose
```

The validator checks heading taxonomy (119 recitals, 50 articles, 84 FAQ questions), pointer file presence, manifest checksums, and `_versions.json` structure. Exit code 0 means all checks pass.

## More EU regulation skills

This skill works standalone. Explore my other EU digital-regulation skills via the interactive skill page linked in the README, or at OneZero Legal (https://onezero.legal).
