import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import { STORAGE_KEY, SPREAD_KEY } from '../data/scores'
import { getQuizResultPath } from '../utils/getQuizResultPath'

/**
 * Redirect hub after quiz completion. Returning null left no main height, so SiteFooter
 * sat in the viewport — a visible flash between question 10 and the result page.
 * Full-viewport placeholder keeps footer below the fold until navigate runs.
 */
export default () => {
  useEffect(() => {
    let answers = {}
    try {
      answers = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    } catch {
      answers = {}
    }

    localStorage.setItem(SPREAD_KEY, JSON.stringify(answers))
    // Keep STORAGE_KEY so browser Back + new picks still merge with the full quiz; spread is the snapshot for result UI.

    const path = getQuizResultPath(answers)
    navigate(path, { replace: true })
  }, [])
  return (
    <div
      style={{
        backgroundColor: '#291543',
        minHeight: '100vh',
        width: '100%',
      }}
      aria-busy="true"
    />
  )
}
