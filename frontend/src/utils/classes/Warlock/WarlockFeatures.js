const WarlockFeatures = {
  1: [
    {
      name: "Eldritch Invocations",
      description: `
        <p>You have bound fragments of occult power known as Eldritch Invocations to Trinkets, tiny objects reminiscent of the power bound within them. If a Trinket is lost or destroyed, it reforms on your person at the end of your next short or long rest.</p>
        <p>Your Trinkets and Eldritch Invocations use the rules below:</p>
        <h4>Invocations Known</h4>
        <p>At 1st level, you have two Trinkets, and bound within each is one Eldritch Invocation of your choice from the list at the end of this class. At certain levels, you gain additional Invocations, as shown in the Invocations Known column of the Warlock table above. If the Invocation has prerequisites, you can learn it at the same time that you meet all of its prerequisites.</p>
        <p>When you gain a Warlock level, you can replace an Eldritch Invocation you know with another Invocation of your choice.</p>
        <h4>Eldritch Spellcasting</h4>
        <p>Through occult scholarship, dark bargains, or an unnatural intuition, Warlocks access power through Pacts with eldritch sources. Choose Intelligence, Wisdom, or Charisma to be the spellcasting ability for your Invocation features and spells.</p>
        <p>You use this Pact Ability whenever one of your Invocations or spells refers to your spellcasting ability, whenever you set a saving throw DC, or when you make a spell attack roll.</p>
        <p><strong>Spell save DC</strong> = 8 + your proficiency bonus + your Pact modifier</p>
        <p><strong>Spell attack modifier</strong> = your proficiency bonus + your Pact modifier</p>
        <h4>Eldritch Blast</h4>
        <p>You can unleash the raw power of your Eldritch Invocations as beams of pure energy. While holding a Trinket containing an Invocation, you can use your action to make a ranged spell attack against a target you can see within 120 feet. On hit, it takes force damage equal to 1d8 + your Pact modifier.</p>
        `
    }
  ],
  2: [
    {
      name: "Otherworldly Patron",
      description: `
      <p>You have rediscovered, contacted, or forged a bargain with an eldritch entity. At 2nd level, choose your Otherworldly Patron that you have entered into a Pact with.</p>
      <p>Your Otherworldly Patron grants you features at 2nd level, and again when you reach 6th, 10th, and 14th level.</p>
      <h4>Patron Magic</h4>
      <p>Each Otherworldly Patron has a list of Patron Spells that you learn at the Warlock levels noted in your Otherworldly Patron description. These spells count as Warlock spells for you, but they do not count against your total number of Spells Known.</p>
      <p>This magic also changes the effects of your Eldritch Blast.</p>
      `
    },
    {
      name: "Pact Magic",
      description: `
      <p>Also at 2nd level, your research and the power bestowed on you by your Patron has given you the ability to cast spells:</p>
      <h4>Cantrips</h4>
      <p>You learn two Cantrips of your choice from the Warlock spell list. You learn another Warlock Cantrip at 4th and 10th level.</p>
      <h4>Spellcasting Ability</h4>
      <p>As your Pact Magic is an extension of the otherworldly and esoteric knowledge you have gathered, you use your Pact spellcasting ability for your Pact Magic spells.</p>
      <h4>Spell Slots</h4>
      <p>The Warlock table shows how many spell slots you have to cast your Warlock spells of 1st through 5th-level. This table also shows the level of those slots; all of your spell slots are the same level. To cast a Warlock spell of 1st-level or higher, you must spend a spell slot. You regain all of your expended spell slots whenever you finish a short or long rest.</p>
      <p>For example, if you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell witch bolt, you must spend one of those slots, and you cast it as a 3rd-level spell.</p>
      <h4>Spells Known of 1st-Level and Higher</h4>
      <p>At 2nd level, know three 1st-level spells of your choice from the Warlock Spell List, found at the end of this class. The Spells Known column of the Warlock table shows when you learn additional Warlock spells of your choice of 1st-level or higher. Spells you learn must be of a level equal to, or lower than, your Slot Level on the Warlock table. For example, at 3rd level, you learn a Warlock spell of 1st or 2nd level.</p>
      <p>Additionally, when you gain a level in this class, you can choose one of the Warlock spells you know and replace it with another spell of your choice from the Warlock spell list, which also must be of a level for which you have spell slots.</p>
      <h4>Invocation Spells</h4>
      <p>Spells that you learn through Invocations count as Warlock spells for you, but do not count against your Spells Known.</p>
      <h4>Spellcasting Focus</h4>
      <p>You can use any Trinket bearing an Eldritch Invocation, or an arcane focus, as a spellcasting focus for your Warlock spells.</p>
      `
    }
  ],
  3: [
    {
      name: "Pact Focus",
      description: `
      <p>You can channel the eldritch power of your Patron into a Pact Focus reminiscent of their true nature. At 3rd level, you gain a Pact Focus, chosen from the options here:</p>
      <h4>Eldritch Blade</h4>
      <p>You can focus your Patron's power into a sinister weapon. As a bonus action, you can conjure an Eldritch Blade in an empty hand. Each time you do, it takes the form of a melee weapon of your choice with these special benefits:</p>
      <ul>
        <li>It can be used as a Trinket for one Eldritch Invocation.</li>
        <li>You can use your Pact modifier, in place of your Strength or Dexterity, for attack and damage rolls with this weapon.</li>
        <li>You are proficient with this weapon if you weren't already.</li>
        <li>Attacks with this weapon deal the same type of damage as your Eldritch Blast, but do not apply its other effects.</li>
      </ul>
      <p>The Eldritch Blade disappears if it is more than 5 feet from you for 1 minute, if you conjure another Eldritch Blade, if you dismiss your Eldritch Blade (no action required), or if you die.</p>
      <p>You can bond a magic melee weapon as an Eldritch Blade by performing a 1-hour ritual. You can use a bonus action to shunt it to an extradimensional space, or conjure it. Bonding a second weapon ends the bond for any previous weapons.</p>
      <h4>Eldritch Familiar</h4>
      <p>You focus your Patron's power to bind an Eldritch Familiar. You learn find familiar and can cast it as a ritual, but it does not count against your number of Spells Known. When you cast find familiar it gains the following special benefits:</p>
      <p><strong><i>Eldritch Forms</i></strong>. Your Familiar can also take the form of one of the Eldritch Familiars at the end of this class.</p>
      <p><strong><i>Combat</i></strong>. The Familiar is bound to obey your orders to the best of its abilities. In combat, it shares your initiative and it acts on your turn. It can move and use its reaction on its own, however, it will only take the Dodge action on its turn unless you use your bonus action to command it to take an action from its stat block or another combat action.</p>
      <p><strong></i>Spellcasting<strong></i>. Whenever you cast a spell or use Eldritch Blast, you can choose for the spell, or any number of beams, to originate from the Familiar if you are within 60 feet of it.</p>
      <h4>Eldritch Tome</h4>
      <p>You focus your Patron's power into a dark grimoire known as an Eldritch Tome. It contains one copy of each Warlock spell you know and this Tome grants you the following benefits:</p>
      <ul>
        <li>Your total number of Invocations Known increases by 1. This bonus Invocation must be chosen from those without prerequisites, and your Tome serves as its Trinket. At the end of each long rest, you can replace this Invocation with another Invocation of your choice with no prerequisites.</li>
        <li>At the end of a long rest you can replace one Warlock spell you know with another Warlock spell of the same level.</li>
        <li>You can cast any Warlock spell contained within your Tome as a ritual if that Warlock spell has the ritual tag.</li> 
      </ul>
      <p>You can spend 1 hour, which can be during a short or long rest, to conjure an exact copy of your Tome, destroying any previous Tomes. If you die your Tome turns to ash.</p>
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
      name: "Empowered Blast",
      description: `
      <p>Starting at 5th level, when you use Eldritch Blast, you create two beams. You can direct the beams at the same target or at different ones, but you make a separate attack roll for each.</p>
      <p>At certain Warlock levels, the number of beams increases: at 11th level it creates three, and finally four at 17th level.</p>
      `
    }
  ],
  6: [
    {
      name: "Otherwordly Patron Feature",
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
      name: "Otherwordly Patron Feature",
      description: ``,
      tableOnly: true
    }
  ],
  11: [
    {
      name: "Elder Arcanum",
      description: `
      <p>You have begun to unlock strange and terrifying power in the form of an Elder Arcanum. At 11th level, you gain one Elder Arcanum from the list at the end of this class. You can learn an Arcanum at the same time you meet its prerequisites, and once learned, an Arcanum cannot be unlearned or replaced.</p>
      <p>You unlock one additional Elder Arcanum of your choice when you reach 13th, 15th, and 17th level in this class.</p>
      `
    },
    {
      name: "Empowered Blast (3)",
      description: ``,
      tableOnly: true
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
      name: "Elder Arcanum (2)",
      description: ``,
      tableOnly: true
    }
  ],
  14: [
    {
      name: "Otherwordly Patron Feature",
      description: ``,
      tableOnly: true
    }
  ],
  15: [
    {
      name: "Elder Arcanum (3)",
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
      name: "Elder Arcanum (4)",
      description: ``,
      tableOnly: true
    },
    {
      name: "Empowered Blast (4)",
      description: ``,
      tableOnly: true
    }
  ],
  18: [],
  19: [
    {
      name: "Ability Score Improvement",
      description: ``,
      tableOnly: true
    }
  ],
  20: [
    {
      name: "Pact Master",
      description: `
      <p>At 20th level, you can strain the eldritch power of your Pact in times of great need. Once per long rest, you can use an action to regain all of your expended Pact Magic spell slots.</p>
      `
    }
  ]
};

export default WarlockFeatures;
