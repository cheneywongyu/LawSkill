---
id: "9c1b0dc7-8bed-513f-b83e-a1a9c254e67e"
title: "EU AI Act Transparency Assessor"
title_cn: "欧盟人工智能法案透明度评估员"
slug: "eu-ai-act-transparency-assessor"
url: "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-transparency-assessor"
author: "Oliver Schmidt-Prietz"
author_slug: "oliver-schmidt-prietz"
category: "compliance"
language: "en"
license: "AGPL 3.0"
jurisdictions: "EU"
status: "active"
source_index: 8
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 欧盟人工智能法案透明度评估员

原始名称：`EU AI Act Transparency Assessor`  
作者：Oliver Schmidt-Prietz  
分类：compliance  
来源：https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-transparency-assessor  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

# 欧盟人工智能法案第 50 条透明度评估员 — 部署指南

请参阅 [CHANGELOG.md](CHANGELOG.md) 了解版本历史记录。

## 概述

欧盟人工智能法案 **第 50 条透明度评估员** - 一项独立但具有套件意识的技能，可识别哪些
艺术的。 50(1)–(5) 透明度义务适用于系统并指导必须实施的内容，并通过
当。它产生两个可交付成果：正式的**迷你报告**和每项义务**合规检查表**
带有间隙标志。

- **五项职责，两种角色** — 50(1) 交互披露和 50(2) 合成内容标记（提供商）；
  50(3) 情感/生物识别通知和 50(4) 深度伪造/公共利益文本标签（部署者）； 50(5)
  交付质量（横切）
- **触发 + 豁免逻辑** — 普通消费者显而易见性测试 (50(1))，辅助功能
  豁免（50（2）），艺术。 5 门 (50(3))，以及狭窄的 50(4) 例外
- **实施深度** — 最终实践守则的分层标记架构，欧盟官方
  标签图标集和每种模式的放置
- **已注明日期、综合意识路线图** - 2026年8月2日，2026年12月2日遗产宽限期（2026年6月29日由理事会通过，
  等待 OJ）、2026 年 7 月 22 日签署截止日期以及 2027 年 2 月 2 日代码互操作日期
- **独立但可链接** — 摄取分类器的“ASSESSMENT CONTEXT”块并发出自己的
  便携式艺术。 50 合规块

## 文件结构
```
ai-act-transparency/
├── SKILL.md                              # Main skill instructions (deploy this)
├── CHANGELOG.md                          # Version history
├── evals/
│   └── evals.json                        # Test cases
└── references/
    ├── art50-duties.md                   # The five duties + 50(6) governance
    ├── obviousness-and-exceptions.md     # Obviousness test, exemptions, boundaries, cross-provision interactions
    ├── code-of-practice-final.md         # Final Code of Practice (10 Jun 2026) — provider marking + deployer labelling
    ├── commission-guidelines-art50.md    # Draft Commission Guidelines (8 May 2026)
    ├── eu-labelling-icons.md             # Official EU icon set + design/placement requirements
    ├── timeline-and-grace.md             # Dated roadmap + Digital Omnibus grace (adopted, awaiting OJ)
    ├── implementation-checklists.md      # Provider / deployer / SME action checklists
    ├── report-template-art50.md          # Mini-report, checklist, and portable compliance block templates
    └── sources.md                        # Audit-grade source manifest (URLs, status, last-checked, uncertainty tiers)
```
## 部署

### Claude.ai（用户技能）

1. 转到 **设置 → 个人资料 → 自定义技能**（或同等内容）
2.上传整个`ai-act-transparency/`文件夹结构
3.技能自动触发“第50条透明度义务”，“我们是否需要标记AI内容/
   deepfakes”、“AI 聊天机器人披露”、“合成内容标记”、“Kennzeichnungspflicht”或
   “透明”

### 克劳德代码/自定义 MCP 设置

1. 将 `ai-act-transparency/` 文件夹复制到您的技能目录：
   ```bash
   cp -r ai-act-transparency/ /path/to/your/skills/user/ai-act-transparency/
   ```
