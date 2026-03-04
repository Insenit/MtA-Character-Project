const SorcererFeatures = {
  1: [
    {
      name: "Sorcerous Origin",
      description: `
      <p>Your very soul bears an innate spark of arcane magic. At 1st level, choose your Sorcerous Origin.</p>
      <p>Your Sorcerous Origin grants you features at 1st level, and again when you reach 6th, 14th, and 18th level in this class.</p>
      `
    },
    {
      name: "Sorcery",
      description: `
      <p>The sorcerous spark within you allows you to spontaneously produce spells. At 1st level, you gain the following features:</p>
      <h4>Cantrips</h4>
      <p>At 1st level, you know two Sorcerer Cantrips of your choice. You learn an additional Sorcerer Cantrip at 4th level and 10th level.</p>
      <h4>Sorcery Points</h4>
      <p>The Sorcerer table shows the number of Sorcery Points that you have to cast the Sorcerer spells you know of 1st-level and higher. To cast a Sorcerer spell, you must expend the amount of Sorcery Points indicated in the table below. You regain all expended Sorcery Points each time you finish a long rest.</p>
      <p>For example, a 3rd level Psion could manifest the detect thoughts spell at 2nd-level by expending 2 Psi Points.</p>
      <h4>Mental Limit</h4>
      <p>Your Psion level limits the potency of spells you can manifest with your psionics. This limit is reflected in the Mental Limit column of the Psion Table. When a Psion feature allows you to expend Psi Points, you can never expend more Psi Points than it costs to manifest a spell of your Mental Limit level.</p>
      <table style="width:100%; text-align:center; border-collapse:collapse;">
        <thead>
          <tr>
            <th style="border:1px solid #444;">Spell Level</th>
            <th style="border:1px solid #444;">Sorcery Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border:1px solid #444;">Cantrip</td>
            <td style="border:1px solid #444;">0</td>
          </tr>
          <tr>
            <td style="border:1px solid #444;">1st</td>
            <td style="border:1px solid #444;">2</td>
          </tr>
          <tr>
            <td style="border:1px solid #444;">2nd</td>
            <td style="border:1px solid #444;">3</td>
          </tr>
          <tr>
            <td style="border:1px solid #444;">3rd</td>
            <td style="border:1px solid #444;">5</td>
          </tr>
          <tr>
            <td style="border:1px solid #444;">4th</td>
            <td style="border:1px solid #444;">6</td>
          </tr>
          <tr>
            <td style="border:1px solid #444;">5th</td>
            <td style="border:1px solid #444;">7</td>
          </tr>
        </tbody>
      </table>
      <h4>Spell Limit</h4>
      <p>Your Sorcerer level limits the potency of spells that you can produce, as shown in the Spell Limit column of the Sorcerer Table. When a feature allows you to expend Sorcery Points, you can never expend more Sorcery Points on that feature than it costs to cast a spell equal to your Spell Limit level.</p>
      <h4>Spells Known of 1st-level and Higher</h4>
      <p>At 1st level, you learn two 1st-level spells of your choice from the Sorcerer spell list at the end of this class description. The Spells Known column of the Sorcerer table shows when you learn additional Sorcerer spells of your choice. All spells you learn must be of a level equal to your Spell Limit or lower. As an example, when you reach 3rd level as a Sorcerer, you can learn one new Sorcerer spell of either 1st or 2nd-level.</p>
      <p>Whenever you gain a level, you can replace one Sorcerer spell you know with another Sorcerer spell of your choice.</p>
      <h4>Origin Spells</h4>
      <p>Each Sorcerous Origin has a list of Origin Spells you learn at the Sorcerer levels noted in your Origin description. Your Origin Spells count as Sorcerer spells for you, these do not count against your total number of Sorcerer Spells Known, and you cannot replace them with other Sorcerer spells.</p>
      <h4>Spellcasting Ability</h4>
      <p>Charisma is your spellcasting ability for Sorcerer spells, and is used when a spell refers to your spellcasting ability, setting a saving throw DC, or when making a spell attack roll:</p>
      <p><strong>Spell save DC</strong> = 8 + your proficiency bonus + your Charisma modifier</p>
      <p><strong>Spell attack modifier</strong> = your proficiency bonus + your Charisma modifier</p>
      <h4>Spellcasting Restrictions</h4>
      <p>Because of the delicate and precise gestures required to cast spells, you cannot cast Sorcerer spells while you are wearing armor or wielding a shield, unless a feature says otherwise.</p>
      <h4>Spellcasting Focus</h4>
      <p>Your body is your spellcasting focus for your Sorcerer spells. You must have a free hand to cast spells that require somatic or material components, and you must still provide material components that are consumed by a spell or have a gold cost.</p>
      `
    }
  ],
  2: [
    {
      name: "Metamagic",
      description: `
      <p>Your innate connection to the arcane allows you to twist your spells in ways only a Sorcerer can. At 2nd level, you learn two Metamagic effects from the list at the end of this class.</p>
      <p>When you cast a spell, you can temporarily modify it with one Metamagic you know by expending extra Sorcery Points, as detailed in the Metamagic's description. You can only apply one Metamagic to a spell, unless a Metamagic says otherwise.</p>
      <p>You learn additional Metamagic effects at certain levels, as shown in the Meta Magics column of the Sorcerer table.</p>
      `
    }
  ],
  3: [
    {
      name: "Sorcerous Regeneration",
      description: `
      <p>Beginning at 3rd level, you can draw on the ambient magic of the world around you to regenerate your sorcerous power. At the end of a short rest, you can choose to regain a number of expended Sorcery Points equal to your Sorcerer level.</p>
      `
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
  5: [
    {
      name: "Magical Flux",
      description: `
      <p>You have begun to gain control over the arcane power within you. Starting at 5th level, each time you finish a long rest, you can replace one spell you know with another Sorcerer spell of your choice equal to your Spell Limit or lower.</p>
      <p>Alternatively, you can replace one of the Metamagic effects that you know with another Metamagic effect of your choice.</p>
      `
    }
  ],
  6: [
    {
      name: "Sorcerous Origin Feature",
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
      name: "Font of Magic",
      description: `
      <p>Beginning at 10th level, you can use your innate talent for the arcane to cast spells unknown to you. Once in between each long rest, you can cast any one Sorcerer spell of your choice, so long as it is equal to your Spell Limit or lower. You expend Sorcery Points and apply Metamagic effects as normal.</p>
      `
    }
  ],
  11: [
    {
      name: "Innate Arcanum",
      description: `
      <p>You have begun to unlock the true potential of your sorcerous blood. At 11th level, you gain a single 6th-level spell slot which you can use to cast your Sorcerer spells, instead of expending Sorcery Points. You regain this Arcanum spell slot when you finish a long rest. Lastly, whenever you learn a new Sorcerer spell, you can learn spells equal to your Arcanum spell slot.</p>
      <p>As a bonus action, you can expend one Arcanum spell slot to regain expended Sorcery Points equal to the slot's level.</p>
      <p>You gain progressively more powerful Arcanum spell slots at certain Sorcerer levels: at 13th level (7th-level slot), at 15th level (8th-level slot), and finally at 17th level (9th-level slot).</p>
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
      name: "Innate Arcanum (7th-Level)",
      description: ``,
      tableOnly: true
    }
  ],
  14: [
    {
      name: "Sorcerous Origin Feature",
      description: ``,
      tableOnly: true
    }
  ],
  15: [
    {
      name: "Innate Arcanum (8th-Level)",
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
      name: "Innate Arcanum (9th-Level)",
      description: ``,
      tableOnly: true
    }
  ],
  18: [
    {
      name: "Sorcerous Origin Feature",
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
      name: "Magic Incarnate",
      description: `
      <p>You have realized the full potential of your Sorcery, and bend magic to your will. At 20th level, any Metamagic you know has its Sorcery Point cost reduced by 1 (to a minimum of 0), and you can apply any number of Metamagics to your spells</p>
      `
    }
  ]
};

export default SorcererFeatures;
