import React, { useEffect } from 'react'
import { navigate } from 'gatsby'

export default () => {
  useEffect(() => {
    const picks = ['/the-empress', '/the-high-priestess']
    navigate(picks[Math.floor(Math.random() * picks.length)], { replace: true })
  }, [])
  return null
}
