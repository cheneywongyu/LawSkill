---
id: "4e995d1e-3c66-5012-a34e-418cf77a7dda"
title: "Collaboration Platform Advisor"
title_cn: "协作平台顾问"
slug: "collaboration-platform-advisor"
url: "https://lawve.ai/@scott-margetts/skill/collaboration-platform-advisor"
author: "Scott Margetts"
author_slug: "scott-margetts"
category: "legal-operations"
language: "en"
license: "Apache 2.0"
jurisdictions: "INT"
status: "active"
views: 226
downloads: 489
created_at: "2026-03-17T13:51:43+01:00"
updated_at: "2026-04-30T12:38:12.789824+02:00"
source_index: 139
---

# 协作平台顾问

原始名称：`Collaboration Platform Advisor`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/collaboration-platform-advisor

## 中文 README

# 协作平台顾问

**插件：** LPM 核心插件（技能 13 / 14）
**部分：** [Claude 的 LPM 技能](https://github.com/legalopsconsulting/lpm-skills)

---

## 这个技能有什么作用

设计和管理法律事务协作平台——其结构、工作流程、仪表板、数据质量和采用。与 M365（SharePoint、Teams、Power Automate）一起用作参考实施，并以与平台无关的方式生成输出，以便 LPM 可以向 IT 人员介绍情况或直接构建简单的自动化。

该技能编码方法论，而不是工具配置。律师事务所平台的失败几乎从来都不是技术性的——而是设计和采用的失败。如果平台过于复杂，合作伙伴无法在 90 秒内完成导航，则不会使用。需要手动数据输入的仪表板将包含陈旧的数据。这项技能是为了防止这些失败而建立的。

## 使用说明 (v1)

**模式 2 — 自动化简报：** 当您指定要自动化的特定工作流程时，效果最佳。示例：*“向我简要介绍每周 LC 确认追踪的自动化”* 生成一份填充的自动化简报。像“我可以自动化什么？”这样的通用提示可能会产生一般的人工智能助理建议，而不是 M365 范围的简短格式。如果发生这种情况，请重新声明请求，并指定特定的工作流程和平台。

**模式 3 — 仪表板设计：** 生成仪表板规范文档 — 不是构建的仪表板、HTML 工件或交互式工具。该规范是您交给 IT 或用于配置 SharePoint 的规范。如果您需要构建交互式内容，请使用规范作为该构建的简介。

---
| Mode | When to use |
|---|---|
| **Mode 1 — Site setup and architecture** | New matter or programme — design the site structure before building it |
| **Mode 2 — Workflow identification and automation briefing** | Identify which workflows to automate and produce IT-briefable descriptions |
| **Mode 3 — Dashboard and reporting design** | Design dashboards by audience — partner, client, LPM |
| **Mode 4 — Data quality and adoption** | Platform data has degraded or nobody is using the platform |
| Mode | Primary output |
|---|---|
| Mode 1 | Site architecture document — document library structure, list schemas, channel design, permissions |
| Mode 2 | Automation brief per workflow — trigger, condition, action, data source, owner |
| Mode 3 | Dashboard specification per audience — views, data sources, refresh cadence, access |
| Mode 4 | Adoption intervention plan — root cause, named actions, owner, metric |
| Skill | Relationship |
|---|---|
| matter-intake-scoping | Scope and stakeholder map → site architecture inputs |
| matter-plan-builder | Task list structure → matter plan SharePoint List schema |
| stakeholder-comms-planner | Stakeholder register → dashboard audience and permissions |
| local-counsel-manager | LC tracker structure → LC tracker list schema and automation |
| status-report-drafter | Platform data and list exports → structured status report inputs |
| timeline-generator | Matter plan list CSV → Gantt and critical path inputs |
| continuous-improvement-engine | Platform adoption failures → Mode 1 lesson capture triggers |
---

## 它不做什么

- **DMS 配置** — iManage、NetDocuments 和类似的文档管理系统需要 IT 参与和公司特定的专业知识。该技能设计的是协作层，而不是 DMS。
- **Power Automate 开发** — 模式 2 为 IT 开发人员提供简单英语的自动化简报。它不编写 Power Automate 流。
- **面向客户的配置** — 客户可见的任何元素在激活之前都需要合作伙伴审核。该技能设计并提出建议；合作伙伴批准。

---

## 编码的关键设计原则

**过度设计会扼杀采用。** 问题网站的每个元素都应该生存：“如果这个不存在，那么具体出了什么问题？”如果答案是“没什么”，那就删掉它。

**数据输入必须是一个副作用，而不是一个单独的任务。**任何需要团队成员导航到站点并输入数据的平台都将在两周内拥有过时的数据。

**首先为合作伙伴设计。** 合作伙伴仪表板显示 5 个指标。其他人都得到更多。以最少的时间和最低的平台容忍度为读者设计。

**该平台要么成为记录系统，要么就会失败。** 并行操作（电子邮件加平台）产生两个事实来源，但都不可靠。

**采用是设计失败，而不是培训失败。** 如果平台嵌入到现有工作流程中，培训只需 15 分钟即可。

---

## 输出

所有输出均以“.docx”文件形式生成。


---

## 此人所使用的技能


---

## 许可证

阿帕奇2.0。请参阅[许可证](../../许可证)。

---

## Original README

# collaboration-platform-advisor

**Plugin:** LPM Core Plugin (Skill 13 of 14)
**Part of:** [LPM Skills for Claude](https://github.com/legalopsconsulting/lpm-skills)

---

## What this skill does

Designs and governs legal matter collaboration platforms — their structure, workflows, dashboards, data quality, and adoption. Works with M365 (SharePoint, Teams, Power Automate) as the reference implementation and produces outputs in platform-agnostic terms so an LPM can brief IT or build simple automations directly.

The skill encodes methodology, not tool configuration. Law firm platform failures are almost never technical — they are design and adoption failures. A platform too complex for a partner to navigate in 90 seconds will not be used. A dashboard requiring manual data entry will have stale data. This skill is built to prevent those failures.

## Usage notes (v1)

**Mode 2 — automation briefing:** Works best when you name the specific workflow you want to automate. Example: *"Brief me on automating the weekly LC acknowledgment chase"* produces a populated automation brief. Generic prompts like *"what can I automate?"* may produce general AI assistant advice rather than the M365-scoped brief format. If this happens, restate the request naming the specific workflow and platform.

**Mode 3 — dashboard design:** Produces a dashboard specification document — not a built dashboard, HTML artifact, or interactive tool. The specification is what you hand to IT or use to configure SharePoint. If you need something interactive built, use the specification as the brief for that build.

---



| Mode | When to use |
|---|---|
| **Mode 1 — Site setup and architecture** | New matter or programme — design the site structure before building it |
| **Mode 2 — Workflow identification and automation briefing** | Identify which workflows to automate and produce IT-briefable descriptions |
| **Mode 3 — Dashboard and reporting design** | Design dashboards by audience — partner, client, LPM |
| **Mode 4 — Data quality and adoption** | Platform data has degraded or nobody is using the platform |

---

## What it doesn't do

- **DMS configuration** — iManage, NetDocuments, and similar document management systems require IT involvement and firm-specific expertise. This skill designs the collaboration layer, not the DMS.
- **Power Automate development** — Mode 2 produces automation briefs in plain English for IT developers. It does not write Power Automate flows.
- **Client-facing configuration** — any element visible to the client requires partner review before activation. This skill designs and proposes; the partner approves.

---

## Key design principles encoded

**Over-engineering kills adoption.** Every element of a matter site should survive: "If this doesn't exist, what specifically goes wrong?" If the answer is "nothing much," cut it.

**Data entry must be a side effect, not a separate task.** Any platform requiring a team member to navigate to a site and enter data will have stale data within two weeks.

**Design for the partner first.** The partner dashboard shows 5 metrics. Everyone else gets more. Design for the reader with the least time and lowest platform tolerance.

**The platform either becomes the system of record or it fails.** Parallel operation (email plus platform) produces two sources of truth and neither reliable.

**Adoption is a design failure, not a training failure.** If the platform is embedded in existing workflows, training is a 15-minute orientation.

---

## Outputs

All outputs produced as `.docx` files.

| Mode | Primary output |
|---|---|
| Mode 1 | Site architecture document — document library structure, list schemas, channel design, permissions |
| Mode 2 | Automation brief per workflow — trigger, condition, action, data source, owner |
| Mode 3 | Dashboard specification per audience — views, data sources, refresh cadence, access |
| Mode 4 | Adoption intervention plan — root cause, named actions, owner, metric |

---

## Skills this one works with

| Skill | Relationship |
|---|---|
| matter-intake-scoping | Scope and stakeholder map → site architecture inputs |
| matter-plan-builder | Task list structure → matter plan SharePoint List schema |
| stakeholder-comms-planner | Stakeholder register → dashboard audience and permissions |
| local-counsel-manager | LC tracker structure → LC tracker list schema and automation |
| status-report-drafter | Platform data and list exports → structured status report inputs |
| timeline-generator | Matter plan list CSV → Gantt and critical path inputs |
| continuous-improvement-engine | Platform adoption failures → Mode 1 lesson capture triggers |

---

## License

Apache 2.0. See [LICENSE](../../LICENSE).
