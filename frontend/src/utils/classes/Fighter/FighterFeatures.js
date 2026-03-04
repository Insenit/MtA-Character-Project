const FighterFeatures = {
  1: [
    {
      name: "Fighting Style",
      description: `
        <p>At 1st level, you learn one Fighting Style of your choice from this class. You cannot learn a Fighting Style more than once, even if another feature allows you to learn an additional Fighting Style.</p>
        <p>If a Fighting Style has prerequisites, like a skill proficiency or a minimum Ability Score or Fighter level, you can learn it at the same time that you meet all of its prerequisites. Each time you gain a Fighter level, you can replace a Fighting Style you know with another Fighting Style of your choice.</p>
        <p>At certain levels, you learn more Fighting Styles, as shown in the Fighting Style column of the Fighter table above.</p>
      `
    },
    {
      name: "Second Wind",
      description: `
        <p>You can fight on where lesser warriors would fail. Also at 1st level, you can use your bonus action to regain hit points equal to 1d10 + your Fighter level. Once you do so, you must finish a short or long rest before you can do so again.</p>
        <p>Upon reaching 14th level, you can use your Second Wind bonus action twice between each short or long rest.</p>
      `
    }
  ],
  2: [
    {
      name: "Martial Exploits",
      description: `
        <p>At 2nd level, you begin to learn techniques that enhance your martial skill in and out of battle. You gain the features below:</p>
        <h4>Exploit Dice</h4>
        <p>The Fighter table shows the number of Exploit Dice you have to perform any Exploits you know. Most Exploits require you to expend Exploit Dice to use them. You can only use one Exploit per weapon attack, ability check, or saving throw, and you regain expended Exploit Dice when you finish a short or long rest.</p>
        <p>Your Exploit Dice begin as d6s and increase in size as you gain levels in this class, as shown in the Exploit Die column of the Fighter table.</p>
        <p>When adding an Exploit Die to a roll, always roll your Exploit Die and add it to the result.</p>
        <h4>Exploits Known</h4>
        <p>You know two Exploits of your choice from the list at the end of this class. To learn an Exploit you must meet any prerequisites it has.</p>
        <p>You learn additional Martial Exploits of your choice as you gain levels in this class, as shown in the Exploits Known column.</p>
        <p>When you gain a level, you can replace an Exploit you know with another you could learn.</p>
        <h4>Saving Throws</h4>
        <p>If one of your Exploits requires a creature to make a saving throw, the Exploit saving throw DC is calculated based on your Strength or Dexterity. Once you choose which ability score to use, it cannot be changed:</p>
        <p><strong>Exploit save DC</strong> = 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice)</p>
      `
    }
  ],
  3: [
    {
      name: "Eye for Talent",
      description: `
      <p>Starting at 3rd level, you can evaluate the combat potential of creatures. As a bonus action, you can take the Search action, targeting a creature you can see within 30 feet (DC = 8 + its Challenge Rating). If you have hit this creature with a weapon attack, you add your Fighter level to your ability check.</p>
      <p>If you succeed on the check, you learn one characteristic of your choice from below. If you fail, you cannot use this feature on that target again until you hit it with a weapon attack:</p>
      <table style="width:100%; text-align:center; border-collapse:collapse;">
        <tr>
          <td style="border:1px solid #444;">Armor Class</td>
          <td style="border:1px solid #444;">Highest Ability Score</td>
        </tr>
        <tr>
          <td style="border:1px solid #444;">Condition Immunities</td>
          <td style="border:1px solid #444;">Lowest Ability Score</td>
        </tr>
        <tr>
          <td style="border:1px solid #444;">Damage Resistances &amp; Immunities</td>
          <td style="border:1px solid #444;">One Special Feature (Spellcasting, Exploits, etc.)</td>
        </tr>
      </table>
      `
    },
    {
      name: "Warrior Archetype",
      description: `
      <p>Also at 3rd level, choose the Archetype which best represents your training.</p>
      <p>Your Archetype grants you features at 3rd level, and again when you reach 7th, 10th, 15th, and 18th level in this class.</p>
      <h4>Archetype Exploits</h4>
      <p>Some Archetypes have a list of Archetype Exploits that you learn at the Fighter levels noted in the Archetype description. These Exploits do not count against your number of Exploits Known and cannot be switched out for other Exploits. If you do not meet their prerequisites, you learn them regardless.</p>
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
      <p>When you reach certain levels in this class, the number of attacks you can make as part of your Attack action increases; at 11th level (3 attacks) and at 17th level (4 attacks).</p>
      `
    }
  ],
  6: [
    {
      name: "Action Surge",
      description: `
      <p>Starting at 6th level, you can push yourself past your limits, if only for a moment. Once during your turn, you can choose to take one additional action. After you do so, you must finish a short or long rest before you can use this feature again.</p>
      <p>When you reach 20th level, you can use this feature twice between each short or long rest, but only once per turn.</p>
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
      name: "Indomitable",
      description: `
      <p>Your fighting spirit allows you to grasp success from the jaws of defeat. Beginning at 9th level, when you fail a saving throw, you can choose to succeed instead. Once you use this feature you must finish a long rest before you can use it again.</p>
      <p>At 13th level, you can use this feature twice per long rest, and at 17th level you can use it three times per long rest.</p>
      `
    }
  ],
  10: [
    {
      name: "Archetype Feature",
      description: " ",
      tableOnly: true
    }
  ],
  11: [
    {
      name: "Extra Attack (2)",
      description: " ",
      tableOnly: true
    },
    {
      name: "Martial Superiority",
      description: `
      <p>The chaos and thrill of battle fuels you. Starting at 11th level, once per round in combat you can use one 1st or 2nd-degree Martial Exploit you know without expending an Exploit Die.</p>
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
      name: "Indomitable",
      description: " ",
      tableOnly: true
    }
  ],
  14: [
    {
      name: "Ability Score Improvement",
      description: " ",
      tableOnly: true
    },
    {
      name: "Second Wind (2)",
      description: " ",
      tableOnly: true
    }
  ],
  15: [
    {
      name: "Archetype Feature",
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
      name: "Extra Attack (3)",
      description: " ",
      tableOnly: true
    },
    {
      name: "Indomitable (3)",
      description: " ",
      tableOnly: true
    }
  ],
  18: [
    {
      name: "Archetype Feature",
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
      name: "Action Surge (2)",
      description: " ",
      tableOnly: true
    },
    {
      name: "Relentless",
      description: `
      <p>At 20th level, your combat skills are those of legend and myth. You regain all expended Exploit Dice when you roll initiative.</p>
      <p>You can also use any 3rd-degree Martial Exploits you know any number of times between each short of long rest.</p>
      `
    }
  ]
};

export default FighterFeatures;
