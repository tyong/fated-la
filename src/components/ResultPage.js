import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import ClientOnlyDithering from './ClientOnlyDithering'
import SpreadSectionExternal from './SpreadSection'

const starPath = "M100.722 2.758C101.021 -0.919 106.405 -0.919 106.703 2.758L112.411 73.151C112.626 75.808 115.942 76.885 117.678 74.862L163.672 21.268C166.074 18.469 170.43 21.633 168.51 24.783L131.752 85.088C130.364 87.364 132.413 90.184 135.007 89.568L203.719 73.244C207.308 72.391 208.972 77.512 205.567 78.932L140.383 106.113C137.922 107.139 137.922 110.625 140.383 111.651L205.567 138.833C208.972 140.252 207.308 145.373 203.719 144.52L135.007 128.196C132.413 127.58 130.364 130.4 131.752 132.676L168.51 192.981C170.43 196.131 166.074 199.296 163.672 196.496L117.678 142.902C115.942 140.879 112.626 141.956 112.411 144.613L106.703 215.007C106.405 218.683 101.021 218.683 100.722 215.007L95.014 144.613C94.799 141.956 91.484 140.879 89.748 142.902L43.753 196.496C41.351 199.296 36.995 196.131 38.915 192.981L75.673 132.676C77.061 130.4 75.012 127.58 72.418 128.196L3.706 144.52C0.117 145.373 -1.546 140.252 1.858 138.833L67.043 111.651C69.503 110.625 69.503 107.139 67.043 106.113L1.858 78.932C-1.546 77.512 0.117 72.391 3.706 73.244L72.418 89.568C75.012 90.184 77.061 87.364 75.673 85.088L38.915 24.783C36.995 21.633 41.351 18.469 43.753 21.268L89.748 74.862C91.484 76.885 94.799 75.808 95.014 73.151L100.722 2.758Z"

const mono    = '"Apercu-Mono", "Apercu Mono", "Courier New", monospace'
const monoPro = '"ApercuMonoPro-Regular", "Apercu Mono Pro", "Courier New", monospace'
const noir    = '"NOIRetBLANC-Regular", "NOIR et BLANC", "Instrument Serif", Georgia, serif'
const noirBold= '"NOIRetBLANCMediumBold", "NOIR et BLANC Medium Bold", "Instrument Serif", Georgia, serif'
const fig     = '"FigGrotesk0.3Trial-Regular", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const figBook = '"FigGrotesk0.3Trial-Book", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const purple  = '#3F00DB'
const pink    = '#FFE4F7'
const dark    = '#2A009C'
const yellow  = '#D2D260'
const offPink = '#F2CACE'
const largeCardShadow = '0 18px 32px 8px rgba(29, 13, 50, 0.8)'

// Tablet and up use the Paper “Result — Desktop” layout; phones stay narrow.
const DESKTOP_MIN = 768

function useDesktopLayout() {
  const [desktop, setDesktop] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia(`(min-width: ${DESKTOP_MIN}px)`)
    const sync = () => setDesktop(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])
  return desktop
}

const starSpinStyle = { animation: 'spinStar 10s linear infinite', transformOrigin: '50% 50%' }

const StarIcon = ({ size = 24, style = {} }) => (
  <svg width="208" height="218" viewBox="0 0 208 218" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: size, height: size, ...style }}>
    <path d={starPath} fill={yellow} />
  </svg>
)

