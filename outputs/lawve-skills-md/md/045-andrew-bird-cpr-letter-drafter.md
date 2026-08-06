---
id: "d472abef-8600-5f66-966f-6249dd3ca7f2"
title: "cpr-letter-drafter"
title_cn: "CPR 信件起草人"
slug: "cpr-letter-drafter"
url: "https://lawve.ai/@andrew-bird/skill/cpr-letter-drafter"
author: "Andrew Bird"
author_slug: "andrew-bird"
category: "litigation"
language: "en"
license: "MIT"
jurisdictions: "UK"
status: "active"
views: 38
downloads: 4
created_at: "2026-06-09T14:49:21.709865+02:00"
updated_at: "2026-06-11T08:55:32.309692+02:00"
source_index: 45
---

# CPR 信件起草人

原始名称：`cpr-letter-drafter`  
作者：Andrew Bird  
分类：litigation  
来源：https://lawve.ai/@andrew-bird/skill/cpr-letter-drafter

## 中文 README

# cpr 信函起草者

根据索赔的*正确*预诉讼协议，撰写您在英格兰和威尔士民事案件中起诉某人之前发送的正式信函（启动预诉讼时钟的索赔前信函）。

适用的协议（债务、专业疏忽、房屋年久失修、人身伤害或行动前行为的默认实践指示）会改变规则，而普通信件会忽略这些规则。对于初级诉讼人员、内部法律顾问和没有先例银行可借鉴的小律师事务所来说：它抓住了一般草案所跳过的内容——30 天的债务索赔响应窗口、专业过失初步通知——然后是索赔信的顺序——并标记了律师确认的时效日期，而不是将其陈述为事实。

## 安装

