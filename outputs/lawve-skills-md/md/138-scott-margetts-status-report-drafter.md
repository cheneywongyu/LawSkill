---
id: "44cb1477-1d83-5a6a-a85f-31eb9c7e0d1a"
title: "Status Report Drafter"
title_cn: "状态报告起草者"
slug: "status-report-drafter"
url: "https://lawve.ai/@scott-margetts/skill/status-report-drafter"
author: "Scott Margetts"
author_slug: "scott-margetts"
category: "legal-operations"
language: "en"
license: "Apache 2.0"
jurisdictions: "INT"
status: "active"
views: 274
downloads: 501
created_at: "2026-03-17T13:51:43+01:00"
updated_at: "2026-04-30T12:38:20.942997+02:00"
source_index: 138
---

# 状态报告起草者

原始名称：`Status Report Drafter`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/status-report-drafter

## 中文 README

# 状态报告起草者

将电子邮件、通话记录和工作流更新转换为结构化事务状态报告 - 包含 RAG 评级、差异评论和升级标记。内部和面向客户的格式。

## 这个技能有什么作用

关于法律事务的状态报告会以两种可预见的方式失败：它要么根本不发生，要么生成描述活动但没有传达情况的报告。 “团队一直在推进披露工作流程”告诉读者没有任何有用的信息。良好的状态报告应用例外管理逻辑——引导需要注意的内容，压缩正在轨道上的内容，标记需要决策的内容。

该技能需要您拥有的任何东西——电子邮件链、通话记录、工作流领导的粗略更新——并以适当的格式为目标受众生成结构化报告。

**输出遵循 BLUF 原则（底线在前）：** 30 秒后停止的读者拥有关键项目。继续阅读的读者会逐渐了解更多细节。没有人应该必须滚动才能找到重要的事情。

## 三种报告格式

**内部报告：** 直接了解情况，将响应作为建议。为需要知道如何采取行动的合作伙伴和高级利益相关者编写。

**面向客户的报告：** 以可控的信心传达相同的事实信息。专业地直接讲述事实；测量响应。不使用内部框架。

**特别更新：** Slack、Teams 或快速电子邮件更新的较短格式 — 当前位置、单行工作流状态、未清项目。

## 输入

- 来自工作流领导或交易对手的电子邮件
- 通话或会议记录
- 以前的状态报告（以确定发生了什么变化）
- WIP 或账单数据（财务状况）
- 描述事项进展的任何其他信件或更新

该技能适用于所提供的任何内容，并标记缺少关键信息的地方。

## 输出

默认情况下，所有输出均生成为 .docx，文档标题中包含客户名称、客户编号、案件名称和案件编号。

- 内部状态报告（按工作流划分的 RAG、差异评论、升级标记、所需决策）
- 面向客户的状态报告（相同的结构，适合受众的框架）
- 特别更新（消息或电子邮件的简短形式）

## 跨技能交接

- **确定范围问题**→范围变更控制器评估工作是否超出商定范围
- **从通信中提取的风险或决策** → 风险和问题管理器登录 RAID 日志
- **财务差异表明范围问题** → 预算和费用经理进行财务分析；用于 OOS 评估的范围变更控制器
- **确定时间线影响** → 时间线生成器重新计算依赖关系和程序影响
- **需要利益相关者通知** → 利益相关者沟通规划者的沟通方法和时间安排

---

## Original README

# status-report-drafter

Transforms emails, call notes, and workstream updates into structured matter status reports — with RAG ratings, variance commentary, and escalation flags. Internal and client-facing formats.

## What this skill does

Status reporting on legal matters fails in two predictable ways: it either doesn't happen at all, or it produces reports that describe activity without conveying situation. "The team has been progressing the disclosure workstream" tells the reader nothing useful. Good status reporting applies management-by-exception logic — lead with what needs attention, compress what's on track, flag what needs a decision.

The skill takes whatever you have — an email chain, call notes, a rough update from a workstream lead — and produces a structured report in the appropriate format for the intended audience.

**Output follows the BLUF principle (Bottom Line Up Front):** the reader who stops after 30 seconds has the critical items. The reader who continues gets progressively more detail. Nobody should have to scroll to find out what matters.

## Three report formats

**Internal report:** Direct about the situation, frames the response as a recommendation. Written for partners and senior stakeholders who need to know what to act on.

**Client-facing report:** Conveys the same factual information with managed confidence. Professionally direct about facts; measured about responses. Does not use internal framing.

**Ad hoc update:** A shorter format for Slack, Teams, or quick email updates — current position, one-line workstream status, open items.

## Inputs

- Emails from workstream leads or counter-party
- Call or meeting notes
- Previous status report (to identify what has changed)
- WIP or billing data (for financial position)
- Any other correspondence or updates describing matter progress

The skill works with whatever is provided and flags where key information is absent.

## Outputs

All outputs produced as .docx by default, with client name, client number, matter name, and matter number in the document header.

- Internal status report (RAG by workstream, variance commentary, escalation flags, decisions required)
- Client-facing status report (same structure, audience-appropriate framing)
- Ad hoc update (short-form for messaging or email)

## Cross-skill handoffs

- **Scope concern identified** → scope-change-controller to assess whether work is outside agreed scope
- **Risk or decision extracted from correspondence** → risk-and-issues-manager to log in the RAID log
- **Financial variance suggesting scope issue** → budget-and-fee-manager for financial analysis; scope-change-controller for OOS assessment
- **Timeline impact identified** → timeline-generator to recalculate dependencies and programme impact
- **Stakeholder notification needed** → stakeholder-comms-planner for communication approach and timing
