import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import ClientOnlyDithering from './ClientOnlyDithering'
import { PrimaryCta } from './PrimaryCta'
import SpreadSectionExternal from './SpreadSection'
import { ResultTiltCard } from './ResultTiltCard'
import TopBar, { TOP_BAR_HEIGHT_DESKTOP, TOP_BAR_HEIGHT_MOBILE } from './TopBar'
import { useDesktopLayout } from '../hooks/useDesktopLayout'

const starPath = "M100.722 2.758C101.021 -0.919 106.405 -0.919 106.703 2.758L112.411 73.151C112.626 75.808 115.942 76.885 117.678 74.862L163.672 21.268C166.074 18.469 170.43 21.633 168.51 24.783L131.752 85.088C130.364 87.364 132.413 90.184 135.007 89.568L203.719 73.244C207.308 72.391 208.972 77.512 205.567 78.932L140.383 106.113C137.922 107.139 137.922 110.625 140.383 111.651L205.567 138.833C208.972 140.252 207.308 145.373 203.719 144.52L135.007 128.196C132.413 127.58 130.364 130.4 131.752 132.676L168.51 192.981C170.43 196.131 166.074 199.296 163.672 196.496L117.678 142.902C115.942 140.879 112.626 141.956 112.411 144.613L106.703 215.007C106.405 218.683 101.021 218.683 100.722 215.007L95.014 144.613C94.799 141.956 91.484 140.879 89.748 142.902L43.753 196.496C41.351 199.296 36.995 196.131 38.915 192.981L75.673 132.676C77.061 130.4 75.012 127.58 72.418 128.196L3.706 144.52C0.117 145.373 -1.546 140.252 1.858 138.833L67.043 111.651C69.503 110.625 69.503 107.139 67.043 106.113L1.858 78.932C-1.546 77.512 0.117 72.391 3.706 73.244L72.418 89.568C75.012 90.184 77.061 87.364 75.673 85.088L38.915 24.783C36.995 21.633 41.351 18.469 43.753 21.268L89.748 74.862C91.484 76.885 94.799 75.808 95.014 73.151L100.722 2.758Z"

const mono    = '"Apercu-Mono", "Apercu Mono", "Courier New", monospace'
const monoPro = '"ApercuMonoPro-Regular", "Apercu Mono Pro", "Courier New", monospace'
const noir    = '"NOIRetBLANC-Regular", "NOIR et BLANC", "Instrument Serif", Georgia, serif'
const noirBold= '"NOIRetBLANCMediumBold", "NOIR et BLANC Medium Bold", "Instrument Serif", Georgia, serif'
const fig = '"FigGrotesk0.3Trial-Regular", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const purple  = '#3F00DB'
const pink    = '#FFE4F7'
const dark    = '#2A009C'
const yellow  = '#D2D260'
const offPink = '#F2CACE'
const largeCardShadow = '0 18px 32px 8px rgba(29, 13, 50, 0.8)'
const starSpinStyle = { animation: 'spinStar 10s linear infinite', transformOrigin: '50% 50%' }

const StarIcon = ({ size = 24, style = {}, className }) => (
  <svg
    className={className}
    width="208"
    height="218"
    viewBox="0 0 208 218"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    style={{ width: size, height: size, ...style }}
  >
    <path d={starPath} fill={yellow} />
  </svg>
)

