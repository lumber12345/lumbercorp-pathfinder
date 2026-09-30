/**
 * Lumbercorp Pathfinder — production server (optional).
 *
 * Serves the built app from dist/ and proxies /api/torn to api.torn.com.
 * Used when deploying as a Render Web Service. For Render Static Sites this
 * file isn't needed: the client calls api.torn.com directly (CORS is allowed).
 *
 *   npm run build && npm start
 *   PORT is injected by Render (defaults to 3000 locally).
 */
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PORT = Number(process.env.PORT) || 3000
const HOST = '0.0.0.0'
const DIST = path.join(__dirname, 'dist')
const DEFAULT_SELECTIONS = 'profile,bars,battlestats,workstats,education,networth'

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`)
  const json = (code, obj) => {
    res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' })
    res.end(JSON.stringify(obj))
  }

  // ---- API ---------------------------------------------------------------
  if (url.pathname === '/api/health') return json(200, { status: 'ok' })

  if (url.pathname === '/api/torn') {
    if (req.method !== 'GET') {
      res.writeHead(405, { Allow: 'GET' })
      return res.end()
    }
    const key = url.searchParams.get('key')
    if (!key) return json(400, { error: { code: 1, error: 'Missing API key' } })
    const selections = url.searchParams.get('selections') || DEFAULT_SELECTIONS
    try {
      const upstream = await fetch(
        `https://api.torn.com/user/?selections=${encodeURIComponent(selections)}&key=${encodeURIComponent(key)}&comment=LumbercorpPathfinder`,
      )
      const data = await upstream.json()
      return json(200, data)
    } catch {
      return json(502, { error: { code: 502, error: 'Could not reach api.torn.com' } })
    }
  }

  // ---- Static files ------------------------------------------------------
  let pathname
  try {
    pathname = decodeURIComponent(url.pathname)
  } catch {
    pathname = '/'
  }
  if (pathname === '/') pathname = '/index.html'

  const filePath = path.resolve(DIST, `.${pathname}`)
  if (filePath !== DIST && !filePath.startsWith(DIST + path.sep)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' })
    return res.end('Forbidden')
  }

  fs.readFile(filePath, (err, buf) => {
    if (err) {
      // SPA fallback: unknown paths get index.html (hash routing also covers this)
      fs.readFile(path.join(DIST, 'index.html'), (errHtml, html) => {
        if (errHtml) {
          res.writeHead(404, { 'Content-Type': 'text/plain' })
          return res.end('Not found — run `npm run build` first.')
        }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-cache' })
        res.end(html)
      })
      return
    }
    const ext = path.extname(filePath).toLowerCase()
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=86400',
      'X-Content-Type-Options': 'nosniff',
    })
    res.end(buf)
  })
})

server.listen(PORT, HOST, () => {
  console.log(`Lumbercorp Pathfinder listening on http://${HOST}:${PORT}`)
  if (!fs.existsSync(path.join(DIST, 'index.html'))) {
    console.warn('WARNING: dist/index.html not found — run `npm run build` first.')
  }
})
