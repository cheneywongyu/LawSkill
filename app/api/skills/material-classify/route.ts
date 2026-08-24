import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

type MaterialPurpose = 'case' | 'method' | 'mixed'
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
  purpose: MaterialPurpose
  confidence: number
  reason: string
  profile: MaterialProfile
}

function localProfile(text: string): MaterialProfile {
  if (/起诉状|诉状|起诉书/.test(text)) {
    return {
      materialType: '民事起诉状',
      documentFunction: '诉讼启动文书；上传者可能是收到起诉状的被告方，也可能是拟起诉或复核文书的原告方。',
      likelyUserPostures: ['被告方应诉（优先确认）', '原告方起诉状复核或完善', '中立案件评估'],
      matterSummary: '材料载明原告诉讼请求、事实理由及针对被告的责任主张。',
      keyIssues: ['诉讼请求与请求权基础', '原告主张的事实和证据', '被告责任范围与抗辩空间'],
      plausibleTasks: ['制定应诉和抗辩方案', '复核起诉状及证据缺口', '评估诉讼请求和责任风险'],
      suggestedPurposes: ['站在被告方梳理应诉抗辩与证据准备', '站在原告方复核起诉状和请求权基础', '中立评估诉讼请求、证据缺口和责任风险'],
      suggestedTriggers: ['收到起诉状后，需要在答辩期限内制定应诉方案时', '核对原告诉请、责任比例和证据链并准备抗辩时', '准备答辩状、庭前会议或和解谈判方案时'],
      suggestedOutputs: ['答辩要点、抗辩理由及证据准备清单', '可编辑的民事答辩状初稿', '诉讼请求与责任风险评估报告'],
    }
  }
  if (/合同|协议|甲方|乙方|付款|验收|违约/.test(text)) {
    return {
      materialType: '合同或协议材料',
      documentFunction: '交易文件；可能用于审查、起草修订或履约管理。',
      likelyUserPostures: ['合同一方风险审查', '合同起草或修订', '履约管理'],
      matterSummary: '材料涉及合同权利义务、履行安排及风险分配。',
      keyIssues: ['付款与履行条件', '交付与验收', '违约责任与争议处理'],
      plausibleTasks: ['合同风险审查', '合同起草或修订', '履约义务梳理'],
      suggestedPurposes: ['审查合同并识别风险条款', '起草或修订同类合同', '提取履约义务并生成执行清单'],
      suggestedTriggers: ['收到合同初稿并准备签署前审查时', '谈判中需要修改关键条款时', '合同履行阶段需要核对义务和期限时'],
      suggestedOutputs: ['风险条款清单和修改建议', '可编辑的合同修订稿', '履约义务与期限清单'],
    }
  }
  if (/案号|诉讼|仲裁|证据|判决|争议|当事人/.test(text)) {
    return {
      materialType: '案件或争议材料',
      documentFunction: '争议处理材料；可能来自己方、对方或法院，需要先确认代理立场。',
      likelyUserPostures: ['己方主张准备', '对方主张回应', '中立案件评估'],
      matterSummary: '材料涉及具体案件事实、证据或程序信息。',
      keyIssues: ['事实经过', '证据对应关系', '争议焦点与程序节点'],
      plausibleTasks: ['案件时间线整理', '证据清单整理', '争议焦点分析'],
      suggestedPurposes: ['整理案件事实和时间线', '梳理证据并生成证据清单', '识别争议焦点并准备分析底稿'],
      suggestedTriggers: ['案件接收后首次梳理事实与程序节点时', '举证或庭前准备阶段核对证据时', '制定诉讼策略前识别争议焦点时'],
      suggestedOutputs: ['案件事实时间线', '证据目录和缺口清单', '争议焦点与诉讼风险报告'],
    }
  }
  return {
    materialType: '法律业务材料',
    documentFunction: '待处理法律材料；材料来源方和预期用途尚需确认。',
    likelyUserPostures: ['代表材料接收方处理', '代表材料制作方复核', '中立分析'],
    matterSummary: '材料可用于识别法律工作需求，但仍需律师确认处理目标。',
    keyIssues: ['材料范围', '预期成果', '律师复核边界'],
    plausibleTasks: ['风险审查', '事实整理', '文书起草'],
    suggestedPurposes: ['审查材料并识别法律风险', '整理事实并形成清单', '起草或修改法律文书'],
    suggestedTriggers: ['接收材料并开始首次分析时', '需要形成正式工作成果时', '进入律师复核或对外交付前使用'],
    suggestedOutputs: ['风险问题清单', '可编辑文书初稿', '分析报告和下一步清单'],
  }
}

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

