import React from 'react'
import ResultPage from '../components/ResultPage'
import {
  createResultHead,
  defaultLinkPreviewImage,
  resultPageTitle,
} from '../utils/shareMeta'

export default () => (
  <ResultPage
    drew={"You drew \nThe High Priestess."}
    soulCandidate="Your soul candidate is Nithya Raman."
    shareText="My soul candidate for the LA Election 2026 is Nithya Raman, The High Priestess."
    heroName="NITHYA RAMAN"
    heroArcana="THE HIGH PRIESTESS"
    heroImg="/cards/nithya-raman-high-priestess.png"
    shareImage="/share/raman-the-high-priestess.png"
    heroImgWidth={213}
    heroImgHeight={358}
    heroImgLeft={40}
    heroImgTop={72}
    tarotReading={`You read the footnotes. You know where the money went. You have a very specific kind of anger — the cold kind, the kind that makes you want to look at spreadsheets.\n\nYou are not an outsider. You have never believed in outsiders, because you've watched enough "outsiders" win elections and then discover that actually governing requires knowing where things are.\n\nYou are inside the machine. You know where it's broken. You want to fix the specific broken parts.\n\nYour version of hope is unglamorous. It looks like accountability dashboards and performance metrics and fired contractors and, honestly, maybe a pretty good org chart. You know this doesn't sound exciting. You've made your peace with that.\n\nYou are aware that you have been part of the system you're now criticizing. You don't pretend this away. You hold it. You think honesty about contradiction is more useful than pretending you came from nowhere.`}
    inPlainTerms={`You think Inside Safe is expensive and the numbers are bad — $225 a night, and almost half of people end up back on the street. You want the city to break up with LAHSA (the homelessness agency) and actually run the money itself, with public dashboards anyone can look at.\n\nOn housing, you want rent caps AND more building. Yes, both.\n\nYou think the mansion tax should be reformed — not killed — to exempt new construction while keeping the tax on luxury resales. This makes you enemies on both sides. You consider this evidence you're right.\n\nYou've committed to carbon neutrality by 2030 and you treat that like an actual deadline, not a vibe.\n\nOne thing to think about: you entered this race hours before the filing deadline. Your campaign is newer than everyone else's. Great ideas need infrastructure. Who's building yours?`}
    shadowTitle={"Your Shadow Card:\nThe Empress"}
    shadowName="KAREN BASS"
    shadowArcana="THE EMPRESS"
    shadowImg="/cards/karen-bass-the-empress.png"
    shadowImgLeft={22}
    shadowText={`This is the awkward one.\n\nYou endorsed Bass. Voted with her on most things. Your criticism of Inside Safe is about cost efficiency — not that it's the wrong idea.\n\nIn a different timeline, you're her deputy mayor. Instead you're running against her.\n\nThe thing that separates you is a conviction that the job needs different hands. Whether people find that compelling or suspicious depends entirely on how you tell that story.\n\nThe card asks you: Are you running for mayor, or for a better version of the same administration?`}
    charge={`You're a policy person. So is your candidate. Don't let the campaign stay at the level of "accountability" and "transparency" — those are vibes, not plans. Push into the specifics. How does the LAHSA transition actually work? What's the timeline? Who gets fired if it doesn't?\n\nDetails are the difference between a policy and a press release.`}
  />
)

export const Head = () =>
  createResultHead({
    pageTitle: resultPageTitle('The High Priestess', 'Nithya Raman'),
    description: 'My soul candidate for the LA Election 2026 is Nithya Raman, The High Priestess.',
    imageUrl: defaultLinkPreviewImage,
    path: '/raman-the-high-priestess/',
  })
