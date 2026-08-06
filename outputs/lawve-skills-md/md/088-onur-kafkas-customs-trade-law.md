---
id: "707ff704-dfc6-5530-8175-47bbb953b12b"
title: "Customs Trade Law"
title_cn: "海关贸易法"
slug: "customs-trade-law"
url: "https://lawve.ai/@onur-kafkas/skill/customs-trade-law"
author: "Onur Kafkas"
author_slug: "onur-kafkas"
category: "international-law"
language: "en"
license: "AGPL 3.0"
jurisdictions: "US"
status: "active"
views: 112
downloads: 27
created_at: "2026-05-14T19:12:24.227027+02:00"
updated_at: "2026-05-14T19:12:47.839499+02:00"
source_index: 88
---

# 海关贸易法

原始名称：`Customs Trade Law`  
作者：Onur Kafkas  
分类：international-law  
来源：https://lawve.ai/@onur-kafkas/skill/customs-trade-law

## 中文 README

# 海关贸易法

用于美国海关分类和贸易法研究的克劳德代码代理技能。

它有助于为 HTSUS 分类、CROSS 裁决研究、CIT/CAFC 决策简报、职责汇编、原产国分析、第 99 章筛选、AD/CVD 问题发现、PGA 审查和 UFLPA 强迫劳动检查准备可供律师审查的工作产品草案。

> 仅草案工作产品。不是法律建议。在用于进口交易之前，输出必须经过美国许可律师或许可报关行的审查。

＃＃ 安装
```text
/plugin marketplace add onurkafk/customs-trade-law
/plugin install customs-trade-law@onurkafk
```
安装后重新启动 Claude Code 或启动新会话。

替代本地安装：
```sh
git clone https://github.com/onurkafk/customs-trade-law.git ~/.claude/skills/customs-trade-law
```
## 使用

不需要斜杠命令。自然地问：
```text
Classify a Bluetooth keyboard from China.
Find CROSS rulings for ceramic mugs under heading 6912.
Calculate duty for HTS 8471.30.0100 from Taiwan.
Check whether Section 301 applies to this product.
Run an import compliance review for medical devices from Vietnam.
```
## 它处理什么

- 使用 GRI 1-6 和附加美国规则的 HTSUS 分类
- 总部/纽约权威权重的交叉裁决研究
- 从检索到的意见文本中进行 CIT 和 CAFC 决策分析
- 职责编译：一般、特殊、第99章、AD/CVD、MPF、HMF
- 原产国、标记、FTA 资格和 TAA 审查
- PGA 和 UFLPA 筛查进口合规风险

## 它是如何工作的

该技能强制执行美国海关当局等级制度：
```text
HTSUS legal text > CAFC > CIT > CBP HQ > CBP NY > agency guidance > secondary sources
```
它还要求：

- 在层次结构敏感分析之前通过 Data.gov 发现当前的 HTS JSON
- 来源标签：“已验证”、“已检索”、“已识别”、“未验证”
- 重大法律结论的证据分类账
- 针对缺失事实、冲突、陈旧来源和高风险模糊性的明确人工审查标记

核心操作规则位于 [`SKILL.md`](./SKILL.md) 中。可以在 [`examples/output.md`](./examples/output.md) 中找到一个有效的示例。

## 权限

该技能检索实时政府资源。将这些“WebFetch”权限添加到“~/.claude/settings.local.json”或您的项目设置中：
```json
{
  "permissions": {
    "allow": [
      "WebFetch(hts.usitc.gov/*)",
      "WebFetch(www.usitc.gov/*)",
      "WebFetch(catalog.data.gov/*)",
      "WebFetch(search.uscourts.gov/*)",
      "WebFetch(www.cit.uscourts.gov/*)",
      "WebFetch(law.justia.com/*)",
      "WebFetch(www.federalregister.gov/*)",
      "WebFetch(rulings.cbp.gov/*)",
      "WebFetch(ustr.gov/*)",
      "WebFetch(www.trade.gov/*)",
      "WebFetch(www.cbp.gov/*)"
    ]
  }
}
```
## 存储库
```text
customs-trade-law/
├── SKILL.md            # skill manifest and workflow router
├── references/         # methodology, doctrine, source maps, disclaimers
├── templates/          # output templates
├── scripts/            # HTS, CIT, and hierarchy helpers
├── examples/           # worked examples
├── evals/              # evaluation scenarios
├── CHANGELOG.md
└── LICENSE
```
## 版本

