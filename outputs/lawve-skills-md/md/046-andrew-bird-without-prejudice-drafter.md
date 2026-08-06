---
id: "0205fbbb-92e2-5310-b5a5-8b549fc91e81"
title: "without-prejudice-drafter"
title_cn: "不妨碍起草者"
slug: "without-prejudice-drafter"
url: "https://lawve.ai/@andrew-bird/skill/without-prejudice-drafter"
author: "Andrew Bird"
author_slug: "andrew-bird"
category: "litigation"
language: "en"
license: "MIT"
jurisdictions: "UK"
status: "active"
views: 35
downloads: 6
created_at: "2026-06-09T14:44:53.595529+02:00"
updated_at: "2026-06-11T08:54:52.129605+02:00"
source_index: 46
---

# 不妨碍起草者

原始名称：`without-prejudice-drafter`  
作者：Andrew Bird  
分类：litigation  
来源：https://lawve.ai/@andrew-bird/skill/without-prejudice-drafter

## 中文 README

# 无偏见起草者

在“正确”的立场上写下一份和解信，并在将其标记为“不偏见”时警告您，这实际上并不能阻止它出庭。

真正的和解信通常会受到保护，因此法官看不到它，但只有当该内容是真正的和解尝试时，该标签才有效，即使如此也有例外。该技能选择正确的基础（没有偏见，没有偏见，除了成本/考尔德班克，或开放），起草完成的信函，并提出联合利华诉宝洁公司的例外情况，尽管有标签，但仍获得 WP 材料的承认 - 普通模板不会警告您的陷阱。适合需要第一次就站稳脚跟的初级律师和内部法律顾问。

## 安装

[claude-for-uk-legal](https://github.com/b1rdmania/claude-for-uk-legal) 插件套件的一部分：
```bash
/plugin marketplace add https://github.com/b1rdmania/claude-for-uk-legal
/plugin install uk-litigation-legal@claude-for-uk-legal
```
或者直接安装单个技能：
```bash
cp -r without-prejudice-drafter ~/.claude/skills/without-prejudice-drafter
```
＃＃ 用法
```
/without-prejudice-drafter
/without-prejudice-drafter --type=wp
/without-prejudice-drafter --type=wpsatc
/without-prejudice-drafter --type=open
```
针对争议、要约条款以及谁提供什么内容的问题进行处理。它返回所选基础上完成的字母。
```
/without-prejudice-drafter --type=wpsatc
Draft a Calderbank offer in the Khan unfair-dismissal claim: our client
will pay £18,000 inclusive, open for 21 days, ET so no Part 36.
```
“--type”标志固定了基础——“wp”表示普通和解信，“wpsatc”表示 Calderbank/成本保护报价，“open”表示记录通信。省略它，该技能就会从请求中推断出基础，仅询问是否不明确。

## 它的作用

- 确定正确的立足点 - 开放、WP 或 WPSATC - 并针对具体情况提出正确的立足点。
- 应用匹配的标题约定并起草完成的信件，而不是模板。
- 在重要的一点上区分三个基础：什么是在审判中可接受的，什么是仅在费用方面可接受的。
- 提出联合利华诉宝洁公司的例外情况，其中尽管有标签，但仍承认可湿性粉剂材料——达成的协议、虚假陈述/欺诈、禁止反言、明确的不当行为、延误、成本和关税。
- 将公开内容和 WP 内容保留在单独的文档中，并标记任何可能存在例外情况的内容（承认、威胁、禁止反言信号）。

## 它不做什么

- 站稳脚跟。它提出了一个立足点；它不能保证立足点。无论哪种方式，错误标签都会产生真正的披露后果。
- 提供法律建议。输出结果是律师的草稿，而不是客户可以信赖的建议。律师或主理律师必须在发送信件之前确认立场。
- 当一封带有标签的信件的实质内容不是真正的和解尝试时，应赋予其特权。标签跟随物质。
- 在民事法庭提供第 36 部分费用保护——为此单独起草第 36 部分要约。
- 涵盖苏格兰标书或北爱尔兰同等标书。

## 要求

- 克劳德代码或克劳德合作。无需 MCP 连接器。
- 需要反对的事项——争议、要约条款和当事人。

## 许可证

阿帕奇-2.0。

---

## Original README

# without-prejudice-drafter

Writes a settlement letter on the *right* footing — and warns you when marking it "without prejudice" won't actually keep it out of court.

A genuine settlement letter is normally protected, so the judge can't see it — but the label only works if the substance is a real attempt to settle, and even then there are exceptions. The skill picks the correct footing (without prejudice, without prejudice save as to costs / Calderbank, or open), drafts the finished letter, and surfaces the Unilever v Procter & Gamble exceptions that get WP material admitted despite the label — the traps a plain template won't warn you about. For juniors and in-house counsel who need the footing right the first time.

## Install

Part of the [claude-for-uk-legal](https://github.com/b1rdmania/claude-for-uk-legal) plugin suite:

```bash
/plugin marketplace add https://github.com/b1rdmania/claude-for-uk-legal
/plugin install uk-litigation-legal@claude-for-uk-legal
```

Or install the single skill directly:

```bash
cp -r without-prejudice-drafter ~/.claude/skills/without-prejudice-drafter
```

## Usage

```
/without-prejudice-drafter
/without-prejudice-drafter --type=wp
/without-prejudice-drafter --type=wpsatc
/without-prejudice-drafter --type=open
```

Run it against a matter with the dispute, the offer terms, and who is offering what. It returns the finished letter on the chosen footing.

```
/without-prejudice-drafter --type=wpsatc
Draft a Calderbank offer in the Khan unfair-dismissal claim: our client
will pay £18,000 inclusive, open for 21 days, ET so no Part 36.
```

The `--type` flag fixes the footing — `wp` for a plain settlement letter, `wpsatc` for a Calderbank / costs-protected offer, `open` for on-the-record correspondence. Omit it and the skill infers the footing from the request, asking only if it is ambiguous.

## What it does

- Identifies the correct footing — open, WP, or WPSATC — and proposes the right one for the situation.
- Applies the matching header convention and drafts the finished letter, not a template.
- Distinguishes the three footings on the point that matters: what is admissible at trial, and what is admissible only on costs.
- Surfaces the Unilever v Procter & Gamble exceptions, where WP material is admitted despite the label — concluded agreement, misrepresentation/fraud, estoppel, unambiguous impropriety, delay, costs, and tariff.
- Keeps open and WP content in separate documents and flags anything that risks an exception (admissions, threats, estoppel signals).

## What it doesn't do

- Settle the footing. It proposes a footing; it does not guarantee the footing holds. Mislabelling has real disclosure consequences either way.
- Give legal advice. The output is a draft for a solicitor, not advice the client can rely on. Counsel or the conducting solicitor must confirm the footing before the letter is sent.
- Make a labelled letter privileged when its substance is not a genuine settlement attempt. The label follows the substance.
- Provide Part 36 costs protection in the civil courts — draft a Part 36 offer separately for that.
- Cover Scottish tenders or Northern Ireland equivalents.

## Requirements

- Claude Code or Claude Cowork. No MCP connectors required.
- A matter to run against — the dispute, the offer terms, and the parties.

## License

Apache-2.0.
