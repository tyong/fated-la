import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import { STORAGE_KEY, SPREAD_KEY } from '../data/scores'
import { getQuizResultPath } from '../utils/getQuizResultPath'
import TopBar from './TopBar'
import './question-page.css'

const mono    = '"Apercu-Mono", "Apercu Mono", "Courier New", monospace'
const noirBold= '"NOIRetBLANCMediumBold", "NOIR et BLANC Medium Bold", "Instrument Serif", Georgia, serif'
const fig     = '"FigGrotesk0.3Trial-Regular", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const figBold = '"FigGrotesk0.3Trial-Bold", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const purple  = '#3F00DB'
const pink    = '#FFE4F7'
const yellow  = '#D2D260'

const ChoiceCard = ({ title, body, onChoose }) => {
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)
  const bg = pressed ? '#D8C1D2' : hovered ? '#EBD2E3' : pink
  return (
    <button
      type="button"
      className="question-page__choice-card"
      onClick={onChoose}
      style={{ backgroundColor: bg }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false) }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
    >
      <span className="question-page__choice-title" style={{ color: purple, display: 'block', fontFamily: figBold, fontWeight: 700 }}>
        {title}
      </span>
      <span className="question-page__choice-body" style={{ color: purple, display: 'block', fontFamily: fig }}>
        {body}
      </span>
    </button>
  )
}

/** If answers were cleared after /result but quizSpread still has the run, restore missing questions. */
const mergeQuizAnswersFromSpread = () => {
  if (typeof window === 'undefined') return
  let storage = {}
  let spread = {}
  try {
    storage = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return
  }
  try {
    spread = JSON.parse(localStorage.getItem(SPREAD_KEY) || '{}')
  } catch {
    return
  }
  const merged = { ...storage }
  let changed = false
  for (let q = 1; q <= 10; q++) {
    if (merged[q] === undefined && spread[q] !== undefined) {
      merged[q] = spread[q]
      changed = true
    }
  }
  if (changed) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
  }
}

const saveAnswer = (questionNumber, choiceIndex) => {
  if (typeof window === 'undefined') return
  mergeQuizAnswersFromSpread()
  const answers = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  answers[questionNumber] = choiceIndex
  localStorage.setItem(STORAGE_KEY, JSON.stringify(answers))
}

/** Last question index shown this session — used so browser Back animates the bar backward (unfill). */
const LAST_QUESTION_PROGRESS_KEY = 'fated-la-question-progress-last'

/** One extra step (total + 1) so the bar is not full on the last question until the flow is done. */
const progressPercent = (questionIndex, total) => {
  const steps = total + 1
  return Math.min(100, Math.max(0, (questionIndex / steps) * 100))
}

/** Fisher-Yates shuffle; returns display choices with stable original index for scoring. */
const shuffledChoiceSet = (choices) => {
  const items = choices.map((choice, originalIndex) => ({ ...choice, originalIndex }))
  for (let i = items.length - 1; i > 0; i--) {
    const rand =
      typeof window !== 'undefined' && window.crypto?.getRandomValues
        ? window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967296
        : Math.random()
    const j = Math.floor(rand * (i + 1))
    ;[items[i], items[j]] = [items[j], items[i]]
  }
  return items
}

const QuestionPage = ({
  number,
  total = 10,
  title,
  paragraphs,
  question,
  choices,
  nextPath,
  /** When set (e.g. last question), navigate here instead of nextPath — avoids /result flash */
  replaceNextPath,
}) => {
  const currentProgress = progressPercent(number, total)
  const [progressWidth, setProgressWidth] = useState(() => {
    if (typeof window === 'undefined') {
      return progressPercent(number - 1, total)
    }
    const raw = window.sessionStorage.getItem(LAST_QUESTION_PROGRESS_KEY)
    const lastNum = raw === null || raw === '' ? NaN : Number.parseInt(raw, 10)
    if (Number.isFinite(lastNum) && lastNum > number) {
      return progressPercent(lastNum, total)
    }
    if (Number.isFinite(lastNum) && lastNum === number) {
      return currentProgress
    }
    return progressPercent(number - 1, total)
  })
  const [displayChoices, setDisplayChoices] = useState(() => shuffledChoiceSet(choices))

  useEffect(() => {
    if (typeof window !== 'undefined') {
      mergeQuizAnswersFromSpread()
      window.sessionStorage.setItem(LAST_QUESTION_PROGRESS_KEY, String(number))
    }
    const frame = requestAnimationFrame(() => {
      setProgressWidth(currentProgress)
    })
    return () => cancelAnimationFrame(frame)
  }, [currentProgress, number])

  useEffect(() => {
    setDisplayChoices(shuffledChoiceSet(choices))
  }, [choices, number])

  return (
    <>
      <div className="question-page__top-wrap">
        <TopBar />
      </div>
      <div className="question-page__progress-wrap" aria-hidden="true">
        <div className="question-page__progress">
          <div className="question-page__progress-track" style={{ backgroundColor: purple }} />
          <div
            className="question-page__progress-fill"
            style={{ backgroundColor: yellow, width: `${progressWidth}%` }}
          />
        </div>
      </div>
      <main
        id="main-content"
        className="question-page"
        style={{
          backgroundColor: '#291543',
          fontSynthesis: 'none',
          margin: '0 auto',
          MozOsxFontSmoothing: 'grayscale',
          position: 'relative',
          WebkitFontSmoothing: 'antialiased',
          width: '100%',
          maxWidth: '1440px',
        }}
      >
        <div className="question-page__inner">

          <div className="question-page__header">
            <div className="question-page__header-meta" style={{ color: pink, fontFamily: mono }}>
              Question {number} of {total}
            </div>
          </div>

          <div className="question-page__grid">
            <div className="question-page__main">
              <h1 id="question-page-title" className="question-page__title">
                {title}
              </h1>

              <div className="question-page__intro">
                {paragraphs.map((p, i) => (
                  <p key={i} className="question-page__intro-p">
                    {p}
                  </p>
                ))}
              </div>

              <p className="question-page__prompt">
                {question}
              </p>
            </div>

            <div className="question-page__choices" role="group" aria-labelledby="question-page-title">
              {displayChoices.map((c, i) => (
                <ChoiceCard
                  key={i}
                  title={c.title}
                  body={c.body}
                  onChoose={() => {
                    saveAnswer(number, c.originalIndex)
                    if (replaceNextPath) {
                      let answers = {}
                      try {
                        answers = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
                      } catch {
                        answers = {}
                      }
                      localStorage.setItem(SPREAD_KEY, JSON.stringify(answers))
                      navigate(getQuizResultPath(answers), { replace: true })
                      return
                    }
                    navigate(nextPath)
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  )
}

export default QuestionPage
