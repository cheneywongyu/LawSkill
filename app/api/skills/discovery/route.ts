import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

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

type DiscoveryRequest = {
  userMessage?: string
  messages?: { role: 'user' | 'assistant'; content: string }[]
  requirements?: Partial<DiscoveryRequirements>
  draft?: Record<string, unknown>
  caseMaterial?: string
  materialProfile?: {
    materialType?: string
    documentFunction?: string
    likelyUserPostures?: string[]
    matterSummary?: string
    keyIssues?: string[]
    plausibleTasks?: string[]
    suggestedPurposes?: string[]
    suggestedTriggers?: string[]
    suggestedOutputs?: string[]
  }
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
}

const emptyRequirements: DiscoveryRequirements = {
  purpose: '',
  users: '',
  triggerConditions: '',
  inputMaterials: '',
  outputs: '',
  jurisdiction: '',
  workflowConstraints: '',
  reviewBoundaries: '',
}

const requiredFields: (keyof DiscoveryRequirements)[] = [
  'purpose',
  'triggerConditions',
  'outputs',
]

function llmConfig() {
  const explicitBase = process.env.OPENAI_BASE_URL
  const explicitKey = process.env.OPENAI_API_KEY
  const apiKey = explicitBase ? explicitKey : process.env.TOKENBUY_API_KEY || explicitKey || process.env.ANTHROPIC_API_KEY
  const baseURL = explicitBase || process.env.TOKENBUY_BASE_URL || process.env.ANTHROPIC_BASE_URL || 'https://api.okrouter.ai/v1'
  const normalizedBaseURL = baseURL.replace(/\/+$/, '')
  return {
    apiKey,
    model: process.env.OPENAI_MODEL || process.env.TOKENBUY_MODEL || process.env.ANTHROPIC_MODEL || 'gpt-5.5',
    chatUrl: normalizedBaseURL.endsWith('/v1') ? `${normalizedBaseURL}/chat/completions` : `${normalizedBaseURL}/v1/chat/completions`,
  }
}

