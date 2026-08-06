---
id: "c77c499d-cf3f-5cc0-8530-a451bc2a576e"
title: "recherche-jurisprudence"
title_cn: "法理学研究"
slug: "recherche-jurisprudence"
url: "https://lawve.ai/@allison-fiorentino/skill/recherche-jurisprudence"
author: "Allison Fiorentino"
author_slug: "allison-fiorentino"
category: "legal-research"
language: "fr"
license: "AGPL 3.0"
jurisdictions: "FR"
status: "active"
views: 138
downloads: 31
created_at: "2026-06-25T11:29:55.652494+02:00"
updated_at: "2026-06-27T13:50:56.668319+02:00"
source_index: 21
---

# 法理学研究

原始名称：`recherche-jurisprudence`  
作者：Allison Fiorentino  
分类：legal-research  
来源：https://lawve.ai/@allison-fiorentino/skill/recherche-jurisprudence

## 中文 README

# 克劳德的少年技能

_Rechercher la jurisprudence judiciaire française (Cour de cassation) directement depuis Claude_

指南中详细介绍了有关 Judilibre 技能的服务：恢复 PISTE 身份、自动安装所需域名、安装 Claude 技能。首演几分钟内完成。

> **À 保持领先**
>
> - L'accès à Judilibre passe par le portail PISTE：il faut un compte gratuit et une clé d'API (KeyId)。
> - Le Skill couvre uniquement l'ordre judiciaire (Cour de cassation, et de plus en plus cours d'appel et prime degré)。
> - Votre clé est strictement Personle：ne lapartagez jamais et ne la publiez nullepart。

---

## 1. Récupérer 儿子身份 PISTE

PISTE（国家转型服务平台）héberge l'API Judilibre de la Cour de cassation。 L'inscription et l'usage sont 免费。

1. 在 **piste.gouv.fr/registration** 上注册。 Renseignez vos nom et adresse 电子邮件。
2. 通过电子邮件、连接器和门户激活完整程序。
3. 验证 Judilibre 的一般使用条件 (CGU)：dans votre espace，recherchez « Judilibre » 并接受 CGU pour l'environment **生产**（et/ou bac à sable si vous testez）。
4. Créer **une application** depuis votre tableau de bord PISTE (une application = un conteneur auquel sont rattachées vos clés)。
5. Rattacher l'API Judilibre à cette 应用程序，是 **générer une clé d'API (API Key / KeyId)**。
6. 复制 **KeyId** 的值：这是功能上不具备的唯一信息。

> **阿斯图斯**
>
> Le « mode KeyId » 足以满足大多数要求：一个简单的委托人 dans l'en-tête de la requête。一对 client_id / client_secret (OAuth2) 不能用于高级用途。

---

## 2. 外部域名自动升值

在 Claude 代码执行环境中执行的技能，不要默认限制。我不能自动授予域名，也不能请求司法许可。

### Où régler cela

Dans Claude，ouvrez **参数 → 能力**。只要将“域名授权列表”标记为红色，即可在冠军“域名补充授权”和“Ajouter”上查看域名。

### 奎尔斯域名 ajouter
| Domaine                         | Statut        | Quand l'ajouter                         |
| ------------------------------- | ------------- | --------------------------------------- |
| **api.piste.gouv.fr**           | Indispensable | Toujours (production, mode KeyId)       |
| **piste.gouv.fr**               | Indispensable | Toujours (en complément du précédent)   |
| **sandbox-api.piste.gouv.fr**   | Optionnel     | Uniquement en environnement bac à sable |
| **oauth.piste.gouv.fr**         | Optionnel     | Uniquement en mode OAuth2 (avancé)      |
| **sandbox-oauth.piste.gouv.fr** | Optionnel     | Uniquement bac à sable + OAuth2         |
实际上，请在生产中正常使用，两个域名足够：**api.piste.gouv.fr** 和 **piste.gouv.fr**。不能使用 OAuth2 模式。

> **Bon à savoir**
>
> 公共留置权与 www.courdecassation.fr 的公共留置权，可通过以下方式连接： il se contente de construire l'adresse。域名无效。
>
> 如果您请求“连接不可能”或“非自动域”，请在列表中查看 **api.piste.gouv.fr** 或 **piste.gouv.fr**。

