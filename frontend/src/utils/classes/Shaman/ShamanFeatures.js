const ShamanFeatures = {
  1: [
    {
      name: "Sacred Focus",
      description: `
        <p>In order to channel the supernatural power of spirits without being consumed, Shamans must draw this wondrous power through the strongest aspect of themselves. At 1st level, you choose a Sacred Focus from the options listed below.</p>
        <p>Once it is chosen, your Sacred Focus cannot be changed.</p>
        <h4>Body</h4>
        <p>You channel spiritual power through your body, bending Spirits to your will with physical might. When you choose this Sacred Focus your hit point maximum increases by 1, and it increases by 1 again each time you gain a level.</p>
        <h4>Heart</h4>
        <p>You channel spiritual power into your heart and overwhelm Spirits with powerful emotions. You gain proficiency in both Intimidation and Persuasion, and you can use your Wisdom, in place of Charisma, for any ability checks with those skills.</p>
        <h4>Mind</h4>
        <p>You channel spiritual power through your mind, manipulating the Spirits with your keen wit. Whenever you make an ability check or a saving throw that uses your Intelligence score, you can choose to use your Wisdom score instead.</p>
        <h4>Soul</h4>
        <p>You channel spiritual power through your soul, your serenity soothes Spirits and wards you from harm. While not wearing armor or wielding a shield, your Armor Class is equal to 10 + your Charisma modifier + your Wisdom modifier.</p>
        `
    },
    {
      name: "Totem Spirits",
      description: `
        <p>At 1st level, you learn to bind primal Totem Spirits to sacred Totems so that you may safely channel their mystical abilities. Any Tiny object can of your choice be a Totem, but most often they are objects reminiscent of the Spirit bound within.</p>
        <p>Your Totems and their abilities use the rules detailed here:</p>
        <h4>Bound Spirits</h4>
        <p>At 1st level, you bind two Totem Spirits of your choice from the list at the end of the class. At certain Shaman levels you bind additional Totem Spirits, as shown in the Bound Spirits column of the Shaman table. If a Spirit has prerequisites, you can bind it at the same time you meet its prerequisites.</p>
        <p>When you gain a Shaman level, you can replace one Totem Spirit you currently have bound with another of your choice.</p>
        <h4>Saving Throws</h4>
        <p>If a Totem requires a target to make a saving throw, the DC equals 8 + your proficiency bonus + your Wisdom modifier.</p>
        <h4>Totemic Assault</h4>
        <p>As an action, you can command the Spirits bound within one of your Totems to swarm one creature you can see within 60 feet of you. That creature must succeed on a Charisma saving throw or take 1d8 necrotic damage.</p>
        <p>The Spirits swarm around this creature until it is slain, it moves more than 60 feet away, or you use Totemic Assault on another target. While they swarm, you can use a bonus action on subsequent turns to force it to make this Charisma saving throw again. You can only use Totemic Assault once per turn.</p>
        <p>The damage dealt by your Totemic Assault increases at 5th level (2d8), at 11th level (3d8), and finally at 17th level (4d8).</p>
        `
    }
  ],
  2: [
    {
      name: "Conduit Magic",
      description: `
      <p>At 2nd level, you learn to call on the spiritual energies present in all things to cast spells. You gain the following features:</p>
      <h4>Cantrips</h4>
      <p>You learn two Cantrips of your choice from the Shaman spell list. You learn another Shaman Cantrip at 4th and 10th level.</p>
      <h4>Spell Slots</h4>
      <p>The Shaman table above shows the number of spell slots you have to cast your Shaman spells of 1st through 5th-level. The Slot Level column of the Shaman table also shows the level of all of your spell slots. To cast a Shaman spell of 1st-level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.</p>
      <p>For example, at 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell cure wounds, you must expend one of your 3rd-level spell slots, and cast cure wounds at 3rd-level.</p>
      <h4>Preparing & Casting Spells</h4>
      <p>You prepare the list of spells that are available for you to cast, choosing from the Shaman spell list. When you do, choose a number of Shaman spells equal to your Shaman level + your Wisdom modifier (a minimum of 1). Spells you prepare must be of a level equal to your Slot Level or lower.</p>
      <p>For example, as a 5th level Shaman with a Wisdom of 18, you prepare nine spells of your choice of 3rd-level or lower from the Shaman spell list. Casting a spell doesn't remove it from your list of prepared spells. During a long rest, you can change your list of prepared spells by meditating: 1 minute per spell level for each new spell you are preparing.</p>
      <h4>Spellcasting Ability</h4>
      <p>As you draw your magic from your understanding of Spirits, Wisdom is your spellcasting ability for your Shaman spells. You use Wisdom if a spell refers to your spellcasting ability, setting a saving throw DC, or making a spell attack roll:</p>
      <p><strong>Spell save DC</strong> = 8 + your proficiency bonus + your Wisdom modifier</p>
      <p><strong>Spell attack modifier</strong> = your proficiency bonus + your Wisdom modifier</p>
      <h4>Ritual Casting</h4>
      <p>You can cast the Ritual version of any Shaman spell that you have prepared so long as the spell has the Ritual tag.</p>
      <h4>Spellcasting Focus</h4>
      <p>You can use any Totem to which you have bound a Spirit as the spellcasting focus for your Shaman spells.</p>
      `
    },
    {
      name: "Spirituality",
      description: `
      <p>At 2nd level, choose the Spirituality which best represents the disciplines and rites you use to channel spirits.</p>
      <p>Your Spirituality grants you features at 2nd level, and again when you reach 6th, 10th, and 14th level in this class.</p>
      <h4>Spirituality Spells</h4>
      <p>Each Spirituality has a list of spells you always have prepared once you reach the Shaman levels noted in your Spirituality's description. They count as Shaman spells for you, but they do not count against the number of spells you prepare each day.</p>
      `
    }
  ],
  3: [
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
      name: "Totemic Versatility",
      description: `
      <p>At 5th level, your ability to connect with and channel the spirit world increases. During a long rest, you can perform a 1-hour ritual to replace one of your current bound Spirit Totems with another of your choice, for which you meet all prerequisites.</p>
      `
    }
  ],
  6: [
    {
      name: "Spirituality Feature",
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
      name: "Spirituality Feature",
      description: ``,
      tableOnly: true
    }
  ],
  11: [
    {
      name: "Elder Spirit",
      description: `
      <p>Your ever-deepening connection to the world of Spirits allows you to conjure and bind powerful Elder Spirits to Totems. At 11th level, choose one Elder Spirit to bind to a Totem. It does not count against your total number of Bound Totems.</p>
      <p>Each Elder Spirit includes a list of Elder Spells that you learn at the Shaman levels listed in its description. They do not count against the spells you prepare each day.</p>
      <p>Once you reach the levels in your Elder Spirit's description, you can cast each of these spells once between each long rest at its lowest level, without expending a spell slot.</p>
      <p>You can use your Totemic Versatility feature to replace your Elder Spirit with another Elder Spirit of your choice. Though, if you replace your Elder Spirit with another Spirit, you only know the Elder Spells of your current Elder Spirit.</p>
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
      name: "Elder Arcanum (7th-level)",
      description: ``,
      tableOnly: true
    }
  ],
  14: [
    {
      name: "Spirituality Feature",
      description: ``,
      tableOnly: true
    }
  ],
  15: [
    {
      name: "Elder Arcanum (8th-level)",
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
      name: "Elder Spirit (9th-level)",
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
      name: "Spiritual Ascension",
      description: `
      <p>You have transcended the need for a corporeal form. At 20th level, your physical body no longer ages, and you are immune to all disease, the Poisoned condition, and poison damage.</p>
      <p>Also, when you are reduced to 0 hit points, you can release the Spirit bound within one Totem to instead fall to a number of hit points equal to your Shaman level. You then lose access to the abilities of that Totem until you complete a long rest.</p>
      `
    }
  ]
};

export default ShamanFeatures;