[claude-for-uk-legal](https://github.com/b1rdmania/claude-for-uk-legal) 插件套件的一部分：
```bash
/plugin marketplace add https://github.com/b1rdmania/claude-for-uk-legal
/plugin install uk-litigation-legal@claude-for-uk-legal
```
或者直接安装单个技能：
```bash
cp -r cpr-letter-drafter ~/.claude/skills/cpr-letter-drafter
```
＃＃ 用法
```
/cpr-letter-drafter
/cpr-letter-drafter --protocol=debt
/cpr-letter-drafter --protocol=prof-neg
```
针对与当事人有关的事项、诉讼原因、时间顺序、损失明细以及要披露的文件进行运行。它识别适用的协议（或默认为 PACC），检查限制门，并返回按照协议期望的方式构建的起草的 LBC。

例子：
```
/cpr-letter-drafter --protocol=debt

Claimant: Acme Supplies Ltd. Defendant: J. Khan (sole trader).
Unpaid invoices totalling £18,400 plus contractual interest.
Contract formed 12 Jan 2025; last payment received 3 Mar 2025.
```
它会返回一份债务索赔协议信函，其中包含 30 天的回复窗口、所需的信息表和回复表格参考、账户报表以及供律师确认的限制标记。

## 它的作用

- 确定是否适用特定的行动前协议，或者是否适用关于行动前行为和协议 (PACC) 的默认实践指示。
- 应用该框架的时间安排、内容和披露要求，例如 30 天债务窗口，或专业过失初步通知然后索赔信的顺序。
- 起草当事人的信函、事实、适用于其要素的索赔标题、具体损失及利息、文件、ADR 信号、响应要求和费用。
- 将明显的限制日期显示为“[律师：确认限制日期]”标记，从未作为已确定的事实，并标记应计假设和例外情况。
- 如果此事继续下去，将导致 CPR 第 36 部分和第 44 部分的费用后果。
- 内联标记不确定点 - `[律师：确认 X]`、`[协议]`、`[SME VERIFY]`、`[CITE NEEDED]` — 因此没有任何内容读作已解决。

## 它不做什么

- 发出索赔。 LBC 处于行动前阶段。
- 采用苏格兰或北爱尔兰程序。
- 取代律师关于是否在限制严格的情况下发出保护性要求的呼吁。
- 保证或证明合规性。输出的样式遵循相关协议；在发送之前验证其当前内容、时间安排和附件要求。
- 设置限位位置。它使用的期间是一般默认值；应计日期和例外情况必须由律师检查。

这是供律师审查的草案，而不是法律建议。负责处理此事的律师负责遵守规定以及以公司名义发出的信息。

## 要求

- 克劳德代码或克劳德合作。无需 MCP 连接器。
- 反对的事项——当事人、诉讼理由、时间顺序、损失明细以及要披露的文件。

## 许可证

阿帕奇-2.0。

---

## Original README

# cpr-letter-drafter

Writes the formal letter you send before suing someone in a civil case in England & Wales — the Letter Before Claim that starts the pre-action clock — under the *right* pre-action protocol for the claim.

Which protocol applies (debt, professional negligence, housing disrepair, personal injury, or the default Practice Direction on Pre-Action Conduct) changes the rules, and a generic letter misses them. For litigation juniors, in-house counsel, and small firms without a precedent bank to copy from: it catches what a general draft skips — the 30-day debt-claim response window, the professional-negligence preliminary-notice-then-letter-of-claim sequence — and flags the limitation date for a solicitor to confirm rather than stating it as fact.

## Install

Part of the [claude-for-uk-legal](https://github.com/b1rdmania/claude-for-uk-legal) plugin suite:

```bash
/plugin marketplace add https://github.com/b1rdmania/claude-for-uk-legal
/plugin install uk-litigation-legal@claude-for-uk-legal
```

Or install the single skill directly:

```bash
cp -r cpr-letter-drafter ~/.claude/skills/cpr-letter-drafter
```

## Usage

```
/cpr-letter-drafter
/cpr-letter-drafter --protocol=debt
/cpr-letter-drafter --protocol=prof-neg
```

Run it against a matter with the parties, cause of action, chronology, loss breakdown, and documents to disclose. It identifies the applicable protocol (or defaults to PACC), checks the limitation gate, and returns a drafted LBC structured the way that protocol expects.

Example:

```
/cpr-letter-drafter --protocol=debt

Claimant: Acme Supplies Ltd. Defendant: J. Khan (sole trader).
Unpaid invoices totalling £18,400 plus contractual interest.
Contract formed 12 Jan 2025; last payment received 3 Mar 2025.
```

It returns a Debt Claims Protocol letter with the 30-day response window, the required information sheet and reply form references, a statement of account, and a limitation marker for the solicitor to confirm.

## What it does

- Identifies whether a specific pre-action protocol applies or whether the default Practice Direction on Pre-Action Conduct and Protocols (PACC) governs.
- Applies that framework's timing, content, and disclosure requirements — for example the 30-day debt window, or the professional negligence preliminary-notice-then-letter-of-claim sequence.
- Drafts the letter with the parties, facts, claim heads applied to their elements, particularised loss with interest, documents, ADR signal, response requirements, and costs.
- Surfaces the apparent limitation date as a `[SOLICITOR: confirm limitation date]` marker, never as settled fact, and flags accrual assumptions and exceptions.
- Surfaces CPR Part 36 and Part 44 costs consequences if the matter proceeds.
- Marks uncertain points inline — `[SOLICITOR: confirm X]`, `[PROTOCOL]`, `[SME VERIFY]`, `[CITE NEEDED]` — so nothing reads as settled.

## What it doesn't do

- Issue the claim. The LBC is pre-action.
- Apply Scottish or Northern Irish procedure.
- Replace counsel's call on whether to issue protectively where limitation is tight.
- Guarantee or certify compliance. The output is styled to follow the relevant protocol; verify its current content, timing, and enclosure requirements before sending.
- Settle the limitation position. The periods it uses are general defaults; the accrual date and exceptions must be checked by a solicitor.

This is a draft for solicitor review, not legal advice. A solicitor with conduct of the matter is responsible for compliance and for what goes out under the firm's name.

## Requirements

- Claude Code or Claude Cowork. No MCP connectors required.
- A matter to run against — parties, cause of action, chronology, loss breakdown, and the documents to disclose.

## License

Apache-2.0.
