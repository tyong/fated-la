import React from 'react'
import QuestionPage from '../components/QuestionPage'

export default () => (
  <QuestionPage
    number={5}
    title="The Encampment"
    paragraphs={[
      'The city paid $225 a night to move 12 people from a tent into a motel downtown.',
      "Cool! Except 8 of them are back on the streets now.",
    ]}
    question="How does that make you feel?"
    choices={[
      { title: 'Progress is messy.', body: "4 people got housed! It was worth it. Don't throw out what's working just because it's not perfect." },
      { title: 'EXCUSE ME. $225 a NIGHT?!', body: 'We could house THREE times as many people with that money if anyone actually knew what they were doing.' },
      { title: 'Affordable public housing is key.', body: "You can't fix homelessness by moving people around. We need real housing that the city actually owns." },
      { title: "We've been writing checks to the same broken system for ten years.", body: "At some point, that's not a mistake — that's the plan." },
      { title: 'This is a management problem, not a money problem.', body: 'Fix contracts. Measure outcomes. Stop paying $225 for a motel stay.' },
    ]}
    nextPath="/question-06"
  />
)
