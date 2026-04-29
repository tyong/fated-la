import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import { Dithering } from '@paper-design/shaders-react'

const mono    = '"Apercu-Mono", "Apercu Mono", "Courier New", monospace'
const monoPro = '"ApercuMonoPro-Regular", "Apercu Mono Pro", "Courier New", monospace'
const noir    = '"NOIRetBLANC-Regular", "NOIR et BLANC", "Instrument Serif", Georgia, serif'
const noirBold= '"NOIRetBLANCMediumBold", "NOIR et BLANC Medium Bold", "Instrument Serif", Georgia, serif'
const fig     = '"FigGrotesk0.3Trial-Regular", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const purple  = '#3F00DB'
const pink    = '#FFE4F7'

const candidates = [
  {
    name: 'KAREN BASS',
    arcana: 'THE EMPRESS',
    img: 'https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/01KQAZTMV23XJGYQFMHR3SP8EK.png',
    left: -6,
  },
  {
    name: 'NITHYA RAMAN',
    arcana: 'THE HIGH PRIESTESS',
    img: 'https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/01KQAZTW3WNKPAVTQQY3QWWEXK.png',
    left: 159,
  },
  {
    name: 'RAE HUANG',
    arcana: 'THE STAR',
    img: 'https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/01KQAY29KREV8F0ZSQYVN8EVRM.png',
    left: 324,
  },
]

const CandidateCard = ({ name, arcana, img, left }) => (
  <div style={{ height: '292px', left, position: 'absolute', top: 540, width: '155px' }}>
    <div style={{ backgroundColor: pink, borderRadius: '6px', height: '292px', left: 0, outline: `1px solid ${purple}`, position: 'absolute', top: 0, width: '155px' }} />
    <div style={{ color: purple, fontFamily: monoPro, fontSize: '10px', height: '14px', left: 'calc(50% + 2.5px)', letterSpacing: '0.05em', lineHeight: '12px', position: 'absolute', textAlign: 'center', top: 12, translate: '-50%', width: '136px' }}>
      {name}
    </div>
    <div style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '214px', left: 21, outline: `1px solid ${purple}`, position: 'absolute', top: 37, width: '114px' }} />
    <div style={{ color: purple, fontFamily: monoPro, fontSize: '10px', height: '14px', left: 'calc(50% + 2.5px)', letterSpacing: '0.05em', lineHeight: '12px', position: 'absolute', textAlign: 'center', top: 266, translate: '-50%', width: '136px' }}>
      {arcana}
    </div>
  </div>
)

