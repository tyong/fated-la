import React from 'react'
import SiteFooter from '../components/SiteFooter'
import './index.css'

const Layout = ({ children }) => (
  <div>
    {children}
    <SiteFooter />
  </div>
)

export default Layout
