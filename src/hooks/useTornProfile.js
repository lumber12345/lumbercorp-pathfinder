import { useCallback, useEffect, useRef, useState } from 'react'
import { fetchTornProfile } from '../lib/torn'

const KEY_STORAGE = 'torn_pathfinder_api_key'
const PROFILE_STORAGE = 'torn_pathfinder_profile'
const TS_STORAGE = 'torn_pathfinder_fetched_at'

export function useTornProfile() {
  const [profile, setProfile] = useState(null)
  const [rawJson, setRawJson] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [fetchedAt, setFetchedAt] = useState(null)
  const [key, setKey] = useState(() => {
    try {
      return localStorage.getItem(KEY_STORAGE) || ''
    } catch {
      return ''
    }
  })
  const mounted = useRef(true)

  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  // Restore a cached profile on boot (demo or real)
  useEffect(() => {
    try {
      const cached = localStorage.getItem(PROFILE_STORAGE)
      const ts = Number(localStorage.getItem(TS_STORAGE) || 0)
      if (cached) {
        setProfile(JSON.parse(cached))
        setFetchedAt(ts || null)
      }
    } catch {
      /* ignore */
    }
  }, [])

  const persist = useCallback((p) => {
    try {
      if (p?.isDemo) {
        // Keep the real key but don't overwrite it with demo data marker
        localStorage.setItem(PROFILE_STORAGE, JSON.stringify(p))
        localStorage.setItem(TS_STORAGE, String(Date.now()))
      } else {
        localStorage.setItem(PROFILE_STORAGE, JSON.stringify(p))
        localStorage.setItem(TS_STORAGE, String(Date.now()))
      }
    } catch {
      /* ignore */
    }
  }, [])

  const connect = useCallback(
    async (apiKey) => {
      setLoading(true)
      setError(null)
      try {
        const data = await fetchTornProfile(apiKey)
        if (!mounted.current) return false
        if (data.error) throw new Error(data.error.error || 'API error')
        setProfile(data)
        setRawJson(JSON.stringify(data, null, 2))
        setKey(apiKey)
        setFetchedAt(Date.now())
        persist(data)
        try {
          localStorage.setItem(KEY_STORAGE, apiKey)
        } catch {
          /* ignore */
        }
        return true
      } catch (err) {
        if (mounted.current) setError(err.message || 'Failed to reach Torn API')
        return false
      } finally {
        if (mounted.current) setLoading(false)
      }
    },
    [persist],
  )

  const loadDemo = useCallback(
    (demo) => {
      const p = { ...demo.profile }
      setProfile(p)
      setRawJson(null)
      setError(null)
      setFetchedAt(Date.now())
      persist(p)
      // Demo mode does not overwrite a stored real key
      setKey((k) => k)
    },
    [persist],
  )

  const refresh = useCallback(async () => {
    if (!key) return
    await connect(key)
  }, [connect, key])

  const disconnect = useCallback(() => {
    setProfile(null)
    setRawJson(null)
    setError(null)
    setFetchedAt(null)
    try {
      localStorage.removeItem(PROFILE_STORAGE)
      localStorage.removeItem(TS_STORAGE)
    } catch {
      /* ignore */
    }
  }, [])

  const forgetKey = useCallback(() => {
    setKey('')
    try {
      localStorage.removeItem(KEY_STORAGE)
    } catch {
      /* ignore */
    }
  }, [])

  // Auto-sync: keep live-key profiles fresh (bars, stats) every 60s while visible.
  // Demo profiles are static, so they are skipped.
  useEffect(() => {
    if (!key || !profile || profile.isDemo) return undefined
    const id = setInterval(() => {
      if (typeof document !== 'undefined' && document.visibilityState !== 'visible') return
      connect(key)
    }, 60000)
    return () => clearInterval(id)
  }, [key, profile?.isDemo, connect])

  return {
    profile,
    rawJson,
    loading,
    error,
    fetchedAt,
    key,
    isDemo: !!profile?.isDemo,
    connect,
    loadDemo,
    refresh,
    disconnect,
    forgetKey,
  }
}
