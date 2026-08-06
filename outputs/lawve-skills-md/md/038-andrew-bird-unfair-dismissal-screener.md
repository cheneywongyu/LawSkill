---
id: "8e37c5d6-2f9c-50fd-8ef4-9a5aead886a2"
title: "unfair-dismissal-screener"
title_cn: "不公平解雇筛选器"
slug: "unfair-dismissal-screener"
url: "https://lawve.ai/@andrew-bird/skill/unfair-dismissal-screener"
author: "Andrew Bird"
author_slug: "andrew-bird"
category: "employment-law"
language: "en"
license: "MIT"
jurisdictions: "UK"
status: "active"
views: 33
downloads: 3
created_at: "2026-06-12T18:08:14.335230+02:00"
updated_at: "2026-06-15T17:37:55.518331+02:00"
source_index: 38
---

# 不公平解雇筛选器

原始名称：`unfair-dismissal-screener`  
作者：Andrew Bird  
分类：employment-law  
来源：https://lawve.ai/@andrew-bird/skill/unfair-dismissal-screener

## 中文 README

# 不公平解雇筛选器

根据英格兰和威尔士不公平解雇框架筛选解雇（提议的或已经完成的），并显示其暴露的位置。

大多数驳回案件在法庭上失败的原因是程序而非实质内容。该技能构建了资格服务问题，检查不需要资格期的自动不公平类别，并构建了 Burchell / Polkey / 合理响应范围分析，然后提出了具体的程序缺陷 - 作为律师验证的草案，而不是公平性的确定。雇主在解雇前决定是否继续进行，以及双方在解雇后评估预期索赔的强度。

＃＃ 安装
```bash
git clone https://github.com/b1rdmania/unfair-dismissal-screener ~/.claude/skills/unfair-dismissal-screener
```
或者在 [Legalise](https://github.com/b1rdmania/legalise) 工作区中：从技能库中添加它 — 查看清单、授予功能、启用某个事项、从聊天中运行。每次运行都会留下签名的、可审计的记录。

＃＃ 用法
```
/unfair-dismissal-screener
/unfair-dismissal-screener --mode=pre-dismissal
/unfair-dismissal-screener --mode=post-dismissal
```
针对包含开始日期、终止生效日期、雇主预付款的原因以及遵循的程序的事项进行审查。它返回一个结构化的屏幕：资格、原因、实质性和程序公平性、指示性风险评分以及说明性补偿范围。

## 它的作用

- 制定资格赛门（第 108 条 ERA）并检查没有资格赛期的自动不公平头球。
- 确定提出的潜在合理理由（第 98(2) 条）及其是否真实。
- 根据合理反应的范围，构建行为案例的 Burchell 分析——真实的信念、合理的理由、合理的调查。
- 构建 Polkey 问题和 ACAS 代码提升，并将其引入说明性补偿范围。
- 生成一个具有可见推理的指示性风险评分，并标记每个内嵌的不确定点——“[CITE NEEDED]”、“[SME VERIFY]”——因此没有任何内容被视为已解决。

## 它不做什么

- 确定公平性——这是法庭对提示从未见过的事实和证人的要求。
- 预测结果——风险评分是指示性的，而不是经过校准的概率。
- 提供法律建议——这是供律师审查的筛选草案，律师拥有结论。
- 精确量化养老金损失，或详细涵盖裁员选择标准的挑战。
- 覆盖苏格兰或北爱尔兰。
- 根据实时来源验证法规或判例法 - 检查每个引文并在依赖之前重新计算每个数字。

## 要求

- 克劳德代码或克劳德合作。无需 MCP 连接器。
- 反对的事项（解雇事实、提出的理由、遵循的程序）。

## 许可证

阿帕奇-2.0。

---

## Original README

# unfair-dismissal-screener

Screens a dismissal — proposed or already done — against the England & Wales unfair dismissal framework, and shows where it is exposed.

Most dismissals fail in the tribunal on process, not substance. This skill frames the qualifying-service question, checks the automatically-unfair categories that need no qualifying period, and structures the Burchell / Polkey / band-of-reasonable-responses analysis, then surfaces the specific procedural defects — as a draft for a solicitor to verify, not a determination of fairness. For employers deciding whether to proceed before a dismissal, and either side assessing the strength of a prospective claim after one.

## Install

```bash
git clone https://github.com/b1rdmania/unfair-dismissal-screener ~/.claude/skills/unfair-dismissal-screener
```

Or in a [Legalise](https://github.com/b1rdmania/legalise) workspace: add it from the skill library — review the manifest, grant capabilities, enable on a matter, run from chat. Every run leaves a signed, auditable record.

## Usage

```
/unfair-dismissal-screener
/unfair-dismissal-screener --mode=pre-dismissal
/unfair-dismissal-screener --mode=post-dismissal
```

Run it against a matter with the start date, effective date of termination, the reason the employer advances, and the procedure followed. It returns a structured screen: eligibility, reason, substantive and procedural fairness, an indicative risk score, and an illustrative compensation range.

## What it does

- Frames the qualifying-service gate (s.108 ERA) and checks for automatically-unfair heads with no qualifying period.
- Identifies the potentially fair reason advanced (s.98(2)) and whether it is genuine.
- Structures the Burchell analysis for conduct cases — genuine belief, reasonable grounds, reasonable investigation — against the band of reasonable responses.
- Structures the Polkey question and the ACAS Code uplift, and carries them through to an illustrative compensation range.
- Produces an indicative risk score with the reasoning visible, and marks every uncertain point inline — `[CITE NEEDED]`, `[SME VERIFY]` — so nothing reads as settled.

## What it doesn't do

- Determine fairness — that is the Tribunal's call on facts and witnesses the prompt never sees.
- Predict the outcome — the risk score is indicative, not a calibrated probability.
- Give legal advice — it is a draft screen for solicitor review, and a solicitor owns the conclusion.
- Quantify pension loss precisely, or cover redundancy selection-criteria challenges in detail.
- Cover Scotland or Northern Ireland.
- Verify statute or case law against a live source — check every citation and recompute every figure before relying on it.

## Requirements

- Claude Code or Claude Cowork. No MCP connectors required.
- A matter to run against (the dismissal facts, the reason advanced, the procedure followed).

## License

Apache-2.0.
