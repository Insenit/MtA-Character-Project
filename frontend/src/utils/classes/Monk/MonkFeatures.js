const MonkFeatures = {
  1: [
    {
      name: "Martial Arts",
      description: `
        <p>You honed your body into a weapon, mastering many styles of martial arts. For the purposes of your Monk abilities, Martial Arts attacks are unarmed strikes, and any attacks with melee weapons that lack heavy or special properties.</p>
        <p>Starting at 1st level, so long as you are not wearing heavy armor, wielding a shield, or wielding a heavy weapon, your Martial Arts attacks gain the benefits listed below:</p>
        <ul>
          <li>You can use your Dexterity, in place of Strength, for the attack and damage rolls or your Martial Arts attacks.</li>
          <li>You can make a Dexterity (Athletics) check to grapple or shove in place of the normal Strength (Athletics) check.</li>
          <li>You can roll your Martial Arts die in place of the normal damage of a Martial Arts attack. This die starts out as a d6 and changes as you gain Monk levels, as indicated in the Martial Arts column of the Monk table above.</li>
          <li>When you take the Attack action on your turn and make a Martial Arts attack, you can use your bonus action on that same turn to make a single unarmed strike attack.</li>
        </ul>
        <p>Some styles of Martial Arts make use of exotic weapons like nunchaku (clubs), kamas (sickles), or sai (daggers).</p>
      `
    },
    {
      name: "Unarmored Defense",
      description: `
        <p>You have trained to defend yourself from deadly strikes even when unarmored. Beginning at 1st level, so long as you aren't wearing armor and not wielding a shield, your Armor Class equals 10 + your Dexterity modifier + your Wisdom modifier.</p>
      `
    }
  ],
  2: [
    {
      name: "Ki",
      description: `
        <p>At 2nd level, you learn to manipulate the spiritual energy that resides within you, known as Ki. You can draw on your Ki to perform supernatural physical feats known as Techniques.</p>
        <h4>Ki Points</h4>
        <p>Your inner reserve of Ki is represented by a pool of Ki Points. This pool has a total number of Ki Points equal to your Monk level + your Wisdom modifier. You regain expended Ki Points when you finish a short or long rest, so long as you spent at least 30 minutes of that rest in spiritual meditation.</p>
        <h4>Techniques Known</h4>
        <p>At 2nd level, you learn three Techniques of your choice from this class. You can only use one Technique per each attack, ability check, or saving throw.</p>
        <p>The Monk table shows when you learn more Techniques of your choice. When you gain a Monk level, you can replace one Technique you know with another Technique of your choice.</p>
        <h4>Saving Throws</h4>
        <p>Techniques rely on your mastery of body and spirit, and grow in proportion to your self-control. When a Technique requires a saving throw, its saving throw DC is calculated as follows:</p>
        <p><strong>Technique save DC</strong> = 8 + your proficiency bonus + your Wisdom modifier</p>
      `
    },
    {
      name: "Flurry of Blows",
      description: `
      <p>You can draw on your spiritual power to strike with blinding speed. Starting at 2nd level, when you take the Attack action and make a Martial Arts attack, you can spend 1 Ki Point to make two unarmed strikes as a bonus action on that turn.</p>
      `
    },
    {
      name: "Unarmored Movement",
      description: `
      <p>Your pursuit of physical perfection has awakened the hidden potential of your body. At 2nd level, your speed increases by 10 feet so long as you are not wearing armor or a shield.</p>
      <p>This speed bonus increases as you gain levels, as indicated in the Unarmored Movement column of the Monk table.</p>
      `
    }
  ],
  3: [
    {
      name: "Monastic Tradition",
      description: `
      <p>At 3rd level, choose one of the following Monastic Traditions that best represents your training and philosophy as a Monk.</p>
      <p>The Monastic Tradition you choose grants you features at 3rd level, and again when you reach 6th, 10th, and 17th level.</p>
      <h4>Signature Techniques</h4>
      <p>Each Monastic Tradition has a list of Signature Techniques that you learn at the Monk levels as noted in your Tradition's description. These Techniques don't count against your total number of Techniques Known and they cannot be replaced with other Techniques when you gain a level in this class.</p>
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
      `
    }
  ],
  6: [
    {
      name: "Enlightened Fist",
      description: `
      <p>Your spirit empowers your strikes. Starting at 6th level, your unarmed strikes count as magical for the purposes of overcoming resistances and immunities to non-magical attacks and damage.</p>
      `
    },
    {
      name: "Tradition Feature",
      description: ``,
      tableOnly: true
    }
  ],
  7: [
    {
      name: "Evasion",
      description: `
      <p>Starting at 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a black dragon's acid breath or a lightning bolt spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you take no damage if you succeed on the saving throw, and only half damage if you fail.</p>
      `
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
      name: "Spirit of Tranquility",
      description: `
      <p>Beginning at 9th level, you can draw upon your spiritual vitality to bolster your physical and mental defenses. When you are forced to make a saving throw, you can spend 1 Ki Point to add your Wisdom modifier to the result of your roll.</p>
      `
    }
  ],
  10: [
    {
      name: "Tradition Feature",
      description: ``,
      tableOnly: true
    }
  ],
  11: [
    {
      name: "Ki Adept",
      description: `
      <p>You have mastered favored Ki Techniques. Starting at 11th level, once on your turn, you can use a Technique you know that costs 1 Ki Point, or Flurry of Blows without spending Ki.</p>
      `
    }
  ],
  12: [
    {
      name: "Ability Score Improvement",
      description: " ",
      tableOnly: true
    }
  ],
  13: [
    {
      name: "Purity of Body",
      description: `
      <p>Your mastery over your body protects you from ailments. At 13th level, you gain proficiency in Constitution saving throws, and immunity to all disease and to the poisoned condition.</p>
      `
    }
  ],
  14: [
    {
      name: "Purity of Mind",
      description: `
      <p>Starting at 14th level, if you are charmed or frightened when you start your turn, you can spend 1 Ki Point to instantly end either the charmed or frightened condition for yourself.</p>
      `
    }
  ],
  15: [
    {
      name: "Timeless Body",
      description: `
      <p>You have completely detached yourself from all desires of the flesh. Beginning at 15th level, you no longer require food or water and you suffer none of the frailty of old age. Also, for every 10 years that pass your physical body only ages 1 year</p>
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
      name: "Tradition Feature",
      description: ``,
      tableOnly: true
    }
  ],
  18: [],
  19: [
    {
      name: "Ability Score Improvement",
      description: " ",
      tableOnly: true
    }
  ],
  20: [
    {
      name: "Purity of Spirit",
      description: `
      <p>You have gained such mastery over your spirit that you can meditate even while performing other simple actions. At 20th level, if you spend 10 minutes meditating or performing only light activities, such as traveling, eating, talking, or exploring, you regain all of your expended Ki Points.</p>
      `
    }
  ]
};

export default MonkFeatures;