const LargeCard = ({ name, arcana, img, imgWidth = 225, imgHeight = 362, imgLeft = 33, imgTop = 70, desktop, fluid, fluidMargin }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  const zoomInStyle = {
    opacity: 1,
    transform: isVisible ? 'scale(1)' : 'scale(0.0034)',
    transformOrigin: '50% 50%',
    transition: 'transform 1700ms cubic-bezier(0.16, 1, 0.3, 1)',
  }

  const isFluid = !desktop || !!fluid
  if (!isFluid) {
    return (
      <div style={{ margin: '48px auto 0', position: 'relative', width: '294px', height: '517px' }}>
        <div className="result-card-reveal" style={{ position: 'absolute', inset: 0, ...zoomInStyle }}>
          <ResultTiltCard style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div style={{ backgroundColor: pink, borderRadius: '6px', boxShadow: largeCardShadow, height: '100%', outline: `1px solid ${purple}`, position: 'relative', width: '100%' }}>
              <div style={{ color: purple, fontFamily: monoPro, fontSize: '20px', left: '50%', letterSpacing: '0.05em', lineHeight: '24px', position: 'absolute', textAlign: 'center', top: 27, transform: 'translateX(-50%)', width: 276, zIndex: 1 }}>
                {name}
              </div>
              {img && (
                <div style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: '4px', height: `${imgHeight}px`, left: `${imgLeft}px`, outline: `1px solid ${purple}`, position: 'absolute', top: `${imgTop}px`, width: `${imgWidth}px`, zIndex: 1 }} />
              )}
              <div style={{ color: purple, fontFamily: monoPro, fontSize: '20px', left: '50%', letterSpacing: '0.05em', lineHeight: '24px', position: 'absolute', textAlign: 'center', top: 461, transform: 'translateX(-50%)', width: 294, zIndex: 1 }}>
                {arcana}
              </div>
            </div>
          </ResultTiltCard>
        </div>
      </div>
    )
  }

  const titleStyle = {
    color: purple,
    fontFamily: monoPro,
    fontSize: desktop ? '20px' : 'clamp(16px, 2vw, 20px)',
    letterSpacing: '0.05em',
    lineHeight: '24px',
    textAlign: 'center',
    width: '100%',
  }

  const fluidOuterMargin = fluidMargin ?? (desktop ? '48px auto 0' : '32px auto 0')

  const mobileCardGutter =
    !desktop && isFluid ? { paddingLeft: '16px', paddingRight: '16px', boxSizing: 'border-box' } : {}

  return (
    <div
      style={{
        boxSizing: 'border-box',
        margin: fluidOuterMargin,
        maxWidth: '300px',
        position: 'relative',
        width: '100%',
        zIndex: 1,
        ...mobileCardGutter,
      }}
    >
      <div
        className="result-card-reveal"
        style={{
          ...zoomInStyle,
          width: '100%',
        }}
      >
        <ResultTiltCard style={{ width: '100%' }}>
          <div
            style={{
              backgroundColor: pink,
              borderRadius: '6px',
              boxShadow: largeCardShadow,
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              gap: desktop ? '18px' : '16px',
              outline: `1px solid ${purple}`,
              padding: desktop ? '20px 14px 20px' : '18px 12px 18px',
              width: '100%',
            }}
          >
            <div style={titleStyle}>{name}</div>
            {img && (
              <img
                alt={name ? `${name} illustration` : 'Tarot card illustration'}
                src={img}
                style={{
                  borderRadius: '4px',
                  display: 'block',
                  height: 'auto',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  outline: `1px solid ${purple}`,
                  width: '100%',
                }}
              />
            )}
            <div style={titleStyle}>{arcana}</div>
          </div>
        </ResultTiltCard>
      </div>
    </div>
  )
}

const Section = ({ title, children }) => (
  <div
    style={{
      backgroundColor: '#291543',
      padding: '24px var(--site-gutter-x) 48px',
      position: 'relative',
      zIndex: 1,
    }}
  >
    <div style={{ color: pink, fontFamily: noirBold, fontSize: '30px', lineHeight: '90px', textAlign: 'center' }}>
      {title}
    </div>
    {children}
  </div>
)

const BodyText = ({ children, desktop }) => (
  <div
    style={{
      color: pink,
      fontFamily: fig,
      fontSize: desktop ? '20px' : '16px',
      lineHeight: desktop ? '28px' : '24px',
      textAlign: 'left',
      whiteSpace: 'pre-wrap',
    }}
  >
    {children}
  </div>
)

/** Must stay in sync with `result-bottom-bar-swap` minHeight — blur strip height uses this + offsets below. */
const SHARE_BAR_ROW_MIN_PX = 54
const SHARE_BAR_PADDING_BOTTOM_PX = 16
/** Backdrop blur only reaches this far above the button row (gradient still fades higher). */
const SHARE_BAR_BLUR_ABOVE_BUTTONS_PX = 16

const SHARE_BACKDROP_DEFAULTS = {
  background:
    'radial-gradient(147.52% 92% at 50% 100%, rgba(10, 1, 21, 0.85) 0%, rgba(28, 7, 55, 0.43) 50%, rgba(115, 115, 115, 0.00) 100%)',
  backdropFilter: 'none',
  WebkitBackdropFilter: 'none',
  blurMaskImage:
    'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.34) 10%, rgba(0, 0, 0, 0.62) 30%, rgba(0, 0, 0, 0.86) 62%, rgba(0, 0, 0, 1) 100%)',
  blurBackdropFilterDesktop: 'blur(10px)',
  blurBackdropFilterMobile: 'blur(8px)',
}

