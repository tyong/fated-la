/**
 * Build-time site origin for gatsby-config, sitemap, and robots.txt.
 * Mirrors src/utils/resolveSiteUrl.js — keep both in sync when env logic changes.
 */
function normalizeSiteUrl(value) {
  if (!value) return null
  const trimmed = String(value).trim()
  if (!trimmed) return null
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed.replace(/\/$/, '')
  }
  return `https://${trimmed.replace(/\/$/, '')}`
}

function siteUrlForBuild() {
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

  return 'http://localhost:9000'
}

module.exports = { siteUrlForBuild }
