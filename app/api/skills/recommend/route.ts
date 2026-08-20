import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import mammoth from 'mammoth'
import { firmSkills, originLabels, riskLabels } from '@/data/skillPlatform'
import { legalSkillsChinese } from '@/data/legalSkillsChinese'
import type { FirmSkill } from '@/data/skillPlatform'

type PdfjsPage = { getTextContent: () => Promise<{ items: Array<{ str?: string }> }> }
type PdfjsDocument = { numPages: number; getPage: (n: number) => Promise<PdfjsPage> }
type PdfjsModule = {
  getDocument: (opts: { data: Uint8Array; useWorkerFetch?: boolean; isEvalSupported?: boolean }) => { promise: Promise<PdfjsDocument> }
}

type RecommendRequest = {
  action?: 'recommend' | 'optimize'
  purpose?: string
  taskEntrypoint?: string
  text?: string
  fileNames?: string[]
  filePayloads?: { name: string; base64: string }[]
  skillId?: string
  redactionSummary?: string
  forceLlm?: boolean
  knowledgeSources?: {
    id: string
    title: string
    type: string
    summary: string
  }[]
}
type RecommendationResult = {
  mode: string
  summary: string
  taskType: string
  matterStage: string
  riskFlags: string[]
  selectionRule: string
  workflowPlan: string[]
  searchHints: string[]
  recommendedKnowledgeIds: string[]
  fileWarnings?: string[]
  matchStage?: 'local' | 'llm'
  escalatedToLlm?: boolean
  forcedLlm?: boolean
  llmUnavailable?: boolean
  recommendations: {
    skillId: string
    score: number
    role: 'core' | 'specialist' | 'support'
    reasons: string[]
    cautions: string[]
    nextPrompt: string
  }[]
}

type LooseRecommendation = Partial<RecommendationResult['recommendations'][number]> & {
  id?: string
  name?: string
  fit?: string | number
  reason?: string
  expectedOutput?: string[]
  limitation?: string
}

const coreSkillRules = [
  { name: '案件分析', terms: ['案件', '案情', '争议焦点', '诉讼策略', 'case analysis'], preferred: ['filing-timeline'] },
  { name: '事实抽取', terms: ['事实', '抽取', '时间线', '证据摘要', 'fact'], preferred: ['filing-timeline'] },
  { name: '证据目录', terms: ['证据目录', '证据', '举证', 'exhibit'], preferred: ['filing-timeline'] },
  { name: '文书起草', terms: ['起草', '文书', '申请书', '答辩状', '合同草案', 'draft'], preferred: ['contract-drafting', 'nda-one-sided'] },
  { name: '合同风险审查', terms: ['合同', '条款', '审查', '违约', '责任限制', 'contract'], preferred: ['nda-one-sided', 'lawve-nda-reviewer-108', 'lawve-nda-reviewer-197', 'lawve-contract-risk-analyzer-084'] },
  { name: '合规审查', terms: ['合规', '监管', '备案', '安全措施', 'compliance', '数据处理协议', 'dpa', '分包', '分包处理', '跨境传输', '跨境', '供应商', '隐私', '个人信息', '数据安全'], preferred: ['dpa-review'] },
  { name: '法律研究', terms: ['法律研究', '法规', '案例', '检索', '依据', 'research'], preferred: [] },
  { name: '案例检索', terms: ['案例', '判例', '裁判规则', '法院观点'], preferred: [] },
  { name: '脱敏', terms: ['脱敏', '隐私', '个人信息', '客户信息', 'redaction'], preferred: ['dpa-review'] },
  { name: 'OCR', terms: ['扫描件', '图片', 'ocr', 'pdf', '识别'], preferred: [] },
  { name: '劳动雇佣', terms: ['员工', '解除', '劳动', '裁员', '赔偿', '仲裁', '工伤', '劳动合同', '辞退', '离职'], preferred: ['employment-termination'] },
]

const knowledgeRules = [
  { id: 'example-contract-playbook', terms: ['合同', '条款', '违约', '责任限制', 'nda', 'saas', '采购', '审查', '输出', '复核'] },
]

