'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  FirmSkill,
  firmSkills,
  internalFirmSkills,
  lawveExternalSkills,
  recommendationScenarios,
  riskLabels,
  skillCategories,
  statusLabels,
} from '@/data/skillPlatform'
import FireworksLayer from './FireworksLayer'
import EcosystemView from '@/components/EcosystemView'

type PlatformView = 'library' | 'recommend' | 'editor' | 'knowledge' | 'admin' | 'ecosystem'
type LibraryMode = 'home' | 'category' | 'skill'
type LibraryMotion = 'settle' | 'forward' | 'back'
type EditorTab = 'edit' | 'template' | 'qa' | 'help'
type SkillPipelineStage = 'expertise' | 'standardize' | 'improve' | 'security'
type MaterialPurpose = 'auto' | 'case' | 'method' | 'mixed'
type MaterialProfile = {
  materialType: string
  documentFunction: string
  likelyUserPostures: string[]
  matterSummary: string
  keyIssues: string[]
  plausibleTasks: string[]
  suggestedPurposes: string[]
  suggestedTriggers: string[]
  suggestedOutputs: string[]
}
type MaterialClassification = {
  purpose: Exclude<MaterialPurpose, 'auto'>
  confidence: number
  reason: string
  profile: MaterialProfile
}

const pipelineStageLabels: Record<SkillPipelineStage, string> = {
  expertise: '提取工作方法',
  standardize: '整理并生成 Skill',
  improve: '根据结果优化',
  security: '审核并发布',
}
type DetailDocTab = 'overview' | 'readme' | 'skill'
type SkillTemplateId = 'blank' | 'contract-review' | 'litigation-timeline' | 'legal-research'
type ReturnTarget = {
  view: PlatformView
  label: string
  skillId?: string
  libraryMode?: LibraryMode
}
type ModelRecommendation = {
  skillId: string
  score: number
  role?: 'core' | 'specialist' | 'support'
  reasons: string[]
  cautions: string[]
  nextPrompt: string
}
type SkillEffectTest = {
  skill: FirmSkill
  recommendation: ModelRecommendation
}
type SkillEffectTestResult = {
  mode: string
  withoutSkill: string
  withSkill: string
  comparison: string[]
}
type ModelRecommendationResult = {
  mode: string
  summary: string
  taskType: string
  matterStage: string
  riskFlags: string[]
  selectionRule?: string
  workflowPlan?: string[]
  searchHints?: string[]
  recommendedKnowledgeIds?: string[]
  fileWarnings?: string[]
  matchStage?: 'local' | 'llm'
  escalatedToLlm?: boolean
  forcedLlm?: boolean
  llmUnavailable?: boolean
  recommendations: ModelRecommendation[]
}
type SkillOptimization = {
  skillId: string
  title: string
  optimizedReadme: string
}
type MarkdownFilePayload = {
  path: string
  content: string
  error?: string
}
type EditorAiResult = {
  mode: string
  stage?: SkillPipelineStage
  verdict?: 'PASS' | 'WARN' | 'FAIL'
  resourceName?: string
  resourcePath?: string
  resourceLicense?: string
  summary: string
  issues: string[]
  suggestions: string[]
  draft: Partial<EditorDraft>
}
type EditorAppliedChange = {
  field: string
  label: string
  before: string
  after: string
}
type PendingFieldOptimization = {
  field: EditorOptimizableField
  label: string
  before: string
  after: string
  summary: string
  issues: string[]
  suggestions: string[]
}
type KnowledgeSource = {
  id: string
  title: string
  type: string
  summary: string
  practices: string[]
  keywords: string[]
}
type SensitiveHit = {
  label: string
  count: number
  strategy: string
}
type RedactionResult = {
  hits: SensitiveHit[]
  sanitizedText: string
  summary: string
}
type PendingModelAction = {
  kind: 'recommend' | 'skill-run' | 'pipeline' | 'discovery' | 'material'
  text: string
  stage?: SkillPipelineStage
}
type DiscoveryRequirements = {
  purpose: string
  users: string
  triggerConditions: string
  inputMaterials: string
  outputs: string
  jurisdiction: string
  workflowConstraints: string
  reviewBoundaries: string
}
type DiscoveryResult = {
  phase: 'discovery'
  status: 'needs_clarification' | 'ready'
  canAdvance: boolean
  assistantMessage: string
  questions: string[]
  suggestedAnswers: string[][]
  summary: string
  requirements: DiscoveryRequirements
  error?: string
}
type DiscoveryMessage = {
  role: 'user' | 'assistant'
  content: string
}
type SkillRunResult = {
  mode: string
  summary: string
  withoutSkillOutput: string
  output: string
  comparison: string[]
  citations: string[]
  followUps: string[]
  score: number
  passed: boolean
  failureReason: string
}
type SkillRunRecord = {
  id: string
  skillId: string
  skillName: string
  createdAt: string
  score: number
  passed: boolean
  rating: number
  failureReason: string
  materialPreview: string
}
type EditorDraft = {
  name: string
  chineseName: string
  practice: string
  description: string
  triggerConditions: string
  owner: string
  jurisdiction: string
  risk: FirmSkill['risk']
  inputMaterials: string
  checklist: string
  sourcePolicy: string
  prohibited: string
  deliverableTemplate: string
  outputFormat: string
  verificationChecklist: string
  qaTask: string
  versionNote: string
  approvalNote: string
  customSkillMd: string
}
type EditorOptimizableField = Exclude<keyof EditorDraft, 'customSkillMd' | 'risk' | 'owner' | 'name'>

const editorDraftFieldLabels: Partial<Record<keyof EditorDraft, string>> = {
  chineseName: 'Skill 名称',
  practice: '业务分类',
  description: '律师日常任务',
  triggerConditions: '触发条件 / 适用场景',
  jurisdiction: '适用法域',
  inputMaterials: '输入材料要求',
  checklist: '方法论 / 审查清单',
  sourcePolicy: '来源与引用规则',
  prohibited: '禁止自动判断事项',
  deliverableTemplate: '输出模板',
  outputFormat: '输出格式要求',
  verificationChecklist: '验证清单',
  qaTask: '质检试跑任务',
  versionNote: '版本说明',
  approvalNote: '发布与复核',
  customSkillMd: 'SKILL.md 手动内容',
}

const markdownFallbacks: Partial<Record<keyof EditorDraft, string>> = {
  description: '请说明这个 Skill 要解决的律师日常任务、适用场景和不适用边界。',
  triggerConditions: '列明用户在什么请求、材料和工作阶段下应触发本 Skill。',
  inputMaterials: '请列明用户需要提供的材料、文件类型、背景信息和必须补充的事实。',
  checklist: '1. 识别任务目标和材料范围。\n2. 按业务逻辑完成分析。\n3. 列出不确定事项、缺失材料和律师复核项。',
  sourcePolicy: '优先使用用户提供的材料和已批准知识源；引用时标注文件、条款、页码或法规来源；时效性事实需核验更新时间。',
  prohibited: '不得自动作出最终法律结论；不得替代承办律师完成客户交付前复核。',
  deliverableTemplate: '# 交付物\n\n## 一、结论摘要\n- \n\n## 二、事实与材料\n- \n\n## 三、分析过程\n- \n\n## 四、律师复核项\n- ',
  outputFormat: '使用清晰标题、项目符号和表格输出；对不确定事项单独列明。',
  verificationChecklist: '- 已核对任务与适用范围\n- 关键事实可追溯至材料\n- 引用和时效性已核验\n- 不确定事项与人工复核点已列明',
  qaTask: '请粘贴一段代表性材料，检查该 Skill 是否能稳定输出预期结果。',
  versionNote: 'v0.1 草稿：待试跑、复核和发布。',
  approvalNote: '承办律师复核后方可对外使用；发布前确认适用范围、保密要求和知识源引用。',
}

const qaTaskSourceFields = new Set<keyof EditorDraft>([
  'chineseName', 'practice', 'jurisdiction', 'description', 'triggerConditions', 'inputMaterials',
  'checklist', 'sourcePolicy', 'prohibited', 'deliverableTemplate', 'outputFormat', 'verificationChecklist',
])

function compactQaContext(value: string, maxLength = 260) {
  const compact = String(value || '').replace(/\s+/g, ' ').trim()
  return compact.length > maxLength ? `${compact.slice(0, maxLength)}…` : compact
}

function buildSynchronizedQaTask(draft: EditorDraft) {
  return [
    `请使用一份与“${draft.chineseName || '当前 Skill'}”真实使用场景一致的脱敏代表性材料进行试跑。`,
    `业务分类与法域：${draft.practice || '待确认'} · ${draft.jurisdiction || '待确认'}`,
    `工作目标：${compactQaContext(draft.description) || '待确认'}`,
    `触发场景：${compactQaContext(draft.triggerConditions) || '待确认'}`,
    `试跑材料应包含：${compactQaContext(draft.inputMaterials) || '待确认'}`,
    `预期交付：${compactQaContext(draft.outputFormat || draft.deliverableTemplate) || '待确认'}`,
    `验收重点：${compactQaContext(draft.verificationChecklist) || '检查输出完整性、可追溯性、风险边界和律师复核点'}`,
    '同时对比不使用 Skill 与使用当前 Skill 的输出，记录遗漏、误触发、引用不足、结构不稳定和人工修改点。',
  ].join('\n')
}

const navItems: { label: string; view: PlatformView }[] = [
  { label: '匹配任务', view: 'recommend' },
  { label: '查看 Skill', view: 'library' },
  { label: '编辑 Skill', view: 'editor' },
  { label: '技能生态', view: 'ecosystem' },
]

const editorTemplateOptions: { id: SkillTemplateId; name: string; description: string; practice?: string }[] = [
  { id: 'blank', name: '空白 Skill 模板', description: '只生成基础结构，适合从零设计新的律师工作流。' },
  { id: 'contract-review', name: '合同审查模板', description: '适合条款审查、风险清单、修改建议和谈判口径。', practice: '商业合同' },
  { id: 'litigation-timeline', name: '诉讼材料模板', description: '适合事实梳理、证据目录、时间线和程序期限。', practice: '争议解决' },
  { id: 'legal-research', name: '法律研究模板', description: '适合法规检索、案例摘要、观点归纳和引用核验。', practice: '法律研究' },
]

const knowledgeSources: KnowledgeSource[] = [
  {
    id: 'example-contract-playbook',
    title: '示例知识源：商事合同审查 Playbook',
    type: '示例知识源',
    summary: '这是一个占位示例，用来演示 Skill 如何引用内部模板、审查口径和输出风格；目前未连接真实文档库或 RAG 检索。',
    practices: ['商业合同'],
    keywords: ['合同', '条款', '违约', '责任限制', '解除', '通知', '审查'],
  },
]

const externalSkillPlatforms = [
  {
    name: 'Lawve.ai Skills',
    href: 'https://lawve.ai/en/skills',
    label: '法律 Skill',
  },
  {
    name: 'LegalWork',
    href: 'https://github.com/sunyifeisb-art/legalwork',
    label: '法律工作流',
  },
  {
    name: 'Anthropic Skills',
    href: 'https://github.com/anthropics/skills',
    label: '通用 Skill',
  },
  {
    name: 'Agent Skills',
    href: 'https://github.com/davepoon/agent-skills',
    label: '目录',
  },
  {
    name: 'GitHub Copilot Skills',
    href: 'https://github.com/github/awesome-copilot/tree/main/skills',
    label: 'Copilot',
  },
  {
    name: 'GitHub: legal SKILL.md',
    href: 'https://github.com/search?q=legal+filename%3ASKILL.md&type=code',
    label: '检索',
  },
]

const statusTone: Record<FirmSkill['status'], string> = {
  published: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  review: 'bg-amber-50 text-amber-700 border-amber-200',
  draft: 'bg-slate-100 text-slate-700 border-slate-200',
  deprecated: 'bg-rose-50 text-rose-700 border-rose-200',
}

const riskTone: Record<FirmSkill['risk'], string> = {
  low: 'bg-emerald-50 text-emerald-700',
  medium: 'bg-amber-50 text-amber-700',
  high: 'bg-rose-50 text-rose-700',
}

const licenseNotes: Record<string, string> = {
  'AGPL-3.0': '强开源许可证。若基于它改造并提供网络服务，通常需要公开相应源代码，内部使用前应做合规确认。',
  MIT: '宽松开源许可证。通常允许复制、修改、商用和再分发，但需要保留原作者版权和许可证声明。',
  'CC-BY-4.0': '知识内容类许可。通常允许分享和改编，但需要清楚标注来源与作者署名。',
  'CC-BY-NC-4.0': '知识内容类非商业许可。允许署名条件下的非商业分享和改编，商业使用需另行确认授权。',
  'CC-BY-NC-ND-4.0': '知识内容类非商业、禁止演绎许可。复制和内部改造前需重点确认许可边界。',
  'CC-BY-NC-SA-4.0': '知识内容类非商业、相同方式共享许可。改编成果需按相同许可证发布。',
  'CC0-1.0': '公共领域贡献工具。通常允许自由复制、修改和再分发。',
  'Apache-2.0': '宽松开源许可证。通常允许商用和修改，并包含专利授权条款，需要保留声明。',
  'GPL-3.0': '强开源许可证。再分发修改版本时通常需要以相同许可证提供相应源代码。',
  Proprietary: '专有许可。不能默认复制、改编或内部发布，需确认权利人授权范围。',
}

const licenseAliases: Record<string, string> = {
  'AGPL 3.0': 'AGPL-3.0',
  'Apache 2.0': 'Apache-2.0',
  'CC BY 4.0': 'CC-BY-4.0',
}

function normalizeLicenseLabel(value: string) {
  const label = value.replace(/^许可证：/, '').trim()
  return licenseAliases[label] || label
}

function licenseNoteForTag(tag: string) {
  return licenseNotes[normalizeLicenseLabel(tag)]
}

function licenseLabelForSkill(skill: FirmSkill) {
  if (skill.license && skill.license !== '未标明') return normalizeLicenseLabel(skill.license)
  const licenseTag = skill.tags.find((tag) => licenseNoteForTag(tag))
  return licenseTag ? normalizeLicenseLabel(licenseTag) : ''
}

function docStatusForSkill(skill: FirmSkill) {
  if (skill.readmeMdPath && skill.skillMdPath) return 'README + SKILL.md'
  if (skill.skillMdPath) return '仅 SKILL.md'
  if (skill.readmeMdPath || skill.mdPath) return '仅 README'
  return '暂无 Markdown'
}

function resourcePackageLabel(skill: FirmSkill) {
  if (skill.resourceCount && skill.resourceCount > 0) return 'SKILL.md + 配套资源'
  if (skill.skillMdPath || skill.hasSkillMd) return '仅 SKILL.md'
  return 'SKILL.md 未公开'
}

function extractChineseReadmeIntro(markdown?: string) {
  if (!markdown) return ''
  const match = markdown.match(/## README\.md 中文翻译\s+([\s\S]*?)(?:\n---\n|\n## SKILL\.md 中文翻译|\n## README\.md Original|$)/)
  if (!match?.[1]) return ''
  return match[1]
    .trim()
    .replace(/\n{3,}/g, '\n\n')
}

function createEditorDraft(skill: FirmSkill, task: string): EditorDraft {
  return {
    name: skill.isMySkill ? skill.name : `${skill.name}-my-skill`,
    chineseName: skill.isMySkill ? skill.chineseName : `${skill.chineseName}（我的 Skill）`,
    practice: skill.practice,
    description: skill.description,
    triggerConditions: skill.suitableFor.map((item) => `- ${item}`).join('\n') || '用户明确提出与本 Skill 业务范围一致的任务时使用。',
    owner: skill.owner,
    jurisdiction: skill.jurisdiction,
    risk: skill.risk,
    inputMaterials: `客户需求背景、交易或案件基本信息、待审文件、相关模板、团队既有审查口径。对于 ${riskLabels[skill.risk]} Skill，应补充授权范围、保密等级和人工复核人。`,
    checklist: `1. 核对任务是否属于 ${skill.practice}。\n2. 识别客户目标、时间节点、交易或案件阶段。\n3. 标注必须由律师判断的法律问题。\n4. 输出不确定事项、缺失材料和追问清单。`,
    sourcePolicy: '1. 优先使用用户提供的材料与已批准知识源。\n2. 法律依据注明法域、效力层级和时点。\n3. 引用标注文件、条款、页码或来源链接。\n4. 无法核验的信息明确标记，不得补造来源。',
    prohibited: skill.notFor.join('\n'),
    deliverableTemplate: `# ${skill.chineseName}\n\n## 一、结论摘要\n- 关键风险：\n- 建议动作：\n\n## 二、事实与材料\n- 已审材料：\n- 缺失材料：\n\n## 三、分析\n- 法律/合同依据：\n- 不确定事项：\n\n## 四、待律师复核\n- 需合伙人确认：\n- 需客户补充：`,
    outputFormat: skill.outputFormat,
    verificationChecklist: '- 触发条件与任务匹配\n- 输入材料与缺失信息已列明\n- 关键判断可追溯至材料或依据\n- 不确定性和禁止事项未被省略\n- 高影响结论已进入律师复核',
    qaTask: task,
    versionNote: `v${skill.version} · ${skill.updated}\n- 更新适用场景和边界\n- 补充人工复核要求\n- 确认来源：${skill.sourceName}`,
    approvalNote: `承办律师：待确认\n指定复核人：待确认\n合规/风控：${skill.risk === 'high' ? '必须签核' : '抽样复核'}\n知识管理：确认标签、版本和 README / SKILL.md 路径`,
    customSkillMd: '',
  }
}

function isMySkill(skill: FirmSkill) {
  return Boolean(skill.isMySkill || skill.internalSavedPath || skill.sourceName === '我的 Skill 库')
}

function displayOriginLabel(skill: FirmSkill) {
  if (isMySkill(skill)) return '我的 Skill'
  if (skill.id.startsWith('eco:')) return '法律技能生态'
  return skill.origin === 'external-open-source' ? '外部开源' : '示例内部 Skill'
}

function misfireWarningsForSkill(skill: FirmSkill) {
  const text = `${skill.name} ${skill.chineseName} ${skill.description} ${skill.tags.join(' ')}`.toLowerCase()
  const warnings = [
    text.includes('nda') ? '合同语境下 NDA 指保密协议；如材料涉及药品注册，应另行确认。' : '',
    skill.origin === 'external-open-source' ? '外部开源 Skill 进入内部使用前，应先另存为我的 Skill 并试跑。' : '',
    skill.risk === 'high' ? '高风险 Skill 不适合直接生成客户交付版结论。' : '',
  ].filter(Boolean)
  return warnings.length ? warnings : ['暂无明显易误触发场景。']
}

function inspectSensitiveText(text: string): RedactionResult {
  const patterns = [
    { label: '手机号', regex: /1[3-9]\d{9}/g, token: '[手机号]', strategy: '替换为统一占位符' },
    { label: '邮箱', regex: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, token: '[邮箱]', strategy: '替换为统一占位符' },
    { label: '身份证号', regex: /\b\d{6}(?:19|20)?\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}[\dXx]\b/g, token: '[身份证号]', strategy: '替换为统一占位符' },
    { label: '案号', regex: /（?\(?\d{4}[）)]?[\u4e00-\u9fa5]{1,8}\d{1,6}号/g, token: '[案号]', strategy: '保留年份，隐藏编号' },
    { label: '金额', regex: /(?:人民币|RMB|¥|USD|美元)\s?\d+(?:,\d{3})*(?:\.\d+)?|\d+(?:,\d{3})*(?:\.\d+)?\s?(?:万元|元|万|亿|million)/gi, token: '[金额]', strategy: '按区间或占位符处理' },
    { label: '公司名称', regex: /[\u4e00-\u9fa5A-Za-z0-9（）()]{2,40}(?:有限公司|有限责任公司|股份有限公司|集团|律所|事务所)/g, token: '[公司名称]', strategy: '替换为主体 A/B' },
    { label: '姓名', regex: /(?:张|王|李|赵|刘|陈|杨|黄|周|吴|徐|孙|胡|朱|高|林|何|郭|马|罗)[\u4e00-\u9fa5]{1,2}(?=手机|电话|身份证|邮箱|与|，|。|、|称|诉|$)/g, token: '[姓名]', strategy: '替换为自然人 A/B' },
  ]
  let sanitizedText = text
  const hits = patterns
    .map((item) => {
      const matches = text.match(item.regex) || []
      if (matches.length > 0) sanitizedText = sanitizedText.replace(item.regex, item.token)
      return { label: item.label, count: matches.length, strategy: item.strategy }
    })
    .filter((item) => item.count > 0)
  return {
    hits,
    sanitizedText,
    summary: hits.length ? hits.map((item) => `${item.label} ${item.count} 处`).join('，') : '未发现明显敏感信息',
  }
}

function formatMatchPercent(score: number) {
  const normalized = Number.isFinite(score) ? Math.max(0, Math.min(100, Math.round(score))) : 0
  return `匹配度 ${normalized}%`
}

function matchKnowledgeToSkill(skill: FirmSkill, source: KnowledgeSource) {
  const haystack = `${skill.name} ${skill.chineseName} ${skill.practice} ${skill.description} ${skill.tags.join(' ')} ${skill.suitableFor.join(' ')} ${skill.outputFormat}`.toLowerCase()
  const practiceHit = source.practices.includes(skill.practice)
  const keywordHits = source.keywords.filter((keyword) => haystack.includes(keyword.toLowerCase()))
  const universalWriting = source.keywords.some((keyword) => ['写作', '复核', '输出格式'].includes(keyword))
  const score = Math.min(100, (practiceHit ? 52 : 0) + keywordHits.length * 12 + (universalWriting ? 18 : 0))
  const reasons = [
    practiceHit ? `业务领域匹配：${skill.practice}` : '',
    keywordHits.length ? `关键词命中：${keywordHits.slice(0, 4).join('、')}` : '',
    universalWriting ? '通用写作与复核风格适用于所有 Skill' : '',
  ].filter(Boolean)
  return {
    source,
    score,
    reasons: reasons.length ? reasons : ['暂无强匹配，仅可作为补充参考'],
  }
}

function knowledgeMatchLabel(score: number) {
  if (score >= 70) return '建议引用'
  if (score >= 40) return '可参考'
  return '补充资料'
}

