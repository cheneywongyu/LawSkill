'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import {
  ExtractionResult,
  TimelineEvent,
  TimelineEventDisplay,
  Phase,
  PhaseReport,
} from '@/types/timeline'
import { enrichEvents, toDisplayDate } from '@/lib/dateUtils'
import {
  getCurrentCaseId,
  saveNewCase,
  updateCase,
  setCurrentCaseId,
} from '@/lib/caseStorage'
import TimelineEventCard from '@/components/TimelineEventCard'
import ReportPanel from '@/components/ReportPanel'
import AddEventModal from '@/components/AddEventModal'
import DeadlineBadge from '@/components/DeadlineBadge'

type TimelineInitialState = {
  result: ExtractionResult
  allEvents: TimelineEventDisplay[]
  reports: PhaseReport[]
  savedCaseId: string | null
  saveStatus: 'idle' | 'saving' | 'saved'
}

function readTimelineInitialState(): TimelineInitialState | null {
  if (typeof window === 'undefined') return null

  const raw = localStorage.getItem('timeline_result')
  if (!raw) return null

  const data: ExtractionResult = JSON.parse(raw)
  const savedEvents = localStorage.getItem('timeline_events')
  const baseEvents = savedEvents ? (JSON.parse(savedEvents) as TimelineEvent[]) : data.events
  const savedReports = localStorage.getItem('timeline_reports')
  const caseId = getCurrentCaseId()

  return {
    result: data,
    allEvents: enrichEvents(baseEvents).sort((a, b) => a.date.localeCompare(b.date)),
    reports: savedReports ? JSON.parse(savedReports) : [],
    savedCaseId: caseId,
    saveStatus: caseId ? 'saved' : 'idle',
  }
}

