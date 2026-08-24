import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nocturne · 库洛洛桌面伴侣',
  description: '以库洛洛·鲁西鲁为灵感的沉浸式 Codex 桌面宠物',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  )
}
