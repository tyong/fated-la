import React from 'react'

/**
 * [hover-tilt](https://github.com/simeydotme/hover-tilt) web component — registered in gatsby-browser.js.
 * Dash-case attributes for the custom element API.
 */
export function ResultTiltCard({ children, style = {}, ...tiltProps }) {
  return React.createElement(
    'div',
    {
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
        'blend-mode': 'plus-lighter',
        ...tiltProps,
      },
      children,
    ),
  )
}
