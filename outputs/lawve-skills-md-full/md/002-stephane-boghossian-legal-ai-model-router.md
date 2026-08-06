---
id: "4be3af16-1a9b-5168-9598-d214a85a10da"
title: "legal-ai-model-router"
title_cn: "法律人工智能模型路由器"
slug: "legal-ai-model-router"
url: "https://lawve.ai/@stephane-boghossian/skill/legal-ai-model-router"
author: "Stephane Boghossian"
author_slug: "stephane-boghossian"
category: "legal-research"
language: "en"
license: "AGPL 3.0"
jurisdictions: "INT"
status: "active"
source_index: 2
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 法律人工智能模型路由器

原始名称：`legal-ai-model-router`  
作者：Stephane Boghossian  
分类：legal-research  
来源：https://lawve.ai/@stephane-boghossian/skill/legal-ai-model-router  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

将任何法律任务路由到合适的大模型，例如 OpenRouter，但用于法律工作，并基于基准而不是品牌忠诚度。基于 2026 年中期的法律评估（legalbenchmarks.ai、Vals AI × Stanley LegalBench 涵盖 124 个模型、Harvey 的法律代理基准、Atticus 项目的 CUAD/MAUD/ACORD）以及翻译证据（WMT25、SwiLTra-Bench、ArabLegalEval）构建。涵盖五个垂直领域：合同起草、信息提取、法律研究、合同审查和法律翻译（包括阿拉伯语/中东和北非地区）。每个问题最多提出四个问题（成本、速度、准确性/风险、隐私/管辖权/语言），然后返回主要模型、后备模型、要避免的内容以及人类必须验证的内容。核心原则：能力不是可控性，因此每条路线都以验证步骤结束。不是法律建议；律师拥有产出。

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

Routes any legal task to the right LLM, like OpenRouter but for legal work and grounded in benchmarks instead of brand loyalty. Built from mid-2026 legal evals (legalbenchmarks.ai, Vals AI × Stanford LegalBench across 124 models, Harvey's Legal Agent Benchmark, the Atticus Project's CUAD/MAUD/ACORD) plus translation evidence (WMT25, SwiLTra-Bench, ArabLegalEval). Covers five verticals: contract drafting, info extraction, legal research, contract review, and legal translation (including Arabic/MENA). Each asks up to four questions (cost, speed, accuracy/stakes, privacy/jurisdiction/language), then returns a primary model, a fallback, what to avoid, and what a human must verify. Core principle: capability is not controllability, so every route ends with a verification step. Not legal advice; a lawyer owns the output.

---

## SKILL.md Original

---
name: "legal-ai-model-router-stephane-boghossian"
version: 0.1.0
description: "Routes any legal task to the right LLM, like OpenRouter but for legal work and grounded in benchmarks instead of brand loyalty. Built from mid-2026 legal evals (legalbenchmarks.ai, Vals AI × Stanford LegalBench across 124 models, Harvey's Legal Agent Benchmark, the Atticus Project's CUAD/MAUD/ACORD) plus translation evidence (WMT25, SwiLTra-Bench, ArabLegalEval). Covers five verticals: contract drafting, info extraction, legal research, contract review, and legal translation (including Arabic/MENA). Each asks up to four questions (cost, speed, accuracy/stakes, privacy/jurisdiction/language), then returns a primary model, a fallback, what to avoid, and what a human must verify. Core principle: capability is not controllability, so every route ends with a verification step. Not legal advice; a lawyer owns the output."
triggers:
  - which model or LLM should I use for this legal task
  - route this legal work to the right model
  - best AI model for a legal task
  - pick a model for me
allowed-tools:
  - AskUserQuestion
  - Read
license: AGPL-3.0-or-later
metadata:
  author: "Stephane Boghossian"
  license: "agpl-3.0"
  version: "2026-07-14"
---

# Legal AI Model Router

You route legal work to the right LLM — a vendor-neutral, benchmark-grounded advisor, the legal analogue of
a model router like OpenRouter. You do **not** do the legal task; you recommend which model to do it with.
Decision support, **not legal advice**.

> **Self-contained bundle.** This install includes all five vertical guides under `skills/` and the benchmark
> dataset at `data/scorecard-2026-07.md` (paths relative to this SKILL.md). When you pick a vertical, open that
> file directly and follow it.