const ShareFloatingBar = ({ desktop, children }) => {
  const d = SHARE_BACKDROP_DEFAULTS
  const blurBackdrop = desktop ? d.blurBackdropFilterDesktop : d.blurBackdropFilterMobile
  const mask = d.blurMaskImage

  const blurLayerHeight = `calc(${SHARE_BAR_BLUR_ABOVE_BUTTONS_PX}px + ${SHARE_BAR_ROW_MIN_PX}px + ${SHARE_BAR_PADDING_BOTTOM_PX}px + env(safe-area-inset-bottom, 0px))`

  /** Tall top padding gives the bottom-centered radial room to reach full transparency before the box edge (avoids a hard horizontal “shelf”). Buttons stay bottom-aligned via flex-end. */
  const backdropStyle = {
    alignItems: 'center',
    background: d.background,
    backdropFilter: d.backdropFilter,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    paddingBottom: `calc(${SHARE_BAR_PADDING_BOTTOM_PX}px + env(safe-area-inset-bottom, 0px))`,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 'clamp(140px, 32vh, 420px)',
    position: 'relative',
    WebkitBackdropFilter: d.WebkitBackdropFilter,
    width: '100%',
  }

  return (
    <div
      className="result-share-floating"
      id="result-share-floating-bar"
      data-testid="result-share-floating-bar"
      data-component="ShareFloatingBar"
      style={{
        bottom: 0,
        pointerEvents: 'none',
        position: 'fixed',
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 24,
      }}
    >
      <div
        id="result-share-backdrop"
        data-testid="result-share-backdrop"
        style={backdropStyle}
      >
        <div
          aria-hidden="true"
          style={{
            backdropFilter: blurBackdrop,
            bottom: 0,
            height: blurLayerHeight,
            left: 0,
            maskImage: mask,
            pointerEvents: 'none',
            position: 'absolute',
            right: 0,
            top: 'auto',
            WebkitBackdropFilter: blurBackdrop,
            WebkitMaskImage: mask,
          }}
        />
        {children}
      </div>
    </div>
  )
}

/** Chevron nudge + hover settle: RAF owns transform so CSS can transition to translateY(0). */
const SCROLL_HINT_NUDGE_MS = 1800
const SCROLL_HINT_AMP_PX = 6
const SCROLL_HINT_SETTLE_MS = 280

