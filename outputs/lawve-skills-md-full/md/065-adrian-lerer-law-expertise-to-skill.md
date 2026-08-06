---
id: "ba3fb08f-bff8-5798-b326-f0d1905d4ae2"
title: "law-expertise-to-skill"
title_cn: "法律专业知识到技能"
slug: "law-expertise-to-skill"
url: "https://lawve.ai/@adrian-lerer/skill/law-expertise-to-skill"
author: "Ignacio Adrián Lerer"
author_slug: "adrian-lerer"
category: "skill-authoring"
language: "en"
license: "AGPL 3.0"
jurisdictions: "INT"
status: "active"
source_index: 65
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 法律专业知识到技能

原始名称：`law-expertise-to-skill`  
作者：Ignacio Adrián Lerer  
分类：skill-authoring  
来源：https://lawve.ai/@adrian-lerer/skill/law-expertise-to-skill  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

将律师有限的专业知识、工作流程、审查标准或法律判断模式转化为安全、可检查的法律人工智能技能。当用户提供法律备忘录、评论、清单、谈判笔记、审阅习惯、合规手册或专业反馈并想要可重复使用的 Lawve 式技能时使用。不得冒充律师或声称复制他人；仅提取授权的、受源限制的能力。

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

Turn a lawyer's bounded expertise, workflow, review standard, or legal judgment pattern into a safe, inspectable legal AI skill. Use when a user provides legal memos, comments, checklists, negotiation notes, review habits, compliance playbooks, or professional feedback and wants a reusable Lawve-style skill. Do not impersonate the lawyer or claim to reproduce a person; distill only authorized, source-bounded capability.

---

## SKILL.md Original

---
name: "law-expertise-to-skill-ignacio-adrian-lerer"
description: "Turn a lawyer's bounded expertise, workflow, review standard, or legal judgment pattern into a safe, inspectable legal AI skill. Use when a user provides legal memos, comments, checklists, negotiation notes, review habits, compliance playbooks, or professional feedback and wants a reusable Lawve-style skill. Do not impersonate the lawyer or claim to reproduce a person; distill only authorized, source-bounded capability."
metadata:
  author: "Ignacio Adrián Lerer"
  license: "agpl-3.0"
  version: "2026-06-01"
---

# Law Expertise To Skill

Use this skill to convert legal professional know-how into a simple, safe skill package.

## Inputs

Accept:

- Legal workflow notes, memos, comments, checklists, templates, negotiation positions, audit criteria, or review standards.
- A short description of the target legal task.
- User feedback about what the skill should or should not do.

Do not use private client material, confidential firm know-how, privileged communications, or personal traces unless the user confirms authority to use them.

## Workflow

1. Define the legal capability: what the skill helps with, for whom, and under which legal system or practice area.
2. Define source boundaries: what materials were used, what was excluded, and whether the evidence is first-hand, public, generated, or user-described.
3. Extract only reusable capability:
   - issue-spotting criteria;
   - review sequence;
   - risk taxonomy;
   - drafting or negotiation heuristics;
   - escalation thresholds;
   - required disclaimers or source checks.
4. Separate capability from voice:
   - Capability is allowed.
   - Professional tone guidance is allowed.
   - Persona simulation or identity replacement is not allowed.
5. Add safety boundaries:
   - no legal advice beyond the skill scope;
   - no unsupported jurisdictional claims;
   - no hidden source inference;
   - no confidential-data reuse;
   - human lawyer review required for material decisions.
6. Produce a compact skill with:
   - clear trigger;
   - negative scope;
   - step-by-step method;
   - output format;
   - verification checklist.

## Output

Return:

- `What this skill does`: short marketplace description.
- `How to use`: user-facing instructions.
- `SKILL.md`: portable skill text.
- `Source boundaries`: what evidence was used and what was not.
- `Human review points`: decisions that need a lawyer.

## Refusal / Escalation

Refuse or request clarification when the user asks to:

- impersonate a real lawyer without consent;
- use private traces from another person without authority;
- hide source limitations;
- remove human-review requirements from high-stakes legal work;
- present the skill as the actual person or as guaranteed legal advice.
