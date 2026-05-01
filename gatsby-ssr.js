/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react'

const criticalFonts = [
  '/fonts/NoirEnBlanc/noiretblanc-webfont.woff2',
  '/fonts/NoirEnBlanc/noiretblanc_medium_bold-webfont.woff2',
  '/fonts/FigGrotesk/FigGrotesk-Regular.woff2',
  '/fonts/FigGrotesk/FigGrotesk-Bold.woff2',
  '/fonts/FigGrotesk/FigGrotesk-Book.woff2',
]

/** Plain HTTP (non-localhost) → HTTPS before first paint; preserves path/query/hash and host. */
const forceHttpsScript = (
  <script
    key="force-https"
    dangerouslySetInnerHTML={{
      __html: `(function(){var h=location.hostname;if(h==="localhost"||h==="127.0.0.1"||h==="[::1]")return;if(location.protocol==="http:")location.replace("https://"+location.host+location.pathname+location.search+location.hash)})();`,
    }}
  />
)

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    forceHttpsScript,
    ...criticalFonts.map((href) => (
      <link
        key={href}
        rel="preload"
        href={href}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    )),
  ])
}
