const WizardFeatures = {
  1: [
    {
      name: "Arcanist",
      description: `
      <p>You understand the arcane and esoteric as well as any mortal being can. At 1st level, you gain proficiency in Arcana. If you are already proficient in Arcana, you instead add double your proficiency bonus to your Intelligence (Arcana) checks.</p>
      `
    },
    {
      name: "Spellcasting",
      description: `
      <p>Through your research, study, and practice you have learned to manipulate the forces of reality to cast spells. At 1st level, you gain the features below and create your own Spellbook:</p>
      <h4>Focus Schools</h4>
      <p>Arcane magic is divided into eight traditional Spell Schools: Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion, Necromancy, and Transmutation; each with its own unique theorems, esoteric rules, and magical abilities.</p>
      <p>At 1st level, you gain unique insights into one Spell School of your choice from the list above, your Focus School. Certain Wizard features only apply to spells from Focus Schools.</p>
      <p>You gain an additional Focus School of your choice at 10th and 18th level. Whenever you gain a Focus School after your first, you can forgo the new School to add three new Wizard spells to your Spellbook (see below), all from Focus Schools.</p>
      <h4>Cantrips</h4>
      <p>At 1st level, you know three Cantrips from the Wizard spell list, one of which must be from your Focus School. You learn another Wizard Cantrip of your choice from any Spell School at 4th level, and again at 10th level in this class.</p>
      <h4>Wizard's Spellbook</h4>
      <p>You have compiled yourself an Arcane Spellbook, a tome of arcane lore with its own secret notation unique to you. It can only be read by you, or another Wizard if they are able to decipher your notation. You determine what your Spellbook looks like, but it must be a Tiny object capable of storing written information.</p>
      <p>At 1st level, your Spellbook contains six 1st-level Wizard spells of your choice, two must be from your Focus School.</p>
      <h4>Copying Additional Spells</h4>
      <p>As you adventure, you may discover additional Wizard spells recorded in ancient scrolls or hidden away in esoteric tomes.</p>
      <p>When you discover such a spell of 1st-level or higher, you can copy it into your Spellbook if the spell is a level for which you have spell slots as shown on the Wizard class table. To do so, it takes you 2 hours per level of the spell. This represents all of the experimentation, deciphering, and arcane notations that are necessary for you to understand this new spell.</p>
      <p>When you copy a new Wizard spell from one of your Focus Schools, the time required to copy that spell is halved.</p>
      <h4>Replacing your Spellbook</h4>
      <p>You can copy Wizard spells from your Spellbook into another Spellbook only needing to spend 1 hour per level of the spell, as your own notation is easier to decipher. This time is halved to 30 minutes per level for spells from Focus Schools.</p>
      <p>If your Spellbook is lost, you can use this same procedure to transcribe the Wizard spells you currently have prepared into a new Spellbook. The knowledge of all other spells from your Spellbook is lost. For this reason, many Wizards create multiple well-hidden copies of their Spellbook.</p>
      <h4>Spellcasting Focus</h4>
      <p>You can use either an Arcane Focus or your Spellbook as the spellcasting focus for the Wizard spells you have prepared.</p>
      <h4>Spellcasting Restrictions</h4>
      <p>Because of the delicate and precise gestures required to cast spells, you cannot cast Wizard spells while you are wearing armor or wielding a shield, unless a feature says otherwise.</p>
      <h4>Preparing & Casting Spells</h4>
      <p>The Wizard table above shows how many spell slots you have to cast spells. To cast a Wizard spell of 1st-level or higher, you must expend a slot of the spell's level or higher. You regain all of your expended spell slots when you finish a long rest.</p>
      <p>During each long rest, you prepare the list of Wizard spells that are available for you to cast by studying your Spellbook.</p>
      <p>When you do, you choose a number of Wizard spells from your Spellbook equal to your Wizard level + your Intelligence modifier (a minimum of 1). This process of memorization and study takes 1 minute per each level of the spells you prepare.</p>
      <h4>Learning Spells of 1st-level & Higher</h4>
      <p>When you gain a Wizard level, you add two Wizard spells of your choice to your Spellbook at no cost, one of which must be from your Focus School. Both the spells must be of a level for which you have spell slots, as shown on the Wizard table.</p>
      <p>Spells added to your Spellbook this way reflect the arcane research you conduct, as well as intellectual breakthroughs you have had about the nature of magic and the multiverse.</p>
      <h4>Ritual Casting</h4>
      <p>Your understanding of the arcane arts allows you to perform ritual magic. You can cast any Wizard spell in your Spellbook as a ritual, so long as it has the ritual tag, even if not prepared.</p>
      <h4>Spellcasting Ability</h4>
      <p>As you learned your magic through research and study, your Intelligence is the spellcasting ability for your Wizard spells. Use Intelligence if one of your Wizard spells refers to your spellcasting ability, Spell save DC, or Spell attack modifier.</p>
      <p><strong>Spell save DC</strong> = 8 + your proficiency bonus + your Intelligence modifier</p>
      <p><strong>Spell attack modifier</strong> = your proficiency bonus + your Intelligence modifier</p>
      `
    }
  ],
  2: [
    {
      name: "Studious Recovery",
      description: `
      <p>Starting at 2nd level, you can study your Spellbook to regain some of your potential. During the course of a short rest, you can regain a single expended spell slot of a level equal to half your Wizard level (rounded down), or lower.</p>
      <p>You cannot use this feature to recover a spell slot higher than your Intelligence modifier (minimum of 1st-level).</p>
      `
    }
  ],
  3: [
    {
      name: "Arcane Tradition",
      description: `
      <p>At 3rd level, you choose the Arcane Tradition that represents your magical knowledge.</p>
      <p>Your Arcane Tradition grants you features at 3rd level, and again when you reach 6th, 10th, and 14th level in this class.</p>
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
  5: [],
  6: [
    {
      name: "Tradition Feature",
      description: ``,
      tableOnly: true
    }
  ],
  7: [
    {
      name: "Signature Spell",
      description: `
      <p>Your research has led you to the discovery of a spell that is known only to you, a Signature Spell. At 7th level, choose one spell in your Spellbook of 2nd-level or lower to become your Signature Spell. It must be chosen from one of your Focus Schools.</p>
      <p>You can modify this spell in any number of the ways below, but you cannot modify it so that its spell level is greater then the level for which you have spell slots on the Wizard table.</p>
      <p>If the spell gains benefits from being cast at a higher level, the level at which they gain these benefits also increases.</p>
      <p>Once discovered, your Signature Spell is added as a new spell in your Spellbook. You also rename your new spell to reference you as its creator and its modified power. Another Wizard can copy your Signature Spell into their Spellbook following the normal rules for copying spells.</p>
      <p>At certain Wizard levels, your study results in additional Signature Spells, following these guidelines: at 11th-level you create a new Signature Spell of 3rd-level or lower, and at 15th-level you gain a Signature Spell of 5th-level or lower.</p>
      <p>Alternatively, whenever you create a new Signature Spell, you can select a previous Signature Spell and modify it again.</p>
      <h4>Casting Time</h4>
      <p>If the spell has a casting time of one action, it becomes one bonus action, but the spell level of this spell increases by 1.</p>
      <h4>Components</h4>
      <p>You remove components from the spell. It must have at least one remaining component. You cannot remove components that are consumed or have a gold cost. For each component you remove, the level of this spell increases by 1.</p>
      <h4>Concentration</h4>
      <p>The level of this spell increases by 1, but if you fail a saving throw to maintain your concentration on this spell you can use your reaction to automatically succeed instead.</p>
      <h4>Damage</h4>
      <p>You replace all the damage dealt by the spell with the type of damage dealt by another spell contained in your Spellbook.</p>
      <h4>Ritual</h4>
      <p>If the spell lacks the Ritual tag, it has a casting time of one action or one bonus action, and it does not have a material component with a gold cost, it becomes a ritual spell for you.</p>
      <h4>Shape</h4>
      <p>You modify the shape of a spell that normally targets a cone, cube, cylinder, line, or sphere to target an area of equivalent size (the same number of 5-foot cubes) but a new shape.</p>
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
  9: [],
  10: [
    {
      name: "New Focus School",
      description: ``,
      tableOnly: true
    },
    {
      name: "Tradition Feature",
      description: ``,
      tableOnly: true
    }
  ],
  11: [
    {
      name: "Signature Spell (2)",
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
  13: [],
  14: [
    {
      name: "Tradition Feature",
      description: ``,
      tableOnly: true
    }
  ],
  15: [
    {
      name: "Signature Spell (3)",
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
  17: [],
  18: [
    {
      name: "Archmage",
      description: `
      <p>You have mastered the lofty heights of arcane knowledge. At 18th level, choose two spells of 1st or 2nd-level that you have in your Spellbook. These spells must be from one of your Focus Schools and have a casting time of one action. You always have these spells prepared, though they don't count against your prepared spells. You can cast these spells at their lowest level without spending a spell slot.</p>
      <p>You can replace one of these spells following the same guidelines by spending 8 hours studying your Spellbook.</p>
      `
    },
    {
      name: "New Focus School",
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
      name: "Arcane Mastery",
      description: `
      <p>You are an unparalleled master of arcane arts who bends reality itself their will. At 20th level, you are considered to always have every spell in your Spellbook prepared.</p>
      `
    }
  ]
};

export default WizardFeatures;