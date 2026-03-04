const BloodHunterFeatures = {
  1: [
    {
      name: "Hunter's Bane",
      description: `
      <p>You have survived the Hunter's Bane, a dark alchemical ritual that suffuses your blood with sinister magic, granting you an enhanced knowledge and awareness of evil. At 1st level, you gain proficiency in either Arcana, Nature, or Religion.</p>
      <p>As a bonus action, you can use this dark insight to analyze a creature you can see within 30 feet, making a Constitution ability check using the corresponding skill (DC = 8 + its CR):</p>
      <table style="width:100%; text-align:center; border-collapse:collapse;">
        <thead>
          <tr>
            <th style="border:1px solid #444;">Skill</th>
            <th style="border:1px solid #444;">Creature Types</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border:1px solid #444;">Arcana</td>
            <td style="border:1px solid #444;">Aberrations, Dragons, Monstrosities</td>
          </tr>
          <tr>
            <td style="border:1px solid #444;">Nature</td>
            <td style="border:1px solid #444;">Beasts, Elementals, Oozes, Plants</td>
          </tr>
          <tr>
            <td style="border:1px solid #444;">Religion</td>
            <td style="border:1px solid #444;">Celestials, Fey, Fiends, Undead</td>
          </tr>
        </tbody>
      </table>
      <p>On a success, you learn one characteristic of your choice from the following list: its highest ability score, lowest ability score, damage vulnerabilities, damage immunities, damage resistances, condition immunities, or another weakness (like a troll's Regeneration being stopped by taking fire damage).</p>
      <p>If your choice doesn't apply to that creature, your DM will reveal another relevant characteristic of their choice to you.</p>
      `
    },
    {
      name: "Fighting Style",
      description: `
      <p>At 1st level, you adopt a Fighting Style that best reflects your training. You cannot select a Fighting Style more than once, even if a feature allows you to select another Fighting Style.</p>
      <p>Whenever you gain a level in this class, you can switch your Fighting Style for another Fighting Style of your choice.</p>
      `
    }
  ],
  2: [
    {
      name: "Blood Rites",
      description: `
      <p>At 2nd level, you learn to harness the sinister magicks within your bloodstream to invoke the ancient power of Blood Rites:</p>
      <h4>Blood Rites Known</h4>
      <p>At 2nd level, you know two Blood Rites of your choice. When you reach certain Blood Hunter levels you learn more Rites of your choice, as shown in the Rites Known column of the Blood Hunter class table.</p>
      <p>Once you invoke a Blood Rite you must finish a short or long rest before you can invoke that Blood Rite again. When you have no uses of a Blood Rite remaining, you can make a Vital Sacrifice (detailed below) to use that Rite again.</p>
      <p>Blood Rites can only be used against creatures with blood. However, when you make a Vital Sacrifice to empower a Rite, you can target any creature, regardless if it has blood or not.</p>
      <p>Finally, whenever you learn a new Blood Rite, you can replace one of the Blood Rites you know with another Rite of your choice.</p>
      <h4>Rite Die</h4>
      <p>Some Blood Rites use your Rite Die, which starts as a d4. At certain Blood Hunter levels, this die grows, as shown in the Rite Die column of the Blood Hunter class table.</p>
      <h4>Vital Sacrifice</h4>
      <p>Some Blood Rites allow you to sacrifice your own life to fuel deadly effects. When you make a Vital Sacrifice, you reduce both your maximum and current hit points by one roll of your Rite Die. This reduction cannot be lessened in any way.</p>
      <p>If you have temporary hit points, you can reduce these in place of reducing your current hit points. You always reduce your maximum hit points when you make a Vital Sacrifice.</p>
      <p>At the end of your next long rest, any reductions to your maximum hit points from Vital Sacrifices return to normal.</p>
      <h4>Saving Throws</h4>
      <p>If a Blood Rite requires a creature to make a saving throw to resist its effects, you use your Rite save DC, as shown below:</p>
      <p><strong>Rite save DC</strong> = 8 + your proficiency bonus + your Constitution modifier</p>
      `
    },
    {
      name: "Crimson Offering",
      description: `
      <p>Also starting at 2nd level, you can use a bonus action on your turn to make a Vital Sacrifice and empower one weapon you are holding with blood magic. Choose acid, cold, fire, lighting, or poison, and for 1 hour, your attacks with that weapon deal bonus damage of that type equal to one roll of your Rite Die.</p>
      `
    }
  ],
  3: [
    {
      name: "Occult Order",
      description: `
      <p>At 3rd level, you choose the Occult Order that best represents your training and blood magic.</p>
      <p>Your Occult Order grants you features at 3rd level, and again when you reach 7th, 13th, and finally at 18th level in this class.</p>
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
    },
    {
      name: "Grim Psychometry",
      description: `
      <p>Your familiarity with dark magic allows you to decipher the influence of similar effects. Also at 5th level, you can use alchemist's supplies to cast identify as a ritual. When you do so, you also learn if the object is cursed.</p>
      `,
    }
  ],
  6: [
    {
      name: "Crimson Brand",
      description: `
      <p>Your affinity with blood magic has grown. Beginning at 6th level, you can make a Crimson Offering once between each short or long rest without making a Vital Sacrifice.</p>
      <p>Moreover, when you damage a creature with a Crimson Offering weapon attack, you can sear it with blood magic to place a Crimson Brand upon it. While this Crimson Brand lasts, you gain the following benefits against that creature:</p>
      <ul>
        <li>You know its exact direction while on the same plane.</li>
        <li>Whenever it damages you, or a friendly creature that you can see within 15 feet of you, it takes Crimson Offering damage equal to one roll of your Rite Die.</li>
      </ul>
      <p>This Brand lasts until the creature is slain, or you Brand another creature. It can also be dispelled by remove curse.</p>
      <p>Once you use this feature you must complete a short or long rest before you can use it again. When you have no uses left you can make a Vital Sacrifice to use this feature again.</p>
      `,
    }
  ],
  7: [
    {
      name: "Order Feature",
      description: ``,
      tableOnly: true
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
      name: "Improved Psychometry",
      description: `
      <p>At 9th level, you can use your Grim Psychometry to cast legend lore, targeting an object or creature you touch, or your current location. When you do so, the target can have an evil, violent, or cursed history instead of legendary importance. You make a Vital Sacrifice in place of expending a spell slot, and your alchemist's supplies replace the material components.</p>
      `,
    }
  ],
  10: [
    {
      name: "Dark Augmentation",
      description: `
      <p>The dark magic of the Hunter's Bane enhances your physical abilities. Starting at 10th level, whenever you make an ability check or saving throw that uses your Strength, Dexterity, or Constitution, you add one roll of your Rite Die to the result.</p>
      `
    },
  ],
  11: [
    {
      name: "Improved Crimson Offering",
      description: `
      <p>You are a master of combining blood magic with martial skill. Beginning at 11th level, you can choose for the bonus damage of Crimson Offering to also be necrotic, psychic, or thunder.</p>
      `
    },
    {
      name: "Vital Control",
      description: `
      <p>Also at 11th level, you gain a greater measure of control over your blood magic. Whenever you make a Vital Sacrifice, you can roll your Rite Die twice and choose which result to use.</p>
      <p>Also, once between each long rest, you can empower one Blood Rite you know without making a Vital Sacrifice.</p>
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
      name: "Order Feature",
      description: ``,
      tableOnly: true
    }
  ],
  14: [
    {
      name: "Crimson Anchor",
      description: `
      <p>Your Crimson Brand is infused with potent abjuration magic. Starting at 14th level, in order for a creature marked by your Crimson Brand to teleport or to leave your current plane, it must succeed on a Charisma saving throw against your Rite save DC. On a failure, that feature fails and it takes Crimson Offering damage equal to four rolls of your Rite Die.</p>
      <p>Also, the damage of Crimson Brand increases to two rolls of your Rite Die if the Branded target damages you or an ally.</p>
      `,
    }
  ],
  15: [
    {
      name: "Hardened Soul",
      description: `
      <p>Your experiences have hardened your mind against all but the most esoteric attacks. Beginning at 15th level, whenever you make an Intelligence, Wisdom, or Charisma saving throw you gain a bonus to your roll equal to one roll of your Rite Die.</p>
      `,
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
  ],
  18: [
    {
      name: "Order Feature",
      description: ``,
      tableOnly: true
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
      name: "Sanguine Mastery",
      description: `
      <p>You have gained unparalleled mastery over the dark power of your blood magic, improving its potency while minimizing the sacrifices required. At 20th level, whenever you roll a Rite Die for another Blood Rite or a Blood Hunter ability, you roll your Rite Die twice and choose which result to use.</p>
      <p>Finally, whenever you make a Vital Sacrifice, you subtract your Constitution modifier (minimum of 1) from your Vital Sacrifice roll before you reduce your maximum and current hit points. This cannot reduce your Vital Sacrifice below 1.</p>
      `
    }
  ]
};

export default BloodHunterFeatures;