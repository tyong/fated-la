import React from 'react'
import ResultPage from '../components/ResultPage'
import { createResultHead, defaultLinkPreviewImage } from '../utils/shareMeta'

export default () => (
  <ResultPage
    drew={"You drew \nThe Empress."}
    soulCandidate="Your soul candidate is Karen Bass."
    shareText="My soul candidate for the LA Election 2026 is Karen Bass, The Empress."
    heroName="KAREN BASS"
    heroArcana="THE EMPRESS"
    heroImg="https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/01KQAZVEJXFGAPD34MG25X4KD9.png"
    shareImage="/share/bass-the-empress.png"
    heroImgWidth={225}
    heroImgHeight={362}
    heroImgLeft={33}
    heroImgTop={70}
    tarotReading={`Okay, so you're not burning anything down. That's by choice.\n\nYou've seen what happens when people get really excited about blowing stuff up and then the replacement turns out to be... also bad. You've absorbed this lesson. You're a little tired from absorbing it.\n\nYou believe in fixing the thing that exists instead of waiting for the perfect replacement that might never show up.\n\nPeople call this "too cautious." You call it "I've been paying attention."\n\nYou don't expect a mayor to be magic. You expect them to show up, do the work, and not make things worse. You consider this a reasonable bar. You are a little sad about how often it doesn't get cleared.\n\nYour version of accountability looks like: noticing when something isn't working and changing it instead of defending it. You're watching to see whether the person in charge can do that. The jury is still out.`}
    inPlainTerms={`You likely think Bass's homelessness program — Inside Safe — is actually working, even with the flaws. You trust the housing permitting reforms she put in place.\n\nYou think the Palisades Fire was decades of problems, not one person's fault — and you're nervous about people using other people's grief for political points.\n\nYou want more cops.\n\nYou want sanctuary city protections.\n\nYou find the deficit concerning but you'd rather fix it carefully than burn the whole budget down.\n\nOne thing to think about though: "staying the course" only makes sense if the course is going somewhere. Is it?`}
    shadowTitle={"Your Shadow Card:\nThe High Priestess"}
    shadowName="NITHYA RAMAN"
    shadowArcana="THE HIGH PRIESTESS"
    shadowImg="https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/01KQAXJPF3WYPXPSWM2Q969YKC.png"
    shadowImgLeft={-47}
    shadowText={`Surprise! You two agree on more than you'd like to admit.\n\nRaman endorsed Bass. Voted with her. Supports a lot of the same housing stuff.\n\nThe gap between you isn't really "what" — it's "who" should be doing it.\n\nShe thinks the job needs different hands. You think the current hands deserve more time.\n\nThe card asks you: Are you defending the progress — or just defending the familiarity?`}
    charge={`The Empress's power is in stewardship.\n\nPick one thing Bass promised. One program, one budget line, one goal.\n\nBookmark it. Check it in six months. That's how you make "continuity" and "accountability" mean something.`}
  />
)

export const Head = () =>
  createResultHead({
    pageTitle: 'I drew The Empress — Fated LA',
    description: 'My soul candidate for the LA Election 2026 is Karen Bass, The Empress.',
    imageUrl: defaultLinkPreviewImage,
    path: '/bass-the-empress/',
  })
