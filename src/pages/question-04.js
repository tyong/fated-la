import React from 'react'
import QuestionPage from '../components/QuestionPage'
import {
  createResultHead,
  defaultLinkPreviewImage,
  questionPageTitle,
} from '../utils/shareMeta'

export const Head = () =>
  createResultHead({
    pageTitle: questionPageTitle(4, 'The AI Era'),
    imageUrl: defaultLinkPreviewImage,
    path: '/question-04/',
  })

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
      { title: 'AI helps with creativity.', body: 'Even if direct human interaction is preferred to relying on algorithms, no doubt that AI can accelerate movements.' },
      { title: 'LA should be a leader in AI innovation.', body: 'Responsible use of AI could make permitting, infra, and services faster and cheaper.' },
    ]}
    nextPath="/question-05"
  />
)
