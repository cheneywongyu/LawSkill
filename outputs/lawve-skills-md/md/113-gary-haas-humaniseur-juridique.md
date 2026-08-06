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
views: 176
downloads: 51
created_at: "2026-04-17T16:37:36.905761+02:00"
updated_at: "2026-05-06T20:37:58.016749+02:00"
source_index: 113
---

# 人道主义法

原始名称：`humaniseur-juridique`  
作者：Gary Haas  
分类：legal-drafting  
来源：https://lawve.ai/@gary-haas/skill/humaniseur-juridique

## 中文 README

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

## Original README

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
