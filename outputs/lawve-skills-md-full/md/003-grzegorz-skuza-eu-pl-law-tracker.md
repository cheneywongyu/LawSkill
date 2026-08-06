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
source_index: 3
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 欧盟法律追踪器

原始名称：`eu-pl-law-tracker`  
作者：Grzegorz Skuza  
分类：compliance  
来源：https://lawve.ai/@grzegorz-skuza/skill/eu-pl-law-tracker  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

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

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

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

---

## SKILL.md Original

---
name: eu-pl-law-tracker

description: >
  Wyszukiwanie, pobieranie i analiza aktów prawnych UE oraz polskich aktów i
  projektów wdrażających regulacje UE (np. PPWR, CBAM, EUDR, ESPR, CSRD, CSDDD,
  GPSR, AI Act, baterie, ekoprojekt). Używaj, gdy użytkownik potrzebuje statusu
  prawnego, dat stosowania, przepisów przejściowych, relacji aktów, obowiązków
  compliance i raportu z podstawami prawnymi oraz źródłami urzędowymi.

metadata:
  author: "Grzegorz Skuza"
  license: "mit"
  version: "2026-07-12"
---

# EU/PL Law Tracker

## Cel

Ustalaj status prawny regulacji UE oraz powiązanych polskich aktów lub projektów.
Pracuj na źródłach urzędowych, w pierwszej kolejności EUR-Lex, Dzienniku
Urzędowym UE, ELI, RCL, ISAP, Dzienniku Ustaw, Sejmie i gov.pl.

Skill obejmuje regulacje unijne takie jak PPWR, CBAM, EUDR, ESPR, CSRD, CSDDD,
GPSR, AI Act, rozporządzenie bateryjne, ekoprojekt i inne akty sektorowe.
Nie ograniczaj analizy do PPWR.

## Zasady bezwzględne

1. Nie twórz numerów CELEX, ELI, druków sejmowych, numerów projektów ani dat z pamięci. Jeśli brak pewnego źródła, oznacz lukę.
2. Nie nazywaj projektu ustawy prawem obowiązującym.
3. Nie traktuj komunikatu prasowego, FAQ lub strony kancelarii jako substytutu aktu prawnego.
4. Dla rozporządzeń UE sprawdzaj, czy Polska przyjęła lub proceduje przepisy zapewniające stosowanie: organy, sankcje, procedury, rejestry, kontrole, opłaty, sprawozdawczość.
5. Każdą datę wejścia w życie, stosowania, uchylenia lub terminu obowiązku wiąż z konkretnym przepisem i źródłem.
6. Jeżeli źródła są sprzeczne, pierwszeństwo mają: Dziennik Urzędowy UE, EUR-Lex, Dziennik Ustaw, ISAP, a dopiero potem RCL, Sejm, gov.pl i źródła pomocnicze.
7. Zawsze oddzielaj: prawo obowiązujące, projekt, materiał urzędowy niewiążący, źródło pomocnicze i wniosek analityczny.

## Workflow

### 1. Rozpoznaj regulację

- Jeżeli użytkownik poda skrót, sprawdź `references/regulation-aliases.yaml`.
- Jeżeli poda CELEX, użyj go bezpośrednio.
- Jeżeli poda numer aktu, wyszukaj go w EUR-Lex.
- Jeżeli poda temat, zidentyfikuj najbardziej prawdopodobne akty i oznacz poziom pewności.
- Jeżeli istnieje kilka możliwych aktów, pokaż listę kandydatów i wskaż, którego używasz jako głównego.

Przykładowe wejścia: `PPWR`, `CBAM`, `32025R0040`, `rozporządzenie 2023/956`,
`opakowania i odpady opakowaniowe`, `import cementu spoza UE`.

### 2. Pobierz i zweryfikuj akt UE

Preferuj kolejność:

1. EUR-Lex / Official Journal.
2. ELI `data.europa.eu/eli/...`.
3. EUR-Lex Document information.
4. EUR-Lex Procedure.
5. Komisja Europejska, notices, FAQ — tylko pomocniczo.

Ustal minimum:

- CELEX,
- ELI,
- pełny tytuł PL i EN,
- typ aktu: rozporządzenie, dyrektywa, decyzja, akt delegowany, akt wykonawczy,
- status aktu,
- datę dokumentu, publikacji, wejścia w życie i stosowania,
- procedurę legislacyjną,
- akty uchylane, zmieniane, wykonawcze, delegowane, skonsolidowane i sprostowania.

Jeżeli korzystasz z narzędzi kodowych, użyj skryptów:

- `scripts/eu_law_identify.py` — rozpoznanie skrótu, aliasu, CELEX lub numeru aktu.
- `scripts/eu_law_parse.py` — ekstrakcja przepisów końcowych, dat i relacji z pobranego tekstu.
- `scripts/legal_date_extractor.py` — ekstrakcja terminów i dat z tekstu aktu.
- `scripts/relation_extractor.py` — klasyfikacja relacji prawnych.

### 3. Sprawdź przepisy końcowe

Zawsze sprawdzaj końcowe artykuły aktu i pełny tekst, nie tylko streszczenia.
Szukaj fraz z `references/final-provisions-keywords.md`.

Dla każdego wyniku podaj: artykuł, ustęp, typ przepisu, sens normy, datę, podmiot,
konsekwencję praktyczną i źródło.

### 4. Zmapuj akty powiązane

Klasyfikuj relacje jako:

- `repeals` — uchyla akt,
- `amends` — zmienia akt,
- `supplements` — akt delegowany uzupełnia akt główny,
- `implements` — akt wykonawczy wykonuje akt główny,
- `corrigendum` — sprostowanie,
- `consolidated_version` — wersja skonsolidowana,
- `procedure` — procedura legislacyjna,
- `national_adaptation` — polskie przepisy dostosowujące,
- `national_sanctions` — polskie przepisy sankcyjne,
- `competent_authority` — krajowy organ właściwy.

### 5. Sprawdź status w Polsce

Dla każdego aktu UE ustal:

- czy Polska przyjęła ustawę lub rozporządzenie dostosowujące,
- czy istnieje projekt rządowy w RCL,
- czy projekt trafił do Sejmu,
- czy akt został ogłoszony w Dzienniku Ustaw,
- czy ISAP pokazuje akt jako obowiązujący, uchylony albo zmieniany,
- czy wyznaczono organ właściwy,
- czy istnieją sankcje, procedury, rejestry, obowiązki sprawozdawcze lub kontrolne,
- czy istnieją materiały gov.pl, ale oznacz je jako niewiążące.

Używaj `references/polish-law-sources.md` do wyboru źródeł i
`references/legal-search-patterns.md` do budowy zapytań.

### 6. Klasyfikuj wiarygodność

Użyj `references/legal-reliability-rules.md`. Oznacz każdy wynik jedną z kategorii:

- `obowiązujące źródło prawa`,
- `urzędowa wersja aktu`,
- `projekt aktu`,
- `materiał urzędowy niewiążący`,
- `źródło pomocnicze`,
- `niepotwierdzone`.

### 7. Przygotuj raport

Domyślnie użyj struktury z `references/report-template.md`.

## Format odpowiedzi krótkiej

Jeżeli użytkownik nie prosi o pełny raport, odpowiedz w układzie:

- `Regulacja` — co zidentyfikowano.
- `Status UE` — źródło, CELEX/ELI, daty.
- `Przepisy końcowe` — najważniejsze artykuły i skutki.
- `Status w Polsce` — obowiązujące akty/projekty/braki.
- `Co monitorować` — akty delegowane, wykonawcze, polskie przepisy, terminy.
- `Źródła` — linki i kategorie wiarygodności.

## Pliki referencyjne

- `references/source-map.md` — mapa źródeł UE i PL.
- `references/regulation-aliases.yaml` — aliasy regulacji i przykładowe CELEX-y.
- `references/eurlex-identifiers.md` — CELEX, ELI, OJ, procedury i wzorce linków.
- `references/polish-law-sources.md` — RCL, ISAP, Sejm, Dziennik Ustaw, gov.pl.
- `references/legal-search-patterns.md` — zapytania do wyszukiwania UE/PL.
- `references/legal-reliability-rules.md` — hierarchia i klasyfikacja źródeł.
- `references/report-template.md` — szablon raportu.
