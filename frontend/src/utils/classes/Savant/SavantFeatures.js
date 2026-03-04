const SavantFeatures = {
  1: [
    {
      name: "Adroit Analysis",
      description: `
      <p>You can focus your mind to analyze your foe. Beginning at 1st level, you can use a bonus action to analyze one creature you can see within 60 feet, designating it as your Focus. While it is your Focus, you gain the following benefits against it:</p>
      <ul>
        <li>When you hit it with an attack, or if you observe it for 1 minute, you learn one of the following characteristics of your choice: its highest ability score, lowest ability score, Armor Class, speed, creature type, or one special sense.</li>
        <li>You can use your Intelligence, instead of your Strength or Dexterity, for weapon attack and damage rolls against it.</li>
        <li>Once per turn when you hit it with an attack, you deal 1d6 bonus damage. The bonus increases as you gain levels, to match the Intellect Die column of the Savant table above.</li>
        <li>Any attacks it makes against you have disadvantage.</li>
      </ul>
      <p>It remains your Focus until you choose to end this effect (no action required), or it is hidden from you, if you designate another creature as your Focus, or if you are incapacitated.</p>
      <p>While you have a Focus, you cannot cast or concentrate on spells or use other features that require your concentration.</p>
      `
    },
    {
      name: "Predictive Defense",
      description: `
      <p>Your analytical style of fighting allows you to better anticipate and dodge attacks. Beginning at 1st level, when you calculate your Armor Class in light or medium armor, or when you are unarmored, you can use Intelligence in place of Dexterity.</p>
      `
    },
    {
      name: "Scholarly Pursuits",
      description: `
      <p>Never satisfied with your current state you are always looking to expand your educational horizons. At 1st level, you master one Scholarly Pursuit.</p>
      <p>You master one additional Scholarly Pursuit of your choice when you reach 4th, 7th, 13th, and 18th level in this class.</p>
      `
    }
  ],
  2: [
    {
      name: "Genius Intellect",
      description: `
      <p>Your mind is capable of wondrous bursts of insight, fortitude, and inspiration. At 2nd level, you gain the following benefits:</p>
      <h4>Intellect Die</h4>
      <p>These increased analytical abilities are represented by your Intellect Die, which begins as a d6. You start knowing three such features that make use of this Intellect Die: Calculated Flourish, Potent Observation, and Wondrous Insight.</p>
      <p>At certain levels, your Intellect Die increases in size, as shown in the Intellect Die column on the Savant table.</p>
      <p>If one of your Intellect Die features requires a creature to make a saving throw, the save DC is calculated as follows:</p>
      <p><strong>Intellect save DC</strong> = 8 + your proficiency bonus + your Intelligence modifier</p>
      <h4>Calculated Flourish</h4>
      <p>When a creature you can see targets you with a melee attack, you can use a reaction to add one roll of your Intellect Die to your Armor Class against that attack. If this Flourish causes the attack to miss, you can move up to 10 feet as part of the same reaction without provoking opportunity attacks.</p>
      <h4>Potent Observation</h4>
      <p>When another creature that can hear you hits your Focus with an attack, you can use your reaction to grant it a bonus to its damage roll equal to one roll of your Intellect Die.</p>
      <h4>Wondrous Insight</h4>
      <p>When another creature that can hear you makes an ability check using a skill or tool that you are proficient in, you can use your reaction to grant it a bonus to its roll equal to one roll of your Intellect Die. You can do so after it rolls the d20.</p>
      `
    },
    {
      name: "Sharp Mind",
      description: `
        <p>Your ability to analyze your surroundings is unrivaled. Also at 2nd level, you can use a bonus action on your turn to take the Help or Search actions, or make an Intelligence ability check to recall information about a creature or object you can see.</p>
        <p>Moreover, you can use the Help action to aid a creature in attacking your Focus, so long as you are within 5 feet of the attacker, even when you are not within 5 feet of the target.</p>
        `
    }
  ],
  3: [
    {
      name: "Academic Discipline",
      description: `
      <p>At 3rd level, choose an Academic Discipline to best represent your Savant's studies.</p>
      <p>Your Academic Discipline grants you features at 3rd level, and again when you reach 6th, 10th, and finally 15th level.</p>
      `
    }
  ],
  4: [
    {
      name: "Ability Score Improvement",
      description: `
      <p>At 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or two different ability scores of your choice by 1. As normal, you cannot increase an ability score above 20 using this feature.</p>
      `
    }
  ],
  5: [
    {
      name: "Peerless Insights",
      description: `
      <p>Your mind and its capabilities are truly wondrous. Beginning at 5th level, if another creature that can hear you is forced to make a saving throw, you can use your reaction to grant it a bonus to its roll equal to one roll of your Intellect Die.</p>
      <p>Moreover, whenever you make an Intelligence, Wisdom, or Charisma saving throw you can add one roll of your Intellect Die to your saving throw, so long as you are not incapacitated.</p>
      `
    },
    {
      name: "Swift Reflexes",
      description: `
      <p>The speed that you observe and react to your surroundings is incredible. Beginning at 5th level, you have a second reaction you can take each round, but only one reaction per trigger.</p>
      <p>At certain Savant levels you gain additional reactions, you gain a third reaction at 13th level and a fourth at 18th level.</p>
      `
    }
  ],
  6: [
    {
      name: "Discipline Feature",
      description: " ",
      tableOnly: true
    }
  ],
  7: [
    {
      name: "Keen Awareness",
      description: `
      <p>You are always prepared for danger. Beginning at 7th level, so long as you aren't incapacitated you cannot be surprised and you add your Intelligence modifier to your initiative rolls.</p>
      <p>Also, when you roll initiative you can use Adroit Analysis to designate a creature you can see within range as your Focus.</p>
      `
    }
  ],
  8: [
    {
      name: "Ability Score Improvement",
      description: " ",
      tableOnly: true
    }
  ],
  9: [
    {
      name: "Predictive Expert",
      description: `
      <p>You are seemingly always one step ahead of your chosen foes. Starting at 9th level, when your Focus forces you to make an ability check or saving throw, you have advantage on your roll.</p>
      `
    }
  ],
  10: [
    {
      name: "Discipline Feature",
      description: " ",
      tableOnly: true
    }
  ],
  11: [
    {
      name: "Unrivaled Genius",
      description: `
      <p>Your intellect has risen to near-supernatural heights. At 11th level, your Genius Intellect features gain the benefits below:</p>
      <h4>Calculated Flourish</h4>
      <p>If your reaction causes the attack to miss, you can make one melee attack against your attacker as part of your reaction.</p>
      <h4>Potent Observation</h4>
      <p>You can use this reaction whenever another creature that can hear you attacks a creature that you can see. Moreover, if you use this reaction when another creature attacks your Focus, you can add two rolls of your Intellect Die to its damage roll.</p>
      <h4>Wondrous Insight</h4>
      <p>When you use Wondrous Insight on another creature's ability check you roll your Intellect Die twice and use the higher roll.</p>
      `
    }
  ],
  12: [
    {
      name: "Ability Score Improvement",
      description: ``,
      tableOnly: true
    }
  ],
  13: [
    {
      name: "Swift Reflexes (3)",
      description: ``,
      tableOnly: true
    }
  ],
  14: [
    {
      name: "Unyielding Will",
      description: `
      <p>At 14th level, you gain proficiency in Charisma saving throws, and you have advantage on any saving throw you are forced to make to resist the charmed and frightened conditions.</p>
      `
    }
  ],
  15: [
    {
      name: "Discipline Feature",
      description: " ",
      tableOnly: true
    }
  ],
  16: [
    {
      name: "Ability Score Improvement",
      description: " ",
      tableOnly: true
    }
  ],
  17: [
    {
      name: "Flawless Analysis",
      description: `
      <p>Beginning at 17th level, you can use your action to flawlessly predict your Focus's next move and alert your allies. Until the start of your next turn, your Focus has disadvantage on every ability check, attack roll, and saving throw. Also, creatures of your choice that can hear you have advantage on any saving throw your Focus forces them to make until your next turn.</p>
      <p>Once you use this feature you must finish a short or long rest before you can use it again.</p>
      `
    }
  ],
  18: [
    {
      name: "Swift Reflexes (4)",
      description: ``,
      tableOnly: true
    }
  ],
  19: [
    {
      name: "Ability Score Improvement",
      description: " ",
      tableOnly: true
    }
  ],
  20: [
    {
      name: "Incomparable Intellect",
      description: `
      <p>At 20th level, you realize your true potential. Your Intelligence score increases by 4, up to a maximum of 24. Also, if you roll an Intellect Die and roll lower than your Intelligence modifier, you can replace the roll with your Intelligence modifier.</p>
      `
    }
  ]
};

export default SavantFeatures;