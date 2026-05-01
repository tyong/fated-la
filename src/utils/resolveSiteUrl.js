function normalizeSiteUrl(value) {
  if (!value) return null
  const trimmed = String(value).trim()
  if (!trimmed) return null
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed
  return `https://${trimmed}`
}

/**
 * Canonical https origin for og:url / og:image absolute URLs.
 *
 * Gatsby only inlines `GATSBY_*` env vars into compiled JS. `VERCEL_*` is usually
 * undefined in bundles — scripts/run-build-capture.mjs sets GATSBY_SITE_URL on CI.
 *
 * Preview host wins before GATSBY_SITE_URL so a prod-only env var does not break preview OG URLs.
 */
export function resolveSiteUrl() {
  const env = process.env.VERCEL_ENV
  if (env === 'preview' || env === 'development') {
    const previewHost = normalizeSiteUrl(process.env.VERCEL_URL)
    if (previewHost) return previewHost
  }

  const explicit = normalizeSiteUrl(process.env.GATSBY_SITE_URL)
  if (explicit) return explicit

  const vercelProduction = normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL)
  if (vercelProduction) return vercelProduction

  const vercelUrl = normalizeSiteUrl(process.env.VERCEL_URL)
  if (vercelUrl) return vercelUrl

  return null
}
