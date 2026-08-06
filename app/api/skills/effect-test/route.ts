import { NextRequest, NextResponse } from 'next/server'
import type { FirmSkill } from '@/data/skillPlatform'

export const dynamic = 'force-dynamic'

type EffectTestRequest = {
  purpose: string
  text: string
  fileNames?: string[]
  skill: FirmSkill
  skillMarkdown: string
  recommendation?: {
    score: number
    reasons: string[]
    cautions: string[]
  }
}

type EffectTestResult = {
  mode: string
  withoutSkill: string
  withSkill: string
  comparison: string[]
}

const llmTimeoutMs = 90000
const openAiCompatibleModel = process.env.OPENAI_MODEL || process.env.TOKENBUY_MODEL || process.env.ANTHROPIC_MODEL || 'gpt-5.5'
const maxMaterialChars = 3200
const maxSkillMarkdownChars = 2200

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

function withTimeout<T>(promise: Promise<T>, ms = llmTimeoutMs) {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error(`LLM timeout after ${ms}ms`)), ms)
    }),
  ])
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

function localEffectTest(payload: EffectTestRequest): EffectTestResult {
  const material = payload.text.trim() || '未提供待处理文本'
  const preview = material.length > 180 ? `${material.slice(0, 180)}...` : material
  return {
    mode: 'mock-llm',
    withoutSkill: [
      `# 不使用 Skill 的处理结果`,
      '',
      `任务：${payload.purpose || '未填写处理目的'}`,
      '',
      `材料摘要：${preview}`,
      '',
      '## 初步输出',
      '- 可以识别这是一个法律工作任务，但输出结构依赖模型即时判断。',
      '- 会给出一般性风险提示和后续补充材料建议。',
      '- 对适用边界、复核点和交付格式的控制较弱。',
    ].join('\n'),
    withSkill: [
      `# 使用 ${payload.skill.chineseName} 的处理结果`,
      '',
      `任务：${payload.purpose || '未填写处理目的'}`,
      '',
      `材料摘要：${preview}`,
      '',
      '## 结构化输出',
      ...payload.skill.suitableFor.slice(0, 3).map((item) => `- 先核对：${item}`),
      ...payload.recommendation?.reasons?.slice(0, 3).map((item) => `- 匹配依据：${item}`) ?? [],
      '',
      '## 复核边界',
      ...payload.recommendation?.cautions?.slice(0, 2).map((item) => `- ${item}`) ?? [],
      '- 输出前由承办律师复核。',
    ].join('\n'),
    comparison: [
      '使用 Skill 后，输出结构更稳定。',
      '使用 Skill 后，适用边界和复核点更明确。',
      '完整 Markdown 可作为模型执行任务的作业说明书。',
    ],
  }
}

function normalize(value: unknown, fallback: EffectTestResult): EffectTestResult {
  if (!value || typeof value !== 'object') return fallback
  const result = value as Partial<EffectTestResult>
  return {
    mode: typeof result.mode === 'string' ? result.mode : 'llm',
    withoutSkill: typeof result.withoutSkill === 'string' ? result.withoutSkill : fallback.withoutSkill,
    withSkill: typeof result.withSkill === 'string' ? result.withSkill : fallback.withSkill,
    comparison: Array.isArray(result.comparison) ? result.comparison.map(String).slice(0, 5) : fallback.comparison,
  }
}

async function runEffectTest(payload: EffectTestRequest) {
  const fallback = localEffectTest(payload)
  const config = llmConfig()
  if (!config.apiKey) throw new Error('缺少大模型 API Key')

  const result = await callOpenAiCompatibleJson<EffectTestResult>(`你是律所内部 Skill 效果测试器。请对同一份律师任务生成两个模拟处理结果：一个不使用 Skill，一个使用给定 Skill Markdown。只返回 JSON，结构必须包含 mode、withoutSkill、withSkill、comparison。mode 固定为 "llm"。

要求：
1. withoutSkill 和 withSkill 都必须是可读的 Markdown 字符串。
2. withoutSkill 要模拟“只给普通大模型任务和材料”的结果：可以合理，但应体现普通回答常见问题，例如判断较概括、条款定位不够细、谈判优先级不够清楚、复核边界较弱。
3. withSkill 要严格体现 Skill Markdown 的方法、边界、输出格式和复核要求。它应该像一名律师助理完成的初步工作底稿片段：有自然段、有具体判断、有条款或事实定位、有修改方向和追问问题。
4. 不要刻意压缩成短句，也不要只写提纲。请写出能让律师直观看出“使用 Skill 后产出质量变好”的代表性片段，但只选 2-3 个关键问题展开，不要试图完整审查所有材料。
5. 如果材料里有具体条款、主体、数据流、分包商、存储地或客户邮件背景，withSkill 必须点名其中最关键的事实并说明其法律/谈判意义；withoutSkill 可以相对概括。
6. 不要输出客户交付级最终法律意见；但可以输出内部审查意见、初步风险判断、谈判方向和需客户确认事项。
7. comparison 用 3-5 条说明差异，不必刻意短，但要让业务用户一眼看懂 Skill 带来的价值。

处理目的：
${payload.purpose || '未填写'}

上传文件名：
${payload.fileNames?.join('、') || '无'}

推荐信息：
${JSON.stringify(payload.recommendation || {})}

待处理文本：
${(payload.text || '').slice(0, maxMaterialChars)}

Skill：
${JSON.stringify({
  id: payload.skill.id,
  name: payload.skill.name,
  chineseName: payload.skill.chineseName,
  practice: payload.skill.practice,
  origin: payload.skill.origin,
})}

完整 Skill Markdown：
${payload.skillMarkdown.slice(0, maxSkillMarkdownChars)}`, 1800)
  return normalize(result, fallback)
}

export async function POST(req: NextRequest) {
  try {
    const payload = (await req.json()) as EffectTestRequest
    return NextResponse.json(await runEffectTest(payload))
  } catch (error) {
    console.error(error)
    const message = error instanceof Error && error.message.includes('LLM timeout')
      ? '大模型生成效果对比超时，请减少待处理文本或稍后重试。'
      : 'Skill 效果测试失败，请重试'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
