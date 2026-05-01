import React from 'react'
import { Agentation } from 'agentation'
import './src/layouts/index.css'

// Only when `npm run develop` starts agentation-mcp; bare `gatsby develop` leaves this off
// so the app does not wait on localhost:4747 (avoids hanging Simple Browser / preview).
const showAgentation =
  process.env.NODE_ENV === 'development' && process.env.GATSBY_AGENTATION === '1'

export const wrapPageElement = ({ element }) => (
  <>
    {element}
    {showAgentation && <Agentation endpoint="http://localhost:4747" />}
  </>
)