当前技能版本：`1.0.2`

请参阅 [`CHANGELOG.md`](./CHANGELOG.md) 了解发行说明。

## 许可证

AGPL-3.0。请参阅[`许可证`](./许可证)。

---

## Original README

# customs-trade-law

A Claude Code Agent Skill for U.S. customs classification and trade-law research.

It helps prepare attorney-reviewable draft work product for HTSUS classification, CROSS ruling research, CIT/CAFC decision briefing, duty compilation, country-of-origin analysis, Chapter 99 screening, AD/CVD issue spotting, PGA review, and UFLPA forced-labor checks.

> Draft work product only. Not legal advice. Outputs must be reviewed by a U.S.-licensed attorney or licensed customs broker before use in an import transaction.

## Install

```text
/plugin marketplace add onurkafk/customs-trade-law
/plugin install customs-trade-law@onurkafk
```

Restart Claude Code or start a new session after installing.

Alternative local install:

```sh
git clone https://github.com/onurkafk/customs-trade-law.git ~/.claude/skills/customs-trade-law
```

## Use

No slash command is required. Ask naturally:

```text
Classify a Bluetooth keyboard from China.
Find CROSS rulings for ceramic mugs under heading 6912.
Calculate duty for HTS 8471.30.0100 from Taiwan.
Check whether Section 301 applies to this product.
Run an import compliance review for medical devices from Vietnam.
```

## What It Handles

- HTSUS classification using GRI 1-6 and Additional U.S. Rules
- CROSS ruling research with HQ/NY authority weighting
- CIT and CAFC decision analysis from retrieved opinion text
- Duty compilation: General, Special, Chapter 99, AD/CVD, MPF, HMF
- Country of origin, marking, FTA qualification, and TAA review
- PGA and UFLPA screening for import compliance risk

## How It Works

The skill enforces a U.S. customs authority hierarchy:

```text
HTSUS legal text > CAFC > CIT > CBP HQ > CBP NY > agency guidance > secondary sources
```

It also requires:

- current HTS JSON discovery through Data.gov before hierarchy-sensitive analysis
- source labels: `Verified`, `Retrieved`, `Identified`, `Unverified`
- evidence ledgers for material legal conclusions
- explicit human-review flags for missing facts, conflicts, stale sources, and high-risk ambiguity

Core operating rules live in [`SKILL.md`](./SKILL.md). A worked example is available at [`examples/output.md`](./examples/output.md).

## Permissions

The skill retrieves live government sources. Add these `WebFetch` permissions to `~/.claude/settings.local.json` or your project settings:

```json
{
  "permissions": {
    "allow": [
      "WebFetch(hts.usitc.gov/*)",
      "WebFetch(www.usitc.gov/*)",
      "WebFetch(catalog.data.gov/*)",
      "WebFetch(search.uscourts.gov/*)",
      "WebFetch(www.cit.uscourts.gov/*)",
      "WebFetch(law.justia.com/*)",
      "WebFetch(www.federalregister.gov/*)",
      "WebFetch(rulings.cbp.gov/*)",
      "WebFetch(ustr.gov/*)",
      "WebFetch(www.trade.gov/*)",
      "WebFetch(www.cbp.gov/*)"
    ]
  }
}
```

## Repository

```text
customs-trade-law/
├── SKILL.md            # skill manifest and workflow router
├── references/         # methodology, doctrine, source maps, disclaimers
├── templates/          # output templates
├── scripts/            # HTS, CIT, and hierarchy helpers
├── examples/           # worked examples
├── evals/              # evaluation scenarios
├── CHANGELOG.md
└── LICENSE
```

## Version

Current skill version: `1.0.2`

See [`CHANGELOG.md`](./CHANGELOG.md) for release notes.

## License

AGPL-3.0. See [`LICENSE`](./LICENSE).
