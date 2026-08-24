'use client'

import { useMemo, useState } from 'react'
import {
  ecosystem,
  type EcosystemSection,
  type LegalSkillEcosystem,
} from '@/data/legalSkillEcosystem'

// 从共享 JSON 数据源渲染「法律技能生态」视图，与 public 下的 hub.html 同源。
export default function EcosystemView() {
  const data: LegalSkillEcosystem = ecosystem

  return (
    <div className="space-y-5">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-xl px-6 py-8 text-white shadow-lg" style={{ background: 'linear-gradient(135deg,#1e3a5f,#14253d)' }}>
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(circle at 20% 20%, #b8860b 0%, transparent 45%), radial-gradient(circle at 80% 70%, #b8860b 0%, transparent 40%)' }}
        />
        <div className="relative">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">{data.title}</h2>
              <p className="mt-2 max-w-2xl text-sm text-blue-100/80">{data.hero.subtitle}</p>
            </div>
            <a
              href="/deepseek-harness-legal-skills-hub.html"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              查看静态聚合页 ↗
            </a>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {data.hero.stats.map((s) => (
              <div key={s.label} className="min-w-[120px] rounded-lg border border-white/25 bg-white/10 px-4 py-3 backdrop-blur-sm">
                <p className="text-xl font-bold text-white">{s.num}</p>
                <p className="mt-0.5 text-[11px] text-blue-100/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 平台入口 */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-slate-950">法律技能平台入口</h3>
          <p className="mt-1 text-xs text-slate-500">一键直达各聚合平台的官方仓库与门户</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {data.platforms.map((p, i) => (
            <a
              key={`${p.name}-${i}`}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-lg border border-slate-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-[#1e3a5f] hover:shadow-md"
            >
              <h4 className="text-sm font-semibold text-[#1e3a5f] group-hover:underline">{p.name}</h4>
              <p className="mt-1.5 text-xs leading-5 text-slate-600">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.meta.map((m, i) => (
                  <span key={`${m}-${i}`} className="rounded bg-slate-100 px-2 py-0.5 text-[10px] text-slate-500">{m}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 各来源版块 */}
      {data.sections.map((section) => (
        <EcosystemSectionBlock key={section.id} section={section} />
      ))}

      {/* Footer 来源 */}
      <section className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-center">
        <p className="text-xs text-slate-500">
          数据来源：
          {data.footer.sources.map((f, i) => (
            <span key={f.name}>
              {i > 0 && ' · '}
              <a href={f.href} target="_blank" rel="noreferrer" className="font-medium text-[#1e3a5f] hover:underline">
                {f.name}
              </a>
            </span>
          ))}
        </p>
        <p className="mt-1.5 text-[11px] text-slate-400">{data.footer.note}</p>
      </section>
    </div>
  )
}

function EcosystemSectionBlock({ section }: { section: EcosystemSection }) {
  const [activeCat, setActiveCat] = useState('all')

  const cats = useMemo(() => [...new Set(section.cards.map((c) => c.category).filter(Boolean))], [section])
  const visibleCards = activeCat === 'all' ? section.cards : section.cards.filter((c) => c.category === activeCat)

  return (
    <section id={`eco-${section.id}`} className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-start gap-2.5 border-l-4 border-[#b8860b] bg-slate-50/70 py-3 pl-3.5 pr-4">
        <div className="min-w-0">
          {section.icon && <p className="text-[10px] font-semibold uppercase tracking-wide text-[#1e3a5f]">{section.icon}</p>}
          <h3 className="text-sm font-semibold text-slate-950">{section.title}</h3>
          <div
            className="mt-1 text-xs leading-5 text-slate-500 [&_a]:font-medium [&_a]:text-[#1e3a5f] [&_a]:underline"
            dangerouslySetInnerHTML={{ __html: section.desc }}
          />
        </div>
      </div>

      {cats.length > 1 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setActiveCat('all')}
            className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors ${
              activeCat === 'all' ? 'bg-[#1e3a5f] text-white' : 'border border-slate-200 bg-slate-50 text-slate-600 hover:bg-white'
            }`}
          >
            全部
          </button>
          {cats.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActiveCat(c)}
              className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors ${
                activeCat === c ? 'bg-[#1e3a5f] text-white' : 'border border-slate-200 bg-slate-50 text-slate-600 hover:bg-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {visibleCards.map((card, i) => (
          <a
            key={`${card.name}-${i}`}
            href={card.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col rounded-lg border border-slate-200 bg-white p-3.5 transition-all hover:border-[#1e3a5f] hover:shadow-sm"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="text-[13px] font-semibold break-all text-[#1e3a5f] group-hover:underline">{card.name}</span>
              {card.badge && (
                <span
                  className="shrink-0 rounded border border-[#b8860b]/60 bg-[#b8860b]/5 px-1.5 py-0.5 text-[10px] font-medium text-[#8a6a0e]"
                >
                  {card.badge}
                </span>
              )}
            </div>
            <p className="mt-1.5 text-xs leading-5 text-slate-600">{card.desc}</p>
            {card.meta.length > 0 && (
              <div className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-3 text-[10px] text-slate-400">
                {card.meta.map((m, i) => (
                  <span key={`${m}-${i}`}>{m}</span>
                ))}
              </div>
            )}
            {card.tags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {card.tags.map((t, i) => (
                  <span key={`${t}-${i}`} className="rounded border border-dashed border-slate-300 px-1.5 py-0.5 text-[10px] text-slate-400">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  )
}
