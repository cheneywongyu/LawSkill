---
id: "4b7711be-0e22-59cc-8bcb-a0de0b85af20"
title: "new-sanctions-designation-screening-test"
title_cn: "新制裁指定筛选测试"
slug: "new-sanctions-designation-screening-test"
url: "https://lawve.ai/@amir-fadavi/skill/new-sanctions-designation-screening-test"
author: "Amir Fadavi"
author_slug: "amir-fadavi"
category: "compliance"
language: "en"
license: "MIT"
jurisdictions: "US, UK, EU"
status: "active"
source_index: 94
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 新制裁指定筛选测试

原始名称：`new-sanctions-designation-screening-test`  
作者：Amir Fadavi  
分类：compliance  
来源：https://lawve.ai/@amir-fadavi/skill/new-sanctions-designation-screening-test  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

# 新指定筛选测试

克劳德的一项技能，可以将 OFAC、OFSI 和欧盟的每一轮新制裁指定转变为供分析师审查的筛选测试集——原始名称、故意的变化以及分析师解释命中和未命中所需的元数据。

## 它的作用

当被调用时，该技能：

1. 在选定的回溯窗口（默认值：过去 7 天）内从 OFAC 的近期行动、OFSI 综合名单/通知以及 EU CFSP 综合名单中提取新指定的名称。
2. 为每个名称生成 6-8 个故意变体，每个变体都标有它所探测的**失败模式**：换位、首字母缩写、空格/标点符号、变音符号剥离、音译漂移、脚本替换、常见拼写错误、敬语、截断。
3. 用**预期匹配强度**（“精确”/“强”/“中等”/“弱”）标记每一行，以便将生成的命中/未命中模式读取为有关筛选工具的诊断信息，而不仅仅是通过/失败。
4. 输出单页“.xlsx”，合规团队可以将其加载到其筛选引擎中进行测试。

## 这是给谁的

制裁和金融犯罪合规团队需要：

- 在指定更新后验证他们的筛选列表是最新的。
- 针对他们的筛选工具运行回归测试集。
- 根据实际名称变化而不是合成噪声来校准模糊匹配阈值。

## 如何使用

将技能添加到 Claude（将此文件夹放在您的技能目录下），然后向 Claude 询问如下内容：

- “生成本周制裁名单更新测试数据。”
- “根据最新的 OFAC 和 OFSI 添加内容为我构建一个筛选回归集。”
- “测试我的筛选列表 - 它是否符合过去 14 天的新欧盟指定？”

## 输出格式

单页“.xlsx”，每个测试条目一行。栏目：
| # | Column | Description |
|---|---|---|
| 1 | `original_name` | Primary name as listed by the regulator |
| 2 | `variation` | The actual test string to feed into screening |
| 3 | `variation_type` | `exact`, `transposition`, `transliteration`, etc. |
| 4 | `expected_match_strength` | `exact` / `strong` / `moderate` / `weak` |
| 5 | `entity_type` | Individual / Entity / Vessel / Aircraft |
| 6 | `source_list` | OFAC SDN / OFAC Non-SDN / OFSI / EU CFSP |
| 7 | `program` | Sanctions program / authority |
| 8 | `designation_date` | YYYY-MM-DD |
| 9 | `aliases_aka` | Semicolon-separated AKAs |
| 10 | `dob_or_incorporation` | DOB or incorporation date |
| 11 | `pob_or_place_of_incorporation` | Place of birth or incorporation |
| 12 | `nationality_or_jurisdiction` | Nationality or jurisdiction |
| 13 | `address` | Listed address(es) |
| 14 | `identifiers` | Pipe-separated IDs (passport, national ID, tax ID, IMO, tail number) |
| 15 | `regulator_url` | Direct link to the listing or notice |
请参阅 [`examples/sample_output.xlsx`](./examples/sample_output.xlsx)，了解具有三个说明性名称（一名伊朗个人、一名俄罗斯实体、一艘船只）的工作示例。

## 变异分类法

该技能探讨了筛查系统中十种常见的故障模式：

