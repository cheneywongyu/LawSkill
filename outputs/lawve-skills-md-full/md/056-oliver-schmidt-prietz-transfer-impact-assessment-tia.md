---
id: "21f69471-5b72-5a7d-a5da-72c6bd71a563"
title: "Transfer Impact Assessment (TIA)"
title_cn: "转移影响评估（TIA）"
slug: "transfer-impact-assessment-tia"
url: "https://lawve.ai/@oliver-schmidt-prietz/skill/transfer-impact-assessment-tia"
author: "Oliver Schmidt-Prietz"
author_slug: "oliver-schmidt-prietz"
category: "data-protection"
language: "en"
license: "AGPL 3.0"
jurisdictions: "EU"
status: "active"
source_index: 56
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 转移影响评估（TIA）

原始名称：`Transfer Impact Assessment (TIA)`  
作者：Oliver Schmidt-Prietz  
分类：data-protection  
来源：https://lawve.ai/@oliver-schmidt-prietz/skill/transfer-impact-assessment-tia  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

# TIA（传输影响评估）— 部署指南

> 📄 **【查看互动技能页面→】(https://oliverschmidtprietz.github.io/GDPR-Transfer-Impact-Assessment/)**

## 概述

GDPR 转移影响评估技能 - 针对 Claude 的结构化第五章转移指南。组合：

- **EDPB 建议 01/2020** 六步方法（监管支柱）
- **CNIL TIA 指南**（最终版本，2025 年 1 月）——结构化评估表和三步第 3 步结论
- **EDPB 建议 02/2020** — 监督法评估的四个基本保障框架
- **EDPB 指南 05/2021** — 转学资格的三个累积标准，包含 12 个示例场景
- **罗森塔尔方法**影响 — 务实的步骤 3 C 块（“该数据的现实风险”），无需统计概率计算
- **12 个预先构建的国家概况** — 美国（非 DPF）、美国（DPF）、英国、印度、中国、巴西、澳大利亚、新加坡、土耳其、阿联酋、南非、俄罗斯 + 通用调查问卷
- **平衡的艺术。 49 治疗** — EDPB 指南 2/2018 + OLG München (21 U 3882/25 e, 2026) 司法反立场
- **审计就绪输出** — Markdown 报告 + .docx 正式文档 + 用于 RoPA 交换的 JSON 增量

## 文件结构
```
skills/tia/
├── SKILL.md                              # Main skill instructions (deploy this)
├── CHANGELOG.md                          # Version history
├── README.md                             # This file
├── evals/
│   └── evals.json                        # 12 behavioural test cases
└── references/
    ├── edpb-six-steps.md                 # EDPB Rec 01/2020 methodology
    ├── essential-guarantees.md           # EDPB Rec 02/2020 four-pillar framework
    ├── transfer-qualification.md         # EDPB Guidelines 05/2021 — 3 criteria + 12 examples
    ├── art49-derogations.md              # Art. 49 balanced assessment (EDPB + judicial)
    ├── supplementary-measures.md         # Catalog (technical / contractual / organisational)
    ├── schrems-ii-holdings.md            # C-311/18 key holdings + implications
    ├── tia-template.md                   # Document template structure
    ├── interchange-delta.md              # RoPA delta format
    ├── sources.md                        # Regulatory source references
    └── country-profiles/
        ├── us-non-dpf.md                # USA outside DPF
        ├── us-dpf.md                    # USA DPF-certified
        ├── uk-post-adequacy.md          # UK (adequacy renewed Dec 2025)
        ├── in.md                        # India
        ├── cn.md                        # China
        ├── br.md                        # Brazil
        ├── au.md                        # Australia
        ├── sg.md                        # Singapore
        ├── tr.md                        # Turkey
        ├── ae.md                        # UAE (DIFC / ADGM / mainland)
        ├── za.md                        # South Africa
        ├── ru.md                        # Russia
        └── generic-assessment.md        # Guided questionnaire for unlisted countries
```
## 部署

### Claude.ai（用户技能）

1. 转至 **设置 → 个人资料 → 自定义技能**（或同等内容）。
2. 上传整个 `tia/` 文件夹结构。
3.技能在“TIA”、“转让影响评估”、“Schrems II”、“第三国转让”、“第46条”、“第49条”和类似术语上触发。

### 克劳德代码/自定义设置
```bash
# Symlink the skill from the monorepo
ln -s ~/CLAUDE_PROJECTS/SKILLS/claude-skills/skills/tia ~/.claude/skills/tia
```
| Mode | When | Output |
|---|---|---|
| Single transfer assessment | One known transfer | Markdown + .docx TIA |
| Batch / registry | Multiple transfers | Registry + per-transfer pipeline + Transfer Risk Summary |
| Discovery (standalone) | No RoPA, multiple transfers | Discovery walkthrough → registry → assessments |
| RoPA import | Has RoPA sidecar | Import transfers → assess each |
| Adequacy fast-track | Destination has adequacy | Lightweight assessment + monitoring triggers |
| Art. 49 path | Derogation potentially applies | Balanced assessment (EDPB + judicial) |
| Transfer qualification only | "Is this even a transfer?" | Qualification finding |
| Review / update | Existing TIA + legal change | Re-assessment of affected sections |
| Format | Purpose |
|---|---|
| Markdown TIA Report | In-session preview, working document |
| .docx Formal TIA Document | Compliance file, CNIL-style tables, sign-off block |
| JSON Delta | RoPA interchange — patches `tia_ref`, `tia_status`, `supplementary_measures[]`, dates |
| Transfer Risk Summary | One-page executive overview for batch assessments |
| Document | Reference | Purpose |
|---|---|---|
| GDPR Chapter V | Arts. 44–49 | Statute |
| Schrems II | CJEU C-311/18 (16 July 2020) | Adequacy + TIA obligation |
| EDPB Rec 01/2020 | v2.0 (18 June 2021) | Six-step methodology |
| EDPB Rec 02/2020 | (10 November 2020) | Essential guarantees |
| EDPB Guidelines 05/2021 | v2.0 (14 February 2023) | Transfer qualification |
| EDPB Guidelines 2/2018 | (25 May 2018) | Art. 49 derogations (EDPB view) |
| CNIL TIA Guide | January 2025 (final) | Practical structured tables |
| OLG München, 21 U 3882/25 e | (11 May 2026) | Art. 49(1)(b) for global services |
| Implementing Decision (EU) 2023/1795 | (10 July 2023) | EU-US DPF adequacy |
| Skill | Direction | What flows |
|---|---|---|
| RoPA | Inbound | Read sidecar; filter third-country transfers; pre-populate Step 1 |
| RoPA | Outbound | Emit delta file per assessed transfer (conforming to RoPA inbound schema v1.0) |
| DPIA Sentinel | Flag only | If Step 3 reveals high-risk processing, flag for Art. 35 DPIA consideration (no auto-trigger) |
## 用法

### 快速入门

触发技能的提示示例：

- “我们正在使用 SCC 模块 2 将 HR 数据传输到我们位于印度的工资处理器。我需要采取补充措施吗？”
- “我需要为我们的美国云提供商提供 TIA - 他们经过了 DPF 认证。”
- “来自我们印度分处理商的远程支持访问是否被视为第五章转移？”
- “我们可以依据第 49(1)(b) 条将我们的全球 SaaS 用户数据流向美国吗？”

### 触发短语

- “TIA”，“转让影响评估”
——《施雷姆斯 II》，《第五章》
- “第 44 / 45 / 46 / 47 / 49 条”
-“转移到[国家]”（美国、印度、中国等）
- “SCC 评估”、“BCR”
- “补充措施”
- “DPF传输”、“欧盟-美国数据隐私框架”
- “充分性决定”
- “基本保证”
- “Drittlandsübermittlung”、“Drittlandtransfer”

### 评估模式


## 输出


## 监管依据


## 跨技能整合


## 版本历史

请参阅 [CHANGELOG.md](CHANGELOG.md) 了解完整的版本历史记录。

## 许可和免责声明

AGPL-3.0。请参阅存储库许可证。

**此技能提供基于 EDPB 建议、CNIL 指南和新兴判例法的结构化 GDPR 第五章指南。这不是法律建议。让您的 DPO 和合格的律师参与最终决定，特别是在技能标记为暂停或重组的转移的情况下。该技能的国家/地区概况反映了截至每个概况中所述的“最后验证”日期的法律和实践 - 在正式使用之前验证当前状态。**

> **质量保证：** 该技能附带了“evals/”文件夹中的评估测试，我运行该测试来根据预期结果检查其输出。

---

*由 Oliver Schmidt-Prietz 创建 — [OneZero Legal](https://onezero.legal)*

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

# TIA (Transfer Impact Assessment) — Deployment Guide

> 📄 **[View the interactive skill page →](https://oliverschmidtprietz.github.io/GDPR-Transfer-Impact-Assessment/)**

## Overview

GDPR Transfer Impact Assessment skill — structured Chapter V transfer guidance for Claude. Combines:

- **EDPB Recommendations 01/2020** six-step methodology (regulatory backbone)
- **CNIL TIA Guide** (final version, January 2025) — structured assessment tables and three-way Step 3 conclusion
- **EDPB Recommendations 02/2020** — four essential guarantees framework for surveillance-law assessment
- **EDPB Guidelines 05/2021** — three cumulative criteria for transfer qualification, with 12 example scenarios
- **Rosenthal method** influence — pragmatic Step 3 Block C ("realistic risk to this data") without statistical probability calculations
- **12 pre-built country profiles** — US (non-DPF), US (DPF), UK, India, China, Brazil, Australia, Singapore, Turkey, UAE, South Africa, Russia + generic questionnaire
- **Balanced Art. 49 treatment** — EDPB Guidelines 2/2018 + OLG München (21 U 3882/25 e, 2026) judicial counter-position
- **Audit-ready output** — Markdown report + .docx formal document + JSON delta for RoPA interchange

## File Structure

```
skills/tia/
├── SKILL.md                              # Main skill instructions (deploy this)
├── CHANGELOG.md                          # Version history
├── README.md                             # This file
├── evals/
│   └── evals.json                        # 12 behavioural test cases
└── references/
    ├── edpb-six-steps.md                 # EDPB Rec 01/2020 methodology
    ├── essential-guarantees.md           # EDPB Rec 02/2020 four-pillar framework
    ├── transfer-qualification.md         # EDPB Guidelines 05/2021 — 3 criteria + 12 examples
    ├── art49-derogations.md              # Art. 49 balanced assessment (EDPB + judicial)
    ├── supplementary-measures.md         # Catalog (technical / contractual / organisational)
    ├── schrems-ii-holdings.md            # C-311/18 key holdings + implications
    ├── tia-template.md                   # Document template structure
    ├── interchange-delta.md              # RoPA delta format
    ├── sources.md                        # Regulatory source references
    └── country-profiles/
        ├── us-non-dpf.md                # USA outside DPF
        ├── us-dpf.md                    # USA DPF-certified
        ├── uk-post-adequacy.md          # UK (adequacy renewed Dec 2025)
        ├── in.md                        # India
        ├── cn.md                        # China
        ├── br.md                        # Brazil
        ├── au.md                        # Australia
        ├── sg.md                        # Singapore
        ├── tr.md                        # Turkey
        ├── ae.md                        # UAE (DIFC / ADGM / mainland)
        ├── za.md                        # South Africa
        ├── ru.md                        # Russia
        └── generic-assessment.md        # Guided questionnaire for unlisted countries
```

## Deployment

### Claude.ai (User Skills)

1. Go to **Settings → Profile → Custom Skills** (or equivalent).
2. Upload the entire `tia/` folder structure.
3. The skill triggers on "TIA", "Transfer Impact Assessment", "Schrems II", "third-country transfer", "Art. 46", "Art. 49", and similar terms.

### Claude Code / Custom Setup

```bash
# Symlink the skill from the monorepo
ln -s ~/CLAUDE_PROJECTS/SKILLS/claude-skills/skills/tia ~/.claude/skills/tia
```

## Usage

### Quick Start

Example prompts that trigger the skill:

- "We're using SCCs Module 2 to transfer HR data to our payroll processor in India. Do I need supplementary measures?"
- "I need a TIA for our US cloud provider — they're DPF-certified."
- "Is remote support access from our Indian sub-processor considered a Chapter V transfer?"
- "Can we rely on Art. 49(1)(b) for our global SaaS user data flows to the US?"

### Trigger Phrases

- "TIA", "Transfer Impact Assessment"
- "Schrems II", "Chapter V"
- "Art. 44 / 45 / 46 / 47 / 49"
- "transfer to [country]" (US, India, China, etc.)
- "SCCs assessment", "BCRs"
- "supplementary measures"
- "DPF transfer", "EU-US Data Privacy Framework"
- "adequacy decision"
- "essential guarantees"
- "Drittlandsübermittlung", "Drittlandtransfer"

### Assessment Modes

| Mode | When | Output |
|---|---|---|
| Single transfer assessment | One known transfer | Markdown + .docx TIA |
| Batch / registry | Multiple transfers | Registry + per-transfer pipeline + Transfer Risk Summary |
| Discovery (standalone) | No RoPA, multiple transfers | Discovery walkthrough → registry → assessments |
| RoPA import | Has RoPA sidecar | Import transfers → assess each |
| Adequacy fast-track | Destination has adequacy | Lightweight assessment + monitoring triggers |
| Art. 49 path | Derogation potentially applies | Balanced assessment (EDPB + judicial) |
| Transfer qualification only | "Is this even a transfer?" | Qualification finding |
| Review / update | Existing TIA + legal change | Re-assessment of affected sections |

## Outputs

| Format | Purpose |
|---|---|
| Markdown TIA Report | In-session preview, working document |
| .docx Formal TIA Document | Compliance file, CNIL-style tables, sign-off block |
| JSON Delta | RoPA interchange — patches `tia_ref`, `tia_status`, `supplementary_measures[]`, dates |
| Transfer Risk Summary | One-page executive overview for batch assessments |

## Regulatory Basis

| Document | Reference | Purpose |
|---|---|---|
| GDPR Chapter V | Arts. 44–49 | Statute |
| Schrems II | CJEU C-311/18 (16 July 2020) | Adequacy + TIA obligation |
| EDPB Rec 01/2020 | v2.0 (18 June 2021) | Six-step methodology |
| EDPB Rec 02/2020 | (10 November 2020) | Essential guarantees |
| EDPB Guidelines 05/2021 | v2.0 (14 February 2023) | Transfer qualification |
| EDPB Guidelines 2/2018 | (25 May 2018) | Art. 49 derogations (EDPB view) |
| CNIL TIA Guide | January 2025 (final) | Practical structured tables |
| OLG München, 21 U 3882/25 e | (11 May 2026) | Art. 49(1)(b) for global services |
| Implementing Decision (EU) 2023/1795 | (10 July 2023) | EU-US DPF adequacy |

## Cross-Skill Integration

| Skill | Direction | What flows |
|---|---|---|
| RoPA | Inbound | Read sidecar; filter third-country transfers; pre-populate Step 1 |
| RoPA | Outbound | Emit delta file per assessed transfer (conforming to RoPA inbound schema v1.0) |
| DPIA Sentinel | Flag only | If Step 3 reveals high-risk processing, flag for Art. 35 DPIA consideration (no auto-trigger) |

## Version History

See [CHANGELOG.md](CHANGELOG.md) for full version history.

## License & Disclaimer

AGPL-3.0. See repository LICENSE.

**This skill provides structured GDPR Chapter V guidance based on EDPB Recommendations, CNIL guidance, and emerging case law. It is not legal advice. Involve your DPO and qualified counsel for final decisions, especially where the skill flags a transfer for suspension or restructuring. The skill's country profiles reflect the law and practice as of the "Last verified" date stated in each profile — verify current status before formal use.**

> **Quality assurance:** this skill ships with evaluation tests in the `evals/` folder, which I run to check its outputs against expected results.

---

*Created by Oliver Schmidt-Prietz — [OneZero Legal](https://onezero.legal)*

---

## SKILL.md Original

---
name: "transfer-impact-assessment-tia-oliver-schmidt-prietz"
description: "GDPR Transfer Impact Assessment for Chapter V transfers under the EDPB Recommendations 01/2020 six-step methodology, the CNIL TIA Guide (January 2025), and EDPB essential guarantees. Handles transfer qualification, Art. 45 adequacy fast-tracks, Art. 46 full assessments with country profiles for 12 jurisdictions, and balanced Art. 49 derogation analysis. Outputs a Markdown report, a .docx formal TIA, and a JSON delta for RoPA interchange."
metadata:
  author: "Oliver Schmidt-Prietz"
  license: "agpl-3.0"
  version: "2026-06-09"
---

# GDPR Transfer Impact Assessment (TIA) Skill

## Disclaimer (show at session start, do not block)

> **Important:** This skill provides structured GDPR Chapter V transfer assessment guidance based on EDPB Recommendations, CNIL guidance, CJEU case law, and emerging national case law (OLG München 21 U 3882/25 e). It is not legal advice. Involve your DPO and qualified counsel for final decisions, especially where the skill flags a transfer for suspension or restructuring.

## Routing

Determine what the user needs and lazy-load only the references required:

| User Need | Load These References | Action |
|---|---|---|
| Single transfer assessment | `references/edpb-six-steps.md` + relevant country profile + `references/supplementary-measures.md` | Run the 6-step pipeline for one transfer |
| Batch assessment (multiple transfers) | + `references/tia-template.md` + workspace pattern | Build transfer registry; run pipeline per transfer |
| Import from RoPA sidecar | + `references/interchange-delta.md` | Read RoPA sidecar; filter third-country transfers; populate registry |
| Discovery mode (map transfers without RoPA) | + `references/essential-guarantees.md` + `references/transfer-qualification.md` | Run structured discovery for international flows; then assess each |
| Review / update existing TIA | Relevant country profile + `references/supplementary-measures.md` | Re-assess after legal landscape change |
| Supplementary measures only | `references/supplementary-measures.md` + country profile | User already has TIA — help select measures |
| Transfer qualification question ("is this a transfer?") | `references/transfer-qualification.md` | Apply three cumulative criteria; produce qualification finding |
| Art. 49 assessment | `references/art49-derogations.md` | Balanced assessment (EDPB position + judicial counter-position) |
| Schrems II background / case law | `references/schrems-ii-holdings.md` | Explain holdings and TIA implications |
| Specific transfer question | Load relevant reference only | Answer directly |

**docx skill:** `/mnt/skills/public/docx/SKILL.md` in Claude.ai Projects, or `docx-processing-anthropic` in Claude Code. If unavailable, generate Markdown as fallback.

## Session Setup

Three quick questions. Adapt if the user provides rich context upfront — extract answers and confirm rather than asking sequentially.

1. **Scope:** "Are you assessing a specific transfer you already know about, or do you need to map your organisation's international transfers first?"
2. **Existing data:** "Do you have an existing RoPA or transfer inventory I can work from?" *(Skip if Scope = specific transfer)*
3. **Timing:** "Is this for a new transfer before it goes live, or a retrospective assessment of transfers already in place?"

The remaining details — exporter, importer, country, mechanism, data categories — are captured as the natural first step of the assessment pipeline, not as a sterile upfront questionnaire.

## Workspace Pattern (Batch Assessments)

For organisations with multiple transfers needing assessment, the skill uses a workspace pattern:

```
skills/tia-workspace/<org-slug>/
├── transfer-registry.json        # All identified transfers, each with a UUID
├── assessments/
│   ├── TIA-US-2026-001.json     # Per-transfer assessment state
│   ├── TIA-US-2026-001.md       # Per-transfer Markdown report
│   ├── TIA-US-2026-001.docx     # Per-transfer formal document (generated last)
│   └── TIA-IN-2026-002.*
├── outbound/                     # Delta files queued for RoPA
│   └── tia-<uuid>-<timestamp>.delta.json
└── state.json                    # Session checkpoint (current transfer, step, partial findings)
```

Checkpoint after every step. Resume by reading `state.json`.

## Pre-Assessment Gate: Transfer Qualification

Before running the 6-step pipeline, the skill determines whether a "transfer" under Chapter V exists. Apply EDPB Guidelines 05/2021 — three cumulative criteria:

1. **Exporter subject to GDPR** for the processing in question (Art. 3(1) or 3(2)).
2. **Disclosure to a separate controller or processor** (not same entity; not direct collection by data subject).
3. **Importer in a third country** (regardless of whether GDPR applies to the importer under Art. 3).

All three met → Chapter V applies → continue to the TIA requirement check.

Any criterion fails → output a **Transfer Qualification Finding** documenting:
- Which criterion failed and why.
- That Chapter V does not apply to this processing.
- That Art. 5/24/32 safeguards remain mandatory (per Section 4 of the guidelines).
- For EU-subsidiary-of-third-country-parent scenarios (EDPB Example 12): require Art. 28 due diligence on the processor's exposure to extraterritorial law.

This finding is a valuable deliverable on its own — it documents that the question was assessed.

### TIA Requirement Check (when all three criteria met)

- **Art. 45 adequacy?** → Lightweight assessment only (document the decision, conditions, review dates, fragility risks for DPF). Use the relevant country profile.
- **Art. 49 derogation?** → Art. 49 assessment path (load `art49-derogations.md`). Balanced framing; document justification.
- **Art. 46 tool** (SCCs, BCRs, ad hoc, codes, certifications) → Full TIA required → proceed to Step 1.

## Assessment Pipeline (Steps 1–6)

Reference: `references/edpb-six-steps.md`. Full detail there; SKILL.md captures the key flow.

### Step 1: Know Your Transfer

Capture (from discovery, RoPA import, or direct user input): exporter, importer, country, data categories, subjects, purpose, volume, frequency, data format, onward transfers. Confirm completeness. Flag onward transfers for separate assessment.

### Step 2: Identify the Transfer Tool

Document the Chapter V mechanism: adequacy / SCCs (module) / BCRs / ad hoc / code / certification. Note execution dates and SA authorisations as relevant.

**After identifying the primary mechanism:** Ask "Could any Art. 49 derogation apply as a primary or alternative basis for this transfer?" If yes → also run Art. 49 assessment as parallel/backup path.

### Step 3: Assess Third-Country Law and Practices

Load the relevant country profile. Three blocks:

**Block A — Data protection framework.** General law, SA, rights, remedies.

**Block B — Surveillance / access laws.** For each relevant law: apply the four essential guarantees (clear rules / necessary & proportionate / independent oversight / effective remedies). Rate each as adequate / concerns / insufficient.

**Block C — Practical risk assessment (Rosenthal-inspired).** Importer's request history, realistic targeting basis, plaintext access necessity, realistic authority interest in this data.

**Step 3 Conclusion — three-way fork (CNIL methodology):**

1. **Transfer tool effective** → proceed to Step 6.
2. **Transfer tool not effective, supplementary measures needed** → proceed to Step 4.
3. **Transfer tool not effective on paper, BUT no realistic basis to believe the problematic law will apply to this transfer in practice** → proceed to Step 6 with thorough, substantive justification.

Option (3) is legitimate (CNIL guide accepts it explicitly) but requires real reasoning — sector, data type, importer profile, request history — not boilerplate.

### Step 4: Supplementary Measures

Triggered when Step 3 returns conclusion (2). Load `references/supplementary-measures.md`. Auto-suggest measures matched to identified gaps. User reviews / accepts / customises. Then assess: do selected measures effectively close the gaps?

If yes → proceed. If no → the transfer cannot proceed as structured. Options: restructure (different importer, different country, different architecture) or suspend.

### Step 5: Implementation Action Plan

Document: measures to implement, owners, due dates, contractual amendments (SCC Annex II edits, side letters), technical changes (encryption, pseudonymisation pipelines), timeline.

### Step 6: Re-assessment Triggers

Document: standing triggers (adequacy review dates, DPF fragility), event-driven (new law, SA action, importer government request, certification change), periodic (12-month default, shorter for high-risk). Set the next review date.

## Outputs

Four deliverables (the user picks what they need):

1. **Markdown TIA Report** — in-session preview. Sections mirror Steps 1–6.
2. **.docx Formal TIA Document** — for the compliance file. Uses `references/tia-template.md` structure with CNIL-style tables, cover page, sign-off block (assessor + DPO), annex with country profile summary.
3. **JSON Interchange Sidecar** — delta file conforming to `interchange-inbound-schema.json` v1.0. Patches `tia_ref`, `tia_status`, `supplementary_measures[]`, `tia_completed_date`, `tia_review_date`. Lands in `skills/ropa-workspace/<org-slug>/inbound/`. See `references/interchange-delta.md`.
4. **Transfer Risk Summary** — one-page executive overview for batch assessments. Per-transfer row: destination, mechanism, verdict, key risk, measures. No numerical scores.

## Cross-Skill Integration

**Inbound from RoPA:** Read sidecar (`<org-slug>-ropa-sidecar.json`) → filter entries with third-country transfers → pre-populate Step 1 → track `activity_id` UUIDs.

**Outbound to RoPA:** Emit delta file per assessed transfer (see Output #3). The delta is owned by RoPA after writing.

**DPIA trigger:** If Step 3 reveals high-risk processing (Art. 9 special categories + systematic monitoring + third-country risk), flag for the user: "Consider whether a DPIA is required under Art. 35. This transfer's risk profile may meet DPIA threshold criteria." Do NOT auto-trigger DPIA Sentinel — just flag.

## Legal Precision Points

These are areas where Claude's training knowledge may be imprecise. Always apply these rules:

1. **A TIA is only required for Art. 46 transfers.** Adequacy (Art. 45) and Art. 49 derogations do not require a TIA — but each needs its own documentation (adequacy: decision ref + conditions; Art. 49: justification + applicable sub-provision).

2. **"Transfer" has no legal definition in the GDPR.** EDPB Guidelines 05/2021 define three cumulative criteria. Direct collection from data subject ≠ transfer (Example 1). Remote access from third country by processor = transfer (Example 11). Employee on business trip accessing own employer's data ≠ transfer (Example 8).

3. **Onward transfers need separate assessment.** Each hop in the chain (controller → processor → sub-processor in third country) is a separate transfer under Chapter V and requires its own analysis.

4. **The DPF is not blanket US adequacy.** Only covers organisations that are (a) subject to FTC/DoT jurisdiction AND (b) actively DPF-certified. Always verify current certification at dataprivacyframework.gov. Non-certified US recipients need SCCs + TIA per `country-profiles/us-non-dpf.md`.

5. **DPF political fragility is a live risk.** The DPF rests on EO 14086 (executive-branch construct). It can be rescinded by a future US administration. For long-term transfers, maintain SCCs as a fallback alongside DPF reliance.

6. **Adequacy decisions can have conditions and expiry dates.** Japan: supplementary rules apply. UK: renewed Dec 2025, valid until 27 Dec 2031 (joint Commission/EDPB review before any renewal). Canada: PIPEDA-regulated organisations only. Republic of Korea: PIPA-regulated only. Document conditions; track review dates.

7. **Art. 49 is not statutorily limited to "last resort."** That framing is EDPB guidance (Guidelines 2/2018), not statute. OLG München (21 U 3882/25 e, 11.05.2026) accepted Art. 49(1)(b) for routine transfers by a global service where the contract is inherently international. CJEU rapporteur Judge von Danwitz has indicated Art. 49 may cover more transfer scenarios than the EDPB acknowledges. Document which position the practitioner is relying on; both are defensible.

8. **"Necessary for contract performance" means the transfer is necessary, not just the contract.** But where the service is inherently cross-border (OLG München), transfer and contract are intertwined. Document the inherently international nature of the service.

9. **Supplementary measures must be effective, not just present.** Encryption with exporter-held keys only helps if the importer does NOT need to decrypt. A challenge clause only helps if the importer has a realistic legal avenue. Document the effectiveness assessment for each measure, including "when NOT effective" conditions.

10. **The "no reason to believe" escape valve is legitimate but must be documented.** CNIL Step 3 conclusion option (3) — transfer tool not effective on paper, but no realistic basis to believe the problematic law will apply — requires substantive justification (sector, data type, importer profile, request history), not boilerplate assertion.

11. **SCCs cannot be modified.** Only optional clauses can be filled in; parties can be added via the docking clause (Clause 7). Supplementary measures sit alongside the SCCs (typically in Annex II or a side agreement), not inside the SCC text.

12. **The controller is responsible even when the processor initiates the transfer.** Per EDPB Guidelines 05/2021 Example 7: where a processor transfers to a sub-processor in a third country, the controller remains responsible under Art. 28 and Chapter V.

13. **EU subsidiaries of third-country companies can trigger transfer issues without an actual transfer.** EDPB Guidelines 05/2021 Example 12: if the EU processor is subject to extraterritorial surveillance law (e.g., the CLOUD Act via its US parent), compliance with a government access request would *become* a transfer. Assess this under Art. 28 before engaging the processor.

14. **A TIA must be done BEFORE the transfer begins.** Per Schrems II and EDPB Recommendations 01/2020, the assessment is a pre-condition for an Art. 46 transfer. Retrospective TIAs for existing transfers are common in practice but represent a compliance gap; document the gap and close it.

15. **Re-assessment is not optional.** Art. 46 mechanisms require ongoing monitoring. Legislative changes (new surveillance law), case law (Schrems III when it lands), SA enforcement actions in the recipient country, importer's receipt of a government access request, and political developments (DPF rescission risk) all trigger re-evaluation. Default periodic review: 12 months.

## References

- GDPR Chapter V (Arts. 44–49)
- CJEU C-311/18 (Schrems II)
- EDPB Recommendations 01/2020 v2.0 (supplementary measures)
- EDPB Recommendations 02/2020 (essential guarantees)
- EDPB Guidelines 05/2021 v2.0 (Art. 3 / Chapter V interplay)
- EDPB Guidelines 2/2018 (Art. 49 derogations)
- CNIL TIA Guide (final version, January 2025)
- OLG München, 21 U 3882/25 e (11.05.2026)
- Implementing Decision (EU) 2023/1795 (EU-US DPF)
- Rosenthal EU SCC TIA Toolbox (v1.10, patched September 2025)

Full citations in `references/sources.md`.

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

## Related GDPR skills

This skill works standalone, but pairs well with my other EU data-protection skills — install any on its own or combine them:

- **DPIA Sentinel** — Art. 35 Data Protection Impact Assessments
- **GDPR Breach Sentinel** — Art. 33/34 breach response & notification
- **Privacy Notice Generator** — Art. 13/14 privacy notices
- **DPA Art. 28** — controller–processor agreements (AVV)
- **Legitimate Interest** — Art. 6(1)(f) LIA / balancing test
