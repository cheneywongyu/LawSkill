'use client'

import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  decay: number
  color: string
  size: number
}

type Ring = {
  x: number
  y: number
  radius: number
  life: number
  color: string
}

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#38bdf8', '#f43f5e']

export default function FireworksLayer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const particlesRef = { current: [] as Particle[] }
    const ringsRef = { current: [] as Ring[] }
    let rafId: number | null = null

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const burst = (x: number, y: number) => {
      const base = COLORS[Math.floor(Math.random() * COLORS.length)]
      const count = 28 + Math.floor(Math.random() * 12)
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.35
        const speed = 2.4 + Math.random() * 4.6
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: 0.012 + Math.random() * 0.01,
          color: Math.random() > 0.55 ? base : COLORS[Math.floor(Math.random() * COLORS.length)],
          size: 1.6 + Math.random() * 2.4,
        })
      }
      ringsRef.current.push({ x, y, radius: 4, life: 1, color: base })
      if (rafId === null) {
        rafId = requestAnimationFrame(tick)
      }
    }

    const tick = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      ctx.globalCompositeOperation = 'lighter'

      const ps = particlesRef.current
      for (let i = ps.length - 1; i >= 0; i--) {
        const p = ps[i]
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.055
        p.vx *= 0.985
        p.vy *= 0.985
        p.life -= p.decay
        if (p.life <= 0) {
          ps.splice(i, 1)
          continue
        }
        ctx.globalAlpha = Math.max(p.life, 0)
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }

      const rs = ringsRef.current
      for (let i = rs.length - 1; i >= 0; i--) {
        const r = rs[i]
        r.radius += 3.2
        r.life -= 0.045
        if (r.life <= 0) {
          rs.splice(i, 1)
          continue
        }
        ctx.globalAlpha = Math.max(r.life, 0) * 0.6
        ctx.strokeStyle = r.color
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2)
        ctx.stroke()
      }

      ctx.globalAlpha = 1
      ctx.globalCompositeOperation = 'source-over'

      if (ps.length || rs.length) {
        rafId = requestAnimationFrame(tick)
      } else {
        rafId = null
      }
    }

    const onClick = (event: MouseEvent) => {
      if (reduceMotion) return
      burst(event.clientX, event.clientY)
    }
    window.addEventListener('click', onClick, true)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('click', onClick, true)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100]"
    />
  )
}
