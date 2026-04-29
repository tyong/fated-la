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
    [0,1,0,0,6], // C
    [1,0,0,0,6], // D
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
    [1,4,1,0,0], // B
    [0,1,5,0,0], // C
    [0,1,0,5,0], // D
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
    [5,0,1,1,0], // A
    [1,5,0,0,0], // B
    [0,1,5,0,0], // C
    [1,0,0,5,0], // D
    [0,0,0,0,6], // E
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
  { name: 'Bass',  route: '/the-empress' },
  { name: 'Raman', route: '/the-high-priestess' },
  { name: 'Huang', route: '/the-star' },
  { name: 'Pratt', route: '/the-chariot' },
  { name: 'Miller', route: '/the-magician' },
]

export const STORAGE_KEY = 'quizAnswers'
