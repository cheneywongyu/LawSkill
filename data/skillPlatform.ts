import { lawveExternalSkills } from './lawveExternalSkills'

export { lawveExternalSkills }

export type SkillStatus = 'published' | 'review' | 'draft' | 'deprecated'
export type RiskLevel = 'low' | 'medium' | 'high'
export type SkillOrigin = 'internal' | 'external-open-source'

export type FirmSkill = {
  id: string
  name: string
  chineseName: string
  owner: string
  practice: string
  jurisdiction: string
  status: SkillStatus
  risk: RiskLevel
  version: string
  updated: string
  usage: number
  rating: number
  reviewScore: number
  description: string
  suitableFor: string[]
  notFor: string[]
  workflow: string[]
  outputFormat: string
  sources: string[]
  tags: string[]
  origin: SkillOrigin
  sourceName: string
  sourceUrl?: string
  mdPath?: string
  readmeMdPath?: string
  skillMdPath?: string
  hasReadmeMd?: boolean
  hasSkillMd?: boolean
  externalContentVersion?: string
  internalSavedPath?: string
  relativeMdPath?: string
  sourceSkillId?: string
  sourceSkillMdPath?: string
  savedAt?: string
  externalCategory?: string
  isMySkill?: boolean
  sourceSkillName?: string
  uploadNames?: string[]
}

export const originLabels: Record<SkillOrigin, string> = {
  internal: '示例内部 Skill',
  'external-open-source': '外部开源',
}

export const statusLabels: Record<SkillStatus, string> = {
  published: '已发布',
  review: '评审中',
  draft: '草稿',
  deprecated: '已弃用',
}

export const riskLabels: Record<RiskLevel, string> = {
  low: '低风险',
  medium: '中风险',
  high: '高风险',
}

