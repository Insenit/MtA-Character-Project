export const SKILL_LIST = [
  { name: "Acrobatics", stat: "dexterity" },
  { name: "Animal Handling", stat: "wisdom" },
  { name: "Arcana", stat: "intelligence" },
  { name: "Athletics", stat: "strength" },
  { name: "Deception", stat: "charisma" },
  { name: "History", stat: "intelligence" },
  { name: "Insight", stat: "wisdom" },
  { name: "Intimidation", stat: "charisma" },
  { name: "Investigation", stat: "intelligence" },
  { name: "Medicine", stat: "wisdom" },
  { name: "Nature", stat: "intelligence" },
  { name: "Perception", stat: "wisdom" },
  { name: "Performance", stat: "charisma" },
  { name: "Persuasion", stat: "charisma" },
  { name: "Religion", stat: "intelligence" },
  { name: "Sleight of Hand", stat: "dexterity" },
  { name: "Stealth", stat: "dexterity" },
  { name: "Survival", stat: "wisdom" },
];

export function calculateSkillBonus(skillName, stat, character) {
  const baseMod = character.stats[stat]?.modifier || 0;
  const isProficient = character.proficiencies.skills.includes(skillName);
  const profBonus = isProficient ? Math.floor((character.totalLevel + 7) / 4) : 0; // standard 5e scaling
  return baseMod + profBonus;
}