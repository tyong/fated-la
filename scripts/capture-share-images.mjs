#!/usr/bin/env node
/**
 * Generates social share PNGs (mobile hero crop) for result pages.
 *
 * After `gatsby build`, serves `public/` over HTTP and captures (local/CI), unless
 * VERCEL=1 (skipped by default; use committed static/share) or SKIP_SHARE_CAPTURE=1.
 *
 * Optional: set SHARE_CAPTURE_BASE_URL=https://your-site.vercel.app to capture
 * against an already-deployed build (public TLS; no cert download).
 *
 * Playwright browsers: use PLAYWRIGHT_BROWSERS_PATH=0 (set in `npm run build`) so
 * Chromium installs under node_modules and works in CI/Vercel without extra paths.
 *
 * Env:
 *   SKIP_SHARE_CAPTURE=1        — no-op (exit 0)
 *   SHARE_CAPTURE_BASE_URL      — full origin; if unset, local static server
 *   SHARE_CAPTURE_PORT          — local server port (default 9756)
 *   SHARE_CAPTURE_IGNORE_TLS=1  — ignore HTTPS errors (localhost HTTPS dev)
 *   PLAYWRIGHT_CHANNEL=chrome     — use installed Chrome (optional, macOS)
 */

import { mkdir, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import http from 'node:http'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const cwd = join(__dirname, '..')

// Prefer browsers under node_modules/playwright-core/.local-browsers (CI/Vercel).
// Override sandbox/tooling that sets PLAYWRIGHT_BROWSERS_PATH to a missing dir.
// To use the host env instead: PLAYWRIGHT_USE_HOST_BROWSER_PATH=1
if (process.env.PLAYWRIGHT_USE_HOST_BROWSER_PATH !== '1') {
  process.env.PLAYWRIGHT_BROWSERS_PATH = '0'
}

if (process.env.SKIP_SHARE_CAPTURE === '1') {
  console.log('[capture-share] SKIP_SHARE_CAPTURE=1 — skipping.')
  process.exit(0)
}

// Vercel: Chromium/Playwright often fails in build (sandbox/deps). Repo ships static/share/*.png.
if (process.env.VERCEL === '1' && process.env.FORCE_SHARE_CAPTURE !== '1') {
  console.log(
    '[capture-share] VERCEL=1 — skipping Playwright (use committed static/share; set FORCE_SHARE_CAPTURE=1 to capture in build).',
  )
  process.exit(0)
}

const PAGES = [
  { path: '/bass-the-empress/', file: 'bass-the-empress.png' },
  { path: '/huang-the-star/', file: 'huang-the-star.png' },
  { path: '/miller-the-magician/', file: 'miller-the-magician.png' },
  { path: '/pratt-the-tower/', file: 'pratt-the-tower.png' },
  { path: '/raman-the-high-priestess/', file: 'raman-the-high-priestess.png' },
  { path: '/the-moon/', file: 'the-moon.png' },
]

const VIEWPORT = { width: 390, height: 844 }

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

async function waitForHttpOk(url, timeoutMs = 90000) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(5000) })
      if (res.ok || res.status === 404) return
    } catch {
      /* retry */
    }
    await sleep(300)
  }
  throw new Error(`Timeout waiting for ${url}`)
}

/** @returns {Promise<() => Promise<void>>} */
async function startStaticServer(publicDir, port) {
  const handler = (await import('serve-handler')).default
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) =>
      handler(req, res, {
        public: publicDir,
        cleanUrls: true,
      }),
    )
    server.listen(Number(port), '127.0.0.1', () => {
      resolve(async () => {
        await new Promise((r) => server.close(() => r()))
      })
    })
    server.on('error', reject)
  })
}

function shouldIgnoreHttpsErrors(baseUrl) {
  if (process.env.SHARE_CAPTURE_IGNORE_TLS === '1') return true
  try {
    const u = new URL(baseUrl)
    return u.hostname === 'localhost' || u.hostname === '127.0.0.1'
  } catch {
    return false
  }
}

