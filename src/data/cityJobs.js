// City (starter) jobs — position data mirrors wiki.torn.com/wiki/Job.
// Requirements format: { man, int, end } = Manual Labor / Intelligence / Endurance.

export const CITY_JOBS = [
  {
    id: 'grocer',
    name: 'Grocer',
    category: 'city',
    icon: 'ShoppingCart',
    accent: 'emerald',
    tagline: 'The day-one job. Low bar to entry, quick work stats, zero pressure.',
    role:
      'The Grocer is Torn\u2019s on-ramp job. Almost nothing is required to start, the daily grind is light, and the stat gains quietly accumulate while you focus on the Level 15 rush. Its specials let you pocket small items instead of buying them.',
    bestFor: 'Brand-new players who need a job in the first five minutes.',
    difficulty: 1,
    income: 1,
    statFocus: ['Endurance', 'Manual Labor'],
    passive: null,
    positions: [
      { name: 'Bag Boy', req: { man: 2, int: 2, end: 2 }, pay: 150, points: 1, promo: 5, special: 'Steal cash · 1 Grocer point' },
      { name: 'Price Labeller', req: { man: 30, int: 15, end: 50 }, pay: 175, points: 2, promo: 10, special: 'Steal a bag of candy · 2 points' },
      { name: 'Cashier', req: { man: 50, int: 35, end: 120 }, pay: 210, points: 3, promo: 15, special: 'Steal a bottle of alcohol · 5 points' },
      { name: 'Food Delivery', req: { man: 120, int: 60, end: 225 }, pay: 250, points: 4, promo: 20, special: '—' },
      { name: 'Manager', req: { man: 250, int: 200, end: 500 }, pay: 300, points: 5, promo: null, special: 'Steal an energy drink · 25 points' },
    ],
    phases: [
      {
        id: 'enter',
        title: 'Phase 1 — Get hired & settle in',
        subtitle: 'Day 1 · no requirements beyond showing up',
        steps: [
          {
            id: 'apply',
            title: 'Pass the Grocer interview',
            detail:
              'Apply at the job center and answer three sector questions correctly. Get one wrong and you wait a day to re-apply, so take it seriously even though it is easy. You start with 5 job points the first time you are employed.',
          },
          {
            id: 'work-daily',
            title: 'Work every single day',
            detail:
              'Each work day pays your wage, grants work-stat gains and 1 job point (more at higher ranks). Job points fund promotions and specials — they only accrue by showing up.',
            tips: ['Set a daily login habit around working — it is the whole game loop of starter jobs.'],
          },
          {
            id: 'specials',
            title: 'Spend spare points on specials',
            detail:
              'Bag Boy steals small cash for 1 point, Cashier steals alcohol for 5. These are pocket change, but free is free early on. At Manager, 25 points buys an energy drink — genuinely useful.',
          },
        ],
      },
      {
        id: 'climb',
        title: 'Phase 2 — Climb to Manager',
        subtitle: 'Weeks 1–6 · 250 Man / 200 Int / 500 End',
        steps: [
          {
            id: 'stats',
            title: 'Feed your work stats',
            detail:
              'The Grocer itself trains Endurance and Manual Labor. Stack the General Education courses on top — they boost work stats from every course you complete — and you will hit Manager requirements naturally within a couple of months.',
            tips: ['Work stats also gate the better city jobs (Medical, Law). Nothing is wasted.'],
          },
          {
            id: 'promotions',
            title: 'Take every promotion',
            detail:
              'Promotions require the work stats plus a one-time job-point payment (5 → 10 → 15 → 20). Higher ranks pay more, grant more daily points and better stat gains. Never sit on points you need for a promotion.',
          },
          {
            id: 'manager',
            title: 'Reach Manager and evaluate',
            detail:
              'Manager is the ceiling: $300/day, 5 points, and the energy-drink special. Once you are here, the Grocer has done its job — the smart move is pivoting to Medical, Education or a player company.',
          },
        ],
      },
      {
        id: 'exit',
        title: 'Phase 3 — Transition out',
        subtitle: 'When the Grocer has nothing left to give',
        steps: [
          {
            id: 'pivot',
            title: 'Pick your next job deliberately',
            detail:
              'The Grocer has no permanent passive perk, so there is no reason to stay long-term. Move to Medical (revive skill), Education (faster courses) or Law (+5% crime gains) for the big-3 passives, or jump to a player company for real perks.',
            tips: ['Your rank and points are remembered if you ever return to a city job.'],
          },
        ],
      },
    ],
    education: [
      { course: 'General Education track', why: 'Boosts work stats gained from every future course — speeds every job ladder.' },
      { course: 'Biology → Intravenous Therapy', why: 'Blood bags for cheap healing between leveling-target fights.' },
    ],
    merits: [
      { name: 'Max energy increases', why: 'More energy per day for the Level 15 rush while you grind here.' },
    ],
    companies: [
      { name: 'Any active player company', why: 'The moment a company will take you, its perks beat the Grocer\u2019s wage.' },
    ],
    dailyRoutine: ['Work shift', 'Spend nerve on crimes', 'Check education slot', 'Steal an energy drink when points allow'],
    milestones: [
      { label: 'Hired', detail: 'Pass the interview on day one' },
      { label: 'Manager', detail: '250 Man / 200 Int / 500 End + 20 points' },
      { label: 'Moving on', detail: 'Pivot to a passive-earning city job or company' },
    ],
    transition:
      'The Grocer is a stepping stone, not a career. Leave the moment a better ladder (Medical / Education / Law / company) opens.',
  },

  {
    id: 'army',
    name: 'Army',
    category: 'city',
    icon: 'Shield',
    accent: 'red',
    tagline: 'Ten ranks of grind. The end prize: spying anyone\u2019s battle stats.',
    role:
      'The Army is the longest city-job ladder, running Private all the way to General. Along the way it hands out battle-stat boosts and weapon steals, and at the top it unlocks the single most useful utility in PvP: spying another player\u2019s exact battle stats for 10 army points and $5,000.',
    bestFor: 'Combat-oriented players who want target intel; work-stat grinders who like clear ladders.',
    difficulty: 4,
    income: 2,
    statFocus: ['Manual Labor', 'Endurance'],
    passive: null,
    positions: [
      { name: 'Private', req: { man: 2, int: 2, end: 2 }, pay: 125, points: 1, promo: 5, special: 'Strength boost for army points' },
      { name: 'Corporal', req: { man: 50, int: 15, end: 20 }, pay: 150, points: 2, promo: 10, special: '—' },
      { name: 'Sergeant', req: { man: 120, int: 35, end: 50 }, pay: 180, points: 3, promo: 15, special: 'Steal a weapon · 10 points' },
      { name: 'Master Sergeant', req: { man: 325, int: 60, end: 115 }, pay: 220, points: 4, promo: 20, special: '—' },
      { name: 'Warrant Officer', req: { man: 700, int: 160, end: 300 }, pay: 225, points: 5, promo: 25, special: '—' },
      { name: 'Lieutenant', req: { man: 1300, int: 360, end: 595 }, pay: 325, points: 6, promo: 30, special: 'Defence boost for army points' },
      { name: 'Major', req: { man: 2550, int: 490, end: 900 }, pay: 550, points: 7, promo: 35, special: '—' },
      { name: 'Colonel', req: { man: 4150, int: 600, end: 1100 }, pay: 755, points: 8, promo: 40, special: '—' },
      { name: 'Brigadier', req: { man: 7500, int: 1350, end: 2530 }, pay: 1000, points: 9, promo: 45, special: '—' },
      { name: 'General', req: { man: 10000, int: 2000, end: 4000 }, pay: 2500, points: 10, promo: null, special: 'Spy a player\u2019s battle stats · 10 points + $5,000' },
    ],
    phases: [
      {
        id: 'enlist',
        title: 'Phase 1 — Enlist & survive boot camp',
        subtitle: 'Days 1–10 · low requirements',
        steps: [
          {
            id: 'interview',
            title: 'Pass the Army interview',
            detail:
              'Three military-flavored questions at the job center. Get them right or cool your heels for a day. Private requires almost nothing, so you can enlist early even while doing the Level 15 rush.',
          },
          {
            id: 'boosts',
            title: 'Use the Strength/Defence boosts before fights',
            detail:
              'Private unlocks a Strength boost purchased with army points; Lieutenant adds a Defence version. They are modest but they stack with everything else — pop them before leveling-target sessions or faction hits.',
          },
          {
            id: 'weapon-steal',
            title: 'Steal weapons at Sergeant',
            detail:
              'Sergeant lets you spend 10 army points to steal a weapon. Random quality, occasionally profitable, always fun. Reinvest anything decent into your own kit.',
          },
        ],
      },
      {
        id: 'climb',
        title: 'Phase 2 — The long march to General',
        subtitle: 'Months · 10,000 Man / 2,000 Int / 4,000 End at the summit',
        steps: [
          {
            id: 'manual',
            title: 'Specialize in Manual Labor',
            detail:
              'The Army ladder is Manual-heavy. General Education courses, daily work and company trains (if you detour through a company) are your main sources. This is a marathon — many players interleave the Army with company stints and come back at the same rank.',
          },
          {
            id: 'ladder-econ',
            title: 'Treat the ladder as your income',
            detail:
              'Pay scales from $125 to $2,500/day and daily job points from 1 to 10. Every promotion compounds: more points means more boosts, steals and eventually more spies.',
          },
          {
            id: 'general',
            title: 'Make General',
            detail:
              '10,000 Manual / 2,000 Int / 4,000 End. The spy special is the payoff: for 10 army points and $5,000 you see any player\u2019s exact battle stats — the foundation of smart PvP target selection.',
          },
        ],
      },
      {
        id: 'use-it',
        title: 'Phase 3 — Turn spying into power',
        subtitle: 'The General lifestyle',
        steps: [
          {
            id: 'spy-routine',
            title: 'Spy before every real fight',
            detail:
              'The whole game changes when you can see exact stats. Build hit-lists for your faction, verify bounties before taking them, and never walk into a fair fight again.',
          },
          {
            id: 'move-on',
            title: 'Know when to leave',
            detail:
              'The spy is a job perk, not a permanent passive — it only works while you remain employed by the Army. Many Generals eventually move to a player company and rely on faction-mates or tools for intel instead.',
            tips: ['Come back anytime — you keep your rank and points.'],
          },
        ],
      },
    ],
    education: [
      { course: 'General Education track', why: 'The Army is Manual-stat gated; work-stat boosts speed every promotion.' },
      { course: 'Sports Science', why: 'You are a combat build — permanent gym gains compound with your boosts.' },
      { course: 'Combat Training', why: 'Weapon XP makes your stolen weapons actually good.' },
    ],
    merits: [
      { name: 'Battle stat merits', why: 'Synergizes with the Army\u2019s strength/defence boosts.' },
      { name: 'Max energy increases', why: 'More attacks per day while climbing.' },
    ],
    companies: [
      { name: 'Private Security / combat-perk companies', why: 'Natural landing spot after (or during) your Army stint.' },
    ],
    dailyRoutine: ['Work shift', 'Pop boosts before fight sessions', 'Steal a weapon when points overflow', 'Spend nerve on crimes'],
    milestones: [
      { label: 'Sergeant', detail: 'Weapon steals online' },
      { label: 'Lieutenant', detail: 'Defence boost unlocked' },
      { label: 'General', detail: 'Battle-stat spying — the real prize' },
    ],
    transition:
      'General\u2019s spy needs you on the payroll. Stay as long as intel matters to your playstyle, then rotate into a player company.',
  },

  {
    id: 'casino',
    name: 'Casino',
    category: 'city',
    icon: 'Dices',
    accent: 'violet',
    tagline: 'The best-paying starter job — and the closest thing to a daily jackpot.',
    role:
      'The Casino ladder pays the best daily wages of any city job, topping out at Casino President ($3,500/day, 6 points). Its specials are all money: tips, token grabs and the President\u2019s card-counting payout. No permanent passive — but while you are there, it is the richest starter gig.',
    bestFor: 'Players who log in daily and want the best city wage while they build stats.',
    difficulty: 3,
    income: 4,
    statFocus: ['Intelligence', 'Endurance'],
    passive: null,
    positions: [
      { name: 'Dealer', req: { man: 2, int: 2, end: 2 }, pay: 250, points: 1, promo: 5, special: 'Collect tips · 1 point' },
      { name: 'Gaming Consultant', req: { man: 35, int: 50, end: 120 }, pay: 350, points: 2, promo: 10, special: 'Pocket 25 casino tokens · 1 point' },
      { name: 'Marketing Manager', req: { man: 60, int: 115, end: 325 }, pay: 500, points: 3, promo: 15, special: '—' },
      { name: 'Revenue Manager', req: { man: 360, int: 595, end: 1300 }, pay: 1000, points: 4, promo: 20, special: 'Steal cash · 1 point' },
      { name: 'Casino Manager', req: { man: 490, int: 900, end: 2550 }, pay: 1750, points: 5, promo: 25, special: '—' },
      { name: 'Casino President', req: { man: 755, int: 1100, end: 4150 }, pay: 3500, points: 6, promo: null, special: 'Count cards · 10 points + $100,000 (pays ~$120k–$160k)' },
    ],
    phases: [
      {
        id: 'enter',
        title: 'Phase 1 — Deal your way in',
        subtitle: 'Day 1 · Dealer from the start',
        steps: [
          {
            id: 'interview',
            title: 'Pass the Casino interview',
            detail:
              'Dealer requires ~2 in each work stat — start here on day one if you like the theme. The wage ($250/day) immediately beats Bag Boy.',
          },
          {
            id: 'tips-tokens',
            title: 'Collect tips & tokens daily',
            detail:
              'Dealer tips (1 point) and Gaming Consultant token grabs (1 point for 25 casino tokens) are small but stack daily. Tokens feed the actual casino games — every player gets 75 free tokens a day.',
          },
        ],
      },
      {
        id: 'climb',
        title: 'Phase 2 — Climb to President',
        subtitle: 'Months · 755 Man / 1,100 Int / 4,150 End',
        steps: [
          {
            id: 'int-end',
            title: 'Train Intelligence & Endurance',
            detail:
              'The Casino ladder leans Int/Endurance. Work daily, run General Education courses, and consider a company detour for trains if the mid-ladder stalls. Pay doubles roughly every two ranks — momentum matters.',
          },
          {
            id: 'president',
            title: 'Become Casino President',
            detail:
              'The top chair: $3,500/day, 6 points, and the card-counting special — spend 10 points plus $100,000 to collect roughly $120k–$160k. That is a $20k–$60k profit you can repeat as points regenerate.',
            tips: ['Card counting is the best repeatable money special among city jobs.'],
          },
        ],
      },
      {
        id: 'use-it',
        title: 'Phase 3 — Ride the specials',
        subtitle: 'Making the chair pay',
        steps: [
          {
            id: 'loop',
            title: 'Run the card-count loop',
            detail:
              '6 points/day means a count roughly every other day. Treat it as a dividend on your work stats — but remember it only works while employed at the Casino.',
          },
          {
            id: 'exit',
            title: 'Cash out when ready',
            detail:
              'No permanent passive here. Once Medical/Education/Law passives or company perks matter more than the wage, move on — you keep your rank if you return.',
          },
        ],
      },
    ],
    education: [
      { course: 'General Education track', why: 'Speeds the Int/Endurance climb to President.' },
      { course: 'Mathematics / Statistics', why: 'Flavor aside, the casino-games edge comes from discipline, not degrees — but the work stats help everywhere.' },
    ],
    merits: [
      { name: 'Casino-adjacent luck merits', why: 'If you actually play the games, luck merits compound your token income.' },
    ],
    companies: [
      { name: 'Any high-star company', why: 'Company perks outclass the Casino wage once your stats qualify you.' },
    ],
    dailyRoutine: ['Work shift', 'Collect tips / count cards when points allow', 'Spend your 75 free casino tokens if you enjoy the games', 'Spend nerve on crimes'],
    milestones: [
      { label: 'Gaming Consultant', detail: 'Daily token grabs online' },
      { label: 'Revenue Manager', detail: 'Cash steals + $1,000/day' },
      { label: 'Casino President', detail: 'Card counting — the house always wins' },
    ],
    transition:
      'A great wage machine, but nothing permanent. Leave for a big-3 passive or a company when your build demands it.',
  },

  {
    id: 'medical',
    name: 'Medical',
    category: 'city',
    icon: 'HeartPulse',
    accent: 'sky',
    tagline: 'The most valuable ladder in Torn: Brain Surgeon unlocks permanent revives.',
    role:
      'Medical is the city job every serious player finishes, because its top rank — Brain Surgeon — grants the Revive skill as a PERMANENT passive: revive a hospitalized player for 75 energy, forever, even after you leave the job. Revives save faction-mates in wars, build reputation, and can be sold as a service.',
    bestFor: 'Everyone eventually; especially future Revivers and war-faction medics.',
    difficulty: 4,
    income: 3,
    statFocus: ['Intelligence'],
    passive: { position: 'Brain Surgeon', label: 'Revive skill', detail: 'Revive players for 75 energy — permanent, even after leaving the job' },
    positions: [
      { name: 'Medical Student', req: { man: 0, int: 300, end: 0 }, pay: 400, points: 1, promo: 5, special: '—' },
      { name: 'Houseman', req: { man: 100, int: 600, end: 150 }, pay: 600, points: 2, promo: 10, special: 'Steal small first aid kit · 2 points' },
      { name: 'Senior Houseman', req: { man: 175, int: 1000, end: 275 }, pay: 950, points: 3, promo: 15, special: 'Steal first aid kit · 4 points' },
      { name: 'GP', req: { man: 300, int: 1500, end: 500 }, pay: 1500, points: 4, promo: 20, special: 'Steal morphine · 7 points' },
      { name: 'Consultant', req: { man: 600, int: 2500, end: 1000 }, pay: 3000, points: 5, promo: 25, special: '—' },
      { name: 'Surgeon', req: { man: 1300, int: 5000, end: 2000 }, pay: 5000, points: 6, promo: 30, special: '—' },
      { name: 'Brain Surgeon', req: { man: 2600, int: 10000, end: 4000 }, pay: 7000, points: 7, promo: null, special: 'Revive someone for 75 energy (PASSIVE — permanent)' },
    ],
    phases: [
      {
        id: 'enter',
        title: 'Phase 1 — Get into med school',
        subtitle: 'Early game · 300 Intelligence to enroll',
        steps: [
          {
            id: 'int-300',
            title: 'Reach 300 Intelligence',
            detail:
              'Medical Student only checks Intelligence. A short Grocer or Casino stint plus General Education courses will get you there quickly — work stats accrue daily and from every course completed.',
          },
          {
            id: 'interview',
            title: 'Pass the Medical interview',
            detail:
              'Three questions on medical themes. Fail one and you wait a day — so answer carefully. You enter with 5 starter job points.',
          },
          {
            id: 'kits',
            title: 'Start stealing medical supplies',
            detail:
              'Houseman grabs small first aid kits (2 points), Senior Houseman full kits (4), GP morphine (7). Morphine is genuinely valuable — sell surplus or keep it for war healing.',
          },
        ],
      },
      {
        id: 'climb',
        title: 'Phase 2 — The climb to Brain Surgeon',
        subtitle: 'The long game · 10,000 Intelligence at the top',
        steps: [
          {
            id: 'int-engine',
            title: 'Build an Intelligence engine',
            detail:
              '10,000 INT is one of the highest stat gates in the city system. Stack: daily work gains, every General Education course (boosts work stats from all courses), company trains, and the Education city job itself — Professor rank is a famous INT farm.',
            tips: ['Many players alternate Medical and Education ladders since both are INT-driven.'],
          },
          {
            id: 'promotions',
            title: 'Keep promoting as stats allow',
            detail:
              'Each rank pays substantially more ($400 → $7,000/day) and grants more daily points. The ladder itself is your wage while your real goal — the revive passive — matures.',
          },
          {
            id: 'brain',
            title: 'Reach Brain Surgeon',
            detail:
              '2,600 Man / 10,000 Int / 4,000 End. The moment you hold this rank, the Revive skill is permanently yours: 75 energy to pull a hospitalized player back onto their feet. It stays with you for the rest of your account\u2019s life, job or no job.',
          },
        ],
      },
      {
        id: 'use-it',
        title: 'Phase 3 — Practice the trade',
        subtitle: 'Turning 75 energy into value',
        steps: [
          {
            id: 'practice',
            title: 'Practice revives',
            detail:
              'Success improves with your revive skill level — it grows with attempts. Start with friends and faction-mates; failed revives still train the skill.',
          },
          {
            id: 'monetize',
            title: 'Monetize in war season',
            detail:
              'During ranked wars, downed fighters bleed minutes and money. Medics who revive on demand are paid per revive or retained by factions. Pair the skill with an energy-special company (e.g. Candle Shop\u2019s points-to-energy) to fuel more revives per day.',
          },
          {
            id: 'graduate',
            title: 'Graduate to the Reviver path',
            detail:
              'Once the passive is locked in, follow the dedicated Combat Medic career guide for the full service economy around revives.',
          },
        ],
      },
    ],
    education: [
      { course: 'General Education track', why: 'The entire Medical ladder is Intelligence-gated — this is the single best investment.' },
      { course: 'Biology (full track)', why: 'Medical item efficiency and theme synergy; finish IV Therapy first regardless.' },
      { course: 'Psychology', why: 'Flavor fit — and the crime boost helps your income while you grind INT.' },
    ],
    merits: [
      { name: 'Max energy increases', why: 'Every +energy is another revive you can perform.' },
      { name: 'Job-related merits', why: 'Anything that accelerates work stats shortens the 10k INT climb.' },
    ],
    companies: [
      { name: 'Candle Shop (7★)', why: '1 job point → 5 energy — directly converts work into revive fuel.' },
      { name: 'Any energy-special company', why: 'More energy = more revives = more service income.' },
    ],
    dailyRoutine: ['Work shift', 'Steal morphine/kits with spare points', 'Keep education slot full (INT gains)', 'Spend nerve on crimes'],
    milestones: [
      { label: 'Enrolled', detail: '300 INT · Medical Student' },
      { label: 'GP', detail: 'Morphine steals online' },
      { label: 'Brain Surgeon', detail: 'Revive skill — permanent account upgrade' },
    ],
    transition:
      'Finish this ladder no matter what else you plan. The revive passive is the single most valuable city-job reward in Torn.',
  },

  {
    id: 'education',
    name: 'Education',
    category: 'city',
    icon: 'GraduationCap',
    accent: 'amber',
    tagline: 'Climb the staff ladder to Principal and every future course is 10% faster.',
    role:
      'The Education city job is the game\u2019s best Intelligence ladder and pays a unique permanent reward: reaching Principal grants a passive 10% reduction in completion time for ALL future education courses. Since serious players run education for years, 10% compounds into weeks of saved time. Its specials also convert job points directly into work stats.',
    bestFor: 'Everyone (the passive is universal); INT-builders; future Medical climbers.',
    difficulty: 3,
    income: 3,
    statFocus: ['Intelligence'],
    passive: { position: 'Principal', label: '10% faster courses', detail: 'All future education courses complete 10% faster — permanent' },
    positions: [
      { name: 'Recess Supervisor', req: { man: 0, int: 500, end: 0 }, pay: 300, points: 1, promo: 5, special: '+100 Manual per 10 Education points' },
      { name: 'Substitute Teacher', req: { man: 300, int: 750, end: 500 }, pay: 400, points: 2, promo: 10, special: '—' },
      { name: 'Elementary Teacher', req: { man: 600, int: 1000, end: 700 }, pay: 600, points: 3, promo: 15, special: '+100 Endurance per 10 Education points' },
      { name: 'Secondary Teacher', req: { man: 1000, int: 1300, end: 1000 }, pay: 850, points: 4, promo: 20, special: '—' },
      { name: 'Professor', req: { man: 1500, int: 2000, end: 1500 }, pay: 1000, points: 5, promo: 25, special: '+100 Intelligence per 10 Education points' },
      { name: 'Vice Principal', req: { man: 1500, int: 3000, end: 1500 }, pay: 1750, points: 6, promo: 30, special: '—' },
      { name: 'Principal', req: { man: 1500, int: 5000, end: 1500 }, pay: 3250, points: 7, promo: null, special: '10% passive decrease in all future course times (PASSIVE)' },
    ],
    phases: [
      {
        id: 'enter',
        title: 'Phase 1 — Enroll in the school system',
        subtitle: 'Early game · 500 Intelligence to start',
        steps: [
          {
            id: 'int-500',
            title: 'Reach 500 Intelligence',
            detail:
              'Recess Supervisor checks INT only. A Grocer/Casino stint plus General Education courses gets you here fast. Note the neat trick: education courses themselves feed the INT that the Education job demands.',
          },
          {
            id: 'interview',
            title: 'Pass the Education interview',
            detail: 'Three questions about pedagogy and the school system. One wrong answer costs you a day.',
          },
          {
            id: 'specials',
            title: 'Bank work stats with specials',
            detail:
              'Every 10 education points can be converted: +100 Manual (Recess Supervisor), +100 Endurance (Elementary Teacher), +100 Intelligence (Professor). The Professor INT conversion is the famous engine for feeding the Medical ladder afterward.',
          },
        ],
      },
      {
        id: 'climb',
        title: 'Phase 2 — The road to Principal',
        subtitle: 'Mid game · 5,000 Intelligence at the top',
        steps: [
          {
            id: 'int-engine',
            title: 'Run the INT flywheel',
            detail:
              'Education job → INT gains → more course completions → more work stats (with General Education boosting) → higher ranks → better specials. It is the most self-reinforcing ladder in the city system.',
          },
          {
            id: 'principal',
            title: 'Make Principal',
            detail:
              '1,500 Man / 5,000 Int / 1,500 End. From this moment, every course you ever take finishes 10% faster — permanently, even if you leave the job. Over a multi-year education career that is weeks of saved time.',
          },
        ],
      },
      {
        id: 'use-it',
        title: 'Phase 3 — Spend the dividend',
        subtitle: 'What 10% is worth',
        steps: [
          {
            id: 'queue',
            title: 'Queue long courses and enjoy',
            detail:
              'The biggest savings come from the longest degree tracks (Sports Science, Business, Psychology). With the passive plus a 7★ Hair Salon company\u2019s education-time special, courses can fly.',
          },
          {
            id: 'pivot-medical',
            title: 'Pivot to Medical',
            detail:
              'The classic combo: Education ladder first (Principal passive + Professor INT bank), then walk into Medical with a fat Intelligence stat and claim the revive passive too.',
          },
        ],
      },
    ],
    education: [
      { course: 'General Education track', why: 'Boosts work stats from every course — the flywheel\u2019s flywheel.' },
      { course: 'Everything else', why: 'You are literally building the account that will run courses 10% faster.' },
    ],
    merits: [
      { name: 'Job/work-stat merits', why: 'Every work stat point shortens the 5,000 INT climb.' },
    ],
    companies: [
      { name: 'Hair Salon (7★)', why: 'Special reduces education course time per job point — stacks with the Principal passive.' },
    ],
    dailyRoutine: ['Work shift', 'Convert job points to work stats at thresholds', 'Keep the course slot filled', 'Spend nerve on crimes'],
    milestones: [
      { label: 'Hired', detail: '500 INT · Recess Supervisor' },
      { label: 'Professor', detail: 'INT conversion special online' },
      { label: 'Principal', detail: '10% permanent course reduction — account upgrade' },
    ],
    transition:
      'After Principal, carry your Intelligence into the Medical ladder and collect the revive passive. Two permanent perks, one career.',
  },

  {
    id: 'law',
    name: 'Law',
    category: 'city',
    icon: 'Scale',
    accent: 'indigo',
    tagline: 'The endgame city job: Federal Judge permanently boosts crime gains.',
    role:
      'Law is the toughest city ladder — its entry rank demands 1,500 Endurance — and it ends in Federal Judge, whose passive grants +5% crime experience and skill gain forever. For Crimes 2.0 specialists that is a permanent multiplier on literally thousands of future attempts. Along the way you can buy nerve, cash out law points, and bail friends out of jail.',
    bestFor: 'Crime specialists and endgame completionists chasing all three city passives.',
    difficulty: 5,
    income: 3,
    statFocus: ['Endurance', 'Intelligence'],
    passive: { position: 'Federal Judge', label: '+5% crime gains', detail: '+5% crime experience & skill gain — permanent' },
    positions: [
      { name: 'Law Student', req: { man: 0, int: 0, end: 1500 }, pay: 150, points: 1, promo: 5, special: 'Gain 3 nerve · 5 law points' },
      { name: 'Paralegal', req: { man: 1750, int: 2500, end: 5000 }, pay: 600, points: 2, promo: 10, special: 'Gain money · 100 law points' },
      { name: 'Probate Lawyer', req: { man: 2500, int: 5000, end: 7500 }, pay: 750, points: 3, promo: 15, special: '—' },
      { name: 'Trial Lawyer', req: { man: 3500, int: 6500, end: 7750 }, pay: 1500, points: 4, promo: 20, special: 'Bust someone out of jail · 15 law points' },
      { name: 'Circuit Court Judge', req: { man: 4000, int: 7250, end: 10000 }, pay: 2500, points: 5, promo: 25, special: '—' },
      { name: 'Federal Judge', req: { man: 6000, int: 9000, end: 15000 }, pay: 5000, points: 6, promo: null, special: '+5% crime exp & skill gain (PASSIVE — permanent)' },
    ],
    phases: [
      {
        id: 'enter',
        title: 'Phase 1 — Survive law school',
        subtitle: 'Mid game · 1,500 Endurance just to enroll',
        steps: [
          {
            id: 'end-1500',
            title: 'Build 1,500 Endurance first',
            detail:
              'Law Student checks Endurance only — unusual and steep. Endurance comes from Grocer work, the Education job\u2019s Elementary Teacher special, company trains and general work-stat growth. Do not rush here from day one; this is a second or third job.',
          },
          {
            id: 'interview',
            title: 'Pass the Law interview',
            detail: 'Three legal questions. The entry wage is comically low ($150) — you are here for the passive, not the paycheck.',
          },
          {
            id: 'nerve-special',
            title: 'Buy nerve with law points',
            detail:
              'Law Student converts 5 law points into 3 nerve. For a crime specialist this is a direct income conversion — extra nerve is extra crime attempts.',
          },
        ],
      },
      {
        id: 'climb',
        title: 'Phase 2 — The heaviest ladder in the city',
        subtitle: 'Long-term · 6,000 Man / 9,000 Int / 15,000 End',
        steps: [
          {
            id: 'all-stats',
            title: 'Grind all three work stats hard',
            detail:
              'Federal Judge demands huge numbers across the board. This ladder is typically a late-game project powered by years of education courses, company trains and daily work. Interleave with the Education and Medical ladders — INT overlaps heavily.',
          },
          {
            id: 'trial',
            title: 'Unlock jail busts at Trial Lawyer',
            detail:
              '15 law points busts a friend (or a bounty target\u2019s enemy) out of jail. Handy for factionmates and for your own crime partners.',
          },
          {
            id: 'federal',
            title: 'Reach Federal Judge',
            detail:
              'The gavel drops: +5% crime experience and skill gain, permanently. Crime skill is the whole endgame of Crimes 2.0 — this perk compounds over every future nerve point you will ever spend.',
          },
        ],
      },
      {
        id: 'use-it',
        title: 'Phase 3 — The crime multiplier',
        subtitle: 'Why judges make the best criminals',
        steps: [
          {
            id: 'grind',
            title: 'Point every nerve at your crime trees',
            detail:
              'With the passive, Psychology degree, nerve merits and an Amusement Park company (+10 max nerve, faster progression), your per-day crime efficiency is the strongest it can possibly be.',
          },
          {
            id: 'collect',
            title: 'Collect all three passives',
            detail:
              'Medical revive, Education course speed, Law crime gains — the big-3 are the closest thing Torn has to account-wide achievements. Many veterans treat collecting them as the game\u2019s true campaign.',
          },
        ],
      },
    ],
    education: [
      { course: 'General Education track', why: 'Every work-stat point matters on the heaviest ladder in the city.' },
      { course: 'Psychology (degree)', why: 'Crime XP boost stacks directly with the Federal Judge passive.' },
      { course: 'Computer Science (intro)', why: 'Speeds up Bootlegging-style crime grinding while you climb.' },
    ],
    merits: [
      { name: 'Nerve bar increases', why: 'The whole point of this job is more crime throughput.' },
      { name: 'Crime skill merits', why: 'Stacks multiplicatively with the judge passive for your chosen trees.' },
    ],
    companies: [
      { name: 'Amusement Park', why: '+10 max nerve, 2 nerve per job point and ~10% faster crime progression — the crime-specialist company.' },
    ],
    dailyRoutine: ['Work shift', 'Convert spare law points to nerve', 'Dump every nerve point into crime trees', 'Keep education slot full'],
    milestones: [
      { label: 'Enrolled', detail: '1,500 End · Law Student' },
      { label: 'Trial Lawyer', detail: 'Jail busts online' },
      { label: 'Federal Judge', detail: '+5% crime gains — permanent' },
    ],
    transition:
      'The last stop of the big-3 city passives. After this, player companies are the only ladder left.',
  },
]
