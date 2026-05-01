import React from 'react'

const defaultTitle = 'Fated LA'
const defaultDescription = 'Which candidate for LA Mayor vibes best with you?'

/** OG/Twitter card image for link previews (homepage + result URLs). Update dims if asset changes. */
export const defaultLinkPreviewImage = '/share/link-preview.png'
export const defaultLinkPreviewImageSize = { width: 474, height: 128 }

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

  // Preview deployments: og:url and og:image must use THIS deployment's host. If we prefer
  // VERCEL_PROJECT_PRODUCTION_URL here, meta tags point at prod while the shared link is a
  // preview URL — iMessage and other crawlers often fail or strip the rich preview.
  const env = process.env.VERCEL_ENV
  if (env === 'preview' || env === 'development') {
    const previewHost = normalizeSiteUrl(process.env.VERCEL_URL)
    if (previewHost) return previewHost
  }

  const vercelProduction = normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL)
  if (vercelProduction) return vercelProduction

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

  const useDefaultOgDimensions =
    typeof imageUrl === 'string' &&
    (imageUrl === defaultLinkPreviewImage || imageUrl.endsWith('/share/link-preview.png'))

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {absoluteImageUrl && <meta property="og:image" content={absoluteImageUrl} />}
      {absoluteImageUrl && useDefaultOgDimensions && (
        <>
          <meta property="og:image:width" content={String(defaultLinkPreviewImageSize.width)} />
          <meta property="og:image:height" content={String(defaultLinkPreviewImageSize.height)} />
        </>
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      {absoluteImageUrl && <meta name="twitter:image" content={absoluteImageUrl} />}
    </>
  )
}
