import React from 'react'
import { Agentation } from 'agentation'
import './src/layouts/index.css'

export const wrapPageElement = ({ element }) => (
  <>
    {element}
    {process.env.NODE_ENV === 'development' && <Agentation endpoint="http://localhost:4747" />}
  </>
)
