import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '律所 Skill 工作台',
  description: '律所内部 AI 工作能力库、Skill 推荐、编辑与试跑平台',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className="h-full">
      <body className="min-h-full flex flex-col bg-slate-50">{children}</body>
    </html>
  )
}