const LargeCard = ({ name, arcana, img, imgWidth = 225, imgHeight = 362, imgLeft = 33, imgTop = 70, desktop, fluid, fluidMargin }) => {
  const isFluid = !desktop || !!fluid
  if (!isFluid) {
    return (
      <div style={{ margin: '48px auto 0', position: 'relative', width: '294px', height: '517px' }}>
        <div style={{ backgroundColor: pink, borderRadius: '6px', boxShadow: largeCardShadow, height: '100%', outline: `1px solid ${purple}`, position: 'absolute', top: 0, left: 0, width: '100%' }} />
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
    </div>
  )
}

const Section = ({ title, children }) => (
  <div
    style={{
      backgroundColor: '#291543',
      padding: '24px 33px 48px',
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
  <div style={{ color: pink, fontFamily: fig, fontSize: desktop ? '20px' : '16px', lineHeight: desktop ? '28px' : '24px', whiteSpace: 'pre-wrap' }}>
    {children}
  </div>
)

const ShareButton = ({ title, text, desktop }) => {
  const handleShare = () => {
    if (typeof navigator === 'undefined') return
    const url = window.location.href
    if (navigator.share) {
      navigator.share({ title, text, url }).catch(() => {})
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url).catch(() => {})
    }
  }
  const pos = desktop
    ? { position: 'absolute', right: 96, top: 66, zIndex: 2 }
    : { position: 'absolute', right: 12, top: 31, zIndex: 2 }
  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label="Share result"
      style={{
        alignItems: desktop ? 'center' : undefined,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: desktop ? 'flex' : undefined,
        height: desktop ? 48 : undefined,
        justifyContent: desktop ? 'center' : undefined,
        padding: desktop ? 0 : '8px',
        touchAction: 'manipulation',
        WebkitTapHighlightColor: 'transparent',
        width: desktop ? 48 : undefined,
        ...pos,
      }}
    >
      {desktop ? (
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill={yellow} style={{ width: 48, height: 48, display: 'block' }}>
          <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h120v80H240v400h480v-400H600v-80h120q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm200-240v-447l-64 64-56-57 160-160 160 160-56 57-64-64v447h-80Z" />
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 6L12 3M12 3L15 6M12 3V13M7.00023 10C6.06835 10 5.60241 10 5.23486 10.1522C4.74481 10.3552 4.35523 10.7448 4.15224 11.2349C4 11.6024 4 12.0681 4 13V17.8C4 18.9201 4 19.4798 4.21799 19.9076C4.40973 20.2839 4.71547 20.5905 5.0918 20.7822C5.5192 21 6.07899 21 7.19691 21H16.8036C17.9215 21 18.4805 21 18.9079 20.7822C19.2842 20.5905 19.5905 20.2839 19.7822 19.9076C20 19.4802 20 18.921 20 17.8031V13C20 12.0681 19.9999 11.6024 19.8477 11.2349C19.6447 10.7448 19.2554 10.3552 18.7654 10.1522C18.3978 10 17.9319 10 17 10" stroke={yellow} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  )
}

const ResultFooter = () => (
  <div style={{ backgroundColor: dark, padding: '72px 111px 80px', width: '100%', boxSizing: 'border-box' }}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px 118px', maxWidth: '1218px' }}>
      <div>
        <div style={{ color: pink, fontFamily: noirBold, fontSize: '40px', lineHeight: '50px', marginBottom: '24px' }}>About</div>
        <div style={{ color: '#FFFFFF', fontFamily: figBook, fontSize: '24px', fontWeight: 300, lineHeight: '36px', whiteSpace: 'pre-wrap' }}>
          {`This site was made by Tabitha Yong, \nWill Peng & Yvonne Leow. We're nonpartisan citizens of Los Angeles. We wanted a more fun, approachable way to do our civic duty. \n\nDesigned and vibe-coded with Paper, Claude Code & Vercel.\n\nQuestions? Comments? Recs for your favorite L.A. spot? Email us. ➝`}
        </div>
      </div>
      <div>
        <div style={{ color: pink, fontFamily: noirBold, fontSize: '40px', lineHeight: '50px', marginBottom: '24px' }}>Methodology</div>
        <div style={{ color: '#FFFFFF', fontFamily: figBook, fontSize: '24px', fontWeight: 300, lineHeight: '36px', whiteSpace: 'pre-wrap' }}>
          {`For simplicity, the candidate list is limited to credible candidates who have been officially endorsed. For the full list of candidates, go here ➝\n\nCandidate policy positions were sourced with Claude, based on whatever information they've publicly shared in their campaigns. They might change.`}
        </div>
      </div>
    </div>
    <div style={{ color: offPink, fontFamily: fig, fontSize: '12px', lineHeight: '20px', marginTop: '48px', maxWidth: '294px' }}>
      Last updated  ———  30 April 2026
    </div>
  </div>
)

const ResultPage = ({
  drew,
  soulCandidate,
  heroName,
  heroArcana,
  heroImg,
  heroImgWidth,
  heroImgHeight,
  heroImgLeft,
  heroImgTop,
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
      <div style={{
        backgroundColor: '#291543',
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
          <ClientOnlyDithering
            speed={1}
            shape="swirl"
            revealVariant="swirl"
            revealDuration={560}
            type="8x8"
            size={0.3}
            scale={1}
            colorBack="#00000000"
            colorFront="#264A89"
            style={{ backgroundColor: '#291543', height: '1031px', left: 0, position: 'absolute', top: 0, width: '100%', zIndex: 0 }}
          />
          <ShareButton title={drew?.replace('\n', '')} text={soulCandidate} desktop />
          <div style={{ position: 'absolute', left: 84, top: 58, zIndex: 2 }}>
            <StarIcon size={48} style={starSpinStyle} />
          </div>
          <div style={{ boxSizing: 'border-box', paddingTop: '108px', position: 'relative', textAlign: 'center', zIndex: 1, width: '100%', maxWidth: '572px', margin: '0 auto' }}>
            <div style={{ color: offPink, fontFamily: noirBold, fontSize: '48px', lineHeight: '52px' }}>
              {drewEyebrow}
            </div>
            <div style={{ marginTop: '40px' }}>
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
                type="4x4"
                size={0.7}
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
              <div style={{ margin: shadowHeadingSecondary ? '32px auto 0' : '8px auto 0', position: 'relative', width: '294px', height: '517px', zIndex: 1 }}>
                <div style={{ backgroundColor: pink, borderRadius: '6px', boxShadow: largeCardShadow, height: '100%', outline: `1px solid ${purple}`, position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 0 }} />
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
                maxWidth: '449px',
                padding: '48px 24px 64px',
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

        <div style={{ backgroundColor: dark, padding: '48px 111px 72px' }}>
          <div style={{ color: offPink, fontFamily: noir, fontSize: '30px', lineHeight: '48px' }}>
            Your Charge
          </div>
          <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', lineHeight: '24px', marginTop: '16px', maxWidth: '720px', whiteSpace: 'pre-wrap' }}>
            {charge}
          </div>
          <div style={{ borderTop: '1px solid rgba(255,228,247,0.2)', marginTop: '48px', paddingTop: '32px', textAlign: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div style={{ backgroundColor: pink, borderRadius: '4px', color: purple, cursor: 'pointer', display: 'inline-block', fontFamily: fig, fontSize: '16px', padding: '12px 28px' }}>
                Start over ↺
              </div>
            </Link>
          </div>
        </div>

        <ResultFooter />
      </div>
    )
  }

  return (
    <div style={{
      backgroundColor: '#291543',
      fontSynthesis: 'none',
      margin: '0 auto',
      maxWidth: '1440px',
      MozOsxFontSmoothing: 'grayscale',
      overflow: 'hidden',
      padding: 0,
      position: 'relative',
      WebkitFontSmoothing: 'antialiased',
      width: '100%',
    }}>
      <div style={{ margin: '0 auto', maxWidth: '820px', position: 'relative', width: '100%' }}>

        <ClientOnlyDithering
          speed={1}
          shape="swirl"
          revealVariant="swirl"
          revealDuration={560}
          type="8x8"
          size={0.3}
          scale={1}
          colorBack="#00000000"
          colorFront="#264A89"
          style={{ backgroundColor: '#291543', height: '823px', left: 0, position: 'absolute', top: 0, width: '100%', zIndex: 0 }}
        />

        <ShareButton title={drew?.replace('\n', '')} text={soulCandidate} desktop={false} />

        <div style={{ position: 'relative', zIndex: 1 }}>

          <div style={{ alignItems: 'center', display: 'flex', padding: '39px 20px 0 16px' }}>
            <StarIcon size={24} style={starSpinStyle} />
          </div>

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
              <div style={{ overflow: 'hidden', padding: '80px 33px 32px', position: 'relative' }}>
                <ClientOnlyDithering
                  speed={0.56}
                  shape="warp"
                  type="4x4"
                  size={1.5}
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
                  padding: '24px 33px 48px',
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

          <div style={{ backgroundColor: dark, padding: '24px 33px 60px' }}>
            <div style={{ color: '#F2CACE', fontFamily: noir, fontSize: '30px', lineHeight: '90px' }}>
              Your Charge
            </div>
            <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', lineHeight: '24px', whiteSpace: 'pre-wrap' }}>
              {charge}
            </div>

            <div style={{ borderTop: '1px solid rgba(255,228,247,0.2)', marginTop: '48px', paddingTop: '32px', textAlign: 'center' }}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <div style={{ backgroundColor: pink, borderRadius: '4px', color: purple, cursor: 'pointer', display: 'inline-block', fontFamily: fig, fontSize: '16px', padding: '12px 28px' }}>
                  Start over ↺
                </div>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ResultPage
