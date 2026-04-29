import React from 'react'
import ResultPage from '../components/ResultPage'

export default () => (
  <ResultPage
    drew={"You drew \nThe Magician."}
    soulCandidate="Your soul candidate is Miller."
    heroName="MILLER"
    heroArcana="THE MAGICIAN"
    heroImg=""
    heroImgWidth={225}
    heroImgHeight={362}
    heroImgLeft={33}
    heroImgTop={70}
    tarotReading={`[Tarot reading for Miller — to be filled in.]`}
    inPlainTerms={`[Policy summary for Miller — to be filled in.]`}
    shadowTitle={"Your Shadow Card:\nThe High Priestess"}
    shadowName="NITHYA RAMAN"
    shadowArcana="THE HIGH PRIESTESS"
    shadowImg="https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/01KQAXJPF3WYPXPSWM2Q969YKC.png"
    shadowImgLeft={-47}
    shadowText={`[Shadow card text — to be filled in.]`}
    charge={`[Charge for Miller — to be filled in.]`}
  />
)
