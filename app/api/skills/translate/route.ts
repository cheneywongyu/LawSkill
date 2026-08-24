import { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'

const llmTimeoutMs = 90000

function llmConfig() {
  // Ollama 本地模型支持：设置 OLLAMA_BASE_URL（如 http://localhost:11434）即可切换到本地推理
  const ollamaBase = process.env.OLLAMA_BASE_URL?.replace(/\/+$/, '')
  const explicitBase = process.env.OPENAI_BASE_URL
  const explicitKey = process.env.OPENAI_API_KEY
  const apiKey = ollamaBase
    ? (process.env.OLLAMA_API_KEY || 'ollama')
    : explicitBase ? explicitKey : process.env.TOKENBUY_API_KEY || explicitKey || process.env.ANTHROPIC_API_KEY
  const baseURL = ollamaBase || explicitBase || process.env.TOKENBUY_BASE_URL || process.env.ANTHROPIC_BASE_URL || 'https://api.okrouter.ai/v1'
  const normalizedBaseURL = baseURL.replace(/\/+$/, '')
  const isOllama = Boolean(ollamaBase) || normalizedBaseURL.includes('://localhost:11434') || normalizedBaseURL.includes('://127.0.0.1:11434')
  return {
    apiKey,
    model: ollamaBase
      ? (process.env.OLLAMA_MODEL || 'qwen2.5:3b')
      : (process.env.OPENAI_MODEL || process.env.TOKENBUY_MODEL || process.env.ANTHROPIC_MODEL || 'gpt-5.5'),
    chatUrl: normalizedBaseURL.endsWith('/v1') ? `${normalizedBaseURL}/chat/completions` : `${normalizedBaseURL}/v1/chat/completions`,
    timeoutMs: Number(process.env.LLM_TIMEOUT_MS) || (isOllama ? 300000 : llmTimeoutMs),
  }
}

async function translateMarkdown(markdown: string, contentType: 'skill-md' | 'intro' | 'trigger-list') {
  const config = llmConfig()
  if (!config.apiKey) throw new Error('缺少大模型 API Key')
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), config.timeoutMs)
  try {
    const response = await fetch(config.chatUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: config.model,
        messages: [
          {
            role: 'system',
            content: contentType === 'trigger-list'
              ? '你是专业的法律 AI Skill 文档译者。用户会提供若干条英文触发条件，每行带有不可更改的编号标记。逐条翻译成准确、自然的简体中文，保留法律术语、法条编号、缩写和专有名称。不得合并、删减、概括或补充。严格保持每行的编号标记，只输出译文列表。'
              : contentType === 'intro'
              ? '你是专业的法律 AI Skill 文档译者。把用户提供的 Skill 介绍完整翻译成自然、准确的简体中文。保留法律术语、缩写、法条编号、变量名和专有名称，不得删减、概括、补充或解释。只输出译文。'
              : '你是专业的法律 AI Skill 文档译者。把用户提供的 SKILL.md 翻译成简体中文。完整保留 Markdown 层级、YAML frontmatter 字段名、代码块、命令、文件路径、URL、变量名和占位符；只翻译自然语言内容。不得删减、概括、补充或解释。只输出翻译后的 Markdown 原文。',
          },
          { role: 'user', content: markdown },
        ],
        temperature: 0.1,
        max_tokens: 24000,
      }),
    })
    const body = await response.text()
    if (!response.ok) throw new Error(`${response.status} ${body}`)
    const payload = JSON.parse(body) as { choices?: { message?: { content?: string } }[] }
    const translated = payload.choices?.[0]?.message?.content?.trim()
    if (!translated) throw new Error('大模型未返回翻译结果')
    return translated.replace(/^```(?:markdown)?\s*/i, '').replace(/\s*```$/i, '')
  } finally {
    clearTimeout(timeout)
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as { markdown?: string; contentType?: 'skill-md' | 'intro' | 'trigger-list' }
    const markdown = payload.markdown?.trim()
    if (!markdown) return Response.json({ error: '没有可翻译的 SKILL.md 内容' }, { status: 400 })
    if (markdown.length > 100_000) return Response.json({ error: 'SKILL.md 过长，暂不支持超过 100,000 字符的单次翻译' }, { status: 413 })
    const contentType = payload.contentType === 'intro' || payload.contentType === 'trigger-list' ? payload.contentType : 'skill-md'
    const translation = await translateMarkdown(markdown, contentType)
    return Response.json({ translation, model })
  } catch (error) {
    const message = error instanceof Error
      ? error.name === 'AbortError' ? 'AI 翻译超时，请稍后重试' : error.message
      : 'AI 翻译失败'
    return Response.json({ error: message }, { status: 500 })
  }
}
