---
id: "ca547d84-bac6-5f4a-a9c5-58a38ac33f16"
title: "Legal Guidance Vault"
title_cn: "法律指导库"
slug: "legal-guidance-vault"
url: "https://lawve.ai/@michael-cremata/skill/legal-guidance-vault"
author: "Michael Cremata"
author_slug: "michael-cremata"
category: "legal-operations"
language: "en"
license: "AGPL 3.0"
jurisdictions: ""
status: "active"
source_index: 111
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 法律指导库

原始名称：`Legal Guidance Vault`  
作者：Michael Cremata  
分类：legal-operations  
来源：https://lawve.ai/@michael-cremata/skill/legal-guidance-vault  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

# 这是什么？

法律库是克劳德的一项技能，无论发生在哪里，它都能对您提供的法律指导产生长期记忆。在任何会议、Slack 线程、电子邮件或 Google 文档之后，您都可以要求 Claude 将其存档。克劳德提取法律相关内容，生成简短的结构化摘要并保存。在存储任何内容之前，您先进行检查并确认。

从那时起，您可以要求 Claude 按主题、问题、产品、参与人员或大致发生时间（甚至一年后）找到该指导。

## 您可以存档什么

- 会议 - 克劳德从 Granola（你的人工智能会议记录器）中提取笔记并提取法律实质内容。
- Slack 线程 — 将线程 URL 粘贴到 Claude 中，或使用 :file-cabinet: 对任何消息作出反应，Claude 会自动找到它。
- 电子邮件 — 粘贴 Gmail 链接或描述电子邮件（“关于生物识别同意的柯克兰备忘录”），Claude 会找到并提取它。最适合外部顾问备忘录和意见。
- Google 文档 — 粘贴文档 URL。克劳德询问是否归档整个文档或仅归档与法律相关的部分。

## 开始之前您需要什么

1. 协同办公

克劳德桌面应用程序。这就是运行技能的原因。

2. 格兰诺拉麦片（用于会议存档）

Granola 是一款免费的 Mac 应用程序，可记录和总结您的会议。它与 Google 日历集成并从您的计算机捕获音频 - 没有机器人加入您的通话。在 granola.so 下载。使用您的工作 Google 帐户登录。

3. 连接的帐户（适用于 Slack、Gmail 和 Drive）

Slack、Gmail 和 Google Drive 必须分别连接到 Cowork，Claude 才能访问它们。以下是如何连接每一个：

1. 在 Mac 上打开 Claude Desktop。
2. 单击左下角的插头图标 (⚡) 打开集成。
3. 在列表中找到 Slack、Gmail 和 Google Drive。
4. 单击每个按钮旁边的“连接”，然后在打开的浏览器窗口中完成登录流程。

如果连接稍后断开（例如，Claude 说无法连接到 Slack），请返回集成并重新连接。您只需为每个服务执行一次此操作。

4.技能档案

一个名为“legal-guidance-vault.skill”的文件——由共享本指南的人提供。双击安装一次。

## 安装（仅限一次）

### 第 1 步 — 导入现有会议记录（可选）

如果您有来自 @meetingnotes 模板的 Google 云端硬盘会议记录，请先批量导入它们。从与本指南相同的驱动器文件夹中下载 legal-guidance-vault-import.skill 并双击安装。然后询问 Claude：“从云端硬盘导入我现有的会议记录。”仅运行一次。
### 步骤 2 — 安装格兰诺拉麦片

从 granola.so 下载并打开 Granola。使用您的 Google 帐户登录并授予日历和麦克风权限。

### 第 3 步 — 安装技能

双击“legal-guidance-vault.skill”。 Cowork 会要求您确认 — 单击“安装”。

## 如何存档

### 来自会议（格兰诺拉麦片）

会议结束后，告诉克劳德：“存档我与[团队/人员]的会议。”克劳德在格兰诺拉麦片中找到它，提取出合法的物质，给你看一份草稿，并在你确认后保存。

您也可以只说“存档我的上次会议”，克劳德将识别它并确认标题，然后再继续。

要将其设置为每日或每周自动扫描，请告诉 Claude：“为格兰诺拉麦片会议记录设置每日/每周扫描。”克劳德将配置一个计划任务，每天/每周提示您。 [请参阅此处的示例说明]

### 来自 Slack — 手册

将链接复制到任何 Slack 线程（右键单击消息 → 复制链接），然后使用“存档此线程”将其粘贴到 Claude 中。克劳德获取线程和周围的渠道上下文，综合包括业务上下文在内的完整交换，向您显示草稿，并在确认时保存。