const keywordGroups = [
  { area: '数据保护', terms: ['dpa', 'data', '数据', '隐私', '跨境', 'gdpr', 'pipl', 'dpdp', '个人信息', '数据安全', '网络安全', '数据处理'] },
  { area: '商业合同', terms: ['nda', '保密', '合同', '条款', '采购', 'saas', '责任限制', '违约', '谈判', '供应商'] },
  { area: '争议解决', terms: ['诉讼', '判决', '起诉', '上诉', '仲裁', '证据', '法院', '期限', '执行', '保全'] },
  { area: '公司并购', terms: ['尽调', '并购', '股权', '投资', '资料室', '红旗', '公司', 'dd', '收购'] },
  { area: '劳动雇佣', terms: ['员工', '解除', '劳动', '裁员', '赔偿', '工伤', '劳动合同', '社保'] },
  { area: '知识产权', terms: ['许可', '知识产权', '软件', '商标', '专利', '著作权', '开源', '版权', '技术合作'] },
  { area: '法律研究', terms: ['研究', '法规', '案例', '检索', '判例', '引用', '法律依据', '论文'] },
  { area: '监管合规', terms: ['监管', '合规', '执法', '行政处罚', '备案', '专项检查', '反垄断', '反洗钱', '制裁', '牌照', '准入', '合规评估'] },
  { area: '法律运营', terms: ['法律运营', '知识管理', '案件管理', '流程', '协同', '交付', '团队', '知识库', '运营'] },
  { area: '法律文书', terms: ['法律文书', '起草', '协议', '政策', '申请书', '法律文本', '合同草案', '备忘录', '文书', '法律意见'] },
  { area: '国际法与人权', terms: ['国际法', '人权', '国际法庭', '特别法庭', 'isds', '投资条约', '跨境公共法', 'war crimes'] },
  { area: '办公自动化', terms: ['excel', 'word', 'pdf', '文档处理', '格式转换', 'acrobat', '表格', 'ppt', 'pptx', '文档'] },
  { area: '法律培训', terms: ['考试', '课程', '培训', '学习材料', '内部培训', '法考', '教学'] },
  { area: '金融业务', terms: ['金融', '银行', '投融资', '基金', '证券', '保险', '牌照', '信贷', '理财'] },
  { area: '传媒娱乐', terms: ['内容', '媒体', '娱乐', '体育', '版权', '音乐', '影视'] },
  { area: '科技与知识产权', terms: ['tech', '科技', '技术', '编程', '代码', '自动化'] },
  { area: '技术实验', terms: ['实验', '原型', '探索', '脚本'] },
  { area: 'Skill 构建', terms: ['skill', '构建', '创建', '测试', '包装', '发布', '方法论', 'agent'] },
]
const llmTimeoutMs = 45000
const LOCAL_CONFIDENT_THRESHOLD = 55
const openAiCompatibleModel = process.env.OPENAI_MODEL || process.env.TOKENBUY_MODEL || process.env.ANTHROPIC_MODEL || 'gpt-5.5'

function clampScore(score: number) {
  return Math.max(35, Math.min(99, Math.round(score)))
}

function uniqueItems(items: string[], limit = 6) {
  return Array.from(new Set(items.map((item) => item.trim()).filter(Boolean))).slice(0, limit)
}

function docStatusForSkill(skill: FirmSkill) {
  if (skill.readmeMdPath && skill.skillMdPath) return 'README + SKILL.md'
  if (skill.skillMdPath) return '仅 SKILL.md'
  if (skill.readmeMdPath || skill.mdPath) return '仅 README'
  return '暂无 Markdown'
}

function normalizeText(value: string) {
  return value.toLowerCase()
}

function llmConfig() {
  const explicitOpenAiBase = process.env.OPENAI_BASE_URL
  const explicitOpenAiKey = process.env.OPENAI_API_KEY
  const apiKey = explicitOpenAiBase ? explicitOpenAiKey : process.env.TOKENBUY_API_KEY || explicitOpenAiKey || process.env.ANTHROPIC_API_KEY
  const baseURL = explicitOpenAiBase || process.env.TOKENBUY_BASE_URL || process.env.ANTHROPIC_BASE_URL || 'https://api.okrouter.ai/v1'
  const normalizedBaseURL = baseURL.replace(/\/+$/, '')
  return {
    apiKey,
    chatUrl: normalizedBaseURL.endsWith('/v1') ? `${normalizedBaseURL}/chat/completions` : `${normalizedBaseURL}/v1/chat/completions`,
  }
}

function parseJsonContent(content: string) {
  const cleaned = content.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '')
  return JSON.parse(cleaned)
}

async function callOpenAiCompatibleJson<T>(prompt: string, maxTokens: number): Promise<T> {
  const config = llmConfig()
  if (!config.apiKey) throw new Error('Missing API key')
  const response = await withTimeout(fetch(config.chatUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: openAiCompatibleModel,
      messages: [
        { role: 'system', content: '你只输出合法 JSON，不要输出 Markdown 代码块或解释文字。' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.2,
      max_tokens: maxTokens,
      response_format: { type: 'json_object' },
    }),
  }))
  const text = await response.text()
  if (!response.ok) throw new Error(`${response.status} ${text}`)
  const payload = JSON.parse(text) as { choices?: { message?: { content?: string } }[] }
  const content = payload.choices?.[0]?.message?.content
  if (!content) throw new Error('Empty model response')
  return parseJsonContent(content) as T
}

