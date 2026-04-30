import React, { useState } from 'react'
import { Link } from 'gatsby'
import ClientOnlyDithering from './ClientOnlyDithering'
import SpreadSectionExternal from './SpreadSection'

const starPath = "M100.722 2.758C101.021 -0.919 106.405 -0.919 106.703 2.758L112.411 73.151C112.626 75.808 115.942 76.885 117.678 74.862L163.672 21.268C166.074 18.469 170.43 21.633 168.51 24.783L131.752 85.088C130.364 87.364 132.413 90.184 135.007 89.568L203.719 73.244C207.308 72.391 208.972 77.512 205.567 78.932L140.383 106.113C137.922 107.139 137.922 110.625 140.383 111.651L205.567 138.833C208.972 140.252 207.308 145.373 203.719 144.52L135.007 128.196C132.413 127.58 130.364 130.4 131.752 132.676L168.51 192.981C170.43 196.131 166.074 199.296 163.672 196.496L117.678 142.902C115.942 140.879 112.626 141.956 112.411 144.613L106.703 215.007C106.405 218.683 101.021 218.683 100.722 215.007L95.014 144.613C94.799 141.956 91.484 140.879 89.748 142.902L43.753 196.496C41.351 199.296 36.995 196.131 38.915 192.981L75.673 132.676C77.061 130.4 75.012 127.58 72.418 128.196L3.706 144.52C0.117 145.373 -1.546 140.252 1.858 138.833L67.043 111.651C69.503 110.625 69.503 107.139 67.043 106.113L1.858 78.932C-1.546 77.512 0.117 72.391 3.706 73.244L72.418 89.568C75.012 90.184 77.061 87.364 75.673 85.088L38.915 24.783C36.995 21.633 41.351 18.469 43.753 21.268L89.748 74.862C91.484 76.885 94.799 75.808 95.014 73.151L100.722 2.758Z"

const mono    = '"Apercu-Mono", "Apercu Mono", "Courier New", monospace'
const monoPro = '"ApercuMonoPro-Regular", "Apercu Mono Pro", "Courier New", monospace'
const noir    = '"NOIRetBLANC-Regular", "NOIR et BLANC", "Instrument Serif", Georgia, serif'
const noirBold= '"NOIRetBLANCMediumBold", "NOIR et BLANC Medium Bold", "Instrument Serif", Georgia, serif'
const fig     = '"FigGrotesk0.3Trial-Regular", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const purple  = '#3F00DB'
const pink    = '#FFE4F7'
const dark    = '#2A009C'
const yellow  = '#D2D260'

const StarIcon = ({ size = 24 }) => (
  <svg width="208" height="218" viewBox="0 0 208 218" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: size, height: size }}>
    <path d={starPath} fill={yellow} />
  </svg>
)

const LargeCard = ({ name, arcana, img, imgWidth = 225, imgHeight = 362, imgLeft = 33, imgTop = 70 }) => (
  <div style={{ margin: '32px auto 0', position: 'relative', width: '294px', height: '517px' }}>
    <div style={{ backgroundColor: pink, borderRadius: '6px', height: '100%', outline: `1px solid ${purple}`, position: 'absolute', top: 0, left: 0, width: '100%' }} />
    <div style={{ color: purple, fontFamily: monoPro, fontSize: '20px', left: 0, letterSpacing: '0.05em', lineHeight: '24px', position: 'absolute', textAlign: 'center', top: 27, width: '100%', zIndex: 1 }}>
      {name}
    </div>
    {img && (
      <div style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: '4px', height: `${imgHeight}px`, left: `${imgLeft}px`, outline: `1px solid ${purple}`, position: 'absolute', top: `${imgTop}px`, width: `${imgWidth}px`, zIndex: 1 }} />
    )}
    <div style={{ color: purple, fontFamily: monoPro, fontSize: '20px', left: 0, letterSpacing: '0.05em', lineHeight: '24px', position: 'absolute', textAlign: 'center', top: 461, width: '100%', zIndex: 1 }}>
      {arcana}
    </div>
  </div>
)

const Section = ({ title, children }) => (
  <div style={{ padding: '0 33px 48px' }}>
    <div style={{ color: pink, fontFamily: noirBold, fontSize: '30px', lineHeight: '90px' }}>
      {title}
    </div>
    {children}
  </div>
)

const BodyText = ({ children }) => (
  <div style={{ color: pink, fontFamily: fig, fontSize: '16px', lineHeight: '24px', whiteSpace: 'pre-wrap' }}>
    {children}
  </div>
)

const ShareButton = ({ title, text }) => {
  const handleShare = () => {
    if (typeof navigator === 'undefined') return
    const url = window.location.href
    if (navigator.share) {
      navigator.share({ title, text, url }).catch(() => {})
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url).catch(() => {})
    }
  }
  return (
    <button
      onClick={handleShare}
      aria-label="Share result"
      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', position: 'absolute', right: 12, top: 18, touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent', zIndex: 2 }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 6L12 3M12 3L15 6M12 3V13M7.00023 10C6.06835 10 5.60241 10 5.23486 10.1522C4.74481 10.3552 4.35523 10.7448 4.15224 11.2349C4 11.6024 4 12.0681 4 13V17.8C4 18.9201 4 19.4798 4.21799 19.9076C4.40973 20.2839 4.71547 20.5905 5.0918 20.7822C5.5192 21 6.07899 21 7.19691 21H16.8036C17.9215 21 18.4805 21 18.9079 20.7822C19.2842 20.5905 19.5905 20.2839 19.7822 19.9076C20 19.4802 20 18.921 20 17.8031V13C20 12.0681 19.9999 11.6024 19.8477 11.2349C19.6447 10.7448 19.2554 10.3552 18.7654 10.1522C18.3978 10 17.9319 10 17 10" stroke={yellow} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}

