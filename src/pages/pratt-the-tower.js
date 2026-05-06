import React from 'react'
import ResultPage from '../components/ResultPage'
import {
  createResultHead,
  defaultLinkPreviewImage,
  resultPageTitle,
} from '../utils/shareMeta'

export default () => (
  <ResultPage
    drew={"You drew \nThe Tower."}
    soulCandidate="Your soul candidate is Spencer Pratt."
    heroName="SPENCER PRATT"
    heroArcana="THE TOWER"
    heroImg="/cards/spencer-pratt-the-tower.png"
    heroImgWidth={225}
    heroImgHeight={362}
    heroImgLeft={33}
    heroImgTop={70}
    tarotReading={`You are done.\n\nNot in a "I give up" kind of way. Done in a "I have watched this specific movie too many times and I know how it ends" way.\n\nThe city spent billions on homelessness. The streets look the same. The fire department had empty positions for years. The mayor left the country before a fire season. People's houses burned down. The official response was: a task force, a report, and some lessons learned.\n\nYou're not looking for someone who understands the system. You're looking for someone who doesn't owe anything to it. You know that's a bet. You know bets go bad sometimes. You've decided the risk of not making the bet is worse.`}
    inPlainTerms={`His core argument is the "Homeless Industrial Complex." The city has been funding a network of nonprofits and agencies that have a financial incentive to manage homelessness rather than end it. He wants mental health and drug treatment before housing assistance. He wants to clear encampments. He wants law and order.\n\nOn the wildfires: Pratt lost his home and his parents' home. His anger is personal and real. That gives him credibility on this issue.\n\nOn budget: he uses language like waste, corruption, bad contracts. Pratt is less clear on what specifically gets cut.\n\nOn climate and housing: these are the thinnest parts of his platform.\n\nAn open question: there's a big difference between "burn it down" and "here's what we build." The second part is where he's thinnest. A mayor still has to govern on day two.`}
    shadowTitle={"Your Shadow Card:\nThe Empress"}
    shadowName="KAREN BASS"
    shadowArcana="THE EMPRESS"
    shadowImg="/cards/karen-bass-the-empress.png"
    shadowImgLeft={17}
    shadowText={`Spencer Pratt and Karen Bass could not be more different on wildfire accountability. But both want a mayor who actually manages the city like an organization that has to produce results — more than either campaign likes to admit.\n\nThey both want a strong executive. They disagree about whether the one in office is delivering.\n\nThis card asks you: What does LA look like on January 1, 2027 under the mayor you're voting for? Can you describe it specifically?`}
    charge={`The Tower’s power is passion, but outrage without policy is just noise. Outrage with a specific alternative, however, is a movement. Find one concrete commitment from your soul candidate — one program to cut, one metric to hit, one hire to make in year one. See if he can uphold it. That's the difference between disruption and demolition.`}
  />
)

export const Head = () =>
  createResultHead({
    pageTitle: resultPageTitle('The Tower', 'Spencer Pratt'),
    description: 'My soul candidate for the LA Election 2026 is Spencer Pratt, The Tower.',
    imageUrl: defaultLinkPreviewImage,
    path: '/pratt-the-tower/',
  })
