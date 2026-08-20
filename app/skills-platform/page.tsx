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

type PlatformView = 'library' | 'recommend' | 'editor' | 'knowledge' | 'admin'
type LibraryMode = 'home' | 'category' | 'skill'
type LibraryMotion = 'settle' | 'forward' | 'back'
type EditorTab = 'edit' | 'template' | 'qa'
type DetailDocTab = 'overview' | 'full' | 'readme' | 'skill'
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
  kind: 'recommend' | 'editor-ai' | 'skill-run'
  text: string
}
type SkillRunResult = {
  mode: string
  summary: string
  output: string
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
  owner: string
  jurisdiction: string
  risk: FirmSkill['risk']
  inputMaterials: string
  checklist: string
  prohibited: string
  deliverableTemplate: string
  outputFormat: string
  qaTask: string
  versionNote: string
  approvalNote: string
  customSkillMd: string
}

const editorDraftFieldLabels: Partial<Record<keyof EditorDraft, string>> = {
  chineseName: 'Skill 名称',
  practice: '业务分类',
  description: '律师日常任务',
  jurisdiction: '适用法域',
  inputMaterials: '输入材料要求',
  checklist: '方法论 / 审查清单',
  prohibited: '禁止自动判断事项',
  deliverableTemplate: '输出模板',
  outputFormat: '输出格式要求',
  qaTask: '质检试跑任务',
  versionNote: '版本说明',
  approvalNote: '发布与复核',
  customSkillMd: 'SKILL.md 手动内容',
}

const markdownFallbacks: Partial<Record<keyof EditorDraft, string>> = {
  description: '请说明这个 Skill 要解决的律师日常任务、适用场景和不适用边界。',
  inputMaterials: '请列明用户需要提供的材料、文件类型、背景信息和必须补充的事实。',
  checklist: '1. 识别任务目标和材料范围。\n2. 按业务逻辑完成分析。\n3. 列出不确定事项、缺失材料和律师复核项。',
  prohibited: '不得自动作出最终法律结论；不得替代承办律师完成客户交付前复核。',
  deliverableTemplate: '# 交付物\n\n## 一、结论摘要\n- \n\n## 二、事实与材料\n- \n\n## 三、分析过程\n- \n\n## 四、律师复核项\n- ',
  outputFormat: '使用清晰标题、项目符号和表格输出；对不确定事项单独列明。',
  qaTask: '请粘贴一段代表性材料，检查该 Skill 是否能稳定输出预期结果。',
  versionNote: 'v0.1 草稿：待试跑、复核和发布。',
  approvalNote: '承办律师复核后方可对外使用；发布前确认适用范围、保密要求和知识源引用。',
}

const navItems: { label: string; view: PlatformView }[] = [
  { label: '匹配任务', view: 'recommend' },
  { label: '查看 Skill', view: 'library' },
  { label: '编辑 Skill', view: 'editor' },
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
  'AGPL 3.0': '强开源许可证。若基于它改造并提供网络服务，通常需要公开相应源代码，内部使用前应做合规确认。',
  MIT: '宽松开源许可证。通常允许复制、修改、商用和再分发，但需要保留原作者版权和许可证声明。',
  'CC BY 4.0': '知识内容类许可。通常允许分享和改编，但需要清楚标注来源与作者署名。',
  'Apache 2.0': '宽松开源许可证。通常允许商用和修改，并包含专利授权条款，需要保留声明。',
  Proprietary: '专有许可。不能默认复制、改编或内部发布，需确认权利人授权范围。',
}

function licenseNoteForTag(tag: string) {
  const normalizedTag = tag.replace(/^许可证：/, '').trim()
  return licenseNotes[normalizedTag]
}

function licenseLabelForSkill(skill: FirmSkill) {
  return skill.tags.find((tag) => licenseNoteForTag(tag)) || ''
}

