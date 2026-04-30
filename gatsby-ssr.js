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

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(
    criticalFonts.map((href) => (
      <link
        key={href}
        rel="preload"
        href={href}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    ))
  )
}
