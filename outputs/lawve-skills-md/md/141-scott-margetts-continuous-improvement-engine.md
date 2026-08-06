---
id: "42a93df7-a69c-5dc8-88f0-c0bfc357ebb8"
title: "Continuous Improvement Engine"
title_cn: "持续改进引擎"
slug: "continuous-improvement-engine"
url: "https://lawve.ai/@scott-margetts/skill/continuous-improvement-engine"
author: "Scott Margetts"
author_slug: "scott-margetts"
category: "legal-operations"
language: "en"
license: "Apache 2.0"
jurisdictions: "INT"
status: "active"
views: 305
downloads: 552
created_at: "2026-03-17T13:51:43+01:00"
updated_at: "2026-04-30T12:37:24.348303+02:00"
source_index: 141
---

# 持续改进引擎

原始名称：`Continuous Improvement Engine`  
作者：Scott Margetts  
分类：legal-operations  
来源：https://lawve.ai/@scott-margetts/skill/continuous-improvement-engine

## 中文 README

# 持续改进引擎

**插件：** LPM 核心插件（技能 12 / 14）
**部分：** [Claude 的 LPM 技能](https://github.com/legalopsconsulting/lpm-skills)

---

## 这个技能有什么作用

捕捉、构建和循环利用法律事务中的操作经验教训——在处理过程中、在阶段关口和在事务结束时。将发生的事情转化为可在下一件事中重复使用的内容。

标准的经验教训流程之所以失败，是因为经验教训的获取太晚（在结束时，而不是在触发事件时），为了归档而不是为了重用而格式化经验教训，并且没有反馈回模板和可防止再次发生的长期假设。该技能旨在解决所有三个问题：最生动时的飞行捕获、为下一个范围界定会话格式化的结构化输出以及明确路由到应更新模板的技能。

## 使用说明 (v1)

**模式 1 — 粘贴事件文档：** 直接粘贴 RAID 更新、范围变更通知、计费差异或 LC 性能问题时，请在粘贴前添加前缀“[LESSON TRIGGER]”。这告诉该技能提取教训，而不是生成其他技能处理的下游文档（RAID 更新、OOS 通知等）。

示例：“[课程触发] R-003 已升级 - 荷兰公证人要求签名时亲自到场，8000 欧元未列入预算。”

如果没有标签，请用自己的话描述情况：*“我们的荷兰 RAID 风险 R-003 已成为现实 — 公证人需要亲自到场，预算外 8,000 欧元。吸取教训。”*

**模式 0 完全回避了这一点。** 在模式 0 中，该技能会在整个每周批次中自行进行检测和分类 - 不需要标签。模式 0 是对不明确的输入分类的架构答案。

---
| Mode | When to use |
|---|---|
| **Mode 1 — In-flight capture** | A trigger event has occurred: scope change, risk materialised, issue resolved, delivery problem, positive signal. Capture now, not at close. |
| **Mode 2 — Mid-matter review** | A phase has completed or a quarterly review point has been reached. |
| **Mode 3 — Matter close retrospective** | The matter is closing. Full retrospective with reuse package for the next matter of this type. |
| Mode | Primary output |
|---|---|
| Mode 1 | Structured lesson entry with root cause, lesson statement, and named reuse target |
| Mode 2 | Mid-matter review with lessons table, patterns identified, and adjustments for next phase |
| Mode 3 | Full close retrospective + **Reuse Package** — a forward-facing briefing for the next LPM who picks up a matter of this type |
| Skill | Relationship |
|---|---|
| scope-change-controller | Every OOS event → Mode 1 trigger; retrospective findings → Mode 3 input |
| risk-and-issues-manager | Every materialised risk / resolved issue → Mode 1 trigger; "Closed — lesson active" entries → structured capture |
| status-report-drafter | Delivery signals (delays, RAG deterioration) → Mode 1 trigger |
| local-counsel-manager | LC performance issues and scope disputes → Mode 1 trigger |
| matter-intake-scoping | Reuse packages and updated standing assumptions feed back into next matter scoping |
| risk-and-issues-manager | Pattern lessons → standard risk register update |
| scope-change-controller | Pattern lessons → scope baseline template update |
**模式 1 是价值最高的模式。** 在范围变化发生的一周内获得的教训比在接近事件时进行的相同观察有用十倍。

---

## 触发信号

该技能会自动对这些输入进行分类：

- 范围变更通知或范围变更控制器输出 → 模式 1
- 风险具体化或 RAID 更新 → 模式 1
- 包含延迟或错过里程碑信号的状态报告 → 模式 1
- 阶段门或季度审查 → 模式 2
- 事项关闭或关闭 → 模式 3

---

## 关键输出


**重用包**（模式3）是该技能的最高价值输出。这是被使用的部分。完整的回顾就是记录。

---

## 此人所使用的技能


---

## 应用的设计原则

- **将飞行中捕捉作为主要工作流程** — 在触发事件时捕捉的经验教训，而不是在结束时重建
- **用于重复使用的格式，而不是归档** - 针对范围界定课程格式化的课程条目；重用针对模板库格式化的包
- **显式反馈循环** - 每节课都路由到一个指定的技能，其模板应该更新
- **生成输出** — 根据可用信息立即生成课程条目；未保留待完成的输入
- **模板骨架** — 课程输入、中期复习和回顾是技能填充的结构化模板

---

## 许可证

阿帕奇2.0。请参阅[许可证](../../许可证)。

---

## Original README

# continuous-improvement-engine

**Plugin:** LPM Core Plugin (Skill 12 of 14)
**Part of:** [LPM Skills for Claude](https://github.com/legalopsconsulting/lpm-skills)

---

## What this skill does

Captures, structures, and recycles operational lessons from legal matters — in-flight, at phase gates, and at matter close. Converts what happened into something reusable on the next matter.

The standard lessons-learned process fails because lessons are captured too late (at close, not at the trigger event), formatted for filing rather than reuse, and have no feedback loop back into the templates and standing assumptions that would prevent recurrence. This skill is designed to fix all three: in-flight capture at the moment of maximum vividness, structured output formatted for the next scoping session, and explicit routing to the skills whose templates should be updated.

## Usage notes (v1)

**Mode 1 — pasted event documents:** When pasting a RAID update, scope change notice, billing variance, or LC performance issue directly, prefix it with `[LESSON TRIGGER]` before pasting. This tells the skill to extract the lesson rather than produce the downstream document (RAID update, OOS notice, etc.) that other skills handle.

Example: `[LESSON TRIGGER] R-003 has escalated — Dutch notary requires physical presence at signing, €8k unbudgeted.`

Without the tag, describe the situation in your own words: *"Our Dutch RAID risk R-003 has materialised — notary requires physical presence, €8k unbudgeted. Capture the lesson."*

**Mode 0 sidesteps this entirely.** In Mode 0, the skill does the detection and classification itself across the full weekly batch — no tag needed. Mode 0 is the architectural answer to ambiguous input classification.

---



| Mode | When to use |
|---|---|
| **Mode 1 — In-flight capture** | A trigger event has occurred: scope change, risk materialised, issue resolved, delivery problem, positive signal. Capture now, not at close. |
| **Mode 2 — Mid-matter review** | A phase has completed or a quarterly review point has been reached. |
| **Mode 3 — Matter close retrospective** | The matter is closing. Full retrospective with reuse package for the next matter of this type. |

**Mode 1 is the highest-value mode.** A lesson captured the week a scope change lands is ten times more useful than the same observation made at matter close.

---

## Trigger signals

The skill automatically classifies these inputs:

- Scope change notice or scope-change-controller output → Mode 1
- Risk materialised or RAID update → Mode 1
- Status report containing delay or missed milestone signal → Mode 1
- Phase gate or quarterly review → Mode 2
- Matter close or closing → Mode 3

---

## Key outputs

| Mode | Primary output |
|---|---|
| Mode 1 | Structured lesson entry with root cause, lesson statement, and named reuse target |
| Mode 2 | Mid-matter review with lessons table, patterns identified, and adjustments for next phase |
| Mode 3 | Full close retrospective + **Reuse Package** — a forward-facing briefing for the next LPM who picks up a matter of this type |

The **Reuse Package** (Mode 3) is the highest-value output of the skill. It is the section that gets used. The full retrospective is the record.

---

## Skills this one works with

| Skill | Relationship |
|---|---|
| scope-change-controller | Every OOS event → Mode 1 trigger; retrospective findings → Mode 3 input |
| risk-and-issues-manager | Every materialised risk / resolved issue → Mode 1 trigger; "Closed — lesson active" entries → structured capture |
| status-report-drafter | Delivery signals (delays, RAG deterioration) → Mode 1 trigger |
| local-counsel-manager | LC performance issues and scope disputes → Mode 1 trigger |
| matter-intake-scoping | Reuse packages and updated standing assumptions feed back into next matter scoping |
| risk-and-issues-manager | Pattern lessons → standard risk register update |
| scope-change-controller | Pattern lessons → scope baseline template update |

---

## Design principles applied

- **In-flight capture as the primary workflow** — lessons captured at the trigger event, not reconstructed at close
- **Format for reuse, not filing** — lesson entries formatted for scoping sessions; reuse packages formatted for template libraries
- **Explicit feedback loops** — every lesson routed to a named skill whose template it should update
- **Produce the output** — lesson entry produced immediately from available information; not withheld pending complete inputs
- **Template skeleton** — lesson entry, mid-matter review, and retrospective are structured templates the skill populates

---

## License

Apache 2.0. See [LICENSE](../../LICENSE).
