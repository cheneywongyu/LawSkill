'use client'

import { useState } from 'react'
import { Phase, TimelineEventDisplay, PhaseReport } from '@/types/timeline'
import ReactMarkdown from 'react-markdown'

interface Props {
  phase: Phase | null
  events: TimelineEventDisplay[]
  caseTitle: string
  reports: PhaseReport[]
  onReportGenerated: (report: PhaseReport) => void
  onClose: () => void
}

export default function ReportPanel({ phase, events, caseTitle, reports, onReportGenerated, onClose }: Props) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const existingReport = phase ? reports.find((r) => r.phaseId === phase.id) : null

  async function generateReport() {
    if (!phase) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phaseLabel: phase.label,
          eventDescriptions: events.map((e) => `${e.date} ${e.title}：${e.description}`),
          caseTitle,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || '生成失败')
      const report: PhaseReport = {
        id: `report-${Date.now()}`,
        phaseId: phase.id,
        title: `${phase.label} — 进度汇报`,
        generatedAt: new Date().toISOString(),
        content: data.content,
        isAiGenerated: true,
      }
      onReportGenerated(report)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : '未知错误')
    } finally {
      setLoading(false)
    }
  }

  async function copyToClipboard(text: string) {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!phase) return null

  return (
    <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-40 flex flex-col border-l border-slate-200">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50">
        <div>
          <p className="text-xs text-slate-400 font-medium">阶段汇报</p>
          <h3 className="text-sm font-semibold text-slate-800 mt-0.5">{phase.label}</h3>
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-xl leading-none p-1">×</button>
      </div>

      {/* Events summary */}
      <div className="px-5 py-3 border-b border-slate-100 bg-slate-50/50">
        <p className="text-xs text-slate-500 mb-2">本阶段事件（{events.length}项）</p>
        <ul className="space-y-1">
          {events.map((e) => (
            <li key={e.id} className="flex items-center gap-2 text-xs text-slate-600">
              <span className="text-slate-300 tabular-nums shrink-0">{e.date}</span>
              <span>{e.title}</span>
              {e.isDeadline && (
                <span className={`ml-auto shrink-0 px-1.5 rounded text-xs font-medium
                  ${e.urgency === 'expired' ? 'text-red-600 bg-red-50' :
                    e.urgency === 'critical' ? 'text-orange-600 bg-orange-50' :
                    e.urgency === 'warning' ? 'text-amber-600 bg-amber-50' : ''}`}>
                  截止
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Report content */}
      <div className="flex-1 overflow-y-auto px-5 py-4">
        {existingReport ? (
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-slate-400">
                {existingReport.isAiGenerated ? 'AI 生成' : '手动编辑'} · {new Date(existingReport.generatedAt).toLocaleString('zh-CN')}
              </span>
              <button
                onClick={() => copyToClipboard(existingReport.content)}
                className="text-xs text-blue-600 hover:text-blue-800 font-medium"
              >
                {copied ? '已复制 ✓' : '复制'}
              </button>
            </div>
            <div className="prose prose-sm prose-slate max-w-none">
              <ReactMarkdown>{existingReport.content}</ReactMarkdown>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-center py-12">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4 text-xl">📋</div>
            <p className="text-sm text-slate-500 mb-1">尚未生成本阶段汇报</p>
            <p className="text-xs text-slate-400">点击下方按钮，AI将自动生成客户友好的进度汇报</p>
          </div>
        )}

        {error && (
          <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">{error}</div>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-slate-100">
        <button
          onClick={generateReport}
          disabled={loading}
          className="w-full py-2.5 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              正在生成汇报…
            </>
          ) : existingReport ? (
            '重新生成汇报'
          ) : (
            '生成阶段汇报'
          )}
        </button>
      </div>
    </div>
  )
}