function withTimeout<T>(promise: Promise<T>, ms = llmTimeoutMs) {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error(`LLM timeout after ${ms}ms`)), ms)
    }),
  ])
}

async function getRecommendationSkills() {
  try {
    const indexPath = path.join(process.cwd(), 'outputs/internal-skills-md/index.json')
    const payload = JSON.parse(await readFile(indexPath, 'utf8')) as { skills?: FirmSkill[] }
    return [...firmSkills, ...legalSkillsChinese, ...(payload.skills || [])]
  } catch {
    return firmSkills
  }
}

function scoreSkillForMatter(skill: FirmSkill, payload: RecommendRequest) {
  const purpose = payload.purpose ?? ''
  const text = payload.text ?? ''
  const fileText = payload.fileNames?.join(' ') ?? ''
  const matter = normalizeText(`${purpose} ${payload.taskEntrypoint ?? ''} ${text} ${fileText}`)
  const haystack = normalizeText([
    skill.name,
    skill.chineseName,
    skill.practice,
    skill.tags.join(' '),
    skill.suitableFor.join(' '),
    skill.description,
    skill.outputFormat,
  ].join(' '))
  const matchedTerms = keywordGroups
    .flatMap((group) => group.terms)
    .filter((term) => matter.includes(normalizeText(term)) && haystack.includes(normalizeText(term)))
  const matchedCore = coreSkillRules.find((rule) => rule.name === payload.taskEntrypoint)
    || coreSkillRules
      .map((rule) => ({
        ...rule,
        count: rule.terms.filter((term) => matter.includes(normalizeText(term))).length,
      }))
      .filter((rule) => rule.count > 0)
      .sort((a, b) => b.count - a.count)[0]
  const preferredBoost = matchedCore?.preferred.includes(skill.id) ? 30 : 0
  const entrypointBoost = payload.taskEntrypoint && (
    haystack.includes(normalizeText(payload.taskEntrypoint))
    || skill.tags.some((tag) => normalizeText(tag).includes(normalizeText(payload.taskEntrypoint!)))
  ) ? 24 : 0
  const practiceHit = matter.includes(normalizeText(skill.practice)) ? 18 : 0
  const suitableHits = skill.suitableFor.filter((item) => matter.includes(normalizeText(item))).length
  const tagHits = skill.tags.filter((tag) => matter.includes(normalizeText(tag))).length
  const notForHits = skill.notFor.filter((item) => matter.includes(normalizeText(item))).length
  const fileBoost = [
    /\.(pdf|png|jpg|jpeg)$/i.test(fileText) && haystack.includes('ocr') ? 18 : 0,
    /\.(docx|doc)$/i.test(fileText) && (haystack.includes('文书') || haystack.includes('draft')) ? 12 : 0,
    /\.(xlsx|xls|csv)$/i.test(fileText) && (haystack.includes('excel') || haystack.includes('数据')) ? 12 : 0,
  ].reduce((sum, item) => sum + item, 0)
  const documentBoost = skill.mdPath || skill.skillMdPath ? 5 : 0
  const internalBoost = skill.origin === 'internal' ? 4 : 0
  const penalty = notForHits * 22
  return clampScore(
    38
    + matchedTerms.length * 7
    + preferredBoost
    + entrypointBoost
    + practiceHit
    + suitableHits * 10
    + tagHits * 6
    + fileBoost
    + documentBoost
    + internalBoost
    + skill.reviewScore * 0.08
    + skill.rating
    - penalty,
  )
}

function explainLocalMatch(skill: FirmSkill, payload: RecommendRequest, taskType: string, index: number) {
  const source = normalizeText(`${payload.purpose ?? ''} ${payload.taskEntrypoint ?? ''} ${payload.text ?? ''} ${payload.fileNames?.join(' ') ?? ''}`)
  const hits = uniqueItems([
    ...skill.tags.filter((tag) => source.includes(normalizeText(tag))),
    ...keywordGroups.flatMap((group) => group.terms.filter((term) => source.includes(normalizeText(term)) && normalizeText(skill.description).includes(normalizeText(term)))),
    payload.taskEntrypoint && skill.suitableFor.some((item) => normalizeText(item).includes(normalizeText(payload.taskEntrypoint!))) ? payload.taskEntrypoint : '',
  ], 4)
  const outputReason = /Markdown README|SKILL\.md 原文/.test(skill.outputFormat)
    ? ''
    : `适合输出：${skill.outputFormat}`
  return uniqueItems([
    hits.length ? `命中任务关键词：${hits.join('、')}` : `与“${taskType}”任务类型相近`,
    outputReason,
    `${originLabels[skill.origin]}，${docStatusForSkill(skill)}`,
    index === 0 ? '作为首选入口' : skill.origin === 'external-open-source' ? '作为专项方法参考' : '作为内部补充方案',
  ], 4)
}

