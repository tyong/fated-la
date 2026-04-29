import React, { useEffect, useState } from 'react'
import { SCORES, CANDIDATES, SPREAD_KEY, ISSUE_LABELS } from '../data/scores'

const mono    = '"Apercu-Mono", "Apercu Mono", "Courier New", monospace'
const noirBold = '"NOIRetBLANCMediumBold", "NOIR et BLANC Medium Bold", "Instrument Serif", Georgia, serif'
const fig     = '"FigGrotesk0.3Trial-Regular", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const purple  = '#3F00DB'
const cyan    = '#00C0DE'
const white   = '#FFFFFF'

function computeSpread(answers) {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((rows, q) => {
    const choice = answers[q]
    if (choice === undefined || !SCORES[q]?.[choice]) return rows
    const pts = SCORES[q][choice]
    let maxPts = -1
    let winner = null
    pts.forEach((p, i) => {
      if (p > maxPts) { maxPts = p; winner = CANDIDATES[i] }
    })
    if (winner && maxPts > 0) rows.push({ issue: ISSUE_LABELS[q], candidate: winner.name })
    return rows
  }, [])
}

export default function SpreadSection() {
  const [rows, setRows] = useState(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const answers = JSON.parse(localStorage.getItem(SPREAD_KEY) || '{}')
    setRows(computeSpread(answers))
  }, [])

  if (!rows || rows.length === 0) return null

  return (
    <div style={{ backgroundColor: purple, padding: '0 33px 48px' }}>
      <div style={{ color: cyan, fontFamily: noirBold, fontSize: '30px', lineHeight: '90px' }}>
        Your Spread
      </div>
      <div style={{ color: white, fontFamily: fig, fontSize: '16px', lineHeight: '24px', paddingBottom: '32px' }}>
        {"Here's where your choice aligned with each candidate's position, per issue."}
      </div>

      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.4)', display: 'flex', justifyContent: 'space-between', paddingBottom: '12px' }}>
        <div style={{ color: cyan, fontFamily: mono, fontSize: '12px', letterSpacing: '0.05em' }}>Issue</div>
        <div style={{ color: cyan, fontFamily: mono, fontSize: '12px', letterSpacing: '0.05em' }}>Your choice</div>
      </div>

      {rows.map(({ issue, candidate }, i) => (
        <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.2)', display: 'flex', justifyContent: 'space-between', padding: '20px 0' }}>
          <div style={{ color: white, fontFamily: fig, fontSize: '16px' }}>{issue}</div>
          <div style={{ color: white, fontFamily: fig, fontSize: '16px' }}>{candidate}</div>
        </div>
      ))}
    </div>
  )
}
