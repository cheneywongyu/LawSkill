'use client'

import { SavedCase } from '@/types/timeline'
import { enrichEvents } from '@/lib/dateUtils'

interface Props {
  savedCase: SavedCase
  onOpen: (c: SavedCase) => void
  onDelete: (id: string) => void
}

export default function CaseCard({ savedCase, onOpen, onDelete }: Props) {
  const enriched = enrichEvents(savedCase.currentEvents)
  const deadlines = enriched.filter((e) => e.isDeadline)
  const expiredCount = deadlines.filter((e) => e.urgency === 'expired').length
  const criticalCount = deadlines.filter((e) => e.urgency === 'critical').length
  const warningCount = deadlines.filter((e) => e.urgency === 'warning').length

  const updatedAt = new Date(savedCase.updatedAt)
  const dateStr = `${updatedAt.getFullYear()}/${updatedAt.getMonth() + 1}/${updatedAt.getDate()}`

  return (
    <div
      onClick={() => onOpen(savedCase)}
      className="bg-white border border-slate-200 rounded-xl p-5 cursor-pointer hover:shadow-md hover:border-blue-200 transition-all group"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-sm font-semibold text-slate-800 group-hover:text-blue-700 transition-colors line-clamp-2 leading-snug">
          {savedCase.title}
        </h3>
        <button
          onClick={(e) => { e.stopPropagation(); onDelete(savedCase.id) }}
          className="shrink-0 text-slate-300 hover:text-red-400 transition-colors text-lg leading-none mt-0.5"
          title="删除案件"
        >
          ×
        </button>
      </div>

      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">{savedCase.summary}</p>

      <div className="flex items-center gap-2 flex-wrap mb-3">
        {expiredCount > 0 && (
          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">
            {expiredCount} 已过期
          </span>
        )}
        {criticalCount > 0 && (
          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
            {criticalCount} 紧急
          </span>
        )}
        {warningCount > 0 && (
          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
            {warningCount} 临近
          </span>
        )}
        {expiredCount === 0 && criticalCount === 0 && warningCount === 0 && deadlines.length > 0 && (
          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
            截止日正常
          </span>
        )}
      </div>

      <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-3">
        <span>{savedCase.currentEvents.length} 个事件 · {savedCase.result.phases.length} 个阶段</span>
        <span>更新于 {dateStr}</span>
      </div>
    </div>
  )
}
