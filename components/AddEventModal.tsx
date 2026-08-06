'use client'

import { useState } from 'react'
import { TimelineEvent, EventType, DeadlineType, EVENT_TYPE_LABELS, Phase } from '@/types/timeline'

interface Props {
  phases: Phase[]
  onAdd: (event: TimelineEvent) => void
  onClose: () => void
}

export default function AddEventModal({ phases, onAdd, onClose }: Props) {
  const [form, setForm] = useState({
    date: '',
    eventType: 'custom' as EventType,
    customLabel: '',
    title: '',
    description: '',
    isDeadline: false,
    deadlineType: '' as DeadlineType | '',
    phaseId: phases[0]?.id ?? '',
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.date || !form.title) return
    const event: TimelineEvent = {
      id: `manual-${Date.now()}`,
      date: form.date,
      eventType: form.eventType,
      customLabel: form.eventType === 'custom' ? form.customLabel : undefined,
      title: form.title,
      description: form.description,
      sourceDocument: '手动添加',
      sourceExcerpt: '',
      isDeadline: form.isDeadline,
      deadlineType: form.isDeadline && form.deadlineType ? form.deadlineType : undefined,
      isManual: true,
      phaseId: form.phaseId || undefined,
    }
    onAdd(event)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <h3 className="text-base font-semibold text-slate-800">添加自定义事件</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-xl leading-none">×</button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-slate-600 mb-1 block">日期 *</label>
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600 mb-1 block">事件类型</label>
              <select
                value={form.eventType}
                onChange={(e) => setForm({ ...form, eventType: e.target.value as EventType })}
                className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {(Object.keys(EVENT_TYPE_LABELS) as EventType[]).map((t) => (
                  <option key={t} value={t}>{EVENT_TYPE_LABELS[t]}</option>
                ))}
              </select>
            </div>
          </div>

          {form.eventType === 'custom' && (
            <div>
              <label className="text-xs font-medium text-slate-600 mb-1 block">自定义类型名称</label>
              <input
                type="text"
                placeholder="如：客户见面、内部会议…"
                value={form.customLabel}
                onChange={(e) => setForm({ ...form, customLabel: e.target.value })}
                className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <div>
            <label className="text-xs font-medium text-slate-600 mb-1 block">事件标题 *</label>
            <input
              type="text"
              required
              placeholder="简短描述这个事件"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-slate-600 mb-1 block">详细描述</label>
            <textarea
              rows={2}
              placeholder="可选"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-slate-600 mb-1 block">归属阶段</label>
              <select
                value={form.phaseId}
                onChange={(e) => setForm({ ...form, phaseId: e.target.value })}
                className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">不归属阶段</option>
                {phases.map((p) => (
                  <option key={p.id} value={p.id}>{p.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-slate-600 mb-1 block">截止日类型</label>
              <select
                value={form.deadlineType}
                onChange={(e) => {
                  const v = e.target.value as DeadlineType | ''
                  setForm({ ...form, deadlineType: v, isDeadline: !!v })
                }}
                className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">非截止日</option>
                <option value="appeal">上诉期届满</option>
                <option value="evidence">举证期限</option>
                <option value="limitation">诉讼时效</option>
                <option value="payment">付款期限</option>
                <option value="other">其他截止日</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 text-sm text-slate-600 hover:text-slate-800">
              取消
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              添加事件
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
