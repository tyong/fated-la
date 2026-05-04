import React from 'react'
import TopBar from '../components/TopBar'
import { createResultHead, defaultLinkPreviewImage } from '../utils/shareMeta'
import './sources.css'

export const Head = () => (
  <>
    {createResultHead({
      pageTitle: 'Sources — Fated LA',
      description:
        'Citations and publicly accessible sources behind claims used in the Fated LA mayoral quiz.',
      imageUrl: defaultLinkPreviewImage,
      path: '/sources',
    })}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
)

/** @param {string} pathOrUrl */
function toHref(pathOrUrl) {
  if (!pathOrUrl) return '#'
  const t = String(pathOrUrl).trim()
  if (t.startsWith('http://') || t.startsWith('https://')) return t
  return `https://${t.replace(/^\/+/, '')}`
}

/**
 * @typedef {{ type: 'link', href: string, label?: string } | { type: 'text', text: string }} SourcePart
 * @typedef {{ title: string, rows: { claim: string, parts: SourcePart[] }[] }} SourceSection
 */

/** @type {SourceSection[]} */
const SOURCE_SECTIONS = [
  {
    title: 'KAREN BASS',
    rows: [
      {
        claim: 'Inside Safe defended; homelessness down 18%; consecutive-year decline',
        parts: [{ type: 'link', href: 'laist.com/news/politics/2026-election-california-primary-karen-bass-los-angeles-mayor-transcript' }],
      },
      {
        claim: '$104M continued Inside Safe funding in proposed budget',
        parts: [{ type: 'link', href: 'nbclosangeles.com/news/local/mayor-bass-2026-2027-los-angeles-budget/3878623' }],
      },
      {
        claim: 'LAPD hiring goal: maintain 8,555 officers; 510 new hires',
        parts: [{ type: 'link', href: 'westsidecurrent.com/la_city_council/a-full-breakdown-of-mayor-basss-proposed-budget-for-2026-27' }],
      },
      {
        claim: 'Sanctuary city / ICE resistance framing',
        parts: [{ type: 'link', href: 'laist.com/news/politics/2026-election-california-primary-karen-bass-los-angeles-mayor-transcript' }],
      },
      {
        claim: 'Labor: pay workers fairly / cuts to workers are cuts to residents',
        parts: [{ type: 'link', href: 'cbsnews.com/amp/losangeles/news/mayor-karen-bass-tackles-the-homeless-crisis-olympics-and-deficit' }],
      },
      {
        claim: 'Housing permitting reform / Executive Order No. 1',
        parts: [{ type: 'link', href: 'mayor.lacity.gov/press' }],
      },
      {
        claim: 'Palisades: systemic issues, not one leader\'s fault',
        parts: [{ type: 'link', href: 'laist.com/news/politics/2026-election-california-primary-karen-bass-los-angeles-mayor-transcript' }],
      },
      {
        claim: 'Budget: protect what\'s working, pursue federal funding',
        parts: [{ type: 'link', href: 'laist.com/news/politics/2026-election-california-primary-karen-bass-los-angeles-mayor-transcript' }],
      },
    ],
  },
  {
    title: 'NITHYA RAMAN',
    rows: [
      {
        claim: 'Inside Safe costs $225/night vs ~$86 for alternatives; 40% return-to-street rate',
        parts: [{ type: 'link', href: 'laist.com/news/housing-homelessness/nithya-raman-karen-bass-homelessness-platform-mayor-2026-election-inside-safe-lahsa-oversight' }],
      },
      {
        claim: 'LAHSA breakup; city-run contracts; public dashboards',
        parts: [{ type: 'link', href: 'laist.com/news/housing-homelessness/nithya-raman-karen-bass-homelessness-platform-mayor-2026-election-inside-safe-lahsa-oversight' }],
      },
      {
        claim: 'Rent caps + just-cause eviction + pro-density (dual stance)',
        parts: [{ type: 'link', href: 'en.wikipedia.org/wiki/Nithya_Raman' }],
      },
      {
        claim: 'Measure ULA reform: exempt new multi-family construction',
        parts: [{ type: 'link', href: 'en.wikipedia.org/wiki/Nithya_Raman' }],
      },
      {
        claim: 'Carbon neutrality by 2030',
        parts: [{ type: 'link', href: 'nithyaforthecity.com/platform' }],
      },
      {
        claim: 'ICE: audit every data-sharing agreement, cut cooperation points',
        parts: [{ type: 'link', href: 'nithyaforthecity.com' }],
      },
      {
        claim: 'Budget: radical transparency, performance-based budgeting',
        parts: [{ type: 'link', href: 'laist.com/news/politics/2026-election-california-primary-nithya-raman-los-angeles-mayor-transcript' }],
      },
      {
        claim: 'Frontline workers over administrative overhead',
        parts: [{ type: 'link', href: 'laist.com/news/politics/2026-election-california-primary-nithya-raman-los-angeles-mayor-transcript' }],
      },
      {
        claim: 'Smarter LAPD deployment; mental health responders',
        parts: [{ type: 'link', href: 'laist.com/news/politics/2026-election-california-primary-nithya-raman-los-angeles-mayor-transcript' }],
      },
      {
        claim: 'Last-minute filing; previously endorsed Bass',
        parts: [{ type: 'link', href: 'en.wikipedia.org/wiki/Nithya_Raman' }],
      },
    ],
  },
  {
    title: 'RAE HUANG',
    rows: [
      {
        claim: 'Free and fast public transit',
        parts: [
          { type: 'link', href: '19thnews.org/2025/12/rae-huang-la-mayor-campaign' },
          { type: 'link', href: 'raeforla.com' },
        ],
      },
      {
        claim: 'Social housing: publicly owned, permanently affordable',
        parts: [{ type: 'link', href: 'ballotpedia.org/Rae_Chen_Huang' }],
      },
      {
        claim: 'Public bank: city\'s first nonprofit public bank',
        parts: [{ type: 'link', href: '19thnews.org/2025/12/rae-huang-la-mayor-campaign' }],
      },
      {
        claim: 'Anti-displacement / protect residents from Olympic infrastructure',
        parts: [{ type: 'link', href: 'lapublicpress.org/2026/03/la-election-debate-mayor-2026' }],
      },
      {
        claim: 'Measure ULA: keep and strengthen; opposes Raman\'s reform',
        parts: [{ type: 'link', href: 'lapublicpress.org/2026/03/la-election-debate-mayor-2026' }],
      },
      {
        claim: 'Public safety: community intervention over policing; unarmed crisis response',
        parts: [
          { type: 'link', href: 'ballotpedia.org/Rae_Chen_Huang' },
          { type: 'link', href: '19thnews.org/2025/12/rae-huang-la-mayor-campaign' },
        ],
      },
      {
        claim: 'Sanctuary city: cut all ties with ICE',
        parts: [
          { type: 'link', href: 'ballotpedia.org/Rae_Chen_Huang' },
          { type: 'link', href: 'raeforla.com' },
        ],
      },
      {
        claim: 'Budget: tax large commercial property holders; public bank',
        parts: [{ type: 'link', href: 'raeforla.com' }],
      },
      {
        claim: 'Debate stumble: miscounted traffic deaths; confused on red light cameras',
        parts: [{ type: 'link', href: 'lapublicpress.org/2026/03/la-election-debate-mayor-2026' }],
      },
    ],
  },
  {
    title: 'SPENCER PRATT',
    rows: [
      {
        claim: '"Homeless Industrial Complex" — treatment-first model',
        parts: [
          { type: 'link', href: 'mayorpratt.com' },
          { type: 'link', href: 'foxnews.com/media/la-mayoral-candidate-spencer-pratt-vows-zero-encampments-homeless-no-fentanyl-streets' },
        ],
      },
      {
        claim: 'Zero encampments; zero fentanyl on streets',
        parts: [{ type: 'link', href: 'foxnews.com/media/la-mayoral-candidate-spencer-pratt-vows-zero-encampments-homeless-no-fentanyl-streets' }],
      },
      {
        claim: 'IRS audit of homelessness nonprofits, week one',
        parts: [{ type: 'link', href: 'dearmedia.com/spencer-pratt-mayor-la-palisades-fire-good-guys' }],
      },
      {
        claim: 'Federal government has legal right to enforce immigration law',
        parts: [{ type: 'link', href: 'foxnews.com/media/la-mayoral-candidate-spencer-pratt-vows-zero-encampments-homeless-no-fentanyl-streets' }],
      },
      {
        claim: 'Law and order: enforce laws on the books; LAPD accountability',
        parts: [{ type: 'link', href: 'mayorpratt.com' }],
      },
      {
        claim: 'Palisades: leadership failure, not systemic failure',
        parts: [{ type: 'link', href: 'nbclosangeles.com/news/local/spencer-pratt-los-angeles-mayor-race/3840867' }],
      },
      {
        claim: 'Budget: audit, business efficiency, forensic performance reviews',
        parts: [{ type: 'link', href: 'mayorpratt.com' }],
      },
      {
        claim: 'Lost home + parents\' home in Palisades Fire',
        parts: [{ type: 'link', href: 'nbclosangeles.com/news/local/spencer-pratt-los-angeles-mayor-race/3840867' }],
      },
      {
        claim: 'Polling at 14% as of March 2026',
        parts: [{ type: 'text', text: 'Berkeley IGS / LA Times poll, March 22 2026' }],
      },
    ],
  },
  {
    title: 'ADAM MILLER',
    rows: [
      {
        claim: 'THRIVES platform',
        parts: [{ type: 'link', href: 'votemiller.com/what' }],
      },
      {
        claim: 'Homelessness is a management/technology problem; Better Angels shelter database',
        parts: [{ type: 'link', href: 'laist.com/news/politics/2026-election-california-primary-adam-miller-los-angeles-mayor-transcript' }],
      },
      {
        claim: 'Inside Safe: expensive and ineffective; city can do "98% cheaper"',
        parts: [{ type: 'link', href: 'beverlypress.com/2026/04/adam-miller-wants-to-fix-a-broken-l-a' }],
      },
      {
        claim: 'Housing: speed permitting; make LA easiest city to build in',
        parts: [
          { type: 'link', href: 'votemiller.com/what' },
          { type: 'link', href: 'beverlypress.com/2026/04/adam-miller-wants-to-fix-a-broken-l-a' },
        ],
      },
      {
        claim: 'Measure ULA: dramatically deters housing production; wants fixed or replaced',
        parts: [{ type: 'link', href: 'beverlypress.com/2026/04/adam-miller-wants-to-fix-a-broken-l-a' }],
      },
      {
        claim: 'SB 79 is LA\'s punishment for not building; city should control its own zoning',
        parts: [{ type: 'link', href: 'beverlypress.com/2026/04/adam-miller-wants-to-fix-a-broken-l-a' }],
      },
      {
        claim: 'Budget: audit before cutting; overhead and redundant functions',
        parts: [{ type: 'link', href: 'labusinessjournal.com/technology/tech-background-drives-campaign' }],
      },
      {
        claim: 'AI: automate permits, approvals; city government decades behind on tech',
        parts: [
          { type: 'link', href: 'votemiller.com/what' },
          { type: 'link', href: 'labusinessjournal.com/technology/tech-background-drives-campaign' },
        ],
      },
      {
        claim: 'Protect frontline workers; restructure admin; use technology',
        parts: [{ type: 'link', href: 'laist.com/news/politics/2026-election-california-primary-adam-miller-los-angeles-mayor-transcript' }],
      },
      {
        claim: 'Better Angels nonprofit background; Cornerstone OnDemand founder',
        parts: [{ type: 'link', href: 'labusinessjournal.com/technology/tech-background-drives-campaign' }],
      },
    ],
  },
  {
    title: 'CROSS-CANDIDATE CONTEXT',
    rows: [
      {
        claim: '40% of Inside Safe participants return to street',
        parts: [{ type: 'link', href: 'laist.com/news/housing-homelessness/nithya-raman-karen-bass-homelessness-platform-mayor-2026-election-inside-safe-lahsa-oversight' }],
      },
      {
        claim: 'Inside Safe average hotel bed: $225/night',
        parts: [{ type: 'link', href: 'laist.com/news/housing-homelessness/nithya-raman-karen-bass-homelessness-platform-mayor-2026-election-inside-safe-lahsa-oversight' }],
      },
      {
        claim: 'LAHSA annual city funding: ~$300M',
        parts: [{ type: 'link', href: 'laist.com/news/housing-homelessness/nithya-raman-karen-bass-homelessness-platform-mayor-2026-election-inside-safe-lahsa-oversight' }],
      },
      {
        claim: 'LA budget deficit: ~$1 billion',
        parts: [{ type: 'link', href: 'ballotpedia.org/Mayoral_election_in_Los_Angeles,California(2026)' }],
      },
      {
        claim: 'Primary June 2; runoff November 3',
        parts: [{ type: 'link', href: 'ballotpedia.org/Mayoral_election_in_Los_Angeles,California(2026)' }],
      },
      {
        claim: 'Polling: Bass 25%, Raman 17%, Pratt 14%, Huang 8%, Miller 6%',
        parts: [{ type: 'text', text: 'Berkeley IGS / LA Times poll, March 22 2026' }],
      },
      {
        claim: 'Raman entered race hours before deadline; had endorsed Bass',
        parts: [{ type: 'link', href: 'en.wikipedia.org/wiki/Nithya_Raman' }],
      },
      {
        claim: 'Palisades Fire: January 2025; Bass was in Ghana',
        parts: [{ type: 'text', text: 'Multiple outlets' }],
      },
      {
        claim: 'LAHSA described as scandal-plagued and potentially shuttering',
        parts: [{ type: 'link', href: 'laist.com/news/housing-homelessness/nithya-raman-karen-bass-homelessness-platform-mayor-2026-election-inside-safe-lahsa-oversight' }],
      },
    ],
  },
]

