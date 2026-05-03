import React from 'react'
import SiteFooter from '../components/SiteFooter'
import { isResultPagePath } from '../utils/isResultPagePath'
import './index.css'

const isQuestionPath = (pathname) => /\/question-\d+(\/|$)/.test(pathname || '')

const Layout = ({ children, location }) => {
  const showFooter = !isQuestionPath(location?.pathname)
  const resultTypography = isResultPagePath(location?.pathname)
  return (
    <div>
      {children}
      {showFooter ? <SiteFooter resultTypography={resultTypography} /> : null}
    </div>
  )
}

export default Layout
