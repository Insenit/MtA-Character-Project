const PsionFeatures = {
  1: [
    {
      name: "Awakening",
      description: `
      <p>Psionic ability, though it always comes from within, awakens in a mind depending on training, or lack thereof. At 1st level, choose the Awakening to best represent your Psion.</p>
      <p>Your Awakening grants you features at 1st level, and again when you reach 3rd, 6th, 14th, and 18th level.</p>
      `
    },
    {
      name: "Psionics",
      description: `
      <p>Starting from 1st level, the psionic power you have awakened within your psyche allows you to manifest mystical spells.</p>
      <p>Though your magic is fueled by your psionic power, your spells count as spellcasting for the purposes of features and spells like detect magic, counterspell, and antimagic field.</p>
      <h4>Cantrips</h4>
      <p>At 1st level, you know two Psion Cantrips of your choice. You learn an additional Psion Cantrip at 4th level and 10th level.</p>
      <h4>Psi Points</h4>
      <p>Your innate psionic power is represented by a special pool of Psi Points. The Psion table shows the number of Psi Points you have at each level. To manifest one of the Psion spells you know, you must expend a number of Psi Points equal to the level of the spell (0 for Cantrips), and you regain all expended Psi Points each time you finish a short or long rest.</p>
      <p>For example, a 3rd level Psion could manifest the detect thoughts spell at 2nd-level by expending 2 Psi Points.</p>
      <h4>Mental Limit</h4>
      <p>Your Psion level limits the potency of spells you can manifest with your psionics. This limit is reflected in the Mental Limit column of the Psion Table. When a Psion feature allows you to expend Psi Points, you can never expend more Psi Points than it costs to manifest a spell of your Mental Limit level.</p>
      <h4>Spells Known of 1st-level and Higher</h4>
      <p>At 1st level, know two 1st-level spells of your choice from the Psion spell list at the end of this class. The Spells Known column of the Psion table shows when you learn more Psion spells of your choice. Each spell you learn must be of a level equal to your Mental Limit or lower. For instance, when you reach 3rd level, you learn one Psion spell of 1st or 2nd-level.</p>
      <p>When you gain a Psion level, you can replace one Psion spell you know with another Psion spell of your choice.</p>
      <h4>Awakening Spells</h4>
      <p>Each Awakening has a list of spells that you learn at certain Psion levels, as noted in your Awakening description. These Awakening Spells count as Psion spells for you. They do not count against your total number of Spells Known, and you can't switch your Awakening spells when you gain a level.</p>
      <h4>Spellcasting Ability</h4>
      <p>Intelligence is your spellcasting ability for your Psion spells. You use Intelligence when a spell refers to your spellcasting ability. You also use your Intelligence modifier when you set the saving throw DC or make an attack roll for a Psion spell.</p>
      <p><strong>Spell save DC</strong> = 8 + your proficiency bonus + your Intelligence modifier</p>
      <p><strong>Spell attack modifier</strong> = your proficiency bonus + your Intelligence modifier</p>
      <h4>Spellcasting Focus</h4>
      <p>Your mind is the spellcasting focus for your Psion spells. You must have a free hand to cast spells that require somatic or material components, and you must still provide any material components that are consumed or have a required gold cost.</p>
      <p>Whenever you manifest a Psion spell you exhibit noticeable changes. Whether your eyes glow with the eldritch light of the Far Realm, or your body partially phases into the astral plane, creatures are aware that you are using your psionic abilities.</p>
      <h4>Spellcasting Restrictions</h4>
      <p>Due to the focus required to manifest your psionic spells, you cannot use your Psionics if you are wearing medium or heavy armor, or wielding a shield, unless a feature allows you to.</p>
      `
    }
  ],
  2: [
    {
      name: "Mystic Talents",
      description: `
      <p>In the solace of training, each psionic mind manifests unique powers known as Mystic Talents. At 2nd level, you unlock two Mystic Talents of your choice. At certain Psion levels, you unlock additional Talents, as shown in the Mystic Talents column of the Psion table.</p>
      <p>Whenever you gain a level in this class, you can choose one Mystic Talent you know and replace it with a Mystic Talent of your choice for which you meet the prerequisites. You cannot replace a Talent if it is the prerequisite for another Talent.</h4>
      `
    },
    {
      name: "Psionic Recovery",
      description: `
      <p>Starting at 2nd level, you can use a bonus action on your turn to clear your mind and regenerate a number of expended Psi Points equal to your Intelligence modifier (minimum of 1).</p>
      <p>Once you use this feature you must finish a long rest before you can do so again. When you reach 11th level in this class, you can use this feature twice between each long rest.</p>
      `
    }
  ],
  3: [
    {
      name: "Awakening Feature",
      description: ``,
      tableOnly: true
    }
  ],
  4: [
    {
      name: "Ability Score Improvement",
      description: `
      <p>When you reach 4th level, 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.</p>
      `
    }
  ],
  5: [],
  6: [
    {
      name: "Awakening Feature",
      description: ``,
      tableOnly: true
    }
  ],
  7: [],
  8: [
    {
      name: "Ability Score Improvement",
      description: ``,
      tableOnly: true
    }
  ],
  9: [],
  10: [
    {
      name: "Consumptive Power",
      description: `
      <p>Starting at 10th level, whenever you would spend Psi Points, you can expend your hit points instead. When you do, reduce your current and maximum hit points by twice the number of Psi Points you'd normally spend. This reduction cannot be lessened in any way, but is restored after a long rest.</p>
      `
    }
  ],
  11: [
    {
      name: "Interior Gate",
      description: `
      <p>Even the awakened mind of a Psion still has further limits to unlock, known as Interior Gates. At 11th level, you unlock the first of these Interior Gates and learn a 6th-level Psion spell. It does not count against your total number of Spells Known. Once between each long rest, you can manifest this Psion spell, at 6th-level, without expending Psi Points.</p>
      <p>At certain Psion levels, you unlock more powerful Interior Gates, allowing you to learn and cast higher level Psion spells with the same limitations: at 13th level (7th-level spell), 15th level (8th-level spell), and finally at 17th level (9th-level spell).</p>
      <p>Whenever you gain a level you can replace one of these Interior Gate spell with another Psion spell of the same level.</p>
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
      name: "Interior Gate (7th-Level)",
      description: ``,
      tableOnly: true
    }
  ],
  14: [
    {
      name: "Awakening Feature",
      description: ``,
      tableOnly: true
    }
  ],
  15: [
    {
      name: "Interior Gate (8th-Level)",
      description: ``,
      tableOnly: true
    }
  ],
  16: [
    {
      name: "Ability Score Improvement",
      description: ``,
      tableOnly: true
    }
  ],
  17: [
    {
      name: "Interior Gate (9th-Level)",
      description: ``,
      tableOnly: true
    }
  ],
  18: [
    {
      name: "Awakening Feature",
      description: ``,
      tableOnly: true
    }
  ],
  19: [
    {
      name: "Ability Score Improvement",
      description: ``,
      tableOnly: true
    }
  ],
  20: [
    {
      name: "Limitless",
      description: `
      <p>Your body is but a simple vessel for your fully awakened mind. At 20th level, you gain resistance to all bludgeoning, piercing, psychic, and slashing damage. You stop aging, are immune to all disease, poison damage, and the poisoned condition.</p>
      <p>Finally, if you spend 10 minutes meditating or performing only light activity, you regain all of your expended Psi Points.</p>
      `
    }
  ]
};

export default PsionFeatures;
