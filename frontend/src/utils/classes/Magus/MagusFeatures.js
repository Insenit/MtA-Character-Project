const MagusFeatures = {
  1: [
    {
      name: "Arcane Armory",
      description: `
      <p>At 1st level, you learn the signature enchantment of the Magi, marking you as a member of their ranks. Over the course of 1 hour, which can be during a short or long rest, you can touch one melee weapon, shield, or set of armor to perform a ritual adding the item to your Arcane Armory. Your Arcane Armory is an extradimensional space that only its Magus can access.</p>
      <p>Objects in your Arcane Armory gain the following benefits:</p>
      <ul>
        <li>They count as magical weapons, shields, or sets of armor.</li>
        <li>You can use your Intelligence, in place of Dexterity, when calculating Armor Class in this light and medium armor, so long as you do not already add it to your Armor Class.</li>
        <li>As a bonus action, you can shunt or summon any number of objects of your choice from within your Arcane Armory, instantly equipping, donning, or doffing those items.</li>
      </ul>
      <p>Your Arcane Armory can hold a total number of objects equal to 1 + your Intelligence modifier (a minimum of 1) at one time, but one of those objects must always be a weapon. If you perform this ritual on another object while the Armory is at its maximum, one object of your choice is removed.</p>
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
      name: "Spellcasting",
      description: `
      <p>At 2nd level, you have learned to cast arcane spells, much like a Wizard, which you use to enhance your abilities in combat:</p>
      <h4>Cantrips</h4>
      <p>At 2nd level, you learn two Cantrips of your choice from the Magus spell list. You learn an additional Magus Cantrip of your choice when you reach 4th level, and again at 10th level.</p>
      <h4>Spellcasting Focus</h4>
      <p>You can use any weapon or shield within your Arcane Armory as a spellcasting focus for your Magus spells. They can also be used to perform the somatic components of Magus spells.</p>
      <p>You can also use an Arcane Focus as a spellcasting focus.</p>
      <h4>Spell Slots</h4>
      <p>The Magus table shows how many spell slots you have to cast spells of 1st-level and higher. To cast your spells, you expend a slot equal to that spell's level or higher. You regain all expended slots when you finish a long rest.</p>
      <h4>Spells Known of 1st-Level & Up</h4>
      <p>You know two 1st-level spells of your choice from the Magus spell list. The Spells Known column of the Magus table shows when you learn more Magus spells of your choice. Each spell must be of a level you have slots for. For example, when you reach 5th level in this class, you can learn one new Magus spell of either 1st or 2nd-level.</p>
      <p>Whenever you gain a Magus level, you can choose one Magus spell you know and replace it with another Magus spell of your choice for which you have spell slots.</p>
      <h4>Spellcasting Ability</h4>
      <p>As you commit your spells to memory, Intelligence is your spellcasting ability for your Magus spells. Use Intelligence when a spell refers to your spellcasting ability, when you set a saving throw DC, or when you make a spell attack roll.</p>
      <p><strong>Spell save DC</strong> = 8 + your proficiency bonus + your Intelligence modifier</p>
      <p><strong>Spell attack modifier</strong> = your proficiency bonus + your Intelligence modifier</p>
      `
    },
    {
      name: "Spellstrike",
      description: `
      <p>Starting at 2nd level, you learn to channel your spells through weapons. Once per turn when you would make an attack, you can cast a Magus spell, expending a spell slot as normal, and make an attack with a melee Arcane Armory weapon. To be channeled through a Spellstrike attack in this way, the spell must meet the following requirements:</p>
      <ul>
        <li>The Magus spell must have a casting time of 1 action.</li>
        <li>The Magus spell must require a single spell attack roll, force its target to make a saving throw, or affect a total number of hit points worth of creatures (like sleep).</li>
      </ul>
      <p>If your attack misses, the spell fails and has no effect. On a hit, the spell takes effect immediately after the normal effects and damage of your weapon attack, using the rules below:</p>
      <p><strong><i>Area of Effect.</i></strong> If the spell targets an area greater than a 10-foot cube, it takes effect as a 15-foot cone originating from you, which must include your target, or it is contained to only affect the target of your attack (your choice on hit).</p>
      <p><strong><i>Cantrips.</i></strong> You do not deal the damage of the Cantrip along with the damage of your weapon. Instead, your weapon deals the damage type dealt by the Cantrip, and applies the Cantrip's additional effects, other than damage, on hit.</p>
      <p><strong><i>Concentration.</i></strong> If the spell requires your concentration, you must concentrate on it as soon as it takes effect on hit.</p>
      <p><strong><i>Saving Throws.</i></strong> If the spell requires a saving throw when cast, the target makes the initial saving throw at disadvantage on hit. If you score a critical hit on the attack, it automatically fails this saving throw. Other targets (if any) save as normal.</p>
      <p><strong><i>Spell Attacks.</i></strong> If the spell requires a spell attack roll, it instantly takes effect when you hit with your weapon attack.</p>
      `
    }
  ],
  3: [
    {
      name: "Arcane Regeneration",
      description: `
      <p>Starting at 3rd level, you can meditate on your knowledge of the arcane to regenerate magic potential. During a short rest, you can recover spell slots of a combined level equal to your Intelligence modifier. Once you do so, you must finish a long rest before you can use this feature again.</p>
      `
    },
    {
      name: "Esoteric Order",
      description: `
      <p>At 3rd level, choose the Esoteric Order that best represents your Magus' skills.</p>
      <p>Your Esoteric Order grants you features at 3rd level, and again when you reach 7th, 15th, and 20th level in this class.</p>
      <h4>Order Spells</h4>
      <p>Most Esoteric Orders have a list of Order Spells you learn at the Magus levels noted in your Order description. Your Order Spells count as Magus spells for you, but don't count against your total number of Spells Known. You cannot replace these Order Spells with another spell when you gain a level.</p>
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
      <p>You can still only make one Spellstrike attack per turn.</p>
      `
    },
    {
      name: "Spellsight",
      description: `
      <p>Also at 5th level, you can use an action awaken your senses to the presence of magic within 30 feet as if you had cast detect magic. While this sense is active, you can touch an object and gain knowledge as if you had cast identify. This special sense requires your concentration, and it lasts for 1 minute.</p>
      <p>You can use this feature a number of times equal to your Intelligence modifier (minimum of once), and you regain all expended uses when you finish a long rest.</p>
      `
    }
  ],
  6: [
    {
      name: "Ethereal Jaunt",
      description: `
      <p>Starting at 6th level, you can focus residual power from spells to slip through the Ethereal Plane. On your turn, immediately before or after you cast a Magus spell or Spellstrike, you can teleport to an unoccupied space you can see within 10 feet.</p>
      <p>The range of this feature is 10 feet, plus an extra 10 feet for each level of the spell slot you expended (maximum 60 feet).</p>
      `
    }
  ],
  7: [
    {
      name: "Esoteric Order Feature",
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
      name: "Spellsunder",
      description: `
      <p>You can use Spellstrike to cut down hostile spells. Starting at 9th level, when you see a creature cast a spell that will affect you, you can use a reaction to expend a spell slot and use an Arcane Armory weapon to attack the spell as it takes effect.</p>
      <p>If the spell was cast at a level equal to the level of the spell slot you expended or lower, the spell fails and has no effect. If it was cast at a level higher than the slot you expended, make an attack roll with your weapon. If your attack roll exceeds 12 + twice the level of the spell, the spell fails and has no effect.</p>
      `,
    }
  ],
  10: [
    {
      name: "Mystical Ward",
      description: `
      <p>You can cast your spells in battle and avoid their most potent effects. Beginning at 10th level, you are immune to the effects of any Magus spell you cast, unless you wish to be affected.</p>
      `
    }
  ],
  11: [
    {
      name: "Arcane Conservation",
      description: `
      <p>Starting at 11th level, when you use Spellstrike and miss with your weapon attack, you can regain one expended spell slot. When you do so, you cannot also use Ethereal Jaunt.</p>
      <p>The spell slot you regain with this feature must be a lower level than the slot you expended as part of your Spellstrike.</p>
      `
    },
    {
      name: "Prismatic Strikes",
      description: `
      <p>Your weapons are infused with the arcane power you channel through them. Starting at 11th level, your attacks with Arcane Armory weapons deal a bonus 1d8 damage on hit.</p>
      <p>This bonus damage must be the damage type dealt by a Magus spell you know, and it can be chosen on hit.</p>
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
  13: [],
  14: [
    {
      name: "Superior Spellsunder",
      description: `
      <p>Starting at 14th level, when a creature you can see within 30 feet is targeted by a spell you can see, you can use a reaction to teleport to an unoccupied space within 5 feet of it and use your Spellsunder reaction against the triggering spell.</p>
      `
    }
  ],
  15: [
    {
      name: "Esoteric Order Feature",
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
      name: "Improved Arcane Conservation",
      description: `
      <p>Starting at 18th level, when you use Arcane Conservation, you regain the same spell slot you expended.</p>
      `
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
      name: "Esoteric Order Feature",
      description: ``,
      tableOnly: true
    }
  ]
};

export default MagusFeatures;