import React from 'react'
import { getCandidatesListUrl, getContactMailtoHref, getFooterLegalLine, getSourcesUrl } from '../utils/footerLegalLine'
import { useDesktopLayout } from '../hooks/useDesktopLayout'

const fig = '"FigGrotesk0.3Trial-Regular", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const figBold = '"FigGrotesk0.3Trial-Bold", "FigGrotesk 0.3 Trial", system-ui, sans-serif'
const pink = '#FFE4F7'
const dark = '#2A009C'

/**
 * Global About / Methodology / legal footer. Rendered once from the root layout
 * so it appears on every page with consistent copy and links.
 * Typography: `.site-footer__prose` in `index.css`; on result routes, `.site-footer--result` matches quiz `.quiz-body-prose` scale.
 */

const SiteFooter = ({ resultTypography = false }) => {
  const desktopLayout = useDesktopLayout()
  const desktop = desktopLayout === true

  return (
    <div
      className={['site-footer', resultTypography ? 'site-footer--result' : ''].filter(Boolean).join(' ')}
      style={{
        backgroundColor: dark,
        boxSizing: 'border-box',
        fontSynthesis: 'none',
        paddingTop: desktop ? '72px' : '56px',
        width: '100%',
      }}
    >
      <div className="page-shell">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', width: '100%' }}>
          <div>
            <div className="site-footer__prose" style={{ color: pink, fontFamily: figBold, marginBottom: desktop ? '24px' : '16px' }}>About</div>
            <div className="site-footer__prose" style={{ color: '#C2CAF2', fontFamily: fig, whiteSpace: 'pre-wrap' }}>
              {`Fated was made by Tabitha Yong, Will Peng & Yvonne Leow.

We're non-clairvoyant Angelenos who wanted to create a fun, nonpartisan way to fulfill our civic duty this election.`}
            </div>
            <div className="site-footer__prose" style={{ color: pink, fontFamily: figBold, marginBottom: '24px', marginTop: '32px' }}>Connect</div>
            <div className="site-footer__prose" style={{ color: '#C2CAF2', fontFamily: fig }}>
              Experiencing resistance? Emotional release?{' '}
              <a
                href={getContactMailtoHref()}
                className="site-footer-link"
              >
                Reach out ➝
              </a>
            </div>
          </div>
          <div>
            <div className="site-footer__prose" style={{ color: '#fff', fontFamily: figBold, marginBottom: '24px' }}>Methodology</div>
            <div className="site-footer__prose" style={{ color: '#C2CAF2', fontFamily: fig, whiteSpace: 'pre-wrap' }}>
              {`For simplicity's sake, Fated's readings are limited to the top 5 mayoral candidates who have received official endorsements. `}
              <a
                href={getCandidatesListUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer-link"
              >
                See the full list of candidates ➝
              </a>
              {`

Candidate positions are based on publicly accessible information, like their campaigns or their constituents' experiences. Like our fates, they might change in time. `}
              <a
                href={getSourcesUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer-link"
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
    </div>
  )
}

export default SiteFooter
