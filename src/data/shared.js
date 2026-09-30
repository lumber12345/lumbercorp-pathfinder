// Shared roadmap blocks referenced by multiple profession guides.

export const RUSH_PHASE = {
  id: 'rush',
  title: 'Phase 1 — The Level 15 Rush',
  subtitle: 'Days 1–15 · Foundation every profession is built on',
  steps: [
    {
      id: 'rush-job',
      title: 'Take the Grocer job on day one',
      detail:
        'Bag Boy only asks ~2 in each work stat, the interview is three easy questions, and it is the fastest starter job to enter. Working daily pays a small wage, grows your work stats (Manual/Intelligence/Endurance) and banks job points for promotions. You can always switch jobs later — city jobs keep the rank you earned if you return.',
      tips: ['Fail an interview question? You are locked out of re-applying until the next day. Read the questions carefully.'],
    },
    {
      id: 'rush-edu',
      title: 'Start education immediately — never leave the slot empty',
      detail:
        'Education runs in real time in the background. Queue Biology → Introduction, then Intravenous Therapy (unlocks blood bags, the best healing item in the game). After that, start the Sports Science track for permanent gym-gain boosts. Months from now you will regret every idle hour.',
      tips: [
        'Biology intro → Intravenous Therapy is the universally recommended first pair.',
        'Finishing the Education city job ladder later makes all future courses 10% faster.',
      ],
    },
    {
      id: 'rush-crimes',
      title: 'Spend nerve on crimes every day',
      detail:
        'Crime skill builds over thousands of attempts, so starting early matters. In Crimes 2.0, begin with low-difficulty Shoplifting and Pickpocketing marks and work your way up as skill grows. Failures still teach — nerve spent is skill gained.',
      tips: ['Never let nerve sit at cap — it stops regenerating.'],
    },
    {
      id: 'rush-gym',
      title: 'Train lightly: ~300–1,000 total battle stats',
      detail:
        'You need just enough stats to beat leveling targets. Rent cheap happy housing (Ranch/Mansion tier) first — higher happy means better gym gains — then spread early training across all four stats so no target type is off-limits.',
      tips: ['Happy directly scales gym gains. Train while happy, not while drained from drugs.'],
    },
    {
      id: 'rush-gear',
      title: 'Buy budget combat gear',
      detail:
        'Cheap leather armor, a basic melee weapon and a stack of small meds from the item market. You are not trying to win fashion contests — you are trying to survive leaving weak targets in the street without hospital bills.',
    },
    {
      id: 'rush-targets',
      title: 'Farm Baldr\u2019s leveling target list',
      detail:
        'The community maintains lists of high-level players with tiny battle stats ("leveling targets"). Attack them, win, and choose LEAVE — leaving keeps the target recoverable quickly so the same list stays farmable daily. Dump all energy into this. If you lose or take heavy damage, go train more and retry.',
      tips: [
        'Leave beats Hospitalize for XP farming — targets leave the hospital fast and can be re-farmed.',
        'Use a community targeting list (Baldr\u2019s) or an API scouter script to find fresh targets.',
      ],
    },
    {
      id: 'rush-15',
      title: 'Hit Level 15 — the game begins',
      detail:
        'Level 15 unlocks the Travel Agency, and travel unlocks the real economy: plushie and flower runs, Swiss rehab, and item arbitrage. The moment you land 15, move to the profession-specific Phase 2.',
    },
  ],
}

export const UNIVERSAL_EDUCATION = [
  { course: 'Biology → Intravenous Therapy', why: 'Unlocks blood bags — the strongest, cheapest healing in the game.' },
  { course: 'Sports Science (full track)', why: 'Permanent boost to all gym gains. Compounds over your whole career.' },
  { course: 'Psychology (degree)', why: 'Permanent crime XP and skill-gain boost for Crimes 2.0 grinders.' },
  { course: 'Combat Training', why: 'Unlocks weapon XP so your weapons level up alongside you.' },
  { course: 'General Education', why: 'Boosts work stats gained from every future course you complete.' },
]

export const UNIVERSAL_MERITS = [
  { name: 'Nerve bar increases', why: 'More nerve = more crime attempts per day. Top pick for crime-focused builds.' },
  { name: 'Max energy increases', why: 'More energy = more gym training, attacks or revives per day.' },
  { name: 'Crime skill merits', why: 'Direct success-rate boosts for your chosen crime trees.' },
  { name: 'Battle stat merits', why: 'Flat boosts to Strength/Defense/Speed/Dexterity for fighters.' },
]

export const DAILY_MAINTENANCE = [
  'Work your job / train with company (banks job points & work stats)',
  'Spend every point of nerve on your crime tree',
  'Check education slot is filled',
  'Check bars never sit at cap (energy/nerve stop regenerating at cap)',
  'Collect faction bonuses if chained',
]
