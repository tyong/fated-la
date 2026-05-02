import React, { useState } from 'react'
import { Link } from 'gatsby'
import ClientOnlyDithering from '../components/ClientOnlyDithering'
import useFadeUp from '../components/useFadeUp'

export const Head = () => (
  <>
    <title>Fated LA</title>
    <meta name="description" content="Which candidate for LA Mayor vibes best with you? 10 questions. Find out." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
)

const monoPro    = '"ApercuMonoPro-Regular", "Apercu Mono Pro", "Courier New", monospace'
const noirBold   = '"NOIRetBLANCMediumBold", "NOIR et BLANC Medium Bold", "Instrument Serif", Georgia, serif'
const noirMedium = '"NOIRetBLANCMedium", "NOIR et BLANC Medium", "Instrument Serif", Georgia, serif'
const figBook    = '"FigGrotesk0.3Trial-Book", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const fig        = '"FigGrotesk0.3Trial-Regular", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const figMedium  = '"FigGrotesk0.3Trial-Medium", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const figBold    = '"FigGrotesk0.3Trial-Bold", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const purple     = '#3F00DB'
const pink       = '#FFE4F7'
const dark       = '#2A009C'
const yellow     = '#D2D260'
const offPink    = '#F2CACE'

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
  },
  {
    name: 'NITHYA RAMAN',
    arcana: 'THE HIGH PRIESTESS',
    img: 'https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/01KQAZTW3WNKPAVTQQY3QWWEXK.png',
  },
  {
    name: 'RAE HUANG',
    arcana: 'THE STAR',
    img: 'https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/01KQAY29KREV8F0ZSQYVN8EVRM.png',
  },
  {
    name: 'SPENCER PRATT',
    arcana: 'THE TOWER',
    img: 'https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/29JHBW539RVE383B3F38JV0MRY.png',
    imgDesktop: 'https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/01KQDV107PRH1R9MTCAYPYX8H6.png',
  },
  {
    name: 'ADAM MILLER',
    arcana: 'THE MAGICIAN',
    img: 'https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/0HT1SJ5VECDZ7BJP0VS9TQ9XTP.png',
    imgDesktop: 'https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/01KQDTZHYY0JH7FN46HB5NCXY1.png',
  },
]

const TarotCard = ({ name, arcana, img, style = {} }) => (
  <div style={{ backgroundColor: pink, borderRadius: '6px', height: '292px', outline: `1px solid ${purple}`, position: 'absolute', width: '155px', ...style }}>
    <div style={{ color: purple, fontFamily: monoPro, fontSize: '10px', left: 0, letterSpacing: '0.05em', lineHeight: '12px', position: 'absolute', textAlign: 'center', top: 12, width: '100%' }}>
      {name}
    </div>
    {img && <div style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '214px', left: 21, outline: `1px solid ${purple}`, position: 'absolute', top: 37, width: '114px' }} />}
    <div style={{ color: purple, fontFamily: monoPro, fontSize: '10px', left: 0, letterSpacing: '0.05em', lineHeight: '12px', position: 'absolute', textAlign: 'center', top: 266, width: '100%' }}>
      {arcana}
    </div>
  </div>
)

