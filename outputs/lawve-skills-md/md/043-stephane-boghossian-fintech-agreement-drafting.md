---
id: "e08ba07c-20a0-5ec3-8841-2fb9241da328"
title: "Fintech Agreement Drafting"
title_cn: "金融科技协议起草"
slug: "fintech-agreement-drafting"
url: "https://lawve.ai/@stephane-boghossian/skill/fintech-agreement-drafting"
author: "Stephane Boghossian"
author_slug: "stephane-boghossian"
category: "legal-drafting"
language: "en"
license: "AGPL 3.0"
jurisdictions: "INT"
status: "active"
views: 51
downloads: 9
created_at: "2026-06-11T19:39:08.460116+02:00"
updated_at: "2026-06-12T19:34:52.174276+02:00"
source_index: 43
---

# 金融科技协议起草

原始名称：`Fintech Agreement Drafting`  
作者：Stephane Boghossian  
分类：legal-drafting  
来源：https://lawve.ai/@stephane-boghossian/skill/fintech-agreement-drafting

## 中文 README

# 金融科技协议起草

[克劳德](https://claude.com/claude-code) **技能**
金融科技律师将起草方法转化为可重复的、端到端的工作流程
**起草并最终确定复杂的、多支柱监管的支付
协议**——从接收到签署。

正在运行的示例是一个捆绑**代理现金进/现金出的支付框架，
二维码支付、钱包电子支付和市场集成**，其中
持牌支付服务提供商 (PSP) 与跨服务交易对手合作
每条线路都有自己的监管概况。该方法概括为
任何受监管的多服务金融科技合同。

## 它的作用

将此事分为**五个阶段和十四个步骤**：
| Phase | What you produce |
| --- | --- |
| **1 — Intake & regulatory mapping** | Activity-to-licence matrix, resolved grey-zone classifications, true party-role map |
| **2 — Architecture** | Framework-plus-sub-agreement structure; ring-fenced marketplace |
| **Cross-cutting — regulatory/commercial balance** | The negotiable vs non-negotiable line; proportionate, sequenced controls |
| **3 — Core clause drafting** | Authority, float mechanics, hard-coded regulator caps, compliance/data/audit, liability — all tracking *control* |
| **4 — Execution-blocker triage** | Decision packages (obstacle → path → fallback → consequence) |
| **5 — Iteration & finalisation** | Versioned tracked-changes rounds, a pre-signature compliance/consistency check, and closing open blockers as conditions precedent |
贯穿每一步的脊柱：**之前绘制监管范围
你起草一个词；权力、金钱、责任各自跟踪控制；结构
支柱独立；找到调节器摩擦最低的结构
接受；并按照先决条件诚实地排序。**

## 安装

将文件夹放入您的 Claude 技能目录中：
```bash
git clone https://github.com/sboghossian/fintech-agreement-drafting.git \
  ~/.claude/skills/fintech-agreement-drafting
```
然后在克劳德代码中使用“/fintech-agreement-drafting”调用它，或者只是
描述一项受监管的支付交易，它会触发诸如“*”draft a
PSP/代理协议”、“构建这个多支柱交易”、“这是 QR 流 P2P
或收购？”，“审查这份金融科技合同的合规性。”*

## 文件

- **`SKILL.md`** — 可执行工作流程（技能本身）。
- **`REFERENCE.md`** — 技能操作的逐字源手册。

## 范围

这是**起草方法，不是法律或监管建议。** 它告诉您
*其中*许可证特定条款（佣金上限、代理上限、KYC
分配、允许的活动、通知职责）必须居住在
合同以及*他们必须如何行事*——它**不**提供他们的价值观。每个
必须与管辖许可的实际条款或决定相关联
仪器，输出需要合格的法律和当地监管
审查。对公共人工智能工具的提示没有特权；与抽象一起工作
占位符。

## 信用

方法由 [HAQQ Legal AI](https://haqq.ai)** 首席法律官 **Abbas 撰写，
摘自手册*“起草并最终确定复杂的多支柱金融科技
协议。”* 由 **Stephane Boghossian**（主管）打包为克劳德技能
增长，HAQQ Legal AI）。

## 许可证

[AGPL-3.0](./许可证)。任何将此方法构建到托管或
分布式产品必须开源衍生产品。

---

## Original README

# fintech-agreement-drafting

A [Claude](https://claude.com/claude-code) **skill** that turns a senior
fintech lawyer's drafting method into a repeatable, end-to-end workflow for
**drafting and finalising a complex, multi-pillar regulated payments
agreement** — from intake to signature.

The running example is a payments framework bundling **agent cash-in/cash-out,
QR payments, wallet e-payments, and a marketplace integration**, where a
licensed payment-services provider (PSP) engages a counterparty across service
lines that each carry their own regulatory profile. The method generalises to
any regulated, multi-service fintech contract.

## What it does

Runs the matter across **five phases and fourteen steps**:

| Phase | What you produce |
| --- | --- |
| **1 — Intake & regulatory mapping** | Activity-to-licence matrix, resolved grey-zone classifications, true party-role map |
| **2 — Architecture** | Framework-plus-sub-agreement structure; ring-fenced marketplace |
| **Cross-cutting — regulatory/commercial balance** | The negotiable vs non-negotiable line; proportionate, sequenced controls |
| **3 — Core clause drafting** | Authority, float mechanics, hard-coded regulator caps, compliance/data/audit, liability — all tracking *control* |
| **4 — Execution-blocker triage** | Decision packages (obstacle → path → fallback → consequence) |
| **5 — Iteration & finalisation** | Versioned tracked-changes rounds, a pre-signature compliance/consistency check, and closing open blockers as conditions precedent |

The spine running through every step: **map the regulatory perimeter before
you draft a word; authority, money, and liability each track control; structure
for pillar independence; find the lowest-friction structure the regulator
accepts; and sequence honestly with conditions precedent.**

## Install

Drop the folder into your Claude skills directory:

```bash
git clone https://github.com/sboghossian/fintech-agreement-drafting.git \
  ~/.claude/skills/fintech-agreement-drafting
```

Then invoke it in Claude Code with `/fintech-agreement-drafting`, or just
describe a regulated payments deal and it triggers on phrases like *"draft a
PSP/agent agreement", "structure this multi-pillar deal", "is this QR flow P2P
or acquiring?", "review this fintech contract for compliance."*

## Files

- **`SKILL.md`** — the executable workflow (the skill itself).
- **`REFERENCE.md`** — the verbatim source manual the skill operationalises.

## Scope

This is a **drafting method, not legal or regulatory advice.** It tells you
*where* the licence-specific terms (commission caps, agent caps, KYC
allocation, permitted activities, notification duties) must live in the
contract and *how they must behave* — it does **not** supply their values. Every
one must be tied to the actual article or decision of the governing licensing
instrument, and the output requires qualified legal and local regulatory
review. Prompts to a public AI tool are not privileged; work with abstracted
placeholders.

## Credit

Methodology authored by **Abbas, Chief Legal Officer, [HAQQ Legal AI](https://haqq.ai)**,
from the manual *"Drafting & Finalising a Complex Multi-Pillar Fintech
Agreement."* Packaged as a Claude skill by **Stephane Boghossian** (Head of
Growth, HAQQ Legal AI).

## License

[AGPL-3.0](./LICENSE). Anyone who builds this method into a hosted or
distributed product must open-source the derivative.