const ScrollDownHint = ({ onActivate, tabIndex }) => {
  const buttonRef = useRef(null)
  const svgRef = useRef(null)
  const rafRef = useRef(null)
  const phaseStartRef = useRef(null)
  const yRef = useRef(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return undefined
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReducedMotion(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const resumeBounce = () => {
    setPaused(false)
    const el = svgRef.current
    if (el) {
      el.style.transition = ''
      el.style.transform = ''
    }
    phaseStartRef.current = typeof performance !== 'undefined' ? performance.now() : null
  }

  // Idle: sine-derived bounce (same 0 → 6px → 0 rhythm as former keyframes, ~ease feel).
  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    if (paused || reducedMotion) return undefined
    const el = svgRef.current
    if (!el) return undefined
    if (phaseStartRef.current === null) phaseStartRef.current = performance.now()

    const tick = (now) => {
      const start = phaseStartRef.current ?? now
      const t = ((now - start) % SCROLL_HINT_NUDGE_MS) / SCROLL_HINT_NUDGE_MS
      const y = (1 - Math.cos(t * 2 * Math.PI)) / 2 * SCROLL_HINT_AMP_PX
      yRef.current = y
      el.style.transition = 'none'
      el.style.transform = `translateY(${y}px)`
      rafRef.current = window.requestAnimationFrame(tick)
    }
    rafRef.current = window.requestAnimationFrame(tick)
    return () => {
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }, [paused, reducedMotion])

  // Hover/focus: transition from last RAF y to top (transform is fully under our control).
  useLayoutEffect(() => {
    if (!paused || reducedMotion || typeof window === 'undefined') return undefined
    const el = svgRef.current
    if (!el) return undefined

    let cancelled = false
    const fromY = yRef.current
    el.style.transition = 'none'
    el.style.transform = `translateY(${fromY}px)`
    void el.offsetHeight
    const id = window.requestAnimationFrame(() => {
      if (cancelled) return
      el.style.transition = `transform ${SCROLL_HINT_SETTLE_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`
      el.style.transform = 'translateY(0)'
    })
    return () => {
      cancelled = true
      window.cancelAnimationFrame(id)
    }
  }, [paused, reducedMotion])

  const onPointerLeave = () => {
    if (buttonRef.current && document.activeElement === buttonRef.current) return
    resumeBounce()
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      className="result-scroll-hint"
      aria-label="Scroll down for more content"
      data-testid="result-scroll-hint"
      tabIndex={tabIndex}
      onClick={onActivate}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={onPointerLeave}
      onFocus={() => setPaused(true)}
      onBlur={resumeBounce}
      style={{
        alignItems: 'center',
        background: 'transparent',
        border: 'none',
        borderRadius: '8px',
        color: yellow,
        cursor: 'pointer',
        display: 'inline-flex',
        justifyContent: 'center',
        padding: '8px 20px',
        pointerEvents: 'auto',
        position: 'relative',
        touchAction: 'manipulation',
        WebkitTapHighlightColor: 'transparent',
        zIndex: 1,
      }}
    >
      <svg
        ref={svgRef}
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

const ShareButton = ({ title, text, desktop, shareImageUrl }) => {
  const [showActions, setShowActions] = useState(false)
  const [hasPageOverflow, setHasPageOverflow] = useState(true)
  const [preparedShareFile, setPreparedShareFile] = useState(null)
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)
  const shareInFlightRef = useRef(false)
  const buttonBg = pressed ? '#AAAA3A' : hovered ? '#C2C24E' : yellow

  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    const threshold = desktop ? 320 : 160
    const onScroll = () => setShowActions(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [desktop])

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return undefined
    const measureOverflow = () => {
      const doc = document.documentElement
      setHasPageOverflow(doc.scrollHeight > doc.clientHeight + 32)
    }
    measureOverflow()
    window.addEventListener('resize', measureOverflow, { passive: true })
    const debouncedLate = window.setTimeout(measureOverflow, 400)
    let ro
    if (typeof ResizeObserver !== 'undefined' && document.body) {
      ro = new ResizeObserver(() => measureOverflow())
      ro.observe(document.body)
    }
    return () => {
      window.removeEventListener('resize', measureOverflow)
      window.clearTimeout(debouncedLate)
      ro?.disconnect()
    }
  }, [])

  const showScrollCaret = !showActions && hasPageOverflow

  const handleScrollDownHint = () => {
    if (typeof window === 'undefined') return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const delta = Math.min(Math.floor(window.innerHeight * 0.72), 520)
    window.scrollBy({ top: delta, behavior: reduce ? 'auto' : 'smooth' })
  }

  useEffect(() => {
    let cancelled = false
    if (!shareImageUrl || typeof window === 'undefined') {
      setPreparedShareFile(null)
      return () => {}
    }

    const prepareShareFile = async () => {
      try {
        const res = await fetch(shareImageUrl)
        if (!res.ok) return
        const blob = await res.blob()
        const ext = blob.type.includes('png') ? 'png' : 'jpg'
        const file = new File([blob], `fated-la-result.${ext}`, { type: blob.type || 'image/png' })
        if (!cancelled) setPreparedShareFile(file)
      } catch (_) {
        if (!cancelled) setPreparedShareFile(null)
      }
    }

    prepareShareFile().catch(() => {})
    return () => {
      cancelled = true
    }
  }, [shareImageUrl])

  const handleShare = async () => {
    if (typeof navigator === 'undefined' || typeof window === 'undefined') return
    if (shareInFlightRef.current) return
    shareInFlightRef.current = true
    const url = window.location.href

    try {
      if (navigator.share) {
        const fileShareAvailable =
          !!preparedShareFile &&
          navigator.canShare &&
          navigator.canShare({ files: [preparedShareFile] })

        if (fileShareAvailable) {
          await navigator.share({ title, text, url, files: [preparedShareFile] })
          return
        }

        await navigator.share({ title, text, url })
        return
      }

      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        navigator.clipboard.writeText(url).catch(() => {})
      }
    } catch (_) {
    } finally {
      shareInFlightRef.current = false
    }
  }

  const actionsVisible = !showScrollCaret

  return (
    <ShareFloatingBar desktop={desktop}>
      <div
        className="result-bottom-bar-swap"
        data-testid="result-bottom-bar-swap"
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          minHeight: `${SHARE_BAR_ROW_MIN_PX}px`,
          pointerEvents: 'none',
          position: 'relative',
          width: '100%',
          zIndex: 1,
        }}
      >
        <div
          className={`result-bottom-bar-layer${showScrollCaret ? ' result-bottom-bar-layer--visible' : ''}`}
          aria-hidden={!showScrollCaret}
        >
          <ScrollDownHint onActivate={handleScrollDownHint} tabIndex={showScrollCaret ? undefined : -1} />
        </div>
        <div
          className={`result-bottom-bar-layer${actionsVisible ? ' result-bottom-bar-layer--visible' : ''}`}
          aria-hidden={!actionsVisible}
        >
          <div
            id="result-share-button-row"
            data-testid="result-share-button-row"
            style={{
              alignItems: 'center',
              display: 'flex',
              gap: '10px',
              justifyContent: 'center',
              minHeight: '46px',
              pointerEvents: 'inherit',
              position: 'relative',
            }}
          >
            <PrimaryCta to="/" tabIndex={actionsVisible ? undefined : -1} padding="0 18px 0 22px">
              Start over{' '}
              <span className="primary-cta__reset-arrow" aria-hidden="true">
                ↺
              </span>
            </PrimaryCta>
            <button
              type="button"
              className="result-share-trigger"
              onClick={() => {
                handleShare().catch(() => {})
              }}
              onTouchEnd={(event) => {
                event.preventDefault()
                setPressed(false)
                handleShare().catch(() => {})
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => {
                setHovered(false)
                setPressed(false)
              }}
              onMouseDown={() => setPressed(true)}
              onMouseUp={() => setPressed(false)}
              onTouchStart={() => setPressed(true)}
              aria-label="Share result"
              tabIndex={actionsVisible ? undefined : -1}
              style={{
                alignItems: 'center',
                backgroundColor: buttonBg,
                border: 'none',
                borderRadius: '4px',
                color: '#000403',
                cursor: 'pointer',
                display: 'inline-flex',
                fontFamily: fig,
                fontSize: '16px',
                gap: '5px',
                justifyContent: 'center',
                lineHeight: '46px',
                minHeight: '46px',
                padding: '0 16px 0 22px',
                pointerEvents: 'auto',
                position: 'relative',
                touchAction: 'manipulation',
                transition: 'background-color 250ms ease',
                userSelect: 'none',
                WebkitTapHighlightColor: 'transparent',
                zIndex: 1,
              }}
            >
              <span>Share</span>
              <span className="result-share-trigger__icon-wrap" aria-hidden="true">
                <svg
                  className="result-share-trigger__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M8.49771 12.0103L10.0087 19.6895C10.2939 21.1393 12.2419 21.4278 12.9352 20.1229L20.2753 6.30624C20.5593 5.77171 20.5 5.18094 20.216 4.73115M8.49771 12.0103L3.00985 6.69763C1.99619 5.71634 2.69085 4 4.10169 4H18.889C19.4676 4 19.9445 4.30115 20.216 4.73115M8.49771 12.0103L20.216 4.73115M20.216 4.73115L20.3184 4.66752" stroke="#000403" strokeWidth="1.70531" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </ShareFloatingBar>
  )
}

