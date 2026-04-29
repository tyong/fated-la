import React from 'react'
import { Link } from 'gatsby'
import { Dithering } from '@paper-design/shaders-react'

const mono    = '"Apercu-Mono", "Apercu Mono", "Courier New", monospace'
const monoPro = '"ApercuMonoPro-Regular", "Apercu Mono Pro", "Courier New", monospace'
const noir    = '"NOIRetBLANC-Regular", "NOIR et BLANC", "Instrument Serif", Georgia, serif'
const noirBold= '"NOIRetBLANCMediumBold", "NOIR et BLANC Medium Bold", "Instrument Serif", Georgia, serif'
const fig     = '"FigGrotesk0.3Trial-Regular", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const purple  = '#3F00DB'
const pink    = '#FFE4F7'

const LargeCard = ({ name, arcana, img, imgWidth = 225, imgHeight = 362, imgLeft = 33, imgTop = 70, children }) => (
  <div style={{ margin: '32px auto 0', position: 'relative', width: '294px', height: '517px' }}>
    <div style={{ backgroundColor: pink, borderRadius: '6px', height: '100%', outline: `1px solid ${purple}`, position: 'absolute', top: 0, left: 0, width: '100%' }} />
    <div style={{ color: purple, fontFamily: monoPro, fontSize: '20px', left: 0, letterSpacing: '0.05em', lineHeight: '24px', position: 'absolute', textAlign: 'center', top: 27, width: '100%' }}>
      {name}
    </div>
    <div style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: '4px', height: `${imgHeight}px`, left: `${imgLeft}px`, outline: `1px solid ${purple}`, position: 'absolute', top: `${imgTop}px`, width: `${imgWidth}px` }} />
    {children}
    <div style={{ color: purple, fontFamily: monoPro, fontSize: '20px', left: 0, letterSpacing: '0.05em', lineHeight: '24px', position: 'absolute', textAlign: 'center', top: 461, width: '100%' }}>
      {arcana}
    </div>
  </div>
)

const Section = ({ title, children }) => (
  <div style={{ padding: '0 33px 48px' }}>
    <div style={{ color: purple, fontFamily: noirBold, fontSize: '30px', lineHeight: '90px', paddingBottom: '8px' }}>
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
}) => (
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

    {/* Hero dithering swirl */}
    <Dithering
      speed={0.43}
      shape="swirl"
      type="4x4"
      size={0.7}
      scale={0.26}
      colorBack="#00000000"
      colorFront="#00BCDE"
      style={{ height: '809px', left: -117, position: 'absolute', top: -35, width: '589px' }}
    />

    {/* Header */}
    <div style={{ color: purple, fontFamily: noir, fontSize: '30px', left: 16, lineHeight: '90px', position: 'absolute', textAlign: 'center', top: -7 }}>✴</div>
    <div style={{ color: purple, fontFamily: mono, fontSize: '12px', paddingTop: '39px', textAlign: 'center' }}>
      Your tarot reading
    </div>
    <div style={{ color: purple, fontFamily: noirBold, fontSize: '30px', lineHeight: '40px', marginTop: '16px', textAlign: 'center', whiteSpace: 'pre-wrap' }}>
      {drew}
    </div>
    <div style={{ color: purple, fontFamily: fig, fontSize: '16px', lineHeight: '20px', marginTop: '12px', textAlign: 'center' }}>
      {soulCandidate}
    </div>

    {/* Main card */}
    <LargeCard
      name={heroName}
      arcana={heroArcana}
      img={heroImg}
      imgWidth={heroImgWidth}
      imgHeight={heroImgHeight}
      imgLeft={heroImgLeft}
      imgTop={heroImgTop}
    />

    {/* Sections */}
    <div style={{ marginTop: '56px' }}>
      <Section title="Your Tarot Reading">
        <BodyText>{tarotReading}</BodyText>
      </Section>

      <Section title="In Plain Terms">
        <BodyText>{inPlainTerms}</BodyText>
      </Section>

      {/* Shadow Card section */}
      <div style={{ padding: '0 33px 48px' }}>
        <div style={{ color: purple, fontFamily: noirBold, fontSize: '30px', lineHeight: '42px', paddingBottom: '8px', whiteSpace: 'pre-wrap' }}>
          {shadowTitle}
        </div>

        {/* Shadow card with warp dithering */}
        <div style={{ margin: '0 auto', position: 'relative', width: '294px', height: '517px' }}>
          <div style={{ backgroundColor: pink, borderRadius: '6px', height: '100%', outline: `1px solid ${purple}`, position: 'absolute', top: 0, left: 0, width: '100%' }} />
          <Dithering
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
          <div style={{ backgroundImage: `url(${shadowImg})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '350px', left: '41px', outline: `1px solid ${purple}`, position: 'absolute', top: 80, width: '212px' }} />
          <div style={{ color: purple, fontFamily: monoPro, fontSize: '20px', left: 0, letterSpacing: '0.05em', lineHeight: '24px', position: 'absolute', textAlign: 'center', top: 461, width: '100%' }}>
            {shadowArcana}
          </div>
        </div>

        <div style={{ color: purple, fontFamily: fig, fontSize: '16px', lineHeight: '24px', marginTop: '32px', whiteSpace: 'pre-wrap' }}>
          {shadowText}
        </div>
      </div>

      <Section title="Your Charge">
        <BodyText>{charge}</BodyText>
      </Section>
    </div>

    {/* Footer */}
    <div style={{ borderTop: `1px solid ${purple}`, margin: '0 33px', paddingBottom: '60px', paddingTop: '32px', textAlign: 'center' }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div style={{ backgroundColor: purple, color: pink, cursor: 'pointer', display: 'inline-block', fontFamily: fig, fontSize: '16px', padding: '12px 28px' }}>
          Start over ↺
        </div>
      </Link>
    </div>

  </div>
)

export default ResultPage
