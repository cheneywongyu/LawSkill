---
id: "59c7c46e-9eb3-5e5e-9a30-78c6b6f1100b"
title: "enforcement-action-analysis"
title_cn: "执行-行动-分析"
slug: "enforcement-action-analysis"
url: "https://lawve.ai/@amir-fadavi/skill/enforcement-action-analysis"
author: "Amir Fadavi"
author_slug: "amir-fadavi"
category: "compliance"
language: "en"
license: "MIT"
jurisdictions: "US, UK"
status: "active"
views: 14
downloads: 2
created_at: "2026-06-10T04:14:20.803559+02:00"
updated_at: "2026-07-08T18:56:51.399454+02:00"
source_index: 6
---

# 执行-行动-分析

原始名称：`enforcement-action-analysis`  
作者：Amir Fadavi  
分类：compliance  
来源：https://lawve.ai/@amir-fadavi/skill/enforcement-action-analysis

## 中文 README

# 执行-行动-分析

克劳德 (Claude) 技能，可分析 OFAC 和 OFSI 执法行动，并以格式化的 Excel 电子表格形式生成结构化根本原因分析。

输入强制措施（URL、PDF 或粘贴），即可在几秒钟内获得有效的合规性自我评估表。

**由 [Sanctrust](https://sanctrust.com) 构建 · 根据 MIT 许可证免费使用**

---

## 它的作用

读取任何 OFAC 或 OFSI 执法行动并输出六列“.xlsx”表：
| Column | Description |
|--------|-------------|
| **Root Cause** | Short label identifying the compliance failure |
| **What Went Wrong** | What happened in this specific case |
| **How It Went Wrong** | The underlying failure mechanism |
| **What Could Have Stopped It** | Concrete controls that would have prevented it |
| **Is my organization immune to this?** | ☐ Yes / ☐ No / ☐ Partial — fill in during review |
| **Notes** | Free-text field for your team's observations |
| Enforcement Action | Penalty | Root Causes Found |
|--------------------|---------|-------------------|
| FTI Consulting, Inc. (June 2026) | $1,050,000 | 3 |
| Adani Enterprises Limited (2025) | $275,000,000 | 5 |
该技能始终交叉引用 OFAC 自己的 **合规注意事项** 部分和 **OFAC 合规框架根本原因分类法**，因此输出反映了监管机构既定的期望，而不仅仅是一般建议。

---

## 输出示例


---

## 如何安装

1.下载`enforcement-action-analysis.skill`
2. 在 Claude 中，转到 **设置 → 技能** 并上传 `.skill` 文件
3.该技能现在可以在您的克劳德会话中使用

---

## 如何触发

只需描述您想要什么。其中任何一个都可以：

- *“分析此强制措施：[URL 或粘贴文本]”*
- *“FTI Consulting OFAC 和解的根本原因是什么？”*
- *“将其变成合规清单”*
- *“我如何确保这不会发生在我们身上？”*
- 上传一份执法行动的 PDF 并请 Claude 进行分析

---

## 这是给谁的

金融机构和非金融公司的合规官、内部法律顾问、外部法律顾问和顾问。输出旨在直接用于合规性审查、董事会演示和计划差距评估。

---

## 本仓库中的文件
```
enforcement-action-analysis/
├── SKILL.md          # The skill itself — instructions Claude follows
├── README.md         # This file
└── LICENSE           # MIT License
```
`.skill` 文件（可安装包）可在 [Releases](../../releases) 页面上找到。

---

## 许可证

MIT — 免费使用、修改和分发。请参阅[许可证]（许可证）。

---

## Original README

# enforcement-action-analysis

A Claude skill that analyzes OFAC and OFSI enforcement actions and produces a structured root cause analysis as a formatted Excel spreadsheet.

Drop in an enforcement action — URL, PDF, or paste — and get a working compliance self-assessment table in seconds.

**Built by [Sanctrust](https://sanctrust.com) · Free to use under MIT License**

---

## What it does

Reads any OFAC or OFSI enforcement action and outputs a six-column `.xlsx` table:

| Column | Description |
|--------|-------------|
| **Root Cause** | Short label identifying the compliance failure |
| **What Went Wrong** | What happened in this specific case |
| **How It Went Wrong** | The underlying failure mechanism |
| **What Could Have Stopped It** | Concrete controls that would have prevented it |
| **Is my organization immune to this?** | ☐ Yes / ☐ No / ☐ Partial — fill in during review |
| **Notes** | Free-text field for your team's observations |

The skill always cross-references OFAC's own **Compliance Considerations** section and the **OFAC Compliance Framework root cause taxonomy**, so the output reflects the regulator's stated expectations — not just generic advice.

---

## Example outputs

| Enforcement Action | Penalty | Root Causes Found |
|--------------------|---------|-------------------|
| FTI Consulting, Inc. (June 2026) | $1,050,000 | 3 |
| Adani Enterprises Limited (2025) | $275,000,000 | 5 |

---

## How to install

1. Download `enforcement-action-analysis.skill`
2. In Claude, go to **Settings → Skills** and upload the `.skill` file
3. The skill is now available in your Claude sessions

---

## How to trigger

Just describe what you want. Any of these will work:

- *"Analyze this enforcement action: [URL or paste text]"*
- *"What were the root causes in the FTI Consulting OFAC settlement?"*
- *"Turn this into a compliance checklist"*
- *"How do I make sure this doesn't happen to us?"*
- Upload a PDF of an enforcement action and ask Claude to analyze it

---

## Who it's for

Compliance officers, in-house counsel, external counsel, and consultants — at financial institutions and non-financial firms. The output is designed to be used directly in compliance reviews, board presentations, and program gap assessments.

---

## Files in this repo

```
enforcement-action-analysis/
├── SKILL.md          # The skill itself — instructions Claude follows
├── README.md         # This file
└── LICENSE           # MIT License
```

The `.skill` file (installable package) is available on the [Releases](../../releases) page.

---

## License

MIT — free to use, modify, and distribute. See [LICENSE](LICENSE).