function localClassification(text: string): MaterialClassification {
  const profile = localProfile(text)
  const methodSignals = text.match(/操作指引|审查清单|工作流程|办理流程|实务指南|工作标准|判断规则|使用说明|步骤|应当|必须/g)?.length || 0
  const caseSignals = text.match(/甲方|乙方|当事人|合同编号|案号|涉案|本合同|诉称|证据|金额|人民币|签订于|客户邮件/g)?.length || 0
  if (methodSignals >= 2 && caseSignals >= 2) {
    return { purpose: 'mixed', confidence: 0.72, reason: '材料同时包含可复用操作规则和具体业务事实。', profile }
  }
  if (methodSignals >= 2 && methodSignals > caseSignals) {
    return { purpose: 'method', confidence: 0.68, reason: '材料以操作步骤、判断规则或工作标准为主。', profile }
  }
  return { purpose: 'case', confidence: 0.62, reason: '材料以具体合同、案情或客户事实为主；不应直接沉淀为通用规则。', profile }
}

function stringList(value: unknown, fallback: string[]) {
  const items = Array.isArray(value) ? value.map(String).map((item) => item.trim()).filter(Boolean).slice(0, 5) : []
  return items.length ? items : fallback
}

function normalize(value: unknown, fallback: MaterialClassification): MaterialClassification {
  const raw = value && typeof value === 'object' ? value as Record<string, unknown> : {}
  const purpose = raw.purpose === 'method' || raw.purpose === 'mixed' || raw.purpose === 'case' ? raw.purpose : fallback.purpose
  const confidence = typeof raw.confidence === 'number' ? Math.min(1, Math.max(0, raw.confidence)) : fallback.confidence
  const reason = typeof raw.reason === 'string' && raw.reason.trim() ? raw.reason.trim().slice(0, 160) : fallback.reason
  const rawProfile = raw.profile && typeof raw.profile === 'object' ? raw.profile as Record<string, unknown> : {}
  const profile = {
    materialType: typeof rawProfile.materialType === 'string' && rawProfile.materialType.trim() ? rawProfile.materialType.trim().slice(0, 80) : fallback.profile.materialType,
    documentFunction: typeof rawProfile.documentFunction === 'string' && rawProfile.documentFunction.trim() ? rawProfile.documentFunction.trim().slice(0, 240) : fallback.profile.documentFunction,
    likelyUserPostures: stringList(rawProfile.likelyUserPostures, fallback.profile.likelyUserPostures).slice(0, 3),
    matterSummary: typeof rawProfile.matterSummary === 'string' && rawProfile.matterSummary.trim() ? rawProfile.matterSummary.trim().slice(0, 240) : fallback.profile.matterSummary,
    keyIssues: stringList(rawProfile.keyIssues, fallback.profile.keyIssues),
    plausibleTasks: stringList(rawProfile.plausibleTasks, fallback.profile.plausibleTasks),
    suggestedPurposes: stringList(rawProfile.suggestedPurposes, fallback.profile.suggestedPurposes).slice(0, 3),
    suggestedTriggers: stringList(rawProfile.suggestedTriggers, fallback.profile.suggestedTriggers).slice(0, 3),
    suggestedOutputs: stringList(rawProfile.suggestedOutputs, fallback.profile.suggestedOutputs).slice(0, 3),
  }
  return { purpose, confidence, reason, profile }
}