1. **换位**——词序变化（“Lee John”来自“John Lee”）
2. **缩写/缩写** — `J.李，“约翰·L.”
3. **空格和标点符号** — 连字符折叠或添加、双倍空格、缺失空格
4. **变音符号和特殊字符剥离** — `José` → `Jose`
5. **音译漂移** — `Mohammad` / `Muhammad` / `Mohammed` / `Mohamed`
6. **脚本替换** — 以阿拉伯语、西里尔语、中文、波斯语或希伯来语呈现的名称
7. **常见拼写错误/拼写错误** — 单字符替换、相邻键换位
8. **荣誉和头衔** — Sheikh、Dr.、Hajji、Sayyid、Mullah
9. **截断** — 删除中间名、后缀或多个名字之一
10. **跨监管机构变体** — OFAC / OFSI / EU / UN 对同一个人的拼写不同（例如，DAGALO 与 DAGLO）

请参阅 [SKILL.md](./SKILL.md) 了解包含示例和标记规则的完整分类法。

## 限制

- 输出反映了监管机构在运行时在源页面上发布的内容。周末节假日、系统中断或迟到的“新增功能”PDF 将反映为间隙。
- 变异的生成是启发式的。该技能根据名称起源和结构选择模式，这是一种判断——将输出与制裁分析师的审查配对，然后再将其视为详尽无遗。
- v1 涵盖 OFAC、OFSI 和 EU。联合国、加拿大 (SEMA)、澳大利亚 (DFAT/综合清单)、瑞士 (SECO) 和日本不在范围内。
- **默认范围：仅限个人和实体。** 默认情况下排除船舶和飞机，因为大多数金融交易筛查不会显示船舶或飞机名称。船舶/飞机测试数据与贸易融资、船舶/飞机融资、海运和航空保险、航运和物流公司以及港口运营商相关——明确要求为这些实体类型生成单独的数据集。
- 匹配强度标签反映名称匹配算法的一般行为，而不是任何特定供应商（LexisNexis、Dow Jones、Refinitiv World-Check、ComplyAdvantage 等）。根据您自己的引擎的分数分布进行校准。

## 许可证

麻省理工学院 — 请参阅[许可证](./许可证)。

## 免责声明
该工具仅用于测试、研究和教育目的。它不是制裁筛查系统，不构成法律、监管或合规建议，也不能替代独立的制裁合规计划或合格合规专业人士的判断。输出是启发式的，可能包含错误、遗漏或不准确，包括变化生成和预期匹配强度标签。用户全权负责自己的监管义务，并在依赖任何输出进行任何合规、业务或运营决策之前独立验证任何输出。不保证或暗示准确性、完整性、特定用途的适用性或监管充分性。 Sanctrust 和贡献者在法律允许的最大范围内不承担因使用此工具而产生的所有责任。

## 作者

由 **Sanctrust** ([sanctrust.com](https://sanctrust.com)) 构建和维护。

欢迎提出问题和请求。

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

# new-designation-screening-test

A Claude skill that turns each fresh round of OFAC, OFSI, and EU sanctions designations into a screening test set for analyst review — original names, deliberate variations, and the metadata an analyst needs to interpret hits and misses.

## What it does

When invoked, the skill:

1. Pulls newly designated names from OFAC's Recent Actions, the OFSI consolidated list / notices, and the EU CFSP consolidated list over a chosen lookback window (default: trailing 7 days).
2. Generates 6–8 deliberate variations of each name, each tagged with the **failure mode** it probes: transposition, initials, spacing/punctuation, diacritic stripping, transliteration drift, script substitution, common misspellings, honorifics, truncation.
3. Tags every row with an **expected match strength** (`exact` / `strong` / `moderate` / `weak`) so the resulting hit/miss pattern reads as diagnostic information about the screening tool, not just a pass/fail.
4. Outputs a single-sheet `.xlsx` the compliance team can load into their screening engine for testing.

## Who it's for

Sanctions and financial-crime compliance teams who need to:

- Verify their screening list is current after a designation update.
- Run a regression test set against their screening tool.
- Calibrate fuzzy-match thresholds against realistic name variations rather than synthetic noise.

## How to use

Add the skill to Claude (place this folder under your skills directory), then ask Claude something like:

- "Generate sanctions list update test data for this week."
- "Build me a screening regression set from the latest OFAC and OFSI additions."
- "Test my screening list — has it caught the new EU designations from the last 14 days?"

## Output format

A single-sheet `.xlsx` with one row per test entry. Columns:

| # | Column | Description |
|---|---|---|
| 1 | `original_name` | Primary name as listed by the regulator |
| 2 | `variation` | The actual test string to feed into screening |
| 3 | `variation_type` | `exact`, `transposition`, `transliteration`, etc. |
| 4 | `expected_match_strength` | `exact` / `strong` / `moderate` / `weak` |
| 5 | `entity_type` | Individual / Entity / Vessel / Aircraft |
| 6 | `source_list` | OFAC SDN / OFAC Non-SDN / OFSI / EU CFSP |
| 7 | `program` | Sanctions program / authority |
| 8 | `designation_date` | YYYY-MM-DD |
| 9 | `aliases_aka` | Semicolon-separated AKAs |
| 10 | `dob_or_incorporation` | DOB or incorporation date |
| 11 | `pob_or_place_of_incorporation` | Place of birth or incorporation |
| 12 | `nationality_or_jurisdiction` | Nationality or jurisdiction |
| 13 | `address` | Listed address(es) |
| 14 | `identifiers` | Pipe-separated IDs (passport, national ID, tax ID, IMO, tail number) |
| 15 | `regulator_url` | Direct link to the listing or notice |

See [`examples/sample_output.xlsx`](./examples/sample_output.xlsx) for a worked example with three illustrative designations (one Iranian individual, one Russian entity, one vessel).

## Variation taxonomy

The skill probes ten common failure modes in screening systems:

1. **Transposition** — word-order changes (`Lee John` from `John Lee`)
2. **Initials / abbreviation** — `J. Lee`, `John L.`
3. **Spacing & punctuation** — hyphens collapsed or added, doubled spaces, missing spaces
4. **Diacritic & special-character stripping** — `José` → `Jose`
5. **Transliteration drift** — `Mohammad` / `Muhammad` / `Mohammed` / `Mohamed`
6. **Script substitution** — name rendered in Arabic, Cyrillic, Chinese, Persian, or Hebrew
7. **Common misspellings / typos** — single-character substitutions, adjacent-key transpositions
8. **Honorifics & titles** — Sheikh, Dr., Hajji, Sayyid, Mullah
9. **Truncation** — dropping middle names, suffixes, or one of multiple given names
10. **Cross-regulator variant** — same person spelled differently by OFAC / OFSI / EU / UN (e.g., DAGALO vs DAGLO)

See [SKILL.md](./SKILL.md) for the full taxonomy with examples and tagging rules.

## Limitations

- Output reflects what the regulator had published on the source pages at run time. Holiday weekends, system outages, or late "What's New" PDFs will be reflected as gaps.
- Variation generation is heuristic. The skill picks modes based on name origin and structure, which is a judgment call — pair the output with a sanctions analyst's review before treating it as exhaustive.
- v1 covers OFAC, OFSI, and EU. UN, Canada (SEMA), Australia (DFAT/Consolidated List), Switzerland (SECO), and Japan are out of scope.
- **Default scope: individuals and entities only.** Vessels and aircraft are excluded by default since most financial-transaction screening doesn't surface ship or aircraft names. Vessel/aircraft test data is relevant for trade finance, ship/aircraft financing, marine and aviation insurance, shipping and logistics firms, and port operators — request explicitly to generate a separate set for those entity types.
- Match-strength tags reflect general behavior of name-matching algorithms, not any specific vendor (LexisNexis, Dow Jones, Refinitiv World-Check, ComplyAdvantage, etc.). Calibrate against your own engine's score distribution.

## License

MIT — see [LICENSE](./LICENSE).

## Disclaimer

This tool is provided for testing, research, and educational purposes only. It is not a sanctions screening system, does not constitute legal, regulatory, or compliance advice, and is not a substitute for an independent sanctions compliance program or the judgment of a qualified compliance professional. Outputs are heuristic and may contain errors, omissions, or inaccuracies, including in the variation generation and expected match strength tags. Users are solely responsible for their own regulatory obligations and for independently validating any output before relying on it for any compliance, business, or operational decision. No warranty of accuracy, completeness, fitness for a particular purpose, or regulatory sufficiency is made or implied. Sanctrust and the contributors disclaim all liability arising from use of this tool to the fullest extent permitted by law.

## Author

Built and maintained by **Sanctrust** ([sanctrust.com](https://sanctrust.com)).

Issues and pull requests welcome.

---

## SKILL.md Original

---
name: new-designation-screening-test
description: "Generate a spreadsheet of test entries — newly designated names from OFAC, OFSI, and EU sanctions lists plus deliberate variations of those names — to validate that a sanctions screening system catches fresh designations and is tuned to the right fuzziness threshold. Use this whenever the user asks for sanctions list update test data, screening regression test data, screening QA, fuzzy match calibration, or wants to verify their screening lists are current. Trigger even if the user doesn't say 'screening' explicitly — phrases like 'test my sanctions list', 'check our SDN coverage', 'is my list up to date', or 'build me a regression set from the latest designations' should also invoke this skill."
metadata:
  author: "Amir Fadavi"
  license: "mit"
  version: "2026-05-07"
---

# New Designation Screening Test Generator

This skill produces a spreadsheet that compliance teams can run through their sanctions screening system to verify two things at once:

1. **Coverage** — the screening list is current (catches names added in the most recent designations).
2. **Fuzzy tuning** — the screening engine is tuned to catch realistic name variations (transliterations, transpositions, alphabet swaps), not just exact strings.

Each row in the output is a single test entry: a designated name or a deliberate variation of one, plus the metadata an analyst needs to interpret a hit (or a miss).

## When to run

Run when the user asks for:
- New designation test data / screening regression set
- Validation that their sanctions list is up to date
- A fuzzy-match calibration test set
- Anything matching "test my screening" or "check our [SDN/OFSI/EU] coverage"

If the user doesn't specify a lookback window, default to the trailing 7 days. If they say "since last run" and provide a prior date, use that.

## Workflow

### Step 1 — Pull recent designations from the Big 3

| Regulator | Source | What to capture |
|---|---|---|
| OFAC | `https://ofac.treasury.gov/recent-actions` | Additions to the SDN List or sectoral/Non-SDN lists. Exclude amendments, removals, FAQ updates, and republished general licenses. |
| OFSI | `https://www.gov.uk/government/publications/the-uk-sanctions-list` plus the matching OFSI notice PDF (see sub-procedure below) | Entries marked **"Added"** only — exclude **"Amended"** and **"Removed"**. |
| EU | Two sources used together: (1) `https://data.europa.eu/apps/eusanctionstracker/` — the EU Sanctions Tracker; the middle of the page lists the most recently designated individuals and entities, used to identify in-window additions. (2) The relevant Council Implementing Regulation in the *Official Journal* (e.g., Regulation (EU) 2026/509 for the 20th Russia package), accessed via EUR-Lex — the canonical legal source for identifiers, addresses, designation reasoning, and listing references. | New entries on the consolidated CFSP financial sanctions list. |