### 来自 Slack — 表情符号扫描（设置一次）

使用 :file-cabinet: 响应任何 Slack 消息，将其标记为存档。要处理标记的消息，请告诉 Claude：“扫描我的带有表情符号标记的 Slack 线程。”克劳德会找到您使用该表情符号做出反应的所有消息，获取每个线程，并一次呈现一个以供审阅。

要将其设置为每日或每周自动扫描，请告诉 Claude：“为我的：文件柜：Slack 反应设置每周扫描。”克劳德将配置每周提示您的计划任务。 [请参阅此处的示例说明]

### 来自电子邮件

将 Gmail 链接粘贴到 Claude 中并说“存档此电子邮件”。或者描述电子邮件 - “Wilson Sonsini 对 3 月份数据传输问题的意见” - 克劳德将搜索您的收件箱，确认匹配，提取指导并保存。

### 来自 Google 文档

粘贴 Google 文档 URL 并说“存档此文档”。克劳德会问：“存档整个文档还是只存档相关部分？”无论哪种方式，返回原始文档的链接始终包含在保存的条目中。

## 如何查找过去的指导

就自然地问克劳德吧：

- “查找我向任务团队提供的有关 BIPA 的指导。”
- “关于两方同意我说了什么？”
- “我之前处理过商务平台的地理扩张吗？”
- “我从外部顾问那里得到了哪些关于数据传输的电子邮件指导？”
- “我对知识产权所有权说了些什么——大概是一年前的事了。”
克劳德搜索您的保险库并返回匹配的条目以及每个条目的 TL;DR 和密钥指南。如果有多个匹配项，它会综合它们：“您已解决此问题 3 次。一致的位置是 X。”

## 如何调整或更新技能

只需告诉克劳德：“我想更新我的法律避难所技能。我们可以更改[X]吗？” Claude 将对其进行编辑，向您显示更改的内容，并为您提供更新的 .skill 文件，以便通过双击重新安装。

## 提示

有选择地存档 - 仅存档您提供或收到值得稍后查找的指导的帖子、电子邮件和文档。当信号密集时，保险库最有用。

保管库是 Mac 上的纯文本文件。没有任何内容与外部共享。

归档 Slack 线程时，Claude 会捕获完整的对话，包括业务上下文，而不仅仅是您的消息。这种背景对于理解你为什么说这些话通常至关重要。

对于带有长备忘录的外部法律顾问电子邮件，仅存档结论和关键推理通常就足够了。克劳德会问你是否想要整个内容或相关部分。

---

## 附录

### 格兰诺拉麦片扫描说明

设置每周计划任务来扫描我的格兰诺拉麦片会议记录。

时间表：每个[星期五] [上午11点] [山地时间]

每次运行应该：

1. 检查 ~/Claude Cowork/Data/legal-guidance-vault/.scan-state.json 中的状态文件，了解上次运行日期和已存档的会议 ID（首次运行时默认为 7 天前）
2. 获取自上次运行以来的所有 Granola 会议
3. 过滤掉所有已归档的内容
4. 显示编号列表 — 会议标题、日期、与会者、一行摘要
5.询问我想将哪些内容存档到法律指导库
6. 对于我选择的每一项：显示完整注释，使用 legal-guidance-vault 技能格式起草一份 Vault 条目，与我确认，然后保存到 ~/Claude Cowork/Data/legal-guidance-vault/
7. 使用今天的日期和新归档的会议 ID 更新状态文件 使用归档格式的 legal-guidance-vault 技能和用于获取会议的 Granola CLI。

### Slack 扫描指令

设置每周计划任务，在 Slack 中扫描我用 🗄️ 表情符号标记的线程。

时间表：每个[星期五] [上午11点] [山地时间]

我的 Slack ID：[查找您的：在 Slack 中单击您的个人资料照片 → 个人资料 → 三点菜单 → 复制会员 ID]

每次运行应该：

1. 检查 ~/Claude Cowork/Data/legal-guidance-vault/.scan-state.json 以获取上次 Slack 扫描日期和已存档的线程 ID
2. 在 Slack 中搜索自上次扫描以来带有 🗄️ 标记的消息 — 尝试 has::file_cabinet:、has::filing_cabinet: 以及文本中的表情符号字符，范围仅限于我的消息
3. 过滤掉已经归档的线程
4. 显示编号列表 — 频道、日期、参与者、一行摘要
5.询问我想将哪些内容存档到法律指导库
6. 对于我选择的每一项：显示完整的线索，使用 legal-guidance-vault 技能格式起草一份保险库条目，与我确认，然后保存到 ~/Claude Cowork/Data/legal-guidance-vault/
7.更新状态文件而不覆盖其他密钥（应保留格兰诺拉扫描数据）

