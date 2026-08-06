---
id: "060497b8-820d-53d9-988b-6e139ab85430"
title: "Self-Improvement"
title_cn: "自我提升"
slug: "self-improvement"
url: "https://lawve.ai/@malik-taiar/skill/self-improvement"
author: "Malik Taiar"
author_slug: "malik-taiar"
category: "skill-authoring"
language: "en"
license: "AGPL 3.0"
jurisdictions: ""
status: "active"
views: 784
downloads: 3819
created_at: "2026-01-30T01:00:00+01:00"
updated_at: "2026-05-11T20:52:42.766244+02:00"
source_index: 106
---

# 自我提升

原始名称：`Self-Improvement`  
作者：Malik Taiar  
分类：skill-authoring  
来源：https://lawve.ai/@malik-taiar/skill/self-improvement

## 中文 README

# 自我提升技能

一个自我改进的技能系统，可以分析您的工作过程并提出其他技能的改进建议。

## 命令
| Command | Description |
|---------|-------------|
| `self-improve` | Analyze current session and propose skill improvements |
| `self-improve [skill-name]` | Target a specific skill |
| `self-improve on` | Enable automatic mode |
| `self-improve off` | Disable automatic mode |
| `self-improve status` | Check automatic mode status |
| `self-improve [skill-name] history` | View modification history |
## 手动使用

使用一项技能后，运行“自我改进”以捕获改进：
```
> self-improve my-skill

--- Self-Improve: my-skill ---

Proposed additions:

1. "Always check for X before proceeding"
   Source: User correction at 14:32

2. "Use table format for Y"
   Source: User accepted format at 14:45

---

Apply these changes? [Y/n]
```
## 手动模式与自动模式

### 手动模式（默认）

每当您想要从会话中获取改进时，请运行“自我改进”。没有什么是自动发生的。

### 自动模式

启用后，该技能会在结束时自动分析您的会话并提出改进建议以供您批准。

**要启用：**

1. 运行“自我改进”

2. 将挂钩添加到本地 Claude 代码设置 (`.claude/settings.local.json`)：
```json
{
  "hooks": {
    "stop": [
      {
        "type": "command",
        "command": "./skills/skill-optimizer-en-malik-taiar/scripts/self-improve-hook.sh"
      }
    ]
  }
}
```
| Criteria Met | Action |
|--------------|--------|
| All 4 criteria | Add to skill directly |
| Less than 4 | Ask for clarification, but add anyway if user insists |
3. 在每次会议结束时，您都会看到建议的改进并被要求批准它们

**要禁用：** 运行 `self-improve off`

## 它是如何工作的

### 信号检测

该技能会扫描对话以查找：
- **更正**：“不”、“那是错误的”、“总是做 X”
- **成功**：“完美”、“完全”、接受的输出
- **边缘情况**：需要解决方法，未处理的场景

### 质量标准

每次修正都会根据 4 个标准进行评估，以确保高质量的技能改进：

1. **完整**：包括应用说明所需的所有信息
2. **精确**：没有模糊或主观的术语
3. **原子**：每条指令一次检查（不捆绑）
4. **稳定**：没有没有具体日期的时间相关参考

### 评分


### 为什么质量标准很重要

如果没有严格的标准，技能就会积累一些模糊的指令，例如“更加彻底”或“使用标准格式”，而这些指令是不可能一致遵循的。

质量标准确保添加到技能中的每条指令都是：
- 可操作，无需猜测
- 任何阅读该技能的人都可以理解
- 跨会话一致适用

## 历史

所有修改都在每个技能文件夹中的“CHANGELOG.md”中进行跟踪。查看“自我提升[技能名称]历史记录”。

历史是用自然语言编写的（不需要 git 知识）。您可以通过history命令恢复到任何以前的版本。

---

## Original README

# Self-Improve Skill

A self-improving skill system that analyzes your work sessions and proposes improvements to other skills.

## Commands

| Command | Description |
|---------|-------------|
| `self-improve` | Analyze current session and propose skill improvements |
| `self-improve [skill-name]` | Target a specific skill |
| `self-improve on` | Enable automatic mode |
| `self-improve off` | Disable automatic mode |
| `self-improve status` | Check automatic mode status |
| `self-improve [skill-name] history` | View modification history |

## Manual Usage

After working with a skill, run `self-improve` to capture improvements:

```
> self-improve my-skill

--- Self-Improve: my-skill ---

Proposed additions:

1. "Always check for X before proceeding"
   Source: User correction at 14:32

2. "Use table format for Y"
   Source: User accepted format at 14:45

---

Apply these changes? [Y/n]
```

## Manual vs Automatic Mode

### Manual Mode (default)

Run `self-improve` whenever you want to capture improvements from a session. Nothing happens automatically.

### Automatic Mode

When enabled, the skill automatically analyzes your session at the end and proposes improvements for your approval.

**To enable:**

1. Run `self-improve on`

2. Add the hook to your local Claude Code settings (`.claude/settings.local.json`):

```json
{
  "hooks": {
    "stop": [
      {
        "type": "command",
        "command": "./skills/skill-optimizer-en-malik-taiar/scripts/self-improve-hook.sh"
      }
    ]
  }
}
```

3. At the end of each session, you'll see proposed improvements and be asked to approve them

**To disable:** Run `self-improve off`

## How It Works

### Signal Detection

The skill scans conversations for:
- **Corrections**: "No", "That's wrong", "Always do X"
- **Successes**: "Perfect", "Exactly", accepted outputs
- **Edge cases**: Workarounds needed, unhandled scenarios

### Quality Criteria

Each correction is evaluated against 4 criteria to ensure high-quality skill improvements:

1. **Complete**: Includes all information needed to apply the instruction
2. **Precise**: No vague or subjective terms
3. **Atomic**: One check per instruction (not bundled)
4. **Stable**: No time-dependent references without specific dates

### Grading

| Criteria Met | Action |
|--------------|--------|
| All 4 criteria | Add to skill directly |
| Less than 4 | Ask for clarification, but add anyway if user insists |

### Why Quality Criteria Matter

Without rigorous criteria, skills accumulate vague instructions like "be more thorough" or "use the standard format" that are impossible to follow consistently.

The quality criteria ensure every instruction added to a skill is:
- Actionable without guessing
- Understandable by anyone reading the skill
- Consistently applicable across sessions

## History

All modifications are tracked in `CHANGELOG.md` within each skill folder. View with `self-improve [skill-name] history`.

The history is written in natural language (no git knowledge required). You can revert to any previous version through the history command.
