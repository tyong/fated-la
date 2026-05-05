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
      { title: 'Increase taxes.', body: 'Balance the budget with property, business, sales, and utility taxes.' },
      { title: 'Be transparent.', body: "Every program has to show proof it's working or it gets cut or rebuilt." },
      { title: 'Survey residents.', body: "Invite thousands of Angelenos to give their input on the city's budget." },
      { title: 'Audit everything.', body: "Most of the waste is hiding in overhead and contracts nobody's looked at in years." },
      { title: 'Grow revenue.', body: 'Build housing. Bring in more businesses. Increase revenue without raising taxes.' },
    ]}
    nextPath="/question-04"
  />
)
