import React from 'react'
import QuestionPage from '../components/QuestionPage'
import {
  createResultHead,
  defaultLinkPreviewImage,
  questionPageTitle,
} from '../utils/shareMeta'

export const Head = () =>
  createResultHead({
    pageTitle: questionPageTitle(6, 'The Raid'),
    imageUrl: defaultLinkPreviewImage,
    path: '/question-06/',
  })

export default () => (
  <QuestionPage
    number={6}
    title="The Raid"
    paragraphs={[
      'ICE showed up at a school in Boyle Heights on a Tuesday morning. Nobody got taken. This time.',
      "The mayor can't control what ICE does, but they run an entire city.",
    ]}
    question="How would you respond?"
    choices={[
      { title: 'Use every legal tool available.', body: 'Forbid city cooperation with ICE. Get lawyers out there. Make noise at the federal level.' },
      { title: 'Block LAPD from helping ICE.', body: 'Review every policy to prevent data sharing between city and federal law enforcement.' },
      { title: 'Mobilize resistance to abolish ICE.', body: 'Show up at that school. Rally the city to show up together to protest ICE.' },
      { title: 'Partner with ICE.', body: 'Collaborate with federal officers to crack down on crime and enforce the law.' },
      { title: 'Improve immigrant services.', body: "Faster permitting and legal support for people to access without showing papers." },
    ]}
    nextPath="/question-07"
  />
)