使用归档格式的 legal-guidance-Vault 技能。

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

# What Is This?

The Legal Vault is a skill for Claude that gives it a long-term memory for the legal guidance you give — wherever it happens. After any meeting, Slack thread, email, or Google Doc, you can ask Claude to archive it. Claude extracts the legally relevant content, produces a short structured summary, and saves it. You review and confirm before anything is stored.

From that point on, you can ask Claude to find that guidance by topic, issue, product, who was involved, or roughly when it happened — even a year later.

## What You Can Archive

- Meetings — Claude pulls notes from Granola (your AI meeting recorder) and extracts the legal substance.
- Slack threads — Paste a thread URL into Claude, or react to any message with :file-cabinet: and Claude will find it automatically.
- Email — Paste a Gmail link or describe the email ("the Kirkland memo about biometric consent") and Claude finds and extracts it. Works best for outside counsel memos and opinions.
- Google Docs — Paste a doc URL. Claude asks whether to archive the whole doc or just the legally relevant sections.

## What You Need Before You Start

1. Cowork

The Claude desktop app. It's what runs the skill.

2. Granola (for meeting archiving)

Granola is a free Mac app that records and summarizes your meetings. It integrates with Google Calendar and captures audio from your computer — no bot joins your calls. Download at granola.so. Sign in with your work Google account.

3. Connected accounts (for Slack, Gmail, and Drive)

Slack, Gmail, and Google Drive must each be connected to Cowork before Claude can access them. Here's how to connect each one:

1. Open Claude Desktop on your Mac.
2. Click the plug icon (⚡) in the bottom-left corner to open Integrations.
3. Find Slack, Gmail, and Google Drive in the list.
4. Click Connect next to each one and complete the sign-in flow in the browser window that opens.

