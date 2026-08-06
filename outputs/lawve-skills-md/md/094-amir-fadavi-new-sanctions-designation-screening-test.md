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
views: 93
downloads: 30
created_at: "2026-05-07T13:16:23.013989+02:00"
updated_at: "2026-05-13T17:39:11.164867+02:00"
source_index: 94
---

# 新制裁指定筛选测试

原始名称：`new-sanctions-designation-screening-test`  
作者：Amir Fadavi  
分类：compliance  
来源：https://lawve.ai/@amir-fadavi/skill/new-sanctions-designation-screening-test

## 中文 README

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

## Original README

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
