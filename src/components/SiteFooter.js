import React from 'react'
import { getCandidatesListUrl, getContactMailtoHref, getFooterLegalLine, getSourcesUrl } from '../utils/footerLegalLine'
import { useDesktopLayout } from '../hooks/useDesktopLayout'

const noirBold = '"NOIRetBLANCMediumBold", "NOIR et BLANC Medium Bold", "Instrument Serif", Georgia, serif'
const fig = '"FigGrotesk0.3Trial-Regular", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const pink = '#FFE4F7'
const dark = '#2A009C'

/**
 * Global About / Methodology / legal footer. Rendered once from the root layout
 * so it appears on every page with consistent copy and links.
 */
const SiteFooter = () => {
  const desktopLayout = useDesktopLayout()
  const desktop = desktopLayout === true
  const headingSize = desktop ? '40px' : '32px'
  const headingLine = desktop ? '50px' : '40px'
  const bodyFontSize = desktop ? '20px' : '16px'
  const bodyLineHeight = desktop ? '28px' : '24px'

  return (
    <div
      className="site-footer"
      style={{
        backgroundColor: dark,
        boxSizing: 'border-box',
        paddingLeft: 'var(--site-gutter-x)',
        paddingRight: 'var(--site-gutter-x)',
        paddingTop: '72px',
        width: '100%',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', maxWidth: '1218px' }}>
        <div>
          <div style={{ color: pink, fontFamily: noirBold, fontSize: headingSize, lineHeight: headingLine, marginBottom: '24px' }}>About</div>
          <div style={{ color: '#C2CAF2', fontFamily: fig, fontSize: bodyFontSize, lineHeight: bodyLineHeight, whiteSpace: 'pre-wrap' }}>
            {`Fated was made by Tabitha Yong, Will Peng & Yvonne Leow.

We're non-clairvoyant Angelenos who wanted to create a fun, nonpartisan way to fulfill our civic duty this election.`}
          </div>
          <div style={{ color: pink, fontFamily: noirBold, fontSize: headingSize, lineHeight: headingLine, marginBottom: '24px', marginTop: '32px' }}>Connect</div>
          <div style={{ color: '#C2CAF2', fontFamily: fig, fontSize: bodyFontSize, lineHeight: bodyLineHeight }}>
            <a
              href={getContactMailtoHref()}
              style={{
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Experiencing resistance? Emotional release? Reach out ➝
            </a>
          </div>
        </div>
        <div>
          <div style={{ color: '#fff', fontFamily: noirBold, fontSize: headingSize, lineHeight: headingLine, marginBottom: '24px' }}>Methodology</div>
          <div style={{ color: '#C2CAF2', fontFamily: fig, fontSize: bodyFontSize, lineHeight: bodyLineHeight, whiteSpace: 'pre-wrap' }}>
            {`For simplicity's sake, Fated's readings are limited to the top 5 mayoral candidates who have received official endorsements.

`}
            <a
              href={getCandidatesListUrl()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'inherit',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              See the full list of candidates ➝
            </a>
            {`

Candidate positions are based on publicly accessible information, like their campaigns or their constituents' experiences. Like our fates, they might change in time. `}
            <a
              href={getSourcesUrl()}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'inherit',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              See our sources. ➝
            </a>
          </div>
        </div>
      </div>
      <div style={{ color: '#C2CAF2', fontFamily: fig, fontSize: '12px', lineHeight: '20px', marginTop: '48px', width: '100%' }}>
        {getFooterLegalLine()}
      </div>
    </div>
  )
}

export default SiteFooter
