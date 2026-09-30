// Career paths — playstyle-oriented guides spanning Day 1 to endgame.

export const CAREERS = [
  {
    id: 'runner',
    name: 'International Runner',
    category: 'career',
    icon: 'Plane',
    accent: 'sky',
    tagline: 'The classic Level-15 money engine: fly out, buy plushies & flowers, fly home, sell.',
    role:
      'Running is Torn\u2019s most reliable income engine and the reason everyone races to Level 15. You fly to foreign countries, buy their unique plushies and flowers at local prices, and sell them to collectors back home for multiples of what you paid. With a Private Island airstrip, a suitcase and a good route list, daily runs turn into millions per week.',
    bestFor: 'New and mid-game players building their first real capital; anyone who wants steady, low-risk income.',
    difficulty: 2,
    income: 4,
    statFocus: ['Nerve (side crimes)', 'Any battle stats for mug protection'],
    usesRush: true,
    phases: [
      null, // RUSH_PHASE injected
      {
        id: 'setup',
        title: 'Phase 2 — The flying setup',
        subtitle: 'Weeks 2–6 · turning Level 15 into an income',
        steps: [
          {
            id: 'pi',
            title: 'Rent a Private Island with an airstrip',
            detail:
              'The single highest-leverage purchase of your early game. A PI with a landing strip makes flights ~30% faster and adds +10 to your travel item capacity (10 → 15) — that is +10 items of profit every single trip. Rent, don\u2019t buy, at this stage.',
            tips: ['Almost every Level-15 player rents a PI. The extra cargo pays the rent and then some.'],
          },
          {
            id: 'staff',
            title: 'Hire full staff — especially the pilot',
            detail:
              'Island staff include a pilot who accelerates your flights. Full staffing is cheap relative to what it returns; the pilot is the non-negotiable one.',
          },
          {
            id: 'suitcase',
            title: 'Buy a Large Suitcase',
            detail:
              'Suitcases permanently increase how many items you can carry back per trip. Buy the best one you can afford from the item market — extra slots are pure profit on every future flight you will ever take.',
          },
          {
            id: 'faction',
            title: 'Join a faction with the Excursion upgrade',
            detail:
              'Faction upgrades can add +10 travel capacity on top of your airstrip. Between PI, suitcase and Excursion, capacity climbs well past the base 10 — more cargo, more profit per hour in the air.',
          },
          {
            id: 'routes',
            title: 'Learn the routes (Baldr\u2019s flying list)',
            detail:
              'The community maintains a mapping of every country to its plushie and flower pair, with travel times and profit tables. Start with short flights (Mexico, Canada, Cayman Islands) and graduate to longer runs as your capacity grows.',
            tips: ['Long-haul destinations carry the scarcer items — check current market prices before committing hours.'],
          },
        ],
      },
      {
        id: 'loop',
        title: 'Phase 3 — The daily loop',
        subtitle: 'Months · the grind that funds everything else',
        steps: [
          {
            id: 'loop-run',
            title: 'Run the loop: fly → buy → return → sell',
            detail:
              'Fill your capacity with the destination\u2019s plushies/flowers, fly home, and sell. Collectors buy full sets at a premium, and museum trades reward complete collections — so track what you are missing.',
          },
          {
            id: 'bazaar',
            title: 'Open a bazaar to sell direct',
            detail:
              'Selling through your own bazaar captures the full retail price instead of dumping to middlemen. As volume grows, a bazaar plus bulk-sales relationships beats quick-selling every time.',
          },
          {
            id: 'buy-pi',
            title: 'Buy your Private Island outright',
            detail:
              'When your bank account comfortably exceeds the price, switch from renting to owning. Owning unlocks long-term property wealth and eventually the full island-upgrade economy.',
          },
          {
            id: 'scale',
            title: 'Scale into capital engines',
            detail:
              'Surplus run profits should not idle. Move them into dividend stocks, better properties, or a company — the run loop funds the portfolio, the portfolio eventually outgrows the loop.',
          },
        ],
      },
      {
        id: 'mastery',
        title: 'Phase 4 — Runner mastery',
        subtitle: 'Endgame · efficiency obsession',
        steps: [
          {
            id: 'timing',
            title: 'Time flights around energy and real life',
            detail:
              'Flights take real-world time. Serious runners schedule long-hauls overnight and short hops between gym sessions so no regeneration is wasted. Travel stock (items bought abroad) is planned a full day ahead.',
          },
          {
            id: 'diversify',
            title: 'Diversify: arbitrage everything abroad',
            detail:
              'Experienced runners don\u2019t only carry plushies — foreign item prices differ from domestic ones, and knowledge of spreads becomes its own skill. Watch for event-driven demand spikes.',
          },
          {
            id: 'handoff',
            title: 'Let the portfolio take over',
            detail:
              'The endgame of running is making running optional: stocks, properties and company income that exceed your flight profits. Until then, it remains the most dependable cash machine in Torn.',
          },
        ],
      },
    ],
    education: [
      { course: 'Biology → Intravenous Therapy', why: 'Cheap, strong healing while you live the travel lifestyle.' },
      { course: 'Business courses', why: 'You are a trader-in-training; future capital needs managing.' },
    ],
    merits: [
      { name: 'Max energy increases', why: 'Energy that isn\u2019t needed for fighting can still go to the gym while you fly.' },
    ],
    companies: [
      { name: 'Toy Shop / Flower Shop', why: '+5 abroad capacity for plushies / flowers — direct profit multipliers for runners.' },
      { name: 'Cruise Line Agency', why: 'Travel-themed perks that stack with the flying lifestyle.' },
    ],
    dailyRoutine: [
      'Launch the day\u2019s flight before anything else',
      'Gym/train while airborne',
      'Land, restock, list items in bazaar',
      'Spend nerve on crimes',
      'Check the route list for price shifts',
    ],
    milestones: [
      { label: 'First flight', detail: 'Level 15 + ticket in hand' },
      { label: 'Airstrip life', detail: 'PI rented, pilot hired, suitcase bought' },
      { label: 'Millionaire', detail: 'First $1M banked from runs' },
      { label: 'Portfolio runner', detail: 'Passive income rivals the loop' },
    ],
    transition: 'Runners naturally evolve into Traders and Company Directors — the capital has to go somewhere.',
  },

  {
    id: 'reviver',
    name: 'Combat Medic',
    category: 'career',
    icon: 'Cross',
    accent: 'rose',
    tagline: 'Sell lifelines: unlock the permanent revive skill and get paid to stand people up.',
    role:
      'The Combat Medic monetizes the Medical job\u2019s ultimate perk. After climbing to Brain Surgeon, you can revive any hospitalized player for 75 energy — forever. In ranked-war season, downed fighters lose chain time and money, and medics who respond in minutes are worth paying for. It is a service career: reputation, speed and energy capacity are your product.',
    bestFor: 'Patient grinders with high Intelligence; social players who like being essential.',
    difficulty: 4,
    income: 3,
    statFocus: ['Intelligence (work stats)', 'Energy capacity'],
    usesRush: true,
    phases: [
      null, // RUSH_PHASE injected
      {
        id: 'ladder',
        title: 'Phase 2 — The Medical ladder',
        subtitle: 'Months · the long Intelligence grind',
        steps: [
          {
            id: 'enroll',
            title: 'Enter Medical at 300 INT',
            detail:
              'Build Intelligence through a starter job, General Education courses and daily work. Then enroll as a Medical Student and work every day for points and promotions toward Brain Surgeon.',
          },
          {
            id: 'int-engine',
            title: 'Build the INT engine to 10,000',
            detail:
              'Brain Surgeon needs 2,600 Man / 10,000 Int / 4,000 End. Alternate the Education city job (Professor rank converts job points into +100 INT per 10) with Medical — the two ladders feed each other.',
          },
          {
            id: 'unlock',
            title: 'Unlock the revive passive',
            detail:
              'Hold the Brain Surgeon rank and the Revive skill is permanently bound to your account: 75 energy per revive, works even after you leave the job. This is the entire point of the career — everything else is setup.',
          },
        ],
      },
      {
        id: 'practice',
        title: 'Phase 3 — Learn the trade',
        subtitle: 'From party trick to profession',
        steps: [
          {
            id: 'skill',
            title: 'Level your revive skill',
            detail:
              'Revive success chance improves as you perform them — even failed attempts train the skill. Start with faction-mates and friends; keep cheap meds on hand to top up the patient afterward.',
          },
          {
            id: 'war-season',
            title: 'Work the ranked-war season',
            detail:
              'Wars create the demand spike: whole factions hospitalized, chains bleeding out, bounties on fast medical response. Be online, be fast, be reliable — medics build reputations one clutch revive at a time.',
          },
          {
            id: 'price',
            title: 'Set up your pricing & channels',
            detail:
              'Medics sell per-revive or on retainer. Advertise in faction channels and forums, keep a simple price list, and log your response times. Speed and uptime justify premium rates.',
          },
        ],
      },
      {
        id: 'optimize',
        title: 'Phase 4 — The energy economy',
        subtitle: 'Endgame · more revives per day than anyone',
        steps: [
          {
            id: 'energy-stack',
            title: 'Stack energy capacity',
            detail:
              'Every revive costs 75 energy. Energy merits, an energy-special company (Candle Shop\u2019s job-point conversion at 7★), and disciplined bar management multiply how many revives you can sell daily.',
          },
          {
            id: 'team',
            title: 'Join a war machine',
            detail:
              'Top war factions retain dedicated medics with retainers, bonuses and war loot shares. Your revive log becomes your resume.',
          },
          {
            id: 'combine',
            title: 'Combine with a second income',
            detail:
              'Revives are spiky income — busy in war season, quiet otherwise. Pair the medic trade with running or trading for a smooth annual curve.',
          },
        ],
      },
    ],
    education: [
      { course: 'General Education track', why: 'The 10,000 INT climb is the whole career — accelerate it constantly.' },
      { course: 'Biology (full track)', why: 'Medical item efficiency: patients heal more from the meds you hand out.' },
    ],
    merits: [
      { name: 'Max energy increases', why: 'Directly converts into extra paid revives per day.' },
      { name: 'Nerve bar increases', why: 'Keeps your crime side-income healthy while you wait for calls.' },
    ],
    companies: [
      { name: 'Candle Shop (7★)', why: '1 job point → 5 energy — the signature medic company.' },
      { name: 'Any high-star company', why: 'Between wars, company perks keep your account growing.' },
    ],
    dailyRoutine: [
      'Work shift / bank job points',
      'Spend nerve on crimes during quiet hours',
      'Keep energy banked below cap during war alerts',
      'Respond to revive calls fast — you are the product',
    ],
    milestones: [
      { label: 'Enrolled', detail: 'Medical Student at 300 INT' },
      { label: 'Brain Surgeon', detail: 'Revive skill permanently unlocked' },
      { label: 'First paid revive', detail: 'The service is open for business' },
      { label: 'Retained medic', detail: 'War faction pays you to exist' },
    ],
    transition: 'The passive never expires — many medics retire into directing or trading and still sell revives on the side.',
  },

  {
    id: 'fighter',
    name: 'War Machine',
    category: 'career',
    icon: 'Swords',
    accent: 'red',
    tagline: 'Stats are your real level: build a battle monster and fight for faction glory.',
    role:
      'The War Machine pours everything into battle stats and faction warfare. Past Level 15, your level barely matters — your Strength, Defense, Speed and Dexterity are your true identity. Fighters live in the gym, spike their happy with housing and chemistry, then cash those stats in during chains and ranked wars where respect and territory (and loot) are won.',
    bestFor: 'Players who love PvP, faction camaraderie, and long-term stat grinds.',
    difficulty: 5,
    income: 2,
    statFocus: ['Strength', 'Defense', 'Speed', 'Dexterity'],
    usesRush: true,
    phases: [
      null, // RUSH_PHASE injected
      {
        id: 'engine',
        title: 'Phase 2 — Build the stat engine',
        subtitle: 'Months · happy, education, and the gym',
        steps: [
          {
            id: 'housing',
            title: 'Climb the happy-housing ladder',
            detail:
              'Gym gains scale with your current happy. Rent the happiest property you can sensibly afford and keep upgrading: modest house → Ranch/Mansion → Loft → Villa → eventually a Private Island. Every point of happy makes every training session stronger.',
          },
          {
            id: 'sports',
            title: 'Finish Sports Science education',
            detail:
              'The full Sports Science track gives a permanent boost to all gym gains — it compounds over literally every future training session. This is the fighter\u2019s single best education investment.',
          },
          {
            id: 'train-plan',
            title: 'Train with a plan, not a vibe',
            detail:
              'Decide your build (balanced vs. one-stat-focused) and your faction\u2019s needs, and train accordingly. Watch the diminishing-returns curve on each stat; spreading or specializing is a real strategic choice.',
            tips: ['Temporary enhancers before big sessions can meaningfully boost gains — price them out.'],
          },
          {
            id: 'weapons',
            title: 'Pick your weapons & train weapon XP',
            detail:
              'Combat Training education unlocks weapon experience. Weapons level with use, and a leveled primary is a permanent edge. Match weapon type to your stats, not the other way around.',
          },
        ],
      },
      {
        id: 'warfare',
        title: 'Phase 3 — Enter faction warfare',
        subtitle: 'Chains, ranked wars & territory',
        steps: [
          {
            id: 'join-fac',
            title: 'Join a warring faction',
            detail:
              'Pick one that wars at your intensity level. Chains generate bonuses for everyone, and your hits contribute respect — the faction\u2019s currency for upgrades (including your runner\u2019s +10 capacity and war perks).',
          },
          {
            id: 'finish',
            title: 'Learn finish types: Leave vs. Mug vs. Hospitalize',
            detail:
              'Leaves farm XP efficiently, Mugs grab cash from wallet-heavy targets, Hospitalize removes enemies from the board longer. Choosing correctly per situation is core fighter skill.',
          },
          {
            id: 'chain-discipline',
            title: 'Master chain discipline',
            detail:
              'Chains need timed hits — missing a window breaks the multiplier for everyone. Be reliable, hit your slot, and you will never lack a faction.',
          },
          {
            id: 'ranked',
            title: 'Fight ranked wars',
            detail:
              'Ranked wars are scheduled faction vs. faction battles with prep, war hits and loot shares for winners. This is where stat investments pay out in respect, prizes and reputation.',
          },
        ],
      },
      {
        id: 'endgame',
        title: 'Phase 4 — The chemical endgame',
        subtitle: 'Xanax, jumps & rehab cycles',
        steps: [
          {
            id: 'xanax',
            title: 'Adopt the 3x-Xanax routine',
            detail:
              'Endgame fighters commonly take up to three Xanax a day (+250 energy each) to fund enormous training and war activity. Addiction builds and must be managed — that is what Swiss rehab is for.',
          },
          {
            id: 'jumps',
            title: 'Run happy jumps',
            detail:
              'Spiking happy (e.g. with Ecstasy) before heavy gym sessions multiplies gains. Serious players plan "jump" cycles around their happy cap — the famous Private Island 5025 happy ceiling.',
            tips: ['Overdosing has real downsides. Study the mechanics before chain-drinking.'],
          },
          {
            id: 'rehab',
            title: 'Cycle through rehab in Switzerland',
            detail:
              'When addiction starts eating your happy (and thus your gym gains), fly to the Swiss clinic and reset. The flight is exactly the kind of downtime a runner-style errand fills.',
          },
          {
            id: 'legend',
            title: 'Become faction infrastructure',
            detail:
              'The endgame fighter is a war asset: spied targets, maximized chains, loot shares, maybe faction leadership — and a name that shows up in the enemy\u2019s threat board.',
          },
        ],
      },
    ],
    education: [
      { course: 'Sports Science (full track)', why: 'Permanent gym-gain boost — the fighter\u2019s foundation.' },
      { course: 'Combat Training', why: 'Unlocks weapon XP so your gear scales with you.' },
      { course: 'Biology → IV Therapy', why: 'Blood bags are the fighter\u2019s healing economy.' },
    ],
    merits: [
      { name: 'Battle stat merits', why: 'Direct stat multipliers for war.' },
      { name: 'Max energy increases', why: 'More energy = more training and more war hits.' },
    ],
    companies: [
      { name: 'Combat-perk companies', why: 'Companies like Private Security or Clothing Store (75% mug reduction at 7★) protect war profits.' },
      { name: 'Candle Shop (7★)', why: 'Energy from job points feeds the training grind.' },
    ],
    dailyRoutine: [
      'Train energy into the gym every single day',
      'Keep happy high before big sessions',
      'Work faction chain slots religiously',
      'Maintain weapon XP on your primary',
      'Watch war schedules',
    ],
    milestones: [
      { label: 'First 100k total stats', detail: 'The gym habit is real now' },
      { label: 'Ranked war veteran', detail: 'Loot share earned' },
      { label: 'Million-stat club', detail: 'Respect-tier account' },
      { label: 'War asset', detail: 'Faction builds plans around you' },
    ],
    transition: 'Fighters age into faction leadership, bounty hunting, or relax into medics/runners once the war itch is scratched.',
  },

  {
    id: 'criminal',
    name: 'Crime Specialist',
    category: 'career',
    icon: 'VenetianMask',
    accent: 'violet',
    tagline: 'Crimes 2.0 mastery: nerve in, skill up, fortunes out of safes and forgeries.',
    role:
      'The Crime Specialist treats Crimes 2.0 as a long skill-building campaign. Every crime tree — Shoplifting, Pickpocketing, Burglary, Robbery, Bootlegging, Forgery, Card Skimming, Hustling, Cracking, Disposal, Arson — levels independently through hundreds and thousands of attempts. Maxed trees print money and rare loot, and the whole career scales with one resource above all: nerve.',
    bestFor: 'Methodical grinders who love mastery curves and long-term planning.',
    difficulty: 3,
    income: 4,
    statFocus: ['Nerve capacity', 'Crime skill'],
    usesRush: true,
    phases: [
      null, // RUSH_PHASE injected
      {
        id: 'trees',
        title: 'Phase 2 — Pick your trees',
        subtitle: 'Weeks 1–8 · understanding Crimes 2.0',
        steps: [
          {
            id: 'learn',
            title: 'Learn how skill progression works',
            detail:
              'Each subcrime has a success chance based on your skill vs. its difficulty, and skill rises with attempts (failures teach too). Different subcrimes within a tree grant skill at different rates per nerve — efficient grinding is a studied art, and community guides (like the Criminal Primer) map it out.',
          },
          {
            id: 'early-trees',
            title: 'Grind Shoplifting → Pickpocketing first',
            detail:
              'These are the standard early trees. Pickpocketing takes roughly 10,000 nerve to max (CS100), with targets regenerating every few seconds — fast, addictive, and decent cash. Use quality-of-life scripts to spot the easiest marks.',
          },
          {
            id: 'specialize',
            title: 'Specialize for the payout trees',
            detail:
              'The big grinds: Burglary (~17,400 nerve, needs a toolkit of jemmy, lockpicks, rope), Forgery (~24,000 nerve, printers and materials, up to 10 simultaneous projects), Card Skimming (slow but passive-ish — set skimmers and return), Cracking (safes), Arson (warehouse work). Each has enhancers that boost success.',
          },
          {
            id: 'enhancers',
            title: 'Buy the right enhancers',
            detail:
              'Cut-Throat Razor (Pickpocketing), Flashlight (Burglary), Magnifying Glass (Forgery), Duct Tape & skimmers (Card Skimming). They materially raise success rates — keep them stocked.',
          },
        ],
      },
      {
        id: 'nerve',
        title: 'Phase 3 — Build the nerve engine',
        subtitle: 'Months · more nerve than anyone',
        steps: [
          {
            id: 'merits-nerve',
            title: 'Invest merits in your nerve bar',
            detail:
              'Every nerve-bar merit permanently raises max nerve — the crime specialist\u2019s defining investment. More nerve banked means more attempts per day and faster tree progression.',
          },
          {
            id: 'amusement',
            title: 'Work at an Amusement Park company',
            detail:
              'The crime-specialist company: around 2 nerve per job point, +10 max nerve at modest star ratings, and a crime-progression bonus that reduces total attempts needed to max trees.',
          },
          {
            id: 'law-passive',
            title: 'Climb the Law ladder to Federal Judge',
            detail:
              'The +5% crime XP & skill passive compounds over every future attempt. Combined with the Psychology degree it is the strongest skill-gain stack in the game. It is a heavy ladder — treat it as a multi-year project.',
          },
          {
            id: 'psych',
            title: 'Finish the Psychology degree',
            detail: 'Permanent crime XP and skill boost — stacks with the judge passive and company bonuses.',
          },
        ],
      },
      {
        id: 'mastery',
        title: 'Phase 4 — Master criminal',
        subtitle: 'Endgame · CS100 boards & crime medals',
        steps: [
          {
            id: 'cs100',
            title: 'Max your chosen trees (CS100)',
            detail:
              'With a full nerve stack you can sustain thousands of nerve a week into your trees. Maxed trees unlock the best payouts and rare unique outcomes (like pickpocketing a police badge for a merit).',
          },
          {
            id: 'medals',
            title: 'Chase crime medals & merits',
            detail:
              'Crime milestones award medals and merits that feed back into nerve and success. Robbing every kind of place, 10 simultaneous forgery projects, unique outcomes — the completionist layer of crime.',
          },
          {
            id: 'fence',
            title: 'Industrialize your loot',
            detail:
              'Burglary and robbery loot, forged goods and skimmed cards need selling: bazaar layout, bulk buyers, and item knowledge turn stolen goods into a portfolio.',
          },
        ],
      },
    ],
    education: [
      { course: 'Psychology (degree)', why: 'Permanent crime XP/skill boost — core to this build.' },
      { course: 'Computer Science (intro)', why: 'Reportedly speeds Bootlegging progression notably.' },
      { course: 'General Education track', why: 'Feeds the Law ladder\u2019s heavy work-stat requirements.' },
    ],
    merits: [
      { name: 'Nerve bar increases', why: 'THE crime merit — permanent attempt capacity.' },
      { name: 'Crime skill merits', why: 'Success-rate boosts for your chosen trees.' },
    ],
    companies: [
      { name: 'Amusement Park', why: 'Nerve per job point, +10 max nerve, faster crime progression — made for this career.' },
    ],
    dailyRoutine: [
      'Spend every single nerve point, every day',
      'Work the Amusement Park shift for nerve points',
      'Restock enhancers before they run dry',
      'Check skimmer/forgery projects',
      'Keep education slot full',
    ],
    milestones: [
      { label: 'First tree at CS50', detail: 'The curve makes sense now' },
      { label: 'Pickpocketing CS100', detail: '~10,000 nerve well spent' },
      { label: 'Federal Judge', detail: '+5% crime gains, permanent' },
      { label: 'Master criminal', detail: 'Multiple CS100 trees, medals on the wall' },
    ],
    transition: 'Criminal fortunes fund the same endgames as running: stocks, companies, properties — with better stories.',
  },

  {
    id: 'trader',
    name: 'Market Shark',
    category: 'career',
    icon: 'TrendingUp',
    accent: 'emerald',
    tagline: 'Buy low, sell high: points, items, stocks — turn capital into more capital.',
    role:
      'The Market Shark plays Torn\u2019s economy instead of its streets. You start by flipping liquid goods (points, plushies, consumables) between the bazaar and item markets, then graduate to dividend stocks and event-driven arbitrage. No stat gates, no job ladders — your limits are capital, discipline and market knowledge.',
    bestFor: 'Numbers-brained players; runners and criminals with capital looking for their next act.',
    difficulty: 4,
    income: 5,
    statFocus: ['Capital (the real stat)', 'Intelligence for flavor'],
    usesRush: false,
    phases: [
      {
        id: 'capital',
        title: 'Phase 1 — Build seed capital',
        subtitle: 'Weeks 1–10 · nothing to trade without money',
        steps: [
          {
            id: 'rush',
            title: 'Grind the Level 15 rush',
            detail:
              'Follow the standard foundation: starter job, education, crimes, leveling targets. You are not doing this for the fighting — you are doing it because flying unlocks the item flows you will soon be trading.',
          },
          {
            id: 'run-seed',
            title: 'Fund yourself with runs & crimes',
            detail:
              'Plushie/flower runs and steady nerve-crimes are the classic seed-capital engines. Treat every dollar as inventory: your first million comes from labor, your tenth comes from arbitrage.',
          },
          {
            id: 'watch',
            title: 'Watch markets daily before spending a dime',
            detail:
              'Open the item market, bazaars and the points market every day and just watch. Note spreads, volumes and daily rhythms. Market feel is a real skill and it is free to train.',
          },
        ],
      },
      {
        id: 'flip',
        title: 'Phase 2 — Learn to flip',
        subtitle: 'Months 2–6 · small edges, repeated forever',
        steps: [
          {
            id: 'points',
            title: 'Start with points — the most liquid market',
            detail:
              'Points trade constantly with visible buy/sell spreads. Small flips teach you everything: fees, timing, patience, and the emotional discipline that separates traders from gamblers.',
          },
          {
            id: 'bazaar',
            title: 'Run a bazaar',
            detail:
              'Your bazaar is your storefront. Buy underpriced goods from impatient sellers, list at fair market prices, and let volume do the work. Reputation for fair prices brings repeat buyers.',
          },
          {
            id: 'niches',
            title: 'Specialize in a niche you know',
            detail:
              'Runners know plushies. Fighters know weapons and meds. Criminals know loot and enhancers. Trade the market you understand better than the generalist sitting across from you.',
          },
          {
            id: 'events',
            title: 'Play events, not emergencies',
            detail:
              'Holidays and updates swing prices violently. Buy the rumor, sell the news — and never hold a leveraged position through a patch you haven\u2019t read.',
          },
        ],
      },
      {
        id: 'stocks',
        title: 'Phase 3 — The dividend era',
        subtitle: 'Mid game · stocks & passive income',
        steps: [
          {
            id: 'learn-stocks',
            title: 'Learn the stock system',
            detail:
              'Buy shares in the stock exchange; each stock pays dividends when its price crosses certain thresholds. Study the dividend tiers and price histories before committing serious capital.',
          },
          {
            id: 'blocks',
            title: 'Build stock blocks',
            detail:
              'A "block" is a large holding in a dividend-paying stock. Blocks turn trading profits into passive income — the goal is enough blocks that daily dividends exceed your living costs.',
          },
          {
            id: 'abroad-arb',
            title: 'Combine with travel arbitrage',
            detail:
              'Foreign item prices differ from domestic ones. As a former runner you already have the airstrip and the routes — carry the spread, not just the plushies.',
          },
        ],
      },
      {
        id: 'empire',
        title: 'Phase 4 — Portfolio empire',
        subtitle: 'Endgame · money makes money',
        steps: [
          {
            id: 'diversify',
            title: 'Diversify across every asset class',
            detail:
              'Stocks, properties, rare items, company ownership. A real portfolio is boring on purpose: no single crash, patch or mugging can hurt you badly.',
          },
          {
            id: 'institutions',
            title: 'Deal in size',
            detail:
              'Big traders move in bulk trades and private deals. Your reputation for clean, fast settlement is your license to deal at all.',
          },
          {
            id: 'exit-myth',
            title: 'There is no exit — only compounding',
            detail:
              'Market sharks retire into directing companies and funding friends. The portfolio outlives the hustle.',
          },
        ],
      },
    ],
    education: [
      { course: 'Business courses / degree', why: 'The flavor is real: business education supports the directing & trading endgame.' },
      { course: 'General Education track', why: 'Work stats keep company and job options open.' },
    ],
    merits: [
      { name: 'Interest/banking-related merits', why: 'Every marginal gain on idle cash compounds.' },
      { name: 'Mug-protection planning', why: 'Traders carry wealth — think about what you bank vs. hold.' },
    ],
    companies: [
      { name: 'Property Broker', why: 'Trader-themed perks; property discounts at high stars.' },
      { name: 'Any high-star company', why: 'Park your worker where perks are best — trading is your real job.' },
    ],
    dailyRoutine: [
      'Morning: scan markets & spreads with coffee',
      'Update bazaar listings',
      'Collect dividends & sweep cash to bank',
      'Evening: position review — anything urgent?',
      'Never stop watching patch notes',
    ],
    milestones: [
      { label: 'First flip profit', detail: 'You bought the dip and it worked' },
      { label: 'Bazaar regulars', detail: 'Buyers who come back' },
      { label: 'First stock block', detail: 'Dividends arriving without you' },
      { label: 'Living on passive', detail: 'Dividends + rent > expenses' },
    ],
    transition: 'Capital becomes companies and properties — many sharks end their arc as Directors.',
  },

  {
    id: 'director',
    name: 'Company Director',
    category: 'career',
    icon: 'Briefcase',
    accent: 'amber',
    tagline: 'Build the org chart: hire players, chase stars, and sell the perks yourself.',
    role:
      'Directors own and run the player companies everyone else works at. You buy a company, hire real players, keep them effective, and climb the star ratings (1★–10★) that unlock the specials employees are there for. Done well, a company generates income, hands you the best perks in the game, and becomes a sellable asset — companies resell for roughly 75% of upgrade cost plus a share of lifetime income.',
    bestFor: 'Veterans with capital and management energy; social organizers.',
    difficulty: 5,
    income: 4,
    statFocus: ['Capital', 'Intelligence (Business education)'],
    usesRush: false,
    phases: [
      {
        id: 'apprentice',
        title: 'Phase 1 — Apprentice first',
        subtitle: 'Early-mid game · learn the machine from inside',
        steps: [
          {
            id: 'work-companies',
            title: 'Work inside several companies first',
            detail:
              'Before directing, be directed. Sample different company types, watch how good directors run trains, ads, activity checks and star pushes. Notice what makes employees stay — you will be doing all of it soon.',
          },
          {
            id: 'stack-passives',
            title: 'Bank your city-job passives first',
            detail:
              'Classic sequencing: finish (or bank progress on) Medical/Education/Law passives before you commit to company life, then never look back. The big-3 are permanent; company perks are yours only while employed.',
          },
          {
            id: 'capital',
            title: 'Accumulate starting capital',
            detail:
              'Company purchase prices scale with type, and upgrades to 10★ are a serious multi-stage investment. Runners and traders make natural pre-directors — the run loop and market profits fund the dream.',
          },
        ],
      },
      {
        id: 'found',
        title: 'Phase 2 — Found the company',
        subtitle: 'The leap · from worker to owner',
        steps: [
          {
            id: 'choose-type',
            title: 'Choose your company type deliberately',
            detail:
              'The type determines positions, stat gains and — most importantly — star-rating specials. Sweet Shop (energy cans), Candle Shop (energy from job points), Toy/Flower Shop (+5 abroad capacity for runners), Amusement Park (nerve for criminals), Property Broker (trader perks) are all in demand. Study the company list before spending a dollar.',
          },
          {
            id: 'buy',
            title: 'Buy the company & post the listing',
            detail:
              'Acquire through the company market or from a selling director, then advertise openings — the in-game newspaper and job listings are the classic channels. Your first ten hires set the culture.',
          },
          {
            id: 'hire',
            title: 'Hire active daily workers',
            detail:
              'Company effectiveness is driven by employees actually showing up. One active worker beats three ghosts. Check logins, set expectations, and train people — company trains raise your staff\u2019s work stats, which raises effectiveness, which raises stars.',
          },
        ],
      },
      {
        id: 'stars',
        title: 'Phase 3 — Chase the stars',
        subtitle: 'The upgrade grind · 1★ → 7★ → 10★',
        steps: [
          {
            id: 'effectiveness',
            title: 'Manage the effectiveness formula',
            detail:
              'Stars rise from company effectiveness: staff activity, their work stats, popularity and ads. Run ad campaigns, keep positions filled with qualified workers, and use trains generously — effectiveness is the metric everything else serves.',
          },
          {
            id: '7star',
            title: 'Reach 7★ — the perk threshold',
            detail:
              'The famous company specials (Candle Shop\u2019s energy conversion, Hair Salon\u2019s education reduction, Clothing Store\u2019s mug reduction) come online around 7★. This is when your company becomes a perk engine people compete to join.',
          },
          {
            id: '10star',
            title: 'Push to 10★',
            detail:
              'The 10★ specials are the strongest company perks in Torn — the endgame of directing. Business education, deep pockets and a stable veteran roster are the price of admission.',
          },
        ],
      },
      {
        id: 'conglomerate',
        title: 'Phase 4 — Legacy & exit',
        subtitle: 'Endgame · the asset',
        steps: [
          {
            id: 'institution',
            title: 'Make it an institution',
            detail:
              'A 10★ company with a waiting list and veteran staff runs (mostly) on its own. Your job becomes succession planning, culture and the occasional crisis.',
          },
          {
            id: 'sell',
            title: 'Know the exit math',
            detail:
              'Companies sell to other players at negotiated prices; as a rule of thumb the game\u2019s buyback sits near 75% of upgrade cost plus 5% of lifetime income. Never dump to the system what a player will buy — check both numbers first.',
          },
          {
            id: 'reinvest',
            title: 'Reinvest into the next machine',
            detail:
              'Directors who exit tend to either upgrade into bigger types or fund the next generation of owners. The org-chart itch rarely dies.',
          },
        ],
      },
    ],
    education: [
      { course: 'Business courses / degree', why: 'The directing support track — widely recommended for would-be owners.' },
      { course: 'General Education track', why: 'Trains your roster better: work-stat gains flow to everything.' },
    ],
    merits: [
      { name: 'Work-stat merits', why: 'A director with strong work stats fills any gap in the roster personally.' },
    ],
    companies: [
      { name: 'This IS the career', why: 'You are building the thing other guides tell people to join.' },
    ],
    dailyRoutine: [
      'Check employee activity & fill gaps',
      'Run trains on active staff',
      'Manage ads & popularity',
      'Watch effectiveness before/after upgrades',
      'Payroll & treasury review',
    ],
    milestones: [
      { label: 'Founder', detail: 'Your name on the door' },
      { label: 'Full roster', detail: 'Every position staffed with actives' },
      { label: '7★ perks live', detail: 'The company people want to join' },
      { label: '10★', detail: 'Top-tier specials — directing\u2019s summit' },
    ],
    transition: 'Exit via sale at a fair multiple, or stay and run the family business forever.',
  },
]