If a connection drops later (e.g., Claude says it can't reach Slack), go back to Integrations and reconnect. You only need to do this once per service.

4. The skill file

A file called "legal-guidance-vault.skill" — provided by whoever shared this guide. Install it once by double-clicking.

## Installation (One Time Only)

### Step 1 — Import existing meeting notes (optional)

If you have Google Drive meeting notes from the @meetingnotes template, bulk-import them first. Download legal-guidance-vault-import.skill from the same Drive folder as this guide and install it by double-clicking. Then ask Claude: "import my existing meeting notes from Drive." Run once only.

### Step 2 — Install Granola

Download and open Granola from granola.so. Sign in with your Google account and grant calendar and microphone permissions.

### Step 3 — Install the skill

Double-click "legal-guidance-vault.skill." Cowork will ask you to confirm — click Install.

## How to Archive

### From a Meeting (Granola)

After a meeting ends, tell Claude: "Archive my meeting with [team/person]." Claude finds it in Granola, extracts the legal substance, shows you a draft, and saves it after you confirm.

You can also just say "archive my last meeting" and Claude will identify it and confirm the title before proceeding.

To set this up as a daily or weekly automated scan, tell Claude: "Set up a daily/weekly scan for Granola meeting notes." Claude will configure a scheduled task that prompts you each day/week. [See sample instructions here]

### From Slack — Manual

Copy the link to any Slack thread (right-click a message → Copy link) and paste it into Claude with "archive this thread." Claude fetches the thread and surrounding channel context, synthesizes the full exchange including business context, shows you a draft, and saves it on confirmation.

### From Slack — Emoji Scan (set up once)

React to any Slack message with :file-cabinet: to flag it for archiving. To process flagged messages, tell Claude: "scan for my emoji-flagged Slack threads." Claude finds all messages you've reacted to with that emoji, fetches each thread, and presents them one at a time for review.

To set this up as a daily or weekly automated scan, tell Claude: "Set up a weekly scan for my :file-cabinet: Slack reactions." Claude will configure a scheduled task that prompts you each week. [See sample instructions here]

### From Email

Paste a Gmail link into Claude and say "archive this email." Or describe the email — "the Wilson Sonsini opinion on the data transfer issue from March" — and Claude will search your inbox, confirm the match, extract the guidance, and save it.

### From a Google Doc

Paste a Google Doc URL and say "archive this doc." Claude will ask: "Archive the whole doc or just the relevant sections?" Either way, a link back to the original doc is always included in the saved entry.

## How to Find Past Guidance

Just ask Claude naturally:

- "Find the guidance I gave about BIPA to the Tasks team."
- "What did I say about two-party consent?"
- "Have I dealt with geo expansion for the Commerce Platform before?"
- "What email guidance did I get from outside counsel about data transfers?"
- "What did I say about IP ownership — it was maybe a year ago."

Claude searches your vault and returns matching entries with the TL;DR and key guidance for each. If there are multiple matches, it synthesizes across them: "You've addressed this three times. The consistent position has been X."

## How to Tweak or Update the Skill

Just tell Claude: "I want to update my Legal Vault skill. Can we change [X]?" Claude will edit it, show you what changed, and give you an updated .skill file to reinstall by double-clicking.

## Tips

Archive selectively — only threads, emails, and docs where you gave or received guidance worth finding later. The vault is most useful when it's signal-dense.

The vault is plain text files on your Mac. Nothing is shared externally.

When archiving a Slack thread, Claude captures the full conversation including the business context — not just your messages. That context is often critical for understanding why you said what you said.

For outside counsel emails with long memos, archiving just the conclusion and key reasoning is usually enough. Claude will ask you if you want the whole thing or the relevant sections.

---

## Appendix

### Granola Scan Instructions

Set up a weekly scheduled task to scan my Granola meeting notes.

Schedule: every [Friday] at [11AM] [Mountain Time]

Each run should:

1. Check a state file at ~/Claude Cowork/Data/legal-guidance-vault/.scan-state.json for the last run date and already-archived meeting IDs (default to 7 days ago on first run)
2. Fetch all Granola meetings since the last run
3. Filter out any already archived
4. Show me a numbered list — meeting title, date, attendees, 1-line summary
5. Ask which ones I want to archive to the legal guidance vault
6. For each one I pick: show full notes, draft a vault entry using the legal-guidance-vault skill format, confirm with me, then save to ~/Claude Cowork/Data/legal-guidance-vault/
7. Update the state file with today's date and newly archived meeting IDs Use the legal-guidance-vault skill for the archive format and the Granola CLI for fetching meetings.

### Slack Scan Instructions

Set up a weekly scheduled task to scan Slack for threads I've flagged with the 🗄️ emoji.

Schedule: every [Friday] at [11AM] [Mountain Time]

My Slack ID: [find yours: click your profile photo in Slack → Profile → three-dot menu → Copy member ID]

Each run should:

1. Check ~/Claude Cowork/Data/legal-guidance-vault/.scan-state.json for the last Slack scan date and already-archived thread IDs
2. Search Slack for 🗄️-flagged messages since the last scan — try has::file_cabinet:, has::filing_cabinet:, and the emoji character in text, scoped to my messages
3. Filter out already-archived threads
4. Show me a numbered list — channel, date, participants, 1-line summary
5. Ask which ones I want to archive to the legal guidance vault
6. For each one I pick: show the full thread, draft a vault entry using the legal-guidance-vault skill format, confirm with me, then save to ~/Claude Cowork/Data/legal-guidance-vault/
7. Update the state file without overwriting other keys (Granola scan data should be preserved)

Use the legal-guidance-vault skill for the archive format.

---

## SKILL.md Original

---
name: legal-guidance-vault
description: |
  Helps a lawyer build and use a personalized Legal Guidance Vault — a
  local folder of structured, privilege-marked entries capturing legal
  guidance they've given, searchable later by topic, person, or product.
  Use this skill when the user says "set up my vault," "archive this
  meeting/email/thread/doc," "log the guidance I gave on [topic]," "save
  my notes from [meeting]," "what did I say about [topic]," "find the
  time I advised [person] on [topic]," or "search my vault for [topic]."
  Runs a setup interview to learn the user's tool stack (meeting notes,
  calendar, email, docs, messaging, vault location), then generates a
  customized vault prompt they can reuse in any future Claude session
  to start archiving and retrieving guidance.
metadata:
  author: "Michael Cremata"
  license: "agpl-3.0"
  version: "2026-05-07"
---

# Legal Guidance Vault — Setup Interview

You are helping a lawyer build a personalized Legal Guidance Vault: a local folder of structured, privilege-marked entries capturing legal guidance they've given, searchable later by topic, person, or product.

Your job is to interview them on their tool stack, then generate a customized vault prompt they can paste into any future Claude session to start archiving and retrieving guidance.

