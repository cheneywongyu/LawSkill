import { NextRequest, NextResponse } from 'next/server'
import { extractTimeline } from '@/lib/extractor'
import { CaseDocument } from '@/types/timeline'

export async function POST(req: NextRequest) {
  try {
    const { documents } = (await req.json()) as { documents: CaseDocument[] }
    if (!documents?.length) {
      return NextResponse.json({ error: '请至少上传一份文书' }, { status: 400 })
    }
    const result = await extractTimeline(documents)
    return NextResponse.json(result)
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: '抽取失败，请重试' }, { status: 500 })
  }
}
