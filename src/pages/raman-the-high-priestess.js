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
    inPlainTerms={`Raman says Inside Safe costs too much for what it delivers—about $225 a night—and that nearly half of participants end up back on the street. She wants the city to break with the Los Angeles Homeless Services Authority, bring the money in-house, and publish dashboards anyone can audit.\n\nOn housing, she backs rent caps AND more building.\n\nShe wants the mansion tax reformed, not repealed: exempt new construction, keep the levy on luxury resales. That stance alienates people on both sides; she reads that as a sign she's onto something.\n\nShe's pledged carbon neutrality by 2030 and talks about it like a deadline, not a moodboard.\n\nOne caveat: she entered the race hours before the filing deadline. Her organization is newer than her rivals'. Big ideas still need infrastructure—and hers is still coming into focus.`}
    shadowTitle={"Your Shadow Card:\nThe Empress"}
    shadowName="KAREN BASS"
    shadowArcana="THE EMPRESS"
    shadowImg="/cards/karen-bass-the-empress.png"
    shadowImgLeft={22}
    shadowText={`This is the awkward one.\n\nNithya Raman endorsed Karen Bass. She has voted with Bass on most things. Raman's criticism of Inside Safe is about cost efficiency — not that it's the wrong idea.\n\nIn a different timeline, she's Bass's deputy mayor. Instead, she's running against her.\n\nWhat separates them is Raman's conviction that the job needs different hands. Whether you find that compelling or suspicious depends on how you believe her story.\n\nThis card asks you: Is Raman running to be mayor, or for a better version of the same administration?`}
    charge={`The High Priestess is a policy person. Don't let the campaign stay at the level of "accountability" and "transparency" — those are vibes, not plans. Push into the specifics. How does LAPD reform actually work? What's the timeline? Who replaces the leadership?\n\nDetails are the difference between a policy and a press release.`}
  />
)

export const Head = () =>
  createResultHead({
    pageTitle: resultPageTitle('The High Priestess', 'Nithya Raman'),
    description: 'My soul candidate for the LA Election 2026 is Nithya Raman, The High Priestess.',
    imageUrl: defaultLinkPreviewImage,
    path: '/raman-the-high-priestess/',
  })
