import React, { useLayoutEffect, useMemo, useState } from 'react'
import { Dithering } from '@paper-design/shaders-react'

/** App-wide one-shot: multiple ClientOnlyDithering mounts must not each probe (WebGL context cap ~8). */
let webgl2SupportCache
function canUseWebGL2() {
  if (webgl2SupportCache !== undefined) return webgl2SupportCache
  if (typeof document === 'undefined') {
    webgl2SupportCache = false
    return false
  }
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2')
    const ok = !!gl
    if (gl) {
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
    webgl2SupportCache = ok
    return ok
  } catch {
    webgl2SupportCache = false
    return false
  }
}

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
  /** Skip reveal delay/blur so WebGL shows on first layout pass (e.g. home hero). */
  instantReveal = false,
  ...props
}) {
  const [mounted, setMounted] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useLayoutEffect(() => {
    setMounted(true)
    setReduceMotion(prefersReducedMotion())
    if (instantReveal) {
      setRevealed(true)
    }
  }, [instantReveal])

  useLayoutEffect(() => {
    if (!mounted || instantReveal) return
    setRevealed(false)

    const timer = window.setTimeout(() => {
      if (typeof window === 'undefined') {
        setRevealed(true)
        return
      }

      window.requestAnimationFrame(() => setRevealed(true))
    }, 32)

    return () => window.clearTimeout(timer)
  }, [mounted, shape, revealVariant, instantReveal])

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

  const webgl2Ok = canUseWebGL2()

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
      {webgl2Ok ? (
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
      ) : (
        <div
          aria-hidden="true"
          style={{
            ...revealStyle,
            backgroundColor: fallbackColor,
            inset: 0,
            position: 'absolute',
            transition: `opacity ${transitionDuration}ms ease-out, transform ${transitionDuration}ms ease-out, filter ${transitionDuration}ms ease-out`,
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
        />
      )}
    </div>
  )
}
