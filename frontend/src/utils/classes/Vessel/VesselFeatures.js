const VesselFeatures = {
  1: [
    {
      name: "Spirit Mantle",
      description: `
      <p>At 1st level, you can use a bonus action to cloak yourself with (or dismiss) your Spirit Mantle, an ethereal cloak of spiritual power that marks a dramatic change in your appearance.</p>
      <p>While the Mantle is active, you gain the following features:</p>
      <h4>Iridescent Strikes</h4>
      <p>Whenever you make an unarmed strike you can cloak your attack in spiritual power. When you do so, you use Charisma, in place of Strength, for attack and damage rolls, its damage type changes to radiant, and its damage die becomes a d6.</p>
      <p>The damage die of this strike increases at certain Vessel levels: 5th level (d8), 11th level (d10), and 17th level (d12).</p>
      <p>Also, whenever you take the Attack action, you can make one unarmed Iridescent Strike as a bonus action.</p>
      <h4>Spiritual Defense</h4>
      <p>So long as you are not wearing armor or wielding a shield spiritual power wards you and your Armor Class equals 10 + your Constitution modifier + your Charisma modifier.</p>
      `
    },
    {
      name: "Unsealed Aspects",
      description: `
        <p>You have learned to channel Aspects of your Spirit's power. At 1st level, you gain two Unsealed Aspects of your choice. If an Aspect has a prerequisite, like another Unsealed Aspect or a Vessel level, you must meet those prerequisites to unlock it.</p>
        <p>At certain Vessel levels, you unlock additional Aspects, as shown in the Unsealed Aspects column of the Vessel table.</p>
        <p>Finally, when you unlock a new Unsealed Aspect, you can replace one of your Unsealed Aspects with another Aspect of your choice. Though, you can't replace prerequisite Aspects.</p>
        `
    }
  ],
  2: [
    {
      name: "Vessel Magic",
      description: `
      <p>Also at 2nd level, you learn to draw upon the immense power of the Sealed Spirit bound within your soul to produce spells:</p>
      <h4>Cantrips</h4>
      <p>You learn two Cantrips of your choice from the Vessel spell list. You learn another Vessel Cantrip at 4th and 10th level.</p>
      <h4>Spell Slots</h4>
      <p>The Vessel table above shows how many spell slots you have to cast your Vessel spells and the level of those spell slots. All of your spell slots are the same level. To cast a Vessel spell of 1st-level or higher, you must expend a spell slot. You regain all of your spell slots when you finish a short or long rest.</p>
      <h4>Spells Known of 1st-Level and Higher</h4>
      <p>At 2nd level, you learn two 1st-level spells of your choice from the Vessel Spell List.</p>
      <p>The Spells Known column of the Vessel table shows when you learn additional Vessel spells of 1st-level and up. Vessel spells you learn must all be of a level equal to, or lower than, your Slot Level, as shown on the Vessel table.</p>
      <p>When you gain a Vessel level, you can replace one Vessel spell you know with a Vessel spell of your choice, which also must be of a level for which you have spell slots.</p>
      <h4>Spellcasting Ability</h4>
      <p>Charisma is your spellcasting ability for your Vessel spells, as you are using your willpower to draw on the magic of the Spirit within. You use your Charisma when a spell refers to your spellcasting ability, when setting a saving throw DC for a spell, and when making a spell attack roll.</p>
      <p><strong>Spell save DC</strong> = 8 + your proficiency bonus + your Charisma modifier</p>
      <p><strong>Spell attack modifier</strong> = your proficiency bonus + your Charisma modifier</p>
      <h4>Spellcasting Focus</h4>
      <p>Your body is the spellcasting focus for your Vessel spells. You must have a free hand to cast a spell that requires a somatic or a material component, and you must still provide material components that are consumed by a spell or have a gold cost.</p>
      `
    }
  ],
  3: [
    {
      name: "Sealed Spirit",
      description: `
      <p>You have unlocked the true power of the entity bound in your soul. At 3rd level, choose one of the following Sealed Spirits.</p>
      <p>Your Sealed Spirit grants you features at 3rd level, and again when you reach 6th, 14th, and 18th level in this class.</p>
      <h4>Archon Form</h4>
      <p>Each Sealed Spirit includes a unique stat block for its Archon Form. Archons are vaguely ethereal, humanoid in shape, and share a resemblance to your Sealed Spirit's true nature.</p>
      <h4>Sealed Magic</h4>
      <p>Each Sealed Spirit has a list of Spirit Spells that you learn at the Vessel levels noted in your Spirit's description. Your Spirit Spells count as Vessel spells for you, but do not count against your total number of Spells Known. You cannot replace these Spirit Spells with another spell when you gain a level.</p>
      <p>This also changes the effects of your Iridescent Strikes.</p>
      `
    },
    {
      name: "Archon Form",
      description: `
      <p>Starting at 3rd level, you can use a bonus action to draw upon your Spirit's power to transform into its Archon Form, which uses the stat block in your Sealed Spirit's description. It may use your proficiency bonus (PB), Charisma modifier (CHA), and your Vessel Spell save DC in several places.</p>
      <p>You can maintain your Archon Form for 10 minutes. You then revert to your normal form unless you expend a Vessel Magic spell slot to extend the transformation by 10 minutes. You also revert to your normal form if you are incapacitated, or use a bonus action on your turn to do so.</p>
      <p>While in your Archon Form, the following rules apply:</p>
      <ul>
        <li>Your game statistics are replaced those in your Archon's stat block. You retain your alignment, personality, ability scores, and your hit points. You also retain all your skill and saving throw proficiencies, and gain those of your Archon. If your Archon Form has the same skill proficiency as you, use the higher bonus between the two.</li>
        <li>Your Archon Form gains the benefits of your Spirit Mantle. Some Archon Forms grant a bonus to your AC.</li>
        <li>When you transform, you gain temporary hit points equal to your twice your Vessel level. Any temporary hit points you gain in Archon Form are lost when you revert.</li>
        <li>You retain the benefits of any features from your class, player race, and any other source, and can use them if your Archon Form is capable of doing so, including casting spells with Vessel Magic.</li>
        <li>When you transform, you choose if your equipment falls to the ground, merges into your Archon Form, or is worn by it. Worn equipment functions as normal, but your DM can decide whether it is practical for your Archon to use it. Equipment that merges with your Archon has no effect until your transformation ends.</li>
      </ul>
      <p>You can transform into your Archon Form once, and you regain the ability to transform again when you finish a short or long rest. If you have no uses left, you can expend a Vessel Magic spell slot to transform into your Archon Form again.</p>
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
      name: "Extra Attack",
      description: `
      <p>Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. Moreover, if you use your action to cast a Vessel spell, you can make one Iridescent Strike as a bonus action on that turn.</p>
      `
    }
  ],
  6: [
    {
      name: "Sealed Spirit Feature",
      description: ``,
      tableOnly: true
    }
  ],
  7: [
    {
      name: "Controlled Transformation",
      description: `
      <p>You have gained a measure of control over your Sealed Spirit. Starting at 7th level, you can transform into Archon Form two times between each short or long rest, and you only revert to your normal form early if you are reduced to 0 hit points, or if you use your bonus action to end the transformation.</p>
      <p>Also, when you roll initiative and are not incapacitated or surprised, you can instantly transform into Archon Form.</p>
      `
    }
  ],
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
      name: "Twin Consciousness",
      description: `
      <p>Starting at 10th level, your Sealed Spirit lends you its mental abilities. When you fail an Intelligence, Wisdom, or Charisma saving throw, or a saving throw to maintain concentration you can add your Charisma modifier (minimum of +1) to your roll, possibly turning your failure into a success.</p>
      <p>You can do so a number of times equal to your Charisma modifier (a minimum of once), and you regain all expended uses of this feature when you complete a long rest.</p>
      `
    }
  ],
  11: [
    {
      name: "Unchained Power",
      description: `
      <p>You can unleash a greater amount of your Sealed Spirit's true power. Starting at 11th level, when you transform into Archon Form, you can cast one Vessel Spell you know as part of your transformation without expending a spell slot. The spell must have a casting time of one action, or one bonus action.</p>
      <p>If you are this spell's only target and its duration is longer than instantaneous, it lasts as long as your transformation, and your concentration cannot be broken by taking damage.</p>
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
      name: "Sealed Spirit Feature",
      description: ``,
      tableOnly: true
    }
  ],
  15: [],
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
      name: "Sealed Spirit Feature",
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
      name: "Twin Soul",
      description: `
      <p>You and the Spirit bound to your soul merge and become an entirely new and distinct creature. Upon reaching 20th level, your Archon Form transformation lasts indefinitely and only ends if you are killed or if you use a bonus action to end it.</p>
      `
    }
  ]
};

export default VesselFeatures;
