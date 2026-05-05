import React from 'react'
import ResultPage from '../components/ResultPage'
import { createResultHead, resultPageTitle } from '../utils/shareMeta'

const TheMoon = () => (
  <ResultPage
    drew={"You drew \nThe Moon."}
    soulCandidate="No one candidate speaks to you."
    heroName="IN CONFLICT"
    heroArcana="THE MOON"
    heroImg="/cards/the-moon.png"
    heroImgWidth={225}
    heroImgHeight={362}
    heroImgLeft={33}
    heroImgTop={70}
    heroImgObjectPosition="center top"
    tarotSectionTitle="Your soul can't choose."
    tarotReading={`The Moon doesn't give you an answer. It gives you a mirror.\n\nYour responses suggest you're holding genuine tensions — not because you haven't thought about this, but because the issues don't resolve cleanly for you.\n\nYou believe in accountability AND you distrust disruption.\n\nYou want bold change AND you're skeptical of anyone who makes it sound easy.\n\nYou've been failed by the system AND you're not sure blowing it up is better.\n\nThis is not a failure of conviction. It's a sign that you're paying attention.\n\nHere's what the candidates actually agree on, since that might help you find the edge:\n\nEvery serious candidate in this race believes Inside Safe needs significant reform. Every one believes the budget crisis is real and urgent. Every one supports some version of increased housing supply. Every one acknowledges the Palisades Fire was a failure of preparation, not just bad luck.\n\nWhere they genuinely diverge — and where your decision likely lives:\n\nOn homelessness: Is the problem management (Raman) or system design (Huang) or accountability to voters (Pratt) or more time (Bass)?\n\nOn housing: Do you trust the market to produce affordability with better incentives, or does the city need to own housing directly?\n\nOn safety: Is your fear on the street about crime, or about encountering someone in mental health crisis with no support — and do you see those as the same problem or different ones?\n\nThe Moon card asks you to sit with one of those questions specifically. Not all of them. Just one.`}
    inPlainTerms=""
    shadowTitle=""
    shadowName=""
    shadowArcana=""
    shadowImg=""
    shadowImgLeft={0}
    shadowText=""
    charge={`Before June 2, do one thing: attend a candidate event — in person, not on a screen. Not a debate. Something smaller, where you can see how they handle a question they weren't expecting. The Moon card resolves in proximity, not in more information.`}
  />
)

export default TheMoon

export const Head = () =>
  createResultHead({
    pageTitle: resultPageTitle('The Moon', 'No one candidate'),
    description: "My soul candidate for the 2026 LA mayoral election is The Moon. What's yours?",
    imageUrl: '/share/the-moon.png',
    path: '/the-moon/',
  })
