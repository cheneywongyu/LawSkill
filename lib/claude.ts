import Anthropic from '@anthropic-ai/sdk'
import { CaseDocument, ExtractionResult, PhaseReport } from '@/types/timeline'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
  ...(process.env.ANTHROPIC_BASE_URL ? { baseURL: process.env.ANTHROPIC_BASE_URL } : {}),
})

export async function extractWithClaude(documents: CaseDocument[]): Promise<ExtractionResult> {
  const docText = documents
    .map((d) => `【${d.name}】\n${d.content}`)
    .join('\n\n---\n\n')

  const message = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 16000,
    messages: [
      {
        role: 'user',
        content: `你是一名专业的中国民事诉讼律师助手。请从以下案件文书中抽取所有时间相关事件，输出严格的JSON格式。

要求：
1. 抽取所有明确日期的事件（合同日期、立案日、开庭日、判决日、各类期限等）
2. 识别截止日（举证期限、上诉期、诉讼时效等），设置 isDeadline: true
3. 按日期升序排列events
4. 将事件分组为有意义的阶段（phases），如借贷形成、委托立案、庭审判决、执行阶段等
5. sourceExcerpt 控制在80字以内

输出格式（严格JSON，不要截断）：
{
  "caseTitle": "xxx与xxx案由",
  "summary": "一句话案情概述",
  "phases": [{"id":"phase-1","label":"阶段名","order":1,"startEventId":"evt-001","reportIds":[]}],
  "events": [{
    "id": "evt-001",
    "date": "YYYY-MM-DD",
    "eventType": "case_filed|court_hearing|judgment|contract_signed|payment|notice|evidence_deadline|appeal_deadline|limitation|other",
    "title": "简短标题（10字以内）",
    "description": "简短描述（50字以内）",
    "sourceDocument": "来源文书名",
    "sourceExcerpt": "原文片段（80字以内）",
    "isDeadline": false,
    "deadlineType": null,
    "isManual": false,
    "phaseId": "phase-1"
  }]
}

案件文书：
${docText}

仅输出JSON，不要任何额外说明。`,
      },
    ],
  })

  const text = message.content[0].type === 'text' ? message.content[0].text : ''

  // Extract JSON block
  const jsonMatch = text.match(/\{[\s\S]*\}/)
  if (!jsonMatch) throw new Error('未能从返回内容中提取 JSON，请重试')

  let parsed: ExtractionResult
  try {
    parsed = JSON.parse(jsonMatch[0]) as ExtractionResult
  } catch {
    // Try to salvage a truncated response by finding the last complete event
    const salvaged = salvageTruncatedJson(jsonMatch[0])
    if (!salvaged) throw new Error('返回内容不完整，请缩短文书后重试')
    parsed = salvaged
  }

  if (!parsed.events?.length) throw new Error('文书中未识别到有效日期事件，请检查文书内容')
  return parsed
}

function salvageTruncatedJson(raw: string): ExtractionResult | null {
  try {
    // Find the last complete event object
    const eventsStart = raw.indexOf('"events"')
    if (eventsStart === -1) return null

    const header = raw.slice(0, eventsStart)
    const eventsSection = raw.slice(eventsStart)

    // Find all complete event objects (ending with })
    const completeEvents: string[] = []
    let depth = 0
    const start = eventsSection.indexOf('[') + 1
    let eventStart = -1

    for (let i = start; i < eventsSection.length; i++) {
      if (eventsSection[i] === '{') {
        if (depth === 0) eventStart = i
        depth++
      } else if (eventsSection[i] === '}') {
        depth--
        if (depth === 0 && eventStart !== -1) {
          completeEvents.push(eventsSection.slice(eventStart, i + 1))
          eventStart = -1
        }
      }
    }

    if (!completeEvents.length) return null

    // Reconstruct valid JSON with complete events only
    const reconstructed = header + `"events": [${completeEvents.join(',')}]}`
    return JSON.parse(reconstructed) as ExtractionResult
  } catch {
    return null
  }
}

export async function generateReportWithClaude(
  phaseLabel: string,
  eventDescriptions: string[],
  caseTitle: string
): Promise<string> {
  const message = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1024,
    messages: [
      {
        role: 'user',
        content: `你是一名律师助手，请为当事人（非法律专业人士）撰写"${phaseLabel}"的进度汇报。

案件：${caseTitle}
本阶段事件：
${eventDescriptions.map((e, i) => `${i + 1}. ${e}`).join('\n')}

要求：
- 用通俗易懂的语言，避免专业术语
- 说明本阶段发生了什么、进展如何
- 如有截止日，提示当事人关注
- 简洁，不超过200字
- 直接输出正文，不需要标题`,
      },
    ],
  })

  return message.content[0].type === 'text' ? message.content[0].text : ''
}
