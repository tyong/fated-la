import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { STORAGE_KEY } from '../data/scores'

const mono    = '"Apercu-Mono", "Apercu Mono", "Courier New", monospace'
const noirBold= '"NOIRetBLANCMediumBold", "NOIR et BLANC Medium Bold", "Instrument Serif", Georgia, serif'
const fig     = '"FigGrotesk0.3Trial-Regular", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const figBold = '"FigGrotesk0.3Trial-Bold", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const purple  = '#3F00DB'
const pink    = '#FFE4F7'
const yellow  = '#D2D260'

const starPath = "M100.722 2.758C101.021 -0.919 106.405 -0.919 106.703 2.758L112.411 73.151C112.626 75.808 115.942 76.885 117.678 74.862L163.672 21.268C166.074 18.469 170.43 21.633 168.51 24.783L131.752 85.088C130.364 87.364 132.413 90.184 135.007 89.568L203.719 73.244C207.308 72.391 208.972 77.512 205.567 78.932L140.383 106.113C137.922 107.139 137.922 110.625 140.383 111.651L205.567 138.833C208.972 140.252 207.308 145.373 203.719 144.52L135.007 128.196C132.413 127.58 130.364 130.4 131.752 132.676L168.51 192.981C170.43 196.131 166.074 199.296 163.672 196.496L117.678 142.902C115.942 140.879 112.626 141.956 112.411 144.613L106.703 215.007C106.405 218.683 101.021 218.683 100.722 215.007L95.014 144.613C94.799 141.956 91.484 140.879 89.748 142.902L43.753 196.496C41.351 199.296 36.995 196.131 38.915 192.981L75.673 132.676C77.061 130.4 75.012 127.58 72.418 128.196L3.706 144.52C0.117 145.373 -1.546 140.252 1.858 138.833L67.043 111.651C69.503 110.625 69.503 107.139 67.043 106.113L1.858 78.932C-1.546 77.512 0.117 72.391 3.706 73.244L72.418 89.568C75.012 90.184 77.061 87.364 75.673 85.088L38.915 24.783C36.995 21.633 41.351 18.469 43.753 21.268L89.748 74.862C91.484 76.885 94.799 75.808 95.014 73.151L100.722 2.758Z"

const StarIcon = ({ size = 24, style = {} }) => (
  <svg width="208" height="218" viewBox="0 0 208 218" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: size, height: size, ...style }}>
    <path d={starPath} fill={yellow} />
  </svg>
)

const ChoiceCard = ({ title, body, onChoose }) => {
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)
  const bg = pressed ? '#D8C1D2' : hovered ? '#EBD2E3' : pink
  return (
    <div
      onClick={onChoose}
      style={{
        backgroundColor: bg,
        borderRadius: '4px',
        cursor: 'pointer',
        marginBottom: '11px',
        padding: '20px 17px 22px',
        transition: 'background-color 0.15s ease',
        userSelect: 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false) }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
    >
      <div style={{ color: purple, fontFamily: figBold, fontSize: '16px', fontWeight: 700, lineHeight: '22px', marginBottom: '4px' }}>
        {title}
      </div>
      <div style={{ color: purple, fontFamily: fig, fontSize: '16px', lineHeight: '22px' }}>
        {body}
      </div>
    </div>
  )
}

const saveAnswer = (questionNumber, choiceIndex) => {
  if (typeof window === 'undefined') return
  const answers = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  answers[questionNumber] = choiceIndex
  localStorage.setItem(STORAGE_KEY, JSON.stringify(answers))
}

const QuestionPage = ({ number, total = 10, title, paragraphs, question, choices, nextPath }) => (
  <div style={{
    backgroundColor: '#291543',
    fontSynthesis: 'none',
    margin: '0 auto',
    minHeight: '100vh',
    MozOsxFontSmoothing: 'grayscale',
    position: 'relative',
    WebkitFontSmoothing: 'antialiased',
    width: '393px',
  }}>

    <div style={{ height: '5px', left: 0, position: 'absolute', top: 0, width: '100%' }}>
      <div style={{ backgroundColor: purple, height: '5px', width: '100%' }} />
      <div style={{ backgroundColor: yellow, height: '5px', left: 0, position: 'absolute', top: 0, width: `${(number / total) * 100}%` }} />
    </div>

    <div style={{ alignItems: 'flex-start', display: 'flex', justifyContent: 'space-between', padding: '20px 20px 0' }}>
      <StarIcon size={24} />
      <div style={{ color: pink, fontFamily: mono, fontSize: '12px', lineHeight: '16px', paddingTop: '4px' }}>
        Question {number} of {total}
      </div>
    </div>

    <div style={{ color: pink, fontFamily: noirBold, fontSize: '40px', lineHeight: '50px', padding: '24px 20px 0' }}>
      {title}
    </div>

    <div style={{ padding: '20px 20px 0' }}>
      {paragraphs.map((p, i) => (
        <div key={i} style={{ color: pink, fontFamily: fig, fontSize: '16px', lineHeight: '22px', marginBottom: '16px' }}>
          {p}
        </div>
      ))}
    </div>

    <div style={{ color: pink, fontFamily: fig, fontSize: '16px', lineHeight: '22px', padding: '0 20px 24px' }}>
      {question}
    </div>

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
