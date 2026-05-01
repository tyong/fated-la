import {
  SCORES,
  CANDIDATES,
  MOON,
  MOON_THRESHOLD,
  MILLER_NARROW_THRESHOLD,
} from '../data/scores'

/**
 * Given parsed quiz answers `{ 1: choiceIndex, ... }`, returns the result page path
 * (candidate route or The Moon). Mirrors logic in src/pages/result.js.
 */
export function getQuizResultPath(answers) {
  const totals = [0, 0, 0, 0, 0]

  for (let q = 1; q <= 10; q++) {
    const choice = answers[q]
    if (choice !== undefined && SCORES[q]?.[choice]) {
      SCORES[q][choice].forEach((pts, i) => {
        totals[i] += pts
      })
    }
  }

  const ranked = totals
    .map((score, i) => ({ ...CANDIDATES[i], score }))
    .sort((a, b) => b.score - a.score)

  const gap = ranked[0].score - ranked[1].score
  const isTooClose = gap <= MOON_THRESHOLD
  const isMillerNarrow = ranked[0].key === 'miller' && gap <= MILLER_NARROW_THRESHOLD

  if (isTooClose || isMillerNarrow) return MOON.route
  return ranked[0].route
}
