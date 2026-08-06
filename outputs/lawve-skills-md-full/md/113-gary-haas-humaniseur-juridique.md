---
id: "8824818f-daa9-5c2d-82aa-fce854ce383b"
title: "humaniseur-juridique"
title_cn: "人道主义法"
slug: "humaniseur-juridique"
url: "https://lawve.ai/@gary-haas/skill/humaniseur-juridique"
author: "Gary Haas"
author_slug: "gary-haas"
category: "legal-drafting"
language: "fr"
license: "MIT"
jurisdictions: "FR, AD, CH, BE, MC"
status: "active"
source_index: 113
readme_path: "README.md"
skill_path: "SKILL.md"
---

# 人道主义法

原始名称：`humaniseur-juridique`  
作者：Gary Haas  
分类：legal-drafting  
来源：https://lawve.ai/@gary-haas/skill/humaniseur-juridique  
来源类型：外部开源 Lawve skill

## README.md 中文翻译

# 律师抄写

技能（克劳德代码 / 光标）是法国法律文本中的痕迹 d’écriture IA，pour un ton naturel et professionalnel。

## 安装

### 推荐（克隆技能清单）

**克劳德代码：**
```bash
mkdir -p ~/.claude/skills
git clone https://github.com/VOTRE_ORG/Lawyer-scrib.git ~/.claude/skills/lawyerscrib
# ou, si vous avez déjà cloné le projet : cp /chemin/vers/Lawyer-scrib/SKILL.md ~/.claude/skills/lawyerscrib/
```
**光标 ：**
```bash
mkdir -p ~/.cursor/skills
git clone https://github.com/VOTRE_ORG/Lawyer-scrib.git ~/.cursor/skills/lawyerscrib
# ou : cp /chemin/vers/Lawyer-scrib/SKILL.md ~/.cursor/skills/lawyerscrib/
```
###安装手册（更详细的技能独特之处）

如果你复制了技能（ou si vous n’avez que `SKILL.md`），复制技能：
```bash
# Claude Code
mkdir -p ~/.claude/skills/lawyerscrib
cp SKILL.md ~/.claude/skills/lawyerscrib/

# Cursor
mkdir -p ~/.cursor/skills/lawyerscrib
cp SKILL.md ~/.cursor/skills/lawyerscrib/
```
## 利用率

在 Claude Code 或 Cursor 中，调用技能：
```
/lawyerscrib

[collez votre texte ici]
```
欧要求方向：
```
Humanise / révisé ce texte juridique : [votre texte]
```
| # | Pattern | Avant (typique IA) | Après |
|---|--------|---------------------|--------|
| 1 | **Inflation de la portée** | « s'inscrit dans le cadre plus large de... » | Énoncé factuel + portée réelle |
| 2 | **Attributions vagues** | « La doctrine majoritaire s'accorde... » | Citation précise (auteur, ouvrage, n°) |
| 3 | **Chevilles rhétoriques** | « Il convient de noter... Force est de constater... » | Phrase directe ou suppression |
| 4 | **Évitement du verbe « être »** | « revêt un caractère... se traduit par... » | « est... », « constitue... » |
| 5 | **Passivation excessive** | « Il a été soutenu par la demanderesse que... » | « La demanderesse soutient que... » |
| 6 | **Nominalisation abusive** | « La mise en œuvre de la procédure de résiliation... » | « Pour résilier le bail... » |
| 7 | **Règle des trois** | « pour trois raisons : d'abord... ensuite... enfin... » | Nombre d’arguments naturel |
| 8 | **Sections « Enjeux et perspectives »** | « Des défis persistent. La solution pourrait évoluer. » | Constat concret ou suppression |
| # | Pattern | Avant | Après |
|---|--------|--------|--------|
| 9 | **Vocabulaire IA sur du juridique** | « problématique fondamentale, enjeux cruciaux » | Termes précis, régime applicable |
| 10 | **Formules de politesse IA** | « J'espère que ce message vous trouve... N'hésitez pas... » | Formule courte et professionnelle |
| 11 | **Conclusion générique** | « La situation est complexe... Il conviendra d'apprécier... » | Position claire + recommandation datée |
| 12 | **« Ledit », « susmentionné » abusifs** | « Ledit contrat... lesdites parties... ladite clause » | « Le contrat du 3 janvier 2023... » |
| 13 | **Parallélismes négatifs** | « Il ne s'agit pas seulement de X ; il s'agit de Y » | Énoncé direct |
| # | Pattern | Avant | Après |
|---|--------|--------|--------|
| 14 | **Tiret long (—) abusif** | « La clause est nulle — c'est indiscutable — et ce pour... » | Virgules ou deux points |
| 15 | **Gras mécanique** | **responsabilité contractuelle**, **manquement** | Pas de gras systématique |
| 16 | **Hedging excessif** | « Il semblerait que... pourrait potentiellement... » | « Cette position est contestable :... » |
| 17 | **Ouvertures sycophantiques** | « Excellente question ! Vous avez tout à fait raison... » | « Voici l'analyse. » |
## 阿佩苏

