const BarbarianFeatures = {
  1: [
    {
      name: "Rage",
      description: `
      <p>You fight with an unchecked primal ferocity in battle. Starting at 1st level, you can use a bonus action on your turn to enter a Rage. While the Rage lasts, you gain the benefits listed below, so long as you are not wearing heavy armor:</p>
      <ul>
        <li>You have advantage on ability checks and saving throws that use your Strength or Constitution.</li>
        <li>Whenever you hit with a weapon attack that uses your Strength, you deal a bonus 1d4 damage. At certain levels in this class, this bonus damage increases to match the Exploit Die column on the Barbarian table above.</li>
        <li>You resist all bludgeoning, piercing, and slashing damage.</li>
        <li>You cannot cast spells or concentrate on spells or effects.</li>
      </ul>
      <p>Your Rage lasts until the end of your next turn, but it ends instantly if you are Unconscious. You extend your Rage to the end of your next turn if you attack a hostile creature, take any damage, make a Strength check, or use your bonus action to extend it. You can maintain your Rage for 10 minutes.</p>
      <p>You Rage the number of times shown in the Rages column of the Barbarian table for your level. You regain one expended use of your Rage whenever you finish a short rest and all uses of your Rage when you finish a long rest.</p>
      `
    },
    {
      name: "Unarmored Defense",
      description: `
      <p>Also at 1st level, if you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.</p>
      `
    }
  ],
  2: [
    {
      name: "Reckless Attack",
      description: `
      <p>Starting at 2nd level, whenever you make an attack on your turn using your Strength, you can make a Reckless Attack by throwing caution to the wind. If you do, you have advantage on Strength-based attacks until the beginning of your next turn, but every attack targeting you is also made with advantage until the start of your next turn.</p>
      `
    },
    {
      name: "Savage Exploits",
      description: `
      <p>Also at 2nd level, you have gained savage abilities that enhance your martial skill on and off the battlefield:</p>
      <h4>Exploit Dice</h4>
      <p>The Barbarian table shows how many Exploit Dice you have to perform any Exploits you know. Most Exploits require you to expend these Dice in order to use them. You can only use one Exploit per attack, ability check, or saving throw, and you regain all expended Exploit Dice when you finish a short or long rest.</p>
      <p>Your Exploit Dice start as d4s and increase in size at certain Barbarian levels, as shown in the Exploit Die column of the Barbarian class table.</p>
      <p>When you add an Exploit Die to a roll, always roll your Exploit Die and add the roll to the result.</p>
      <h4>Exploits Known</h4>
      <p>At 2nd level, you learn two Savage Exploits from the list at the end of the class. The Exploits Known column of the Barbarian table shows when you learn additional Savage Exploits. To learn an Exploit, you must meet any prerequisites it may have, like a minimum ability score, Barbarian level, or skill proficiency.</p>
      <p>When you gain a Barbarian level, you can replace one Savage Exploit you know with another of your choice, so long as you meet all of its prerequisites.</p>
      <h4>Saving Throws</h4>
      <p>If one of your Savage Exploits requires a creature to make a saving throw, the Exploit saving throw DC is calculated based on either your Strength or Dexterity. Once you choose which ability score to use for this save DC, it cannot be changed:</p>
      <p><strong>Exploit save DC</strong> = 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice)</p>
      `
    }
  ],
  3: [
    {
      name: "Primal Path",
      description: `
      <p>Also at 3rd level, choose the Primal Path that best represents the source of your Barbarian's Rage.</p>
      <p>Your Primal Path grants you features at 3rd level, and again when you reach 6th, 10th, and 14th level in this class.</p>
      <h4>Path Exploits</h4>
      <p>Some Primal Paths have a list of Path Exploits that you learn at the Barbarian levels noted in that Primal Path description. These Exploits do not count against your number of Exploits Known and cannot be switched out for other Exploits. If you do not meet their prerequisites, you learn them regardless.</p>
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
      name: "Danger Sense",
      description: `
      <p>The fury within your blood alerts you to dangers. Starting at 5th level, you have advantage on initiative rolls, and whenever you roll initiative, you can choose to Rage.</p>
      <p>Moreover, if you are surprised when you roll initiative, you can act normally during the first round of combat so long as you Rage as part of rolling initiative.</p>
      `
    },
    {
      name: "Extra Attack",
      description: `
      <p>Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. Moreover, if you use your action to Dash or Disengage while Raging, you can make one weapon attack as a bonus action.</p>
      `
    }
  ],
  6: [
    {
      name: "Primal Path Feature",
      description: ` `,
      tableOnly: true
    }
  ],
  7: [
    {
      name: "Feral Instinct",
      description: `
      <p>Primal instinct has honed your senses. Beginning at 7th level, when you make a Dexterity saving throw against an effect you can see (such as a trap or a spell), you have advantage on your roll. You do not gain this benefit if you are Blinded, Deafened, or Incapacitated when you make the saving throw.</p>
      <p>Moreover, your Rage always lasts for its maximum duration unless you become Unconscious or you choose to end it.</p>
      `
    }
  ],
  8: [
    {
      name: "Ability Score Improvement",
      description: ` `,
      tableOnly: true
    }
  ],
  9: [
    {
      name: "Improved Critical",
      description: `
      <p>Primal fury increases the power of your strikes. Beginning at 9th level, attack rolls for your Strength-based weapon attacks score a critical hit on a roll of 19 or 20 on the d20.</p>
      <p>At certain levels, your critical hit range increases again: 13th level a roll of 18-20 is a critical hit, and at 17th level a roll of 17-20 is a critical hit.</p>
      `
    }
  ],
  10: [
    {
      name: "Primal Path Feature",
      description: ` `,
      tableOnly: true
    }
  ],
  11: [
    {
      name: "Critical Strike",
      description: `
      <p>You ruthlessly exploit even the smallest weaknesses. Starting at 11th level, each time you score a critical hit with a weapon attack while Raging, you can use a Savage Exploit you know as part of that attack without expending an Exploit Die.</p>
      `
    },
    {
      name: "Unstoppable",
      description: `
      <p>The white hot intensity of your Rage burns ever brighter. Also at 11th level, if you drop to 0 hit points while you are Raging, but you are not killed outright, you can choose to end your Rage to drop to 1 hit point instead.</p>
      <p>Also, if you make an Intelligence, Wisdom, or Charisma saving throw while you are Raging, you gain a bonus to your roll equal to your Constitution modifier (minimum of +1).</p>
      `
    }
  ],
  12: [
    {
      name: "Ability Score Improvement",
      description: ` `,
      tableOnly: true
    }
  ],
  13: [
    {
      name: "Improved Critical (18)",
      description: ` `,
      tableOnly: true
    }
  ],
  14: [
    {
      name: "Primal Path Feature",
      description: ` `,
      tableOnly: true
    }
  ],
  15: [
    {
      name: "Persistent Rage",
      description: `
      <p>Your Rage is a smoldering fire that never goes out. Beginning at 15th level, the duration of your Rage increases to 1 hour.</p>
      `
    }
  ],
  16: [
    {
      name: "Ability Score Improvement",
      description: ` `,
      tableOnly: true
    }
  ],
  17: [
    {
      name: "Improved Critical (17)",
      description: ` `,
      tableOnly: true
    }
  ],
  18: [
    {
      name: "Indomitable Might",
      description: `
      <p>Your legendary might and endurance rival the heroes of myth. Starting at 18th level, if you make a Strength or Constitution check and the result of your roll is lower than your Strength score, you can use your Strength score in place of the result.</p>
      `,

    }
  ],
  19: [
    {
      name: "Ability Score Improvement",
      description: ` `,
      tableOnly: true
    }
  ],
  20: [
    {
      name: "Primal Champion",
      description: `
      <p>You embody the raw power of the primal wilderness and have exceeded the physical limits of mortality. Upon reaching 20th level, both your Strength and Constitution scores increase by 4, and your maximum for both of those scores is now 24.</p>
      `
    }
  ]
};

export default BarbarianFeatures;
