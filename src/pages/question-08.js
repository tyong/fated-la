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
      'The city is paying $384 million to settle lawsuits against its own police department.',
      "The LAPD still doesn't have enough police officers. Crime is down anyway.",
      'Some say: the shortage is a crisis.\nOthers say: the shortage is an opportunity.',
    ]}
    question="What would you do?"
    choices={[
      { title: 'Hire more officers.', body: "Close the 1,000+ officer hiring gap. We can't fix a department by hollowing it out." },
      { title: 'Audit the department.', body: 'Appoint a new police chief. Misconduct is a culture problem, not a staffing one.' },
      { title: 'Invest in community.', body: 'Public safety comes from safe housing, mental health response, and youth programs — not more cops.' },
      { title: 'Rebuild the department.', body: 'Implement zero-tolerance for theft, graffiti, and animal abuse.' },
      { title: 'Leverage automation.', body: 'Use technology to double police patrols and bring staffing levels back.' },
    ]}
    nextPath="/question-09"
  />
)
