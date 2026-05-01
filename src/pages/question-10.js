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
      "You've lived in your apartment for 11 years. This morning you got a notice: your rent is going up 15%.",
      'The building was just sold to an LLC registered in Delaware. You have no idea who owns your home now.',
    ]}
    question="What should the city do?"
    choices={[
      { title: 'Enforce the laws that already exist.', body: 'Rent increases are supposed to be capped at 3–4%. Get landlords mandatory relocation payments when they kick people out for no reason.' },
      { title: 'Build more housing near transit.', body: 'Also: cap the rent increases, and strengthen eviction protections.' },
      { title: "Tax people who buy buildings & flip 'em.", body: "Build housing the city owns so the market can't do this to people." },
      { title: 'Faster permits to build more housing.', body: "When there are more places to live, landlords can't get away with this." },
      { title: 'Protect renters now AND build housing.', body: 'The landlord only wins when you have nowhere else to go.' },
    ]}
    replaceNextPath
  />
)
