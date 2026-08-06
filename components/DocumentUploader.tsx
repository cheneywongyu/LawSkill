'use client'

import { useState, useRef } from 'react'
import { CaseDocument } from '@/types/timeline'
import { mockComplaintText } from '@/data/mock-complaint'
import { mockJudgmentText } from '@/data/mock-judgment'

interface Props {
  onAnalyze: (docs: CaseDocument[]) => void
  loading: boolean
}

const emptyDoc = (): CaseDocument => ({
  id: `doc-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
  name: '',
  content: '',
})

export default function DocumentUploader({ onAnalyze, loading }: Props) {
  const [docs, setDocs] = useState<CaseDocument[]>([
    { id: 'doc-init-1', name: '民事起诉状', content: '' },
  ])
  const [activeTab, setActiveTab] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  function updateDoc(index: number, patch: Partial<CaseDocument>) {
    setDocs((prev) => prev.map((d, i) => (i === index ? { ...d, ...patch } : d)))
  }

  function addDoc() {
    const newDoc = emptyDoc()
    setDocs((prev) => [...prev, { ...newDoc, name: `文书 ${prev.length + 1}` }])
    setActiveTab(docs.length)
  }

  function removeDoc(index: number) {
    if (docs.length === 1) return
    setDocs((prev) => prev.filter((_, i) => i !== index))
    setActiveTab(Math.max(0, activeTab - 1))
  }

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? [])
    files.forEach((file) => {
      const reader = new FileReader()
      reader.onload = (ev) => {
        const content = ev.target?.result as string
        const existingEmpty = docs.findIndex((d) => !d.content)
        if (existingEmpty >= 0) {
          updateDoc(existingEmpty, { name: file.name.replace(/\.[^.]+$/, ''), content })
          setActiveTab(existingEmpty)
        } else {
          const newDoc: CaseDocument = { id: `doc-${Date.now()}`, name: file.name.replace(/\.[^.]+$/, ''), content }
          setDocs((prev) => [...prev, newDoc])
          setActiveTab(docs.length)
        }
      }
      reader.readAsText(file, 'utf-8')
    })
    e.target.value = ''
  }

  function loadDemo() {
    setDocs([
      { id: 'demo-1', name: '民事起诉状', content: mockComplaintText },
      { id: 'demo-2', name: '一审判决书', content: mockJudgmentText },
    ])
    setActiveTab(0)
  }

  const canAnalyze = docs.some((d) => d.content.trim())

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Tabs */}
      <div className="flex items-center gap-1 mb-3 flex-wrap">
        {docs.map((doc, i) => (
          <button
            key={doc.id}
            onClick={() => setActiveTab(i)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg text-sm font-medium transition-colors border-b-2
              ${activeTab === i
                ? 'bg-white border-b-blue-600 text-blue-700 shadow-sm'
                : 'bg-slate-100 border-b-transparent text-slate-500 hover:text-slate-700'}`}
          >
            <span className="max-w-[140px] truncate">{doc.name || `文书 ${i + 1}`}</span>
            {doc.content && <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />}
            {docs.length > 1 && (
              <span
                onClick={(e) => { e.stopPropagation(); removeDoc(i) }}
                className="ml-0.5 text-slate-400 hover:text-red-500 leading-none text-base"
              >×</span>
            )}
          </button>
        ))}
        <button
          onClick={addDoc}
          className="px-3 py-1.5 text-sm text-slate-400 hover:text-blue-600 rounded-t-lg transition-colors"
        >
          + 添加文书
        </button>
      </div>

      {/* Editor */}
      <div className="bg-white rounded-lg rounded-tl-none border border-slate-200 shadow-sm overflow-hidden">
        {docs[activeTab] && (
          <>
            <div className="flex items-center gap-3 px-4 py-2.5 border-b border-slate-100 bg-slate-50">
              <input
                type="text"
                placeholder="文书名称（如：起诉状、判决书…）"
                value={docs[activeTab].name}
                onChange={(e) => updateDoc(activeTab, { name: e.target.value })}
                className="flex-1 text-sm bg-transparent border-none outline-none text-slate-700 placeholder:text-slate-400"
              />
              <span className="text-xs text-slate-300">{docs[activeTab].content.length} 字符</span>
            </div>
            <textarea
              className="w-full min-h-[320px] px-4 py-3 text-sm text-slate-700 leading-relaxed placeholder:text-slate-300 focus:outline-none resize-none font-mono"
              placeholder="在此粘贴文书原文…"
              value={docs[activeTab].content}
              onChange={(e) => updateDoc(activeTab, { content: e.target.value })}
            />
          </>
        )}
      </div>

      {/* Action row */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="text-sm text-slate-500 hover:text-slate-700 flex items-center gap-1.5 transition-colors"
          >
            <span>↑</span> 上传 .txt 文件
          </button>
          <input ref={fileInputRef} type="file" accept=".txt" multiple className="hidden" onChange={handleFileUpload} />
          <span className="text-slate-200">|</span>
          <button onClick={loadDemo} className="text-sm text-blue-500 hover:text-blue-700 transition-colors">
            载入演示数据
          </button>
        </div>

        <button
          onClick={() => onAnalyze(docs.filter((d) => d.content.trim()))}
          disabled={!canAnalyze || loading}
          className="px-6 py-2.5 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2 shadow-sm"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              正在分析…
            </>
          ) : (
            <>开始智能分析</>
          )}
        </button>
      </div>
    </div>
  )
}