---

## 3.安装技巧

该技能以 SKILL.md 文件和档案脚本的形式呈现档案内容。 Voici 评论 le mettre en place。

1. **Télécharger le Skill** depuis le lien fourni（Notion ou Lawve AI — voir le prime commentaire de la Publication）。
2. **更改 Claude 的技能**：您的 **个性化设置 → 能力**，在按钮上进行小组 **+** 进入技能导入者档案列表（或存档 .zip）。
3. **Renseigner votre clé PISTE — 首次使用**。安装技能后，您可以与 Claude 进行对话并进行简单的聊天，您可以通过以下方式进行交流：例如 «Voici ma clé PISTE pour Judilibre : _[votre KeyId]_ »。
4. **Claude l'enregistre pour vous** : il crée (ou complète) le fichier _scripts/config.json_ du Skill en plaçant votre clé dans le champ `key_id` et en réglant l'environnement sur `prod`。您将在主文件中编辑该文件。 L'opération n'est à faire qu'une seule fois ：la cléreste mémorisée pour les usages suivants。
5. **安装验证器**：要求重新检查（例如“cherche un arrêt de la chambre Sociale sur la période d'essai”）。请参阅附上的决策清单，以供参考。

> **安全**
>
> 将 config.json 文件中的内容删除。 Ne lepartagez jamais et ne le publiez pas (ni sur un dépôt public, ni dans une capture d'écran)。

---

## 遇到问题

- **Clé manquante** ：用 Claude pour qu'il l'enregistre 提供的密钥 ID。
- **Erreur 401**：明显不正确或莫韦环境（bac à sable au lieu de production）。
- **错误 403** ：CGU Judilibre 无效，或 API 无法应用 PISTE。
- **错误 429 / 5xx**：配额注意或 API 时刻不可忽视 — 耐心等待。
- **« Domaine non autorisé »** : ajoutez api.piste.gouv.fr dans les réglages réseau (étape 2)。

---
_Une fois ces trois étapes franchies，您可以用自然语言询问最高法院的判例，并通过对话进行指导。_

---

## Original README

# Skill Judilibre pour Claude

_Rechercher la jurisprudence judiciaire française (Cour de cassation) directement depuis Claude_

Ce guide explique en trois étapes comment mettre en service le skill Judilibre : récupérer votre identifiant PISTE, autoriser les domaines réseau nécessaires, puis installer le skill dans Claude. Comptez une dizaine de minutes la première fois.

> **À retenir avant de commencer**
>
> - L'accès à Judilibre passe par le portail PISTE : il faut un compte gratuit et une clé d'API (KeyId).
> - Le skill couvre uniquement l'ordre judiciaire (Cour de cassation, et de plus en plus cours d'appel et premier degré).
> - Votre clé est strictement personnelle : ne la partagez jamais et ne la publiez nulle part.

---

## 1. Récupérer son identifiant PISTE

PISTE (Plateforme d'Intermédiation des Services pour la Transformation de l'État) héberge l'API Judilibre de la Cour de cassation. L'inscription et l'usage sont gratuits.

1. Créer un compte sur **piste.gouv.fr/registration**. Renseignez vos nom et adresse e-mail.
2. Activer le compte via le lien reçu par e-mail, puis **se connecter** au portail.
3. Valider les conditions générales d'utilisation (CGU) de Judilibre : dans votre espace, recherchez « Judilibre » et acceptez les CGU pour l'environnement **production** (et/ou bac à sable si vous testez).
4. Créer **une application** depuis votre tableau de bord PISTE (une application = un conteneur auquel sont rattachées vos clés).
5. Rattacher l'API Judilibre à cette application, puis **générer une clé d'API (API Key / KeyId)**.
6. Copier la valeur du **KeyId** : c'est l'unique information dont le skill a besoin pour fonctionner.

> **Astuce**
>
> Le « mode KeyId » suffit dans l'immense majorité des cas : une simple clé envoyée dans l'en-tête de la requête. Le couple client_id / client_secret (OAuth2) n'est utile que pour des usages avancés.

