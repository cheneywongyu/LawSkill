import { NextRequest, NextResponse } from 'next/server'
import { riskLabels } from '@/data/skillPlatform'
import type { FirmSkill, RiskLevel } from '@/data/skillPlatform'

export const dynamic = 'force-dynamic'

type EditorDraftPayload = {
  name: string
  chineseName: string
  practice: string
  description: string
  owner: string
  jurisdiction: string
  risk: RiskLevel
  inputMaterials: string
  checklist: string
  prohibited: string
  deliverableTemplate: string
  outputFormat: string
  qaTask: string
  versionNote: string
  approvalNote: string
}

type EditorAiRequest = {
  sourceSkill: FirmSkill
  draft: EditorDraftPayload
  uploadNames?: string[]
  sampleText?: string
  redactionSummary?: string
  knowledgeSources?: {
    id: string
    title: string
    type: string
    summary: string
  }[]
}

type EditorAiResult = {
  mode: string
  summary: string
  issues: string[]
  suggestions: string[]
  draft: Partial<EditorDraftPayload>
}

const llmTimeoutMs = 45000
const openAiCompatibleModel = process.env.OPENAI_MODEL || process.env.TOKENBUY_MODEL || process.env.ANTHROPIC_MODEL || 'gpt-5.5'

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

function localImprove(payload: EditorAiRequest): EditorAiResult {
  const { sourceSkill, draft, uploadNames = [] } = payload
  const reviewLine = draft.risk === 'high'
    ? '高风险输出必须由业务负责人或合伙人复核后才能进入客户交付。'
    : '输出进入客户交付前应由承办律师复核，必要时由负责人抽样复核。'
  return {
    mode: process.env.SKILL_RECOMMENDER_USE_LLM === 'true' && process.env.ANTHROPIC_API_KEY ? 'local-fallback' : 'mock-llm',
    summary: `已按${draft.practice || sourceSkill.practice}律师工作流补全触发条件、输入材料、审查步骤、交付模板和复核边界；参考 ${payload.knowledgeSources?.length || 0} 个知识库来源。`,
    issues: [
      '需要把适用场景、禁止事项和人工复核点写得更明确。',
      '需要让输出模板更接近律师可复核的工作底稿，而不是普通摘要。',
      uploadNames.length > 0 ? '上传材料已记录文件名，后续应补充材料解析和权限校验。' : '尚未上传样例材料，可后续补充测试样本。',
    ],
    suggestions: [
      '把任务拆成材料识别、事实抽取、风险判断、依据定位、追问清单、律师复核六段。',
      '对客户敏感信息、期限、法域差异和结论不确定性增加强制提醒。',
      '发布前保留草稿试跑和负责人签核记录。',
    ],
    draft: {
      description: draft.description || `用于协助律师处理${draft.practice || sourceSkill.practice}相关日常任务，先整理材料与事实，再输出风险、依据、追问和复核项。`,
      inputMaterials: [
        '客户背景、项目阶段、处理目的和时间要求。',
        '待处理文本、合同/邮件/证据/资料清单及其版本信息。',
        '适用法域、客户口径、历史模板、团队已有审查标准。',
        `附件记录：${uploadNames.length ? uploadNames.join('、') : '暂无上传附件'}`,
        `知识库引用：${payload.knowledgeSources?.map((item) => item.title).join('、') || '未选择'}`,
      ].join('\n'),
      checklist: [
        `1. 确认任务是否属于 ${draft.practice || sourceSkill.practice}，并识别客户目标。`,
        '2. 抽取主体、日期、金额、期限、条款、证据位置和缺失材料。',
        '3. 按风险等级列出关键问题，并标注依据来源或材料位置。',
        '4. 区分可自动整理的事实与必须由律师判断的法律结论。',
        '5. 生成追问清单、复核清单和下一步建议。',
      ].join('\n'),
      prohibited: [
        draft.prohibited,
        '不得替代律师作出最终法律意见或胜诉/合规保证。',
        '不得在缺少材料、法域或授权范围时给出确定结论。',
        '不得删除不确定事项、客户补充材料和人工复核提示。',
      ].filter(Boolean).join('\n'),
      deliverableTemplate: [
        `# ${draft.chineseName || sourceSkill.chineseName}`,
        '',
        '## 一、结论摘要',
        '- 核心判断：',
        '- 关键风险：',
        '- 建议动作：',
        '',
        '## 二、材料与事实',
        '- 已审材料：',
        '- 关键事实：',
        '- 缺失材料：',
        '',
        '## 三、分析与依据',
        '- 相关条款/证据/法规：',
        '- 风险分级：',
        '- 不确定事项：',
        '',
        '## 四、追问清单',
        '- 需客户补充：',
        '- 需团队确认：',
        '',
        '## 五、律师复核',
        '- 承办律师复核：',
        '- 负责人复核：',
      ].join('\n'),
      outputFormat: '输出为结构化 Markdown，必须包含结论摘要、材料事实、分析依据、追问清单和律师复核项；涉及引用时标注材料位置、条款、页码或来源。',
      qaTask: draft.qaTask || `使用一份脱敏的${draft.practice || sourceSkill.practice}样例材料试跑，检查是否能识别缺失信息、关键风险和律师复核事项。`,
      versionNote: [
        draft.versionNote,
        '- AI 完善：补充输入材料、边界、复核点和交付模板。',
        `- 当前风险等级：${riskLabels[draft.risk]}。`,
      ].filter(Boolean).join('\n'),
      approvalNote: [
        draft.approvalNote,
        `AI 完善后复核要求：${reviewLine}`,
        '知识管理需确认标签、版本、适用范围和测试样本记录。',
      ].filter(Boolean).join('\n'),
    },
  }
}

