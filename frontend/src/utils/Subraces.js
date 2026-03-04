export const subracePackages = {
  // Human Variants
  "Standard Human": {
    parentRace: "Human",
    statBonuses: {
      strength: 1,
      dexterity: 1,
      constitution: 1,
      intelligence: 1,
      wisdom: 1,
      charisma: 1,
    },
    proficiencies: {
      skills: [],
      weapons: [],
      armor: [],
      tools: [],
      languages: [],
    },
    features: [],
  },
  "Variant Human": {
    parentRace: "Human",
    statBonuses: {}, // Often user-selected, can expand later
    proficiencies: {
      skills: [], // Add user-selected skill later
      weapons: [],
      armor: [],
      tools: [],
      languages: [],
    },
    features: ["Bonus Feat"], // Placeholder for feat system
  },

  // Elf Subraces
  "High Elf": {
    parentRace: "Elf",
    statBonuses: { intelligence: 1 },
    proficiencies: {
      skills: [],
      weapons: [],
      armor: [],
      tools: [],
      languages: ["One extra language"],
    },
    features: ["Cantrip (Wizard)"],
  },
  "Wood Elf": {
    parentRace: "Elf",
    statBonuses: { wisdom: 1 },
    proficiencies: {
      skills: [],
      weapons: [],
      armor: [],
      tools: [],
      languages: [],
    },
    features: ["Fleet of Foot", "Mask of the Wild"],
  },
  "Dark Elf": {
    parentRace: "Elf",
    statBonuses: { charisma: 1 },
    proficiencies: {
      skills: [],
      weapons: [],
      armor: [],
      tools: [],
      languages: [],
    },
    features: ["Superior Darkvision", "Sunlight Sensitivity", "Drow Magic"],
  },

  // Dwarf Subraces
  "Hill Dwarf": {
    parentRace: "Dwarf",
    statBonuses: { wisdom: 1 },
    proficiencies: {
      skills: [],
      weapons: [],
      armor: [],
      tools: [],
      languages: [],
    },
    features: ["Dwarven Toughness"],
  },
  "Mountain Dwarf": {
    parentRace: "Dwarf",
    statBonuses: { strength: 2 },
    proficiencies: {
      skills: [],
      weapons: [],
      armor: ["Light Armor", "Medium Armor"],
      tools: [],
      languages: [],
    },
    features: [],
  },

  // Dragonborn Subraces
  "Chromatic Dragonborn": {
    parentRace: "Dragonborn",
    statBonuses: {},
    proficiencies: {
      skills: [],
      weapons: [],
      armor: [],
      tools: [],
      languages: [],
    },
    features: ["Chromatic Breath Weapon", "Chromatic Resistance"],
  },
  "Gem Dragonborn": {
    parentRace: "Dragonborn",
    statBonuses: {},
    proficiencies: {
      skills: [],
      weapons: [],
      armor: [],
      tools: [],
      languages: [],
    },
    features: ["Gem Breath Weapon", "Gem Resistance", "Telepathy"],
  },
  "Metallic Dragonborn": {
    parentRace: "Dragonborn",
    statBonuses: {},
    proficiencies: {
      skills: [],
      weapons: [],
      armor: [],
      tools: [],
      languages: [],
    },
    features: ["Metallic Breath Weapon", "Metallic Resistance"],
  },
};