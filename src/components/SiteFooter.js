import React from 'react'
import { getCandidatesListUrl, getContactMailtoHref, getFooterLegalLine } from '../utils/footerLegalLine'
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
    <div style={{ backgroundColor: dark, padding: '72px var(--site-gutter-x) 80px', width: '100%', boxSizing: 'border-box' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', maxWidth: '1218px' }}>
        <div>
          <div style={{ color: pink, fontFamily: noirBold, fontSize: headingSize, lineHeight: headingLine, marginBottom: '24px' }}>About</div>
          <div style={{ color: '#C2CAF2', fontFamily: fig, fontSize: bodyFontSize, lineHeight: bodyLineHeight, whiteSpace: 'pre-wrap' }}>
            {`This site was made by Tabitha Yong, Will Peng & Yvonne Leow. We're nonpartisan citizens of Los Angeles. We wanted a more fun, approachable way to do our civic duty.

Designed and vibe-coded with Paper, Claude Code & Vercel.

Questions? Comments? Recs for your favorite L.A. spot? `}
            <a
              href={getContactMailtoHref()}
              style={{
                color: 'inherit',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              Email us ➝
            </a>
            .
          </div>
        </div>
        <div>
          <div style={{ color: '#fff', fontFamily: noirBold, fontSize: headingSize, lineHeight: headingLine, marginBottom: '24px' }}>Methodology</div>
          <div style={{ color: '#C2CAF2', fontFamily: fig, fontSize: bodyFontSize, lineHeight: bodyLineHeight, whiteSpace: 'pre-wrap' }}>
            {`For simplicity, the candidate list is limited to credible candidates who have been officially endorsed.

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

Candidate policy positions were sourced with Claude, based on whatever information they've publicly shared in their campaigns. They might change.`}
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
