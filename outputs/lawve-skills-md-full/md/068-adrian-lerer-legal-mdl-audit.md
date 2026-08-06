---
id: "06b5e21b-d972-537a-9861-1050e48a6827"
title: "legal-mdl-audit"
title_cn: "法律 MDL 审计"
slug: "legal-mdl-audit"
url: "https://lawve.ai/@adrian-lerer/skill/legal-mdl-audit"
author: "Ignacio Adrián Lerer"
author_slug: "adrian-lerer"
category: "legal-operations"
language: "en"
license: "AGPL 3.0"
jurisdictions: "INT"
status: "active"
source_index: 68
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 法律 MDL 审计

原始名称：`legal-mdl-audit`  
作者：Ignacio Adrián Lerer  
分类：legal-operations  
来源：https://lawve.ai/@adrian-lerer/skill/legal-mdl-audit  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

审核合法的人工智能输出和工作流程以进行诚实的压缩：不必要的复杂性、虚假的简单性、过多的警告、隐藏的不确定性以及合法可接受的输出的较低成本。

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

Audits legal AI outputs and workflows for honest compression: unnecessary complexity, false simplicity, excessive caveats, hidden uncertainty and poor cost per legally acceptable output.

---

## SKILL.md Original

---
name: "legal-mdl-audit-ignacio-adrian-lerer"
description: "Audits legal AI outputs and workflows for honest compression: unnecessary complexity, false simplicity, excessive caveats, hidden uncertainty and poor cost per legally acceptable output."
license: agpl-3.0
metadata:
  author: "Ignacio Adrián Lerer"
  license: "agpl-3.0"
  version: "2026-05-31"
---

# Legal MDL Audit

## What this skill does

This skill reviews whether a legal AI answer, prompt, workflow, benchmark result, contract review, memo, compliance report, or agent chain is as simple as it can safely be.

It is inspired by Minimum Description Length: good legal reasoning should explain more with less structure, but never by hiding material uncertainty.

## Audit categories

Classify the material as:

- APPROVE: lean and still legally safe.
- APPROVE WITH CONSTRAINTS: complexity is justified, but reliance needs stated limits.
- REWRITE: the output is too complex, repetitive, expensive, or hard to audit.
- QUARANTINE: the output is falsely simple and hides material uncertainty.

## Checklist

Review:

1. Rules: how many legal propositions are needed?
2. Exceptions: how many carve-outs or qualifications are doing real work?
3. Conditions: what facts, dates, forums, sources or procedural states must hold?
4. Sources: are citations enough, excessive, or missing?
5. Uncertainty: what must remain visible?
6. Workflow cost: how many model/tool/human steps were needed?
7. Output value: did added complexity improve legal acceptability?

## Output format

Return:

1. Verdict.
2. Complexity drivers.
3. Hidden uncertainty or omitted hard cases.
4. What can be simplified.
5. What must not be removed.
6. Safer shorter version, if requested.

## Rules

- Do not reward short answers that erase legal uncertainty.
- Do not reward long answers that add caveats without improving reliance.
- Prefer cost per legally acceptable output over cost per token or API call.
- Preserve source gaps, authority boundaries and human-review gates.
