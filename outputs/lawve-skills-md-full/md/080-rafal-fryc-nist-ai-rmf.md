---
id: "6134502d-0774-525c-a4d8-885d0b6cbde1"
title: "NIST AI RMF"
title_cn: "NIST AI RMF"
slug: "nist-ai-rmf"
url: "https://lawve.ai/@rafal-fryc/skill/nist-ai-rmf"
author: "Rafal Fryc"
author_slug: "rafal-fryc"
category: "compliance"
language: "en"
license: "MIT"
jurisdictions: "US"
status: "active"
source_index: 80
readme_path: "README.md"
skill_path: "SKILL.md"
---

# NIST AI RMF

原始名称：`NIST AI RMF`  
作者：Rafal Fryc  
分类：compliance  
来源：https://lawve.ai/@rafal-fryc/skill/nist-ai-rmf  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

# NIST 人工智能风险管理框架 — Claude Skill

将 **NIST AI 风险管理框架**（NIST AI 100-1 + NIST AI 600-1 生成式 AI 配置文件）应用于特定的 AI 系统、治理问题或影响评估 - 逐字引用已发布的 NIST 文本中的子类别 (`GOVERN 1.1`) 和配置文件操作 ID (`GV-1.2-001`)。

这是独立技能分布。将压缩文件夹上传到 Claude Cowork（桌面应用程序）或任何其他接受独立技能 ZIP 的主机。当提示提及 AI RMF、四种功能（治理/地图/测量/管理）、值得信赖的 AI 特征或 12 个 GAI 配置文件风险时，该技能会自动激活。

## 三种模式

该技能会根据用户的问题自动选择一种模式：

- **咨询** — 快速查找。 *“根据此 AI 系统的 AI RMF，我应该做什么？”* 返回适用的风险（对于 GenAI）和相关的建议行动/子类别，逐字引用。
- **治理计划** — 围绕治理职能的结构化计划。 *“根据 AI RMF，我们的治理计划应包括哪些内容？”*
- **评估** — 全面的与 RMF 一致的影响评估，进行端到端的治理、规划、测量、管理。 *“为我们的 HR 简历筛选工具运行 NIST AI RMF 影响评估。”*

## 提示示例
```
What does the NIST AI RMF say about a customer-service chatbot built on GPT-4?
Run a NIST AI RMF assessment for our HR resume-screening tool.
What should our governance plan include per the NIST AI RMF?
```
## 出处

输出中的每个子类别 ID 和操作 ID 与源 NIST 出版物**字节相同**。适用性调用、操作说明、角色所有权建议和最终建议内联标记为“[模型判断 - 根据系统细节进行验证]”。如果引用不能解析为“references/”中的实际行，那么这是一个错误，而不是一个功能。

## 来源

- **NIST AI 100-1** — 人工智能风险管理框架 1.0（2023 年 1 月）。公共领域的美国政府工作。权威来源：<https://www.nist.gov/itl/ai-risk-management-framework>。
- **NIST AI 600-1** — AI RMF：生成式 AI 配置文件（2024 年 7 月）。公共领域的美国政府工作。权威来源：<https://www.nist.gov/itl/ai-risk-management-framework>。

`references/core/` 和 `references/gai-profile/` 中的逐字摘录是运行时的事实来源。要重新验证任何引文，请下载原件并进行比较。

## 限制

- 该框架是**不具约束力**的 NIST 自愿指导，而不是监管。强制性制度（欧盟人工智能法案、纽约市 LL 144、科罗拉多人工智能法案、部门规则）施加的实际义务可能会追踪 NIST，也可能不会。该技能标记了分歧；它不能取代分析。
- 来源在上述发布日期被冻结。当 NIST 发布修订版时，需要重新提取参考文献。
- GAI 配置文件假定生成式 AI。将其动作应用于非生成系统会产生噪音——该技能明确避免了这种情况。
- 这不能替代法律顾问。

## 许可证

[MIT](LICENSE) 为技能代码。 NIST 出版物本身是美国政府的作品，不受 17 U.S.C. 的版权保护。 § 105 — 无论该技能是否获得许可，它们仍然属于公共领域。

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

# NIST AI Risk Management Framework — Claude Skill

Apply the **NIST AI Risk Management Framework** (NIST AI 100-1 + the NIST AI 600-1 Generative AI Profile) to a specific AI system, governance question, or impact assessment — quoting Subcategories (`GOVERN 1.1`) and Profile Action IDs (`GV-1.2-001`) verbatim from the published NIST text.

