const WarlordFeatures = {
  1: [
    {
      name: "Leadership Style",
      description: `
      <p>At 1st level, you choose your Leadership Style. It determines your Leadership Ability Score and grants additional benefits:</p>
      <h4>Captain</h4>
      <p>You lead with personality, bravery, and boldness. Charisma is your Leadership Score. You also gain proficiency in heavy armor and your choice of either Intimidation or Persuasion.</p>
      <h4>Mentor</h4>
      <p>You lead through wise counsel. Wisdom is your Leadership Score. If a creature within 15 feet that can hear you misses an attack or fails an ability check, you can use your reaction to grant it a 1d4 bonus to its roll.</p>
      <h4>Strategist</h4>
      <p>You lead with cunning tactical insight. Intelligence is your Leadership Score. After you roll initiative, you can switch places in initiative order with another willing creature.</p>
      `
    },
    {
      name: "Inspiring Word",
      description: `
        <p>Your words encourage others to fight on. At 1st level, you can use a bonus action to shout at another creature within 30 feet that can hear you. Your target regains hit points equal to one roll of its Hit Die + your Leadership modifier. Though it does not expend a Hit Die as part of this ability.</p>
        <p>You can use this feature the number of times indicated in the Inspiring Word column on the Warlord table. You regain all expended uses when you finish a short or long rest.</p>
      `
    }
  ],
  2: [
    {
      name: "Fighting Style",
      descriptiom: `
      <p>At 2nd level, you adopt a Fighting Style that best reflects your training. You cannot select a Fighting Style more than once, even if a feature allows you to select another Fighting Style.</p>
      <p>Whenever you gain a level in this class, you can switch your Fighting Style for another Fighting Style of your choice.</p>
      `
    },
    {
      name: "Tactical Exploits",
      description: `
        <p>Your knowledge of warfare allows you to employ potent strategies in battle. At 2nd level, you learn to use Tactical Exploits as detailed below:</p>
        <h4>Exploit Dice</h4>
        <p>The Warlord table shows the number of Exploit Dice you have to perform the Exploits that you know. Many Exploits require you to spend Exploit Dice to use them. You can only use one Exploit per attack, ability check, or saving throw. You regain all your Exploit Dice when you finish a short or long rest.</p>
        <p>Your Exploit Dice begin as d4s and increase in size as you gain levels in this class, as shown in the Exploit Die column of the Warlord table.</p>
        <p>When adding an Exploit Die to a roll, always roll your Exploit Die and add it to the result.</p>
        <h4>Exploits Known</h4>
        <p>You know two Exploits of your choice from the list at the end of this class. To learn an Exploit you must meet any prerequisites it has.</p>
        <p>You learn additional Tactical Exploits of your choice as you gain levels in this class, as shown in the Exploits Known column.</p>
        <p>When you gain a level, you can replace an Exploit you know with another you could learn.</p>
        <h4>Saving Throws</h4>
        <p>If one of your Exploits requires a creature to make a saving throw, the Exploit saving throw DC is calculated based on your Strength or Dexterity. Once you choose which ability score to use, it cannot be changed:</p>
        <p><strong>Exploit save DC</strong> = 8 + your proficiency bonus + your Leadership Modifier</p>
      `
    }
  ],
  3: [
    {
      name: "Academy of War",
      description: `
      <p>At 3rd level, choose the Academy of War that best represents your skill, training, and tactics.</p>
      <p>Your Academy of War grants you features at 3rd level, and again when you reach 6th, 14th, and 18th level in this class.</p>
      <h4>Academy Exploits</h4>
      <p>Some Academies have a list of Tactical Exploits you learn at the levels noted in their description. The Exploits don't count against your Exploits Known and can't be replaced. If you do not meet their prerequisites, you learn them regardless.</p>
      `
    }
  ],
  4: [
    {
      name: "Ability Score Improvement",
      description: `
      <p>At 4th level, and again at 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or two different ability scores of your choice by 1. As normal, you cannot increase an ability score above 20 using this feature.</p>
      `
    }
  ],
  5: [
    {
      name: "Extra Attack",
      description: `
      <p>Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. Moreover, if you use your action to Dash or to Disengage you can make one weapon attack as a bonus action on that turn.</p>
      `
    }
  ],
  6: [
    {
      name: "Academy Feature",
      description: " ",
      tableOnly: true
    }
  ],
  7: [
    {
      name: "Valiant Leader",
      description: `
      <p>Your skills have been honed in the crucible of war. Starting at 7th level, your Leadership Style grants you further benefits:</p>
      <h4>Captain</h4>
      <p>You can target creatures that are Unconscious, but not dead, with your Inspiring Word, even though they cannot hear you.</p>
      <h4>Mentor</h4>
      <p>The range of your Mentor reaction increases to 30 feet, and the bonus increases to match the size of your Exploit Die.</p>
      <h4>Strategist</h4>
      <p>You and creatures of your choice within 15 feet of you gain a bonus to Initiative rolls equal to your Intelligence modifier, so long as you are not surprised or Incapacitated.</p>
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
      name: "Rallying Cry",
      description: `
      <p>You rally allies to find success when they might otherwise fail. Starting at 9th level, when another creature that can hear you within 30 feet fails a saving throw, you can use your reaction to rally it. The creature rolls its saving throw again, and adds your Leadership modifier to its new result.</p>
      <p>You can use this reaction once per short or long rest. You gain second use at 13th level and a third use at 17th level.</p>
      `
    }
  ],
  10: [
    {
      name: "Unwavering Will",
      description: `
      <p>You are not given the luxury of succumbing to base instincts. Beginning at 10th level, you have advantage on saving throws to resist being Charmed, Frightened, or Stunned.</p>
      `
    }
  ],
  11: [
    {
      name: "Tactical Superiority",
      description: `
      <p>You are a leader of legendary status. Starting 11th level, you regain one expended use of Inspiring Word and Rallying Cry when you roll initiative. Moreover, the range of your Tactical Exploits, Inspiring Word, and Rallying Cry is doubled.</p>
      `
    }
  ],
  12: [
    {
      name: "Ability Score Improvement",
      description: " ",
      tableOnly: true
    }
  ],
  13: [
    {
      name: "Rallying Cry (2)",
      description: " ",
      tableOnly: true
    }
  ],
  14: [
    {
      name: "Academy Feature",
      description: " ",
      tableOnly: true
    }
  ],
  15: [
    {
      name: "Exalted Leader",
      description: `
      <p>You are an unflinching leader, even in dire circumstances. At 15th level, your Leadership Style grants you these benefits:</p>
      <h4>Captain</h4>
      <p>Creatures that you target with Inspiring Word, Rallying Cry, or a Tactical Exploit gain temporary hit points equal to your Charisma modifier. However, these only last for 1 minute.</p>
      <h4>Mentor</h4>
      <p>Your Inspiring Word can end one of the following conditions in place of restoring the target's hit points: Blinded, Charmed, Deafened, Frightened, Poisoned, or Stunned.</p>
      <h4>Strategist</h4>
      <p>When you use Inspiring Word, the target can choose to move up to its speed without provoking opportunity attacks.</p>
      `
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
      name: "Rallying Cry (3)",
      description: " ",
      tableOnly: true
    }
  ],
  18: [
    {
      name: "Academy Feature",
      description: " ",
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
      name: "Dauntless",
      description: `
      <p>You rival the great commanders and conquerors of legend. At 20th level, you can use Rallying Cry an unlimited number of times. Moreover, whenever you use Inspiring Word you treat the hit points it restores as the maximum possible result.</p>
      `
    }
  ]
};

export default WarlordFeatures;
