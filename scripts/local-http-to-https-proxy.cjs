/**
 * Terminates TLS on PUBLIC_PORT and forwards to Gatsby develop HTTPS on GATSBY_TLS_PORT.
 * Env: PUBLIC_PORT, GATSBY_TLS_PORT, CERT_FILE, KEY_FILE (same defaults as dev-https.sh).
 */
const fs = require('fs')
const https = require('https')

const PUBLIC_PORT = Number(process.env.PUBLIC_PORT || 9000)
const GATSBY_TLS_PORT = Number(process.env.GATSBY_TLS_PORT || 9001)
const CERT_FILE = process.env.CERT_FILE || './certs/local-dev.pem'
const KEY_FILE = process.env.KEY_FILE || './certs/local-dev-key.pem'

const cert = fs.readFileSync(CERT_FILE)
const key = fs.readFileSync(KEY_FILE)

function forwardHeaders(clientHeaders) {
  const h = { ...clientHeaders }
  h.host = `127.0.0.1:${GATSBY_TLS_PORT}`
  return h
}

const server = https.createServer({ cert, key }, (req, res) => {
  const opts = {
    hostname: '127.0.0.1',
    port: GATSBY_TLS_PORT,
    path: req.url,
    method: req.method,
    headers: forwardHeaders(req.headers),
    rejectUnauthorized: false,
  }
  const pReq = https.request(opts, (pRes) => {
    res.writeHead(pRes.statusCode, pRes.headers)
    pRes.pipe(res)
  })
  pReq.on('error', (err) => {
    res.statusCode = 502
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end(`Bad gateway: ${err.message}`)
  })
  req.pipe(pReq)
})

server.on('upgrade', (req, socket, head) => {
  const opts = {
    hostname: '127.0.0.1',
    port: GATSBY_TLS_PORT,
    path: req.url,
    method: req.method,
    headers: forwardHeaders(req.headers),
    rejectUnauthorized: false,
  }
  const pReq = https.request(opts)
  pReq.on('upgrade', (pRes, pSocket, pHead) => {
    const lines = [`HTTP/1.1 ${pRes.statusCode} ${pRes.statusMessage || ''}`]
    for (const key of Object.keys(pRes.headers)) {
      const v = pRes.headers[key]
      if (v === undefined) continue
      if (Array.isArray(v)) {
        for (const item of v) lines.push(`${key}: ${item}`)
      } else {
        lines.push(`${key}: ${v}`)
      }
    }
    lines.push('', '')
    socket.write(lines.join('\r\n'))
    pSocket.pipe(socket)
    socket.pipe(pSocket)
    if (pHead && pHead.length) pSocket.write(pHead)
    if (head && head.length) pSocket.write(head)
  })
  pReq.on('error', () => socket.destroy())
  pReq.end()
})

server.listen(PUBLIC_PORT, '0.0.0.0', () => {
  process.stderr.write(
    `[local-http-to-https-proxy] https://0.0.0.0:${PUBLIC_PORT} -> https://127.0.0.1:${GATSBY_TLS_PORT}\n`
  )
})
