import React, { useState } from 'react'
import { Link } from 'gatsby'
import ClientOnlyDithering from '../components/ClientOnlyDithering'

export const Head = () => (
  <>
    <title>Fated LA</title>
    <meta name="description" content="Which candidate for LA Mayor vibes best with you? 10 questions. Find out." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
)

const monoPro = '"ApercuMonoPro-Regular", "Apercu Mono Pro", "Courier New", monospace'
const noirBold= '"NOIRetBLANCMediumBold", "NOIR et BLANC Medium Bold", "Instrument Serif", Georgia, serif'
const figBook = '"FigGrotesk0.3Trial-Book", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const fig     = '"FigGrotesk0.3Trial-Regular", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const figBold = '"FigGrotesk0.3Trial-Bold", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const purple  = '#3F00DB'
const pink    = '#FFE4F7'
const dark    = '#2A009C'
const yellow  = '#D2D260'
const offPink = '#F2CACE'

const starPath = "M100.722 2.758C101.021 -0.919 106.405 -0.919 106.703 2.758L112.411 73.151C112.626 75.808 115.942 76.885 117.678 74.862L163.672 21.268C166.074 18.469 170.43 21.633 168.51 24.783L131.752 85.088C130.364 87.364 132.413 90.184 135.007 89.568L203.719 73.244C207.308 72.391 208.972 77.512 205.567 78.932L140.383 106.113C137.922 107.139 137.922 110.625 140.383 111.651L205.567 138.833C208.972 140.252 207.308 145.373 203.719 144.52L135.007 128.196C132.413 127.58 130.364 130.4 131.752 132.676L168.51 192.981C170.43 196.131 166.074 199.296 163.672 196.496L117.678 142.902C115.942 140.879 112.626 141.956 112.411 144.613L106.703 215.007C106.405 218.683 101.021 218.683 100.722 215.007L95.014 144.613C94.799 141.956 91.484 140.879 89.748 142.902L43.753 196.496C41.351 199.296 36.995 196.131 38.915 192.981L75.673 132.676C77.061 130.4 75.012 127.58 72.418 128.196L3.706 144.52C0.117 145.373 -1.546 140.252 1.858 138.833L67.043 111.651C69.503 110.625 69.503 107.139 67.043 106.113L1.858 78.932C-1.546 77.512 0.117 72.391 3.706 73.244L72.418 89.568C75.012 90.184 77.061 87.364 75.673 85.088L38.915 24.783C36.995 21.633 41.351 18.469 43.753 21.268L89.748 74.862C91.484 76.885 94.799 75.808 95.014 73.151L100.722 2.758Z"

const StarIcon = ({ size = 24, fill = yellow, style = {} }) => (
  <svg width="208" height="218" viewBox="0 0 208 218" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: size, height: size, ...style }}>
    <path d={starPath} fill={fill} />
  </svg>
)

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
  {
    name: 'SPENCER PRATT',
    arcana: 'THE TOWER',
    img: 'https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/29JHBW539RVE383B3F38JV0MRY.png',
    left: 489,
  },
  {
    name: 'ADAM MILLER',
    arcana: 'THE MAGICIAN',
    img: 'https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/0HT1SJ5VECDZ7BJP0VS9TQ9XTP.png',
    left: 654,
  },
]

const CARD_WIDTH = 155
const CARD_GAP = 10
const TRACK_WIDTH = candidates.length * (CARD_WIDTH + CARD_GAP)

const MarqueeCard = ({ name, arcana, img }) => (
  <div style={{ flexShrink: 0, height: '292px', marginRight: `${CARD_GAP}px`, position: 'relative', width: `${CARD_WIDTH}px` }}>
    <div style={{ backgroundColor: pink, borderRadius: '6px', height: '100%', left: 0, outline: `1px solid ${purple}`, position: 'absolute', top: 0, width: '100%' }} />
    <div style={{ color: purple, fontFamily: monoPro, fontSize: '10px', left: 0, letterSpacing: '0.05em', lineHeight: '12px', position: 'absolute', textAlign: 'center', top: 12, width: '100%' }}>
      {name}
    </div>
    {img && <div style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '214px', left: 21, outline: `1px solid ${purple}`, position: 'absolute', top: 37, width: '114px' }} />}
    <div style={{ color: purple, fontFamily: monoPro, fontSize: '10px', left: 0, letterSpacing: '0.05em', lineHeight: '12px', position: 'absolute', textAlign: 'center', top: 266, width: '100%' }}>
      {arcana}
    </div>
  </div>
)

const YellowButton = ({ to, children, left, top, width }) => {
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)
  const bg = pressed ? '#AAAA3A' : hovered ? '#C2C24E' : yellow
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <div
        style={{
          backgroundColor: bg,
          borderRadius: '4px',
          color: '#000403',
          cursor: 'pointer',
          fontFamily: fig,
          fontSize: '16px',
          height: '46px',
          left,
          lineHeight: '46px',
          paddingLeft: '21px',
          position: 'absolute',
          top,
          transition: 'background-color 0.15s ease',
          userSelect: 'none',
          width,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setPressed(false) }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onTouchStart={() => setPressed(true)}
        onTouchEnd={() => setPressed(false)}
      >
        {children}
      </div>
    </Link>
  )
}

