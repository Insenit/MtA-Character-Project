const BardFeatures = {
  1: [
    {
      name: "Bardic Inspiration",
      description: `
      <p>You can inspire heroism with both word and song. Beginning at 1st level, when another creature who can hear you within 30 feet makes an ability check or fails an attack roll or saving throw, you can use a reaction to expend a Bardic Inspiration Die, a d4, roll it, and add the result to the target's roll.</p>
      <p>You have a number of Bardic Inspiration Dice equal to half your Bard level (rounded up) + your Charisma modifier. You regain all expended Dice when you finish a short or long rest.</p>
      <p>Your Bardic Inspiration Die grows at certain Bard levels, as shown in the Bardic Insp. column of the Bard Class table.</p>
      `
    },
    {
      name: "Folklore",
      description: `
      <p>At 1st level choose one skill and one tool or language. You are now proficient in this skill or tool, or learn to speak, read, and write that language. If you choose a skill or tool that you are already proficient in, you add double your proficiency bonus to any ability check you make with that skill or tool.</p>
      <p>You choose another skill and one tool or language to gain this benefit when you reach 6th, 10th, 14th, and 18th level.</p>
      `
    }
  ],
  2: [
    {
      name: "Spellcasting",
      description: `
      <p>At 2nd level, you can use your mastery over word and song to draw upon the Song of Creation to produce wondrous spells:</p>
      <h4>Cantrips</h4>
      <p>At 2nd level, you learn two Cantrips of your choice from the Bard spell list. You learn an additional Bard Cantrip of your choice when you reach 4th level, and again at 10th level.</p>
      <h4>Spell Slots</h4>
      <p>The Bard table shows how many spell slots you have to cast spells of 1st-level and higher. To cast your spells, you expend a slot equal to that spell's level or higher. You regain all expended slots when you finish a long rest.</p>
      <h4>Spells Known of 1st-Level & Up</h4>
      <p>You know two 1st-level spells of your choice from the Bard spell list. The Spells Known column of the Bard table shows when you learn more Bard spells of your choice. Each spell must be of a level you have slots for. For example, when you reach 5th level in this class, you can learn one new Bard spell of either 1st or 2nd-level.</p>
      <p>Whenever you gain a Bard level, you can choose one Bard spell you know and replace it with another Bard spell of your choice for which you have spell slots.</p>
      <h4>Spellcasting Ability</h4>
      <p>Charisma is the spellcasting ability for Bard spells, as your magic comes from your ability to wield the Song of Creation. You use your Charisma if a spell refers to your spellcasting ability, when setting a saving throw DC, or making a spell attack roll.</p>
      <p><strong>Spell save DC</strong> = 8 + your proficiency bonus + your Charisma modifier</p>
      <p><strong>Spell attack modifier</strong> = your proficiency bonus + your Charisma modifier</p>
      <h4>Ritual Casting</h4>
      <p>You use your varied knowledge to cast the ritual version of any Bard spell you know, so long as that spell has the ritual tag.</p>
      <h4>Spellcasting Focus</h4>
      <p>You can use any musical instrument you are proficient in as a spellcasting focus for the Bard spells you know.</p>
      `
    },
    {
      name: "Chords of Power",
      description: `
      <p>Your skills allow you to reproduce minor portions of the Song of Creation, known as Chords of Power. At 2nd level, you can reproduce two Chords, which you choose from the list at the end of this class. Most Bards use music or song to reproduce these Chords, but others reproduce them by recalling stories of heroism, legend, or tragedy.</p>
      <p>During a long rest, you can spend 1 hour immersed in the Song of Creation practicing your chosen performative art to replace one Chord you know with another of your choice.</p>
      <p>At certain levels you learn additional Chords of Power, as shown in the Chords Known column of the Bard Class table.</p>
      `
    }
  ],
  3: [
    {
      name: "Magical Secrets",
      description: `
      <p>You have gathered magical knowledge from many disciplines. At 3rd level, you learn two 1st-level spells of your choice from any class spell list. They become Bard spells for you, but they do not count against your total number of Spells Known, and you can't replace these spells when you gain a Bard level.</p>
      <p>You learn two additional Magical Secrets of certain spell levels at 5th level (2nd-level spells), at 9th level (3rd-level spells), at 13th level (4th-level spells), and finally at 17th level (5th-level spells).</p>
      `
    },
    {
      name: "Harmonious Recovery",
      description: `
      <p>Starting at 3rd level, you can immerse yourself in the Song of Creation to regain magical potential. During a short rest, you can spend 10 minutes practicing your chosen performative art, to regain expended spell slots of a total level equal to your Charisma modifier (minimum of one 1st-level slot).</p>
      <p>Once you use this feature to regain spell slots, you must finish a long rest before you can do so again.</p>
      `
    },
    {
      name: "Bardic Tradition",
      description: `
      <p>At 3rd level, choose the Bardic Tradition that best represents the varied skills, talents, and knowledge you have gathered in your wide wanderings.</p>
      <p>Your Bardic Tradition grants you features at 3rd level, and again when you reach 5th, 11th, and 15th level in this class.</p>
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
      name: "Tradition Feature",
      description: ``,
      tableOnly: true
    },
    {
      name: "Magical Secrets",
      description: ``,
      tableOnly: true
    }
  ],
  6: [
    {
      name: "Folklore",
      description: ``,
      tableOnly: true
    }
  ],
  7: [
    {
      name: "Bardic Virtuoso",
      description: `
      <p>Your intuitive knowledge of the Song of Creation propels your performative abilities to supernatural heights. Starting at 7th level, you add double your proficiency bonus to ability checks you make that incorporate a musical instrument.</p>
      <p>Also, when you perform a Chord of Power that lasts until the start of your next turn, such as Lay of Alacrity, you can use a bonus action on the next turn to continue performing that Chord without expending a Bardic Inspiration Die.</p>
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
      name: "Magical Secrets",
      description: ``,
      tableOnly: true
    }
  ],
  10: [
    {
      name: "Font of Inspiration",
      description: `
      <p>You can draw power from the ambient music from the Song of Creation in times of need. Starting at 10th level, you regain one expended Bardic Inspiration Die when you roll initiative.</p>
      <p>You can also use your bonus action to expend one spell slot and regain Bardic Inspiration Dice equal to the slot's level.</p>
      `
    },
    {
      name: "Folklore",
      description: ``,
      tableOnly: true
    }
  ],
  11: [
    {
      name: "Tradition Feature",
      description: ``,
      tableOnly: true
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
      name: "Magical Secrets",
      description: ``,
      tableOnly: true
    }
  ],
  14: [
    {
      name: "Folklore",
      description: ``,
      tableOnly: true
    }
  ],
  15: [
    {
      name: "Tradition Feature",
      description: ``,
      tableOnly: true
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
      name: "Magical Secrets",
      description: ``,
      tableOnly: true
    }
  ],
  18: [
    {
      name: "Folklore",
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
      name: "Mythic Secrets",
      description: `
      <p>You have uncovered knowledge of some of the most powerful and secret magicks of the multiverse. At 20th level, you learn one 6th-level and one 7th-level Magical Secrets spell.</p>
      <p>You can cast each of these spells once at their lowest level, and regain the ability to do so when you finish a long rest.</p>
      `
    }
  ]
};

export default BardFeatures;