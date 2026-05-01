import React, { useEffect, useState } from 'react'
import { SCORES, CANDIDATES, SPREAD_KEY, ISSUE_LABELS } from '../data/scores'

const noirBold = '"NOIRetBLANCMediumBold", "NOIR et BLANC Medium Bold", "Instrument Serif", Georgia, serif'
const fig     = '"FigGrotesk0.3Trial-Regular", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const purple  = '#3F00DB'
const dark    = '#2A009C'
const spreadCyan = '#05B6D7'
const pink    = '#FFE4F7'
const offPink = '#F2CACE'
const histogramPalette = ['#D3E054', '#F0899C', '#6AAE7A', '#6F79F6', '#BE8400']

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

function computeCandidateTotals(answers) {
  const totals = CANDIDATES.map((candidate) => ({
    key: candidate.key,
    name: candidate.name,
    color: histogramPalette[CANDIDATES.findIndex((c) => c.key === candidate.key) % histogramPalette.length],
    points: 0,
  }))

  Object.entries(answers).forEach(([questionNumber, choice]) => {
    const pts = SCORES[questionNumber]?.[choice]
    if (!pts) return
    pts.forEach((value, candidateIndex) => {
      if (totals[candidateIndex]) totals[candidateIndex].points += value
    })
  })

  return totals.sort((a, b) => a.name.localeCompare(b.name))
}

export default function SpreadSection({ desktop = false }) {
  const [spreadData, setSpreadData] = useState(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const answers = JSON.parse(localStorage.getItem(SPREAD_KEY) || '{}')
    if (!answers || Object.keys(answers).length === 0) {
      setSpreadData(null)
      return
    }
    setSpreadData({
      byIssueRows: computeSpread(answers),
      byCandidateRows: computeCandidateTotals(answers),
    })
  }, [])

  if (!spreadData) return null

  const { byIssueRows, byCandidateRows } = spreadData
  const maxCandidatePoints = byCandidateRows.reduce((max, row) => Math.max(max, row.points), 0)
  const sectionHeading = {
    color: offPink,
    fontFamily: noirBold,
    fontSize: 'clamp(28px, 2.2vw, 36px)',
    fontWeight: 500,
    letterSpacing: '0.015em',
    lineHeight: 1.1,
    margin: '0 0 10px',
  }

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

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '40px', maxWidth: '1248px', marginLeft: 'auto', marginRight: 'auto', width: '100%', gap: '56px' }}>
          <section>
            <h3 style={sectionHeading}>By Issue</h3>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '16px' }}>
              <div style={{ ...rowBase, borderBottomColor: '#4400CC', paddingBlock: '16px' }}>
                <div style={{ ...cell, color: spreadCyan }}>Issue</div>
                <div style={{ ...cell, color: spreadCyan }}>Your choice</div>
              </div>
              {byIssueRows.map(({ issue, candidate }, i) => (
                <div key={i} style={{ ...rowBase, borderBottom: i === byIssueRows.length - 1 ? 'none' : rowBase.borderBottom }}>
                  <div style={cell}>{issue}</div>
                  <div style={cell}>{candidate}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 style={sectionHeading}>By Candidate</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '24px' }}>
              {byCandidateRows.map(({ key, name, color, points }) => {
                const widthPct = maxCandidatePoints === 0 ? 0 : (points / maxCandidatePoints) * 100
                return (
                  <div key={key} style={{ alignItems: 'center', display: 'grid', gap: '16px', gridTemplateColumns: '220px 1fr' }}>
                    <div style={{ color: pink, fontFamily: fig, fontSize: '18px', lineHeight: '24px' }}>{name}</div>
                    <div style={{ backgroundColor: '#1D0673', borderRadius: '999px', height: '14px', overflow: 'hidden' }}>
                      <div style={{ backgroundColor: color, borderRadius: '999px', height: '100%', minWidth: points > 0 ? '8px' : '0', transition: 'width 300ms ease', width: `${widthPct}%` }} />
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <section>
          <h3 style={sectionHeading}>By Issue</h3>
          <div style={{ borderBottom: '1px solid rgba(255,255,255,0.4)', display: 'flex', justifyContent: 'space-between', marginTop: '12px', paddingBottom: '12px' }}>
            <div style={{ color: spreadCyan, fontFamily: fig, fontSize: '12px', letterSpacing: '0.05em' }}>Issue</div>
            <div style={{ color: spreadCyan, fontFamily: fig, fontSize: '12px', letterSpacing: '0.05em' }}>Your choice</div>
          </div>

          {byIssueRows.map(({ issue, candidate }, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.2)', display: 'grid', gridTemplateColumns: 'minmax(150px, 1fr) minmax(120px, 220px)', gap: '16px', padding: '20px 0', alignItems: 'start' }}>
              <div style={{ color: pink, fontFamily: fig, fontSize: '16px', lineHeight: '22px' }}>{issue}</div>
              <div style={{ color: pink, fontFamily: fig, fontSize: '16px', lineHeight: '22px', textAlign: 'right' }}>{candidate}</div>
            </div>
          ))}
        </section>

        <section>
          <h3 style={sectionHeading}>By Candidate</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '24px' }}>
            {byCandidateRows.map(({ key, name, color, points }) => {
              const widthPct = maxCandidatePoints === 0 ? 0 : (points / maxCandidatePoints) * 100
              return (
                <div key={key} style={{ display: 'grid', gridTemplateColumns: 'minmax(128px, 1fr) minmax(80px, 2fr)', gap: '10px', alignItems: 'center' }}>
                  <div style={{ color: pink, fontFamily: fig, fontSize: '14px', lineHeight: '18px' }}>{name}</div>
                  <div style={{ backgroundColor: '#1D0673', borderRadius: '999px', height: '10px', overflow: 'hidden' }}>
                    <div style={{ backgroundColor: color, borderRadius: '999px', height: '100%', minWidth: points > 0 ? '6px' : '0', width: `${widthPct}%` }} />
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