| Phase | Description |
|-------|-------------|
| **Phase 1: Intake** | System description + optional `ASSESSMENT CONTEXT` ingestion |
| **Phase 2: Role Determination** | Provider / deployer / both |
| **Phase 3: Trigger Determination** | Per-duty trigger + obviousness/exception test |
| **Phase 4: Implementation Deep-Dive** | What to build per triggered duty |
| **Phase 5: Dated Roadmap** | Omnibus-aware deadlines |
| **Phase 6: Output** | Mini-report + checklist + portable compliance block |
| Document | Reference |
|----------|-----------|
| EU AI Act | Regulation (EU) 2024/1689, Article 50 + recitals 132–137 |
| Deepfake definition | Art. 3(60) |
| Penalty band | Art. 99(4) — Tier 2 (EUR 15M / 3%) |
| Code of Practice on Transparency of AI-Generated Content | Final, 10 June 2026 (Art. 50(7)) |
| Commission Guidelines on Art. 50 | Draft, 8 May 2026 (Art. 96(1)(d)) |
| Digital Omnibus | 50(2) legacy-marking grace to 2 Dec 2026 — adopted (Council final green light 29 Jun 2026), awaiting OJ publication |
2. 确保该技能已在您的配置中注册

## 用法

### 快速入门

要么重新开始，要么从先前的技能中移交背景：

> “我们正在以我们自己的品牌推出人工智能支持聊天机器人和图像生成器。第 50 条是什么
> 透明度义务适用，我们实施什么以及何时实施？”

或者来自分类器的链：

> “这是分类器中的评估上下文块 - 评估我们的第 50 条透明度义务
> 并出示报告和清单。”

### 触发短语

- “检查第 50 条透明度义务”/“Transparenzpflichten”
- “我们需要标记人工智能内容/深度伪造吗”/“Kennzeichnungspflicht”
-“人工智能聊天机器人披露”/“合成内容标记”/“水印”
- “我们必须根据第 50 条实施什么以及何时实施”

### 工作流程


## 监管依据


## 许可和免责声明

这种技能产生结构化的艺术。 50 透明度指南基于法规 (EU) 2024/1689，最终版本
人工智能生成内容透明度的实践准则，以及委员会的草案Art。 50 条指南。它
不是法律建议。本准则是自愿性的，遵守并不是合规的确凿证据；只有
CJEU可以对艺术进行权威解释。 50. 输出结果应在之前由合格的法律顾问进行审查
监管使用。

根据 AGPL-3.0 许可 - 请参阅存储库根目录中的 [LICENSE](../../LICENSE)。

---

*由 Oliver Schmidt-Prietz 创建 - OneZero Legal*

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

# EU AI Act Article 50 Transparency Assessor — Deployment Guide

See [CHANGELOG.md](CHANGELOG.md) for version history.

## Overview

EU AI Act **Article 50 Transparency Assessor** — a standalone-but-suite-aware skill that identifies which
of the Art. 50(1)–(5) transparency duties apply to a system and guides what must be implemented and by
when. It produces two deliverables: a formal **mini-report** and a per-obligation **compliance checklist**
with gap flags.

- **Five duties, two roles** — 50(1) interaction disclosure and 50(2) synthetic-content marking (provider);
  50(3) emotion/biometric notice and 50(4) deepfake/public-interest-text labelling (deployer); 50(5)
  delivery quality (cross-cutting)
- **Trigger + exemption logic** — the average-consumer obviousness test (50(1)), the assistive-function
  exemption (50(2)), the Art. 5 gate (50(3)), and the narrow 50(4) exceptions
- **Implementation depth** — the final Code of Practice's layered marking architecture, the official EU
  labelling icon set, and per-modality placement
- **Dated, Omnibus-aware roadmap** — 2 Aug 2026, the 2 Dec 2026 legacy grace (adopted by Council 29 Jun 2026,
  awaiting OJ), the 22 Jul 2026 signatory deadline, and the 2 Feb 2027 Code interoperability date
- **Standalone but chainable** — ingests the classifier's `ASSESSMENT CONTEXT` block and emits its own
  portable Art. 50 compliance block