export default function TimelinePage() {
  const router = useRouter()
  const [initialState] = useState<TimelineInitialState | null>(() => readTimelineInitialState())
  const [result] = useState<ExtractionResult | null>(initialState?.result ?? null)
  const [allEvents, setAllEvents] = useState<TimelineEventDisplay[]>(initialState?.allEvents ?? [])
  const [reports, setReports] = useState<PhaseReport[]>(initialState?.reports ?? [])
  const [activePhaseId, setActivePhaseId] = useState<string | null>(null)
  const [showAddModal, setShowAddModal] = useState(false)
  const [savedCaseId, setSavedCaseId] = useState<string | null>(initialState?.savedCaseId ?? null)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>(initialState?.saveStatus ?? 'idle')

  useEffect(() => {
    const raw = localStorage.getItem('timeline_result')
    if (!raw) router.push('/')
  }, [router])

  const addEvent = useCallback((event: TimelineEvent) => {
    setAllEvents((prev) =>
      enrichEvents([...prev.map(({ daysFromNow: _, urgency: __, ...e }) => e), event]).sort(
        (a, b) => a.date.localeCompare(b.date)
      )
    )
    setSaveStatus('idle') // mark as dirty
  }, [])

  function handleSave() {
    if (!result) return
    setSaveStatus('saving')
    const rawEvents = allEvents.map(({ daysFromNow: _, urgency: __, ...e }) => e)
    if (savedCaseId) {
      updateCase(savedCaseId, rawEvents, reports)
    } else {
      const saved = saveNewCase(result, rawEvents, reports)
      setSavedCaseId(saved.id)
      setCurrentCaseId(saved.id)
    }
    setSaveStatus('saved')
  }

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-blue-600/30 border-t-blue-600 rounded-full animate-spin" />
      </div>
    )
  }

  const phases = [...result.phases].sort((a, b) => a.order - b.order)

  function getPhaseEvents(phase: Phase): TimelineEventDisplay[] {
    return allEvents.filter((e) => e.phaseId === phase.id)
  }

  const unphased = allEvents.filter((e) => !e.phaseId)
  const deadlines = allEvents.filter((e) => e.isDeadline)
  const expiredCount = deadlines.filter((e) => e.urgency === 'expired').length
  const criticalCount = deadlines.filter((e) => e.urgency === 'critical').length
  const warningCount = deadlines.filter((e) => e.urgency === 'warning').length

  const activePhase = phases.find((p) => p.id === activePhaseId) ?? null
  const activePhaseEvents = activePhase ? getPhaseEvents(activePhase) : []

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-5 py-3.5 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button
            onClick={() => router.push('/')}
            className="text-slate-400 hover:text-slate-600 transition-colors text-sm shrink-0"
          >
            ← 案件列表
          </button>
          <div className="flex-1 min-w-0">
            <h1 className="text-sm font-semibold text-slate-800 truncate">{result.caseTitle}</h1>
            <p className="text-xs text-slate-400 mt-0.5 truncate">{result.summary}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
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
            {/* Save button */}
            <button
              onClick={handleSave}
              disabled={saveStatus === 'saving'}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                saveStatus === 'saved'
                  ? 'bg-green-100 text-green-700 hover:bg-green-200'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              } disabled:opacity-60`}
            >
              {saveStatus === 'saving' ? '保存中…' : saveStatus === 'saved' ? '✓ 已保存' : '保存案件'}
            </button>
          </div>
        </div>
      </header>

      {/* Deadline alert bar */}
      {(expiredCount > 0 || criticalCount > 0) && (
        <div className={`px-5 py-2.5 text-xs font-medium text-center ${expiredCount > 0 ? 'bg-red-600 text-white' : 'bg-orange-500 text-white'}`}>
          {expiredCount > 0
            ? `⚠ 有 ${expiredCount} 个截止日已过期，请立即与律师确认后续行动`
            : `⚠ 有 ${criticalCount} 个截止日将在 7 天内到期，请尽快处理`}
        </div>
      )}

      {/* Main layout */}
      <div className={`flex-1 transition-all ${activePhaseId ? 'mr-0 sm:mr-[400px]' : ''}`}>
        <main className="max-w-4xl mx-auto px-5 py-6">
          {/* Timeline stats */}
          <div className="flex items-center gap-6 mb-6 text-xs text-slate-500">
            <span className="font-medium text-slate-700">{allEvents.length} 个事件</span>
            <span>{deadlines.length} 个截止日</span>
            <span>{phases.length} 个阶段</span>
            {allEvents.length > 0 && (
              <span className="ml-auto text-slate-400">
                {toDisplayDate(allEvents[0].date)} — {toDisplayDate(allEvents[allEvents.length - 1].date)}
              </span>
            )}
          </div>

          {/* Phases */}
          {phases.map((phase) => {
            const events = getPhaseEvents(phase)
            const phaseDeadlines = events.filter((e) => e.isDeadline)
            const urgencyOrder: Record<string, number> = { expired: 4, critical: 3, warning: 2, normal: 1 }
            const worstUrgency = phaseDeadlines.reduce<string>((worst, e) => {
              return (urgencyOrder[e.urgency] ?? 0) > (urgencyOrder[worst] ?? 0) ? e.urgency : worst
            }, 'normal')

            const isActive = activePhaseId === phase.id

            return (
              <div key={phase.id} className="mb-8">
                <div
                  className="flex items-center justify-between mb-4 cursor-pointer group"
                  onClick={() => setActivePhaseId(isActive ? null : phase.id)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded flex items-center justify-center text-xs font-bold text-white shrink-0
                      ${worstUrgency === 'expired' ? 'bg-red-500' :
                        worstUrgency === 'critical' ? 'bg-orange-500' :
                        worstUrgency === 'warning' ? 'bg-amber-500' : 'bg-slate-700'}`}>
                      {phase.order}
                    </div>
                    <h2 className="text-sm font-semibold text-slate-800">{phase.label}</h2>
                    <span className="text-xs text-slate-400">{events.length} 项</span>
                    {phaseDeadlines.map((e) => (
                      <DeadlineBadge key={e.id} urgency={e.urgency} daysFromNow={e.daysFromNow} />
                    ))}
                  </div>
                  <button
                    onClick={(ev) => { ev.stopPropagation(); setActivePhaseId(isActive ? null : phase.id) }}
                    className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors
                      ${isActive
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-700 group-hover:bg-blue-50 group-hover:text-blue-700'}`}
                  >
                    {isActive ? '关闭汇报' : '查看汇报'}
                  </button>
                </div>

                <div className="pl-2">
                  {events.length === 0 ? (
                    <p className="text-xs text-slate-400 pl-6 py-2">本阶段暂无事件</p>
                  ) : (
                    events.map((event, i) => (
                      <TimelineEventCard key={event.id} event={event} isLast={i === events.length - 1} />
                    ))
                  )}
                </div>
              </div>
            )
          })}

          {unphased.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-sm font-semibold text-slate-500">未归属阶段的事件</h2>
              </div>
              <div className="pl-2">
                {unphased.map((event, i) => (
                  <TimelineEventCard key={event.id} event={event} isLast={i === unphased.length - 1} />
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Report panel empty state hint */}
      {!activePhaseId && (
        <div className="fixed bottom-24 right-6 w-48 bg-white border border-slate-200 rounded-xl shadow-sm p-4 text-center z-30">
          <div className="text-xl mb-2">📋</div>
          <p className="text-xs text-slate-500 leading-relaxed">
            点击各阶段的
            <span className="font-medium text-slate-700">「查看汇报」</span>
            ，一键生成客户友好的进度汇报
          </p>
        </div>
      )}

      {/* Report panel */}
      {activePhase && (
        <ReportPanel
          phase={activePhase}
          events={activePhaseEvents}
          caseTitle={result.caseTitle}
          reports={reports}
          onReportGenerated={(r) => {
            const updated = [...reports.filter((x) => x.phaseId !== r.phaseId), r]
            setReports(updated)
            setSaveStatus('idle')
          }}
          onClose={() => setActivePhaseId(null)}
        />
      )}

      {/* Add event FAB */}
      <button
        onClick={() => setShowAddModal(true)}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-xl z-40"
        title="添加自定义事件"
      >
        +
      </button>

      {showAddModal && (
        <AddEventModal
          phases={phases}
          onAdd={addEvent}
          onClose={() => setShowAddModal(false)}
        />
      )}
    </div>
  )
}
