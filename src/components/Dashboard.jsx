import {
  KeyRound, Zap, Flame, Smile, HeartPulse, Swords, Brain, Dumbbell, Coffee,
  GraduationCap, Landmark, Home, Briefcase, ArrowRight, Sparkles, CheckCircle2,
  TrendingUp, Award, Lock, Shield, AlertTriangle, Bug,
} from 'lucide-react'
import { Bar, ACCENTS } from './ui'
import { Icon } from './icons'
import { formatMoney, formatNumber, formatAge } from '../lib/format'
import { jobQualifications, passiveStatus, buildInsights, CITY_PASSIVES, pickBar } from '../lib/torn'
import { CITY_JOB_LIST } from '../data/professions'

function Panel({ title, icon, children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-slate-800 bg-[#11161f] p-5 ${className}`}>
      <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
        {icon} {title}
      </div>
      {children}
    </div>
  )
}

function StatTile({ label, value, sub, icon }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-black/30 p-4">
      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500">
        {label} {icon}
      </div>
      <div className="mt-1.5 font-mono text-xl font-black text-white">{value}</div>
      {sub && <div className="mt-0.5 text-[11px] text-slate-500">{sub}</div>}
    </div>
  )
}

export default function Dashboard({ profile, isDemo, syncError, rawJson, apiSelections, onConnect, onOpenGuide }) {
  if (!profile) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
        <div className="grid h-16 w-16 place-items-center rounded-2xl border border-amber-500/30 bg-amber-500/10">
          <KeyRound size={26} className="text-amber-400" />
        </div>
        <h2 className="mt-6 text-2xl font-black text-white">No citizen connected</h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
          Connect your Torn API key (read-only Limited Access is enough) or load one of the demo
          citizens, and this dashboard becomes your personal mission control — live bars, stat
          tracking, city-job qualification checks and personalized next steps.
        </p>
        <button
          onClick={onConnect}
          className="mt-8 flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-black shadow-[0_0_28px_-8px_rgba(245,158,11,0.8)] transition-all hover:-translate-y-0.5 hover:bg-amber-400"
        >
          <KeyRound size={15} /> Connect / try demo
        </button>
      </div>
    )
  }

  const ws = profile.workstats || {}
  const bs = profile.battlestats || {}
  const bars = profile.bars || {}
  const energyBar = pickBar(bars, 'energy', 100)
  const nerveBar = pickBar(bars, 'nerve', 15)
  const happyBar = pickBar(bars, 'happy', 250)
  const lifeBar = pickBar(bars, 'life', 250)
  const quals = jobQualifications(ws, CITY_JOB_LIST)
  const passives = passiveStatus(profile)
  const insights = buildInsights(profile)
  const eduDone = (profile.education_completed || []).length

  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 pb-20 pt-8 sm:px-6">
      {isDemo && (
        <div className="flex items-center gap-2.5 rounded-xl border border-violet-500/30 bg-violet-500/10 px-4 py-3 text-[13px] text-violet-200">
          <Sparkles size={15} className="shrink-0 text-violet-300" />
          You are viewing a <b>demo citizen</b>. Connect your own API key to replace this with live data.
        </div>
      )}

      {!isDemo && syncError && (
        <div className="flex items-start gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-[13px] text-red-200">
          <AlertTriangle size={15} className="mt-0.5 shrink-0 text-red-400" />
          <span>
            <b>Live sync failed</b> — showing your last saved data.{' '}
            <span className="font-mono text-[11px] text-red-300/80">{syncError}</span>
          </span>
        </div>
      )}

      {/* Identity */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-[#141b28] to-[#0d1117] p-6 sm:p-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{ backgroundImage: 'radial-gradient(500px 180px at 15% 0%, rgba(245,158,11,0.14), transparent)' }}
        />
        <div className="relative flex flex-wrap items-start justify-between gap-6">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500">Citizen dossier</div>
            <h1 className="mt-1.5 text-3xl font-black tracking-tight text-white sm:text-4xl">
              {profile.name}
              <span className="ml-3 rounded-lg border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 align-middle font-mono text-sm font-black text-amber-400">
                LV {profile.level}
              </span>
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[13px] text-slate-400">
              <span className="flex items-center gap-1.5"><Award size={13} className="text-amber-400" /> {profile.rank || '—'}</span>
              <span className="flex items-center gap-1.5"><Coffee size={13} className="text-sky-400" /> {formatAge(profile.age)} old</span>
              <span className="flex items-center gap-1.5"><Home size={13} className="text-emerald-400" /> {profile.property || '—'}</span>
              <span className="flex items-center gap-1.5">
                <Briefcase size={13} className="text-violet-400" />
                {profile.job?.position ? `${profile.job.position}${profile.job.company_name ? ` · ${profile.job.company_name}` : ''}` : 'Unemployed'}
              </span>
              <span className="font-mono text-slate-500">ID #{profile.player_id}</span>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-black/40 px-6 py-4 text-right">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Networth</div>
            <div className="mt-1 font-mono text-3xl font-black text-emerald-400">
              {formatMoney(profile.networth?.total)}
            </div>
            <div className="mt-1 text-[11px] text-slate-500">{formatNumber(profile.networth?.total)} dollars</div>
          </div>
        </div>

        {/* Bars */}
        <div className="relative mt-7 grid gap-4 sm:grid-cols-2">
          <Bar label="Energy" icon={<Zap size={12} className="text-emerald-400" />} value={energyBar.current} max={energyBar.maximum} color="bg-emerald-400" />
          <Bar label="Nerve" icon={<Flame size={12} className="text-orange-400" />} value={nerveBar.current} max={nerveBar.maximum} color="bg-orange-400" />
          <Bar label="Happy" icon={<Smile size={12} className="text-yellow-300" />} value={happyBar.current} max={happyBar.maximum} color="bg-yellow-300" />
          <Bar label="Life" icon={<HeartPulse size={12} className="text-rose-400" />} value={lifeBar.current} max={lifeBar.maximum} color="bg-rose-500" />
        </div>
        {!isDemo && (
          <p className="relative mt-3 text-right text-[10px] font-medium uppercase tracking-wider text-slate-600">
            Bars auto-sync every minute while this page is open
          </p>
        )}
      </div>

      {/* Insight cards */}
      {insights.length > 0 && (
        <div className="grid gap-4 lg:grid-cols-2">
          {insights.map((ins, i) => {
            const tone =
              ins.tone === 'critical'
                ? 'border-amber-500/30 bg-amber-500/[0.06]'
                : 'border-sky-500/25 bg-sky-500/[0.05]'
            return (
              <div key={i} className={`rounded-2xl border p-5 ${tone}`}>
                <div className="flex items-center gap-2 text-sm font-black text-white">
                  <Sparkles size={15} className={ins.tone === 'critical' ? 'text-amber-400' : 'text-sky-400'} />
                  {ins.title}
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-400">{ins.body}</p>
                {ins.action && (
                  <button
                    onClick={() => onOpenGuide(ins.action.guide)}
                    className="mt-3.5 inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-3.5 py-2 text-xs font-bold text-white transition-colors hover:bg-slate-700"
                  >
                    {ins.action.label} <ArrowRight size={12} />
                  </button>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* Stats */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="Battle stats" icon={<Swords size={13} className="text-red-400" />}>
          <div className="grid grid-cols-2 gap-3">
            <StatTile label="Strength" value={formatNumber(bs.strength)} icon={<Dumbbell size={12} className="text-red-400/60" />} />
            <StatTile label="Defense" value={formatNumber(bs.defense)} icon={<Shield size={12} className="text-blue-400/60" />} />
            <StatTile label="Speed" value={formatNumber(bs.speed)} icon={<Zap size={12} className="text-sky-400/60" />} />
            <StatTile label="Dexterity" value={formatNumber(bs.dexterity)} icon={<Sparkles size={12} className="text-violet-400/60" />} />
          </div>
          <div className="mt-3 rounded-xl border border-red-500/20 bg-red-500/[0.06] p-4">
            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Total battle stats <TrendingUp size={12} className="text-red-400" />
            </div>
            <div className="mt-1.5 font-mono text-2xl font-black text-red-300">{formatNumber(bs.total)}</div>
            <div className="mt-0.5 text-[11px] text-slate-500">{(bs.total || 0).toLocaleString()} — past Level 15, this is your real level.</div>
          </div>
        </Panel>

        <Panel title="Work stats & education" icon={<Brain size={13} className="text-sky-400" />}>
          <div className="grid grid-cols-3 gap-3">
            <StatTile label="Manual" value={formatNumber(ws.manual_labor)} />
            <StatTile label="Intelligence" value={formatNumber(ws.intelligence)} />
            <StatTile label="Endurance" value={formatNumber(ws.endurance)} />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <StatTile
              label="Courses completed"
              value={String(eduDone)}
              sub={profile.education_current ? 'One in progress' : 'No active course'}
              icon={<GraduationCap size={12} className="text-amber-400/60" />}
            />
            <StatTile label="Property" value={profile.property || '—'} icon={<Landmark size={12} className="text-emerald-400/60" />} />
          </div>
        </Panel>
      </div>

      {/* Passive tracker */}
      <Panel title="The big-3 permanent passives" icon={<Lock size={13} className="text-amber-400" />}>
        <p className="-mt-1 mb-4 text-xs leading-relaxed text-slate-500">
          Three city-job perks stay on your account forever. Most veterans collect all three before settling into player companies.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {Object.entries(CITY_PASSIVES).map(([job, p]) => {
            const unlocked = passives.some((x) => x.jobName === job)
            return (
              <div
                key={job}
                className={`rounded-xl border p-4 ${unlocked ? 'border-emerald-500/30 bg-emerald-500/[0.06]' : 'border-slate-800 bg-black/30'}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-black text-white">{job}</span>
                  {unlocked ? (
                    <CheckCircle2 size={16} className="text-emerald-400" />
                  ) : (
                    <Lock size={14} className="text-slate-600" />
                  )}
                </div>
                <div className={`mt-1 text-[11px] font-bold ${unlocked ? 'text-emerald-300' : 'text-slate-500'}`}>
                  {p.label}
                </div>
                <div className="mt-1 text-[11px] leading-relaxed text-slate-500">Top rank: {p.position}</div>
              </div>
            )
          })}
        </div>
      </Panel>

      {/* City job qualification engine */}
      <Panel title="City-job qualification tracker" icon={<Briefcase size={13} className="text-violet-400" />}>
        <p className="-mt-1 mb-4 text-xs leading-relaxed text-slate-500">
          Where your current work stats place you on every city ladder — and exactly what's missing for the next rung.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          {quals.map(({ job, highest, next }) => {
            const a = ACCENTS[job.accent] || ACCENTS.amber
            const gaps = next
              ? [
                  ['Man', (ws.manual_labor || 0), next.req.man],
                  ['Int', (ws.intelligence || 0), next.req.int],
                  ['End', (ws.endurance || 0), next.req.end],
                ]
              : []
            return (
              <div key={job.id} className="rounded-xl border border-slate-800 bg-black/30 p-4">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[13px] font-black text-white">
                    <span className={`grid h-6 w-6 place-items-center rounded-md ${a.bg} ${a.text}`}>
                      <Icon name={job.icon} size={13} />
                    </span>
                    {job.name}
                  </span>
                  <span className={`font-mono text-[11px] font-bold ${a.text}`}>
                    {highest ? highest.name : 'not qualified'}
                  </span>
                </div>
                {next ? (
                  <div className="mt-3 border-t border-slate-800 pt-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Next: {next.name}</div>
                    <div className="mt-2 space-y-1.5">
                      {gaps.map(([label, have, need]) => {
                        const ok = have >= need
                        return (
                          <div key={label} className="flex items-center justify-between text-[11px]">
                            <span className="text-slate-400">{label}</span>
                            <span className={`font-mono ${ok ? 'text-emerald-400' : 'text-slate-300'}`}>
                              {have.toLocaleString()} / {need.toLocaleString()}
                              {!ok && (
                                <span className="ml-2 rounded bg-amber-500/15 px-1.5 py-px text-[10px] font-bold text-amber-400">
                                  −{formatNumber(need - have)}
                                </span>
                              )}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="mt-3 border-t border-slate-800 pt-3 text-[11px] font-bold text-amber-400">
                    ★ Top rank reached — ladder complete.
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Panel>
      {/* API debug */}
      {!isDemo && (
        <details className="group rounded-2xl border border-slate-800 bg-[#11161f]">
          <summary className="flex cursor-pointer select-none items-center gap-2 px-5 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-slate-300">
            <Bug size={13} className="text-slate-500" /> API debug
            <span className="ml-auto text-[10px] font-medium normal-case tracking-normal text-slate-600">
              what the Torn API actually returned
            </span>
          </summary>
          <div className="space-y-4 border-t border-slate-800 px-5 py-4">
            <div>
              <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Selections requested {apiSelections ? `(${apiSelections})` : ''}
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  ['bars', profile.bars],
                  ['battlestats', profile.battlestats],
                  ['workstats', profile.workstats],
                  ['education', profile.education_completed],
                  ['networth', profile.networth],
                ].map(([name, val]) => (
                  <span
                    key={name}
                    className={`rounded-md px-2 py-1 font-mono text-[11px] font-bold ${
                      val ? 'bg-emerald-500/15 text-emerald-300' : 'bg-red-500/15 text-red-300'
                    }`}
                  >
                    {val ? '✓' : '✗'} {name}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
                Red entries mean the API response is missing that selection — bars and stats will show as
                zero even though the connection succeeded.
              </p>
            </div>
            <div>
              <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Raw response (latest sync)
              </div>
              <pre className="max-h-64 overflow-auto rounded-lg border border-slate-800 bg-black/40 p-3 font-mono text-[11px] leading-relaxed text-slate-400">
{rawJson ? rawJson.slice(0, 6000) : 'No raw response in memory — it will appear after the next successful sync (or press the refresh button in the header).'}
              </pre>
            </div>
          </div>
        </details>
      )}
    </div>
  )
}
