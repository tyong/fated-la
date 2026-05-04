import React from 'react'
import SiteFooter from '../components/SiteFooter'
import { isResultPagePath } from '../utils/isResultPagePath'
import './index.css'

const isQuestionPath = (pathname) => /\/question-\d+(\/|$)/.test(pathname || '')

const Layout = ({ children, location }) => {
  const path = location?.pathname || ''
  const normalized = path.replace(/\/+$/, '') || '/'
  const showFooter =
    !isQuestionPath(path) && !isResultPagePath(path) && normalized !== '/result'
  const resultTypography = isResultPagePath(path)
  return (
    <div>
      {children}
      {showFooter ? <SiteFooter resultTypography={resultTypography} /> : null}
    </div>
  )
}

export default Layout