---

## 2. Autoriser les domaines extérieurs

Le skill s'exécute dans l'environnement d'exécution de code de Claude, dont l'accès réseau est restreint par défaut. Il faut donc autoriser le domaine vers lequel partent les requêtes Judilibre.

### Où régler cela

Dans Claude, ouvrez **Paramètres → Capacités**. Faites défiler jusqu'à la rubrique « Liste d'autorisation de domaines », puis saisissez chaque domaine dans le champ « Domaines supplémentaires autorisés » et cliquez sur « Ajouter ».

### Quels domaines ajouter

| Domaine                         | Statut        | Quand l'ajouter                         |
| ------------------------------- | ------------- | --------------------------------------- |
| **api.piste.gouv.fr**           | Indispensable | Toujours (production, mode KeyId)       |
| **piste.gouv.fr**               | Indispensable | Toujours (en complément du précédent)   |
| **sandbox-api.piste.gouv.fr**   | Optionnel     | Uniquement en environnement bac à sable |
| **oauth.piste.gouv.fr**         | Optionnel     | Uniquement en mode OAuth2 (avancé)      |
| **sandbox-oauth.piste.gouv.fr** | Optionnel     | Uniquement bac à sable + OAuth2         |

En pratique, pour un usage normal en production, deux domaines suffisent : **api.piste.gouv.fr** et **piste.gouv.fr**. Les autres ne servent qu'au bac à sable ou au mode OAuth2.

> **Bon à savoir**
>
> Les liens publics vers les arrêts pointent vers www.courdecassation.fr, mais le skill ne s'y connecte pas : il se contente de construire l'adresse. Inutile donc d'autoriser ce domaine.
>
> Si une requête échoue avec « connexion impossible » ou « domaine non autorisé », c'est presque toujours **api.piste.gouv.fr** ou **piste.gouv.fr** qui manque dans la liste.

---

## 3. Installer le skill

Le skill se présente sous la forme d'un dossier contenant un fichier SKILL.md et un sous-dossier scripts/. Voici comment le mettre en place.

1. **Télécharger le skill** depuis le lien fourni (Notion ou Lawve AI — voir le premier commentaire de la publication).
2. **Ajouter le skill à Claude** : ouvrez **Personnaliser → Compétences**, puis cliquez sur le bouton **+** en haut de la liste pour importer le dossier du skill (ou son archive .zip).
3. **Renseigner votre clé PISTE — à la première utilisation**. Une fois le skill installé, ouvrez une conversation et indiquez simplement à Claude, dans le chat, que vous lui transmettez votre clé : par exemple « Voici ma clé PISTE pour Judilibre : _[votre KeyId]_ ».
4. **Claude l'enregistre pour vous** : il crée (ou complète) le fichier _scripts/config.json_ du skill en plaçant votre clé dans le champ `key_id` et en réglant l'environnement sur `prod`. Vous n'avez donc aucun fichier à éditer à la main. L'opération n'est à faire qu'une seule fois : la clé reste mémorisée pour les usages suivants.
5. **Vérifier l'installation** : demandez une première recherche (par exemple « cherche un arrêt de la chambre sociale sur la période d'essai »). Si une liste de décisions s'affiche, tout fonctionne.

> **Sécurité**
>
> Le fichier config.json contient votre clé en clair. Ne le partagez jamais et ne le publiez pas (ni sur un dépôt public, ni dans une capture d'écran).

---

## En cas de problème

- **Clé manquante** : fournissez votre KeyId à Claude pour qu'il l'enregistre.
- **Erreur 401** : clé incorrecte ou mauvais environnement (bac à sable au lieu de production).
- **Erreur 403** : CGU Judilibre non validées, ou API non rattachée à votre application PISTE.
- **Erreur 429 / 5xx** : quota atteint ou API momentanément indisponible — patientez puis réessayez.
- **« Domaine non autorisé »** : ajoutez api.piste.gouv.fr dans les réglages réseau (étape 2).

---

_Une fois ces trois étapes franchies, vous interrogez la jurisprudence de la Cour de cassation en langage naturel, directement dans vos conversations._
