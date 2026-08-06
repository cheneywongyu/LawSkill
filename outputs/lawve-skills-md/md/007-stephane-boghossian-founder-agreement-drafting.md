---
id: "8047e5e4-998d-5bd9-aedb-d4279ffbfedc"
title: "Founder Agreement Drafting"
title_cn: "起草创始人协议"
slug: "founder-agreement-drafting"
url: "https://lawve.ai/@stephane-boghossian/skill/founder-agreement-drafting"
author: "Stephane Boghossian"
author_slug: "stephane-boghossian"
category: "legal-drafting"
language: "en"
license: "AGPL 3.0"
jurisdictions: "INT"
status: "active"
views: 61
downloads: 11
created_at: "2026-07-06T17:04:04.469415+02:00"
updated_at: "2026-07-06T18:30:59.430966+02:00"
source_index: 7
---

# 起草创始人协议

原始名称：`Founder Agreement Drafting`  
作者：Stephane Boghossian  
分类：legal-drafting  
来源：https://lawve.ai/@stephane-boghossian/skill/founder-agreement-drafting

## 中文 README

# 创始人协议起草

一项[克劳德](https://claude.com/claude-code) **技能**，可以改变起草和
将**创始人/联合创始人协议**审查为可重复的方法 -
确定**股权、归属、知识产权所有权、角色的文件（或一组条款），
创办公司的人之间的决策、僵局和离职**。

与司法管辖区无关，以**特拉华州 C 型企业**默认为基础，
争议最高的条款得到一流处理——股权分割、反向归属和
83(b) 时钟、现在时 IP 分配、离开机制和死锁
大多数工具会跳过该子句。

## 它的作用

以**两种模式**运行。

**草案**——从接收到签名共五个阶段，十四个步骤：
| Phase | What you produce |
| --- | --- |
| **1 — Intake & founder mapping** | Founder-and-role map, entity/jurisdiction determination, contribution inventory |
| **2 — Equity & vesting architecture** | The split *with a written rationale* (not a fake calculator), the vesting schedule, the 83(b) flag, acceleration |
| **3 — Core clause drafting** | IP assignment, roles & deadlock, leaver & buyback, transfer/ROFR, and the supporting terms — into the right instrument |
| **4 — Conflict & blocker triage** | Desirable-vs-blocking, plus divergent-interest points routed to independent counsel |
| **5 — Pre-signature finalisation** | The "clean, investable cap table" diligence dry-run; open blockers closed as conditions |
**审查** — 根据 18 条清单和
红旗扫描，并输出分类差距报告（关键/重要/可选）。

贯穿每一步的脊柱：**兑现是机制，而不是分割；
记录理由，而不仅仅是数字；现在时 IP 分配或
什么都没有；每股在离开时都必须有一个家；设计之前的死锁
发生；将条款起草成正确的文书并使其彻底到期。**

## 安装

将文件夹放入您的 Claude 技能目录中：
```bash
git clone https://github.com/sboghossian/founder-agreement-drafting.git \
  ~/.claude/skills/founder-agreement-drafting
```
然后在 Claude Code 中使用 `/Founder-agreement-drafting` 调用它，或者只是
描述一项创始人交易，它会触发诸如*“起草创始人”之类的短语
协议”、“创始人之间的股权分割”、“设立创始人归属”、“创始人
IP 分配”、“创始人僵局条款”、“审查此创始人协议。”*

## 文件

- **`SKILL.md`** — 可执行工作流程（技能本身）。
- **`REFERENCE.md`** — 研究支柱，每一个条款，判例法
  （*斯坦福诉罗氏*）、股权分割数据（Wasserman / NBER）、
  管辖权表（特拉华州/有限责任公司/英国/中东和北非地区）和主要来源引文。

## 范围

这是一种**起草方法，不是法律、税务或财务建议。** 它告诉您
*每个创始人术语必须存在于*何处*以及*它必须如何表现* - 它**不**
证明某项条款在您所在的司法管辖区可执行，决定谁“应得”
更多公平，或建议进行税收选举。它为**企业起草了一份草案
整体**，公司法律顾问的做法是：**每个创始人都应该有独立的
签署前咨询。** 司法管辖区特定条款（竞业禁止的可执行性、
中东和北非地区境内没收、有限责任公司利润利息税、83(b) 决定）已被标记
供当地/税务顾问使用，未提供。公共人工智能工具的提示不是
享有特权；使用抽象占位符。

## 信用

来自 **[HAQQ Legal AI](https://haqq.ai)** 的一系列开放法律技能的一部分，
由 **Abbas**（首席法律官）发起。这里的方法综合一下
来自公共最佳实践来源——Y Combinator、Cooley GO、Clerky、Carta、
Orrick、Wilson Sonsini、SeedLegals、Noam Wasserman / 哈佛商学院以及指定判例法
（全部在“REFERENCE.md”中引用）。由 **Stephane 包装为克劳德技能
Boghossian**（HAQQ Legal AI 增长主管）。

## 许可证

[AGPL-3.0](./许可证)。任何将此方法构建到托管或分布式
产品必须开源衍生品。

---

## Original README

# founder-agreement-drafting

A [Claude](https://claude.com/claude-code) **skill** that turns the drafting and
review of a **founders' / co-founders' agreement** into a repeatable method —
the document (or set of terms) that fixes **equity, vesting, IP ownership, roles,
decision-making, deadlock, and departure** between the people starting a company.

Jurisdiction-agnostic, anchored on the **Delaware C-corp** default, with the
highest-dispute terms handled first-class — the equity split, reverse vesting and
the 83(b) clock, present-tense IP assignment, leaver mechanics, and the deadlock
clause most tools skip.

## What it does

Runs in **two modes**.

**DRAFT** — five phases, fourteen steps, from intake to signature:

| Phase | What you produce |
| --- | --- |
| **1 — Intake & founder mapping** | Founder-and-role map, entity/jurisdiction determination, contribution inventory |
| **2 — Equity & vesting architecture** | The split *with a written rationale* (not a fake calculator), the vesting schedule, the 83(b) flag, acceleration |
| **3 — Core clause drafting** | IP assignment, roles & deadlock, leaver & buyback, transfer/ROFR, and the supporting terms — into the right instrument |
| **4 — Conflict & blocker triage** | Desirable-vs-blocking, plus divergent-interest points routed to independent counsel |
| **5 — Pre-signature finalisation** | The "clean, investable cap table" diligence dry-run; open blockers closed as conditions |

**REVIEW** — audit an existing agreement against an 18-clause checklist and a
red-flag scan, and output a triaged gap report (Critical / Important / Optional).

The spine running through every step: **vesting is the mechanism, not the split;
document the rationale, not just the number; present-tense IP assignment or
nothing; every share must have a home on departure; design the deadlock before it
happens; draft the terms into the right instrument and make them expire cleanly.**

## Install

Drop the folder into your Claude skills directory:

```bash
git clone https://github.com/sboghossian/founder-agreement-drafting.git \
  ~/.claude/skills/founder-agreement-drafting
```

Then invoke it in Claude Code with `/founder-agreement-drafting`, or just
describe a founder deal and it triggers on phrases like *"draft a founders'
agreement", "split equity between founders", "set up founder vesting", "founder
IP assignment", "founder deadlock clause", "review this founders' agreement."*

## Files

- **`SKILL.md`** — the executable workflow (the skill itself).
- **`REFERENCE.md`** — the research backbone, with every clause, the case law
  (*Stanford v. Roche*), the equity-split data (Wasserman / NBER), the
  jurisdiction table (Delaware / LLC / UK / MENA), and primary-source citations.

## Scope

This is a **drafting method, not legal, tax, or financial advice.** It tells you
*where* each founder term must live and *how it must behave* — it does **not**
certify that a term is enforceable in your jurisdiction, decide who "deserves"
more equity, or recommend a tax election. It drafts for the **venture as a
whole**, the way company counsel does: **each founder should have independent
counsel before signing.** Jurisdiction-specific terms (non-compete enforceability,
MENA onshore forfeiture, LLC profits-interest tax, the 83(b) decision) are flagged
for local / tax counsel, not supplied. Prompts to a public AI tool are not
privileged; work with abstracted placeholders.

## Credit

Part of a series of open legal skills from **[HAQQ Legal AI](https://haqq.ai)**,
initiated with **Abbas** (Chief Legal Officer). The method here is synthesised
from public best-practice sources — Y Combinator, Cooley GO, Clerky, Carta,
Orrick, Wilson Sonsini, SeedLegals, Noam Wasserman / HBS, and named case law
(all cited in `REFERENCE.md`). Packaged as a Claude skill by **Stephane
Boghossian** (Head of Growth, HAQQ Legal AI).

## License

[AGPL-3.0](./LICENSE). Anyone who builds this method into a hosted or distributed
product must open-source the derivative.
