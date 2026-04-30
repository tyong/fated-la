import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import ClientOnlyDithering from './ClientOnlyDithering'
import SpreadSectionExternal from './SpreadSection'
import { SCORES, CANDIDATES, STORAGE_KEY } from '../data/scores'

const mono    = '"Apercu-Mono", "Apercu Mono", "Courier New", monospace'
const monoPro = '"ApercuMonoPro-Regular", "Apercu Mono Pro", "Courier New", monospace'
const noir    = '"NOIRetBLANC-Regular", "NOIR et BLANC", "Instrument Serif", Georgia, serif'
const noirBold= '"NOIRetBLANCMediumBold", "NOIR et BLANC Medium Bold", "Instrument Serif", Georgia, serif'
const fig     = '"FigGrotesk0.3Trial-Regular", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const purple  = '#3F00DB'
const pink    = '#FFE4F7'
const dark    = '#2A009C'
const lightBlue = '#58B3E1'

const SPREAD_ORDER = [5, 8, 2, 1, 3, 4, 6, 9, 10, 7]
const ISSUE_LABELS = {
  1: 'Wildfires', 2: 'Olympics', 3: 'Budget Deficit', 4: 'AI',
  5: 'Homelessness', 6: 'ICE Raids', 7: 'Labor Unions', 8: 'Housing',
  9: 'Mansion Tax', 10: 'Rent Increases',
}

const LargeCard = ({ name, arcana, img, imgWidth = 225, imgHeight = 362, imgLeft = 33, imgTop = 70 }) => (
  <div style={{ margin: '32px auto 0', position: 'relative', width: '294px', height: '517px' }}>
    <div style={{ backgroundColor: pink, borderRadius: '6px', height: '100%', outline: `1px solid ${purple}`, position: 'absolute', top: 0, left: 0, width: '100%' }} />
    <div style={{ color: purple, fontFamily: monoPro, fontSize: '20px', left: 0, letterSpacing: '0.05em', lineHeight: '24px', position: 'absolute', textAlign: 'center', top: 27, width: '100%' }}>
      {name}
    </div>
    {img && (
      <div style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: '4px', height: `${imgHeight}px`, left: `${imgLeft}px`, outline: `1px solid ${purple}`, position: 'absolute', top: `${imgTop}px`, width: `${imgWidth}px` }} />
    )}
    <div style={{ color: purple, fontFamily: monoPro, fontSize: '20px', left: 0, letterSpacing: '0.05em', lineHeight: '24px', position: 'absolute', textAlign: 'center', top: 461, width: '100%' }}>
      {arcana}
    </div>
  </div>
)

const Section = ({ title, children }) => (
  <div style={{ padding: '0 33px 48px' }}>
    <div style={{ color: purple, fontFamily: noirBold, fontSize: '30px', lineHeight: '90px' }}>
      {title}
    </div>
    {children}
  </div>
)

const BodyText = ({ children }) => (
  <div style={{ color: purple, fontFamily: fig, fontSize: '16px', lineHeight: '24px', whiteSpace: 'pre-wrap' }}>
    {children}
  </div>
)

const SpreadSection = ({ spread }) => (
  <div style={{ backgroundColor: dark, padding: '40px 33px 56px' }}>
    <div style={{ color: lightBlue, fontFamily: noirBold, fontSize: '30px', lineHeight: '90px' }}>
      Your Spread
    </div>
    <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', lineHeight: '22px', marginBottom: '28px', opacity: 0.7 }}>
      Here's where your choice aligned with each candidate's position, per issue.
    </div>
    <div>
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.25)', display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', marginBottom: '2px' }}>
        <div style={{ color: '#FFFFFF', fontFamily: monoPro, fontSize: '11px', letterSpacing: '0.05em', opacity: 0.5 }}>Issue</div>
        <div style={{ color: '#FFFFFF', fontFamily: monoPro, fontSize: '11px', letterSpacing: '0.05em', opacity: 0.5 }}>Your choice</div>
      </div>
      {spread.map(({ issue, candidate }, i) => (
        <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
          <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', lineHeight: '22px' }}>{issue}</div>
          <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', lineHeight: '22px', textAlign: 'right' }}>{candidate}</div>
        </div>
      ))}
    </div>
  </div>
)