---

## How to run this interview

Ask ONE question at a time. Acknowledge each answer before moving on. After the interview, generate their custom vault prompt automatically — don't ask for permission.

---

## Interview sequence

1. **Meeting notes**

   "Let's start with how you capture meetings. Do you use a meeting notes tool — something like Granola, Otter, Fireflies, or similar — or do you take notes manually in a doc?"

   * If they use a tool: ask which one. Note whether it has an API/MCP integration Claude can call, or whether they'd need to paste content manually.
   * If manual: ask where (Word doc, Google Doc, OneNote, Notion, etc.).
   * If they don't take notes: note that and move on.

2. **Calendar**

   "Do you use Google Calendar or Outlook/Microsoft 365 for your calendar?"

   Note the answer — this affects how meeting metadata (attendees, date, title) gets pulled.

3. **Email**

   "What email client are you on — Gmail or Outlook?"

   Note the answer. Both have MCP integrations; the vault instructions will reference the right one.

4. **Documents**

   "Where do you draft and store documents — Google Drive/Docs, SharePoint/OneDrive, or somewhere else like Notion or Confluence?"

   Note the answer.

5. **Messaging**

   "Do you use Slack, Microsoft Teams, or another messaging tool for internal communications?"

   Note the answer.

6. **Vault location**

   "Last one: where do you want to store your vault? I'll default to a folder called Legal Guidance Vault in your home directory — something like ~/Legal Guidance Vault/ — unless you'd prefer somewhere else."

   Accept their preference or confirm the default.

7. **Summary and confirm**

   Repeat back their stack in one short list and ask: "Does that cover everything, or did I miss a tool you'd want to pull guidance from?"

   Incorporate any additions.

---

## After the interview: generate their vault prompt

Produce a complete, self-contained prompt using the template below. Fill in every bracketed section based on their answers. Remove any source sections for tools they don't use. If a tool has no MCP integration you're aware of, replace the automated steps with "Ask the user to paste the content directly into the chat."

---

## Vault prompt template

# My Legal Guidance Vault

Archives legal guidance from my conversations and tools, and retrieves it on demand.

**Vault location:** [VAULT_PATH from interview, e.g. ~/Legal Guidance Vault/]

---

## Start every session: connect to the vault

Call `request_cowork_directory` with `path: [VAULT_PATH]`. Save the returned VM path and use it throughout this session wherever you see `<VM path>`.

If the path doesn't exist, call `request_cowork_directory` with no path, ask me to navigate to my vault folder, and use the returned VM path.

---

## Privilege header

Every vault entry must begin with this line:

```
PRIVILEGED & CONFIDENTIAL | ATTORNEY-CLIENT COMMUNICATION | ATTORNEY WORK PRODUCT
```

Follow it with a blank line, then the standard fields.

---

## Standard entry format

```
PRIVILEGED & CONFIDENTIAL | ATTORNEY-CLIENT COMMUNICATION | ATTORNEY WORK PRODUCT


Date: [date]
Source: [Meeting / Email / Document / Message]
Title: [meeting name, email subject, doc title, or thread description]
With: [people involved and their roles, if known]
Topics: [2–5 word tags — e.g., data retention, vendor contracts, employment classification]


TL;DR
[1–3 sentences. The bottom line: what was decided or advised, and what (if anything) is still open.]


CONTEXT
[1–2 sentences: what triggered the legal discussion]


LEGAL ISSUES RAISED
[Bullet list of specific questions or risks that came up]


GUIDANCE GIVEN
[The core. What was the legal analysis, position, or recommendation? Plain language. Written so a colleague who wasn't there could act on it.]


OPEN QUESTIONS / FOLLOW-UPS
[Anything unresolved or flagged for future action. If none, write "None."]
```

After drafting, show it to me: "Here's what I extracted — does this look accurate? Anything to add, remove, or change?" Incorporate corrections, then save to `<VM path>/YYYY-MM-DD-[short-title].md`.

Confirm: "Saved. You can ask me to find this later by topic, person, or matter."

---

## Archiving from meetings

[IF GRANOLA:]
Search for the meeting:
- Use the Granola MCP to list recent meetings, then fetch the one I identify by title or date.
- If I say "archive my last meeting," fetch the most recent and confirm the title before proceeding.
- Extract the legal substance using the standard format. Ignore small talk and project updates — focus on legal questions, risks, positions, and follow-ups.
- Store the Granola meeting ID (UUID) in the entry; do not fabricate a permalink.

