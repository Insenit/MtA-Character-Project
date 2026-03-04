import { applyRacePackage, applySubracePackage } from '../../RacePackageHandler';
import { classPackages } from '../../classes';
import { initializeHPState } from '../../HPManager';
import { calculateSpellSlots } from '../../spellcasting/SlotHandler';
import { calculateExploitDice } from '../../exploits/ExploitDiceHandler';
import { prepareCharacter } from '../CharacterFormatHandler';
import { updateProficiencies } from '../../proficiencies/ProficiencyUpdater';
import { calculateSavingThrows } from '../../saves/SavingThrowCalculator';
import { applyInitialClassHP } from '../CharacterFactory';

export function confirmSelection(
  character,
  selectedOption,
  overlayType,
  selectedSubrace,
  closeOverlayFn,
  replaceIndex,
  saveCharacter
) {
  if (!selectedOption) return;

  let updatedCharacter = { ...character };

  if (overlayType === 'race') {
    updatedCharacter = applyRacePackage(character, selectedOption.name);
    if (selectedSubrace) {
      updatedCharacter = applySubracePackage(updatedCharacter, selectedSubrace);
    }

  } else if (overlayType === 'background') {
    updatedCharacter = {
      ...character,
      background: selectedOption.name
    };

  } else if (overlayType === 'class') {
    const classPackage = classPackages[selectedOption.packageKey];
    if (!classPackage) return;

    const levelData = classPackage.progressionTable?.[0] || {};
    const isMulticlass = character.classes.length > 1 || (character.classes.length === 1 && replaceIndex > 0);

    const newLevel = 1;
    const newClassEntry = classPackage.createClassEntry(levelData, character.stats, isMulticlass);
    let leveledClassEntry = classPackage.handleLevelUp(
      { ...newClassEntry },
      1,
      classPackage.progressionTable,
      character.stats
    );

    const isReplacingClassAtLevel1 = replaceIndex === 0 && newLevel === 1;
    const useFullHP = isReplacingClassAtLevel1;

    leveledClassEntry = applyInitialClassHP(
      leveledClassEntry,
      character.stats,
      !useFullHP,
      classPackage.hitDie
    );

    console.log("📏 HP after applyInitialClassHP:", leveledClassEntry.classHP);

    const updatedClasses = [...character.classes];
    updatedClasses[replaceIndex] = leveledClassEntry;

    updatedCharacter = {
      ...character,
      classes: updatedClasses,
      totalLevel: updatedClasses.reduce((sum, cls) => sum + cls.level, 0),
      spellSlots: calculateSpellSlots(updatedClasses),
      exploits: calculateExploitDice({ ...character, classes: updatedClasses })
    };

  } else if (overlayType === 'subclass') {
    if (replaceIndex == null || !character.classes[replaceIndex]) return;

    const classEntry = character.classes[replaceIndex];
    const classPackage = Object.values(classPackages).find(pkg => pkg.name === classEntry.name);
    if (!classPackage) return;

    const subclassKey = classPackage.subclassKey || 'specialization';
    const subclassId = typeof selectedOption === 'string' ? selectedOption : selectedOption?.key;

    if (!subclassId) return;

    const updatedClasses = [...character.classes];
    updatedClasses[replaceIndex] = {
      ...classEntry,
      [subclassKey]: subclassId
    };

    updatedCharacter = {
      ...character,
      classes: updatedClasses,
      spellSlots: calculateSpellSlots(updatedClasses),
      exploits: calculateExploitDice({ ...character, classes: updatedClasses })
    };
  }

  const tempCharacter = initializeHPState(updatedCharacter);
  tempCharacter.saves = calculateSavingThrows(tempCharacter);

  const preparedCharacter = prepareCharacter(updateProficiencies(tempCharacter));
  saveCharacter(preparedCharacter);
  closeOverlayFn();
}