#### OFSI sub-procedure

The UK Sanctions List page tells you the list changed and on what date. The designee detail you need (identifiers, designation reasoning, regulator-published name variations) lives in the matching OFSI notice PDF, published as a separate document.

**Always expand the full change log.** The "Updates to this page" section on `https://www.gov.uk/government/publications/the-uk-sanctions-list` is collapsed by default. The visible portion is partial; in-window entries can sit below the fold. Click **"show all updates"** (or expand the `#full-publication-update-history` anchor) every time, before reading the log.

Workflow:

1. Open `https://www.gov.uk/government/publications/the-uk-sanctions-list#full-publication-update-history` and expand "show all updates" so every entry is visible.
2. Read every entry within the lookback window. Identify those that list **"Added"** — exclude entries that are only variations, administrative amendments, corrections, or revocations. Note the date and the sanctions program(s) named.
3. For each program with additions, web-search `OFSI notice [program name] [day] [month] [year]` (e.g., `OFSI notice Sudan 29 April 2026`) and locate the matching PDF. The URL begins with `https://assets.publishing.service.gov.uk/media/...` followed by the notice name.
4. Confirm the PDF's publication date matches the change-log entry. If multiple notices for the program exist, only the one tied to the in-window date is the right source.
5. Parse the notice. The PDF itself states whether each entry is an **Addition**, **Variation**, or **Removal**. **Pull only entries under "Additions".** For each addition capture: primary name, unique ID, regime name, sanctions imposed, DOB, town/country of birth, all nationalities, all passports, national ID(s), address, position, designation source (UK / UN), date designated, and any UN reference number (e.g., SDi.011).
6. If the UK is implementing a UN Security Council listing, note the UN reference number in the `identifiers` column and check whether OFAC has the same individual — divergent transliterations across regulators produce useful test rows (see `cross_regulator_variant` in the taxonomy).