async function writeOutputs(filename, buffer) {
  const staticShare = join(cwd, 'static', 'share')
  await mkdir(staticShare, { recursive: true })
  await writeFile(join(staticShare, filename), buffer)

  const pubShare = join(cwd, 'public', 'share')
  if (existsSync(join(cwd, 'public'))) {
    await mkdir(pubShare, { recursive: true })
    await writeFile(join(pubShare, filename), buffer)
  }
}

async function captureOne(page, baseUrl, pathname) {
  const url = `${baseUrl.replace(/\/$/, '')}${pathname}`
  await page.goto(url, {
    waitUntil: 'domcontentloaded',
    timeout: 120000,
    ignoreHTTPSErrors: shouldIgnoreHttpsErrors(baseUrl),
  })

  await page.waitForSelector('text=Your soul has chosen.', {
    state: 'visible',
    timeout: 90000,
  })

  await page.evaluate(() => {
    const replaceWalk = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        let t = node.textContent
        t = t.replace(/\bYou drew\b/gi, 'I drew')
        t = t.replace(/\bYour soul candidate\b/g, 'My soul candidate')
        if (t !== node.textContent) node.textContent = t
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        for (const c of [...node.childNodes]) replaceWalk(c)
      }
    }
    replaceWalk(document.body)

    document.querySelectorAll('button[aria-label="Share result"]').forEach((el) => {
      el.style.visibility = 'hidden'
    })
    document.querySelectorAll('svg[viewBox="0 0 208 218"]').forEach((el) => {
      el.style.visibility = 'hidden'
    })
  })

  await sleep(900)

  const tarot = page.getByText('Your soul has chosen.', { exact: true }).first()
  await tarot.waitFor({ state: 'visible', timeout: 30000 })
  const box = await tarot.boundingBox()
  if (!box) throw new Error(`No bounding box for Tarot section on ${pathname}`)

  let clipHeight = Math.round(box.y - 12)
  clipHeight = Math.min(Math.max(clipHeight, 420), 1600)

  return page.screenshot({
    type: 'png',
    clip: { x: 0, y: 0, width: VIEWPORT.width, height: clipHeight },
  })
}

async function main() {
  let baseUrl = (process.env.SHARE_CAPTURE_BASE_URL || '').trim()
  /** @type {null | (() => Promise<void>)} */
  let stopServe = null

  if (!baseUrl) {
    const publicDir = join(cwd, 'public')
    if (!existsSync(join(publicDir, 'index.html'))) {
      console.error(
        '[capture-share] Missing gatsby output at public/. Run `gatsby build` first, or set SHARE_CAPTURE_BASE_URL.',
      )
      process.exit(1)
    }
    const port = process.env.SHARE_CAPTURE_PORT || '9756'
    baseUrl = `http://127.0.0.1:${port}`
    console.log(`[capture-share] Serving ${publicDir} at ${baseUrl}`)
    stopServe = await startStaticServer(publicDir, port)
    await waitForHttpOk(`${baseUrl}/`)
  }

  const launchOpts = {
    headless: true,
  }
  if (process.env.PLAYWRIGHT_CHANNEL) {
    launchOpts.channel = process.env.PLAYWRIGHT_CHANNEL
  }

  const { chromium } = await import('playwright')

  const browser = await chromium.launch(launchOpts)
  try {
    const context = await browser.newContext({
      viewport: VIEWPORT,
      deviceScaleFactor: 1,
    })
    const page = await context.newPage()

    for (const { path: p, file } of PAGES) {
      process.stdout.write(`[capture-share] ${p} → static/share/${file} … `)
      const buf = await captureOne(page, baseUrl, p)
      await writeOutputs(file, buf)
      console.log('ok')
    }
  } finally {
    await browser.close()
    if (stopServe) await stopServe()
  }

  console.log('[capture-share] Done.')
}

main().catch((err) => {
  console.error('[capture-share] Failed:', err)
  process.exit(1)
})
