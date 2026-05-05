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
      { title: "All of the above, because that's the job.", body: "The Olympics is an accelerator to our climate goals, we don't have to choose." },
      { title: 'Making LA more sustainable and livable.', body: "If we're only fixing streets and planting trees where cameras will be, we've missed the point entirely." },
      { title: 'Reaching carbon neutrality by 2030.', body: "The Olympics doesn't change the deadline for preserving our planet." },
      { title: 'Cleaning up LA streets.', body: 'This could be PR to show the world that LA is doing right on sustainability.' },
      { title: "Cashing in to grow LA's economy.", body: 'The Olympics is a massive economic opportunity for local businesses.' },
    ]}
    nextPath="/question-03"
  />
)
