import { applyProficiencies } from './ProficiencyApplier';

export function updateProficiencies(character) {
  let updated = { ...character };

  for (const classEntry of character.classes || []) {
    if (classEntry.staticProficiencies) {
      updated = applyProficiencies(updated, classEntry.staticProficiencies);
    }
  }

  return updated;
}