export const skillCategories = [
  {
    id: 'data-compliance',
    name: '数据合规',
    englishName: 'Data Compliance',
    practice: '数据保护',
    summary: '供应商、DPA、跨境传输、安全措施和分包处理审查。',
    signal: '高频',
    accent: 'bg-sky-950',
    soft: 'bg-sky-50',
    border: 'border-sky-200',
  },
  {
    id: 'regulatory-compliance',
    name: '监管合规',
    englishName: 'Regulatory Compliance',
    practice: '监管合规',
    summary: '监管追踪、执法行动、政策透明度和合规评估。',
    signal: '外部',
    accent: 'bg-cyan-950',
    soft: 'bg-cyan-50',
    border: 'border-cyan-200',
  },
  {
    id: 'commercial-contracts',
    name: '商业合同',
    englishName: 'Commercial Contracts',
    practice: '商业合同',
    summary: 'NDA、采购、SaaS、责任限制和谈判底线快速识别。',
    signal: '通用',
    accent: 'bg-slate-950',
    soft: 'bg-slate-100',
    border: 'border-slate-200',
  },
  {
    id: 'legal-drafting',
    name: '法律文书',
    englishName: 'Legal Drafting',
    practice: '法律文书',
    summary: '协议、政策、申请材料和法律文本的结构化起草。',
    signal: '起草',
    accent: 'bg-zinc-950',
    soft: 'bg-zinc-50',
    border: 'border-zinc-200',
  },
  {
    id: 'disputes',
    name: '争议解决',
    englishName: 'Disputes',
    practice: '争议解决',
    summary: '诉讼材料时间线、截止日、案件阶段和客户汇报。',
    signal: '期限',
    accent: 'bg-indigo-950',
    soft: 'bg-indigo-50',
    border: 'border-indigo-200',
  },
  {
    id: 'corporate-ma',
    name: '公司并购',
    englishName: 'Corporate / M&A',
    practice: '公司并购',
    summary: '资料室初筛、红旗风险、资料缺口和追问清单。',
    signal: '红旗',
    accent: 'bg-emerald-950',
    soft: 'bg-emerald-50',
    border: 'border-emerald-200',
  },
  {
    id: 'employment',
    name: '劳动雇佣',
    englishName: 'Employment',
    practice: '劳动雇佣',
    summary: '解除路径、证据缺口、地方口径和补偿风险。',
    signal: '敏感',
    accent: 'bg-rose-950',
    soft: 'bg-rose-50',
    border: 'border-rose-200',
  },
  {
    id: 'ip-tech',
    name: '知识产权',
    englishName: 'IP / Technology',
    practice: '知识产权',
    summary: '许可范围、排他性、改进成果和终止后安排。',
    signal: '资产',
    accent: 'bg-violet-950',
    soft: 'bg-violet-50',
    border: 'border-violet-200',
  },
  {
    id: 'legal-research',
    name: '法律研究',
    englishName: 'Legal Research',
    practice: '法律研究',
    summary: '法规、案例、论文和官方文件检索与引用核验。',
    signal: '研究',
    accent: 'bg-blue-950',
    soft: 'bg-blue-50',
    border: 'border-blue-200',
  },
  {
    id: 'legal-operations',
    name: '法律运营',
    englishName: 'Legal Operations',
    practice: '法律运营',
    summary: '知识管理、案件运营、团队流程和交付协同。',
    signal: '运营',
    accent: 'bg-teal-950',
    soft: 'bg-teal-50',
    border: 'border-teal-200',
  },
  {
    id: 'office-automation',
    name: '办公自动化',
    englishName: 'Office Automation',
    practice: '办公自动化',
    summary: 'Excel、Word、PDF、Acrobat 等文档处理工作流。',
    signal: '工具',
    accent: 'bg-stone-950',
    soft: 'bg-stone-50',
    border: 'border-stone-200',
  },
  {
    id: 'finance',
    name: '金融业务',
    englishName: 'Banking / Finance',
    practice: '金融业务',
    summary: '金融产品、准入、授权、投融资和监管框架分析。',
    signal: '金融',
    accent: 'bg-lime-950',
    soft: 'bg-lime-50',
    border: 'border-lime-200',
  },
  {
    id: 'legal-education',
    name: '法律培训',
    englishName: 'Legal Education',
    practice: '法律培训',
    summary: '考试、课程、研究训练和内部学习材料生成。',
    signal: '培训',
    accent: 'bg-orange-950',
    soft: 'bg-orange-50',
    border: 'border-orange-200',
  },
  {
    id: 'skill-authoring',
    name: 'Skill 构建',
    englishName: 'Skill Authoring',
    practice: 'Skill 构建',
    summary: '创建、测试、包装和发布 AI Skill 的方法论。',
    signal: '建设',
    accent: 'bg-fuchsia-950',
    soft: 'bg-fuchsia-50',
    border: 'border-fuchsia-200',
  },
  {
    id: 'international-human-rights',
    name: '国际法与人权',
    englishName: 'International / Human Rights',
    practice: '国际法与人权',
    summary: '国际法庭、特别法庭、人权机制和跨境公共法材料。',
    signal: '国际',
    accent: 'bg-red-950',
    soft: 'bg-red-50',
    border: 'border-red-200',
  },
  {
    id: 'tech-experiments',
    name: '技术实验',
    englishName: 'Technology Experiments',
    practice: '技术实验',
    summary: '面向法律工作的编程、自动化和原型探索。',
    signal: '实验',
    accent: 'bg-neutral-950',
    soft: 'bg-neutral-50',
    border: 'border-neutral-200',
  },
  {
    id: 'media-entertainment',
    name: '传媒娱乐',
    englishName: 'Media / Entertainment',
    practice: '传媒娱乐',
    summary: '内容、体育、娱乐与媒体行业相关法律工作流。',
    signal: '行业',
    accent: 'bg-pink-950',
    soft: 'bg-pink-50',
    border: 'border-pink-200',
  },
]

