---
id: "0c1a0f07-9c1a-5241-b9eb-da8a759cb977"
title: "Billable Time"
title_cn: "计费时间"
slug: "billable-time"
url: "https://lawve.ai/@stephane-boghossian/skill/billable-time"
author: "Stephane Boghossian"
author_slug: "stephane-boghossian"
category: "legal-operations"
language: "en"
license: "AGPL 3.0"
jurisdictions: "INT"
status: "active"
views: 105
downloads: 22
created_at: "2026-05-18T16:29:11.552916+02:00"
updated_at: "2026-05-19T11:51:05.748207+02:00"
source_index: 82
---

# 计费时间

原始名称：`Billable Time`  
作者：Stephane Boghossian  
分类：legal-operations  
来源：https://lawve.ai/@stephane-boghossian/skill/billable-time

## 中文 README

当您的酒吧询问“告诉我您如何对人工智能辅助工作进行计费”时（ABA 512、佛罗里达州 24-1、加利福尼亚州、纽约州和华盛顿特区都提出了意见），您需要一件能够通过审核的工件。可计费时间产生它。

它会从您的 Claude Code 会话日志中起草可审查的时间条目以及可打印的 HTML 审核数据包，其中包含：SHA-256 证据链（源文件 + Matter.yml + 主动披露包 + 可验证的工件自哈希）、律师身份和签名块、带有五个司法管辖区的入门语言的律师意见披露包，以及从文件名和工具形状派生的内容感知确定性叙述（默认情况下从不从提示文本派生）。

该工具拒绝自行计费。 --如果任何审计不变式失败（广泛的路线、缺少律师、缺少/未经验证的披露），严格模式将拒绝交付工件。以 Node CLI 和独立浏览器版本的形式提供（无后端；JSONL 永远不会离开页面）。 15 个不变测试验证了契约。 AGPL-3.0。

---

## Original README

When your bar comes asking "show me how you billed AI-assisted work" — and ABA 512, Florida 24-1, California, New York, and DC all have opinions out — you need an artifact that survives review. billable-time produces it.

From your Claude Code session logs, it drafts reviewable time entries plus a printable HTML audit packet with: SHA-256 chain of evidence (source files + matter.yml + active disclosure pack + verifiable artifact self-hash), attorney identity and signature block, a bar-opinion disclosure pack with starter language for five jurisdictions, and content-aware deterministic narratives derived from filename and tool shape — never from prompt text by default.

The tool refuses to bill on its own. --strict mode refuses to ship the artifact if any audit invariant fails (broad routes, missing attorney, missing/unverified disclosure). Comes as a Node CLI and a self-contained browser version (no backend; JSONL never leaves the page). 15 invariant tests verify the contract. AGPL-3.0.
