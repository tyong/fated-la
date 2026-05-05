import React, { useEffect, useRef, useState } from 'react'
import { SCORES, CANDIDATES, SPREAD_KEY, ISSUE_LABELS } from '../data/scores'

const noirBold = '"NOIRetBLANCMediumBold", "NOIR et BLANC Medium Bold", "Instrument Serif", Georgia, serif'
const monoPro =
  '"ApercuMonoPro-Regular", "Apercu Mono Pro", "Courier New", monospace'
const purple  = '#3F00DB'
const dark    = '#2A009C'
const spreadCyan = '#05B6D7'
const spreadBody = '#C2CAF2'

/** By Issue column headers: all caps, Apercu Mono Pro */
const spreadTableHeadLabelBase = {
  color: spreadCyan,
  fontFamily: monoPro,
  fontSize: '13px',
  fontWeight: 400,
  letterSpacing: '0.06em',
  lineHeight: '18px',
  textTransform: 'uppercase',
}
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
  const [barsAnimated, setBarsAnimated] = useState(false)
  const candidateRef = useRef(null)

  useEffect(() => {
    const el = candidateRef.current
    if (!el || barsAnimated) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setBarsAnimated(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [spreadData, barsAnimated])

  useEffect(() => {
    if (typeof window === 'undefined') return
    let answers = {}
    try {
      answers = JSON.parse(localStorage.getItem(SPREAD_KEY) || '{}')
    } catch {
      answers = {}
    }
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
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: noirBold,
    fontSize: 'clamp(28px, 2.2vw, 36px)',
    fontWeight: 500,
    letterSpacing: '0.015em',
    lineHeight: 1.1,
    margin: '0 0 10px',
  }

  const desktopSectionHeading = {
    ...sectionHeading,
    color: 'rgba(255, 255, 255, 1)',
    margin: '16px 0 16px',
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
      color: spreadBody,
      flexBasis: '0%',
      flexGrow: 1,
      flexShrink: 1,
    }
    const cellChoice = {
      ...cell,
      textAlign: 'right',
    }
    return (
      <div
        style={{
          backgroundColor: dark,
          boxSizing: 'border-box',
          minHeight: '700px',
          padding: '64px 96px 64px',
          width: '100%',
        }}
      >
        <div style={{ boxSizing: 'border-box', marginLeft: 'auto', marginRight: 'auto', maxWidth: '600px', width: '100%' }}>
        <div style={{ color: '#FFFFFF', fontFamily: noirBold, fontSize: '48px', lineHeight: '1.1', width: '100%' }}>
          Your Spread
        </div>
        <div className="quiz-body-prose" style={{ color: spreadBody, marginTop: '24px' }}>
          {"Here's where your choice aligned with each candidate's position, per issue."}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '40px', width: '100%', gap: '56px' }}>
          <section ref={candidateRef}>
            <h3 style={desktopSectionHeading}>By Candidate</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '24px' }}>
              {byCandidateRows.map(({ key, name, color, points }, i) => {
                const widthPct = maxCandidatePoints === 0 ? 0 : (points / maxCandidatePoints) * 100
                return (
                  <div key={key} style={{ alignItems: 'center', display: 'grid', gap: '16px', gridTemplateColumns: '220px 1fr' }}>
                    <div className="quiz-body-prose" style={{ color: spreadBody }}>{name}</div>
                    <div style={{ backgroundColor: '#1D0673', borderRadius: '999px', height: '14px', overflow: 'hidden' }}>
                      <div style={{ backgroundColor: color, borderRadius: '999px', height: '100%', minWidth: barsAnimated && points > 0 ? '8px' : '0', transition: `width 700ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 80}ms`, width: barsAnimated ? `${widthPct}%` : '0%' }} />
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          <section>
            <h3 style={desktopSectionHeading}>By Issue</h3>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '16px' }}>
              <div style={{ ...rowBase, paddingBlock: '16px' }}>
                <div style={{ ...cell, ...spreadTableHeadLabelBase }}>Issue</div>
                <div style={{ ...cell, ...cellChoice, ...spreadTableHeadLabelBase }}>
                  You align with
                </div>
              </div>
              {byIssueRows.map(({ issue, candidate }, i) => (
                <div key={i} style={{ ...rowBase, borderBottom: i === byIssueRows.length - 1 ? 'none' : rowBase.borderBottom }}>
                  <div className="quiz-body-prose" style={cell}>{issue}</div>
                  <div className="quiz-body-prose" style={cellChoice}>{candidate}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        backgroundColor: dark,
        boxSizing: 'border-box',
        padding: '48px var(--site-gutter-x)',
        width: '100%',
      }}
    >
      <div style={{ boxSizing: 'border-box', marginLeft: 'auto', marginRight: 'auto', maxWidth: '600px', width: '100%' }}>
      <div style={{ color: '#FFFFFF', fontFamily: noirBold, fontSize: '30px', marginBottom: '16px' }}>
        Your Spread
      </div>
      <div className="quiz-body-prose" style={{ color: spreadBody, paddingBottom: '32px' }}>
        {"Here's where your choice aligned with each candidate's position, per issue."}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <section ref={candidateRef} style={{ paddingTop: '24px' }}>
          <h3 style={sectionHeading}>By Candidate</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '24px' }}>
            {byCandidateRows.map(({ key, name, color, points }, i) => {
              const widthPct = maxCandidatePoints === 0 ? 0 : (points / maxCandidatePoints) * 100
              return (
                <div key={key} style={{ display: 'grid', gridTemplateColumns: 'minmax(128px, 1fr) minmax(80px, 2fr)', gap: '10px', alignItems: 'center' }}>
                  <div className="quiz-body-prose" style={{ color: spreadBody }}>{name}</div>
                  <div style={{ backgroundColor: '#1D0673', borderRadius: '999px', height: '10px', overflow: 'hidden' }}>
                    <div style={{ backgroundColor: color, borderRadius: '999px', height: '100%', minWidth: barsAnimated && points > 0 ? '6px' : '0', transition: `width 700ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 80}ms`, width: barsAnimated ? `${widthPct}%` : '0%' }} />
                  </div>
                </div>
              )
            })}
          </div>
        </section>

          <section style={{ paddingTop: '24px' }}>
            <h3 style={{ ...sectionHeading, marginBottom: '28px' }}>By Issue</h3>
          <div
            style={{
              borderBottom: `1px solid ${purple}`,
              display: 'grid',
              gridTemplateColumns: 'minmax(150px, 1fr) minmax(120px, 220px)',
              gap: '16px',
              marginTop: 0,
              paddingBottom: '12px',
            }}
          >
            <div style={spreadTableHeadLabelBase}>Issue</div>
            <div style={{ ...spreadTableHeadLabelBase, textAlign: 'right' }}>You align with</div>
          </div>

          {byIssueRows.map(({ issue, candidate }, i) => (
            <div key={i} style={{ borderBottom: i === byIssueRows.length - 1 ? 'none' : `1px solid ${purple}`, display: 'grid', gridTemplateColumns: 'minmax(150px, 1fr) minmax(120px, 220px)', gap: '16px', padding: '20px 0', alignItems: 'start' }}>
              <div className="quiz-body-prose" style={{ color: spreadBody }}>{issue}</div>
              <div className="quiz-body-prose" style={{ color: spreadBody, textAlign: 'right' }}>{candidate}</div>
            </div>
          ))}
        </section>
      </div>
      </div>
    </div>
  )
}