const StartOverButton = () => {
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)
  const bg = pressed ? '#D8C1D2' : hovered ? '#EBD2E3' : pink
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <div
        style={{ backgroundColor: bg, borderRadius: '4px', color: purple, cursor: 'pointer', display: 'inline-block', fontFamily: fig, fontSize: '16px', padding: '12px 28px', transition: 'background-color 0.15s ease', userSelect: 'none' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setPressed(false) }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onTouchStart={() => setPressed(true)}
        onTouchEnd={() => setPressed(false)}
      >
        Start over ↺
      </div>
    </Link>
  )
}

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
  const fullReading = inPlainTerms ? `${tarotReading}\n\n${inPlainTerms}` : tarotReading

  return (
    <div style={{
      backgroundColor: '#291543',
      fontSynthesis: 'none',
      margin: '0 auto',
      MozOsxFontSmoothing: 'grayscale',
      overflow: 'hidden',
      position: 'relative',
      WebkitFontSmoothing: 'antialiased',
      width: '393px',
    }}>

      <ClientOnlyDithering
        speed={1}
        shape="swirl"
        type="8x8"
        size={0.3}
        scale={1}
        colorBack="#00000000"
        colorFront="#264A89"
        style={{ backgroundColor: '#291543', height: '823px', left: 0, position: 'absolute', top: 0, width: '402px', zIndex: 0 }}
      />

      <ShareButton title={drew?.replace('\n', '')} text={soulCandidate} />

      <div style={{ position: 'relative', zIndex: 1 }}>

        <div style={{ alignItems: 'center', display: 'flex', padding: '39px 20px 0 16px' }}>
          <StarIcon size={24} />
        </div>

        <div style={{ color: yellow, fontFamily: mono, fontSize: '12px', marginTop: '-16px', textAlign: 'center' }}>
          Your tarot reading
        </div>
        <div style={{ color: pink, fontFamily: noirBold, fontSize: '30px', lineHeight: '40px', marginTop: '40px', textAlign: 'center', whiteSpace: 'pre-wrap' }}>
          {drew}
        </div>
        <div style={{ color: pink, fontFamily: fig, fontSize: '16px', lineHeight: '20px', marginTop: '12px', textAlign: 'center' }}>
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
        />

        <div style={{ marginTop: '76px' }}>
          <Section title="Your Tarot Reading">
            <BodyText>{fullReading}</BodyText>
          </Section>
        </div>

        <SpreadSectionExternal />

        {shadowTitle && (
          <div style={{ padding: '68px 33px 48px' }}>
            <div style={{ color: pink, fontFamily: noirBold, fontSize: '30px', lineHeight: '42px', paddingBottom: '32px', position: 'relative', whiteSpace: 'pre-wrap', zIndex: 1 }}>
              {shadowTitle}
            </div>

            <div style={{ margin: '0 auto', position: 'relative', width: '294px', height: '517px' }}>
              <div style={{ backgroundColor: pink, borderRadius: '6px', height: '100%', outline: `1px solid ${purple}`, position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 0 }} />
              <ClientOnlyDithering
                speed={0.56}
                shape="warp"
                type="4x4"
                size={1.5}
                scale={0.53}
                colorBack="#00000000"
                colorFront="#5E67AA"
                style={{ height: '696px', left: `${shadowImgLeft - 170}px`, position: 'absolute', top: -152, width: '589px', zIndex: 0 }}
              />
              <div style={{ color: purple, fontFamily: monoPro, fontSize: '20px', left: 0, letterSpacing: '0.05em', lineHeight: '24px', position: 'absolute', textAlign: 'center', top: 27, width: '100%', zIndex: 1 }}>
                {shadowName}
              </div>
              {shadowImg && (
                <div style={{ backgroundImage: `url(${shadowImg})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '350px', left: '41px', outline: `1px solid ${purple}`, position: 'absolute', top: 80, width: '212px', zIndex: 1 }} />
              )}
              <div style={{ color: purple, fontFamily: monoPro, fontSize: '20px', left: 0, letterSpacing: '0.05em', lineHeight: '24px', position: 'absolute', textAlign: 'center', top: 461, width: '100%', zIndex: 1 }}>
                {shadowArcana}
              </div>
            </div>

            <div style={{ color: pink, fontFamily: fig, fontSize: '16px', lineHeight: '24px', marginTop: '56px', position: 'relative', whiteSpace: 'pre-wrap', zIndex: 1 }}>
              {shadowText}
            </div>
          </div>
        )}

        <div style={{ backgroundColor: '#3F00D9', height: '0.5px' }} />
        <div style={{ backgroundColor: dark, padding: '48px 33px 60px' }}>
          <div style={{ color: '#F2CACE', fontFamily: noir, fontSize: '30px', lineHeight: '90px' }}>
            Your Charge
          </div>
          <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', lineHeight: '24px', whiteSpace: 'pre-wrap' }}>
            {charge}
          </div>

          <div style={{ borderTop: '1px solid rgba(255,228,247,0.2)', marginTop: '48px', paddingTop: '32px', textAlign: 'center' }}>
            <StartOverButton />
          </div>
        </div>

      </div>

    </div>
  )
}

export default ResultPage