function Pill({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex h-6 shrink-0 items-center whitespace-nowrap rounded-md border px-2 text-[11px] font-medium ${className}`}>
      {children}
    </span>
  )
}

function bracketDepth(value: string) {
  return [...value].reduce((depth, character) => {
    if (character === '（' || character === '(') return depth + 1
    if (character === '）' || character === ')') return Math.max(0, depth - 1)
    return depth
  }, 0)
}

function cleanSuitableScenarios(items: string[]) {
  const merged: string[] = []
  let pending = ''
  for (const rawItem of items) {
    const item = rawItem
      .trim()
      .replace(/(?:典型入口|例如|包括)\s*[：:]?\s*$/, '')
      .replace(/[、，,；;：:]$/, '')
    if (!item || /^[（）()、，,；;：:]+$/.test(item)) continue
    pending = pending ? `${pending}、${item}` : item
    if (bracketDepth(pending) === 0) {
      merged.push(pending)
      pending = ''
    }
  }
  if (pending) merged.push(`${pending}${'）'.repeat(bracketDepth(pending))}`)
  return Array.from(new Set(merged))
}

function SectionTitle({ title, meta }: { title: string; meta?: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
      {meta && <span className="text-xs text-slate-400">{meta}</span>}
    </div>
  )
}

function SkillTag({ tag, compact = false }: { tag: string; compact?: boolean }) {
  const note = licenseNoteForTag(tag)
  const sizeClass = compact ? 'px-2 py-1 text-[10px]' : 'px-2 py-1 text-[11px]'

  if (!note) {
    return (
      <span className={`rounded-md bg-slate-100 font-medium text-slate-600 ${sizeClass}`}>
        {tag}
      </span>
    )
  }

  return (
    <span className="group relative inline-flex cursor-default">
      <span
        className={`rounded-md border border-amber-200 bg-amber-50 font-semibold text-amber-800 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-amber-300 group-hover:bg-amber-100 group-hover:shadow-sm ${sizeClass}`}
      >
        {tag}
      </span>
      <span className="pointer-events-none absolute left-0 top-full z-30 mt-2 hidden w-64 rounded-lg border border-slate-200 bg-white p-3 text-left text-[11px] font-normal leading-5 text-slate-600 shadow-lg group-hover:block">
        {note}
      </span>
    </span>
  )
}

export default function SkillsPlatformPage() {
  const [activeView, setActiveView] = useState<PlatformView>('recommend')
  const [editorReturnTarget, setEditorReturnTarget] = useState<ReturnTarget | null>(null)
  const [recommendReturnTarget, setRecommendReturnTarget] = useState<ReturnTarget | null>(null)
  const [libraryReturnTarget, setLibraryReturnTarget] = useState<ReturnTarget | null>(null)
  const [libraryMode, setLibraryMode] = useState<LibraryMode>('home')
  const [libraryMotion, setLibraryMotion] = useState<LibraryMotion>('settle')
  const [libraryPageKey, setLibraryPageKey] = useState(0)
  const [homeQuery, setHomeQuery] = useState('')
  const [showFavorites, setShowFavorites] = useState(false)
  const [favoriteSkillIds, setFavoriteSkillIds] = useState<string[]>([
    'dpa-review',
    'nda-one-sided',
    'filing-timeline',
    'lawve-isds-research-001',
    'lawve-legal-ai-model-router-002',
    'lawve-eu-pl-law-tracker-003',
  ])
  const [query, setQuery] = useState('')
  const [selectedCategoryId, setSelectedCategoryId] = useState('all')
  const [practice, setPractice] = useState('全部')
  const [status, setStatus] = useState('全部')
  const [origin, setOrigin] = useState('全部')
  const [docStatus, setDocStatus] = useState('全部')
  const [licenseFilter, setLicenseFilter] = useState('全部')
  const [detailDocTab, setDetailDocTab] = useState<DetailDocTab>('overview')
  const [isSkillIntroExpanded, setIsSkillIntroExpanded] = useState(false)
  const [selectedId, setSelectedId] = useState(firmSkills[0].id)
  const [taskPurpose, setTaskPurpose] = useState('')
  const [selectedEntrypoint, setSelectedEntrypoint] = useState('')
  const [sourceText, setSourceText] = useState('')
  const [fileNames, setFileNames] = useState<string[]>([])
  const [uploadedFilePayloads, setUploadedFilePayloads] = useState<{ name: string; base64: string }[]>([])
  const [recommendationResult, setRecommendationResult] = useState<ModelRecommendationResult | null>(null)
  const [recommendationError, setRecommendationError] = useState('')
  const [recommendCopyNotice, setRecommendCopyNotice] = useState('')
  const [skillEffectTest, setSkillEffectTest] = useState<SkillEffectTest | null>(null)
  const [skillEffectResult, setSkillEffectResult] = useState<SkillEffectTestResult | null>(null)
  const [isTestingSkillEffect, setIsTestingSkillEffect] = useState(false)
  const [skillEffectError, setSkillEffectError] = useState('')
  const [skillEffectCopyNotice, setSkillEffectCopyNotice] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analyzeProgress, setAnalyzeProgress] = useState(0)
  const [showAllMatches, setShowAllMatches] = useState(false)
  const [libraryMatchedIds, setLibraryMatchedIds] = useState<string[] | null>(null)
  const [optimizingSkillId, setOptimizingSkillId] = useState('')
  const [skillOptimization, setSkillOptimization] = useState<SkillOptimization | null>(null)
  const [editorTab, setEditorTab] = useState<EditorTab>('edit')
  const [editorSidebarCollapsed, setEditorSidebarCollapsed] = useState(false)
  const [showCreateSkillDialog, setShowCreateSkillDialog] = useState(false)
  const [newSkillName, setNewSkillName] = useState('')
  const [newSkillPractice, setNewSkillPractice] = useState(skillCategories[0].practice)
  const [newSkillTemplateId, setNewSkillTemplateId] = useState<SkillTemplateId>('blank')
  const [savedInternalSkills, setSavedInternalSkills] = useState<FirmSkill[]>([])
  const [editorDraft, setEditorDraft] = useState<EditorDraft>(() => createEditorDraft(firmSkills[0], recommendationScenarios[0]))
  const [markdownManualMode, setMarkdownManualMode] = useState(false)
  const [editorUploadNames, setEditorUploadNames] = useState<string[]>([])
  const [editorAiError, setEditorAiError] = useState('')
  const [editorAiNotice, setEditorAiNotice] = useState('')
  const [pipelineResults, setPipelineResults] = useState<Partial<Record<SkillPipelineStage, EditorAiResult>>>({})
  const [pipelineAppliedStages, setPipelineAppliedStages] = useState<Partial<Record<SkillPipelineStage, boolean>>>({})
  const [runningPipelineStage, setRunningPipelineStage] = useState<SkillPipelineStage | ''>('')
  const [optimizingEditorField, setOptimizingEditorField] = useState<EditorOptimizableField | ''>('')
  const [pendingFieldOptimization, setPendingFieldOptimization] = useState<PendingFieldOptimization | null>(null)
  const [expertiseSourceText, setExpertiseSourceText] = useState('')
  const [expertiseUploadNames, setExpertiseUploadNames] = useState<string[]>([])
  const [materialPurpose, setMaterialPurpose] = useState<MaterialPurpose>('auto')
  const [materialClassification, setMaterialClassification] = useState<MaterialClassification | null>(null)
  const [isClassifyingMaterial, setIsClassifyingMaterial] = useState(false)
  const [materialStatus, setMaterialStatus] = useState('')
  const [discoveryIntent, setDiscoveryIntent] = useState('')
  const [discoveryReply, setDiscoveryReply] = useState('')
  const [discoveryMessages, setDiscoveryMessages] = useState<DiscoveryMessage[]>([])
  const [discoveryResult, setDiscoveryResult] = useState<DiscoveryResult | null>(null)
  const [isDiscovering, setIsDiscovering] = useState(false)
  const [discoveryError, setDiscoveryError] = useState('')
  const [isSavingInternal, setIsSavingInternal] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')
  const [trialMaterial, setTrialMaterial] = useState('请粘贴一段脱敏或待脱敏的试跑材料，例如合同条款、客户邮件、证据摘要或资料清单。')
  const [isRunningSkill, setIsRunningSkill] = useState(false)
  const [skillRunResult, setSkillRunResult] = useState<SkillRunResult | null>(null)
  const [skillRunError, setSkillRunError] = useState('')
  const [skillRunRecords, setSkillRunRecords] = useState<SkillRunRecord[]>([])
  const [selectedKnowledgeIds, setSelectedKnowledgeIds] = useState<string[]>([])
  const editableKnowledgeSource = knowledgeSources[0]
  const [pendingModelAction, setPendingModelAction] = useState<PendingModelAction | null>(null)
  const [redactionResult, setRedactionResult] = useState<RedactionResult | null>(null)
  const [selectedMarkdownFiles, setSelectedMarkdownFiles] = useState<Record<string, MarkdownFilePayload>>({})
  const [isLoadingMarkdown, setIsLoadingMarkdown] = useState(false)
  const [skillTranslations, setSkillTranslations] = useState<Record<string, string>>({})
  const [translationViewSkillId, setTranslationViewSkillId] = useState('')
  const [translatingSkillId, setTranslatingSkillId] = useState('')
  const [skillTranslationError, setSkillTranslationError] = useState('')
  const [skillTranslationErrorSkillId, setSkillTranslationErrorSkillId] = useState('')
  const [introTranslations, setIntroTranslations] = useState<Record<string, string>>({})
  const [introTranslationViewSkillId, setIntroTranslationViewSkillId] = useState('')
  const [translatingIntroSkillId, setTranslatingIntroSkillId] = useState('')
  const [introTranslationError, setIntroTranslationError] = useState('')
  const [introTranslationErrorSkillId, setIntroTranslationErrorSkillId] = useState('')
  const [triggerTranslations, setTriggerTranslations] = useState<Record<string, string[]>>({})
  const [translatingTriggerSkillId, setTranslatingTriggerSkillId] = useState('')

  const allSkills = useMemo(() => [...firmSkills, ...savedInternalSkills], [savedInternalSkills])
  const librarySkills = firmSkills
  const mySkills = useMemo(() => {
    const latestBySkill = new Map<string, FirmSkill>()
    savedInternalSkills
      .filter(isMySkill)
      .sort((a, b) => String(b.savedAt || b.updated).localeCompare(String(a.savedAt || a.updated)))
      .forEach((skill) => {
        const logicalKey = `${skill.name.trim().toLowerCase()}::${skill.practice.trim().toLowerCase()}`
        if (!latestBySkill.has(logicalKey)) latestBySkill.set(logicalKey, skill)
      })
    return Array.from(latestBySkill.values())
  }, [savedInternalSkills])
  const selectedKnowledgeSources = useMemo(
    () => [editableKnowledgeSource].filter((item) => selectedKnowledgeIds.includes(item.id)),
    [editableKnowledgeSource, selectedKnowledgeIds],
  )

  const selectedCategory = skillCategories.find((category) => category.id === selectedCategoryId)
  const statuses = ['全部', ...Array.from(new Set(librarySkills.map((skill) => statusLabels[skill.status])))]
  const origins = ['全部', ...Array.from(new Set(librarySkills.map((skill) => displayOriginLabel(skill))))]
  const docStatuses = ['全部', ...Array.from(new Set(librarySkills.map(docStatusForSkill)))]
  const licenseOptions = ['全部', ...Array.from(new Set(librarySkills.map(licenseLabelForSkill).filter(Boolean)))]

  const filteredSkills = useMemo(() => {
    return librarySkills.filter((skill) => {
      const inMatchedSet = !libraryMatchedIds || libraryMatchedIds.includes(skill.id)
      const haystack = `${skill.name} ${skill.chineseName} ${skill.owner} ${skill.practice} ${skill.sourceName} ${skill.tags.join(' ')}`.toLowerCase()
      const matchesQuery = !query.trim() || haystack.includes(query.trim().toLowerCase())
      const matchesCategory = !selectedCategory || skill.practice === selectedCategory.practice
      const matchesPractice = practice === '全部' || skill.practice === practice
      const matchesStatus = status === '全部' || statusLabels[skill.status] === status
      const matchesOrigin = origin === '全部' || displayOriginLabel(skill) === origin
      const matchesDocStatus = docStatus === '全部' || docStatusForSkill(skill) === docStatus
      const matchesLicense = licenseFilter === '全部' || licenseLabelForSkill(skill) === licenseFilter
      return inMatchedSet && matchesQuery && matchesCategory && matchesPractice && matchesStatus && matchesOrigin && matchesDocStatus && matchesLicense
    })
  }, [docStatus, libraryMatchedIds, librarySkills, licenseFilter, origin, practice, query, selectedCategory, status])

  const selectedSkill = allSkills.find((skill) => skill.id === selectedId) ?? allSkills[0] ?? firmSkills[0]
  const showSkillTranslation = translationViewSkillId === selectedSkill.id
  const selectedSkillIntro = extractChineseReadmeIntro(selectedMarkdownFiles.readme?.content || selectedMarkdownFiles.skill?.content) || selectedSkill.description
  const showIntroTranslation = introTranslationViewSkillId === selectedSkill.id
  const displayedSkillIntro = showIntroTranslation && introTranslations[selectedSkill.id]
    ? introTranslations[selectedSkill.id]
    : selectedSkillIntro
  const selectedBoundaryTriggers = selectedSkill.triggerConditions?.length ? selectedSkill.triggerConditions : selectedSkill.suitableFor
  const selectedTriggerTranslation = triggerTranslations[selectedSkill.id]
  const selectedSuitableScenarios = useMemo(
    () => cleanSuitableScenarios(selectedSkill.suitableFor),
    [selectedSkill.suitableFor],
  )
  const canToggleSkillIntro = displayedSkillIntro.length > 120
  const selectedSkillRunRecords = useMemo(
    () => skillRunRecords.filter((record) => record.skillId === selectedSkill.id),
    [skillRunRecords, selectedSkill.id],
  )
  const selectedSkillHitRate = selectedSkillRunRecords.length
    ? Math.round((selectedSkillRunRecords.filter((record) => record.passed).length / selectedSkillRunRecords.length) * 100)
    : 0
  const selectedSkillAverageRating = selectedSkillRunRecords.length
    ? (selectedSkillRunRecords.reduce((sum, record) => sum + record.rating, 0) / selectedSkillRunRecords.length).toFixed(1)
    : '0.0'
  const skillMdPreview = useMemo(() => [
    '---',
    `name: ${JSON.stringify(editorDraft.name || 'unnamed-legal-skill')}`,
    `description: ${JSON.stringify(editorDraft.description || markdownFallbacks.description)}`,
    '---',
    '',
    `# ${editorDraft.chineseName || '未命名我的 Skill'}`,
    '',
    `业务分类：${editorDraft.practice || '未选择'}  `,
    `适用法域：${editorDraft.jurisdiction || '未填写'}`,
    '',
    '## 何时使用',
    editorDraft.triggerConditions || markdownFallbacks.triggerConditions,
    '',
    '## 输入',
    editorDraft.inputMaterials || markdownFallbacks.inputMaterials,
    '',
    '## 工作流',
    editorDraft.checklist || markdownFallbacks.checklist,
    '',
    '## 来源与引用规则',
    editorDraft.sourcePolicy || markdownFallbacks.sourcePolicy,
    '',
    '## 边界与禁止事项',
    editorDraft.prohibited || markdownFallbacks.prohibited,
    '',
    '## 输出',
    editorDraft.deliverableTemplate || markdownFallbacks.deliverableTemplate,
    '',
    '### 格式要求',
    editorDraft.outputFormat || markdownFallbacks.outputFormat,
    '',
    '## 知识源引用',
    selectedKnowledgeSources.length
      ? selectedKnowledgeSources.map((source) => `- ${source.title}：${source.summary}`).join('\n')
      : '- 暂无指定知识源',
    '',
    '## 验证清单',
    editorDraft.verificationChecklist || markdownFallbacks.verificationChecklist,
    '',
    '## 代表性试跑任务',
    editorDraft.qaTask || markdownFallbacks.qaTask,
    '',
    '## 版本说明',
    editorDraft.versionNote || markdownFallbacks.versionNote,
    '',
    '## 发布与复核',
    editorDraft.approvalNote || markdownFallbacks.approvalNote,
  ].join('\n'), [editorDraft, selectedKnowledgeSources])
  const editableSkillMd = editorDraft.customSkillMd || skillMdPreview
  const knowledgeCoverage = useMemo(() => {
    return [editableKnowledgeSource].map((source) => {
      const matches = allSkills
        .map((skill) => ({ skill, match: matchKnowledgeToSkill(skill, source) }))
        .filter((item) => item.match.score >= 40)
        .sort((a, b) => b.match.score - a.match.score)
      return { source, matches }
    })
  }, [allSkills, editableKnowledgeSource])
  const recommendedKnowledgeSourceIds = useMemo(() => {
    if (!recommendationResult) return []
    const recommendedSkills = recommendationResult.recommendations
      .map((item) => allSkills.find((skill) => skill.id === item.skillId))
      .filter((skill): skill is FirmSkill => Boolean(skill))
    const taskContext = `${taskPurpose} ${sourceText} ${recommendationResult.taskType}`.toLowerCase()
    return knowledgeSources
      .filter((source) => {
        const taskKeywordHit = source.keywords.some((keyword) => taskContext.includes(keyword.toLowerCase()))
        const skillHit = recommendedSkills.some((skill) => matchKnowledgeToSkill(skill, source).score >= 40)
        return taskKeywordHit || skillHit
      })
      .map((source) => source.id)
  }, [allSkills, recommendationResult, sourceText, taskPurpose])

  function loadSkillIntoEditor(skill: FirmSkill) {
    setEditorDraft(createEditorDraft(skill, taskPurpose.trim() || recommendationScenarios[0]))
    setEditorUploadNames(skill.uploadNames || [])
    setEditorAiError('')
    setEditorAiNotice('')
    setPipelineResults({})
    setPipelineAppliedStages({})
    setRunningPipelineStage('')
    setExpertiseSourceText('')
    setExpertiseUploadNames([])
    setMaterialPurpose('auto')
    setMaterialClassification(null)
    setIsClassifyingMaterial(false)
    setMaterialStatus('')
    setDiscoveryIntent('')
    setDiscoveryReply('')
    setDiscoveryMessages([])
    setDiscoveryResult(null)
    setDiscoveryError('')
    setMarkdownManualMode(false)
    setSaveMessage('')
  }

  const homeSearchResults = useMemo(() => {
    const needle = homeQuery.trim().toLowerCase()
    if (!needle) return []
    return librarySkills
      .filter((skill) => `${skill.name} ${skill.chineseName}`.toLowerCase().includes(needle))
      .slice(0, 12)
  }, [librarySkills, homeQuery])
  const favoriteSkills = useMemo(() => {
    return favoriteSkillIds
      .map((id) => librarySkills.find((skill) => skill.id === id))
      .filter((skill): skill is FirmSkill => Boolean(skill))
  }, [favoriteSkillIds, librarySkills])

  function handleCategorySelect(categoryId: string) {
    setSelectedCategoryId(categoryId)
    setPractice('全部')
    setStatus('全部')
    setOrigin('全部')
    setDocStatus('全部')
    setLicenseFilter('全部')
    setQuery('')
    const nextCategory = skillCategories.find((category) => category.id === categoryId)
    const firstSkill = nextCategory
      ? librarySkills.find((skill) => skill.practice === nextCategory.practice)
      : librarySkills[0]
    if (firstSkill) {
      setSelectedId(firstSkill.id)
      loadSkillIntoEditor(firstSkill)
    }
  }

  function showLibraryMode(nextMode: LibraryMode, motion: LibraryMotion) {
    setLibraryMotion(motion)
    setLibraryPageKey((current) => current + 1)
    setLibraryMode(nextMode)
  }

  function openSkillCategory(categoryId: string) {
    handleCategorySelect(categoryId)
    setHomeQuery('')
    showLibraryMode('category', 'forward')
  }

  function returnToLibraryHome() {
    setLibraryReturnTarget(null)
    setLibraryMatchedIds(null)
    showLibraryMode('home', 'back')
    setHomeQuery('')
    setShowFavorites(false)
    setQuery('')
    setStatus('全部')
    setOrigin('全部')
    setDocStatus('全部')
    setLicenseFilter('全部')
  }

  function returnToCategoryPage() {
    showLibraryMode('category', 'back')
    setQuery('')
    setStatus('全部')
    setOrigin('全部')
    setDocStatus('全部')
    setLicenseFilter('全部')
  }

  function openSkillDetail(skill: FirmSkill) {
    setLibraryReturnTarget(null)
    setSelectedId(skill.id)
    loadSkillIntoEditor(skill)
    const category = skillCategories.find((item) => item.practice === skill.practice)
    setSelectedCategoryId(category?.id ?? 'all')
    setDetailDocTab('overview')
    setIsSkillIntroExpanded(false)
    showLibraryMode('skill', 'forward')
    setActiveView('library')
  }

  function chooseSkill(skill: FirmSkill, nextView: PlatformView = activeView) {
    setSelectedId(skill.id)
    loadSkillIntoEditor(skill)
    if (nextView === 'library') {
      setLibraryReturnTarget(activeView === 'recommend' ? { view: 'recommend', label: '返回匹配结果' } : null)
      const category = skillCategories.find((item) => item.practice === skill.practice)
      setSelectedCategoryId(category?.id ?? 'all')
      setDetailDocTab('overview')
      setIsSkillIntroExpanded(false)
      showLibraryMode('skill', 'forward')
    }
    setActiveView(nextView)
  }

  function currentReturnTarget(fallback: PlatformView = 'recommend'): ReturnTarget {
    if (activeView === 'library') {
      if (libraryMode === 'skill') return { view: 'library', label: '返回 Skill 详情', skillId: selectedSkill.id, libraryMode: 'skill' }
      if (libraryMode === 'category') return { view: 'library', label: '返回分类列表' }
      return { view: 'library', label: '返回查看 Skill' }
    }
    if (activeView === 'recommend') return { view: 'recommend', label: '返回匹配任务' }
    if (activeView === 'knowledge') return { view: 'knowledge', label: '返回知识库' }
    if (activeView === 'admin') return { view: 'admin', label: '返回后台管理' }
    return fallback === 'library' ? { view: 'library', label: '返回查看 Skill' } : { view: 'recommend', label: '返回匹配任务' }
  }

  function goToReturnTarget(target: ReturnTarget | null) {
    if (!target) return
    if (target.skillId) {
      const skill = allSkills.find((item) => item.id === target.skillId)
      if (skill) {
        setSelectedId(skill.id)
        loadSkillIntoEditor(skill)
      }
    }
    if (target.libraryMode) setLibraryMode(target.libraryMode)
    setActiveView(target.view)
  }

  function toggleFavoriteSkill(skillId: string) {
    setFavoriteSkillIds((current) => (
      current.includes(skillId)
        ? current.filter((id) => id !== skillId)
        : [skillId, ...current]
    ))
  }

  function getTemplateDraftPatch(templateId: SkillTemplateId, practiceName: string) {
    if (templateId === 'contract-review') {
      return {
        description: '面向合同条款审查，识别风险条款、缺失条款、谈判底线和建议改写。',
        workflow: ['识别合同类型和交易背景', '抽取关键条款和异常表述', '按风险等级生成问题清单', '输出修改建议和谈判话术'],
        outputFormat: '条款位置、风险说明、建议改写、谈判口径、律师复核项',
        tags: ['我的 Skill', practiceName, '合同审查'],
      }
    }
    if (templateId === 'litigation-timeline') {
      return {
        description: '面向诉讼材料，抽取事实经过、证据线索、程序节点和关键期限。',
        workflow: ['识别材料类型和当事人', '抽取全部日期和事实节点', '区分事实节点和程序节点', '生成时间线、证据缺口和追问清单'],
        outputFormat: '事实时间线、证据目录、关键期限、缺失材料、律师复核项',
        tags: ['我的 Skill', practiceName, '诉讼材料'],
      }
    }
    if (templateId === 'legal-research') {
      return {
        description: '面向法律研究任务，整理问题、检索路径、法规案例和可引用观点。',
        workflow: ['拆解法律问题', '列出检索关键词和法域', '整理法规、案例和观点', '输出结论、依据和不确定事项'],
        outputFormat: '研究结论、检索路径、法规依据、案例摘要、引用核验、待确认问题',
        tags: ['我的 Skill', practiceName, '法律研究'],
      }
    }
    return {
      description: '描述这个 Skill 要解决的律师日常任务、输入材料、输出边界和复核规则。',
      workflow: ['识别任务目标', '整理输入材料', '执行分析步骤', '生成输出并列明复核项'],
      outputFormat: '结论摘要、事实依据、风险清单、追问问题、律师复核项',
      tags: ['我的 Skill', practiceName, '空白模板'],
    }
  }

  function makeMySkillDraft(sourceSkill?: FirmSkill, init?: { chineseName?: string; practice?: string; templateId?: SkillTemplateId }): FirmSkill {
    const base = sourceSkill ?? firmSkills[0]
    const now = new Date()
    const stamp = now.toISOString().replace(/[-:.TZ]/g, '').slice(0, 14)
    const isBlank = !sourceSkill
    const practiceName = init?.practice || base.practice
    const templatePatch = isBlank ? getTemplateDraftPatch(init?.templateId || 'blank', practiceName) : null
    const chineseName = init?.chineseName?.trim() || (isBlank ? '未命名我的 Skill' : `${base.chineseName}（我的 Skill）`)
    const romanName = chineseName
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .toLowerCase()
    return {
      ...base,
      id: `my-skill-local-${stamp}`,
      name: isBlank ? (romanName || `my-new-skill-${stamp}`) : `${base.name}-my-skill`,
      chineseName,
      owner: isBlank ? '我的工作台' : base.owner,
      practice: practiceName,
      status: 'draft',
      version: `draft-${stamp}`,
      updated: now.toISOString().slice(0, 10),
      usage: 0,
      rating: 4,
      reviewScore: base.risk === 'high' ? 72 : 78,
      description: templatePatch?.description || base.description,
      sources: isBlank ? ['我的 Skill 库'] : ['我的 Skill 库', `基于：${base.sourceName}`, base.sourceUrl || base.name],
      workflow: templatePatch?.workflow || base.workflow,
      outputFormat: templatePatch?.outputFormat || base.outputFormat,
      tags: templatePatch?.tags || ['我的 Skill', practiceName, base.risk],
      origin: 'internal',
      sourceName: '我的 Skill 库',
      mdPath: undefined,
      internalSavedPath: undefined,
      relativeMdPath: undefined,
      sourceSkillId: sourceSkill?.id,
      sourceSkillName: sourceSkill?.name,
      sourceSkillMdPath: sourceSkill?.skillMdPath || sourceSkill?.mdPath || '',
      isMySkill: true,
      uploadNames: [],
    }
  }

  function enterMySkillEditor(skill: FirmSkill) {
    setSavedInternalSkills((current) => [skill, ...current.filter((item) => item.id !== skill.id)])
    setSelectedId(skill.id)
    loadSkillIntoEditor(skill)
    setEditorTab('edit')
    setActiveView('editor')
  }

  function createNewMySkill() {
    setNewSkillName('')
    setNewSkillPractice(skillCategories[0].practice)
    setNewSkillTemplateId('blank')
    setShowCreateSkillDialog(true)
  }

  function cancelCreateNewSkill() {
    setShowCreateSkillDialog(false)
    setNewSkillName('')
    setNewSkillPractice(skillCategories[0].practice)
    setNewSkillTemplateId('blank')
  }

  function confirmCreateNewSkill() {
    const name = newSkillName.trim()
    if (!name) return
    setEditorReturnTarget(currentReturnTarget('recommend'))
    setShowCreateSkillDialog(false)
    enterMySkillEditor(makeMySkillDraft(undefined, { chineseName: name, practice: newSkillPractice, templateId: newSkillTemplateId }))
    setNewSkillName('')
    setNewSkillPractice(skillCategories[0].practice)
    setNewSkillTemplateId('blank')
  }

  function startEditFromSkill(skill: FirmSkill) {
    setEditorReturnTarget(currentReturnTarget('recommend'))
    enterMySkillEditor(makeMySkillDraft(skill))
    void optimizeRecommendedSkill(skill.id, 'editor')
  }

  function openEditorHome() {
    setEditorReturnTarget(null)
    if (mySkills.length > 0) {
      setSelectedId(mySkills[0].id)
      loadSkillIntoEditor(mySkills[0])
      setEditorTab('edit')
      setActiveView('editor')
      return
    }
    setEditorTab('edit')
    setActiveView('editor')
  }

  useEffect(() => {
    let alive = true
    fetch('/api/skills/internal')
      .then((response) => response.ok ? response.json() : { skills: [] })
      .then((payload) => {
        if (alive) setSavedInternalSkills((payload.skills || []) as FirmSkill[])
      })
      .catch(() => {
        if (alive) setSavedInternalSkills([])
      })
    return () => {
      alive = false
    }
  }, [])

  useEffect(() => {
    let alive = true
    const paths = {
      readme: selectedSkill.readmeMdPath,
      skill: selectedSkill.skillMdPath || selectedSkill.mdPath,
    }
    if (!paths.readme && !paths.skill) {
      Promise.resolve().then(() => {
        if (alive) setSelectedMarkdownFiles({})
      })
      return
    }
    Promise.resolve().then(() => {
      if (alive) {
        setSelectedMarkdownFiles({})
        setIsLoadingMarkdown(true)
      }
    })
    fetch('/api/skills/markdown', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paths }),
    })
      .then((response) => response.ok ? response.json() : { files: {} })
      .then((payload) => {
        if (alive) setSelectedMarkdownFiles((payload.files || {}) as Record<string, MarkdownFilePayload>)
      })
      .catch(() => {
        if (alive) setSelectedMarkdownFiles({})
      })
      .finally(() => {
        if (alive) setIsLoadingMarkdown(false)
      })
    return () => {
      alive = false
    }
  }, [selectedSkill.id, selectedSkill.mdPath, selectedSkill.readmeMdPath, selectedSkill.skillMdPath])

  useEffect(() => {
    if (!selectedBoundaryTriggers.length || triggerTranslations[selectedSkill.id]) return
    const englishTriggers = selectedBoundaryTriggers
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => !/[\u3400-\u9fff]/.test(item) && /[A-Za-z]{3}/.test(item))
    if (!englishTriggers.length) return
    let alive = true
    const numbered = englishTriggers.map(({ item, index }) => `[[${index + 1}]] ${item}`).join('\n')
    Promise.resolve().then(() => {
      if (alive) setTranslatingTriggerSkillId(selectedSkill.id)
    })
    fetch('/api/skills/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ markdown: numbered, contentType: 'trigger-list' }),
    })
      .then(async (response) => {
        const payload = (await response.json()) as { translation?: string; error?: string }
        if (!response.ok || !payload.translation) throw new Error(payload.error || '触发条件翻译失败')
        const translated = payload.translation
          .split(/\r?\n/)
          .map((line) => line.replace(/^\s*\[\[\d+\]\]\s*/, '').trim())
          .filter(Boolean)
        if (translated.length !== englishTriggers.length) throw new Error('触发条件翻译条数不一致')
        const alignedTranslations = selectedBoundaryTriggers.map(() => '')
        englishTriggers.forEach(({ index }, translatedIndex) => {
          alignedTranslations[index] = translated[translatedIndex]
        })
        if (alive) setTriggerTranslations((current) => ({ ...current, [selectedSkill.id]: alignedTranslations }))
      })
      .catch((error) => {
        console.error('Trigger translation failed', error)
      })
      .finally(() => {
        if (alive) setTranslatingTriggerSkillId('')
      })
    return () => {
      alive = false
    }
  }, [selectedBoundaryTriggers, selectedSkill.id, triggerTranslations])

  async function translateSelectedSkillMarkdown() {
    const markdown = selectedMarkdownFiles.skill?.content
    if (!markdown) return
    if (skillTranslations[selectedSkill.id]) {
      setTranslationViewSkillId(selectedSkill.id)
      return
    }
    setTranslatingSkillId(selectedSkill.id)
    setSkillTranslationError('')
    setSkillTranslationErrorSkillId('')
    try {
      const response = await fetch('/api/skills/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ markdown }),
      })
      const payload = (await response.json()) as { translation?: string; error?: string }
      if (!response.ok || !payload.translation) throw new Error(payload.error || 'AI 翻译失败')
      setSkillTranslations((current) => ({ ...current, [selectedSkill.id]: payload.translation! }))
      setTranslationViewSkillId(selectedSkill.id)
    } catch (error) {
      setSkillTranslationError(error instanceof Error ? error.message : 'AI 翻译失败')
      setSkillTranslationErrorSkillId(selectedSkill.id)
    } finally {
      setTranslatingSkillId('')
    }
  }

  async function translateSelectedSkillIntro() {
    if (!selectedSkillIntro.trim()) return
    if (introTranslations[selectedSkill.id]) {
      setIntroTranslationViewSkillId(selectedSkill.id)
      return
    }
    setTranslatingIntroSkillId(selectedSkill.id)
    setIntroTranslationError('')
    setIntroTranslationErrorSkillId('')
    try {
      const response = await fetch('/api/skills/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ markdown: selectedSkillIntro, contentType: 'intro' }),
      })
      const payload = (await response.json()) as { translation?: string; error?: string }
      if (!response.ok || !payload.translation) throw new Error(payload.error || 'AI 翻译失败')
      setIntroTranslations((current) => ({ ...current, [selectedSkill.id]: payload.translation! }))
      setIntroTranslationViewSkillId(selectedSkill.id)
      setIsSkillIntroExpanded(true)
    } catch (error) {
      setIntroTranslationError(error instanceof Error ? error.message : 'AI 翻译失败')
      setIntroTranslationErrorSkillId(selectedSkill.id)
    } finally {
      setTranslatingIntroSkillId('')
    }
  }

  async function saveAsInternalSkill(nextStatus: FirmSkill['status'] = 'draft') {
    setIsSavingInternal(true)
    setSaveMessage('')
    try {
      const response = await fetch('/api/skills/internal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sourceSkill: selectedSkill,
          status: nextStatus === 'published' ? 'published' : 'draft',
          draft: { ...editorDraft, uploadNames: editorUploadNames },
        }),
      })
      const payload = await response.json()
      if (!response.ok) throw new Error(payload?.error || '保存失败')
      setSavedInternalSkills((current) => [
        payload.skill as FirmSkill,
        ...current.filter((skill) => skill.id !== selectedSkill.id),
      ])
      setSelectedId(payload.skill.id)
      loadSkillIntoEditor(payload.skill as FirmSkill)
      setOrigin('全部')
      setSaveMessage(`${nextStatus === 'published' ? '已发布到我的 Skill' : '已存为草稿'}：${payload.relativeMdPath}`)
    } catch (error) {
      setSaveMessage(error instanceof Error ? error.message : '保存失败')
    } finally {
      setIsSavingInternal(false)
    }
  }

  async function runSkillPipelineStage(
    stage: SkillPipelineStage,
    sanitizedText = '',
    redactionSummary = '未发现明显敏感信息',
    draftOverride?: EditorDraft,
    autoApply = false,
  ) {
    setRunningPipelineStage(stage)
    setEditorAiError('')
    setEditorAiNotice('')
    try {
      const response = await fetch('/api/skills/editor-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          stage,
          sourceSkill: selectedSkill,
          draft: draftOverride || editorDraft,
          uploadNames: editorUploadNames,
          knowledgeSources: selectedKnowledgeSources,
          sampleText: stage === 'improve' && skillRunResult ? JSON.stringify(skillRunResult) : sanitizedText || editorDraft.qaTask,
          redactionSummary: stage === 'improve' ? '仅使用已脱敏试跑结果，不重复发送原始材料' : redactionSummary,
        }),
      })
      const payload = await response.json()
      if (!response.ok) throw new Error(payload?.error || '构建链阶段运行失败')
      if (stage === 'expertise') {
        setDiscoveryMessages([])
        setDiscoveryResult(null)
        setDiscoveryReply('')
        setDiscoveryError('')
      }
      setPipelineResults((current) => {
        const next = { ...current, [stage]: payload as EditorAiResult }
        if (stage === 'expertise') {
          delete next.standardize
          delete next.improve
          delete next.security
        } else if (stage === 'standardize') {
          delete next.improve
          delete next.security
        } else if (stage === 'improve') {
          delete next.security
        }
        return next
      })
      setPipelineAppliedStages((current) => {
        const next = { ...current, [stage]: false }
        if (stage === 'expertise') {
          delete next.standardize
          delete next.improve
          delete next.security
        } else if (stage === 'standardize') {
          delete next.improve
          delete next.security
        } else if (stage === 'improve') {
          delete next.security
        }
        return next
      })
      if (autoApply && payload?.draft && !(draftOverride || editorDraft).customSkillMd.trim()) {
        const { next, changes } = buildEditorAiApplication(draftOverride || editorDraft, payload.draft as Partial<EditorDraft>)
        setEditorDraft(next)
        setMarkdownManualMode(false)
        setPipelineAppliedStages((current) => ({ ...current, [stage]: true }))
        setEditorAiNotice(changes.length ? `Skill 已生成并自动写入，共更新 ${changes.length} 项。你可以直接试跑或展开结构化字段调整。` : 'Skill 已生成，可以直接进入试跑。')
      }
    } catch (error) {
      setEditorAiError(error instanceof Error ? error.message : '构建链阶段运行失败，请稍后重试。')
    } finally {
      setRunningPipelineStage('')
    }
  }

  async function runSkillDiscovery(sanitizedText: string, originalText = sanitizedText, materialContext = '', materialProfile?: MaterialProfile) {
    setIsDiscovering(true)
    setDiscoveryError('')
    try {
      const response = await fetch('/api/skills/discovery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userMessage: sanitizedText,
          messages: discoveryMessages,
          requirements: discoveryResult?.requirements,
          draft: editorDraft,
          caseMaterial: materialContext || (materialClassification && ['case', 'mixed'].includes(materialClassification.purpose)
            ? trialMaterial.slice(0, 12000)
            : ''),
          materialProfile: materialProfile || materialClassification?.profile,
        }),
      })
      const payload = await response.json() as DiscoveryResult
      if (!response.ok) throw new Error(payload.error || '需求访谈失败')
      const questionText = payload.questions.map((question, index) => `${index + 1}. ${question}`).join('\n')
      const assistantText = [payload.assistantMessage, questionText].filter(Boolean).join('\n\n')
      setDiscoveryMessages((current) => [
        ...current,
        { role: 'user', content: originalText },
        { role: 'assistant', content: assistantText },
      ])
      setDiscoveryResult(payload)
      setDiscoveryReply('')
      window.setTimeout(() => document.getElementById('skill-discovery')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
      if (payload.error) setDiscoveryError('大模型访谈暂时不可用，当前使用已有草稿完成基础需求检查。')
    } catch (error) {
      setDiscoveryError(error instanceof Error ? error.message : '需求访谈失败，请稍后重试。')
    } finally {
      setIsDiscovering(false)
    }
  }

  async function processSourceMaterial(sanitizedText: string, redactionSummary: string) {
    setIsClassifyingMaterial(true)
    setMaterialStatus('')
    setEditorAiError('')
    try {
      let classification: MaterialClassification
      if (materialPurpose === 'auto') {
        const response = await fetch('/api/skills/material-classify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: sanitizedText }),
        })
        const payload = await response.json() as MaterialClassification & { error?: string }
        if (!response.ok) throw new Error(payload.error || '材料类型判断失败')
        classification = payload
      } else {
        classification = {
          purpose: materialPurpose,
          confidence: 1,
          reason: '由用户指定材料用途',
          profile: {
            materialType: '由用户指定用途的法律材料',
            documentFunction: '材料用途由用户指定，具体文书功能待模型识别。',
            likelyUserPostures: [],
            matterSummary: '系统将结合材料正文识别具体法律工作。',
            keyIssues: [],
            plausibleTasks: [],
            suggestedPurposes: [],
            suggestedTriggers: [],
            suggestedOutputs: [],
          },
        }
      }
      setMaterialClassification(classification)
      setDiscoveryMessages([])
      setDiscoveryResult(null)
      setDiscoveryReply('')
      setDiscoveryError('')

      if (classification.purpose === 'case') {
        setTrialMaterial(sanitizedText)
        setPipelineResults((current) => {
          const next = { ...current }
          delete next.expertise
          delete next.standardize
          delete next.improve
          delete next.security
          return next
        })
        setPipelineAppliedStages({ expertise: true })
        setMaterialStatus('已识别为待处理业务材料：不会写入 Skill 专业规则，已用于辅助需求识别并预填首次试跑。')
        setEditorAiNotice(`材料已通过用途分流。${redactionSummary}`)
        await runSkillDiscovery('请根据我提供的材料引导我创建合适的 Skill。', '请根据我提供的材料引导我创建合适的 Skill。', sanitizedText, classification.profile)
        return
      }

      if (classification.purpose === 'mixed') {
        setTrialMaterial(sanitizedText)
        setMaterialStatus('已识别为混合材料：仅提取其中可复用的方法，个案正文同时用于首次试跑。请审阅提取结果后再应用。')
      } else {
        setMaterialStatus('已识别为方法知识：将提取可复用步骤、判断规则、来源要求和律师复核边界。')
      }
      const extraction = runSkillPipelineStage('expertise', sanitizedText, redactionSummary)
      await runSkillDiscovery('请结合我提供的材料，用最少的问题引导我创建 Skill。', '请结合我提供的材料，用最少的问题引导我创建 Skill。', sanitizedText, classification.profile)
      await extraction
    } catch (error) {
      setEditorAiError(error instanceof Error ? error.message : '材料处理失败，请稍后重试。')
    } finally {
      setIsClassifyingMaterial(false)
    }
  }

  function confirmDiscoveryAndGenerate() {
    if (!discoveryResult?.canAdvance) return
    const requirements = discoveryResult.requirements
    const nextDraft: EditorDraft = {
      ...editorDraft,
      name: '',
      chineseName: '',
      practice: '',
      description: requirements.purpose || editorDraft.description,
      triggerConditions: requirements.triggerConditions || editorDraft.triggerConditions,
      inputMaterials: requirements.inputMaterials || editorDraft.inputMaterials,
      jurisdiction: requirements.jurisdiction || editorDraft.jurisdiction,
      checklist: requirements.workflowConstraints || '',
      sourcePolicy: '',
      prohibited: requirements.reviewBoundaries || '',
      deliverableTemplate: '',
      outputFormat: requirements.outputs || editorDraft.outputFormat,
      verificationChecklist: '',
      qaTask: '',
      versionNote: '',
      approvalNote: '',
      customSkillMd: '',
    }
    setEditorDraft(nextDraft)
    runSkillPipelineStage('standardize', JSON.stringify(requirements), '需求访谈内容已通过脱敏检查', nextDraft, true)
  }

  function contextualDiscoveryAnswer(answer: string) {
    const question = discoveryResult?.questions?.[0]
    return question ? `针对问题“${question}”，我的回答是：${answer}` : answer
  }

  function applyPipelineDraft(stage: SkillPipelineStage) {
    const result = pipelineResults[stage]
    if (!result?.draft) return
    if (editorDraft.customSkillMd.trim() && !window.confirm('当前存在手写 SKILL.md。应用 AI 建议将退出手写模式，并恢复由结构化字段生成 Markdown。是否继续？')) return
    const { next, changes } = buildEditorAiApplication(editorDraft, result.draft)
    setEditorDraft(next)
    setMarkdownManualMode(false)
    setPipelineAppliedStages((current) => ({ ...current, [stage]: true }))
    setEditorAiNotice(changes.length ? `已应用“${pipelineStageLabels[stage]}”结果，共修改 ${changes.length} 项。` : '该阶段未产生需要写回的字段修改。')
  }

  function buildEditorAiApplication(current: EditorDraft, patch: Partial<EditorDraft>) {
    const next: EditorDraft = { ...current }
    const changes: EditorAppliedChange[] = []
    const editableFields = Object.keys(editorDraftFieldLabels).filter((field) => field !== 'customSkillMd') as (keyof EditorDraft)[]

    editableFields.forEach((field) => {
      const incoming = patch[field]
      if (typeof incoming !== 'string') return
      const trimmed = incoming.trim()
      if (!trimmed) return
      const before = String(current[field] || '')
      if (before === trimmed) return
      ;(next as unknown as Record<string, string>)[field] = trimmed
      changes.push({
        field,
        label: editorDraftFieldLabels[field] || field,
        before,
        after: trimmed,
      })
    })

    Object.entries(markdownFallbacks).forEach(([field, fallback]) => {
      if (!fallback) return
      const key = field as keyof EditorDraft
      const currentValue = String(next[key] || '').trim()
      if (currentValue) return
      ;(next as unknown as Record<string, string>)[key] = fallback
      changes.push({
        field,
        label: editorDraftFieldLabels[key] || field,
        before: String(current[key] || ''),
        after: fallback,
      })
    })

    if (current.customSkillMd.trim()) {
      next.customSkillMd = ''
      changes.push({
        field: 'customSkillMd',
        label: editorDraftFieldLabels.customSkillMd || 'SKILL.md 手动内容',
        before: current.customSkillMd,
        after: '已恢复为字段生成内容，确保 AI 修改能同步进入 SKILL.md。',
      })
    }

    if (changes.some((change) => qaTaskSourceFields.has(change.field as keyof EditorDraft))) {
      const synchronizedQaTask = buildSynchronizedQaTask(next)
      if (next.qaTask !== synchronizedQaTask) {
        changes.push({ field: 'qaTask', label: editorDraftFieldLabels.qaTask || '质检试跑任务', before: next.qaTask, after: synchronizedQaTask })
        next.qaTask = synchronizedQaTask
      }
    }

    return { next, changes }
  }

  function updateEditorDraftField(field: EditorOptimizableField, value: string) {
    setEditorDraft((current) => {
      const next = { ...current, [field]: value }
      if (qaTaskSourceFields.has(field)) next.qaTask = buildSynchronizedQaTask(next)
      return next
    })
  }

  async function optimizeEditorField(field: EditorOptimizableField) {
    setOptimizingEditorField(field)
    setPendingFieldOptimization(null)
    setEditorAiError('')
    setEditorAiNotice('')
    try {
      const response = await fetch('/api/skills/editor-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          stage: 'improve',
          targetField: field,
          sourceSkill: selectedSkill,
          draft: editorDraft,
          uploadNames: editorUploadNames,
          knowledgeSources: selectedKnowledgeSources,
          sampleText: `请只优化结构化字段“${editorDraftFieldLabels[field] || field}”。`,
          redactionSummary: '仅发送当前 Skill 草稿，不发送原始业务材料',
        }),
      })
      const payload = await response.json() as EditorAiResult & { error?: string }
      if (!response.ok) throw new Error(payload.error || '字段优化失败')
      const incoming = payload.draft?.[field]
      if (typeof incoming !== 'string' || !incoming.trim()) throw new Error('大模型未返回有效的字段内容')
      const nextValue = field === 'practice' && !skillCategories.some((category) => category.practice === incoming.trim())
        ? editorDraft.practice
        : incoming.trim()
      setPendingFieldOptimization({
        field,
        label: editorDraftFieldLabels[field] || field,
        before: String(editorDraft[field] || ''),
        after: nextValue,
        summary: payload.summary || '已生成字段优化建议。',
        issues: payload.issues || [],
        suggestions: payload.suggestions || [],
      })
      setEditorAiNotice(`已生成“${editorDraftFieldLabels[field] || field}”的优化建议，请对照审阅后选择是否应用。`)
      window.setTimeout(() => document.getElementById('field-optimization-review')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 50)
    } catch (error) {
      setEditorAiError(error instanceof Error ? error.message : '字段优化失败，请稍后重试。')
    } finally {
      setOptimizingEditorField('')
    }
  }

  function applyPendingFieldOptimization() {
    if (!pendingFieldOptimization) return
    if (editorDraft.customSkillMd.trim() && !window.confirm('当前处于 SKILL.md 手写模式。应用后将恢复结构化字段自动生成 Markdown，是否继续？')) return
    const optimization = pendingFieldOptimization
    setEditorDraft((current) => {
      const next = { ...current, [optimization.field]: optimization.after, customSkillMd: '' }
      if (qaTaskSourceFields.has(optimization.field)) next.qaTask = buildSynchronizedQaTask(next)
      return next
    })
    setMarkdownManualMode(false)
    setPendingFieldOptimization(null)
    setEditorAiNotice(`已应用“${optimization.label}”的 AI 优化，并同步更新 SKILL.md。`)
  }

  function editorFieldHeader(label: string, field: EditorOptimizableField) {
    return (
      <span className="flex min-h-7 items-center justify-between gap-2 text-xs font-semibold text-slate-600">
        <span>{label}</span>
        <button
          type="button"
          aria-label={`AI 优化：${label}`}
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            optimizeEditorField(field)
          }}
          disabled={Boolean(optimizingEditorField)}
          className="rounded-md border border-indigo-200 bg-indigo-50 px-2 py-1 text-[11px] font-semibold text-indigo-700 hover:border-indigo-300 hover:bg-indigo-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {optimizingEditorField === field ? 'AI 优化中…' : 'AI 优化'}
        </button>
      </span>
    )
  }

  function toggleKnowledgeSource(id: string) {
    setSelectedKnowledgeIds((current) => (
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    ))
  }

  function requestModelAction(kind: PendingModelAction['kind'], text: string, stage?: SkillPipelineStage) {
    const inspection = inspectSensitiveText(text)
    if (inspection.hits.length > 0) {
      if (kind === 'recommend') setRecommendationResult(null)
      setRedactionResult(inspection)
      setPendingModelAction({ kind, text, stage })
      return
    }
    executeModelAction(kind, text, text, '未发现明显敏感信息', stage)
  }

  function cancelRedactionAction() {
    setPendingModelAction(null)
    setRedactionResult(null)
  }

  function confirmRedactionAction() {
    if (!pendingModelAction || !redactionResult) return
    executeModelAction(
      pendingModelAction.kind,
      pendingModelAction.text,
      redactionResult.sanitizedText,
      redactionResult.summary,
      pendingModelAction.stage,
    )
    setPendingModelAction(null)
    setRedactionResult(null)
  }

  function executeModelAction(
    kind: PendingModelAction['kind'],
    originalText: string,
    sanitizedText: string,
    redactionSummary: string,
    stage?: SkillPipelineStage,
  ) {
    if (kind === 'recommend') {
      generateModelRecommendations(sanitizedText, redactionSummary)
      return
    }
    if (kind === 'pipeline' && stage) {
      runSkillPipelineStage(stage, sanitizedText, redactionSummary)
      return
    }
    if (kind === 'discovery') {
      runSkillDiscovery(sanitizedText, originalText)
      return
    }
    if (kind === 'material') {
      processSourceMaterial(sanitizedText, redactionSummary)
      return
    }
    runCurrentSkill(sanitizedText, redactionSummary, originalText)
  }

  async function handleExpertiseMaterialUpload(files: FileList | null) {
    if (!files?.length) return
    const accepted = Array.from(files).filter((file) => /\.(txt|md|csv|json)$/i.test(file.name))
    const contents = await Promise.all(accepted.map((file) => file.text()))
    setExpertiseUploadNames(accepted.map((file) => file.name))
    if (contents.length) {
      setExpertiseSourceText((current) => [current.trim(), ...contents.map((content, index) => `【${accepted[index].name}】\n${content.trim()}`)].filter(Boolean).join('\n\n'))
    }
  }

  function fallbackMarkdownForSkill(skill: FirmSkill) {
    return [
      `# ${skill.chineseName}`,
      '',
      `原始名称：\`${skill.name}\``,
      `分类：${skill.practice}`,
      `来源：${skill.sourceName}`,
      '',
      '## Skill 介绍',
      skill.description,
      '',
      '## 适用场景',
      skill.suitableFor.map((item) => `- ${item}`).join('\n'),
      '',
      '## 不适用',
      skill.notFor.map((item) => `- ${item}`).join('\n'),
      '',
      '## 工作流',
      skill.workflow.map((item, index) => `${index + 1}. ${item}`).join('\n'),
      '',
      '## 输出格式',
      skill.outputFormat,
    ].join('\n')
  }

  async function readMarkdownForSkill(skill: FirmSkill) {
    if (skill.id === selectedSkill.id && selectedMarkdownFiles.skill?.content) return selectedMarkdownFiles.skill.content
    const paths = {
      readme: skill.readmeMdPath,
      skill: skill.skillMdPath || skill.mdPath,
    }
    if (!paths.readme && !paths.skill) return fallbackMarkdownForSkill(skill)
    const response = await fetch('/api/skills/markdown', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paths }),
    })
    if (!response.ok) throw new Error('读取 Markdown 失败')
    const payload = (await response.json()) as { files?: Record<string, MarkdownFilePayload> }
    const files = payload.files || {}
    const parts = [
      files.readme?.content ? `# README.md\n\n${files.readme.content}` : '',
      files.skill?.content ? `# SKILL.md\n\n${files.skill.content}` : '',
    ].filter(Boolean)
    return parts.length ? parts.join('\n\n---\n\n') : fallbackMarkdownForSkill(skill)
  }

  async function writeTextToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text)
      return
    } catch {
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.setAttribute('readonly', '')
      textArea.style.position = 'fixed'
      textArea.style.left = '-9999px'
      document.body.appendChild(textArea)
      textArea.select()
      const copied = document.execCommand('copy')
      textArea.remove()
      if (!copied) throw new Error('复制失败')
    }
  }

  async function copyAiPromptForSkill(skill: FirmSkill, showInEffectTest = false) {
    try {
      const markdown = await readMarkdownForSkill(skill)
      await writeTextToClipboard(markdown)
      const notice = `已复制完整 Markdown：${skill.chineseName}`
      setRecommendCopyNotice(notice)
      if (showInEffectTest) setSkillEffectCopyNotice(notice)
    } catch {
      const notice = '未能复制完整 Markdown，请查看 Skill 后在 SKILL.md 标签页手动复制。'
      setRecommendCopyNotice(notice)
      if (showInEffectTest) setSkillEffectCopyNotice(notice)
    }
  }

  async function downloadSkillPackage(skill: FirmSkill) {
    setRecommendCopyNotice(`正在打包：${skill.chineseName}`)
    try {
      const response = await fetch('/api/skills/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: skill.name || skill.id,
          skillMdPath: skill.skillMdPath || skill.mdPath,
          resourcePaths: skill.resourcePaths || [],
          fallbackMarkdown: fallbackMarkdownForSkill(skill),
          redistribution: skill.redistribution,
        }),
      })
      if (!response.ok) {
        const payload = (await response.json()) as { error?: string }
        throw new Error(payload.error || '下载失败')
      }
      const blob = await response.blob()
      const downloadUrl = URL.createObjectURL(blob)
      const anchor = document.createElement('a')
      anchor.href = downloadUrl
      anchor.download = response.headers.get('X-Skill-Filename') || `${skill.name || skill.id}.zip`
      document.body.appendChild(anchor)
      anchor.click()
      anchor.remove()
      URL.revokeObjectURL(downloadUrl)
      const resourceSummary = skill.resourceCount ? `及 ${skill.resourceCount} 个配套资源` : ''
      setRecommendCopyNotice(`已下载 SKILL.md${resourceSummary}：${skill.chineseName}`)
    } catch (error) {
      setRecommendCopyNotice(error instanceof Error ? error.message : '下载 Skill 失败')
    }
  }

  async function openSkillEffectTest(skill: FirmSkill, recommendation: ModelRecommendation) {
    setSkillEffectTest({ skill, recommendation })
    setSkillEffectResult(null)
    setSkillEffectError('')
    setSkillEffectCopyNotice('')
    setIsTestingSkillEffect(true)
    try {
      const skillMarkdown = await readMarkdownForSkill(skill)
      const response = await fetch('/api/skills/effect-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          purpose: taskPurpose.trim() || '未填写任务目的',
          text: sourceText,
          fileNames,
          skill,
          skillMarkdown,
          recommendation: {
            score: recommendation.score,
            reasons: recommendation.reasons,
            cautions: recommendation.cautions,
          },
        }),
      })
      if (!response.ok) {
        const payload = await response.json().catch(() => ({ error: '效果测试失败' })) as { error?: string }
        throw new Error(payload.error || '效果测试失败')
      }
      const result = (await response.json()) as SkillEffectTestResult
      setSkillEffectResult(result)
    } catch (error) {
      setSkillEffectError(error instanceof Error ? error.message : '大模型效果测试失败，请稍后重试。')
    } finally {
      setIsTestingSkillEffect(false)
    }
  }

  async function generateModelRecommendations(sanitizedText = sourceText, redactionSummary = '未执行脱敏检查') {
    setIsAnalyzing(true)
    setAnalyzeProgress(8)
    setRecommendationError('')
    setRecommendCopyNotice('')
    setSkillOptimization(null)
    const progressTimer = setInterval(() => {
      setAnalyzeProgress((prev) => (prev < 90 ? prev + Math.max(2, Math.round((90 - prev) / 6)) : prev))
    }, 600)
    try {
      const response = await fetch('/api/skills/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'recommend',
          purpose: taskPurpose.trim() || undefined,
          taskEntrypoint: selectedEntrypoint || undefined,
          text: sanitizedText,
          fileNames,
          filePayloads: uploadedFilePayloads,
          redactionSummary,
        }),
      })
      if (!response.ok) {
        const payload = await response.json().catch(() => ({ error: '大模型检索失败' })) as { error?: string }
        throw new Error(payload.error || '大模型检索失败')
      }
      const data = (await response.json()) as ModelRecommendationResult
      if (!Array.isArray(data.recommendations)) throw new Error('推荐结果格式异常')
      setShowAllMatches(false)
      setLibraryMatchedIds(null)
      setRecommendationResult(data)
    } catch (error) {
      setRecommendationError(error instanceof Error ? error.message : '推荐分析失败，请稍后重试。')
    } finally {
      clearInterval(progressTimer)
      setAnalyzeProgress(100)
      setIsAnalyzing(false)
      setTimeout(() => setAnalyzeProgress(0), 700)
    }
  }

  async function optimizeRecommendedSkill(skillId: string, surface: 'recommend' | 'editor' = 'recommend') {
    setOptimizingSkillId(skillId)
    setRecommendationError('')
    if (surface === 'editor') setEditorAiError('')
    try {
      const response = await fetch('/api/skills/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'optimize',
          purpose: taskPurpose.trim() || '未填写任务目的',
          text: sourceText,
          fileNames,
          skillId,
        }),
      })
      if (!response.ok) throw new Error('优化失败')
      const data = (await response.json()) as SkillOptimization
      setSkillOptimization(data)
    } catch {
      const message = 'Skill 优化失败，请稍后重试。'
      if (surface === 'editor') {
        setEditorAiError(message)
      } else {
        setRecommendationError(message)
      }
    } finally {
      setOptimizingSkillId('')
    }
  }

  async function runCurrentSkill(
    sanitizedText = trialMaterial,
    redactionSummary = '未执行脱敏检查',
    originalText = trialMaterial,
  ) {
    setIsRunningSkill(true)
    setSkillRunError('')
    setSkillRunResult(null)
    try {
      const response = await fetch('/api/skills/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sourceSkill: selectedSkill,
          draft: editorDraft,
          material: originalText,
          sanitizedMaterial: sanitizedText,
          redactionSummary,
          knowledgeSources: selectedKnowledgeSources,
        }),
      })
      const payload = await response.json()
      if (!response.ok) throw new Error(payload?.error || 'Skill 试跑失败')
      const result = payload as SkillRunResult
      setSkillRunResult(result)
      setSkillRunRecords((current) => [{
        id: `run-${selectedSkill.id}-${current.length + 1}`,
        skillId: selectedSkill.id,
        skillName: editorDraft.chineseName || selectedSkill.chineseName,
        createdAt: new Date().toLocaleString('zh-CN', { hour12: false }),
        score: Math.round(result.score),
        passed: result.passed,
        rating: result.passed ? 4 : 2,
        failureReason: result.failureReason || (result.passed ? '' : '待人工填写失败原因'),
        materialPreview: sanitizedText.slice(0, 80),
      }, ...current])
      window.setTimeout(() => {
        document.getElementById('skill-run-result')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    } catch (error) {
      setSkillRunError(error instanceof Error ? error.message : 'Skill 试跑失败，请稍后重试。')
    } finally {
      setIsRunningSkill(false)
    }
  }

  function updateRunRecord(recordId: string, patch: Partial<Pick<SkillRunRecord, 'rating' | 'failureReason'>>) {
    setSkillRunRecords((current) => current.map((record) => (
      record.id === recordId ? { ...record, ...patch } : record
    )))
  }

  const mySkillList = (
    <aside
      data-editor-sidebar="my-skills"
      data-collapsed={editorSidebarCollapsed}
      className={`sticky top-[76px] max-h-[calc(100vh-96px)] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 ${
        editorSidebarCollapsed ? 'w-[52px]' : 'w-[280px]'
      }`}
    >
      <section className={`border-b border-slate-200 ${editorSidebarCollapsed ? 'p-2' : 'p-4'}`}>
        <div className="flex items-center justify-between gap-2">
          {!editorSidebarCollapsed && <SectionTitle title="我的 Skill" meta={`${mySkills.length} 个`} />}
          <button
            type="button"
            aria-label={editorSidebarCollapsed ? '展开我的 Skill 侧边栏' : '收起我的 Skill 侧边栏'}
            title={editorSidebarCollapsed ? '展开侧边栏' : '收起侧边栏'}
            onClick={() => setEditorSidebarCollapsed((current) => !current)}
            className="grid size-8 shrink-0 place-items-center rounded-md border border-slate-200 bg-white text-sm font-semibold text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-950"
          >
            {editorSidebarCollapsed ? '›' : '‹'}
          </button>
        </div>
        {!editorSidebarCollapsed && (
          <p className="mt-2 text-xs leading-5 text-slate-500">
            这里仅显示你新建、复制改造或保存过的 Skill。外部开源和示例内部 Skill 保留在 Skill 库中浏览。
          </p>
        )}
        <button
          type="button"
          onClick={createNewMySkill}
          className={`mt-4 h-10 rounded-md bg-slate-900 text-xs font-semibold text-white hover:bg-slate-700 ${
            editorSidebarCollapsed ? 'grid w-8 place-items-center px-0' : 'w-full px-3'
          }`}
          title="新建我的 Skill"
        >
          {editorSidebarCollapsed ? '+' : '新建我的 Skill'}
        </button>
      </section>

      {editorSidebarCollapsed ? (
        <button
          type="button"
          onClick={() => setEditorSidebarCollapsed(false)}
          className="flex h-[calc(100vh-184px)] w-full flex-col items-center justify-start gap-3 px-2 py-4 text-slate-600 hover:bg-slate-50 hover:text-slate-950"
          title="展开我的 Skill 侧边栏"
        >
          <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold">{mySkills.length}</span>
          <span className="[writing-mode:vertical-rl] text-xs font-semibold tracking-[0.14em]">我的 Skill</span>
        </button>
      ) : (
        <div className="max-h-[calc(100vh-252px)] space-y-2 overflow-y-auto p-3">
          {mySkills.map((skill) => (
            <button
              key={skill.id}
              onClick={() => {
                setSelectedId(skill.id)
                loadSkillIntoEditor(skill)
              }}
              className={`w-full rounded-lg border bg-white p-3 text-left transition-colors ${
                selectedSkill.id === skill.id ? 'border-slate-900 shadow-sm' : 'border-slate-200 hover:border-slate-400'
              }`}
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                <p className="min-w-0 truncate pt-0.5 text-sm font-semibold text-slate-900" title={skill.chineseName}>{skill.chineseName}</p>
                <Pill className={statusTone[skill.status]}>{statusLabels[skill.status]}</Pill>
              </div>
              <div className="mt-3 flex items-center justify-between gap-3 text-xs text-slate-500">
                <span className="min-w-0 truncate">{skill.practice}</span>
                <span className="shrink-0 whitespace-nowrap">{skill.internalSavedPath ? '已保存' : '未保存'}</span>
              </div>
            </button>
          ))}
          {mySkills.length === 0 && (
            <div className="rounded-lg border border-dashed border-slate-300 bg-white p-4 text-sm leading-6 text-slate-500">
              还没有我的 Skill。可以从右上角新建，也可以在 Skill 详情页基于现有 Skill 编辑。
            </div>
          )}
        </div>
      )}
    </aside>
  )

  const editorPanel = (
    <section className="rounded-lg border border-slate-200 bg-white">
      <div className="border-b border-slate-200 p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <SectionTitle title="编辑与试跑 Skill" meta={selectedSkill.updated} />
          {editorReturnTarget && (
            <button
              type="button"
              onClick={() => goToReturnTarget(editorReturnTarget)}
              className="h-9 w-fit rounded-md border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 hover:border-slate-400 hover:text-slate-900"
            >
              {editorReturnTarget.label}
            </button>
          )}
        </div>
        <div className="mt-4 border-b border-slate-200">
          <div className="-mb-px flex flex-wrap gap-1">
          {[
            ['edit', '构建 Skill'],
            ['template', 'SKILL.md'],
            ['qa', '质检试用'],
            ['help', '使用说明'],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setEditorTab(key as typeof editorTab)}
              className={`h-10 rounded-t-lg border px-4 text-xs font-semibold transition-colors ${
                editorTab === key
                  ? 'border-slate-200 border-b-white bg-white text-slate-950 shadow-sm'
                  : 'border-transparent bg-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {label}
            </button>
          ))}
          </div>
        </div>
        {editorAiError && (
          <p className="mt-3 rounded-md bg-rose-50 px-3 py-2 text-xs text-rose-700">{editorAiError}</p>
        )}
        {editorAiNotice && (
          <p className="mt-3 rounded-md bg-emerald-50 px-3 py-2 text-xs text-emerald-700">{editorAiNotice}</p>
        )}
        {saveMessage && (
          <p className={`mt-3 rounded-md px-3 py-2 text-xs ${
            saveMessage.includes('失败') ? 'bg-rose-50 text-rose-700' : 'bg-emerald-50 text-emerald-700'
          }`}>
            {saveMessage}
          </p>
        )}
        {optimizingSkillId === selectedSkill.sourceSkillId && (
          <p className="mt-3 rounded-md bg-indigo-50 px-3 py-2 text-xs text-indigo-700">正在生成基于原 Skill 的任务化优化草案...</p>
        )}
        {skillOptimization && (skillOptimization.skillId === selectedSkill.id || skillOptimization.skillId === selectedSkill.sourceSkillId) && (
          <div className="mt-3 rounded-lg border border-indigo-100 bg-indigo-50 p-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <SectionTitle title="AI 优化草案" meta={skillOptimization.title} />
              <button
                type="button"
                onClick={() => {
                  setEditorDraft((current) => ({ ...current, customSkillMd: skillOptimization.optimizedReadme }))
                  setEditorTab('template')
                }}
                className="h-9 shrink-0 rounded-md bg-indigo-950 px-3 text-xs font-semibold text-white hover:bg-indigo-800"
              >
                应用到输出模板
              </button>
            </div>
            <pre className="mt-3 max-h-64 overflow-auto whitespace-pre-wrap rounded-lg border border-indigo-100 bg-white p-3 text-xs leading-6 text-slate-700">
              {skillOptimization.optimizedReadme}
            </pre>
          </div>
        )}
      </div>

      {editorTab === 'edit' && (
        <div className="space-y-4 p-4">
          <div className="grid gap-3">
            {([
              ['expertise', '01', '提供材料', '系统会区分待处理业务材料与方法知识，避免把某个案件的事实直接写进 Skill。你也可以手动指定材料用途。'],
              ['standardize', '02', '整理并生成 Skill', '将工作方法整理为适用场景、输入材料、工作步骤、风险边界、输出要求和复核规则，生成可试跑的 Skill。'],
            ] as const).map(([stage, number, title, description]) => {
              const result = pipelineResults[stage]
              const disabled = false
              return (
                <section id={stage === 'standardize' ? 'skill-discovery' : undefined} key={stage} className="rounded-lg border border-slate-200 bg-white p-4">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-slate-900 px-2 py-1 text-[11px] font-semibold text-white">{number}</span>
                        <p className="text-sm font-semibold text-slate-950">{title}</p>
                        {(result || (stage === 'expertise' && materialStatus)) && <span className={`rounded-md px-2 py-1 text-[11px] font-semibold ${pipelineAppliedStages[stage] ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>{pipelineAppliedStages[stage] ? '已处理' : '待确认'}</span>}
                      </div>
                      <p className="mt-2 text-xs leading-5 text-slate-500">{description}</p>
                    </div>
                    {stage === 'expertise' && (
                      <button
                        type="button"
                        onClick={() => requestModelAction('material', expertiseSourceText)}
                        disabled={disabled || Boolean(runningPipelineStage) || isClassifyingMaterial || !expertiseSourceText.trim()}
                        className="h-9 shrink-0 rounded-md bg-slate-900 px-3 text-xs font-semibold text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                      >
                        {isClassifyingMaterial ? '识别并提问中...' : runningPipelineStage === stage ? '处理中...' : result ? '重新处理' : '识别材料并开始'}
                      </button>
                    )}
                  </div>
                  {stage === 'expertise' ? (
                    <div className="mt-4 grid gap-3">
                      <details className="rounded-lg border border-slate-200 bg-slate-50">
                        <summary className="cursor-pointer list-none px-3 py-2 text-xs font-semibold text-slate-700">材料用途：{materialPurpose === 'auto' ? '自动判断（推荐）' : materialPurpose === 'case' ? '待处理材料' : materialPurpose === 'method' ? '方法知识' : '混合材料'} <span className="ml-1 font-normal text-slate-400">· 点击可手动指定</span></summary>
                      <div className="grid gap-2 border-t border-slate-200 p-3 sm:grid-cols-2 lg:grid-cols-4">
                        {([
                          ['auto', '自动判断（推荐）', '由 AI 判断材料用途'],
                          ['case', '待处理材料', '合同、案情、邮件、证据'],
                          ['method', '方法知识', '指引、清单、工作标准'],
                          ['mixed', '混合材料', '方法说明和个案正文都有'],
                        ] as const).map(([value, label, hint]) => (
                          <button key={value} type="button" onClick={() => { setMaterialPurpose(value); setMaterialClassification(null); setMaterialStatus('') }} className={`rounded-lg border p-3 text-left transition-colors ${materialPurpose === value ? 'border-indigo-500 bg-indigo-50' : 'border-slate-200 bg-white hover:border-slate-400'}`}>
                            <span className="block text-xs font-semibold text-slate-900">{label}</span>
                            <span className="mt-1 block text-[11px] leading-4 text-slate-500">{hint}</span>
                          </button>
                        ))}
                      </div>
                      </details>
                      <details className="rounded-lg border border-violet-200 bg-violet-50">
                        <summary className="cursor-pointer list-none px-3 py-2 text-xs font-semibold text-violet-900">关联知识库（可选） <span className="ml-1 font-normal text-emerald-700">{selectedKnowledgeSources.length ? `已关联 ${selectedKnowledgeSources.length} 项` : '未关联'}</span></summary>
                      <div className="border-t border-violet-200 p-3">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="text-xs font-semibold text-violet-950">关联知识库</p>
                              <span className="rounded-md bg-white px-2 py-0.5 text-[11px] font-semibold text-violet-700">可选</span>
                              {!!selectedKnowledgeSources.length && <span className="text-[11px] text-emerald-700">已关联 {selectedKnowledgeSources.length} 项</span>}
                            </div>
                            <p className="mt-1 text-[11px] leading-5 text-violet-700">已关联的内部口径、模板或审查规则会作为受控知识来源参与方法提取和 Skill 生成；不会改变待处理业务材料的用途。</p>
                          </div>
                          <button type="button" onClick={() => setActiveView('knowledge')} className="h-8 shrink-0 rounded-md border border-violet-200 bg-white px-3 text-[11px] font-semibold text-violet-700 hover:border-violet-400">管理知识库</button>
                        </div>
                        <div className="mt-3 grid gap-2">
                          {[editableKnowledgeSource].map((source) => {
                            const selected = selectedKnowledgeIds.includes(source.id)
                            return (
                              <button key={source.id} type="button" onClick={() => toggleKnowledgeSource(source.id)} className={`flex w-full items-start gap-3 rounded-md border p-3 text-left transition-colors ${selected ? 'border-violet-400 bg-white' : 'border-violet-100 bg-white/60 hover:border-violet-300'}`}>
                                <span aria-hidden="true" className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border text-[10px] font-bold ${selected ? 'border-violet-600 bg-violet-600 text-white' : 'border-slate-300 bg-white text-transparent'}`}>✓</span>
                                <span className="min-w-0 flex-1">
                                  <span className="flex flex-wrap items-center gap-2">
                                    <span className="text-xs font-semibold text-slate-900">{source.title}</span>
                                    <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-500">{source.type}</span>
                                  </span>
                                  <span className="mt-1 block text-[11px] leading-4 text-slate-500">{source.summary}</span>
                                </span>
                                <span className={`shrink-0 text-[11px] font-semibold ${selected ? 'text-violet-700' : 'text-slate-400'}`}>{selected ? '已关联' : '选择'}</span>
                              </button>
                            )
                          })}
                        </div>
                        {!selectedKnowledgeSources.length && <p className="mt-2 text-[11px] text-amber-700">当前未关联知识库，系统将只使用本次提供的材料和当前 Skill 草稿。</p>}
                      </div>
                      </details>
                      <textarea
                        value={expertiseSourceText}
                        onChange={(event) => setExpertiseSourceText(event.target.value)}
                        placeholder="可以粘贴待处理合同、案情或客户邮件，也可以提供操作指引、审查清单、办案经验等方法知识……"
                        className="h-36 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500"
                      />
                      <div className="flex flex-wrap items-center gap-3">
                        <label className="cursor-pointer rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:border-slate-500">
                          上传文本材料
                          <input type="file" multiple accept=".txt,.md,.csv,.json" className="hidden" onChange={(event) => handleExpertiseMaterialUpload(event.target.files)} />
                        </label>
                        <span className="text-xs text-slate-500">支持 TXT / MD / CSV / JSON；内容会先进入脱敏检查。</span>
                      </div>
                      {!!expertiseUploadNames.length && <p className="text-xs text-slate-500">已读取：{expertiseUploadNames.join('、')}</p>}
                      <button type="button" onClick={() => document.getElementById('skill-discovery')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="w-fit text-xs font-semibold text-indigo-700 hover:text-indigo-900">没有材料？直接描述想创建的 Skill →</button>
                      {materialStatus && materialClassification && (
                        <div className={`rounded-lg border p-3 text-xs leading-5 ${materialClassification.purpose === 'case' ? 'border-sky-200 bg-sky-50 text-sky-900' : materialClassification.purpose === 'mixed' ? 'border-amber-200 bg-amber-50 text-amber-900' : 'border-emerald-200 bg-emerald-50 text-emerald-900'}`}>
                          <p className="font-semibold">{materialClassification.purpose === 'case' ? '待处理业务材料' : materialClassification.purpose === 'mixed' ? '混合材料' : '可复用方法知识'} · {Math.round(materialClassification.confidence * 100)}%</p>
                          <p className="mt-1">{materialStatus}</p>
                          {materialClassification.profile?.materialType && <p className="mt-2 font-semibold">识别结果：{materialClassification.profile.materialType}</p>}
                          {materialClassification.profile?.documentFunction && <p className="mt-1 text-[11px] leading-5 opacity-80">文书功能：{materialClassification.profile.documentFunction}</p>}
                          {!!materialClassification.profile?.keyIssues?.length && (
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              {materialClassification.profile.keyIssues.map((issue) => <span key={issue} className="rounded-md bg-white/80 px-2 py-1 text-[11px]">{issue}</span>)}
                            </div>
                          )}
                          <p className="mt-1 opacity-70">判断依据：{materialClassification.reason}</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="mt-4 space-y-3">
                      {!discoveryMessages.length && (
                        <div className="rounded-lg border border-indigo-100 bg-indigo-50 p-3">
                          <p className="text-xs font-semibold text-indigo-950">直接描述想创建什么 Skill</p>
                          <p className="mt-1 text-xs leading-5 text-indigo-700">材料是可选的。用一句话说明也可以开始，AI 每次只问一个关键问题，并提供 1 / 2 / 3 选项或自由输入。</p>
                          <textarea value={discoveryIntent} onChange={(event) => setDiscoveryIntent(event.target.value)} placeholder="例如：创建一个中国法采购合同审查 Skill，供甲方律师使用，输出高/中/低风险清单和修改建议。" className="mt-3 h-24 w-full rounded-md border border-indigo-200 bg-white p-3 text-sm leading-6 outline-none focus:border-indigo-500" />
                          <button type="button" onClick={() => requestModelAction('discovery', discoveryIntent)} disabled={!discoveryIntent.trim() || isDiscovering} className="mt-3 h-9 rounded-md bg-indigo-950 px-4 text-xs font-semibold text-white hover:bg-indigo-800 disabled:cursor-not-allowed disabled:bg-slate-300">
                            {isDiscovering ? '分析中...' : '让 AI 引导我创建'}
                          </button>
                        </div>
                      )}
                      {!!discoveryMessages.length && (
                        <div className="max-h-72 space-y-2 overflow-y-auto rounded-lg border border-slate-200 bg-slate-50 p-3">
                          {discoveryMessages.map((message, index) => (
                            <div key={`${message.role}-${index}`} className={`rounded-md p-3 text-xs leading-5 ${message.role === 'user' ? 'ml-8 bg-slate-900 text-white' : 'mr-8 border border-slate-200 bg-white text-slate-700'}`}>
                              <p className="mb-1 text-[11px] font-semibold opacity-60">{message.role === 'user' ? '你' : 'AI 需求助手'}</p>
                              <p className="whitespace-pre-wrap">{message.content}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      {discoveryResult?.status === 'needs_clarification' && (
                        <div className="rounded-lg border border-slate-200 bg-white p-3">
                          {!!discoveryResult.suggestedAnswers?.[0]?.length && (
                            <div className="mb-3 grid gap-2 sm:grid-cols-3">
                              {discoveryResult.suggestedAnswers[0].map((choice, index) => (
                                <button key={choice} type="button" onClick={() => requestModelAction('discovery', contextualDiscoveryAnswer(choice))} disabled={isDiscovering} className="rounded-md border border-indigo-200 bg-indigo-50 p-3 text-left text-xs leading-5 text-indigo-950 hover:border-indigo-500 disabled:opacity-50">
                                  <span className="mr-1 font-bold text-indigo-600">{index + 1}.</span>{choice}
                                </button>
                              ))}
                            </div>
                          )}
                          <p className="mb-2 text-[11px] font-semibold text-slate-500">或者自己输入</p>
                          <textarea value={discoveryReply} onChange={(event) => setDiscoveryReply(event.target.value)} placeholder="按编号回答即可；如果某项不确定，可以写“由承办律师确认”。" className="h-24 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500" />
                          <button type="button" onClick={() => requestModelAction('discovery', contextualDiscoveryAnswer(discoveryReply))} disabled={!discoveryReply.trim() || isDiscovering} className="mt-2 h-9 rounded-md bg-slate-900 px-4 text-xs font-semibold text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300">
                            {isDiscovering ? '分析回答中...' : '提交回答'}
                          </button>
                        </div>
                      )}
                      {discoveryResult?.status === 'ready' && (
                        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-sm font-semibold text-emerald-950">需求已具备生成条件</p>
                            <span className="rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-emerald-700">{pipelineAppliedStages.standardize ? '已生成' : '等待人工确认'}</span>
                          </div>
                          <p className="mt-2 text-xs leading-5 text-emerald-800">{discoveryResult.summary}</p>
                          <dl className="mt-3 grid gap-2 text-xs md:grid-cols-2">
                            {[
                              ['工作目的', discoveryResult.requirements.purpose],
                              ['使用人员', discoveryResult.requirements.users],
                              ['触发场景', discoveryResult.requirements.triggerConditions],
                              ['输入材料', discoveryResult.requirements.inputMaterials],
                              ['输出成果', discoveryResult.requirements.outputs],
                              ['适用法域', discoveryResult.requirements.jurisdiction],
                              ['流程限制', discoveryResult.requirements.workflowConstraints],
                              ['复核边界', discoveryResult.requirements.reviewBoundaries],
                            ].map(([label, value]) => <div key={label} className="rounded-md bg-white/80 p-2"><dt className="font-semibold text-emerald-700">{label}</dt><dd className="mt-1 whitespace-pre-wrap text-slate-700">{value || '由系统根据材料补充'}</dd></div>)}
                          </dl>
                          <p className="mt-3 text-xs text-emerald-800">{pipelineAppliedStages.standardize ? '需求已写入 Skill。如需试跑，请前往“质检试用”。' : '请审阅上方需求摘要，确认后生成完整 Skill。'}</p>
                          <button
                            type="button"
                            onClick={confirmDiscoveryAndGenerate}
                            disabled={Boolean(runningPipelineStage)}
                            className="mt-4 h-10 w-full rounded-md bg-slate-900 px-4 text-sm font-semibold text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
                          >
                            {runningPipelineStage === 'standardize' ? '生成中...' : pipelineAppliedStages.standardize ? '重新生成 Skill' : '确认需求并生成 Skill'}
                          </button>
                        </div>
                      )}
                      {discoveryError && <p className="rounded-md bg-rose-50 px-3 py-2 text-xs text-rose-700">{discoveryError}</p>}
                    </div>
                  )}
                  {result && (
                    <div className="mt-3 rounded-md bg-slate-50 p-3">
                      {result.resourceName && <p className="mb-2 text-[11px] font-semibold text-indigo-700">本地资源：{result.resourceName} · {result.resourceLicense}</p>}
                      <p className="text-xs leading-5 text-slate-700">{result.summary}</p>
                      {!pipelineAppliedStages[stage] && <div className="mt-2 flex justify-end">
                        <button type="button" onClick={() => applyPipelineDraft(stage)} className="h-8 rounded-md border border-slate-300 bg-white px-3 text-xs font-semibold text-slate-700 hover:border-slate-500">
                          审阅并应用建议
                        </button>
                      </div>}
                    </div>
                  )}
                </section>
              )
            })}

            {skillRunResult && <section className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-slate-900 px-2 py-1 text-[11px] font-semibold text-white">03</span>
                    <p className="text-sm font-semibold text-slate-950">根据试跑结果优化</p>
                    {pipelineResults.improve && <span className={`rounded-md px-2 py-1 text-[11px] font-semibold ${pipelineAppliedStages.improve ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>{pipelineAppliedStages.improve ? '已确认' : '待确认'}</span>}
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-500">根据试跑中发现的遗漏、边界不清或输出不稳定问题提出修改，确认后再更新 Skill。</p>
                </div>
                <button type="button" onClick={() => runSkillPipelineStage('improve')} disabled={!skillRunResult || Boolean(runningPipelineStage)} className="h-9 shrink-0 rounded-md bg-slate-900 px-3 text-xs font-semibold text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300">
                  {runningPipelineStage === 'improve' ? '优化中...' : pipelineResults.improve ? '重新优化' : '根据结果优化'}
                </button>
              </div>
              {pipelineResults.improve && (
                <div className="mt-3 rounded-md bg-slate-50 p-3">
                  {pipelineResults.improve.resourceName && <p className="mb-2 text-[11px] font-semibold text-indigo-700">本地资源：{pipelineResults.improve.resourceName} · {pipelineResults.improve.resourceLicense}</p>}
                  <p className="text-xs leading-5 text-slate-700">{pipelineResults.improve.summary}</p>
                  <div className="mt-2 flex justify-end">
                    <button type="button" onClick={() => applyPipelineDraft('improve')} className="h-8 rounded-md border border-slate-300 bg-white px-3 text-xs font-semibold text-slate-700 hover:border-slate-500">审阅并应用建议</button>
                  </div>
                </div>
              )}
            </section>}

            {pipelineAppliedStages.improve && <section className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-slate-900 px-2 py-1 text-[11px] font-semibold text-white">04</span>
                    <p className="text-sm font-semibold text-slate-950">审核并准备发布</p>
                    {pipelineResults.security?.verdict && (
                      <span className={`rounded-md px-2 py-1 text-[11px] font-semibold ${pipelineResults.security.verdict === 'PASS' ? 'bg-emerald-50 text-emerald-700' : pipelineResults.security.verdict === 'WARN' ? 'bg-amber-50 text-amber-700' : 'bg-rose-50 text-rose-700'}`}>
                        {pipelineResults.security.verdict}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-500">发布前检查敏感信息、越权法律结论、危险操作、外部调用和其他安全风险。</p>
                </div>
                <button type="button" onClick={() => runSkillPipelineStage('security')} disabled={!pipelineAppliedStages.improve || Boolean(runningPipelineStage)} className="h-9 shrink-0 rounded-md bg-slate-900 px-3 text-xs font-semibold text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300">
                  {runningPipelineStage === 'security' ? '审核中...' : pipelineResults.security ? '重新审核' : '开始发布前审核'}
                </button>
              </div>
              {pipelineResults.security && (
                <div className="mt-3 rounded-md bg-slate-50 p-3">
                  {pipelineResults.security.resourceName && <p className="mb-2 text-[11px] font-semibold text-indigo-700">本地资源：{pipelineResults.security.resourceName} · {pipelineResults.security.resourceLicense}</p>}
                  <p className="text-xs leading-5 text-slate-700">{pipelineResults.security.summary}</p>
                  {!!pipelineResults.security.issues.length && (
                    <ul className="mt-2 space-y-1 text-xs leading-5 text-slate-600">
                      {pipelineResults.security.issues.map((item) => <li key={item}>• {item}</li>)}
                    </ul>
                  )}
                </div>
              )}
            </section>}
          </div>
        </div>
      )}

      {editorTab === 'edit' && (
        <details className="mx-4 mb-4 rounded-lg border border-slate-200 bg-white">
          <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
            结构化字段编辑 <span className="ml-2 text-xs font-normal text-emerald-600">查看和调整前面步骤生成的内容</span>
          </summary>
          <div className="space-y-4 border-t border-slate-200 p-4">
          {pendingFieldOptimization && (
            <section id="field-optimization-review" className="scroll-mt-24 rounded-lg border border-indigo-200 bg-indigo-50 p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-indigo-950">AI 优化建议 · {pendingFieldOptimization.label}</p>
                  <p className="mt-1 text-xs leading-5 text-indigo-800">{pendingFieldOptimization.summary}</p>
                </div>
                <span className="w-fit rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-indigo-700">尚未应用</span>
              </div>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                  <div className="rounded-md bg-white/80 p-3">
                    <p className="text-[11px] font-semibold text-slate-500">发现的问题</p>
                    <ul className="mt-2 space-y-1 text-xs leading-5 text-slate-700">
                      {pendingFieldOptimization.issues.map((item) => <li key={item}>• {item}</li>)}
                      {!pendingFieldOptimization.issues.length && <li>• 当前内容可用，本次主要补强可执行性和可验证性。</li>}
                    </ul>
                  </div>
                  <div className="rounded-md bg-white/80 p-3">
                    <p className="text-[11px] font-semibold text-slate-500">优化方向</p>
                    <ul className="mt-2 space-y-1 text-xs leading-5 text-slate-700">
                      {pendingFieldOptimization.suggestions.map((item) => <li key={item}>• {item}</li>)}
                      {!pendingFieldOptimization.suggestions.length && <li>• 结合当前 Skill 的任务、法域、输入和交付成果进行针对性补全。</li>}
                    </ul>
                  </div>
              </div>
              <div className="mt-3 grid gap-3 lg:grid-cols-2">
                <div className="min-w-0 rounded-md border border-slate-200 bg-white p-3">
                  <p className="text-[11px] font-semibold text-slate-400">修改前</p>
                  <pre className="mt-2 max-h-56 overflow-auto whitespace-pre-wrap font-sans text-xs leading-6 text-slate-600">{pendingFieldOptimization.before || '（空）'}</pre>
                </div>
                <div className="min-w-0 rounded-md border border-emerald-200 bg-white p-3">
                  <p className="text-[11px] font-semibold text-emerald-600">修改后</p>
                  <pre className="mt-2 max-h-56 overflow-auto whitespace-pre-wrap font-sans text-xs leading-6 text-slate-800">{pendingFieldOptimization.after}</pre>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap justify-end gap-2">
                <button type="button" onClick={() => { setPendingFieldOptimization(null); setEditorAiNotice('') }} className="h-9 rounded-md border border-slate-300 bg-white px-4 text-xs font-semibold text-slate-700 hover:border-slate-500">放弃</button>
                <button type="button" onClick={applyPendingFieldOptimization} className="h-9 rounded-md bg-indigo-950 px-4 text-xs font-semibold text-white hover:bg-indigo-800">应用优化</button>
              </div>
            </section>
          )}
          <div className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500">改造来源</p>
              <p className="mt-1 text-sm leading-6 text-slate-800">
                {selectedSkill.sourceSkillName ? `基于 ${selectedSkill.sourceSkillName}` : selectedSkill.sourceSkillId ? `基于 ${selectedSkill.sourceSkillId}` : '从空白 Skill 新建'}
              </p>
            </div>
            <span className="w-fit rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-slate-600">
              {selectedSkill.internalSavedPath ? '已保存到我的 Skill' : '编辑后可存为草稿或发布'}
            </span>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <SectionTitle title="基础信息" />
            <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_220px]">
              <label className="block">
                <span className="flex min-h-7 items-center text-xs font-semibold text-slate-600">Skill 名称</span>
                <input
                  value={editorDraft.chineseName}
                  onChange={(event) => updateEditorDraftField('chineseName', event.target.value)}
                  className="mt-2 h-10 w-full rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-slate-500"
                />
              </label>
              <label className="block">
                <span className="flex min-h-7 items-center text-xs font-semibold text-slate-600">业务分类</span>
                <select
                  value={editorDraft.practice}
                  onChange={(event) => updateEditorDraftField('practice', event.target.value)}
                  className="mt-2 h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-500"
                >
                  {skillCategories.map((category) => <option key={category.id}>{category.practice}</option>)}
                </select>
              </label>
            </div>
            <div className="mt-3 grid gap-3">
              <label className="block">
                <span className="flex min-h-7 items-center text-xs font-semibold text-slate-600">适用法域</span>
                <input
                  value={editorDraft.jurisdiction}
                  onChange={(event) => updateEditorDraftField('jurisdiction', event.target.value)}
                  className="mt-2 h-10 w-full rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-slate-500"
                />
              </label>
            </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <SectionTitle title="任务与输入" />
            <label className="block">
              {editorFieldHeader('这个 Skill 解决的律师日常任务', 'description')}
              <textarea
                value={editorDraft.description}
                onChange={(event) => updateEditorDraftField('description', event.target.value)}
                className="mt-2 h-32 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500"
              />
            </label>
            <label className="block">
              {editorFieldHeader('何时触发 / 适用场景', 'triggerConditions')}
              <textarea
                value={editorDraft.triggerConditions}
                onChange={(event) => updateEditorDraftField('triggerConditions', event.target.value)}
                placeholder="列出用户请求、材料类型和工作阶段；描述应能帮助模型判断何时加载本 Skill。"
                className="mt-2 h-28 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500"
              />
            </label>
            <label className="block">
              {editorFieldHeader('输入材料要求', 'inputMaterials')}
              <textarea
                value={editorDraft.inputMaterials}
                onChange={(event) => updateEditorDraftField('inputMaterials', event.target.value)}
                className="mt-2 h-28 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500"
              />
            </label>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <SectionTitle title="方法论与边界" />
            <div className="grid gap-4 lg:grid-cols-2">
              <label className="block">
                {editorFieldHeader('方法论 / 审查清单', 'checklist')}
                <textarea
                  value={editorDraft.checklist}
                  onChange={(event) => updateEditorDraftField('checklist', event.target.value)}
                  className="mt-2 h-40 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500"
                />
              </label>
              <label className="block">
                {editorFieldHeader('来源层级与引用规则', 'sourcePolicy')}
                <textarea
                  value={editorDraft.sourcePolicy}
                  onChange={(event) => updateEditorDraftField('sourcePolicy', event.target.value)}
                  placeholder="说明优先使用哪些材料、如何标注引用、何时核验法规与时效信息。"
                  className="mt-2 h-40 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500"
                />
              </label>
              <label className="block">
                {editorFieldHeader('禁止自动判断的事项', 'prohibited')}
                <textarea
                  value={editorDraft.prohibited}
                  onChange={(event) => updateEditorDraftField('prohibited', event.target.value)}
                  className="mt-2 h-40 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500"
                />
              </label>
            </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <SectionTitle title="输出与复核" meta="会同步写入 SKILL.md" />
              <div className="mt-4 grid gap-4 lg:grid-cols-2">
                <label className="block">
                  {editorFieldHeader('输出模板', 'deliverableTemplate')}
                  <textarea
                    value={editorDraft.deliverableTemplate}
                    onChange={(event) => updateEditorDraftField('deliverableTemplate', event.target.value)}
                    className="mt-2 h-44 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500"
                  />
                </label>
                <label className="block">
                  {editorFieldHeader('输出格式要求', 'outputFormat')}
                  <textarea
                    value={editorDraft.outputFormat}
                    onChange={(event) => updateEditorDraftField('outputFormat', event.target.value)}
                    className="mt-2 h-44 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500"
                  />
                </label>
                <label className="block">
                  {editorFieldHeader('验证清单', 'verificationChecklist')}
                  <textarea
                    value={editorDraft.verificationChecklist}
                    onChange={(event) => updateEditorDraftField('verificationChecklist', event.target.value)}
                    className="mt-2 h-32 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500"
                  />
                </label>
                <label className="block">
                  {editorFieldHeader('质检任务', 'qaTask')}
                  <span className="mt-1 block text-[11px] leading-4 text-emerald-700">会随工作目标、触发场景、输入、方法、输出和验证规则自动同步。</span>
                  <textarea
                    value={editorDraft.qaTask}
                    onChange={(event) => setEditorDraft((current) => ({ ...current, qaTask: event.target.value }))}
                    className="mt-2 h-32 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500"
                  />
                </label>
                <label className="block">
                  {editorFieldHeader('版本说明', 'versionNote')}
                  <textarea
                    value={editorDraft.versionNote}
                    onChange={(event) => updateEditorDraftField('versionNote', event.target.value)}
                    className="mt-2 h-32 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500"
                  />
                </label>
                <label className="block lg:col-span-2">
                  {editorFieldHeader('发布与复核', 'approvalNote')}
                  <textarea
                    value={editorDraft.approvalNote}
                    onChange={(event) => updateEditorDraftField('approvalNote', event.target.value)}
                    className="mt-2 h-28 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500"
                  />
                </label>
              </div>
            </div>
          </div>
          </div>
        </details>
      )}

      {editorTab === 'help' && (
        <div className="space-y-4 p-4">
          <section className="rounded-lg border border-indigo-100 bg-indigo-50 p-5">
            <SectionTitle title="如何创建一个 Skill" meta="材料可选，按律师工作习惯逐步完成" />
            <p className="mt-2 text-sm leading-6 text-indigo-900">
              可以上传合同、起诉状、客户邮件等待处理材料，也可以直接描述想创建的 Skill。AI 会识别材料和工作目的，只追问生成所必需的信息。
            </p>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5">
            <SectionTitle title="推荐流程" />
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {[
                ['1. 提供材料或描述需求', '待处理业务材料用于识别任务、立场和场景；操作指引、清单和团队经验可提取为通用方法。没有材料时，也可以直接用一句话描述需求。'],
                ['2. 确认需求并生成', 'AI 明确工作目的、触发场景和输出成果后，生成可执行的结构化字段，并同步形成 SKILL.md。'],
                ['3. 审查、质检和保存', '按需调整字段或 Markdown，再比较使用与不使用 Skill 的结果；确认无误后保存为草稿或发布。'],
              ].map(([title, description]) => (
                <div key={title} className="rounded-lg bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{title}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
            <SectionTitle title="结构化字段和 SKILL.md 是什么关系" />
            <div className="mt-4 space-y-3 text-xs leading-6 text-emerald-950">
              <p>它们是同一份 Skill 的两种视图：结构化字段便于律师逐项检查，SKILL.md 是最终交给 AI 使用的完整文件。</p>
              <p>确认生成结果后，工作目的、触发场景、输入材料、方法、输出和复核要求会写入结构化字段，并自动同步到 SKILL.md。</p>
              <p>在结构化字段中手动修改或应用 AI 优化，会更新 SKILL.md；切换到 SKILL.md 手写模式后，结构化字段的自动同步会暂停，以手写内容为准。</p>
            </div>
          </section>

          <section className="grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <SectionTitle title="AI 优化" />
              <p className="mt-3 text-xs leading-6 text-slate-600">工作流字段可以逐段请求 AI 优化。系统会先展示问题、优化方向和修改前后对比；只有点击“应用优化”才会写入字段并同步到 SKILL.md。名称、分类和法域不提供 AI 优化。</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <SectionTitle title="质检试用" />
              <p className="mt-3 text-xs leading-6 text-slate-600">质检任务会随当前结构化字段和 SKILL.md 自动调整，并对比同一材料在“不使用 Skill”和“使用 Skill”时的输出差异。质检结果不会自动覆盖 Skill。</p>
            </div>
          </section>
        </div>
      )}

      {editorTab === 'template' && (
        <div className="space-y-4 p-4">
          <div className={`rounded-lg border p-4 ${markdownManualMode ? 'border-amber-200 bg-amber-50' : 'border-emerald-200 bg-emerald-50'}`}>
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <SectionTitle title={markdownManualMode ? 'SKILL.md 手写模式' : 'SKILL.md 实时预览'} meta={markdownManualMode ? '结构化字段同步已暂停' : '由结构化字段自动生成'} />
                <p className={`mt-2 text-xs leading-5 ${markdownManualMode ? 'text-amber-800' : 'text-emerald-800'}`}>
                  {markdownManualMode
                    ? '保存和发布会优先使用下方手写内容；结构化字段的后续修改不会自动进入这份 Markdown。'
                    : '当前内容随结构化字段实时更新。默认只读，避免误操作造成字段与 Markdown 不一致。'}
                </p>
              </div>
              {!markdownManualMode ? (
                <button
                  type="button"
                  onClick={() => {
                    setEditorDraft((current) => ({ ...current, customSkillMd: skillMdPreview }))
                    setMarkdownManualMode(true)
                  }}
                  className="h-9 shrink-0 rounded-md border border-slate-300 bg-white px-3 text-xs font-semibold text-slate-700 hover:border-slate-500"
                >
                  启用 Markdown 手动编辑
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    if (!editorDraft.customSkillMd.trim() || window.confirm('放弃手写 SKILL.md，并恢复由结构化字段自动生成？')) {
                      setEditorDraft((current) => ({ ...current, customSkillMd: '' }))
                      setMarkdownManualMode(false)
                    }
                  }}
                  className="h-9 shrink-0 rounded-md border border-amber-300 bg-white px-3 text-xs font-semibold text-amber-800 hover:border-amber-500"
                >
                  退出手写并恢复自动生成
                </button>
              )}
            </div>
          </div>
          <textarea
            value={editableSkillMd}
            onChange={(event) => setEditorDraft((current) => ({ ...current, customSkillMd: event.target.value }))}
            readOnly={!markdownManualMode}
            spellCheck={false}
            className={`h-[620px] w-full resize-y rounded-lg border p-4 font-mono text-xs leading-6 outline-none ${markdownManualMode ? 'border-amber-300 bg-slate-950 text-slate-100 focus:border-amber-400' : 'cursor-default border-slate-200 bg-slate-950 text-slate-300'}`}
          />
        </div>
      )}

      {editorTab === 'qa' && (
        <div className="space-y-4 p-4">
          <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-4">
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">试跑任务</span>
                <textarea
                  value={editorDraft.qaTask}
                  onChange={(event) => setEditorDraft((current) => ({ ...current, qaTask: event.target.value }))}
                  className="mt-2 h-28 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">试跑材料</span>
                <textarea
                  value={trialMaterial}
                  onChange={(event) => setTrialMaterial(event.target.value)}
                  className="mt-2 h-52 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500"
                />
              </label>
              <button
                type="button"
                onClick={() => requestModelAction('skill-run', trialMaterial)}
                disabled={isRunningSkill}
                className="h-10 rounded-md bg-slate-900 px-4 text-xs font-semibold text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {isRunningSkill ? '试跑中...' : '运行当前 Skill'}
              </button>
              {skillRunError && <p className="rounded-md bg-rose-50 px-3 py-2 text-xs text-rose-700">{skillRunError}</p>}
            </div>
            <div className="space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <SectionTitle title="质检规则" meta={`${selectedSkill.reviewScore} / 100`} />
                <div className="mt-4 grid gap-2">
                  {[
                    ['引用可追溯', '必须指向文件、条款、页码或法规来源'],
                    ['边界明确', '说明不能替代法律意见的部分'],
                    ['复核要求', '敏感或高影响事项进入人工复核'],
                    ['客户可读', '摘要、依据、建议动作分开写'],
                  ].map(([label, body]) => (
                    <label key={label} className="flex items-start gap-3 rounded-md bg-white p-3">
                      <input defaultChecked type="checkbox" className="mt-1 size-4" />
                      <span>
                        <span className="block text-sm font-semibold text-slate-900">{label}</span>
                        <span className="text-xs leading-5 text-slate-500">{body}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {skillRunResult && (
            <section id="skill-run-result" className="scroll-mt-24 rounded-lg border border-slate-200 bg-white p-4">
              <SectionTitle title="Skill 效果对比" meta={`${skillRunResult.score} / 100 · ${skillRunResult.passed ? '通过' : '需优化'}`} />
              <p className="mt-3 text-sm leading-6 text-slate-700">{skillRunResult.summary}</p>
              <div className="mt-4 grid gap-4 xl:grid-cols-2">
                <div className="min-w-0 rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-slate-800">不使用 Skill</p>
                    <span className="rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-slate-500">普通模型回答</span>
                  </div>
                  <pre className="mt-3 max-h-[520px] overflow-auto whitespace-pre-wrap font-sans text-xs leading-6 text-slate-700">{skillRunResult.withoutSkillOutput}</pre>
                </div>
                <div className="min-w-0 rounded-lg border border-indigo-200 bg-indigo-50 p-4">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-indigo-950">使用当前 Skill</p>
                    <span className="rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-indigo-700">执行 Skill 工作流</span>
                  </div>
                  <pre className="mt-3 max-h-[520px] overflow-auto whitespace-pre-wrap font-sans text-xs leading-6 text-indigo-950">{skillRunResult.output}</pre>
                </div>
              </div>
              <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-sm font-semibold text-emerald-950">Skill 带来的具体改变</p>
                <ul className="mt-3 grid gap-2 text-xs leading-6 text-emerald-900 md:grid-cols-2">
                  {skillRunResult.comparison.map((item) => <li key={item} className="rounded-md bg-white/80 p-3">• {item}</li>)}
                </ul>
              </div>
              {!!skillRunResult.citations.length && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {skillRunResult.citations.map((item) => <span key={item} className="rounded-md bg-slate-100 px-2 py-1 text-[11px] text-slate-600">{item}</span>)}
                </div>
              )}
            </section>
          )}

          <section className="rounded-lg border border-slate-200 bg-white p-4">
            <SectionTitle title="评估系统" meta={`${selectedSkillRunRecords.length} 次试跑 · 命中率 ${selectedSkillHitRate}% · 平均评分 ${selectedSkillAverageRating}`} />
            <div className="mt-4 space-y-2">
              {selectedSkillRunRecords.map((record) => (
                <div key={record.id} className="grid gap-3 rounded-lg border border-slate-200 p-3 lg:grid-cols-[1fr_120px_220px]">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-semibold text-slate-900">{record.skillName}</p>
                      <span className={`rounded-md px-2 py-1 text-[11px] font-semibold ${
                        record.passed ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                      }`}>
                        {record.passed ? '通过' : '需修改'} · {record.score}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">{record.createdAt} · {record.materialPreview}</p>
                  </div>
                  <label className="block">
                    <span className="text-[11px] font-semibold text-slate-500">人工评分</span>
                    <select
                      value={record.rating}
                      onChange={(event) => updateRunRecord(record.id, { rating: Number(event.target.value) })}
                      className="mt-1 h-9 w-full rounded-md border border-slate-200 bg-white px-2 text-xs outline-none focus:border-slate-500"
                    >
                      {[1, 2, 3, 4, 5].map((score) => <option key={score} value={score}>{score} 星</option>)}
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-[11px] font-semibold text-slate-500">失败原因</span>
                    <input
                      value={record.failureReason}
                      onChange={(event) => updateRunRecord(record.id, { failureReason: event.target.value })}
                      placeholder="例如：引用不足 / 输出不稳定"
                      className="mt-1 h-9 w-full rounded-md border border-slate-200 px-2 text-xs outline-none focus:border-slate-500"
                    />
                  </label>
                </div>
              ))}
              {selectedSkillRunRecords.length === 0 && (
                <p className="rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-500">还没有试跑记录。运行当前 Skill 后会自动生成评估记录。</p>
              )}
            </div>
          </section>
        </div>
      )}

      <div className="border-t border-slate-200 bg-slate-50 p-4">
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={() => saveAsInternalSkill('draft')}
            disabled={isSavingInternal}
            className="h-10 rounded-md border border-slate-300 bg-white px-4 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-500 disabled:cursor-not-allowed disabled:text-slate-400"
          >
            {isSavingInternal ? '保存中...' : '存为草稿'}
          </button>
          <button
            type="button"
            onClick={() => saveAsInternalSkill('published')}
            disabled={isSavingInternal}
            className="h-10 rounded-md bg-slate-900 px-4 text-xs font-semibold text-white transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isSavingInternal ? '发布中...' : '发布'}
          </button>
        </div>
      </div>

    </section>
  )

  const categoryTotal = selectedCategory
    ? librarySkills.filter((skill) => skill.practice === selectedCategory.practice).length
    : librarySkills.length
  const categoryInternal = selectedCategory
    ? librarySkills.filter((skill) => skill.practice === selectedCategory.practice && skill.origin === 'internal').length
    : internalFirmSkills.length
  const categoryExternal = selectedCategory
    ? librarySkills.filter((skill) => skill.practice === selectedCategory.practice && skill.origin === 'external-open-source').length
    : lawveExternalSkills.length
  const categorySkills = selectedCategory
    ? librarySkills.filter((skill) => skill.practice === selectedCategory.practice)
    : librarySkills
  const categoryCompleteDocs = categorySkills.filter((skill) => skill.readmeMdPath && skill.skillMdPath).length
  const categoryLicenseCount = categorySkills.filter((skill) => licenseLabelForSkill(skill)).length
  const categoryFavoriteCount = categorySkills.filter((skill) => favoriteSkillIds.includes(skill.id)).length

  const categoryLibraryPage = (
    <div className="space-y-5">
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <button
              onClick={returnToLibraryHome}
              className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 hover:border-slate-400 hover:text-slate-900"
            >
              返回 Skill 库首页
            </button>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              {selectedCategory ? selectedCategory.englishName : 'All Skills'}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
              {selectedCategory ? selectedCategory.name : '全部 Skill'}
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-[220px_1fr] lg:min-w-[540px]">
            <label className="block">
              <span className="text-xs font-semibold text-slate-500">切换大类</span>
              <select
                id="skill-category-switcher"
                value={selectedCategoryId}
                onChange={(event) => openSkillCategory(event.target.value)}
                className="mt-2 h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none focus:border-slate-500"
              >
                <option value="all">全部 Skill</option>
                {skillCategories.map((category) => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </label>
            <div className="grid grid-cols-3 gap-2 text-center">
              {[
                ['数量', categoryTotal],
                ['完整文档', categoryCompleteDocs],
                ['已收藏', categoryFavoriteCount],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg bg-slate-50 px-3 py-3">
                  <p className="text-xl font-semibold text-slate-950">{value}</p>
                  <p className="text-[11px] text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {libraryMatchedIds && (
        <section className="rounded-xl border border-indigo-100 bg-indigo-50 p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-indigo-900">当前仅展示本次任务匹配到的 Skill</p>
              <p className="mt-1 text-xs text-indigo-700">共 {filteredSkills.length} 个匹配结果，未显示完整 Skill 库。</p>
            </div>
            <button
              type="button"
              onClick={() => setLibraryMatchedIds(null)}
              className="shrink-0 rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-indigo-700 shadow-sm hover:bg-indigo-100"
            >
              展示全部 Skill
            </button>
          </div>
        </section>
      )}

      <section className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="grid gap-3 lg:grid-cols-[minmax(260px,1fr)_150px_150px_170px_150px]">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜索这个分类里的 Skill、作者、标签"
            className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-500"
          />
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-slate-500"
          >
            {statuses.map((item) => <option key={item}>{item}</option>)}
          </select>
          <select
            value={origin}
            onChange={(event) => setOrigin(event.target.value)}
            className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-slate-500"
          >
            {origins.map((item) => <option key={item}>{item}</option>)}
          </select>
          <select
            value={docStatus}
            onChange={(event) => setDocStatus(event.target.value)}
            className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-slate-500"
          >
            {docStatuses.map((item) => <option key={item}>{item}</option>)}
          </select>
          <select
            value={licenseFilter}
            onChange={(event) => setLicenseFilter(event.target.value)}
            className="h-10 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-slate-500"
          >
            {licenseOptions.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
        <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-500">
          <span className="rounded-md bg-slate-50 px-2 py-1">外部开源 {categoryExternal}</span>
          <span className="rounded-md bg-slate-50 px-2 py-1">示例内部 {categoryInternal}</span>
          <span className="rounded-md bg-slate-50 px-2 py-1">许可证已识别 {categoryLicenseCount}</span>
        </div>
      </section>

      <section className="space-y-3">
        <SectionTitle title="Skill 列表" meta={`${filteredSkills.length} 个结果`} />
        <div className="grid gap-3 xl:grid-cols-2">
          {filteredSkills.map((skill) => (
            <button
              data-testid="category-skill-card"
              key={skill.id}
              onClick={() => openSkillDetail(skill)}
              className="rounded-lg border border-slate-200 bg-white p-4 text-left transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="line-clamp-2 text-sm font-semibold leading-5 text-slate-950">{skill.chineseName}</p>
                  <p className="mt-1 truncate text-xs text-slate-500">{skill.name}</p>
                </div>
              <span className={`shrink-0 rounded-md px-2 py-1 text-[10px] font-semibold ${
                  skill.origin === 'internal' ? 'bg-slate-900 text-white' : 'bg-cyan-50 text-cyan-700'
                }`}>
                  {displayOriginLabel(skill)}
                </span>
              </div>
              <p className="mt-3 line-clamp-3 text-xs leading-5 text-slate-600">{skill.description}</p>
              <div className="mt-4 border-t border-slate-100 pt-3 text-[11px] text-slate-500">
                <span className="truncate">来源：{skill.sourceName}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {skill.origin === 'external-open-source' && (
                  <span className={`rounded-md px-2 py-1 text-[10px] font-semibold ${
                    skill.hasSkillMd ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                  }`}>
                    {resourcePackageLabel(skill)}
                  </span>
                )}
                {skill.tags.slice(0, 3).map((tag) => (
                  <SkillTag key={tag} tag={tag} compact />
                ))}
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  )

  const selectedSkillLicense = licenseLabelForSkill(selectedSkill)
  const selectedDocTabs: { id: DetailDocTab; label: string; disabled?: boolean }[] = [
    { id: 'overview', label: '资源概览' },
    { id: 'readme', label: 'README.md', disabled: !selectedMarkdownFiles.readme?.content },
    { id: 'skill', label: 'SKILL.md', disabled: !selectedMarkdownFiles.skill?.content },
  ]

  const skillLibraryPage = (
    <div className="space-y-5">
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex flex-wrap gap-2">
              {libraryReturnTarget && (
                <button
                  type="button"
                  onClick={() => goToReturnTarget(libraryReturnTarget)}
                  className="rounded-md bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-700"
                >
                  {libraryReturnTarget.label}
                </button>
              )}
              <button
                onClick={returnToCategoryPage}
                className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 hover:border-slate-400 hover:text-slate-900"
              >
                返回分类列表
              </button>
              <button
                onClick={returnToLibraryHome}
                className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              >
                返回 Skill 库首页
              </button>
              <button
                type="button"
                onClick={() => toggleFavoriteSkill(selectedSkill.id)}
                className={`rounded-md px-3 py-1.5 text-xs font-semibold ${
                  favoriteSkillIds.includes(selectedSkill.id)
                    ? 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                    : 'border border-amber-200 bg-white text-amber-700 hover:bg-amber-50'
                }`}
              >
                {favoriteSkillIds.includes(selectedSkill.id) ? '已收藏' : '收藏'}
              </button>
              <button
                onClick={() => startEditFromSkill(selectedSkill)}
                className="rounded-md bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-700"
              >
                基于该 Skill 编辑
              </button>
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{selectedSkill.practice}</p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">{selectedSkill.chineseName}</h2>
              <span className={`rounded-md px-2 py-1 text-[11px] font-semibold ${
                selectedSkill.origin === 'internal' ? 'bg-slate-900 text-white' : 'bg-cyan-50 text-cyan-700'
              }`}>
                {displayOriginLabel(selectedSkill)}
              </span>
              <span className={`rounded-md px-2 py-1 text-[11px] font-semibold ${riskTone[selectedSkill.risk]}`}>
                {riskLabels[selectedSkill.risk]}
              </span>
              {selectedSkill.origin === 'external-open-source' && (
                <span className={`rounded-md px-2 py-1 text-[11px] font-semibold ${
                  selectedSkill.hasSkillMd ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                }`}>
                  {resourcePackageLabel(selectedSkill)}
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-slate-500">{selectedSkill.name}</p>
          </div>
          <div className="grid gap-2 text-center sm:grid-cols-3 lg:min-w-[360px]">
            {[
              ['文档', docStatusForSkill(selectedSkill)],
              ['许可证', selectedSkillLicense || '内部'],
              ['收藏', favoriteSkillIds.includes(selectedSkill.id) ? '已收藏' : '未收藏'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg bg-slate-50 px-3 py-3">
                <p className="truncate text-sm font-semibold text-slate-950">{value}</p>
                <p className="text-[11px] text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_420px]">
        <section className="space-y-5">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between gap-3">
              <SectionTitle title="Skill 介绍" />
              <div className="flex flex-wrap gap-2">
                {introTranslations[selectedSkill.id] ? (
                  <button
                    type="button"
                    onClick={() => setIntroTranslationViewSkillId((current) => current === selectedSkill.id ? '' : selectedSkill.id)}
                    className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-900"
                  >
                    {showIntroTranslation ? '查看原文' : '查看中文翻译'}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={translateSelectedSkillIntro}
                    disabled={translatingIntroSkillId === selectedSkill.id}
                    className="rounded-md bg-slate-950 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
                  >
                    {translatingIntroSkillId === selectedSkill.id ? 'AI 翻译中…' : 'AI 翻译成中文'}
                  </button>
                )}
                {canToggleSkillIntro && (
                  <button
                    type="button"
                    onClick={() => setIsSkillIntroExpanded((current) => !current)}
                    className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-900"
                  >
                    {isSkillIntroExpanded ? '收起' : '展开'}
                  </button>
                )}
              </div>
            </div>
            {introTranslationError && introTranslationErrorSkillId === selectedSkill.id && (
              <p className="mt-3 rounded-md bg-rose-50 px-3 py-2 text-xs text-rose-700">{introTranslationError}</p>
            )}
            <div
              className={`relative mt-4 overflow-hidden transition-[max-height] duration-300 ease-out ${
                isSkillIntroExpanded || !canToggleSkillIntro ? 'max-h-none' : 'max-h-[84px]'
              }`}
            >
              <p className="whitespace-pre-wrap text-sm leading-7 text-slate-700">
                {displayedSkillIntro}
              </p>
              {!isSkillIntroExpanded && canToggleSkillIntro && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-white/0" />
              )}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <SectionTitle title="Markdown 与来源" meta={docStatusForSkill(selectedSkill)} />
            <div className="mt-4 flex flex-wrap gap-2 border-b border-slate-200">
              {selectedDocTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  disabled={tab.disabled && !isLoadingMarkdown}
                  onClick={() => setDetailDocTab(tab.id)}
                  className={`border-b-2 px-3 py-2 text-xs font-semibold transition-colors ${
                    detailDocTab === tab.id
                      ? 'border-slate-950 text-slate-950'
                      : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-900'
                  } disabled:cursor-not-allowed disabled:text-slate-300 disabled:hover:border-transparent`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            {isLoadingMarkdown && <p className="mt-4 text-xs text-slate-500">正在读取 Markdown 全文...</p>}
            <div className="mt-4">
              {detailDocTab === 'overview' && (
                <div className="space-y-3">
                  <div className="grid gap-3 md:grid-cols-4">
                    {[
                      ['文档完整性', docStatusForSkill(selectedSkill)],
                      ['配套资源', selectedSkill.resourceCount ? `${selectedSkill.resourceCount} 个` : '仅 SKILL.md'],
                      ['开源许可证', selectedSkillLicense || '不适用'],
                      ['来源类型', displayOriginLabel(selectedSkill)],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                        <p className="text-[11px] font-semibold text-slate-500">{label}</p>
                        <p className="mt-2 text-sm font-semibold text-slate-900">{value}</p>
                      </div>
                    ))}
                  </div>
                  {Boolean(selectedSkill.resourcePaths?.length) && (
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs font-semibold text-slate-700">已关联的配套资源</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">保留原目录结构；脚本只供审查，不会由平台自动执行。</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {selectedSkill.resourcePaths?.slice(0, 12).map((resourcePath) => (
                          <span key={resourcePath} className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] text-slate-600">{resourcePath}</span>
                        ))}
                        {(selectedSkill.resourcePaths?.length || 0) > 12 && (
                          <span className="px-2 py-1 text-[11px] text-slate-500">另有 {(selectedSkill.resourcePaths?.length || 0) - 12} 个</span>
                        )}
                      </div>
                    </div>
                  )}
                  {Boolean(selectedSkill.securityNotes?.length || selectedSkill.scriptsRequireReview) && (
                    <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-amber-900">
                      <p className="font-semibold">导入安全提示</p>
                      <p className="mt-1">{selectedSkill.securityNotes?.join('；') || '该 Skill 含脚本资源，使用前需人工审查。'}</p>
                    </div>
                  )}
                </div>
              )}
              {detailDocTab === 'readme' && selectedMarkdownFiles.readme?.content && (
                <pre className="max-h-[620px] overflow-auto whitespace-pre-wrap rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs leading-6 text-slate-800">
                  {selectedMarkdownFiles.readme.content}
                </pre>
              )}
              {detailDocTab === 'skill' && selectedMarkdownFiles.skill?.content && (
                <div>
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs text-slate-500">翻译仅用于阅读，不会修改原始 SKILL.md。</p>
                    <div className="flex gap-2">
                      {skillTranslations[selectedSkill.id] && (
                        <button
                          type="button"
                          onClick={() => setTranslationViewSkillId((current) => current === selectedSkill.id ? '' : selectedSkill.id)}
                          className="rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:border-slate-400"
                        >
                          {showSkillTranslation ? '查看原文' : '查看中文翻译'}
                        </button>
                      )}
                      {!skillTranslations[selectedSkill.id] && (
                        <button
                          type="button"
                          onClick={translateSelectedSkillMarkdown}
                          disabled={translatingSkillId === selectedSkill.id}
                          className="rounded-md bg-slate-950 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
                        >
                          {translatingSkillId === selectedSkill.id ? 'AI 翻译中…' : 'AI 翻译成中文'}
                        </button>
                      )}
                    </div>
                  </div>
                  {skillTranslationError && skillTranslationErrorSkillId === selectedSkill.id && <p className="mb-3 rounded-md bg-rose-50 px-3 py-2 text-xs text-rose-700">{skillTranslationError}</p>}
                  <pre className="max-h-[620px] overflow-auto whitespace-pre-wrap rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs leading-6 text-slate-800">
                    {showSkillTranslation && skillTranslations[selectedSkill.id]
                      ? skillTranslations[selectedSkill.id]
                      : selectedMarkdownFiles.skill.content}
                  </pre>
                </div>
              )}
              {detailDocTab !== 'overview' && !isLoadingMarkdown && !selectedMarkdownFiles[detailDocTab]?.content && !selectedMarkdownFiles[detailDocTab]?.error && (
                <p className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">暂无内容</p>
              )}
              {detailDocTab !== 'overview' && selectedMarkdownFiles[detailDocTab]?.error && (
                <p className="rounded-md bg-amber-50 px-3 py-2 text-xs text-amber-700">{selectedMarkdownFiles[detailDocTab]?.error}</p>
              )}
              <div className="mt-3 rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold text-slate-500">来源</p>
                <p className="mt-2 text-sm text-slate-900">{selectedSkill.sourceName}</p>
                {selectedSkill.sourceUrl && (
                  <a
                    href={selectedSkill.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block break-all text-xs font-medium text-cyan-700 hover:text-cyan-900"
                  >
                    {selectedSkill.sourceUrl}
                  </a>
                )}
              </div>
            </div>
          </section>
        </section>

        <aside className="space-y-5 xl:sticky xl:top-20 xl:self-start">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <SectionTitle title="适用边界" />
            <div className="mt-4">
              <p className="text-xs font-semibold text-slate-500">触发条件</p>
              <ul className="mt-2 space-y-3 text-xs leading-5 text-slate-900">
                {selectedBoundaryTriggers.slice(0, 3).map((item, index) => (
                  <li key={item} className="border-l-2 border-slate-200 pl-3">
                    <p>{item}</p>
                    {!/[\u3400-\u9fff]/.test(item) && selectedTriggerTranslation?.[index] && (
                      <p className="mt-1 text-slate-900">{selectedTriggerTranslation[index]}</p>
                    )}
                  </li>
                ))}
              </ul>
              {translatingTriggerSkillId === selectedSkill.id && <p className="mt-2 text-[11px] text-indigo-600">正在补充中文翻译…</p>}
            </div>
            <div className="mt-5">
              <p className="text-xs font-semibold text-slate-500">适用场景</p>
              <div className="mt-2 flex min-w-0 flex-wrap gap-2">
                {selectedSuitableScenarios.map((item) => (
                  <span
                    key={item}
                    className="min-w-0 max-w-full break-words rounded-md border border-slate-200 bg-slate-50 px-2 py-1.5 text-[11px] font-medium leading-5 text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <p className="text-xs font-semibold text-slate-500">不适用</p>
              <ul className="mt-2 space-y-1 text-xs leading-5 text-slate-600">
                {selectedSkill.notFor.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="mt-5">
              <p className="text-xs font-semibold text-slate-500">易误触发</p>
              <ul className="mt-2 space-y-1 text-xs leading-5 text-slate-600">
                {misfireWarningsForSkill(selectedSkill).map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <SectionTitle title="使用前审查" />
            <div className="mt-4 space-y-3 text-xs leading-5 text-slate-600">
              {[
                ['来源', selectedSkill.origin === 'external-open-source' ? '外部开源进入内部使用前，先确认来源页面和版本。' : '内部 Skill 仍需确认负责人和适用范围。'],
                ['许可证', selectedSkillLicense ? '按许可证要求保留署名、声明或开源义务。' : '暂无许可证标签，发布前补充权利来源。'],
                ['文档', selectedSkill.hasSkillMd || selectedSkill.skillMdPath ? '可直接审查 SKILL.md 的触发条件和输出要求。' : '缺少 SKILL.md 时，建议基于 README 另存后补齐。'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg bg-slate-50 p-3">
                  <p className="font-semibold text-slate-900">{label}</p>
                  <p className="mt-1">{value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <SectionTitle title="依据与标签" />
            <div className="mt-4">
              <p className="text-xs font-semibold text-slate-500">依据</p>
              <ul className="mt-2 space-y-1 text-xs leading-5 text-slate-600">
                {selectedSkill.sources.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {selectedSkill.tags.map((tag) => (
                <SkillTag key={tag} tag={tag} />
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  )

  const knowledgePage = (
    <div className="space-y-5">
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Knowledge Sources</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">知识库</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
              Skill 决定怎么工作，知识库提供执行时需要的内部模板、审查口径和专业依据。当前版本仅保留一个占位样例，用来验证推荐、选择和传递流程。
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 lg:min-w-[360px]">
            <p className="text-xs font-semibold text-slate-600">一句话逻辑</p>
            <p className="mt-2 text-sm leading-6 text-slate-800">
              先选 Skill 定工作步骤，再选知识库补依据和本所口径。
            </p>
            <p className="mt-3 text-xs leading-5 text-slate-500">
              当前任务已选：{selectedKnowledgeSources.length ? selectedKnowledgeSources.map((source) => source.title).join('、') : '暂无'}
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div className="space-y-4">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <SectionTitle title="具体使用方式" meta="先选方法，再补依据" />
            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {[
                ['1. 推荐 Skill', '只根据任务材料、工作目的和 Skill 信息匹配工作方法，知识库不干扰排名。'],
                ['2. 推荐知识源', 'Skill 匹配完成后，再按业务领域和关键词建议相关知识源。'],
                ['3. 律师确认', '律师可以采用建议、取消选择，或手动选择其他有权限的知识源。'],
                ['4. 执行或交接', '执行、编辑 Skill 或交给其他 Agent 时，再携带已确认的知识依据。'],
              ].map(([title, body]) => (
                <div key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{title}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <SectionTitle title="知识源目录" meta="当前 1 个占位样例" />
            <p className="mt-3 text-xs leading-5 text-slate-500">
              这里目前只放一个示例，用来说明未来真实知识库的展示方式。它不是已经接入的内部资料库，也不会读取真实文件。
            </p>
            {knowledgeCoverage.map(({ source, matches }) => (
              <div key={source.id} className="mt-4 rounded-lg border border-slate-200 p-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-950">{source.title}</p>
                    <p className="mt-1 text-xs text-slate-500">{source.type}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-stretch gap-2">
                    <span className="rounded-md bg-amber-50 px-3 py-2 text-center text-xs font-semibold text-amber-700">占位样例 · 无真实文件</span>
                    <button
                      type="button"
                      onClick={() => toggleKnowledgeSource(source.id)}
                      className={`h-8 rounded-md px-3 text-[11px] font-semibold ${selectedKnowledgeIds.includes(source.id) ? 'bg-slate-900 text-white' : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-400'}`}
                    >
                      {selectedKnowledgeIds.includes(source.id) ? '当前任务已选择' : '用于当前任务'}
                    </button>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-700">{source.summary}</p>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold text-slate-500">业务领域</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {source.practices.map((practiceName) => (
                        <span key={practiceName} className="rounded-md bg-slate-50 px-2 py-1 text-[11px] text-slate-600">{practiceName}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500">关键词</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {source.keywords.map((keyword) => (
                        <span key={keyword} className="rounded-md bg-slate-50 px-2 py-1 text-[11px] text-slate-600">{keyword}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-xs font-semibold text-slate-500">示例匹配 Skill</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {matches.slice(0, 5).map(({ skill, match }) => (
                      <button
                        key={skill.id}
                        type="button"
                        onClick={() => chooseSkill(skill, 'library')}
                        className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] text-slate-600 hover:border-slate-400 hover:text-slate-950"
                      >
                        {skill.chineseName} · {knowledgeMatchLabel(match.score)}
                      </button>
                    ))}
                    {matches.length === 0 && <span className="text-xs text-slate-400">暂无强匹配</span>}
                  </div>
                </div>
              </div>
            ))}
          </section>

        </div>

        <aside className="space-y-4 lg:sticky lg:top-20 lg:self-start">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <SectionTitle title="当前版本边界" meta="演示状态" />
            <div className="mt-4 space-y-3">
              {[
                ['不参与 Skill 排名', '知识源在 Skill 匹配完成后才推荐，避免知识库覆盖范围影响工作方法选择。'],
                ['只有元数据', '当前只传递名称、简介、业务领域和关键词，没有读取真实文件正文。'],
                ['尚未接入 RAG', '当前没有文档切片、向量检索、权限过滤或段落级引用定位。'],
                ['选择会继续传递', '已选知识源会写入 Skill 草稿，并作为 AI 完善和试用的参考信息。'],
              ].map(([title, body]) => (
                <div key={title} className="rounded-lg bg-slate-50 p-3">
                  <p className="text-sm font-semibold text-slate-900">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{body}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg border border-slate-200 p-3">
              <p className="text-xs font-semibold text-slate-600">当前任务是否采用占位知识源</p>
              <button
                type="button"
                onClick={() => toggleKnowledgeSource(editableKnowledgeSource.id)}
                className={`mt-3 h-9 w-full rounded-md px-3 text-xs font-semibold ${
                  selectedKnowledgeIds.includes(editableKnowledgeSource.id)
                    ? 'bg-slate-900 text-white hover:bg-slate-700'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-400'
                }`}
              >
                {selectedKnowledgeIds.includes(editableKnowledgeSource.id) ? '已选择，点击取消' : '选择占位知识源'}
              </button>
            </div>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <SectionTitle title="接入真实知识库后" meta="后续能力" />
            <ol className="mt-4 space-y-3 text-xs leading-5 text-slate-600">
              {[
                '管理员登记文件、模板、法规、案例及其法域、生效日期和访问权限。',
                '系统对文档解析、切片并建立关键词与向量索引。',
                '选定 Skill 后先做权限过滤，再检索与当前任务相关的知识片段。',
                '律师确认引用范围后，将必要片段交给本平台或其他 Agent 执行。',
                '最终结果保留知识源、版本及引用位置，便于律师核验和审计。',
              ].map((item, index) => (
                <li key={item} className="flex gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[10px] font-semibold text-white">{index + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </section>
        </aside>
      </section>
    </div>
  )

  const adminPage = (
    <div className="space-y-5">
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Admin Console</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">后台管理</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
              这里预留给管理员定期维护 Skill 源库、分类标签、推荐规则和知识源。普通律师仍从匹配任务、查看 Skill 和编辑 Skill 进入工作流。
            </p>
          </div>
          <button
            type="button"
            onClick={() => setActiveView('recommend')}
            className="h-9 w-fit rounded-md border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 hover:border-slate-400 hover:text-slate-900"
          >
            返回前台
          </button>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ['Skill 源库', '导入、更新、下架外部开源 Skill；记录来源、许可证、抓取时间、配套资源和安全复核状态。', `${lawveExternalSkills.length} 个外部 Skill`],
            ['分类标签', '维护业务分类、任务类型入口、默认关联 Skill、关键词和不适用边界。', `${skillCategories.length} 个分类`],
            ['推荐规则', '修正误推荐、缩写歧义、候选池排序和模型提示词约束。', '预留规则表'],
            ['知识源', '登记模板、Playbook、法规、案例和内部口径；后续接入 RAG 切片与权限。', `${selectedKnowledgeSources.length} 个当前启用`],
            ['发布版本', '管理草稿、评审中、已发布和弃用版本；记录变更、复核人和回滚点。', `${mySkills.length} 个我的 Skill`],
            ['质检反馈', '汇总试跑记录、人工评分、失败原因和需要重新训练推荐规则的样本。', `${skillRunRecords.length} 次试跑`],
          ].map(([title, body, meta]) => (
            <section key={title} className="rounded-xl border border-slate-200 bg-white p-5">
              <SectionTitle title={title} meta={meta} />
              <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
              <button
                type="button"
                className="mt-4 rounded-md border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-500"
              >
                功能预留
              </button>
            </section>
          ))}
        </div>

        <aside className="space-y-4 lg:sticky lg:top-20 lg:self-start">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <SectionTitle title="维护优先级" meta="建议" />
            <div className="mt-4 space-y-3">
              {[
                ['先修误推荐', '维护 NDA 等缩写歧义、排除明显不相关 Skill。'],
                ['再补触发条件', '每个高频 Skill 增加触发条件、反例和人工复核边界。'],
                ['最后接知识库', '把模板、法规、案例作为可检索片段，而不是全文塞给模型。'],
              ].map(([title, body]) => (
                <div key={title} className="rounded-lg bg-slate-50 p-3">
                  <p className="text-sm font-semibold text-slate-900">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <SectionTitle title="待处理样例" meta="预留" />
            <div className="mt-4 space-y-2 text-xs leading-5 text-slate-600">
              <p className="rounded-md bg-amber-50 px-3 py-2 text-amber-700">NDA 在合同语境下应优先识别为保密协议。</p>
              <p className="rounded-md bg-slate-50 px-3 py-2">外部开源 Skill 进入内部发布前应先试跑。</p>
              <p className="rounded-md bg-slate-50 px-3 py-2">推荐结果应隐藏内部 prompt，只展示理由和动作。</p>
            </div>
          </section>
        </aside>
      </section>
    </div>
  )

  return (
    <div className="min-h-screen app-gradient text-slate-900">
      <header className="sticky top-0 z-20 glass-header relative px-5 py-3">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid size-9 shrink-0 place-items-center rounded-md brand-mark text-sm font-bold text-white">SK</div>
            <div>
              <h1 className="text-sm font-semibold tracking-tight text-slate-950">律所 Skill 工作台</h1>
              <p className="text-xs text-slate-500">AI 工作能力库</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => {
                  if (item.view === 'editor') {
                    openEditorHome()
                    return
                  }
                  if (item.view === 'recommend') setRecommendReturnTarget(null)
                  setActiveView(item.view)
                  if (item.view === 'library') returnToLibraryHome()
                }}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  activeView === item.view ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveView('knowledge')}
              className="hidden rounded-md px-2.5 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-100 hover:text-slate-900 sm:inline-flex"
            >
              知识库
            </button>
            <button
              type="button"
              onClick={() => setActiveView('admin')}
              className={`hidden rounded-md px-2.5 py-2 text-xs font-semibold sm:inline-flex ${
                activeView === 'admin' ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              后台管理
            </button>
            <button
              type="button"
              onClick={createNewMySkill}
              className="rounded-md btn-accent px-3 py-2 text-xs font-semibold"
            >
              新建 Skill
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1500px] px-5 py-5">
        {activeView === 'library' && (
          <div
            key={`${libraryMode}-${libraryPageKey}`}
            className="library-page-frame"
            data-motion={libraryMotion}
          >
            {libraryMode === 'skill' ? skillLibraryPage : libraryMode === 'category' ? categoryLibraryPage : (
              <div className="space-y-4">
              <button
                data-testid="category-all"
                onClick={() => openSkillCategory('all')}
                className="w-full rounded-2xl border border-slate-950 bg-slate-950 p-5 text-left text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs font-semibold opacity-70">All Skills</p>
                    <p className="mt-2 text-3xl font-semibold tracking-tight">全部 Skill</p>
                  </div>
                  <div className="grid w-full gap-2 text-center sm:grid-cols-3 md:max-w-md">
                    {[
                      ['总量', librarySkills.length],
                      ['示例内部', internalFirmSkills.length],
                      ['外部开源', lawveExternalSkills.length],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-xl bg-white/10 px-3 py-3">
                        <p className="text-xl font-semibold">{value}</p>
                        <p className="text-[11px] opacity-70">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </button>

              <section className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h2 className="text-sm font-semibold text-slate-900">搜索 Skill 名称</h2>
                    <p className="mt-1 text-xs text-slate-500">输入中文名或英文名，直接进入具体 Skill 页面。</p>
                  </div>
                  <input
                    value={homeQuery}
                    onChange={(event) => setHomeQuery(event.target.value)}
                    placeholder="搜索具体 Skill 名称"
                    className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-500 lg:max-w-xl"
                  />
                </div>
                {homeQuery.trim() && (
                  <div className="mt-4">
                    <SectionTitle title="搜索结果" meta={`${homeSearchResults.length} 个匹配`} />
                    <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                      {homeSearchResults.map((skill) => (
                        <button
                          data-testid="home-skill-result"
                          key={skill.id}
                          onClick={() => openSkillDetail(skill)}
                          className="rounded-lg border border-slate-200 bg-white p-4 text-left transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-sm"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <p className="line-clamp-2 text-sm font-semibold leading-5 text-slate-950">{skill.chineseName}</p>
                              <p className="mt-1 truncate text-xs text-slate-500">{skill.name}</p>
                            </div>
                          <span className={`shrink-0 rounded-md px-2 py-1 text-[10px] font-semibold ${
                              skill.origin === 'internal' ? 'bg-slate-900 text-white' : 'bg-cyan-50 text-cyan-700'
                            }`}>
                              {displayOriginLabel(skill)}
                            </span>
                          </div>
                          <p className="mt-3 line-clamp-2 text-xs leading-5 text-slate-600">{skill.description}</p>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600">{skill.practice}</span>
                            {skill.origin === 'external-open-source' && (
                              <span className={`rounded-md px-2 py-1 text-[10px] font-semibold ${
                                skill.hasSkillMd ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                              }`}>
                                {resourcePackageLabel(skill)}
                              </span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                    {homeSearchResults.length === 0 && (
                      <p className="mt-3 rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-500">没有匹配的 Skill 名称。</p>
                    )}
                  </div>
                )}
              </section>

              <section className="rounded-xl border border-slate-200 bg-white p-4">
                <button
                  data-testid="favorite-skill-folder"
                  onClick={() => setShowFavorites((current) => !current)}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 p-4 text-left transition-all hover:border-slate-400 hover:bg-white hover:shadow-sm"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="grid size-12 shrink-0 place-items-center rounded-lg bg-amber-100 text-lg font-semibold text-amber-700">
                        ★
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-950">我收藏的 Skill</p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">常用、待改造、近期项目会反复使用的 Skill 收藏夹。</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="grid grid-cols-2 gap-2 text-center">
                        <div className="rounded-md bg-white px-3 py-2">
                          <p className="text-base font-semibold text-slate-950">{favoriteSkills.length}</p>
                          <p className="text-[11px] text-slate-500">收藏</p>
                        </div>
                        <div className="rounded-md bg-white px-3 py-2">
                          <p className="text-base font-semibold text-slate-950">{favoriteSkills.filter((skill) => skill.origin === 'external-open-source').length}</p>
                          <p className="text-[11px] text-slate-500">外部</p>
                        </div>
                      </div>
                      <span className="rounded-md bg-slate-900 px-3 py-2 text-xs font-semibold text-white">
                        {showFavorites ? '收起清单' : '查看清单'}
                      </span>
                    </div>
                  </div>
                </button>

                {showFavorites && (
                  <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                    {favoriteSkills.map((skill) => (
                      <div
                        data-testid="favorite-skill-card"
                        key={skill.id}
                        className="rounded-lg border border-slate-200 bg-white p-4 text-left transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-sm"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="line-clamp-2 text-sm font-semibold leading-5 text-slate-950">{skill.chineseName}</p>
                            <p className="mt-1 truncate text-xs text-slate-500">{skill.name}</p>
                          </div>
                          <span className="shrink-0 rounded-md bg-amber-50 px-2 py-1 text-[10px] font-semibold text-amber-700">收藏</span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          <span className={`rounded-md px-2 py-1 text-[10px] font-semibold ${
                            skill.origin === 'internal' ? 'bg-slate-900 text-white' : 'bg-cyan-50 text-cyan-700'
                          }`}>
                            {displayOriginLabel(skill)}
                          </span>
                          <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600">{skill.practice}</span>
                          <span className={`rounded-md px-2 py-1 text-[10px] font-medium ${riskTone[skill.risk]}`}>{riskLabels[skill.risk]}</span>
                        </div>
                        <p className="mt-3 line-clamp-2 text-xs leading-5 text-slate-600">{skill.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => openSkillDetail(skill)}
                            className="rounded-md border border-slate-200 px-2.5 py-1.5 text-[11px] font-semibold text-slate-600 hover:border-slate-400 hover:text-slate-900"
                          >
                            打开
                          </button>
                          <button
                            type="button"
                            onClick={() => toggleFavoriteSkill(skill.id)}
                            className="rounded-md bg-amber-50 px-2.5 py-1.5 text-[11px] font-semibold text-amber-700 hover:bg-amber-100"
                          >
                            取消收藏
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {skillCategories.map((category) => {
                  const skills = librarySkills.filter((skill) => skill.practice === category.practice)
                  return (
                    <button
                      data-testid={`category-${category.id}`}
                      key={category.id}
                      onClick={() => openSkillCategory(category.id)}
                      className={`relative flex min-h-[260px] flex-col overflow-hidden rounded-xl border bg-white p-5 text-left transition-all hover:-translate-y-0.5 hover:shadow-md ${category.border}`}
                    >
                      <div className="absolute right-5 top-5 h-20 w-20" aria-hidden="true">
                        <div className={`absolute right-0 top-0 h-14 w-14 rounded-[1.35rem] ${category.accent} opacity-95 shadow-sm`} />
                        <div className="absolute right-8 top-8 h-10 w-10 rounded-2xl border border-white/70 bg-white/80 shadow-sm backdrop-blur" />
                        <div className={`absolute right-3 top-12 h-2 w-10 rounded-full ${category.accent} opacity-35`} />
                        <div className={`absolute right-14 top-3 size-2 rounded-full ${category.accent} opacity-40`} />
                      </div>
                      <div className="relative pr-20">
                        <span className="rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-slate-600 shadow-sm">
                          {category.signal}
                        </span>
                        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">{category.name}</h3>
                        <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-400">{category.englishName}</p>
                        <p className="mt-4 max-w-[240px] text-sm leading-6 text-slate-600">{category.summary}</p>
                      </div>
                      <div className="mt-auto grid grid-cols-3 gap-2 pt-6">
                        {[
                          ['数量', skills.length],
                          ['示例/编辑', skills.filter((skill) => skill.origin === 'internal').length],
                          ['外部', skills.filter((skill) => skill.origin === 'external-open-source').length],
                        ].map(([label, value]) => (
                          <div key={label} className="rounded-lg bg-white/80 px-2 py-2 text-center shadow-sm">
                            <p className="text-base font-semibold text-slate-950">{value}</p>
                            <p className="text-[11px] text-slate-500">{label}</p>
                          </div>
                        ))}
                      </div>
                    </button>
                  )
                })}
              </div>

              <section className="rounded-lg border border-slate-200 bg-white px-4 py-3">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <SectionTitle title="外部法律 Skill 资源" meta="参考链接" />
                  <button
                    type="button"
                    onClick={() => setActiveView('ecosystem')}
                    className="self-start rounded-md border border-[#1e3a5f] bg-[#1e3a5f] px-2.5 py-1.5 text-[11px] font-semibold text-white transition-colors hover:brightness-110 md:self-auto"
                  >
                    打开法律技能生态
                  </button>
                  <div className="flex flex-wrap gap-2">
                  {externalSkillPlatforms.map((platform) => (
                    <a
                      key={platform.href}
                      href={platform.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[11px] font-medium text-slate-600 transition-colors hover:border-slate-400 hover:bg-white hover:text-slate-950"
                    >
                      <span>{platform.name}</span>
                      <span className="text-slate-400">· {platform.label}</span>
                    </a>
                  ))}
                  </div>
                </div>
              </section>
              </div>
            )}
          </div>
        )}

        {activeView === 'ecosystem' && <EcosystemView />}

        {activeView === 'recommend' && (
          <div className="space-y-5">
            <section className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="grid items-start gap-6 grid-cols-[minmax(0,1fr)_420px]">
                <div className="flex min-h-0 flex-col gap-5">
                  <div className="rounded-lg border border-slate-200 bg-white p-5">
                    <div className="mb-4 flex h-9 items-center justify-between gap-3">
                      <SectionTitle title="匹配任务和 Skill" meta="核心功能" />
                      {recommendReturnTarget && (
                        <button
                          type="button"
                          onClick={() => goToReturnTarget(recommendReturnTarget)}
                          className="h-9 w-fit rounded-md border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 hover:border-slate-400 hover:text-slate-900"
                        >
                          {recommendReturnTarget.label}
                        </button>
                      )}
                    </div>

                    <label className="mb-5 block rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <span className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                        任务目的
                        <span className="font-normal text-slate-400">选填</span>
                      </span>
                      <input
                        type="text"
                        aria-label="任务目的（选填）"
                        value={taskPurpose}
                        onChange={(event) => setTaskPurpose(event.target.value)}
                        placeholder="例如：站在甲方立场审查软件开发合同，识别高风险条款并提出修改建议"
                        className="mt-2 h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-500"
                      />
                      <p className="mt-2 text-xs leading-5 text-slate-500">未填写时，大模型将根据待处理文本或上传文件自行判断任务目的。</p>
                    </label>

                    <div className="grid items-stretch gap-5 grid-cols-2">
                      <div className="flex min-h-0 flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4">
                        <label className="flex h-full flex-col">
                          <span className="text-xs font-semibold text-slate-600">待处理文本内容</span>
                          <textarea
                            aria-label="待处理文本内容"
                            rows={3}
                            value={sourceText}
                            onChange={(event) => setSourceText(event.target.value)}
                            placeholder="将合同条款、裁判文书、客户邮件或资料清单直接粘贴到这里；也可在右侧上传文件（TXT / MD / CSV / Word / PDF）参与匹配"
                            className="mt-2 w-full flex-1 resize-none rounded-md border border-slate-200 p-3 text-sm leading-6 text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-500"
                          />
                        </label>
                      </div>

                      <div className="rounded-lg border border-slate-200 bg-white p-4">
                        <p className="text-xs font-semibold text-slate-600">上传文件</p>
                        <div className="mt-3 flex flex-1 flex-col rounded-md border border-dashed border-slate-300 bg-slate-50 p-3">
                          <label className="flex h-24 cursor-pointer flex-col items-center justify-center rounded-md border border-slate-200 bg-white text-center hover:border-slate-400">
                            <span className="text-sm font-semibold text-slate-800">选择文件</span>
                            <span className="mt-1 text-xs text-slate-500">PDF / Word / Excel / 图片</span>
                              <input
                                multiple
                                type="file"
                                className="hidden"
                                onChange={async (event) => {
                                  const files = Array.from(event.target.files ?? [])
                                  setFileNames(files.map((file) => file.name))
                                  const payloads: { name: string; base64: string }[] = []
                                  for (const file of files) {
                                    const base64 = await new Promise<string>((resolve, reject) => {
                                      const reader = new FileReader()
                                      reader.onload = () => {
                                        const dataUrl = reader.result as string
                                        resolve(dataUrl.split(',')[1] ?? '')
                                      }
                                      reader.onerror = () => reject(reader.error)
                                      reader.readAsDataURL(file)
                                    })
                                    payloads.push({ name: file.name, base64 })
                                  }
                                  setUploadedFilePayloads(payloads)
                                }}
                              />
                            </label>
                            <div className="mt-3 min-w-0 flex-1 overflow-auto">
                            {fileNames.length > 0 && (
                              <div className="mt-3 flex flex-wrap gap-2">
                                {fileNames.map((name) => (
                                  <p key={name} className="max-w-full truncate rounded-md bg-white px-2 py-1 text-xs text-slate-600">{name}</p>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={() => requestModelAction('recommend', sourceText)}
                        disabled={isAnalyzing}
                        className="rounded-md btn-accent px-4 py-2 text-sm font-semibold disabled:cursor-not-allowed"
                      >
                        {isAnalyzing ? '分析中...' : '生成推荐'}
                      </button>
                    </div>
                    {isAnalyzing && (
                      <div className="mt-3">
                        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                          <div
                            className="h-full rounded-full bg-[#1e3a5f] transition-all duration-500 ease-out"
                            style={{ width: `${analyzeProgress}%` }}
                          />
                        </div>
                        <p className="mt-1.5 text-[11px] text-slate-500">正在分析任务、匹配 Skill：{analyzeProgress}%</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex min-h-0 flex-col">
                  <SectionTitle title="匹配结果" meta={recommendationResult ? (recommendationResult.mode === 'llm' ? 'LLM' : '模拟 LLM') : '等待输入'} />
                  {recommendationError && (
                    <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3">
                      <p className="text-xs font-semibold text-red-800">大模型检索失败</p>
                      <p className="mt-1 text-xs leading-5 text-red-700">{recommendationError}</p>
                    </div>
                  )}
                  {pendingModelAction?.kind === 'recommend' && !recommendationResult && (
                    <p className="mt-4 rounded-md bg-amber-50 px-3 py-2 text-sm text-amber-700">已检测到敏感信息，请在上方弹窗确认脱敏后继续生成推荐。</p>
                  )}
                  {recommendationResult ? (
                    <div className="mt-4 space-y-4">
                      {!!recommendationResult.fileWarnings?.length && (
                        <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
                          <p className="text-xs font-semibold text-amber-800">文件读取提示</p>
                          <ul className="mt-1 space-y-1">
                            {recommendationResult.fileWarnings.map((warn) => (
                              <li key={warn} className="text-xs leading-5 text-amber-700">{warn}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="rounded-lg bg-slate-50 p-4">
                        <p className="text-xs font-semibold text-slate-500">任务画像</p>
                        <p className="text-sm font-semibold text-slate-950">{recommendationResult.summary}</p>
                        <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-600">
                          <p className="rounded-md bg-white px-2 py-2">类型：{recommendationResult.taskType}</p>
                          <p className="rounded-md bg-white px-2 py-2">阶段：{recommendationResult.matterStage}</p>
                        </div>
                        {!!recommendationResult.riskFlags?.length && (
                          <div className="mt-3">
                            <p className="text-[11px] font-semibold text-slate-500">需要补充 / 注意</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {recommendationResult.riskFlags.map((flag) => (
                                <span key={flag} className="rounded-md bg-amber-50 px-2 py-1 text-[11px] font-medium text-amber-700">{flag}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <section className="rounded-lg border border-violet-200 bg-violet-50/60 p-4">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <p className="text-xs font-semibold text-violet-950">建议知识源（可选）</p>
                            <p className="mt-1 text-[11px] leading-5 text-violet-700">
                              Skill 已完成匹配；知识源只为后续执行、编辑或交接 Agent 补充内部口径，不影响上方 Skill 排名。
                            </p>
                          </div>
                          <button type="button" onClick={() => setActiveView('knowledge')} className="shrink-0 text-[11px] font-semibold text-violet-700 hover:text-violet-950">
                            查看使用说明
                          </button>
                        </div>
                        <div className="mt-3 grid gap-2">
                          {knowledgeSources.map((source) => {
                            const recommended = recommendedKnowledgeSourceIds.includes(source.id)
                            const selected = selectedKnowledgeIds.includes(source.id)
                            return (
                              <div key={source.id} className="flex min-w-0 flex-col gap-3 rounded-md border border-violet-100 bg-white p-3 sm:flex-row sm:items-start sm:justify-between">
                                <div className="min-w-0">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <p className="text-xs font-semibold text-slate-950">{source.title}</p>
                                    <span className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${recommended ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                                      {recommended ? '建议关联' : '占位样例'}
                                    </span>
                                  </div>
                                  <p className="mt-1 text-[11px] leading-5 text-slate-500">
                                    {recommended ? '与本次任务关键词或推荐 Skill 的业务领域相符。' : '当前任务未命中该示例知识源，也可以手动选择体验后续流程。'}
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => toggleKnowledgeSource(source.id)}
                                  className={`h-8 shrink-0 rounded-md px-3 text-[11px] font-semibold ${selected ? 'bg-violet-700 text-white hover:bg-violet-600' : 'border border-violet-200 bg-white text-violet-700 hover:border-violet-400'}`}
                                >
                                  {selected ? '已选择，点击取消' : '选择知识源'}
                                </button>
                              </div>
                            )
                          })}
                        </div>
                      </section>

                      <div className="space-y-3">
                        <div>
                          <SectionTitle title="匹配 Skill" meta="按匹配度排序" />
                        </div>
                        {recommendationResult.recommendations.slice(0, showAllMatches ? undefined : 2).map((item) => {
                            const skill = allSkills.find((candidate) => candidate.id === item.skillId)
                            if (!skill) return null
                            return (
                            <div key={item.skillId} className="rounded-lg border border-slate-200 bg-white p-4">
                              <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span className="rounded-md bg-indigo-50 px-2 py-1 text-[11px] font-semibold text-indigo-700">{formatMatchPercent(item.score)}</span>
                                    <p className="text-sm font-semibold text-slate-950">{skill.chineseName}</p>
                                  </div>
                                  <p className="mt-1 text-xs text-slate-500">{skill.practice} · {displayOriginLabel(skill)} · {skill.jurisdiction}</p>
                                  {skill.id.startsWith('eco:') && skill.sourceUrl && (
                                    <a
                                      href={skill.sourceUrl}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="mt-1 inline-block break-all text-[11px] font-medium text-cyan-700 hover:text-cyan-900"
                                    >
                                      查看 GitHub 仓库 ↗
                                    </a>
                                  )}
                                </div>
                              </div>
                              <div className="mt-3 space-y-1 text-xs leading-5 text-slate-600">
                                {(item.reasons || []).map((reason) => <p key={reason}>为什么匹配：{reason}</p>)}
                                {(item.cautions || []).map((caution) => <p key={caution}>使用边界：{caution}</p>)}
                              </div>
                              <div className="mt-4 flex flex-wrap gap-2">
                                <button
                                  onClick={() => chooseSkill(skill, 'library')}
                                  className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:border-slate-400 hover:text-slate-900"
                                >
                                  打开详情
                                </button>
                                {skill.id.startsWith('eco:') ? (
                                  <a
                                    href={skill.sourceUrl || '#'}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-md border border-cyan-100 bg-cyan-50 px-3 py-1.5 text-xs font-semibold text-cyan-700 hover:bg-cyan-100"
                                  >
                                    直达 GitHub 仓库
                                  </a>
                                ) : (
                                  <button
                                    onClick={() => openSkillEffectTest(skill, item)}
                                    className="rounded-md border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 hover:bg-indigo-100"
                                  >
                                    测试效果
                                  </button>
                                )}
                                {!skill.id.startsWith('eco:') && (
                                  <button
                                    onClick={() => downloadSkillPackage(skill)}
                                    className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:border-slate-400 hover:text-slate-900"
                                  >
                                    下载 Skill
                                  </button>
                                )}
                                <button
                                  onClick={() => startEditFromSkill(skill)}
                                  className="rounded-md bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-700"
                                >
                                  基于该 Skill 编辑
                                </button>
                              </div>
                            </div>
                          )
                        })}
                        {recommendationResult.recommendations.length > 2 && !showAllMatches && (
                          <button
                            type="button"
                            onClick={() => {
                              const ids = (recommendationResult.recommendations || []).map((r) => r.skillId)
                              setShowAllMatches(true)
                              setLibraryMatchedIds(ids)
                              setLibraryReturnTarget(null)
                              setHomeQuery('')
                              setShowFavorites(false)
                              setQuery('')
                              setStatus('全部')
                              setOrigin('全部')
                              setDocStatus('全部')
                              setLicenseFilter('全部')
                              setSelectedCategoryId('all')
                              showLibraryMode('category', 'forward')
                              setActiveView('library')
                            }}
                            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-600 hover:border-[#1e3a5f] hover:text-[#1e3a5f]"
                          >
                            查看全部 {recommendationResult.recommendations.length} 个匹配 →
                          </button>
                        )}
                        {recommendCopyNotice && <p className="rounded-md bg-emerald-50 px-3 py-2 text-xs text-emerald-700">{recommendCopyNotice}</p>}
                      </div>
                      </div>
                      ) : (
                    <div className="mt-4 space-y-3">
                      <div className="rounded-lg bg-slate-50 p-4">
                        <p className="text-sm font-semibold text-slate-950">生成推荐后，匹配结果会显示在这里</p>
                        <p className="mt-2 text-xs leading-5 text-slate-600">在上方输入任务材料或上传文件，点击“生成推荐”后，匹配结果会显示在这里。</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        )}

        {activeView === 'admin' && adminPage}

        {activeView === 'editor' && (
          <div
            data-editor-layout="skill-editor"
            className={`grid gap-5 transition-[grid-template-columns] duration-300 ${
              editorSidebarCollapsed ? 'grid-cols-[52px_minmax(0,1fr)]' : 'grid-cols-[280px_minmax(0,1fr)]'
            }`}
          >
            {mySkillList}
            <div data-editor-main="skill-editor" className="min-w-0">
              {editorPanel}
            </div>
          </div>
        )}

        {activeView === 'knowledge' && knowledgePage}

      </main>

      {skillEffectTest && activeView === 'recommend' && (
          <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/35 px-4 backdrop-blur-sm">
            <section className="max-h-[88vh] w-full max-w-4xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-5">
                <div>
                  <p className="text-lg font-semibold text-slate-950">Skill 效果测试</p>
                  <p className="mt-1 text-sm text-slate-500">
                    {skillEffectTest.skill.chineseName} · {formatMatchPercent(skillEffectTest.recommendation.score)}
                    {skillEffectResult && ` · ${skillEffectResult.mode === 'llm' ? 'LLM' : '模拟 LLM'}`}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSkillEffectTest(null)
                    setSkillEffectResult(null)
                    setSkillEffectError('')
                    setSkillEffectCopyNotice('')
                  }}
                  className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 hover:border-slate-400 hover:text-slate-900"
                >
                  关闭
                </button>
              </div>
              <div className="max-h-[calc(88vh-88px)] overflow-auto p-5">
                {isTestingSkillEffect && (
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
                    正在调用大模型生成对比结果...
                  </div>
                )}
                {skillEffectError && (
                  <div className="rounded-lg border border-rose-100 bg-rose-50 p-4 text-sm text-rose-700">
                    {skillEffectError}
                  </div>
                )}
                {skillEffectResult && (
                  <div className="grid gap-4">
                    <section className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold text-slate-950">不使用 Skill</p>
                        <span className="rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-slate-500">普通大模型</span>
                      </div>
                      <pre className="mt-3 whitespace-pre-wrap text-xs leading-6 text-slate-700">{skillEffectResult.withoutSkill}</pre>
                    </section>
                    <section className="rounded-lg border border-indigo-100 bg-indigo-50/60 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold text-indigo-950">使用 Skill</p>
                        <span className="rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-indigo-700">带完整 Markdown</span>
                      </div>
                      <pre className="mt-3 whitespace-pre-wrap text-xs leading-6 text-indigo-950">{skillEffectResult.withSkill}</pre>
                    </section>
                    {!!skillEffectResult.comparison?.length && (
                      <section className="rounded-lg border border-emerald-100 bg-emerald-50 p-4">
                        <p className="text-sm font-semibold text-emerald-950">差异</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {skillEffectResult.comparison.map((item) => (
                            <span key={item} className="rounded-md bg-white px-2 py-1 text-[11px] font-medium text-emerald-700">{item}</span>
                          ))}
                        </div>
                      </section>
                    )}
                  </div>
                )}
                {skillEffectCopyNotice && (
                  <p className={`mt-4 rounded-md px-3 py-2 text-xs ${
                    skillEffectCopyNotice.startsWith('已复制')
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-rose-50 text-rose-700'
                  }`}>
                    {skillEffectCopyNotice}
                  </p>
                )}
                <div className="mt-4 flex flex-wrap justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => copyAiPromptForSkill(skillEffectTest.skill, true)}
                    className="h-9 rounded-md border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 hover:border-slate-400 hover:text-slate-900"
                  >
                    复制完整 Markdown
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const skill = skillEffectTest.skill
                      chooseSkill(skill, 'library')
                    }}
                    className="h-9 rounded-md border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 hover:border-slate-400 hover:text-slate-900"
                  >
                    查看 Skill
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const skill = skillEffectTest.skill
                      setSkillEffectTest(null)
                      startEditFromSkill(skill)
                    }}
                    className="h-9 rounded-md bg-slate-900 px-3 text-xs font-semibold text-white hover:bg-slate-700"
                  >
                    基于该 Skill 编辑
                  </button>
                </div>
              </div>
            </section>
          </div>
      )}

      {pendingModelAction && redactionResult && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/35 px-4 backdrop-blur-sm">
          <section className="w-full max-w-2xl rounded-xl border border-slate-200 bg-white p-5 shadow-2xl">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-950">脱敏检查</p>
                <p className="mt-1 text-sm leading-6 text-slate-500">检测到可能的敏感信息。确认后将使用脱敏文本继续，不会把原始敏感内容送入模型。</p>
              </div>
              <span className="rounded-md bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-700">{redactionResult.summary}</span>
            </div>
            <div className="mt-4 grid gap-2 md:grid-cols-2">
              {redactionResult.hits.map((hit) => (
                <div key={hit.label} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-slate-900">{hit.label}</p>
                    <span className="rounded-md bg-white px-2 py-1 text-xs font-semibold text-slate-600">{hit.count} 处</span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{hit.strategy}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-950 p-3">
              <p className="text-xs font-semibold text-white">脱敏预览</p>
              <pre className="mt-2 max-h-48 overflow-auto whitespace-pre-wrap text-xs leading-6 text-slate-100">
                {redactionResult.sanitizedText.slice(0, 1600)}
              </pre>
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={cancelRedactionAction}
                className="h-10 rounded-md border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-600 hover:border-slate-400 hover:text-slate-950"
              >
                取消
              </button>
              <button
                type="button"
                onClick={confirmRedactionAction}
                className="h-10 rounded-md bg-slate-900 px-4 text-xs font-semibold text-white hover:bg-slate-700"
              >
                确认脱敏并继续
              </button>
            </div>
          </section>
        </div>
      )}

      {showCreateSkillDialog && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/35 px-4 backdrop-blur-sm">
          <form
            onSubmit={(event) => {
              event.preventDefault()
              confirmCreateNewSkill()
            }}
            className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-5 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-slate-950">新建我的 Skill</p>
                <p className="mt-1 text-sm leading-6 text-slate-500">先填写基础信息，确认后才会创建到编辑器侧边栏。</p>
              </div>
              <button
                type="button"
                onClick={cancelCreateNewSkill}
                className="grid size-8 shrink-0 place-items-center rounded-md border border-slate-200 text-sm font-semibold text-slate-500 hover:border-slate-400 hover:text-slate-950"
                aria-label="取消新建 Skill"
              >
                ×
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">1. 添加名称</span>
                <input
                  autoFocus
                  value={newSkillName}
                  onChange={(event) => setNewSkillName(event.target.value)}
                  placeholder="例如：诉讼材料时间线生成"
                  className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-slate-500"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">2. 选择分类</span>
                <select
                  value={newSkillPractice}
                  onChange={(event) => setNewSkillPractice(event.target.value)}
                  className="mt-2 h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none focus:border-slate-500"
                >
                  {skillCategories.map((category) => (
                    <option key={category.id} value={category.practice}>{category.name}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">2. 选择模板</span>
                <select
                  value={newSkillTemplateId}
                  onChange={(event) => {
                    const templateId = event.target.value as SkillTemplateId
                    setNewSkillTemplateId(templateId)
                    const template = editorTemplateOptions.find((item) => item.id === templateId)
                    if (template?.practice) setNewSkillPractice(template.practice)
                  }}
                  className="mt-2 h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none focus:border-slate-500"
                >
                  {editorTemplateOptions.map((template) => (
                    <option key={template.id} value={template.id}>{template.name}</option>
                  ))}
                </select>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {editorTemplateOptions.find((template) => template.id === newSkillTemplateId)?.description}
                </p>
              </label>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                onClick={cancelCreateNewSkill}
                className="h-10 rounded-md border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-600 hover:border-slate-400 hover:text-slate-950"
              >
                取消
              </button>
              <button
                type="submit"
                disabled={!newSkillName.trim()}
                className="h-10 rounded-md bg-slate-900 px-4 text-xs font-semibold text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                3. 打开正式编辑界面
              </button>
            </div>
          </form>
        </div>
      )}

      <FireworksLayer />
    </div>
  )
}
