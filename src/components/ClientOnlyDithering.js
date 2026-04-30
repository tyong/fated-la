import React, { useEffect, useMemo, useState } from 'react'

const DEFAULT_FADE_DURATION = 260
const DEFAULT_SWIRL_DURATION = 560

const prefersReducedMotion = () => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function ClientOnlyDithering({
  style,
  shape,
  revealVariant = 'auto',
  revealDuration,
  ...props
}) {
  const [mounted, setMounted] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setMounted(true)
    setReduceMotion(prefersReducedMotion())
  }, [])

  useEffect(() => {
    if (!mounted) return
    setRevealed(false)

    const timer = window.setTimeout(() => {
      if (typeof window === 'undefined') {
        setRevealed(true)
        return
      }

      window.requestAnimationFrame(() => setRevealed(true))
    }, 32)

    return () => window.clearTimeout(timer)
  }, [mounted, shape, revealVariant])

  const duration = revealDuration ?? (shape === 'swirl' ? DEFAULT_SWIRL_DURATION : DEFAULT_FADE_DURATION)
  const isSwirlReveal = revealVariant === 'swirl' || (revealVariant === 'auto' && shape === 'swirl')
  const revealStyle = useMemo(() => {
    if (!mounted || !revealed) {
      return {
        opacity: 0,
        transform: 'scale(1.03)',
        filter: isSwirlReveal && !reduceMotion ? 'blur(3px)' : 'none',
      }
    }

    return {
      opacity: 1,
      transform: 'scale(1)',
      filter: 'none',
    }
  }, [isSwirlReveal, mounted, reduceMotion, revealed])

  if (!mounted) {
    return <div style={style} />
  }

  const { Dithering } = require('@paper-design/shaders-react')
  const fallbackColor = (style && style.backgroundColor) || '#00000000'
  const transitionDuration = reduceMotion ? 120 : duration

  return (
    <div
      style={{
        ...style,
        position: (style && style.position) || 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          backgroundColor: fallbackColor,
          inset: 0,
          opacity: revealed ? 0 : 1,
          pointerEvents: 'none',
          position: 'absolute',
          zIndex: 0,
        }}
      />
      <Dithering
        style={{
          ...revealStyle,
          inset: 0,
          position: 'absolute',
          transition: `opacity ${transitionDuration}ms ease-out, transform ${transitionDuration}ms ease-out, filter ${transitionDuration}ms ease-out`,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
        shape={shape}
        {...props}
      />
    </div>
  )
}
