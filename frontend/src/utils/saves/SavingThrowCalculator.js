import { calculateModifier } from '../characteredits/CharacterFactory';

export function calculateSavingThrows(character) {
  const stats = character.stats;
  const proficiencies = (character.proficiencies?.savingThrows || []).map(p => p.toLowerCase());
  const profBonus = Math.floor((character.totalLevel - 1) / 4) + 2;

  const result = {};
  for (const ability in stats) {
    const mod = calculateModifier(stats[ability]);
    const isProficient = proficiencies.includes(ability.toLowerCase());
    result[ability] = mod + (isProficient ? profBonus : 0);
  }

  return result;
}