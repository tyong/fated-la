import React from 'react'
import QuestionPage from '../components/QuestionPage'
import {
  createResultHead,
  defaultLinkPreviewImage,
  questionPageTitle,
} from '../utils/shareMeta'

export const Head = () =>
  createResultHead({
    pageTitle: questionPageTitle(3, 'The Deficit'),
    imageUrl: defaultLinkPreviewImage,
    path: '/question-03/',
  })

export default () => (
  <QuestionPage
    number={3}
    title="The Deficit"
    paragraphs={[
      'Los Angeles has a $1 billion budget hole. The city already quietly stopped fixing roads. Services are getting cut.',
      'Whoever becomes mayor next, gets to deal with ALL of that debt. Fun!',
    ]}
    question="What's the move?"
    choices={[
      { title: 'Chase every dollar.', body: 'Especially from the state and feds. Protect what\'s working. Find waste.' },
      { title: 'Total transparency.', body: "Every program has to show proof it's working or it gets cut or rebuilt. No more black boxes in the budget." },
      { title: 'Tax the hell out of the rich.', body: 'Big commercial property owners. Wealthy investors. Stop letting money leave this city untaxed.' },
      { title: 'Run City Hall like a business.', body: 'Bring in someone who actually knows how to run a large org and be profitable.' },
      { title: 'Audit everything before cutting.', body: "Most of the waste is hiding in overhead, duplicate functions, and contracts nobody's looked at in years." },
    ]}
    nextPath="/question-04"
  />
)
