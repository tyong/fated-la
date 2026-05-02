import React from 'react'
import { resolveSiteUrl } from './resolveSiteUrl'

const defaultTitle = 'Fated LA'
const defaultDescription = 'Which candidate for LA Mayor vibes best with you?'

/** Browser tab + OG title for candidate / Moon result pages. */
export function resultPageTitle(cardName, candidateName) {
  return `You drew: ${cardName}, ${candidateName} — Fated LA`
}

/** Browser tab + OG title for quiz question pages. */
export function questionPageTitle(questionNumber, questionTitle) {
  return `Question ${questionNumber}: ${questionTitle} — Fated LA`
}

/** OG/Twitter card image for link previews (homepage + result URLs). Update dims if asset changes. */
export const defaultLinkPreviewImage = '/share/link-preview.png'
export const defaultLinkPreviewImageSize = { width: 1024, height: 537 }

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
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
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
