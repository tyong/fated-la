import React from 'react'
import QuestionPage from '../components/QuestionPage'
import {
  createResultHead,
  defaultLinkPreviewImage,
  questionPageTitle,
} from '../utils/shareMeta'

export const Head = () =>
  createResultHead({
    pageTitle: questionPageTitle(9, 'The Mansion Tax'),
    imageUrl: defaultLinkPreviewImage,
    path: '/question-09/',
  })

export default () => (
  <QuestionPage
    number={9}
    title="The Mansion Tax"
    paragraphs={[
      "Voters passed a tax to build more affordable housing. It raised over a billion dollars, but homes haven't been built.",
      'Every rule the city makes to protect tenants, ends up costing landlords and newcomers.',
    ]}
    question="When housing goals conflict, whose needs come first?"
    choices={[
      { title: 'The person who loses everything.', body: 'We have to fix decades of underinvestment and broken permitting, not the funding.' },
      { title: 'The most vulnerable.', body: "Private developers aren't the only answer to a public crisis. Tweak tax to invest in nonprofit affordable housing." },
      { title: 'Tenants, always.', body: 'Renters win when developers lose. The billion dollars goes to public housing.' },
      { title: 'Rebuilders.', body: 'Offer tax exemptions to anyone rebuilding from the wildfires.' },
      { title: 'Whoever the system is failing most', body: 'This tax is disastrous for tenants and developers. It was broken from the start.' },
    ]}
    nextPath="/question-10"
  />
)