## File Structure

```
ai-act-transparency/
├── SKILL.md                              # Main skill instructions (deploy this)
├── CHANGELOG.md                          # Version history
├── evals/
│   └── evals.json                        # Test cases
└── references/
    ├── art50-duties.md                   # The five duties + 50(6) governance
    ├── obviousness-and-exceptions.md     # Obviousness test, exemptions, boundaries, cross-provision interactions
    ├── code-of-practice-final.md         # Final Code of Practice (10 Jun 2026) — provider marking + deployer labelling
    ├── commission-guidelines-art50.md    # Draft Commission Guidelines (8 May 2026)
    ├── eu-labelling-icons.md             # Official EU icon set + design/placement requirements
    ├── timeline-and-grace.md             # Dated roadmap + Digital Omnibus grace (adopted, awaiting OJ)
    ├── implementation-checklists.md      # Provider / deployer / SME action checklists
    ├── report-template-art50.md          # Mini-report, checklist, and portable compliance block templates
    └── sources.md                        # Audit-grade source manifest (URLs, status, last-checked, uncertainty tiers)
```

## Deployment

### Claude.ai (User Skills)

1. Go to **Settings → Profile → Custom Skills** (or equivalent)
2. Upload the entire `ai-act-transparency/` folder structure
3. The skill auto-triggers on "Art. 50 transparency obligations", "do we need to label AI content /
   deepfakes", "AI chatbot disclosure", "synthetic content marking", "Kennzeichnungspflicht", or
   "Transparenzpflichten"

### Claude Code / Custom MCP Setup

1. Copy the `ai-act-transparency/` folder to your skills directory:
   ```bash
   cp -r ai-act-transparency/ /path/to/your/skills/user/ai-act-transparency/
   ```
2. Ensure the skill is registered in your configuration

## Usage

### Quick Start

Either start fresh or hand over context from a prior skill:

> "We're launching an AI support chatbot and an image generator under our own brand. What Article 50
> transparency duties apply, what do we implement, and by when?"

Or chain from the classifier:

> "Here's the ASSESSMENT CONTEXT block from the classifier — assess our Art. 50 transparency obligations
> and produce the report and checklist."

### Trigger Phrases

- "Check Art. 50 transparency obligations" / "Transparenzpflichten"
- "Do we need to label AI content / deepfakes" / "Kennzeichnungspflicht"
- "AI chatbot disclosure" / "synthetic content marking" / "watermarking"
- "What must we implement under Art. 50 and by when"

### Workflow

| Phase | Description |
|-------|-------------|
| **Phase 1: Intake** | System description + optional `ASSESSMENT CONTEXT` ingestion |
| **Phase 2: Role Determination** | Provider / deployer / both |
| **Phase 3: Trigger Determination** | Per-duty trigger + obviousness/exception test |
| **Phase 4: Implementation Deep-Dive** | What to build per triggered duty |
| **Phase 5: Dated Roadmap** | Omnibus-aware deadlines |
| **Phase 6: Output** | Mini-report + checklist + portable compliance block |

## Regulatory Basis

| Document | Reference |
|----------|-----------|
| EU AI Act | Regulation (EU) 2024/1689, Article 50 + recitals 132–137 |
| Deepfake definition | Art. 3(60) |
| Penalty band | Art. 99(4) — Tier 2 (EUR 15M / 3%) |
| Code of Practice on Transparency of AI-Generated Content | Final, 10 June 2026 (Art. 50(7)) |
| Commission Guidelines on Art. 50 | Draft, 8 May 2026 (Art. 96(1)(d)) |
| Digital Omnibus | 50(2) legacy-marking grace to 2 Dec 2026 — adopted (Council final green light 29 Jun 2026), awaiting OJ publication |

## License & Disclaimer

This skill produces structured Art. 50 transparency guidance based on Regulation (EU) 2024/1689, the final
Code of Practice on Transparency of AI-Generated Content, and the Commission's draft Art. 50 Guidelines. It
is not legal advice. The Code is voluntary and adherence is not conclusive evidence of compliance; only the
CJEU can authoritatively interpret Art. 50. Outputs should be reviewed by qualified legal counsel before
regulatory use.

