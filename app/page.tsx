'use client'

import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'

type Mood = 'reading' | 'observing' | 'resting'

const moods: Record<Mood, { label: string; title: string; line: string; focus: number; icon: string }> = {
  reading: { label: '阅读', title: '沉浸于书页之间', line: '文字不会背叛你。误读它的人才会。', focus: 92, icon: '⌑' },
  observing: { label: '观察', title: '审视屏幕之外', line: '有趣。你刚才停顿了三秒——在犹豫吗？', focus: 78, icon: '◉' },
  resting: { label: '静默', title: '短暂的留白', line: '安静并非空无，它只是尚未开口。', focus: 64, icon: '◌' },
}

const whispers = [
  '真正重要的东西，往往不会主动发出声音。',
  '你今天的思绪，比昨天更有秩序。',
  '不必急于抵达。观察本身就是答案的一部分。',
  '收藏不是占有，而是理解一件事物曾经存在。',
]

export default function ChrolloCompanion() {
  const [mood, setMood] = useState<Mood>('reading')
  const [bond, setBond] = useState(73)
  const [line, setLine] = useState(moods.reading.line)
  const [time, setTime] = useState('')
  const [minimal, setMinimal] = useState(false)
  const current = moods[mood]

  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat('zh-CN', { hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date()))
    update()
    const timer = window.setInterval(update, 30000)
    return () => window.clearInterval(timer)
  }, [])

  const date = useMemo(() => new Intl.DateTimeFormat('zh-CN', { month: 'long', day: 'numeric', weekday: 'short' }).format(new Date()), [])

  function changeMood(next: Mood) {
    setMood(next)
    setLine(moods[next].line)
  }

  function talk() {
    setLine(whispers[Math.floor(Math.random() * whispers.length)])
    setBond((value) => Math.min(100, value + 1))
  }

  return (
    <main className={`chrollo-shell ${minimal ? 'is-minimal' : ''}`}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="pet-nav">
        <div className="pet-brand">
          <span className="spider-mark">☸</span>
          <div><b>NOCTURNE</b><small>CODEX COMPANION</small></div>
        </div>
        <div className="nav-actions">
          <span className="online"><i />灵魂连接稳定</span>
          <button aria-label="切换极简模式" onClick={() => setMinimal((value) => !value)}>◐</button>
          <button aria-label="更多设置">•••</button>
        </div>
      </header>

      <section className="pet-stage">
        <aside className="identity-panel">
          <p className="eyebrow">SUBJECT 00 · PHANTOM</p>
          <h1>库洛洛<br /><em>鲁西鲁</em></h1>
          <p className="roman">CHROLLO LUCILFER</p>
          <div className="quote-mark">“</div>
          <p className="character-note">冷静的观察者，危险的收藏家。<br />他不负责取悦，只负责陪你看清。</p>
          <div className="traits">
            <span>理性</span><span>神秘</span><span>克制</span>
          </div>
        </aside>

        <div className="character-zone">
          <div className="moon-disc"><span>0</span><span>0</span></div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="character-halo" />
          <Image className="character-image" src="/chrollo-pet.png" alt="库洛洛·鲁西鲁桌面宠物形象" width={1024} height={1024} priority />
          <div className="speech-card" onClick={talk} role="button" tabIndex={0}>
            <span>CHROLLO SAYS</span><p>“{line}”</p><small>点击听他继续说</small>
          </div>
        </div>

        <aside className="status-panel">
          <div className="clock"><b>{time || '00:00'}</b><span>{date}</span></div>
          <div className="status-card">
            <div className="status-title"><span>{current.icon}</span><div><small>当前状态</small><b>{current.title}</b></div></div>
            <div className="meter-label"><span>专注度</span><strong>{current.focus}%</strong></div>
            <div className="meter"><i style={{ width: `${current.focus}%` }} /></div>
            <div className="meter-label"><span>羁绊值</span><strong>{bond}%</strong></div>
            <div className="meter bond"><i style={{ width: `${bond}%` }} /></div>
          </div>
          <div className="thought-card"><span>此刻在想</span><p>“人为什么会为了得不到的东西，编造出永恒？”</p></div>
        </aside>
      </section>

      <footer className="pet-dock">
        <span className="dock-caption">INTERACTION</span>
        {(Object.keys(moods) as Mood[]).map((item) => (
          <button key={item} className={mood === item ? 'active' : ''} onClick={() => changeMood(item)}>
            <i>{moods[item].icon}</i><span>{moods[item].label}</span>
          </button>
        ))}
        <div className="dock-rule" />
        <button onClick={talk}><i>◇</i><span>低语</span></button>
        <button onClick={() => setBond((value) => Math.min(100, value + 3))}><i>✦</i><span>赠礼</span></button>
      </footer>
    </main>
  )
}
