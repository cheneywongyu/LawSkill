---
id: "30bcbfc3-ab8d-560b-8428-527a7a5bc4d2"
title: "chronology-builder"
title_cn: "年表构建器"
slug: "chronology-builder"
url: "https://lawve.ai/@andrew-bird/skill/chronology-builder"
author: "Andrew Bird"
author_slug: "andrew-bird"
category: "litigation"
language: "en"
license: "MIT"
jurisdictions: "UK"
status: "active"
views: 148
downloads: 13
created_at: "2026-06-12T18:16:10.950906+02:00"
updated_at: "2026-06-16T16:12:04.868754+02:00"
source_index: 37
---

# 年表构建器

原始名称：`chronology-builder`  
作者：Andrew Bird  
分类：litigation  
来源：https://lawve.ai/@andrew-bird/skill/chronology-builder

## 中文 README

# 年表

从披露包本身构建诉讼年表 - 每个条目都归因于其源文件，背后有 CPR 31.22 隐含承诺检查。

在英国民事诉讼中披露的文件只能用于这些诉讼；在其他地方使用它们是藐视法庭的行为。该技能承认，在提取任何内容之前：它会检查 CPR 31.22 的位置，筛选特权，然后根据每个条目使用披露参考、文件路径或证人陈述段落构建年表，并根据案例理论标记每个事件的重要性。不是时间线生成器——采购和项目检查才是重点。默认情况下输出工作年表，或根据要求输出事实陈述和证人特定变体。

＃＃ 安装
```bash
git clone https://github.com/b1rdmania/chronology ~/.claude/skills/chronology
```
或者在 [Legalise](https://github.com/b1rdmania/legalise) 工作区中：从技能库中添加它 — 查看清单、授予功能、启用某个事项、从聊天中运行。每次运行都会留下签名的、可审计的记录。

＃＃ 用法
```
/chronology [slug] [--format=working|sof|witness-[name]]
```
通过披露包、证人陈述、案例理论、关键事实和侧面来针对一个问题进行运行。它返回一个年表，其中每个事件都归因于其来源。
```
/chronology khan-v-acme --format=sof
```
建立 Khan v Acme 事件的年表，并将其过滤为事实陈述的叙述 — 🔴 并选择 🟡 事件、散文、披露参考资料、排除带有特权标记的条目。

## 它的作用

- 在从任何披露的文档中提取内容之前，运行 CPR 31.22 默示承诺检查，如果使用看起来像是不同的事项、商业目的或外部出版物，则拒绝或标记。
- 确定权限状态（清除/混合/暂停和屏幕）并标记条目“priv: ok”/“priv: flag”/“priv: review”（其中源未屏蔽）。
- 提取整个包中注明日期的事件、证人陈述、专家报告、公共登记册和信件；将多个文档中出现的同一事件重复删除到具有多源归因的一个条目中。
- 将每个条目归因于其来源 - 贝茨/披露参考、文件路径或证人陈述段落。来自网络搜索、模型知识或会话中用户语句的条目被标记以进行验证。
- 从指定方的角度，根据案例理论标记每个事件的重要性（🔴移动事实发现者，🟡支持但可弹劾，⚪背景）。
- 生成工作年表、事实陈述或证人特定时间线，其中包含关键事件部分、差距部分和用于增量重建的版本跟踪。

## 它不做什么

- 解决来源之间的矛盾——两者都带有标志。
- 默默地填补网络搜索或模型知识的空白 - 首先询问用户。
- 决定特权状态——选择姿势并且每个条目标志是第一通过；律师决定分配。
- 更换律师对诉状或法庭上的内容的判断。年表及其标签是供律师审查的草稿，而不是法律建议。
- 涵盖苏格兰或北爱尔兰诉讼程序。

## 要求

- 克劳德代码或克劳德合作。无需 MCP 连接器。
- 要针对的事项（披露包、证人陈述或事项文件夹）。
- CPR 31.22/特权硬门由主机工作区上游强制执行。该技能本身的检查是对其的补充，而不是取代它。仅在您被允许使用的材料上独立运行。

## 许可证

阿帕奇-2.0。

---

## Original README

# chronology

Builds a litigation chronology from the disclosure bundle itself — every entry attributed to its source document, behind a CPR 31.22 implied-undertaking check.

Documents disclosed in English civil proceedings may only be used for those proceedings; using them elsewhere is a contempt of court. This skill acknowledges that before it extracts anything: it checks the CPR 31.22 position, screens for privilege, then builds the chronology with a disclosure reference, file path, or witness-statement paragraph against every entry, and tags each event for significance against the case theory. Not a timeline generator — the sourcing and the undertaking check are the point. Outputs a working chronology by default, or Statement-of-Facts and witness-specific variants on request.

## Install

```bash
git clone https://github.com/b1rdmania/chronology ~/.claude/skills/chronology
```

Or in a [Legalise](https://github.com/b1rdmania/legalise) workspace: add it from the skill library — review the manifest, grant capabilities, enable on a matter, run from chat. Every run leaves a signed, auditable record.

## Usage

```
/chronology [slug] [--format=working|sof|witness-[name]]
```

Run it against a matter with the disclosure bundle, witness statements, case theory, pivot fact, and side. It returns a chronology with every event attributed to its source.

```
/chronology khan-v-acme --format=sof
```

Builds the chronology for the Khan v Acme matter and filters it to a Statement-of-Facts narrative — 🔴 and select 🟡 events, prose, disclosure references, privilege-flagged entries excluded.

## What it does

- Runs a CPR 31.22 implied-undertaking check before extracting from any disclosed document, and refuses or flags if the use looks like a different matter, a commercial purpose, or external publication.
- Determines the privilege posture (cleared / mixed / pause-and-screen) and tags entries `priv: ok` / `priv: flag` / `priv: review` where sources are unscreened.
- Extracts dated events across the bundle, witness statements, expert reports, public registers, and correspondence; de-duplicates the same event surfacing in multiple documents into one entry with multi-source attribution.
- Attributes every entry to its source — Bates / disclosure reference, file path, or witness-statement paragraph. Entries from web search, model knowledge, or in-session user statements are tagged for verification.
- Tags each event for significance against the case theory from the named side's view (🔴 moves a factfinder, 🟡 supportive but impeachable, ⚪ background).
- Produces a working chronology, a Statement-of-Facts narrative, or a witness-specific timeline, with a Key Events section, a Gaps section, and version tracking for incremental rebuilds.

## What it doesn't do

- Resolve contradictions between sources — both go in with flags.
- Fill gaps from web search or model knowledge silently — the user is asked first.
- Decide privilege status — the posture is selected and per-entry flags are first-pass; counsel decides distribution.
- Replace counsel's judgment on what goes into a pleading or before the court. The chronology and its tags are a draft for solicitor review, not legal advice.
- Cover Scottish or Northern Irish proceedings.

## Requirements

- Claude Code or Claude Cowork. No MCP connectors required.
- A matter to run against (a disclosure bundle, witness statements, or matter folder).
- The CPR 31.22 / privilege hard gate is enforced by the host workspace upstream. The skill's own check supplements it, not replaces it. Run standalone only on material you are permitted to use.

## License

Apache-2.0.
