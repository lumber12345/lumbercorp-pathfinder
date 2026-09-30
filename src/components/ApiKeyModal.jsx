import { useEffect, useState } from 'react'
import { X, KeyRound, ShieldCheck, ExternalLink, Play, Loader2, TriangleAlert } from 'lucide-react'
import { DEMO_PROFILES } from '../data/demoProfiles'

export default function ApiKeyModal({ open, onClose, onConnect, onLoadDemo, loading, error }) {
  const [key, setKey] = useState('')

  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && onClose()
    if (open) window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [open, onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm sm:items-center">
      <div className="relative w-full max-w-lg rounded-2xl border border-slate-700/70 bg-[#11161f] shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-lg text-slate-500 transition-colors hover:bg-slate-800 hover:text-white"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        <div className="p-6 sm:p-7">
          <div className="mb-1 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-amber-500">
            <KeyRound size={13} /> Torn API
          </div>
          <h3 className="text-xl font-black text-white">Connect your citizen</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Paste a Torn API key and Pathfinder reads your level, bars, battle stats, work stats,
            education and networth — then personalizes every guide and checklist to where you
            actually are.
          </p>

          <div className="mt-5">
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-400">
              API Key
            </label>
            <div className="flex gap-2">
              <input
                type="password"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && key.trim() && onConnect(key.trim())}
                placeholder="e.g. aBcD3fGh…"
                autoFocus
                className="min-w-0 flex-1 rounded-lg border border-slate-700 bg-slate-900/80 px-3.5 py-2.5 font-mono text-sm text-white placeholder:text-slate-600 focus:border-amber-500/60 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
              <button
                onClick={() => onConnect(key.trim())}
                disabled={!key.trim() || loading}
                className="flex items-center gap-1.5 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-bold text-black transition-colors hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {loading ? <Loader2 size={15} className="animate-spin" /> : <ShieldCheck size={15} />}
                Connect
              </button>
            </div>
            {error && (
              <div className="mt-3 flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-300">
                <TriangleAlert size={14} className="mt-0.5 shrink-0" />
                <span className="font-mono leading-relaxed">{error}</span>
              </div>
            )}
            <div className="mt-3 flex items-start gap-2 text-[11px] leading-relaxed text-slate-500">
              <ShieldCheck size={13} className="mt-0.5 shrink-0 text-emerald-500" />
              <p>
                Create a <span className="font-semibold text-slate-400">Limited Access</span> (read-only) key at{' '}
                <a
                  href="https://www.torn.com/preferences.php#?tab=api"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-0.5 text-amber-400 underline decoration-amber-500/40 hover:decoration-amber-400"
                >
                  torn.com preferences → API <ExternalLink size={10} />
                </a>
                . It is stored only in your browser and used exclusively for read-only calls proxied
                through this app.
              </p>
            </div>
          </div>

          <div className="my-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-slate-800" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-600">or explore a demo citizen</span>
            <span className="h-px flex-1 bg-slate-800" />
          </div>

          <div className="grid gap-2.5">
            {DEMO_PROFILES.map((d) => (
              <button
                key={d.id}
                onClick={() => onLoadDemo(d)}
                className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/40 p-3 text-left transition-all hover:border-amber-500/40 hover:bg-slate-800/60"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400 transition-transform group-hover:scale-105">
                  <Play size={15} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2">
                    <span className="truncate text-sm font-bold text-white">{d.label}</span>
                    <span className="shrink-0 rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-semibold text-slate-400">{d.badge}</span>
                  </span>
                  <span className="mt-0.5 block truncate text-xs text-slate-500">{d.description}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
