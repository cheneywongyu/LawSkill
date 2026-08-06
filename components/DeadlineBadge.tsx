'use client'

import { Urgency } from '@/types/timeline'
import { formatDaysLabel } from '@/lib/dateUtils'

interface Props {
  urgency: Urgency
  daysFromNow: number
}

const styles: Record<Urgency, string> = {
  expired: 'bg-red-50 text-red-700 border border-red-200',
  critical: 'bg-orange-50 text-orange-700 border border-orange-200',
  warning: 'bg-amber-50 text-amber-700 border border-amber-200',
  normal: 'bg-blue-50 text-blue-700 border border-blue-200',
}

const icons: Record<Urgency, string> = {
  expired: '⚠',
  critical: '⚠',
  warning: '◎',
  normal: '◷',
}

export default function DeadlineBadge({ urgency, daysFromNow }: Props) {
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${styles[urgency]}`}>
      <span>{icons[urgency]}</span>
      {formatDaysLabel(daysFromNow)}
    </span>
  )
}
