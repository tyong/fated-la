/**
 * Tarot result URLs that render `ResultPage` (shadow / charge typography).
 * Keep in sync with `src/pages/*` that import `ResultPage`.
 */
const RESULT_PAGE_PATH =
  /^\/(the-(tower|star|empress|high-priestess|magician|moon)|bass-the-empress|pratt-the-tower|huang-the-star|miller-the-magician|raman-the-high-priestess)\/?$/i

export function isResultPagePath(pathname) {
  if (!pathname || typeof pathname !== 'string') return false
  const n = pathname.replace(/\/+$/, '') || '/'
  return RESULT_PAGE_PATH.test(n)
}
