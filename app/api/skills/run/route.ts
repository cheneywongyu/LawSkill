import { NextRequest, NextResponse } from 'next/server'
import type { FirmSkill } from '@/data/skillPlatform'

export const dynamic = 'force-dynamic'

type RunDraft = {
  chineseName: string
  practice: string
  description: string
  checklist: string
  prohibited: string
  deliverableTemplate: string
  outputFormat: string
  qaTask: string
}

type KnowledgeSource = {
  id: string
  title: string
  type: string
  summary: string
}

type SkillRunRequest = {
  sourceSkill: FirmSkill
  draft: RunDraft
  material: string
  sanitizedMaterial: string
  redactionSummary?: string
  knowledgeSources?: KnowledgeSource[]
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

function localRun(payload: SkillRunRequest): SkillRunResult {
  const material = payload.sanitizedMaterial || payload.material || '未提供试跑材料'
  const knowledge = payload.knowledgeSources || []
  const hasCitation = /第.{0,8}条|条款|页|判决|法规|合同|邮件|证据/.test(material)
  const hasReview = /复核|律师|合伙人|负责人/.test(payload.draft.checklist + payload.draft.outputFormat)
  const score = Math.min(96, 58 + (hasCitation ? 16 : 0) + (hasReview ? 12 : 0) + Math.min(10, knowledge.length * 4))
  const passed = score >= 75
  return {
    mode: process.env.SKILL_RECOMMENDER_USE_LLM === 'true' && process.env.ANTHROPIC_API_KEY ? 'local-fallback' : 'mock-llm',
    summary: `已按“${payload.draft.chineseName || payload.sourceSkill.chineseName}”完成一次脱敏试跑，材料长度 ${material.length} 字。`,
    output: [
      `# ${payload.draft.chineseName || payload.sourceSkill.chineseName} · 试跑输出`,
      '',
      '## 一、材料识别',
      `- 业务类型：${payload.draft.practice || payload.sourceSkill.practice}`,
      `- 脱敏状态：${payload.redactionSummary || '未发现需替换的敏感信息'}`,
      `- 知识库引用：${knowledge.length ? knowledge.map((item) => item.title).join('、') : '未选择'}`,
      '',
      '## 二、初步结论',
      '- 当前材料可进入工作底稿整理，但客户交付前仍需承办律师复核。',
      '- 建议优先核对主体、日期、条款依据、缺失材料和授权范围。',
      '',
      '## 三、风险与追问',
      '- 请确认材料是否为最终版本。',
      '- 请补充关键条款、证据页码或客户确认口径。',
      '- 对不确定事项保留“需律师判断”标记。',
      '',
      '## 四、下一步',
      '- 按模板生成正式底稿。',
      '- 将失败点、人工修改点记录到评估系统。',
    ].join('\n'),
    citations: [
      knowledge[0]?.title || '当前试跑材料',
      payload.draft.outputFormat || '输出格式要求',
    ],
    followUps: ['补充材料版本和来源', '确认是否可用于客户交付', '记录人工修改点'],
    score,
    passed,
    failureReason: passed ? '' : '引用依据或复核规则不足',
  }
}

function normalize(value: unknown, fallback: SkillRunResult): SkillRunResult {
  if (!value || typeof value !== 'object') return fallback
  const result = value as Partial<SkillRunResult>
  return {
    mode: typeof result.mode === 'string' ? result.mode : 'llm',
    summary: typeof result.summary === 'string' ? result.summary : fallback.summary,
    output: typeof result.output === 'string' ? result.output : fallback.output,
    citations: Array.isArray(result.citations) ? result.citations.map(String).slice(0, 6) : fallback.citations,
    followUps: Array.isArray(result.followUps) ? result.followUps.map(String).slice(0, 6) : fallback.followUps,
    score: Number.isFinite(Number(result.score)) ? Number(result.score) : fallback.score,
    passed: typeof result.passed === 'boolean' ? result.passed : fallback.passed,
    failureReason: typeof result.failureReason === 'string' ? result.failureReason : fallback.failureReason,
  }
}

async function runWithModel(payload: SkillRunRequest) {
  const fallback = localRun(payload)
  const config = llmConfig()
  if (process.env.SKILL_RECOMMENDER_USE_LLM !== 'true' || !config.apiKey) return fallback

  try {
    const result = await callOpenAiCompatibleJson<SkillRunResult>(`你是律所内部 Skill 试跑引擎。请严格基于已脱敏材料、Skill 草稿和知识库引用生成一次试跑输出。只返回 JSON，结构必须包含 mode、summary、output、citations、followUps、score、passed、failureReason。mode 固定为 "llm"。

要求：
1. 不给客户交付级最终法律意见。
2. 明确引用来源、缺失材料、追问项和律师复核点。
3. score 用于评估本次试跑质量，0-100；passed 表示是否可进入人工复核。
4. 如脱敏摘要显示替换过敏感信息，不要尝试还原。

Skill 草稿：
${JSON.stringify(payload.draft)}

脱敏摘要：
${payload.redactionSummary || '无'}

知识库引用：
${JSON.stringify(payload.knowledgeSources || [])}

已脱敏试跑材料：
${payload.sanitizedMaterial.slice(0, 10000)}`, 3200)
    return normalize(result, fallback)
  } catch (error) {
    console.error(error)
    return fallback
  }
}

export async function POST(req: NextRequest) {
  try {
    const payload = (await req.json()) as SkillRunRequest
    return NextResponse.json(await runWithModel(payload))
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Skill 试跑失败，请重试' }, { status: 500 })
  }
}