This is the standalone-skill distribution. Upload the zipped folder to Claude Cowork (desktop app) or any other host that accepts standalone skill ZIPs. The skill activates automatically on prompts that mention the AI RMF, the four functions (Govern / Map / Measure / Manage), the trustworthy AI characteristics, or the 12 GAI Profile risks.

## Three modes

The skill picks a mode automatically from the user's question:

- **Consult** — fast lookup. *"What should I do per the AI RMF for this AI system?"* Returns applicable risks (for GenAI) and the relevant Suggested Actions / Subcategories, quoted verbatim.
- **Governance plan** — structured plan around the GOVERN function. *"What should our governance plan include per the AI RMF?"*
- **Assessment** — full RMF-aligned impact assessment walking Govern, Map, Measure, Manage end-to-end. *"Run a NIST AI RMF impact assessment for our HR resume-screening tool."*

## Example prompts

```
What does the NIST AI RMF say about a customer-service chatbot built on GPT-4?
Run a NIST AI RMF assessment for our HR resume-screening tool.
What should our governance plan include per the NIST AI RMF?
```

## Provenance

Every Subcategory ID and Action ID in the output is **byte-identical** to the source NIST publication. Applicability calls, operational glosses, role-ownership suggestions, and final recommendations are tagged inline as `[model judgment — verify against system specifics]`. If a citation does not resolve to a real line in `references/`, that is a bug — not a feature.

## Sources

- **NIST AI 100-1** — AI Risk Management Framework 1.0 (January 2023). Public-domain U.S. Government work. Authoritative source: <https://www.nist.gov/itl/ai-risk-management-framework>.
- **NIST AI 600-1** — AI RMF: Generative AI Profile (July 2024). Public-domain U.S. Government work. Authoritative source: <https://www.nist.gov/itl/ai-risk-management-framework>.

The verbatim extracts in `references/core/` and `references/gai-profile/` are the runtime source of truth. To re-verify any citation, download the originals and compare.

## Limitations

- The framework is **non-binding** voluntary NIST guidance, not regulation. Mandatory regimes (EU AI Act, NYC LL 144, Colorado AI Act, sector rules) impose actual obligations that may track NIST — or may not. The skill flags the divergence; it does not replace the analysis.
- Sources are frozen at the publication dates above. When NIST publishes a revision, the references need re-extraction.
- The GAI Profile assumes generative AI. Applying its actions to a non-generative system creates noise — the skill explicitly avoids this.
- This is not a substitute for legal counsel.

## License

[MIT](LICENSE) for the skill code. The NIST publications themselves are works of the U.S. Government and are not subject to copyright protection under 17 U.S.C. § 105 — they remain public domain regardless of this skill's license.

---

## SKILL.md Original

---
name: nist-ai-rmf
description: >
  Apply the NIST AI Risk Management Framework (NIST AI 100-1 + the
  NIST AI 600-1 Generative AI Profile) to a specific AI system,
  governance question, or impact assessment. Three modes — consult,
  governance plan, full assessment — all cite Subcategories
  (`GOVERN 1.1`) and Profile Action IDs (`GV-1.2-001`) verbatim. Use
  when the user mentions the AI RMF, NIST RMF, NIST AI 100-1, NIST
  AI 600-1, GenAI Profile, the four functions (Govern / Map /
  Measure / Manage), the trustworthy AI characteristics, the 12 GAI
  risks (confabulation, harmful bias, information integrity, CBRN,
  data privacy, etc.), or asks "what does NIST say about X" for an
  AI system.
version: 1.0.1
audience: >
  AI governance leads, in-house counsel, privacy and compliance
  officers, and AI risk/policy professionals who need to apply the
  NIST AI RMF rigorously to a specific system or program without
  re-reading the full publications each time.
owner: standalone-skill distribution; source of truth is NIST AI 100-1 and NIST AI 600-1
last_verified: 2026-05-19
freshness_window: 12 months
freshness_category: regulatory-guidance
verified_against:
  - https://www.nist.gov/itl/ai-risk-management-framework
  - https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf
  - https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
verification_notes: >
  2026-05-19 re-verification: compared every Subcategory ID and Suggested
  Action ID in references/core/ and references/gai-profile/ against the
  current NIST AI 100-1 (Jan 2023) and NIST AI 600-1 (Jul 2024)
  publications at the URLs above. All 211 GAI Profile Action IDs and all
  Core Subcategory IDs are present and verbatim. NIST has not issued a
  revision to either publication as of this date. Re-verify on or before
  2027-05-19, or sooner if NIST announces an update.