Licensed under AGPL-3.0 — see [LICENSE](../../LICENSE) at the repo root.

---

*Created by Oliver Schmidt-Prietz — OneZero Legal*

---

## SKILL.md Original

---
name: "eu-ai-act-transparency-assessor-oliver-schmidt-prietz"
description: "Assesses which of the Art. 50(1)-(5) transparency obligations of the EU AI Act apply to a given AI system's provider or deployer, grounded in the final Code of Practice on Transparency of AI-Generated Content (June 2026) and the Commission's draft Art. 50 Guidelines. Covers AI-chatbot disclosure, deepfake and synthetic-content marking/watermarking, emotion-recognition and biometric-categorisation notices, the machine-readable marking duty, the obviousness exceptions, and the implementation timeline. Outputs a formal mini-report plus a per-obligation compliance checklist with gap flags. For breadth-first tier triage use the EU AI Act System Classifier; for raw Art. 50 text and Q&A use the EU AI Act Knowledge Base; for the full role x tier matrix use the EU AI Act Obligations Mapper."
metadata:
  author: "Oliver Schmidt-Prietz"
  license: "agpl-3.0"
  version: "2026-07-05"
---

# EU AI Act — Article 50 Transparency Assessor

Identify which **Article 50 transparency duties** (Regulation (EU) 2024/1689) apply to a system, decide
**what must be implemented and by when**, and produce a formal mini-report plus a per-obligation
compliance checklist. Works standalone, or ingests a prior classifier `ASSESSMENT CONTEXT` block.

## Disclaimer (show at session start, do not block)

> **Important:** This skill provides structured Art. 50 transparency guidance based on the EU AI Act
> (Regulation (EU) 2024/1689), the final **Code of Practice on Transparency of AI-Generated Content**
> (10 Jun 2026), and the Commission's **draft** Art. 50 Guidelines (8 May 2026). It is **not legal
> advice**; final decisions need qualified counsel, and only the **CJEU** can authoritatively interpret
> Art. 50.
> • **Penalty band:** non-compliance is **Tier 2 — up to EUR 15,000,000 or 3% of worldwide annual
> turnover** (Art. 99(4)(g); €750k for EU bodies). *Not* the €35M / 7% band (that is Art. 5 prohibited practices).
> • **Dates:** Art. 50 applies from **2 August 2026** (Chapter IV general application — *not* the 2 Aug
> 2025 tranche). The 50(2) **legacy-system marking grace to 2 December 2026** is now **adopted** — the Digital
> Omnibus cleared the European Parliament (Jun 2026) and the **Council (final green light, 29 Jun 2026)** and
> is **awaiting OJ publication** ("shortly"; in force the 3rd day after). Treat 2 Dec 2026 as near-settled;
> only until the OJ text appears does the statutory 2 Aug 2026 date formally still govern legacy systems.
> Recommend a quick live OJ / law-tracker check.
> • **Soft law:** the Code of Practice is **final but voluntary** and under adequacy assessment (still
> pending) — adherence is **not conclusive evidence** of compliance. The Commission Guidelines are still
> **draft** (8 May 2026; consultation closed 3 Jun 2026). See [references/sources.md](references/sources.md)
> for the live source manifest and uncertainty tiers.

---

## Start here: pick a mode (ask this first)

Before intake, offer the user a route — do **not** default straight to the full report:

> **How deep do you need to go?**
> **1. Quick triage** — a yes/no on which duties bite and the earliest deadline (a few questions, a short answer).
> **2. Full assessment** — the formal mini-report + per-obligation checklist + portable compliance block.
> **3. Implementation plan** — what product / legal / engineering actually has to build, per triggered duty.

- **Quick triage** → run a compressed intake (role + what it does + market date), output only the
  **Bottom line** block (see Phase 6.0) and the top gaps; then offer to escalate to Full.
- **Full assessment** → the whole six-phase workflow.
- **Implementation plan** → Phases 1–4 focused on the build, load
  [references/implementation-checklists.md](references/implementation-checklists.md).

