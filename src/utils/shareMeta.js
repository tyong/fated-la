import React from 'react'

const defaultTitle = 'Fated LA'
const defaultDescription = 'Which candidate for LA Mayor vibes best with you?'

/** OG/Twitter card image for the main site URL and other routes without a result-specific card. */
export const defaultLinkPreviewImage = '/share/link-preview.png'

const normalizeSiteUrl = (value) => {
  if (!value) return null
  const trimmed = String(value).trim()
  if (!trimmed) return null
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed
  return `https://${trimmed}`
}

const resolveSiteUrl = () => {
  // Explicit project setting wins.
  const explicit = normalizeSiteUrl(process.env.GATSBY_SITE_URL)
  if (explicit) return explicit

  // Vercel's production domain (custom or default) is the best canonical fallback.
  const vercelProduction = normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL)
  if (vercelProduction) return vercelProduction

  // Last-resort fallback for preview/dev builds.
  const vercelUrl = normalizeSiteUrl(process.env.VERCEL_URL)
  if (vercelUrl) return vercelUrl

  return null
}

export const createResultHead = ({
  pageTitle = defaultTitle,
  description = defaultDescription,
  imageUrl,
  path,
}) => {
  const siteUrl = resolveSiteUrl()
  const canonicalUrl = siteUrl && path ? `${siteUrl}${path}` : null
  const absoluteImageUrl = imageUrl
    ? imageUrl.startsWith('http://') || imageUrl.startsWith('https://')
      ? imageUrl
      : siteUrl
        ? `${siteUrl}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`
        : imageUrl
    : null

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {absoluteImageUrl && <meta property="og:image" content={absoluteImageUrl} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      {absoluteImageUrl && <meta name="twitter:image" content={absoluteImageUrl} />}
    </>
  )
}
