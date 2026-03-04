const PaladinFeatures = {
  1: [
    {
      name: "Fighting Style",
      description: `
      <p>At 1st level, you adopt a Fighting Style that best reflects your training. You cannot select a Fighting Style more than once, even if a feature allows you to select another Fighting Style.</p>
      <p>Whenever you gain a level in this class, you can switch your Fighting Style for another Fighting Style of your choice.</p>
      `
    },
    {
      name: "Sacred Oath",
      description: `
      <p>You have sworn a powerful Sacred Oath, which marks you as a Paladin. At 1st level, you choose the Sacred Oath that best represents your Paladin's convictions and creed.</p>
      <p>Your Sacred Oath grants features at 1st level, and again when you reach 3rd, 7th, 15th, and 20th level in this class.</p>
      <h4>Sacred Tenets</h4>
      <p>Each Sacred Oath has a set of Sacred Tenets which Paladins of the Oath swear to uphold. Should a Paladin knowingly and willingly violate a Tenet of their Oath, they cannot use Sacred Oath or Paladin class features, except for their Fighting Style until they spend 1 hour, which can be during a short or long rest, making reparations appropriate to their Oath.</p>
      <p>If a Paladin consistently violates the Tenets of their Oath, they risk breaking it completely. Those who do may become Oathless Paladins, evil Blackguards, or must switch classes.</p>
      <h4>Divine Fervor</h4>
      <p>The righteous power of your Sacred Oath is represented by a pool of Divine Fervor used to fuel various Paladin and Oath features. You have an amount of Divine Fervor equal to your Paladin level + your Charisma modifier (minimum of 0). You regain expended Divine Fervor when you finish a long rest.</p>
      `
    }
  ],
  2: [
    {
      name: "Spellcasting",
      description: `
      <p>At 2nd level, you learn to draw upon the power of your Sacred Oath to cast divine spells. You gain the following benefits:</p>
      <h4>Spell Slots</h4>
      <p>The Paladin table shows how many spell slots you have to cast your spells of 1st-level and higher. To cast a Paladin spell, you must expend a spell slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.</p>
      <h4>Spells Known of 1st-Level & Up</h4>
      <p>At 2nd level, know two 1st-level spells from the Paladin spell list. The Spells Known column of the Paladin table shows when you learn more Paladin spells of your choice. Each spell must be of a level for which you have spell slots.</p>
      <p>When you gain a Paladin level, you can choose one Paladin spell you know to replace with another Paladin spell of your choice that is also of a level for which you have spell slots.</p>
      <h4>Oath Spells</h4>
      <p>Each Sacred Oath has a list of Oath Spells that you learn at the Paladin levels in your Sacred Oath's description. These Oath Spells count as Paladin spells for you, but they do not count against your total number of Spells Known and they cannot be replaced when you gain a level in this class.</p>
      <h4>Spellcasting Ability</h4>
      <p>Your power is drawn from the strength of your convictions, so Charisma is your spellcasting ability for Paladin spells. You use Charisma when a spell refers to your spellcasting ability, your Saving throw DC, or making a spell attack roll.</p>
      <p><strong>Spell save DC</strong> = 8 + your proficiency bonus + your Charisma modifier</p>
      <p><strong>Spell attack modifier</strong> = your proficiency bonus + your Charisma modifier</p>
      <h4>Spellcasting Focus</h4>
      <p>You use a holy symbol as the focus for Paladin spells. A holy symbol is a Tiny object or emblem that represents the Tenets of your Oath. If it is emblazoned on a shield, it can be used as a spellcasting focus for Paladin spells.</p>
      `
    },
    {
      name: "Divine Smite",
      description: `
      <p>You can channel the power of your Oath into your weapons. Also starting at 2nd level, when you hit a target with a melee weapon attack, you can expend one spell slot to deal bonus damage. This bonus damage is 2d8 for a 1st-level slot, plus 1d8 for each slot level higher than 1st, up to 6d8 damage.</p> 
      <p>The damage of this feature depends on your alignment:</p>
      <table style="width:100%; text-align:center; border-collapse:collapse;">
        <thead>
          <tr>
            <th style="border:1px solid #444;">Alignment</th>
            <th style="border:1px solid #444;">Damage Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border:1px solid #444;">Good</td>
            <td style="border:1px solid #444;">Radiant</td>
          </tr>
          <tr>
            <td style="border:1px solid #444;">Neutral</td>
            <td style="border:1px solid #444;">Thunder</td>
          </tr>
          <tr>
            <td style="border:1px solid #444;">Evil</td>
            <td style="border:1px solid #444;">Necrotic</td>
          </tr>
        </tbody>
      </table>
      `
    }
  ],
  3: [
    {
      name: "Divine Regeneration",
      description: `
      <p>Starting at 3rd level, during the course of a short rest, you can expend Divine Fervor (up to your Charisma modifier) to regain a number of expended spell slots of a combined level equal to the Divine Favor you expended.</p>
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
      name: "Divine Sense",
      description: `
      <p>Starting at 5th level, you can use an action to sense powerful extraplanar good and evil. For the next 10 minutes, you know the location and creature type of any celestial, elemental, fey, fiend, or undead within 60 feet of you that isn't behind total cover or hidden from divination magic.</p>
      <p>Once you use your Divine Sense, you must finish a short or long rest before you can use it again. If you have no uses left, you can expend 1 Divine Fervor to use this feature again.</p>
      `
    },
    {
      name: "Extra Attack",
      description: `
      <p>Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. Moreover, if you use your action to Dash or to Disengage you can make one weapon attack as a bonus action on that turn.</p>
      <p>You retain the benefits of this feature if you violate your Oath.</p>
      `
    }
  ],
  6: [
    {
      name: "Aura of Protection",
      description: `
      <p>Your unwavering belief in yourself bolsters those around you. Beginning at 6th level, you exude an invisible Aura outward in a 10-foot radius as long as you aren't Incapacitated. Your Aura only benefits you and creatures of your choice within range.</p>
      <p>Creatures under the effects of your Aura of Protection add your Charisma modifier (minimum of +0) to saving throws.</p>
      <p>At certain levels, the radius of Aura of Protection increases as shown in the Aura Radius column on the Paladin table.</p>
      `
    }
  ],
  7: [
    {
      name: "Oath Feature",
      description: ``,
      tableOnly: true
    }
  ],
  8: [
    {
      name: "Ability Score Improvement",
      description: ``,
      tableOnly: true
    }
  ],
  9: [
    {
      name: "Divine Health",
      description: `
      <p>The divine magic of your Oath protects you from harm. At 9th level, you gain resistance to poison damage, immunity to the Poisoned condition, and immunity to all nonmagical disease.</p>
      `
    }
  ],
  10: [
    {
      name: "Aura of Courage",
      description: `
      <p>Your Aura infuses those under its effects with great bravery in the face of evil and danger. Beginning at 10th level, creatures under your Aura of Protection are immune to the frightened condition. If a frightened creature enters your Aura, the effect is suspended while it remains within your Aura.</p>
      `
    }
  ],
  11: [
    {
      name: "Improved Divine Smite",
      description: `
      <p>Your supernatural conviction infuses your strikes. Starting at 11th level, you deal a bonus 1d8 damage whenever you hit a creature with a melee weapon attack. This bonus damage is the same type dealt by your Divine Smite.</p>
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
  13: [],
  14: [
    {
      name: "Purifying Touch",
      description: `
      <p>Starting at 14th level, you can use your divine power to drive out hostile spells. As an action, you can instantly end a single spell affecting you, or one willing creature that you touch.</p>
      <p>Once you use this feature you must finish a short or long rest before you can use it again. When you have no uses left, you can expend 5 Divine Fervor to use this feature again.</p>
      `
    }
  ],
  15: [
    {
      name: "Oath Feature",
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
  17: [],
  18: [
    {
      name: "Aura of Conviction",
      description: `
      <p>Your legendary conviction for your Oath infuses your Aura of Protection with wondrous power. Starting at 18th level, when a creature other than yourself under your Aura of Protection fails a saving throw, you can use your reaction to allow it to reroll its saving throw. However, it must use the new result.</p>
      <p>Once you use this feature to turn a failed saving throw into a successful one, you must finish a short or long rest before you can use this reaction again. When you have no uses left, you can expend 5 Divine Fervor to use this reaction again.</p>
      `
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
      name: "Oath Feature",
      description: ``,
      tableOnly: true
    }
  ]
};

export default PaladinFeatures;
