import { RUSH_PHASE } from './shared'
import { CITY_JOBS } from './cityJobs'
import { CAREERS } from './careers'

// Inject the shared Level 15 rush as Phase 1 for careers that use it.
const withRush = (career) => ({
  ...career,
  phases: career.phases.map((p) => (p === null ? RUSH_PHASE : p)),
})

export const PROFESSIONS = [...CITY_JOBS, ...CAREERS.map(withRush)]

export const getProfession = (id) => PROFESSIONS.find((p) => p.id === id)

export const CITY_JOB_LIST = CITY_JOBS
export const CAREER_LIST = CAREERS.map((c) => ({ ...c, phases: c.phases.map((p) => (p === null ? RUSH_PHASE : p)) }))

export function totalSteps(profession) {
  return profession.phases.reduce((n, ph) => n + ph.steps.length, 0)
}

export function professionProgress(profession, checked) {
  const total = totalSteps(profession)
  const done = profession.phases.reduce(
    (n, ph) => n + ph.steps.filter((s) => checked[s.id]).length,
    0,
  )
  return { done, total, pct: total ? Math.round((done / total) * 100) : 0 }
}
