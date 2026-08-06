import type { FirmSkill } from './skillPlatform'

export const lawveExternalSkills = [
  {
    "id": "lawve-isds-research-001",
    "name": "isds-research",
    "chineseName": "信息安全发展研究",
    "owner": "Lawve / Cameron Russell",
    "practice": "争议解决",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-07-16",
    "usage": 26,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "ISDS 研究技能 这是针对投资者与国家争端解决 (ISDS) 裁决的基于检索的研究援助。它通过从 ICSID、PCA 和其他官方来源检索**按需提供的主要文件**来回答有关投资争议案件和主题的问题，以在实际裁决文本中提供基本答案，并提供精确（段落/页）的引用。它遵守其所依赖的公共数据库的条款；它从不抓取或托管语...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@cameron-russell/skill/isds-research"
    ],
    "tags": [
      "争议解决",
      "litigation",
      "AGPL 3.0",
      "en",
      "isds",
      "research"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@cameron-russell/skill/isds-research",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/001-cameron-russell-isds-research.md",
    "externalCategory": "litigation",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/001-cameron-russell-isds-research.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/001-cameron-russell-isds-research.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-legal-ai-model-router-002",
    "name": "legal-ai-model-router",
    "chineseName": "法律人工智能模型路由器",
    "owner": "Lawve / Stephane Boghossian",
    "practice": "法律研究",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-07-14",
    "usage": 25,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "将任何法律任务路由到合适的大模型，例如 OpenRouter，但用于法律工作，并基于基准而不是品牌忠诚度。基于 2026 年中期的法律评估（legalbenchmarks.ai、Vals AI × Stanley LegalBench 涵盖 124 个模型、Harvey 的法律代理基准、Atticus 项目的 ...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@stephane-boghossian/skill/legal-ai-model-router"
    ],
    "tags": [
      "法律研究",
      "legal-research",
      "AGPL 3.0",
      "en",
      "legal",
      "model"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@stephane-boghossian/skill/legal-ai-model-router",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/002-stephane-boghossian-legal-ai-model-router.md",
    "externalCategory": "legal-research",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/002-stephane-boghossian-legal-ai-model-router.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/002-stephane-boghossian-legal-ai-model-router.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-eu-pl-law-tracker-003",
    "name": "eu-pl-law-tracker",
    "chineseName": "欧盟法律追踪器",
    "owner": "Lawve / Grzegorz Skuza",
    "practice": "监管合规",
    "jurisdiction": "EU / PL",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-07-13",
    "usage": 176,
    "rating": 4.199999999999999,
    "reviewScore": 78,
    "description": "欧盟/波兰法律追踪器 分析 UE 状态的技能是针对 Polsce 的 aktów/projektów。 结构 - `SKILL.md` — 操作说明。 - `references/` — źródła、wzorce identyfikatorów、wiarygodność、szablony raportu。 - ...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：MIT",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@grzegorz-skuza/skill/eu-pl-law-tracker"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "MIT",
      "en",
      "law",
      "tracker"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@grzegorz-skuza/skill/eu-pl-law-tracker",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/003-grzegorz-skuza-eu-pl-law-tracker.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/003-grzegorz-skuza-eu-pl-law-tracker.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/003-grzegorz-skuza-eu-pl-law-tracker.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-eu-legislation-004",
    "name": "eu-legislation",
    "chineseName": "欧盟立法",
    "owner": "Lawve / Malik Taiar",
    "practice": "法律研究",
    "jurisdiction": "EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-07-09",
    "usage": 30,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "欧盟立法和判例法 直接从 Claude Code 获取欧盟法律。 特点 - **按主题搜索**欧盟立法和判例法（24 种语言） - **检索**指令、法规、决定、条约、欧盟法院判决的全文 - **检查状态** — 有效、修订、废除 - **查看修改** — 哪些行为修改了这一内容 - **转换状态** — 哪些成...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@malik-taiar/skill/eu-legislation"
    ],
    "tags": [
      "法律研究",
      "legal-research",
      "AGPL 3.0",
      "en",
      "legislation"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@malik-taiar/skill/eu-legislation",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/004-malik-taiar-eu-legislation.md",
    "externalCategory": "legal-research",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/004-malik-taiar-eu-legislation.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/004-malik-taiar-eu-legislation.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-gibraltar-legal-regulatory-compliance-osint-005",
    "name": "Gibraltar Legal, Regulatory & Compliance OSINT",
    "chineseName": "直布罗陀法律、监管与合规开源情报",
    "owner": "Lawve / Philip Vasquez",
    "practice": "法律研究",
    "jurisdiction": "GI",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-07-08",
    "usage": 45,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "直布罗陀法律、监管与合规开源情报 **开源技能文件，用于在直布罗陀的法律、监管和合规环境中奠定人工智能助理的基础。** [![许可证：CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://crea...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：CC BY 4.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@philip-vasquez/skill/gibraltar-legal-regulatory-compliance-osint"
    ],
    "tags": [
      "法律研究",
      "legal-research",
      "CC BY 4.0",
      "en",
      "Gibraltar",
      "Legal,"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@philip-vasquez/skill/gibraltar-legal-regulatory-compliance-osint",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/005-philip-vasquez-gibraltar-legal-regulatory-compliance-osint.md",
    "externalCategory": "legal-research",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/005-philip-vasquez-gibraltar-legal-regulatory-compliance-osint.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/005-philip-vasquez-gibraltar-legal-regulatory-compliance-osint.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-enforcement-action-analysis-006",
    "name": "enforcement-action-analysis",
    "chineseName": "执行-行动-分析",
    "owner": "Lawve / Amir Fadavi",
    "practice": "监管合规",
    "jurisdiction": "US / UK",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-07-08",
    "usage": 14,
    "rating": 4.199999999999999,
    "reviewScore": 78,
    "description": "执行-行动-分析 克劳德 (Claude) 技能，可分析 OFAC 和 OFSI 执法行动，并以格式化的 Excel 电子表格形式生成结构化根本原因分析。 输入强制措施（URL、PDF 或粘贴），即可在几秒钟内获得有效的合规性自我评估表。 **由 [Sanctrust](https://sanctrust.com...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：MIT",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@amir-fadavi/skill/enforcement-action-analysis"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "MIT",
      "en",
      "enforcement",
      "action"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@amir-fadavi/skill/enforcement-action-analysis",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/006-amir-fadavi-enforcement-action-analysis.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/006-amir-fadavi-enforcement-action-analysis.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/006-amir-fadavi-enforcement-action-analysis.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-founder-agreement-drafting-007",
    "name": "Founder Agreement Drafting",
    "chineseName": "起草创始人协议",
    "owner": "Lawve / Stephane Boghossian",
    "practice": "法律文书",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-07-06",
    "usage": 61,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "创始人协议起草 一项[克劳德](https://claude.com/claude-code) **技能**，可以改变起草和 将**创始人/联合创始人协议**审查为可重复的方法 - 确定**股权、归属、知识产权所有权、角色的文件（或一组条款）， 创办公司的人之间的决策、僵局和离职**。 与司法管辖区无关，以**特...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@stephane-boghossian/skill/founder-agreement-drafting"
    ],
    "tags": [
      "法律文书",
      "legal-drafting",
      "AGPL 3.0",
      "en",
      "Founder",
      "Agreement"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@stephane-boghossian/skill/founder-agreement-drafting",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/007-stephane-boghossian-founder-agreement-drafting.md",
    "externalCategory": "legal-drafting",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/007-stephane-boghossian-founder-agreement-drafting.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/007-stephane-boghossian-founder-agreement-drafting.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-eu-ai-act-transparency-assessor-008",
    "name": "EU AI Act Transparency Assessor",
    "chineseName": "欧盟人工智能法案透明度评估员",
    "owner": "Lawve / Oliver Schmidt-Prietz",
    "practice": "监管合规",
    "jurisdiction": "EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-07-05",
    "usage": 52,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "欧盟人工智能法案第 50 条透明度评估员 — 部署指南 请参阅 [CHANGELOG.md](CHANGELOG.md) 了解版本历史记录。 概述 欧盟人工智能法案 **第 50 条透明度评估员** - 一项独立但具有套件意识的技能，可识别哪些 艺术的。 50(1)–(5) 透明度义务适用于系统并指导必须实施的内...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-transparency-assessor"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "en",
      "Act",
      "Transparency"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-transparency-assessor",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/008-oliver-schmidt-prietz-eu-ai-act-transparency-assessor.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/008-oliver-schmidt-prietz-eu-ai-act-transparency-assessor.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/008-oliver-schmidt-prietz-eu-ai-act-transparency-assessor.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-special-jurisdiction-for-peace-009",
    "name": "special-jurisdiction-for-peace",
    "chineseName": "和平特别管辖权",
    "owner": "Lawve / Jeanne Sulzer",
    "practice": "国际法与人权",
    "jurisdiction": "CO",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-07-04",
    "usage": 17,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "哥伦比亚过渡时期司法法院 Jurisdicción Especial para la Paz (JEP) 在 2016 年 Acuerdo 决赛中与哥伦比亚革命武装力量 (FARC-EP) 的比赛中采用了验证优先方法。使用前，引文会根据 jep.gov.co 进行验证。涵盖 11 个 Macrocasos（从 C...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：CC BY 4.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@jeanne-sulzer/skill/special-jurisdiction-for-peace"
    ],
    "tags": [
      "国际法与人权",
      "human-rights",
      "CC BY 4.0",
      "en",
      "special",
      "jurisdiction"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@jeanne-sulzer/skill/special-jurisdiction-for-peace",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/009-jeanne-sulzer-special-jurisdiction-for-peace.md",
    "externalCategory": "human-rights",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/009-jeanne-sulzer-special-jurisdiction-for-peace.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/009-jeanne-sulzer-special-jurisdiction-for-peace.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-kosovo-specialist-chambers-010",
    "name": "kosovo-specialist-chambers",
    "chineseName": "科索沃专家分会",
    "owner": "Lawve / Jeanne Sulzer",
    "practice": "国际法与人权",
    "jurisdiction": "XK / INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-07-04",
    "usage": 9,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "科索沃特别分庭和特别检察官办公室的核查优先方法（海牙，适用科索沃法律）。使用前，引文会根据 scp-ks.org 进行验证；上诉登记号码只有在确认后才会被引用。涵盖 Thaçi 等人、Mustafa、Pjetër Shala 以及 Gucati & Haradinaj。研究援助，而不是法律建议。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：CC BY 4.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@jeanne-sulzer/skill/kosovo-specialist-chambers"
    ],
    "tags": [
      "国际法与人权",
      "human-rights",
      "CC BY 4.0",
      "en",
      "kosovo",
      "specialist"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@jeanne-sulzer/skill/kosovo-specialist-chambers",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/010-jeanne-sulzer-kosovo-specialist-chambers.md",
    "externalCategory": "human-rights",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/010-jeanne-sulzer-kosovo-specialist-chambers.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/010-jeanne-sulzer-kosovo-specialist-chambers.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-special-court-for-sierra-leone-011",
    "name": "special-court-for-sierra-leone",
    "chineseName": "塞拉利昂特别法庭",
    "owner": "Lawve / Jeanne Sulzer",
    "practice": "国际法与人权",
    "jurisdiction": "SL / INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-07-04",
    "usage": 11,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "塞拉利昂问题特别法庭及其余留事项特别法庭的核查优先方法。引文根据 rscsl.org 和 legal-tools.org 进行验证。涵盖泰勒案、武装部队委员会/民防部队/联阵案件、童兵和强迫婚姻、国家元首豁免决定以及定期（无期徒刑）刑罚制度。研究援助，而不是法律建议。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：CC BY 4.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@jeanne-sulzer/skill/special-court-for-sierra-leone"
    ],
    "tags": [
      "国际法与人权",
      "human-rights",
      "CC BY 4.0",
      "en",
      "special",
      "court"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@jeanne-sulzer/skill/special-court-for-sierra-leone",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/011-jeanne-sulzer-special-court-for-sierra-leone.md",
    "externalCategory": "human-rights",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/011-jeanne-sulzer-special-court-for-sierra-leone.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/011-jeanne-sulzer-special-court-for-sierra-leone.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-special-tribunal-for-lebanon-012",
    "name": "special-tribunal-for-lebanon",
    "chineseName": "黎巴嫩问题特别法庭",
    "owner": "Lawve / Jeanne Sulzer",
    "practice": "国际法与人权",
    "jurisdiction": "LB / INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-07-04",
    "usage": 19,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "黎巴嫩问题特别法庭的核查优先方法。引用是根据 STL 旧存档和 legal-tools.org 进行验证的。涵盖 Ayyash 等人。案、两起藐视法庭案（STL-14-05 New TV/Al-Khayat 和 STL-14-06 Akhbar Beirut/Al-Amin）以及 2011 年恐怖主义决定。研究援...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：CC BY 4.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@jeanne-sulzer/skill/special-tribunal-for-lebanon"
    ],
    "tags": [
      "国际法与人权",
      "human-rights",
      "CC BY 4.0",
      "en",
      "special",
      "tribunal"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@jeanne-sulzer/skill/special-tribunal-for-lebanon",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/012-jeanne-sulzer-special-tribunal-for-lebanon.md",
    "externalCategory": "human-rights",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/012-jeanne-sulzer-special-tribunal-for-lebanon.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/012-jeanne-sulzer-special-tribunal-for-lebanon.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-central-african-special-criminal-court-013",
    "name": "central-african-special-criminal-court",
    "chineseName": "中非特别刑事法院",
    "owner": "Lawve / Jeanne Sulzer",
    "practice": "国际法与人权",
    "jurisdiction": "INT / CF",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-07-04",
    "usage": 20,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "中非共和国特别刑事法院采用“核查优先”方法，这是一个位于班吉的混合法院。每份引文均经过 JusticeInfo、FIDH、HRW 和 legal-tools.org 的验证；官方网站经常返回 403 错误。涵盖 Paoua 案、第 3 条中的“notamment”一词以及与 ICC 的互补性。研究援助，而不是法律建议。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：CC BY 4.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@jeanne-sulzer/skill/central-african-special-criminal-court"
    ],
    "tags": [
      "国际法与人权",
      "human-rights",
      "CC BY 4.0",
      "fr",
      "central",
      "african"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@jeanne-sulzer/skill/central-african-special-criminal-court",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/013-jeanne-sulzer-central-african-special-criminal-court.md",
    "externalCategory": "human-rights",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/013-jeanne-sulzer-central-african-special-criminal-court.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/013-jeanne-sulzer-central-african-special-criminal-court.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-court-of-bih-war-crimes-chamber-014",
    "name": "court-of-bih-war-crimes-chamber",
    "chineseName": "波黑法院战争罪分庭",
    "owner": "Lawve / Jeanne Sulzer",
    "practice": "国际法与人权",
    "jurisdiction": "BA / INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-07-04",
    "usage": 22,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "波斯尼亚和黑塞哥维那法院第一节（战争罪）的核查优先方法。引文经波黑法院、前南问题国际法庭/IRMCT 档案和欧安组织核实。区分前南问题国际法庭移交（规则 11 之二）的案件与当地提起的案件；涵盖斯坦科维奇、扬科维奇和马克图夫 lex mitior 裁决。研究援助，而不是法律建议。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：CC BY 4.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@jeanne-sulzer/skill/court-of-bih-war-crimes-chamber"
    ],
    "tags": [
      "国际法与人权",
      "human-rights",
      "CC BY 4.0",
      "en",
      "court",
      "bih"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@jeanne-sulzer/skill/court-of-bih-war-crimes-chamber",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/014-jeanne-sulzer-court-of-bih-war-crimes-chamber.md",
    "externalCategory": "human-rights",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/014-jeanne-sulzer-court-of-bih-war-crimes-chamber.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/014-jeanne-sulzer-court-of-bih-war-crimes-chamber.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-extraordinary-african-chambers-015",
    "name": "extraordinary-african-chambers",
    "chineseName": "非洲特别商会",
    "owner": "Lawve / Jeanne Sulzer",
    "practice": "国际法与人权",
    "jurisdiction": "SN / TD / INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-07-04",
    "usage": 19,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "非洲特别法庭的“核查第一”方法，涵盖达喀尔侯赛因·哈布雷审判。每条引用均经过 forumchambresafricaines.org 和 legal-tools.org 的验证。涵盖2016年5月30日的判决、2017年4月27日的上诉判决、为7,396名受害者提供的822.9亿非洲法郎的赔偿以及普遍管辖权。研究...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：CC BY 4.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@jeanne-sulzer/skill/extraordinary-african-chambers"
    ],
    "tags": [
      "国际法与人权",
      "human-rights",
      "CC BY 4.0",
      "en",
      "extraordinary",
      "african"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@jeanne-sulzer/skill/extraordinary-african-chambers",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/015-jeanne-sulzer-extraordinary-african-chambers.md",
    "externalCategory": "human-rights",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/015-jeanne-sulzer-extraordinary-african-chambers.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/015-jeanne-sulzer-extraordinary-african-chambers.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-divorce-practice-016",
    "name": "Divorce Practice",
    "chineseName": "离婚实践",
    "owner": "Lawve / Stephane Boghossian",
    "practice": "法律文书",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-30",
    "usage": 32,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "离婚和家庭法律师的人工智能联合律师——一个跨越整个案件生命周期的司法管辖区便携式支架。八种操作模式反映了案件的实际进展情况：接收和入职、财务披露、子女和支持、财产分割和 QDRO、证据开示和文件审查、起草、谈判和调解准备以及法庭准备 - 以及判决后修改和执行。该方法与管辖权无关：它强制对每一种当地形式、公式或规则...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@stephane-boghossian/skill/divorce-practice"
    ],
    "tags": [
      "法律文书",
      "legal-drafting",
      "AGPL 3.0",
      "en",
      "Divorce",
      "Practice"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@stephane-boghossian/skill/divorce-practice",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/016-stephane-boghossian-divorce-practice.md",
    "externalCategory": "legal-drafting",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/016-stephane-boghossian-divorce-practice.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/016-stephane-boghossian-divorce-practice.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-privacy-policy-017",
    "name": "Privacy Policy",
    "chineseName": "隐私政策",
    "owner": "Lawve / Stephane Boghossian",
    "practice": "监管合规",
    "jurisdiction": "INT / EU / US / UK / CA",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-30",
    "usage": 69,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "一个零幻觉的隐私政策生成器，可以让任何人（从非律师创始人到律师）从指导性摄入到可发布的、具有管辖权意识的隐私政策。管辖权优先：它检测您的用户所在位置适用的法律，然后仅起草所需的条款 - GDPR/EU + 英国、美国（CCPA/CPRA、~20 个州法律、COPPA、部门覆盖）和全球/MENA（LGPD、魁北克法...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@stephane-boghossian/skill/privacy-policy"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "en",
      "Privacy",
      "Policy"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@stephane-boghossian/skill/privacy-policy",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/017-stephane-boghossian-privacy-policy.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/017-stephane-boghossian-privacy-policy.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/017-stephane-boghossian-privacy-policy.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-runtime-admissibility-review-018",
    "name": "runtime-admissibility-review",
    "chineseName": "运行时准入审查",
    "owner": "Lawve / Arkadiy Miteiko",
    "practice": "金融业务",
    "jurisdiction": "INT / EU / UK / US / AE",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-29",
    "usage": 49,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "确定特定人工智能代理的行动、输出、建议或拟议承诺在当前权限、授权范围、证据、事实、政策、风险、升级和撤销条件下是否仍可接受执行或机构依赖。在企业或受监管的人工智能代理执行、更新记录、触发工作流程、外部通信之前，或在机构依赖代理输出以产生法律、财务、运营、监管、客户、员工、患者、公民、市场、合同或声誉后果之前使用此技能。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@arkadiy-miteiko/skill/runtime-admissibility-review"
    ],
    "tags": [
      "金融业务",
      "banking-finance",
      "AGPL 3.0",
      "en",
      "runtime",
      "admissibility"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@arkadiy-miteiko/skill/runtime-admissibility-review",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/018-arkadiy-miteiko-runtime-admissibility-review.md",
    "externalCategory": "banking-finance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/018-arkadiy-miteiko-runtime-admissibility-review.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/018-arkadiy-miteiko-runtime-admissibility-review.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-sujet-crfpa-019",
    "name": "sujet-crfpa",
    "chineseName": "crfpa主题",
    "owner": "Lawve / Allison Fiorentino",
    "practice": "法律培训",
    "jurisdiction": "FR",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-27",
    "usage": 67,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "CRFPA 咨询的双重准备的基本技能：义务权利（公共）和特殊权利（民事、事务、社会、刑法、行政、国际和欧洲、财政）。 Chaque sujet est accompagné d'une grid de notation détaillée sur 20 点。您可以了解主题概要，或者可以自由地进行节目中的整体表演。...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@allison-fiorentino/skill/sujet-crfpa"
    ],
    "tags": [
      "法律培训",
      "legal-education",
      "AGPL 3.0",
      "fr",
      "sujet",
      "crfpa"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@allison-fiorentino/skill/sujet-crfpa",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/019-allison-fiorentino-sujet-crfpa.md",
    "externalCategory": "legal-education",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/019-allison-fiorentino-sujet-crfpa.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/019-allison-fiorentino-sujet-crfpa.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-recherche-theses-020",
    "name": "recherche-theses",
    "chineseName": "研究论文",
    "owner": "Lawve / Allison Fiorentino",
    "practice": "法律研究",
    "jurisdiction": "FR",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-27",
    "usage": 166,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "通过thesis.fr (ABES API) 和TEL (HAL) 对法国博士论文进行研究、绘制和分析。专注于法律，并按法律分支学科进行过滤。也向其他学术领域开放。 能力： （1）多标准检索——课题、导师、审委会、机构、博士院、期间、答辩/进行中状态、学科； (2) 学术地图——谁监督哪些主题、谁担任哪些委员会、...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@allison-fiorentino/skill/recherche-theses"
    ],
    "tags": [
      "法律研究",
      "legal-research",
      "AGPL 3.0",
      "fr",
      "recherche",
      "theses"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@allison-fiorentino/skill/recherche-theses",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/020-allison-fiorentino-recherche-theses.md",
    "externalCategory": "legal-research",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/020-allison-fiorentino-recherche-theses.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/020-allison-fiorentino-recherche-theses.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-recherche-jurisprudence-021",
    "name": "recherche-jurisprudence",
    "chineseName": "法理学研究",
    "owner": "Lawve / Allison Fiorentino",
    "practice": "法律研究",
    "jurisdiction": "FR",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-06-27",
    "usage": 138,
    "rating": 4.199999999999999,
    "reviewScore": 82,
    "description": "克劳德的少年技能 _Rechercher la jurisprudence judiciaire française (Cour de cassation) directement depuis Claude_ 指南中详细介绍了有关 Judilibre 技能的服务：恢复 PISTE 身份、自动安装所需域名、安装 ...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@allison-fiorentino/skill/recherche-jurisprudence"
    ],
    "tags": [
      "法律研究",
      "legal-research",
      "AGPL 3.0",
      "fr",
      "recherche",
      "jurisprudence"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@allison-fiorentino/skill/recherche-jurisprudence",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/021-allison-fiorentino-recherche-jurisprudence.md",
    "externalCategory": "legal-research",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/021-allison-fiorentino-recherche-jurisprudence.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/021-allison-fiorentino-recherche-jurisprudence.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-agent-authority-charter-builder-022",
    "name": "agent-authority-charter-builder",
    "chineseName": "代理机构章程制定者",
    "owner": "Lawve / Arkadiy Miteiko",
    "practice": "金融业务",
    "jurisdiction": "US / UK / EU / CH / INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-25",
    "usage": 65,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "在部署之前为企业或受监管的 AI 代理创建代理权限章程。当用户需要定义允许 AI 代理执行哪些操作、谁向其授予权限、允许或禁止哪些操作、何时需要人工批准、必须保留哪些证据以及如何暂停、撤销或升级代理时，请使用此技能。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@arkadiy-miteiko/skill/agent-authority-charter-builder"
    ],
    "tags": [
      "金融业务",
      "banking-finance",
      "AGPL 3.0",
      "en",
      "agent",
      "authority"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@arkadiy-miteiko/skill/agent-authority-charter-builder",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/022-arkadiy-miteiko-agent-authority-charter-builder.md",
    "externalCategory": "banking-finance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/022-arkadiy-miteiko-agent-authority-charter-builder.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/022-arkadiy-miteiko-agent-authority-charter-builder.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-eccc-khmer-rouge-tribunal-023",
    "name": "eccc-khmer-rouge-tribunal",
    "chineseName": "红色高棉法庭",
    "owner": "Lawve / Jeanne Sulzer",
    "practice": "国际法与人权",
    "jurisdiction": "KH / INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-25",
    "usage": 26,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "ECCC（红色高棉法庭）的验证优先方法。每一条引文都会根据 eccc.gov.kh、ECCC 档案或 legal-tools.org 进行验证。涵盖案件档案编号、001/002/002-01/002-02 结构、针对占族和越南人的种族灭绝调查结果以及内部规则修订纪律。研究援助，而不是法律建议。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：CC BY 4.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@jeanne-sulzer/skill/eccc-khmer-rouge-tribunal"
    ],
    "tags": [
      "国际法与人权",
      "human-rights",
      "CC BY 4.0",
      "en",
      "eccc",
      "khmer"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@jeanne-sulzer/skill/eccc-khmer-rouge-tribunal",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/023-jeanne-sulzer-eccc-khmer-rouge-tribunal.md",
    "externalCategory": "human-rights",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/023-jeanne-sulzer-eccc-khmer-rouge-tribunal.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/023-jeanne-sulzer-eccc-khmer-rouge-tribunal.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-icty-ictr-irmct-024",
    "name": "icty-ictr-irmct",
    "chineseName": "前南问题国际法庭",
    "owner": "Lawve / Jeanne Sulzer",
    "practice": "国际法与人权",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-25",
    "usage": 31,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "前南问题国际法庭、卢旺达问题国际法庭和余留事项处理机制（IRMCT）的核查优先方法。引文根据 irmct.org、判例法和统一法院记录数据库以及 legal-tools.org 进行验证。处理 IT/ICTR 到 MICT 案件编号的转换（卡拉季奇、姆拉迪奇）和保护措施规则。研究援助，而不是法律建议。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：CC BY 4.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@jeanne-sulzer/skill/icty-ictr-irmct"
    ],
    "tags": [
      "国际法与人权",
      "human-rights",
      "CC BY 4.0",
      "en",
      "icty",
      "ictr"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@jeanne-sulzer/skill/icty-ictr-irmct",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/024-jeanne-sulzer-icty-ictr-irmct.md",
    "externalCategory": "human-rights",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/024-jeanne-sulzer-icty-ictr-irmct.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/024-jeanne-sulzer-icty-ictr-irmct.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-nuremberg-tokyo-tribunals-025",
    "name": "nuremberg-tokyo-tribunals",
    "chineseName": "纽伦堡东京法庭",
    "owner": "Lawve / Jeanne Sulzer",
    "practice": "国际法与人权",
    "jurisdiction": "INT / DE / JP",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-25",
    "usage": 33,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "二战后法庭的验证优先方法：纽伦堡的 IMT、12 个纽伦堡军事法庭和东京的 IMTFE。引文根据官方记录（Blue/Green Series、Pritchard-Zaide）和数字档案（Avalon、Harvard NTP、UVA IMTFE）进行验证。守卫四个经典陷阱（IMT vs NMT；纽伦堡 vs 东京；...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：CC BY 4.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@jeanne-sulzer/skill/nuremberg-tokyo-tribunals"
    ],
    "tags": [
      "国际法与人权",
      "human-rights",
      "CC BY 4.0",
      "en",
      "nuremberg",
      "tokyo"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@jeanne-sulzer/skill/nuremberg-tokyo-tribunals",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/025-jeanne-sulzer-nuremberg-tokyo-tribunals.md",
    "externalCategory": "human-rights",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/025-jeanne-sulzer-nuremberg-tokyo-tribunals.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/025-jeanne-sulzer-nuremberg-tokyo-tribunals.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-unmik-regulation-64-panels-026",
    "name": "unmik-regulation-64-panels",
    "chineseName": "科索沃特派团-regulation-64-panels",
    "owner": "Lawve / Jeanne Sulzer",
    "practice": "国际法与人权",
    "jurisdiction": "XK / INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-25",
    "usage": 17,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "科索沃地区法院科索沃特派团第 64 条规定小组的核查优先方法（2000-2008 年）。引文根据科索沃特派团/欧盟驻科法治团档案和 legal-tools.org 进行核实。保留注册。 64 专家组与科索沃专家分庭不同，并澄清Reg. 2000/64 年允许（没有强制）国际多数小组。研究援助，而不是法律建议。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：CC BY 4.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@jeanne-sulzer/skill/unmik-regulation-64-panels"
    ],
    "tags": [
      "国际法与人权",
      "human-rights",
      "CC BY 4.0",
      "en",
      "unmik",
      "regulation"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@jeanne-sulzer/skill/unmik-regulation-64-panels",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/026-jeanne-sulzer-unmik-regulation-64-panels.md",
    "externalCategory": "human-rights",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/026-jeanne-sulzer-unmik-regulation-64-panels.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/026-jeanne-sulzer-unmik-regulation-64-panels.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-special-panels-timor-leste-027",
    "name": "special-panels-timor-leste",
    "chineseName": "东帝汶特别小组",
    "owner": "Lawve / Jeanne Sulzer",
    "practice": "国际法与人权",
    "jurisdiction": "INT / TL",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-25",
    "usage": 17,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "帝力地区法院重罪特别小组的核查优先方法（东帝汶过渡当局，2000-2006 年）。引文将根据 JSMP、联合国档案和 legal-tools.org 进行验证。涵盖洛斯帕洛斯案、严重犯罪部门案件量（391 人被起诉；约 88 人受审）以及 SPSC 与雅加达的区别。研究援助，而不是法律建议。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：CC BY 4.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@jeanne-sulzer/skill/special-panels-timor-leste"
    ],
    "tags": [
      "国际法与人权",
      "human-rights",
      "CC BY 4.0",
      "en",
      "special",
      "panels"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@jeanne-sulzer/skill/special-panels-timor-leste",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/027-jeanne-sulzer-special-panels-timor-leste.md",
    "externalCategory": "human-rights",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/027-jeanne-sulzer-special-panels-timor-leste.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/027-jeanne-sulzer-special-panels-timor-leste.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-indian-dpdp-act-consent-notice-028",
    "name": "Indian DPDP Act Consent Notice",
    "chineseName": "印度 DPDP 法案同意通知",
    "owner": "Lawve / Siddhi Kudalkar",
    "practice": "数据保护",
    "jurisdiction": "IN",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-25",
    "usage": 84,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "根据印度《2023 年数字个人数据保护法》和《2025 年数字个人数据保护规则》起草或审查符合 DPDPA 的同意通知。提供有关您的业务的基本详细信息，此技能将处理其余部分 - 构建适合您的运营的通知，其中包含所有必需的部分、详细的同意框以及为您的团队提供的内部注释。如果您有需要遵守 DPDPA 的现有通知或隐私...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@siddhi-kudalkar/skill/indian-dpdp-act-consent-notice"
    ],
    "tags": [
      "数据保护",
      "data-protection",
      "AGPL 3.0",
      "en",
      "Indian",
      "DPDP"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@siddhi-kudalkar/skill/indian-dpdp-act-consent-notice",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/028-siddhi-kudalkar-indian-dpdp-act-consent-notice.md",
    "externalCategory": "data-protection",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/028-siddhi-kudalkar-indian-dpdp-act-consent-notice.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/028-siddhi-kudalkar-indian-dpdp-act-consent-notice.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-dpdpa-gdpr-compliance-review-029",
    "name": "DPDPA & GDPR Compliance Review",
    "chineseName": "DPDPA 和 GDPR 合规审查",
    "owner": "Lawve / Parth Desai",
    "practice": "数据保护",
    "jurisdiction": "EU / IN",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-25",
    "usage": 126,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "针对印度的 DPDPA 2023 和欧盟 GDPR 进行结构化合规性审查、条款修订以及法律文件（隐私政策、数据处理协议、供应商和 SaaS 合同）的起草建议。通过推理将条款标记为合规、有风险或不合规，并提出现成的模型替换语言。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@parth-desai/skill/dpdpa-gdpr-compliance-review"
    ],
    "tags": [
      "数据保护",
      "data-protection",
      "AGPL 3.0",
      "en",
      "DPDPA",
      "GDPR"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@parth-desai/skill/dpdpa-gdpr-compliance-review",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/029-parth-desai-dpdpa-gdpr-compliance-review.md",
    "externalCategory": "data-protection",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/029-parth-desai-dpdpa-gdpr-compliance-review.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/029-parth-desai-dpdpa-gdpr-compliance-review.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-indian-foreign-investment-approval-assessment-030",
    "name": "Indian Foreign Investment Approval Assessment",
    "chineseName": "印度外国投资审批评估",
    "owner": "Lawve / Siddhi Kudalkar",
    "practice": "公司并购",
    "jurisdiction": "IN",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-25",
    "usage": 188,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "根据 1999 年《外汇管理法》和 2019 年《非债务工具规则》，评估外国投资印度公司是否需要获得印度政府的批准。该技能系统地收集交易详细信息，评估部门进入路线和上限，评估适用法律规定的陆地边境国家限制，并提供初步合规说明。就投资是否属于自动路线或需要政府批准提供明确的指导。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@siddhi-kudalkar/skill/indian-foreign-investment-approval-assessment"
    ],
    "tags": [
      "公司并购",
      "corporate-law",
      "Apache 2.0",
      "en",
      "Indian",
      "Foreign"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@siddhi-kudalkar/skill/indian-foreign-investment-approval-assessment",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/030-siddhi-kudalkar-indian-foreign-investment-approval-assessment.md",
    "externalCategory": "corporate-law",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/030-siddhi-kudalkar-indian-foreign-investment-approval-assessment.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/030-siddhi-kudalkar-indian-foreign-investment-approval-assessment.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-contract-intelligence-workflow-reviewer-031",
    "name": "contract-intelligence-workflow-reviewer",
    "chineseName": "合同情报工作流程审核员",
    "owner": "Lawve / Carl Ditzler",
    "practice": "商业合同",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-24",
    "usage": 200,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "合同情报和工作流程审核员 Claude 和 Codex 的合同情报、合同审查和合同操作工作流程技能。 目标不是取代法律专业人员对合同的审查。目标是帮助法律、法律运营、采购、合规、隐私、安全和业务团队使用结构化工作流程而不是临时提示来审查合同。 该技能可以帮助合同审查中的审查人员了解哪些内容可能是重要的、不寻常的和...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@carl-ditzler/skill/contract-intelligence-workflow-reviewer"
    ],
    "tags": [
      "商业合同",
      "commercial-law",
      "Apache 2.0",
      "en",
      "contract",
      "intelligence"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@carl-ditzler/skill/contract-intelligence-workflow-reviewer",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/031-carl-ditzler-contract-intelligence-workflow-reviewer.md",
    "externalCategory": "commercial-law",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/031-carl-ditzler-contract-intelligence-workflow-reviewer.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/031-carl-ditzler-contract-intelligence-workflow-reviewer.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-gouvernance-societes-cotees-032",
    "name": "gouvernance-societes-cotees",
    "chineseName": "治理协会",
    "owner": "Lawve / Gillan Saleh",
    "practice": "公司并购",
    "jurisdiction": "FR",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-24",
    "usage": 76,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "技能 — Gouvernance des émetteurs cotés (`gouvernance-emetteurs-cotes`) 对**政府的科学职业的纪录片进行分析 法国高地**。 Le Skill agrège, Sous forme d'**index analytiques 来源**、un cor...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：CC BY 4.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@gillan-saleh/skill/gouvernance-societes-cotees"
    ],
    "tags": [
      "公司并购",
      "corporate-law",
      "CC BY 4.0",
      "en",
      "gouvernance",
      "societes"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@gillan-saleh/skill/gouvernance-societes-cotees",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/032-gillan-saleh-gouvernance-societes-cotees.md",
    "externalCategory": "corporate-law",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/032-gillan-saleh-gouvernance-societes-cotees.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/032-gillan-saleh-gouvernance-societes-cotees.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-litigacion-latam-033",
    "name": "Litigación Latam",
    "chineseName": "拉丁美洲诉讼",
    "owner": "Lawve / Joselyne García Montesdeoca",
    "practice": "争议解决",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-23",
    "usage": 72,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "拉丁美洲民事诉讼专家顾问。该计划旨在协助诉讼代理人、内部法律设备和客户指导拉丁美洲的诉讼程序、法律分析和民事诉讼程序的方向。最后一个部分将在电子邮报中编辑，以恢复客户的大厅。 五次操作方式： 1) 策略：以诉讼方式进行，通过程序进行，以构建客户的位置。 2) Riesgo：评估viabilidad、probabi...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@joselyne-garcia-montesdeoca/skill/litigacion-latam"
    ],
    "tags": [
      "争议解决",
      "litigation",
      "AGPL 3.0",
      "es",
      "Litigación",
      "Latam"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@joselyne-garcia-montesdeoca/skill/litigacion-latam",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/033-joselyne-garcia-montesdeoca-litigacion-latam.md",
    "externalCategory": "litigation",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/033-joselyne-garcia-montesdeoca-litigacion-latam.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/033-joselyne-garcia-montesdeoca-litigacion-latam.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-normalisation-juridique-034",
    "name": "normalisation-juridique",
    "chineseName": "司法正常化",
    "owner": "Lawve / Christophe Quézel-Ambrunaz",
    "practice": "办公自动化",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-06-19",
    "usage": 87,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "La compétence Normalization juridique FR nettoie un document Word rédigé en français juridique。 Elle distingue deux régimes : les Corrections déterministes (...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@christophe-quezel-ambrunaz/skill/normalisation-juridique"
    ],
    "tags": [
      "办公自动化",
      "microsoft-office",
      "AGPL 3.0",
      "fr",
      "normalisation",
      "juridique"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@christophe-quezel-ambrunaz/skill/normalisation-juridique",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/034-christophe-quezel-ambrunaz-normalisation-juridique.md",
    "externalCategory": "microsoft-office",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/034-christophe-quezel-ambrunaz-normalisation-juridique.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/034-christophe-quezel-ambrunaz-normalisation-juridique.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-eu-data-act-035",
    "name": "EU Data Act",
    "chineseName": "欧盟数据法",
    "owner": "Lawve / Oliver Schmidt-Prietz",
    "practice": "科技与知识产权",
    "jurisdiction": "EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-16",
    "usage": 71,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "欧盟数据法案从业者技能 — 部署指南 > 📄 **【查看互动技能页面→】(https://oliverschmidtprietz.github.io/EU-Data-Act/)** 请参阅 [CHANGELOG.md](CHANGELOG.md) 了解版本历史记录。 概述 针对**法规（欧盟）2023/2854...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-data-act"
    ],
    "tags": [
      "科技与知识产权",
      "technology-law",
      "AGPL 3.0",
      "en",
      "Data",
      "Act"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-data-act",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/035-oliver-schmidt-prietz-eu-data-act.md",
    "externalCategory": "technology-law",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/035-oliver-schmidt-prietz-eu-data-act.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/035-oliver-schmidt-prietz-eu-data-act.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-settlement-agreement-review-036",
    "name": "settlement-agreement-review",
    "chineseName": "和解协议审查",
    "owner": "Lawve / Andrew Bird",
    "practice": "劳动雇佣",
    "jurisdiction": "UK",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-16",
    "usage": 41,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "和解协议审查 审查或起草向员工支付费用以解决其索赔的协议，并标记决定该协议是否真正对他们具有约束力的法定条件。 和解协议仅在满足 1996 年 ERA 第 203 条中的累积条件的情况下禁止法定就业索赔；如果错过了一项，员工可以拿走这笔钱，但仍然可以索赔。该技能检查六个条件并标记明显的差距供律师确认，根据当事人（...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@andrew-bird/skill/settlement-agreement-review"
    ],
    "tags": [
      "劳动雇佣",
      "employment-law",
      "Apache 2.0",
      "en",
      "settlement",
      "agreement"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@andrew-bird/skill/settlement-agreement-review",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/036-andrew-bird-settlement-agreement-review.md",
    "externalCategory": "employment-law",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/036-andrew-bird-settlement-agreement-review.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/036-andrew-bird-settlement-agreement-review.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-chronology-builder-037",
    "name": "chronology-builder",
    "chineseName": "年表构建器",
    "owner": "Lawve / Andrew Bird",
    "practice": "争议解决",
    "jurisdiction": "UK",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-16",
    "usage": 148,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "年表 从披露包本身构建诉讼年表 - 每个条目都归因于其源文件，背后有 CPR 31.22 隐含承诺检查。 在英国民事诉讼中披露的文件只能用于这些诉讼；在其他地方使用它们是藐视法庭的行为。该技能承认，在提取任何内容之前：它会检查 CPR 31.22 的位置，筛选特权，然后根据每个条目使用披露参考、文件路径或证人陈述...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：MIT",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@andrew-bird/skill/chronology-builder"
    ],
    "tags": [
      "争议解决",
      "litigation",
      "MIT",
      "en",
      "chronology",
      "builder"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@andrew-bird/skill/chronology-builder",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/037-andrew-bird-chronology-builder.md",
    "externalCategory": "litigation",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/037-andrew-bird-chronology-builder.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/037-andrew-bird-chronology-builder.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-unfair-dismissal-screener-038",
    "name": "unfair-dismissal-screener",
    "chineseName": "不公平解雇筛选器",
    "owner": "Lawve / Andrew Bird",
    "practice": "劳动雇佣",
    "jurisdiction": "UK",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-15",
    "usage": 33,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "不公平解雇筛选器 根据英格兰和威尔士不公平解雇框架筛选解雇（提议的或已经完成的），并显示其暴露的位置。 大多数驳回案件在法庭上失败的原因是程序而非实质内容。该技能构建了资格服务问题，检查不需要资格期的自动不公平类别，并构建了 Burchell / Polkey / 合理响应范围分析，然后提出了具体的程序缺陷 - ...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：MIT",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@andrew-bird/skill/unfair-dismissal-screener"
    ],
    "tags": [
      "劳动雇佣",
      "employment-law",
      "MIT",
      "en",
      "unfair",
      "dismissal"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@andrew-bird/skill/unfair-dismissal-screener",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/038-andrew-bird-unfair-dismissal-screener.md",
    "externalCategory": "employment-law",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/038-andrew-bird-unfair-dismissal-screener.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/038-andrew-bird-unfair-dismissal-screener.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-financial-comparison-glossary-039",
    "name": "financial-comparison-glossary",
    "chineseName": "财务比较术语表",
    "owner": "Lawve / Ignacio Adrián Lerer",
    "practice": "金融业务",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-15",
    "usage": 178,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "当计算器、财务模型、投资者备忘录、尽职调查报告、风险审查、仪表板或面向客户的解释需要明确区分会计和财务概念时使用，例如现金流与利润、息税前利润与息税折旧摊销前利润、资本支出与运营支出、债务与股权、市场价值与账面价值、投资回报率与净资产收益率、资产与负债以及会计与财务。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@adrian-lerer/skill/financial-comparison-glossary"
    ],
    "tags": [
      "金融业务",
      "banking-finance",
      "AGPL 3.0",
      "en",
      "financial",
      "comparison"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@adrian-lerer/skill/financial-comparison-glossary",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/039-adrian-lerer-financial-comparison-glossary.md",
    "externalCategory": "banking-finance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/039-adrian-lerer-financial-comparison-glossary.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/039-adrian-lerer-financial-comparison-glossary.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-due-diligence-gate-040",
    "name": "due-diligence-gate",
    "chineseName": "尽职调查门",
    "owner": "Lawve / Ignacio Adrián Lerer",
    "practice": "金融业务",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-15",
    "usage": 133,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "用于尽职调查、法律财务风险审查、投资或商业交易清单以及初步筛选，其中必须明确区分事实、文件、假设、法律不确定性、债务/股权、资产/负债、合同、税务、监管、合规性、技术/产品和财务模型问题。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@adrian-lerer/skill/due-diligence-gate"
    ],
    "tags": [
      "金融业务",
      "banking-finance",
      "AGPL 3.0",
      "en",
      "due",
      "diligence"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@adrian-lerer/skill/due-diligence-gate",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/040-adrian-lerer-due-diligence-gate.md",
    "externalCategory": "banking-finance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/040-adrian-lerer-due-diligence-gate.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/040-adrian-lerer-due-diligence-gate.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-legal-diagram-041",
    "name": "Legal Diagram",
    "chineseName": "法律图解",
    "owner": "Lawve / Sam Zhai - 翟禹森",
    "practice": "法律运营",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-14",
    "usage": 651,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "一张图片可能胜过一千个字。法律工作肯定需要很多文字。那么为什么要用文字来描述图像呢？停止重读文件。开始看事情。 最新更新：https://github.com/nanparth/ai-skill-hub /legal-diagram 将密集的法律文档、事项说明和头脑风暴转储转换为清晰、可编辑的美人鱼图，使战略制定...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：MIT",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@sam-zhai/skill/legal-diagram"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "MIT",
      "en",
      "Legal",
      "Diagram"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@sam-zhai/skill/legal-diagram",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/041-sam-zhai-legal-diagram.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/041-sam-zhai-legal-diagram.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/041-sam-zhai-legal-diagram.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-data-processing-agreement-art-28-gdpr-042",
    "name": "Data Processing Agreement Art. 28 GDPR",
    "chineseName": "数据处理协议艺术。 28 通用数据保护条例",
    "owner": "Lawve / Oliver Schmidt-Prietz",
    "practice": "数据保护",
    "jurisdiction": "EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-13",
    "usage": 79,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "DPA 艺术。 28 GDPR — 部署指南 > 📄 **【查看交互技能页面→】(https://oliverschmidtprietz.github.io/GDPR-Data-Processing-Agreement/)** 请参阅 [CHANGELOG.md](CHANGELOG.md) 了解版本历史记录。...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@oliver-schmidt-prietz/skill/data-processing-agreement-art-28-gdpr"
    ],
    "tags": [
      "数据保护",
      "data-protection",
      "AGPL 3.0",
      "en",
      "Data",
      "Processing"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@oliver-schmidt-prietz/skill/data-processing-agreement-art-28-gdpr",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/042-oliver-schmidt-prietz-data-processing-agreement-art-28-gdpr.md",
    "externalCategory": "data-protection",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/042-oliver-schmidt-prietz-data-processing-agreement-art-28-gdpr.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/042-oliver-schmidt-prietz-data-processing-agreement-art-28-gdpr.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-fintech-agreement-drafting-043",
    "name": "Fintech Agreement Drafting",
    "chineseName": "金融科技协议起草",
    "owner": "Lawve / Stephane Boghossian",
    "practice": "法律文书",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-12",
    "usage": 51,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "金融科技协议起草 [克劳德](https://claude.com/claude-code) **技能** 金融科技律师将起草方法转化为可重复的、端到端的工作流程 **起草并最终确定复杂的、多支柱监管的支付 协议**——从接收到签署。 正在运行的示例是一个捆绑**代理现金进/现金出的支付框架， 二维码支付、钱包电...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@stephane-boghossian/skill/fintech-agreement-drafting"
    ],
    "tags": [
      "法律文书",
      "legal-drafting",
      "AGPL 3.0",
      "en",
      "Fintech",
      "Agreement"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@stephane-boghossian/skill/fintech-agreement-drafting",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/043-stephane-boghossian-fintech-agreement-drafting.md",
    "externalCategory": "legal-drafting",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/043-stephane-boghossian-fintech-agreement-drafting.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/043-stephane-boghossian-fintech-agreement-drafting.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-gdpr-breach-sentinel-044",
    "name": "GDPR Breach Sentinel",
    "chineseName": "GDPR 违规哨兵",
    "owner": "Lawve / Oliver Schmidt-Prietz",
    "practice": "数据保护",
    "jurisdiction": "EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-11",
    "usage": 23,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "Breach Sentinel — 部署指南 > 📄 **【查看互动技能页面→】(https://oliverschmidtprietz.github.io/GDPR-Breach-Sentinel/)** 请参阅 [CHANGELOG.md](CHANGELOG.md) 了解版本历史记录。 概述 GDPR 违...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@oliver-schmidt-prietz/skill/gdpr-breach-sentinel"
    ],
    "tags": [
      "数据保护",
      "data-protection",
      "AGPL 3.0",
      "en",
      "GDPR",
      "Breach"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@oliver-schmidt-prietz/skill/gdpr-breach-sentinel",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/044-oliver-schmidt-prietz-gdpr-breach-sentinel.md",
    "externalCategory": "data-protection",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/044-oliver-schmidt-prietz-gdpr-breach-sentinel.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/044-oliver-schmidt-prietz-gdpr-breach-sentinel.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-cpr-letter-drafter-045",
    "name": "cpr-letter-drafter",
    "chineseName": "CPR 信件起草人",
    "owner": "Lawve / Andrew Bird",
    "practice": "争议解决",
    "jurisdiction": "UK",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-11",
    "usage": 38,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "cpr 信函起草者 根据索赔的*正确*预诉讼协议，撰写您在英格兰和威尔士民事案件中起诉某人之前发送的正式信函（启动预诉讼时钟的索赔前信函）。 适用的协议（债务、专业疏忽、房屋年久失修、人身伤害或行动前行为的默认实践指示）会改变规则，而普通信件会忽略这些规则。对于初级诉讼人员、内部法律顾问和没有先例银行可借鉴的小律...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：MIT",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@andrew-bird/skill/cpr-letter-drafter"
    ],
    "tags": [
      "争议解决",
      "litigation",
      "MIT",
      "en",
      "cpr",
      "letter"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@andrew-bird/skill/cpr-letter-drafter",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/045-andrew-bird-cpr-letter-drafter.md",
    "externalCategory": "litigation",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/045-andrew-bird-cpr-letter-drafter.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/045-andrew-bird-cpr-letter-drafter.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-without-prejudice-drafter-046",
    "name": "without-prejudice-drafter",
    "chineseName": "不妨碍起草者",
    "owner": "Lawve / Andrew Bird",
    "practice": "争议解决",
    "jurisdiction": "UK",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-11",
    "usage": 35,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "无偏见起草者 在“正确”的立场上写下一份和解信，并在将其标记为“不偏见”时警告您，这实际上并不能阻止它出庭。 真正的和解信通常会受到保护，因此法官看不到它，但只有当该内容是真正的和解尝试时，该标签才有效，即使如此也有例外。该技能选择正确的基础（没有偏见，没有偏见，除了成本/考尔德班克，或开放），起草完成的信函，并...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：MIT",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@andrew-bird/skill/without-prejudice-drafter"
    ],
    "tags": [
      "争议解决",
      "litigation",
      "MIT",
      "en",
      "without",
      "prejudice"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@andrew-bird/skill/without-prejudice-drafter",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/046-andrew-bird-without-prejudice-drafter.md",
    "externalCategory": "litigation",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/046-andrew-bird-without-prejudice-drafter.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/046-andrew-bird-without-prejudice-drafter.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-disclosure-list-047",
    "name": "disclosure-list",
    "chineseName": "披露清单",
    "owner": "Lawve / Andrew Bird",
    "practice": "争议解决",
    "jurisdiction": "UK",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-11",
    "usage": 32,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "披露列表 找出在英格兰和威尔士的民事案件中您必须将哪些文件移交给另一方，并建立正式清单 - 纠正令人困惑的部分：适用哪种披露制度。 在商业和财产法院，这是根据实践指示 57AD 进行的披露试点（现在是永久性的，其模型 A-E）；在其他地方，它是 CPR 第 31 部分下的标准披露。如果使用通用工具来获取“披露列表...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：MIT",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@andrew-bird/skill/disclosure-list"
    ],
    "tags": [
      "争议解决",
      "litigation",
      "MIT",
      "en",
      "disclosure",
      "list"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@andrew-bird/skill/disclosure-list",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/047-andrew-bird-disclosure-list.md",
    "externalCategory": "litigation",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/047-andrew-bird-disclosure-list.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/047-andrew-bird-disclosure-list.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-settlement-pressure-tester-048",
    "name": "Settlement Pressure Tester",
    "chineseName": "沉降压力测试仪",
    "owner": "Lawve / Larissa Meredith-Flister",
    "practice": "争议解决",
    "jurisdiction": "UK",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-11",
    "usage": 105,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "该技能在报价发出或返回之前对拟议的和解立场进行压力测试：它所依赖的假设、你的杠杆和对手的杠杆、明显的弱点、对手可能的反应以及围绕它的时间和成本压力。它构建和解判断以做出更明智的决策；它不建议是否解决。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@larissa-meredith-flister/skill/settlement-pressure-tester"
    ],
    "tags": [
      "争议解决",
      "litigation",
      "AGPL 3.0",
      "en",
      "Settlement",
      "Pressure"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@larissa-meredith-flister/skill/settlement-pressure-tester",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/048-larissa-meredith-flister-settlement-pressure-tester.md",
    "externalCategory": "litigation",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/048-larissa-meredith-flister-settlement-pressure-tester.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/048-larissa-meredith-flister-settlement-pressure-tester.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-disclosure-strategy-mapper-049",
    "name": "Disclosure Strategy Mapper",
    "chineseName": "披露策略图",
    "owner": "Lawve / Larissa Meredith-Flister",
    "practice": "争议解决",
    "jurisdiction": "UK",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-11",
    "usage": 121,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "该技能从案件摘要、诉状、年代顺序或早期案件理论中映射披露策略：重要的文件类别、可能的保管人、不利材料、证据差距、搜索主题以及值得尽早面对的风险。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@larissa-meredith-flister/skill/disclosure-strategy-mapper"
    ],
    "tags": [
      "争议解决",
      "litigation",
      "AGPL 3.0",
      "en",
      "Disclosure",
      "Strategy"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@larissa-meredith-flister/skill/disclosure-strategy-mapper",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/049-larissa-meredith-flister-disclosure-strategy-mapper.md",
    "externalCategory": "litigation",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/049-larissa-meredith-flister-disclosure-strategy-mapper.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/049-larissa-meredith-flister-disclosure-strategy-mapper.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-ai-audit-trail-050",
    "name": "AI Audit Trail",
    "chineseName": "人工智能审计追踪",
    "owner": "Lawve / Larissa Meredith-Flister",
    "practice": "监管合规",
    "jurisdiction": "UK",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-11",
    "usage": 149,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "这项技能构建了人工智能辅助任务的结构化审计跟踪：要求工具做什么、提供什么材料、产生什么、如何验证输出以及最终依赖什么。它记录了监督和后期审查的工作流程，而不对特权或披露做出裁决，因此记录保持准确而不是自私。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@larissa-meredith-flister/skill/ai-audit-trail"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "en",
      "Audit",
      "Trail"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@larissa-meredith-flister/skill/ai-audit-trail",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/050-larissa-meredith-flister-ai-audit-trail.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/050-larissa-meredith-flister-ai-audit-trail.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/050-larissa-meredith-flister-ai-audit-trail.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-client-explanation-translator-051",
    "name": "Client Explanation Translator",
    "chineseName": "客户解释翻译",
    "owner": "Lawve / Larissa Meredith-Flister",
    "practice": "法律文书",
    "jurisdiction": "UK",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-10",
    "usage": 246,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "将复杂的法律分析转化为面向客户的清晰且具有商业价值的建议。每当用户拥有密集的法律材料（起草、内部分析、律师笔记、研究备忘录、诉状、案件更新或信件）并希望将其转换为客户可以实际理解并采取行动的内容时，请使用此功能。触发诸如“向客户解释这一点”、“用简单的英语表达”、“为非律师翻译”、“将其转化为面向客户的建议”、“...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@larissa-meredith-flister/skill/client-explanation-translator"
    ],
    "tags": [
      "法律文书",
      "legal-drafting",
      "AGPL 3.0",
      "en",
      "Client",
      "Explanation"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@larissa-meredith-flister/skill/client-explanation-translator",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/051-larissa-meredith-flister-client-explanation-translator.md",
    "externalCategory": "legal-drafting",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/051-larissa-meredith-flister-client-explanation-translator.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/051-larissa-meredith-flister-client-explanation-translator.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-international-criminal-court-052",
    "name": "international-criminal-court",
    "chineseName": "国际刑事法院",
    "owner": "Lawve / Jeanne Sulzer",
    "practice": "国际法与人权",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-09",
    "usage": 75,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "涉及国际刑事法院（罗马规约体系）的研究、起草和分析。强制执行验证优先的方法 - 每个判例法、判决、备案、保证和声明引用在出现在输出中之前都会根据当前对话中的权威主要来源（icc-cpi.int、legal-tools.org）进行验证。基础文本（《罗马规约》、《犯罪要件》、《RPE》、《法院条例》）可以从存在的项...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：CC BY 4.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@jeanne-sulzer/skill/international-criminal-court"
    ],
    "tags": [
      "国际法与人权",
      "human-rights",
      "CC BY 4.0",
      "en",
      "international",
      "criminal"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@jeanne-sulzer/skill/international-criminal-court",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/052-jeanne-sulzer-international-criminal-court.md",
    "externalCategory": "human-rights",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/052-jeanne-sulzer-international-criminal-court.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/052-jeanne-sulzer-international-criminal-court.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-eu-ai-act-knowledge-base-053",
    "name": "EU AI Act Knowledge Base",
    "chineseName": "欧盟人工智能法案知识库",
    "owner": "Lawve / Oliver Schmidt-Prietz",
    "practice": "监管合规",
    "jurisdiction": "EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-09",
    "usage": 61,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "欧盟人工智能法案知识引擎 — 部署指南 > 📄 **【查看互动技能页面→】(https://oliverschmidtprietz.github.io/EU-AI-Act-Suite/ai-act-knowledge/)** 请参阅 [CHANGELOG.md](CHANGELOG.md) 了解版本历史记录。 ...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-knowledge-base"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "en",
      "Act",
      "Knowledge"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-knowledge-base",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/053-oliver-schmidt-prietz-eu-ai-act-knowledge-base.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/053-oliver-schmidt-prietz-eu-ai-act-knowledge-base.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/053-oliver-schmidt-prietz-eu-ai-act-knowledge-base.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-eu-ai-act-high-risk-classifier-054",
    "name": "EU AI Act High-Risk Classifier",
    "chineseName": "欧盟人工智能法案高风险分类器",
    "owner": "Lawve / Oliver Schmidt-Prietz",
    "practice": "监管合规",
    "jurisdiction": "EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-09",
    "usage": 55,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "ai-行为-高风险 > 📄 **【查看互动技能页面→】(https://oliverschmidtprietz.github.io/EU-AI-Act-Suite/ai-act-high-risk/)** **欧盟人工智能法案第 1 条高风险分类的深度评估技能。 6**（条例（EU）2024/1689），以欧盟...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-high-risk-classifier"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "en",
      "Act",
      "High"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-high-risk-classifier",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/054-oliver-schmidt-prietz-eu-ai-act-high-risk-classifier.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/054-oliver-schmidt-prietz-eu-ai-act-high-risk-classifier.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/054-oliver-schmidt-prietz-eu-ai-act-high-risk-classifier.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-legal-analysis-forge-055",
    "name": "Legal Analysis Forge",
    "chineseName": "法律分析锻造",
    "owner": "Lawve / Oliver Schmidt-Prietz",
    "practice": "法律研究",
    "jurisdiction": "EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-09",
    "usage": 38,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "法律分析锻造 > 📄 **【查看互动技能页面→】(https://oliverschmidtprietz.github.io/EU-Legal-Analysis-Forge/)** 对欧盟数字监管文件进行结构化法律分析的**快速锻造**。给定法规、指令、委员会指南、EDPB 意见、CJEU 判决、AG 意见、国...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@oliver-schmidt-prietz/skill/legal-analysis-forge"
    ],
    "tags": [
      "法律研究",
      "legal-research",
      "AGPL 3.0",
      "en",
      "Legal",
      "Analysis"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@oliver-schmidt-prietz/skill/legal-analysis-forge",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/055-oliver-schmidt-prietz-legal-analysis-forge.md",
    "externalCategory": "legal-research",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/055-oliver-schmidt-prietz-legal-analysis-forge.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/055-oliver-schmidt-prietz-legal-analysis-forge.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-transfer-impact-assessment-tia-056",
    "name": "Transfer Impact Assessment (TIA)",
    "chineseName": "转移影响评估（TIA）",
    "owner": "Lawve / Oliver Schmidt-Prietz",
    "practice": "数据保护",
    "jurisdiction": "EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-09",
    "usage": 53,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "TIA（传输影响评估）— 部署指南 > 📄 **【查看互动技能页面→】(https://oliverschmidtprietz.github.io/GDPR-Transfer-Impact-Assessment/)** 概述 GDPR 转移影响评估技能 - 针对 Claude 的结构化第五章转移指南。组合： -...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@oliver-schmidt-prietz/skill/transfer-impact-assessment-tia"
    ],
    "tags": [
      "数据保护",
      "data-protection",
      "AGPL 3.0",
      "en",
      "Transfer",
      "Impact"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@oliver-schmidt-prietz/skill/transfer-impact-assessment-tia",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/056-oliver-schmidt-prietz-transfer-impact-assessment-tia.md",
    "externalCategory": "data-protection",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/056-oliver-schmidt-prietz-transfer-impact-assessment-tia.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/056-oliver-schmidt-prietz-transfer-impact-assessment-tia.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-chilean-law-research-057",
    "name": "chilean-law-research",
    "chineseName": "智利法律研究",
    "owner": "Lawve / Matias GV Rojas Faundez",
    "practice": "法律研究",
    "jurisdiction": "CL",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-06-06",
    "usage": 52,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "智利法律辖区锁定法律研究助理。回答有关智利法规、法规、程序和判例法的自然语言问题，并且必须为每项法律声明提供法律名称、确切的文章以及国家国会图书馆 (BCN) 的可验证来源链接。它拒绝有关其他司法管辖区的问题并标记不确定性，而不是发明文章编号、法规或案例 (ROL) 编号。注意：它没有实时的法规数据库——它根据模...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：MIT",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@matias-gv-rojas-faundez/skill/chilean-law-research"
    ],
    "tags": [
      "法律研究",
      "legal-research",
      "MIT",
      "es",
      "chilean",
      "law"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@matias-gv-rojas-faundez/skill/chilean-law-research",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/057-matias-gv-rojas-faundez-chilean-law-research.md",
    "externalCategory": "legal-research",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/057-matias-gv-rojas-faundez-chilean-law-research.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/057-matias-gv-rojas-faundez-chilean-law-research.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-pre-motion-058",
    "name": "pre-motion",
    "chineseName": "预动",
    "owner": "Lawve / Andrew Bird",
    "practice": "争议解决",
    "jurisdiction": "UK / EU / US",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-06",
    "usage": 183,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "预运动 英格兰和威尔士民事诉讼的对抗性事前分析。构建案件最有力的版本，然后从程序、实质、证据、战略四个角度对其进行攻击，以抢在对方律师之前找出败诉的地方。 适用于律师在问题前进行压力测试、内部法律顾问在签署前进行压力测试、调解员重视和解以及诉讼资助者对事项进行定价。 安装 [claude-for-uk-legal...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：MIT",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@andrew-bird/skill/pre-motion"
    ],
    "tags": [
      "争议解决",
      "litigation",
      "MIT",
      "en",
      "pre",
      "motion"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@andrew-bird/skill/pre-motion",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/058-andrew-bird-pre-motion.md",
    "externalCategory": "litigation",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/058-andrew-bird-pre-motion.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/058-andrew-bird-pre-motion.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-irac-prompt-builder-059",
    "name": "IRAC Prompt Builder",
    "chineseName": "IRAC 提示生成器",
    "owner": "Lawve / Stephane Boghossian",
    "practice": "法律文书",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-06-06",
    "usage": 94,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "将任何粗略的构建、研究或法律起草请求重组为 IRAC 形状的提示——问题、规则、分析、结论——针对前沿模型进行了优化。它是律师资格考试框架，被重新定位为即时工程。该技能以问题开头，以结论结束（其中模型最受关注），迫使您说出约束和非目标，并在生成单个标记之前指定“好”是什么样子。在任何重要的构建之前，或者当一个模糊...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@stephane-boghossian/skill/irac-prompt-builder"
    ],
    "tags": [
      "法律文书",
      "legal-drafting",
      "AGPL 3.0",
      "en",
      "IRAC",
      "Prompt"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@stephane-boghossian/skill/irac-prompt-builder",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/059-stephane-boghossian-irac-prompt-builder.md",
    "externalCategory": "legal-drafting",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/059-stephane-boghossian-irac-prompt-builder.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/059-stephane-boghossian-irac-prompt-builder.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-agentic-delegation-audit-060",
    "name": "agentic-delegation-audit",
    "chineseName": "代理委托审计",
    "owner": "Lawve / Ignacio Adrián Lerer",
    "practice": "法律运营",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-06-06",
    "usage": 54,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "当律师、法律团队或客户需要评估可以代表某人行事的 AI 代理时使用：发送消息、搜索、起草、归档、支付、删除、连接到帐户、使用工具或依赖外部数据。对合法运营进行实际的授权、监督、问责和控制审计。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@adrian-lerer/skill/agentic-delegation-audit"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "AGPL 3.0",
      "en",
      "agentic",
      "delegation"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@adrian-lerer/skill/agentic-delegation-audit",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/060-adrian-lerer-agentic-delegation-audit.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/060-adrian-lerer-agentic-delegation-audit.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/060-adrian-lerer-agentic-delegation-audit.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-legal-transition-audit-061",
    "name": "legal-transition-audit",
    "chineseName": "法律过渡审计",
    "owner": "Lawve / Ignacio Adrián Lerer",
    "practice": "法律运营",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-06",
    "usage": 58,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "审核从合法人工智能输出到依赖、推荐、执行或现实世界承诺的转变。在对人工智能生成的分析、备忘录、合同审查、合规调查或工作流程输出采取行动之前使用它，以检查权威、证据、授权、不确定性、程序和审查条件是否仍然充分。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@adrian-lerer/skill/legal-transition-audit"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "AGPL 3.0",
      "en",
      "legal",
      "transition"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@adrian-lerer/skill/legal-transition-audit",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/061-adrian-lerer-legal-transition-audit.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/061-adrian-lerer-legal-transition-audit.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/061-adrian-lerer-legal-transition-audit.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-decision-ownership-audit-062",
    "name": "decision-ownership-audit",
    "chineseName": "决策-所有权-审计",
    "owner": "Lawve / Ignacio Adrián Lerer",
    "practice": "法律运营",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-06",
    "usage": 34,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "在依赖之前对人工智能辅助的法律、合规、治理和机构决策进行审计，以确定负责人或机构是否有足够的机会获得证据、推理基础、不确定性、权威和审查路径，以真正拥有决策，而不仅仅是批准、签署或传输决策。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@adrian-lerer/skill/decision-ownership-audit"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "AGPL 3.0",
      "en",
      "decision",
      "ownership"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@adrian-lerer/skill/decision-ownership-audit",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/062-adrian-lerer-decision-ownership-audit.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/062-adrian-lerer-decision-ownership-audit.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/062-adrian-lerer-decision-ownership-audit.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-trademark-search-063",
    "name": "Trademark Search",
    "chineseName": "商标检索",
    "owner": "Lawve / Robb Miller",
    "practice": "知识产权",
    "jurisdiction": "US / CA",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-05",
    "usage": 170,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "在美国和加拿大进行面向律师的淘汰/可用性商标搜索。每当用户（创始人、客户或律师）询问品牌、标记、名称、徽标、口号或产品名称是否“可用”、“免费使用”、“可清除”或“已使用”时使用，或者要求 Claude “搜索商标注册簿”、“检查 USPTO”、“检查 CIPO”、“进行淘汰搜索”、“许可搜索”、“可用性搜索”或...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：CC BY 4.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@robb-miller/skill/trademark-search"
    ],
    "tags": [
      "知识产权",
      "intellectual-property",
      "CC BY 4.0",
      "en",
      "Trademark",
      "Search"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@robb-miller/skill/trademark-search",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/063-robb-miller-trademark-search.md",
    "externalCategory": "intellectual-property",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/063-robb-miller-trademark-search.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/063-robb-miller-trademark-search.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-arbitration-clause-design-and-review-064",
    "name": "arbitration-clause-design-and-review",
    "chineseName": "仲裁条款设计和审查",
    "owner": "Lawve / Hafez Virjee",
    "practice": "商业合同",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-04",
    "usage": 594,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "仲裁条款设计与审查 用于起草、审查和压力测试争议解决条款的商业仲裁工作流程。作者：**Hafez Virjee**，独立仲裁员（Virjee 仲裁）、Delos 争议解决公司总裁、Delos 仲裁场所指南联合总编辑。 GitHub：https://github.com/HVirjee/ Arbitration-c...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@hafez-virjee/skill/arbitration-clause-design-and-review"
    ],
    "tags": [
      "商业合同",
      "commercial-law",
      "AGPL 3.0",
      "en",
      "arbitration",
      "clause"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@hafez-virjee/skill/arbitration-clause-design-and-review",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/064-hafez-virjee-arbitration-clause-design-and-review.md",
    "externalCategory": "commercial-law",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/064-hafez-virjee-arbitration-clause-design-and-review.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/064-hafez-virjee-arbitration-clause-design-and-review.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-law-expertise-to-skill-065",
    "name": "law-expertise-to-skill",
    "chineseName": "法律专业知识到技能",
    "owner": "Lawve / Ignacio Adrián Lerer",
    "practice": "Skill 构建",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-06-02",
    "usage": 186,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "将律师有限的专业知识、工作流程、审查标准或法律判断模式转化为安全、可检查的法律人工智能技能。当用户提供法律备忘录、评论、清单、谈判笔记、审阅习惯、合规手册或专业反馈并想要可重复使用的 Lawve 式技能时使用。不得冒充律师或声称复制他人；仅提取授权的、受源限制的能力。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@adrian-lerer/skill/law-expertise-to-skill"
    ],
    "tags": [
      "Skill 构建",
      "skill-authoring",
      "AGPL 3.0",
      "en",
      "law",
      "expertise"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@adrian-lerer/skill/law-expertise-to-skill",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/065-adrian-lerer-law-expertise-to-skill.md",
    "externalCategory": "skill-authoring",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/065-adrian-lerer-law-expertise-to-skill.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/065-adrian-lerer-law-expertise-to-skill.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-proposition-audit-066",
    "name": "proposition-audit",
    "chineseName": "提案审核",
    "owner": "Lawve / Anthony Searle",
    "practice": "法律研究",
    "jurisdiction": "UK",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-06-01",
    "usage": 57,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "对人工智能生成的事实和解释性声明进行事后验证和信任审计。按类型和显着性对主张进行分类，将它们路由到适合领域的来源，通过对看似合理但不受支持的细节的插值判断，在分层范围内对可信度进行评分，并评估解释性主张的修辞公平性。设计重点关注英格兰和威尔士的医疗保健法，但具有广泛的适用性。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@anthony-searle/skill/proposition-audit"
    ],
    "tags": [
      "法律研究",
      "legal-research",
      "Apache 2.0",
      "en",
      "proposition",
      "audit"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@anthony-searle/skill/proposition-audit",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/066-anthony-searle-proposition-audit.md",
    "externalCategory": "legal-research",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/066-anthony-searle-proposition-audit.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/066-anthony-searle-proposition-audit.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-epistemic-fault-line-audit-067",
    "name": "epistemic-fault-line-audit",
    "chineseName": "认知断层线审核",
    "owner": "Lawve / Ignacio Adrián Lerer",
    "practice": "法律运营",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "low",
    "version": "open-source",
    "updated": "2026-05-31",
    "usage": 68,
    "rating": 4.1,
    "reviewScore": 86,
    "description": "审核合法的 AI 输出、提示、技能、工作流程和 MCP/工具指令，以了解流畅但不受支持的推理、证据缺失、过度自信、隐藏的假设、因果关系薄弱和缺乏人工审核门。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@adrian-lerer/skill/epistemic-fault-line-audit"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "AGPL 3.0",
      "en",
      "epistemic",
      "fault"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@adrian-lerer/skill/epistemic-fault-line-audit",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/067-adrian-lerer-epistemic-fault-line-audit.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/067-adrian-lerer-epistemic-fault-line-audit.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/067-adrian-lerer-epistemic-fault-line-audit.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-legal-mdl-audit-068",
    "name": "legal-mdl-audit",
    "chineseName": "法律 MDL 审计",
    "owner": "Lawve / Ignacio Adrián Lerer",
    "practice": "法律运营",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "low",
    "version": "open-source",
    "updated": "2026-05-31",
    "usage": 60,
    "rating": 4.1,
    "reviewScore": 86,
    "description": "审核合法的人工智能输出和工作流程以进行诚实的压缩：不必要的复杂性、虚假的简单性、过多的警告、隐藏的不确定性以及合法可接受的输出的较低成本。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@adrian-lerer/skill/legal-mdl-audit"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "AGPL 3.0",
      "en",
      "legal",
      "mdl"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@adrian-lerer/skill/legal-mdl-audit",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/068-adrian-lerer-legal-mdl-audit.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/068-adrian-lerer-legal-mdl-audit.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/068-adrian-lerer-legal-mdl-audit.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-tech-contract-review-069",
    "name": "Tech Contract Review",
    "chineseName": "技术合同审查",
    "owner": "Lawve / Parth Desai",
    "practice": "商业合同",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-26",
    "usage": 198,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "对技术和商业合同进行司法管辖区意识审查 - MSA、DPA、SOW、LOE、NDA、SLA、EULA、IP 分配、供应商/供应商和 API/平台 ToS。对每个条款进行分类（可接受/协商/红旗/缺失），提出红线替换建议，检查管辖法律和数据保护义务（GDPR、英国 GDPR、印度 DPDP 法案、CCPA），并输出...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@parth-desai/skill/tech-contract-review"
    ],
    "tags": [
      "商业合同",
      "commercial-law",
      "AGPL 3.0",
      "en",
      "Tech",
      "Contract"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@parth-desai/skill/tech-contract-review",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/069-parth-desai-tech-contract-review.md",
    "externalCategory": "commercial-law",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/069-parth-desai-tech-contract-review.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/069-parth-desai-tech-contract-review.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-legal-document-drafting-070",
    "name": "legal-document-drafting",
    "chineseName": "法律文件起草",
    "owner": "Lawve / Alessandro Dardano",
    "practice": "法律文书",
    "jurisdiction": "EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-26",
    "usage": 815,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "生成格式正确的 Word 法律文档 (.docx)。用户 提供实质性内容（说明、附件、项目 知识）；该技能处理文档架构和格式。 * 无需先例或模板 * 七个文件系列：协议、公司文件、诉讼、 备忘录、就业、政策、信件 * 与司法管辖区无关——适用于用户指定的任何法律体系 * 多链编号、定义术语约定、结构化叙述、 原...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@alessandro-dardano/skill/legal-document-drafting"
    ],
    "tags": [
      "法律文书",
      "legal-drafting",
      "Apache 2.0",
      "en",
      "legal",
      "document"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@alessandro-dardano/skill/legal-document-drafting",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/070-alessandro-dardano-legal-document-drafting.md",
    "externalCategory": "legal-drafting",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/070-alessandro-dardano-legal-document-drafting.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/070-alessandro-dardano-legal-document-drafting.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-climate-aligned-contracts-071",
    "name": "climate-aligned-contracts",
    "chineseName": "气候相关合同",
    "owner": "Lawve / The Chancery Lane Project",
    "practice": "商业合同",
    "jurisdiction": "UK / EU / INT",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-05-26",
    "usage": 151,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "起草、调整和审查与 Chancery Lane 项目通过法律协议减少碳排放的方法相一致的合同和条款。当 Claude 需要：(1) 起草新的气候相关条款（例如净零承诺、碳核算、供应链脱碳），(2) 调整或修改现有合同以纳入气候目标，(3) 审查和分析条款以符合气候目标和脱碳战略，(4) 为赞善里项目的内部风格和气...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：MIT",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@tclp/skill/climate-aligned-contracts"
    ],
    "tags": [
      "商业合同",
      "commercial-law",
      "MIT",
      "en",
      "climate",
      "aligned"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@tclp/skill/climate-aligned-contracts",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/071-tclp-climate-aligned-contracts.md",
    "externalCategory": "commercial-law",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/071-tclp-climate-aligned-contracts.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/071-tclp-climate-aligned-contracts.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-skill-injection-defense-072",
    "name": "skill-injection-defense",
    "chineseName": "技能-注入-防御",
    "owner": "Lawve / Ignacio Adrián Lerer",
    "practice": "Skill 构建",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-05-24",
    "usage": 83,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "在信任或安装合法的 AI 技能、提示、工作流程、MCP/工具指令和代理包之前对其进行审核。它可以检测提示注入、隐藏或恶意指令、不安全脚本、可疑前沿内容、凭证暴露、渗透路径、持久性机制、cron/launchd 挂钩、未经授权的网络调用和供应链风险。 在采用第三方或生成的技能之前使用它；在将技能发布到合法的人工智能...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@adrian-lerer/skill/skill-injection-defense"
    ],
    "tags": [
      "Skill 构建",
      "skill-authoring",
      "AGPL 3.0",
      "en",
      "skill",
      "injection"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@adrian-lerer/skill/skill-injection-defense",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/072-adrian-lerer-skill-injection-defense.md",
    "externalCategory": "skill-authoring",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/072-adrian-lerer-skill-injection-defense.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/072-adrian-lerer-skill-injection-defense.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-sanctions-and-export-analysis-073",
    "name": "sanctions-and-export-analysis",
    "chineseName": "制裁和出口分析",
    "owner": "Lawve / Gillan Saleh",
    "practice": "监管合规",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-22",
    "usage": 120,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "对 30 多个官方清单（联合国、欧盟、OFAC、OFSI、法国 DGT...）进行实时个人筛查、部门分析、两用商品（欧盟法规 2021/821）、美国/中国域外制度（EAR、ITAR、FDPR、ECL）、美元/SWIFT 风险和 30 多个国家/地区的管辖权映射。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@gillan-saleh/skill/sanctions-and-export-analysis"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "en",
      "sanctions",
      "and"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@gillan-saleh/skill/sanctions-and-export-analysis",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/073-gillan-saleh-sanctions-and-export-analysis.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/073-gillan-saleh-sanctions-and-export-analysis.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/073-gillan-saleh-sanctions-and-export-analysis.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-analyse-sanctions-et-exportations-074",
    "name": "analyse-sanctions-et-exportations",
    "chineseName": "分析制裁和出口",
    "owner": "Lawve / Gillan Saleh",
    "practice": "监管合规",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-21",
    "usage": 11,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "Claude Desktop 分析国际经济制裁和出口控制。筛选 30 多个官方列表（ONU、UE、OFAC、OFSI、DGT France...），分析部门、双重用途（UE 2021/821 法规）、美国/中国的域外制度（EAR、ITAR、FDPR、ECL）、有风险的 USD/SWIFT 以及 30 多个司法管辖...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@gillan-saleh/skill/analyse-sanctions-et-exportations"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "fr",
      "analyse",
      "sanctions"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@gillan-saleh/skill/analyse-sanctions-et-exportations",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/074-gillan-saleh-analyse-sanctions-et-exportations.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/074-gillan-saleh-analyse-sanctions-et-exportations.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/074-gillan-saleh-analyse-sanctions-et-exportations.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-en-us-legal-translation-075",
    "name": "EN-US Legal Translation",
    "chineseName": "英美法律翻译",
    "owner": "Lawve / Wouter van den Berg",
    "practice": "法律文书",
    "jurisdiction": "INT / US",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-21",
    "usage": 206,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "任何需要将法律文件翻译成可供出版的英语的人的技能。给它一个任何语言的Word文件；返回保留格式的英文 .docx，提供比例如更高的质量Legora 的 DeepL 工具。 独特的特点： * Skill 内置英语通用词典和每种语言的子词典（短语），涵盖并购、知识产权、IT/SaaS、金融、税务、诉讼、就业等。子词典...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：MIT",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@wouter-van-den-berg/skill/en-us-legal-translation"
    ],
    "tags": [
      "法律文书",
      "legal-drafting",
      "MIT",
      "en",
      "Legal",
      "Translation"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@wouter-van-den-berg/skill/en-us-legal-translation",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/075-wouter-van-den-berg-en-us-legal-translation.md",
    "externalCategory": "legal-drafting",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/075-wouter-van-den-berg-en-us-legal-translation.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/075-wouter-van-den-berg-en-us-legal-translation.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-en-uk-legal-translation-076",
    "name": "EN-UK Legal Translation",
    "chineseName": "EN-UK 法律翻译",
    "owner": "Lawve / Wouter van den Berg",
    "practice": "法律文书",
    "jurisdiction": "INT / UK",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-21",
    "usage": 391,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "任何需要将法律文件翻译成可供出版的英语的人的技能。给它一个任何语言的Word文件；返回保留格式的英文 .docx，提供比例如更高的质量Legora 的 DeepL 工具。 独特的特点： * Skill 内置英语通用词典和每种语言的子词典（短语），涵盖并购、知识产权、IT/SaaS、金融、税务、诉讼、就业等。子词典...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：MIT",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@wouter-van-den-berg/skill/en-uk-legal-translation"
    ],
    "tags": [
      "法律文书",
      "legal-drafting",
      "MIT",
      "en",
      "Legal",
      "Translation"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@wouter-van-den-berg/skill/en-uk-legal-translation",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/076-wouter-van-den-berg-en-uk-legal-translation.md",
    "externalCategory": "legal-drafting",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/076-wouter-van-den-berg-en-uk-legal-translation.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/076-wouter-van-den-berg-en-uk-legal-translation.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-bacen-compliance-sentinel-077",
    "name": "BACEN Compliance Sentinel",
    "chineseName": "BACEN 合规哨兵",
    "owner": "Lawve / Rafael Mastronardi",
    "practice": "监管合规",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-21",
    "usage": 70,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "关于遵守巴西中央银行法规的综合指南：CMN 第 4,893/2021 号决议（网络安全政策）、BCB 第 85/2021 号决议 (GRSIC)、巴西开放金融（BCB 第 32/2020 号决议及更新）以及其他 BACEN 审慎规则。涵盖起草和审查网络安全政策、事件行动和响应计划 (PARI)、信息和通信服务风险...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@rafael-mastronardi/skill/bacen-compliance-sentinel"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "pt",
      "BACEN",
      "Compliance"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@rafael-mastronardi/skill/bacen-compliance-sentinel",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/077-rafael-mastronardi-bacen-compliance-sentinel.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/077-rafael-mastronardi-bacen-compliance-sentinel.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/077-rafael-mastronardi-bacen-compliance-sentinel.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-lgpd-sentinel-078",
    "name": "LGPD Sentinel",
    "chineseName": "LGPD哨兵",
    "owner": "Lawve / Rafael Mastronardi",
    "practice": "数据保护",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-21",
    "usage": 64,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "LGPD 针对巴西加工业务的指南。涵盖法律依据（第 7 条和第 11 条）、DPIA、事件（第 48-49 条）、数据主体权利（第 18 条）和国际传输。触发因素：LGPD、DPIA、ANPD、数据保护、个人数据、同意、数据保护官、巴西 DPO、数据事件、合法权益。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@rafael-mastronardi/skill/lgpd-sentinel"
    ],
    "tags": [
      "数据保护",
      "data-protection",
      "AGPL 3.0",
      "pt",
      "LGPD",
      "Sentinel"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@rafael-mastronardi/skill/lgpd-sentinel",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/078-rafael-mastronardi-lgpd-sentinel.md",
    "externalCategory": "data-protection",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/078-rafael-mastronardi-lgpd-sentinel.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/078-rafael-mastronardi-lgpd-sentinel.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-screening-alert-adjudication-079",
    "name": "screening-alert-adjudication",
    "chineseName": "筛查-警报-裁决",
    "owner": "Lawve / Amir Fadavi",
    "practice": "监管合规",
    "jurisdiction": "US / UK / EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-19",
    "usage": 53,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "筛选警报裁决 一种确定性、标准驱动的技能，用于裁决针对制裁名单、PEP 名单、不良媒体来源和类似观察名单的筛选命中。旨在自动清除明显的误报并确认明显的真阳性，将真正模棱两可的案例留给人工审查，并提供完整的证据包。 使用 [Agent Skills]((https://agentskills.io/)) 开放标准构...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：MIT",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@amir-fadavi/skill/screening-alert-adjudication"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "MIT",
      "en",
      "screening",
      "alert"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@amir-fadavi/skill/screening-alert-adjudication",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/079-amir-fadavi-screening-alert-adjudication.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/079-amir-fadavi-screening-alert-adjudication.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/079-amir-fadavi-screening-alert-adjudication.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-nist-ai-rmf-080",
    "name": "NIST AI RMF",
    "chineseName": "NIST AI RMF",
    "owner": "Lawve / Rafal Fryc",
    "practice": "监管合规",
    "jurisdiction": "US",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-19",
    "usage": 81,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "NIST 人工智能风险管理框架 — Claude Skill 将 **NIST AI 风险管理框架**（NIST AI 100-1 + NIST AI 600-1 生成式 AI 配置文件）应用于特定的 AI 系统、治理问题或影响评估 - 逐字引用已发布的 NIST 文本中的子类别 (`GOVERN 1.1`) 和...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：MIT",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@rafal-fryc/skill/nist-ai-rmf"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "MIT",
      "en",
      "NIST",
      "RMF"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@rafal-fryc/skill/nist-ai-rmf",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/080-rafal-fryc-nist-ai-rmf.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/080-rafal-fryc-nist-ai-rmf.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/080-rafal-fryc-nist-ai-rmf.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-originality-in-european-copyright-081",
    "name": "Originality In European Copyright",
    "chineseName": "欧洲版权独创性",
    "owner": "Lawve / Joris Deene",
    "practice": "知识产权",
    "jurisdiction": "EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-19",
    "usage": 324,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "欧洲版权原创性 — 构建状态 > **版本 1.0** — 欧盟版权法中原创性和作品概念测试的技能，基于欧盟法院的判例法。 当前版本 **v1.0** — 首次公开发布。整合**欧盟原创性法定协调框架**：逐字引用明确涉及原创性的四项指令条款 - 第 1 条。 1(3) 指令 2009/24/EC（计算机程序），...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@joris-deene/skill/originality-in-european-copyright"
    ],
    "tags": [
      "知识产权",
      "intellectual-property",
      "AGPL 3.0",
      "en",
      "Originality",
      "European"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@joris-deene/skill/originality-in-european-copyright",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/081-joris-deene-originality-in-european-copyright.md",
    "externalCategory": "intellectual-property",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/081-joris-deene-originality-in-european-copyright.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/081-joris-deene-originality-in-european-copyright.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-billable-time-082",
    "name": "Billable Time",
    "chineseName": "计费时间",
    "owner": "Lawve / Stephane Boghossian",
    "practice": "法律运营",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-05-19",
    "usage": 105,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "当您的酒吧询问“告诉我您如何对人工智能辅助工作进行计费”时（ABA 512、佛罗里达州 24-1、加利福尼亚州、纽约州和华盛顿特区都提出了意见），您需要一件能够通过审核的工件。可计费时间产生它。 它会从您的 Claude Code 会话日志中起草可审查的时间条目以及可打印的 HTML 审核数据包，其中包含：SHA...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@stephane-boghossian/skill/billable-time"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "AGPL 3.0",
      "en",
      "Billable",
      "Time"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@stephane-boghossian/skill/billable-time",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/082-stephane-boghossian-billable-time.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/082-stephane-boghossian-billable-time.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/082-stephane-boghossian-billable-time.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-employment-law-research-083",
    "name": "Employment Law Research",
    "chineseName": "劳动法研究",
    "owner": "Lawve / Yue Deng-Wu",
    "practice": "法律研究",
    "jurisdiction": "US",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-18",
    "usage": 98,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "该技能为美国就业法的一个领域创建了一份研究简报。该简报可以解决特定问题，也可以是多州调查。它将包括对主要来源（例如法规、规则、政府指导）的引用，以及信誉良好的二手来源，例如来自顶级律师事务所的客户警报和多州调查以及来自法律出版物（例如《国家法律评论》）的文章。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@yue-deng-wu-iwmqplig/skill/employment-law-research"
    ],
    "tags": [
      "法律研究",
      "legal-research",
      "AGPL 3.0",
      "en",
      "Employment",
      "Law"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@yue-deng-wu-iwmqplig/skill/employment-law-research",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/083-yue-deng-wu-iwmqplig-employment-law-research.md",
    "externalCategory": "legal-research",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/083-yue-deng-wu-iwmqplig-employment-law-research.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/083-yue-deng-wu-iwmqplig-employment-law-research.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-contract-risk-analyzer-084",
    "name": "Contract Risk Analyzer",
    "chineseName": "合同风险分析器",
    "owner": "Lawve / Sneha Ganapavarapu",
    "practice": "商业合同",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-05-17",
    "usage": 195,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "合同风险分析器 一项实用的合同分析技能，专为未经法律培训的创始人和早期公司而设计。 该技能的作用 分析合同中影响交易成败的五个关键条款： - **责任限制** — 财务风险上限 - **赔偿** — 如果出现问题谁来支付 - **IP 所有权** — 谁拥有您所创建的内容 - **数据保护** — 法律数据处理义...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：CC BY 4.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@sneha-ganapavarapu/skill/contract-risk-analyzer"
    ],
    "tags": [
      "商业合同",
      "commercial-law",
      "CC BY 4.0",
      "en",
      "Contract",
      "Risk"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@sneha-ganapavarapu/skill/contract-risk-analyzer",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/084-sneha-ganapavarapu-contract-risk-analyzer.md",
    "externalCategory": "commercial-law",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/084-sneha-ganapavarapu-contract-risk-analyzer.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/084-sneha-ganapavarapu-contract-risk-analyzer.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-swiss-legal-source-and-authority-triage-085",
    "name": "swiss-legal-source-and-authority-triage",
    "chineseName": "瑞士法律来源和权威分类",
    "owner": "Lawve / Enrique G. Zbinden",
    "practice": "法律研究",
    "jurisdiction": "CH",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-16",
    "usage": 83,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "瑞士法律来源和权威分类 瑞士合法来源路由的方法论技能。 这项技能可以帮助人工智能助手在给出合法答案之前识别正确的瑞士权威层。它重点关注源层次结构、联邦/州/社区路由、监管环境、寄存器、多语言/版本检查、不确定性标志和人工审核边界。 它被设计为后来瑞士法律特定技能的基础设施，例如瑞士合同审查接收、瑞士数据保护分类、...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：MIT",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@enrique-g-zbinden/skill/swiss-legal-source-and-authority-triage"
    ],
    "tags": [
      "法律研究",
      "legal-research",
      "MIT",
      "en",
      "swiss",
      "legal"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@enrique-g-zbinden/skill/swiss-legal-source-and-authority-triage",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/085-enrique-g-zbinden-swiss-legal-source-and-authority-triage.md",
    "externalCategory": "legal-research",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/085-enrique-g-zbinden-swiss-legal-source-and-authority-triage.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/085-enrique-g-zbinden-swiss-legal-source-and-authority-triage.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-connecticut-divorce-planner-086",
    "name": "Connecticut Divorce Planner",
    "chineseName": "康涅狄格州离婚策划师",
    "owner": "Lawve / Stephane Boghossian",
    "practice": "法律文书",
    "jurisdiction": "US",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-16",
    "usage": 52,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "克劳德的技能使克劳德成为康涅狄格州特有的离婚策划师——从飞行前接收到判决后修改的九种操作模式，以 Untangle.us 的功能界面为蓝本，并以 C.G.S. 为基础。标题 46b、练习手册第 25 章和 2026 年 8 月 1 日 CCSG 时间表。涵盖资格分类（§ 46b-44a 下的非对抗性与标准）、财务...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@stephane-boghossian/skill/connecticut-divorce-planner"
    ],
    "tags": [
      "法律文书",
      "legal-drafting",
      "AGPL 3.0",
      "en",
      "Connecticut",
      "Divorce"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@stephane-boghossian/skill/connecticut-divorce-planner",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/086-stephane-boghossian-connecticut-divorce-planner.md",
    "externalCategory": "legal-drafting",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/086-stephane-boghossian-connecticut-divorce-planner.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/086-stephane-boghossian-connecticut-divorce-planner.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-eu-ai-act-system-classifier-087",
    "name": "EU AI Act System Classifier",
    "chineseName": "欧盟人工智能法案系统分类器",
    "owner": "Lawve / Werner Plutat",
    "practice": "监管合规",
    "jurisdiction": "EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-15",
    "usage": 255,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "根据《欧盟人工智能法案》（法规 (EU) 2024/1689）对人工智能系统进行分类，并映射随后的合规义务。行走艺术。 2 范围排除，艺术。 3(1) 人工智能系统定义（7 标准测试），Art. 3(1) 5 禁止做法筛选，附件一和附件三高风险评估同Art.5。 6(3) 狭义程序例外，艺术。 51-56 GPA...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@werner-plutat/skill/eu-ai-act-system-classifier"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "en",
      "Act",
      "System"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@werner-plutat/skill/eu-ai-act-system-classifier",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/087-werner-plutat-eu-ai-act-system-classifier.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/087-werner-plutat-eu-ai-act-system-classifier.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/087-werner-plutat-eu-ai-act-system-classifier.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-customs-trade-law-088",
    "name": "Customs Trade Law",
    "chineseName": "海关贸易法",
    "owner": "Lawve / Onur Kafkas",
    "practice": "国际法与人权",
    "jurisdiction": "US",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-14",
    "usage": 112,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "海关贸易法 用于美国海关分类和贸易法研究的克劳德代码代理技能。 它有助于为 HTSUS 分类、CROSS 裁决研究、CIT/CAFC 决策简报、职责汇编、原产国分析、第 99 章筛选、AD/CVD 问题发现、PGA 审查和 UFLPA 强迫劳动检查准备可供律师审查的工作产品草案。 > 仅草案工作产品。不是法律建议...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@onur-kafkas/skill/customs-trade-law"
    ],
    "tags": [
      "国际法与人权",
      "international-law",
      "AGPL 3.0",
      "en",
      "Customs",
      "Trade"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@onur-kafkas/skill/customs-trade-law",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/088-onur-kafkas-customs-trade-law.md",
    "externalCategory": "international-law",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/088-onur-kafkas-customs-trade-law.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/088-onur-kafkas-customs-trade-law.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-litigation-deadline-calendar-089",
    "name": "litigation-deadline-calendar",
    "chineseName": "诉讼截止日期日历",
    "owner": "Lawve / Dave Marcus",
    "practice": "争议解决",
    "jurisdiction": "US",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-14",
    "usage": 112,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "诉讼截止日期日历 用于根据调度命令安排诉讼和仲裁截止日期的插件。 它的作用 上传调度订单 PDF，该插件将： 1.询问您的管辖权或仲裁地（绝不会假设） 2. 解析订单并提取所有关键日期 3. 验证适用的程序规则是否仍然有效，并提供源 URL，以便您可以自行检查 4. 计算向后的最后期限（提供发现、专家披露、动议响...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：MIT",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@dave-marcus/skill/litigation-deadline-calendar"
    ],
    "tags": [
      "争议解决",
      "litigation",
      "MIT",
      "en",
      "deadline",
      "calendar"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@dave-marcus/skill/litigation-deadline-calendar",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/089-dave-marcus-litigation-deadline-calendar.md",
    "externalCategory": "litigation",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/089-dave-marcus-litigation-deadline-calendar.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/089-dave-marcus-litigation-deadline-calendar.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-legal-design-assessment-090",
    "name": "Legal Design Assessment",
    "chineseName": "法律设计评估",
    "owner": "Lawve / Mirza Chiragov",
    "practice": "法律文书",
    "jurisdiction": "EU / US / UK",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-14",
    "usage": 226,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "根据法律设计原则审核法律文件。根据六个支柱对文件进行评分：语言模式（官僚语、古语、被动语态、名词化）、可读性（Flesch Reading Ease 和特定于语言的等效项）、结构和导航、隐藏条件（隐藏在标题之外的实质性义务）、法定重复（重述法律而不是引用法律）以及可用布局的视觉层次结构。仅评估；不重写文档。适用于...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：CC BY 4.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@mirza-chiragov/skill/legal-design-assessment"
    ],
    "tags": [
      "法律文书",
      "legal-drafting",
      "CC BY 4.0",
      "en",
      "Legal",
      "Design"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@mirza-chiragov/skill/legal-design-assessment",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/090-mirza-chiragov-legal-design-assessment.md",
    "externalCategory": "legal-drafting",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/090-mirza-chiragov-legal-design-assessment.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/090-mirza-chiragov-legal-design-assessment.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-source-locked-verification-091",
    "name": "Source Locked Verification",
    "chineseName": "源锁定验证",
    "owner": "Lawve / Larissa Meredith-Flister",
    "practice": "法律文书",
    "jurisdiction": "UK",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-05-13",
    "usage": 410,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "迫使 Claude 仅根据用户提供的材料和其实际访问过的在线资源进行回答。没有推论，没有假设，没有填补空白。每项事实、法律、数字或程序主张都必须锚定于引用的来源，并将陈述分类为明确陈述、在线验证、支持、未找到或标记的推论。专为法律和证据工作而设计，其中对记录的忠实度比完整性更重要。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@larissa-meredith-flister/skill/source-locked-verification"
    ],
    "tags": [
      "法律文书",
      "legal-drafting",
      "AGPL 3.0",
      "en",
      "Source",
      "Locked"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@larissa-meredith-flister/skill/source-locked-verification",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/091-larissa-meredith-flister-source-locked-verification.md",
    "externalCategory": "legal-drafting",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/091-larissa-meredith-flister-source-locked-verification.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/091-larissa-meredith-flister-source-locked-verification.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-argentine-supreme-court-analysis-092",
    "name": "argentine-supreme-court-analysis",
    "chineseName": "阿根廷最高法院分析",
    "owner": "Lawve / Ignacio Adrián Lerer",
    "practice": "监管合规",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-13",
    "usage": 60,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "基于 PageRank 的阿根廷判例法司法权威分析（CSJN，联邦法院）。同行评审的方法发表于 JCLLT (DOI: 10.47852/bonviewJCLLT62027951)。按引用网络影响力随时间衰减对先例进行排名。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：CC BY 4.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@adrian-lerer/skill/argentine-supreme-court-analysis"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "CC BY 4.0",
      "en",
      "argentine",
      "supreme"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@adrian-lerer/skill/argentine-supreme-court-analysis",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/092-adrian-lerer-argentine-supreme-court-analysis.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/092-adrian-lerer-argentine-supreme-court-analysis.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/092-adrian-lerer-argentine-supreme-court-analysis.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-azerbaijan-eu-website-privacy-compliance-audit-093",
    "name": "Azerbaijan + EU Website Privacy Compliance Audit",
    "chineseName": "阿塞拜疆+欧盟网站隐私合规审计",
    "owner": "Lawve / Mirza Chiragov",
    "practice": "科技与知识产权",
    "jurisdiction": "AZ / EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-13",
    "usage": 99,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "审核网站是否遵守阿塞拜疆个人数据法第 998-IIIQ 号以及适用的欧盟 GDPR 和 ePrivacy/cookie 同意规则。清点现有的隐私文件（隐私政策、Cookie 政策、Cookie 横幅、同意流程、控制者和 DPO 联系方式、数据主体权利渠道、跨境传输披露、AZ 运营商注册参考），并根据适用的法定要求...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：CC BY 4.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@mirza-chiragov/skill/azerbaijan-eu-website-privacy-compliance-audit"
    ],
    "tags": [
      "科技与知识产权",
      "technology-law",
      "CC BY 4.0",
      "en",
      "Azerbaijan",
      "Website"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@mirza-chiragov/skill/azerbaijan-eu-website-privacy-compliance-audit",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/093-mirza-chiragov-azerbaijan-eu-website-privacy-compliance-audit.md",
    "externalCategory": "technology-law",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/093-mirza-chiragov-azerbaijan-eu-website-privacy-compliance-audit.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/093-mirza-chiragov-azerbaijan-eu-website-privacy-compliance-audit.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-new-sanctions-designation-screening-test-094",
    "name": "new-sanctions-designation-screening-test",
    "chineseName": "新制裁指定筛选测试",
    "owner": "Lawve / Amir Fadavi",
    "practice": "监管合规",
    "jurisdiction": "US / UK / EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-13",
    "usage": 93,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "新指定筛选测试 克劳德的一项技能，可以将 OFAC、OFSI 和欧盟的每一轮新制裁指定转变为供分析师审查的筛选测试集——原始名称、故意的变化以及分析师解释命中和未命中所需的元数据。 它的作用 当被调用时，该技能： 1. 在选定的回溯窗口（默认值：过去 7 天）内从 OFAC 的近期行动、OFSI 综合名单/通知以...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：MIT",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@amir-fadavi/skill/new-sanctions-designation-screening-test"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "MIT",
      "en",
      "new",
      "sanctions"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@amir-fadavi/skill/new-sanctions-designation-screening-test",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/094-amir-fadavi-new-sanctions-designation-screening-test.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/094-amir-fadavi-new-sanctions-designation-screening-test.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/094-amir-fadavi-new-sanctions-designation-screening-test.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-serious-incident-reporting-eu-ai-act-article-73-095",
    "name": "Serious Incident Reporting - EU AI Act Article 73",
    "chineseName": "严重事件报告 - 欧盟人工智能法第 73 条",
    "owner": "Lawve / Werner Plutat",
    "practice": "监管合规",
    "jurisdiction": "EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-13",
    "usage": 1,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "根据《欧盟人工智能法》（条例 (EU) 2024/1689）第 73 条，针对高风险人工智能系统进行严重事件报告 (SIR)。评估、资格、起草和提交艺术。 73 项 SIR 通知涵盖四项艺术。 3(49) 伤害类别（死亡或严重健康损害、关键基础设施破坏、侵犯基本权利、财产或环境损害）。涵盖艺术。 73 立即、2/...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@werner-plutat/skill/serious-incident-reporting-eu-ai-act-article-73"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "en",
      "Serious",
      "Incident"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@werner-plutat/skill/serious-incident-reporting-eu-ai-act-article-73",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/095-werner-plutat-serious-incident-reporting-eu-ai-act-article-73.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/095-werner-plutat-serious-incident-reporting-eu-ai-act-article-73.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/095-werner-plutat-serious-incident-reporting-eu-ai-act-article-73.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-gpai-code-of-practice-compliance-096",
    "name": "GPAI Code of Practice Compliance",
    "chineseName": "GPAI 实践守则合规性",
    "owner": "Lawve / Werner Plutat",
    "practice": "监管合规",
    "jurisdiction": "EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-13",
    "usage": 8,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "评估《人工智能法》（条例 (EU) 2024/1689）第 51-56 条中欧盟通用人工智能 (GPAI) 实践守则的遵守情况。涵盖 GPAI 模型识别（第 3(63) 条）、系统性风险模型指定（第 3(65) 条、第 51 条、10^25 FLOP 训练计算阈值）、第 3(63) 条规定的上游提供商义务。 53...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@werner-plutat/skill/gpai-code-of-practice-compliance"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "en",
      "GPAI",
      "Code"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@werner-plutat/skill/gpai-code-of-practice-compliance",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/096-werner-plutat-gpai-code-of-practice-compliance.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/096-werner-plutat-gpai-code-of-practice-compliance.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/096-werner-plutat-gpai-code-of-practice-compliance.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-flash-case-law-research-097",
    "name": "flash-case-law-research",
    "chineseName": "快速判例法研究",
    "owner": "Lawve / Giovanna Panucci",
    "practice": "法律研究",
    "jurisdiction": "IT",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-05-12",
    "usage": 424,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "快速意大利判例法研究产生了特定法律主题的初步定位框架。在 Corte di Cassazione、TAR、Consiglio di Stato 和意大利法律数据库（DeJure、Italgiure）中搜索相关裁决，总结现行的法理学方向，标记相互冲突的决定，并提出意见或策略的操作影响。输出是结构化的起点概要，而不是...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@giovanna-panucci/skill/flash-case-law-research"
    ],
    "tags": [
      "法律研究",
      "legal-research",
      "AGPL 3.0",
      "it",
      "flash",
      "case"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@giovanna-panucci/skill/flash-case-law-research",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/097-giovanna-panucci-flash-case-law-research.md",
    "externalCategory": "legal-research",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/097-giovanna-panucci-flash-case-law-research.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/097-giovanna-panucci-flash-case-law-research.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-yc-saas-drafter-098",
    "name": "YC SaaS Drafter",
    "chineseName": "YC SaaS 起草者",
    "owner": "Lawve / Victor Wang",
    "practice": "商业合同",
    "jurisdiction": "US",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-12",
    "usage": 97,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "YC SaaS 绘图技巧 克劳德技能，从 Y Combinator 标准表单 SaaS 模板开始起草定制的**客户协议**。进行结构化接收，应用 18 个始终开启的默认值，将原始 YC 表格转变为专业起点，根据交易处理 12 个有条件决策，并输出一个干净的“.docx”以及一份面向律师的备忘录，解释每项更改。 专...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：MIT",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@victor-wang/skill/yc-saas-drafter"
    ],
    "tags": [
      "商业合同",
      "commercial-law",
      "MIT",
      "en",
      "SaaS",
      "Drafter"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@victor-wang/skill/yc-saas-drafter",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/098-victor-wang-yc-saas-drafter.md",
    "externalCategory": "commercial-law",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/098-victor-wang-yc-saas-drafter.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/098-victor-wang-yc-saas-drafter.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-eu-data-act-099",
    "name": "EU Data Act",
    "chineseName": "欧盟数据法",
    "owner": "Lawve / Ryan Malek",
    "practice": "监管合规",
    "jurisdiction": "EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-12",
    "usage": 77,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "欧盟数据法案技能 为就欧盟数据法案提供咨询的律师提供面向工作流程的技能 （条例（欧盟）2023/2854）。 该技能可在五个工作流程中生成律师风格的 Word 输出 - 分类、起草、查找、分析和审核——逐字引用 来自捆绑源文本（法规 2023/2854 和 EC FAQ v1.4）以及 指出委员会的示范合同条款（...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@ryan-malek/skill/eu-data-act"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "en",
      "Data",
      "Act"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@ryan-malek/skill/eu-data-act",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/099-oliver-schmidt-prietz-eu-data-act.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/099-oliver-schmidt-prietz-eu-data-act.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/099-oliver-schmidt-prietz-eu-data-act.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-oral-argument-100",
    "name": "Oral Argument",
    "chineseName": "口头辩论",
    "owner": "Lawve / Stephane Boghossian",
    "practice": "法律运营",
    "jurisdiction": "US",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-12",
    "usage": 103,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "法庭准备技能以 Neal Katyal 2025 年 11 月 SCOTUS 关税论点和他的 AI 陪审伙伴“Harvey”为模型。五个阶段​​：（1）根据先前的意见、问题、同意和异议来描述每个决策者——表明他们的理论承诺和制度关注； (2) 预测替补席——每位法官提出 3-7 个可能的问题，每个问题背后都有担忧...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@stephane-boghossian/skill/oral-argument"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "AGPL 3.0",
      "en",
      "Oral",
      "Argument"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@stephane-boghossian/skill/oral-argument",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/100-stephane-boghossian-oral-argument.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/100-stephane-boghossian-oral-argument.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/100-stephane-boghossian-oral-argument.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-skill-security-auditor-101",
    "name": "skill-security-auditor",
    "chineseName": "技能安全审核员",
    "owner": "Lawve / Lawve",
    "practice": "Skill 构建",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "low",
    "version": "open-source",
    "updated": "2026-05-12",
    "usage": 142,
    "rating": 4.1,
    "reviewScore": 86,
    "description": "在安装之前审核 AI 代理技能。每当用户要添加、安装、启用或评估不熟悉的技能时主动使用 - 包括“审核此技能”、“此技能安全吗”、“安装前扫描技能”、“检查技能是否有恶意代码”、“查看此插件”或不受信任的第三方或社区分发的技能包上的任何预安装门等短语。运行十类静态检查（代码执行、网络渗透、凭证收集、持久性、提示注...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@lawve/skill/skill-security-auditor"
    ],
    "tags": [
      "Skill 构建",
      "skill-authoring",
      "AGPL 3.0",
      "en",
      "skill",
      "security"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@lawve/skill/skill-security-auditor",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/101-lawve-skill-security-auditor.md",
    "externalCategory": "skill-authoring",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/101-lawve-skill-security-auditor.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/101-lawve-skill-security-auditor.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-statute-analyzer-102",
    "name": "Statute Analyzer",
    "chineseName": "法规分析器",
    "owner": "Lawve / Rafal Fryc",
    "practice": "法律研究",
    "jurisdiction": "US",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-11",
    "usage": 9,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "在法律和合规环境中阅读、解释和应用法规、法规和规则的指南。当用户询问以下问题时使用：(1) 如何阅读和解释法规、条例或规则，(2) 法规解释方法和解释规范，(3) 了解立法意图，(4) 将法规应用于特定法律情况，(5) 从法律文本中提取要求，(6) 区分不同类型的法律要求，或 (7) 跨司法管辖区合规性分析。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@rafal-fryc/skill/statute-analyzer"
    ],
    "tags": [
      "法律研究",
      "legal-research",
      "AGPL 3.0",
      "en",
      "Statute",
      "Analyzer"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@rafal-fryc/skill/statute-analyzer",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/102-rafal-fryc-statute-analyzer.md",
    "externalCategory": "legal-research",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/102-rafal-fryc-statute-analyzer.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/102-rafal-fryc-statute-analyzer.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-whistleblower-policy-advisor-103",
    "name": "Whistleblower Policy Advisor",
    "chineseName": "举报人政策顾问",
    "owner": "Lawve / Malik Taiar",
    "practice": "监管合规",
    "jurisdiction": "EU / FR",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-11",
    "usage": 6,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "(a) 审核现有举报系统或 (b) 根据提供的模板起草合规报告政策的指南。涵盖欧盟指令 2019/1937、修订后的 Sapin II 法 (Waserman 2022)、法令 2022-1284、CNIL 指南、公共部门要求和警惕义务。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@malik-taiar/skill/whistleblower-policy-advisor"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "fr",
      "Whistleblower",
      "Policy"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@malik-taiar/skill/whistleblower-policy-advisor",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/103-malik-taiar-whistleblower-policy-advisor.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/103-malik-taiar-whistleblower-policy-advisor.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/103-malik-taiar-whistleblower-policy-advisor.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-privacy-policy-generator-104",
    "name": "Privacy Policy Generator",
    "chineseName": "隐私政策生成器",
    "owner": "Lawve / Malik Taiar",
    "practice": "数据保护",
    "jurisdiction": "EU / FR",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-11",
    "usage": 21,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "起草符合 GDPR 的隐私政策指南。包括 CNIL 2020 建议、参考模板和最佳实践。在起草或修改网站或应用程序的隐私政策时使用。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@malik-taiar/skill/privacy-policy-generator"
    ],
    "tags": [
      "数据保护",
      "data-protection",
      "AGPL 3.0",
      "fr",
      "Privacy",
      "Policy"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@malik-taiar/skill/privacy-policy-generator",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/104-malik-taiar-privacy-policy-generator.md",
    "externalCategory": "data-protection",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/104-malik-taiar-privacy-policy-generator.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/104-malik-taiar-privacy-policy-generator.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-outlook-105",
    "name": "Outlook",
    "chineseName": "前景",
    "owner": "Lawve / Malik Taiar",
    "practice": "办公自动化",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "low",
    "version": "open-source",
    "updated": "2026-05-11",
    "usage": 4,
    "rating": 4.1,
    "reviewScore": 86,
    "description": "通过 OAuth2 从 Microsoft Outlook 阅读、搜索和下载电子邮件和附件。当用户要求检查、阅读或获取电子邮件、按关键字或发件人搜索、下载附件或将电子邮件内容链接到其他技能时使用。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@malik-taiar/skill/outlook"
    ],
    "tags": [
      "办公自动化",
      "microsoft-office",
      "AGPL 3.0",
      "en",
      "Outlook"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@malik-taiar/skill/outlook",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/105-malik-taiar-outlook.md",
    "externalCategory": "microsoft-office",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/105-malik-taiar-outlook.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/105-malik-taiar-outlook.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-self-improvement-106",
    "name": "Self-Improvement",
    "chineseName": "自我提升",
    "owner": "Lawve / Malik Taiar",
    "practice": "Skill 构建",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-05-11",
    "usage": 784,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "自我提升技能 一个自我改进的技能系统，可以分析您的工作过程并提出其他技能的改进建议。 命令 | Command | Description | |---------|-------------| | `self-improve` | Analyze current session and propose skil...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@malik-taiar/skill/self-improvement"
    ],
    "tags": [
      "Skill 构建",
      "skill-authoring",
      "AGPL 3.0",
      "en",
      "Self",
      "Improvement"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@malik-taiar/skill/self-improvement",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/106-malik-taiar-self-improvement.md",
    "externalCategory": "skill-authoring",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/106-malik-taiar-self-improvement.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/106-malik-taiar-self-improvement.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-cookie-policy-generator-107",
    "name": "Cookie Policy Generator",
    "chineseName": "Cookie 策略生成器",
    "owner": "Lawve / Malik Taiar",
    "practice": "数据保护",
    "jurisdiction": "EU / FR",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-11",
    "usage": 20,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "起草符合 GDPR 和 ePrivacy Directive 的 cookie 政策的指南。包括 CNIL 2020 建议、参考模板和最佳实践。在起草或修改网站或应用程序的 cookie 政策时使用。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@malik-taiar/skill/cookie-policy-generator"
    ],
    "tags": [
      "数据保护",
      "data-protection",
      "AGPL 3.0",
      "fr",
      "Cookie",
      "Policy"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@malik-taiar/skill/cookie-policy-generator",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/107-malik-taiar-cookie-policy-generator.md",
    "externalCategory": "data-protection",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/107-malik-taiar-cookie-policy-generator.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/107-malik-taiar-cookie-policy-generator.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-nda-reviewer-108",
    "name": "nda-reviewer",
    "chineseName": "nda-审稿人",
    "owner": "Lawve / Jamie Tso",
    "practice": "商业合同",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-05-11",
    "usage": 168,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "从接收者或披露者的角度（用户选择）以与司法管辖区无关的方式审查传入的单向（单方面）商业保密协议，生成包含首选红线、后备方案、理由、所有者和截止日期的逐条款问题日志。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@jamie-tso/skill/nda-reviewer"
    ],
    "tags": [
      "商业合同",
      "commercial-law",
      "AGPL 3.0",
      "en",
      "nda",
      "reviewer"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@jamie-tso/skill/nda-reviewer",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/108-jamie-tso-nda-reviewer.md",
    "externalCategory": "commercial-law",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/108-jamie-tso-nda-reviewer.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/108-jamie-tso-nda-reviewer.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-raisonnement-juridique-109",
    "name": "raisonnement-juridique",
    "chineseName": "法律理由",
    "owner": "Lawve / Amaury Fouret",
    "practice": "法律研究",
    "jurisdiction": "FR",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-11",
    "usage": 537,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "模拟法国法官分析民事案件时的法律推理。使用此技能来分析争议并识别法律问题，构建结构化的法律论证（三段论），起草民事判决的推理，通过 Judilibre 和 Légifrance 搜索适用的判例法和法规，从法律上描述事实和行为，并区分主张、理由和论点。基于起草民事判决的方法指南（ENM/最高法院，2023 年）。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：MIT",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@amaury-fouret/skill/raisonnement-juridique"
    ],
    "tags": [
      "法律研究",
      "legal-research",
      "MIT",
      "fr",
      "raisonnement",
      "juridique"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@amaury-fouret/skill/raisonnement-juridique",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/109-amaury-fouret-raisonnement-juridique.md",
    "externalCategory": "legal-research",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/109-amaury-fouret-raisonnement-juridique.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/109-amaury-fouret-raisonnement-juridique.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-multi-jurisdictional-research-110",
    "name": "Multi Jurisdictional Research",
    "chineseName": "多司法管辖区研究",
    "owner": "Lawve / Zacharie Laïk",
    "practice": "法律研究",
    "jurisdiction": "INT / UK / EU / CH / DE",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-08",
    "usage": 5,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "使用 Legal Data Hunter MCP 进行多司法管辖区的法律研究和风险评估（40 多个国家/地区，超过 1300 万份文件）。当用户询问多个国家/地区的法律、比较法、跨境监管分析或任何欧洲或其他涵盖的司法管辖区的判例法/立法时使用。触发管辖权比较、跨境风险、多国合规性、跨成员国的 GDPR 执行或 L...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：MIT",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@zacharie-laik/skill/multi-jurisdictional-research"
    ],
    "tags": [
      "法律研究",
      "legal-research",
      "MIT",
      "en",
      "Multi",
      "Jurisdictional"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@zacharie-laik/skill/multi-jurisdictional-research",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/110-zacharie-laik-multi-jurisdictional-research.md",
    "externalCategory": "legal-research",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/110-zacharie-laik-multi-jurisdictional-research.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/110-zacharie-laik-multi-jurisdictional-research.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-legal-guidance-vault-111",
    "name": "Legal Guidance Vault",
    "chineseName": "法律指导库",
    "owner": "Lawve / Michael Cremata",
    "practice": "法律运营",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-05-07",
    "usage": 118,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "这是什么？ 法律库是克劳德的一项技能，无论发生在哪里，它都能对您提供的法律指导产生长期记忆。在任何会议、Slack 线程、电子邮件或 Google 文档之后，您都可以要求 Claude 将其存档。克劳德提取法律相关内容，生成简短的结构化摘要并保存。在存储任何内容之前，您先进行检查并确认。 从那时起，您可以要求 C...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@michael-cremata/skill/legal-guidance-vault"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "AGPL 3.0",
      "en",
      "Legal",
      "Guidance"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@michael-cremata/skill/legal-guidance-vault",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/111-michael-cremata-legal-guidance-vault.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/111-michael-cremata-legal-guidance-vault.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/111-michael-cremata-legal-guidance-vault.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-privilege-sentinel-112",
    "name": "privilege-sentinel",
    "chineseName": "特权哨兵",
    "owner": "Lawve / Emily Cabrera",
    "practice": "监管合规",
    "jurisdiction": "US",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-07",
    "usage": 99,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "飞行前特权和工作产品检查是否有合法的人工智能提示。当用户即将向第三方 AI 界面发送合法内容并想知道提示是否存在破坏律师-委托人特权或工作产品保护的风险时使用。返回包含引用因素、发现影响线和编辑安全重写的安全/警告/停止范围。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@emily-cabrera/skill/privilege-sentinel"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "en",
      "privilege",
      "sentinel"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@emily-cabrera/skill/privilege-sentinel",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/112-emily-cabrera-privilege-sentinel.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/112-emily-cabrera-privilege-sentinel.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/112-emily-cabrera-privilege-sentinel.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-humaniseur-juridique-113",
    "name": "humaniseur-juridique",
    "chineseName": "人道主义法",
    "owner": "Lawve / Gary Haas",
    "practice": "法律文书",
    "jurisdiction": "FR / AD / CH / BE / MC",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-06",
    "usage": 176,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "律师抄写 技能（克劳德代码 / 光标）是法国法律文本中的痕迹 d’écriture IA，pour un ton naturel et professionalnel。 安装 推荐（克隆技能清单） **克劳德代码：** ```bash mkdir -p ~/.claude/skills git clone htt...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：MIT",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@gary-haas/skill/humaniseur-juridique"
    ],
    "tags": [
      "法律文书",
      "legal-drafting",
      "MIT",
      "fr",
      "humaniseur",
      "juridique"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@gary-haas/skill/humaniseur-juridique",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/113-gary-haas-humaniseur-juridique.md",
    "externalCategory": "legal-drafting",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/113-gary-haas-humaniseur-juridique.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/113-gary-haas-humaniseur-juridique.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-website-gdpr-compliance-audit-114",
    "name": "website-gdpr-compliance-audit",
    "chineseName": "网站 GDPR 合规性审核",
    "owner": "Lawve / Hugo Salard",
    "practice": "数据保护",
    "jurisdiction": "EU / FR",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-05",
    "usage": 191,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "GDPR 从业者/DPO 对网站进行 GDPR 合规性审计。使用 10 部分清单进行系统评估：法律声明、托管提供商、表格、时事通讯、隐私政策、cookie、密码、跟踪器、处理器和欧盟以外的传输、数据主体权利的可访问性，以及涵盖 GDPR 第 13/14 条的 22 项附录。 生成结构化报告（Markdown，可选...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@hugo-salard/skill/website-gdpr-compliance-audit"
    ],
    "tags": [
      "数据保护",
      "data-protection",
      "AGPL 3.0",
      "fr",
      "website",
      "gdpr"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@hugo-salard/skill/website-gdpr-compliance-audit",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/114-hugo-salard-website-gdpr-compliance-audit.md",
    "externalCategory": "data-protection",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/114-hugo-salard-website-gdpr-compliance-audit.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/114-hugo-salard-website-gdpr-compliance-audit.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-supplier-dpa-gdpr-analysis-115",
    "name": "supplier-dpa-gdpr-analysis",
    "chineseName": "供应商-DPA-GDPR-分析",
    "owner": "Lawve / Hugo Salard",
    "practice": "数据保护",
    "jurisdiction": "EU / FR / BE / LU / CH",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-05",
    "usage": 210,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "根据 GDPR 第 28 条、EDPB 指南 07/2020 和 02/2024、2021 年标准合同条款以及法规 (EU) 2024/1689 对数据处理协议 (DPA) 进行系统分析。根据 18 项标准（13 项强制 + 5 项补充）生成结构化的逐条报告，其中包含 🟢/🟡/🔴、国际转移的详细分析（结构化...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@hugo-salard/skill/supplier-dpa-gdpr-analysis"
    ],
    "tags": [
      "数据保护",
      "data-protection",
      "AGPL 3.0",
      "fr",
      "supplier",
      "dpa"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@hugo-salard/skill/supplier-dpa-gdpr-analysis",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/115-hugo-salard-supplier-dpa-gdpr-analysis.md",
    "externalCategory": "data-protection",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/115-hugo-salard-supplier-dpa-gdpr-analysis.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/115-hugo-salard-supplier-dpa-gdpr-analysis.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-vs-code-extension-116",
    "name": "vs-code-extension",
    "chineseName": "vs 代码扩展",
    "owner": "Lawve / Antoine Louis",
    "practice": "技术实验",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-05-05",
    "usage": 448,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "从头开始构建 VS Code 扩展或转换现有的 JS/React/Vue 应用程序。通过文件桥 IPC 支持命令、Web 视图 (React/Vue)、自定义编辑器、树视图和 AI 代理集成。当用户想要创建 VS Code 扩展、将 Web 应用程序转换为扩展、向 VS Code 添加 Web 视图或自定义 UI...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@antoine-louis/skill/vs-code-extension"
    ],
    "tags": [
      "技术实验",
      "vibe-coding",
      "AGPL 3.0",
      "en",
      "code",
      "extension"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@antoine-louis/skill/vs-code-extension",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/116-antoine-louis-vs-code-extension.md",
    "externalCategory": "vibe-coding",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/116-antoine-louis-vs-code-extension.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/116-antoine-louis-vs-code-extension.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-legal-test-builder-117",
    "name": "Legal Test Builder",
    "chineseName": "法律测试生成器",
    "owner": "Lawve / Patrick Munro",
    "practice": "法律培训",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-05",
    "usage": 238,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "将高保真交互式法律评估构建为单个独立的 HTML 工件。输出包括实时倒计时器、带有悬停注释问题条款的合同审查任务、候选答案文本区域、隐藏在显示块后面的模型答案、基于场景的法律备忘录任务、策略和功能构建问题以及对评分标准进行编码的预提交清单。当用户需要（1）通过现实的定时练习评估法律候选人，（2）使用问题集而不是理...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@patrick-munro/skill/legal-test-builder"
    ],
    "tags": [
      "法律培训",
      "legal-education",
      "AGPL 3.0",
      "en",
      "Legal",
      "Test"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@patrick-munro/skill/legal-test-builder",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/117-patrick-munro-legal-test-builder.md",
    "externalCategory": "legal-education",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/117-patrick-munro-legal-test-builder.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/117-patrick-munro-legal-test-builder.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-fundamental-rights-impact-assessment-eu-ai-act-art-27-118",
    "name": "Fundamental Rights Impact Assessment - EU AI Act Art. 27",
    "chineseName": "基本权利影响评估 - 欧盟人工智能法案艺术。 27",
    "owner": "Lawve / Werner Plutat",
    "practice": "监管合规",
    "jurisdiction": "EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-04",
    "usage": 329,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "评估欧盟人工智能法案第 27 条是否需要进行基本权利影响评估 (FRIA)，并针对特定的高风险人工智能部署构建或起草该评估。涵盖部署者范围门控（提供公共服务的公共机构和私人实体）、受影响群体映射、章程权利分析、相称性、保障评估、残余风险、DPIA/FRIA 互动、第 27(3) 条下的通知以及 DACH 特定考虑...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@werner-plutat/skill/fundamental-rights-impact-assessment-eu-ai-act-art-27"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "en",
      "Fundamental",
      "Rights"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@werner-plutat/skill/fundamental-rights-impact-assessment-eu-ai-act-art-27",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/118-werner-plutat-fundamental-rights-impact-assessment-eu-ai-act-art-27.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/118-werner-plutat-fundamental-rights-impact-assessment-eu-ai-act-art-27.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/118-werner-plutat-fundamental-rights-impact-assessment-eu-ai-act-art-27.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-legitimate-interest-119",
    "name": "Legitimate Interest",
    "chineseName": "合法权益",
    "owner": "Lawve / Oliver Schmidt-Prietz",
    "practice": "数据保护",
    "jurisdiction": "EU / UK / FR / DE",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-04",
    "usage": 1,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "根据艺术进行结构化的合法利益评估（LIA）。 6(1)(f) GDPR 使用完整的 EDPB 三步测试 — 利益识别、严格必要性分析以及缓解的平衡测试。基于 EDPB 指南 1/2024、意见 28/2024（AI 模型）、CNIL 指南（2025 年 6 月）、ICO/DUA 法案 2025、CJEU 关键判决...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@oliver-schmidt-prietz/skill/legitimate-interest"
    ],
    "tags": [
      "数据保护",
      "data-protection",
      "AGPL 3.0",
      "en",
      "Legitimate",
      "Interest"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@oliver-schmidt-prietz/skill/legitimate-interest",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/119-oliver-schmidt-prietz-legitimate-interest.md",
    "externalCategory": "data-protection",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/119-oliver-schmidt-prietz-legitimate-interest.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/119-oliver-schmidt-prietz-legitimate-interest.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-mediation-dispute-analysis-120",
    "name": "Mediation Dispute Analysis",
    "chineseName": "调解纠纷分析",
    "owner": "Lawve / Jinzhe Tan",
    "practice": "争议解决",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-05-04",
    "usage": 3,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "以调解为目的分析法律纠纷——审查案件材料（诉状、合同、信件、证据），识别有争议的问题，总结各方的立场和利益，对关键问题进行法律分析，提出调解策略或和解方向，并准备调解会议。 每当用户提及调解、争议分析、和解、ADR、争议解决、政党立场、核心小组策略，或要求以解决方案为导向（而不是诉讼为导向）的目标分析两方或多方之...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@jinzhe-tan/skill/mediation-dispute-analysis"
    ],
    "tags": [
      "争议解决",
      "litigation",
      "AGPL 3.0",
      "en",
      "Mediation",
      "Dispute"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@jinzhe-tan/skill/mediation-dispute-analysis",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/120-jinzhe-tan-mediation-dispute-analysis.md",
    "externalCategory": "litigation",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/120-jinzhe-tan-mediation-dispute-analysis.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/120-jinzhe-tan-mediation-dispute-analysis.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-assistant-juridique-121",
    "name": "assistant-juridique",
    "chineseName": "助理司法官",
    "owner": "Lawve / Christophe Quézel-Ambrunaz",
    "practice": "法律研究",
    "jurisdiction": "FR / EU",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-05-04",
    "usage": 3,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "专家法律研究和起草助理，涵盖法国法律、欧洲法律（欧盟和欧洲人权法院）以及通过 LegalDataHunter 为法律专业人士和研究人员提供的外国法律。涵盖十项任务：范围界定、法律研究、咨询、法律文书起草、文件分析、反驳、合同分析、法律监督、参考核查和书目协调。严格的反幻觉规则（搜索 → 查找 → 引用），通过 O...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@christophe-quezel-ambrunaz/skill/assistant-juridique"
    ],
    "tags": [
      "法律研究",
      "legal-research",
      "AGPL 3.0",
      "fr",
      "assistant",
      "juridique"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@christophe-quezel-ambrunaz/skill/assistant-juridique",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/121-christophe-quezel-ambrunaz-assistant-juridique.md",
    "externalCategory": "legal-research",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/121-christophe-quezel-ambrunaz-assistant-juridique.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/121-christophe-quezel-ambrunaz-assistant-juridique.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-persuasive-legal-writing-122",
    "name": "Persuasive Legal Writing",
    "chineseName": "有说服力的法律写作",
    "owner": "Lawve / Larissa Meredith-Flister",
    "practice": "法律文书",
    "jurisdiction": "UK",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-05-01",
    "usage": 1620,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "将卡根大法官、博伊斯和奥尔森法官以及其他顶级律师的精英法律写作技巧应用于任何法律文件——摘要、意见书、信件、意见、备忘录或说服性信件。涵盖散文技巧（清晰度、具体例子、并行结构、语音、策略引用）和架构策略（论点排序、框架、开头、结尾），以及关于检测和删除法律散文中人工智能听起来的模式的专门部分。在起草、编辑或完善任...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@larissa-meredith-flister/skill/persuasive-legal-writing"
    ],
    "tags": [
      "法律文书",
      "legal-drafting",
      "AGPL 3.0",
      "en",
      "Persuasive",
      "Legal"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@larissa-meredith-flister/skill/persuasive-legal-writing",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/122-larissa-meredith-flister-persuasive-legal-writing.md",
    "externalCategory": "legal-drafting",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/122-larissa-meredith-flister-persuasive-legal-writing.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/122-larissa-meredith-flister-persuasive-legal-writing.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-regulatory-deal-card-generator-123",
    "name": "Regulatory Deal Card Generator",
    "chineseName": "监管交易卡生成器",
    "owner": "Lawve / Patrick Munro",
    "practice": "监管合规",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 105,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "生成独立的交互式 HTML“交易卡”，将复杂的法规转化为可供谈判的参考工具，系统地将强制性义务与可谈判的实施选择区分开来。当用户需要交互式监管指南以实现以下目的时使用：(1) 合同谈判支持，(2) 客户教育或内部培训，(3) 商业利益相关者的监管简报，或 (4) 所需合规路径与灵活合规路径之间的结构化比较。主要关...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@patrick-munro/skill/regulatory-deal-card-generator"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "en",
      "Regulatory",
      "Deal"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@patrick-munro/skill/regulatory-deal-card-generator",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/123-patrick-munro-regulatory-deal-card-generator.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/123-patrick-munro-regulatory-deal-card-generator.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/123-patrick-munro-regulatory-deal-card-generator.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-cross-regulatory-impact-analyzer-124",
    "name": "Cross Regulatory Impact Analyzer",
    "chineseName": "跨监管影响分析器",
    "owner": "Lawve / Patrick Munro",
    "practice": "监管合规",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 183,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "分析多种法规如何针对特定产品、服务或业务模型相互作用。确定义务重叠、加强、补充、重复或冲突的地方；构建优先级矩阵；制定综合合规时间表；并估计总体合规负担。在以下情况下使用：(1) 在推出前根据完整的监管环境确定新产品或服务的范围；(2) 对目标公司的多重监管风险进行并购尽职调查；(3) 制定战略合规路线图，其中单...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@patrick-munro/skill/cross-regulatory-impact-analyzer"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "en",
      "Cross",
      "Regulatory"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@patrick-munro/skill/cross-regulatory-impact-analyzer",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/124-patrick-munro-cross-regulatory-impact-analyzer.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/124-patrick-munro-cross-regulatory-impact-analyzer.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/124-patrick-munro-cross-regulatory-impact-analyzer.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-panel-review-rationalisation-125",
    "name": "Panel Review Rationalisation",
    "chineseName": "小组审查合理化",
    "owner": "Lawve / Scott Margetts",
    "practice": "法律运营",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 142,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "小组审查合理化 **OCM 技能插件** — 技能 8（共 8 项） **状态：** 完成 — 第 1 阶段和第 2 阶段已测试。已发布的模式 3 和 4 具有已知的故障模式（见下文）。 --- 这个技能有什么作用 执行年度小组审查周期和持续的小组治理决策。将绩效记分卡数据、计费合规记录和步出模式综合为面板级建议...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@scott-margetts/skill/panel-review-rationalisation"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "Apache 2.0",
      "en",
      "Panel",
      "Review"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@scott-margetts/skill/panel-review-rationalisation",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/125-scott-margetts-panel-review-rationalisation.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/125-scott-margetts-panel-review-rationalisation.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/125-scott-margetts-panel-review-rationalisation.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-matter-allocation-instruction-126",
    "name": "Matter Allocation Instruction",
    "chineseName": "事项分配说明",
    "owner": "Lawve / Scott Margetts",
    "practice": "法律运营",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 151,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "事项分配指令 **OCM 技能插件** — 技能 5（共 8 项） **状态：** 完成 — 第 1 阶段和第 2 阶段已测试 --- 这个技能有什么作用 执行事项分配和公司参与，从公司选择到现场、正确指导的事项。使用正确的采购框架将合适的公司与新事务相匹配。生成准备发送的完整事项指令。生成可关闭冲突清除、约定书...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@scott-margetts/skill/matter-allocation-instruction"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "Apache 2.0",
      "en",
      "Matter",
      "Allocation"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@scott-margetts/skill/matter-allocation-instruction",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/126-scott-margetts-matter-allocation-instruction.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/126-scott-margetts-matter-allocation-instruction.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/126-scott-margetts-matter-allocation-instruction.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-panel-design-selection-127",
    "name": "Panel Design Selection",
    "chineseName": "面板设计选择",
    "owner": "Lawve / Scott Margetts",
    "practice": "法律运营",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 142,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "面板设计选择 **OCM 技能插件** — 技能 2（共 8 项） **状态：** 完成 — 第 1 阶段和第 2 阶段已测试 --- 这个技能有什么作用 设计小组结构，定义公司选择标准，进行正确采购分析，并评估内部法律团队的覆盖范围差距，以建立或正规化其外部法律顾问小组。 小组设计不是小组审查。设计询问：面板应...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@scott-margetts/skill/panel-design-selection"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "Apache 2.0",
      "en",
      "Panel",
      "Design"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@scott-margetts/skill/panel-design-selection",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/127-scott-margetts-panel-design-selection.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/127-scott-margetts-panel-design-selection.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/127-scott-margetts-panel-design-selection.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-invoice-review-compliance-128",
    "name": "Invoice Review Compliance",
    "chineseName": "发票审核合规性",
    "owner": "Lawve / Scott Margetts",
    "practice": "法律运营",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 169,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "发票审核合规性 **OCM 技能插件** — 技能 6（共 8 项） **状态：** 完成 — 第 1 阶段和第 2 阶段已测试 --- 这个技能有什么作用 根据计费准则审查外部顾问发票，按类别标记不合规条目，并生成批准、减少、拒绝和传达这些决定所需的文件。涵盖完整的发票合规工作流程：从单项审核到正式的公司升级。...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@scott-margetts/skill/invoice-review-compliance"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "Apache 2.0",
      "en",
      "Invoice",
      "Review"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@scott-margetts/skill/invoice-review-compliance",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/128-scott-margetts-invoice-review-compliance.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/128-scott-margetts-invoice-review-compliance.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/128-scott-margetts-invoice-review-compliance.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-performance-scorecard-129",
    "name": "Performance Scorecard",
    "chineseName": "绩效记分卡",
    "owner": "Lawve / Scott Margetts",
    "practice": "法律运营",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 156,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "绩效记分卡 **OCM 技能插件** — 技能 7（共 8 项） **状态：** 完成 — 第 1 阶段和第 2 阶段已测试 --- 这个技能有什么作用 绩效记分卡设计、事后反馈收集、QBR 准备以及评估外部法律顾问的内部法律运营团队的公司比较。 编码在整个关系生命周期中收集、汇总和处理公司绩效数据的方法——从构...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@scott-margetts/skill/performance-scorecard"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "Apache 2.0",
      "en",
      "Performance",
      "Scorecard"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@scott-margetts/skill/performance-scorecard",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/129-scott-margetts-performance-scorecard.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/129-scott-margetts-performance-scorecard.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/129-scott-margetts-performance-scorecard.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-fee-arrangement-structuring-130",
    "name": "Fee Arrangement Structuring",
    "chineseName": "费用安排结构",
    "owner": "Lawve / Scott Margetts",
    "practice": "法律运营",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 176,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "费用安排结构 **OCM 技能插件** — 技能 4（共 8 项） **状态：** 完成 — 第 1 阶段和第 2 阶段已测试 --- 这个技能有什么作用 在内部法律团队和外部法律顾问之间安排商业费用。设计 AFA（固定、上限、项圈、混合、分阶段、成功），评估范围是否支持拟议的结构，为费用谈判准备商业立场，根据交...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@scott-margetts/skill/fee-arrangement-structuring"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "Apache 2.0",
      "en",
      "Fee",
      "Arrangement"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@scott-margetts/skill/fee-arrangement-structuring",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/130-scott-margetts-fee-arrangement-structuring.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/130-scott-margetts-fee-arrangement-structuring.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/130-scott-margetts-fee-arrangement-structuring.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-rfp-pitch-management-131",
    "name": "RFP Pitch Management",
    "chineseName": "RFP 推介管理",
    "owner": "Lawve / Scott Margetts",
    "practice": "法律运营",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 168,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "rfp 推介管理 **OCM 技能插件** — 技能 3（共 8 项） **状态：** 完成 — 第 1 阶段和第 2 阶段已测试 --- 这个技能有什么作用 运行用于选择外部顾问的结构化 RFP 流程——从起草初始文件到评估公司的回应，再到为 GC 签署提供合理的选择建议。 一家律师事务所平均花费 47 小时来...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@scott-margetts/skill/rfp-pitch-management"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "Apache 2.0",
      "en",
      "RFP",
      "Pitch"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@scott-margetts/skill/rfp-pitch-management",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/131-scott-margetts-rfp-pitch-management.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/131-scott-margetts-rfp-pitch-management.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/131-scott-margetts-rfp-pitch-management.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-engagement-terms-billing-guidelines-132",
    "name": "Engagement Terms Billing Guidelines",
    "chineseName": "参与条款 计费指南",
    "owner": "Lawve / Scott Margetts",
    "practice": "法律运营",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 172,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "参与条款计费指南 **OCM 技能插件** — 技能 1（共 8 项） **状态：** 完成 — 第 1 阶段和第 2 阶段已测试 --- 这个技能有什么作用 起草、审查和维护外部法律顾问指南 (OCG) — 一份运营文件，规定了外部律师事务所如何计费、配备人员、沟通和提供法律服务的期望。 OCG 是内部法律运营...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@scott-margetts/skill/engagement-terms-billing-guidelines"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "Apache 2.0",
      "en",
      "Engagement",
      "Terms"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@scott-margetts/skill/engagement-terms-billing-guidelines",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/132-scott-margetts-engagement-terms-billing-guidelines.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/132-scott-margetts-engagement-terms-billing-guidelines.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/132-scott-margetts-engagement-terms-billing-guidelines.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-stakeholder-comms-planner-133",
    "name": "Stakeholder Comms Planner",
    "chineseName": "利益相关者沟通规划师",
    "owner": "Lawve / Scott Margetts",
    "practice": "法律运营",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 185,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "利益相关者沟通规划者 **插件：** LPM 核心 **技能编号：** 9 项（共 19 项） **状态：** v1 已构建 - 第 1 阶段测试正在进行中 --- 它的作用 跨四种模式设计和维护法律事务的沟通架构：利益相关者映射、沟通计划设计、大型项目的报告层次结构设计以及利益相关者格局变化时的中期事务沟通更新...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@scott-margetts/skill/stakeholder-comms-planner"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "Apache 2.0",
      "en",
      "Stakeholder",
      "Comms"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@scott-margetts/skill/stakeholder-comms-planner",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/133-scott-margetts-stakeholder-comms-planner.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/133-scott-margetts-stakeholder-comms-planner.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/133-scott-margetts-stakeholder-comms-planner.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-resource-planner-134",
    "name": "Resource Planner",
    "chineseName": "资源规划师",
    "owner": "Lawve / Scott Margetts",
    "practice": "法律运营",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 199,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "资源规划器 **插件：** LPM 核心 **技能编号：** 19 中的 10 **状态：** v1 已构建 - 第 1 阶段测试正在进行中 --- 它的作用 设计事务团队结构，识别传动问题，规划团队连续性，并对事务之间的资源冲突进行建模。处理实际可用的内容——时间条目、规定的团队结构、已知的缺勤、特定的命名冲突...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@scott-margetts/skill/resource-planner"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "Apache 2.0",
      "en",
      "Resource",
      "Planner"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@scott-margetts/skill/resource-planner",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/134-scott-margetts-resource-planner.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/134-scott-margetts-resource-planner.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/134-scott-margetts-resource-planner.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-matter-plan-builder-135",
    "name": "Matter Plan Builder",
    "chineseName": "事项计划生成器",
    "owner": "Lawve / Scott Margetts",
    "practice": "法律运营",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 1,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "事务计划生成器 将商定的范围转化为团队可以实际执行的结构化事务计划。阶段、工作流、里程碑、依赖关系、所有者分配、事项设置 - 以及在整个执行过程中保持计划最新的维护架构。 这个技能有什么作用 只存在于合作伙伴头脑中的计划就不是计划。这是一个意图。该技能的功能是使计划变得明确：分配所有权、对工作进行排序、标记依赖性...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@scott-margetts/skill/matter-plan-builder"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "Apache 2.0",
      "en",
      "Matter",
      "Plan"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@scott-margetts/skill/matter-plan-builder",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/135-scott-margetts-matter-plan-builder.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/135-scott-margetts-matter-plan-builder.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/135-scott-margetts-matter-plan-builder.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-local-counsel-manager-136",
    "name": "Local Counsel Manager",
    "chineseName": "当地法律顾问经理",
    "owner": "Lawve / Scott Margetts",
    "practice": "法律运营",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 215,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "本地顾问经理 **插件：** LPM 核心插件（技能 11 / 14） **部分：** [Claude 的 LPM 技能](https://github.com/legalopsconsulting/lpm-skills) **状态：** 第二阶段完成 --- 这个技能有什么作用 管理跨司法管辖区法律事务的外部本...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@scott-margetts/skill/local-counsel-manager"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "Apache 2.0",
      "en",
      "Local",
      "Counsel"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@scott-margetts/skill/local-counsel-manager",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/136-scott-margetts-local-counsel-manager.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/136-scott-margetts-local-counsel-manager.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/136-scott-margetts-local-counsel-manager.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-scope-change-controller-137",
    "name": "Scope Change Controller",
    "chineseName": "范围变更控制器",
    "owner": "Lawve / Scott Margetts",
    "practice": "法律运营",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 228,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "范围变更控制器 整个法律事务生命周期的范围管理——从事务设置时的基线捕获到进行中的变更控制、范围外的识别和记录，以及结束时的回顾。 这个技能有什么作用 范围是其他一切参考的基线。状态是针对范围的进展。风险是对范围交付的威胁。预算是范围的价格。当范围不受管理时，所有其他 LPM 规则都在针对不可靠的目标进行工作，客...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@scott-margetts/skill/scope-change-controller"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "Apache 2.0",
      "en",
      "Scope",
      "Change"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@scott-margetts/skill/scope-change-controller",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/137-scott-margetts-scope-change-controller.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/137-scott-margetts-scope-change-controller.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/137-scott-margetts-scope-change-controller.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-status-report-drafter-138",
    "name": "Status Report Drafter",
    "chineseName": "状态报告起草者",
    "owner": "Lawve / Scott Margetts",
    "practice": "法律运营",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 1,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "状态报告起草者 将电子邮件、通话记录和工作流更新转换为结构化事务状态报告 - 包含 RAG 评级、差异评论和升级标记。内部和面向客户的格式。 这个技能有什么作用 关于法律事务的状态报告会以两种可预见的方式失败：它要么根本不发生，要么生成描述活动但没有传达情况的报告。 “团队一直在推进披露工作流程”告诉读者没有任何...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@scott-margetts/skill/status-report-drafter"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "Apache 2.0",
      "en",
      "Status",
      "Report"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@scott-margetts/skill/status-report-drafter",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/138-scott-margetts-status-report-drafter.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/138-scott-margetts-status-report-drafter.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/138-scott-margetts-status-report-drafter.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-collaboration-platform-advisor-139",
    "name": "Collaboration Platform Advisor",
    "chineseName": "协作平台顾问",
    "owner": "Lawve / Scott Margetts",
    "practice": "法律运营",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 1,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "协作平台顾问 **插件：** LPM 核心插件（技能 13 / 14） **部分：** [Claude 的 LPM 技能](https://github.com/legalopsconsulting/lpm-skills) --- 这个技能有什么作用 设计和管理法律事务协作平台——其结构、工作流程、仪表板、数据质...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@scott-margetts/skill/collaboration-platform-advisor"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "Apache 2.0",
      "en",
      "Collaboration",
      "Platform"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@scott-margetts/skill/collaboration-platform-advisor",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/139-scott-margetts-collaboration-platform-advisor.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/139-scott-margetts-collaboration-platform-advisor.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/139-scott-margetts-collaboration-platform-advisor.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-document-approval-tracker-140",
    "name": "Document Approval Tracker",
    "chineseName": "文件审批追踪器",
    "owner": "Lawve / Scott Margetts",
    "practice": "法律运营",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 4,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "文档审批跟踪器 **插件：** LPM 核心插件（技能 14 / 14） **部分：** [Claude 的 LPM 技能](https://github.com/legalopsconsulting/lpm-skills) --- 这个技能有什么作用 设计和跟踪多利益相关者文档审批工作流程 - 定义审核顺序、监...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@scott-margetts/skill/document-approval-tracker"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "Apache 2.0",
      "en",
      "Document",
      "Approval"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@scott-margetts/skill/document-approval-tracker",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/140-scott-margetts-document-approval-tracker.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/140-scott-margetts-document-approval-tracker.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/140-scott-margetts-document-approval-tracker.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-continuous-improvement-engine-141",
    "name": "Continuous Improvement Engine",
    "chineseName": "持续改进引擎",
    "owner": "Lawve / Scott Margetts",
    "practice": "法律运营",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 305,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "持续改进引擎 **插件：** LPM 核心插件（技能 12 / 14） **部分：** [Claude 的 LPM 技能](https://github.com/legalopsconsulting/lpm-skills) --- 这个技能有什么作用 捕捉、构建和循环利用法律事务中的操作经验教训——在处理过程中、...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@scott-margetts/skill/continuous-improvement-engine"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "Apache 2.0",
      "en",
      "Continuous",
      "Improvement"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@scott-margetts/skill/continuous-improvement-engine",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/141-scott-margetts-continuous-improvement-engine.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/141-scott-margetts-continuous-improvement-engine.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/141-scott-margetts-continuous-improvement-engine.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-risk-and-issues-manager-142",
    "name": "Risk and Issues Manager",
    "chineseName": "风险和问题经理",
    "owner": "Lawve / Scott Margetts",
    "practice": "法律运营",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 3,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "风险和问题经理 法律事务的 RAID 日志方法 — 风险、假设、问题和决策。维护日志，从通信中提取隐藏的决策和假设，并从事项设置中识别操作风险。 这个技能有什么作用 法律事务会产生一系列连续的决策、承诺和风险信号——分布在电子邮件链、通话记录和非正式通信中——这些信息很少在任何结构化的地方被捕获。其结果是，假设被...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@scott-margetts/skill/risk-and-issues-manager"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "Apache 2.0",
      "en",
      "Risk",
      "and"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@scott-margetts/skill/risk-and-issues-manager",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/142-scott-margetts-risk-and-issues-manager.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/142-scott-margetts-risk-and-issues-manager.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/142-scott-margetts-risk-and-issues-manager.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-timeline-generator-143",
    "name": "Timeline Generator",
    "chineseName": "时间线生成器",
    "owner": "Lawve / Scott Margetts",
    "practice": "法律运营",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 1,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "时间线生成器 **Claude 的 LPM 核心插件的一部分** 根据事务计划构建依赖网络和关键路径。制作交互式视觉时间线。模拟当事情花费的时间比计划的时间长时，项目完成会发生什么情况。 --- 它的作用 从您的事项计划中获取任务列表 - 具有依赖性类型 (FS/FF/SS) 和持续时间估计 - 并计算哪些任务位...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@scott-margetts/skill/timeline-generator"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "Apache 2.0",
      "en",
      "Timeline",
      "Generator"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@scott-margetts/skill/timeline-generator",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/143-scott-margetts-timeline-generator.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/143-scott-margetts-timeline-generator.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/143-scott-margetts-timeline-generator.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-budget-and-fee-manager-144",
    "name": "Budget and Fee Manager",
    "chineseName": "预算和费用经理",
    "owner": "Lawve / Scott Margetts",
    "practice": "法律运营",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 2,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "预算和费用经理 **插件：** LPM 核心 **技能编号：** 19 中的 7 **状态：** v1 完成 — 第 1 阶段已通过，第 2 阶段已准备就绪 --- 它的作用 建立并监控整个案件生命周期的费用预算。 在事项设置时，它将商定的范围转化为基于阶段的费用估算——按工作流程和管辖范围进行细分，计算并证明意...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@scott-margetts/skill/budget-and-fee-manager"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "Apache 2.0",
      "en",
      "Budget",
      "and"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@scott-margetts/skill/budget-and-fee-manager",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/144-scott-margetts-budget-and-fee-manager.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/144-scott-margetts-budget-and-fee-manager.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/144-scott-margetts-budget-and-fee-manager.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-billing-cycle-manager-145",
    "name": "Billing Cycle Manager",
    "chineseName": "计费周期管理器",
    "owner": "Lawve / Scott Margetts",
    "practice": "法律运营",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 306,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "计费周期管理器 **插件：** LPM 核心 **技能编号：** 19 中的 8 **状态：** v1 已构建 - 第 1 阶段测试正在进行中 --- 它的作用 跨五种模式处理计费周期的运营执行：每月账单准备、当地律师发票审核和支付处理、客户账单查询响应、现金流建模以及杠杆和烧钱分析。 这是执行层。预算和费用经理...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@scott-margetts/skill/billing-cycle-manager"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "Apache 2.0",
      "en",
      "Billing",
      "Cycle"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@scott-margetts/skill/billing-cycle-manager",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/145-scott-margetts-billing-cycle-manager.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/145-scott-margetts-billing-cycle-manager.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/145-scott-margetts-billing-cycle-manager.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-matter-intake-scoping-146",
    "name": "Matter Intake Scoping",
    "chineseName": "物质摄入范围",
    "owner": "Lawve / Scott Margetts",
    "practice": "法律运营",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 3,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "问题摄入范围 整个预执行弧的事务范围 — 从非结构化客户数据到结构化摘要，再到所有其他 LPM 学科参考的商定基线，并在 LPM 继承没有记录基线时提供中期事务恢复模式。 这个技能有什么作用 四种操作模式： **模式 1 — 预参与：** 获取客户发送的所有内容 — 电子邮件、组织结构图、数据室索引、通话记录 —...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@scott-margetts/skill/matter-intake-scoping"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "Apache 2.0",
      "en",
      "Matter",
      "Intake"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@scott-margetts/skill/matter-intake-scoping",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/146-scott-margetts-matter-intake-scoping.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/146-scott-margetts-matter-intake-scoping.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/146-scott-margetts-matter-intake-scoping.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-mandarinat-147",
    "name": "mandarinat",
    "chineseName": "普通话",
    "owner": "Lawve / Christophe Quézel-Ambrunaz",
    "practice": "法律培训",
    "jurisdiction": "FR / EU",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 4,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "法学教授和研究人员的学术助理。六项任务：（1）以理论为重点的深入法律研究，（2）文件校对与参考文献验证、文字评论、抄袭/人工智能检测线索和论证一致性，（3）为大学法律练习创建主题和答案键，（4）更新课程、教科书和法律文件，（5）在DOCX和PPTX支持下创建课程，（6）准备教程工作表。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@christophe-quezel-ambrunaz/skill/mandarinat"
    ],
    "tags": [
      "法律培训",
      "legal-education",
      "AGPL 3.0",
      "fr",
      "mandarinat"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@christophe-quezel-ambrunaz/skill/mandarinat",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/147-christophe-quezel-ambrunaz-mandarinat.md",
    "externalCategory": "legal-education",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/147-christophe-quezel-ambrunaz-mandarinat.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/147-christophe-quezel-ambrunaz-mandarinat.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-legal-risk-assessment-goodlegal-148",
    "name": "Legal Risk Assessment GoodLegal",
    "chineseName": "法律风险评估 GoodLegal",
    "owner": "Lawve / Zacharie Laïk",
    "practice": "监管合规",
    "jurisdiction": "FR / EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 9,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "使用 Goodlegal MCP 进行法律风险分析",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：MIT",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@zacharie-laik/skill/legal-risk-assessment-goodlegal"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "MIT",
      "en",
      "Legal",
      "Risk"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@zacharie-laik/skill/legal-risk-assessment-goodlegal",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/148-zacharie-laik-legal-risk-assessment-goodlegal.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/148-zacharie-laik-legal-risk-assessment-goodlegal.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/148-zacharie-laik-legal-risk-assessment-goodlegal.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-mandatory-verification-149",
    "name": "Mandatory Verification",
    "chineseName": "强制验证",
    "owner": "Lawve / Larissa Meredith-Flister",
    "practice": "法律研究",
    "jurisdiction": "UK",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 3,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "在将所有重要的事实声明呈现为真实之前，必须进行强制性外部验证工作流程。每当要求克劳德研究任何主题、回答事实问题、提供当前信息、起草包含事实主张的文件、提供法律建议或引用法律权威、讨论时事或公众人物、提供技术或科学信息、陈述统计数据或数据点或回答任何答案可能随时间变化的问题时，都必须使用此技能。当用户要求克劳德“检...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@larissa-meredith-flister/skill/mandatory-verification"
    ],
    "tags": [
      "法律研究",
      "legal-research",
      "AGPL 3.0",
      "en",
      "Mandatory",
      "Verification"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@larissa-meredith-flister/skill/mandatory-verification",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/149-larissa-meredith-flister-mandatory-verification.md",
    "externalCategory": "legal-research",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/149-larissa-meredith-flister-mandatory-verification.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/149-larissa-meredith-flister-mandatory-verification.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-legal-risk-assessor-150",
    "name": "legal-risk-assessor",
    "chineseName": "法律风险评估员",
    "owner": "Lawve / Anthropic",
    "practice": "监管合规",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 15,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "使用具有升级标准的严重性可能性框架对法律风险进行评估和分类。在评估合同风险、评估交易风险、按严重程度对问题进行分类或确定事项是否需要高级顾问或外部法律审查时使用。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@anthropic/skill/legal-risk-assessor"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "Apache 2.0",
      "en",
      "legal",
      "risk"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@anthropic/skill/legal-risk-assessor",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/150-anthropic-legal-risk-assessor.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/150-anthropic-legal-risk-assessor.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/150-anthropic-legal-risk-assessor.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-red-team-verifier-151",
    "name": "Red Team Verifier",
    "chineseName": "红队验证员",
    "owner": "Lawve / Patrick Munro",
    "practice": "法律研究",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 18,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "通过系统的事实检查、来源验证和质量控制对人工智能生成的法律内容进行对抗性验证。在分发给客户或利益相关者之前验证法律文件、事实核查监管内容、执行红队审查或质量保证时使用。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@patrick-munro/skill/red-team-verifier"
    ],
    "tags": [
      "法律研究",
      "legal-research",
      "AGPL 3.0",
      "en",
      "Red",
      "Team"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@patrick-munro/skill/red-team-verifier",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/151-patrick-munro-red-team-verifier.md",
    "externalCategory": "legal-research",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/151-patrick-munro-red-team-verifier.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/151-patrick-munro-red-team-verifier.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-legal-ai-simulator-152",
    "name": "Legal AI Simulator",
    "chineseName": "法律人工智能模拟器",
    "owner": "Lawve / Patrick Munro",
    "practice": "法律培训",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 9,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "在法律背景下展示人工智能能力的框架。提供涵盖租户法、商业合同、启动纠纷、就业索赔和消费者保护的详细人物角色，并提供逐步复杂的场景。在以下情况下使用：(1) 演示人工智能驱动的法律分流或接收系统，(2) 展示负责任的人工智能辅助客户交互，(3) 培训员工在法律环境中适当使用人工智能，(4) 为法律技术演示创建现实场...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@patrick-munro/skill/legal-ai-simulator"
    ],
    "tags": [
      "法律培训",
      "legal-education",
      "AGPL 3.0",
      "en",
      "Legal",
      "Simulator"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@patrick-munro/skill/legal-ai-simulator",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/152-patrick-munro-legal-ai-simulator.md",
    "externalCategory": "legal-education",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/152-patrick-munro-legal-ai-simulator.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/152-patrick-munro-legal-ai-simulator.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-qcm-generateur-153",
    "name": "qcm-generateur",
    "chineseName": "qcm-生成器",
    "owner": "Lawve / Christophe Quézel-Ambrunaz",
    "practice": "法律培训",
    "jurisdiction": "FR / EU",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 226,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "AI 辅助生成 MCQ（多项选择问卷），并导出到 Moodle（GIFT、XML）、Wooclap（Excel）、Kahoot！ 和 Word。支持轻度 MCQ（游戏化）和深度 MCQ（评估性），具有单答案和多答案格式。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@christophe-quezel-ambrunaz/skill/qcm-generateur"
    ],
    "tags": [
      "法律培训",
      "legal-education",
      "AGPL 3.0",
      "fr",
      "qcm",
      "generateur"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@christophe-quezel-ambrunaz/skill/qcm-generateur",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/153-christophe-quezel-ambrunaz-qcm-generateur.md",
    "externalCategory": "legal-education",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/153-christophe-quezel-ambrunaz-qcm-generateur.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/153-christophe-quezel-ambrunaz-qcm-generateur.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-relecteur-154",
    "name": "relecteur",
    "chineseName": "选举人",
    "owner": "Lawve / Christophe Quézel-Ambrunaz",
    "practice": "法律培训",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "low",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 501,
    "rating": 4.1,
    "reviewScore": 86,
    "description": "优化 Claude 校对法语文本，无论是文学、技术还是专业文本。语法和拼写检查、野蛮行为检测以及文体建议。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@christophe-quezel-ambrunaz/skill/relecteur"
    ],
    "tags": [
      "法律培训",
      "legal-education",
      "AGPL 3.0",
      "fr",
      "relecteur"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@christophe-quezel-ambrunaz/skill/relecteur",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/154-christophe-quezel-ambrunaz-relecteur.md",
    "externalCategory": "legal-education",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/154-christophe-quezel-ambrunaz-relecteur.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/154-christophe-quezel-ambrunaz-relecteur.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-privacy-notice-generator-155",
    "name": "Privacy Notice Generator",
    "chineseName": "隐私声明生成器",
    "owner": "Lawve / Oliver Schmidt-Prietz",
    "practice": "数据保护",
    "jurisdiction": "EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 10,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "欧盟隐私声明 — 部署指南 > 📄 **【查看互动技能页面→】(https://oliverschmidtprietz.github.io/GDPR-Privacy-Notice-EU/)** 概述 泛欧盟 GDPR 隐私声明生成器 — Claude 的一项综合起草技能，可将具有管辖权意识、符合 GDPR 的隐...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@oliver-schmidt-prietz/skill/privacy-notice-generator"
    ],
    "tags": [
      "数据保护",
      "data-protection",
      "AGPL 3.0",
      "en",
      "Privacy",
      "Notice"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@oliver-schmidt-prietz/skill/privacy-notice-generator",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/155-oliver-schmidt-prietz-privacy-notice-generator.md",
    "externalCategory": "data-protection",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/155-oliver-schmidt-prietz-privacy-notice-generator.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/155-oliver-schmidt-prietz-privacy-notice-generator.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-privacy-compliance-advisor-156",
    "name": "privacy-compliance-advisor",
    "chineseName": "隐私合规顾问",
    "owner": "Lawve / Anthropic",
    "practice": "数据保护",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 9,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "了解隐私法规（GDPR、CCPA）、审查 DPA 并处理数据主体请求。在审查数据处理协议、响应数据主体访问或删除请求、评估跨境数据传输要求或评估隐私合规性时使用。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@anthropic/skill/privacy-compliance-advisor"
    ],
    "tags": [
      "数据保护",
      "data-protection",
      "Apache 2.0",
      "en",
      "privacy",
      "compliance"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@anthropic/skill/privacy-compliance-advisor",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/156-anthropic-privacy-compliance-advisor.md",
    "externalCategory": "data-protection",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/156-anthropic-privacy-compliance-advisor.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/156-anthropic-privacy-compliance-advisor.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-dpia-sentinel-157",
    "name": "DPIA Sentinel",
    "chineseName": "DPIA 哨兵",
    "owner": "Lawve / Oliver Schmidt-Prietz",
    "practice": "数据保护",
    "jurisdiction": "EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 20,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "DPIA Sentinel — 部署指南 > 📄 **【查看互动技能页面→】(https://oliverschmidtprietz.github.io/GDPR-DPIA-Sentinel/)** 概述 GDPR 数据保护影响评估 Sentinel — Claude 的结构化 DPIA 指导技能，可提供： -...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@oliver-schmidt-prietz/skill/dpia-sentinel"
    ],
    "tags": [
      "数据保护",
      "data-protection",
      "AGPL 3.0",
      "en",
      "DPIA",
      "Sentinel"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@oliver-schmidt-prietz/skill/dpia-sentinel",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/157-oliver-schmidt-prietz-dpia-sentinel.md",
    "externalCategory": "data-protection",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/157-oliver-schmidt-prietz-dpia-sentinel.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/157-oliver-schmidt-prietz-dpia-sentinel.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-icelandic-court-case-finder-158",
    "name": "Icelandic Court Case Finder",
    "chineseName": "冰岛法院案件查找器",
    "owner": "Lawve / Magnus Smárason",
    "practice": "法律研究",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 227,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "当被要求查找、引用、分析或总结冰岛法院判决时，请使用此技能。触发涉及 Hæstiréttur（最高法院）、Landsréttur（上诉法院）、Félagsdómur（劳动法院）、héraðsdómur（地区法院）判例法或冰岛法律先例研究的请求。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@magnus-smarason/skill/icelandic-court-case-finder"
    ],
    "tags": [
      "法律研究",
      "legal-research",
      "AGPL 3.0",
      "en",
      "Icelandic",
      "Court"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@magnus-smarason/skill/icelandic-court-case-finder",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/158-magnus-smarason-icelandic-court-case-finder.md",
    "externalCategory": "legal-research",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/158-magnus-smarason-icelandic-court-case-finder.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/158-magnus-smarason-icelandic-court-case-finder.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-icelandic-legal-terminology-159",
    "name": "Icelandic Legal Terminology",
    "chineseName": "冰岛法律术语",
    "owner": "Lawve / Magnus Smárason",
    "practice": "法律研究",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 185,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "当需要将冰岛法律术语翻译、解释或映射为英语（反之亦然）时，请使用此技能。触发涉及冰岛法律词汇、法律翻译、理解冰岛法规或法院判决或交叉引用冰岛语和普通法概念的请求。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@magnus-smarason/skill/icelandic-legal-terminology"
    ],
    "tags": [
      "法律研究",
      "legal-research",
      "AGPL 3.0",
      "en",
      "Icelandic",
      "Legal"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@magnus-smarason/skill/icelandic-legal-terminology",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/159-magnus-smarason-icelandic-legal-terminology.md",
    "externalCategory": "legal-research",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/159-magnus-smarason-icelandic-legal-terminology.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/159-magnus-smarason-icelandic-legal-terminology.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-meeting-briefing-preparator-160",
    "name": "meeting-briefing-preparator",
    "chineseName": "会议简报准备者",
    "owner": "Lawve / Anthropic",
    "practice": "法律运营",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 3,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "为具有法律相关性的会议准备结构化简报并跟踪由此产生的行动项目。在准备合同谈判、董事会会议、合规审查或任何需要法律背景、背景研究或行动跟踪的会议时使用。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@anthropic/skill/meeting-briefing-preparator"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "Apache 2.0",
      "en",
      "meeting",
      "briefing"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@anthropic/skill/meeting-briefing-preparator",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/160-anthropic-meeting-briefing-preparator.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/160-anthropic-meeting-briefing-preparator.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/160-anthropic-meeting-briefing-preparator.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-recherche-doctrine-161",
    "name": "recherche-doctrine",
    "chineseName": "研究主义",
    "owner": "Lawve / Allison Fiorentino",
    "practice": "法律研究",
    "jurisdiction": "FR / EU / INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 7,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "法国、欧洲和国际法律学术数据库的学术研究。当用户请求搜索理论文章、论文、学术书籍或大学法律出版物（包括比较法）时，请使用此技能。主要来源：ISIDORE（CNRS 社会科学聚合器，包括 Cairn.info、Persée、OpenEdition）、HAL（法国开放档案）、OpenAlex（超过 2.5 亿作品的全...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@allison-fiorentino/skill/recherche-doctrine"
    ],
    "tags": [
      "法律研究",
      "legal-research",
      "AGPL 3.0",
      "fr",
      "recherche",
      "doctrine"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@allison-fiorentino/skill/recherche-doctrine",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/161-allison-fiorentino-recherche-doctrine.md",
    "externalCategory": "legal-research",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/161-allison-fiorentino-recherche-doctrine.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/161-allison-fiorentino-recherche-doctrine.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-outside-counsel-billing-and-performance-reviewer-162",
    "name": "outside-counsel-billing-and-performance-reviewer",
    "chineseName": "外部顾问计费和绩效审核员",
    "owner": "Lawve / Carl Ditzler",
    "practice": "法律运营",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "low",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 6,
    "rating": 4.1,
    "reviewScore": 86,
    "description": "审查内部法律部门的外部顾问发票和相关计费数据，包括 LEDES 或电子账单导出、OCG、批准费率、折扣、预算、AFA 和人员配置规则。在引入外部数据之前从内部比较开始。生成发票审核结果、MBR/QBR 记分卡、争议日志和管理报告。仅用于演示目的，不构成专业建议。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@carl-ditzler/skill/outside-counsel-billing-and-performance-reviewer"
    ],
    "tags": [
      "法律运营",
      "legal-operations",
      "Apache 2.0",
      "en",
      "outside",
      "counsel"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@carl-ditzler/skill/outside-counsel-billing-and-performance-reviewer",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/162-carl-ditzler-outside-counsel-billing-and-performance-reviewer.md",
    "externalCategory": "legal-operations",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/162-carl-ditzler-outside-counsel-billing-and-performance-reviewer.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/162-carl-ditzler-outside-counsel-billing-and-performance-reviewer.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-judicial-first-impression-163",
    "name": "Judicial First Impression",
    "chineseName": "司法第一印象",
    "owner": "Lawve / Larissa Meredith-Flister",
    "practice": "争议解决",
    "jurisdiction": "UK",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 3,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "从法官在时间压力下冷读的角度评估法律论证、意见或结构化推理。生成一个由七部分组成的结构化评估：案例的内容、直接的困惑点、感觉强的内容、感觉弱的内容、假设但未经证实的内容、临时置信水平（低/中/高）以及需要说服的内容。这项技能不会重写、改进或攻击论点——它告诉你它实际上如何落在一个持怀疑态度、经验丰富的读者身上，而...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@larissa-meredith-flister/skill/judicial-first-impression"
    ],
    "tags": [
      "争议解决",
      "litigation",
      "Apache 2.0",
      "en",
      "Judicial",
      "First"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@larissa-meredith-flister/skill/judicial-first-impression",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/163-larissa-meredith-flister-judicial-first-impression.md",
    "externalCategory": "litigation",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/163-larissa-meredith-flister-judicial-first-impression.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/163-larissa-meredith-flister-judicial-first-impression.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-opposing-counsel-review-164",
    "name": "Opposing Counsel Review",
    "chineseName": "反对律师审查",
    "owner": "Lawve / Larissa Meredith-Flister",
    "practice": "争议解决",
    "jurisdiction": "UK",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 1979,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "担任经验丰富的对方律师，攻击、破坏和揭露法律论证、陈词、证人陈述或结构化推理中的弱点。 产生由六部分组成的对抗性分析： 1. 攻击的核心理论，确定击败论证的最有效的单一方法； 2. 对立论点的重构版本，去除了修辞以暴露其脆弱性； 3. 按类别分组的主要攻击线（法律错误陈述、证据差距、因果关系失败、内部不一致、过度...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@larissa-meredith-flister/skill/opposing-counsel-review"
    ],
    "tags": [
      "争议解决",
      "litigation",
      "Apache 2.0",
      "en",
      "Opposing",
      "Counsel"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@larissa-meredith-flister/skill/opposing-counsel-review",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/164-larissa-meredith-flister-opposing-counsel-review.md",
    "externalCategory": "litigation",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/164-larissa-meredith-flister-opposing-counsel-review.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/164-larissa-meredith-flister-opposing-counsel-review.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-canned-response-generator-165",
    "name": "canned-response-generator",
    "chineseName": "预设响应生成器",
    "owner": "Lawve / Anthropic",
    "practice": "法律文书",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 1,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "为常见法律查询生成模板化答复，并确定何时需要个性化关注。在回答常规法律问题（数据主体请求、供应商查询、NDA 请求、发现保留）或管理响应模板时使用。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@anthropic/skill/canned-response-generator"
    ],
    "tags": [
      "法律文书",
      "legal-drafting",
      "Apache 2.0",
      "en",
      "canned",
      "response"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@anthropic/skill/canned-response-generator",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/165-anthropic-canned-response-generator.md",
    "externalCategory": "legal-drafting",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/165-anthropic-canned-response-generator.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/165-anthropic-canned-response-generator.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-tabular-review-166",
    "name": "tabular-review",
    "chineseName": "表格审查",
    "owner": "Lawve / Antoine Louis",
    "practice": "法律文书",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 6,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "根据用户定义的列分析多个文档（PDF、DOCX）并生成带有引文的结构化 Excel 输出的指南。当用户想要执行以下操作时使用：(1) 从多个文档中提取特定信息到表中，(2) 比较合同中的条款或规定，(3) 创建包含源引文的文档审查矩阵。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@antoine-louis/skill/tabular-review"
    ],
    "tags": [
      "法律文书",
      "legal-drafting",
      "AGPL 3.0",
      "en",
      "tabular",
      "review"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@antoine-louis/skill/tabular-review",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/166-antoine-louis-tabular-review.md",
    "externalCategory": "legal-drafting",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/166-antoine-louis-tabular-review.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/166-antoine-louis-tabular-review.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-dismissal-challenge-petition-drafter-167",
    "name": "Dismissal Challenge Petition Drafter",
    "chineseName": "解雇挑战请愿书起草者",
    "owner": "Lawve / Sélim Brihi",
    "practice": "争议解决",
    "jurisdiction": "FR",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 6,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "向法国劳工法院 (Conseil de prud'hommes) 起草请愿书的指南，以对因严重不当行为而被解雇的行为提出异议，并要求将其重新归类为不公平解雇。当员工想要向 CPH 质疑其因涉嫌严重不当行为而被解雇时使用。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@selim-brihi/skill/dismissal-challenge-petition-drafter"
    ],
    "tags": [
      "争议解决",
      "litigation",
      "AGPL 3.0",
      "fr",
      "Dismissal",
      "Challenge"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@selim-brihi/skill/dismissal-challenge-petition-drafter",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/167-selim-brihi-dismissal-challenge-petition-drafter.md",
    "externalCategory": "litigation",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/167-selim-brihi-dismissal-challenge-petition-drafter.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/167-selim-brihi-dismissal-challenge-petition-drafter.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-legal-data-hunter-168",
    "name": "Legal Data Hunter",
    "chineseName": "法律数据猎人",
    "owner": "Lawve / Zacharie Laïk",
    "practice": "法律研究",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 393,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "安装并设置 Legal Data Hunter MCP 服务器。当用户想要将其 AI 代理连接到法律数据、安装法律数据猎人、添加法律搜索 MCP 或跨司法管辖区搜索法律文档时使用。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：MIT",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@zacharie-laik/skill/legal-data-hunter"
    ],
    "tags": [
      "法律研究",
      "legal-research",
      "MIT",
      "en",
      "Legal",
      "Data"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@zacharie-laik/skill/legal-data-hunter",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/168-zacharie-laik-legal-data-hunter.md",
    "externalCategory": "legal-research",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/168-zacharie-laik-legal-data-hunter.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/168-zacharie-laik-legal-data-hunter.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-icelandic-eea-gap-analysis-169",
    "name": "Icelandic EEA Gap Analysis",
    "chineseName": "冰岛欧洲经济区差距分析",
    "owner": "Lawve / Magnus Smárason",
    "practice": "国际法与人权",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 209,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "当被要求分析冰岛如何将欧盟指令或法规实施到国家法律中、确定欧盟/欧洲经济区法律与冰岛实施之间的差距或评估冰岛遵守欧洲经济区义务时，请使用此技能。引发有关欧洲经济区换位、欧洲航天局侵权或欧盟与冰岛法律差距的问题。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@magnus-smarason/skill/icelandic-eea-gap-analysis"
    ],
    "tags": [
      "国际法与人权",
      "international-law",
      "AGPL 3.0",
      "en",
      "Icelandic",
      "EEA"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@magnus-smarason/skill/icelandic-eea-gap-analysis",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/169-magnus-smarason-icelandic-eea-gap-analysis.md",
    "externalCategory": "international-law",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/169-magnus-smarason-icelandic-eea-gap-analysis.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/169-magnus-smarason-icelandic-eea-gap-analysis.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-icelandic-company-formation-170",
    "name": "Icelandic Company Formation",
    "chineseName": "冰岛公司成立",
    "owner": "Lawve / Magnus Smárason",
    "practice": "公司并购",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 506,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "当被问及有关在冰岛组建、注册或组建公司时，请使用此技能。触发有关冰岛商业实体（ehf、hf、sf、svf、ses）、资本要求、Fyrirtækjaskrá 注册、治理结构或选择正确实体类型的问题。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@magnus-smarason/skill/icelandic-company-formation"
    ],
    "tags": [
      "公司并购",
      "corporate-law",
      "AGPL 3.0",
      "en",
      "Icelandic",
      "Company"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@magnus-smarason/skill/icelandic-company-formation",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/170-magnus-smarason-icelandic-company-formation.md",
    "externalCategory": "corporate-law",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/170-magnus-smarason-icelandic-company-formation.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/170-magnus-smarason-icelandic-company-formation.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-icelandic-privacy-review-171",
    "name": "Icelandic Privacy Review",
    "chineseName": "冰岛隐私审查",
    "owner": "Lawve / Magnus Smárason",
    "practice": "数据保护",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 424,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "当要求审查冰岛法律和 GDPR 下的数据保护或隐私合规性时，请使用此技能。触发涉及个人数据处理、隐私政策、DPIA 评估、kennitala 处理、Persónuvernd 备案或来自冰岛的跨境数据传输的请求。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@magnus-smarason/skill/icelandic-privacy-review"
    ],
    "tags": [
      "数据保护",
      "data-protection",
      "AGPL 3.0",
      "en",
      "Icelandic",
      "Privacy"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@magnus-smarason/skill/icelandic-privacy-review",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/171-magnus-smarason-icelandic-privacy-review.md",
    "externalCategory": "data-protection",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/171-magnus-smarason-icelandic-privacy-review.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/171-magnus-smarason-icelandic-privacy-review.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-summary-debt-recovery-petition-drafter-172",
    "name": "Summary Debt Recovery Petition Drafter",
    "chineseName": "债务追回申请摘要起草人",
    "owner": "Lawve / Sélim Brihi",
    "practice": "争议解决",
    "jurisdiction": "FR",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 10,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "向商事法院起草紧急法院文件（转让 en référé）以追回未偿商业债务的指南。当债权人需要获得快速法庭命令以支付无争议的发票时使用。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@selim-brihi/skill/summary-debt-recovery-petition-drafter"
    ],
    "tags": [
      "争议解决",
      "litigation",
      "AGPL 3.0",
      "fr",
      "Summary",
      "Debt"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@selim-brihi/skill/summary-debt-recovery-petition-drafter",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/172-selim-brihi-summary-debt-recovery-petition-drafter.md",
    "externalCategory": "litigation",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/172-selim-brihi-summary-debt-recovery-petition-drafter.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/172-selim-brihi-summary-debt-recovery-petition-drafter.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-nil-contract-reviewer-173",
    "name": "NIL Contract Reviewer",
    "chineseName": "NIL 合同审查员",
    "owner": "Lawve / Samir Patel",
    "practice": "传媒娱乐",
    "jurisdiction": "US",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-30",
    "usage": 11,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "从运动员的角度对 NCAA 学生运动员进行 NIL（姓名、图像和肖像）合同分析。当用户说“查看此 NIL 合同”、“分析此 NIL 交易”、“检查此运动员协议”、“查看我的 NIL 协议”或上传 PDF NIL 合同以供审核时使用。识别危险信号、缺失的保护和合规性问题。制定一份包含谈判立场的结构化审查备忘录。请勿...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@samir-patel/skill/nil-contract-reviewer"
    ],
    "tags": [
      "传媒娱乐",
      "media-entertainment-sports",
      "AGPL 3.0",
      "en",
      "NIL",
      "Contract"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@samir-patel/skill/nil-contract-reviewer",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/173-samir-patel-nil-contract-reviewer.md",
    "externalCategory": "media-entertainment-sports",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/173-samir-patel-nil-contract-reviewer.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/173-samir-patel-nil-contract-reviewer.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-nis2-navigator-174",
    "name": "NIS2 Navigator",
    "chineseName": "NIS2 导航器",
    "owner": "Lawve / Oliver Schmidt-Prietz",
    "practice": "监管合规",
    "jurisdiction": "EU / FR / DE",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-26",
    "usage": 13,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "NIS2 合规性导航器 — 部署指南 > 📄 **【查看交互技能页面→】(https://oliverschmidtprietz.github.io/NIS2-Navigator/)** 请参阅 [CHANGELOG.md](CHANGELOG.md) 了解版本历史记录。 概述 NIS2 合规导航器 — 范围分...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@oliver-schmidt-prietz/skill/nis2-navigator"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "en",
      "NIS2",
      "Navigator"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@oliver-schmidt-prietz/skill/nis2-navigator",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/174-oliver-schmidt-prietz-nis2-navigator.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/174-oliver-schmidt-prietz-nis2-navigator.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/174-oliver-schmidt-prietz-nis2-navigator.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-vendor-due-diligence-175",
    "name": "Vendor Due Diligence",
    "chineseName": "供应商尽职调查",
    "owner": "Lawve / Patrick Munro",
    "practice": "监管合规",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-25",
    "usage": 37,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "用于评估 IT 服务提供商、技术供应商和第三方合作伙伴的框架。使用监管清单（GDPR、DORA、NIS2、SOX）创建跨财务、运营、合规、安全和声誉维度的结构化风险评估。在以下情况下使用：(1) 评估新供应商或技术提供商，(2) 进行第三方采购风险评估，(3) 执行关键供应商尽职调查以确保合规性，(4) 创建供应...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@patrick-munro/skill/vendor-due-diligence"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "en",
      "Vendor",
      "Due"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@patrick-munro/skill/vendor-due-diligence",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/175-patrick-munro-vendor-due-diligence.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/175-patrick-munro-vendor-due-diligence.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/175-patrick-munro-vendor-due-diligence.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-tech-contract-negotiator-176",
    "name": "Tech Contract Negotiator",
    "chineseName": "技术合同谈判员",
    "owner": "Lawve / Patrick Munro",
    "practice": "商业合同",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-04-25",
    "usage": 19,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "技术服务协议、专业服务合同和商业 B2B 交易谈判指南。提供三种立场框架（提供商有利、平衡、客户有利）、交易规模策略、异议处理模板和特许路线图。在以下情况下使用：(1) 制定 SaaS、云或托管服务协议的谈判策略，(2) 准备立场文件和备用立场，(3) 回应交易对手的反对和要求，(4) 创建保护关键利益的让步路线...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@patrick-munro/skill/tech-contract-negotiator"
    ],
    "tags": [
      "商业合同",
      "commercial-law",
      "AGPL 3.0",
      "en",
      "Tech",
      "Contract"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@patrick-munro/skill/tech-contract-negotiator",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/176-patrick-munro-tech-contract-negotiator.md",
    "externalCategory": "commercial-law",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/176-patrick-munro-tech-contract-negotiator.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/176-patrick-munro-tech-contract-negotiator.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-eu-ai-act-high-risk-implementation-readiness-177",
    "name": "EU AI Act High-Risk Implementation Readiness",
    "chineseName": "欧盟人工智能法案高风险实施准备",
    "owner": "Lawve / Werner Plutat",
    "practice": "监管合规",
    "jurisdiction": "EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-14",
    "usage": 474,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "根据欧盟人工智能法案附件三，评估和实施高风险人工智能系统的实施准备情况，包括提供商和部署者的义务、合格评定、上市后监控和欧盟数据库注册。当用户说“我们将其归类为高风险，现在怎么办？”、“制定欧盟人工智能法案准备计划”、“评估我们的附件三合规差距”、“高风险人工智能的提供者/部署者需要实施什么？”、“准备合格评估”...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@werner-plutat/skill/eu-ai-act-high-risk-implementation-readiness"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "en",
      "Act",
      "High"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@werner-plutat/skill/eu-ai-act-high-risk-implementation-readiness",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/177-werner-plutat-eu-ai-act-high-risk-implementation-readiness.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/177-werner-plutat-eu-ai-act-high-risk-implementation-readiness.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/177-werner-plutat-eu-ai-act-high-risk-implementation-readiness.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-icelandic-contract-review-178",
    "name": "Icelandic Contract Review",
    "chineseName": "冰岛合同审查",
    "owner": "Lawve / Magnus Smárason",
    "practice": "商业合同",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-04-13",
    "usage": 248,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "当被要求审查、分析或起草受冰岛法律管辖的合同时，请使用此技能。触发涉及冰岛商业协议、消费者合同、销售协议、服务合同或冰岛强制性规则可能适用的任何合同的请求。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@magnus-smarason/skill/icelandic-contract-review"
    ],
    "tags": [
      "商业合同",
      "commercial-law",
      "AGPL 3.0",
      "en",
      "Icelandic",
      "Contract"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@magnus-smarason/skill/icelandic-contract-review",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/178-magnus-smarason-icelandic-contract-review.md",
    "externalCategory": "commercial-law",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/178-magnus-smarason-icelandic-contract-review.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/178-magnus-smarason-icelandic-contract-review.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-icelandic-labour-law-179",
    "name": "Icelandic Labour Law",
    "chineseName": "冰岛劳动法",
    "owner": "Lawve / Magnus Smárason",
    "practice": "劳动雇佣",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-11",
    "usage": 225,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "当被问及冰岛就业法、劳动关系、工作场所权利或集体协议时，请使用此技能。引发有关招聘、解雇、工作条件、育儿假、工会、集体谈判、工作场所安全或冰岛 Félagsdómur 劳工法庭的问题。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@magnus-smarason/skill/icelandic-labour-law"
    ],
    "tags": [
      "劳动雇佣",
      "employment-law",
      "AGPL 3.0",
      "en",
      "Icelandic",
      "Labour"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@magnus-smarason/skill/icelandic-labour-law",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/179-magnus-smarason-icelandic-labour-law.md",
    "externalCategory": "employment-law",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/179-magnus-smarason-icelandic-labour-law.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/179-magnus-smarason-icelandic-labour-law.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-word-editor-180",
    "name": "word-editor",
    "chineseName": "文字编辑器",
    "owner": "Lawve / Antoine Louis",
    "practice": "办公自动化",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-04-10",
    "usage": 19,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "使用 SuperDoc CLI 编辑、查询和转换 Word 文档 (.docx)。当用户要求阅读、搜索、修改、格式化、注释、跟踪更改或查看 .docx 文件中的更改时使用。触发涉及 Word 文档的任何任务 — 文本替换、红线标注、合同标记、模板填充、批量编辑、内容提取或文档审阅。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@antoine-louis/skill/word-editor"
    ],
    "tags": [
      "办公自动化",
      "microsoft-office",
      "AGPL 3.0",
      "en",
      "word",
      "editor"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@antoine-louis/skill/word-editor",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/180-antoine-louis-word-editor.md",
    "externalCategory": "microsoft-office",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/180-antoine-louis-word-editor.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/180-antoine-louis-word-editor.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-eu-ai-act-examination-report-generator-181",
    "name": "EU AI Act Examination Report Generator",
    "chineseName": "欧盟人工智能法案审查报告生成器",
    "owner": "Lawve / Oliver Schmidt-Prietz",
    "practice": "监管合规",
    "jurisdiction": "EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-05",
    "usage": 16,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "欧盟人工智能法案审查报告生成器 — 部署指南 > 📄 **【查看互动技能页面→】(https://oliverschmidtprietz.github.io/EU-AI-Act-Suite/ai-act-report/)** 请参阅 [CHANGELOG.md](CHANGELOG.md) 了解版本历史记录。 ...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-examination-report-generator"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "en",
      "Act",
      "Examination"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-examination-report-generator",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/181-oliver-schmidt-prietz-eu-ai-act-examination-report-generator.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/181-oliver-schmidt-prietz-eu-ai-act-examination-report-generator.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/181-oliver-schmidt-prietz-eu-ai-act-examination-report-generator.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-eu-data-act-compliance-assessment-182",
    "name": "EU Data Act Compliance Assessment",
    "chineseName": "欧盟数据法合规性评估",
    "owner": "Lawve / Werner Plutat",
    "practice": "监管合规",
    "jurisdiction": "EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-04-02",
    "usage": 4,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "评估《欧盟数据法》（法规 (EU) 2023/2854）规定的互联产品、物联网设备、数据共享、云交换、B2B 公平性、B2G 数据访问、争议解决和国际数据传输的合规义务。涵盖范围评估（制造商、数据持有者、数据接收者角色）、用户数据访问权、预售透明度、不公平合同条款、公共机构数据请求、云可移植性、争议解决机制、国际...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@werner-plutat/skill/eu-data-act-compliance-assessment"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "en",
      "Data",
      "Act"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@werner-plutat/skill/eu-data-act-compliance-assessment",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/182-werner-plutat-eu-data-act-compliance-assessment.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/182-werner-plutat-eu-data-act-compliance-assessment.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/182-werner-plutat-eu-data-act-compliance-assessment.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-word-editor-183",
    "name": "word-editor",
    "chineseName": "文字编辑器",
    "owner": "Lawve / Superdoc",
    "practice": "办公自动化",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "low",
    "version": "open-source",
    "updated": "2026-03-25",
    "usage": 5,
    "rating": 4.1,
    "reviewScore": 86,
    "description": "从命令行搜索、替换和读取 Word 文档中的文本。当用户要求编辑、搜索或从 .docx 文件中提取文本时使用。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@superdoc/skill/word-editor"
    ],
    "tags": [
      "办公自动化",
      "microsoft-office",
      "AGPL 3.0",
      "en",
      "word",
      "editor"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@superdoc/skill/word-editor",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/183-antoine-louis-word-editor.md",
    "externalCategory": "microsoft-office",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/183-antoine-louis-word-editor.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/183-antoine-louis-word-editor.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-ai-governance-reviewer-184",
    "name": "ai-governance-reviewer",
    "chineseName": "人工智能治理审稿人",
    "owner": "Lawve / Carl Ditzler",
    "practice": "监管合规",
    "jurisdiction": "EU / US",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-03-16",
    "usage": 30,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "对内部人工智能用例、人工智能产品功能、大模型工作流程或第三方人工智能供应商进行人工智能治理、法律风险、隐私、合规性、采购或供应商风险审查。该技能运行结构化的接收流程，识别所需的文档和缺失的证据，将用例映射到人工智能治理框架和适用的法律领域，并生成包含记分卡、调查结果、所有者、补救措施和后续问题的治理审查。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@carl-ditzler/skill/ai-governance-reviewer"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "Apache 2.0",
      "en",
      "governance",
      "reviewer"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@carl-ditzler/skill/ai-governance-reviewer",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/184-carl-ditzler-ai-governance-reviewer.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/184-carl-ditzler-ai-governance-reviewer.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/184-carl-ditzler-ai-governance-reviewer.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-eu-ai-act-obligations-mapper-185",
    "name": "EU AI Act Obligations Mapper",
    "chineseName": "欧盟人工智能法案义务映射器",
    "owner": "Lawve / Oliver Schmidt-Prietz",
    "practice": "监管合规",
    "jurisdiction": "EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-03-16",
    "usage": 17,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "欧盟人工智能法案义务映射器 — 部署指南 > 📄 **【查看互动技能页面→】(https://oliverschmidtprietz.github.io/EU-AI-Act-Suite/ai-act-obligations/)** 请参阅 [CHANGELOG.md](CHANGELOG.md) 了解版本历史记...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-obligations-mapper"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "en",
      "Act",
      "Obligations"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-obligations-mapper",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/185-oliver-schmidt-prietz-eu-ai-act-obligations-mapper.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/185-oliver-schmidt-prietz-eu-ai-act-obligations-mapper.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/185-oliver-schmidt-prietz-eu-ai-act-obligations-mapper.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-eu-ai-act-quick-assessment-186",
    "name": "EU AI Act Quick Assessment",
    "chineseName": "欧盟人工智能法案快速评估",
    "owner": "Lawve / Oliver Schmidt-Prietz",
    "practice": "监管合规",
    "jurisdiction": "EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-03-16",
    "usage": 41,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "欧盟人工智能法案快速评估 — 部署指南 > 📄 **【查看互动技能页面→】(https://oliverschmidtprietz.github.io/EU-AI-Act-Suite/ai-act-quick/)** 请参阅 [CHANGELOG.md](CHANGELOG.md) 了解版本历史记录。 概述 欧...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-quick-assessment"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "en",
      "Act",
      "Quick"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-quick-assessment",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/186-oliver-schmidt-prietz-eu-ai-act-quick-assessment.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/186-oliver-schmidt-prietz-eu-ai-act-quick-assessment.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/186-oliver-schmidt-prietz-eu-ai-act-quick-assessment.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-eu-ai-act-role-determination-187",
    "name": "EU AI Act Role Determination",
    "chineseName": "欧盟人工智能法案角色确定",
    "owner": "Lawve / Oliver Schmidt-Prietz",
    "practice": "监管合规",
    "jurisdiction": "EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-03-16",
    "usage": 6,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "欧盟人工智能法案角色确定 — 部署指南 > 📄 **【查看互动技能页面→】(https://oliverschmidtprietz.github.io/EU-AI-Act-Suite/ai-act-roles/)** 请参阅 [CHANGELOG.md](CHANGELOG.md) 了解版本历史记录。 概述 欧...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-role-determination"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "en",
      "Act",
      "Role"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-role-determination",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/187-oliver-schmidt-prietz-eu-ai-act-role-determination.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/187-oliver-schmidt-prietz-eu-ai-act-role-determination.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/187-oliver-schmidt-prietz-eu-ai-act-role-determination.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-eu-ai-act-system-classifier-188",
    "name": "EU AI Act System Classifier",
    "chineseName": "欧盟人工智能法案系统分类器",
    "owner": "Lawve / Oliver Schmidt-Prietz",
    "practice": "监管合规",
    "jurisdiction": "EU",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-03-16",
    "usage": 13,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "EU AI Act 系统分类器 — 部署指南 > 📄 **【查看交互技能页面→】(https://oliverschmidtprietz.github.io/EU-AI-Act-Suite/ai-act-classifier/)** 请参阅 [CHANGELOG.md](CHANGELOG.md) 了解版本历史...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-system-classifier"
    ],
    "tags": [
      "监管合规",
      "compliance",
      "AGPL 3.0",
      "en",
      "Act",
      "System"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@oliver-schmidt-prietz/skill/eu-ai-act-system-classifier",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/188-werner-plutat-eu-ai-act-system-classifier.md",
    "externalCategory": "compliance",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/188-werner-plutat-eu-ai-act-system-classifier.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/188-werner-plutat-eu-ai-act-system-classifier.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-skill-creation-189",
    "name": "skill-creation",
    "chineseName": "技能创造",
    "owner": "Lawve / OpenAI",
    "practice": "Skill 构建",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "low",
    "version": "open-source",
    "updated": "2026-02-09",
    "usage": 700,
    "rating": 4.1,
    "reviewScore": 86,
    "description": "创建有效技能的指南。当用户想要创建新技能（或更新现有技能）以通过专业知识、工作流程或工具集成扩展模型的功能时使用。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@openai/skill/skill-creation"
    ],
    "tags": [
      "Skill 构建",
      "skill-authoring",
      "Apache 2.0",
      "en",
      "skill",
      "creation"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@openai/skill/skill-creation",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/189-openai-skill-creation.md",
    "externalCategory": "skill-authoring",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/189-openai-skill-creation.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/189-openai-skill-creation.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-excel-190",
    "name": "Excel",
    "chineseName": "Excel",
    "owner": "Lawve / Anthropic",
    "practice": "办公自动化",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "low",
    "version": "open-source",
    "updated": "2026-02-06",
    "usage": 2,
    "rating": 4.1,
    "reviewScore": 86,
    "description": "Toolkit for comprehensive spreadsheet creation, editing, and analysis with support for formulas, formatting, data analysis, and visualization. Use to work wi...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Proprietary",
      "已抓取：README.md；SKILL.md 未公开",
      "https://lawve.ai/@anthropic/skill/excel"
    ],
    "tags": [
      "办公自动化",
      "microsoft-office",
      "Proprietary",
      "en",
      "Excel"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@anthropic/skill/excel",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/190-anthropic-excel.md",
    "externalCategory": "microsoft-office",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/190-anthropic-excel.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/190-anthropic-excel.SKILL.md",
    "hasReadmeMd": false,
    "hasSkillMd": false,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-pdf-editor-191",
    "name": "pdf-editor",
    "chineseName": "pdf编辑器",
    "owner": "Lawve / Anthropic",
    "practice": "办公自动化",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-02-06",
    "usage": 4,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "用于全面 PDF 操作的工具包，包括提取文本和表格、创建新 PDF、合并/拆分文档以及处理表单。用于填写 PDF 表单或以编程方式大规模处理、生成或分析 PDF 文档。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Proprietary",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@anthropic/skill/pdf-editor"
    ],
    "tags": [
      "办公自动化",
      "adobe-acrobat",
      "Proprietary",
      "en",
      "pdf",
      "editor"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@anthropic/skill/pdf-editor",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/191-anthropic-pdf-editor.md",
    "externalCategory": "adobe-acrobat",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/191-anthropic-pdf-editor.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/191-anthropic-pdf-editor.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-powerpoint-editor-192",
    "name": "powerpoint-editor",
    "chineseName": "Powerpoint编辑器",
    "owner": "Lawve / Anthropic",
    "practice": "办公自动化",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "low",
    "version": "open-source",
    "updated": "2026-02-06",
    "usage": 7,
    "rating": 4.1,
    "reviewScore": 86,
    "description": "用于综合演示文稿创建、编辑和分析的工具包。用于处理演示文稿（.pptx 文件）以执行以下操作：(1) 创建新演示文稿，(2) 修改或编辑内容，(3) 使用布局，(4) 添加注释或演讲者备注，或任何其他演示任务",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Proprietary",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@anthropic/skill/powerpoint-editor"
    ],
    "tags": [
      "办公自动化",
      "microsoft-office",
      "Proprietary",
      "en",
      "powerpoint",
      "editor"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@anthropic/skill/powerpoint-editor",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/192-anthropic-powerpoint-editor.md",
    "externalCategory": "microsoft-office",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/192-anthropic-powerpoint-editor.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/192-anthropic-powerpoint-editor.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-skill-creation-193",
    "name": "skill-creation",
    "chineseName": "技能创造",
    "owner": "Lawve / Anthropic",
    "practice": "Skill 构建",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "low",
    "version": "open-source",
    "updated": "2026-02-06",
    "usage": 1,
    "rating": 4.1,
    "reviewScore": 86,
    "description": "创建有效技能的指南。当用户想要创建新技能（或更新现有技能）以通过专业知识、工作流程或工具集成扩展模型的功能时使用。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@anthropic/skill/skill-creation"
    ],
    "tags": [
      "Skill 构建",
      "skill-authoring",
      "Proprietary",
      "en",
      "skill",
      "creation"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@anthropic/skill/skill-creation",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/193-openai-skill-creation.md",
    "externalCategory": "skill-authoring",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/193-openai-skill-creation.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/193-openai-skill-creation.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-word-editor-194",
    "name": "word-editor",
    "chineseName": "文字编辑器",
    "owner": "Lawve / Anthropic",
    "practice": "办公自动化",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "low",
    "version": "open-source",
    "updated": "2026-02-06",
    "usage": 8,
    "rating": 4.1,
    "reviewScore": 86,
    "description": "用于全面文档创建、编辑和分析的工具包，支持跟踪更改、注释、格式保存和文本提取。用于处理专业文档（.docx 文件）以执行以下操作：(1) 创建新文档，(2) 修改或编辑内容，(3) 使用跟踪的更改，(4) 添加注释或任何其他文档任务",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@anthropic/skill/word-editor"
    ],
    "tags": [
      "办公自动化",
      "microsoft-office",
      "Proprietary",
      "en",
      "word",
      "editor"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@anthropic/skill/word-editor",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/194-antoine-louis-word-editor.md",
    "externalCategory": "microsoft-office",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/194-antoine-louis-word-editor.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/194-antoine-louis-word-editor.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-code-security-review-195",
    "name": "code-security-review",
    "chineseName": "代码安全审查",
    "owner": "Lawve / OpenAI",
    "practice": "技术实验",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-02-02",
    "usage": 338,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "执行特定于语言和框架的安全最佳实践审查并提出改进建议。涵盖 Python、JavaScript/TypeScript 和 Go。当用户请求安全最佳实践指南、安全审查或报告或默认安全编码帮助时使用。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@openai/skill/code-security-review"
    ],
    "tags": [
      "技术实验",
      "vibe-coding",
      "Apache 2.0",
      "en",
      "code",
      "security"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@openai/skill/code-security-review",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/195-openai-code-security-review.md",
    "externalCategory": "vibe-coding",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/195-openai-code-security-review.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/195-openai-code-security-review.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-excel-editor-196",
    "name": "excel-editor",
    "chineseName": "excel编辑器",
    "owner": "Lawve / OpenAI",
    "practice": "办公自动化",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "low",
    "version": "open-source",
    "updated": "2026-01-30",
    "usage": 1,
    "rating": 4.1,
    "reviewScore": 86,
    "description": "用于全面电子表格读取、创建、编辑和分析以及视觉质量控制的工具包。用于使用电子表格（.xlsx、.xlsm、.csv、.tsv）执行以下操作：(1) 使用公式和格式创建新电子表格，(2) 读取或分析表格数据，(3) 修改现有电子表格，同时保留公式，(4) 使用正确的格式构建财务模型，(5) 使用表内图表或任何其他电...",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@openai/skill/excel-editor"
    ],
    "tags": [
      "办公自动化",
      "microsoft-office",
      "Apache 2.0",
      "en",
      "excel",
      "editor"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@openai/skill/excel-editor",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/196-openai-excel-editor.md",
    "externalCategory": "microsoft-office",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/196-openai-excel-editor.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/196-openai-excel-editor.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-nda-reviewer-197",
    "name": "NDA Reviewer",
    "chineseName": "NDA 审查员",
    "owner": "Lawve / Anthropic",
    "practice": "商业合同",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "low",
    "version": "open-source",
    "updated": "2026-01-30",
    "usage": 27,
    "rating": 4.1,
    "reviewScore": 86,
    "description": "筛选传入的 NDA，并将其分类为绿色（标准）、黄色（需要审查）或红色（重大问题）。当新的 NDA 来自销售或业务开发时、评估 NDA 风险级别或决定 NDA 是否需要全面的顾问审查时使用。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@anthropic/skill/nda-reviewer"
    ],
    "tags": [
      "商业合同",
      "commercial-law",
      "Apache 2.0",
      "en",
      "NDA",
      "Reviewer"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@anthropic/skill/nda-reviewer",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/197-jamie-tso-nda-reviewer.md",
    "externalCategory": "commercial-law",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/197-jamie-tso-nda-reviewer.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/197-jamie-tso-nda-reviewer.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-pdf-editor-198",
    "name": "pdf-editor",
    "chineseName": "pdf编辑器",
    "owner": "Lawve / OpenAI",
    "practice": "办公自动化",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "low",
    "version": "open-source",
    "updated": "2026-01-30",
    "usage": 3,
    "rating": 4.1,
    "reviewScore": 86,
    "description": "用于全面 PDF 阅读和创建以及视觉质量控制的工具包。用于处理 PDF（.pdf 文件）以执行以下操作：(1) 读取现有 PDF 或从现有 PDF 中提取内容，(2) 创建具有专业格式的新 PDF 文档，(3) 生成需要精确排版和设计的报告、文档或布局，或任何其他 PDF 阅读或生成任务。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Proprietary",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@openai/skill/pdf-editor"
    ],
    "tags": [
      "办公自动化",
      "adobe-acrobat",
      "Apache 2.0",
      "en",
      "pdf",
      "editor"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@openai/skill/pdf-editor",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/198-anthropic-pdf-editor.md",
    "externalCategory": "adobe-acrobat",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/198-anthropic-pdf-editor.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/198-anthropic-pdf-editor.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-playbook-reviewer-199",
    "name": "Playbook Reviewer",
    "chineseName": "剧本审阅者",
    "owner": "Lawve / Anthropic",
    "practice": "商业合同",
    "jurisdiction": "INT",
    "status": "published",
    "risk": "medium",
    "version": "open-source",
    "updated": "2026-01-30",
    "usage": 71,
    "rating": 4.1,
    "reviewScore": 82,
    "description": "根据组织的谈判手册审查合同，标记偏差并生成红线建议。在审查供应商合同、客户协议或任何商业协议时使用，您需要根据标准立场进行逐条分析。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@anthropic/skill/playbook-reviewer"
    ],
    "tags": [
      "商业合同",
      "commercial-law",
      "Apache 2.0",
      "en",
      "Playbook",
      "Reviewer"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@anthropic/skill/playbook-reviewer",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/199-anthropic-playbook-reviewer.md",
    "externalCategory": "commercial-law",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/199-anthropic-playbook-reviewer.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/199-anthropic-playbook-reviewer.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-word-editor-200",
    "name": "word-editor",
    "chineseName": "文字编辑器",
    "owner": "Lawve / OpenAI",
    "practice": "办公自动化",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "low",
    "version": "open-source",
    "updated": "2026-01-30",
    "usage": 1,
    "rating": 4.1,
    "reviewScore": 86,
    "description": "用于全面文档阅读和创建以及视觉质量控制的工具包。用于处理 Word 文档（.docx 文件）：(1) 从现有 DOCX 文件中读取或提取内容，(2) 创建具有专业格式的新 Word 文档，(3) 编辑需要精确排版和布局的文档，或任何其他 DOCX 读取或生成任务。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@openai/skill/word-editor"
    ],
    "tags": [
      "办公自动化",
      "microsoft-office",
      "Apache 2.0",
      "en",
      "word",
      "editor"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@openai/skill/word-editor",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/200-antoine-louis-word-editor.md",
    "externalCategory": "microsoft-office",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/200-antoine-louis-word-editor.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/200-antoine-louis-word-editor.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-shareholder-disclosure-petition-drafter-201",
    "name": "Shareholder Disclosure Petition Drafter",
    "chineseName": "股东披露请愿书起草人",
    "owner": "Lawve / Sélim Brihi",
    "practice": "公司并购",
    "jurisdiction": "FR",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-01-23",
    "usage": 4,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "根据《法国商法典》第 L. 238-1 条，起草紧急法院文件（转让 en référé）以强制向股东披露公司文件的指南。当股东被拒绝访问年度账目、管理报告或会议纪要时使用。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@selim-brihi/skill/shareholder-disclosure-petition-drafter"
    ],
    "tags": [
      "公司并购",
      "corporate-law",
      "AGPL 3.0",
      "fr",
      "Shareholder",
      "Disclosure"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@selim-brihi/skill/shareholder-disclosure-petition-drafter",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/201-selim-brihi-shareholder-disclosure-petition-drafter.md",
    "externalCategory": "corporate-law",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/201-selim-brihi-shareholder-disclosure-petition-drafter.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/201-selim-brihi-shareholder-disclosure-petition-drafter.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-dismissal-notification-generator-202",
    "name": "Dismissal Notification Generator",
    "chineseName": "解雇通知生成器",
    "owner": "Lawve / Sélim Brihi",
    "practice": "劳动雇佣",
    "jurisdiction": "FR",
    "status": "published",
    "risk": "high",
    "version": "open-source",
    "updated": "2026-01-16",
    "usage": 3,
    "rating": 4.1,
    "reviewScore": 78,
    "description": "符合法国劳动法的解雇通知起草指南。当用户要求起草、准备、创建或编辑终止信时使用，特别是针对严重不当行为、重大不当行为或个人原因。该技能指导准确信息的收集和起草具有法国法律规定的所有强制性要素的合法合理的通知。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：AGPL 3.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@selim-brihi/skill/dismissal-notification-generator"
    ],
    "tags": [
      "劳动雇佣",
      "employment-law",
      "AGPL 3.0",
      "fr",
      "Dismissal",
      "Notification"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@selim-brihi/skill/dismissal-notification-generator",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/202-selim-brihi-dismissal-notification-generator.md",
    "externalCategory": "employment-law",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/202-selim-brihi-dismissal-notification-generator.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/202-selim-brihi-dismissal-notification-generator.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  },
  {
    "id": "lawve-excel-editor-203",
    "name": "excel-editor",
    "chineseName": "excel编辑器",
    "owner": "Lawve / Manus",
    "practice": "办公自动化",
    "jurisdiction": "跨法域",
    "status": "published",
    "risk": "low",
    "version": "open-source",
    "updated": "2025-12-01",
    "usage": 1,
    "rating": 4.1,
    "reviewScore": 86,
    "description": "专业的 Excel 电子表格创建，重点关注美观和数据分析。在创建电子表格时使用，以清晰、专业的格式组织、分析和呈现结构化数据。",
    "suitableFor": [
      "外部开源方法参考",
      "内部 Skill 二次改造",
      "同类任务快速试用"
    ],
    "notFor": [
      "未经律师复核直接对客户出具",
      "替代本所标准模板或正式法律意见"
    ],
    "workflow": [
      "阅读 README 与适用边界",
      "研读 SKILL.md 的触发条件、流程和安全边界",
      "用本所样例任务试跑",
      "补充法域和团队口径",
      "进入内部评审后发布"
    ],
    "outputFormat": "Markdown README、SKILL.md 原文、任务说明、可复用流程、内部改造路径",
    "sources": [
      "外部开源：Lawve.ai",
      "许可证：Apache 2.0",
      "已抓取：README.md + SKILL.md",
      "https://lawve.ai/@manus/skill/excel-editor"
    ],
    "tags": [
      "办公自动化",
      "microsoft-office",
      "Proprietary",
      "en",
      "excel",
      "editor"
    ],
    "origin": "external-open-source",
    "sourceName": "Lawve.ai",
    "sourceUrl": "https://lawve.ai/@manus/skill/excel-editor",
    "mdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/md/203-openai-excel-editor.md",
    "externalCategory": "microsoft-office",
    "readmeMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/203-openai-excel-editor.README.md",
    "skillMdPath": "/Users/lilithium/Desktop/my-project/outputs/lawve-skills-md-full/raw/203-openai-excel-editor.SKILL.md",
    "hasReadmeMd": true,
    "hasSkillMd": true,
    "externalContentVersion": "lawve-skills-md-full-2026-07-19"
  }
] satisfies FirmSkill[]