If the user doesn't choose, assume **Quick triage** and offer to go deeper — leading light beats a wall of report.

## Uncertainty markers (use these in every output)

Tag each material statement so the user can see how firm it is (this is the user-facing view of the
statute / soft-law / open-issue strata — see [references/sources.md](references/sources.md)):

- **[Settled law]** — the Regulation (Art. 50, 3(60), 99(4)(g)); in force.
- **[Draft guidance]** — the Commission Art. 50 Guidelines (draft, 8 May 2026); persuasive, non-binding.
- **[Best practice]** — the voluntary Code of Practice / EU icon set; adherence ≠ conclusive evidence.
- **[Open issue]** — adopted-but-unpublished (Omnibus/OJ), pending (CoP adequacy assessment), or un-litigated
  (no CJEU ruling on Art. 50).

State the **most load-bearing** uncertainty explicitly (e.g. "the 2 Dec 2026 grace is **[Open issue]** until OJ").

---

## When to Search the Web (run quietly; report as one line)

Do these checks **without narrating the research**. Collapse the result into a single **Source status** line
in the output (Phase 6.0), e.g.:
`Source status (checked <date>): Guidelines draft · Omnibus adopted, awaiting OJ · CoP adequacy pending · icons published.`

**On activation — always search for (these change month to month):**
```
EU AI Act Article 50 Commission guidelines final adopted 2026
Code of Practice transparency AI-generated content adequacy assessment AI Board 2026
```

**Digital Omnibus OJ check — always (the 2 Dec 2026 grace is adopted, awaiting OJ publication):**
```
Digital Omnibus AI Act Article 50 watermarking grace 2 December 2026 Official Journal published
```

**For 50(2) marking / standards:**
```
EU AI Act Art 50(2) machine-readable marking C2PA implementing act standard 2026
AI Office transparency code signatories list 22 July 2026
```

**For 50(4) labelling / icons:**
```
EU official AI-generated content labelling icons set 2026
```

If web results conflict with this skill's reference files, **prefer the newer official source** and tell
the user what changed.

---

## Workflow: Ask Questions ONE AT A TIME

Read the reference files as each phase needs them. Do not dump all questions at once — this is a
conversational assessment.

### Phase 1: Intake

**Prior Assessment Context (optional):**
> "If you have already run another EU AI Act skill (e.g. the classifier), paste its `ASSESSMENT CONTEXT`
> block here. I'll use `Art. 50:`, `Role:`, `Classification:`, and `GPAI:` to skip questions you've
> already answered."

If a block is provided:
- a non-empty `Art. 50: [triggers]` → pre-populate Phase 3 and confirm rather than re-derive;
- `Role:` → satisfies Phase 2;
- `Classification:` / `GPAI:` → informs the Art. 50 ↔ Art. 53 layering note (Phase 4);
- if any field conflicts with the user's answers, **flag the inconsistency** before proceeding.

If no block is provided, run the intake as a **short decision-tree, one step at a time** — not one dense
four-part question (honour the "one at a time" rule below). Walk these in order, adapting to answers:

1. **What does the system do?** (one-line description)
2. **Does it generate content?** If yes, **which modalities** — audio / image / video / text?
3. **Does it interact directly with people?** (chatbot, voice agent, autonomous agent)
4. **What's your role** — do you **build/place it on the market** (provider), **use it under your authority**
   (deployer), or **both**?
5. **When was it / will it be placed on the EU market?** — this date drives the 50(2) grace logic.

In **Quick triage** mode, ask only 2, 4 and 5 (plus 3 if relevant) and skip to the Bottom line.
Once you have the facts, **echo them back** as a "Facts I'm relying on" block (Phase 6.6) and ask the user
to correct anything before you analyse.

Read [references/art50-duties.md](references/art50-duties.md) for the duty definitions before Phase 3.

### Phase 2: Role determination

Art. 50 splits duties by role:

| Duty | Binds |
|------|-------|
| 50(1) interaction disclosure, 50(2) synthetic-content marking | **Provider** |
| 50(3) emotion/biometric notice, 50(4) deepfake/PI-text labelling | **Deployer** |
| 50(5) delivery quality | whoever owes (1)–(4) |

