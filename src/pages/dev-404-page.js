import React from 'react'
import { Link } from 'gatsby'

/** Dev-only 404 matcher page — avoids webpack failing to resolve Gatsby’s virtual dev-404 module when `.cache` is stale. */
export default function Dev404Page() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 48, maxWidth: 560 }}>
      <h1 style={{ fontSize: 24, marginBottom: 16 }}>Page not found</h1>
      <p style={{ marginBottom: 24, lineHeight: 'calc(1.5em + 2px)' }}>
        Gatsby couldn’t find a page at this URL in development.
      </p>
      <Link to="/">← Back home</Link>
    </div>
  )
}
