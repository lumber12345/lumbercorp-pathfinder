// Torn API helpers, rank ladder, and city-job qualification logic.
// City job position data mirrors wiki.torn.com/wiki/Job (requirements: Manual / Intelligence / Endurance).

export const RANKS = [
  'Absolute beginner', 'Beginner', 'Inexperienced', 'Rookie', 'Novice', 'Below Average',
  'Average', 'Reasonable', 'Above Average', 'Competent', 'Highly competent', 'Veteran',
  'Distinguished', 'Highly distinguished', 'Professional', 'Star', 'Master', 'Outstanding',
  'Celebrity', 'Supreme', 'Idolized', 'Champion', 'Heroic', 'Legendary', 'Elite', 'Invincible',
]

export const API_SELECTIONS = 'profile,bars,battlestats,workstats,education,networth'

/**
 * Fetch a Torn profile. Tries the local proxy first (Vite dev middleware /
 * server.js deployments), and falls back to calling api.torn.com directly —
 * the Torn API sends `access-control-allow-origin: *`, so direct browser
 * calls work on static hosting (e.g. Render Static Sites).
 */
export async function fetchTornProfile(apiKey) {
  // Note: selections are sent with literal commas — some API gateways are
  // finicky about %2C-encoded lists. The key itself is always encoded.
  const qs = `selections=${API_SELECTIONS}&key=${encodeURIComponent(apiKey)}&comment=LumbercorpPathfinder`
  let data
  try {
    const res = await fetch(`/api/torn?${qs}`)
    if (!res.ok) throw new Error(`proxy ${res.status}`)
    data = await res.json()
  } catch {
    const res = await fetch(`https://api.torn.com/user/?${qs}`)
    data = await res.json()
  }
  if (data.error) throw new Error(data.error.error || 'Unknown API error')
  return data
}

// ---- Bar normalization ------------------------------------------------------
// The documented v1 shape is { current, maximum }, but be tolerant:
// accept { current, max }, capitalized keys, or a plain number.

export function normalizeBar(bar, fallbackMax = 100) {
  if (bar == null) return { current: 0, maximum: fallbackMax }
  if (typeof bar === 'number') return { current: bar, maximum: fallbackMax }
  const current = Number(bar.current ?? bar.Current ?? 0) || 0
  const maximum = Number(bar.maximum ?? bar.Maximum ?? bar.max ?? bar.Max ?? fallbackMax) || fallbackMax
  return { current, maximum }
}

export function pickBar(bars, name, fallbackMax) {
  const cap = name[0].toUpperCase() + name.slice(1)
  return normalizeBar(bars?.[name] ?? bars?.[cap], fallbackMax)
}

// ---- City job qualification engine -----------------------------------------

export function qualifies(stats, req) {
  return (
    (stats.manual_labor ?? 0) >= req.man &&
    (stats.intelligence ?? 0) >= req.int &&
    (stats.endurance ?? 0) >= req.end
  )
}

/**
 * For every city job, return the highest position the player currently
 * qualifies for and the next one they're working toward.
 */
export function jobQualifications(workstats, cityJobs) {
  return cityJobs.map((job) => {
    let highestIdx = -1
    job.positions.forEach((pos, i) => {
      if (qualifies(workstats, pos.req)) highestIdx = i
    })
    const nextIdx = highestIdx + 1
    return {
      job,
      highest: highestIdx >= 0 ? job.positions[highestIdx] : null,
      next: nextIdx < job.positions.length ? job.positions[nextIdx] : null,
      progress: Math.round(((highestIdx + 1) / job.positions.length) * 100),
    }
  })
}

// ---- Passive unlock detection ----------------------------------------------

export const CITY_PASSIVES = {
  Medical: { position: 'Brain Surgeon', label: 'Revive skill', detail: 'Revive players for 75 energy — permanent' },
  Education: { position: 'Principal', label: '10% faster courses', detail: 'All future education courses complete 10% faster' },
  Law: { position: 'Federal Judge', label: '+5% crime gains', detail: '+5% crime experience & skill gain' },
}

export function passiveStatus(profile) {
  const pos = profile?.job?.position?.toLowerCase()
  if (!pos) return []
  return Object.entries(CITY_PASSIVES)
    .filter(([, p]) => pos === p.position.toLowerCase())
    .map(([jobName, p]) => ({ jobName, ...p }))
}

// ---- Personalized recommendations ------------------------------------------

export function buildInsights(profile) {
  if (!profile) return []
  const out = []
  const level = profile.level ?? 0
  const eduDone = (profile.education_completed ?? []).length

  if (level < 15) {
    out.push({
      tone: 'critical',
      title: `Level 15 rush — you're level ${level}`,
      body: 'Flying unlocks at 15, and with it the plushie/flower economy. Hit leveling targets (attack + Leave), train just enough gym stats to beat them, and queue education while you work.',
      action: { guide: 'runner', label: 'Open the Level 15 Rush' },
    })
  } else if (level < 25) {
    out.push({
      tone: 'info',
      title: 'You can fly — lock in the run loop',
      body: 'Rent a Private Island with an airstrip, hire a pilot, buy a Large Suitcase, and start daily plushie/flower runs to build your first serious cash pile.',
      action: { guide: 'runner', label: 'Open the Runner path' },
    })
  }

  if (eduDone < 3) {
    out.push({
      tone: 'critical',
      title: 'Education is idle',
      body: 'Start Biology → Intravenous Therapy (blood bags), then Sports Science (permanent gym gain boost). Education runs 24/7 in the background — never leave the slot empty.',
      action: { guide: 'fighter', label: 'See education priorities' },
    })
  }

  if (profile.job?.company_id === 0 || !profile.job?.company_name?.includes('(')) {
    // City job or nothing
    const passives = passiveStatus(profile)
    if (passives.length === 0 && level >= 15) {
      out.push({
        tone: 'info',
        title: 'Stack the big-3 city passives',
        body: 'Medical (revive skill), Education (10% faster courses) and Law (+5% crime gains) stay with you forever. Many players finish these before committing to player companies.',
        action: { guide: 'reviver', label: 'Start with Medical' },
      })
    }
  }

  const totalStats = profile.battlestats?.total ?? 0
  if (level >= 15 && totalStats < 100000) {
    out.push({
      tone: 'info',
      title: 'Stats are your real level',
      body: 'Past 15, level matters far less than battle stats. Live in high-happy housing, queue Sports Science, and pour energy into the gym between runs.',
      action: { guide: 'fighter', label: 'Open the Fighter path' },
    })
  }

  return out
}
