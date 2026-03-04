const ArtificerFeatures = {
  1: [
    {
      name: "Infusions",
      description: `
        <p>You have learned to imbue objects with your signature brand of magic in order to produce wondrous items. At 1st level, you learn two Infusions of your choice from this class. The Infusions Known column of the Artificer table shows when you learn additional Infusions. You cannot learn an Infusion more than once unless specified.</p>
        <p>During each long rest, you can spend 1 hour using tinker's tools to replace one Infusion you know with another Infusion of your choice, so long as you meet all of its prerequisites.</p>
        <h4>Infusing an Object</h4>
        <p>At the end of a long rest, you can touch a non-magical object with tinker's tools to imbue it with one Infusion you know. If the Infusion requires attunement, you can attune to the object the instant you infuse it, or you can forgo attunement so another creature can attune to it. To attune to the infused item later, you must follow the normal attunement process.</p>
        <p>Your Infusions remain in items indefinitely. If you die, your Infusions vanish from the items after a number of days have passed equal to your Intelligence modifier (minimum 1 day). Infusions vanish immediately if you replace your knowledge of an imbued Infusion by learning another Infusion.</p>
        <p>You can infuse multiple objects at the end of each long rest, up to one for each Infusion you know. Each Infusion can be in only one object at a time, and no object can bear more than one Infusion. If you transfer an Infusion to a new object, any previous instance of that Infusion immediately ends.</p>
        <h4>Replicate Magic Item</h4>
        <p>You can also use your Infusions to replicate magic items you have studied. During a long rest, you can spend 1 hour using tinker's tools to examine a magic item you touch. At the end of that long rest, you can replace one Infusion you know with the knowledge of this magic item. After which, you can infuse an object with the properties of that magic item, following all the rules for your other Infusions.</p>
        <p>You cannot use this feature to replicate magic items that are consumed after one use, such as scrolls and potions.</p>
        <p>You can use this feature to replicate any item of Common rarity. As you gain Artificer levels you can use this feature to replicate items of increasing rarity: Uncommon at 5th level, Rare at 11th level, and finally Very Rare items at 17th level.</p>
        `
    },
    {
      name: "Magical Tinker",
      description: `
      <p>Your insights into magical and mechanical objects can appear as magic to the untrained eye. Starting from 1st level, you can use tinker's tools to cast the mending Cantrip and both detect magic and identify as rituals. Your tools are the spellcasting focus and replace the material components of the spells.</p>
      <p>Moreover, the time it would take you to craft a magic item is halved if you are proficient with appropriate artisan's tools.</p>
      `
    }
  ],
  2: [
    {
      name: "Spellcasting",
      description: `
      <p>At 2nd level, you can use your tools and your signature brand of magic to produce strange and wondrous spell effects from objects and tools you have imbued with your arcane power:</p>
      <h4>Cantrips</h4>
      <p>At 2nd level, you learn two Cantrips of your choice from the Artificer spell list. You learn an additional Artificer Cantrip of your choice when you reach 4th level, and again at 10th level.</p>
      <h4>Spell Slots</h4>
      <p>The Artificer table shows how many spell slots you have to cast spells of 1st-level and higher. To cast your spells, you expend a slot equal to that spell's level or higher. You regain all expended slots when you finish a long rest.</p>
      <h4>Spells Known of 1st-Level & Up</h4>
      <p>You know two 1st-level spells of your choice from the Artificer spell list. The Spells Known column of the Artificer table shows when you learn more Artificer spells of your choice. Each spell must be of a level you have slots for. For example, when you reach 5th level in this class, you can learn one new Artificer spell of either 1st or 2nd-level.</p>
      <p>Whenever you gain an Artificer level, you can choose one Artificer spell you know and replace it with another Artificer spell of your choice for which you have spell slots.</p>
      <h4>Spellcasting Ability</h4>
      <p>Intelligence is the spellcasting ability for Artificer spells, as you use knowledge of the arcane to cast spells. You use your Intelligence if a spell refers to your spellcasting ability, when setting a saving throw DC, or making a spell attack roll.</p>
      <p><strong>Spell save DC</strong> = 8 + your proficiency bonus + your Intelligence modifier</p>
      <p><strong>Spell attack modifier</strong> = your proficiency bonus + your Intelligence modifier</p>
      <h4>Spellcasting Focus</h4>
      <p>You must use either tinker's tools, a set of artisan's tools you are proficient with, or an item bearing one of your Infusions as the spellcasting focus for your Artificer spells.</p>
      `
    },
    {
      name: "Tinker's Insight",
      description: `
      <p>Also at 2nd level, your expert understanding of the magic of artifice allows you to bypass normal magic item restrictions. You can attune to and use any magic item regardless of any alignment, class, player race, or spell requirements, and you can choose to use your Artificer Spell save DC in place of the magic item's DC.</p>
      `
    }
  ],
  3: [
    {
      name: "Arcane Recharge",
      description: `
      <p>Starting at 3rd level, during the course of a short rest, you can recover expended spell slots of a combined level equal to your Intelligence modifier. After you do, you must complete a long rest before you can use this feature again.</p>
      <p>At 11th level, you can use this feature to cause one Infused item or magic item you touch to regain any Charges it would normally regain at dawn, in place of regaining spell slots.</p>
      `
    },
    {
      name: "Specialization",
      description: `
      <p>Also at 3rd level, choose one of the Specializations that represents the research, inventions, and skill of your Artificer.</p>
      <p>Your Specialization grants features at 3rd level, and again when you reach 5th, 10th, and 15th level in this class.</p>
      <h4>Specialization Spells</h4>
      <p>Each Specialization has a list of Specialization Spells that you learn at the Artificer levels noted in its description. Your Specialization Spells count as Artificer spells for you, but do not count against your total number of Spells Known.</p>
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
      name: "Specialization Feature",
      description: ``,
      tableOnly: true
    }
  ],
  6: [
    {
      name: "Flash of Genius",
      description: `
      <p>You can offer potent insight at a moment's notice. Starting at 6th level, when you or a creature who can hear you within 30 feet, makes an ability check or saving throw, you can use your reaction to add your Intelligence modifier to that roll.</p>
      <p>You can use this reaction a number of times equal to your Intelligence modifier (a minimum of once), and you regain all of your expended uses when you complete a long rest.</p>
      `
    }
  ],
  7: [
    {
      name: "Expert Tinker",
      description: `
      <p>There are few who match your skill with mechanical magics. Starting at 7th level, you add double your proficiency bonus to any ability check you make with any tool you are proficient in.</p>
      <p>Your expertise also allows you to infuse magic items with Infusions. However, you cannot increase bonuses above +3.</p>
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
  9: [
    {
      name: "Magic Item Mastery",
      description: `
      <p>You have gained a deep understanding of the inner workings of magic items, allowing you greater use of them. Starting at 9th level, you can attune to up to four magic items at once.</p>
      <p>The number of magic items you can attune to at one time increases again at 14th level (5), and finally at 18th level (6).</p>
      `
    }
  ],
  10: [
    {
      name: "Specialization Feature",
      description: ``,
      tableOnly: true
    }
  ],
  11: [
    {
      name: "Arcane Recharge Improvement",
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

  ],
  14: [
    {
      name: "Magic Item Mastery (5)",
      description: ``,
      tableOnly: true
    }
  ],
  15: [
    {
      name: "Specialization Feature",
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

  ],
  18: [
    {
      name: "Magic Item Mastery (6)",
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
      name: "Masterwork Inventions",
      description: `
      <p>You imbue a fraction of your own soul into your Infusions and other magic items you use. At 20th level, you gain a +1 bonus to all saving throws for each magic item you are attuned to.</p>
      <p>In addition, if you are reduced to 0 hit points but not killed outright, you can instantly end your attunement to one magic item or Infusion, causing you to drop to 1 hit point instead.</p>
      `
    }
  ]
};

export default ArtificerFeatures;