function normalizeResult(value: unknown, fallback: EditorAiResult): EditorAiResult {
  if (!value || typeof value !== 'object') return fallback
  const result = value as Partial<EditorAiResult>
  return {
    mode: typeof result.mode === 'string' ? result.mode : 'llm',
    summary: typeof result.summary === 'string' ? result.summary : fallback.summary,
    issues: Array.isArray(result.issues) ? result.issues.map(String).slice(0, 6) : fallback.issues,
    suggestions: Array.isArray(result.suggestions) ? result.suggestions.map(String).slice(0, 6) : fallback.suggestions,
    draft: result.draft && typeof result.draft === 'object' ? result.draft : fallback.draft,
  }
}

async function improveWithModel(payload: EditorAiRequest) {
  const fallback = localImprove(payload)
  const config = llmConfig()
  if (process.env.SKILL_RECOMMENDER_USE_LLM !== 'true' || !config.apiKey) return fallback

  try {
    const result = await callOpenAiCompatibleJson<EditorAiResult>(`你是律所内部 AI Skill 编辑顾问。请完善当前“我的 Skill”草稿，使其更适合律师日常工作。只返回 JSON，结构必须包含 mode、summary、issues、suggestions、draft。mode 固定为 "llm"。

要求：
1. 不改变律师的业务意图，只补全结构、边界、复核点和可执行流程。
2. 不给出确定法律意见，不承诺胜诉、合规或监管结论。
3. draft 字段只返回需要写回编辑器的字段，可包含 description、inputMaterials、checklist、prohibited、deliverableTemplate、outputFormat、qaTask、versionNote、approvalNote。
4. 输出要适合法律服务团队试跑、评审和发布。

来源 Skill：
${JSON.stringify(payload.sourceSkill)}

当前草稿：
${JSON.stringify(payload.draft)}

上传文件名：
${payload.uploadNames?.join('、') || '无'}

脱敏摘要：
${payload.redactionSummary || '未执行'}

试跑/样例文本：
${payload.sampleText?.slice(0, 6000) || '无'}

知识库引用：
${JSON.stringify(payload.knowledgeSources || [])}`, 3200)
    return normalizeResult(result, fallback)
  } catch (error) {
    console.error(error)
    return fallback
  }
}

export async function POST(req: NextRequest) {
  try {
    const payload = (await req.json()) as EditorAiRequest
    return NextResponse.json(await improveWithModel(payload))
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'AI 完善失败，请稍后重试' }, { status: 500 })
  }
}