function SourceCell({ parts }) {
  return (
    <div className={parts.length > 1 ? 'sources-page__links-stack' : undefined}>
      {parts.map((p, i) => {
        if (p.type === 'text') {
          return (
            <span key={i} className="sources-page__note">
              {p.text}
            </span>
          )
        }
        const href = toHref(p.href)
        const label = p.label || p.href
        return (
          <a key={i} className="site-footer-link" href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        )
      })}
    </div>
  )
}

const SourcesPage = () => (
  <main id="main-content" className="sources-page">
    <section className="hero-shell" aria-label="Sources">
      <TopBar />
      <div className="page-shell sources-page__shell">
        <h1 className="sources-page__h1">Sources</h1>
        <p className="quiz-body-prose sources-page__intro">
          All claims made during the quiz draws from publicly accessible information. Last updated on May 1, 2026.
        </p>

        {SOURCE_SECTIONS.map((section) => (
          <React.Fragment key={section.title}>
            <h2 className="sources-page__section-title">{section.title}</h2>
            <div className="sources-page__table-wrap">
              <table className="sources-page__table">
                <thead>
                  <tr>
                    <th scope="col">Claim</th>
                    <th scope="col">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {section.rows.map((row, ri) => (
                    <tr key={`${section.title}-${ri}`}>
                      <td className="sources-page__claim">{row.claim}</td>
                      <td className="sources-page__links">
                        <SourceCell parts={row.parts} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  </main>
)

export default SourcesPage