For each new entry across all three regulators, capture:
- Primary name as listed
- All AKAs / aliases the regulator publishes
- Entity type (individual, entity, vessel, aircraft)
- Sanctions program / authority
- Designation date
- Identifiers: DOB, POB, nationality/jurisdiction, address, passport / national ID / tax ID / IMO number / aircraft tail number
- Source URL (link directly to the listing or notice page, not just the homepage)

#### Default scope: individuals and entities only

By default, **exclude vessels and aircraft** from the test set. Most sanctions screening in financial transactions runs against payment narratives, beneficiary names, and counterparty entities — not ship registries or aircraft tail numbers. A general-purpose screening test seeded with vessel and aircraft names produces noise more than signal for typical compliance teams (banks, fintechs, professional services firms).

Vessel and aircraft screening *does* matter for:
- Trade finance and letter-of-credit operations
- Ship and aircraft financing
- Marine and aviation insurance
- Shipping, freight forwarding, and logistics companies
- Port operators and bunker / fueling services

If the user specifically requests vessel or aircraft test data, generate a **separate spreadsheet** for those entity types using the same column schema — don't fold them into the default output. Filename suggestion: `screening-test-vessels-YYYY-MM-DD.xlsx` or `screening-test-aircraft-YYYY-MM-DD.xlsx`.

