import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import { SCORES, CANDIDATES, MOON, MOON_THRESHOLD, MILLER_NARROW_THRESHOLD, STORAGE_KEY, SPREAD_KEY, SPREAD_ORDER, ISSUE_LABELS } from '../data/scores'

export default () => {
  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    const totals = [0, 0, 0, 0, 0]

    for (let q = 1; q <= 10; q++) {
      const choice = answers[q]
      if (choice !== undefined && SCORES[q]?.[choice]) {
        SCORES[q][choice].forEach((pts, i) => { totals[i] += pts })
      }
    }

    const spread = SPREAD_ORDER.map(qNum => {
      const answerIdx = answers[qNum]
      if (answerIdx === undefined) return null
      const scores = SCORES[qNum][answerIdx]
      const maxScore = Math.max(...scores)
      const candidateIdx = scores.indexOf(maxScore)
      return { issue: ISSUE_LABELS[qNum], candidate: CANDIDATES[candidateIdx].name }
    }).filter(Boolean)
    localStorage.setItem(SPREAD_KEY, JSON.stringify(spread))

    localStorage.removeItem(STORAGE_KEY)

    const ranked = totals
      .map((score, i) => ({ ...CANDIDATES[i], score }))
      .sort((a, b) => b.score - a.score)

    const gap = ranked[0].score - ranked[1].score
    const isTooClose = gap <= MOON_THRESHOLD
    const isMillerNarrow = ranked[0].key === 'miller' && gap <= MILLER_NARROW_THRESHOLD

    if (isTooClose || isMillerNarrow) {
      navigate(MOON.route, { replace: true })
    } else {
      navigate(ranked[0].route, { replace: true })
    }
  }, [])
  return null
}
