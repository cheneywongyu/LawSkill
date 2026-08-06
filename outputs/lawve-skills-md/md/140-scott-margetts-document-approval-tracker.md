---
id: "6156d4e2-34d9-5e6b-9d3a-d8d38e888941"
title: "Document Approval Tracker"
title_cn: "文件审批追踪器"
slug: "document-approval-tracker"
url: "https://lawve.ai/@scott-margetts/skill/document-approval-tracker"
author: "Scott Margetts"
author_slug: "scott-margetts"
category: "legal-operations"
language: "en"
license: "Apache 2.0"
jurisdictions: "INT"
status: "active"
views: 243
downloads: 481
created_at: "2026-03-17T13:51:43+01:00"
updated_at: "2026-04-30T12:37:32.591226+02:00"
source_index: 140
---

# 文件审批追踪器

原始名称：`Document Approval Tracker`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/document-approval-tracker

## 中文 README

# 文档审批跟踪器

**插件：** LPM 核心插件（技能 14 / 14）
**部分：** [Claude 的 LPM 技能](https://github.com/legalopsconsulting/lpm-skills)

---

## 这个技能有什么作用

设计和跟踪多利益相关者文档审批工作流程 - 定义审核顺序、监控级联中的文档位置、追赶逾期审核者、协调版本控制以及映射跨辖区文档依赖关系。

文件审批是大多数法律事务中无形的关键路径。合作伙伴和客户知道需要存在哪些文件；在截止日期出现之前，没有人跟踪自己在审核链中的位置。该技能旨在使级联在截止日期之前而不是之后可见。

---

## 模式
| Mode | When to use |
|---|---|
| **Mode 1 — Cascade design** | Defining who reviews a document and in what sequence, at matter setup |
| **Mode 2 — Position tracking** | A document is in circulation — tracking where it is and how long it's been there |
| **Mode 3 — Overdue chasing** | A reviewer is overdue — produce the chasing email at the correct escalation stage |
| **Mode 4 — Version control** | A reviewer is on the wrong version, or version control has broken down |
| Mode | Primary output |
|---|---|
| Mode 1 | Approval cascade document — review sequence, client-side cascade, dependencies, gaps checklist |
| Mode 2 | Position tracker table — current holder, days at step, SLA flags, next action |
| Mode 3 | Chasing email at correct escalation stage (produced immediately, no identifier gate) |
| Mode 4 | Version status table + recall email draft + prevention protocol |
| Skill | Relationship |
|---|---|
| matter-plan-builder | Document production tasks → cascade design trigger |
| timeline-generator | Critical path identification → accelerated chasing for on-path documents; approval delays → timeline impact |
| local-counsel-manager | LC-delivered documents enter the cascade on receipt |
| stakeholder-comms-planner | Client-side contacts and approval authority → client cascade inputs |
| status-report-drafter | Overdue documents and cascade blockers → risks and issues section |
| continuous-improvement-engine | Version control failures and cascade gaps → lesson capture triggers |
---

## 编码的关键设计原则

**在初稿之前定义级联，而不是在准备好时定义。** 审批顺序必须在事项设置时达成一致，而不是在文件分发时即兴制定。

**客户端不透明是最难的问题。** 在第一次循环之前要求客户端的内部级联和命名周转。 “我们将审查并恢复”并不是承诺。

**电子邮件携带通知；案件网站包含该文档。** 每个电子邮件附件都会产生版本风险。 SharePoint 中的单一事实来源；电子邮件仅供通知之用。

**注明截止日期。不要软化它。**“当你有机会时”告诉审稿人截止日期是灵活的。追捕电子邮件注明日期、原因和停止。

**在 SLA 的 80% 时进行标记 — 不在到期时进行标记。** 对于 3 天的 SLA，拥有 2.5 天文档的合作伙伴现在需要标记。

**在级联设计中映射跨文档依赖关系。** 被德国税务意见阻止的荷兰 SPA 是一种依赖关系，应该在第一天就可见 - 当第一个文件准备好分发时不会发现。

---

## 输出


## 使用说明 (v1)

**模式 2/3 — 转发的电子邮件：** 在粘贴描述过期文档情况的转发的“仅供参考”电子邮件时，请在其前面加上“[APPROVAL TRACKER]”前缀。即使使用标签，这种提示模式也可能产生一般建议输出，而不是位置跟踪器和追踪电子邮件。为了获得可靠的路由，请直接描述情况：*“NDA 已与 [合作伙伴] 合作 4 天，而 SLA 为 3 天。给我起草一封追踪电子邮件。”*

**模式 1 — 级联设计：** 生成级联文档，而不是有关审查顺序的咨询性散文。如果出现散文，请重述：*“为[事项]上的[文件名称]生成批准级联文件。”*

---



- **文件的法律审查** — LPM 跟踪级联中的位置；律师决定步骤是否完成
- **文档起草或红线** - 该技能协调文档周围的工作流程，而不是文档本身
- **执行物流** — 湿墨签名、公证、海牙认证链 — 这些由执行和签名经理处理（并购插件的 LPM，技能 19）

---

## 此人所使用的技能


---

## 许可证

阿帕奇2.0。请参阅[许可证](../../许可证)。

---

## Original README

# document-approval-tracker

**Plugin:** LPM Core Plugin (Skill 14 of 14)
**Part of:** [LPM Skills for Claude](https://github.com/legalopsconsulting/lpm-skills)

---

## What this skill does

Designs and tracks multi-stakeholder document approval workflows — defining review sequences, monitoring document position in the cascade, chasing overdue reviewers, coordinating version control, and mapping cross-jurisdiction document dependencies.

Document approval is the invisible critical path on most legal matters. Partners and clients know what documents need to exist; nobody tracks where they are in the review chain until a deadline appears. This skill is designed to make the cascade visible before the deadline, not after.

---

## Modes

| Mode | When to use |
|---|---|
| **Mode 1 — Cascade design** | Defining who reviews a document and in what sequence, at matter setup |
| **Mode 2 — Position tracking** | A document is in circulation — tracking where it is and how long it's been there |
| **Mode 3 — Overdue chasing** | A reviewer is overdue — produce the chasing email at the correct escalation stage |
| **Mode 4 — Version control** | A reviewer is on the wrong version, or version control has broken down |

---

## Key design principles encoded

**Define the cascade before the first draft, not when it's ready.** The approval sequence must be agreed at matter setup — not improvised when the document is circulated.

**Client-side opacity is the hardest problem.** Ask for the client's internal cascade and a named turnaround before first circulation. "We'll review and revert" is not a commitment.

**Email carries the notification; the matter site carries the document.** Every email attachment creates a version risk. Single source of truth in SharePoint; email for notification only.

**State the deadline. Don't soften it.** "When you get a chance" teaches reviewers that deadlines are flexible. The chasing email states the date, the reason, and stops.

**Flag at 80% of SLA — not at expiry.** A partner who has had a document for 2.5 days against a 3-day SLA needs a flag now.

**Map cross-document dependencies at cascade design.** The Netherlands SPA blocked by the German tax opinion is a dependency that should be visible on day one — not discovered when the first document is ready to circulate.

---

## Outputs

| Mode | Primary output |
|---|---|
| Mode 1 | Approval cascade document — review sequence, client-side cascade, dependencies, gaps checklist |
| Mode 2 | Position tracker table — current holder, days at step, SLA flags, next action |
| Mode 3 | Chasing email at correct escalation stage (produced immediately, no identifier gate) |
| Mode 4 | Version status table + recall email draft + prevention protocol |

## Usage notes (v1)

**Mode 2/3 — forwarded emails:** When pasting a forwarded "FYI" email describing an overdue document situation, prefix it with `[APPROVAL TRACKER]`. Even with the tag, this prompt pattern may produce general advisory output rather than a position tracker and chasing email. For reliable routing, describe the situation directly: *"The NDA has been with [Partner] for 4 days against a 3-day SLA. Draft me a chasing email."*

**Mode 1 — cascade design:** Produces a cascade document, not advisory prose on review sequence. If prose appears instead, restate: *"Produce the approval cascade document for [Document name] on [Matter]."*

---



- **Legal review of documents** — the LPM tracks position in the cascade; the attorney decides whether a step is complete
- **Document drafting or redlining** — this skill coordinates the workflow around documents, not the documents themselves
- **Execution logistics** — wet ink signatures, notarisation, apostille chains — those are handled by execution-and-signing-manager (LPM for M&A Plugin, Skill 19)

---

## Skills this one works with

| Skill | Relationship |
|---|---|
| matter-plan-builder | Document production tasks → cascade design trigger |
| timeline-generator | Critical path identification → accelerated chasing for on-path documents; approval delays → timeline impact |
| local-counsel-manager | LC-delivered documents enter the cascade on receipt |
| stakeholder-comms-planner | Client-side contacts and approval authority → client cascade inputs |
| status-report-drafter | Overdue documents and cascade blockers → risks and issues section |
| continuous-improvement-engine | Version control failures and cascade gaps → lesson capture triggers |

---

## License

Apache 2.0. See [LICENSE](../../LICENSE).
