export function getClassSpellcastingProgression(classEntry) {
  if (!classEntry || typeof classEntry !== 'object') {
    return { type: 'none', effectiveCasterLevel: 0 };
  }
  if (classEntry.artificer_spellcasting) {
    return { type: 'half', effectiveCasterLevel: Math.ceil(classEntry.level / 2) };
  }
  if (classEntry.bard_spellcasting) {
    return { type: 'half', effectiveCasterLevel: Math.ceil(classEntry.level / 2) };
  }
  if (classEntry.paladin_spellcasting) {
    return { type: 'half', effectiveCasterLevel: Math.ceil(classEntry.level / 2) };
  }
  if (classEntry.magus_spellcasting) {
    return { type: 'half', effectiveCasterLevel: Math.ceil(classEntry.level / 2) };
  }
  if (classEntry.ranger_spellcasting) {
    return { type: 'half', effectiveCasterLevel: Math.ceil(classEntry.level / 2)};
  }
  if (classEntry.shaman_spellcasting) {
    return { type: 'conduit', effectiveCasterLevel: classEntry.level};
  }
  if (classEntry.warlock_spellcasting) {
    return { type: 'pact', effectiveCasterLevel: classEntry.level };
  }

  return { type: 'none', effectiveCasterLevel: 0 };
}