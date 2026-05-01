import React, { useEffect, useRef } from 'react'

/**
 * [hover-tilt](https://github.com/simeydotme/hover-tilt) web component — registered in gatsby-browser.js.
 * Dash-case attributes for the custom element API.
 */
export function ResultTiltCard({ children, style = {}, ...tiltProps }) {
  const shellRef = useRef(null)

  /** Glare ::before is painted under default-slot content; lift it above slotted faces so mix-blend is visible. */
  useEffect(() => {
    const shell = shellRef.current
    if (!shell) return undefined

    let attempts = 0
    const tryInject = () => {
      attempts += 1
      const host = shell.querySelector('hover-tilt')
      if (!host?.shadowRoot) {
        if (attempts < 120) requestAnimationFrame(tryInject)
        return
      }
      if (host.dataset.fatedGlareZ === '1') return
      host.dataset.fatedGlareZ = '1'
      const style = document.createElement('style')
      style.setAttribute('data-fated-glare-z', '1')
      style.textContent = `
        .hover-tilt::before {
          z-index: 2 !important;
        }
        slot::slotted(*) {
          position: relative;
          z-index: 1 !important;
        }
      `
      host.shadowRoot.appendChild(style)
    }
    requestAnimationFrame(tryInject)
    return undefined
  }, [])

  return React.createElement(
    'div',
    {
      ref: shellRef,
      className: 'result-tilt-shell',
      style: {
        display: 'block',
        boxSizing: 'border-box',
        ...style,
      },
    },
    React.createElement(
      'hover-tilt',
      {
        'tilt-factor': 1.12,
        'scale-factor': 1,
        'glare-intensity': 0.7,
        'glare-hue': 285,
        /* overlay: reliable glare on desktop; plus-lighter composites inconsistently (often reads as “mobile only”). */
        'blend-mode': 'overlay',
        ...tiltProps,
      },
      children,
    ),
  )
}