const ShareButton = () => {
  const handleShare = () => {
    if (typeof navigator === 'undefined') return
    const url = window.location.href
    if (navigator.share) {
      navigator.share({ url }).catch(() => {})
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url).catch(() => {})
    }
  }
  return (
    <button
      onClick={handleShare}
      aria-label="Share result"
      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, position: 'absolute', right: 20, top: 39, zIndex: 1 }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 12L12 9M12 9L15 12M12 9V19M5 17V19H19V17" stroke={purple} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
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
  const [spread, setSpread] = useState([])

  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    const computed = SPREAD_ORDER.map(qNum => {
      const answerIdx = answers[qNum]
      if (answerIdx === undefined) return null
      const scores = SCORES[qNum][answerIdx]
      const maxScore = Math.max(...scores)
      const candidateIdx = scores.indexOf(maxScore)
      return { issue: ISSUE_LABELS[qNum], candidate: CANDIDATES[candidateIdx].name }
    }).filter(Boolean)
    setSpread(computed)
  }, [])

  const fullReading = inPlainTerms ? `${tarotReading}\n\n${inPlainTerms}` : tarotReading

  return (
    <div style={{
      backgroundColor: '#F28CEA',
      fontSynthesis: 'none',
      margin: '0 auto',
      MozOsxFontSmoothing: 'grayscale',
      overflow: 'hidden',
      position: 'relative',
      WebkitFontSmoothing: 'antialiased',
      width: '393px',
    }}>

      <ClientOnlyDithering
        speed={0.43}
        shape="swirl"
        type="4x4"
        size={0.7}
        scale={0.26}
        colorBack="#00000000"
        colorFront="#00BCDE"
        style={{ height: '809px', left: -117, position: 'absolute', top: -35, width: '589px', zIndex: 0 }}
      />

      <div style={{ color: purple, fontFamily: noir, fontSize: '30px', left: 16, lineHeight: '90px', position: 'absolute', textAlign: 'center', top: -7, zIndex: 1 }}>✴</div>
      <ShareButton />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ color: purple, fontFamily: mono, fontSize: '12px', paddingTop: '39px', textAlign: 'center' }}>
          Your tarot reading
        </div>
        <div style={{ color: purple, fontFamily: noirBold, fontSize: '30px', lineHeight: '40px', marginTop: '16px', textAlign: 'center', whiteSpace: 'pre-wrap' }}>
          {drew}
        </div>
        <div style={{ color: purple, fontFamily: fig, fontSize: '16px', lineHeight: '20px', marginTop: '12px', textAlign: 'center' }}>
          {soulCandidate}
        </div>
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

      <div style={{ marginTop: '56px' }}>
        <Section title="Your Tarot Reading">
          <BodyText>{fullReading}</BodyText>
        </Section>
      </div>

      <SpreadSectionExternal />

      {spread.length > 0 && <SpreadSection spread={spread} />}

      <div style={{ marginTop: spread.length > 0 ? '0' : '0' }}>
        {shadowTitle && (
          <div style={{ padding: '48px 33px 48px' }}>
            <div style={{ color: purple, fontFamily: noirBold, fontSize: '30px', lineHeight: '42px', paddingBottom: '8px', whiteSpace: 'pre-wrap' }}>
              {shadowTitle}
            </div>

            <div style={{ margin: '0 auto', position: 'relative', width: '294px', height: '517px' }}>
              <div style={{ backgroundColor: pink, borderRadius: '6px', height: '100%', outline: `1px solid ${purple}`, position: 'absolute', top: 0, left: 0, width: '100%' }} />
              <ClientOnlyDithering
                speed={0.56}
                shape="warp"
                type="4x4"
                size={1.5}
                scale={0.53}
                colorBack="#00000000"
                colorFront="#02BCDE"
                style={{ height: '696px', left: `${shadowImgLeft - 170}px`, position: 'absolute', top: -152, width: '589px' }}
              />
              <div style={{ color: purple, fontFamily: monoPro, fontSize: '20px', left: 0, letterSpacing: '0.05em', lineHeight: '24px', position: 'absolute', textAlign: 'center', top: 27, width: '100%' }}>
                {shadowName}
              </div>
              {shadowImg && (
                <div style={{ backgroundImage: `url(${shadowImg})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '350px', left: '41px', outline: `1px solid ${purple}`, position: 'absolute', top: 80, width: '212px' }} />
              )}
              <div style={{ color: purple, fontFamily: monoPro, fontSize: '20px', left: 0, letterSpacing: '0.05em', lineHeight: '24px', position: 'absolute', textAlign: 'center', top: 461, width: '100%' }}>
                {shadowArcana}
              </div>
            </div>

            <div style={{ color: purple, fontFamily: fig, fontSize: '16px', lineHeight: '24px', marginTop: '32px', whiteSpace: 'pre-wrap' }}>
              {shadowText}
            </div>
          </div>
        )}

        <Section title="Your Charge">
          <BodyText>{charge}</BodyText>
        </Section>
      </div>

      <div style={{ borderTop: `1px solid ${purple}`, margin: '0 33px', paddingBottom: '60px', paddingTop: '32px', textAlign: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{ backgroundColor: purple, borderRadius: '4px', color: pink, cursor: 'pointer', display: 'inline-block', fontFamily: fig, fontSize: '16px', padding: '12px 28px' }}>
            Start over ↺
          </div>
        </Link>
      </div>

    </div>
  )
}

export default ResultPage
