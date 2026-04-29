import React from 'react'
import { Agentation } from 'agentation'
import './index.css'

const Layout = ({ children }) => (
  <div>
    {children}
    {process.env.NODE_ENV === 'development' && <Agentation endpoint="http://localhost:4747" />}
  </div>
)

export default Layout
