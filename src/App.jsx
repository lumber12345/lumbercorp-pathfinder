import { useCallback, useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import GuideView from './components/GuideView'
import Dashboard from './components/Dashboard'
import ApiKeyModal from './components/ApiKeyModal'
import MatrixRain from './components/MatrixRain'
import { useTornProfile } from './hooks/useTornProfile'
import { professionProgress } from './data/professions'

function parseHash() {
  const h = window.location.hash.replace(/^#\/?/, '')
  if (h.startsWith('guide/')) return { name: 'guide', id: h.slice(6) }
  if (h === 'dashboard') return { name: 'dashboard' }
  return { name: 'home' }
}

function toHash(view) {
  if (view.name === 'guide') return `#/guide/${view.id}`
  if (view.name === 'dashboard') return '#/dashboard'
  return '#/'
}

export default function App() {
  const [view, setView] = useState(parseHash)
  const [modalOpen, setModalOpen] = useState(false)
  const [rainOn, setRainOn] = useState(() => {
    try {
      return localStorage.getItem('lumbercorp_matrix_rain') !== 'off'
    } catch {
      return true
    }
  })

  const torn = useTornProfile()
  const { profile } = torn

  const toggleRain = useCallback(() => {
    setRainOn((on) => {
      const next = !on
      try {
        localStorage.setItem('lumbercorp_matrix_rain', next ? 'on' : 'off')
      } catch {
        /* ignore */
      }
      return next
    })
  }, [])

  useEffect(() => {
    const onHash = () => setView(parseHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const nav = useCallback((v) => {
    const target = toHash(v)
    if (window.location.hash !== target) window.location.hash = target
    setView(v)
    if (v.name !== 'guide') window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const openGuide = useCallback((id) => {
    nav({ name: 'guide', id })
  }, [nav])

  const getProgress = useCallback(
    (prof) => {
      let checked = {}
      try {
        checked = JSON.parse(localStorage.getItem(`torn_pathfinder_progress_${prof.id}`) || '{}')
      } catch {
        checked = {}
      }
      return professionProgress(prof, checked)
    },
    [],
  )

  const content = useMemo(() => {
    if (view.name === 'guide') {
      return (
        <GuideView key={view.id} profId={view.id} onBack={() => nav({ name: 'home' })} profile={profile} />
      )
    }
    if (view.name === 'dashboard') {
      return (
        <Dashboard
          profile={profile}
          isDemo={torn.isDemo}
          onConnect={() => setModalOpen(true)}
          onOpenGuide={openGuide}
        />
      )
    }
    return (
      <Home
        onOpen={openGuide}
        onConnect={() => setModalOpen(true)}
        hasProfile={!!profile}
        getProgress={getProgress}
      />
    )
  }, [view, nav, openGuide, profile, torn.isDemo, getProgress])

  return (
    <div className="min-h-screen text-slate-100">
      {rainOn && <MatrixRain />}
      {rainOn && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_65%_at_50%_40%,rgba(10,13,18,0.55),rgba(10,13,18,0.05)_70%,rgba(10,13,18,0.35)_100%)]"
        />
      )}
      <div className="relative z-10">
        <Header
          view={view}
          onNav={nav}
          profile={profile}
          isDemo={torn.isDemo}
          fetchedAt={torn.fetchedAt}
          onConnect={() => setModalOpen(true)}
          onDemo={() => setModalOpen(true)}
          onRefresh={torn.refresh}
          onDisconnect={torn.disconnect}
          refreshing={torn.loading}
          rainOn={rainOn}
          onToggleRain={toggleRain}
        />
        {content}

        {modalOpen && (
          <ApiKeyModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            onConnect={async (apiKey) => {
              const ok = await torn.connect(apiKey)
              if (ok) {
                setModalOpen(false)
                nav({ name: 'dashboard' })
              }
            }}
            onLoadDemo={(d) => {
              torn.loadDemo(d)
              setModalOpen(false)
              nav({ name: 'dashboard' })
            }}
            loading={torn.loading}
            error={torn.error}
          />
        )}
      </div>
    </div>
  )
}