- If the context block carries `Role:`, use it.
- Otherwise ask whether the organisation **builds/places the system on the market** (provider), **uses it
  under its own authority** (deployer), or **both** (a provider that also deploys owes all four duties).
- For Art. 25 quasi-provider / substantial-modification depth (a rebrand or material fine-tuning can make
  a deployer a provider), **route to `ai-act-roles`** rather than re-deriving it here.

### Phase 3: Trigger determination (one sub-section per duty)

For each duty: apply the **trigger test**, then the **obviousness / exception test**. Read
[references/obviousness-and-exceptions.md](references/obviousness-and-exceptions.md).

**3.1 — Art. 50(1) interaction disclosure (provider).**
Trigger: the system interacts directly with natural persons. Then test **obviousness** against the
**average-consumer** multi-factor standard (context, vulnerable groups, AI literacy, realism); dev-only
code assistants and in-game NPCs are plausibly "obvious", but for general-audience systems and **AI
companions** the exemption is largely closed. **What does *not* satisfy 50(1)** (draft Guidelines para. 35):
disclosure buried in **T&Cs**, **machine-readable signals alone**, a generic "**assistant**" label, or
"this system uses LLMs". **Agentic AI** must self-disclose in every reasonably-foreseeable human interaction
(para. 28). Authorised law-enforcement use is the only statutory exception.

**3.2 — Art. 50(2) synthetic-content marking (provider).**
Trigger: the system generates synthetic audio/image/video/text — **not GPAI-specific**; single-purpose
tools count, and **machine translation is IN scope** (a translation engine generates new text; draft
Guidelines para. 54). Test the **assistive-function** exemption (trivial in-place editing that preserves
meaning → out; generation → in). Note the Guidelines' carve-outs: **source code** (para. 64), narrow
**cumulative B2B/industrial** (para. 81), **in-game generation** (para. 82). **Flag the market-placement
date** — it decides whether the legacy grace applies (Phase 5).

**3.3 — Art. 50(3) emotion-recognition / biometric-categorisation notice (deployer).**
Trigger: the system performs emotion recognition or biometric categorisation. **First check Art. 5:** if
the use is in the workplace/education (5(1)(f)) or targets sensitive characteristics (5(1)(g)) it is
**prohibited** — 50(3) does not apply and the Art. 5 violation governs. Otherwise the 50(3) notice is owed
**in addition to** any high-risk/Art. 5 analysis and **regardless of risk tier** — it covers **all**
biometric categorisation, *including non-high-risk* age- or gender-inference for ads or analytics
(para. 98). **Race/ethnicity inference is not a 50(3) example — it is a *prohibited* 5(1)(g)
categorisation; see the Art. 5 gate above.** Coordinate with GDPR Art. 13/14.

**3.4 — Art. 50(4) deepfake & public-interest-text labelling (deployer).**
Two steps, not one categorical rule. **Step 1 — is it a deepfake?** Apply the Art. 3(60) four-element test
(draft Guidelines para. 107): *appreciable resemblance · capable of existing in reality · existing persons/
objects/places/**entities**/events · false authenticity judged by the **actual audience** (para. 108)*. A
photorealistic **invented** person is IN (plausibly could exist); dragons/impossible content are OUT; a
substantive AI edit of a journalistic image can be IN. **Step 2 — exception?** law enforcement; **evidently**
artistic/creative/fictional → *proportionate* disclosure (form only); public-interest **text** under human
editorial review. **Marketing has no blanket pass** — *primarily-commercial* content gets **full disclosure**
(para. 114); don't say marketing categorically qualifies, nor that it never can. (Or the AI-text limb:
public-interest text without human editorial control.)

**3.5 — Art. 50(5) delivery quality (cross-cutting).**
For every triggered duty, disclosure must be clear, distinguishable, timely (≤ first interaction/exposure)
and accessible — conform to the **applicable accessibility requirements** (assess EAA applicability; use
**WCAG AA** as the design benchmark for web/mobile UI). Art. 50(5) does not itself name the EAA.

