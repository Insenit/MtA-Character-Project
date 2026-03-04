const RangerFeatures = {
  1: [
    {
      name: "Fighting Style",
      description: `
      <p>At 1st level, you adopt a Fighting Style that best reflects your training. You cannot select a Fighting Style more than once, even if a feature allows you to select another Fighting Style.</p>
      <p>Whenever you gain a level in this class, you can switch your Fighting Style for another Fighting Style of your choice.</p>
      `
    },
    {
      name: "Knacks",
      description: `
      <p>In the wild, you have learned bits of primal knowledge, known as Knacks, which bolster your hunting, survival, and tracking skills. At 1st level, you know one Knack of your choice.</p>
      <p>Whenever you gain a Ranger level, you can replace one Knack you know with a Knack of your choice, so long as you meet the prerequisites for that Knack. You cannot replace a Knack that is a prerequisite for another Knack you know.</p>
      <p>At certain Ranger levels, you learn additional Knacks, as shown in the Knacks Known column of the Ranger table.</p>
      `
    },
    {
      name: "Wild Expertise",
      description: `
      <p>Your skill at navigating the wilderness is without peer. Also at 1st level, choose one skill from the Ranger class skill list that you are proficient in. You add double your proficiency bonus to any ability checks you make with the chosen skill. You also learn one additional language of your choice, often one that is spoken by the creatures you hunt, or peoples you defend.</p>
      <p>When you reach 9th level in this class, you choose another skill from the Ranger class skill list that you are proficient in to gain this benefit and another language of your choice.</p>
      `
    }
  ],
  2: [
    {
      name: "Spellcasting",
      description: `
      <p>At 2nd level, you learn to draw upon the primal magic of the natural world to enhance your survival and combat skills:</p>
      <h4>Preparing and Casting Spells</h4>
      <p>The Ranger table above shows how many spell slots you have to cast spells. To cast a Ranger spell of 1st-level or higher, you must expend a slot of the spell's level or higher. You regain all of your expended spell slots when you finish a long rest.</p>
      <p>At the end of each long rest, you prepare a list of spells that are available for you to cast. Choose a number of spells equal to your Wisdom modifier + half your Ranger level, rounded down. Spells must all be from the Ranger spell list at the end of this class, and be of a level for which you have spell slots.</p>
      <h4>Spellcasting Ability</h4>
      <p>Your power is drawn from an intuitive knowledge of nature, so Wisdom is your spellcasting ability for Ranger spells. You use Wisdom when a spell refers to your spellcasting ability, your Spell save DC, or when you make a spell attack roll.</p>
      <p><strong>Spell save DC</strong> = 8 + your proficiency bonus + your Wisdom modifier</p>
      <p><strong>Spell attack modifier</strong> = your proficiency bonus + your Wisdom modifier</p>
      <h4>Spellcasting Focus</h4>
      <p>You can use a druidic focus as the spellcasting focus for your Ranger spells. See the Player's Handbook for example foci.</p>
      <h4>Ritual Casting</h4>
      <p>Your knowledge of the natural world allows you to draw out its innate magic. You can cast any Ranger spell that you have prepared as a ritual so long as that spell has the ritual tag.</p>
      `
    },
    {
      name: "Ranger's Quarry",
      description: `
      <p>You focus your senses to hunt as a predator of the wild. Also at 2nd level, you can use a bonus action to mark one creature you can see as your Quarry, gaining the benefits below:</p> 
      <ul>
        <li>Whenever you damage it with an attack, you deal bonus damage equal to a roll of your Quarry Die, which is a d4.</li>
        <li>Whenever you make an ability check to track or locate it, you can add one roll of your Quarry Die to your d20 roll.</li>
      </ul>
      <p>These benefits last for 1 hour but end early if your Quarry is slain or if you mark another creature as your Quarry. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest. When you have no uses left, you can expend a spell slot to use this feature again.</p>
      <p>When you reach 6th, 10th, 14th, and 18th levels in this class, both the duration of Ranger's Quarry and the size of your Quarry Die increase, as indicated in the Ranger table.</p>
      `
    }
  ],
  3: [
    {
      name: "Ranger Conclave",
      description: `
      <p>At 3rd level, you choose your Conclave, a loose association of Rangers that share similar abilities.</p>
      <p>Your Ranger Conclave grants you features at 3rd level, and again at 7th, 11th, and 15th level in this class.</p>
      <h4>Conclave Spells</h4>
      <p>Each Ranger Conclave has a list of Conclave Spells that you always have prepared once you reach the Ranger levels noted in your Conclave's description. Your Conclave Spells count as Ranger spells for you, but they do not count against your total number of spells that you can prepare each day.</p>
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
      <p>Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. Moreover, if you use your action to Dash or to Disengage you can make one weapon attack as a bonus action on that turn.</p>
      `
    },
    {
      name: "Feral Senses",
      description: `
      <p>You hunt with the skills of an apex predator. At 5th level, you can't have disadvantage on attack rolls against your Quarry.</p>
      `
    }
  ],
  6: [
    {
      name: "Ranger's Quarry (8 hours)",
      description: ``,
      tableOnly: true
    }
  ],
  7: [
    {
      name: "Conclave Feature",
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
      name: "Wild Expertise",
      description: ``,
      tableOnly: true
    }
  ],
  10: [
    {
      name: "Ranger's Quarry (24 hours)",
      description: ``,
      tableOnly: true
    }
  ],
  11: [
    {
      name: "Conclave Feature",
      description: ``,
      tableOnly: true
    },
    {
      name: "Tireless",
      description: `
      <p>You are always ready for another hunt, never letting foes rest. Beginning at 11th level, you regain all of your expended uses of Ranger's Quarry whenever you finish a short or long rest.</p>
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
      name: "Ranger's Quarry (1 week)",
      description: ``,
      tableOnly: true
    }
  ],
  15: [
    {
      name: "Conclave Feature",
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
      name: "Ranger's Quarry (Indefinite)",
      description: ``,
      tableOnly: true
    },
    {
      name: "Feral Senses Improvement",
      description: `
      <p>Your keen hunting senses have improved to a near supernatural level. When you reach 18th level, you cannot have disadvantage on attack rolls against any target within 30 feet of you.
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
      name: "Foe Slayer",
      description: `
      <p>You are a Ranger of mythic skill, rivaling the great huntsmen of legend. At 20th level, whenever you hit your Quarry with a weapon attack, you can immediately end the mark and cause that attack to deal maximum damage instead of rolling. If the attack reduces the creature to 50 hit points or fewer, it must succeed on a Constitution saving throw against. your Spell save DC or instantly be reduced to 0 hit points.</p>
      `
    }
  ]
};

export default RangerFeatures;
