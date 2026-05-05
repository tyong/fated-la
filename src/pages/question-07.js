import React from 'react'
import QuestionPage from '../components/QuestionPage'
import {
  createResultHead,
  defaultLinkPreviewImage,
  questionPageTitle,
} from '../utils/shareMeta'

export const Head = () =>
  createResultHead({
    pageTitle: questionPageTitle(7, 'The Worker'),
    imageUrl: defaultLinkPreviewImage,
    path: '/question-07/',
  })

export default () => (
  <QuestionPage
    number={7}
    title="The Worker"
    paragraphs={[
      'To close the budget gap, the city is talking about cutting municipal workers.',
      'The unions are not happy.',
      'The Olympics are in two years and we need those workers.',
    ]}
    question="What should the mayor do?"
    choices={[
      { title: 'Find solutions without layoffs.', body: "Cutting workers means cutting services, so labor isn't the enemy of a balanced budget." },
      { title: 'Stop making empty promises.', body: 'Come to the table early. Bring real numbers. Workers deserve honesty as much as they deserve raises.' },
      { title: 'Let them have what they need.', body: 'Workers did not cause this budget crisis. Making them pay for it is a choice. The wrong one.' },
      { title: 'Get the budget under control.', body: 'Do a real audit and stop supporting labor unions as a political bargaining chip.' },
      { title: 'Expect better results.', body: 'Set up metrics, review spending, and commit funding to what is working.' },
    ]}
    nextPath="/question-08"
  />
)
