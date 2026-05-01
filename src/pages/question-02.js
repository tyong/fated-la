import React from 'react'
import QuestionPage from '../components/QuestionPage'
import {
  createResultHead,
  defaultLinkPreviewImage,
  questionPageTitle,
} from '../utils/shareMeta'

export const Head = () =>
  createResultHead({
    pageTitle: questionPageTitle(2, 'The Olympics'),
    imageUrl: defaultLinkPreviewImage,
    path: '/question-02/',
  })

export default () => (
  <QuestionPage
    number={2}
    title="The Olympics"
    paragraphs={[
      'In 2028, Los Angeles hosts the Olympics. Construction is everywhere. Tourism stuff is getting fast-tracked.',
      "But the city's climate promises keep getting pushed back.",
    ]}
    question="What should the mayor focus on?"
    choices={[
      { title: 'Using the Olympics spotlight.', body: 'This could be PR to show the world what LA is doing right on sustainability.' },
      { title: 'Carbon neutrality by 2030.', body: "The Olympics doesn't change the deadline for our planet." },
      { title: 'Not bulldozing homes for stadiums.', body: "Poorer communities always pay for this stuff. Make sure they don't this time." },
      { title: "Cashing in to raise LA's economy.", body: 'The Olympics is a massive economic opportunity for all local businesses.' },
      { title: 'Fast-tracking stuck reforms.', body: 'The city has two years to prove it can actually execute something. Permitting, infrastructure, services — everything can move because of the Olympics clock.' },
    ]}
    nextPath="/question-03"
  />
)
