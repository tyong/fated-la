import React from 'react'
import { Link } from 'gatsby'
import ClientOnlyDithering from '../components/ClientOnlyDithering'

export const Head = () => (
  <>
    <title>Fated LA</title>
    <meta name="description" content="Which candidate for LA Mayor vibes best with you? 10 questions. Find out." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
)

const mono    = '"Apercu-Mono", "Apercu Mono", "Courier New", monospace'
const monoPro = '"ApercuMonoPro-Regular", "Apercu Mono Pro", "Courier New", monospace'
const noir    = '"NOIRetBLANC-Regular", "NOIR et BLANC", "Instrument Serif", Georgia, serif'
const noirBold= '"NOIRetBLANCMediumBold", "NOIR et BLANC Medium Bold", "Instrument Serif", Georgia, serif'
const figBook = '"FigGrotesk0.3Trial-Book", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const fig     = '"FigGrotesk0.3Trial-Regular", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const figBold = '"FigGrotesk0.3Trial-Bold", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const purple  = '#3F00DB'
const pink    = '#FFE4F7'
const dark    = '#2A009C'
const lightBlue = '#58B3E1'

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
    img: '',
    left: 489,
  },
  {
    name: 'ADAM MILLER',
    arcana: 'THE MAGICIAN',
    img: '',
    left: 654,
  },
]

const CandidateCard = ({ name, arcana, img, left }) => (
  <div style={{ height: '292px', left, position: 'absolute', top: 540, width: '155px' }}>
    <div style={{ backgroundColor: pink, borderRadius: '6px', height: '292px', left: 0, outline: `1px solid ${purple}`, position: 'absolute', top: 0, width: '155px' }} />
    <div style={{ color: purple, fontFamily: monoPro, fontSize: '10px', height: '14px', left: 'calc(50% + 2.5px)', letterSpacing: '0.05em', lineHeight: '12px', position: 'absolute', textAlign: 'center', top: 12, translate: '-50%', width: '136px' }}>
      {name}
    </div>
    {img && <div style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '214px', left: 21, outline: `1px solid ${purple}`, position: 'absolute', top: 37, width: '114px' }} />}
    <div style={{ color: purple, fontFamily: monoPro, fontSize: '10px', height: '14px', left: 'calc(50% + 2.5px)', letterSpacing: '0.05em', lineHeight: '12px', position: 'absolute', textAlign: 'center', top: 266, translate: '-50%', width: '136px' }}>
      {arcana}
    </div>
  </div>
)

