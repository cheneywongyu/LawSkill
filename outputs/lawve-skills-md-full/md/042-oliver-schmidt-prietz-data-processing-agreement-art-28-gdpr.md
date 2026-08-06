---
id: "0abcb456-94c5-5a3f-9e17-78b63713e289"
title: "Data Processing Agreement Art. 28 GDPR"
title_cn: "数据处理协议艺术。 28 通用数据保护条例"
slug: "data-processing-agreement-art-28-gdpr"
url: "https://lawve.ai/@oliver-schmidt-prietz/skill/data-processing-agreement-art-28-gdpr"
author: "Oliver Schmidt-Prietz"
author_slug: "oliver-schmidt-prietz"
category: "data-protection"
language: "en"
license: "AGPL 3.0"
jurisdictions: "EU"
status: "active"
source_index: 42
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 数据处理协议艺术。 28 通用数据保护条例

原始名称：`Data Processing Agreement Art. 28 GDPR`  
作者：Oliver Schmidt-Prietz  
分类：data-protection  
来源：https://lawve.ai/@oliver-schmidt-prietz/skill/data-processing-agreement-art-28-gdpr  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

# DPA 艺术。 28 GDPR — 部署指南

> 📄 **【查看交互技能页面→】(https://oliverschmidtprietz.github.io/GDPR-Data-Processing-Agreement/)**

请参阅 [CHANGELOG.md](CHANGELOG.md) 了解版本历史记录。

## 概述

DPA 艺术。 28 GDPR — 数据处理协议 (AVV / Auftragsverarbeitungsvertrag) 和 Art. 的审查、起草和修订。 26 联合控制者安排：

- **5 种操作模式** 自动路由 — REVIEW_QUICK、REVIEW_NEG（协商级）、DRAFT、REDLINE、JOINT_CONTROLLER
- **双语输出** — 德语和英语，并行质量
- **两个视角** - 控制器端和处理器端评论
- **两种审查深度** — 快速（第 28(3)(a)–(h) 覆盖范围检查）和谈判级（逐条风险评分）
- **委员会 SCC 锚** — 基于委员会实施决定 (EU) 2021/915
- **模板库** — 商业、混合和严格的 DPA 模板（DE + EN）； JCA 模板（德语 + 英语）
- **常见缺陷目录**，用于在供应商提供的草稿中快速发现
- **谈判后备立场** - 预先起草有争议条款的替代语言
- **SCC 模块指南** — 何时以及如何将模块 1-4 固定到 DPA 上以进行国际传输
- **层选择助手** — 匹配商业/混合/严格模板以处理上下文
- **严格的质量关** — 经过验证的艺术。 28(3) 交货前承保

## 文件结构
```
dpa-art28/
├── SKILL.md                                       # Main skill instructions (deploy this)
├── CHANGELOG.md                                   # Version history
├── references/
│   ├── 2021-915-commission-text-en.md             # Commission Implementing Decision (EU) 2021/915 — EN
│   ├── 2021-915-commission-text-de.md             # Commission Implementing Decision (EU) 2021/915 — DE
│   ├── art28-3-checklist.md                       # Art. 28(3)(a)–(h) coverage checklist
│   ├── art26-joint-controller.md                  # Art. 26 JCA framework
│   ├── common-defects.md                          # Vendor-DPA defect catalog
│   ├── negotiation-fallbacks.md                   # Fallback positions for contentious clauses
│   ├── sccs-module-guide.md                       # International-transfer SCC integration
│   └── tier-selection.md                          # Commercial / hybrid / strict tier helper
├── templates/
│   ├── dpa-commercial-de.md                       # Commercial DPA — DE
│   ├── dpa-commercial-en.md                       # Commercial DPA — EN
│   ├── dpa-hybrid-de.md                           # Hybrid DPA — DE
│   ├── dpa-hybrid-en.md                           # Hybrid DPA — EN
│   ├── dpa-strict-de.md                           # Strict DPA — DE
│   ├── dpa-strict-en.md                           # Strict DPA — EN
│   ├── jca-de.md                                  # JCA template — DE
│   └── jca-en.md                                  # JCA template — EN
└── workflows/
    ├── review-quick.md                            # REVIEW_QUICK procedure
    ├── review-negotiation.md                      # REVIEW_NEG procedure
    ├── draft.md                                   # DRAFT procedure
    ├── redline.md                                 # REDLINE procedure
    └── joint-controller.md                        # JOINT_CONTROLLER procedure
```
## 部署

### Claude.ai（用户技能）

1. 转到 **设置 → 个人资料 → 自定义技能**（或同等内容）
2.上传整个`dpa-art28/`文件夹结构
3. 该技能将在“DPA”、“AVV”、“Auftragsverarbeitung”、“第 28 条合同”、“红线此 DPA”、“JCA”或“联合控制者协议”上自动触发

### 克劳德代码/自定义 MCP 设置

1. 将 `dpa-art28/` 文件夹复制到您的技能目录：
   ```bash
   cp -r dpa-art28/ /path/to/your/skills/user/dpa-art28/
   ```
| Mode | When |
|------|------|
| **REVIEW_QUICK** | Fast Art. 28(3)(a)–(h) coverage check |
| **REVIEW_NEG** | Negotiation-grade clause-by-clause risk scoring |
| **DRAFT** | Produce a new DPA from a chosen template tier |
| **REDLINE** | Mark up an existing draft with proposed changes |
| **JOINT_CONTROLLER** | Art. 26 Joint Controller Arrangement workflow |
| Feature | Description |
|---------|-------------|
| Bilingual (DE/EN) | Parallel quality across both languages |
| Dual Perspective | Controller-side and processor-side review |
| Commission SCC | Built on Implementing Decision (EU) 2021/915 |
| Template Library | 3 DPA tiers × 2 languages + JCA × 2 languages |
| Defect Catalog | Common vendor-DPA defects with diagnostic signals |
| Negotiation Fallbacks | Pre-drafted alternative language for contested clauses |
| SCC Integration | International-transfer module guidance (Modules 1–4) |
| Tier Selection | Commercial / hybrid / strict matched to deal context |
| Quality Gates | Verified Art. 28(3) coverage before delivery |
| Document | Reference |
|----------|-----------|
| GDPR Art. 28 | Controller-processor relationship |
| GDPR Art. 28(3)(a)–(h) | Mandatory DPA content |
| GDPR Art. 26 | Joint controller arrangements |
| Commission Implementing Decision (EU) 2021/915 | EU-wide DPA standard contractual clauses |
| Commission Implementing Decision (EU) 2021/914 | International transfer SCCs (Modules 1–4) |
2. 确保该技能已在您的配置中注册

## 用法

### 快速入门

粘贴 DPA 或索要一份：

> “查看供应商的此 DPA — 我们是控制者。首先快速检查，
> 然后告诉我艺术下缺少什么。 28(3) 以及我应该反驳的内容。”

或者：

> “为欧盟处理商起草一份严格的德文 DPA
> 员工数据，包括我们美国子公司的 SCC 模块 2。”

### 触发短语

-“DPA”/“AVV”/“Auftragsverarbeitung”/“Auftragsverarbeitungsvertrag”
- “合同第 28 条”/“数据处理协议”/“处理者协议”
- “审查此 DPA”/“起草 DPA”/“红线此 DPA”
- “第 26 条安排”/“JCA”/“联合控制人协议”

### 模式路由器


## 能力总结


## 监管依据


## 许可和免责声明

此技能提供了结构化的 GDPR 艺术。 28 / 艺术。 26 承包指导。这不是法律建议。协商的 DPA 和 JCA 在签署前应由合格的数据保护顾问进行审查。

根据 AGPL-3.0 许可。

> **质量保证：** 该技能附带了“evals/”文件夹中的评估测试，我运行该测试来根据预期结果检查其输出。

---

*由 Oliver Schmidt-Prietz 创建 — [OneZero Legal](https://onezero.legal)*

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

# DPA Art. 28 GDPR — Deployment Guide

> 📄 **[View the interactive skill page →](https://oliverschmidtprietz.github.io/GDPR-Data-Processing-Agreement/)**

See [CHANGELOG.md](CHANGELOG.md) for version history.

## Overview

DPA Art. 28 GDPR — review, drafting, and redlining of Data Processing Agreements (AVV / Auftragsverarbeitungsvertrag) and Art. 26 Joint Controller Arrangements:

- **5 operating modes** routed automatically — REVIEW_QUICK, REVIEW_NEG (negotiation-grade), DRAFT, REDLINE, JOINT_CONTROLLER
- **Bilingual output** — DE and EN, parallel quality
- **Two perspectives** — controller-side and processor-side reviews
- **Two review depths** — quick (Art. 28(3)(a)–(h) coverage check) and negotiation-grade (clause-by-clause risk scoring)
- **Commission SCC anchor** — built on Commission Implementing Decision (EU) 2021/915
- **Template library** — commercial, hybrid, and strict DPA templates (DE + EN); JCA templates (DE + EN)
- **Common-defects catalog** for fast spotting in vendor-provided drafts
- **Negotiation fallback positions** — pre-drafted alternative language for contentious clauses
- **SCC module guide** — when and how to bolt Modules 1–4 onto a DPA for international transfers
- **Tier selection helper** — match commercial / hybrid / strict template to deal context
- **Strict quality gates** — verified Art. 28(3) coverage before delivery

## File Structure

```
dpa-art28/
├── SKILL.md                                       # Main skill instructions (deploy this)
├── CHANGELOG.md                                   # Version history
├── references/
│   ├── 2021-915-commission-text-en.md             # Commission Implementing Decision (EU) 2021/915 — EN
│   ├── 2021-915-commission-text-de.md             # Commission Implementing Decision (EU) 2021/915 — DE
│   ├── art28-3-checklist.md                       # Art. 28(3)(a)–(h) coverage checklist
│   ├── art26-joint-controller.md                  # Art. 26 JCA framework
│   ├── common-defects.md                          # Vendor-DPA defect catalog
│   ├── negotiation-fallbacks.md                   # Fallback positions for contentious clauses
│   ├── sccs-module-guide.md                       # International-transfer SCC integration
│   └── tier-selection.md                          # Commercial / hybrid / strict tier helper
├── templates/
│   ├── dpa-commercial-de.md                       # Commercial DPA — DE
│   ├── dpa-commercial-en.md                       # Commercial DPA — EN
│   ├── dpa-hybrid-de.md                           # Hybrid DPA — DE
│   ├── dpa-hybrid-en.md                           # Hybrid DPA — EN
│   ├── dpa-strict-de.md                           # Strict DPA — DE
│   ├── dpa-strict-en.md                           # Strict DPA — EN
│   ├── jca-de.md                                  # JCA template — DE
│   └── jca-en.md                                  # JCA template — EN
└── workflows/
    ├── review-quick.md                            # REVIEW_QUICK procedure
    ├── review-negotiation.md                      # REVIEW_NEG procedure
    ├── draft.md                                   # DRAFT procedure
    ├── redline.md                                 # REDLINE procedure
    └── joint-controller.md                        # JOINT_CONTROLLER procedure
```

## Deployment

### Claude.ai (User Skills)

1. Go to **Settings → Profile → Custom Skills** (or equivalent)
2. Upload the entire `dpa-art28/` folder structure
3. The skill will auto-trigger on "DPA", "AVV", "Auftragsverarbeitung", "Art. 28 contract", "redline this DPA", "JCA", or "joint controller agreement"

### Claude Code / Custom MCP Setup

1. Copy the `dpa-art28/` folder to your skills directory:
   ```bash
   cp -r dpa-art28/ /path/to/your/skills/user/dpa-art28/
   ```
2. Ensure the skill is registered in your configuration

## Usage

### Quick Start

Paste a DPA or ask for one:

> "Review this DPA from a vendor — we're the controller. Quick check first,
> then tell me what's missing under Art. 28(3) and what I should push back on."

Or:

> "Draft a strict-tier DPA in German for an EU-based processor handling
> employee data, including SCCs Module 2 for our US subsidiary."

### Trigger Phrases

- "DPA" / "AVV" / "Auftragsverarbeitung" / "Auftragsverarbeitungsvertrag"
- "Art. 28 contract" / "Data processing agreement" / "Processor agreement"
- "Review this DPA" / "Draft a DPA" / "Redline this DPA"
- "Art. 26 arrangement" / "JCA" / "Joint controller agreement"

### Mode Router

| Mode | When |
|------|------|
| **REVIEW_QUICK** | Fast Art. 28(3)(a)–(h) coverage check |
| **REVIEW_NEG** | Negotiation-grade clause-by-clause risk scoring |
| **DRAFT** | Produce a new DPA from a chosen template tier |
| **REDLINE** | Mark up an existing draft with proposed changes |
| **JOINT_CONTROLLER** | Art. 26 Joint Controller Arrangement workflow |

## Capabilities Summary

| Feature | Description |
|---------|-------------|
| Bilingual (DE/EN) | Parallel quality across both languages |
| Dual Perspective | Controller-side and processor-side review |
| Commission SCC | Built on Implementing Decision (EU) 2021/915 |
| Template Library | 3 DPA tiers × 2 languages + JCA × 2 languages |
| Defect Catalog | Common vendor-DPA defects with diagnostic signals |
| Negotiation Fallbacks | Pre-drafted alternative language for contested clauses |
| SCC Integration | International-transfer module guidance (Modules 1–4) |
| Tier Selection | Commercial / hybrid / strict matched to deal context |
| Quality Gates | Verified Art. 28(3) coverage before delivery |

## Regulatory Basis

| Document | Reference |
|----------|-----------|
| GDPR Art. 28 | Controller-processor relationship |
| GDPR Art. 28(3)(a)–(h) | Mandatory DPA content |
| GDPR Art. 26 | Joint controller arrangements |
| Commission Implementing Decision (EU) 2021/915 | EU-wide DPA standard contractual clauses |
| Commission Implementing Decision (EU) 2021/914 | International transfer SCCs (Modules 1–4) |

## License & Disclaimer

This skill provides structured GDPR Art. 28 / Art. 26 contracting guidance. It is not legal advice. Negotiated DPAs and JCAs should be reviewed by qualified data protection counsel before signing.

Licensed under AGPL-3.0.

> **Quality assurance:** this skill ships with evaluation tests in the `evals/` folder, which I run to check its outputs against expected results.

---

*Created by Oliver Schmidt-Prietz — [OneZero Legal](https://onezero.legal)*

---

## SKILL.md Original

---
name: "dpa-art-28-oliver-schmidt-prietz"
description: "Review, draft, or redline a Data Processing Agreement (DPA / Auftragsverarbeitungsvertrag / AVV) under Art. 28 GDPR, or prepare a Joint Controller Arrangement under Art. 26 GDPR. Supports bilingual output (DE/EN), both controller- and processor-side perspectives, and two review depths — quick (Art. 28(3)(a)–(h) coverage) and negotiation-grade (clause-by-clause risk scoring)."
metadata:
  author: "Oliver Schmidt-Prietz"
  license: "agpl-3.0"
  version: "2026-06-09"
---

# DPA Art. 28 GDPR — Review, Drafting & Redlining

## Purpose

This skill governs all work on **controller–processor contracts (Art. 28 GDPR)** and **joint-controller arrangements (Art. 26 GDPR)**. It produces:

- **Reviews** of existing DPAs (quick or negotiation-grade)
- **Drafts** of new DPAs / AVVs from modular templates (DE / EN)
- **Redlines** in response to counterparty drafts
- **Joint Controller Agreements** (JCA / Art.-26-Vereinbarung)

## Mode router — ALWAYS run first

Before doing anything else, classify the request into ONE of these modes:

| Mode | Trigger pattern | Workflow file |
|---|---|---|
| `REVIEW_QUICK` | "Is this DPA compliant?", "Art. 28(3)(a)–(h) check", short turnaround, sign/no-sign decision needed | `workflows/review-quick.md` |
| `REVIEW_NEG` | "Review this for negotiation", "give me redline points", "what should we push back on", deeper diligence | `workflows/review-negotiation.md` |
| `DRAFT` | "Draft a DPA", "create an AVV", "we need a processor agreement for [X]", greenfield | `workflows/draft.md` |
| `REDLINE` | Counterparty has sent a DPA, user wants tracked-changes / counter-proposals | `workflows/redline.md` |
| `JOINT_CONTROLLER` | "Art. 26", "joint controller", "JCA", or roles screen reveals JC not processor relationship | `workflows/joint-controller.md` |

**If unclear, ASK.** Do not guess between `REVIEW_QUICK` and `REVIEW_NEG` — the depth difference is ~30 min vs ~2–3 h of analytical work, and the output structure is materially different.

**Mode flips during the work are allowed and expected.** If a `REVIEW_QUICK` reveals issues serious enough that the user needs negotiation guidance, surface this and offer to escalate to `REVIEW_NEG`. If a roles screen during `DRAFT` or `REVIEW_*` reveals the parties are actually joint controllers, stop and switch to `JOINT_CONTROLLER`.

## Intake — ALWAYS gather these before producing output

Regardless of mode:

1. **Roles** — Who is controller, who is processor? Confirm explicitly. If both parties might be controllers, run the Art. 26 vs Art. 28 screen in `references/art26-joint-controller.md` BEFORE proceeding.
2. **Perspective** — Which side does the user represent? (controller-favorable / processor-favorable / balanced)
3. **Language** — DE / EN / bilingual? Default: match the language of the source document; if drafting from scratch, ASK.
4. **Tier (DRAFT and REDLINE modes)** — Tier 1 Commercial / Tier 2 Strict (2021/915 incorporated unmodified) / Tier 3 Hybrid (Sections I+II of 2021/915 + custom Section III). Load `references/tier-selection.md` and walk the decision tree if the user has not pre-selected. For REVIEW modes, the tier is whatever the source document is — identify it and continue.
5. **Processing scenario** — Concrete description: subject matter, nature, purpose, data categories, data subjects, duration. Without this, drafting is impossible and review is shallow. If missing, REQUEST it before proceeding.
6. **International transfers** — Will personal data be transferred outside the EEA, or accessed from outside the EEA? If yes, load `references/sccs-module-guide.md` and flag SCC requirements early. Note: 2021/915 (Tiers 2/3) does not by itself cover transfers — pair with 2021/914 if needed.
7. **Sub-processors** — General authorization, specific authorization, or none? This affects clause structure and risk profile. For Tiers 2/3, this maps to Clause 7.7 Option 1/2 of the SCCs.
8. **Special categories / Art. 9 / Art. 10 data** — If yes, enhanced TOMs and stricter purpose limitation needed; flag at intake.

## Hard rules

- **Never produce a DPA or review without confirming roles.** Mis-classifying a controller–controller relationship as controller–processor produces an invalid agreement and creates liability exposure on both sides.
- **Never paste templates verbatim without scenario tailoring.** Annex 1 (processing description) MUST reflect the actual processing — generic placeholders defeat Art. 28(3) chapeau.
- **Never omit Annex 2 (TOMs).** A DPA without specified TOMs fails Art. 28(3)(c) + Art. 32. If the user does not have TOMs ready, advise them to obtain the processor's TOMs document or use the template scaffold as a starting point, but flag this as an open item — never sign-off on an empty Annex 2.
- **Sub-processor list (Annex 3) cannot be empty if sub-processors exist.** "None at signing" is acceptable only if literally none; otherwise list them by name, location, processing activity, and safeguards.
- **International-transfer language is binding only if SCCs are actually executed.** Do not draft "the Parties agree to use the SCCs" without specifying module, signature mechanism (separate signature vs. docking via DPA), and Annexes I.A / I.B / I.C / II / III.
- **Joint-controller scenarios are NOT processor scenarios.** If the screen flags JC, switch to `JOINT_CONTROLLER` mode. Papering a JC arrangement as a DPA is a substantive defect, not a drafting choice.
- **Never advise "sign as is" after a quick review unless every Art. 28(3) item is PASS, no transfers in scope, and the user understands the residual liability allocation.** Default posture is "sign with documented residual risk" or "request changes".
- **Bilingual output ≠ machine translation.** When producing parallel DE/EN, use German legal-style register on the DE side ("der Verantwortliche", "der Auftragsverarbeiter", "Sie"-form for declarations) and standard commercial register on the EN side. Do not back-translate one from the other.

## Reference loading order

When entering any mode, load files in this order:

1. **Always** — `references/art28-3-checklist.md` (canonical Art. 28 requirements).
2. **Mode-dependent**:
   - `REVIEW_QUICK` → + the workflow file. That is enough.
   - `REVIEW_NEG` → + `references/common-defects.md` + `references/negotiation-fallbacks.md`. If the source draft is 2021/915-based, also + `references/2021-915-commission-text-{en,de}.md` (matching language).
   - `DRAFT` → + `references/tier-selection.md` (always); + the relevant template file (`templates/dpa-{commercial,strict,hybrid}-{en,de}.md` or `templates/jca-{en,de}.md`); + `references/2021-915-commission-text-{en,de}.md` if Tier 2 or Tier 3.
   - `REDLINE` → + `references/negotiation-fallbacks.md` + `references/tier-selection.md` + the relevant template as benchmark; + 2021/915 reference if counterparty draft is 2021/915-based.
   - `JOINT_CONTROLLER` → switch to `references/art26-joint-controller.md` and `templates/jca-{lang}.md`. The Art. 28 checklist is no longer the primary lens.
3. **Conditional** — Load `references/sccs-module-guide.md` whenever international transfers are in scope OR the source DPA mentions SCCs / Drittlandübermittlung / Standardvertragsklauseln. Note: 2021/915 (Art. 28) and 2021/914 (Chapter V) are different instruments — `sccs-module-guide.md` covers 2021/914, `2021-915-commission-text-{en,de}.md` covers 2021/915.

## Output structure by mode

### REVIEW_QUICK output

1. **Executive summary** (3–5 sentences): overall compliance posture and headline issues.
2. **Art. 28(3)(a)–(h) coverage table**: each obligation marked `PASS` / `WEAK` / `GAP` / `DEFECT` with one-line reason.
3. **Chapeau & framing** (subject matter, duration, nature, purpose, data types, categories of data subjects, controller's rights and obligations) — present or missing?
4. **SCC adequacy** (if transfers in scope): correct module? Annexes filled? TIA referenced?
5. **Top 3 issues** to fix.
6. **Recommendation**: sign / sign with side letter / do not sign without changes / escalate to `REVIEW_NEG`.

### REVIEW_NEG output

1. Executive summary + posture recommendation.
2. Roles confirmation + scenario summary (locked-in for the rest of the analysis).
3. **Clause-by-clause table**: clause # | obligation in scope | current text gist | issue | risk tier (1 = blocker / 2 = material / 3 = polish) | proposed fix.
4. **Annex review**:
   - Annex 1 (processing description) — sufficient detail for Art. 28(3) chapeau?
   - Annex 2 (TOMs) — concrete, measurable, mapped to Art. 32(1)(a)–(d)?
   - Annex 3 (sub-processors) — list current and define notification/objection mechanism?
   - Annex 4 (transfers + SCCs) — module, Annexes I–III, TIA?
5. **Negotiation strategy**: must-have / should-have / nice-to-have, sequenced for the actual negotiation.
6. **Walk-away conditions** — clauses where the user should not sign even after best-efforts negotiation.

### DRAFT output

1. Complete DPA / AVV main body in requested language(s).
2. Annex 1 — populated from intake.
3. Annex 2 — template scaffold OR populated if TOMs provided.
4. Annex 3 — populated or "none at signing" with notification mechanism.
5. Annex 4 — only if transfers in scope; correct SCC module incorporated.
6. **Drafting notes** (separate section): clauses left as alternatives, scenario assumptions made, follow-ups required from the user.

### REDLINE output

1. **Marked-up version**: additions in **bold**, deletions in ~~strikethrough~~. Always reproduce the counterparty's clause numbering for traceability.
2. **Cover memo**: changes summary; rationale by clause; fallback positions (T1 / T2 / T3); expected counterparty pushback per change.
3. **Side-letter draft** if used to address residual gaps not worth re-opening the main DPA over.

### JOINT_CONTROLLER output

1. **Roles analysis** — why this is JC, not processor; EDPB 07/2020 anchors cited.
2. **JCA main body** in requested language.
3. **Allocation matrix**: who handles what (data subject rights, breach notification to authorities, breach notification to data subjects, security, DPIA, transfers, complaints, audits).
4. **Public summary** under Art. 26(2) — short, plain-language, made available to data subjects (often via privacy notice).
5. Recital indicating that data subjects may exercise rights against either party irrespective of the allocation.

## Quality gates — verify before delivery

- [ ] Roles confirmed and Art. 28 vs Art. 26 screen passed.
- [ ] All Art. 28(3) chapeau elements addressed (subject matter, duration, nature, purpose, data types, categories of data subjects, controller's rights and obligations).
- [ ] All eight (a)–(h) obligations covered.
- [ ] Sub-processor mechanism defined (general or specific consent + notification + objection right).
- [ ] Audit rights specified (frequency, scope, cost allocation, third-party-auditor option, confidentiality).
- [ ] Deletion/return choice mechanism defined (Art. 28(3)(g)) with retention carve-outs for legal obligations.
- [ ] If transfers: SCC module identified, Annexes I.A/I.B/I.C/II/III in scope, TIA referenced.
- [ ] If special categories / Art. 10 data: enhanced TOMs flagged.
- [ ] Liability allocation reflects the user's perspective (not generic boilerplate).
- [ ] Language consistent throughout (no mixed-language clauses unless bilingual format with parallel columns).
- [ ] Practitioner's note appended for client deliverables — what the user should do next.

## Style & tone

- **German output**: formal legal register; "Sie"-form not used (legal entities are referred to as "der Verantwortliche" / "der Auftragsverarbeiter"); standard term is **Auftragsverarbeitungsvertrag** or **AV-Vertrag**, not "DPA".
- **English output**: standard commercial-contract register; defined terms in **bold** at first use; active voice for obligations ("The Processor shall ...").
- **No marketing language. No em dashes.** Active voice for processor obligations; passive only where standard contract idiom requires it.
- **For OneZero Legal client deliverables**: end every output with a **Practitioner's note** paragraph — what the user should actually do next (sign / push back / request information / escalate).

## Out of scope (do not silently expand into these)

- Standalone TOMs drafting beyond the Annex 2 scaffold (use Art. 32-specific guidance).
- Full TIA (Transfer Impact Assessment) documents — flag the requirement and reference TIA Skill if available.
- DPIA documents — reference the DPIA Navigator skill.
- Records of Processing (Verzeichnis von Verarbeitungstätigkeiten) — separate task.
- Substantive data-subject-rights workflows — reference dedicated skill if available.

If the user asks for any of the above, surface that this skill ends at the DPA boundary and offer to switch.

## Related GDPR skills

This skill works standalone, but pairs well with my other EU data-protection skills — install any on its own or combine them:

- **DPIA Sentinel** — Art. 35 Data Protection Impact Assessments
- **GDPR Breach Sentinel** — Art. 33/34 breach response & notification
- **Privacy Notice Generator** — Art. 13/14 privacy notices
- **Transfer Impact Assessment (TIA)** — Chapter V transfer assessments
- **Legitimate Interest** — Art. 6(1)(f) LIA / balancing test
