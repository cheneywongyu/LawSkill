'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import DocumentUploader from '@/components/DocumentUploader'
import { CaseDocument } from '@/types/timeline'
import { clearCurrentCaseId } from '@/lib/caseStorage'

export default function NewCasePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleAnalyze(docs: CaseDocument[]) {
    setLoading(true)
    setError('')
    clearCurrentCaseId()
    try {
      const res = await fetch('/api/extract', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ documents: docs }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || '分析失败')
      localStorage.setItem('timeline_result', JSON.stringify(data))
      router.push('/timeline')
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : '未知错误，请重试')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <button onClick={() => router.push('/')} className="text-slate-400 hover:text-slate-600 text-sm transition-colors">
            ← 返回
          </button>
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-bold">法</span>
            </div>
            <div>
              <h1 className="text-sm font-semibold text-slate-800">新建案件分析</h1>
              <p className="text-xs text-slate-400">Legal Timeline · Powered by Claude</p>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-white border-b border-slate-100 px-6 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">智能提取案件关键时间节点</h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
            粘贴起诉状、判决书、通知书等文书，AI 自动梳理时间线、预警截止日，一键生成客户汇报
          </p>
          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">
            {[
              { icon: '⚡', text: 'AI 智能抽取' },
              { icon: '⏰', text: '截止日预警' },
              { icon: '📋', text: '阶段汇报生成' },
              { icon: '✏️', text: '手动添加事件' },
            ].map((f) => (
              <span key={f.text} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                <span>{f.icon}</span>{f.text}
              </span>
            ))}
          </div>
        </div>
      </div>

      <main className="flex-1 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-slate-700">上传案件文书</h3>
            <span className="text-xs text-slate-400">支持多份文书同时分析</span>
          </div>

          <DocumentUploader onAnalyze={handleAnalyze} loading={loading} />

          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600 text-center">
              {error}
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: '支持文书类型', body: '起诉状、答辩状、判决书、裁定书、调解书、通知书、合同等任意有明确日期的文书' },
              { title: '隐私与安全', body: '文书内容仅在本次会话中使用，不做持久化存储，建议脱敏后上传' },
              { title: '最佳实践', body: '同时上传多份文书效果更佳，AI 可以跨文书关联同一案件的完整时间线' },
            ].map((tip) => (
              <div key={tip.title} className="bg-white rounded-lg border border-slate-200 p-4">
                <p className="text-xs font-semibold text-slate-700 mb-1">{tip.title}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
