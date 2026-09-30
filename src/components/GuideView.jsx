import { useEffect, useState } from 'react'
import { ArrowLeft, Check, RotateCcw, Lightbulb, GraduationCap, Award, Building2, Sun, Trophy, ArrowRight, MapPin } from 'lucide-react'
import { getProfession, professionProgress } from '../data/professions'
import { Icon } from './icons'
import { Badge, DotMeter, ACCENTS } from './ui'
import { passiveStatus } from '../lib/torn'

const progressKey = (id) => `torn_pathfinder_progress_${id}`

function loadProgress(id) {
  try {
    return JSON.parse(localStorage.getItem(progressKey(id)) || '{}')
  } catch {
    return {}
  }
}

function Step({ step, checked, onToggle }) {
  return (
    <div
      className={`group relative flex gap-3.5 rounded-xl border p-4 transition-all ${
        checked
          ? 'border-emerald-500/20 bg-emerald-500/[0.04]'
          : 'border-slate-800 bg-[#11161f] hover:border-slate-600'
      }`}
    >
      <button
        onClick={() => onToggle(step.id)}
        aria-label={checked ? `Mark ${step.title} incomplete` : `Mark ${step.title} complete`}
        className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md border transition-all ${
          checked
            ? 'border-emerald-400 bg-emerald-400 text-black'
            : 'border-slate-600 bg-slate-900 group-hover:border-amber-500/60'
        }`}
      >
        {checked && <Check size={14} strokeWidth={3.5} />}
      </button>
      <div className="min-w-0 flex-1">
        <h4
          className={`text-[15px] font-bold leading-snug transition-colors ${
            checked ? 'text-slate-500 line-through decoration-slate-600' : 'text-white'
          }`}
        >
          {step.title}
        </h4>
        <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">{step.detail}</p>
        {step.tips && step.tips.length > 0 && (
          <div className="mt-3 space-y-1.5">
            {step.tips.map((tip, i) => (
              <div
                key={i}
                className="flex items-start gap-2 rounded-lg border-l-2 border-amber-500/50 bg-amber-500/[0.06] px-3 py-2 text-xs leading-relaxed text-amber-200/80"
              >
                <Lightbulb size={12} className="mt-0.5 shrink-0 text-amber-400" />
                {tip}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function SideCard({ icon: IconC, title, children, accent }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#11161f] p-5">
      <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
        <IconC size={13} className={accent || 'text-amber-400'} /> {title}
      </div>
      {children}
    </div>
  )
}

export default function GuideView({ profId, onBack, profile }) {
  const prof = getProfession(profId)
  const [checked, setChecked] = useState(() => loadProgress(profId))

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [profId])

  if (!prof) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <p className="text-slate-400">Profession not found.</p>
        <button onClick={onBack} className="mt-4 text-amber-400 underline">← Back to professions</button>
      </div>
    )
  }

  const a = ACCENTS[prof.accent] || ACCENTS.amber
  const { done, total, pct } = professionProgress(prof, checked)
  const passives = passiveStatus(profile)

  const toggle = (stepId) => {
    setChecked((prev) => {
      const next = { ...prev, [stepId]: !prev[stepId] }
      if (!next[stepId]) delete next[stepId]
      try {
        localStorage.setItem(progressKey(prof.id), JSON.stringify(next))
      } catch {
        /* ignore */
      }
      return next
    })
  }

  const reset = () => {
    if (!window.confirm('Reset all progress for this guide?')) return
    try {
      localStorage.removeItem(progressKey(prof.id))
    } catch {
      /* ignore */
    }
    setChecked({})
  }

  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6">
      <button
        onClick={onBack}
        className="mb-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 transition-colors hover:text-amber-400"
      >
        <ArrowLeft size={14} /> All professions
      </button>

      {/* Guide header */}
      <div className={`relative overflow-hidden rounded-3xl border bg-gradient-to-b from-[#141b28] to-[#0d1117] p-6 sm:p-9 ${a.border}`}>
        <div className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${a.grad}`} />
        <div className="relative flex flex-wrap items-start gap-5">
          <span className={`grid h-16 w-16 place-items-center rounded-2xl border ${a.bg} ${a.border} ${a.text}`}>
            <Icon name={prof.icon} size={30} />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500">
                {prof.category === 'city' ? 'City career' : 'Career path'}
              </span>
              {prof.passive && <Badge accent={prof.accent}>★ Permanent passive</Badge>}
            </div>
            <h1 className="mt-1.5 text-3xl font-black tracking-tight text-white sm:text-4xl">{prof.name}</h1>
            <p className={`mt-1 text-sm font-medium ${a.soft}`}>{prof.tagline}</p>
          </div>
        </div>

        <div className="relative mt-7 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-black/30 p-3.5">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Difficulty</div>
            <div className="mt-2"><DotMeter value={prof.difficulty} /></div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-black/30 p-3.5">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Income potential</div>
            <div className="mt-2"><DotMeter value={prof.income} color="bg-emerald-400" /></div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-black/30 p-3.5">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Stat focus</div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {prof.statFocus.map((s) => (
                <span key={s} className="rounded-md bg-slate-800/80 px-2 py-0.5 text-[11px] font-semibold text-slate-300">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Progress header */}
        <div className="relative mt-6 flex flex-wrap items-center gap-4">
          <div className="min-w-52 flex-1">
            <div className="mb-1.5 flex justify-between text-[11px] font-bold uppercase tracking-wider text-slate-500">
              <span>Your progress</span>
              <span className={a.text}>{done} / {total} steps</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
              <div className={`h-full rounded-full ${a.bar} transition-all duration-500`} style={{ width: `${pct}%` }} />
            </div>
          </div>
          {done > 0 && (
            <button
              onClick={reset}
              className="flex items-center gap-1.5 rounded-lg border border-slate-700 px-3 py-1.5 text-xs font-bold text-slate-400 transition-colors hover:border-red-500/50 hover:text-red-400"
            >
              <RotateCcw size={12} /> Reset
            </button>
          )}
        </div>
      </div>

      {/* Passive banner */}
      {prof.passive && (
        <div className="mt-4 flex items-start gap-3 rounded-2xl border border-amber-500/25 bg-amber-500/[0.06] p-4">
          <Award size={18} className="mt-0.5 shrink-0 text-amber-400" />
          <p className="text-[13px] leading-relaxed text-amber-200/90">
            <span className="font-bold">Endgame reward:</span> reach <span className="font-bold">{prof.passive.position}</span> and
            the perk <span className="font-bold">{prof.passive.label}</span> is bound to your account permanently — {prof.passive.detail.toLowerCase()}.
            {passives.length > 0 && passives.some((p) => p.jobName === prof.name) && (
              <span className="ml-2 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[11px] font-bold text-emerald-300">
                ✓ Unlocked on your account
              </span>
            )}
          </p>
        </div>
      )}

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
        {/* Main: phases */}
        <div className="min-w-0 space-y-10">
          {/* Role summary */}
          <div className="rounded-2xl border border-slate-800 bg-[#11161f] p-5 sm:p-6">
            <div className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              <MapPin size={13} className={a.text} /> What this profession actually is
            </div>
            <p className="text-[14px] leading-relaxed text-slate-300">{prof.role}</p>
            <div className="mt-4 rounded-xl bg-slate-800/40 px-4 py-3 text-[13px] text-slate-400">
              <span className="font-bold text-slate-200">Best for:</span> {prof.bestFor}
            </div>
          </div>

          {prof.phases.map((phase, pi) => {
            const phaseDone = phase.steps.filter((s) => checked[s.id]).length
            const phaseTotal = phase.steps.length
            return (
              <section key={phase.id}>
                <div className="mb-4 flex flex-wrap items-end justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-baseline gap-3">
                    <span className={`font-mono text-3xl font-black ${a.text} opacity-60`}>
                      {String(pi + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h2 className="text-lg font-black tracking-tight text-white sm:text-xl">{phase.title}</h2>
                      <p className="mt-0.5 text-xs font-medium text-slate-500">{phase.subtitle}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-slate-500">
                    {phaseDone}/{phaseTotal}
                  </span>
                </div>
                <div className="space-y-2.5">
                  {phase.steps.map((step) => (
                    <Step key={step.id} step={step} checked={!!checked[step.id]} onToggle={toggle} />
                  ))}
                </div>
              </section>
            )
          })}

          {/* Positions table (city jobs) */}
          {prof.positions && (
            <section>
              <div className="mb-4 border-b border-slate-800 pb-3">
                <h2 className="text-lg font-black tracking-tight text-white sm:text-xl">The ladder — every position</h2>
                <p className="mt-0.5 text-xs font-medium text-slate-500">
                  Work stat requirements (Manual / Intelligence / Endurance), daily pay & specials
                </p>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-slate-800">
                <table className="w-full min-w-[640px] text-left text-[13px]">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900/70 text-[10px] uppercase tracking-wider text-slate-500">
                      <th className="px-4 py-3 font-bold">Position</th>
                      <th className="px-4 py-3 font-bold">Man</th>
                      <th className="px-4 py-3 font-bold">Int</th>
                      <th className="px-4 py-3 font-bold">End</th>
                      <th className="px-4 py-3 font-bold">Pay/day</th>
                      <th className="px-4 py-3 font-bold">Job special</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prof.positions.map((pos, i) => {
                      const isTop = i === prof.positions.length - 1
                      return (
                        <tr key={pos.name} className={`border-b border-slate-800/60 last:border-0 ${isTop ? 'bg-amber-500/[0.05]' : 'bg-[#11161f]'}`}>
                          <td className="px-4 py-3">
                            <span className="font-bold text-white">{pos.name}</span>
                            {pos.passive && <span className="ml-2 text-[10px] font-bold text-amber-400">★ PASSIVE</span>}
                            {isTop && !pos.passive && <span className="ml-2 text-[10px] font-bold text-amber-400">TOP</span>}
                          </td>
                          <td className="px-4 py-3 font-mono text-slate-400">{pos.req.man.toLocaleString()}</td>
                          <td className="px-4 py-3 font-mono text-slate-400">{pos.req.int.toLocaleString()}</td>
                          <td className="px-4 py-3 font-mono text-slate-400">{pos.req.end.toLocaleString()}</td>
                          <td className="px-4 py-3 font-mono text-emerald-400">${pos.pay.toLocaleString()}</td>
                          <td className="px-4 py-3 text-slate-400">{pos.special}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-[11px] text-slate-600">
                Data mirrors the official wiki (wiki.torn.com/wiki/Job). Stat requirements shift with patches — verify in-game.
              </p>
            </section>
          )}

          {/* Transition */}
          <div className={`rounded-2xl border ${a.border} ${a.bg} p-5`}>
            <div className="mb-1.5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
              <ArrowRight size={13} className={a.text} /> Where this path leads next
            </div>
            <p className="text-[14px] leading-relaxed text-slate-300">{prof.transition}</p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <SideCard icon={GraduationCap} title="Education priorities">
            <ul className="space-y-3">
              {prof.education.map((e) => (
                <li key={e.course}>
                  <div className="text-[13px] font-bold text-white">{e.course}</div>
                  <div className="mt-0.5 text-xs leading-relaxed text-slate-500">{e.why}</div>
                </li>
              ))}
            </ul>
          </SideCard>

          <SideCard icon={Award} title="Merit guidance">
            <ul className="space-y-3">
              {prof.merits.map((m) => (
                <li key={m.name}>
                  <div className="text-[13px] font-bold text-white">{m.name}</div>
                  <div className="mt-0.5 text-xs leading-relaxed text-slate-500">{m.why}</div>
                </li>
              ))}
            </ul>
          </SideCard>

          {prof.companies && prof.companies.length > 0 && (
            <SideCard icon={Building2} title="Companies to target">
              <ul className="space-y-3">
                {prof.companies.map((c) => (
                  <li key={c.name}>
                    <div className="text-[13px] font-bold text-white">{c.name}</div>
                    <div className="mt-0.5 text-xs leading-relaxed text-slate-500">{c.why}</div>
                  </li>
                ))}
              </ul>
            </SideCard>
          )}

          <SideCard icon={Sun} title="Daily routine">
            <ol className="space-y-2">
              {prof.dailyRoutine.map((t, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-300">
                  <span className={`mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full ${a.bg} ${a.text} font-mono text-[9px] font-bold`}>
                    {i + 1}
                  </span>
                  {t}
                </li>
              ))}
            </ol>
          </SideCard>

          <SideCard icon={Trophy} title="Milestones" accent="text-emerald-400">
            <ol className="relative space-y-4 border-l border-slate-700 pl-5">
              {prof.milestones.map((m) => (
                <li key={m.label} className="relative">
                  <span className={`absolute -left-[26px] top-1 h-2.5 w-2.5 rounded-full border-2 border-[#11161f] ${a.dot}`} />
                  <div className="text-[13px] font-bold text-white">{m.label}</div>
                  <div className="mt-0.5 text-xs text-slate-500">{m.detail}</div>
                </li>
              ))}
            </ol>
          </SideCard>
        </aside>
      </div>
    </div>
  )
}
