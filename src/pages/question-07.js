import React from 'react'
import QuestionPage from '../components/QuestionPage'

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
      { title: 'Negotiate in good faith.', body: 'Cutting workers means cutting services, so we want a truce.' },
      { title: 'Protect the people doing the actual work — the ones on the ground.', body: 'Cut the overhead and the bloated contractor deals first.' },
      { title: 'Let them have what they need.', body: 'The workers did not cause this budget crisis. Making them pay for it is a choice. The wrong one.' },
      { title: 'Make hard calls against the unions.', body: 'Like any business, an org has to operate within its means. Kicking the can down the road, costs more later.' },
      { title: 'Use tech to reduce redundant functions.', body: "However, don't touch the jobs of essential workers." },
    ]}
    nextPath="/question-08"
  />
)