const IntroPage = () => (
  <div>
    <Helmet>
      <title>Fated LA</title>
      <meta name="description" content="Reveal who your soul thinks LA's next mayor should be." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>

    <div style={{
      backgroundColor: '#F28CEA',
      fontSynthesis: 'none',
      MozOsxFontSmoothing: 'grayscale',
      overflow: 'hidden',
      position: 'relative',
      WebkitFontSmoothing: 'antialiased',
      width: '393px',
      minHeight: '1300px',
      margin: '0 auto',
    }}>

      {/* Animated swirl */}
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

      {/* Date labels */}
      <div style={{ color: purple, fontFamily: mono, fontSize: '12px', height: '32px', left: 'calc(50% - 47.5px)', lineHeight: '16px', position: 'absolute', top: 31, translate: '-50%', whiteSpace: 'pre-wrap', width: '236px' }}>
        Los Angeles Local Election{'   '}
      </div>
      <div style={{ color: purple, fontFamily: mono, fontSize: '12px', height: '15px', left: 'calc(50% - 47.5px)', lineHeight: '16px', position: 'absolute', top: 48, translate: '-50%', width: '236px' }}>
        02 June 2026
      </div>

      {/* Star ornaments */}
      <div style={{ color: purple, fontFamily: noir, fontSize: '30px', height: '78px', left: 337, lineHeight: '90px', position: 'absolute', textAlign: 'center', top: -8 }}>✴</div>
      <div style={{ color: purple, fontFamily: noir, fontSize: '60px', height: '78px', left: 147, lineHeight: '90px', position: 'absolute', textAlign: 'center', top: 180 }}>✴</div>

      {/* Headline */}
      <div style={{ color: purple, fontFamily: noir, fontSize: '90px', height: '184px', left: 'calc(50% - 46px)', lineHeight: '90px', position: 'absolute', top: 93, translate: '-50%', whiteSpace: 'pre-wrap', width: '245px' }}>
        Fated<br />LA
      </div>

      {/* Subtext */}
      <div style={{ color: purple, fontFamily: fig, fontSize: '16px', height: '79px', left: 'calc(50% + 65px)', lineHeight: '22px', position: 'absolute', top: 331, translate: '-50%', whiteSpace: 'pre-wrap', width: '215px' }}>
        Reveal who your soul thinks LA's next mayor should be.<br />10 questions. Let's go.
      </div>

      {/* Begin read CTA */}
      <Link to="/question-01" style={{ textDecoration: 'none' }}>
        <div style={{ backgroundColor: purple, cursor: 'pointer', height: '46px', left: 154, position: 'absolute', top: 419, width: '146px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', lineHeight: '20px' }}>Begin read ➝</span>
        </div>
      </Link>

      {/* Candidate cards with illustrations */}
      {candidates.map(c => <CandidateCard key={c.name} {...c} />)}

      {/* Sphere dithering shader behind How It Works */}
      <Dithering
        speed={1}
        shape="sphere"
        type="4x4"
        size={2}
        scale={0.6}
        colorBack="#00000000"
        colorFront="#00BCDE"
        style={{ height: '333px', left: 118, position: 'absolute', top: 775, width: '284px' }}
      />

      {/* How It Works block */}
      <div style={{ left: 37, position: 'absolute', top: 901, width: '299px' }}>
        <div style={{ color: purple, fontFamily: noirBold, fontSize: '40px', lineHeight: '50px' }}>
          How It Works
        </div>
        <div style={{ color: purple, fontFamily: fig, fontSize: '16px', lineHeight: '22px', marginTop: '18px', whiteSpace: 'pre-wrap', width: '193px' }}>
          Answer 10 questions revealing your feelings on LA. The fires, the tents, the Olympics, the vibes.
        </div>
        <div style={{ color: '#3F00DA', fontFamily: fig, fontSize: '16px', lineHeight: '20px', marginTop: '96px', whiteSpace: 'pre-wrap', width: '188px' }}>
          At the end, we'll reveal which candidate matches your vibe.<br /><br />Ready?
        </div>

        {/* Let's go CTA */}
        <Link to="/question-01" style={{ textDecoration: 'none' }}>
          <div style={{ backgroundColor: purple, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '46px', marginTop: '24px', width: '131px' }}>
            <span style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', lineHeight: '20px' }}>Let's go ➝</span>
          </div>
        </Link>

        {/* Stacked card deck with star */}
        <div style={{ height: '162px', left: 211, position: 'absolute', top: 79, width: '120px' }}>
          {[
            { left: 0,  top: 0  },
            { left: 10, top: 7  },
            { left: 21, top: 17 },
            { left: 31, top: 26 },
            { left: 42, top: 35 },
            { left: 53, top: 45 },
          ].map((pos, i) => (
            <div key={i} style={{ backgroundColor: pink, borderRadius: '6px', height: '117px', left: pos.left, outline: `1px solid ${purple}`, position: 'absolute', top: pos.top, width: '67px' }} />
          ))}
          <div style={{ color: purple, fontFamily: noir, fontSize: '70px', height: '78px', left: 59, lineHeight: '90px', position: 'absolute', textAlign: 'center', top: 57 }}>✴</div>
        </div>
      </div>

    </div>
  </div>
)

export default IntroPage