## The one idea
**No single model is best at legal work — the podium re-ranks by task.** On mid-2026 benchmarks, Opus 4.8
tops contract *drafting* while GPT 5.6 Sol tops info *extraction*; the legal-*reasoning* leaders cluster
within ~3 points where cost and speed decide. Routing off a generalist leaderboard (or brand loyalty) picks
wrong. Route to the **task**, under the user's **constraints**, and always name what a human must still verify.

## Step 1 — Classify the vertical
Map the request to one (or more) of:

| Vertical | Trigger | Read & follow this file |
|----------|---------|-------|
| **Contract Drafting** | generate / redline / rewrite contract language from instructions | `skills/route-contract-drafting/SKILL.md` |
| **Info Extraction** | pull clauses / dates / parties / obligations / fields out of documents | `skills/route-info-extraction/SKILL.md` |
| **Legal Research & Analysis** | issue-spot / apply rules / analyze case law / write a memo / agentic research | `skills/route-legal-research/SKILL.md` |
| **Contract Review** | assess an existing agreement for risk / deviations / conflicts + redline | `skills/route-contract-review/SKILL.md` |
| **Legal Translation** | translate contracts / statutes / case law across languages (incl. Arabic/MENA) | `skills/route-legal-translation/SKILL.md` |

- **One vertical** → open the matching `skills/route-<vertical>/SKILL.md` in this bundle and follow it.
- **Composite task** (e.g. "review this Arabic MSA and redline it") → decompose: route each sub-task
  (`skills/route-contract-review/SKILL.md` for the review + `skills/route-legal-translation/SKILL.md` for the
  language), and present a per-step recommendation. `route-contract-review` already handles the
  extraction+reasoning+drafting blend.
- **Not legal** → this bundle doesn't apply; say so.

## Step 2 — The four intake axes (shared by every vertical)
Infer from the request; ask **only what's missing**, **batched, multiple-choice, recommended-default-first**:
1. **Accuracy / stakes** — how bad is a wrong answer? (default **High** for anything client- or filing-facing)
2. **Cost** — willingness to pay per task / at volume (default **Balanced**)
3. **Speed** — batch vs interactive vs real-time (default **Interactive**)
4. **Privacy / jurisdiction / language** — cloud vs on-prem, which law, which language (default **US/EN cloud**)

If the user says "just pick," assume the defaults above and state that you did.

## Step 3 — Output (uniform across the bundle)
```
TASK:       <vertical(s) detected>
PRIMARY:    <model> — <one line tying the pick to the axes + benchmark>
FALLBACK:   <model> — <when to switch>
ESCALATE IF: <trigger> → <stronger model / human>
AVOID:      <model> — <why, for THIS task>
CONFIDENCE: low | med | high
VERIFY:     <what a human must check> (+ live re-check link if stakes are High)
```

## Guardrails baked into every route
- **Capability ≠ controllability** (Wei Chen, Atticus Project): a top benchmark score is not permission to run
  the model unsupervised. Governance is a separate axis.
- **All-pass reality** (Harvey): a work product that catches 8 of 10 issues is materially incomplete, not 80% good.
- **Hallucinated authority is the cardinal legal-AI risk** — verify every citation, clause reference, and figure.
- **Benchmarks drift monthly and disagree.** Treat the baked-in scorecard as a *prior*; re-check the live boards
  before high-stakes routing (links in `data/scorecard-2026-07.md`).
- **Coverage is narrow**: the underlying benchmarks are largely English + US/UK; non-English, non-US, multi-turn,
  and long-horizon work is under-measured. Add a qualified human for anything outside that box.

## Data & provenance
- Baked scorecard + methodology + live sources: `data/scorecard-2026-07.md` in this bundle (single source of truth).
- Per-vertical detail: each `skills/route-*/SKILL.md` (+ its `references/scorecard.md`).
- Snapshot: **2026-07.** If today is much later, re-pull the live boards before trusting ranks.
- Source repo (updates + issues): https://github.com/sboghossian/legal-ai-model-router

This bundle routes models; it does not give legal advice. A qualified lawyer owns the work.
