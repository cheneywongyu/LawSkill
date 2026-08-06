---
id: "a9465e68-70f1-51c8-ac76-0dbdb1d068e9"
title: "litigation-deadline-calendar"
title_cn: "诉讼截止日期日历"
slug: "litigation-deadline-calendar"
url: "https://lawve.ai/@dave-marcus/skill/litigation-deadline-calendar"
author: "Dave Marcus"
author_slug: "dave-marcus"
category: "litigation"
language: "en"
license: "MIT"
jurisdictions: "US"
status: "active"
views: 112
downloads: 34
created_at: "2026-05-12T20:10:27.647536+02:00"
updated_at: "2026-05-14T18:57:49.591830+02:00"
source_index: 89
---

# 诉讼截止日期日历

原始名称：`litigation-deadline-calendar`  
作者：Dave Marcus  
分类：litigation  
来源：https://lawve.ai/@dave-marcus/skill/litigation-deadline-calendar

## 中文 README

# 诉讼截止日期日历

用于根据调度命令安排诉讼和仲裁截止日期的插件。

## 它的作用

上传调度订单 PDF，该插件将：

1.询问您的管辖权或仲裁地（绝不会假设）
2. 解析订单并提取所有关键日期
3. 验证适用的程序规则是否仍然有效，并提供源 URL，以便您可以自行检查
4. 计算向后的最后期限（提供发现、专家披露、动议响应日期等的最后一天）
5. 生成可导入 Outlook 的 .ics 日历文件

## 支持的司法管辖区和论坛

**诉讼（内置规则）：**
- 科罗拉多州 (CRCP) — 完整规则 6 时间计算、发现、专家和动议截止日期
- 联邦 (FRCP) — 包括 3 天的电子服务附加
- 其他状态——在运行时从官方来源查找

**仲裁（内置规则）：**
- AAA商事仲裁规则
- AAA就业仲裁规则
- JAMS综合仲裁规则
- JAMS 简化仲裁规则

该技能将始终询问适用哪个司法管辖区或论坛。它不默认属于任何司法管辖区。

## 规则验证和来源

每次运行技能时，它都会搜索最近的规则修订，以确认内置规则仍然是最新的。然后，它会提供官方规则文本的源 URL，以便您可以独立验证截止日期。来源会出现在验证步骤期间以及最终输出中以及计算的截止日期中。

## 安装

该插件直接从 GitHub 安装到 Claude Cowork 中 - 无需编码。

**要求：** 具有 Cowork 访问权限的 Claude Desktop（包含在 Pro、Team 和 Enterprise 计划中）。

**第1步：打开Claude Desktop并切换到Cowork**

启动 Claude Desktop 应用程序并单击 **Cowork** 选项卡。

**第 2 步：打开“自定义”菜单**

单击左侧边栏中的“**自定义**”。

**第 3 步：将此存储库添加为市场**

单击 ****** 按钮，然后选择 **从 GitHub 添加市场**。输入此存储库 URL：
```
https://github.com/djmarcuslaw/litigation-deadline-calculator-claude
```
**第四步：安装插件**

市场加载后，您将看到列出的 **诉讼截止日期日历** 插件。单击**安装**。

就是这样。该插件会自动激活 - 无需进一步设置。

## 如何使用

说这样的话：
- “根据此调度命令日历截止日期”
- “我需要为新案件设置截止日期跟踪”
- “解析此调度顺序并给我一个 .ics 文件”

该技能将引导您提供事项名称、司法管辖区/论坛以及要邀请的任何与会者。

## 日历条目格式

所有条目均遵循格式：**[事项名称] — [截止日期描述]**

示例：“史密斯诉琼斯公司——质询的最后一天”

## 提醒

每个日历条目都包含每个截止日期前 7 天和 1 天的自动提醒。

## 重要免责声明

这些截止日期是根据调度顺序和适用规则计算的。它们应由律师独立核实。当地规则、法官的具体做法和修改后的日程安排命令可能会影响实际的截止日期。该工具仅供参考，不构成法律建议。

## 许可证

麻省理工学院 © 戴夫·马库斯 2026

**非商业首选**：免费供个人、学术和开源使用。请不要出售此技能或将其包含在付费产品中 - 而是返回链接！

---

## Original README

# Litigation Deadline Calendar

A plugin for calendaring litigation and arbitration deadlines from scheduling orders.

## What It Does

Upload a scheduling order PDF, and this plugin will:

1. Ask you for the jurisdiction or arbitration forum (it will never assume)
2. Parse the order and extract all key dates
3. Verify that the applicable procedural rules are still current, and provide source URLs so you can check them yourself
4. Compute backward deadlines (last day to serve discovery, expert disclosures, motion response dates, etc.)
5. Generate an .ics calendar file you can import into Outlook

## Supported Jurisdictions & Forums

**Litigation (built-in rules):**
- Colorado (CRCP) — full Rule 6 time computation, discovery, expert, and motion deadlines
- Federal (FRCP) — including the 3-day e-service addition
- Other states — looked up at runtime from official sources

**Arbitration (built-in rules):**
- AAA Commercial Arbitration Rules
- AAA Employment Arbitration Rules
- JAMS Comprehensive Arbitration Rules
- JAMS Streamlined Arbitration Rules

The skill will always ask which jurisdiction or forum applies. It does not default to any jurisdiction.

## Rule Verification & Sources

Each time the skill runs, it searches for recent rule amendments to confirm the built-in rules are still current. It then provides source URLs to the official rule texts so you can independently verify the deadlines. Sources appear both during the verification step and in the final output alongside the computed deadlines.

## Installation

This plugin installs directly into Claude Cowork from GitHub — no coding required.

**Requirements:** Claude Desktop with Cowork access (included with Pro, Team, and Enterprise plans).

**Step 1: Open Claude Desktop and switch to Cowork**

Launch the Claude Desktop app and click the **Cowork** tab.

**Step 2: Open the Customize menu**

Click **Customize** in the left sidebar.

**Step 3: Add this repository as a marketplace**

Click the **+** button, then select **Add marketplace from GitHub**. Enter this repository URL:

```
https://github.com/djmarcuslaw/litigation-deadline-calculator-claude
```

**Step 4: Install the plugin**

Once the marketplace loads, you'll see the **Litigation Deadline Calendar** plugin listed. Click **Install**.

That's it. The plugin activates automatically — no further setup needed.

## How to Use

Say something like:
- "Calendar the deadlines from this scheduling order"
- "I need to set up deadline tracking for a new case"
- "Parse this scheduling order and give me an .ics file"

The skill will walk you through providing the matter name, jurisdiction/forum, and any attendees to invite.

## Calendar Entry Format

All entries follow the format: **[Matter Name] — [Deadline Description]**

Example: "Smith v. Jones Co. — Last Day to Serve Interrogatories"

## Reminders

Each calendar entry includes automatic reminders at 7 days and 1 day before each deadline.

## Important Disclaimer

These deadlines are computed from the scheduling order and applicable rules. They should be independently verified by counsel. Local rules, judge-specific practices, and amended scheduling orders may affect actual deadlines. This tool is for reference purposes and does not constitute legal advice.

## License

MIT © Dave Marcus 2026

**Non-commercial preferred**: Free for personal, academic, and open-source use. Please don't sell this skill or include it in paid products—link back instead!
