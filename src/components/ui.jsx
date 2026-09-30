export const ACCENTS = {
  emerald: {
    text: 'text-emerald-400', soft: 'text-emerald-300', bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30', hoverBorder: 'hover:border-emerald-500/60',
    glow: 'shadow-emerald-500/10', grad: 'from-emerald-500/15 to-transparent',
    dot: 'bg-emerald-400', bar: 'bg-emerald-400',
  },
  red: {
    text: 'text-red-400', soft: 'text-red-300', bg: 'bg-red-500/10',
    border: 'border-red-500/30', hoverBorder: 'hover:border-red-500/60',
    glow: 'shadow-red-500/10', grad: 'from-red-500/15 to-transparent',
    dot: 'bg-red-400', bar: 'bg-red-400',
  },
  sky: {
    text: 'text-sky-400', soft: 'text-sky-300', bg: 'bg-sky-500/10',
    border: 'border-sky-500/30', hoverBorder: 'hover:border-sky-500/60',
    glow: 'shadow-sky-500/10', grad: 'from-sky-500/15 to-transparent',
    dot: 'bg-sky-400', bar: 'bg-sky-400',
  },
  violet: {
    text: 'text-violet-400', soft: 'text-violet-300', bg: 'bg-violet-500/10',
    border: 'border-violet-500/30', hoverBorder: 'hover:border-violet-500/60',
    glow: 'shadow-violet-500/10', grad: 'from-violet-500/15 to-transparent',
    dot: 'bg-violet-400', bar: 'bg-violet-400',
  },
  amber: {
    text: 'text-amber-400', soft: 'text-amber-300', bg: 'bg-amber-500/10',
    border: 'border-amber-500/30', hoverBorder: 'hover:border-amber-500/60',
    glow: 'shadow-amber-500/10', grad: 'from-amber-500/15 to-transparent',
    dot: 'bg-amber-400', bar: 'bg-amber-400',
  },
  rose: {
    text: 'text-rose-400', soft: 'text-rose-300', bg: 'bg-rose-500/10',
    border: 'border-rose-500/30', hoverBorder: 'hover:border-rose-500/60',
    glow: 'shadow-rose-500/10', grad: 'from-rose-500/15 to-transparent',
    dot: 'bg-rose-400', bar: 'bg-rose-400',
  },
  indigo: {
    text: 'text-indigo-400', soft: 'text-indigo-300', bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/30', hoverBorder: 'hover:border-indigo-500/60',
    glow: 'shadow-indigo-500/10', grad: 'from-indigo-500/15 to-transparent',
    dot: 'bg-indigo-400', bar: 'bg-indigo-400',
  },
  slate: {
    text: 'text-slate-400', soft: 'text-slate-300', bg: 'bg-slate-800/50',
    border: 'border-slate-600/50', hoverBorder: 'hover:border-slate-400/60',
    glow: 'shadow-slate-500/10', grad: 'from-slate-500/10 to-transparent',
    dot: 'bg-slate-400', bar: 'bg-slate-400',
  },
}

export function Badge({ children, accent = 'amber', className = '' }) {
  const a = ACCENTS[accent] || ACCENTS.amber
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${a.bg} ${a.border} ${a.text} ${className}`}>
      {children}
    </span>
  )
}

export function DotMeter({ value, max = 5, color = 'bg-amber-400' }) {
  return (
    <span className="inline-flex items-center gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={`h-1.5 w-3.5 rounded-full ${i < value ? color : 'bg-slate-700'}`} />
      ))}
    </span>
  )
}

export function Bar({ label, value, max, color, icon }) {
  const pct = max > 0 ? Math.min(100, (value / max) * 100) : 0
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs">
        <span className="flex items-center gap-1.5 font-semibold uppercase tracking-wider text-slate-400">
          {icon} {label}
        </span>
        <span className="font-mono text-slate-300">
          {value.toLocaleString()} <span className="text-slate-500">/ {max.toLocaleString()}</span>
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-800">
        <div className={`h-full rounded-full ${color} transition-all duration-500`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

export function SectionTitle({ kicker, title, sub }) {
  return (
    <div className="mb-6">
      <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-500">{kicker}</div>
      <h2 className="mt-1 text-2xl font-black tracking-tight text-white sm:text-3xl">{title}</h2>
      {sub && <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">{sub}</p>}
    </div>
  )
}
