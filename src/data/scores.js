// Scoring table — each row is [Bass, Raman, Huang, Pratt, Miller]
// Question numbers map to scoring table rows by topic, not by ordinal position.
export const SCORES = {
  1: [ // The Palisades → Row V
    [5,1,0,0,0], // A
    [1,4,1,0,0], // B
    [0,1,5,0,0], // C
    [0,0,0,6,0], // D
    [0,2,0,1,3], // E
  ],
  2: [ // The Olympics → Row VI
    [4,1,1,0,0], // A
    [1,5,0,0,0], // B
    [0,1,5,0,0], // C
    [0,0,0,6,0], // D
    [1,1,0,1,3], // E
  ],
  3: [ // The Deficit → Row VII
    [4,1,0,1,0], // A
    [1,5,0,0,0], // B
    [0,0,6,0,0], // C
    [1,0,0,5,0], // D
    [0,1,0,1,4], // E
  ],
  4: [ // The AI Era → Row X
    [3,1,0,0,2], // A
    [1,5,0,0,0], // B
    [0,1,5,0,0], // C
    [0,0,0,5,1], // D
    [0,1,0,1,4], // E
  ],
  5: [ // The Encampment → Row I
    [4,1,1,0,0], // A
    [1,4,1,0,0], // B
    [0,1,4,1,0], // C
    [0,1,0,5,0], // D
    [1,2,0,0,3], // E
  ],
  6: [ // The Raid → Row II
    [4,1,1,0,0], // A
    [1,5,0,0,0], // B
    [0,1,5,0,0], // C
    [0,0,0,6,0], // D
    [1,2,0,0,3], // E
  ],
  7: [ // The Worker → Row VIII
    [4,2,0,0,0], // A
    [2,4,0,0,0], // B
    [0,1,5,0,0], // C
    [0,0,0,6,0], // D
    [0,2,0,0,4], // E
  ],
  8: [ // The 911 Call → Row IX
    [5,0,0,1,0], // A
    [1,5,0,0,0], // B
    [0,1,5,0,0], // C
    [1,0,0,5,0], // D
    [0,2,0,0,4], // E
  ],
  9: [ // The Mansion Tax → Row IV
    [4,1,2,0,0], // A
    [1,5,0,0,0], // B
    [1,0,5,0,0], // C
    [0,0,0,6,0], // D
    [0,2,0,1,3], // E
  ],
  10: [ // The Landlord → Row III
    [4,2,0,0,0], // A
    [1,4,1,0,0], // B
    [0,1,5,0,0], // C
    [0,0,0,6,0], // D
    [1,1,0,1,3], // E
  ],
}

// Candidate index mirrors column order: [Bass, Raman, Huang, Pratt, Miller]
export const CANDIDATES = [
  {
    key: 'bass',
    name: 'Karen Bass',
    card: 'The Empress',
    emoji: '🌕',
    role: 'Incumbent Mayor',
    color: '#8B5E3C',
    route: '/the-empress',
    shareQuote: "You don't trust sudden movements. You've seen what happens when institutions collapse faster than replacements can be built.",
  },
  {
    key: 'raman',
    name: 'Nithya Raman',
    card: 'The High Priestess',
    emoji: '⚖️',
    role: 'City Councilmember, District 4',
    color: '#2C4A7C',
    route: '/the-high-priestess',
    shareQuote: "You believe the boring stuff — oversight, transparency, performance metrics — is actually where change lives.",
  },
  {
    key: 'huang',
    name: 'Rae Huang',
    card: 'The Star',
    emoji: '✨',
    role: 'Community Organizer, Housing Now CA',
    color: '#1A5C8A',
    route: '/the-star',
    shareQuote: "You've decided the risk of not trying is larger than the risk of trying and falling short.",
  },
  {
    key: 'pratt',
    name: 'Spencer Pratt',
    card: 'The Tower',
    emoji: '⚡',
    role: 'Nonprofit Founder',
    color: '#6B2D2D',
    route: '/the-tower',
    shareQuote: "You are done with lessons learned.",
  },
  {
    key: 'miller',
    name: 'Adam Miller',
    card: 'The Magician',
    emoji: '🏛️',
    role: 'Tech Entrepreneur, Better Angels',
    color: '#2D5A3D',
    route: '/the-magician',
    shareQuote: "You don't need the meeting to feel inspiring. You need the meeting to end with a decision, an owner, and a date.",
  },
]

export const MOON = {
  key: 'moon',
  name: null,
  card: 'The Moon',
  emoji: '🌑',
  role: null,
  color: '#3D3560',
  route: '/the-moon',
  shareQuote: "The Moon doesn't give you an answer. It gives you a mirror.",
}

// Gap between rank[0] and rank[1] that triggers Moon card
export const MOON_THRESHOLD = 5

// If Miller wins but gap is this small, also trigger Moon
export const MILLER_NARROW_THRESHOLD = 6

export const STORAGE_KEY = 'quizAnswers'
