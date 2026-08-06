---
id: "fe146bf1-437f-5e68-8d9c-a1391a794119"
title: "Matter Intake Scoping"
title_cn: "物质摄入范围"
slug: "matter-intake-scoping"
url: "https://lawve.ai/@scott-margetts/skill/matter-intake-scoping"
author: "Scott Margetts"
author_slug: "scott-margetts"
category: "legal-operations"
language: "en"
license: "Apache 2.0"
jurisdictions: "INT"
status: "active"
views: 571
downloads: 577
created_at: "2026-03-17T13:51:43+01:00"
updated_at: "2026-04-30T12:34:09.931700+02:00"
source_index: 146
---

# 物质摄入范围

原始名称：`Matter Intake Scoping`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/matter-intake-scoping

## 中文 README

# 问题摄入范围

整个预执行弧的事务范围 — 从非结构化客户数据到结构化摘要，再到所有其他 LPM 学科参考的商定基线，并在 LPM 继承没有记录基线时提供中期事务恢复模式。

## 这个技能有什么作用

四种操作模式：

**模式 1 — 预参与：** 获取客户发送的所有内容 — 电子邮件、组织结构图、数据室索引、通话记录 — 并将其组织成结构化简报，合作伙伴可以从中编写提案。检测来源之间的冲突，将置信标签应用于每个数据点，标记外部知识注意事项，并生成按优先顺序排列的开放问题列表。不写提案；使书写速度更快。

**模式 2 — 快速摄入：** 在确认参与后立即运行。以范围变更控制器在事务的整个生命周期内管理的结构化格式捕获商定的范围基线——包含、排除、假设、约束、里程碑、费用基础。生成 LPM 参与定义以与合作伙伴达成协议。

**模式 3 — 全面吸收：** 模式 2 加上完整的利益相关者矩阵、全面的假设日志、成功标准、初步风险登记册和启动议程。对于大型或复杂的事情。

**模式 4 — 中期问题恢复：** 从计费数据和通信向后进行工作，以重建原始范围基线，确定更改的内容和方式，并生成结构化增量表并移交给范围更改控制器。最常见的实际入口点。

## 文件夹结构
```
matter-intake-scoping/
├── SKILL.md                                  # Core methodology — install this
├── README.md                                 # This file
└── references/
    ├── standing-assumptions.md               # Assumption performance register — populate this
    └── matter-type-profiles/
        └── template.md                       # Matter type profile template — duplicate and populate
```
## 提供和未提供的内容

**提供：** 方法论 — 模式、工作流程、置信度标签系统、冲突检测逻辑、输出格式、跨技能切换点、M365 连接模式指导。

**未提供：** 法律和运营内容。 `references/` 文件故意是空的脚手架。它们的结构被定义；他们的内容属于部署该技能的公司。

这种区别是有意为之的。组织客户数据和捕获范围基线的方法是通用且可转移的。关于德国解散计划通常采用哪些假设、哪些司法管辖区需要提交哪些监管文件以及奥地利合规实体结构是什么样子的具体知识——这是该公司积累的实践专业知识。它应该由公司保留，而不是由第三方编码。

## 您的公司需要填充什么

**`参考文献/stand-assections.md`**

按物质类型划分的假设绩效记录——哪些假设一致成立，哪些违反，以及后果如何。随着时间的推移，从物质回顾中填充。技能的模式 1 和模式 2 使用此文件来生成校准的假设候选列表，而不是不加批判地导入最后一个问题的列表。

首先捕获最大容量物质类型的三种最常见的故障模式。从那里开始构建。

**`references/matter-type-profiles/[type].md`**

每种案件类型一个文件（例如“corporate-dissolution.md”、“cross-border-merger.md”）。每个配置文件都确定了哪些知识领域通常与该事项类型相关——适用哪些监管阈值、出现哪些执行要求、通常出现哪些假设。复制“template.md”并填充。

技能在模式 1 的步骤 1 中路由到这些配置文件。在没有填充配置文件的情况下，该技能仍然有效 - 它依靠常识并标记差距。通过填充的配置文件，它会自动显示特定于物质类型的标志。

## v2 架构笔记

该技能旨在引用插件根级别的“共享知识/”层 - 法律和司法知识文件（执行要求、实体类型、监管阈值），这些文件由部署公司填充并由 LPM 和律师技能使用。该层尚未构建。当它出现时，该技能的路由机制已经被设计为可以使用它。 “references/”中的“matter-type-profiles/”文件是桥梁——它们指向共享知识领域，而不是直接包含合法内容。
## 跨技能交接

