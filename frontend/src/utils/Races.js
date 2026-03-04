export const racePackages = {
  Human: {
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
      languages: ["Common"],
    },
    features: [],
  },

  Elf: {
    statBonuses: { dexterity: 2 },
    proficiencies: {
      skills: ["Perception"],
      weapons: ["Longsword", "Shortsword", "Shortbow", "Longbow"],
      armor: [],
      tools: [],
      languages: ["Common", "Elvish"],
    },
    features: ["Keen Senses", "Fey Ancestry", "Trance"],
  },

  Dwarf: {
    statBonuses: { constitution: 2 },
    proficiencies: {
      skills: [],
      weapons: ["Battleaxe", "Handaxe", "Light Hammer", "Warhammer"],
      armor: [],
      tools: ["Smith's Tools", "Brewer's Supplies", "Mason's Tools"],
      languages: ["Common", "Dwarvish"],
    },
    features: ["Darkvision", "Dwarven Resilience", "Stonecunning"],
  },

  Dragonborn: {
    statBonuses: { strength: 2, charisma: 1 },
    proficiencies: {
      skills: [],
      weapons: [],
      armor: [],
      tools: [],
      languages: ["Common", "Draconic"],
    },
    features: ["Draconic Ancestry", "Breath Weapon", "Damage Resistance"],
  },
};