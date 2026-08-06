---
id: "d818854d-d330-5a03-a0c4-da0a36349983"
title: "pre-motion"
title_cn: "预动"
slug: "pre-motion"
url: "https://lawve.ai/@andrew-bird/skill/pre-motion"
author: "Andrew Bird"
author_slug: "andrew-bird"
category: "litigation"
language: "en"
license: "MIT"
jurisdictions: "UK, EU, US"
status: "active"
views: 183
downloads: 27
created_at: "2026-06-05T16:36:06.862884+02:00"
updated_at: "2026-06-06T16:06:22.045378+02:00"
source_index: 58
---

# 预动

原始名称：`pre-motion`  
作者：Andrew Bird  
分类：litigation  
来源：https://lawve.ai/@andrew-bird/skill/pre-motion

## 中文 README

# 预运动

英格兰和威尔士民事诉讼的对抗性事前分析。构建案件最有力的版本，然后从程序、实质、证据、战略四个角度对其进行攻击，以抢在对方律师之前找出败诉的地方。

适用于律师在问题前进行压力测试、内部法律顾问在签署前进行压力测试、调解员重视和解以及诉讼资助者对事项进行定价。

## 安装

[claude-for-uk-legal](https://github.com/b1rdmania/claude-for-uk-legal) 插件套件的一部分：
```bash
/plugin marketplace add https://github.com/b1rdmania/claude-for-uk-legal
/plugin install uk-litigation-legal@claude-for-uk-legal
```
或者直接安装单个技能：
```bash
cp -r pre-motion ~/.claude/skills/pre-motion
```
＃＃ 用法
```
/pre-motion
/pre-motion --depth=fast
/pre-motion --depth=thorough
```
结合事实、证据参考、索赔要点以及您所看到的最有力的案件版本来对案件进行审查。它返回排名压力测试简介。

## 它的作用

- 建立乐观基线——证据支持的最强有力的版本。
- 检查证据：文档差距、跨文档矛盾、时间线漏洞，每个漏洞都标有严重性。
- 运行四次对抗性传递（在支持的情况下并行子代理，否则是顺序的），每个子代理都告诉案例已丢失并要求回溯原因 - 每个失败类别一个。
- 综合概要：按照严重性、可能性和缓解措施对故障场景进行排序；证据不一致；盲点；定居点状况的影响；和一项单句判决。
- 标记每个不确定的内联点 - “[CITE NEEDED]”、“[SME VERIFY]”、“[EVIDENCE FLAG]” - 因此没有任何内容会被视为已解决。

## 它不做什么

- 预测结果——它揭示的是故障模式，而不是结果。
- 决定是否接受、和解或撤回——这些由律师决定。
- 更换正式律师意见。它是对话的结构化提示，而不是替代品。
- 涵盖非英国程序（美国联邦、苏格兰、北爱尔兰）。
- 根据实时来源验证判例法——在依赖它之前检查它引用的任何权威。

## 要求

- 克劳德代码或克劳德合作。无需 MCP 连接器。
- 需要反对的事项（事实和证据参考）。在主机工作区中，CPR 31.22/特权门在上游强制执行；仅在您被允许使用的材料上独立运行。

## 许可证

阿帕奇-2.0。

---

## Original README

# pre-motion

Adversarial premortem for England & Wales civil litigation. Builds the strongest version of a case, then attacks it from four angles — procedural, substantive, evidentiary, strategic — to find where it loses before opposing counsel does.

For solicitors stress-testing before issue, in-house counsel before sign-off, mediators valuing settlement, and litigation funders pricing a matter.

## Install

Part of the [claude-for-uk-legal](https://github.com/b1rdmania/claude-for-uk-legal) plugin suite:

```bash
/plugin marketplace add https://github.com/b1rdmania/claude-for-uk-legal
/plugin install uk-litigation-legal@claude-for-uk-legal
```

Or install the single skill directly:

```bash
cp -r pre-motion ~/.claude/skills/pre-motion
```

## Usage

```
/pre-motion
/pre-motion --depth=fast
/pre-motion --depth=thorough
```

Run it against a matter with the facts, evidence references, claim heads, and the strongest version of the case as you see it. It returns a ranked stress-test brief.

## What it does

- Builds the optimistic baseline — the strongest version the evidence supports.
- Inspects the evidence: document gaps, cross-document contradictions, timeline holes, each flagged with a severity.
- Runs four adversarial passes (parallel sub-agents where supported, otherwise sequential), each told the case has been lost and asked to walk back why — one per failure category.
- Synthesises a brief: ranked failure scenarios with severity, likelihood and mitigation; evidence inconsistencies; blind spots; settlement-posture implications; and one one-sentence verdict.
- Marks every uncertain point inline — `[CITE NEEDED]`, `[SME VERIFY]`, `[EVIDENCE FLAG]` — so nothing reads as settled.

## What it doesn't do

- Predict the outcome — it surfaces failure modes, not results.
- Decide whether to take, settle, or withdraw — those are counsel's calls.
- Replace a formal counsel opinion. It is a structured prompt for that conversation, not a substitute.
- Cover non-UK procedure (US federal, Scotland, Northern Ireland).
- Verify case law against a live source — check any authority it cites before relying on it.

## Requirements

- Claude Code or Claude Cowork. No MCP connectors required.
- A matter to run against (facts and evidence references). In a host workspace, the CPR 31.22 / privilege gate is enforced upstream; run standalone only on material you are permitted to use.

## License

Apache-2.0.
