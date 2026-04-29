import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import { SCORES, CANDIDATES, STORAGE_KEY } from '../data/scores'

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

    localStorage.removeItem(STORAGE_KEY)
    const winnerIdx = totals.indexOf(Math.max(...totals))
    navigate(CANDIDATES[winnerIdx].route, { replace: true })
  }, [])
  return null
}
