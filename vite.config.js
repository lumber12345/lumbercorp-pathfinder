import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function tornApiProxyPlugin() {
  return {
    name: 'torn-api-proxy',
    configureServer(server) {
      server.middlewares.use('/api/torn', async (req, res) => {
        try {
          const urlObj = new URL(req.url, 'http://localhost')
          const key = urlObj.searchParams.get('key')
          if (!key) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: { code: 1, error: 'Missing API key' } }))
            return
          }
          const selections =
            urlObj.searchParams.get('selections') ||
            'profile,bars,battlestats,workstats,education,jobpoints,perks,networth,merits'
          const tornUrl = `https://api.torn.com/user/?selections=${encodeURIComponent(selections)}&key=${encodeURIComponent(key)}&comment=LumbercorpPathfinder`
          const response = await fetch(tornUrl)
          const data = await response.json()
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(data))
        } catch (err) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: { code: 500, error: err.message || 'Proxy error' } }))
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), tornApiProxyPlugin()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true,
  },
})