function cleanText(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function cleanRequirement(value: unknown) {
  const text = cleanText(value)
  if (/^(待确认|待补充|未明确|暂无|不确定|由.+(?:确认|补充))[。.]*$/.test(text)) return ''
  return text
}

function isProductInteractionTrigger(value: string) {
  return /(?:上传|粘贴|提供)(?:相关|待处理|任意)?(?:材料|文件).*?(?:后|时)?(?:使用|调用|触发|启动)|律师(?:明确)?提出(?:整理|处理|相关)?任务|同时(?:具备|满足|提供).*?(?:材料|文件).*?(?:任务|指令)|材料和任务指令/.test(value)
}

function inferLegalTrigger(requirements: DiscoveryRequirements, materialProfile?: DiscoveryRequest['materialProfile']) {
  const context = [
    requirements.purpose,
    requirements.inputMaterials,
    requirements.outputs,
    materialProfile?.materialType,
    materialProfile?.documentFunction,
    materialProfile?.matterSummary,
    ...(materialProfile?.keyIssues || []),
  ].filter(Boolean).join(' ')
  const profileTrigger = (materialProfile?.suggestedTriggers || [])
    .map(String)
    .map((item) => item.trim())
    .find((item) => item && !isProductInteractionTrigger(item))
  if (profileTrigger) return profileTrigger
  if (/(采购|销售|供应|开发|服务|租赁|保密|NDA|SaaS).{0,12}(合同|协议)|(合同|协议).{0,12}(审查|风险|修订|谈判)/i.test(context)) {
    return '在合同对外签署、谈判定稿或重大修订前，承办律师代表已确认的客户立场完成法律风险审查时。'
  }
  if (/(起诉|应诉|答辩|抗辩|诉讼|仲裁|庭审|管辖|举证)/.test(context)) {
    return '在案件进入相应诉讼或仲裁阶段后，承办律师需在答辩、举证、管辖异议或庭前准备等法定期限内形成办案底稿时。'
  }
  if (/(起草|初稿|文书|函|申请书|意见书)/.test(context)) {
    return '在承办律师已确认文书用途、相对方、法域和核心事实，进入法律文书起草或修订阶段时。'
  }
  if (/(合规|监管|数据|隐私|跨境|反垄断|制裁)/.test(context)) {
    return '在项目上线、交易实施或重大流程变更前，承办律师需完成专项合规评估并形成整改意见时。'
  }
  if (/(检索|法律研究|法规|案例|裁判规则)/.test(context)) {
    return '在承办律师为个案分析、交易决策或法律文书准备论证依据，需完成专项法律研究时。'
  }
  const task = requirements.purpose.replace(/[^一-鿿A-Za-z0-9]/g, '').slice(0, 36) || '相应法律工作'
  return `在承办律师已确认客户立场、法域和交付目标，进入“${task}”的实质处理阶段时。`
}

function cleanAssistantMessage(value: unknown) {
  const text = cleanText(value)
  const sentences = text.split(/(?<=[。！？])/).map((item) => item.trim()).filter(Boolean)
  return sentences.filter((sentence) => !/之前给出的|此前选项|本轮先|属于使用方式|不是法律工作场景|纠正前一轮|模板问题|格式问题/.test(sentence)).join(' ')
}

function normalizeRequirements(value: unknown, previous: Partial<DiscoveryRequirements> = {}) {
  const raw = value && typeof value === 'object' ? value as Record<string, unknown> : {}
  return Object.fromEntries(Object.keys(emptyRequirements).map((key) => {
    const field = key as keyof DiscoveryRequirements
    return [field, cleanRequirement(raw[field]) || cleanRequirement(previous[field])]
  })) as DiscoveryRequirements
}

function normalizeResult(value: unknown, previous: Partial<DiscoveryRequirements>, materialProfile?: DiscoveryRequest['materialProfile']): DiscoveryResult {
  const raw = value && typeof value === 'object' ? value as Record<string, unknown> : {}
  const requirements = normalizeRequirements(raw.requirements, previous)
  if (isProductInteractionTrigger(requirements.triggerConditions)) requirements.triggerConditions = ''
  if (!requirements.triggerConditions && requirements.purpose && requirements.outputs) {
    requirements.triggerConditions = inferLegalTrigger(requirements, materialProfile)
  }
  if (!requirements.reviewBoundaries) requirements.reviewBoundaries = 'AI 仅生成工作底稿和分析建议；事实认定、法律适用、诉讼策略及对外提交内容均由承办律师复核确认。'
  const missing = requiredFields.filter((field) => !requirements[field])
  const rawQuestions = Array.isArray(raw.questions)
    ? raw.questions.map(String).map((item) => item.trim()).filter((item) => item && !/复核边界|自动处理.*律师复核|自动判断.*律师复核/.test(item) && !isProductInteractionTrigger(item)).slice(0, 1)
    : []
  const canAdvance = missing.length === 0
  const questions = canAdvance ? [] : rawQuestions.length ? rawQuestions : missing.slice(0, 1).map((field) => ({
    purpose: '根据当前材料，我初步判断可能需要进行事实整理、风险审查或文书起草；请确认最接近的处理目标。',
    triggerConditions: '什么请求、材料或工作阶段下应调用这个 Skill？',
    outputs: '希望最终输出什么成果，例如风险清单、修改建议或修订稿？',
    reviewBoundaries: '哪些判断必须由律师复核，或者明确禁止 AI 自动完成？',
  }[field]))
  const rawSuggestedAnswers = Array.isArray(raw.suggestedAnswers) ? raw.suggestedAnswers : []
  const suggestedAnswers = canAdvance ? [] : questions.map((question, index) => {
    const choices = Array.isArray(rawSuggestedAnswers[index])
      ? rawSuggestedAnswers[index].map(String).map((item) => item.trim()).filter(Boolean).slice(0, 3)
      : []
    const targetField: keyof DiscoveryRequirements | undefined = /工作目的|核心任务|处理目标|主要完成|主要用途|哪一种.*目标/.test(question)
      ? 'purpose'
      : /触发|启动|什么情形|何时|调用场景/.test(question)
        ? 'triggerConditions'
        : /输出|成果|交付/.test(question)
          ? 'outputs'
          : /复核|禁止|自动判断|处理边界/.test(question)
            ? 'reviewBoundaries'
            : missing[index] || missing[0]
    if (targetField === 'purpose') {
      const profileChoices = Array.isArray(materialProfile?.suggestedPurposes)
        ? materialProfile.suggestedPurposes.map(String).map((item) => item.trim()).filter(Boolean).slice(0, 3)
        : []
      if (profileChoices.length === 3) return profileChoices
      const taskChoices = choices.filter((choice) => !/^(供|用于)(承办)?(律师|律师助理|助理|团队)|统一团队|日常使用/.test(choice))
      if (taskChoices.length === 3) return taskChoices
      if (/合同|协议/.test(question)) return ['审查合同并识别风险条款', '起草或修订这类合同', '提取履约义务并生成执行清单']
      if (/案件|案情|诉讼|仲裁|争议|证据/.test(question)) return ['整理案件事实和时间线', '梳理证据并生成证据清单', '识别争议焦点并准备分析底稿']
      if (/法规|案例|法律研究|检索/.test(question)) return ['检索并核验法律依据', '归纳案例观点和裁判规则', '形成法律研究报告']
      return ['审查材料并识别法律风险', '整理事实并形成时间线或清单', '起草或修改法律文书']
    }
    if (targetField === 'outputs') {
      const profileOutputs = Array.isArray(materialProfile?.suggestedOutputs)
        ? materialProfile.suggestedOutputs.map(String).map((item) => item.trim()).filter(Boolean).slice(0, 3)
        : []
      if (/被告|应诉|答辩|抗辩/.test(requirements.purpose)) {
        const defendantOutputs = [...profileOutputs, ...choices]
          .filter((item) => !/原告方|起诉状(?:初稿|修订|完善|起草)/.test(item))
        const evidenceCandidate = defendantOutputs.find((item) => /证据|对照表|对应关系|证明力/.test(item))
        const evidenceWorkpaper = evidenceCandidate && !/庭前|策略|风险|和解|谈判|备忘录/.test(evidenceCandidate)
          ? evidenceCandidate
          : '争点—证据—法律依据对照表及证据缺口清单'
        const strategyMemo = defendantOutputs.find((item) => item !== evidenceWorkpaper && /风险|策略|庭前|和解|谈判/.test(item) && !/证据|对照表|对应关系/.test(item)) || '庭前应诉策略、诉讼风险及和解方案备忘录'
        return [
          '可编辑的被告方民事答辩状初稿（含抗辩结构）',
          evidenceWorkpaper,
          strategyMemo,
        ]
      }
      if (profileOutputs.length === 3) return profileOutputs
    }
    if (targetField === 'triggerConditions') {
      const profileTriggers = Array.isArray(materialProfile?.suggestedTriggers)
        ? materialProfile.suggestedTriggers.map(String).map((item) => item.trim()).filter((item) => item && !isProductInteractionTrigger(item)).slice(0, 3)
        : []
      if (profileTriggers.length === 3) return profileTriggers
      const legalChoices = choices.filter((item) => !isProductInteractionTrigger(item))
      if (legalChoices.length === 3) return legalChoices
      const inferred = inferLegalTrigger(requirements, materialProfile)
      if (/(合同|协议)/.test(`${requirements.purpose} ${requirements.inputMaterials}`)) {
        return ['合同首次对外发送或签署前审查', '合同谈判修订和定稿阶段审查', '合同变更、续签或履约争议前专项审查']
      }
      return [inferred, '法律工作方案形成前完成首次分析时', '对外交付或提交前完成复核时']
    }
    if (choices.length) return choices
    if (targetField === 'outputs') return ['风险清单和修改建议', '可直接使用的文书初稿', '分析报告和下一步清单']
    if (targetField === 'reviewBoundaries') return ['所有法律结论由律师复核', '仅高风险事项由律师复核', '只整理事实，不自动作法律判断']
    if (question.includes('输出')) return ['风险清单和修改建议', '可直接使用的文书初稿', '分析报告和下一步清单']
    if (question.includes('复核') || question.includes('禁止')) return ['所有法律结论由律师复核', '仅高风险事项由律师复核', '只整理事实，不自动作法律判断']
    if (question.includes('触发') || question.includes('场景')) return [inferLegalTrigger(requirements, materialProfile), '法律工作方案形成前完成首次分析时', '对外交付或提交前完成复核时']
    if (question.includes('输入') || question.includes('材料')) return ['合同、邮件和附件材料', '案情摘要、证据和程序文件', '由律师上传任意待整理文件']
    if (question.includes('法域') || question.includes('地区')) return ['中国大陆法律', '由律师每次指定法域', '暂不限定，由律师复核']
    return ['供承办律师日常使用', '供律师助理准备初稿', '供团队统一工作标准']
  })
  return {
    phase: 'discovery',
    status: canAdvance ? 'ready' : 'needs_clarification',
    canAdvance,
    assistantMessage: cleanAssistantMessage(raw.assistantMessage) || (canAdvance ? '需求信息已经足够，请审阅下方总结并确认生成 Skill。' : '已结合材料识别当前最需要确认的信息。'),
    questions,
    suggestedAnswers,
    summary: cleanText(raw.summary) || '已根据当前材料整理需求，待补充关键信息后生成 Skill。',
    requirements,
  }
}

function fallbackResult(payload: DiscoveryRequest): DiscoveryResult {
  const draft = payload.draft || {}
  const previous = normalizeRequirements(payload.requirements)
  const userMessage = cleanText(payload.userMessage)
  const isFreshRequest = !(payload.messages || []).length && !Object.values(previous).some(Boolean)
  const requirements = normalizeRequirements({
    ...previous,
    purpose: previous.purpose || userMessage || cleanText(draft.description),
    users: previous.users || '律所内部律师及法律助理',
    triggerConditions: previous.triggerConditions || (isFreshRequest ? '' : cleanText(draft.triggerConditions)),
    inputMaterials: previous.inputMaterials || cleanText(draft.inputMaterials),
    outputs: previous.outputs || (isFreshRequest ? '' : cleanText(draft.outputFormat)),
    jurisdiction: previous.jurisdiction || cleanText(draft.jurisdiction),
    workflowConstraints: previous.workflowConstraints || cleanText(draft.checklist),
    reviewBoundaries: previous.reviewBoundaries || cleanText(draft.prohibited),
  })
  const complete = requiredFields.every((field) => requirements[field])
  return normalizeResult({ status: complete ? 'ready' : 'needs_clarification', requirements, questions: [] }, requirements, payload.materialProfile)
}

export async function POST(req: NextRequest) {
  const payload = await req.json() as DiscoveryRequest
  const config = llmConfig()
  if (!config.apiKey || process.env.SKILL_RECOMMENDER_USE_LLM !== 'true') {
    return NextResponse.json(fallbackResult(payload))
  }

  const prompt = `你是律所内部 AI Skill 的需求访谈助手。你的任务是帮助律师用最少的问题说明工作需求，不要让律师设计 SKILL.md、references、scripts 或部署架构。

只确认三项生成条件：工作目的、真实法律工作触发场景、输出成果。使用人、输入材料、法域、流程限制和律师复核边界由系统从上下文和保守默认规则补全，不要因此延长访谈。

规则：
1. 每轮只提出 1 个最关键的问题，并给出 3 个简短、互斥的 suggestedAnswers；律师也可以自行输入。
2. 已经明确的信息不要重复询问；可以从当前草稿合理继承，但不得创造专业规则或法律依据。
3. 如果提供了待处理业务材料，只能据此理解任务目的、输入类型和可能的输出需求；不得把其中的具体姓名、金额、案号、日期、条款或个案事实写成通用 Skill 规则。
3.1 如果提供了材料，必须先识别材料类型、可能的法律工作和预期处理方向。能从材料合理识别 purpose 时直接写入 requirements.purpose，不得再泛泛询问“核心任务是什么”或“要完成哪类工作”。
3.2 如果材料支持多个合理目的，需要律师确认时，问题必须先写明你的具体识别结果，例如“这是一份软件开发合同，我判断可用于合同风险审查”；三个 suggestedAnswers 必须是针对该材料的不同处理目标，不得用“供律师、供助理、统一团队标准”等使用人员选项回答工作目的。
3.3 assistantMessage 只说明识别依据或本轮进度，不得重复 questions 中的问题；questions 中只保留一个完整问句。
3.4 如果你提出问题要求律师确认某个字段，该字段在本轮 requirements 中必须保持为空，不得一边填写该字段一边继续询问确认。只有律师回答后才能写入。
3.5 材料任务画像是提问的主要依据。问题必须引用 materialType 或至少一个 keyIssues；suggestedAnswers 必须针对画像中的事项、立场、工作深度或成果差异生成。除非画像缺失或模型调用失败，不得返回适用于所有法律任务的通用选项。
3.6 区分“上传的输入文书”和“希望生成的输出”。尤其收到起诉状时，常见工作是代表被告应诉，不得默认用户要重新生成起诉状。先结合 documentFunction 和 likelyUserPostures 确认程序立场；尚未确认时，优先提供被告应诉、原告复核、中立评估三个方向。
3.7 triggerConditions 必须描述真实法律工作节点、程序期限或承办阶段，例如“收到起诉状后在答辩期限内制定应诉方案时”。不得把产品交互方式写成触发场景，不得出现“上传材料后使用”“律师明确提出任务时使用”“同时具备材料和任务指令时使用”。
3.8 一旦 requirements.purpose 已确认代理立场，后续问题、suggestedAnswers、summary 和 requirements 必须保持同一立场。选择被告方应诉后，不得再出现原告方起诉状起草、修订或完善等选项。
3.9 不得向用户解释系统之前哪里错了，不得出现“之前给出的”“属于使用方式而非法律场景”“本轮纠正”等调试或复盘语言。只陈述当前材料判断和需要律师确认的业务问题。
3.10 不要询问自动处理与律师复核边界，不要生成该字段的问题或选项。reviewBoundaries 使用系统保守默认值，生成后允许律师在结构化字段中调整。
3.11 三个 suggestedAnswers 必须在成果形态或工作目标上实质不同，不能只是同义改写。例如“答辩状要点清单”和“答辩提纲与抗辩点清单”属于同一类，不得同时出现。被告应诉成果优先区分为：正式答辩文书、争点证据分析底稿、诉讼策略与风险备忘录。
4. 信息不足时 status 必须为 needs_clarification，canAdvance 必须为 false。
5. purpose、triggerConditions、outputs 均明确后，必须立即返回 ready、canAdvance=true、questions=[]、suggestedAnswers=[]，不得继续追问其他字段。
6. 即使 ready，也只总结需求，不生成 Skill，不输出任何隐藏阶段标记。
7. 只返回 JSON，字段为 phase、status、canAdvance、assistantMessage、questions、suggestedAnswers、summary、requirements。
8. requirements 必须包含 purpose、users、triggerConditions、inputMaterials、outputs、jurisdiction、workflowConstraints、reviewBoundaries 八个字符串字段。

当前结构化草稿：
${JSON.stringify(payload.draft || {})}

已经确认的需求：
${JSON.stringify(payload.requirements || {})}

材料任务画像（用于定制问题和选项，不得当作已确认需求）：
${JSON.stringify(payload.materialProfile || {})}

访谈历史：
${JSON.stringify((payload.messages || []).slice(-10))}

律师本轮输入：
${cleanText(payload.userMessage)}

待处理业务材料（仅用于识别任务，不作为专业规则来源）：
${cleanText(payload.caseMaterial).slice(0, 8000) || '无'}`

  try {
    const response = await fetch(config.chatUrl, {
      method: 'POST',
      headers: { Authorization: `Bearer ${config.apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: config.model,
        messages: [
          { role: 'system', content: '你只输出合法 JSON，不输出 Markdown 或解释文字。' },
          { role: 'user', content: prompt },
        ],
        temperature: 0.2,
        max_tokens: 1400,
        response_format: { type: 'json_object' },
      }),
    })
    const responseText = await response.text()
    if (!response.ok) throw new Error(`${response.status} ${responseText}`)
    const responsePayload = JSON.parse(responseText) as { choices?: { message?: { content?: string } }[] }
    const content = responsePayload.choices?.[0]?.message?.content?.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '')
    if (!content) throw new Error('Empty model response')
    return NextResponse.json(normalizeResult(JSON.parse(content), payload.requirements || {}, payload.materialProfile))
  } catch (error) {
    return NextResponse.json({
      ...fallbackResult(payload),
      error: error instanceof Error ? error.message : '需求访谈暂时不可用',
    })
  }
}
