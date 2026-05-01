import React, { useEffect, useState } from 'react'
import { SCORES, CANDIDATES, SPREAD_KEY, ISSUE_LABELS } from '../data/scores'

const noirBold = '"NOIRetBLANCMediumBold", "NOIR et BLANC Medium Bold", "Instrument Serif", Georgia, serif'
const fig     = '"FigGrotesk0.3Trial-Regular", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const purple  = '#3F00DB'
const dark    = '#2A009C'
const spreadCyan = '#05B6D7'
const pink    = '#FFE4F7'

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

export default function SpreadSection({ desktop = false }) {
  const [rows, setRows] = useState(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const answers = JSON.parse(localStorage.getItem(SPREAD_KEY) || '{}')
    setRows(computeSpread(answers))
  }, [])

  if (!rows || rows.length === 0) return null

  if (desktop) {
    const rowBase = {
      borderBottom: `1px solid ${purple}`,
      boxSizing: 'border-box',
      display: 'flex',
      paddingBlock: '20px',
    }
    const cell = {
      boxSizing: 'border-box',
      color: pink,
      flexBasis: '0%',
      flexGrow: 1,
      flexShrink: 1,
      fontFamily: fig,
      fontSize: '20px',
      lineHeight: '24px',
    }
    return (
      <div
        style={{
          backgroundColor: dark,
          boxSizing: 'border-box',
          minHeight: '700px',
          padding: '88px 96px 96px',
          width: '100%',
        }}
      >
        <div style={{ color: spreadCyan, fontFamily: noirBold, fontSize: '48px', lineHeight: '1.1', width: '100%', maxWidth: '1248px', margin: '0 auto' }}>
          Your Spread
        </div>
        <div style={{ color: pink, fontFamily: fig, fontSize: '20px', lineHeight: '30px', marginTop: '24px', maxWidth: '1248px', marginLeft: 'auto', marginRight: 'auto' }}>
          {"Here's where your choice aligned with each candidate's position, per issue."}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '40px', maxWidth: '1248px', marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>
          <div style={{ ...rowBase, borderBottomColor: '#4400CC', paddingBlock: '16px' }}>
            <div style={{ ...cell, color: spreadCyan }}>Issue</div>
            <div style={{ ...cell, color: spreadCyan }}>Your choice</div>
          </div>
          {rows.map(({ issue, candidate }, i) => (
            <div key={i} style={{ ...rowBase, borderBottom: i === rows.length - 1 ? 'none' : rowBase.borderBottom }}>
              <div style={cell}>{issue}</div>
              <div style={cell}>{candidate}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: purple, padding: '48px clamp(20px, 4vw, 33px) 48px' }}>
      <div style={{ color: spreadCyan, fontFamily: noirBold, fontSize: '30px', lineHeight: '90px' }}>
        Your Spread
      </div>
      <div style={{ color: pink, fontFamily: fig, fontSize: '16px', lineHeight: '24px', paddingBottom: '32px' }}>
        {"Here's where your choice aligned with each candidate's position, per issue."}
      </div>

      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.4)', display: 'flex', justifyContent: 'space-between', paddingBottom: '12px' }}>
        <div style={{ color: spreadCyan, fontFamily: fig, fontSize: '12px', letterSpacing: '0.05em' }}>Issue</div>
        <div style={{ color: spreadCyan, fontFamily: fig, fontSize: '12px', letterSpacing: '0.05em' }}>Your choice</div>
      </div>

      {rows.map(({ issue, candidate }, i) => (
        <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.2)', display: 'grid', gridTemplateColumns: 'minmax(150px, 1fr) minmax(120px, 220px)', gap: '16px', padding: '20px 0', alignItems: 'start' }}>
          <div style={{ color: pink, fontFamily: fig, fontSize: '16px', lineHeight: '22px' }}>{issue}</div>
          <div style={{ color: pink, fontFamily: fig, fontSize: '16px', lineHeight: '22px', textAlign: 'right' }}>{candidate}</div>
        </div>
      ))}
    </div>
  )
}