const IntroPage = () => (
  <div>
    <div style={{
      backgroundColor: '#F28CEA',
      fontSynthesis: 'none',
      MozOsxFontSmoothing: 'grayscale',
      overflow: 'hidden',
      position: 'relative',
      WebkitFontSmoothing: 'antialiased',
      width: '393px',
      minHeight: '2793px',
      margin: '0 auto',
    }}>

      {/* Swirl dithering */}
      <ClientOnlyDithering
        speed={0.43}
        shape="swirl"
        type="4x4"
        size={0.7}
        scale={0.26}
        colorBack="#00000000"
        colorFront="#00BCDE"
        style={{ height: '853px', left: -117, position: 'absolute', top: -35, width: '589px' }}
      />

      {/* Star ornament */}
      <div style={{ color: purple, fontFamily: noir, fontSize: '20px', left: 27, lineHeight: '20px', position: 'absolute', textAlign: 'center', top: 24 }}>✴</div>

      {/* Fated — Los Angeles */}
      <div style={{ color: purple, fontFamily: noirBold, fontSize: '12px', left: 'calc(50% + 108px)', lineHeight: '20px', position: 'absolute', textAlign: 'right', top: 23, translate: '-50%', whiteSpace: 'pre', width: '131px' }}>
        Fated{'          '}Los Angeles
      </div>

      {/* Headline */}
      <div style={{ color: purple, fontFamily: noirBold, fontSize: '50px', height: '245px', left: 'calc(50% + 2px)', lineHeight: '56px', position: 'absolute', top: 98, translate: '-50%', whiteSpace: 'pre-wrap', width: '343px' }}>
        Which candidate for{'\n'}LA Mayor vibes best with you?
      </div>

      {/* Subtitle */}
      <div style={{ color: purple, fontFamily: fig, fontSize: '16px', left: 27, lineHeight: '22px', position: 'absolute', top: 342, whiteSpace: 'pre' }}>
        10 questions. 5 top mayoral candidates.{'\n'}LA's primary election on June 2.{'\n'}Learn which candidate shares your vibes.
      </div>

      {/* First CTA */}
      <Link to="/question-01" style={{ textDecoration: 'none' }}>
        <div style={{ height: '46px', left: 32, position: 'absolute', top: 432, width: '146px' }}>
          <div style={{ backgroundColor: purple, borderRadius: '4px', height: '46px', left: 0, position: 'absolute', top: 0, width: '121px' }} />
          <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', height: '22px', left: 21, lineHeight: '20px', position: 'absolute', top: 12, width: '106px' }}>
            Let's go ➝
          </div>
        </div>
      </Link>

      {/* Candidate cards */}
      {candidates.map(c => <CandidateCard key={c.name} {...c} />)}

      {/* Wave dithering — transition to dark section */}
      <ClientOnlyDithering
        speed={0.53}
        shape="wave"
        type="4x4"
        size={1.7}
        scale={1.37}
        colorBack="#00000000"
        colorFront="#F18CEA"
        style={{ backgroundColor: '#F18CEA', backgroundImage: 'linear-gradient(#06BECC)', height: '670px', left: -26, position: 'absolute', top: 1279, width: '589px' }}
      />

      {/* How It Works */}
      <div style={{ height: '348px', left: 37, position: 'absolute', top: 901, width: '299px' }}>
        <div style={{ color: purple, fontFamily: noirBold, fontSize: '40px', height: '53px', left: '50%', lineHeight: '50px', position: 'absolute', top: 0, translate: '-50%', width: '299px' }}>
          How It Works
        </div>
        <div style={{ color: purple, fontFamily: fig, fontSize: '16px', left: 0, lineHeight: '22px', position: 'absolute', top: 68, width: '320px' }}>
          Answer 10 questions revealing your feelings on LA. The fires, the tents, the Olympics, AI. We've got all the big ones.
        </div>
        <div style={{ color: '#3F00DA', fontFamily: fig, fontSize: '16px', height: '92px', left: 0, lineHeight: '20px', position: 'absolute', top: 156, whiteSpace: 'pre-wrap', width: '299px' }}>
          At the end, we'll reveal which candidate matches your answers.{'\n\n'}Ready?
        </div>
        <Link to="/question-01" style={{ textDecoration: 'none' }}>
          <div style={{ height: '46px', left: 0, position: 'absolute', top: 263, width: '131px' }}>
            <div style={{ backgroundColor: purple, height: '46px', position: 'absolute', top: 0, left: 0, width: '131px' }} />
            <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', height: '22px', left: 23, lineHeight: '20px', position: 'absolute', top: 12, width: '84px' }}>
              Let's go ➝
            </div>
          </div>
        </Link>
      </div>

      {/* What You'll Get */}
      <div style={{ height: '105px', left: 35, position: 'absolute', top: 1337, width: '299px' }}>
        <div style={{ color: purple, fontFamily: noirBold, fontSize: '40px', height: '53px', left: '50%', lineHeight: '50px', position: 'absolute', top: -4, translate: '-50%', width: '299px' }}>
          What You'll Get
        </div>
        <div style={{ color: purple, fontFamily: fig, fontSize: '16px', left: 0, lineHeight: '22px', position: 'absolute', top: 61, width: '328px' }}>
          After answering all 10 questions, you get a results page. We don't need your email.
        </div>
      </div>

      {/* Your Draw item */}
      <div style={{ backgroundColor: pink, borderRadius: '2px', height: '118px', left: 35, outline: `1px solid ${purple}`, position: 'absolute', top: 1476, width: '63px' }} />
      <div style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/01KQAZTMV23XJGYQFMHR3SP8EK.png)', backgroundPosition: 'center', backgroundSize: 'cover', height: '86px', left: 43, outline: `1px solid ${purple}`, position: 'absolute', top: 1491, width: '47px' }} />
      <div style={{ color: purple, fontFamily: figBold, fontSize: '16px', fontWeight: 700, left: 123, lineHeight: '22px', position: 'absolute', top: 1483, width: '145px' }}>
        Your Draw
      </div>
      <div style={{ color: purple, fontFamily: fig, fontSize: '16px', left: 123, lineHeight: '22px', position: 'absolute', top: 1513, width: '242px' }}>
        The mayoral candidate and archetype that best represents you, based on your views.
      </div>

      {/* Your Spread item — stacked cards with star */}
      <div style={{ backgroundColor: pink, borderRadius: '2px', height: '84px', left: 35, outline: `1px solid ${purple}`, position: 'absolute', top: 1621, width: '48px' }} />
      <div style={{ backgroundColor: pink, borderRadius: '2px', height: '85px', left: 43, outline: `1px solid ${purple}`, position: 'absolute', top: 1627, width: '48px' }} />
      <div style={{ backgroundColor: pink, borderRadius: '2px', height: '84px', left: 51, outline: `1px solid ${purple}`, position: 'absolute', top: 1635, width: '48px' }} />
      <div style={{ color: purple, fontFamily: noir, fontSize: '40px', height: '56px', left: 55, lineHeight: '90px', position: 'absolute', textAlign: 'center', top: 1634, width: '40px' }}>✴</div>
      <div style={{ color: purple, fontFamily: figBold, fontSize: '16px', fontWeight: 700, left: 123, lineHeight: '22px', position: 'absolute', top: 1623, width: '145px' }}>
        Your Spread
      </div>
      <div style={{ color: purple, fontFamily: fig, fontSize: '16px', left: 123, lineHeight: '22px', position: 'absolute', top: 1653, width: '224px' }}>
        Where you align with each of the candidates on 10 specific policy issues.
      </div>

      {/* Your Shadow item */}
      <div style={{ backgroundColor: pink, borderRadius: '2px', height: '118px', left: 36, outline: `1px solid ${purple}`, position: 'absolute', top: 1760, width: '63px' }} />
      <div style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/01KQDK0J1H933QKYMF0CCX8GAN.png)', backgroundPosition: 'center', backgroundSize: 'cover', height: '86px', left: 44, outline: `1px solid ${purple}`, position: 'absolute', top: 1775, width: '47px' }} />
      <div style={{ color: purple, fontFamily: figBold, fontSize: '16px', fontWeight: 700, left: 123, lineHeight: '22px', position: 'absolute', top: 1757, width: '145px' }}>
        Your Shadow
      </div>
      <div style={{ color: purple, fontFamily: fig, fontSize: '16px', left: 123, lineHeight: '22px', position: 'absolute', top: 1787, width: '224px' }}>
        The candidate that you may not have expected to align with, but who shares more in common than you think.
      </div>

      {/* See my fate CTA */}
      <Link to="/question-01" style={{ textDecoration: 'none' }}>
        <div style={{ height: '46px', left: 32, position: 'absolute', top: 1933, width: '154px' }}>
          <div style={{ backgroundColor: purple, height: '46px', left: 0, position: 'absolute', top: 0, width: '154px' }} />
          <div style={{ color: '#FFFFFF', fontFamily: fig, fontSize: '16px', height: '22px', left: 23, lineHeight: '20px', position: 'absolute', top: 12, width: '114px' }}>
            See my fate ➝
          </div>
        </div>
      </Link>

      {/* Dark About section */}
      <div style={{ backgroundColor: dark, height: '749px', left: -1, position: 'absolute', top: 2054, width: '396px' }} />

      <div style={{ color: lightBlue, fontFamily: noirBold, fontSize: '32px', height: '53px', left: 'calc(50% - 9px)', lineHeight: '50px', position: 'absolute', top: 2118, translate: '-50%', width: '299px' }}>
        About
      </div>
      <div style={{ color: '#FFFFFF', fontFamily: figBook, fontSize: '16px', fontWeight: 300, left: 38, lineHeight: '22px', position: 'absolute', top: 2184, whiteSpace: 'pre-wrap', width: '299px' }}>
        This site was made by Tabitha Yong & Yvonne Leow, nonpartisan citizens of Los Angeles. We wanted a more fun, approachable way to do our civic duty.{'\n\n'}Designed and vibe-coded with Paper, Claude Code & Vercel.{'\n'}
      </div>

      <div style={{ color: lightBlue, fontFamily: noirBold, fontSize: '32px', height: '53px', left: 'calc(50% - 9px)', lineHeight: '50px', position: 'absolute', top: 2389, translate: '-50%', width: '299px' }}>
        Methodology
      </div>
      <div style={{ color: '#FFFFFF', fontFamily: figBook, fontSize: '16px', fontWeight: 300, left: 38, lineHeight: '22px', position: 'absolute', top: 2461, whiteSpace: 'pre-wrap', width: '328px' }}>
        For simplicity, the candidate list is limited to credible candidates who have been officially endorsed. For the full list of candidates, go here ➝{'\n\n'}Candidate policy positions were sourced with Claude, based on whatever information they've publicly shared in their campaigns. They might change.{'\n\n'}Questions? Comments? Recs for your favorite LA spot? Email us ➝{'\n'}
      </div>

    </div>
  </div>
)

export default IntroPage
