import React from 'react'
import ResultPage from '../components/ResultPage'

export default () => (
  <ResultPage
    drew={"You drew \nThe Chariot."}
    soulCandidate="Your soul candidate is Pratt."
    heroName="PRATT"
    heroArcana="THE CHARIOT"
    heroImg=""
    heroImgWidth={225}
    heroImgHeight={362}
    heroImgLeft={33}
    heroImgTop={70}
    tarotReading={`[Tarot reading for Pratt — to be filled in.]`}
    inPlainTerms={`[Policy summary for Pratt — to be filled in.]`}
    shadowTitle={"Your Shadow Card:\nThe Empress"}
    shadowName="KAREN BASS"
    shadowArcana="THE EMPRESS"
    shadowImg="https://app.paper.design/file-assets/01KQ8CCT4BGDP6VM53M8HC0F9H/01KQAZVNMCWXF3ZMGF2BN8PM61.png"
    shadowImgLeft={17}
    shadowText={`[Shadow card text — to be filled in.]`}
    charge={`[Charge for Pratt — to be filled in.]`}
  />
)