export async function POST(req: NextRequest) {
  const payload = await req.json() as { text?: string }
  const text = typeof payload.text === 'string' ? payload.text.trim() : ''
  if (!text) return NextResponse.json({ error: '请先提供材料。' }, { status: 400 })

  const fallback = localClassification(text)
  const config = llmConfig()
  if (!config.apiKey || process.env.SKILL_RECOMMENDER_USE_LLM !== 'true') {
    return NextResponse.json(fallback)
  }

  const prompt = `先分析材料，再判断它在创建法律 AI Skill 时的用途。只返回 JSON：purpose、confidence、reason、profile。

分类定义：
- case：某一具体合同、案情、客户邮件、证据摘要或一次性业务材料。它可用于理解需求和试跑，但具体姓名、金额、案号、日期、条款和事实不得写成 Skill 的通用规则。
- method：操作指引、审查清单、办案手册、团队规则、工作标准或可复用专业经验，可用于提取 Skill 的工作方法。
- mixed：同一材料明确同时包含可复用的方法说明和具体业务事实。

边界：不要分析案件实体结论，不要提取或复述敏感事实；reason 只说明分类依据，最多 60 个汉字。不确定时选择 case。

profile 必须包含：
- materialType：具体材料类型，例如“软件开发合同”“劳动争议证据材料”，不要只写“法律材料”。
- documentFunction：说明这份文书在法律工作流中的功能，以及它可能是己方制作、对方送达还是法院发出的材料。
- likelyUserPostures：三个需要确认的用户立场或程序位置，按常见程度排序。
- matterSummary：不包含姓名、金额、案号等敏感事实的业务摘要。
- keyIssues：从材料内容识别的 3–5 个具体事项。
- plausibleTasks：律师可能基于该材料完成的 3 个具体工作。
- suggestedPurposes：供律师选择的 3 个互斥处理目标。必须引用材料类型或关键事项形成差异，不得使用“供律师使用”“供助理使用”等使用人员选项。
- suggestedTriggers：3 个真实法律工作节点或程序阶段。必须描述律师何时需要这项能力，不得使用“上传材料后”“明确提出任务”“同时具备材料和指令”等产品操作条件。
- suggestedOutputs：与材料类型、可能立场和处理目标对应的 3 个具体成果。三项必须属于不同成果形态或工作层级，不能只是同义改写；例如不得同时提供“答辩状要点清单”和“答辩提纲与抗辩点清单”。

文书角色推理规则：
1. 不要把“用户上传的文书类型”直接当成“用户希望生成的文书类型”。先判断它是输入材料、对方来文、法院文书还是己方待审稿。
2. 收到民事起诉状的常见下游工作是被告侧应诉。识别到起诉状时，应把“被告方应诉/答辩”放在 likelyUserPostures 和 suggestedPurposes 的第一位，同时保留“原告方复核起诉状”和“中立评估”供确认。
3. 对答辩状、上诉状、判决书、律师函、监管问询函等材料同样按其程序功能推断下游工作，但不得未经确认锁定代理立场。

材料：
${text.slice(0, 10000)}`

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
        temperature: 0,
        max_tokens: 900,
        response_format: { type: 'json_object' },
      }),
    })
    const responseText = await response.text()
    if (!response.ok) throw new Error(`${response.status} ${responseText}`)
    const responsePayload = JSON.parse(responseText) as { choices?: { message?: { content?: string } }[] }
    const content = responsePayload.choices?.[0]?.message?.content?.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '')
    if (!content) throw new Error('Empty model response')
    return NextResponse.json(normalize(JSON.parse(content), fallback))
  } catch {
    return NextResponse.json(fallback)
  }
}
