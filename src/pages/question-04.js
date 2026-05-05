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
      { title: 'Everyone can benefit from AI.', body: 'Not just the people already winning.' },
      { title: 'Accountability first.', body: "If an AI system is affecting people's housing, jobs, or safety, the public has a right to see how it works and challenge it." },
      { title: 'Communities need control.', body: 'Build public AI alternatives. AI in the hands of corporations is just automated inequality.' },
      { title: 'LA should be leading on AI.', body: 'Not writing regulations that scare away the industry. The cities that win the future embrace new technology.' },
      { title: 'AI is the key to efficiency.', body: 'Responsible use of AI could make permitting, infrastructure, and services faster and cheaper.' },
    ]}
    nextPath="/question-05"
  />
)
