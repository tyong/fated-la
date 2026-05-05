import React from 'react'
import ResultPage from '../components/ResultPage'

export default () => (
  <ResultPage
    drew={"You drew \nThe Magician."}
    soulCandidate="Your soul candidate is Adam Miller."
    heroName="ADAM MILLER"
    heroArcana="THE MAGICIAN"
    heroImg="/cards/adam-miller-the-magician.png"
    heroImgWidth={225}
    heroImgHeight={362}
    heroImgLeft={33}
    heroImgTop={70}
    tarotReading={`You are not here to feel the revolution. You are here to find out why the permits take four years.\n\nYou have worked in organizations. Good ones. Broken ones. Ones that were good and then became broken. And you've noticed that the failure is almost never ideological — it's operational. Wrong people, wrong seats, nobody in charge of anything, no one accountable for the outcomes.\n\nYou are not a cynic. Cynics have given up caring. You are frustrated specifically because you still care. The dysfunction offends you. You believe it's fixable. You are slightly annoyed that no one in politics seems interested in actually fixing it.\n\nYou don't need the meeting to feel inspiring. You need the meeting to end with a decision, an owner, and a date. You have noticed that very few meetings at City Hall end this way.`}
    inPlainTerms={`Miller is the centrist-pragmatist candidate. He thinks homelessness is a management failure — Inside Safe costs too much and returns too few people to stable housing. He wants accountability metrics, competitive contracts, and someone actually responsible for outcomes.\n\nOn housing, he wants permitting timelines cut dramatically; the city, he says, should control its own development decisions — not Sacramento.\n\nOn the budget, he calls for audits before cuts, arguing the waste is in overhead and in old contracts nobody has reviewed — and that those need to be surfaced first.\n\nOn AI: he's the most enthusiastic candidate in the field. He thinks city government is decades behind on technology and AI could unlock major capacity in permitting, infrastructure, and services without requiring new revenue.\n\nOne thing to watch: "operational efficiency" has been used to justify plenty of policies — some good, some not. He still has to show what efficiency is for, how he'd measure it, and who pays when the numbers don't work—those are the follow-ups he hasn't fully pinned down in public.`}
    shadowTitle={"Your Shadow Card:\nThe High Priestess"}
    shadowName="NITHYA RAMAN"
    shadowArcana="THE HIGH PRIESTESS"
    shadowImg="/cards/nithya-raman-high-priestess.png"
    shadowImgLeft={-47}
    shadowText={`Closer than it looks.\n\nAdam Miller and Nithya Raman both want performance-based budgeting, public dashboards on homelessness spending, and a city that stops pretending Los Angeles Homeless Services Authority is fine as-is. Both want a mayor who runs the city more like a CEO runs a company.\n\nThe difference: Raman names what the machine should be optimizing for. She has an explicit values framework underneath the operational critique.\n\nMiller tends to treat that question as already answered — which holds until the data points somewhere uncomfortable.\n\nThis card asks you: When the data conflicts with the community, which one wins?`}
    charge={`You believe in doing the homework. So do the homework. Pick one broken city function — permits, potholes, 911 dispatch — and trace exactly why it's broken. Then check whether Miller's diagnosis matches what you find. That's the due diligence this candidacy needs from you.`}
  />
)
