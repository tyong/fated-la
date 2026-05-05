import React from 'react'
import QuestionPage from '../components/QuestionPage'
import {
  createResultHead,
  defaultLinkPreviewImage,
  questionPageTitle,
} from '../utils/shareMeta'

export const Head = () =>
  createResultHead({
    pageTitle: questionPageTitle(8, 'The 911 Call'),
    imageUrl: defaultLinkPreviewImage,
    path: '/question-08/',
  })

export default () => (
  <QuestionPage
    number={8}
    title="The 911 Call"
    paragraphs={[
      'In some LA neighborhoods, it takes LAPD over 10 minutes to respond to a 911 call.',
      'The department has thousands of unfilled positions.',
      'Crime is up in some categories. Down in others. It depends who you ask.',
    ]}
    question="What does the city need?"
    choices={[
      { title: 'Hire more officers.', body: "Close the 1,000+ officer hiring gap. We can't fix a department by hollowing it out." },
      { title: 'Audit the department.', body: 'Appoint a new police chief. Misconduct is a culture problem, not a staffing one.' },
      { title: 'Invest in community.', body: 'Public safety comes from safe housing, mental health response, and youth programs — not more cops.' },
      { title: 'Rebuild the department.', body: 'Implement zero-tolerance for theft, graffiti, and animal abuse.' },
      { title: 'Double police patrols', body: "Residents don't feel safe. Bring staffing levels back and focus on accountability." },
    ]}
    nextPath="/question-09"
  />
)
