const RogueFeatures = {
  1: [
    {
      name: "Expertise",
      description: `
      <p>You master a signature set of skills and abilities. At 1st level, choose any combination of two skill and tool proficiencies.</p>
      <p>If you were not proficient, you gain proficiency. If you were already proficient, you add double your Proficiency Bonus to any ability checks you make with that skill or tool.</p>
      <p>As you gain levels in this class, you are able to specialize with additional skills. Another skill or tool proficiency of your choice gains this benefit at 6th, 10th, 15th, and 18th level.</p>
      `
    },
    {
      name: "Sneak Attack",
      description: `
      <p>Also starting at 1st level, you ruthlessly exploit distractions or flaws when striking. Once per turn when you hit a target with a finesse or ranged weapon attack, you can deal a bonus 1d6 damage on hit if you had advantage on your attack roll.</p>
      <p>You do not need advantage on this attack roll if your target has another conscious hostile creature within 5 feet of it, and you do not have disadvantage on your attack roll.</p>
      <p>This bonus damage increases as you gain Rogue levels, as shown in the Sneak Attack column of the Rogue table.</p>
      `
    },
    {
      name: "Thieves' Cant",
      description: `
      <p>Finally at 1st level, you learn to speak, understand, and leave messages in Thieves' Cant, the secret jargon of the criminal underworld. You can use this secret code to hide messages in normal conversation or leave secret markings on objects.</p>
      <p>Alternately, you can forgo Thieves' Cant and instead learn to speak, read, and write two languages of your choice.</p>
      `
    }
  ],
  2: [
    {
      name: "Cunning Action",
      description: `
      <p>Your sharp reflexes allow you quickly maneuver. Beginning at 2nd level, you can take either the Dash, Disengage, Hide, or Use an Object action as a bonus action on your turn.</p>
      <p>At 11th level, you can take a second bonus action on each turn, but you cannot use the same bonus action twice.</p>
      `
    },
    {
      name: "Devious Exploits",
      description: `
        <p>Also at 2nd level, you learn to employ various tricks to enhance your signature set of skills and talents:</p>
        <h4>Exploit Dice</h4>
        <p>The Rogue table shows the number of Exploit Dice you have to perform Exploits you know. Most require you to expend Exploit Dice in order to use them. You can only use one Exploit per weapon attack, ability check, or saving throw, and you regain all of your expended Exploit Dice when you finish a short or long rest.</p>
        <p>Your Exploit Dice begin as d4s, and increase in size as you gain levels, as indicated in the Rogue table.</p>
        <p>Whenever you add an Exploit Die to a roll, always roll your Exploit Die and add the result to your roll.</p>
        <h4>Exploits Known</h4>
        <p>You know two Exploits of your choice from the list at the end of this class. To learn an Exploit you must meet any prerequisites it has.</p>
        <p>You learn additional Devious Exploits of your choice as you gain levels in this class, as shown in the Exploits Known column.</p>
        <p>When you gain a level, you can replace an Exploit you know with another you could learn.</p>
        <h4>Saving Throws</h4>
        <p>When an Exploit requires a saving throw, its Save DC is based on your Strength or Dexterity. Once you choose which ability score to use, it cannot be changed:</p>
        <p><strong>Exploit save DC</strong> = 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice)</p>
      `
    }
  ],
  3: [
    {
      name: "Roguish Archetype",
      description: `
      <p>At 3rd level, choose the Roguish Archetype that best reflects your skills.</p>
      <p>Your Archetype grants you features at 3rd level, and again when you reach 7th, 13th, and 17th level in this class.</p>
      <h4>Archetype Exploits</h4>
      <p>Some Archetypes have a list of Archetype Exploits that you learn at the Rogue levels noted in the Archetype description. These Exploits do not count against your number of Exploits Known and cannot be switched out for other Exploits. If you do not meet their prerequisites, you learn them regardless.</p>
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
      name: "Cunning Strike",
      description: `
      <p>At 5th level, you learn to leverage distractions to great effect. When you add your Sneak Attack bonus to a damage roll, you can forgo some of the bonus damage to use a Devious Exploit without expending Exploit Dice using these rules:</p>
      <ul>
        <li>The Devious Exploit must be one of your Exploits Known.</li>
        <li>The Devious Exploit must be used as part of your attack.</li>
        <li>You reduce your Sneak Attack bonus damage by a number of d6s equal to the degree of that Devious Exploit.</li>
        <li>If the Devious Exploit deals additional damage, it does not deal any additional damage when used with this feature.</li>
      </ul>
      <p>For example, you could use your Cunning Strike to use the crippling strike Exploit by reducing your Sneak Attack bonus damage by 2d6 since crippling strike is a 2nd-degree Exploit. However, you would not add the Exploit Die bonus damage of crippling strike if the creature failed its saving throw.</p>
      `
    }
  ],
  6: [
    {
      name: "Expertise",
      description: ``,
      tableOnly: true
    },
    {
      name: "Uncanny Dodge",
      description: `
      <p>Beginning at 6th level, your reflexes you to dodge, deflect, and avoid damage. Whenever you are hit by an attack that you can see, you can use your reaction to halve the damage you take.</p>
      <p>At 14th level, you can move up to half your speed without provoking opportunity attacks as part of this reaction.</p>
      `
    }
  ],
  7: [
    {
      name: "Archetype Feature",
      description: " ",
      tableOnly: true
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
      name: "Evasion",
      description: `
      <p>Starting at 9th level, your supernatural agility lets you dodge out of the way of certain area effects, like a dragon's breath or a lightning bolt spell. Whenever an effect allows you to make a Dexterity saving throw to take only half damage, you take no damage on a success, and only half damage on a failure.</p>
      `
    }
  ],
  10: [
    {
      name: "Expertise",
      description: ``,
      tableOnly: true
    },
    {
      name: "Reliable Talent",
      description: `
      <p>Your signature skills that made you famous, or infamous, are beyond reproach. Beginning at 10th level, when you make an ability check that adds your Proficiency Bonus or an Exploit Die, you treat a roll of 9 or lower on the d20 as a 10.</p>
      `
    }
  ],
  11: [
    {
      name: "Cunning Action (2)",
      description: " ",
      tableOnly: true
    },
    {
      name: "Ruthless",
      description: `
      <p>Starting at 11th level, when you use a Devious Exploit as part of an attack that includes your Sneak Attack bonus damage, you can reduce the bonus damage by 2d6 to force your target to make its saving throw with disadvantage. You can use this feature and Cunning Strike as part of the same attack.</p>
      <p>For example, if you were to use Cunning Strike to use the crippling strike Exploit, you could reduce your Sneak Attack bonus by an additional 2d6 (for a total reduction of 4d6), to force the target to make its Constitution saving throw at disadvantage.</p>
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
      name: "Archetype Feature",
      description: " ",
      tableOnly: true
    }
  ],
  14: [
    {
      name: "Blindsense",
      description: `
      <p>Your senses have been honed to supernatural levels. Starting at 14th level, if you can hear, you are aware of the location of any invisible or hidden creature within 10 feet of you.</p>
      <p>The radius of Blindsense increases again when you reach 17th level (20 feet) and 20th level (30 feet) in this class.</p>
      `
    }
  ],
  15: [
    {
      name: "Expertise",
      description: ``,
      tableOnly: true
    },
    {
      name: "Slippery Mind",
      description: `
      <p>Your endless pursuit of perfection in your chosen area of skill has honed your mind. Starting at 15th level, whenever you are forced to make an Intelligence, Wisdom, or Charisma saving throw, you gain a bonus to your roll equal to your Exploit Die.</p>
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
      name: "Archetype Feature",
      description: " ",
      tableOnly: true
    },
    {
      name: "Blindsense (20 feet)",
      description: " ",
      tableOnly: true
    }
  ],
  18: [
    {
      name: "Expertise",
      description: ``,
      tableOnly: true
    },
    {
      name: "Elusive",
      description: `
      <p>Your uncanny sense for danger makes it nearly impossible for your foes to gain the upper hand against you. Starting at 18th level, so long as you are not Incapacitated, no attack rolls that target you can be made with advantage.</p>
      `
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
      name: "Blindsense (30 feet)",
      description: " ",
      tableOnly: true
    },
    {
      name: "Stroke of Luck",
      description: `
      <p>You have a supernatural knack for finding success when you need it most. Upon reaching 20th level, when you roll a d20 for an ability check, attack roll, or saving throw, you can treat the result as a 20 on the d20. You can do so after you know the result of your roll and whether you succeed or fail.</p>
      <p>Once you use this feature you must finish a short or long rest before you can use it again.</p>
      `
    }
  ]
};

export default RogueFeatures;