function explainLocalCautions(skill: FirmSkill, payload: RecommendRequest) {
  const source = normalizeText(`${payload.purpose ?? ''} ${payload.text ?? ''}`)
  return uniqueItems([
    riskLabels[skill.risk],
    skill.origin === 'external-open-source' ? '外部开源进入内部使用前需另存并试跑' : '',
    skill.notFor.find((item) => source.includes(normalizeText(item))) ? `可能触及不适用边界：${skill.notFor.find((item) => source.includes(normalizeText(item)))}` : '',
    skill.risk === 'high' ? '建议负责人复核后使用' : '客户交付前需承办律师复核',
  ], 3)
}

function inferMatter(purpose: string, text: string) {
  const source = `${purpose} ${text}`.toLowerCase()
  const matchedAreas = keywordGroups
    .map((group) => ({
      area: group.area,
      count: group.terms.filter((term) => source.includes(term)).length,
    }))
    .filter((item) => item.count > 0)
    .sort((a, b) => b.count - a.count)
  const riskFlags = [
    source.includes('跨境') || source.includes('gdpr') || source.includes('pipl') ? '可能涉及跨境/个人信息合规' : '',
    source.includes('上诉') || source.includes('期限') || source.includes('deadline') ? '存在期限核验要求' : '',
    source.includes('客户') || source.includes('商业秘密') || source.includes('保密') ? '建议按保密材料处理' : '',
  ].filter(Boolean)
  return {
    taskType: matchedAreas[0]?.area ?? '通用法律工作',
    matterStage: purpose.includes('审查') || text.includes('审查') ? '审查/分析阶段' : '材料整理与初步判断阶段',
    riskFlags: riskFlags.length ? riskFlags : ['需由承办律师确认适用边界'],
  }
}

function inferRecommendationStrategy(purpose: string, text: string, recommendations: { skill: FirmSkill; score: number }[]) {
  const source = `${purpose} ${text}`.toLowerCase()
  const matchedCore = coreSkillRules
    .map((rule) => ({
      ...rule,
      count: rule.terms.filter((term) => source.includes(term.toLowerCase())).length,
    }))
    .filter((rule) => rule.count > 0)
    .sort((a, b) => b.count - a.count)
  const recommendedKnowledgeIds = knowledgeRules
    .filter((rule) => rule.terms.some((term) => source.includes(term.toLowerCase())))
    .map((rule) => rule.id)
  if (!recommendedKnowledgeIds.includes('example-contract-playbook')) recommendedKnowledgeIds.push('example-contract-playbook')

  const practices = Array.from(new Set(recommendations.map(({ skill }) => skill.practice))).slice(0, 3)
  const externalHits = recommendations.filter(({ skill }) => skill.origin === 'external-open-source').length
  const rule = matchedCore[0]?.name
    ? `优先匹配“${matchedCore[0].name}”相关 Skill。`
    : '优先匹配最接近处理目的的 Skill。'

  return {
    selectionRule: rule,
    coreNames: matchedCore.slice(0, 3).map((ruleItem) => ruleItem.name),
    workflowPlan: [
      '打开匹配度最高的 Skill 查看适用边界。',
      externalHits ? '外部开源 Skill 如需内部使用，先基于此编辑并另存为我的 Skill。' : '内部示例 Skill 可直接进入编辑器试跑。',
      '复制给 AI 或进入编辑器试跑，输出前由承办律师复核。',
    ],
    searchHints: [
      ...matchedCore.slice(0, 2).map((ruleItem) => ruleItem.name),
      ...practices,
      ...keywordGroups.flatMap((group) => group.terms.filter((term) => source.includes(term))).slice(0, 5),
    ].filter(Boolean).slice(0, 8),
    recommendedKnowledgeIds,
  }
}