export const internalFirmSkills: FirmSkill[] = [
  {
    id: 'dpa-review',
    name: 'Vendor DPA Review',
    chineseName: '供应商数据处理协议审查',
    owner: '数据合规组',
    practice: '数据保护',
    jurisdiction: '中国 / 欧盟',
    status: 'published',
    risk: 'high',
    version: '2.4',
    updated: '2026-07-12',
    usage: 342,
    rating: 4.8,
    reviewScore: 96,
    description: '审查供应商 DPA 中的数据角色、跨境传输、安全措施、分包处理和审计权利。',
    suitableFor: ['SaaS 采购', '云服务供应商', '跨境数据处理', 'GDPR 与 PIPL 并行审查'],
    notFor: ['员工个人信息专项审计', '网络安全等级保护测评', '正式法律意见直接出具'],
    workflow: ['识别控制者与处理者角色', '抽取关键义务和责任限制', '比对律所标准条款库', '输出红线问题和谈判建议'],
    outputFormat: '风险矩阵、条款位置、建议改写、客户摘要',
    sources: ['PIPL', 'GDPR Art. 28', '律所 DPA playbook v5'],
    tags: ['DPA', 'PIPL', 'GDPR', '供应商管理'],
    origin: 'internal',
    sourceName: '本所数据合规组',
  },
  {
    id: 'nda-one-sided',
    name: 'NDA One-sided Clause Detector',
    chineseName: '保密协议单边条款识别',
    owner: '商业合同组',
    practice: '商业合同',
    jurisdiction: '通用',
    status: 'published',
    risk: 'medium',
    version: '1.9',
    updated: '2026-07-08',
    usage: 518,
    rating: 4.7,
    reviewScore: 92,
    description: '识别 NDA 中过宽保密范围、单向义务、过长期限、禁令救济和不合理违约责任。',
    suitableFor: ['双向 NDA', '投资接触前保密安排', '供应商初筛', '内部快速审查'],
    notFor: ['国家秘密或涉密项目', '复杂技术许可', '争议解决阶段法律意见'],
    workflow: ['提取定义和义务主体', '识别单边约束', '匹配谈判底线', '生成批注式修改建议'],
    outputFormat: '问题清单、严重等级、建议条款、谈判话术',
    sources: ['律所 NDA 标准模板', '合同风险标签库'],
    tags: ['NDA', '合同审查', '批注'],
    origin: 'internal',
    sourceName: '本所商业合同组',
  },
  {
    id: 'filing-timeline',
    name: 'Litigation Filing Timeline',
    chineseName: '诉讼材料时间线生成',
    owner: '争议解决组',
    practice: '争议解决',
    jurisdiction: '中国',
    status: 'review',
    risk: 'medium',
    version: '0.8',
    updated: '2026-07-15',
    usage: 91,
    rating: 4.3,
    reviewScore: 81,
    description: '从起诉状、判决书、通知书中抽取事实经过、程序节点和关键期限。',
    suitableFor: ['案件事实梳理', '客户进度汇报', '上诉期提醒', '证据交换准备'],
    notFor: ['自动判断诉讼策略', '替代律师核对法定期限', '刑事案件'],
    workflow: ['抽取全部日期', '区分事实和程序节点', '计算关键期限', '生成阶段摘要'],
    outputFormat: '时间线、截止日、客户汇报段落',
    sources: ['民事诉讼法', '团队案件管理规范'],
    tags: ['诉讼', '时间线', '期限'],
    origin: 'internal',
    sourceName: '本所争议解决组',
  },
  {
    id: 'ma-redflag',
    name: 'M&A Due Diligence Red Flag',
    chineseName: '并购尽调重大风险识别',
    owner: '公司并购组',
    practice: '公司并购',
    jurisdiction: '中国 / 香港',
    status: 'draft',
    risk: 'high',
    version: '0.3',
    updated: '2026-07-10',
    usage: 37,
    rating: 4.1,
    reviewScore: 68,
    description: '面向股权收购尽调资料，识别工商、资质、重大合同、劳动和诉讼风险。',
    suitableFor: ['初步尽调', '资料室批量筛查', '风险清单初稿', '合伙人复核前整理'],
    notFor: ['财务尽调', '税务专项意见', '替代正式尽调报告'],
    workflow: ['建立资料索引', '识别缺失资料', '按模块抽取风险', '生成追问清单'],
    outputFormat: '红旗清单、资料缺口、追问问题、责任团队',
    sources: ['律所 DD checklist 2026', '公司法', '劳动合同法'],
    tags: ['M&A', '尽调', '红旗'],
    origin: 'internal',
    sourceName: '本所公司并购组',
  },
  {
    id: 'employment-termination',
    name: 'Employee Termination Risk Memo',
    chineseName: '员工解除风险备忘录',
    owner: '劳动法组',
    practice: '劳动雇佣',
    jurisdiction: '中国',
    status: 'published',
    risk: 'high',
    version: '1.6',
    updated: '2026-06-28',
    usage: 204,
    rating: 4.6,
    reviewScore: 89,
    description: '根据解除原因、证据链、员工状态和地方口径生成解除风险备忘录。',
    suitableFor: ['协商解除', '严重违纪', '不胜任工作', '裁员前评估'],
    notFor: ['工伤特殊保护最终判断', '集体裁员方案直接定稿', '仲裁代理意见'],
    workflow: ['识别解除路径', '检查证据完整性', '匹配地方裁判倾向', '输出风险和补强动作'],
    outputFormat: '风险等级、证据缺口、补偿测算、操作步骤',
    sources: ['劳动合同法', '地方裁审口径库', '团队案例库'],
    tags: ['劳动法', '解除', '备忘录'],
    origin: 'internal',
    sourceName: '本所劳动法组',
  },
  {
    id: 'ip-license-review',
    name: 'IP License Agreement Review',
    chineseName: '知识产权许可协议审查',
    owner: '知识产权组',
    practice: '知识产权',
    jurisdiction: '中国 / 美国',
    status: 'published',
    risk: 'medium',
    version: '1.2',
    updated: '2026-07-03',
    usage: 126,
    rating: 4.5,
    reviewScore: 87,
    description: '审查许可范围、排他性、地域、改进成果、侵权处理和终止后安排。',
    suitableFor: ['软件许可', '商标许可', '技术合作', '联合开发'],
    notFor: ['专利无效分析', 'FTO 检索', '开源许可证专项审计'],
    workflow: ['抽取许可资产', '识别授权边界', '审查改进成果归属', '输出谈判清单'],
    outputFormat: '条款风险、授权边界表、建议改写',
    sources: ['民法典合同编', '著作权法', '团队 IP 模板库'],
    tags: ['IP', '许可', '软件'],
    origin: 'internal',
    sourceName: '本所知识产权组',
  },
]

