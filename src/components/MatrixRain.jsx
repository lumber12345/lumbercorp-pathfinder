import { useEffect, useRef } from 'react'

const FONT = 15 // px per column
const TICK = 55 // ms between animation steps — chill, readable pace
const TRAIL = 'rgba(10,13,18,0.085)' // fade per tick (smaller = longer trails)
const GREEN = 'rgba(52,211,153,0.65)' // emerald-400 body
const HEAD = 'rgba(209,250,229,0.95)' // bright leading glyph

function buildGlyphs() {
  const out = []
  for (let c = 0x30; c <= 0x39; c++) out.push(String.fromCharCode(c)) // 0-9
  for (let c = 0x41; c <= 0x5a; c++) out.push(String.fromCharCode(c)) // A-Z
  for (let c = 0xff66; c <= 0xff9d; c++) out.push(String.fromCharCode(c)) // half-width katakana
  return out
}

export default function MatrixRain() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const GLYPHS = buildGlyphs()
    const randGlyph = () => GLYPHS[(Math.random() * GLYPHS.length) | 0]
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 0
    let h = 0
    let cols = []
    let raf = 0
    let last = 0
    let running = true

    const setup = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = Math.ceil(w / FONT)
      cols = Array.from({ length: n }, () => ({
        y: Math.random() * -h, // staggered starts so it doesn't look like a curtain
        v: 0.55 + Math.random() * 1.1,
        gap: 0,
      }))
      ctx.fillStyle = '#0a0d12'
      ctx.fillRect(0, 0, w, h)
    }

    const step = (now) => {
      if (!running) return
      raf = requestAnimationFrame(step)
      if (now - last < TICK) return
      last = now

      ctx.fillStyle = TRAIL
      ctx.fillRect(0, 0, w, h)
      ctx.font = `${FONT}px "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace`
      ctx.textBaseline = 'top'

      for (let i = 0; i < cols.length; i++) {
        const c = cols[i]
        if (c.gap > 0) {
          c.gap -= 1
          continue
        }
        const x = i * FONT
        ctx.fillStyle = GREEN
        ctx.fillText(randGlyph(), x, c.y - FONT)
        ctx.fillStyle = HEAD
        ctx.fillText(randGlyph(), x, c.y)
        c.y += FONT * c.v
        if (c.y - FONT * 8 > h) {
          // respawn above the viewport with fresh speed; sometimes take a pause
          c.y = Math.random() * -120
          c.v = 0.55 + Math.random() * 1.1
          c.gap = Math.random() < 0.3 ? ((Math.random() * 24) | 0) + 1 : 0
        }
      }
    }

    const onResize = () => setup()

    setup()
    if (reduced) {
      // Static, non-animated sprinkle for reduced-motion users
      ctx.font = `${FONT}px "JetBrains Mono", ui-monospace, monospace`
      ctx.textBaseline = 'top'
      for (let i = 0; i < cols.length; i++) {
        for (let k = 0; k < 4; k++) {
          ctx.fillStyle = 'rgba(52,211,153,0.3)'
          ctx.fillText(randGlyph(), i * FONT, Math.random() * h)
        }
      }
    } else {
      raf = requestAnimationFrame(step)
    }
    window.addEventListener('resize', onResize)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-45"
    />
  )
}
