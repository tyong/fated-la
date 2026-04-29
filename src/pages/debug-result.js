import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import { SCORES, CANDIDATES, STORAGE_KEY } from '../data/scores'

const QUESTION_LABELS = {
  1: 'Q1 — The Palisades',
  2: 'Q2 — The Olympics',
  3: 'Q3 — The Deficit',
  4: 'Q4 — The AI Era',
  5: 'Q5 — The Encampment',
  6: 'Q6 — The Raid',
  7: 'Q7 — The Worker',
  8: 'Q8 — The 911 Call',
  9: 'Q9 — The Mansion Tax',
  10: 'Q10 — The Landlord',
}

const CHOICE_LABELS = ['A', 'B', 'C', 'D', 'E']

function computeTotals(answers) {
  const totals = [0, 0, 0, 0, 0]
  for (let q = 1; q <= 10; q++) {
    const choice = answers[q]
    if (choice !== undefined && SCORES[q]?.[choice]) {
      SCORES[q][choice].forEach((pts, i) => { totals[i] += pts })
    }
  }
  return totals
}

export default function DebugResult() {
  const [answers, setAnswers] = useState({})

  useEffect(() => {
    localStorage.removeItem(STORAGE_KEY)
    setAnswers({})
  }, [])

  function persist(next) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    setAnswers(next)
  }

  function handlePick(q, choiceIdx) {
    persist({ ...answers, [q]: choiceIdx })
  }

  function clearQuestion(q) {
    const next = { ...answers }
    delete next[q]
    persist(next)
  }

  function clearAll() {
    localStorage.removeItem(STORAGE_KEY)
    setAnswers({})
  }

  const totals = computeTotals(answers)
  const maxScore = Math.max(...totals)
  const winnerIdx = totals.indexOf(maxScore)
  const hasAnyAnswer = Object.keys(answers).length > 0

  const th = { border: '1px solid #ccc', padding: '6px 10px', background: '#eee', fontWeight: 'bold', whiteSpace: 'nowrap' }
  const td = { border: '1px solid #ccc', padding: '6px 10px', textAlign: 'center' }
  const tdWinner = { ...td, background: '#c8f7c5', fontWeight: 'bold' }

  return (
    <div style={{ fontFamily: 'monospace', fontSize: '13px', padding: '24px', maxWidth: '1100px' }}>
      <h2 style={{ marginBottom: '4px' }}>🔍 Scoring Debug</h2>
      <p style={{ color: '#666', marginTop: 0 }}>
        Pick answers below — scores update instantly. Refreshing this page clears all answers.
      </p>

      <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

        {/* Left: Answer picker */}
        <div>
          <h3 style={{ marginBottom: '8px' }}>
            Answers
            {hasAnyAnswer && (
              <button onClick={clearAll} style={{ cursor: 'pointer', fontSize: '11px', marginLeft: '10px' }}>
                Clear all
              </button>
            )}
          </h3>
          <table style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={th}>Question</th>
                {CHOICE_LABELS.map(label => (
                  <th key={label} style={{ ...th, textAlign: 'center' }}>{label}</th>
                ))}
                <th style={th}></th>
              </tr>
            </thead>
            <tbody>
              {[1,2,3,4,5,6,7,8,9,10].map(q => {
                const choice = answers[q]
                return (
                  <tr key={q} style={{ background: choice === undefined ? '#fff8e1' : undefined }}>
                    <td style={{ ...td, textAlign: 'left', whiteSpace: 'nowrap' }}>{QUESTION_LABELS[q]}</td>
                    {CHOICE_LABELS.map((label, i) => (
                      <td key={i} style={{ ...td, padding: '4px 8px' }}>
                        <label style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                          <input
                            type="radio"
                            name={`q${q}`}
                            checked={choice === i}
                            onChange={() => handlePick(q, i)}
                            style={{ cursor: 'pointer' }}
                          />
                        </label>
                      </td>
                    ))}
                    <td style={{ ...td, padding: '4px 8px' }}>
                      {choice !== undefined && (
                        <button onClick={() => clearQuestion(q)} style={{ cursor: 'pointer', fontSize: '11px' }}>
                          ✕
                        </button>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Right: Score breakdown */}
        <div>
          <h3 style={{ marginBottom: '8px' }}>Scores</h3>
          <table style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={th}>Question</th>
                <th style={th}>Choice</th>
                {CANDIDATES.map((c, i) => (
                  <th key={i} style={{ ...th, color: i === winnerIdx && hasAnyAnswer ? '#1a7a1a' : undefined }}>
                    {c.name}{i === winnerIdx && hasAnyAnswer ? ' 🏆' : ''}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[1,2,3,4,5,6,7,8,9,10].map(q => {
                const choice = answers[q]
                const pts = (choice !== undefined && SCORES[q]?.[choice]) ? SCORES[q][choice] : null
                return (
                  <tr key={q} style={{ background: choice === undefined ? '#fff8e1' : undefined }}>
                    <td style={{ ...td, textAlign: 'left', whiteSpace: 'nowrap' }}>{QUESTION_LABELS[q]}</td>
                    <td style={td}>{choice !== undefined ? CHOICE_LABELS[choice] : '—'}</td>
                    {CANDIDATES.map((c, i) => (
                      <td key={i} style={pts && pts[i] > 0 ? { ...td, background: '#e8f0ff' } : td}>
                        {pts ? pts[i] : '—'}
                      </td>
                    ))}
                  </tr>
                )
              })}
              <tr style={{ background: '#f5f5f5', fontWeight: 'bold' }}>
                <td style={{ ...td, textAlign: 'left' }}>TOTAL</td>
                <td style={td}></td>
                {totals.map((t, i) => (
                  <td key={i} style={i === winnerIdx && hasAnyAnswer ? tdWinner : td}>{t}</td>
                ))}
              </tr>
            </tbody>
          </table>

          <p style={{ margin: '12px 0 24px' }}>
            <strong>Winner:</strong>{' '}
            {!hasAnyAnswer
              ? 'No answers recorded yet.'
              : <span style={{ color: '#1a7a1a' }}>{CANDIDATES[winnerIdx].name} ({maxScore} pts)</span>
            }
            {' '}
            <button onClick={() => navigate('/result')} style={{ marginLeft: '12px', cursor: 'pointer' }}>
              Go to winner result page
            </button>
          </p>
        </div>

      </div>

      <h3 style={{ marginBottom: '8px' }}>Jump to Result Page</h3>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {CANDIDATES.map((c, i) => (
          <button
            key={i}
            onClick={() => navigate(c.route)}
            style={{ cursor: 'pointer', padding: '6px 14px' }}
          >
            {c.name} ({c.route})
          </button>
        ))}
      </div>
    </div>
  )
}
