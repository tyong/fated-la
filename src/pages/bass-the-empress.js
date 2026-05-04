import React from 'react'
import ResultPage from '../components/ResultPage'
import {
  createResultHead,
  defaultLinkPreviewImage,
  resultPageTitle,
} from '../utils/shareMeta'

export default () => (
  <ResultPage
    drew={"You drew \nThe Empress."}
    soulCandidate="Your soul candidate is Karen Bass."
    shareText="My soul candidate for the LA Election 2026 is Karen Bass, The Empress."
    heroName="KAREN BASS"
    heroArcana="THE EMPRESS"
    heroImg="/cards/karen-bass-the-empress.png"
    shareImage="/share/bass-the-empress.png"
    heroImgWidth={225}
    heroImgHeight={362}
    heroImgLeft={33}
    heroImgTop={70}
    tarotReading={`Okay, so you're not burning anything down. That's by choice.\n\nYou've seen what happens when people get really excited about blowing stuff up and then the replacement turns out to be... also bad. You've absorbed this lesson. You're a little tired from absorbing it.\n\nYou believe in fixing the thing that exists instead of waiting for the perfect replacement that might never show up.\n\nPeople call this "too cautious." You call it "I've been paying attention."\n\nYou don't expect a mayor to be magic. You expect them to show up, do the work, and not make things worse. You consider this a reasonable bar. You are a little sad about how often it doesn't get cleared.\n\nYour version of accountability looks like: noticing when something isn't working and changing it instead of defending it. You're watching to see whether the person in charge can do that. The jury is still out.`}
    inPlainTerms={`Bass argues Inside Safe is working—even with its flaws—and cites her housing permitting reforms as proof the city can follow through.\n\nOn the Palisades Fire, she frames the failure as decades in the making, not one person's fault, and cautions against using other people's grief for political points.\n\nShe wants more officers on the street.\n\nShe defends sanctuary-city protections.\n\nShe acknowledges the deficit but prefers careful fixes to torching the whole budget.\n\nOne open question: "staying the course" only works if the course is actually going somewhere. Whether it is isn't settled.`}
    shadowTitle={"Your Shadow Card:\nThe High Priestess"}
    shadowName="NITHYA RAMAN"
    shadowArcana="THE HIGH PRIESTESS"
    shadowImg="/cards/nithya-raman-high-priestess.png"
    shadowImgLeft={-47}
    shadowText={`Surprise! Bass and Raman agree on more than either side likes to admit.\n\nRaman endorsed Bass, voted with her, and backs a lot of the same housing goals.\n\nThe gap between them isn't really "what" — it's "who" should be doing the work.\n\nRaman thinks the job needs different hands. Bass thinks the current hands deserve more time.\n\nThe card asks you: Are you defending the progress — or just defending the familiarity?`}
    charge={`The Empress's power is in stewardship.\n\nPick one thing Bass promised. One program, one budget line, one goal.\n\nBookmark it. Check it in six months. That's how you make "continuity" and "accountability" mean something.`}
  />
)

export const Head = () =>
  createResultHead({
    pageTitle: resultPageTitle('The Empress', 'Karen Bass'),
    description: 'My soul candidate for the LA Election 2026 is Karen Bass, The Empress.',
    imageUrl: defaultLinkPreviewImage,
    path: '/bass-the-empress/',
  })
