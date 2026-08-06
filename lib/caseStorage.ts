import { SavedCase, ExtractionResult, TimelineEvent, PhaseReport } from '@/types/timeline'

const STORAGE_KEY = 'legal_saved_cases'
const CURRENT_ID_KEY = 'legal_current_case_id'

export function getAllCases(): SavedCase[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') as SavedCase[]
  } catch {
    return []
  }
}

export function getCase(id: string): SavedCase | null {
  return getAllCases().find((c) => c.id === id) ?? null
}

export function saveNewCase(
  result: ExtractionResult,
  currentEvents: TimelineEvent[],
  reports: PhaseReport[]
): SavedCase {
  const now = new Date().toISOString()
  const newCase: SavedCase = {
    id: `case-${Date.now()}`,
    title: result.caseTitle,
    summary: result.summary,
    savedAt: now,
    updatedAt: now,
    result,
    currentEvents,
    reports,
  }
  const cases = getAllCases()
  cases.unshift(newCase)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cases))
  localStorage.setItem(CURRENT_ID_KEY, newCase.id)
  return newCase
}

export function updateCase(
  id: string,
  currentEvents: TimelineEvent[],
  reports: PhaseReport[]
): void {
  const cases = getAllCases()
  const idx = cases.findIndex((c) => c.id === id)
  if (idx === -1) return
  cases[idx] = { ...cases[idx], currentEvents, reports, updatedAt: new Date().toISOString() }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cases))
}

export function deleteCase(id: string): void {
  const cases = getAllCases().filter((c) => c.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cases))
  if (getCurrentCaseId() === id) clearCurrentCaseId()
}

export function getCurrentCaseId(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(CURRENT_ID_KEY)
}

export function setCurrentCaseId(id: string): void {
  localStorage.setItem(CURRENT_ID_KEY, id)
}

export function clearCurrentCaseId(): void {
  localStorage.removeItem(CURRENT_ID_KEY)
}