**Close Phase 3 with the trigger-summary table:**

| Duty | Binds | Triggered? | Trigger basis | Obviousness / Exception verdict |
|------|-------|-----------|---------------|---------------------------------|
| 50(1) | Provider | [Y/N] | … | … |
| 50(2) | Provider | [Y/N] | … | … |
| 50(3) | Deployer | [Y/N] | … | … |
| 50(4) | Deployer | [Y/N] | … | … |
| 50(5) | [owner] | [Y/N] | … | … |

### Phase 4: Implementation deep-dive (per triggered duty)

For each **triggered** duty, explain what to build. Load the matching reference:

- **50(2) marking** → [references/code-of-practice-final.md](references/code-of-practice-final.md).
  Distinguish **three tiers**: (1) **statutory floor** *[Settled law]* — machine-readable + detectable, four
  criteria *"as far as technically feasible"* (no technique and no "two layers" mandated); (2) **Code route**
  *[Best practice]* — **≥ 2 layers** (signed metadata + imperceptible watermark), detection is **half the
  duty** (free-of-charge, per-technique), text **> 200 tokens must be watermarked**; (3) robust best practice.
  Adherence to the Code is **not conclusive evidence** of compliance. If the system uses a GPAI model:
  Art. 50(2) binds it at the **system** layer; model-level marking is **encouraged best practice** (Guidelines
  paras. 24/70; Code Measure 1.1.2) — **not** an Art. 53(1)(d) duty (53(1)(d) is the training-data summary).
- **50(4) labelling** → [references/eu-labelling-icons.md](references/eu-labelling-icons.md): the **three
  official EU icons** (**Basic**, **Fully AI-Generated**, **Partially AI-Modified**) — icons **optional**, the
  mandatory core is the capitalised **"AI"** acronym; **GENERATED/MODIFIED** is optional and copyright-
  sensitive; **audio needs a mandatory audible disclaimer**; embed-by-default placement, WCAG contrast,
  persistence. For **published text**, the Commitment 4 editorial-responsibility policy.
- **50(1) / 50(3) notices** → notice content, placement, and timing (Art. 50(5)); for 50(3), the GDPR
  Art. 13/14 coordination.

Concrete action items per role are in
[references/implementation-checklists.md](references/implementation-checklists.md).

### Phase 5: Dated roadmap

Read [references/timeline-and-grace.md](references/timeline-and-grace.md). Anchor the roadmap on:

- **22 Jul 2026** — Code **initial-signatory** form deadline (to appear on the list published before 2 Aug
  2026; signing is encouraged, not mandatory, and possible later too).
- **2 Aug 2026** — 50(1)/(3)/(4) and 50(2) for newly-placed systems apply, **no transition**.
- **2 Dec 2026** — legacy 50(2) marking — **[Open issue → near-settled]**: the Digital Omnibus grace is
  **adopted** (EP Jun 2026; Council final green light **29 Jun 2026**) and **awaiting OJ publication** (in
  force the 3rd day after). Until the OJ text appears, 2 Aug 2026 formally still governs legacy systems.
  **Recommend a quick live OJ / law-tracker check** — but do not overstate the residual risk.
- **2 Feb 2027** — the Code's watermark-detection **interoperability** obligation (distinct from the
  superseded original legacy-marking proposal of the same date).
- Content already public **before 2 Aug 2026** needs **no retrospective** marking/labelling.

### Phase 6: Output (lead light, then the formal artifacts)

Read [references/report-template-art50.md](references/report-template-art50.md). **Always show 6.0–6.6 first**
as a short conversational answer; only produce the heavy artifacts (a)–(c) when the user is in **Full**
mode or asks for them.

- **6.0 Bottom line** (always, ≤ 6 lines): role · duties triggered · earliest deadline · biggest gap · the
  one load-bearing legal uncertainty (tagged with an uncertainty marker).
- **6.5 Readiness** (operational indicator, **not** legal advice): `Readiness: Low / Med / High` ·
  `Critical blockers: N` · `Must-fix before deadline: N` · `Counsel review needed: yes/no`.