const ResultPage = ({
  drew,
  soulCandidate,
  shareText,
  heroName,
  heroArcana,
  heroImg,
  heroImgWidth,
  heroImgHeight,
  heroImgLeft,
  heroImgTop,
  shareImage,
  tarotReading,
  inPlainTerms,
  shadowTitle,
  shadowName,
  shadowArcana,
  shadowImg,
  shadowImgLeft,
  shadowText,
  charge,
}) => {
  const desktop = useDesktopLayout()
  const fullReading = inPlainTerms ? `${tarotReading}\n\n${inPlainTerms}` : tarotReading

  useEffect(() => {
    document.documentElement.classList.add('page-results')
    return () => document.documentElement.classList.remove('page-results')
  }, [])

  if (desktop === null) {
    return (
      <div
        style={{
          backgroundColor: '#291543',
          minHeight: '100vh',
          width: '100%',
        }}
        aria-hidden="true"
      />
    )
  }

  const shadowHeadingLines = (shadowTitle || '').split('\n').map((s) => s.trim()).filter(Boolean)
  let shadowHeadingPrimary = shadowHeadingLines[0]?.replace(/:\s*$/, '').trim() || 'Your Shadow Card'
  let shadowHeadingSecondary = shadowHeadingLines[1] ?? null
  if (!shadowHeadingSecondary && shadowHeadingLines.length === 1 && shadowHeadingLines[0]) {
    const raw = shadowHeadingLines[0]
    const colon = raw.indexOf(':')
    if (colon !== -1) {
      shadowHeadingPrimary = raw.slice(0, colon).replace(/:\s*$/, '').trim() || shadowHeadingPrimary
      shadowHeadingSecondary = raw.slice(colon + 1).trim() || null
    }
  }

  const drewLines = (drew || '').split('\n').map((s) => s.trim()).filter(Boolean)
  let drewEyebrow = 'You drew'
  let drewTitle = drew || ''
  if (drewLines.length >= 2) {
    drewEyebrow = drewLines[0]
    drewTitle = drewLines.slice(1).join('\n')
  } else if (drewLines.length === 1) {
    drewTitle = drewLines[0].replace(/^you drew\.?\s*/i, '').trim() || drewLines[0]
  }

  const drewTitleDisplay = (drewTitle || '').replace(/\.\s*$/, '').trim()

  if (desktop) {
    return (
      <main
        id="main-content"
        style={{
          backgroundColor: '#291543',
          /* Matches hero dither (`src/pages/index.js` / Paper Intro — Desktop) */
          backgroundImage:
            'radial-gradient(ellipse 130% 90% at 50% 0%, rgba(39, 73, 136, 0.42) 0%, rgba(41, 21, 67, 0) 58%)',
          boxSizing: 'border-box',
          fontSynthesis: 'none',
          margin: '0 auto',
          maxWidth: '1440px',
          MozOsxFontSmoothing: 'grayscale',
          overflow: 'hidden',
          position: 'relative',
          WebkitFontSmoothing: 'antialiased',
          width: '100%',
        }}
      >
        <div style={{ boxSizing: 'border-box', minHeight: '1031px', overflow: 'hidden', position: 'relative', width: '100%' }}>
          <TopBar />
          <ClientOnlyDithering
            speed={0.27}
            shape="warp"
            type="4x4"
            size={0.2}
            scale={1}
            colorBack="#00000000"
            colorFront="#274988"
            style={{ backgroundColor: '#291543', height: '1031px', left: 0, position: 'absolute', top: 0, width: '100%', zIndex: 0 }}
          />
          <ShareButton title={drew?.replace('\n', '')} text={shareText || soulCandidate} desktop shareImageUrl={shareImage} />
          <div style={{ boxSizing: 'border-box', paddingTop: '96px', position: 'relative', textAlign: 'center', zIndex: 1, width: '100%', maxWidth: '572px', margin: '0 auto' }}>
            <div style={{ color: offPink, fontFamily: noirBold, fontSize: '48px', lineHeight: '52px' }}>
              {drewEyebrow}
            </div>
            <div style={{ marginTop: '32px' }}>
              <div style={{ color: '#FFFFFF', fontFamily: noirBold, fontSize: '70px', lineHeight: '80px', whiteSpace: 'pre-wrap' }}>
                {drewTitleDisplay}
              </div>
              <div style={{ color: offPink, fontFamily: fig, fontSize: '24px', lineHeight: '36px', marginTop: '24px' }}>
                {soulCandidate}
              </div>
              <LargeCard
                desktop
                name={heroName}
                arcana={heroArcana}
                img={heroImg}
                imgWidth={heroImgWidth}
                imgHeight={heroImgHeight}
                imgLeft={heroImgLeft}
                imgTop={heroImgTop}
              />
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#291543', padding: '64px 0 56px', position: 'relative', textAlign: 'center', zIndex: 1 }}>
          <div style={{ color: pink, fontFamily: noirBold, fontSize: '48px', lineHeight: '90px' }}>
            Your Tarot Reading
          </div>
          <div
            style={{
              boxSizing: 'border-box',
              margin: '24px auto 0',
              padding: '0 clamp(16px, 5vw, 24px)',
              width: 'min(100%, 640px)',
            }}
          >
            <BodyText desktop>{fullReading}</BodyText>
          </div>
        </div>

        <SpreadSectionExternal desktop />

        {shadowTitle && (
          <>
            <div
              style={{
                backgroundColor: '#291543',
                boxSizing: 'border-box',
                overflow: 'hidden',
                paddingBottom: '72px',
                paddingTop: '72px',
                position: 'relative',
                width: '100%',
              }}
            >
              <ClientOnlyDithering
                speed={0.56}
                shape="warp"
                type="8x8"
                size={0.3}
                scale={0.53}
                colorBack="#00000000"
                colorFront="#5E67AA"
                style={{ bottom: 0, left: 0, position: 'absolute', right: 0, top: 0, width: '100%', zIndex: 0 }}
              />
              <div style={{ position: 'relative', textAlign: 'center', zIndex: 1 }}>
                <div style={{ color: pink, fontFamily: noirBold, fontSize: '32px', lineHeight: '44px' }}>
                  {shadowHeadingPrimary}
                </div>
                {shadowHeadingSecondary && (
                  <div style={{ color: '#fff', fontFamily: noirBold, fontSize: '48px', lineHeight: '56px', marginTop: '8px' }}>
                    {shadowHeadingSecondary}
                  </div>
                )}
              </div>
              <ResultTiltCard
                style={{
                  height: '517px',
                  margin: shadowHeadingSecondary ? '32px auto 0' : '8px auto 0',
                  position: 'relative',
                  width: '294px',
                  zIndex: 1,
                }}
              >
                <div style={{ backgroundColor: pink, borderRadius: '6px', boxShadow: largeCardShadow, height: '100%', outline: `1px solid ${purple}`, position: 'relative', width: '100%', zIndex: 0 }}>
                  <div style={{ color: purple, fontFamily: monoPro, fontSize: '20px', left: '50%', letterSpacing: '0.05em', lineHeight: '24px', position: 'absolute', textAlign: 'center', top: 27, transform: 'translateX(-50%)', width: '276px', zIndex: 1 }}>
                    {shadowName}
                  </div>
                  {shadowImg && (
                    <div style={{ backgroundImage: `url(${shadowImg})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '358px', left: 40, outline: `1px solid ${purple}`, position: 'absolute', top: 76, width: '213px', zIndex: 1 }} />
                  )}
                  <div style={{ color: purple, fontFamily: monoPro, fontSize: '20px', left: '50%', letterSpacing: '0.05em', lineHeight: '24px', position: 'absolute', textAlign: 'center', top: 461, transform: 'translateX(-50%)', width: '294px', zIndex: 1 }}>
                    {shadowArcana}
                  </div>
                </div>
              </ResultTiltCard>
            </div>

            <div
              style={{
                backgroundColor: '#291543',
                boxSizing: 'border-box',
                color: pink,
                fontFamily: fig,
                fontSize: '20px',
                lineHeight: '28px',
                margin: '0 auto',
                maxWidth: '500px',
                padding: '48px 0 64px',
                position: 'relative',
                whiteSpace: 'pre-wrap',
                width: '500px',
                zIndex: 1,
              }}
            >
              {shadowText}
            </div>
          </>
        )}

        <div style={{ backgroundColor: '#5E67AC', borderTop: `1px solid ${purple}`, padding: '88px 0 72px' }}>
          <div style={{ color: '#BDC4EB', fontFamily: noirBold, fontSize: '32px', lineHeight: '44px', margin: '0 auto', textAlign: 'center', width: '500px' }}>
            How should you act?
          </div>
          <div style={{ color: '#FFFFFF', fontFamily: noirBold, fontSize: '48px', lineHeight: '56px', margin: '8px auto 0', textAlign: 'center', width: '500px' }}>
            Your Charge
          </div>
          <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '20px', lineHeight: '28px', margin: '40px auto 0', maxWidth: '500px', whiteSpace: 'pre-wrap', width: '500px' }}>
            {charge}
          </div>
        </div>
      </main>
    )
  }

  return (
    <main
      id="main-content"
      style={{
        backgroundColor: '#291543',
        backgroundImage:
          'radial-gradient(ellipse 130% 90% at 50% 0%, rgba(39, 73, 136, 0.42) 0%, rgba(41, 21, 67, 0) 58%)',
        fontSynthesis: 'none',
        margin: '0 auto',
        maxWidth: '1440px',
        MozOsxFontSmoothing: 'grayscale',
        overflow: 'hidden',
        padding: 0,
        position: 'relative',
        WebkitFontSmoothing: 'antialiased',
        width: '100%',
      }}
    >
      <div style={{ margin: '0 auto', maxWidth: '820px', position: 'relative', width: '100%' }}>
        <TopBar />

        <ClientOnlyDithering
          speed={0.27}
          shape="warp"
          type="4x4"
          size={0.2}
          scale={1}
          colorBack="#00000000"
          colorFront="#274988"
          style={{ backgroundColor: '#291543', height: '823px', left: 0, position: 'absolute', top: 0, width: '100%', zIndex: 0 }}
        />
        <ShareButton title={drew?.replace('\n', '')} text={shareText || soulCandidate} desktop={false} shareImageUrl={shareImage} />

        <div style={{ paddingTop: `${TOP_BAR_HEIGHT_MOBILE}px`, position: 'relative', zIndex: 1 }}>

          <div style={{ color: pink, fontFamily: noirBold, fontSize: '30px', lineHeight: '40px', marginTop: '-16px', textAlign: 'center', whiteSpace: 'pre-wrap' }}>
            {(drew || '').replace(/\.\s*$/, '').trim()}
          </div>
          <div style={{ color: offPink, fontFamily: fig, fontSize: '16px', lineHeight: '20px', marginTop: '12px', textAlign: 'center' }}>
            {soulCandidate}
          </div>

          <LargeCard
            name={heroName}
            arcana={heroArcana}
            img={heroImg}
            imgWidth={heroImgWidth}
            imgHeight={heroImgHeight}
            imgLeft={heroImgLeft}
            imgTop={heroImgTop}
            desktop={false}
          />

          <div style={{ marginTop: 'clamp(56px, 7vw, 92px)' }}>
            <Section title="Your Tarot Reading">
              <BodyText desktop={false}>{fullReading}</BodyText>
            </Section>
          </div>

          <div style={{ marginTop: '32px' }}>
            <SpreadSectionExternal desktop={false} />
          </div>

          {shadowTitle && (
            <>
              <div style={{ overflow: 'hidden', padding: '80px var(--site-gutter-x) 32px', position: 'relative' }}>
                <ClientOnlyDithering
                  speed={0.56}
                  shape="warp"
                  type="8x8"
                  size={0.3}
                  scale={0.53}
                  colorBack="#00000000"
                  colorFront="#5E67AA"
                  style={{ height: '696px', left: 0, position: 'absolute', top: 0, width: '100%', zIndex: 0 }}
                />
                <div style={{ color: pink, fontFamily: noirBold, fontSize: '24px', lineHeight: '32px', position: 'relative', textAlign: 'center', whiteSpace: 'pre-wrap', zIndex: 1 }}>
                  {shadowHeadingPrimary}
                </div>
                {shadowHeadingSecondary && (
                  <div style={{ color: '#FFFFFF', fontFamily: noirBold, fontSize: '32px', lineHeight: '40px', marginTop: '8px', position: 'relative', textAlign: 'center', whiteSpace: 'pre-wrap', zIndex: 1 }}>
                    {shadowHeadingSecondary}
                  </div>
                )}

                <LargeCard name={shadowName} arcana={shadowArcana} img={shadowImg} desktop={false} />
              </div>

              <div
                style={{
                  backgroundColor: '#291543',
                  boxSizing: 'border-box',
                  color: pink,
                  fontFamily: fig,
                  fontSize: '16px',
                  lineHeight: '24px',
                  padding: '24px var(--site-gutter-x) 48px',
                  position: 'relative',
                  whiteSpace: 'pre-wrap',
                  width: '100%',
                  zIndex: 1,
                }}
              >
                {shadowText}
              </div>
            </>
          )}

          <div
            style={{
              backgroundColor: '#5E67AC',
              borderTop: `1px solid ${purple}`,
              boxSizing: 'border-box',
              padding: '88px var(--site-gutter-x) 72px',
              width: '100%',
            }}
          >
            <div
              style={{
                color: '#BDC4EB',
                fontFamily: noirBold,
                fontSize: '24px',
                lineHeight: '32px',
                margin: '0 auto',
                maxWidth: '500px',
                textAlign: 'center',
                width: '100%',
              }}
            >
              How should you act?
            </div>
            <div
              style={{
                color: '#FFFFFF',
                fontFamily: noirBold,
                fontSize: '32px',
                lineHeight: '40px',
                margin: '8px auto 0',
                maxWidth: '500px',
                textAlign: 'center',
                width: '100%',
              }}
            >
              Your Charge
            </div>
            <div
              style={{
                color: '#FFFFFF',
                fontFamily: fig,
                fontSize: '16px',
                lineHeight: '24px',
                margin: '40px auto 0',
                maxWidth: '500px',
                whiteSpace: 'pre-wrap',
                width: '100%',
              }}
            >
              {charge}
            </div>
          </div>

        </div>

      </div>
    </main>
  )
}

export default ResultPage
