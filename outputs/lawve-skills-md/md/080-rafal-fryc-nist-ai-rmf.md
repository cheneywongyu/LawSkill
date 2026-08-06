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
views: 81
downloads: 22
created_at: "2026-05-19T14:26:33.728702+02:00"
updated_at: "2026-05-19T14:34:59.357951+02:00"
source_index: 80
---

# NIST AI RMF

原始名称：`NIST AI RMF`  
作者：Rafal Fryc  
分类：compliance  
来源：https://lawve.ai/@rafal-fryc/skill/nist-ai-rmf

## 中文 README

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

## Original README

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