export const firmSkills: FirmSkill[] = [...internalFirmSkills, ...lawveExternalSkills]

export const platformMetrics = [
  { label: 'Skill 总量', value: `${firmSkills.length}`, delta: `${lawveExternalSkills.length} 个外部开源` },
  { label: '示例内部', value: `${internalFirmSkills.length}`, delta: '用于演示内部沉淀方式' },
  { label: '外部开源', value: `${lawveExternalSkills.length}`, delta: 'Lawve.ai 来源' },
  { label: '高风险待复核', value: `${firmSkills.filter((skill) => skill.risk === 'high').length}`, delta: '发布前需业务复核' },
]

export const reviewQueue = [
  { id: 'r1', skill: '诉讼材料时间线生成', reviewer: '争议解决合伙人', stage: '业务方法论复核', due: '今天', priority: '高' },
  { id: 'r2', skill: '并购尽调重大风险识别', reviewer: '知识管理团队', stage: '结构化质量检查', due: '明天', priority: '高' },
  { id: 'r3', skill: '员工解除风险备忘录', reviewer: '合规负责人', stage: '风险提示更新', due: '7 月 22 日', priority: '中' },
]

export const recommendationScenarios = [
  '审查一家美国 SaaS 供应商的数据处理协议，客户关心跨境传输和分包处理。',
  '把一批起诉状和判决书整理成客户可读的案件时间线，并提醒上诉期限。',
  '快速看一份投资接触前 NDA 有没有明显单边条款。',
]
