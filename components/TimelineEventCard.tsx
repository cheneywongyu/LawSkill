'use client'

import { TimelineEventDisplay, EVENT_TYPE_LABELS } from '@/types/timeline'
import { toDisplayDate } from '@/lib/dateUtils'
import DeadlineBadge from './DeadlineBadge'

interface Props {
  event: TimelineEventDisplay
  isLast: boolean
}

const typeColors: Record<string, string> = {
  case_filed: 'bg-blue-600',
  court_hearing: 'bg-violet-600',
  judgment: 'bg-slate-700',
  contract_signed: 'bg-teal-600',
  payment: 'bg-rose-600',
  notice: 'bg-sky-500',
  evidence_deadline: 'bg-amber-500',
  appeal_deadline: 'bg-orange-500',
  limitation: 'bg-red-600',
  custom: 'bg-indigo-500',
  other: 'bg-slate-400',
}

const urgencyBorder: Record<string, string> = {
  expired: 'border-l-red-400',
  critical: 'border-l-orange-400',
  warning: 'border-l-amber-400',
  normal: 'border-l-slate-200',
}

export default function TimelineEventCard({ event, isLast }: Props) {
  const dotColor = typeColors[event.eventType] ?? 'bg-slate-400'
  const cardBorder = event.isDeadline ? urgencyBorder[event.urgency] : 'border-l-slate-200'

  return (
    <div className="flex gap-4">
      {/* Spine */}
      <div className="flex flex-col items-center">
        <div className={`w-3 h-3 rounded-full mt-1 shrink-0 ${dotColor} ring-2 ring-white ring-offset-1`} />
        {!isLast && <div className="w-px flex-1 bg-slate-200 mt-1" />}
      </div>

      {/* Card */}
      <div className={`mb-6 flex-1 bg-white rounded-lg border border-slate-200 border-l-4 ${cardBorder} shadow-sm hover:shadow-md transition-shadow`}>
        <div className="p-4">
          {/* Header row */}
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-medium text-slate-400 tabular-nums">{toDisplayDate(event.date)}</span>
              <span className="text-xs px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
                {event.eventType === 'custom' && event.customLabel
                  ? event.customLabel
                  : EVENT_TYPE_LABELS[event.eventType]}
              </span>
              {event.isManual && (
                <span className="text-xs px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-600">手动添加</span>
              )}
            </div>
            {event.isDeadline && (
              <div className="shrink-0">
                <DeadlineBadge urgency={event.urgency} daysFromNow={event.daysFromNow} />
              </div>
            )}
          </div>

          {/* Title */}
          <h4 className="text-sm font-semibold text-slate-800 mb-1">{event.title}</h4>

          {/* Description */}
          <p className="text-sm text-slate-600 leading-relaxed mb-3">{event.description}</p>

          {/* Source excerpt */}
          <details className="group">
            <summary className="text-xs text-slate-400 cursor-pointer hover:text-slate-600 select-none list-none flex items-center gap-1">
              <span className="group-open:rotate-90 inline-block transition-transform">▶</span>
              来源：{event.sourceDocument}
            </summary>
            <blockquote className="mt-2 pl-3 border-l-2 border-slate-200 text-xs text-slate-500 leading-relaxed italic">
              {event.sourceExcerpt}
            </blockquote>
          </details>
        </div>
      </div>
    </div>
  )
}
