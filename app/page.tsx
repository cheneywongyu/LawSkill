'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { SavedCase } from '@/types/timeline'
import { getAllCases, deleteCase, setCurrentCaseId } from '@/lib/caseStorage'
import CaseCard from '@/components/CaseCard'

export default function DashboardPage() {
  const router = useRouter()
  const [cases, setCases] = useState<SavedCase[]>([])
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)

  useEffect(() => {
    const refresh = window.setTimeout(() => {
      setCases(getAllCases())
    }, 0)
    return () => window.clearTimeout(refresh)
  }, [])

  function handleOpen(c: SavedCase) {
    localStorage.setItem('timeline_result', JSON.stringify(c.result))
    localStorage.setItem('timeline_events', JSON.stringify(c.currentEvents))
    localStorage.setItem('timeline_reports', JSON.stringify(c.reports))
    setCurrentCaseId(c.id)
    router.push('/timeline')
  }

  function handleDelete(id: string) {
    if (deleteConfirm !== id) {
      setDeleteConfirm(id)
      setTimeout(() => setDeleteConfirm(null), 3000)
      return
    }
    deleteCase(id)
    setCases(getAllCases())
    setDeleteConfirm(null)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
              <span className="text-white text-sm font-bold">法</span>
            </div>
            <div>
              <h1 className="text-sm font-semibold text-slate-800">案件时间线 AI</h1>
              <p className="text-xs text-slate-400">Legal Timeline · Powered by Claude</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => router.push('/skills-platform')}
              className="hidden sm:flex items-center gap-2 px-3 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-200 transition-colors"
            >
              Skill 平台原型
            </button>
            <button
              onClick={() => router.push('/new')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              <span className="text-base leading-none">+</span>
              新建案件分析
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 px-6 py-8 max-w-5xl mx-auto w-full">
        {cases.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="w-20 h-20 rounded-2xl bg-slate-100 flex items-center justify-center mb-5 text-4xl">
              📁
            </div>
            <h2 className="text-lg font-semibold text-slate-700 mb-2">暂无案件记录</h2>
            <p className="text-sm text-slate-400 mb-6 max-w-sm leading-relaxed">
              上传案件文书，AI 自动提取时间线、预警截止日，保存后在此管理所有案件
            </p>
            <button
              onClick={() => router.push('/new')}
              className="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
            >
              开始分析第一个案件
            </button>

            {/* Feature preview */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
              {[
                { icon: '⚡', title: 'AI 智能抽取', desc: '从起诉状、判决书等文书中自动识别所有关键时间节点' },
                { icon: '⏰', title: '截止日预警', desc: '自动高亮上诉期、举证期限等关键截止日，显示距今天数' },
                { icon: '📋', title: '阶段汇报', desc: '按案件阶段一键生成客户友好的进度汇报，随时复制发送' },
              ].map((f) => (
                <div key={f.title} className="bg-white border border-slate-200 rounded-xl p-4 text-left">
                  <div className="text-2xl mb-2">{f.icon}</div>
                  <p className="text-xs font-semibold text-slate-700 mb-1">{f.title}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Stats bar */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-base font-semibold text-slate-800">案件管理</h2>
                <p className="text-xs text-slate-400 mt-0.5">共 {cases.length} 个案件</p>
              </div>
            </div>

            {/* Cases grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cases.map((c) => (
                <div key={c.id} className="relative">
                  {deleteConfirm === c.id && (
                    <div className="absolute inset-0 z-10 bg-white/95 rounded-xl flex flex-col items-center justify-center border border-red-200 gap-3">
                      <p className="text-sm font-medium text-slate-700">确认删除此案件？</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setDeleteConfirm(null)}
                          className="px-3 py-1.5 text-xs text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                        >
                          取消
                        </button>
                        <button
                          onClick={() => handleDelete(c.id)}
                          className="px-3 py-1.5 text-xs text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
                        >
                          确认删除
                        </button>
                      </div>
                    </div>
                  )}
                  <CaseCard
                    savedCase={c}
                    onOpen={handleOpen}
                    onDelete={handleDelete}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  )
}