function localRecommendWithSkills(payload: RecommendRequest, skills: FirmSkill[]) {
  const purpose = payload.purpose?.trim() || '未填写处理目的'
  const text = payload.text?.trim() || ''
  const matter = inferMatter(purpose, text)
  const ranked = [...skills]
    .map((skill) => ({ skill, score: scoreSkillForMatter(skill, payload) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
  const strategy = inferRecommendationStrategy(purpose, text, ranked)
  let previousDisplayScore = 100
  const recommendations = ranked.map(({ skill, score }, index) => {
    const displayScore = index === 0 ? score : Math.min(score, previousDisplayScore - 4)
    previousDisplayScore = displayScore
    return {
      skillId: skill.id,
      score: Math.max(35, displayScore),
      role: index === 0 || strategy.coreNames.some((name) => skill.chineseName.includes(name) || skill.description.includes(name)) ? 'core' as const : skill.origin === 'external-open-source' ? 'specialist' as const : 'support' as const,
      reasons: explainLocalMatch(skill, payload, matter.taskType, index),
      cautions: explainLocalCautions(skill, payload),
      nextPrompt: `请基于本次任务目的“${purpose}”，将 ${skill.chineseName} 调整为：先识别材料类型和缺失信息，再输出风险清单、引用依据、追问问题和律师复核项。`,
    }
  })

  return {
    mode: process.env.SKILL_RECOMMENDER_USE_LLM === 'true' && process.env.ANTHROPIC_API_KEY ? 'local-fallback' : 'mock-llm',
    summary: `${purpose === '未填写处理目的' ? '当前任务' : purpose}，优先匹配${matter.taskType}相关 Skill。`,
    taskType: matter.taskType,
    matterStage: matter.matterStage,
    riskFlags: matter.riskFlags,
    selectionRule: strategy.selectionRule,
    workflowPlan: strategy.workflowPlan,
    searchHints: strategy.searchHints,
    recommendedKnowledgeIds: strategy.recommendedKnowledgeIds,
    recommendations,
  } satisfies RecommendationResult
}

function normalizeRecommendationResult(result: unknown, fallback: RecommendationResult, payload: RecommendRequest, skills: FirmSkill[]): RecommendationResult {
  if (!result || typeof result !== 'object') return fallback
  const value = result as Partial<RecommendationResult>
  if (!Array.isArray(value.recommendations) || value.recommendations.length === 0) {
    console.error('LLM recommendation returned no usable recommendations', {
      keys: Object.keys(value),
      recommendationType: Array.isArray(value.recommendations) ? 'array' : typeof value.recommendations,
    })
    return fallback
  }
  const workflowPlan = Array.isArray(value.workflowPlan) ? value.workflowPlan.filter((item): item is string => typeof item === 'string') : []
  const searchHints = Array.isArray(value.searchHints) ? value.searchHints.filter((item): item is string => typeof item === 'string') : []
  const riskFlags = Array.isArray(value.riskFlags) ? value.riskFlags.filter((item): item is string => typeof item === 'string') : []
  const recommendedKnowledgeIds = Array.isArray(value.recommendedKnowledgeIds) ? value.recommendedKnowledgeIds.filter((item): item is string => typeof item === 'string') : []
  const skillById = new Map(skills.map((skill) => [skill.id, skill]))
  const normalized = {
    mode: typeof value.mode === 'string' ? value.mode : 'llm',
    summary: typeof value.summary === 'string' ? value.summary : fallback.summary,
    taskType: typeof value.taskType === 'string' ? value.taskType : fallback.taskType,
    matterStage: typeof value.matterStage === 'string' ? value.matterStage : fallback.matterStage,
    riskFlags: riskFlags.length ? riskFlags : fallback.riskFlags,
    selectionRule: typeof value.selectionRule === 'string' ? value.selectionRule : fallback.selectionRule,
    workflowPlan: workflowPlan.length ? workflowPlan : fallback.workflowPlan,
    searchHints: searchHints.length ? searchHints : fallback.searchHints,
    recommendedKnowledgeIds: recommendedKnowledgeIds.length ? recommendedKnowledgeIds : fallback.recommendedKnowledgeIds,
    recommendations: value.recommendations
      .filter((item) => item && typeof item === 'object')
      .map((item, index) => {
        const recommendation = item as LooseRecommendation
        const fitScore = typeof recommendation.fit === 'number'
          ? recommendation.fit
          : recommendation.fit === '高'
            ? 92
            : recommendation.fit === '中'
              ? 78
              : recommendation.fit === '低'
                ? 62
                : 92 - index * 6
        const reasons = Array.isArray(recommendation.reasons)
          ? recommendation.reasons.map(String)
          : [
              recommendation.reason,
              ...(Array.isArray(recommendation.expectedOutput) && recommendation.expectedOutput.length
                ? [`预期输出：${recommendation.expectedOutput.join('、')}`]
                : []),
            ].filter((reason): reason is string => Boolean(reason))
        const cautions = Array.isArray(recommendation.cautions)
          ? recommendation.cautions.map(String)
          : [recommendation.limitation || '客户交付前需律师复核']
        const skillId = String(recommendation.skillId || recommendation.id || '')
        const skill = skillById.get(skillId)
        const usefulReasons = reasons.filter((reason) => !/与任务相关|可作为参考|模型推荐/.test(reason))
        const usefulCautions = cautions.filter((caution) => !/客户交付前需律师复核/.test(caution))
        return {
          skillId,
          score: clampScore(Number.isFinite(Number(recommendation.score)) ? Number(recommendation.score) : fitScore),
          role: recommendation.role === 'core' || recommendation.role === 'specialist' || recommendation.role === 'support' ? recommendation.role : 'specialist',
          reasons: skill && usefulReasons.length === 0 ? explainLocalMatch(skill, payload, fallback.taskType, index) : uniqueItems(usefulReasons, 3),
          cautions: skill && usefulCautions.length === 0 ? explainLocalCautions(skill, payload) : uniqueItems(usefulCautions, 2),
          nextPrompt: typeof recommendation.nextPrompt === 'string' ? recommendation.nextPrompt : fallback.recommendations[0]?.nextPrompt ?? '',
        }
      })
      .filter((item) => item.skillId && skillById.has(item.skillId))
      .sort((a, b) => b.score - a.score)
      .map((item, index, array) => ({
        ...item,
        score: index > 0 && item.score >= array[index - 1].score ? Math.max(35, array[index - 1].score - 4) : item.score,
      }))
      .slice(0, 5),
  }
  if (normalized.recommendations.length === 0) {
    console.error('LLM recommendation items were missing skillId', {
      firstItem: value.recommendations[0],
    })
  }
  return normalized.recommendations.length > 0 ? normalized : fallback
}

async function callClaudeRecommend(payload: RecommendRequest) {
  const skills = await getRecommendationSkills()
  const local = localRecommendWithSkills(payload, skills)
  const topLocalScore = local.recommendations[0]?.score ?? 0
  // 本地优先级：仅当本地最高匹配分达到阈值，才视为「本地已找到相应 Skill」直接返回；
  // 否则升级大模型在知识库内做语义检索（边缘/弱匹配的法律输入也能借大模型补全）。
  const localConfident = topLocalScore >= LOCAL_CONFIDENT_THRESHOLD

  // 用户手动要求用大模型重新检索（即使本地已匹配到结果）
  if (payload.forceLlm) {
    return tryLlmSearch(payload, skills, local, true)
  }

  if (localConfident) {
    return { ...local, matchStage: 'local' }
  }

  // 本地未找到高匹配度 Skill → 升级使用大模型在知识库内做语义检索
  return tryLlmSearch(payload, skills, local, false)
}

// 尝试用大模型在全部 Skill 库内做语义检索；大模型未配置或失败时退回本地结果。
// forced=true 表示用户手动触发，false 表示本地低分自动升级。
async function tryLlmSearch(payload: RecommendRequest, skills: FirmSkill[], local: RecommendationResult, forced: boolean): Promise<RecommendationResult> {
  const config = llmConfig()
  if (process.env.SKILL_RECOMMENDER_USE_LLM === 'true' && config.apiKey) {
    try {
      const result = await callLlmSearch(payload, skills, local)
      if (result === local) {
        // 大模型未返回可用结果，退回本地最接近项
        return { ...local, matchStage: 'local', llmUnavailable: true, escalatedToLlm: true, forcedLlm: forced }
      }
      return { ...result, matchStage: 'llm', escalatedToLlm: true, forcedLlm: forced }
    } catch (error) {
      console.error(error)
      return { ...local, matchStage: 'local', llmUnavailable: true, escalatedToLlm: true, forcedLlm: forced }
    }
  }
  // 未配置大模型 → 返回本地最接近项，并标注大模型不可用
  return { ...local, matchStage: 'local', llmUnavailable: true, escalatedToLlm: true, forcedLlm: forced }
}

async function callLlmSearch(payload: RecommendRequest, skills: FirmSkill[], fallback: RecommendationResult) {
  const candidates = [...skills]
    .map((skill) => ({ skill, score: scoreSkillForMatter(skill, payload) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 30)
    .map(({ skill }) => ({
      id: skill.id,
      name: skill.chineseName,
      englishName: skill.name,
      practice: skill.practice,
      origin: originLabels[skill.origin],
      risk: riskLabels[skill.risk],
      description: skill.description,
      tags: skill.tags,
      suitableFor: skill.suitableFor,
      notFor: skill.notFor,
      outputFormat: skill.outputFormat,
      documentStatus: docStatusForSkill(skill),
      hasSkillMd: Boolean(skill.skillMdPath || skill.hasSkillMd),
    }))

  const result = await callOpenAiCompatibleJson<RecommendationResult>(`你是律所内部 Skill 推荐系统。本地关键词匹配未找到高匹配度 Skill，请改用语义理解从候选 Skill 中检索最适合的 3-5 个。只返回 JSON，结构必须包含：mode、summary、taskType、matterStage、riskFlags、selectionRule、workflowPlan、searchHints、recommendedKnowledgeIds、recommendations。mode 固定为 "llm"。

推荐逻辑必须采用两层：
1. 任务模糊或大类法律工作：先选核心 Skill，负责案件分析、事实抽取、证据目录、文书起草、合同风险审查、合规审查、法律研究、案例检索、脱敏、OCR 等入口判断。
2. 任务明确：再选扩展库专项 Skill，例如并购/交易文件、数据隐私、诉讼争议、资本市场、劳动雇佣、知识产权等。
3. 复杂任务：用核心 Skill 定总体框架，扩展 Skill 做具体产出。每个推荐项 role 必须标为 core、specialist 或 support。
4. 在合同、投资接触、商业谈判语境中，NDA 默认指 Non-Disclosure Agreement / 保密协议，不要解释为 New Drug Application。
5. 只能从候选 Skill 中选择 skillId，不得虚构 Skill。
6. 如果候选 Skill 的 notFor 明确覆盖用户任务，不要推荐；除非只是作为反例，并且 score 必须低于 55。

输出约束：
1. summary 用一句话说明“这是什么任务、目前能匹配什么”，不要把材料缺口、风险提示、操作路径都塞进 summary。
2. riskFlags 只放需要补充或注意的事项，例如“缺少合同正文”“需确认客户立场”。每项不超过 24 个汉字。
3. selectionRule 只用一句短句说明匹配策略，不要写“复杂任务：先用核心 Skill...”这类模板话。
4. workflowPlan 只给 2-3 个下一步动作，每项不超过 24 个汉字。
5. searchHints 只能放短关键词，每项不超过 16 个汉字或 4 个英文词；不得放完整句子、材料要求、条款清单或操作建议。
6. 每个 recommendations[i].score 必须根据匹配强弱拉开差距，不要所有推荐都是同一个分数。
7. 每个 reasons 只写 1-3 条，必须引用任务文本、处理目的、标签、适用场景或输出格式中的具体信号。
8. 每个 cautions 只写 1-2 条，必须是材料缺口、不适用边界、外部开源使用限制、保密/复核限制之一。
9. 不要输出“与任务相关”“可作为参考”这类空泛理由。

任务目的：${payload.purpose || '未填写'}
用户指定任务类型：${payload.taskEntrypoint || '未指定'}
预留上传文件名：${payload.fileNames?.join('、') || '无'}
脱敏摘要：${payload.redactionSummary || '未执行'}
知识库引用：${JSON.stringify(payload.knowledgeSources || [])}
待处理文本：
${(payload.text || '').slice(0, 8000)}

候选 Skill（本地预筛的最接近 30 个，请基于语义进一步挑选）：
${JSON.stringify(candidates)}`, 2200)
  return normalizeRecommendationResult(result, fallback, payload, skills)
}

async function optimizeSkill(payload: RecommendRequest) {
  const skills = await getRecommendationSkills()
  const skill = skills.find((item) => item.id === payload.skillId)
  if (!skill) throw new Error('Skill not found')
  const purpose = payload.purpose?.trim() || '本次律师任务'
  const matter = inferMatter(purpose, payload.text ?? '')
  const config = llmConfig()
  if (process.env.SKILL_RECOMMENDER_USE_LLM === 'true' && config.apiKey) {
    try {
      return await callOpenAiCompatibleJson(`你是律所内部 Skill 编辑顾问。请根据律师本次任务，把候选 Skill 优化成可进入内部编辑器的 README 草案。只返回 JSON，结构必须包含 mode、skillId、title、optimizedReadme。mode 固定为 "llm"，skillId 固定为 "${skill.id}"。

本次任务目的：${purpose}
脱敏摘要：${payload.redactionSummary || '未执行'}
知识库引用：${JSON.stringify(payload.knowledgeSources || [])}
待处理文本：
${(payload.text || '').slice(0, 8000)}

候选 Skill：
${JSON.stringify({
  id: skill.id,
  name: skill.name,
  chineseName: skill.chineseName,
  practice: skill.practice,
  risk: riskLabels[skill.risk],
  origin: originLabels[skill.origin],
  description: skill.description,
  workflow: skill.workflow,
  outputFormat: skill.outputFormat,
  notFor: skill.notFor,
  mdPath: skill.mdPath,
})}

优化要求：
1. 明确任务触发条件、输入材料、处理步骤、输出结构、律师复核点。
2. 外部开源来源只能作为参考，不得写成已发布内部标准。
3. 对高风险任务写清人工复核和保密边界。
4. Markdown 正文要能直接保存进内部编辑 Skill。`, 2600)
    } catch (error) {
      console.error(error)
    }
  }
  return {
    mode: process.env.SKILL_RECOMMENDER_USE_LLM === 'true' && process.env.ANTHROPIC_API_KEY ? 'local-fallback' : 'mock-llm',
    skillId: skill.id,
    title: `${skill.chineseName} · 任务化优化草案`,
    optimizedReadme: [
      `## 本次任务目标`,
      purpose,
      '',
      `## 建议使用方式`,
      `1. 先按“${matter.taskType}”识别材料类型、客户目标和关键期限。`,
      '2. 抽取事实、条款、法域、金额、日期、主体和缺失材料。',
      '3. 将输出拆为结论摘要、风险清单、依据位置、追问问题、律师复核项。',
      '',
      `## 风险与复核`,
      `- ${matter.riskFlags.join('\n- ')}`,
      `- 当前 Skill 风险等级：${riskLabels[skill.risk]}`,
      `- 客户交付前必须由承办律师复核，${skill.risk === 'high' ? '并建议业务负责人复核。' : '必要时提交负责人抽样复核。'}`,
      '',
      `## 推荐输出格式`,
      skill.outputFormat,
    ].join('\n'),
  }
}

export async function POST(req: NextRequest) {
  try {
    const payload = (await req.json()) as RecommendRequest
    if (payload.action === 'optimize') {
      return NextResponse.json(await optimizeSkill(payload))
    }
    const { text: uploadedText, warnings } = await resolveUploadedText(payload)
    const mergedPayload: RecommendRequest = uploadedText
      ? { ...payload, text: [payload.text, uploadedText].filter(Boolean).join('\n\n') }
      : payload
    const result = await callClaudeRecommend(mergedPayload)
    return NextResponse.json({ ...result, fileWarnings: warnings })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: '推荐分析失败，请重试' }, { status: 500 })
  }
}

async function resolveUploadedText(payload: RecommendRequest): Promise<{ text: string; warnings: string[] }> {
  const payloads = payload.filePayloads ?? []
  if (payloads.length === 0) return { text: '', warnings: [] }
  const parts: string[] = []
  const warnings: string[] = []
  for (const item of payloads) {
    const buf = Buffer.from(item.base64, 'base64')
    const ext = item.name.split('.').pop()?.toLowerCase() ?? ''
    try {
      if (ext === 'docx' || ext === 'doc') {
        const { value } = await mammoth.extractRawText({ buffer: buf })
        if (value && value.trim()) parts.push(value)
        else warnings.push(`${item.name}：未读取到正文，可能是空文档或图片型文件。`)
      } else if (ext === 'pdf') {
        const pdfjs = await import('unpdf/pdfjs') as PdfjsModule
        const doc = await pdfjs.getDocument({ data: new Uint8Array(buf), useWorkerFetch: false, isEvalSupported: false }).promise
        const pageTexts: string[] = []
        for (let i = 1; i <= doc.numPages; i++) {
          const page = await doc.getPage(i)
          const content = await page.getTextContent()
          pageTexts.push(content.items.map((item) => item.str ?? '').join(' '))
        }
        const extracted = pageTexts.join('\n').trim()
        if (extracted) parts.push(extracted)
        else warnings.push(`${item.name}：未能从 PDF 中提取文字，可能是扫描件/图片型 PDF，建议先做 OCR 或将文本粘贴到左侧输入框。`)
      } else if (['txt', 'md', 'markdown', 'csv', 'tsv', 'json', 'log'].includes(ext) || ext === '') {
        const txt = buf.toString('utf-8')
        if (txt.trim()) parts.push(txt)
        else warnings.push(`${item.name}：文件内容为空。`)
      }
    } catch (e) {
      const reason = e instanceof Error ? e.message : String(e)
      console.error('resolveUploadedText error for', item.name, ext, reason)
      warnings.push(`${item.name}：文件解析失败（${reason}），可换用 TXT / Word 或将文本粘贴到左侧输入框。`)
    }
  }
  return { text: parts.join('\n\n'), warnings }
}
