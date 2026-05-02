/**
 * Footer copyright / last-updated line.
 *
 * `GATSBY_LAST_UPDATED` is set in `gatsby-node.js` at `gatsby build` start — on Vercel
 * that matches the deploy build (static HTML generation time). Override via env if needed.
 */
export function getFooterLegalLine() {
  const lastUpdated = process.env.GATSBY_LAST_UPDATED || '—'
  return `© Copyright ${new Date().getFullYear()} Fated • Last updated ${lastUpdated}`
}

/** `mailto:` for footer CTAs. Set `GATSBY_CONTACT_EMAIL` in env (e.g. Vercel). */
export function getContactMailtoHref() {
  const email = process.env.GATSBY_CONTACT_EMAIL
  if (email && String(email).trim()) return `mailto:${String(email).trim()}`
  return 'mailto:hello@fated.la'
}

/** Official / full candidate list (Methodology link). Override with `GATSBY_CANDIDATES_LIST_URL`. */
export function getCandidatesListUrl() {
  const u = process.env.GATSBY_CANDIDATES_LIST_URL
  if (u && String(u).trim()) return String(u).trim()
  return 'https://www.lavote.net/'
}

/** Methodology sources link. Override with `GATSBY_SOURCES_URL`. */
export function getSourcesUrl() {
  const u = process.env.GATSBY_SOURCES_URL
  if (u && String(u).trim()) return String(u).trim()
  return getCandidatesListUrl()
}
