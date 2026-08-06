import { NextRequest, NextResponse } from 'next/server'

const USE_MOCK = false

const MOCK_REPORTS: Record<string, string> = {
  借贷形成阶段:
    '在这个阶段，您的当事人（原告王建国）于2025年8月15日将50万元借给了对方（被告刘明），双方签了正式的借款合同，约定2025年10月1日前还款。但到期后，对方迟迟没有还钱，经过多次催促也没有结果，双方由此产生了纠纷。',
  委托立案阶段:
    '这一阶段，王建国委托了律师，并于2026年3月5日正式向法院提起诉讼。法院于2026年3月10日受理了此案（案号：2026京0108民初1847号），案件进入司法程序。律师也在2月18日向对方发送了催款律师函，但对方仍未还款。',
  庭审判决阶段:
    '这是案件审理的核心阶段。举证期限在4月10日截止后，法院于4月15日组织了调解，但双方没有达成协议。5月8日正式开庭，对方无故缺席。法院于5月20日送达了判决书，判决支持了您的全部诉求——对方须归还50万元本金及利息，并承担诉讼费8,800元。',
  判决执行阶段:
    '判决书已于6月4日正式生效（上诉期届满，对方未上诉）。根据判决，对方须在6月14日之前还清全部款项。⚠️ 请特别注意：距离这一期限仅剩数日，如对方届时仍未履行，建议立即向法院申请强制执行，以保障您的合法权益。',
}

export async function POST(req: NextRequest) {
  try {
    const { phaseLabel, eventDescriptions, caseTitle } = await req.json()

    if (USE_MOCK) {
      await new Promise((r) => setTimeout(r, 1200))
      const content =
        MOCK_REPORTS[phaseLabel] ||
        `${phaseLabel}阶段已完成，本阶段共涉及${eventDescriptions.length}个关键事件，请与律师进一步确认后续行动计划。`
      return NextResponse.json({ content })
    }

    const { generateReportWithClaude } = await import('@/lib/claude')
    const content = await generateReportWithClaude(phaseLabel, eventDescriptions, caseTitle)
    return NextResponse.json({ content })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: '汇报生成失败，请重试' }, { status: 500 })
  }
}
