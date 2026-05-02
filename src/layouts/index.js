import React from 'react'
import SiteFooter from '../components/SiteFooter'
import './index.css'

const isQuestionPath = (pathname) => /\/question-\d+(\/|$)/.test(pathname || '')

const Layout = ({ children, location }) => {
  const showFooter = !isQuestionPath(location?.pathname)
  return (
    <div>
      {children}
      {showFooter ? <SiteFooter /> : null}
    </div>
  )
}

export default Layout
