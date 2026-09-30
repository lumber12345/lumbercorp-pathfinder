import { Compass, ArrowRight, KeyRound, Zap, ShieldAlert, GraduationCap, Target, Plane } from 'lucide-react'
import { PROFESSIONS, CITY_JOB_LIST, CAREER_LIST, totalSteps } from '../data/professions'
import { Icon } from './icons'
import { Badge, DotMeter, SectionTitle, ACCENTS } from './ui'

const DAY_ONE = [
  { icon: ShieldAlert, title: 'Take the Grocer job', text: 'Lowest requirements, interview is 3 easy questions, work stats start flowing day one.' },
  { icon: GraduationCap, title: 'Queue education', text: 'Biology → Intravenous Therapy first. The slot should never sit empty again, ever.' },
  { icon: Target, title: 'Spend nerve on crimes', text: 'Shoplifting & pickpocketing build skill slowly — every day of nerve compounds.' },
  { icon: Zap, title: 'Train ~400 total battle stats', text: 'Just enough to beat leveling targets. Rent happy housing first for better gains.' },
  { icon: Plane, title: 'Race to Level 15', text: 'Attack leveling targets (choose LEAVE) with all energy. Flying unlocks the real economy.' },
]

function ProfessionCard({ prof, progress, onOpen }) {
  const a = ACCENTS[prof.accent] || ACCENTS.amber
  const done = progress?.pct || 0
  return (
    <button
      onClick={() => onOpen(prof.id)}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-[#11161f] p-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl ${a.border} ${a.hoverBorder} ${a.glow}`}
    >
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${a.grad}`} />
      <div className="relative flex items-start justify-between">
        <span className={`grid h-11 w-11 place-items-center rounded-xl border ${a.bg} ${a.border} ${a.text}`}>
          <Icon name={prof.icon} size={21} />
        </span>
        {prof.passive ? (
          <Badge accent={prof.accent}>★ Passive</Badge>
        ) : (
          <Badge accent="slate">{prof.category === 'career' ? 'Playstyle' : 'Starter job'}</Badge>
        )}
      </div>

      <h3 className="relative mt-4 text-lg font-black tracking-tight text-white">{prof.name}</h3>
      <p className="relative mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-slate-400">{prof.tagline}</p>

      <div className="relative mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="font-semibold uppercase tracking-wider">Difficulty</span>
          <DotMeter value={prof.difficulty} />
        </span>
        <span className="flex items-center gap-1.5">
          <span className="font-semibold uppercase tracking-wider">Income</span>
          <DotMeter value={prof.income} color="bg-emerald-400" />
        </span>
      </div>

      {done > 0 && (
        <div className="relative mt-4">
          <div className="mb-1 flex justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500">
            <span>Progress</span>
            <span className={a.text}>{done}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
            <div className={`h-full rounded-full ${a.bar} transition-all`} style={{ width: `${done}%` }} />
          </div>
        </div>
      )}

      <span className={`relative mt-4 inline-flex items-center gap-1.5 text-xs font-bold ${a.text}`}>
        Open guide
        <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
      </span>
    </button>
  )
}

export default function Home({ onOpen, onConnect, hasProfile, getProgress }) {
  const totalStepsAll = PROFESSIONS.reduce((n, p) => n + totalSteps(p), 0)

  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-[#131a26] to-[#0d1117] px-6 py-12 sm:px-12 sm:py-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(600px 200px at 20% 0%, rgba(245,158,11,0.12), transparent), radial-gradient(500px 240px at 90% 100%, rgba(56,189,248,0.08), transparent)',
          }}
        />
        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400">
            <Compass size={12} /> Unofficial companion · Torn City
          </div>
          <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl">
            Pick a profession.
            <br />
            Get the <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">step-by-step route</span> to the top.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
            Every city career and playstyle path in Torn, broken into checkable phases from Day 1 to
            endgame — education priorities, merit builds, company picks and daily routines included.
            Connect your API key and the guides adapt to your actual level, stats and job.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#professions"
              className="flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-bold text-black shadow-[0_0_28px_-8px_rgba(245,158,11,0.8)] transition-all hover:-translate-y-0.5 hover:bg-amber-400"
            >
              Browse professions <ArrowRight size={15} />
            </a>
            {!hasProfile && (
              <button
                onClick={onConnect}
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-3 text-sm font-bold text-slate-200 transition-all hover:-translate-y-0.5 hover:border-amber-500/50 hover:text-white"
              >
                <KeyRound size={15} className="text-amber-400" /> Connect Torn API
              </button>
            )}
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm">
            {[
              ['12', 'Profession guides'],
              [`${totalStepsAll}`, 'Checkable steps'],
              ['3', 'Permanent passives mapped'],
              ['6', 'Demo citizens to explore'],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-mono text-2xl font-black text-white">{n}</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day one */}
      <section className="mt-14">
        <SectionTitle
          kicker="Day one"
          title="Brand new to Torn? Do these five things."
          sub="The universal opening that every profession guide assumes you've done."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {DAY_ONE.map((d, i) => (
            <div key={d.title} className="relative rounded-2xl border border-slate-800 bg-[#11161f] p-4">
              <div className="absolute right-3 top-3 font-mono text-[11px] font-black text-slate-700">
                0{i + 1}
              </div>
              <d.icon size={20} className="text-amber-400" />
              <div className="mt-3 text-sm font-bold leading-snug text-white">{d.title}</div>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Professions */}
      <section id="professions" className="mt-16 scroll-mt-24">
        <SectionTitle
          kicker="Choose your path"
          title="City Careers"
          sub="The six starter jobs run by Torn City. Three of them hide permanent account-wide passives at the top of their ladders."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CITY_JOB_LIST.map((p) => (
            <ProfessionCard key={p.id} prof={p} onOpen={onOpen} progress={getProgress(p)} />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <SectionTitle
          kicker="Choose your path"
          title="Career Paths"
          sub="Full playstyle builds spanning Day 1 to endgame — the roads players actually walk."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CAREER_LIST.map((p) => (
            <ProfessionCard key={p.id} prof={p} onOpen={onOpen} progress={getProgress(p)} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-800/80 pt-8 text-xs leading-relaxed text-slate-600">
        <p>
          LUMBERCORP PATHFINDER is an unofficial fan-made companion tool. It is not affiliated with or
          endorsed by Torn or Chedburn Studios. Game mechanics change — always verify requirements
          in-game or on the official wiki. Guide content is distilled from community knowledge
          (Baldr's flying advice, the Crimes 2.0 Criminal Primer and friends) and the official Torn
          wiki. Never share your full-access API key with tools you don't trust.
        </p>
        <p className="mt-3 font-mono text-[11px] text-slate-700">PATHFINDER // every ladder has a top — climb it.</p>
      </footer>
    </div>
  )
}
