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
      'ICE showed up at a school in Boyle Heights on a Tuesday morning.',
      'Nobody got taken. This time.',
      "But kids stayed home for a week. Teachers said their students were scared to pay attention in class.",
      "The mayor can't control what ICE does. But the mayor runs a whole city.",
    ]}
    question="What should the mayor do?"
    choices={[
      { title: 'Use every legal tool available.', body: 'Limit city cooperation with ICE. Get lawyers out there. Make noise at the federal level.' },
      { title: 'Cut whatever is helping ICE find people.', body: 'Go through every city contract and data agreement between city agencies and federal enforcement.' },
      { title: 'Mobilize resistance.', body: 'Show up to that school. Stand in front of those families. Call it what it is. Then help the whole city show up together.' },
      { title: 'Stay back.', body: "The federal government has the legal right to enforce immigration law. The mayor's job is to run the city — not pick fights with Washington." },
      { title: 'Get better services for immigrants.', body: 'Fast permitting, legal help, services you can access without showing papers.' },
    ]}
    nextPath="/question-07"
  />
)
