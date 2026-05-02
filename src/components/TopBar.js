import { Link } from 'gatsby'
import React, { useRef } from 'react'
import './top-bar.css'

const STAR_SPIN_SLOW_MS = 10000
const STAR_SPIN_FAST_MS = 3000

/** Change CSS spin duration without jumping: keep the same rotation angle (WAAPI). */
function setStarSpinDurationMs(starEl, nextMs) {
  if (!starEl) return
  if (typeof starEl.getAnimations !== 'function') {
    starEl.style.setProperty('animation-duration', `${nextMs}ms`)
    return
  }
  const [anim] = starEl.getAnimations()
  if (!anim?.effect?.getTiming || typeof anim.effect.updateTiming !== 'function') {
    starEl.style.setProperty('animation-duration', `${nextMs}ms`)
    return
  }
  const timing = anim.effect.getTiming()
  let oldDur = timing.duration
  if (typeof oldDur !== 'number' || Number.isNaN(oldDur)) {
    oldDur = STAR_SPIN_SLOW_MS
  }
  const ct = anim.currentTime != null ? Number(anim.currentTime) : 0
  const mod = ((ct % oldDur) + oldDur) % oldDur
  const progress = oldDur > 0 ? mod / oldDur : 0
  anim.effect.updateTiming({
    duration: nextMs,
    iterations: Infinity,
    easing: 'linear',
  })
  anim.currentTime = progress * nextMs
}

const starPath =
  'M100.722 2.758C101.021 -0.919 106.405 -0.919 106.703 2.758L112.411 73.151C112.626 75.808 115.942 76.885 117.678 74.862L163.672 21.268C166.074 18.469 170.43 21.633 168.51 24.783L131.752 85.088C130.364 87.364 132.413 90.184 135.007 89.568L203.719 73.244C207.308 72.391 208.972 77.512 205.567 78.932L140.383 106.113C137.922 107.139 137.922 110.625 140.383 111.651L205.567 138.833C208.972 140.252 207.308 145.373 203.719 144.52L135.007 128.196C132.413 127.58 130.364 130.4 131.752 132.676L168.51 192.981C170.43 196.131 166.074 199.296 163.672 196.496L117.678 142.902C115.942 140.879 112.626 141.956 112.411 144.613L106.703 215.007C106.405 218.683 101.021 218.683 100.722 215.007L95.014 144.613C94.799 141.956 91.484 140.879 89.748 142.902L43.753 196.496C41.351 199.296 36.995 196.131 38.915 192.981L75.673 132.676C77.061 130.4 75.012 127.58 72.418 128.196L3.706 144.52C0.117 145.373 -1.546 140.252 1.858 138.833L67.043 111.651C69.503 110.625 69.503 107.139 67.043 106.113L1.858 78.932C-1.546 77.512 0.117 72.391 3.706 73.244L72.418 89.568C75.012 90.184 77.061 87.364 75.673 85.088L38.915 24.783C36.995 21.633 41.351 18.469 43.753 21.268L89.748 74.862C91.484 76.885 94.799 75.808 95.014 73.151L100.722 2.758Z'

export const TOP_BAR_HEIGHT_MOBILE = 46
export const TOP_BAR_HEIGHT_DESKTOP = 49

const TopBar = () => {
  const starRef = useRef(null)

  return (
    <div className="top-bar" role="banner" aria-label="Site header">
      <div className="top-bar__inner">
        <Link
          to="/"
          className="top-bar__brand top-bar__brand-link"
          onMouseEnter={() => setStarSpinDurationMs(starRef.current, STAR_SPIN_FAST_MS)}
          onMouseLeave={() => setStarSpinDurationMs(starRef.current, STAR_SPIN_SLOW_MS)}
        >
          <svg
            ref={starRef}
            width="208"
            height="218"
            viewBox="0 0 208 218"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="top-bar__star"
          >
            <path d={starPath} fill="#D2D260" />
          </svg>
          <span className="top-bar__logo-text">Fated</span>
        </Link>
        <div className="top-bar__election-wrap">
          <span className="top-bar__divider" aria-hidden="true" />
          <span className="top-bar__election-text top-bar__election-text--short">L.A. Mayoral Election 2026</span>
          <span className="top-bar__election-text top-bar__election-text--full">Los Angeles Mayoral Election 2026</span>
        </div>
      </div>
    </div>
  )
}

export default TopBar
