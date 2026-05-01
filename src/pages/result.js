import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import { SCORES, CANDIDATES, MOON, MOON_THRESHOLD, MILLER_NARROW_THRESHOLD, STORAGE_KEY, SPREAD_KEY } from '../data/scores'

export default () => {
  useEffect(() => {
    let answers = {}
    try {
      answers = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    } catch {
      answers = {}
    }
    const totals = [0, 0, 0, 0, 0]

    for (let q = 1; q <= 10; q++) {
      const choice = answers[q]
      if (choice !== undefined && SCORES[q]?.[choice]) {
        SCORES[q][choice].forEach((pts, i) => { totals[i] += pts })
      }
    }

    localStorage.setItem(SPREAD_KEY, JSON.stringify(answers))
    // Keep STORAGE_KEY so browser Back + new picks still merge with the full quiz; spread is the snapshot for result UI.

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
