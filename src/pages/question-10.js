import React from 'react'
import QuestionPage from '../components/QuestionPage'
import {
  createResultHead,
  defaultLinkPreviewImage,
  questionPageTitle,
} from '../utils/shareMeta'

export const Head = () =>
  createResultHead({
    pageTitle: questionPageTitle(10, 'The Landlord'),
    imageUrl: defaultLinkPreviewImage,
    path: '/question-10/',
  })

export default () => (
  <QuestionPage
    number={10}
    title="The Landlord"
    paragraphs={[
      "You've lived in your apartment for 11 years. This morning: a 15% rent increase notice.",
      'An LLC registered in Delaware bought your building. You have no idea who owns your home now. The city has tenant protections, but they didn\'t protect you from this.',
    ]}
    question="What is your first move?"
    choices={[
      { title: 'Call the city hotline.', body: 'Know your tenant rights. Landlords should not be able to hide behind shell companies. The rules exist for a reason.' },
      { title: 'Document everything.', body: 'Save the notice. Find out when the building sold. What happened to you may be illegal.' },
      { title: 'Don\'t pay it. Mobilize your neighbors.', body: 'Do not pay that increase without a fight. Knock on every door in your building.' },
      { title: 'Read your lease. Then read the law.', body: 'If your building isn\'t covered by rent control, the city cannot help.' },
      { title: 'Look into tenant services.', body: "You shouldn't need a lawyer to understand if you're being illegally evicted. Help exists." },
    ]}
    replaceNextPath
  />
)
