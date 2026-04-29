import React, { useState, useEffect } from 'react'

export default function ClientOnlyDithering({ style, ...props }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return <div style={style} />

  const { Dithering } = require('@paper-design/shaders-react')
  return <Dithering style={style} {...props} />
}