---

# NIST AI Risk Management Framework

## What this skill does

Applies the NIST AI RMF — by name, by Subcategory, by Action ID — to whatever AI use case, governance question, or assessment the user brings. Three modes; pick one based on the user's question, default to **consult** if unsure.

1. **Consult** — fast lookup. "What should I do per the AI RMF for X?" Returns applicable risks (for GenAI) and the relevant Suggested Actions / Subcategories, quoted verbatim. Best for quick gut-check questions.
2. **Governance plan** — structured plan. "What should our governance plan include per the AI RMF?" Organized around the GOVERN function's Subcategories, with GenAI-specific actions layered in where applicable. Best for standing up or auditing an AI governance program.
3. **Assessment** — full impact assessment. "Run a NIST AI RMF impact assessment for X." Walks all four functions for one specific system. Best when the user wants a documented artifact.

All three modes share the same source-of-truth: verbatim NIST text in `references/`. Quote the files; don't invent or paraphrase.

## Source and scope

Two NIST publications underlie the skill. The verbatim extracted markdown ships in `references/`; the raw source HTMLs and maintainer-only re-extraction tooling live outside this distribution.

- **NIST AI 100-1 (AI RMF 1.0, January 2023)** — the Core framework. Applies to any AI system. Defines Govern, Map, Measure, Manage; their Categories and Subcategories; and seven Trustworthy AI characteristics. Extracted into `references/core/`.
- **NIST AI 600-1 (Generative AI Profile, July 2024)** — the GenAI-specific overlay. 12 enumerated GAI risks and 211 Suggested Actions coded `GV-X.Y-NNN` etc., each mapped to a Core Subcategory. Extracted into `references/gai-profile/`.

The Core applies to *any* AI system. The Profile is an *overlay* on top of the Core for generative systems. So:

- Non-GenAI system → Core only. Don't pull GAI Profile actions; many won't apply.
- GenAI system → Core for the framework + Profile for GenAI-specific risks and actions.
- Mixed pipeline → split per component.

Other NIST AI Profiles exist; they aren't loaded here. If the user asks about one, say so plainly.

## Provenance and decline pathways

This skill ships as a standalone skill. The provenance of every claim must be unambiguous to a reader who never saw the conversation.

**The skill will:**

- **Cite verbatim** every Subcategory ID and Action ID from `references/`. The wording in the output must match the file.
- **Mark model judgment inline.** Applicability calls ("this risk applies here"), operational glosses ("in practice this means…"), role-ownership recommendations, and the final assessment recommendation are model inferences, not NIST statements. Tag the first instance of each kind with `[model judgment — verify against system specifics]` (or the more specific variants in the templates).
- **Distinguish Core vs Profile.** Non-GenAI systems never pull `GV-/MP-/MS-/MG-` action IDs.

**The skill will decline to:**

- **Invent IDs.** If a Subcategory or Action ID doesn't appear in `references/`, it does not exist in NIST's framework. Say so plainly rather than fabricating one.
- **Paraphrase NIST text.** The framework's authority is the publication. Rewording strips the citation value.
- **Assess without input.** If the user's system description lacks the detail to assess a Subcategory, list it as an Open item — don't guess.
- **Substitute for counsel.** NIST is non-binding voluntary guidance. Mandatory regimes (EU AI Act, state AI laws, sector rules) impose actual obligations that may or may not track NIST. Flag the divergence, don't paper over it.

## Workflow

In order, every invocation:

1. **Read `references/README.md` first.** It's the routing index — it tells you which reference files to load for which question. Don't load files greedily.
2. **Gather the question.** Identify the AI use case, system, or governance question. If the user's prompt is vague ("what does NIST say about AI?"), ask one clarifying question before drafting — what system, what context, what decision.
3. **Decide the mode.** Consult / governance plan / assessment. Most queries are consult unless the user explicitly asks for a plan or an assessment.
4. **Decide GenAI or not.** Foundation models, LLMs, image/audio/video/text generators, RAG over a generative core — GenAI. Classifiers, regressors, recommenders, anomaly detectors, traditional ML — not GenAI (use Core only).
5. **Load only the reference files the question needs**, per `references/README.md`.
6. **Load the relevant output template** from `references/templates/<mode>.md` when drafting output.
7. **Produce output per the template** with verbatim citations and the provenance markers described above.

## Mode 1 — Consult

**When to use:** the user is asking "what should we do?" or "what does NIST say about?" with a specific system or scenario in mind. Fast turnaround. Not a deliverable artifact.

