import React from 'react'
import ResultPage from '../components/ResultPage'
import {
  createResultHead,
  defaultLinkPreviewImage,
  resultPageTitle,
} from '../utils/shareMeta'

export default () => (
  <ResultPage
    drew={"You drew \nThe Star."}
    soulCandidate="Your soul candidate is Rae Huang."
    shareText="My soul candidate for the LA Election 2026 is Rae Huang, The Star."
    heroName="RAE HUANG"
    heroArcana="THE STAR"
    heroImg="/cards/rae-huang-the-star.png"
    heroImgObjectPosition="center 26%"
    shareImage="/share/huang-the-star.png"
    heroImgWidth={225}
    heroImgHeight={362}
    heroImgLeft={33}
    heroImgTop={70}
    tarotReading={`You have done the math on the "incremental progress" approach. The math did not math.\n\nYou've watched the careful, realistic, pragmatic approach get tried. And refined. And tried again. And you've looked at where another decade of that trajectory ends up, and the answer is not okay with you.\n\nSo you moved the question. Not "what's possible right now" but "what would we build if we stopped pretending the limits are permanent."\n\nPeople call this naive. You've thought about that a lot. You've decided the people calling it naive have a vested interest in things staying the same.\n\nYou believe this city belongs to the people who live in it in a way that current policy does not reflect. You see the gap between that belief and current reality not as evidence that the belief is wrong — but as evidence that the people making policy don't share it.\n\nYou want a mayor who starts from the same place you do and builds from there, instead of treating it like the radical fringe.`}
    inPlainTerms={`Huang wants a public bank—a city-owned institution that could fund housing without routing returns through private investors.\n\nShe wants free, fast buses—actually free.\n\nShe backs social housing: publicly owned, permanently affordable, not left to market whim.\n\nOn public safety, she's the only candidate here who openly questions whether more police is the answer. Not abolition—reallocation toward housing, health care, and jobs. Enforcement as a last resort.\n\nOne tension: she struggled on basic infrastructure questions in the first debate. Vision without operational fluency is a liability—whether she can spell out the how, not just the what, is still an open question.`}
    shadowTitle={"Your Shadow Card:\nThe High Priestess"}
    shadowName="NITHYA RAMAN"
    shadowArcana="THE HIGH PRIESTESS"
    shadowImg="/cards/nithya-raman-high-priestess.png"
    shadowImgLeft={-47}
    shadowText={`Huang and Raman fight in public. They still agree on more than they let on.\n\nBoth are DSA. Both think Inside Safe costs too much and delivers too little. Both want more housing and stronger renter protections.\n\nThe difference: Raman wants to fix the machine. Huang wants to replace it.\n\nIn a runoff between Raman and Bass, voters who align with Huang are among the most watched in the city. That's not nothing.\n\nThe card asks you: If the city Huang wants can't be built in four years — what's the version worth fighting for right now?`}
    charge={`Your candidate runs on possibility. That's a well that dries up fast if wins don't follow. When she makes a specific commitment — the public bank, the free transit pilot, the housing targets — hold her to it out loud. That accountability is part of the platform.`}
  />
)

export const Head = () =>
  createResultHead({
    pageTitle: resultPageTitle('The Star', 'Rae Huang'),
    description: 'My soul candidate for the LA Election 2026 is Rae Huang, The Star.',
    imageUrl: defaultLinkPreviewImage,
    path: '/huang-the-star/',
  })