In the response that delivers the default output, briefly note that vessels/aircraft were excluded and that a separate set is available on request.

#### Volume control

Apply this rule to each individual regulatory action separately (a single OFAC Recent Action page, a single OFSI notice, a single EU Council Implementing Regulation), **after removing vessels and aircraft from the population** unless the user requested them. Apply per-action, not to the combined cross-regulator total.

- **5 or fewer additions in the action** → take all of them.
- **More than 5 additions** → sample **5 random entries plus 10% of the total** (round up). E.g., a 120-designee EU package → 5 + ⌈12⌉ = 17 entries; a 30-designee OFAC action → 5 + 3 = 8 entries.

When sampling, stratify the random pick across `entity_type` (individuals vs entities) and program where possible, so the sample isn't accidentally one-sided. State in the response which entries were selected, the total post-exclusion population, and that the rest are available on request.

### Step 2 — Generate 6–8 variations per name, categorized by failure mode

Each variation must be tagged with the failure mode it tests, so the analyst can read the resulting hit/miss pattern as diagnostic information about their screening tool. Pick 6–8 modes per name from the taxonomy below, biased toward the modes most relevant to that name's origin and structure (e.g., transliteration and script substitution are critical for Arabic/Persian/Russian/Chinese names; legal-form variants matter most for entities).

#### Variation taxonomy

| # | Mode | What it tests | Example: "Mohammad Reza Hosseini" |
|---|---|---|---|
| 1 | **Transposition** | Word-order handling | "Hosseini Mohammad Reza"; "Hosseini, Mohammad Reza" |
| 2 | **Initials / abbreviation** | Partial-string matching | "M. R. Hosseini"; "Mohammad R. Hosseini" |
| 3 | **Spacing & punctuation** | Tokenization edge cases | "Mohammad-Reza Hosseini"; "MohammadReza Hosseini"; "Mohammad  Reza Hosseini" (double space) |
| 4 | **Diacritic & special-character stripping** | Unicode normalization | "Hosseini" → "Hoseyni"; "José" → "Jose"; "Ḥusayn" → "Husayn" |
| 5 | **Transliteration drift** | Phonetic spelling variants — critical for Arabic, Persian, Russian, Chinese names | "Mohammad" → "Muhammad" / "Mohammed" / "Mohamed" / "Muhamad" |
| 6 | **Script substitution** | Non-Latin script handling — render the name in its native script (Arabic, Cyrillic, Chinese, Persian, Hebrew) | "محمد رضا حسینی" |
| 7 | **Common misspelling / typo** | Single-character errors and adjacent-key transpositions | "Hossieni"; "Mohammed Rezza" |
| 8 | **Honorific & title handling** | Prefix noise — Sheikh, Dr., Hajji, Sayyid, Mr., Mullah | "Sheikh Mohammad Reza Hosseini" |
| 9 | **Truncation** | Dropping middle names, suffixes, or one of multiple given names | "Mohammad Hosseini" (drops "Reza") |
| 10 | **Cross-regulator variant** | Same person rendered differently by OFAC / OFSI / EU / UN. When the listed person appears on multiple lists with divergent spellings, each spelling is a separate test row tagged `cross_regulator_variant` with `strong` strength. This is critical for firms screening against multiple lists with one fuzzy threshold. | OFSI "DAGALO" vs OFAC "DAGLO" for the same family |

