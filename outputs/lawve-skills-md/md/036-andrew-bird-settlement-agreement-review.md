---
id: "1daa3e71-9557-526c-b7ad-8d78963b9db7"
title: "settlement-agreement-review"
title_cn: "和解协议审查"
slug: "settlement-agreement-review"
url: "https://lawve.ai/@andrew-bird/skill/settlement-agreement-review"
author: "Andrew Bird"
author_slug: "andrew-bird"
category: "employment-law"
language: "en"
license: "Apache 2.0"
jurisdictions: "UK"
status: "active"
views: 41
downloads: 6
created_at: "2026-06-12T18:10:06.569013+02:00"
updated_at: "2026-06-16T16:15:22.703521+02:00"
source_index: 36
---

# 和解协议审查

原始名称：`settlement-agreement-review`  
作者：Andrew Bird  
分类：employment-law  
来源：https://lawve.ai/@andrew-bird/skill/settlement-agreement-review

## 中文 README

# 和解协议审查

审查或起草向员工支付费用以解决其索赔的协议，并标记决定该协议是否真正对他们具有约束力的法定条件。

和解协议仅在满足 1996 年 ERA 第 203 条中的累积条件的情况下禁止法定就业索赔；如果错过了一项，员工可以拿走这笔钱，但仍然可以索赔。该技能检查六个条件并标记明显的差距供律师确认，根据当事人（雇主或雇员）的立场审查实质性条款，并揭示税收和可执行性风险。它不裁定有效性，也不是法律建议。

就业律师在签署前检查协议，内部团队审查离职者的条款，员工顾问对聘书进行压力测试。

＃＃ 安装
```bash
git clone https://github.com/b1rdmania/settlement-agreement-review ~/.claude/skills/settlement-agreement-review
```
或者在 [Legalise](https://github.com/b1rdmania/legalise) 工作区中：从技能库中添加它 — 查看清单、授予功能、启用某个事项、从聊天中运行。每次运行都会留下签名的、可审计的记录。

＃＃ 用法
```
/settlement-agreement-review --mode=review --party=employee
/settlement-agreement-review --mode=draft --party=employer
```
根据协议文本和事实运行它：谁要离开、以什么条件、付款明细以及你代表哪一方。在审核模式下，它会返回带有风险标记的标记审核；在草稿模式下，需要完善的干净草稿。

## 它的作用

- 根据 s.203 ERA 的 6 个条件（书面、具体投诉、独立顾问、已确定的顾问、顾问受保、条件声明）检查协议并报告明显状态 - 标记差距以供律师确认。
- 根据当事人的立场审查实质性条款——付款明细、保密和非贬低、参考、保证、限制性契约、索赔表、税务赔偿。
- 根据 ITEPA 2003 提出税务问题，包括 PILON 上的 PENP，每个数字都标记为会计师提示而非权威。
- 输出带有优先更改的评论或干净的草稿。
- 标记每个不确定的内联点 - “[条件差距]”、“[非税务建议]”、“[需要引用]”、“[SME 验证]” - 因此没有任何内容会被视为已解决。

## 它不做什么

- 提供法律建议——它标记了明显的问题，供合格的顾问确认。
- 关于协议是否有效的规则——仅报告明显的第 203 条状态；律师确认有效性。
- 提供员工所需的独立建议——该建议必须来自 ERA 第 203(3A) 条规定的合格顾问。
- 权威地计算税收——每个数字都需要会计师或税务顾问的签字。
- 根据实时来源验证判例法或法规——在依赖之前检查其引用的任何权威。
- 涵盖苏格兰或北爱尔兰（不同的法定框架）。

## 要求

- 克劳德代码或克劳德合作。无需 MCP 连接器。
- 反对的事项：协议文本和周围的事实。

## 许可证

阿帕奇-2.0。

---

## Original README

# settlement-agreement-review

Reviews or drafts the agreement that pays an employee to settle their claims — and flags the statutory conditions that decide whether it actually binds them.

A settlement agreement only bars statutory employment claims if it satisfies the cumulative conditions in s.203 ERA 1996; miss one and the employee can take the money and still claim. This skill checks the six conditions and flags apparent gaps for a solicitor to confirm, reviews the substantive terms against the party's position (employer or employee), and surfaces the tax and enforceability risks. It does not rule on validity and is not legal advice.

For employment solicitors checking an agreement before sign-off, in-house teams reviewing a leaver's terms, and employees' advisers stress-testing an offer.

## Install

```bash
git clone https://github.com/b1rdmania/settlement-agreement-review ~/.claude/skills/settlement-agreement-review
```

Or in a [Legalise](https://github.com/b1rdmania/legalise) workspace: add it from the skill library — review the manifest, grant capabilities, enable on a matter, run from chat. Every run leaves a signed, auditable record.

## Usage

```
/settlement-agreement-review --mode=review --party=employee
/settlement-agreement-review --mode=draft --party=employer
```

Run it against the agreement text and the facts: who is leaving, on what terms, the payment breakdown, and which side you act for. In review mode it returns a marked-up review with risk flags; in draft mode, a clean draft to refine.

## What it does

- Checks the agreement against the six s.203 ERA conditions (writing, specific complaints, independent adviser, adviser identified, adviser insured, statement of conditions) and reports apparent status — flagging gaps for a solicitor to confirm.
- Reviews the substantive terms — payment breakdown, confidentiality and non-disparagement, reference, warranties, restrictive covenants, claims schedule, tax indemnity — against the party's position.
- Surfaces tax issues under ITEPA 2003, including PENP on a PILON, with every figure marked as an accountant prompt rather than authoritative.
- Outputs either a commented review with prioritised changes or a clean draft.
- Marks every uncertain point inline — `[CONDITION GAP]`, `[NOT TAX ADVICE]`, `[CITE NEEDED]`, `[SME VERIFY]` — so nothing reads as settled.

## What it doesn't do

- Provide legal advice — it flags apparent issues for a qualified adviser to confirm.
- Rule on whether the agreement is valid — it reports apparent s.203 status only; a solicitor confirms validity.
- Provide the independent advice the employee needs — that must come from a qualified adviser per s.203(3A) ERA.
- Compute tax authoritatively — every figure needs accountant or tax counsel sign-off.
- Verify case law or statute against a live source — check any authority it cites before relying on it.
- Cover Scotland or Northern Ireland (different statutory framing).

## Requirements

- Claude Code or Claude Cowork. No MCP connectors required.
- A matter to run against: the agreement text and the surrounding facts.

## License

Apache-2.0.
