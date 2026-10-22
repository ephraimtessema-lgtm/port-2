import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { handleChatRequest } from './server/chatHandler.js'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables securely into process.env for server-side handlers
  const env = loadEnv(mode, process.cwd(), '')
  Object.assign(process.env, env)

  return {
    plugins: [
      tailwindcss(),
      react(),
      {
        name: 'vite-dev-ai-chat-api',
        configureServer(server) {
          server.middlewares.use('/api/chat', (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405
              res.setHeader('Content-Type', 'application/json')
              return res.end(JSON.stringify({ success: false, error: 'Method not allowed. Use POST.' }))
            }

            let bodyStr = ''
            req.on('data', (chunk) => {
              bodyStr += chunk
            })

            req.on('end', async () => {
              try {
                const body = bodyStr ? JSON.parse(bodyStr) : {}
                const clientIp = req.socket?.remoteAddress || '127.0.0.1'
                const result = await handleChatRequest(body, clientIp)

                res.statusCode = result.status
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify(result.data))
              } catch (err) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ success: false, error: err.message }))
              }
            })
          })
        }
      }
    ],
  }
})