- **6.6 Facts I'm relying on**: the intake echoed back, so the user can correct a misread before trusting
  the analysis.
- **Source status** line: one line, `checked <date>`, per the uncertainty markers.

Then, on request / in Full mode:

1. **(a) the mini-report** (Subject/Scope → Role → Trigger analysis → Implementation → Exceptions →
   Roadmap → Gaps + penalty exposure → Conclusion);
2. **(b) the per-obligation checklist** with `✓ / ◐ / ✗ / N/A` gap flags and a SUMMARY line;
3. **(c) the portable `ART. 50 TRANSPARENCY COMPLIANCE BLOCK`** for chaining.

Offer an **optional .docx export** by handing the report to the **`ai-act-report`** skill (its Phase 4
Word export) — do not re-implement document generation here. This skill **does not** emit RoPA's
`interchange-schema.json`.

---

## Related skills

- **`ai-act-classifier`** — upstream triage: is it an AI system, which risk tier, which 50 triggers fire.
  Paste its `ASSESSMENT CONTEXT` into Phase 1 to skip re-triage.
- **`ai-act-roles`** — Art. 25 quasi-provider / substantial-modification depth (defer the role-edge cases).
- **`ai-act-knowledge`** — verbatim Art. 50 regulation text, recitals, and Q&A.
- **`ai-act-obligations`** — the full role × tier obligation matrix (Art. 50 is a slice of it).
- **`ai-act-report`** — consolidated 9-section Prüfbericht and the .docx export this skill defers to.

---

## Critical Reminders

1. **Penalty is €15M / 3% (Tier 2, Art. 99(4)(g); €750k EU bodies)** — never the €35M / 7% Art. 5 band.
2. **The 2 Dec 2026 legacy-marking grace is ADOPTED, awaiting OJ** — the Digital Omnibus cleared EP (Jun 2026)
   and Council (final green light 29 Jun 2026); treat 2 Dec 2026 as near-settled, recommend a live OJ check,
   and note 2 Aug 2026 formally governs only until the OJ text appears. **Do not** call it "politically agreed"
   or "conditional / may not happen".
3. **The Code of Practice is voluntary and adherence is not conclusive evidence of compliance** — it is a
   strong evidentiary anchor, not a safe harbour; do **not** call it a "presumption of conformity". Separate
   the **statutory floor** from the **Code's layered architecture**.
4. **The Commission Art. 50 Guidelines are draft (8 May 2026)** — non-binding; only the CJEU is authoritative.
5. **Agentic AI self-discloses** in every reasonably-foreseeable human interaction (Guidelines para. 28).
   50(1) is **not** satisfied by T&Cs, machine-readable signals alone, "assistant", or "uses LLMs" (para. 35).
6. **50(3) is gated by Art. 5** (workplace/education emotion recognition and sensitive biometric
   categorisation are prohibited — a notice cannot cure it), but otherwise applies **additively and to all
   biometric categorisation, incl. non-high-risk** age- or gender-inference (para. 98) — race/ethnicity
   inference is itself *prohibited* under 5(1)(g), not a 50(3) case.
7. **Deepfake = Art. 3(60)** — apply the **four-element test** (para. 107); a photorealistic **invented**
   person is IN. **Marketing has no blanket pass**: primarily-commercial content gets full disclosure — but
   don't say marketing can *never* be artistic. **Machine translation is IN scope** (para. 54).
8. **Model-level GPAI marking is encouraged best practice — NOT an Art. 53(1)(d) duty** (53(1)(d) is the
   training-data summary). Art. 50(2) binds the **AI-system** layer, including GPAI systems.
9. **50(2): no single technique** satisfies all four criteria; **text > 200 tokens must be watermarked**;
   **detection is half the duty**. **No retrospective marking** of content already public before 2 Aug 2026.
10. **Provider 50(2) marking ≠ deployer 50(4) labelling** — distinct duties on distinct parties; a deepfake
    can require both. A platform **merely passing on** third-party content is **not a deployer** (para. 12).