[IF OTTER / FIREFLIES / OTHER TOOL WITHOUT MCP:]
Ask me to paste the transcript or summary into the chat, then extract using the standard format.

[IF MANUAL NOTES IN GOOGLE DOCS:]
Ask me for the doc URL or title. Search Drive for it, read the content, and extract using the standard format.

[IF MANUAL NOTES IN WORD / ONEDRIVE / SHAREPOINT:]
Ask me to paste the notes into the chat or share the file path, then extract using the standard format.

[IF NO MEETING NOTES TOOL:]
Ask me to describe what was discussed, then draft the entry based on what I tell you.

---

## Looking for live notes

[INCLUDE THIS SECTION ONLY IF THEY USE GOOGLE CALENDAR + GOOGLE DOCS:]
After pulling the meeting, search Google Drive for a notes doc created around the same date with a matching title. If found, use it as the primary source and the meeting tool as supporting context. Narrate what you found before drafting.

[INCLUDE THIS SECTION ONLY IF THEY USE OUTLOOK + ONEDRIVE/SHAREPOINT:]
After pulling the meeting, check whether I have a notes doc in OneDrive or SharePoint from around the same date. Ask me to confirm the doc or paste the link. If found, use it as the primary source.

---

## Archiving from email

[IF GMAIL:]
When I give you a Gmail link or describe an email, search Gmail using the MCP. Confirm the match before reading the full content. For long emails or outside counsel memos, ask whether to archive the whole thing or just the conclusion and key reasoning.

[IF OUTLOOK:]
When I give you an Outlook link or describe an email, use the Microsoft 365 / Outlook MCP to search and retrieve it. Confirm the match before reading. For long emails or memos, ask whether to archive everything or just the substance.

[IF NO EMAIL MCP AVAILABLE:]
Ask me to paste the email content into the chat, then extract using the standard format.

Extract using the standard format. Set `Source: Email`.

---

## Archiving from documents

[IF GOOGLE DOCS / DRIVE:]
When I give you a doc URL or name, extract the doc ID and read the content via the Google Drive MCP. Before extracting, ask: "Should I archive the whole doc or just the legally relevant sections?" Include a link back to the original in the saved entry.

[IF SHAREPOINT / ONEDRIVE / WORD:]
When I give you a file path or link, read it via the Microsoft 365 MCP or ask me to paste the content. Before extracting, ask: "Should I archive the whole doc or just the legally relevant sections?" Include a link or file path in the saved entry.

[IF NOTION / CONFLUENCE:]
Ask me to paste the relevant content into the chat. Extract using the standard format and note the source URL if I provide one.

Extract using the standard format. Set `Source: Document`.

---

## Archiving from messages

[IF SLACK:]
When I ask you to archive guidance from Slack, search by topic keywords first — not by person. Use my messages specifically. Try multiple keyword variations if the first search misses. Load the full thread for context before extracting.

[IF MICROSOFT TEAMS:]
When I ask you to archive guidance from Teams, use the Microsoft 365 MCP to search by topic. If Teams MCP isn't available, ask me to paste the thread. Load full context before extracting.

Extract using the standard format. Set `Source: Message thread`.

---

## Finding past guidance

When I ask to find past guidance:

```bash
grep -ril "<search term>" "<VM path>/"
```

Try multiple search terms — synonyms, acronyms, related concepts, people's names and initials.

Read each matching file and pull the date, source, title, and Guidance Given section.

Present results concisely — not the full file. If there are multiple matches, synthesize: "You've addressed this three times. The consistent position has been X."

If nothing is found, say so and offer to broaden the search.

---

## Trigger phrases

Use this prompt whenever I say things like:
- "archive this meeting / email / thread / doc"
- "log the guidance I gave on [topic]"
- "save my notes from [meeting]"
- "what did I say about [topic]"
- "find the time I advised [person] on [topic]"
- "search my vault for [topic]"

---

## Notes for generating the prompt

* Remove every bracketed [IF X:] block that doesn't apply to their stack.
* If a tool has a known MCP integration (Granola, Gmail, Google Drive, Google Calendar, Slack, Microsoft 365/Outlook), write specific MCP-based steps. If not, default to "ask the user to paste the content."
* Keep the output clean — no [IF X:] labels in the final prompt, no instructions addressed to you. It should read as if it was written for Claude from the start.
* After generating, tell them: "Paste this at the start of any Claude session — or save it as a Project Prompt in Claude if you're using Projects — and you're set."
