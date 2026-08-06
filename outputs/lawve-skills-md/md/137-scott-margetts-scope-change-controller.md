---
id: "e6c5a8e7-2057-516f-86ec-1d4a01090d09"
title: "Scope Change Controller"
title_cn: "范围变更控制器"
slug: "scope-change-controller"
url: "https://lawve.ai/@scott-margetts/skill/scope-change-controller"
author: "Scott Margetts"
author_slug: "scott-margetts"
category: "legal-operations"
language: "en"
license: "Apache 2.0"
jurisdictions: "INT"
status: "active"
views: 228
downloads: 492
created_at: "2026-03-17T13:51:43+01:00"
updated_at: "2026-04-30T12:38:29.362913+02:00"
source_index: 137
---

# 范围变更控制器

原始名称：`Scope Change Controller`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/scope-change-controller

## 中文 README

# 范围变更控制器

整个法律事务生命周期的范围管理——从事务设置时的基线捕获到进行中的变更控制、范围外的识别和记录，以及结束时的回顾。

## 这个技能有什么作用

范围是其他一切参考的基线。状态是针对范围的进展。风险是对范围交付的威胁。预算是范围的价格。当范围不受管理时，所有其他 LPM 规则都在针对不可靠的目标进行工作，客户会感到惊讶。

该技能根据问题的复杂性分为两个级别：

**轻量级：** 范围摘要、简单的变更日志以及在 OOS 信号出现时对其进行标记的常规指令。适用于完全变更控制不相称的简单问题。

**全面变更控制：** 正式范围登记册、结构化 OOS 评估工作流程、具有财务和时间表影响的变更通知、冲销或额外费用对话的 OOS 报告以及结束时的范围回顾。

**核心设计原则：** 不要要求LPM 创建记录——创建记录并要求LPM 确认。在手动模式下，这意味着技能根据提供的输入生成草稿 OOS 条目、草稿客户端通信和草稿范围寄存器更新。在 M365 连接模式下，它会检测对应的示波器信号，起草带有源证据的条目，并将其显示出来以供确认。 “记录这个”（15 分钟，没有发生）和“我发现这个 - 确认还是驳回？”之间的区别（30 秒，发生）。

## 与物质摄入范围的关系

这两项技能旨在按顺序发挥作用。事项纳入范围模式 2（快速纳入）生成结构化范围摘要 - 包含、排除、假设、约束、里程碑、费用基础 - 这是范围变更控制器在事项生命周期内管理的基线。

如果您要安装scope-change-controller而没有matter-intake-scoping，则该技能将提示您在开始变更控制之前建立范围基线。您可以手动提供此信息。

## 输入

- 来自物质接收范围界定的范围摘要（或手动定义的范围基线）
- 包含示波器信号的电子邮件、通话记录、信件
- 可能构成额外工作的客户请求或指示
- WIP 或账单数据表明工作超出原始参数

## 输出

- OOS 识别通知（内部）
- 范围变更通知（面向客户）
- 范围登记册（商定范围和变更的实时记录）
- OOS 日志（所有已识别、评估和解决的 OOS 项目的记录）
- OOS 报告（注销理由或额外费用谈话摘要）
- 范围电话会议议程（用于与客户就范围变更进行结构化对话）
- 范围回顾（紧要关头——范围是什么，改变了什么，以及为什么）

## 跨技能交接

- **来自物质摄入范围：**范围摘要是该技能管理的基线
- **来自风险和问题经理：** 决策提取的范围信号；假设违反
- **来自状态报告起草者：** 预算差异表明存在范围问题
- **致预算和费用经理：** 评估范围变更 - 需要财务影响分析
- **致时间线生成器：** 范围更改会影响程序时间线
- **致风险和问题经理：** 新的范围假设在 RAID 日志中记录为 A 条目
- **致持续改进引擎：** 回顾性发现为未来的范围界定提供依据

---

## Original README

# scope-change-controller

Scope management across the lifecycle of a legal matter — from baseline capture at matter setup through in-flight change control, out-of-scope identification and documentation, and retrospective at close.

## What this skill does

Scope is the baseline everything else references. Status is progress against scope. Risk is threat to scope delivery. Budget is the price of scope. When scope is unmanaged, every other LPM discipline is working against an unreliable target and the client gets surprised.

The skill operates at two levels scaled to matter complexity:

**Lightweight:** A scope summary, a simple change log, and a standing instruction to flag OOS signals as they arise. Appropriate for straightforward matters where full change control would be disproportionate.

**Full change control:** Formal scope register, structured OOS assessment workflow, change notices with financial and timeline impact, OOS report for write-off or additional fee conversations, and a scope retrospective at close.

**Core design principle:** Don't ask the LPM to create the record — create the record and ask the LPM to confirm it. In manual mode this means the skill produces the draft OOS entry, the draft client communication, and the draft scope register update from the input provided. In M365 connected mode, it detects scope signals in correspondence, drafts the entry with source evidence, and surfaces it for confirmation. The difference between "log this" (15 minutes, doesn't happen) and "I've found this — confirm or dismiss?" (30 seconds, happens).

## Relationship with matter-intake-scoping

These two skills are designed to work in sequence. matter-intake-scoping Mode 2 (quick intake) produces a structured scope summary — inclusions, exclusions, assumptions, constraints, milestones, fee basis — that is the baseline scope-change-controller manages for the life of the matter.

If you are installing scope-change-controller without matter-intake-scoping, the skill will prompt you to establish a scope baseline before change control can begin. You can provide this manually.

## Inputs

- Scope summary from matter-intake-scoping (or a manually defined scope baseline)
- Emails, call notes, correspondence containing scope signals
- Client requests or instructions that may constitute additional work
- WIP or billing data suggesting work outside original parameters

## Outputs

- OOS identification notices (internal)
- Scope change notices (client-facing)
- Scope register (live record of agreed scope and changes)
- OOS log (record of all OOS items identified, assessed, and resolved)
- OOS report (summary for write-off justification or additional fee conversation)
- Scope call agenda (for structured conversation with client about scope changes)
- Scope retrospective (at matter close — what was scoped, what changed, and why)

## Cross-skill handoffs

- **From matter-intake-scoping:** Scope summary is the baseline this skill manages
- **From risk-and-issues-manager:** Scope signals from decision extraction; assumption breaches
- **From status-report-drafter:** Budget variance suggesting a scope issue
- **To budget-and-fee-manager:** Scope change assessed — needs financial impact analysis
- **To timeline-generator:** Scope change affects programme timeline
- **To risk-and-issues-manager:** New scoping assumptions logged as A-entries in RAID log
- **To continuous-improvement-engine:** Retrospective findings feed future scoping calibration
