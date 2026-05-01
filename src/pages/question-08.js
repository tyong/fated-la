import React from 'react'
import QuestionPage from '../components/QuestionPage'
import {
  createResultHead,
  defaultLinkPreviewImage,
  questionPageTitle,
} from '../utils/shareMeta'

export const Head = () =>
  createResultHead({
    pageTitle: questionPageTitle(8, 'The 911 Call'),
    imageUrl: defaultLinkPreviewImage,
    path: '/question-08/',
  })

export default () => (
  <QuestionPage
    number={8}
    title="The 911 Call"
    paragraphs={[
      'In some LA neighborhoods, it takes LAPD over 10 minutes to respond to a 911 call.',
      'The department has thousands of unfilled positions.',
      'Crime is up in some categories. Down in others. It depends who you ask.',
    ]}
    question="What does the city need?"
    choices={[
      { title: 'Hire more officers.', body: 'Response time is a basic thing a city should provide.' },
      { title: 'Smarter deployment.', body: "A mental health crisis doesn't need a gun. Send the right type of responder to the right call." },
      { title: 'Fund prevention, not response.', body: 'Safety comes from housing, healthcare, and jobs — not just more cops.' },
      { title: 'Get stricter.', body: 'Enforce the laws. Stop letting political pressure make the city less safe.' },
      { title: 'Fix the dispatch system.', body: "Better routing, better call triage, better use of non-emergency options. You can improve response times without adding cops." },
    ]}
    nextPath="/question-09"
  />
)
