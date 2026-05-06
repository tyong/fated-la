import React from 'react'
import QuestionPage from '../components/QuestionPage'
import {
  createResultHead,
  defaultLinkPreviewImage,
  questionPageTitle,
} from '../utils/shareMeta'

export const Head = () =>
  createResultHead({
    pageTitle: questionPageTitle(5, 'The Encampment'),
    imageUrl: defaultLinkPreviewImage,
    path: '/question-05/',
  })

export default () => (
  <QuestionPage
    number={5}
    title="The Encampment"
    paragraphs={[
      'The city paid $225 a night to move 10 people from a tent into a motel downtown.',
      'Except 4 of them are back on the streets now.',
    ]}
    question="How does that make you feel?"
    choices={[
      { title: 'Progress is still progress.', body: "6 people got housed! It was worth it. Don't throw out what's working just because it's not perfect." },
      { title: 'Sad — and not surprised.', body: 'This is the status quo. We need more mental health services to help people stay off the streets.' },
      { title: 'Affordable public housing is key.', body: "We can't keep moving people around. We need real housing that the city actually owns." },
      { title: "That's outrageous. Full stop.", body: 'Someone is getting rich and taxpayers are the ones getting robbed. We need an audit.' },
      { title: 'This is a management problem, not a money problem.', body: 'Centralize shelter data. Measure outcomes. Stop paying $225 for a motel stay.' },
    ]}
    nextPath="/question-06"
  />
)
