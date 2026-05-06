/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react'

export { wrapPageElement } from './src/wrap-page-element'

const CRITICAL_SHELL_BG_KEY = 'critical-shell-bg'

const criticalFonts = [
  '/fonts/NoirEnBlanc/noiretblanc-webfont.woff',
  '/fonts/NoirEnBlanc/noiretblanc_medium_bold-webfont.woff',
  '/fonts/FigGrotesk/FigGrotesk-Regular.woff',
  '/fonts/FigGrotesk/FigGrotesk-Bold.woff',
  '/fonts/FigGrotesk/FigGrotesk-Book.woff',
]

/** Plain HTTP → HTTPS before first paint (dev: includes localhost; prod: LAN/Vercel only). */
const forceHttpsInline =
  process.env.NODE_ENV === 'development'
    ? `(function(){if(location.protocol==="http:")location.replace("https://"+location.host+location.pathname+location.search+location.hash)})();`
    : `(function(){var h=location.hostname;if(h==="localhost"||h==="127.0.0.1"||h==="[::1]")return;if(location.protocol==="http:")location.replace("https://"+location.host+location.pathname+location.search+location.hash)})();`

const forceHttpsScript = (
  <script key="force-https" dangerouslySetInnerHTML={{ __html: forceHttpsInline }} />
)

/** Normalize Gatsby path (may include trailing slash). */
function normalizedPath(pathname) {
  const p = (pathname || '').replace(/\/$/, '')
  return p === '' ? '/' : p
}

/**
 * Matches hero dither chrome on home (`src/pages/index.js`) and results (`ResultPage` on `/result`)
 * so first paint matches `#274988` warp dither on `#291543` before JS/CSS bundles (Paper Intro — Desktop).
 */
function criticalShellBackgroundCss(pathname) {
  const base = 'html{background-color:#291543}body{margin:0;background-color:#291543}'
  const p = normalizedPath(pathname)
  const heroDitherPages = p === '/' || p === '/result'
  if (!heroDitherPages) return base
  return `${base}body{background-image:radial-gradient(ellipse 130% 90% at 50% 0%,rgba(39,73,136,.42) 0%,rgba(41,21,67,0) 58%)}`
}

/**
 * After Gatsby merges head, move shell background `<style>` before the first font/script preload
 * so the parser applies paint rules before kicking off optional font fetches.
 */
export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const head = getHeadComponents().filter(Boolean)
  const ci = head.findIndex((c) => React.isValidElement(c) && c.key === CRITICAL_SHELL_BG_KEY)
  if (ci === -1) return

  const critical = head[ci]
  const rest = head.filter((_, i) => i !== ci)

  let insertAt = rest.findIndex((c) => {
    if (!React.isValidElement(c) || c.type !== 'link') return false
    const rel = c.props?.rel
    return rel === 'preload' || rel === 'prefetch' || rel === 'modulepreload'
  })

  if (insertAt === -1) {
    insertAt = rest.findIndex(
      (c) => React.isValidElement(c) && c.type !== 'meta' && c.type !== 'title'
    )
  }
  if (insertAt === -1) insertAt = rest.length

  replaceHeadComponents([...rest.slice(0, insertAt), critical, ...rest.slice(insertAt)])
}

export const onRenderBody = ({ setHeadComponents, pathname }) => {
  setHeadComponents([
    <meta
      key="format-detection"
      name="format-detection"
      content="telephone=no,email=no,address=no,date=no"
    />,
    <style
      key={CRITICAL_SHELL_BG_KEY}
      dangerouslySetInnerHTML={{
        __html: criticalShellBackgroundCss(pathname || ''),
      }}
    />,
    <link key="site-favicon" rel="icon" href="/favicon.svg" type="image/svg+xml" />,
    forceHttpsScript,
    ...criticalFonts.map((href) => (
      <link
        key={href}
        rel="preload"
        href={href}
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
    )),
  ])
}
