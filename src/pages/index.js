import React, { useEffect, useMemo, useState } from 'react'
import ClientOnlyDithering from '../components/ClientOnlyDithering'
import { PrimaryCta } from '../components/PrimaryCta'
import TopBar from '../components/TopBar'
import { createResultHead, defaultLinkPreviewImage } from '../utils/shareMeta'
export const Head = () => (
  <>
    {createResultHead({
      pageTitle: 'Fated LA: Which mayoral candidate aligns with your soul?',
      description: 'Which candidate for LA Mayor vibes best with you? 10 questions. Find out.',
      imageUrl: defaultLinkPreviewImage,
      path: '/',
    })}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>{`
      @keyframes scrollCards {
        from { transform: translateX(0); }
        to { transform: translateX(-825px); }
      }
      @keyframes spinStar {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}</style>
  </>
)

const monoPro = '"ApercuMonoPro-Regular", "Apercu Mono Pro", "Courier New", monospace'
const noirBold= '"NOIRetBLANCMediumBold", "NOIR et BLANC Medium Bold", "Instrument Serif", Georgia, serif'
const fig     = '"FigGrotesk0.3Trial-Regular", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const purple  = '#3F00DB'
const pink    = '#FFE4F7'
const yellow  = '#D2D260'
const offPink = '#F2CACE'
const heroBodyWeight = 400
const heroBodyScale = 1

const starPath = "M100.722 2.758C101.021 -0.919 106.405 -0.919 106.703 2.758L112.411 73.151C112.626 75.808 115.942 76.885 117.678 74.862L163.672 21.268C166.074 18.469 170.43 21.633 168.51 24.783L131.752 85.088C130.364 87.364 132.413 90.184 135.007 89.568L203.719 73.244C207.308 72.391 208.972 77.512 205.567 78.932L140.383 106.113C137.922 107.139 137.922 110.625 140.383 111.651L205.567 138.833C208.972 140.252 207.308 145.373 203.719 144.52L135.007 128.196C132.413 127.58 130.364 130.4 131.752 132.676L168.51 192.981C170.43 196.131 166.074 199.296 163.672 196.496L117.678 142.902C115.942 140.879 112.626 141.956 112.411 144.613L106.703 215.007C106.405 218.683 101.021 218.683 100.722 215.007L95.014 144.613C94.799 141.956 91.484 140.879 89.748 142.902L43.753 196.496C41.351 199.296 36.995 196.131 38.915 192.981L75.673 132.676C77.061 130.4 75.012 127.58 72.418 128.196L3.706 144.52C0.117 145.373 -1.546 140.252 1.858 138.833L67.043 111.651C69.503 110.625 69.503 107.139 67.043 106.113L1.858 78.932C-1.546 77.512 0.117 72.391 3.706 73.244L72.418 89.568C75.012 90.184 77.061 87.364 75.673 85.088L38.915 24.783C36.995 21.633 41.351 18.469 43.753 21.268L89.748 74.862C91.484 76.885 94.799 75.808 95.014 73.151L100.722 2.758Z"

const StarIcon = ({ size = 24, fill = yellow, style = {}, className }) => (
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
    <path d={starPath} fill={fill} />
  </svg>
)

const candidates = [
  {
    name: 'KAREN BASS',
    arcana: 'THE EMPRESS',
    img: '/cards/karen-bass-the-empress.png',
  },
  {
    name: 'NITHYA RAMAN',
    arcana: 'THE HIGH PRIESTESS',
    img: '/cards/nithya-raman-high-priestess.png',
  },
  {
    name: 'RAE HUANG',
    arcana: 'THE STAR',
    img: '/cards/rae-huang-the-star.png',
    imgPosition: 'center 26%',
  },
  {
    name: 'SPENCER PRATT',
    arcana: 'THE TOWER',
    img: '/cards/spencer-pratt-the-tower.png',
  },
  {
    name: 'ADAM MILLER',
    arcana: 'THE MAGICIAN',
    img: '/cards/adam-miller-the-magician.png',
  },
]

/** Order for the “Your Draw” teaser: cycles every 3s on the home page */
const YOUR_DRAW_CYCLE = [
  { img: '/cards/karen-bass-the-empress.png' },
  { img: '/cards/nithya-raman-high-priestess.png' },
  { img: '/cards/spencer-pratt-the-tower.png' },
  { img: '/cards/adam-miller-the-magician.png' },
  { img: '/cards/rae-huang-the-star.png', imgPosition: 'center 26%' },
]

const TEASER_CARD_COUNT = YOUR_DRAW_CYCLE.length

const TeaserCardStack = ({ activeIndex }) => (
  <div style={{ backgroundColor: pink, borderRadius: '2px', outline: `1px solid ${purple}`, width: '81.9px', height: '152.75px', position: 'relative' }}>
    {YOUR_DRAW_CYCLE.map((c, i) => (
      <div
        key={c.img}
        style={{
          backgroundImage: `url(${c.img})`,
          backgroundPosition: c.imgPosition || 'center',
          backgroundSize: 'cover',
          width: '61.1px',
          height: '129.35px',
          position: 'absolute',
          left: '10.4px',
          top: '12.13px',
          outline: `1px solid ${purple}`,
          opacity: i === activeIndex ? 1 : 0,
          transition: 'opacity 0.85s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: i === activeIndex ? 2 : 1,
        }}
      />
    ))}
  </div>
)

const CarouselCard = ({ name, arcana, img, imgPosition }) => (
  <div style={{ backgroundColor: pink, boxShadow: `0 0 0 1px ${purple}`, borderRadius: '6px', flexShrink: 0, height: '292px', marginRight: '10px', position: 'relative', width: '155px' }}>
    <div style={{ color: purple, fontFamily: monoPro, fontSize: '10px', left: 0, letterSpacing: '0.05em', lineHeight: '12px', position: 'absolute', textAlign: 'center', top: 12, width: '100%' }}>
      {arcana}
    </div>
    {img && <div style={{ backgroundImage: `url(${img})`, backgroundPosition: imgPosition || 'center', backgroundSize: 'cover', borderRadius: '2px', boxShadow: `0 0 0 1px ${purple}`, height: '214px', left: 21, position: 'absolute', top: 37, width: '114px' }} />}
    <div style={{ color: purple, fontFamily: monoPro, fontSize: '10px', left: 0, letterSpacing: '0.05em', lineHeight: '12px', position: 'absolute', textAlign: 'center', top: 266, width: '100%' }}>
      {name}
    </div>
  </div>
)

const DesktopCandidateCard = ({ name, arcana, img, imgPosition }) => (
  <div style={{ backgroundColor: pink, boxShadow: `0 0 0 1px ${purple}`, borderRadius: '6px', position: 'relative', width: '156px', height: '292px', flexShrink: 0 }}>
    <div style={{ color: purple, fontFamily: monoPro, fontSize: '10px', letterSpacing: '0.05em', lineHeight: '12px', textAlign: 'center', position: 'absolute', left: 'calc(50% + 3px)', top: 13, width: '136px', transform: 'translateX(-50%)' }}>
      {arcana}
    </div>
    <div style={{ backgroundImage: `url(${img})`, backgroundPosition: imgPosition || 'center', backgroundSize: 'cover', borderRadius: '2px', boxShadow: `0 0 0 1px ${purple}`, width: '114px', height: '214px', position: 'absolute', left: 21, top: 37 }} />
    <div style={{ color: purple, fontFamily: monoPro, fontSize: '10px', letterSpacing: '0.05em', lineHeight: '12px', textAlign: 'center', position: 'absolute', left: '50%', top: 266, width: '136px', transform: 'translateX(-50%)' }}>
      {name}
    </div>
  </div>
)

const ReadingItem = ({ title, body, children }) => (
  <div className="reading-item">
    <div className="reading-item-media">{children}</div>
      <div className="reading-item-content">
      <h3
        style={{
          color: offPink,
          fontFamily: noirBold,
          fontWeight: 500,
          letterSpacing: '0.015em',
          lineHeight: 1.1,
          margin: '0 0 10px',
        }}
      >
        {title}
      </h3>
      <div className="reading-item__body" style={{ color: '#FFFFFF', fontFamily: fig, fontSize: 'var(--body-md)' }}>
        {body}
      </div>
    </div>
  </div>
)

const IntroPage = () => {
  const [teaserIndices, setTeaserIndices] = useState({ draw: 0, shadow: 1 })
  useEffect(() => {
    const id = setInterval(() => {
      setTeaserIndices(({ draw, shadow }) => {
        const newDraw = (draw + 1) % TEASER_CARD_COUNT
        let nextShadow = (shadow + 1) % TEASER_CARD_COUNT
        if (nextShadow === newDraw) nextShadow = (nextShadow + 1) % TEASER_CARD_COUNT
        return { draw: newDraw, shadow: nextShadow }
      })
    }, 3000)
    return () => clearInterval(id)
  }, [])
  const cardRail = useMemo(() => [...candidates, ...candidates], [])
  const heroIntroFontSize = `calc(clamp(16px, 1.45vw, 24px) * ${heroBodyScale})`
  const h2Style = {
    color: offPink,
    fontFamily: noirBold,
    fontWeight: 400,
    fontSize: 'calc(clamp(34px, 4.2vw, 53px) * 0.8)',
    lineHeight: 1.04,
    letterSpacing: '0em',
    margin: '0 0 16px',
  }
  return (
    <main
      id="main-content"
      className="home-page"
      style={{
        backgroundColor: '#291543',
        /* Matches hero dither (Paper Intro — Desktop, #274988 on #291543) for first paint / SSR */
        backgroundImage: 'radial-gradient(ellipse 130% 90% at 50% 0%, rgba(39, 73, 136, 0.42) 0%, rgba(41, 21, 67, 0) 58%)',
        color: '#FFFFFF',
        overflowX: 'hidden',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        textRendering: 'auto',
      }}
    >
      <section className="hero-shell" aria-label="Introduction">
        <TopBar />
        <ClientOnlyDithering
          className="site-hero-dither"
          instantReveal
          speed={0.27}
          shape="warp"
          type="4x4"
          size={0.2}
          scale={1}
          colorBack="#291543"
          colorFront="#274988"
          style={{ backgroundColor: '#291543', position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 'var(--hero-dither-top, 0px)', width: '100vw', height: '760px', zIndex: 0 }}
        />
        <div className="page-shell" style={{ position: 'relative', zIndex: 1 }}>
          <div className="desktop-grid-2 hero-grid" style={{ alignItems: 'start', gap: '24px' }}>
            <div className="content-column hero-content-column" style={{ maxWidth: '580px', paddingBottom: '48px' }}>
              <h1 style={{ color: offPink, fontFamily: noirBold, fontWeight: 400, fontSize: 'calc(clamp(42px, 6vw, 76px) * 0.91)', lineHeight: 1.2, margin: '0 0 24px', letterSpacing: '-0.01em' }}>
                Which mayoral candidate aligns with your soul?
              </h1>
              <div style={{ color: '#FFFFFF', fontFamily: fig, fontWeight: heroBodyWeight, fontSize: heroIntroFontSize, lineHeight: 'calc(1.4em + 2px)', margin: '0 0 30px', maxWidth: '430px' }}>
                <p style={{ margin: '0 0 16px' }}>10 questions. 5 top mayoral candidates.</p>
                <p style={{ margin: '0 0 28px' }}>Vote with intention on June 2.</p>
                <PrimaryCta to="/question-01" fontSize={heroIntroFontSize}>
                  Begin your reading ➝
                </PrimaryCta>
              </div>
            </div>

            <div
              className="mobile-only"
              style={{
                overflow: 'hidden',
                marginTop: '8px',
                width: 'calc(100% + (var(--site-gutter-x) * 2))',
                marginLeft: 'calc(var(--site-gutter-x) * -1)',
              }}
            >
              <div className="home-card-rail" style={{ animation: 'scrollCards 20s linear infinite', display: 'flex', width: 'fit-content' }}>
                {cardRail.map((c, i) => <CarouselCard key={i} {...c} />)}
              </div>
            </div>
            <div className="desktop-only" style={{ overflow: 'visible' }}>
              <div style={{ display: 'grid', gap: '14px', width: '490px', flexShrink: 0, marginLeft: 'auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 156px)', gap: '11px', justifyContent: 'end' }}>
                  {candidates.slice(0, 3).map((c) => <DesktopCandidateCard key={c.name} {...c} />)}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 156px)', gap: '11px', justifyContent: 'center', width: '490px' }}>
                  {candidates.slice(3).map((c) => <DesktopCandidateCard key={c.name} {...c} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reading-shell" style={{ paddingBottom: 0 }}>
        <div className="reading-panel" style={{ backgroundColor: '#264988', borderRadius: 0, position: 'relative', overflow: 'hidden' }}>
          <ClientOnlyDithering
            speed={1}
            shape="wave"
            type="4x4"
            size={1}
            scale={1.2}
            colorBack="#291543"
            colorFront="#264988"
            style={{ position: 'absolute', inset: 0, zIndex: 0 }}
          />
          <div className="page-shell" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <h2 style={h2Style}>Reveal your desire</h2>
            <p className="reading-intro-copy" style={{ color: '#FFFFFF', fontFamily: fig, fontSize: 'var(--body-md)', maxWidth: '620px', marginLeft: 'auto', marginRight: 'auto' }}>
              Your Fated reading shows your truth.
            </p>
            <div className="reading-grid">
              <ReadingItem
                title="Your Draw"
                body="Based on your 10 answers, see the archetype and mayoral candidate that best aligns with your soul."
              >
                <TeaserCardStack activeIndex={teaserIndices.draw} />
              </ReadingItem>
              <ReadingItem
                title="Your Spread"
                body="See how each candidate mirrors your heart along 10 unique policy issues. Be open to synchronicities."
              >
                <div style={{ width: '81.9px', height: '152.75px', position: 'relative' }}>
                  <div style={{ backgroundColor: pink, borderRadius: '2px', outline: `1px solid ${purple}`, width: '74.1px', height: '131.95px', position: 'absolute', left: 0, top: 0 }} />
                  <div style={{ backgroundColor: pink, borderRadius: '2px', outline: `1px solid ${purple}`, width: '74.1px', height: '133.25px', position: 'absolute', left: 4.33, top: 9.53 }} />
                  <div style={{ backgroundColor: pink, borderRadius: '2px', outline: `1px solid ${purple}`, width: '74.1px', height: '132.6px', position: 'absolute', left: 7.8, top: 19.93 }} />
                  <div style={{ backgroundColor: '#5E71D6', borderRadius: '2px', outline: `1px solid ${purple}`, width: '59.8px', height: '115.7px', position: 'absolute', left: 14.73, top: 27.73 }} />
                  <StarIcon size={29.9} style={{ position: 'absolute', left: 29.47, top: 68.47 }} />
                </div>
              </ReadingItem>
              <ReadingItem
                title="Your Shadow"
                body="The candidate that you may not have expected to align with, but who shares more in common than you think."
              >
                <TeaserCardStack activeIndex={teaserIndices.shadow} />
              </ReadingItem>
            </div>
            <div className="reading-cta">
              <PrimaryCta to="/question-01">Follow your fate ➝</PrimaryCta>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default IntroPage
