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
      'Los Angeles needs affordable housing. It also just needs... housing. More of it. Any of it.',
      "Here's the thing: every rule the city makes to help one group, ends up costing another.",
    ]}
    question="When housing goals conflict, who should the mayor prioritize?"
    choices={[
      { title: 'Everyone, somehow, at the same time.', body: "Existing residents AND future residents. It's hard but that's the job." },
      { title: 'Whatever actually works.', body: 'Look at the data. Fund the thing that houses the most people at the lowest cost without pushing anyone out. Cut the things that don\'t.' },
      { title: 'The most vulnerable.', body: 'Always. The market will figure out how to make money — it always does. Protect the people the market ignores.' },
      { title: 'The builders.', body: "Can't live on good intentions. If nobody builds anything, no new housing is made." },
      { title: 'Goals over mechanisms.', body: "If a policy is slowing down construction more than it's funding affordability, change the policy." },
    ]}
    nextPath="/question-10"
  />
)