For **entities**, swap relevant modes for legal-form variants ("LLC" / "L.L.C." / "Ltd" / "Limited" / "Co." / "Company"), Latin/native-script swap, abbreviation of long names, and common ownership-prefix changes ("OAO" / "OOO" / "PJSC" for Russian entities; "JSC" / "Public Joint Stock Company"; etc.).

For **vessels**, vary spacing around "M/V", "M.V.", or "MV"; test the IMO number with and without the "IMO" prefix and with/without spaces; include the previous name if the regulator lists one.

For **aircraft**, vary tail number formatting (with/without dashes; with/without leading country code).

### Step 3 — Tag each variation with an expected match strength

So the analyst knows what their screening tool *should* be doing:

- **exact** — the variation is identical to a string the regulator publishes (the primary name or a listed AKA). A correctly-loaded screening list must catch this. Failure here means the list is stale or not loaded.
- **strong** — close edit distance (1–2 character changes, casing, spacing, diacritics). Should be caught at typical fuzzy thresholds (~85%+).
- **moderate** — transliteration variants, honorific noise, transposition. Should be caught at moderate thresholds (~70–85%).
- **weak** — script substitution, heavy truncation, multi-mode combinations. Tests the upper end of fuzziness or the screening tool's transliteration / non-Latin support.

### Step 4 — Build the spreadsheet

Use the `xlsx` skill to produce a single-sheet workbook. One row per test entry: each original name produces one `exact` row plus 6–8 variation rows, so a typical run with 5 new designees yields 35–45 rows.

Columns, in this order:

| # | Column | Notes |
|---|---|---|
| 1 | `original_name` | Primary name as listed by the regulator |
| 2 | `variation` | The actual test string to feed into screening |
| 3 | `variation_type` | From the taxonomy (`exact`, `transposition`, `transliteration`, etc.) |
| 4 | `expected_match_strength` | `exact` / `strong` / `moderate` / `weak` |
| 5 | `entity_type` | `Individual` / `Entity` / `Vessel` / `Aircraft` |
| 6 | `source_list` | `OFAC SDN` / `OFAC Non-SDN` / `OFSI` / `EU CFSP` |
| 7 | `program` | e.g., `RUSSIA-EO14024`, `SDGT`, `IRAN-HR`, `RUS` (UK), `2014/145/CFSP` (EU) |
| 8 | `designation_date` | YYYY-MM-DD |
| 9 | `aliases_aka` | Semicolon-separated AKAs as published |
| 10 | `dob_or_incorporation` | DOB for individuals; incorporation date for entities (when listed) |
| 11 | `pob_or_place_of_incorporation` | Place of birth (individuals) or place of incorporation (entities) |
| 12 | `nationality_or_jurisdiction` | Nationality or jurisdiction |
| 13 | `address` | Listed address(es), semicolon-separated |
| 14 | `identifiers` | Labeled and pipe-separated, e.g., `Passport: A12345 \| National ID: 1234567890 \| IMO: 9876543` |
| 15 | `regulator_url` | Link to the specific listing or notice page |

Filename: `screening-test-YYYY-MM-DD.xlsx` (use the date the skill is run).

Apply minimal formatting: bold header row, frozen top row, autosize columns. Do not add formulas — this file is a flat data set, not a model.

## Output checklist before delivering

- [ ] Every original name has 1 `exact` row plus 6–8 variation rows
- [ ] Every variation has a `variation_type` and `expected_match_strength`
- [ ] At least one script-substitution row per name when the name has a non-Latin origin
- [ ] Vessels and aircraft are excluded from the default output (or, if a separate set was requested, vessels include IMO and aircraft include tail number)
- [ ] `regulator_url` links to the specific listing or notice, not the regulator's homepage
- [ ] Header row is bold and frozen
- [ ] No empty rows, no merged cells
- [ ] Response notes the vessel/aircraft exclusion and offers a separate set

## Edge cases

- **Same person across multiple regulators with different spellings.** When OFAC, OFSI, and EU all designate the same person with slightly different spellings or DOBs, include each spelling as a separate row with its source list — that divergence *is* the test.
