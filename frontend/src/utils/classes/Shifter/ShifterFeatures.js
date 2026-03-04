const ShifterFeatures = {
  1: [
    {
      name: "Feral Physique",
      description: `
      <p>At 1st level, the primal power that courses through your veins has made your physical traits more bestial. Your appearance becomes notably bestial, and you gain the following benefits:</p>
      <h4>Keen Senses</h4>
      <p>When you make a Wisdom ability check based on your sense of hearing, sight, or smell, you have advantage on your roll.</p>
      <h4>Natural Armor</h4>
      <p>You grow coarse hair, thickened skin, or hard scales. So long as you are not wearing armor or a shield, your Armor Class is equal to 13 + your Constitution modifier, unless it was higher.</p>
      <h4>Natural Weapons</h4>
      <p>You grow sharp claws, fangs, horns, or spines. Your unarmed strikes with these Natural Weapons deal 1d8 bludgeoning, piercing, or slashing damage (your choice) on hit, and you use either Strength or Dexterity for their attack and damage rolls.</p>
      `
    },
    {
      name: "Wild Empathy",
      description: `
      <p>Also at 1st level, you gain the ability to verbally communicate with and understand Beasts. This does not mean that Beasts are always friendly toward you, and when you communicate with a Beast, its awareness and ability to recall knowledge is limited by its Intelligence score.</p>
      <p>Lastly, whenever you make an ability check to soothe a wild Beast, such as with a Wisdom (Animal Handling) check, you can add your Shifter level to the result of your roll.</p>
      `
    }
  ],
  2: [
    {
      name: "Bloodline",
      description: `
      <p>At 2nd level, you choose a Bloodline that best represents your primal abilities and connection to wild animals.</p>
      <p>Your Bloodline grants you features at 2nd level, and again when you reach 7th, 13th, and 18th levels in this class.</p>
      <h4>Bloodline Shapes</h4>
      <p>Each Shifter Bloodline has deep a connection certain types of Beast, known as Bloodline Shapes. Any Beast Shapes you instinctively learn are limited to these Bloodline Shapes.</p>
      <p>Beast stat blocks included in the Compendium of Beasts include which Bloodline they belong to. For other Beasts, the DM determines which Bloodline, if any, a Beast belongs to.</p>
      `
    },
    {
      name: "Wild Shape",
      description: `
        <p>Also at 2nd level, you gain the mystical ability to change your form, Shifting into Beast Shapes, using the following rules:</p>
        <h4>Beast Shapes</h4>
        <p>At 2nd level, you know two Beast Shapes of your choice of CR 1/2 or lower, both of which must be Bloodline Shapes. As a bonus action, you can Shift to magically take the form of one Beast Shape that you know.</p>
        <p>When you Shift, your game statistics are replaced by those of the Beast, but you retain your alignment, personality, hit points, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the Beast. If you and your Beast Shape both share a proficiency, use the higher bonus.</p>
        <p>You revert to your normal form if you are Incapacitated or if you use your bonus action to do so. You can Shift from one Beast Shape directly into another, but if you spend 1 hour in Beast Shapes without returning to your normal form, you instantly revert to your normal form.</p>
        <p>Finally, some of the Beast Shapes referenced by this class are <strong>Diminutive</strong> size. If you take any damage as a Diminutive Beast, you instantly revert to your normal form.</p>
        <h4>Natural Armor</h4>
        <p>Unless your Beast Form's Armor Class was already higher, you can use your Feral Physique Armor Class while in Beast Shape. If you do, use your normal form's Constitution score.</p>
        <h4>Equipment</h4>
        <p>When you Shift, you can choose for any natural or unrefined equipment, such as objects made from wood, animal parts, or other natural materials, to merge with your Beast Shape.</p>
        <p>However, any equipment made from metal or other highly processed materials, such as metal weapons or armor, falls to the ground in your space when you Shift into a Beast Shape.</p>
        <h4>Features and Spellcasting</h4>
        <p>When you Shift, you retain all benefits of features from class, race, or other sources, and can still use them so long as your Beast Shape is physically capable of doing so. However, you cannot use any special senses, such as Darkvision or Keen Senses, unless your Beast Shape also has that sense. Other features have special rules while in Beast Shape:</p>
        <p><strong><i>Multiattack.</strong></i> When you are in a Beast Shape, you cannot take the Multiattack action even if the Beast Shape has it.</p>
        <p><strong><i>Spellcasting.</strong></i> You cannot cast spells while you are in a Beast Shape. However, you can maintain your concentration on spells and other abilities you used before you Shifted.</p>
        <h4>Saving Throws</h4>
        <p>When one of your Beast Shapes forces a creature to make a saving throw, you can use the DC in its stat block, or you can use your Shifter save DC, as calculated below. It uses your normal form's Constitution score and Proficiency Bonus:</p>
        <p><strong>Shifter save DC</strong> = 8 + your Proficiency Bonus + your Constitution modifier</p>
        <h4>Learning New Beast Shapes</h4>
        <p>At certain Shifter levels, you learn to Shift into more powerful Beasts, as shown in the Max. CR column of the Shifter table.</p>
        <p>Whenever this Max. CR increases, you instinctively learn one Bloodline Shape of your choice of that CR or lower.</p>
        <p>You can also learn new Beast Shapes from any Bloodline by using an action to touch a living, non-hostile Beast of a CR equal to the Max. CR for your level or lower. There is no limit to the number of Beast Shapes you can learn this way.</p>
        `
    }
  ],
  3: [
    {
      name: "Bestial Instincts",
      description: `
      <p>Your instincts allow you to quickly react to danger. Beginning at 3rd level, so long as you are not Incapacitated or Surprised, you have advantage on all initiative rolls, and you can instantly Shift into one of your Beast Shapes when you roll initiative</p>
      `
    }
  ],
  4: [
    {
      name: "Ability Score Improvement",
      description: `
      <p>At 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or two different ability scores of your choice by 1. As normal, you cannot increase an ability score above 20 using this feature.</p>
      `
    }
  ],
  5: [
    {
      name: "Feral Warrior",
      description: `
      <p>Starting at 5th level, whenever you take the Attack action in your normal form, you can make two attacks instead of one. You can also take the Multiattack action when in Beast Shape if your Beast Shape has that feature.</p>
      <p>Also, whenever you take the Dash or Disengage action, you can make a Natural Weapon attack as a bonus action.</p>
      `
    },
    {
      name: "Mystical Strikes",
      description: `
      <p>The mystical power that gives you your abilities infuses your Beast Shapes. Also at 5th level, your Natural Weapon attacks, in both your normal form and Beast Shapes, count as magical for overcoming resistances and immunities.</p>
      <p>You can also use the attack bonus of your normal form's Natural Weapon attacks whenever you are in Beast Shape, unless your Beast Shape's attack bonus would be higher.</p>
      `
    }
  ],
  6: [
    {
      name: "Adrenaline Surge",
      description: `
      <p>Starting at 6th level, you can draw on your primal drive to survive in the midst of battle. Whenever you take damage, you can use a reaction to gain temporary hit points equal to the damage taken. However, these temporary hit points only last for 1 minute.</p>
      <p>You can use this reaction a number of times equal to your normal form's Constitution modifier (minimum of once), and you regain all uses at the end of each short or long rest.</p>
      `
    }
  ],
  7: [
    {
      name: "Bloodline Feature",
      description: ``,
      tableOnly: true
    }
  ],
  8: [
    {
      name: "Ability Score Improvement",
      description: " ",
      tableOnly: true
    }
  ],
  9: [
    {
      name: "Wild Awareness",
      description: `
      <p>At 9th level, your mystical abilities grant you an instinctive knowledge of your surroundings. When you finish a short or long rest, you gain the benefits of commune with nature.</p>
      `
    }
  ],
  10: [
    {
      name: "Primal Resilience",
      description: `
      <p>The mystical power in your blood increases your resiliency in times of need. Beginning at 10th level, when you fail a saving throw, you can expend a use of Adrenaline Surge to add your normal form's Constitution modifier (minimum of +1) to your roll, possibly turning a failure into a success.</p>
      `
    }
  ],
  11: [
    {
      name: "Primeval Form",
      description: `
      <p>Starting at 11th level, when you Shift into a Bloodline Shape, you can infuse your transformation with ancient power. Until you Shift out of that Beast Shape, your Beast Shape takes on a primeval and feral appearance, gaining the benefits below:</p>
      <ul>
        <li>It grows to become Large in size, so long as there is room.</li>
        <li>It resists all bludgeoning, piercing, and slashing damage.</li>
        <li>Its Natural Weapon attacks deal a bonus 1d8 damage.</li>
        <li>It has advantage on all ability checks and saving throws that use its Strength or Dexterity.</li>
      </ul>
      <p>You can transform into a Primeval Form three times. You regain one expended use when you finish a short rest, and all of your expended uses each time you finish a long rest.</p>
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
      name: "Bloodline Feature",
      description: ``,
      tableOnly: true
    }
  ],
  14: [
    {
      name: "Feral Senses",
      description: `
      <p>You hunt as an apex predator, never losing track of your prey. Starting at 14th level, you cannot have disadvantage on any attack roll you make that targets a creature within 30 feet.</p>
      `
    }
  ],
  15: [
    {
      name: "Mythic Forms",
      description: `
      <p>Starting 15th level, you gain the ability to Shift into legendary Beasts of CR 5. However, due to their mythical power you can only Shift into each Beast Shape you know of CR 5 or higher once each between each short or long rest you take.</p>
      `
    }
  ],
  16: [
    {
      name: "Ability Score Improvement",
      description: " ",
      tableOnly: true
    }
  ],
  17: [
    {
      name: "Primeval Resurgence",
      description: `
      <p>In your blood flows a wellspring of primeval power. Starting at 17th level, you can gain the benefits of Primeval Form any time you use Wild Shape to Shift into a Bloodline Shape.</p>
      `
    }
  ],
  18: [
    {
      name: "Bloodline Feature",
      description: ``,
      tableOnly: true
    }
  ],
  19: [
    {
      name: "Ability Score Improvement",
      description: " ",
      tableOnly: true
    }
  ],
  20: [
    {
      name: "Force of Nature",
      description: `
      <p>Your primeval ferocity cannot be tamed. At 20th level, you can Shift into Beast Shapes with a CR of 5 or 6 without limit.</p>
      <p>You also regain one expended use of Adrenaline Surge at the start of each of your turns in combat.</p>
      `
    }
  ]
};

export default ShifterFeatures;