const IntroPage = () => (
  <div>
    <div style={{
      backgroundColor: '#291543',
      fontSynthesis: 'none',
      MozOsxFontSmoothing: 'grayscale',
      overflow: 'hidden',
      position: 'relative',
      WebkitFontSmoothing: 'antialiased',
      width: '393px',
      minHeight: '2954px',
      margin: '0 auto',
    }}>

      {/* Swirl dithering */}
      <ClientOnlyDithering
        speed={1}
        shape="swirl"
        type="8x8"
        size={0.3}
        scale={1}
        colorBack="#00000000"
        colorFront="#264A89"
        style={{ backgroundColor: '#291543', height: '823px', left: 0, position: 'absolute', top: 0, width: '402px' }}
      />

      {/* Star ornament */}
      <StarIcon size={24} style={{ left: 24, top: 23, position: 'absolute' }} />

      {/* Fated — Los Angeles */}
      <div style={{ color: offPink, fontFamily: noirBold, fontSize: '12px', left: 'calc(50% + 86.5px)', lineHeight: '20px', position: 'absolute', textAlign: 'right', top: 23, translate: '-50%', whiteSpace: 'pre', width: '174px' }}>
        Fated{'  '}——— Los Angeles
      </div>

      {/* Headline */}
      <div style={{ color: offPink, fontFamily: noirBold, fontSize: '42px', left: 'calc(50% + 2px)', lineHeight: '56px', position: 'absolute', top: 127, translate: '-50%', whiteSpace: 'pre-wrap', width: '343px' }}>
        Which candidate for Mayor of L.A.{'\n'}do you vibe with?
      </div>

      {/* Subtitle */}
      <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', left: 29, lineHeight: '22px', position: 'absolute', top: 318, whiteSpace: 'pre' }}>
        10 questions. 5 top mayoral candidates.{'\n'}L.A's primary election on June 2.{'\n'}Learn which candidate shares your views.
      </div>

      {/* First CTA */}
      <YellowButton to="/question-01" left={29} top={427} width={121}>Let's go ➝ </YellowButton>

      {/* Candidate cards — marquee scroll */}
      <style>{`
        @keyframes card-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${TRACK_WIDTH}px); }
        }
      `}</style>
      <div style={{ height: '292px', left: 0, overflow: 'hidden', position: 'absolute', top: 572, width: '100%' }}>
        <div style={{ animation: `card-marquee 22s linear infinite`, display: 'flex', width: `${TRACK_WIDTH * 2}px` }}>
          {[...candidates, ...candidates].map((c, i) => <MarqueeCard key={i} name={c.name} arcana={c.arcana} img={c.img} />)}
        </div>
      </div>

      {/* Wave dithering — dark-to-blue transition */}
      <ClientOnlyDithering
        speed={1}
        shape="wave"
        type="4x4"
        size={1}
        scale={1.2}
        colorBack="#00000000"
        colorFront="#291543"
        style={{ backgroundColor: '#264988', height: '787px', left: 'calc(50% - 1.5px)', position: 'absolute', top: 1315, translate: '-50%', width: '1440px' }}
      />

      {/* How It Works */}
      <div style={{ left: 37, position: 'absolute', top: 916, width: '299px' }}>
        <div style={{ color: offPink, fontFamily: noirBold, fontSize: '32px', lineHeight: '50px' }}>
          How It Works
        </div>
        <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', lineHeight: '22px', marginTop: '11px', whiteSpace: 'pre-wrap', width: '320px' }}>
          Answer 10 questions revealing your feelings on LA issues. The fires, the tents, the Olympics, AI.{'\n\n'}There are no wrong answers. Just answer how you feel.{'\n\n'}At the end, we'll reveal which candidate matches your answers best.
        </div>
      </div>

      {/* I'm ready CTA */}
      <YellowButton to="/question-01" left={37} top={1211} width={131}>I'm ready ➝ </YellowButton>

      {/* Your Reading */}
      <div style={{ left: 35, position: 'absolute', top: 1369 }}>
        <div style={{ color: offPink, fontFamily: noirBold, fontSize: '32px', lineHeight: '50px' }}>
          Your Reading
        </div>
        <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', lineHeight: '22px', marginTop: '3px' }}>
          No email silliness required.
        </div>
      </div>

      {/* Your Draw item */}
      <div style={{ backgroundColor: pink, borderRadius: '2px', height: '118px', left: 35, outline: `1px solid ${purple}`, position: 'absolute', top: 1485, width: '63px' }} />
      <div style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/01KQAZTMV23XJGYQFMHR3SP8EK.png)', backgroundPosition: 'center', backgroundSize: 'cover', height: '86px', left: 43, outline: `1px solid ${purple}`, position: 'absolute', top: 1500, width: '47px' }} />
      <div style={{ color: offPink, fontFamily: figBold, fontSize: '16px', fontWeight: 700, left: 123, lineHeight: '22px', position: 'absolute', top: 1492, width: '145px' }}>
        Your Draw
      </div>
      <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', left: 123, lineHeight: '22px', position: 'absolute', top: 1522, width: '242px' }}>
        The mayoral candidate and archetype that best represents your political soul overall, based on your stated views.
      </div>

      {/* Your Spread item — stacked cards with star */}
      <div style={{ backgroundColor: pink, borderRadius: '2px', height: '84px', left: 35, outline: `1px solid ${purple}`, position: 'absolute', top: 1653, width: '48px' }} />
      <div style={{ backgroundColor: pink, borderRadius: '2px', height: '85px', left: 43, outline: `1px solid ${purple}`, position: 'absolute', top: 1659, width: '48px' }} />
      <div style={{ backgroundColor: pink, borderRadius: '2px', height: '84px', left: 51, outline: `1px solid ${purple}`, position: 'absolute', top: 1667, width: '48px' }} />
      <div style={{ backgroundColor: '#5E71D6', borderRadius: '2px', height: '71px', left: 56, outline: `1px solid ${purple}`, position: 'absolute', top: 1673, width: '38px' }} />
      <StarIcon size={20} style={{ position: 'absolute', left: 65, top: 1698 }} />
      <div style={{ color: offPink, fontFamily: figBold, fontSize: '16px', fontWeight: 700, left: 123, lineHeight: '22px', position: 'absolute', top: 1655, width: '145px' }}>
        Your Spread
      </div>
      <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', left: 123, lineHeight: '22px', position: 'absolute', top: 1685, width: '224px' }}>
        Where you align with each of the candidates on 10 specific policy issues. You might align with different ones on each.
      </div>

      {/* Your Shadow item */}
      <div style={{ backgroundColor: pink, borderRadius: '2px', height: '118px', left: 36, outline: `1px solid ${purple}`, position: 'absolute', top: 1812, width: '63px' }} />
      <div style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/01KQDK0J1H933QKYMF0CCX8GAN.png)', backgroundPosition: 'center', backgroundSize: 'cover', height: '86px', left: 44, outline: `1px solid ${purple}`, position: 'absolute', top: 1827, width: '47px' }} />
      <div style={{ color: offPink, fontFamily: figBold, fontSize: '16px', fontWeight: 700, left: 123, lineHeight: '22px', position: 'absolute', top: 1814, width: '145px' }}>
        Your Shadow
      </div>
      <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', left: 123, lineHeight: '22px', position: 'absolute', top: 1844, width: '224px' }}>
        The candidate that you may not have expected to align with, but who shares more in common than you think.
      </div>

      {/* See my fate CTA */}
      <YellowButton to="/question-01" left={37} top={1989} width={154}>See my fate ➝ </YellowButton>

      {/* Dark About section */}
      <div style={{ backgroundColor: dark, height: '1005px', left: -1, position: 'absolute', top: 2099, width: '396px' }} />

      <div style={{ color: offPink, fontFamily: noirBold, fontSize: '32px', left: 'calc(50% - 8px)', lineHeight: '50px', position: 'absolute', top: 2165, translate: '-50%', width: '299px' }}>
        About
      </div>
      <div style={{ color: '#FFFFFF', fontFamily: figBook, fontSize: '16px', fontWeight: 300, left: 39, lineHeight: '22px', position: 'absolute', top: 2231, whiteSpace: 'pre-wrap', width: '299px' }}>
        This site was made by Tabitha Yong & Yvonne Leow, nonpartisan citizens of Los Angeles. We wanted a more fun, approachable way to do our civic duty.{'\n\n'}Designed and vibe-coded with Paper, Claude Code & Vercel.{'\n'}
      </div>

      <div style={{ backgroundColor: '#DDDDDD', height: '0.4px', left: 271, position: 'absolute', top: 2349, width: '45px' }} />

      <div style={{ color: offPink, fontFamily: noirBold, fontSize: '32px', left: 'calc(50% - 8px)', lineHeight: '50px', position: 'absolute', top: 2456, translate: '-50%', width: '299px' }}>
        Methodology
      </div>
      <div style={{ color: '#FFFFFF', fontFamily: figBook, fontSize: '16px', fontWeight: 300, left: 39, lineHeight: '22px', position: 'absolute', top: 2528, whiteSpace: 'pre-wrap', width: '328px' }}>
        For simplicity, the candidate list is limited to credible candidates who have been officially endorsed. For the full list of candidates, go here ➝{'\n\n'}Candidate policy positions were sourced with Claude, based on whatever information they've publicly shared in their campaigns. They might change.{'\n\n'}Questions? Comments? Recs for your favorite LA spot? Email us ➝{'\n'}
      </div>

      <div style={{ color: offPink, fontFamily: fig, fontSize: '12px', left: 42, lineHeight: '20px', position: 'absolute', top: 2901, whiteSpace: 'pre-wrap', width: '294px' }}>
        Last updated{'  '}———{'  '}29 April 2026
      </div>

    </div>
  </div>
)

export default IntroPage
