export type EventType =
  | 'case_filed'
  | 'court_hearing'
  | 'judgment'
  | 'contract_signed'
  | 'payment'
  | 'notice'
  | 'evidence_deadline'
  | 'appeal_deadline'
  | 'limitation'
  | 'custom'
  | 'other'

export type DeadlineType = 'appeal' | 'evidence' | 'limitation' | 'payment' | 'other'

export type Urgency = 'expired' | 'critical' | 'warning' | 'normal'

export interface TimelineEvent {
  id: string
  date: string
  eventType: EventType
  title: string
  description: string
  sourceDocument: string
  sourceExcerpt: string
  isDeadline: boolean
  deadlineType?: DeadlineType
  isManual: boolean
  customLabel?: string
  phaseId?: string
}

export interface TimelineEventDisplay extends TimelineEvent {
  daysFromNow: number
  urgency: Urgency
}

export interface Phase {
  id: string
  label: string
  order: number
  startEventId: string
  endEventId?: string
  reportIds: string[]
}

export interface PhaseReport {
  id: string
  phaseId: string
  title: string
  generatedAt: string
  content: string
  isAiGenerated: boolean
}

export interface CaseDocument {
  id: string
  name: string
  content: string
}

export interface ExtractionResult {
  events: TimelineEvent[]
  phases: Phase[]
  caseTitle: string
  summary: string
}

export interface SavedCase {
  id: string
  title: string
  summary: string
  savedAt: string
  updatedAt: string
  result: ExtractionResult
  currentEvents: TimelineEvent[]
  reports: PhaseReport[]
}

export const EVENT_TYPE_LABELS: Record<EventType, string> = {
  case_filed: '立案',
  court_hearing: '开庭',
  judgment: '判决',
  contract_signed: '合同签订',
  payment: '付款/违约',
  notice: '通知送达',
  evidence_deadline: '举证期限',
  appeal_deadline: '上诉期届满',
  limitation: '诉讼时效届满',
  custom: '自定义',
  other: '其他',
}
