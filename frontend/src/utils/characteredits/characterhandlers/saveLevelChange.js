import { calculateModifier } from '../CharacterFactory';
import { calculateBaseMaxHP, initializeHPState } from '../../HPManager';
import { calculateSpellSlots } from '../../spellcasting/SlotHandler';
import { calculateExploitDice } from '../../exploits/ExploitDiceHandler';
import { classPackages } from '../../classes';
import { calculateSavingThrows } from '../../saves/SavingThrowCalculator';
import { updateProficiencies } from '../../proficiencies/ProficiencyUpdater';
import { prepareCharacter } from '../CharacterFormatHandler';
import { aggregateProficiencies } from '../../proficiencies/ProficiencyAggregator';
import { aggregateKnownExploits } from '../../exploits/ExploitAggregator';

export function saveLevelChange(character, pendingLevels, index, saveCharacterFn) {
  const newTotalLevel = pendingLevels.reduce((sum, lvl) => sum + lvl, 0);
  if (newTotalLevel > 20) {
    console.warn('Cannot exceed level 20.');
    return;
  }

  const updatedClasses = [...character.classes];
  const classEntry = { ...updatedClasses[index] };
  const classPackageKey = `${classEntry.name.toLowerCase().replace(/\s+/g, '')}Package`;
  const classPackage = classPackages[classPackageKey];

  if (!classPackage) {
    console.warn(`No class package found for ${classEntry.name}`);
    return;
  }

  const newLevel = pendingLevels[index];
  const isMulticlass = character.classes.length > 1 || index > 0;
  const conMod = calculateModifier(character.stats.constitution);

  let hpArray = [...(classEntry.classHP || [])];

  for (let lvl = hpArray.length + 1; lvl <= newLevel; lvl++) {
    const hpGain = Math.floor(classPackage.hitDie / 2) + 1 + conMod;
    hpArray.push(hpGain);
  }

  if (hpArray.length > newLevel) {
    hpArray = hpArray.slice(0, newLevel);
  }

  const handledClassEntry = classPackage.handleLevelUp(
    { ...classEntry, classHP: hpArray },
    newLevel,
    classPackage.progressionTable,
    character.stats
  );

  updatedClasses[index] = handledClassEntry;

  const hasExploits = updatedClasses.some(cls => cls.exploits);
  const baseExploitData = calculateExploitDice({ ...character, classes: updatedClasses });
  const knownByDegree = aggregateKnownExploits(updatedClasses);

  let tempCharacter = {
    ...character,
    classes: updatedClasses,
    totalLevel: updatedClasses.reduce((sum, cls) => sum + cls.level, 0),
    hpState: {
      ...character.hpState,
      baseMaxHP: calculateBaseMaxHP({ ...character, classes: updatedClasses }),
    },
    spellSlots: calculateSpellSlots(updatedClasses),
    ...(hasExploits && {
      exploits: {
        ...baseExploitData,
        ...(knownByDegree ? { knownExploits: knownByDegree } : {})
      }
    })
  };

  tempCharacter.proficiencies = aggregateProficiencies(tempCharacter);
  tempCharacter.saves = calculateSavingThrows(tempCharacter);

  const updatedCharacter = prepareCharacter(updateProficiencies(tempCharacter));
  saveCharacterFn(updatedCharacter);
}