**Procedure:**

1. From the system description, identify:
   - System type (GenAI? non-GenAI? mixed?).
   - For GenAI: which of the 12 GAI risks plausibly apply. Use `gai-profile/risks.md` + `crosswalk.md`. Be honest — if a risk obviously doesn't apply (e.g., CBRN for a customer-service chatbot), say so and exclude it. Don't pad.
   - For any system: which of the Core Subcategories most directly apply. Usually 4–10, not all of them.
2. Pull the relevant Suggested Actions (GenAI) or Subcategory statements (non-GenAI) into a table. Group by function.
3. Surface 2–4 follow-up questions the user can't answer from the framework alone (e.g., "What's your incident response capacity?"). The framework points; the user fills in.

**Output template:** `references/templates/consult.md` — load when drafting.

## Mode 2 — Governance plan

**When to use:** the user is building or auditing an AI governance program, not assessing one specific system. They want structure, not a system-specific deep dive.

**Procedure:**

1. Bias toward the **GOVERN** function in the Core. Walk every Category (GOVERN 1–6). For each Category, list the Subcategories with one-sentence "in practice" annotations (operational glosses, marked accordingly per template).
2. Add MAP / MEASURE / MANAGE Subcategories that have clear governance-program implications (e.g., **MAP 1.5** "Organizational risk tolerances are determined and documented" — governance owns the tolerance definitions even though it's a MAP Subcategory).
3. If the org uses or plans to use GenAI, layer in the GAI Profile GOVERN actions per Subcategory.
4. Cross-reference the seven Trustworthy AI characteristics — most policies should commit to each by name.

**Output template:** `references/templates/governance-plan.md` — load when drafting.

## Mode 3 — Assessment

**When to use:** the user wants a documented artifact assessing one specific system end-to-end. Heavier than a consult. The output should be self-contained — a reader who never saw the conversation should understand it.

**Procedure:**

1. Confirm the scope: one system, one version, one deployment context. If the user is vague, ask before drafting.
2. Walk all four functions. For each function, identify the applicable Subcategories and (for GenAI) Action IDs. Cite verbatim.
3. For each Subcategory / action, write a one-paragraph assessment of *what we found about this system against this Subcategory*. Honest, specific. If you don't have the input to assess something, say so and list it as an open item — don't bluff.
4. Conclude with a recommendation: deploy / deploy with conditions / do not deploy. Conditions, if any, must reference specific Subcategories so they're verifiable.

**Output template:** `references/templates/assessment.md` — load when drafting.

## Output formatting

**Work-product header.** Default to `CONFIDENTIAL — Internal Use` at the top of every output. If the user is operating in a legal context and asks for an attorney-work-product header, switch to `ATTORNEY WORK PRODUCT. PRIVILEGED AND CONFIDENTIAL.` for that output.

**Markdown to stdout.** Don't write files. The output is markdown for the user to copy, edit, route, or save themselves.

**Citations.** Always include the Subcategory or Action ID as a clear citation (e.g., `**GOVERN 1.1**` or `` `GV-1.2-001` ``). The verbatim NIST statement goes right after. Never bury the citation in a footnote.

## What this skill is and isn't

**It is:** a way to apply the NIST AI RMF rigorously, with verbatim citations, to specific questions and systems. It saves a lawyer or governance professional from re-reading the full PDF every time.

**It isn't:**
- A substitute for legal counsel. NIST is non-binding. Mandatory regulatory regimes (EU AI Act, state AI laws, sector rules) impose actual obligations that may track to NIST or may not. Flag the divergence; don't replace the analysis.
- A compliance certification. Citing the framework is not the same as meeting it. The conditions in a Mode 3 recommendation should be auditable — but auditing is not what this skill does.
- A complete library of NIST AI publications. Only AI 100-1 and AI 600-1 are loaded. If the user asks about other Profiles, NIST AI Safety Institute publications, or NIST cybersecurity / privacy frameworks, say so.

## Limitations

- **Source dates.** AI 100-1 is from January 2023; AI 600-1 is from July 2024. The framework is intended as a living document; later revisions may exist. Treat the skill's content as a frozen snapshot.
- **Non-binding.** Suggested Actions and Subcategories are voluntary guidance. They become "what we did" only when the organization adopts them.
- **GenAI scope.** The Profile assumes generative AI. Applying its actions to a non-generative system creates noise — don't do it.
- **Verbatim citations only.** If a Subcategory or Action ID doesn't appear in `references/`, it doesn't exist (in NIST's framework). Don't invent.
