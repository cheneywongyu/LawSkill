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
source_index: 37
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 年表构建器

原始名称：`chronology-builder`  
作者：Andrew Bird  
分类：litigation  
来源：https://lawve.ai/@andrew-bird/skill/chronology-builder  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

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

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

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

---

## SKILL.md Original

---
name: "chronology-builder-andrew-bird"
description: "Builds a litigation chronology from the disclosure bundle itself — every entry attributed to its source document, behind a CPR 31.22 implied-undertaking check, because documents disclosed in English proceedings may only be used for those proceedings. Adds a privilege screen and case-theory significance tagging, so the output is court-facing work product, not a loose timeline. Use when the user asks to build a chronology or timeline from a disclosure bundle, a matter file, or witness statements, or says 'build the chron', 'what happened when', or needs a Statement of Facts ready timeline."
argument-hint: "[slug] [--format=working|sof|witness-[name]]"
metadata:
  author: "Andrew Bird"
  license: "mit"
  version: "2026-06-12"
---

# /chronology

1. Run the CPR 31.22 implied-undertaking check before extracting from disclosed documents.
2. Identify sources: user-provided paths, matter folder, declared sources.
3. Extract dated events, de-duplicate against sources, tag significance per case theory.
4. Output a working chronology by default; Statement-of-Facts or witness-specific variants on request.

---

# Chronology — UK civil litigation

## CPR 31.22 implied-undertaking check

The host workspace enforces the hard gate (matter-slug match against the proceedings reference, privilege posture). If this skill is running, that gate has already passed — this check does not replace it. The skill still performs its own check below and refuses or flags if misuse is indicated; it is not the enforcement.

Before building from any document obtained through standard or extended disclosure in English / Welsh proceedings, confirm the use is permitted:

> CPR 31.22(1): A party to whom a document has been disclosed may use the document only for the purpose of the proceedings in which it is disclosed, except where:
> (a) the document has been read to or by the court, or referred to, at a hearing held in public;
> (b) the court gives permission; or
> (c) the party who disclosed the document and the person to whom the document belongs agree.

Misuse of disclosed documents (using them for a different matter, a different claim, a commercial purpose, or external publication) is a contempt of court.

Confirm before extracting from any source that may have come through disclosure:
- Whether the documents are from disclosure in current proceedings (infer from source path or matter context; surface for confirmation if not evident).
- Whether the chronology is being built for use in those same proceedings (default assumption: yes — same matter slug, same proceedings).

If the answer indicates "different proceedings" or "external use", refuse to build until permission, the parties' agreement, or open-court reference is established — the implied undertaking would otherwise be breached. Flag prominently in the output header: `CPR 31.22 — use restricted to current proceedings unless permitted, agreed, or read in open court.`

Equivalent overlay in disclosure pilot / PD 57AD jurisdictions (Business and Property Courts): the implied undertaking applies; PD 57AD does not displace it.

## Privilege screen

Documents may be subject to legal professional privilege (advice and litigation privilege), common-interest privilege, joint-defence privilege, without-prejudice protection. Extracting privileged content into a chronology that is later shared can risk waiver.

Determine the privilege posture before extracting. Infer from source type (cleared production folder → A; mixed mailbox / dataroom → B; ad-hoc bundle with no review history → B by default; explicit instruction to pause → C). Surface the inferred posture in the output header so counsel can override.

- **A. All sources screened and cleared by counsel.** Extract without flags.
- **B. Mixed or unscreened (default for ambiguous sources).** Extract and tag each entry `priv: ok` / `priv: flag` / `priv: review`. SoF variant filters flagged entries by default.
- **C. Pause and screen first** (use when counsel has explicitly instructed).

## Inputs

- Matter slug, case theory (one sentence — the spine of the case), pivot fact (the single event the case turns on), key facts.
- Sources: disclosure bundle path / cloud folder, supplemental disclosure, witness statements, expert reports, public registers (Companies House, Land Registry), correspondence (open and WP — handle differently).
- Side (claimant / defendant) — drives significance tagging.

## Workflow

### Step 1 — CPR 31.22 implied-undertaking check (above)

### Step 2 — Privilege posture choice (above)

### Step 3 — Source identification

User-provided paths first, then matter folder, then declared sources. Name any source the skill cannot read in the Gaps section — don't silently skip.

### Step 4 — Extraction

For each readable source, identify dated events. One event per document usually. Format: `[date] [actor] [verb] [object/recipient] [content summary]`.

