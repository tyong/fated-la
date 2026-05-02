import React from 'react'
import { Agentation } from 'agentation'
import Layout from './layouts'

const showAgentation =
  process.env.NODE_ENV === 'development' && process.env.GATSBY_AGENTATION === '1'

export const wrapPageElement = ({ element, props }) => (
  <Layout location={props?.location}>
    <>
      {element}
      {showAgentation ? <Agentation endpoint="http://localhost:4747" /> : null}
    </>
  </Layout>
)
