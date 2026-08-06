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
views: 25
downloads: 1
created_at: "2026-07-14T22:21:18.191059+02:00"
updated_at: "2026-07-14T22:21:22.137640+02:00"
source_index: 2
---

# 法律人工智能模型路由器

原始名称：`legal-ai-model-router`  
作者：Stephane Boghossian  
分类：legal-research  
来源：https://lawve.ai/@stephane-boghossian/skill/legal-ai-model-router

## 中文 README

将任何法律任务路由到合适的大模型，例如 OpenRouter，但用于法律工作，并基于基准而不是品牌忠诚度。基于 2026 年中期的法律评估（legalbenchmarks.ai、Vals AI × Stanley LegalBench 涵盖 124 个模型、Harvey 的法律代理基准、Atticus 项目的 CUAD/MAUD/ACORD）以及翻译证据（WMT25、SwiLTra-Bench、ArabLegalEval）构建。涵盖五个垂直领域：合同起草、信息提取、法律研究、合同审查和法律翻译（包括阿拉伯语/中东和北非地区）。每个问题最多提出四个问题（成本、速度、准确性/风险、隐私/管辖权/语言），然后返回主要模型、后备模型、要避免的内容以及人类必须验证的内容。核心原则：能力不是可控性，因此每条路线都以验证步骤结束。不是法律建议；律师拥有产出。

---

## Original README

Routes any legal task to the right LLM, like OpenRouter but for legal work and grounded in benchmarks instead of brand loyalty. Built from mid-2026 legal evals (legalbenchmarks.ai, Vals AI × Stanford LegalBench across 124 models, Harvey's Legal Agent Benchmark, the Atticus Project's CUAD/MAUD/ACORD) plus translation evidence (WMT25, SwiLTra-Bench, ArabLegalEval). Covers five verticals: contract drafting, info extraction, legal research, contract review, and legal translation (including Arabic/MENA). Each asks up to four questions (cost, speed, accuracy/stakes, privacy/jurisdiction/language), then returns a primary model, a fallback, what to avoid, and what a human must verify. Core principle: capability is not controllability, so every route ends with a verification step. Not legal advice; a lawyer owns the output.
