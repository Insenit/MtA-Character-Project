import { racePackages } from './Races';
import { subracePackages } from './Subraces';
import { calculateFinalBase, calculateModifier } from './characteredits/CharacterFactory';

// Utility to recalculate derived values
function updateStat(statObj) {
  const finalBase = calculateFinalBase(statObj);
  return {
    ...statObj,
    finalBase,
    modifier: calculateModifier(statObj),
  };
}

// Apply Race Package
export function applyRacePackage(character, raceName) {
  const race = racePackages[raceName];
  if (!race) return character;

  const updatedStats = { ...character.stats };

  // Reset race bonuses if switching race
  if (character.race && character.race !== raceName) {
    const previousRace = racePackages[character.race];
    if (previousRace?.statBonuses) {
      for (const [stat] of Object.entries(previousRace.statBonuses)) {
        updatedStats[stat].raceBonus = 0;
        updatedStats[stat] = updateStat(updatedStats[stat]);
      }
    }
  }

  // Apply new race bonuses
  for (const [stat, bonus] of Object.entries(race.statBonuses || {})) {
    updatedStats[stat].raceBonus = bonus;
    updatedStats[stat] = updateStat(updatedStats[stat]);
  }

  const updatedProficiencies = mergeProficiencies(character.proficiencies, race.proficiencies);
  const updatedFeatures = [...new Set([...character.features, ...(race.features || [])])];

  return {
    ...character,
    race: raceName,
    stats: updatedStats,
    proficiencies: updatedProficiencies,
    features: updatedFeatures
  };
}

// Apply Subrace Package
export function applySubracePackage(character, subraceName) {
  const subrace = subracePackages[subraceName];
  if (!subrace) return character;

  const updatedStats = { ...character.stats };

  // Reset subrace bonuses if switching subrace
  if (character.subrace && character.subrace !== subraceName) {
    const previousSubrace = subracePackages[character.subrace];
    if (previousSubrace?.statBonuses) {
      for (const [stat] of Object.entries(previousSubrace.statBonuses)) {
        updatedStats[stat].subraceBonus = 0;
        updatedStats[stat] = updateStat(updatedStats[stat]);
      }
    }
  }

  // Apply new subrace bonuses
  for (const [stat, bonus] of Object.entries(subrace.statBonuses || {})) {
    updatedStats[stat].subraceBonus = bonus;
    updatedStats[stat] = updateStat(updatedStats[stat]);
  }

  const updatedProficiencies = mergeProficiencies(character.proficiencies, subrace.proficiencies);
  const updatedFeatures = [...new Set([...character.features, ...(subrace.features || [])])];

  return {
    ...character,
    subrace: subraceName,
    stats: updatedStats,
    proficiencies: updatedProficiencies,
    features: updatedFeatures
  };
}

// Merge Proficiencies Utility
function mergeProficiencies(original, additions) {
  return {
    skills: [...new Set([...original.skills, ...(additions.skills || [])])],
    weapons: [...new Set([...original.weapons, ...(additions.weapons || [])])],
    armor: [...new Set([...original.armor, ...(additions.armor || [])])],
    tools: [...new Set([...original.tools, ...(additions.tools || [])])],
    languages: [...new Set([...original.languages, ...(additions.languages || [])])]
  };
}