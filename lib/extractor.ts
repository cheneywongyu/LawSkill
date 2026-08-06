import { CaseDocument, ExtractionResult } from '@/types/timeline'
import { mockExtractionResult } from '@/data/mock-extraction'

const USE_MOCK = false

export async function extractTimeline(documents: CaseDocument[]): Promise<ExtractionResult> {
  if (USE_MOCK) {
    await new Promise((r) => setTimeout(r, 1800))
    return mockExtractionResult
  }

  // Real Claude extraction — swap USE_MOCK to false and configure ANTHROPIC_API_KEY
  const { extractWithClaude } = await import('./claude')
  return extractWithClaude(documents)
}