### Step 5 — De-duplication

The same event surfaces in multiple documents (calendar entry, summary email, meeting note). Merge into one entry with multi-source attribution.

### Step 6 — Significance tagging (per side)

- **Claimant (offensive):** 🔴 events establishing elements of the cause (duty, breach, causation, loss, notice), starting limitation in claimant's favour. 🟡 supportive but impeachable. ⚪ background.
- **Defendant (defensive):** 🔴 events breaking causation, establishing limitation, supporting affirmative defence (waiver, estoppel, release, contributory negligence). 🟡 undermining claimant narrative. ⚪ background.

Discipline: 🔴 should be reserved for events that move a factfinder. If everything is 🔴, nothing is.

### Step 7 — Source attribution per entry

Every entry cites its source(s): Bates / disclosure list reference, file path, or witness statement paragraph. Entries derived from web search, model knowledge, or user statement in-session must be tagged `[web search — verify]`, `[model knowledge — verify]`, `[user provided]`.

### Step 8 — Output

Working chronology by default. Variants:

- **Statement of Facts (SoF)**: filtered to 🔴 and select 🟡, prose narrative, with disclosure references. Privilege-flagged entries excluded by default.
- **Witness-specific**: filtered to events where the named witness is sender, recipient, attendee, or subject.

## Output

Produce the chronology with the sections below. Render this as the finished chronology — do not echo this template back, do not leave `[placeholder]` markers or emoji-count scaffolding in the output, and do not invent events to fill rows. Attribute every entry to its source document; if a section has nothing in it, say so.

This is a draft for solicitor review, not legal advice. The chronology and its significance tags are a first pass; counsel decides what goes into a pleading or before the court.

The sections:

- A reviewer-note line: *work product, prepared in contemplation of litigation, subject to litigation privilege.*
- A CPR 31.22 notice naming the proceedings the sources were disclosed in.
- A header: matter slug, build date, case theory, pivot fact, side framing, privilege posture, source count, and entry count by tag.
- The timeline table — one row per de-duplicated event, with date, event, significance tag, privilege flag, and sources.
- Key events (🔴) — the events that move a factfinder, each with what happened, the tie to the case theory, and sources.
- Gaps — date ranges with no events, expected-but-missing events, unreadable sources.

Worked shape for the sections (do not copy the placeholder text — fill from real sources):

[Reviewer note: work product, prepared in contemplation of litigation, subject to litigation privilege.]

> **CPR 31.22 notice.** Sources include documents disclosed in [proceedings]. Use restricted to those proceedings per CPR 31.22 unless permitted, agreed, or already read in open court.

# Chronology — [Matter name]

- **Matter:** [slug]
- **Built:** [YYYY-MM-DD]
- **Case theory:** [one sentence]
- **Pivot fact:** [one sentence]
- **Side framing:** [claimant / defendant]
- **Privilege posture:** A-cleared / B-mixed / C-aborted
- **Sources:** [N] documents across [bundle / supplemental / witness / expert]
- **Entries:** [N] ([N] 🔴 / [N] 🟡 / [N] ⚪)

## Timeline

| Date | Event | Tag | 🔒 | Sources |
|---|---|---|---|---|
| [YYYY-MM-DD] | [actor + verb + object + content] | 🔴/🟡/⚪ | / 🔒-flag / 🔒-review | [D1/123, WS-Smith para 14] |

## Key events (🔴)

### [date] — [event title]
- What: [...]
- Theory tie: [why this matters to the case theory]
- Sources: [...]

## Gaps

- Date ranges with no events: [...]
- Expected but missing: [...]
- Unreadable sources: [...]

## Marker discipline

- `[VERIFY — factual assertion not yet checked against the source doc]`
- `[UNCERTAIN — legal characterisation]`
- `[CITE NEEDED — disclosure reference]`
- `[SME VERIFY — privilege status / borderline significance]`

## Version

- v[N] built on [date] from [source summary]
- v[N-1] superseded

## Incremental builds

If a prior `chronology.md` exists: read, build new from current sources, diff (new / modified / removed), bump version. Preserve provenance and tags.

## What this skill does not do

- Resolve contradictions between sources. Both go in with flags.
- Fill gaps from web search or model knowledge silently. The user is asked first.
- Decide privilege status. The posture is selected; per-entry flags are first-pass; counsel decides distribution.
- Cover Scottish / NI proceedings.
