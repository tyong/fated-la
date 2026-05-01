import { useEffect, useState } from 'react'

/** Tablet and up use the Paper “Result — Desktop” layout; phones stay narrow. */
export const DESKTOP_MIN = 768

export function useDesktopLayout() {
  const [desktop, setDesktop] = useState(() => {
    if (typeof window === 'undefined') return null
    return window.matchMedia(`(min-width: ${DESKTOP_MIN}px)`).matches
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia(`(min-width: ${DESKTOP_MIN}px)`)
    const sync = () => setDesktop(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])
  return desktop
}