const YellowButton = ({ to, children, left, top, width, height = 46, fontSize = '16px', paddingLeft = '21px' }) => {
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)
  const bg = pressed ? '#AAAA3A' : hovered ? '#C2C24E' : yellow
  const lineHeight = `${height}px`
  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <div
        style={{
          backgroundColor: bg,
          borderRadius: '4px',
          color: '#000403',
          cursor: 'pointer',
          fontFamily: height > 46 ? fig : fig,
          fontSize,
          height,
          left,
          lineHeight,
          paddingLeft,
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

const IntroPage = () => {
  const hero        = useFadeUp(0)
  const body        = useFadeUp(100)
  const howItWorks  = useFadeUp(0)
  const yourReading = useFadeUp(0)
  const drawRow     = useFadeUp(0)
  const spreadRow   = useFadeUp(80)
  const shadowRow   = useFadeUp(160)
  const about       = useFadeUp(0)
  const methodology = useFadeUp(0)

  return (
  <div>

    {/* ── MOBILE ── */}
    <div className="intro-mobile" style={{
      backgroundColor: '#291543',
      fontSynthesis: 'none',
      MozOsxFontSmoothing: 'grayscale',
      overflow: 'hidden',
      position: 'relative',
      WebkitFontSmoothing: 'antialiased',
      width: '393px',
      minHeight: '3037px',
      margin: '0 auto',
    }}>

      <ClientOnlyDithering
        speed={0.27}
        shape="warp"
        type="4x4"
        size={0.2}
        scale={1}
        colorBack="#00000000"
        colorFront="#274988"
        style={{ backgroundColor: '#291543', height: '666px', left: 0, position: 'absolute', top: -5, width: '402px' }}
      />

      {/* Nav */}
      <StarIcon size={15} style={{ left: 11, top: 15, position: 'absolute' }} />
      <div style={{ color: '#D1D160', fontFamily: figMedium, fontSize: '20px', left: 34, lineHeight: '22px', position: 'absolute', top: 12 }}>
        Fated
      </div>
      <div style={{ color: '#FFFFFF', fontFamily: monoPro, fontSize: '12px', left: 147, lineHeight: '22px', position: 'absolute', textAlign: 'right', top: 13, width: '133px' }}>
        LOS ANGELES MAYOR
      </div>
      <div style={{ backgroundColor: '#DDDDDD', height: '0.25px', left: 129, position: 'absolute', rotate: '270deg', top: 45, transformOrigin: '0% 0%', width: '45px' }} />

      {/* Hero */}
      <div ref={hero.ref} style={{ color: offPink, fontFamily: noirMedium, fontSize: '42px', left: 'calc(50% - 4.5px)', lineHeight: '52px', position: 'absolute', top: 109, translate: '-50%', width: '320px', ...hero.fadeStyle }}>
        Which mayoral candidate aligns with your soul?
      </div>

      <div ref={body.ref} style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', left: 32, lineHeight: '24px', position: 'absolute', top: 287, whiteSpace: 'pre-wrap', ...body.fadeStyle }}>
        {'10 questions. 5 top mayoral candidates.\nL.A.\'s primary election on June 2.\nSurrender your expectations.'}
      </div>

      <YellowButton to="/question-01" left={32} top={382} width={203}>Begin your reading {'  '}➝ </YellowButton>

      {/* Candidate cards — 3 on-screen, 2 off-screen right */}
      <TarotCard name="KAREN BASS"    arcana="THE EMPRESS"       img={candidates[0].img} style={{ left: -6,  top: 499 }} />
      <TarotCard name="NITHYA RAMAN"  arcana="THE HIGH PRIESTESS" img={candidates[1].img} style={{ left: 159, top: 499 }} />
      <TarotCard name="RAE HUANG"     arcana="THE STAR"           img={candidates[2].img} style={{ left: 324, top: 499 }} />
      <TarotCard name="SPENCER PRATT" arcana="THE TOWER"          img={candidates[3].img} style={{ left: 489, top: 540 }} />
      <TarotCard name="ADAM MILLER"   arcana="THE MAGICIAN"       img={candidates[4].img} style={{ left: 654, top: 540 }} />

      <ClientOnlyDithering
        speed={1}
        shape="wave"
        type="4x4"
        size={1}
        scale={1.2}
        colorBack="#00000000"
        colorFront="#291543"
        style={{ backgroundColor: '#264988', height: '618px', left: 'calc(50% + 0.5px)', position: 'absolute', top: 1314, translate: '-50%', width: '1440px' }}
      />

      {/* Channel your intuition */}
      <div ref={howItWorks.ref} style={{ left: 37, position: 'absolute', top: 863, width: '320px', ...howItWorks.fadeStyle }}>
        <div style={{ color: offPink, fontFamily: noirMedium, fontSize: '32px', lineHeight: '50px' }}>
          Channel your intuition
        </div>
        <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', lineHeight: '24px', marginTop: '8px', whiteSpace: 'pre-wrap' }}>
          {'Answer 10 questions about Los Angeles — its fires, its failures, its possible futures.\n\nIn the end, your Fated reading will name the candidate whose vision most closely aligns with your own.\n\nYour cards do not tell you what to believe. They mirror what you already feel.'}
        </div>
      </div>

      <YellowButton to="/question-01" left={35} top={1186} width={131}>Let's go{'  '}➝ </YellowButton>

      {/* Reveal your desire */}
      <div ref={yourReading.ref} style={{ left: 35, position: 'absolute', top: 1363, ...yourReading.fadeStyle }}>
        <div style={{ color: offPink, fontFamily: noirBold, fontSize: '32px', lineHeight: '50px' }}>
          Reveal your desire
        </div>
        <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', lineHeight: '22px', marginTop: '3px' }}>
          Your Fated reading shows your truth.
        </div>
      </div>

      {/* Your Draw */}
      <div ref={drawRow.ref} style={{ backgroundColor: pink, borderRadius: '2px', height: '118px', left: 35, outline: `1px solid ${purple}`, position: 'absolute', top: 1485, width: '63px', ...drawRow.fadeStyle }} />
      <div style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/01KQAZTMV23XJGYQFMHR3SP8EK.png)', backgroundPosition: 'center', backgroundSize: 'cover', height: '86px', left: 43, outline: `1px solid ${purple}`, position: 'absolute', top: 1500, width: '47px', ...drawRow.fadeStyle }} />
      <div style={{ color: offPink, fontFamily: figBold, fontSize: '16px', fontWeight: 700, left: 123, lineHeight: '22px', position: 'absolute', top: 1492, width: '145px', ...drawRow.fadeStyle }}>
        Your Draw
      </div>
      <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', left: 123, lineHeight: '22px', position: 'absolute', top: 1522, width: '227px', ...drawRow.fadeStyle }}>
        Based on your 10 answers, see the archetype and mayoral candidate that best aligns with your soul.
      </div>

      {/* Your Spread */}
      <div ref={spreadRow.ref} style={{ backgroundColor: pink, borderRadius: '2px', height: '84px', left: 35, outline: `1px solid ${purple}`, position: 'absolute', top: 1653, width: '48px', ...spreadRow.fadeStyle }} />
      <div style={{ backgroundColor: pink, borderRadius: '2px', height: '85px', left: 43, outline: `1px solid ${purple}`, position: 'absolute', top: 1659, width: '48px', ...spreadRow.fadeStyle }} />
      <div style={{ backgroundColor: pink, borderRadius: '2px', height: '84px', left: 51, outline: `1px solid ${purple}`, position: 'absolute', top: 1667, width: '48px', ...spreadRow.fadeStyle }} />
      <div style={{ backgroundColor: '#5E71D6', borderRadius: '2px', height: '71px', left: 56, outline: `1px solid ${purple}`, position: 'absolute', top: 1673, width: '38px', ...spreadRow.fadeStyle }} />
      <StarIcon size={20} style={{ position: 'absolute', left: 65, top: 1698, ...spreadRow.fadeStyle }} />
      <div style={{ color: offPink, fontFamily: figBold, fontSize: '16px', fontWeight: 700, left: 123, lineHeight: '22px', position: 'absolute', top: 1655, width: '145px', ...spreadRow.fadeStyle }}>
        Your Spread
      </div>
      <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', left: 123, lineHeight: '22px', position: 'absolute', top: 1685, width: '224px', ...spreadRow.fadeStyle }}>
        See how each candidate mirrors your heart along 10 unique policy issues. Be open to synchronicities.
      </div>

      {/* Your Shadow */}
      <div ref={shadowRow.ref} style={{ backgroundColor: pink, borderRadius: '2px', height: '118px', left: 36, outline: `1px solid ${purple}`, position: 'absolute', top: 1812, width: '63px', ...shadowRow.fadeStyle }} />
      <div style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/01KQDK0J1H933QKYMF0CCX8GAN.png)', backgroundPosition: 'center', backgroundSize: 'cover', height: '86px', left: 44, outline: `1px solid ${purple}`, position: 'absolute', top: 1827, width: '47px', ...shadowRow.fadeStyle }} />
      <div style={{ color: offPink, fontFamily: figBold, fontSize: '16px', fontWeight: 700, left: 123, lineHeight: '22px', position: 'absolute', top: 1814, width: '145px', ...shadowRow.fadeStyle }}>
        Your Shadow
      </div>
      <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', left: 123, lineHeight: '22px', position: 'absolute', top: 1844, width: '224px', ...shadowRow.fadeStyle }}>
        The candidate that you may not have expected to align with, but who shares more in common than you think.
      </div>

      <YellowButton to="/question-01" left={35} top={1989} width={148}>Follow fate ➝ </YellowButton>

      {/* About / Methodology */}
      <div style={{ backgroundColor: dark, height: '1005px', left: -1, position: 'absolute', top: 2099, width: '396px' }} />

      <div ref={about.ref} style={{ color: offPink, fontFamily: noirBold, fontSize: '32px', left: 'calc(50% - 8px)', lineHeight: '50px', position: 'absolute', top: 2142, translate: '-50%', width: '299px', ...about.fadeStyle }}>
        About us
      </div>
      <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', left: 39, lineHeight: '24px', position: 'absolute', top: 2208, whiteSpace: 'pre-wrap', width: '283px', ...about.fadeStyle }}>
        {'This experience was made by Tabitha Yong, Will Peng & Yvonne Leow.  We\'re non-clairvoyant Los Angeles citizens who wanted to create a fun, nonpartisan way to fulfill our civic duty this election.'}
      </div>

      <div style={{ backgroundColor: '#DDDDDD', height: '0.4px', left: 40, position: 'absolute', top: 2389, width: '312px', ...about.fadeStyle }} />

      <div ref={methodology.ref} style={{ color: offPink, fontFamily: noirBold, fontSize: '32px', left: 'calc(50% - 8px)', lineHeight: '50px', position: 'absolute', top: 2426, translate: '-50%', width: '299px', ...methodology.fadeStyle }}>
        Methodology
      </div>
      <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', left: 39, lineHeight: '24px', position: 'absolute', top: 2495, whiteSpace: 'pre-wrap', width: '328px', ...methodology.fadeStyle }}>
        {'For simplicity, our candidate list is limited to the top 5 candidates in the mayoral race who have received endorsements.\nFull list of candidates is here. ➝\n\nCandidate policy positions were sourced with Claude, based on whatever information they\'ve publicly shared in their campaigns as of May 2026. They might change. We cited our sources. ➝'}
      </div>

      <div style={{ backgroundColor: '#DDDDDD', height: '0.4px', left: 43, position: 'absolute', top: 2766, width: '312px' }} />
      <div style={{ color: offPink, fontFamily: noirBold, fontSize: '32px', left: 'calc(50% - 8px)', lineHeight: '50px', position: 'absolute', top: 2798, translate: '-50%', width: '299px' }}>
        Connect
      </div>
      <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', left: 43, lineHeight: '24px', position: 'absolute', top: 2866, width: '324px' }}>
        Are you experiencing resistance? An emotional release? Reach out ➝
      </div>

      <div style={{ color: offPink, fontFamily: fig, fontSize: '12px', left: 43, lineHeight: '20px', position: 'absolute', top: 2976, whiteSpace: 'pre-wrap', width: '294px' }}>
        Last updated{'  '}———{'  '}01 May 2026
      </div>

    </div>

    {/* ── DESKTOP ── */}
    <div className="intro-desktop" style={{
      backgroundColor: '#291543',
      fontSynthesis: 'none',
      MozOsxFontSmoothing: 'grayscale',
      overflow: 'hidden',
      position: 'relative',
      WebkitFontSmoothing: 'antialiased',
      width: '1440px',
      minHeight: '3523px',
      margin: '0 auto',
    }}>

      <ClientOnlyDithering
        speed={0.27}
        shape="warp"
        type="4x4"
        size={0.2}
        scale={1}
        colorBack="#00000000"
        colorFront="#274988"
        style={{ backgroundColor: '#291543', height: '874px', left: -42, position: 'absolute', top: -15, width: '1498px' }}
      />

      {/* Nav */}
      <StarIcon size={20} style={{ left: 22, top: 12, position: 'absolute' }} />
      <div style={{ color: '#D1D160', fontFamily: figMedium, fontSize: '20px', left: 54, lineHeight: '22px', position: 'absolute', top: 12 }}>
        Fated
      </div>
      <div style={{ color: '#FFFFFF', fontFamily: monoPro, fontSize: '14px', left: 1262, lineHeight: '22px', position: 'absolute', top: 12, width: '163px' }}>
        LOS ANGELES MAYOR
      </div>
      <div style={{ backgroundColor: '#DDDDDD', height: '0.5px', left: 0, position: 'absolute', top: 44, width: '1440px' }} />
      <div style={{ backgroundColor: '#DDDDDD', height: '0.25px', left: 1234, position: 'absolute', rotate: '270deg', top: 44, transformOrigin: '0% 0%', width: '45px' }} />

      {/* Hero headline */}
      <div style={{ color: offPink, fontFamily: noirBold, fontSize: '70px', height: '267px', left: 159, lineHeight: '80px', position: 'absolute', top: 202, width: '572px' }}>
        Which mayoral candidate aligns with your soul?
      </div>

      {/* Body text */}
      <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '24px', left: 159, lineHeight: '36px', position: 'absolute', top: 475, whiteSpace: 'pre' }}>
        {'10 questions. 5 top mayoral candidates.\nL.A.\'s primary election on June 2.\nSurrender your expectations.'}
      </div>

      <YellowButton to="/question-01" left={159} top={618} width={302} height={65} fontSize="24px" paddingLeft="28px">Begin your reading ➝ </YellowButton>

      {/* Candidate cards — 3+2 grid */}
      <TarotCard name="KAREN BASS"    arcana="THE EMPRESS"       img={candidates[0].img}         style={{ left: 809,  top: 141 }} />
      <TarotCard name="NITHYA RAMAN"  arcana="THE HIGH PRIESTESS" img={candidates[1].img}         style={{ left: 991,  top: 141 }} />
      <TarotCard name="RAE HUANG"     arcana="THE STAR"           img={candidates[2].img}         style={{ left: 1173, top: 141 }} />
      <TarotCard name="SPENCER PRATT" arcana="THE TOWER"          img={candidates[3].imgDesktop}  style={{ left: 900,  top: 458 }} />
      <TarotCard name="ADAM MILLER"   arcana="THE MAGICIAN"       img={candidates[4].imgDesktop}  style={{ left: 1082, top: 458 }} />

      {/* Channel your intuition */}
      <div style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/01KQDWX0Q1H665G5WFBEDK8PQF.png)', backgroundPosition: 'center', backgroundSize: 'cover', height: '446px', left: 91, position: 'absolute', top: 948, width: '629px' }} />

      <div style={{ color: offPink, fontFamily: noirMedium, fontSize: '40px', left: 835, lineHeight: '50px', position: 'absolute', top: 971, width: '510px' }}>
        Channel your intuition
      </div>
      <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '24px', left: 839, lineHeight: '34px', position: 'absolute', top: 1053, whiteSpace: 'pre-wrap', width: '499px' }}>
        {'Answer 10 questions about Los Angeles — its fires, its failures, its possible futures.\n\nIn the end, your Fated reading will name the candidate whose vision most closely aligns with your own.\n\nYour cards do not tell you what to believe. They mirror what you already feel.'}
      </div>

      <YellowButton to="/question-01" left={839} top={1419} width={179} height={65} fontSize="24px" paddingLeft="28px">Let's go ➝ </YellowButton>

      <ClientOnlyDithering
        speed={1}
        shape="wave"
        type="4x4"
        size={1}
        scale={1.2}
        colorBack="#00000000"
        colorFront="#291543"
        style={{ backgroundColor: '#264988', height: '743px', left: '50%', position: 'absolute', top: 1609, translate: '-50%', width: '1440px' }}
      />

      {/* Reveal your desire */}
      <div style={{ color: offPink, fontFamily: noirBold, fontSize: '40px', left: '50%', lineHeight: '50px', position: 'absolute', textAlign: 'center', top: 1728, translate: '-50%', width: '480px' }}>
        Reveal your desire
      </div>
      <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '24px', left: '50%', lineHeight: '32px', position: 'absolute', textAlign: 'center', top: 1794, translate: '-50%', width: '480px' }}>
        Your Fated reading shows your truth.
      </div>

      {/* Draw card */}
      <div style={{ backgroundColor: pink, borderRadius: '2px', height: '235px', left: 232, outline: `1px solid ${purple}`, position: 'absolute', top: 1967, width: '126px' }} />
      <div style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/01KQAZTMV23XJGYQFMHR3SP8EK.png)', backgroundPosition: 'center', backgroundSize: 'cover', height: '199px', left: 248, outline: `1px solid ${purple}`, position: 'absolute', top: 1985, width: '94px' }} />

      {/* Spread card deck */}
      <div style={{ backgroundColor: pink, borderRadius: '2px', height: '203px', left: 664, outline: `1px solid ${purple}`, position: 'absolute', top: 1967, width: '116px' }} />
      <div style={{ backgroundColor: pink, borderRadius: '2px', height: '205px', left: 676, outline: `1px solid ${purple}`, position: 'absolute', top: 1982, width: '116px' }} />
      <div style={{ backgroundColor: pink, borderRadius: '2px', height: '204px', left: 688, outline: `1px solid ${purple}`, position: 'absolute', top: 1998, width: '116px' }} />
      <div style={{ backgroundColor: '#5E71D6', borderRadius: '2px', height: '178px', left: 699, outline: `1px solid ${purple}`, position: 'absolute', top: 2009, width: '93px' }} />
      <StarIcon size={48} style={{ position: 'absolute', left: 720, top: 2069 }} />

      {/* Shadow card */}
      <div style={{ backgroundColor: pink, borderRadius: '2px', height: '235px', left: 1084, outline: `1px solid ${purple}`, position: 'absolute', top: 1969, width: '126px' }} />
      <div style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/01KQE2XM03E3BPB1JDF571WARY.png)', backgroundPosition: 'center', backgroundSize: 'cover', height: '199px', left: 1100, outline: `1px solid ${purple}`, position: 'absolute', top: 1987, width: '94px' }} />

      {/* Draw / Spread / Shadow labels */}
      <div style={{ color: offPink, fontFamily: figBold, fontSize: '24px', fontWeight: 700, left: 111, lineHeight: '32px', position: 'absolute', textAlign: 'center', top: 2247, width: '356px' }}>
        Your Draw
      </div>
      <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '24px', left: 111, lineHeight: '32px', position: 'absolute', textAlign: 'center', top: 2290, width: '389px' }}>
        Based on your 10 answers, see the archetype and mayoral candidate that best aligns with your soul.
      </div>
      <div style={{ color: offPink, fontFamily: figBold, fontSize: '24px', fontWeight: 700, left: 549, lineHeight: '32px', position: 'absolute', textAlign: 'center', top: 2247, width: '350px' }}>
        Your Spread
      </div>
      <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '24px', left: 549, lineHeight: '32px', position: 'absolute', textAlign: 'center', top: 2290, width: '356px' }}>
        See how each candidate mirrors your heart along 10 unique policy issues. Be open to synchronicities.
      </div>
      <div style={{ color: offPink, fontFamily: figBold, fontSize: '24px', fontWeight: 700, left: 972, lineHeight: '32px', position: 'absolute', textAlign: 'center', top: 2247, width: '349px' }}>
        Your Shadow
      </div>
      <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '24px', left: 972, lineHeight: '32px', position: 'absolute', textAlign: 'center', top: 2290, width: '356px' }}>
        The candidate that you may not have expected to align with, but who shares more in common than you think.
      </div>

      <YellowButton to="/question-01" left="calc(50% - 107px)" top={2518} width={215} height={65} fontSize="24px" paddingLeft="28px">Follow fate ➝ </YellowButton>

      {/* About / Methodology */}
      <div style={{ backgroundColor: dark, height: '722px', left: 0, position: 'absolute', top: 2798, width: '1440px' }} />

      <div style={{ color: '#FFE4F7', fontFamily: noirBold, fontSize: '36px', left: 111, lineHeight: '50px', position: 'absolute', top: 2897, width: '498px' }}>
        About us
      </div>
      <div style={{ color: '#FFE4F7', fontFamily: noirBold, fontSize: '36px', left: 788, lineHeight: '50px', position: 'absolute', top: 2897, width: '498px' }}>
        Methodology
      </div>
      <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '24px', left: 111, lineHeight: '36px', position: 'absolute', top: 2977, whiteSpace: 'pre-wrap', width: '600px' }}>
        {'This experience was made by Tabitha Yong, Will Peng & Yvonne Leow.  We\'re non-clairvoyant Los Angeles citizens who wanted to create a fun, nonpartisan way to fulfill our civic duty this election.'}
      </div>
      <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '24px', left: 788, lineHeight: '36px', position: 'absolute', top: 2977, whiteSpace: 'pre-wrap', width: '572px' }}>
        {'To keep things simple to understand, our candidate list is limited to the top 5 most credible candidates in the mayoral race, based on received endorsements. Full list of candidates is here. ➝\n\nCandidate policy positions were sourced with Claude, based on whatever information they\'ve publicly shared in their campaigns as of May 2026. They might change. We cited our sources. ➝'}
      </div>

      <div style={{ color: '#FFE4F7', fontFamily: noirBold, fontSize: '36px', left: 111, lineHeight: '50px', position: 'absolute', top: 3160, width: '299px' }}>
        Connect
      </div>
      <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '24px', left: 111, lineHeight: '36px', position: 'absolute', top: 3233, width: '546px' }}>
        Experiencing resistance? Emotional release? Reach out ➝
      </div>

      <div style={{ color: offPink, fontFamily: fig, fontSize: '12px', left: 111, lineHeight: '20px', position: 'absolute', top: 3437, whiteSpace: 'pre-wrap', width: '294px' }}>
        Last updated{'  '}———{'  '}01 May 2026
      </div>

    </div>

  </div>
  )
}

export default IntroPage