- **致范围变更控制器：** 模式 2/3 范围摘要是 SCC 管理的基线。通过“使用此范围摘要设置范围基线”来传递它。
- **致风险和问题经理：** 初始假设日志成为 RAID 日志中的 A 条目。
- **致预算和费用经理：** 范围参数是自下而上预算构建的输入。
- **来自持续改进引擎：** 问题关闭时的假设性能数据提供“references/stand-asminations.md”。如果没有这个，学习循环就没有重新进入点。

---

## Original README

# matter-intake-scoping

Matter scoping across the full pre-execution arc — from unstructured client data to a structured brief, through to the agreed baseline that every other LPM discipline references, with a mid-matter recovery mode for when the LPM inherits with no documented baseline.

## What this skill does

Four operating modes:

**Mode 1 — Pre-engagement:** Takes whatever the client has sent — emails, org charts, data room indexes, call notes — and organises it into a structured brief the partner can write a proposal from. Detects conflicts across sources, applies confidence labels to every data point, flags external knowledge considerations, and produces a prioritised open questions list. Does not write the proposal; makes writing it fast.

**Mode 2 — Quick intake:** Runs immediately after engagement is confirmed. Captures the agreed scope baseline — inclusions, exclusions, assumptions, constraints, milestones, fee basis — in a structured format that scope-change-controller manages for the life of the matter. Produces an LPM involvement definition for agreement with the partner.

**Mode 3 — Full intake:** Mode 2 plus full stakeholder matrix, comprehensive assumptions log, success criteria, preliminary risk register, and kickoff agenda. For large or complex matters.

**Mode 4 — Mid-matter recovery:** Works backwards from billing data and correspondence to reconstruct the original scope baseline, identify what has changed and how, and produce a structured delta table and handoff to scope-change-controller. The most common actual entry point.

## Folder structure

```
matter-intake-scoping/
├── SKILL.md                                  # Core methodology — install this
├── README.md                                 # This file
└── references/
    ├── standing-assumptions.md               # Assumption performance register — populate this
    └── matter-type-profiles/
        └── template.md                       # Matter type profile template — duplicate and populate
```

## What is and isn't provided

**Provided:** The methodology — modes, workflows, confidence labelling system, conflict detection logic, output formats, cross-skill handoff points, M365 connected mode guidance.

**Not provided:** Legal and operational content. The `references/` files are intentionally empty scaffolding. Their structure is defined; their content belongs to the firm deploying the skill.

This distinction is deliberate. The methodology for organising client data and capturing a scope baseline is generic and transferable. The specific knowledge about what assumptions typically hold on German dissolution programmes, what regulatory filings are required across which jurisdictions, and what a compliant entity structure looks like in Austria — that is the firm's accumulated practice expertise. It should stay with the firm, not be encoded by a third party.

## What your firm needs to populate

**`references/standing-assumptions.md`**

A performance register of assumptions by matter type — which assumptions hold consistently, which breach, and with what consequence. Populated over time from matter retrospectives. The skill's Mode 1 and Mode 2 consume this file to produce a calibrated assumptions candidate list rather than importing last matter's list uncritically.

Start by capturing the three most common failure modes on your highest-volume matter type. Build from there.

**`references/matter-type-profiles/[type].md`**

One file per matter type (e.g. `corporate-dissolution.md`, `cross-border-merger.md`). Each profile identifies which knowledge domains are typically relevant for that matter type — which regulatory thresholds apply, what execution requirements arise, what assumptions commonly appear. Duplicate `template.md` and populate.

The skill routes to these profiles in Step 1 of Mode 1. Without populated profiles, the skill still works — it falls back on general knowledge and flags the gap. With populated profiles, it surfaces matter-type-specific flags automatically.

## v2 architecture note

This skill is designed to reference a `shared-knowledge/` layer at the plugin root level — legal and jurisdictional knowledge files (execution requirements, entity types, regulatory thresholds) that are populated by the deploying firm and consumed by both LPM and attorney skills. That layer is not yet built. When it is, this skill's routing mechanism is already designed to use it. The `matter-type-profiles/` files in `references/` are the bridge — they point to shared-knowledge domains rather than containing legal content directly.

## Cross-skill handoffs

- **To scope-change-controller:** Mode 2/3 scope summary is the baseline SCC manages. Pass it with "set up the scope baseline using this scope summary."
- **To risk-and-issues-manager:** Initial assumptions log becomes A-entries in the RAID log.
- **To budget-and-fee-manager:** Scope parameters are inputs for bottom-up budget construction.
- **From continuous-improvement-engine:** Assumption performance data at matter close feeds `references/standing-assumptions.md`. Without this, the learning loop has no re-entry point.