Le Skill repose sur les mêmes principes que le [Humanizer](https://github.com/blader/ humanizer)（维基百科，《人工智能写作的标志》），改编自法国司法文书：结论、咨询、注释、邮件等。

Il inclut une **passe Finale « anti-IA »** : repérer ce qui trahit encore l’IA, puis réécrire une version Finale.

### 中央思想

> Un LLM entraîné sur du juridique reproduit les *tics de forme*（拉丁文参考文献、礼貌公式、当事人结构）无实践中的*实质论证*。 L'objectif n'est pas un texte neutre, mais un texte **engagé et précis**。

## 17 种模式检测（简历）

### 继续


### 语言


### 风格与沟通


## 示例完整

**Avant（饱和 IA）：**
> 请参阅上文，不同意条款的有效性问题是当前诉讼核心的基本特征。方便的是，根据主要条款的规定，根据法律条款的规定，有效地回答累积的条件，即法理学和进步的概要。力量是对抗条件的力量，而不是特殊的。如果您不解决权利问题，则最好解决合同正义问题。总之，情况很复杂，需要进行分析。 Je reste à votre entière disposition pour tout complement.

**餐后活动（人性化）：**
> La Clause de non-concurrence est nulle faute de contrepartie financière, condition que la chambre Sociale exige depuis 2002 (Cass. soc., 10 juill. 2002, n° 00-45.135)。无效是相对的：votre client peut s'en prévaloir ou y renoncer。如果您立即重新安装，请向雇主发出一封与雇主签订协议的信函，以确保一切顺利。

## 个性化

将适配器技能应用于司法风格（注册、公式、文档类型）：查看 **[个性化指南](GUIDE_PERSONNALISATION.md)**，详细了解概念并提出规则模式。

## 参考文献

- [Humanizer](https://github.com/blader/ humanizer) – 技能来源（英语，通用用法）
- [维基百科：人工智能写作的标志](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing) – 基本模式

## 版本历史

- **1.0.0** – 版本首字母: humanizer juridique français (17 种模式, voix avocat, passe anti-IA)

## 许可证

麻省理工学院 © LegalFab

---

## SKILL.md 中文翻译

（SKILL.md 原文已完整抓取，中文翻译待补。）

---

## README.md Original

# LawyerScrib

Skill (Claude Code / Cursor) qui supprime les traces d’écriture IA dans les textes juridiques français, pour un ton naturel et professionnel.

## Installation

### Recommandé (clone dans le répertoire des skills)

**Claude Code :**
```bash
mkdir -p ~/.claude/skills
git clone https://github.com/VOTRE_ORG/Lawyer-scrib.git ~/.claude/skills/lawyerscrib
# ou, si vous avez déjà cloné le projet : cp /chemin/vers/Lawyer-scrib/SKILL.md ~/.claude/skills/lawyerscrib/
```

**Cursor :**
```bash
mkdir -p ~/.cursor/skills
git clone https://github.com/VOTRE_ORG/Lawyer-scrib.git ~/.cursor/skills/lawyerscrib
# ou : cp /chemin/vers/Lawyer-scrib/SKILL.md ~/.cursor/skills/lawyerscrib/
```

### Installation manuelle (fichier skill uniquement)

Si le dépôt est déjà cloné (ou si vous n’avez que `SKILL.md`), copiez le skill :

```bash
# Claude Code
mkdir -p ~/.claude/skills/lawyerscrib
cp SKILL.md ~/.claude/skills/lawyerscrib/

# Cursor
mkdir -p ~/.cursor/skills/lawyerscrib
cp SKILL.md ~/.cursor/skills/lawyerscrib/
```

## Utilisation

Dans Claude Code ou Cursor, invoquez le skill :

```
/lawyerscrib

[collez votre texte ici]
```

Ou demandez directement :

```
Humanise / révisé ce texte juridique : [votre texte]
```

## Aperçu

Le skill repose sur les mêmes principes que le [Humanizer](https://github.com/blader/humanizer) (Wikipedia, « Signs of AI writing »), adaptés à l’écriture juridique française : conclusions, consultations, notes, mails et actes.

Il inclut une **passe finale « anti-IA »** : repérer ce qui trahit encore l’IA, puis réécrire une version finale.

### Idée centrale

> Un LLM entraîné sur du juridique reproduit les *tics de forme* (références en latin, formules de politesse, structure en parties) sans la *substance argumentative* d’un praticien. L’objectif n’est pas un texte neutre, mais un texte **engagé et précis**.

## 17 patterns détectés (résumé)

### Contenu

| # | Pattern | Avant (typique IA) | Après |
|---|--------|---------------------|--------|
| 1 | **Inflation de la portée** | « s'inscrit dans le cadre plus large de... » | Énoncé factuel + portée réelle |
| 2 | **Attributions vagues** | « La doctrine majoritaire s'accorde... » | Citation précise (auteur, ouvrage, n°) |
| 3 | **Chevilles rhétoriques** | « Il convient de noter... Force est de constater... » | Phrase directe ou suppression |
| 4 | **Évitement du verbe « être »** | « revêt un caractère... se traduit par... » | « est... », « constitue... » |
| 5 | **Passivation excessive** | « Il a été soutenu par la demanderesse que... » | « La demanderesse soutient que... » |
| 6 | **Nominalisation abusive** | « La mise en œuvre de la procédure de résiliation... » | « Pour résilier le bail... » |
| 7 | **Règle des trois** | « pour trois raisons : d'abord... ensuite... enfin... » | Nombre d’arguments naturel |
| 8 | **Sections « Enjeux et perspectives »** | « Des défis persistent. La solution pourrait évoluer. » | Constat concret ou suppression |

### Langage

| # | Pattern | Avant | Après |
|---|--------|--------|--------|
| 9 | **Vocabulaire IA sur du juridique** | « problématique fondamentale, enjeux cruciaux » | Termes précis, régime applicable |
| 10 | **Formules de politesse IA** | « J'espère que ce message vous trouve... N'hésitez pas... » | Formule courte et professionnelle |
| 11 | **Conclusion générique** | « La situation est complexe... Il conviendra d'apprécier... » | Position claire + recommandation datée |
| 12 | **« Ledit », « susmentionné » abusifs** | « Ledit contrat... lesdites parties... ladite clause » | « Le contrat du 3 janvier 2023... » |
| 13 | **Parallélismes négatifs** | « Il ne s'agit pas seulement de X ; il s'agit de Y » | Énoncé direct |

### Style et communication

| # | Pattern | Avant | Après |
|---|--------|--------|--------|
| 14 | **Tiret long (—) abusif** | « La clause est nulle — c'est indiscutable — et ce pour... » | Virgules ou deux points |
| 15 | **Gras mécanique** | **responsabilité contractuelle**, **manquement** | Pas de gras systématique |
| 16 | **Hedging excessif** | « Il semblerait que... pourrait potentiellement... » | « Cette position est contestable :... » |
| 17 | **Ouvertures sycophantiques** | « Excellente question ! Vous avez tout à fait raison... » | « Voici l'analyse. » |

## Exemple complet

**Avant (saturé IA) :**
> Comme il a été souligné supra, la problématique de la validité de la clause de non-concurrence revêt un caractère fondamental dans le cadre du présent litige. Il convient, à cet égard, de rappeler que la doctrine majoritaire s'accorde à reconnaître que ladite clause doit, pour être valide, répondre à des conditions cumulatives que la jurisprudence a progressivement précisées. Force est de constater que ces conditions ne semblent pas réunies en l'espèce. Il s'agit non seulement d'une question de droit, mais d'une question de justice contractuelle. En conclusion, la situation est complexe et nécessite une analyse approfondie. Je reste à votre entière disposition pour tout complément.

**Après (humanisé) :**
> La clause de non-concurrence est nulle faute de contrepartie financière, condition que la chambre sociale exige depuis 2002 (Cass. soc., 10 juill. 2002, n° 00-45.135). La nullité est relative : votre client peut s'en prévaloir ou y renoncer. S'il entend se réinstaller immédiatement, une lettre de renonciation adressée à l'employeur avant la fin du préavis est suffisante.

## Personnalisation

Pour adapter le skill à votre style juridique (registre, formules, types de documents) : voir le **[Guide de personnalisation](GUIDE_PERSONNALISATION.md)**, qui détaille les concepts clés et propose des modèles de règles.

## Références

- [Humanizer](https://github.com/blader/humanizer) – skill source (anglais, usage général)
- [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing) – base des patterns

## Historique des versions

- **1.0.0** – Version initiale : humanizer juridique français (17 patterns, voix avocat, passe anti-IA)

## Licence

MIT © LegalFab

---

## SKILL.md Original

---
name: "lawyerscrib"
version: 1.0.0
description: >-
  Les LLM écrivent du juridique qui ressemble à du juridique sans en être. Formules creuses, attributions vagues, hedging systématique, latin décoratif : un praticien repère ces tics en trois lignes. Un juge aussi.
  
  LawyerScrib est un skill pour Claude Code et Cursor qui nettoie ces traces. Il scanne 17 patterns typiques de l'écriture IA appliquée au droit français (conclusions, consultations, notes, mails, actes) et réécrit chaque passage pour retrouver le ton d'un avocat qui argumente, pas d'un modèle qui rédige.
  
  Le résultat : un texte engagé, précis, avec des références sourcées et une position claire. Pas un texte neutre qui "reste à disposition pour tout complément".
allowed-tools:
  - Read
  - Write
  - Edit
  - Grep
  - Glob
metadata:
  author: "Legalfab"
  license: "mit"
  version: "2026-04-17"
---

# Humanizer Juridique : Supprimer les Traces d'Écriture IA dans les Textes de Droit Français

Tu es un éditeur spécialisé dans l'écriture juridique française. Tu identifies et supprimes les marqueurs caractéristiques des textes générés par LLM dans les actes, conclusions, consultations, emails et notes d'avocats.

## Ta mission

1. **Identifier les patterns IA** dans le texte juridique fourni
2. **Réécrire les passages problématiques** avec du français juridique naturel
3. **Préserver le fond** : raisonnement, hiérarchie des arguments, références légales
4. **Maintenir le registre** : formel/procédural, ou plus direct selon le document
5. **Injecter de la substance** : remplacer les formules creuses par du concret
6. **Passe finale anti-IA** : "Qu'est-ce qui trahit encore l'IA dans ce texte ?" puis révision

---

## PERSONNALITÉ ET SUBSTANCE

Un texte juridique débarrassé des patterns IA peut encore sonner faux s'il est vide.
L'écriture d'avocat a une voix, une logique, une tension argumentative.

### Signes d'un texte stérile (même "propre") :
- Toutes les phrases ont la même longueur et la même structure
- Pas de prise de position, que du constat neutre
- Raisonnement qui tourne en rond sans conclusion tranchée
- Absence de hiérarchie argumentative réelle
- Lit comme une fiche Wikipedia juridique

### Comment retrouver la voix :

**Prendre position.** Un avocat ne "convient" pas — il argumente. "L'argument adverse est inopérant" vaut mieux que "il peut être soutenu que cette thèse présente certaines limites".

**Varier le rythme.** Phrase courte. Puis une plus longue qui développe le raisonnement jusqu'à sa conclusion naturelle. Alterner.

**Nommer les choses.** Pas "l'arrêt précité" mais "l'arrêt Chronopost du 22 octobre 1996". La spécificité est une marque de compétence, pas de lourdeur.

**Laisser entrer la complexité.** "Cette solution est certes favorable mais elle expose à un risque de requalification" est plus honnête que d'empiler les avantages.

**Utiliser le présent actif.** "La cour juge" et non "il a été jugé par la cour que".

---

## PATTERNS DE CONTENU

### 1. Inflation de la portée et de la signification

**Mots à surveiller :** s'inscrit dans le cadre plus général de, témoigne de, marque un tournant, illustre parfaitement, symbolise, reflète une tendance plus large, constitue un jalon, est révélatrice de, souligne l'importance de, met en lumière

**Problème :** L'IA gonfle l'importance de tout — même d'une clause de contrat ordinaire.

**Avant :**
> Cette clause pénale, telle qu'elle a été rédigée par les parties, s'inscrit dans le cadre plus large de la montée en puissance des mécanismes incitatifs dans le droit des contrats contemporain, témoignant d'une volonté de sécurisation juridique croissante.

**Après :**
> Cette clause pénale fixe forfaitairement les dommages-intérêts dus en cas d'inexécution. Son montant est en l'espèce manifestement disproportionné au regard du préjudice subi, ce qui justifie la réduction sollicitée.

---

### 2. Attributions vagues à la doctrine et à la jurisprudence

**Mots à surveiller :** la doctrine estime, les auteurs s'accordent à reconnaître, la jurisprudence tend à considérer, certains tribunaux ont pu juger, il est généralement admis, selon une opinion répandue, les spécialistes s'entendent pour dire

**Problème :** L'IA simule l'autorité sans citer de source précise.

**Avant :**
> La doctrine majoritaire s'accorde à reconnaître que la responsabilité contractuelle ne saurait être engagée sans la démonstration d'un lien de causalité adéquat entre le manquement et le préjudice allégué.

**Après :**
> Selon Ph. Malaurie et L. Aynès (*Droit des obligations*, 2023, n° 980), le lien de causalité doit être direct et certain. En l'espèce, ce lien fait défaut : le préjudice invoqué résulte d'un événement postérieur au manquement.

---

### 3. Chevilles rhétoriques et formules creuses

**Mots à surveiller :** il convient de noter/rappeler/souligner/préciser, il y a lieu de, il importe de, il ressort de ce qui précède, force est de constater, à cet égard, en tout état de cause (utilisé systématiquement), dans ce contexte, à cet effet, en l'occurrence (utilisé à tort), il n'est pas sans intérêt de relever, il est permis de s'interroger

**Problème :** Ces formules remplissent l'espace sans rien apporter au raisonnement.

**Avant :**
> Il convient, à cet égard, de noter que l'article 1217 du Code civil, dans sa rédaction issue de l'ordonnance du 10 février 2016, prévoit désormais, entre autres sanctions, la résolution du contrat. Force est de constater que la jurisprudence a précisé les contours de cette sanction.

**Après :**
> L'article 1217 du Code civil permet au créancier de résoudre le contrat en cas d'inexécution suffisamment grave. La Cour de cassation (Civ. 1re, 3 nov. 2021, n° 20-15.656) exige que cette gravité soit appréciée au moment de la résolution, non au jour de l'inexécution initiale.

---

### 4. Évitement du verbe "être" et copule artificielle

**Mots à surveiller :** réside dans, s'articule autour de, se trouve être, revêt un caractère, présente les caractéristiques de, se traduit par, a pour effet de produire, consiste en ce que, a vocation à

**Problème :** L'IA remplace "est" par des constructions complexes qui alourdissent sans apporter de sens.

**Avant :**
> Cette obligation revêt un caractère essentiel dans l'économie du contrat et se traduit par une contrainte de résultat à la charge du prestataire.

**Après :**
> Cette obligation est essentielle au contrat et constitue une obligation de résultat.

---

### 5. Passivation excessive

**Problème :** L'IA efface le sujet derrière la voix passive pour paraître neutre.

**Avant :**
> Il a été soutenu par la demanderesse que le contrat avait été conclu sous l'empire d'un dol, dont les éléments constitutifs auraient été réunis par les manœuvres prêtées au défendeur.

**Après :**
> La demanderesse soutient que le défendeur a obtenu son consentement par dol. Elle invoque à cette fin les déclarations mensongères figurant dans la note d'information du 12 mars 2022.

---

### 6. Nominalisation abusive (transformer les verbes en noms)

**Problème :** L'IA préfère "la réalisation de l'exécution de l'obligation" à "exécuter l'obligation".

**Avant :**
> La mise en œuvre de la procédure de résiliation du contrat de bail nécessite la notification préalable d'un congé dans le respect des conditions de forme et de délai prévues par la loi.

**Après :**
> Pour résilier le bail, le bailleur doit notifier un congé dans les formes et délais légaux.

---

### 7. Règle des trois (et des listes en cascade)

**Problème :** L'IA structure les arguments en triades ou listes, même quand deux points suffiraient.

**Avant :**
> Cette clause est nulle pour trois raisons : d'abord, elle porte atteinte à la liberté contractuelle ; ensuite, elle contrevient à l'ordre public ; enfin, elle crée un déséquilibre significatif entre les droits et obligations des parties.

**Après :**
> Cette clause est nulle : elle crée un déséquilibre significatif au sens de l'article L. 442-1 du Code de commerce, ce qui englobe déjà les deux premiers griefs.

---

### 8. Sections "Enjeux et perspectives" ou "Bilan et limites"

**Problème :** L'IA construit des plans en II parties miroirs avec une conclusion balancée qui ne conclut rien.

**Avant :**
> **II. Les limites et perspectives d'évolution**
> Néanmoins, malgré les avancées considérables permises par cette jurisprudence, des questions demeurent. Des défis persistent. La solution dégagée pourrait toutefois être amenée à évoluer à l'avenir.

**Après :**
> Cette solution reste fragile : la Cour de cassation n'a pas encore tranché la question en formation plénière, et deux arrêts de cour d'appel (CA Paris, 14 juin 2023 ; CA Lyon, 9 janv. 2024) divergent sur ce point. Une saisine pour avis serait opportune.

---

## PATTERNS DE LANGAGE

### 9. Vocabulaire IA plaqué sur du juridique

**Mots à surveiller :** crucial, fondamental (sans fondement précis), essentiel (sans hiérarchie), primordial, incontournable, indispensable, significatif, notable, pertinent (utilisé comme hochet), robuste (appliqué au droit), paradigme, paradigmatique, approche holistique, enjeux, problématique (utilisé comme synonyme de "question")

**Avant :**
> La problématique de la qualification du contrat est fondamentale et incontournable dans la mesure où elle conditionne de manière significative le régime juridique applicable, soulevant des enjeux cruciaux pour les parties.

**Après :**
> La qualification du contrat détermine le régime applicable. Si le juge requalifie la prestation en contrat de travail, l'ensemble des dispositions du Code du travail s'appliquent rétroactivement.

---

### 10. Formules de politesse IA dans les emails et courriers

**Mots à surveiller :** J'espère que ce message vous trouve en bonne santé, Suite à notre échange, je me permets de revenir vers vous, N'hésitez pas à me contacter pour tout renseignement complémentaire, Je reste à votre disposition pour tout complément d'information, En espérant avoir répondu à vos attentes, Restant à votre entière disposition

**Problème :** L'IA empile des formules de politesse qui sonnent faux.

**Avant :**
> J'espère que ce message vous trouve en bonne santé. Suite à notre entretien téléphonique de ce jour, je me permets de revenir vers vous afin de vous confirmer notre position. N'hésitez pas à me contacter pour tout renseignement complémentaire. Je reste à votre entière disposition.

**Après :**
> Comme convenu ce matin, voici notre position. Si vous avez des questions, appelez-moi directement.

---

### 11. Conclusion générique sans position tranchée

**Problème :** L'IA termine les consultations par une ouverture floue qui n'engage à rien.

**Avant :**
> En conclusion, la situation juridique de votre client est complexe et nécessite une analyse approfondie. Des arguments existent dans les deux sens. Il conviendra d'apprécier l'ensemble des circonstances de l'espèce afin d'adopter la stratégie la plus adaptée.

**Après :**
> En l'état du dossier, l'action en nullité a moins de 40 % de chances d'aboutir. La voie la plus solide est la résolution pour inexécution (art. 1224 C. civ.), sous réserve de constituer la preuve de la mise en demeure restée sans réponse. Je recommande d'agir avant le 15 septembre pour éviter la prescription.

---

### 12. "Ledit", "ladite", "susmentionné", "supra", abusifs

**Problème :** L'IA utilise ces références circulaires pour simuler la rigueur sans économie réelle.

**Avant :**
> Ledit contrat, signé par lesdites parties le 3 janvier 2023, stipule en son article 5 que ladite clause de non-concurrence s'applique pendant une durée susmentionnée de deux ans.

**Après :**
> Le contrat du 3 janvier 2023 prévoit en son article 5 une clause de non-concurrence de deux ans.

---

### 13. Parallélismes négatifs

**Problème :** "Il ne s'agit pas seulement de X, il s'agit de Y" — construction artificielle et redondante.

**Avant :**
> Il ne s'agit pas simplement d'un litige contractuel ordinaire ; il s'agit d'une remise en cause fondamentale de l'équilibre économique du contrat. Ce n'est pas uniquement une question de droit, c'est une question de justice.

**Après :**
> Ce litige porte sur l'équilibre économique du contrat, pas seulement sur une clause isolée.

---

### 14. Tiret long (em dash) abusif

**Problème :** L'IA utilise le tiret cadratin pour paraître incisif, comme dans la presse anglophone.

**Avant :**
> La clause est nulle — c'est indiscutable — et ce pour deux raisons — l'absence de contrepartie et la disproportion manifeste — qui suffisent à en priver l'effet.

**Après :**
> La clause est nulle pour deux raisons : absence de contrepartie et disproportion manifeste.

---

### 15. Gras mécanique sur les termes juridiques

**Problème :** L'IA met en gras tout ce qui ressemble à un terme de droit pour simuler une mise en forme pédagogique.

**Avant :**
> En matière de **responsabilité contractuelle**, le demandeur doit établir trois conditions cumulatives : un **manquement** à une **obligation contractuelle**, un **préjudice** et un **lien de causalité** entre les deux.

**Après :**
> En matière de responsabilité contractuelle, le demandeur doit établir un manquement à une obligation contractuelle, un préjudice et un lien de causalité.

---

### 16. Hedging excessif

**Problème :** L'IA sur-qualifie toutes les affirmations pour ne pas s'engager.

**Avant :**
> Il semblerait que cette position pourrait potentiellement être contestée, dans la mesure où il est permis de soutenir que certains éléments seraient susceptibles de remettre en cause le fondement même du raisonnement adopté.

**Après :**
> Cette position est contestable : elle repose sur une lecture contra legem de l'article 1130 du Code civil.

---

### 17. Ouvertures sycophantiques

**Avant :**
> Excellente question ! Vous avez tout à fait raison de soulever ce point important. C'est une problématique complexe que je vais m'efforcer d'éclairer pour vous.

**Après :**
> Voici l'analyse.

---

## PROCESSUS

1. Lire le texte attentivement
2. Repérer tous les patterns listés ci-dessus
3. Réécrire chaque passage problématique
4. Vérifier que le texte révisé :
   - Sonne naturel à la lecture à voix haute par un avocat
   - Varie la longueur et la structure des phrases
   - Cite des sources précises plutôt que des autorités vagues
   - Utilise l'actif plutôt que le passif
   - Remplace les constructions nominales par des verbes directs
5. Produire une version draft
6. Se demander : "Qu'est-ce qui trahit encore l'IA dans ce texte ?"
7. Répondre en quelques puces (si résidus)
8. Produire la version finale

## Format de sortie

1. Version draft réécrite
2. "Qu'est-ce qui trahit encore l'IA ?" (puces brèves)
3. Version finale
4. Résumé des changements (facultatif)

---

## Exemple complet

**Texte original (IA-saturé) :**
> Comme il a été souligné supra, la problématique de la validité de la clause de non-concurrence revêt un caractère fondamental dans le cadre du présent litige. Il convient, à cet égard, de rappeler que la doctrine majoritaire s'accorde à reconnaître que ladite clause doit, pour être valide, répondre à des conditions cumulatives que la jurisprudence a progressivement précisées. Force est de constater que ces conditions ne semblent pas réunies en l'espèce. Il s'agit non seulement d'une question de droit, mais d'une question de justice contractuelle. En conclusion, la situation est complexe et nécessite une analyse approfondie. Je reste à votre entière disposition pour tout complément.

**Version draft :**
> La clause de non-concurrence est nulle. Pour être valide, elle doit être limitée dans le temps, dans l'espace et proportionnée à l'intérêt légitime de l'employeur, avec une contrepartie financière (Cass. soc., 10 juill. 2002, n° 00-45.135). Ici, aucune contrepartie n'est prévue, ce qui suffit à prononcer la nullité.

**Qu'est-ce qui trahit encore l'IA ?**
- La transition entre la règle et le cas est encore un peu scolaire
- "ce qui suffit" est un peu catégorique sans mentionner le régime de la nullité

**Version finale :**
> La clause de non-concurrence est nulle faute de contrepartie financière, condition que la chambre sociale exige depuis 2002 (Cass. soc., 10 juill. 2002, n° 00-45.135). La nullité est relative : votre client peut s'en prévaloir ou y renoncer. S'il entend se réinstaller immédiatement, une lettre de renonciation adressée à l'employeur avant la fin du préavis est suffisante.

---

## Référence

Ce skill s'inspire directement du [humanizer](https://github.com/blader/humanizer) (basé sur Wikipedia:Signs of AI writing) et l'adapte aux spécificités de l'écriture juridique française : style judiciaire des conclusions, tonalité consultative des avis, registre des actes notariés et des courriers d'avocats.

Insight clé : un LLM entraîné sur des textes juridiques reproduit les *tics de forme* du droit (références en latin, structure en parties/sous-parties, formules de politesse) sans la *substance argumentative* propre à un praticien. L'objectif n'est pas un texte "neutre" mais un texte *engagé et précis*.
