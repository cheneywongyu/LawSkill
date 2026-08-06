---
id: "616e3973-5f31-553d-a6d4-8825911d7472"
title: "eu-pl-law-tracker"
title_cn: "欧盟法律追踪器"
slug: "eu-pl-law-tracker"
url: "https://lawve.ai/@grzegorz-skuza/skill/eu-pl-law-tracker"
author: "Grzegorz Skuza"
author_slug: "grzegorz-skuza"
category: "compliance"
language: "en"
license: "MIT"
jurisdictions: "EU, PL"
status: "active"
views: 176
downloads: 15
created_at: "2026-07-12T16:46:46.751143+02:00"
updated_at: "2026-07-13T10:05:40.655971+02:00"
source_index: 3
---

# 欧盟法律追踪器

原始名称：`eu-pl-law-tracker`  
作者：Grzegorz Skuza  
分类：compliance  
来源：https://lawve.ai/@grzegorz-skuza/skill/eu-pl-law-tracker

## 中文 README

# 欧盟/波兰法律追踪器

分析 UE 状态的技能是针对 Polsce 的 aktów/projektów。

## 结构

- `SKILL.md` — 操作说明。
- `references/` — źródła、wzorce identyfikatorów、wiarygodność、szablony raportu。
- `scripts/` — pomocnicze skrypty CLI 执行 identyfikacji 和 ekstrakcji danych。

## Szybkie użycie skryptów
```bash
python scripts/eu_law_identify.py --query "CBAM" --aliases references/regulation-aliases.yaml
python scripts/eu_law_parse.py --input-file path/to/act.txt
python scripts/legal_date_extractor.py --input-file path/to/act.txt
python scripts/relation_extractor.py --input-file path/to/act.txt
```
Wyniki skryptów traktuj jako pomocnicze i zawsze waliduj w źródłach urzędowych。

## 使用 VS 代码安装 ZIP 技能

Archiwum Skilla znajduje się tutaj:

- `D:\eu-pl-law-tracker\.vscode\eu-pl-law-tracker.zip`

Skrócone kroki 安装：

1. Zamknij VS Code（zalecane）。
2. Rozpakuj ZIP 文件夹：
	- `C:\Users\grzeg\AppData\Roaming\Code\User\prompts\skills\eu-pl-law-tracker`
3. Sprawdź，czy istnieje plik：
	- `C:\Users\grzeg\AppData\Roaming\Code\User\prompts\skills\eu-pl-law-tracker\SKILL.md`
4. Uruchom ponownie VS Code 现在是 rozpocznij，通过副驾驶聊天。

请使用 [.vscode/README.MD](.vscode/README.MD) 来开玩笑。

---

## Original README

# EU/PL Law Tracker

Skill do analizy statusu regulacji UE i powiązanych aktów/projektów w Polsce.

## Struktura

- `SKILL.md` — instrukcja operacyjna.
- `references/` — źródła, wzorce identyfikatorów, wiarygodność, szablony raportu.
- `scripts/` — pomocnicze skrypty CLI do identyfikacji i ekstrakcji danych.

## Szybkie użycie skryptów

```bash
python scripts/eu_law_identify.py --query "CBAM" --aliases references/regulation-aliases.yaml
python scripts/eu_law_parse.py --input-file path/to/act.txt
python scripts/legal_date_extractor.py --input-file path/to/act.txt
python scripts/relation_extractor.py --input-file path/to/act.txt
```

Wyniki skryptów traktuj jako pomocnicze i zawsze waliduj w źródłach urzędowych.

## Instalacja skilla z ZIP w VS Code

Archiwum skilla znajduje się tutaj:

- `D:\eu-pl-law-tracker\.vscode\eu-pl-law-tracker.zip`

Skrócone kroki instalacji:

1. Zamknij VS Code (zalecane).
2. Rozpakuj ZIP do folderu:
	- `C:\Users\grzeg\AppData\Roaming\Code\User\prompts\skills\eu-pl-law-tracker`
3. Sprawdź, czy istnieje plik:
	- `C:\Users\grzeg\AppData\Roaming\Code\User\prompts\skills\eu-pl-law-tracker\SKILL.md`
4. Uruchom ponownie VS Code i rozpocznij nową rozmowę w Copilot Chat.

Pełna instrukcja jest dostępna w pliku [.vscode/README.MD](.vscode/README.MD).
