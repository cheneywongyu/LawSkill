---
id: "06d2bdc8-6071-5384-ab25-3fe4ebe1e942"
title: "flash-case-law-research"
title_cn: "快速判例法研究"
slug: "flash-case-law-research"
url: "https://lawve.ai/@giovanna-panucci/skill/flash-case-law-research"
author: "Giovanna Panucci"
author_slug: "giovanna-panucci"
category: "legal-research"
language: "it"
license: "AGPL 3.0"
jurisdictions: "IT"
status: "active"
source_index: 97
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 快速判例法研究

原始名称：`flash-case-law-research`  
作者：Giovanna Panucci  
分类：legal-research  
来源：https://lawve.ai/@giovanna-panucci/skill/flash-case-law-research  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

快速意大利判例法研究产生了特定法律主题的初步定位框架。在 Corte di Cassazione、TAR、Consiglio di Stato 和意大利法律数据库（DeJure、Italgiure）中搜索相关裁决，总结现行的法理学方向，标记相互冲突的决定，并提出意见或策略的操作影响。输出是结构化的起点概要，而不是详尽的分析。

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

Rapid Italian case law research producing an initial orientation framework on a given legal topic. Searches the Corte di Cassazione, TAR, Consiglio di Stato, and Italian legal databases (DeJure, Italgiure) for relevant rulings, summarizes the prevailing jurisprudential orientation, flags conflicting decisions, and surfaces operational implications for opinions or strategy. Output is a structured starting-point brief, not an exhaustive analysis.

---

## SKILL.md Original

---
name: giurisprudenza-lampo
description: >
  Ricerca giurisprudenziale rapida per ottenere un quadro di orientamento
  iniziale su un tema giuridico. Si attiva con "giurisprudenza-lampo [tema]",
  "cerca giurisprudenza su [tema]", "sentenze su [tema]", "pronunce su [tema]",
  "orientamento giurisprudenziale su [tema]", o qualsiasi variante che chieda
  di cercare sentenze, pronunce, massime, orientamenti giurisprudenziali o
  precedenti su un argomento giuridico. Usa questa skill anche quando l'utente
  dice "cosa dice la giurisprudenza su", "ci sono sentenze su", "precedenti su",
  "come si è espressa la Cassazione/il TAR/il Consiglio di Stato su".
metadata:
  author: "Giovanna Panucci"
  license: "agpl-3.0"
  version: "2026-05-12"
---

Stai eseguendo una ricerca giurisprudenziale rapida.
L'obiettivo è un quadro di orientamento iniziale,
non un parere esaustivo.

## Invocazione

"giurisprudenza-lampo [tema giuridico]".

## Step 1: Ricerca

Cerca sul web pronunce recenti e rilevanti sul tema.
Fonti prioritarie: DeJure, Italgiure, siti istituzionali
dei TAR e del Consiglio di Stato, Corte di Cassazione,
riviste giuridiche online (Altalex, Diritto.it,
Giurisprudenza Penale, Foro Italiano).
Cerca almeno 3-5 pronunce se disponibili.

## Step 2: Quadro

### Tema
[1-2 frasi. La questione giuridica esaminata.]

### Pronunce trovate
Per ogni pronuncia rilevante:
- Estremi: [Autorità, sezione, data, numero]
- Massima sintetica: [1-2 frasi sul principio affermato]
- Rilevanza: [perché conta per il caso in esame]

### Orientamento prevalente
[1 paragrafo. Come si orienta la giurisprudenza
maggioritaria. Se c'è contrasto, segnalarlo.]

### Implicazioni operative
[2-3 spunti concreti per il parere o la strategia.]

### Fonti
[Link alle fonti usate.]

## Step 3: Avvertenza

Concludi sempre con:
"Ricerca di orientamento iniziale.
Verificare gli estremi e completare
con ricerca su banche dati specializzate."

## Step 4: Salva

research/giurisprudenza-[tema-slug]-[YYYY-MM-DD].md
