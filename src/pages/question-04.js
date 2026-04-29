import React from 'react'
import QuestionPage from '../components/QuestionPage'

export default () => (
  <QuestionPage
    number={4}
    title="The AI Era"
    paragraphs={[
      'AI is changing everything.',
      'The next mayor will govern a city where AI is already making decisions that affect your life. Maybe without you knowing.',
    ]}
    question="What principle guides you most?"
    choices={[
      { title: 'Make sure EVERYONE benefits from AI.', body: 'Not just the people already winning.' },
      { title: 'Accountability first.', body: "If an AI system is affecting people's housing, jobs, or safety, the public has a right to see how it works and challenge it." },
      { title: "Don't just hand AI to private companies.", body: 'Build public AI alternatives. Otherwise the power just concentrates further in fewer hands.' },
      { title: 'LA should be LEADING on AI.', body: 'Not writing regulations that scare away the industry. The cities that win the future embrace new technology.' },
      { title: 'Use AI to update lagging city tech.', body: 'Responsible use of AI could make permitting, infra, and services faster and cheaper.' },
    ]}
    nextPath="/question-05"
  />
)
