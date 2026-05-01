import React from 'react'
import ResultPage from '../components/ResultPage'
import { createResultHead } from '../utils/shareMeta'

export default () => (
  <ResultPage
    drew={"You drew \nThe Star."}
    soulCandidate="Your soul candidate is Rae Huang."
    shareText="My soul candidate for the LA Election 2026 is Rae Huang, The Star."
    heroName="RAE HUANG"
    heroArcana="THE STAR"
    heroImg="https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/01KQAY29KREV8F0ZSQYVN8EVRM.png"
    shareImage="/share/huang-the-star.png"
    heroImgWidth={225}
    heroImgHeight={362}
    heroImgLeft={33}
    heroImgTop={70}
    tarotReading={`You have done the math on the "incremental progress" approach. The math did not math.\n\nYou've watched the careful, realistic, pragmatic approach get tried. And refined. And tried again. And you've looked at where another decade of that trajectory ends up, and the answer is not okay with you.\n\nSo you moved the question. Not "what's possible right now" but "what would we build if we stopped pretending the limits are permanent."\n\nPeople call this naive. You've thought about that a lot. You've decided the people calling it naive have a vested interest in things staying the same.\n\nYou believe this city belongs to the people who live in it in a way that current policy does not reflect. You see the gap between that belief and current reality not as evidence that the belief is wrong — but as evidence that the people making policy don't share it.\n\nYou want a mayor who starts from the same place you do and builds from there, instead of treating it like the radical fringe.`}
    inPlainTerms={`You want a public bank. A city-owned financial institution that can fund housing without depending on private investors who need to make money off of it.\n\nYou want free and fast buses. Yes, actually free.\n\nYou want social housing — publicly owned, permanently affordable, not subject to whatever the market feels like doing.\n\nOn public safety, Huang is the only candidate in this race who actually questions whether more police is the answer. Not abolish — reallocate. Toward housing, healthcare, and jobs. Enforcement as a last resort.\n\nOne thing to think about: Huang stumbled on some basic infrastructure questions in the first debate. Vision without operational fluency is a risk. Watch whether she can get more specific about how, not just what.`}
    shadowTitle={"Your Shadow Card:\nThe High Priestess"}
    shadowName="NITHYA RAMAN"
    shadowArcana="THE HIGH PRIESTESS"
    shadowImg="https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/01KQAXJPF3WYPXPSWM2Q969YKC.png"
    shadowImgLeft={-47}
    shadowText={`You two fight. But you agree on more than you let on.\n\nBoth DSA. Both think Inside Safe costs too much and works too little. Both want more housing and stronger renter protections.\n\nThe difference: she wants to fix the machine. You want to replace it.\n\nIn a runoff between Raman and Bass, people who drew The Star are the most important voters in the city. That's not nothing.\n\nThe card asks you: If the city you want can't be built in four years — what's the version worth fighting for right now?`}
    charge={`Your candidate runs on possibility. That's a well that dries up fast if wins don't follow. When she makes a specific commitment — the public bank, the free transit pilot, the housing targets — hold her to it out loud. That accountability is part of the platform.`}
  />
)

export const Head = () =>
  createResultHead({
    pageTitle: 'I drew The Star — Fated LA',
    description: 'My soul candidate for the LA Election 2026 is Rae Huang, The Star.',
    imageUrl: '/share/huang-the-star.png',
    path: '/huang-the-star/',
  })
