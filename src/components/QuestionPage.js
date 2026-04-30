import React from 'react'
import { navigate } from 'gatsby'
import { STORAGE_KEY } from '../data/scores'

const mono    = '"Apercu-Mono", "Apercu Mono", "Courier New", monospace'
const noir    = '"NOIRetBLANC-Regular", "NOIR et BLANC", "Instrument Serif", Georgia, serif'
const noirBold= '"NOIRetBLANCMediumBold", "NOIR et BLANC Medium Bold", "Instrument Serif", Georgia, serif'
const fig     = '"FigGrotesk0.3Trial-Regular", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const figBold = '"FigGrotesk0.3Trial-Bold", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const purple  = '#3F00DB'
const pink    = '#FFE4F7'
const bg      = '#F28CEA'
const cyan    = '#00C0DE'

const ChoiceCard = ({ title, body, onChoose }) => (
  <div
    onClick={onChoose}
    style={{ display: 'block', textDecoration: 'none' }}
  >
    <div style={{
      backgroundColor: pink,
      borderRadius: '4px',
      cursor: 'pointer',
      marginBottom: '7px',
      padding: '20px 17px 22px',
    }}>
      <div style={{ color: purple, fontFamily: figBold, fontSize: '16px', fontWeight: 700, lineHeight: '22px', marginBottom: '2px' }}>
        {title}
      </div>
      <div style={{ color: purple, fontFamily: fig, fontSize: '16px', lineHeight: '22px' }}>
        {body}
      </div>
    </div>
  </div>
)

const saveAnswer = (questionNumber, choiceIndex) => {
  if (typeof window === 'undefined') return
  const answers = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  answers[questionNumber] = choiceIndex
  localStorage.setItem(STORAGE_KEY, JSON.stringify(answers))
}

const QuestionPage = ({ number, total = 10, title, paragraphs, question, choices, nextPath }) => (
  <div style={{
    backgroundColor: bg,
    fontSynthesis: 'none',
    margin: '0 auto',
    minHeight: '100vh',
    MozOsxFontSmoothing: 'grayscale',
    position: 'relative',
    WebkitFontSmoothing: 'antialiased',
    width: '393px',
  }}>

    {/* Progress bar */}
    <div style={{ height: '5px', left: 0, position: 'absolute', top: 0, width: '100%' }}>
      <div style={{ backgroundColor: purple, height: '5px', width: '100%' }} />
      <div style={{ backgroundColor: cyan, height: '5px', left: 0, position: 'absolute', top: 0, width: `${(number / total) * 100}%` }} />
    </div>

    {/* Nav row */}
    <div style={{ alignItems: 'flex-start', display: 'flex', justifyContent: 'space-between', padding: '20px 20px 0' }}>
      <div style={{ color: purple, fontFamily: noir, fontSize: '30px', lineHeight: '1' }}>✴</div>
      <div style={{ color: purple, fontFamily: mono, fontSize: '12px', lineHeight: '16px', paddingTop: '4px' }}>
        Question {number} of {total}
      </div>
    </div>

    {/* Title */}
    <div style={{ color: purple, fontFamily: noirBold, fontSize: '40px', lineHeight: '50px', padding: '24px 20px 0' }}>
      {title}
    </div>

    {/* Context paragraphs */}
    <div style={{ padding: '20px 20px 0' }}>
      {paragraphs.map((p, i) => (
        <div key={i} style={{ color: purple, fontFamily: fig, fontSize: '16px', lineHeight: '22px', marginBottom: '16px' }}>
          {p}
        </div>
      ))}
    </div>

    {/* Question prompt */}
    <div style={{ color: purple, fontFamily: fig, fontSize: '16px', lineHeight: '22px', padding: '0 20px 24px' }}>
      {question}
    </div>

    {/* Choice cards */}
    <div style={{ padding: '0 20px 60px' }}>
      {choices.map((c, i) => (
        <ChoiceCard
          key={i}
          title={c.title}
          body={c.body}
          onChoose={() => {
            saveAnswer(number, i)
            navigate(nextPath)
          }}
        />
      ))}
    </div>

  </div>
)

export default QuestionPage
