#!/usr/bin/env node
/**
 * Runs `gatsby build`, then optionally Playwright share capture.
 * On Vercel (VERCEL=1), skips `playwright install` unless FORCE_SHARE_CAPTURE=1 —
 * Chromium often fails in Vercel builds; PNGs ship from static/share/.
 *
 * Injects GATSBY_SITE_URL before Gatsby compiles so og:image / og:url absolute URLs
 * are inlined (Gatsby strips non-GATSBY_* env from client bundles).
 */
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { resolveSiteUrl } from '../src/utils/resolveSiteUrl.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

function run(cmd, args, extraEnv = {}) {
  const r = spawnSync(cmd, args, {
    cwd: root,
    stdio: 'inherit',
    shell: process.platform === 'win32',
    env: { ...process.env, ...extraEnv },
  })
  if ((r.status ?? 1) !== 0) process.exit(r.status ?? 1)
}

const origin = resolveSiteUrl()
run('npx', ['gatsby', 'build'], origin ? { GATSBY_SITE_URL: origin } : {})

const onVercel = process.env.VERCEL === '1'
const forceCapture = process.env.FORCE_SHARE_CAPTURE === '1'

if (onVercel && !forceCapture) {
  run('node', ['scripts/capture-share-images.mjs'])
  process.exit(0)
}

run('npx', ['playwright', 'install', 'chromium'], {
  PLAYWRIGHT_BROWSERS_PATH: '0',
})
run('node', ['scripts/capture-share-images.mjs'])