function docStatusForSkill(skill: FirmSkill) {
  if (skill.readmeMdPath && skill.skillMdPath) return 'README + SKILL.md'
  if (skill.skillMdPath) return '仅 SKILL.md'
  if (skill.readmeMdPath || skill.mdPath) return '仅 README'
  return '暂无 Markdown'
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
    owner: skill.owner,
    jurisdiction: skill.jurisdiction,
    risk: skill.risk,
    inputMaterials: `客户需求背景、交易或案件基本信息、待审文件、相关模板、团队既有审查口径。对于 ${riskLabels[skill.risk]} Skill，应补充授权范围、保密等级和人工复核人。`,
    checklist: `1. 核对任务是否属于 ${skill.practice}。\n2. 识别客户目标、时间节点、交易或案件阶段。\n3. 标注必须由律师判断的法律问题。\n4. 输出不确定事项、缺失材料和追问清单。`,
    prohibited: skill.notFor.join('\n'),
    deliverableTemplate: `# ${skill.chineseName}\n\n## 一、结论摘要\n- 关键风险：\n- 建议动作：\n\n## 二、事实与材料\n- 已审材料：\n- 缺失材料：\n\n## 三、分析\n- 法律/合同依据：\n- 不确定事项：\n\n## 四、待律师复核\n- 需合伙人确认：\n- 需客户补充：`,
    outputFormat: skill.outputFormat,
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
    <span className={`inline-flex h-6 items-center rounded-md border px-2 text-[11px] font-medium ${className}`}>
      {children}
    </span>
  )
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
  const [task, setTask] = useState(recommendationScenarios[0])
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
  const [isAnalyzing, setIsAnalyzing] = useState(false)
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
  const [editorUploadNames, setEditorUploadNames] = useState<string[]>([])
  const [editorAiResult, setEditorAiResult] = useState<EditorAiResult | null>(null)
  const [editorUndoDraft, setEditorUndoDraft] = useState<EditorDraft | null>(null)
  const [editorAppliedChanges, setEditorAppliedChanges] = useState<EditorAppliedChange[]>([])
  const [isImprovingEditor, setIsImprovingEditor] = useState(false)
  const [editorAiError, setEditorAiError] = useState('')
  const [editorAiNotice, setEditorAiNotice] = useState('')
  const [isSavingInternal, setIsSavingInternal] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')
  const [trialMaterial, setTrialMaterial] = useState('请粘贴一段脱敏或待脱敏的试跑材料，例如合同条款、客户邮件、证据摘要或资料清单。')
  const [isRunningSkill, setIsRunningSkill] = useState(false)
  const [skillRunResult, setSkillRunResult] = useState<SkillRunResult | null>(null)
  const [skillRunError, setSkillRunError] = useState('')
  const [skillRunRecords, setSkillRunRecords] = useState<SkillRunRecord[]>([])
  const [selectedKnowledgeIds, setSelectedKnowledgeIds] = useState<string[]>(['example-contract-playbook'])
  const [editableKnowledgeSource, setEditableKnowledgeSource] = useState<KnowledgeSource>(knowledgeSources[0])
  const [pendingModelAction, setPendingModelAction] = useState<PendingModelAction | null>(null)
  const [redactionResult, setRedactionResult] = useState<RedactionResult | null>(null)
  const [selectedMarkdownFiles, setSelectedMarkdownFiles] = useState<Record<string, MarkdownFilePayload>>({})
  const [isLoadingMarkdown, setIsLoadingMarkdown] = useState(false)

  const allSkills = useMemo(() => [...firmSkills, ...savedInternalSkills], [savedInternalSkills])
  const librarySkills = firmSkills
  const mySkills = useMemo(() => savedInternalSkills.filter(isMySkill), [savedInternalSkills])
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
      const haystack = `${skill.name} ${skill.chineseName} ${skill.owner} ${skill.practice} ${skill.sourceName} ${skill.tags.join(' ')}`.toLowerCase()
      const matchesQuery = !query.trim() || haystack.includes(query.trim().toLowerCase())
      const matchesCategory = !selectedCategory || skill.practice === selectedCategory.practice
      const matchesPractice = practice === '全部' || skill.practice === practice
      const matchesStatus = status === '全部' || statusLabels[skill.status] === status
      const matchesOrigin = origin === '全部' || displayOriginLabel(skill) === origin
      const matchesDocStatus = docStatus === '全部' || docStatusForSkill(skill) === docStatus
      const matchesLicense = licenseFilter === '全部' || licenseLabelForSkill(skill) === licenseFilter
      return matchesQuery && matchesCategory && matchesPractice && matchesStatus && matchesOrigin && matchesDocStatus && matchesLicense
    })
  }, [docStatus, librarySkills, licenseFilter, origin, practice, query, selectedCategory, status])

  const selectedSkill = allSkills.find((skill) => skill.id === selectedId) ?? allSkills[0] ?? firmSkills[0]
  const selectedSkillIntro = extractChineseReadmeIntro(selectedMarkdownFiles.full?.content) || selectedSkill.description
  const canToggleSkillIntro = selectedSkillIntro.length > 120
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
    `# ${editorDraft.chineseName || '未命名我的 Skill'}`,
    '',
    `业务分类：${editorDraft.practice || '未选择'}`,
    `适用法域：${editorDraft.jurisdiction || '未填写'}`,
    '',
    '## 目的',
    editorDraft.description || markdownFallbacks.description,
    '',
    '## 输入材料',
    editorDraft.inputMaterials || markdownFallbacks.inputMaterials,
    '',
    '## 方法论',
    editorDraft.checklist || markdownFallbacks.checklist,
    '',
    '## 禁止事项',
    editorDraft.prohibited || markdownFallbacks.prohibited,
    '',
    '## 输出模板',
    editorDraft.deliverableTemplate || markdownFallbacks.deliverableTemplate,
    '',
    '## 输出格式要求',
    editorDraft.outputFormat || markdownFallbacks.outputFormat,
    '',
    '## 知识源引用',
    selectedKnowledgeSources.length
      ? selectedKnowledgeSources.map((source) => `- ${source.title}：${source.summary}`).join('\n')
      : '- 暂无指定知识源',
    '',
    '## 质检任务',
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

  function loadSkillIntoEditor(skill: FirmSkill) {
    setEditorDraft(createEditorDraft(skill, task))
    setEditorUploadNames(skill.uploadNames || [])
    setEditorAiResult(null)
    setEditorUndoDraft(null)
    setEditorAppliedChanges([])
    setEditorAiError('')
    setEditorAiNotice('')
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
      full: selectedSkill.mdPath,
      readme: selectedSkill.readmeMdPath,
      skill: selectedSkill.skillMdPath,
    }
    if (!paths.full && !paths.readme && !paths.skill) {
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

  async function improveEditorDraftWithAi(sanitizedText = editorDraft.qaTask, redactionSummary = '未执行脱敏检查') {
    setIsImprovingEditor(true)
    setEditorAiError('')
    setEditorAiNotice('')
    setEditorAiResult(null)
    setEditorAppliedChanges([])
    try {
      const response = await fetch('/api/skills/editor-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sourceSkill: selectedSkill,
          draft: editorDraft,
          uploadNames: editorUploadNames,
          knowledgeSources: selectedKnowledgeSources,
          sampleText: sanitizedText,
          redactionSummary,
        }),
      })
      const payload = await response.json()
      if (!response.ok) throw new Error(payload?.error || 'AI 完善失败')
      setEditorAiResult(payload as EditorAiResult)
    } catch (error) {
      setEditorAiError(error instanceof Error ? error.message : 'AI 完善失败，请稍后重试。')
    } finally {
      setIsImprovingEditor(false)
    }
  }

  function shortChangeText(value: string) {
    const normalized = value.trim()
    if (!normalized) return '（空）'
    return normalized.length > 160 ? `${normalized.slice(0, 160)}...` : normalized
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

    return { next, changes }
  }

  function applyEditorAiDraft() {
    if (!editorAiResult?.draft) return
    const { next, changes } = buildEditorAiApplication(editorDraft, editorAiResult.draft)
    setEditorUndoDraft(editorDraft)
    setEditorAppliedChanges(changes)
    setEditorDraft(next)
    setEditorAiNotice(changes.length ? `已应用 AI 完善建议，共修改 ${changes.length} 项。` : 'AI 建议与当前内容一致，未产生新的字段修改。')
  }

  function undoEditorAiApplication() {
    if (!editorUndoDraft) return
    setEditorDraft(editorUndoDraft)
    setEditorUndoDraft(null)
    setEditorAppliedChanges([])
    setEditorAiNotice('已撤销刚才应用的 AI 建议。')
  }

  function toggleKnowledgeSource(id: string) {
    setSelectedKnowledgeIds((current) => (
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    ))
  }

  function requestModelAction(kind: PendingModelAction['kind'], text: string) {
    const inspection = inspectSensitiveText(text)
    if (inspection.hits.length > 0) {
      if (kind === 'recommend') setRecommendationResult(null)
      setRedactionResult(inspection)
      setPendingModelAction({ kind, text })
      return
    }
    executeModelAction(kind, text, text, '未发现明显敏感信息')
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
    )
    setPendingModelAction(null)
    setRedactionResult(null)
  }

  function executeModelAction(
    kind: PendingModelAction['kind'],
    originalText: string,
    sanitizedText: string,
    redactionSummary: string,
  ) {
    if (kind === 'recommend') {
      generateModelRecommendations(sanitizedText, redactionSummary)
      return
    }
    if (kind === 'editor-ai') {
      improveEditorDraftWithAi(sanitizedText, redactionSummary)
      return
    }
    runCurrentSkill(sanitizedText, redactionSummary, originalText)
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
    if (skill.id === selectedSkill.id && selectedMarkdownFiles.full?.content) return selectedMarkdownFiles.full.content
    const paths = {
      full: skill.mdPath,
      readme: skill.readmeMdPath,
      skill: skill.skillMdPath,
    }
    if (!paths.full && !paths.readme && !paths.skill) return fallbackMarkdownForSkill(skill)
    const response = await fetch('/api/skills/markdown', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paths }),
    })
    if (!response.ok) throw new Error('读取 Markdown 失败')
    const payload = (await response.json()) as { files?: Record<string, MarkdownFilePayload> }
    const files = payload.files || {}
    if (files.full?.content) return files.full.content
    const parts = [
      files.readme?.content ? `# README.md\n\n${files.readme.content}` : '',
      files.skill?.content ? `# SKILL.md\n\n${files.skill.content}` : '',
    ].filter(Boolean)
    return parts.length ? parts.join('\n\n---\n\n') : fallbackMarkdownForSkill(skill)
  }

  async function copyAiPromptForSkill(skill: FirmSkill) {
    try {
      const markdown = await readMarkdownForSkill(skill)
      await navigator.clipboard.writeText(markdown)
      setRecommendCopyNotice(`已复制完整 Markdown：${skill.chineseName}`)
    } catch {
      setRecommendCopyNotice('未能复制完整 Markdown，请打开详情后在 Markdown 区域手动复制。')
    }
  }

  async function openSkillEffectTest(skill: FirmSkill, recommendation: ModelRecommendation) {
    setSkillEffectTest({ skill, recommendation })
    setSkillEffectResult(null)
    setSkillEffectError('')
    setIsTestingSkillEffect(true)
    try {
      const skillMarkdown = await readMarkdownForSkill(skill)
      const response = await fetch('/api/skills/effect-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          purpose: task,
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

  async function generateModelRecommendations(sanitizedText = sourceText, redactionSummary = '未执行脱敏检查', forceLlm = false) {
    setIsAnalyzing(true)
    setRecommendationError('')
    setRecommendCopyNotice('')
    setSkillOptimization(null)
    try {
      const response = await fetch('/api/skills/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'recommend',
          purpose: sanitizedText || (uploadedFilePayloads.length ? '根据上传的材料进行匹配' : '未填写处理目的'),
          taskEntrypoint: selectedEntrypoint || undefined,
          text: sanitizedText,
          fileNames,
          filePayloads: uploadedFilePayloads,
          knowledgeSources: selectedKnowledgeSources,
          redactionSummary,
          forceLlm,
        }),
      })
      if (!response.ok) throw new Error('推荐分析失败')
      const data = (await response.json()) as ModelRecommendationResult
      if (!Array.isArray(data.recommendations)) throw new Error('推荐结果格式异常')
      setRecommendationResult(data)
      if (Array.isArray(data.recommendedKnowledgeIds) && data.recommendedKnowledgeIds.length > 0) {
        setSelectedKnowledgeIds((current) => Array.from(new Set([...current, ...data.recommendedKnowledgeIds!.filter((id) => id === editableKnowledgeSource.id)])))
      }
    } catch (error) {
      setRecommendationError(error instanceof Error ? error.message : '推荐分析失败，请稍后重试。')
    } finally {
      setIsAnalyzing(false)
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
          purpose: sourceText || task,
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
      const record: SkillRunRecord = {
        id: `run-${Date.now()}`,
        skillId: selectedSkill.id,
        skillName: editorDraft.chineseName || selectedSkill.chineseName,
        createdAt: new Date().toLocaleString('zh-CN', { hour12: false }),
        score: Math.round(result.score),
        passed: result.passed,
        rating: result.passed ? 4 : 2,
        failureReason: result.failureReason || (result.passed ? '' : '待人工填写失败原因'),
        materialPreview: sanitizedText.slice(0, 80),
      }
      setSkillRunRecords((current) => [record, ...current])
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
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-900">{skill.chineseName}</p>
                </div>
                <Pill className={statusTone[skill.status]}>{statusLabels[skill.status]}</Pill>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                <span>{skill.practice}</span>
                <span>{skill.internalSavedPath ? '已保存' : '未保存'}</span>
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
            ['edit', '编辑 Skill'],
            ['template', '输出模板'],
            ['qa', '质检试用'],
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
                <span className="text-xs font-semibold text-slate-600">Skill 名称</span>
                <input
                  value={editorDraft.chineseName}
                  onChange={(event) => setEditorDraft((current) => ({ ...current, chineseName: event.target.value, name: event.target.value }))}
                  className="mt-2 h-10 w-full rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-slate-500"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">业务分类</span>
                <select
                  value={editorDraft.practice}
                  onChange={(event) => setEditorDraft((current) => ({ ...current, practice: event.target.value }))}
                  className="mt-2 h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-500"
                >
                  {skillCategories.map((category) => <option key={category.id}>{category.practice}</option>)}
                </select>
              </label>
            </div>
            <div className="mt-3 grid gap-3">
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">适用法域</span>
                <input
                  value={editorDraft.jurisdiction}
                  onChange={(event) => setEditorDraft((current) => ({ ...current, jurisdiction: event.target.value }))}
                  className="mt-2 h-10 w-full rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-slate-500"
                />
              </label>
            </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <SectionTitle title="任务与输入" />
            <label className="block">
              <span className="text-xs font-semibold text-slate-600">这个 Skill 解决的律师日常任务</span>
              <textarea
                value={editorDraft.description}
                onChange={(event) => setEditorDraft((current) => ({ ...current, description: event.target.value }))}
                className="mt-2 h-32 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold text-slate-600">输入材料要求</span>
              <textarea
                value={editorDraft.inputMaterials}
                onChange={(event) => setEditorDraft((current) => ({ ...current, inputMaterials: event.target.value }))}
                className="mt-2 h-28 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500"
              />
            </label>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <SectionTitle title="方法论与边界" />
            <div className="grid gap-4 lg:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">方法论 / 审查清单</span>
                <textarea
                  value={editorDraft.checklist}
                  onChange={(event) => setEditorDraft((current) => ({ ...current, checklist: event.target.value }))}
                  className="mt-2 h-40 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">禁止自动判断的事项</span>
                <textarea
                  value={editorDraft.prohibited}
                  onChange={(event) => setEditorDraft((current) => ({ ...current, prohibited: event.target.value }))}
                  className="mt-2 h-40 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500"
                />
              </label>
            </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <SectionTitle title="输出与复核" meta="会同步写入 SKILL.md" />
              <div className="mt-4 grid gap-4 lg:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold text-slate-600">输出模板</span>
                  <textarea
                    value={editorDraft.deliverableTemplate}
                    onChange={(event) => setEditorDraft((current) => ({ ...current, deliverableTemplate: event.target.value }))}
                    className="mt-2 h-44 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-slate-600">输出格式要求</span>
                  <textarea
                    value={editorDraft.outputFormat}
                    onChange={(event) => setEditorDraft((current) => ({ ...current, outputFormat: event.target.value }))}
                    className="mt-2 h-44 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-slate-600">质检任务</span>
                  <textarea
                    value={editorDraft.qaTask}
                    onChange={(event) => setEditorDraft((current) => ({ ...current, qaTask: event.target.value }))}
                    className="mt-2 h-32 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-slate-600">版本说明</span>
                  <textarea
                    value={editorDraft.versionNote}
                    onChange={(event) => setEditorDraft((current) => ({ ...current, versionNote: event.target.value }))}
                    className="mt-2 h-32 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500"
                  />
                </label>
                <label className="block lg:col-span-2">
                  <span className="text-xs font-semibold text-slate-600">发布与复核</span>
                  <textarea
                    value={editorDraft.approvalNote}
                    onChange={(event) => setEditorDraft((current) => ({ ...current, approvalNote: event.target.value }))}
                    className="mt-2 h-28 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {editorTab === 'template' && (
        <div className="space-y-4 p-4">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <SectionTitle title="SKILL.md 直接编辑" meta={editorDraft.customSkillMd ? '已手动修改' : (selectedSkill.skillMdPath || selectedSkill.mdPath) ? '已读取来源 Markdown' : '由当前编辑内容生成'} />
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  可以在这里直接修改完整 Markdown。若希望回到字段自动生成的版本，可以恢复字段生成内容。
                </p>
              </div>
              {editorDraft.customSkillMd && (
                <button
                  type="button"
                  onClick={() => setEditorDraft((current) => ({ ...current, customSkillMd: '' }))}
                  className="h-9 shrink-0 rounded-md border border-slate-300 bg-white px-3 text-xs font-semibold text-slate-700 hover:border-slate-500"
                >
                  恢复字段生成内容
                </button>
              )}
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-500">
              字段页的内容会自动生成 Markdown；一旦在这里手动编辑，保存时会优先保存这份手写 SKILL.md。
            </p>
          </div>
          <textarea
            value={editableSkillMd}
            onChange={(event) => setEditorDraft((current) => ({ ...current, customSkillMd: event.target.value }))}
            spellCheck={false}
            className="h-[620px] w-full resize-y rounded-lg border border-slate-200 bg-slate-950 p-4 font-mono text-xs leading-6 text-slate-100 outline-none focus:border-indigo-300"
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
              {skillRunResult && (
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <SectionTitle title="试跑结果" meta={`${skillRunResult.score} / 100`} />
                  <p className="mt-3 text-sm leading-6 text-slate-700">{skillRunResult.summary}</p>
                  <pre className="mt-3 max-h-72 overflow-auto whitespace-pre-wrap rounded-lg bg-slate-950 p-4 text-xs leading-6 text-slate-100">
                    {skillRunResult.output}
                  </pre>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {skillRunResult.citations.map((item) => (
                      <span key={item} className="rounded-md bg-slate-100 px-2 py-1 text-[11px] text-slate-600">{item}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

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
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">AI 完善 Skill</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">根据当前编辑内容、试跑任务和材料，自动补强需求、方法论、输出边界和复核点。</p>
          </div>
          <button
            type="button"
            onClick={() => requestModelAction('editor-ai', `${editorDraft.description}\n\n${editorDraft.qaTask}\n\n${trialMaterial}`)}
            disabled={isImprovingEditor}
            className="h-10 shrink-0 rounded-md bg-indigo-950 px-4 text-xs font-semibold text-white transition-colors hover:bg-indigo-800 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isImprovingEditor ? 'AI 完善中...' : 'AI 完善 Skill'}
          </button>
        </div>
        {editorAiResult && (
          <>
            <div className="mt-4 rounded-lg border border-indigo-100 bg-indigo-50 p-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-indigo-950">AI 完善建议</p>
                  <p className="mt-1 text-xs leading-5 text-indigo-800">{editorAiResult.summary}</p>
                  <div className="mt-3 grid gap-3 md:grid-cols-2">
                    <div>
                      <p className="text-[11px] font-semibold text-indigo-700">发现的问题</p>
                      <ul className="mt-1 space-y-1 text-xs leading-5 text-indigo-900">
                        {editorAiResult.issues.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-indigo-700">优化方向</p>
                      <ul className="mt-1 space-y-1 text-xs leading-5 text-indigo-900">
                        {editorAiResult.suggestions.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={applyEditorAiDraft}
                  className="h-9 shrink-0 rounded-md bg-indigo-950 px-4 text-xs font-semibold text-white hover:bg-indigo-800"
                >
                  应用 AI 建议
                </button>
              </div>
            </div>
            {editorAppliedChanges.length > 0 && (
              <div className="mt-3 rounded-lg border border-emerald-200 bg-white p-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <SectionTitle title="已应用的修改" meta={`${editorAppliedChanges.length} 项`} />
                  <button
                    type="button"
                    onClick={undoEditorAiApplication}
                    className="h-8 shrink-0 rounded-md border border-slate-300 bg-white px-3 text-xs font-semibold text-slate-700 hover:border-slate-500"
                  >
                    撤销应用
                  </button>
                </div>
                <div className="mt-3 grid gap-2">
                  {editorAppliedChanges.map((change, index) => (
                    <div key={`${change.field}-${index}`} className="rounded-md border border-slate-100 bg-slate-50 p-3">
                      <p className="text-xs font-semibold text-slate-800">{change.label}</p>
                      <div className="mt-2 grid gap-2 text-[11px] leading-5 text-slate-600 md:grid-cols-2">
                        <div>
                          <p className="font-semibold text-slate-400">应用前</p>
                          <p className="mt-1 whitespace-pre-wrap">{shortChangeText(change.before)}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-emerald-600">应用后</p>
                          <p className="mt-1 whitespace-pre-wrap">{shortChangeText(change.after)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
        <div className="mt-4 flex justify-end gap-2 border-t border-slate-200 pt-4">
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
              <div className="mt-4 grid gap-2 border-t border-slate-100 pt-3 text-[11px] text-slate-500 sm:grid-cols-3">
                <span className="truncate">来源：{skill.sourceName}</span>
                <span>{docStatusForSkill(skill)}</span>
                <span>{licenseLabelForSkill(skill) || '无许可证标签'}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {skill.origin === 'external-open-source' && (
                  <span className={`rounded-md px-2 py-1 text-[10px] font-semibold ${
                    skill.hasSkillMd ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                  }`}>
                    {skill.hasSkillMd ? '含 SKILL.md' : 'SKILL.md 未公开'}
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
    { id: 'full', label: '完整 Markdown', disabled: !selectedMarkdownFiles.full?.content },
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
                基于此编辑
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
                  {selectedSkill.hasSkillMd ? 'README + SKILL.md 已抓取' : 'SKILL.md 未公开'}
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
            <div
              className={`relative mt-4 overflow-hidden transition-[max-height] duration-300 ease-out ${
                isSkillIntroExpanded || !canToggleSkillIntro ? 'max-h-none' : 'max-h-[84px]'
              }`}
            >
              <p className="whitespace-pre-wrap text-sm leading-7 text-slate-700">
                {selectedSkillIntro}
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
                <div className="grid gap-3 md:grid-cols-3">
                  {[
                    ['文档完整性', docStatusForSkill(selectedSkill)],
                    ['开源许可证', selectedSkillLicense || '不适用'],
                    ['来源类型', displayOriginLabel(selectedSkill)],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <p className="text-[11px] font-semibold text-slate-500">{label}</p>
                      <p className="mt-2 text-sm font-semibold text-slate-900">{value}</p>
                    </div>
                  ))}
                </div>
              )}
              {detailDocTab === 'full' && selectedMarkdownFiles.full?.content && (
                <pre className="max-h-[620px] overflow-auto whitespace-pre-wrap rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs leading-6 text-slate-800">
                  {selectedMarkdownFiles.full.content}
                </pre>
              )}
              {detailDocTab === 'readme' && selectedMarkdownFiles.readme?.content && (
                <pre className="max-h-[620px] overflow-auto whitespace-pre-wrap rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs leading-6 text-slate-800">
                  {selectedMarkdownFiles.readme.content}
                </pre>
              )}
              {detailDocTab === 'skill' && selectedMarkdownFiles.skill?.content && (
                <pre className="max-h-[620px] overflow-auto whitespace-pre-wrap rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs leading-6 text-slate-800">
                  {selectedMarkdownFiles.skill.content}
                </pre>
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
              <ul className="mt-2 space-y-1 text-xs leading-5 text-slate-600">
                {selectedSkill.suitableFor.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="mt-5">
              <p className="text-xs font-semibold text-slate-500">适用场景</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {selectedSkill.suitableFor.map((item) => (
                  <Pill key={item} className="border-slate-200 bg-slate-50 text-slate-700">{item}</Pill>
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Knowledge / RAG</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">示例知识源</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
              这里先用一个示例说明 Skill 和知识源怎么衔接。它是占位样例，不代表已经接入真实内部知识库；后续可以替换成文件、模板库或 RAG 检索。
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-4 lg:min-w-[360px]">
            <p className="text-xs font-semibold text-slate-600">一句话逻辑</p>
            <p className="mt-2 text-sm leading-6 text-slate-800">
              先选 Skill 定工作步骤，再选知识库补依据和本所口径。
            </p>
            <p className="mt-3 text-xs leading-5 text-slate-500">
              当前编辑器已选：{selectedKnowledgeSources.length ? selectedKnowledgeSources.map((source) => source.title).join('、') : '暂无'}
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div className="space-y-4">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <SectionTitle title="一次 AI 工作里怎么衔接" meta="用户看到的是流程，不是算法" />
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {[
                ['1. 选 Skill', '确定工作步骤、输入材料、输出格式和律师复核点。'],
                ['2. 推荐知识源', '推荐页会按任务、Skill 领域和关键词，一并给出建议附带的知识源。'],
                ['3. 送模型', '模型按 Skill 工作，并引用知识库里的依据和本所口径生成结果。'],
              ].map(([title, body]) => (
                <div key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{title}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <SectionTitle title="示例知识源" meta="占位示例，可编辑" />
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
                  <span className="rounded-md bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700">
                    示例，不是真实 RAG
                  </span>
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

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <SectionTitle title="编辑示例知识源" meta="仅修改当前页面展示" />
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">名称</span>
                <input
                  value={editableKnowledgeSource.title}
                  onChange={(event) => setEditableKnowledgeSource((current) => ({ ...current, title: event.target.value }))}
                  className="mt-2 h-10 w-full rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-slate-500"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">类型</span>
                <input
                  value={editableKnowledgeSource.type}
                  onChange={(event) => setEditableKnowledgeSource((current) => ({ ...current, type: event.target.value }))}
                  className="mt-2 h-10 w-full rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-slate-500"
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="text-xs font-semibold text-slate-600">说明</span>
              <textarea
                value={editableKnowledgeSource.summary}
                onChange={(event) => setEditableKnowledgeSource((current) => ({ ...current, summary: event.target.value }))}
                className="mt-2 h-24 w-full rounded-md border border-slate-200 p-3 text-sm leading-6 outline-none focus:border-slate-500"
              />
            </label>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">业务领域，用逗号分隔</span>
                <input
                  value={editableKnowledgeSource.practices.join('，')}
                  onChange={(event) => setEditableKnowledgeSource((current) => ({ ...current, practices: event.target.value.split(/[，,]/).map((item) => item.trim()).filter(Boolean) }))}
                  className="mt-2 h-10 w-full rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-slate-500"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-slate-600">关键词，用逗号分隔</span>
                <input
                  value={editableKnowledgeSource.keywords.join('，')}
                  onChange={(event) => setEditableKnowledgeSource((current) => ({ ...current, keywords: event.target.value.split(/[，,]/).map((item) => item.trim()).filter(Boolean) }))}
                  className="mt-2 h-10 w-full rounded-md border border-slate-200 px-3 text-sm outline-none focus:border-slate-500"
                />
              </label>
            </div>
          </section>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-20 lg:self-start">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <SectionTitle title="推荐时怎么使用" meta="自动随 Skill 推荐" />
            <div className="mt-4 space-y-3">
              {[
                ['推荐页', '用户输入任务后，系统先推荐 Skill，并在结果里列出本次建议附带的知识源。'],
                ['复制给 AI', '点击推荐 Skill 的“复制给 AI”时，会自动把已选知识源说明拼进提示词。'],
                ['编辑器 / 试跑', 'AI 完善和运行当前 Skill 时，也会带上当前已选知识源作为参考。'],
              ].map(([title, body]) => (
                <div key={title} className="rounded-lg bg-slate-50 p-3">
                  <p className="text-sm font-semibold text-slate-900">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{body}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg border border-slate-200 p-3">
              <p className="text-xs font-semibold text-slate-600">推荐时是否参考这个示例知识源</p>
              <button
                type="button"
                onClick={() => toggleKnowledgeSource(editableKnowledgeSource.id)}
                className={`mt-3 h-9 w-full rounded-md px-3 text-xs font-semibold ${
                  selectedKnowledgeIds.includes(editableKnowledgeSource.id)
                    ? 'bg-slate-900 text-white hover:bg-slate-700'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-400'
                }`}
              >
                {selectedKnowledgeIds.includes(editableKnowledgeSource.id) ? '推荐时参考' : '推荐时不参考'}
              </button>
            </div>
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
            ['Skill 源库', '导入、更新、下架外部开源 Skill；记录来源、许可证、抓取时间和 SKILL.md 状态。', `${lawveExternalSkills.length} 个外部 Skill`],
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
                                {skill.hasSkillMd ? '含 SKILL.md' : 'SKILL.md 未公开'}
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
                  </div>
                </div>

                <div className="flex min-h-0 flex-col">
                  <SectionTitle title="匹配结果" meta={recommendationResult ? (recommendationResult.mode === 'llm' ? 'LLM' : '模拟 LLM') : '等待输入'} />
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
                      {recommendationResult.matchStage === 'llm' ? (
                        <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-3">
                          <p className="text-xs font-semibold text-indigo-800">匹配阶段：大模型语义检索{recommendationResult.forcedLlm ? '（手动触发）' : '（自动升级）'}</p>
                          <p className="mt-1 text-xs leading-5 text-indigo-700">{recommendationResult.forcedLlm ? '你手动要求用大模型在全部 Skill 库内重新语义检索，下列结果均由大模型给出。' : '本地库未找到高匹配度 Skill，已自动用大模型在知识库内重新语义检索并给出结果。'}</p>
                        </div>
                      ) : recommendationResult.escalatedToLlm ? (
                        <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
                          <p className="text-xs font-semibold text-amber-800">匹配阶段：本地匹配（大模型未启用）</p>
                          <p className="mt-1 text-xs leading-5 text-amber-700">本地库未找到高匹配度 Skill；当前未接入大模型，已返回最接近的项。可补充关键词、上传更具体的材料，或配置大模型后重试。</p>
                        </div>
                      ) : (
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                          <p className="text-xs font-semibold text-slate-600">匹配阶段：本地知识库匹配</p>
                          <p className="mt-1 text-xs leading-5 text-slate-500">已在本地 Skill 库中匹配到相关结果。</p>
                        </div>
                      )}
                      {recommendationResult.matchStage === 'local' && !recommendationResult.escalatedToLlm && (
                        <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-3">
                          <p className="text-xs font-semibold text-indigo-800">本地匹配结果可能不是你预期的？</p>
                          <p className="mt-1 text-xs leading-5 text-indigo-700">可让大模型基于语义在全部 Skill 库中重新检索，结果可能更贴合你的任务。</p>
                          <button
                            onClick={() => generateModelRecommendations(sourceText, '未执行脱敏检查', true)}
                            disabled={isAnalyzing}
                            className="mt-2 rounded-md btn-accent px-3 py-1.5 text-xs font-semibold disabled:cursor-not-allowed"
                          >
                            {isAnalyzing ? '大模型检索中...' : '用大模型重新搜索'}
                          </button>
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

                      <div className="space-y-3">
                        <div>
                          <SectionTitle title="匹配 Skill" meta="按匹配度排序" />
                        </div>
                        {(recommendationResult.recommendations || []).map((item) => {
                          const skill = allSkills.find((candidate) => candidate.id === item.skillId)
                          if (!skill) return null
                          return (
                            <div key={item.skillId} className="rounded-lg border border-slate-200 bg-white p-4">
                              <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span className="rounded-md bg-indigo-50 px-2 py-1 text-[11px] font-semibold text-indigo-700">{formatMatchPercent(item.score)}</span>
                                    {recommendationResult.matchStage === 'llm' && (
                                      <span className="rounded-md bg-indigo-600 px-2 py-1 text-[11px] font-semibold text-white">大模型检索</span>
                                    )}
                                    <p className="text-sm font-semibold text-slate-950">{skill.chineseName}</p>
                                  </div>
                                  <p className="mt-1 text-xs text-slate-500">{skill.practice} · {displayOriginLabel(skill)} · {skill.jurisdiction}</p>
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
                                <button
                                  onClick={() => openSkillEffectTest(skill, item)}
                                  className="rounded-md border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 hover:bg-indigo-100"
                                >
                                  测试效果
                                </button>
                                <button
                                  onClick={() => copyAiPromptForSkill(skill)}
                                  className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:border-slate-400 hover:text-slate-900"
                                >
                                  复制给 AI
                                </button>
                                <button
                                  onClick={() => startEditFromSkill(skill)}
                                  className="rounded-md bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-700"
                                >
                                  基于此编辑
                                </button>
                              </div>
                            </div>
                          )
                        })}
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

      {skillEffectTest && (
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
                <div className="mt-4 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => copyAiPromptForSkill(skillEffectTest.skill)}
                    className="h-9 rounded-md border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 hover:border-slate-400 hover:text-slate-900"
                  >
                    复制完整 Markdown
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
                    基于此编辑
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
