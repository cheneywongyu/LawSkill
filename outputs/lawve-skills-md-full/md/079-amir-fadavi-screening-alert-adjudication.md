---
id: "588ec2a4-20a8-5bd4-b74e-04c2b75d9099"
title: "screening-alert-adjudication"
title_cn: "筛查-警报-裁决"
slug: "screening-alert-adjudication"
url: "https://lawve.ai/@amir-fadavi/skill/screening-alert-adjudication"
author: "Amir Fadavi"
author_slug: "amir-fadavi"
category: "compliance"
language: "en"
license: "MIT"
jurisdictions: "US, UK, EU"
status: "active"
source_index: 79
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 筛查-警报-裁决

原始名称：`screening-alert-adjudication`  
作者：Amir Fadavi  
分类：compliance  
来源：https://lawve.ai/@amir-fadavi/skill/screening-alert-adjudication  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

# 筛选警报裁决

一种确定性、标准驱动的技能，用于裁决针对制裁名单、PEP 名单、不良媒体来源和类似观察名单的筛选命中。旨在自动清除明显的误报并确认明显的真阳性，将真正模棱两可的案例留给人工审查，并提供完整的证据包。

使用 [Agent Skills]((https://agentskills.io/)) 开放标准构建为 [Claude Skill]((https://docs.claude.com/en/docs/claude-code/skills))。

## 这是做什么的

当筛选系统将某个名称标记为可能与监视列表匹配时，分析师通常必须确定该匹配是真实的（真阳性）、虚假的（假阳性）还是需要更多调查。这些警报中的很大一部分显然是错误的匹配——错误的实体类型、标识符上没有重叠的通用名称、忽略命名约定的部分名称匹配——但分析师无论如何都要花费大量时间来清除它们。

此技能将确定性决策树应用于每个警报并达到以下三个结果之一：

- **真阳性** — 筛选方是列出方
- **误报** — 筛选方不是列出方
- **升级**——证据不足以确定任何一种方式的结论；将完整的证据记录交给人类

## 设计属性

有两个属性是不可协商的：

1. **决定论。** 给出相同的证据，该技能得出相同的结论。该技能从来不会用“似乎是”/“可能是”的语言来权衡概率或对冲。规则要么触发，要么不触发。
2. **保守主义。** 升级是安全的默认设置。除非满足每一个先决条件，否则不会触发任何规则。升级一个明确的案件比错误地澄清一个模棱两可的案件要好。

每个裁决都会生成一个结构化的 JSON 记录和一个人类可读的叙述，两者都源自相同的底层状态。 JSON 用于系统摄取、QC 采样和跨案例查询。该叙述供分析师审查和案例档案使用。

## 它是如何组织的

裁决贯穿各个层级，每个层级都会增加代币支出。较早的层级会尽快退出。

- **第 0 层** — 解析和规范化。检测脚本、语言、命名约定；识别锚定名称与非锚定名称组成部分；库存标识符和别名。没有决心。
- **第 1 层** — 硬误报触发器（无法访问网络）：类型不匹配、姓名角色不匹配（例如，“Jose Andrea”与“Jose Andrea Coronado”匹配）、硬 DOB 矛盾。
- **第 2 层** — 结构化标识符验证（无网络访问）：政府 ID 匹配、完整身份三角测量、标识符不匹配。
- **第 3 层** — 有针对性的外部研究，采用四级语言阶梯（母语→母语拉丁语→英语区域→音译变体），按来源排名（仅主要/主要新闻来源推动确定），每个案例的检索次数上限为 8 页。

单独的参考文献涵盖了西班牙语、葡萄牙语、阿拉伯语、波斯语、俄语、东亚语、日语、印度尼西亚语/缅甸语和西方默认形式的命名约定。另一个涉及跨脚本的音译变体。第三部分涵盖历史地名对应（列宁格勒/圣彼得堡、孟买/孟买、波斯/伊朗等）。

## 存储库结构
```
screening-alert-adjudication/
├── SKILL.md                              # Orchestrator — read this first
├── references/
│   ├── tier-0-parsing.md                 # Name parsing, convention classification
│   ├── tier-1-rules.md                   # FP-1, FP-2, FP-3
│   ├── tier-2-rules.md                   # TP-1, TP-2, Escalate-2, FP-5, FP-6
│   ├── tier-3-research.md                # Web research procedure, TP-3, FP-7
│   ├── naming-conventions.md             # Anchor/non-anchor per convention
│   ├── transliteration-variants.md       # Cross-script variant patterns
│   ├── place-name-equivalences.md        # Historical city/country renamings
│   └── output-schema.md                  # JSON schema and narrative format
├── evals/
│   └── evals.json                        # Test cases covering main decision paths
├── LICENSE
└── README.md
```
## 安装

该技能采用[克劳德技能格式](https://docs.claude.com/en/docs/claude-code/skills)。使用方法：

1. 克隆或下载此存储库。
2. 将其打包为 `.skill` 文件（重命名的 zip）：`zip -r Screening-alert-adjumination.skill Screening-alert-adjumination/ -x "*/evals/*"`。
3. 通过 Claude 环境的技能安装流程上传，或将其放置在适合您的设置的技能目录中。

您还可以直接将技能内容与任何支持 Anthropic 风格技能的大模型一起使用，或将参考文件改编为分析师培训的独立文档。

## 超出范围（根据设计，在 v1 中）

- **部门所有权分析（OFAC 50% 规则及同等规则）。** 该技能标记所有权链匹配以供人工审核。
- **不良媒体行为评估。** 该技能确认媒体项目中的身份匹配，但不评估该行为是否具有相关风险。
- **PEP 风险分级。** 身份匹配是；风险处置编号
- **分数调整反馈。** 裁决记录可以在以后提供分数调整，但这是一个单独的分析。
- **深入研究船舶和飞机。** 处理类型不匹配的 FP； IMO 连锁店和名称更改但 IMO 相同的箱子则不然。

## 免责声明

该工具仅用于测试、研究和教育目的。它不是制裁筛查系统，不构成法律、监管或合规建议，也不能替代独立的制裁合规计划或合格合规专业人士的判断。输出是启发式的，可能包含错误、遗漏或不准确，包括名称解析、标识符比较和语言感知研究。用户全权负责自己的监管义务，并在依赖任何输出进行任何合规、业务或运营决策之前独立验证任何输出。不保证或暗示准确性、完整性、特定用途的适用性或监管充分性。 Sanctrust 和贡献者在法律允许的最大范围内不承担因使用此工具而产生的所有责任。

制裁和金融犯罪合规是受监管的活动。使用此技能并不构成法律建议，也不构成制裁合规计划。机构仍对其合规义务负全部责任。

## 作者

由 [Sanctrust](https://sanctrust.com) 创建，这是一家人工智能原生制裁和金融犯罪合规咨询公司。

## 许可证

[麻省理工学院]（许可证）

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

# Screening Alert Adjudication

A deterministic, criteria-driven skill for adjudicating screening hits against sanctions lists, PEP lists, adverse-media sources, and similar watchlists. Designed to auto-clear obvious false positives and confirm obvious true positives, leaving genuinely ambiguous cases for human review with a full evidence package.

Built as a [Claude Skill]((https://docs.claude.com/en/docs/claude-code/skills)) using the [Agent Skills]((https://agentskills.io/)) open standard.

## What this does

When a screening system flags a name as a possible match against a watchlist, an analyst typically has to decide whether the match is real (true positive), spurious (false positive), or needs more investigation. A large share of these alerts are obviously bad matches — wrong entity type, common names with no overlap on identifiers, partial-name matches that ignore naming conventions — but analysts spend significant time clearing them anyway.

This skill applies a deterministic decision tree to each alert and reaches one of three outcomes:

- **True positive** — the screened party is the listed party
- **False positive** — the screened party is not the listed party
- **Escalate** — evidence is insufficient to deterministically conclude either way; hand off to a human with the full evidence record

## Design properties

Two properties are non-negotiable:

1. **Determinism.** Given identical evidence, the skill reaches an identical conclusion. The skill never weighs probabilities or hedges with "appears to be" / "probably is" language. A rule either fires or it doesn't.
2. **Conservatism.** Escalation is the safe default. No rule fires unless every one of its preconditions is satisfied. Better to escalate a clear case than to wrongly clear an ambiguous one.

Every adjudication produces a structured JSON record and a human-readable narrative, both derived from the same underlying state. The JSON is for system ingestion, QC sampling, and cross-case querying. The narrative is for analyst review and case files.

## How it's organized

Adjudication runs through tiers, with each tier escalating token spend. Earlier tiers exit as soon as they can.

- **Tier 0** — Parse and normalize. Detects script, language, naming convention; identifies anchor vs. non-anchor name components; inventories identifiers and aliases. No determinations.
- **Tier 1** — Hard false-positive triggers (no web access): type mismatch, name-role mismatch (e.g., "Jose Andrea" matched against "Jose Andrea Coronado"), hard DOB contradiction.
- **Tier 2** — Structured identifier corroboration (no web access): government ID matches, full identity triangulation, identifier mismatches.
- **Tier 3** — Targeted external research with a four-rung language ladder (native-script → native-language Latin → English regional → transliteration variants), source-ranked (only primary/major-news sources drive determinations), capped at 8 page retrievals per case.

A separate reference covers naming conventions across Hispanic, Portuguese, Arabic, Persian, Russian, East Asian, Japanese, Indonesian/Burmese, and Western-default forms. Another covers transliteration variants across scripts. A third covers historical place-name equivalences (Leningrad/St. Petersburg, Bombay/Mumbai, Persia/Iran, etc.).

## Repository structure

```
screening-alert-adjudication/
├── SKILL.md                              # Orchestrator — read this first
├── references/
│   ├── tier-0-parsing.md                 # Name parsing, convention classification
│   ├── tier-1-rules.md                   # FP-1, FP-2, FP-3
│   ├── tier-2-rules.md                   # TP-1, TP-2, Escalate-2, FP-5, FP-6
│   ├── tier-3-research.md                # Web research procedure, TP-3, FP-7
│   ├── naming-conventions.md             # Anchor/non-anchor per convention
│   ├── transliteration-variants.md       # Cross-script variant patterns
│   ├── place-name-equivalences.md        # Historical city/country renamings
│   └── output-schema.md                  # JSON schema and narrative format
├── evals/
│   └── evals.json                        # Test cases covering main decision paths
├── LICENSE
└── README.md
```

## Installing

This skill is in [Claude Skills format](https://docs.claude.com/en/docs/claude-code/skills). To use it:

1. Clone or download this repository.
2. Package it into a `.skill` file (a renamed zip): `zip -r screening-alert-adjudication.skill screening-alert-adjudication/ -x "*/evals/*"`.
3. Upload via your Claude environment's skill installation flow, or place it in the appropriate skills directory for your setup.

You can also use the skill content directly with any LLM that supports Anthropic-style skills, or adapt the reference files as standalone documentation for analyst training.

## Out of scope (by design, in v1)

- **Sectoral ownership analysis (OFAC 50% rule and equivalents).** The skill flags ownership-chain matches for human review.
- **Adverse-media conduct assessment.** The skill confirms identity match in a media item but does not assess whether the conduct is relevant risk.
- **PEP risk grading.** Identity match yes; risk disposition no.
- **Score tuning feedback.** Adjudication records can feed score tuning later, but that's a separate analysis.
- **Vessel and aircraft deep-dives.** Type-mismatch FPs are handled; IMO chains and name-change-but-same-IMO cases are not.

## Disclaimer

This tool is provided for testing, research, and educational purposes only. It is not a sanctions screening system, does not constitute legal, regulatory, or compliance advice, and is not a substitute for an independent sanctions compliance program or the judgment of a qualified compliance professional. Outputs are heuristic and may contain errors, omissions, or inaccuracies, including in name parsing, identifier comparison, and language-aware research. Users are solely responsible for their own regulatory obligations and for independently validating any output before relying on it for any compliance, business, or operational decision. No warranty of accuracy, completeness, fitness for a particular purpose, or regulatory sufficiency is made or implied. Sanctrust and the contributors disclaim all liability arising from use of this tool to the fullest extent permitted by law.

Sanctions and financial-crime compliance are regulated activities. Use of this skill does not constitute legal advice and does not create a sanctions compliance program. Institutions remain fully responsible for their compliance obligations.

## Author

Built by [Sanctrust](https://sanctrust.com), an AI-native sanctions and financial-crime compliance advisory firm.

## License

[MIT](LICENSE)

---

## SKILL.md Original

---
name: "screening-alert-adjudication-amir-fadavi"
description: "Adjudicates whether a hit generated by sanctions, PEP, or adverse-media screening is a true positive, false positive, or requires human escalation. Use whenever a user presents a screening alert, a name match against a watchlist (OFAC SDN, EU consolidated list, UK OFSI, UN list, PEP list, adverse media hit, etc.), or asks to clear a screening hit / reduce false positives / determine whether a flagged name is actually the listed party. Use even when the user describes the task casually — \"is this person actually on the sanctions list\", \"did we get a real match\", \"clear this alert\", \"I have a hit on X\" — these are all screening-adjudication tasks. Produces a deterministic determination with full audit trail (structured JSON + human-readable narrative). Designed for use by compliance analysts and screening systems."
metadata:
  author: "Amir Fadavi"
  license: "mit"
  version: "2026-05-19"
---

# Screening Alert Adjudication

This skill adjudicates a single screening hit — a name that an upstream screening system flagged as a possible match against a sanctions list, PEP list, adverse-media source, or similar watchlist — and reaches one of three conclusions:

- **True positive (TP)** — the screened party is the listed party
- **False positive (FP)** — the screened party is not the listed party
- **Escalate** — evidence is insufficient to deterministically conclude either way; hand off to a human analyst with the full evidence record

## Why this skill exists

Screening systems generate enormous volumes of low-quality alerts. Analysts spend their time clearing alerts that should never have fired (wrong entity type, common name with no overlap on identifiers, partial-name matches that ignore naming convention). A deterministic, criteria-driven adjudication layer can clear the obvious false positives and confirm the obvious true positives, leaving humans to focus on the genuinely ambiguous cases.

The skill is designed around two non-negotiable properties:

1. **Determinism.** Given identical evidence, the skill reaches an identical conclusion. The skill never weighs probabilities, never says "this looks like" or "probably is." A rule either fires or it doesn't.
2. **Conservatism.** Escalation is the safe default. No rule fires unless every one of its preconditions is satisfied. Better to escalate a clear case than to wrongly clear an ambiguous one.

## How the work is organized

Adjudication runs through tiers. Each tier escalates token spend; earlier tiers exit as soon as they can.

- **Tier 0** — Parse and normalize both names; classify scripts, languages, naming conventions; extract anchor components, aliases, and identifiers. No determinations yet. See `references/tier-0-parsing.md`.
- **Tier 1** — Hard false-positive triggers using only what's in the alert. Cheap, no web access. Only FP rules fire here; TP is never reached at Tier 1. See `references/tier-1-rules.md`.
- **Tier 2** — Structured identifier corroboration using whatever's in the alert and list entry. Both TP and FP rules available. Still no web access. See `references/tier-2-rules.md`.
- **Tier 3** — Targeted external research using web search and fetching. Source-language aware, source-ranked, capped at 8 page retrievals per case. See `references/tier-3-research.md`.

If no determination is reached by the end of an applicable tier, the skill escalates with the full evidence record.

## What the skill needs to start

**Required from the user or upstream system:**
- The screened name (the name being checked — usually a customer, transaction party, beneficial owner, or similar)
- The matched name from the list entry

**Useful if provided, optional otherwise:**
- The name of the list (e.g., "OFAC SDN List", "EU Consolidated Financial Sanctions List", "UK OFSI Consolidated List", "Dow Jones PEP"). The skill doesn't branch on list name operationally — the matching question is the same across all lists — but the list name is captured in the audit record and informs the analyst's downstream disposition.
- Entity type on the screened side (individual / entity / vessel)
- Any secondary identifiers (DOB, POB, nationality, ID numbers, addresses)
- The upstream system's match score
- The list version or snapshot date (for audit binding)
- The mode (interactive vs. batch)

**Default to interactive mode when a human is at the keyboard.** In interactive mode, ask once for any of the following that aren't present and would materially help:
- Entity type on the screened side, if not inferable
- Any secondary identifiers the analyst has access to but didn't supply

In batch mode (system feed, no human present), proceed with whatever is provided. Don't ask. If essential context is missing and the rules can't conclude, the skill escalates — that's the correct outcome.

## Inferring entity type when not provided

Read the list entry first. Most watchlist entries carry an explicit type field (individual / entity / vessel / aircraft). Use that.

For the screened side: ask in interactive mode. In batch mode, attempt inference from the name structure but flag the inference as low-confidence. The type-mismatch FP rule (FP-1) requires high-confidence types on both sides — it never fires on inferred screened types.

## The core question the skill answers

Across every list type and every rule, the underlying question is the same: **is the screened name the same party as the listed party?** List type affects the consequences of the answer, not the question itself. The same matching engine applies whether the list is a sanctions list, a PEP list, or an adverse-media source.

That said, list type affects the threshold for action:

- For strict-liability lists (OFAC SDN, EU sanctions, UN sanctions): TP requires affirmative evidence, not just absence of contradiction. Default toward escalation when ambiguous.
- For adverse media: source recency and quality enter the assessment. A 12-year-old tabloid mention is not equivalent to a current Reuters report on a recent conviction. But the identity-matching question is unchanged.
- For PEP lists: the skill's job ends at identity match. Whether to maintain the relationship is a risk decision for the institution, not for this skill.

## Working with names across scripts and naming conventions

A screening hit often involves names from different cultures, scripts, and naming conventions. Standard fuzzy matchers handle this badly — they treat "Jose Andrea" as matching "Jose Andrea Coronado" by string overlap and ignore that Coronado is the anchor surname in Hispanic convention.

The skill parses both names into structural components first. Anchor components (the parts that genuinely identify the person) drive matching; non-anchor components are corroborating context. The naming-convention reference (`references/naming-conventions.md`) defines anchor and non-anchor components per convention: Hispanic, Portuguese, Arabic, Russian, East Asian, Indonesian/Burmese, Western default.

When the script is non-Latin or the name is a transliteration from a non-Latin source, the skill is aware that the same source-language name can produce multiple Latin spellings. See `references/transliteration-variants.md` for documented variant patterns. When Tier 3 web research runs, source-language queries are part of the search ladder.

## Output requirements

Every adjudication produces a single record in two views, generated together from the same underlying state:

1. **Structured JSON** — machine-readable, used for system ingestion, QC sampling, cross-case querying
2. **Human-readable narrative** — fixed-section, walks through each tier's reasoning in the form "Determined X based on Y, then Z"

The full schema and narrative format are in `references/output-schema.md`. Both must be produced on every adjudication, regardless of outcome.

The narrative never characterizes its own confidence beyond what the rules produced. There is no "this appears to be" or "likely false positive" language. A rule either fired or it didn't.

For escalations, the record includes a `gaps_for_human` field listing the specific information that would have allowed determination. The skill does not make a recommendation toward TP or FP on escalations — the evidence package is presented neutrally so the human draws their own conclusion.

## The adjudication procedure

Follow this sequence on every alert. Don't skip tiers and don't reorder them — the determinism guarantee depends on the order.

### Step 1: Read the alert
Capture every field from the input. Note what's missing. In interactive mode, ask once for material gaps.

### Step 2: Run Tier 0
Parse both names and the listed-entry context per `references/tier-0-parsing.md`. Produce the parse record. If parse confidence is low for either name, note it — this disables structural-mismatch FP rules in Tier 1 for that pair.

### Step 3: Run Tier 1
Evaluate each Tier 1 rule (FP-1, FP-2, FP-3) per `references/tier-1-rules.md`. If any rule fires, produce the FP determination and stop. If none fires, proceed.

### Step 4: Run Tier 2
Evaluate each Tier 2 rule (TP-1, TP-2, Escalate-2, FP-5, FP-6) per `references/tier-2-rules.md`. Log soft signals (gender, geography, partial-DOB mismatch where the hard rule didn't fire) but do not let them drive determinations. If a rule fires, produce the determination and stop. If none fires, evaluate whether Tier 3 has a realistic research path.

### Step 5: Decide whether to enter Tier 3
Per the gating in `references/tier-3-research.md`, Tier 3 runs only if at least one of these is true:
- A unique-enough identifier exists on at least one side to anchor a web query
- A specific verifiable claim in the list entry can be confirmed or contradicted via primary sources
- A transliteration ambiguity from Tier 0 is the only obstacle

If none of these holds, escalate without Tier 3. Don't burn tokens on research that can't conclude.

### Step 6: Run Tier 3 (if entered)
Work through the four-rung language ladder. Stop as soon as TP-3 or FP-7 fires, or when the 8-fetch retrieval cap is reached. Snapshot every retrieval that contributes to the determination.

### Step 7: Produce the output record
JSON + narrative, per `references/output-schema.md`. Include every tier's evaluation, every rule that was checked and whether it fired, every retrieval if Tier 3 ran, and the final classification.

## Common failure modes to watch for

- **Treating absence of contradiction as confirmation.** No matter how much circumstantial alignment exists, TP rules require affirmative evidence. Don't escalate to TP because nothing disproved it.
- **Over-trusting low-confidence parses.** If Tier 0 couldn't confidently parse a name's structure, the structural-mismatch FP rules don't apply to that pair. Skip them silently, don't force them.
- **Letting soft signals drive determinations.** Gender mismatch, geographic mismatch, partial-DOB mismatch — these are logged for the audit trail. They never independently produce TP or FP.
- **Skipping the language ladder.** When a name is Persian, Arabic, Chinese, Russian, or any other non-Latin-script origin, Latin-script-only search is almost always insufficient. Run Rung 1 in the source language.
- **Burning the retrieval cap on noise.** Cheap targeted queries first. If Rung 1 returns nothing of Rank A or B, move up the ladder rather than re-searching variants of the same poor query.

## A note on what this skill does not do

- **Sectoral ownership analysis (OFAC 50% rule and equivalents).** Out of scope. If the listed party is being matched on an ownership-chain basis, the skill flags it for human review.
- **Adverse-media conduct assessment.** The skill confirms whether the screened party is the party in the media item. It does not assess whether the conduct described is relevant risk for the institution.
- **PEP risk grading.** Same logic — identity match yes, risk disposition no.
- **Score tuning feedback to upstream screening.** Adjudication records can feed score tuning later, but that's a separate analysis built on aggregated records.

## Reference files

- `references/tier-0-parsing.md` — How to parse names and classify naming conventions
- `references/tier-1-rules.md` — Hard FP rules (FP-1, FP-2, FP-3)
- `references/tier-2-rules.md` — Structured corroboration rules (TP-1, TP-2, Escalate-2, FP-5, FP-6)
- `references/tier-3-research.md` — Web research procedure, language ladder, source ranking, TP-3, FP-7
- `references/naming-conventions.md` — Anchor and non-anchor components by naming convention
- `references/transliteration-variants.md` — Documented variant patterns for cross-script name handling
- `references/place-name-equivalences.md` — Cities and countries with multiple names (Leningrad/St. Petersburg, Bombay/Mumbai, Persia/Iran, etc.) for POB and address comparison
- `references/output-schema.md` — JSON schema and narrative format

Read the tier reference for the tier you're currently executing. Read the supporting references (naming conventions, transliteration variants) when Tier 0 or Tier 3 needs them. You don't need to read everything up front — the SKILL.md tells you which file to consult when.
