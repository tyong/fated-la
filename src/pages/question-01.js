import React from 'react'
import QuestionPage from '../components/QuestionPage'
import {
  createResultHead,
  defaultLinkPreviewImage,
  questionPageTitle,
} from '../utils/shareMeta'

export const Head = () =>
  createResultHead({
    pageTitle: questionPageTitle(1, 'Ash & Ember'),
    imageUrl: defaultLinkPreviewImage,
    path: '/question-01/',
  })

export default () => (
  <QuestionPage
    number={1}
    title="Ash & Ember"
    paragraphs={[
      '2025. The Palisades and Altadena burned. The mayor was in Ghana.',
      'The fire department had empty positions nobody filled. Hydrants ran dry. Thousands of people lost everything.',
    ]}
    question="What's your top takeaway?"
    choices={[
      { title: "It wasn't any one person's fault.", body: 'A natural disaster exposed a series of bad decisions. But the mayor is responsible for planning and prevention.' },
      { title: 'LA lacked a sense of urgency.', body: "The wildfires didn't just expose a failure of preparation — it exposed a disconnect between City Hall and residents." },
      { title: 'Rebuilding has to be about justice.', body: "The people who had the least, lost the most. We can't just put the expensive neighborhoods back the way they were." },
      { title: 'This was 100% a leadership failure.', body: "People died. The mayor was on a trip. This wasn't incompetence, this was corruption." },
      { title: 'City Hall mismanaged everything.', body: 'LA had the warning signs, technology, and resources, but we failed to effectively respond.' },
    ]}
    nextPath="/question-02"
  />
)
