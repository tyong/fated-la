import React from 'react'
import QuestionPage from '../components/QuestionPage'

export default () => (
  <QuestionPage
    number={1}
    title="The Fires"
    paragraphs={[
      '2025. The Palisades and Altadena burned. The mayor was in Ghana.',
      'The fire department had empty positions nobody filled. Hydrants ran dry. Thousands of people lost everything.',
    ]}
    question="What's your top takeaway?"
    choices={[
      { title: 'This was bad luck and systemic failure.', body: "It's not one person's fault that a freak event exposed decades of bad decisions. But the mayor should ensure it never happens like this again." },
      { title: "The city didn't take climate seriously.", body: "The city was not prepared for a climate disaster it knew was likely coming. That's not bad luck. That's a choice." },
      { title: 'Rebuilding has to be about justice.', body: "The people who had the least, lost the most. We can't just put the expensive neighborhoods back the way they were." },
      { title: 'This was 100% a leadership failure.', body: 'People died. The mayor was on a trip. That\'s not "systemic", it\'s irresponsible.' },
      { title: 'Hold specific leaders accountable.', body: "There's a paper trail. Fire agency calls. Equipment purchases. Follow it to the specific people who made the specific calls that led to insufficient response." },
    ]}
    nextPath="/question-02"
  />
)
