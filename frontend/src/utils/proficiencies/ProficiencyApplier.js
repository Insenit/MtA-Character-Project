export function applyProficiencies(character, newProficiencies = {}) {
  const updated = { ...character };
  
  // Ensure the base proficiency structure exists
  if (!updated.proficiencies) {
    updated.proficiencies = {
      armor: [],
      weapons: [],
      tools: [],
      skills: [],
      savingThrows: []
    };
  }

  // Initialize sets for easy duplicate prevention
  const proficiencySets = {
    armor: new Set(updated.proficiencies.armor),
    weapons: new Set(updated.proficiencies.weapons),
    tools: new Set(updated.proficiencies.tools),
    skills: new Set(updated.proficiencies.skills),
    savingThrows: new Set(updated.proficiencies.savingThrows)
  };

  // Apply static proficiencies from each class
  for (const cls of updated.classes || []) {
    const staticProfs = cls.staticProficiencies || {};
    for (const type in staticProfs) {
      staticProfs[type].forEach(p => proficiencySets[type]?.add(p));
    }
  }

  // Apply dynamic proficiencies (e.g., from selections)
  for (const type in newProficiencies) {
    newProficiencies[type].forEach(p => proficiencySets[type]?.add(p));
  }

  // Convert sets back to arrays and assign to character
  for (const type in proficiencySets) {
    updated.proficiencies[type] = Array.from(proficiencySets[type]);
  }

  return updated;
}