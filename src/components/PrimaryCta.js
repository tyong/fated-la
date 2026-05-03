import React, { useState } from 'react'
import { Link } from 'gatsby'

const fig = '"FigGrotesk0.3Trial-Regular", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const yellow = '#D2D260'

/** Primary yellow link CTA: hover/press match quiz signal-yellow pattern (DESIGN.md). */
export function PrimaryCta({
  to,
  children,
  className = '',
  tabIndex,
  padding = '0 22px',
  fontSize = '16px',
  onMouseEnter: onMouseEnterProp,
  onTouchStart: onTouchStartProp,
}) {
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)
  const bg = pressed ? '#AAAA3A' : hovered ? '#C2C24E' : yellow
  return (
    <Link
      to={to}
      tabIndex={tabIndex}
      className={['primary-cta', className].filter(Boolean).join(' ')}
      style={{
        backgroundColor: bg,
        borderRadius: '4px',
        color: '#000403',
        cursor: 'pointer',
        display: 'inline-block',
        fontFamily: fig,
        fontSize,
        lineHeight: '46px',
        minHeight: '46px',
        padding,
        textDecoration: 'none',
        transition: 'background-color 250ms ease',
        userSelect: 'none',
      }}
      onMouseEnter={(e) => {
        setHovered(true)
        onMouseEnterProp?.(e)
      }}
      onMouseLeave={() => {
        setHovered(false)
        setPressed(false)
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onTouchStart={(e) => {
        setPressed(true)
        onTouchStartProp?.(e)
      }}
      onTouchEnd={() => setPressed(false)}
    >
      {children}
    </Link>
  )
}
