import { Compass, LayoutDashboard, RefreshCw, LogOut, KeyRound, UserRound, Binary } from 'lucide-react'
import { timeAgo } from '../lib/format'

export default function Header({ view, onNav, profile, isDemo, fetchedAt, onConnect, onDemo, onRefresh, onDisconnect, refreshing, rainOn = true, onToggleRain }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#0a0d12]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6">
        <button
          onClick={() => onNav({ name: 'home' })}
          className="group flex items-center gap-2.5"
          aria-label="Go to home"
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-lg border border-amber-500/40 bg-gradient-to-br from-amber-500/20 to-transparent shadow-[0_0_18px_-4px_rgba(245,158,11,0.4)]">
            <Compass size={19} className="text-amber-400" strokeWidth={2.2} />
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Lumbercorp</span>
            <span className="font-mono text-sm font-black tracking-widest text-white">
              PATH<span className="text-amber-400">FINDER</span>
            </span>
          </span>
        </button>

        <nav className="ml-2 flex items-center gap-1">
          <button
            onClick={() => onNav({ name: 'home' })}
            className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors ${
              view.name === 'home' || view.name === 'guide'
                ? 'bg-slate-800/80 text-white'
                : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
            }`}
          >
            Professions
          </button>
          <button
            onClick={() => onNav({ name: 'dashboard' })}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors ${
              view.name === 'dashboard'
                ? 'bg-slate-800/80 text-white'
                : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
            }`}
          >
            <LayoutDashboard size={15} />
            Dashboard
          </button>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={onToggleRain}
            aria-pressed={rainOn}
            title={rainOn ? 'Matrix rain: on (click to disable)' : 'Matrix rain: off (click to enable)'}
            className={`grid h-9 w-9 place-items-center rounded-lg border transition-colors ${
              rainOn
                ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400 shadow-[0_0_14px_-4px_rgba(52,211,153,0.6)]'
                : 'border-slate-700/70 bg-slate-900/60 text-slate-500 hover:border-slate-500 hover:text-slate-300'
            }`}
          >
            <Binary size={15} />
          </button>
          {profile ? (
            <>
              <button
                onClick={() => onNav({ name: 'dashboard' })}
                className="flex items-center gap-2.5 rounded-lg border border-slate-700/70 bg-slate-900/60 px-3 py-1.5 text-left transition-colors hover:border-slate-500"
                title={isDemo ? 'Demo profile' : 'Live Torn profile'}
              >
                <span className="grid h-7 w-7 place-items-center rounded-md bg-amber-500/15 text-amber-400">
                  <UserRound size={15} />
                </span>
                <span className="hidden flex-col leading-tight sm:flex">
                  <span className="flex items-center gap-1.5 text-sm font-bold text-white">
                    {profile.name}
                    <span className="rounded bg-slate-800 px-1.5 py-px font-mono text-[10px] font-bold text-amber-400">
                      LV {profile.level}
                    </span>
                    {isDemo && (
                      <span className="rounded bg-violet-500/20 px-1.5 py-px text-[9px] font-bold uppercase tracking-wide text-violet-300">
                        demo
                      </span>
                    )}
                  </span>
                  <span className="text-[10px] text-slate-500">{profile.rank} · synced {timeAgo(fetchedAt)}</span>
                </span>
              </button>
              {!isDemo && (
                <button
                  onClick={onRefresh}
                  disabled={refreshing}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-slate-700/70 bg-slate-900/60 text-slate-400 transition-colors hover:border-slate-500 hover:text-white disabled:opacity-50"
                  title="Refresh profile"
                >
                  <RefreshCw size={15} className={refreshing ? 'animate-spin' : ''} />
                </button>
              )}
              <button
                onClick={onDisconnect}
                className="grid h-9 w-9 place-items-center rounded-lg border border-slate-700/70 bg-slate-900/60 text-slate-400 transition-colors hover:border-red-500/50 hover:text-red-400"
                title="Disconnect profile"
              >
                <LogOut size={15} />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={onDemo}
                className="rounded-lg border border-slate-700/70 bg-slate-900/60 px-3 py-1.5 text-sm font-semibold text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
              >
                Try demo
              </button>
              <button
                onClick={onConnect}
                className="flex items-center gap-1.5 rounded-lg bg-amber-500 px-3.5 py-1.5 text-sm font-bold text-black shadow-[0_0_20px_-6px_rgba(245,158,11,0.7)] transition-colors hover:bg-amber-400"
              >
                <KeyRound size={14} />
                Connect API
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
