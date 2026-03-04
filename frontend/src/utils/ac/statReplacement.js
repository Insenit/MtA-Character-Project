import { calculateModifier } from '../characteredits/CharacterFactory';

export default function getStatReplacement(character) {
  const stats = character.stats;
  
  if (character.features?.includes("Charisma-Based AC")) {
    return calculateModifier(stats.charisma);
  }

  if (character.features?.includes("Unarmored Defense (WIS)")) {
    return calculateModifier(stats.dexterity) + calculateModifier(stats.wisdom);
  }

  return calculateModifier(stats.dexterity);
}