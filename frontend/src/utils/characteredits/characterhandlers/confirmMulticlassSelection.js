import { classPackages } from '../../classes';
import { initializeHPState } from '../../HPManager';
import { prepareCharacter } from '../CharacterFormatHandler';
import { updateProficiencies } from '../../proficiencies/ProficiencyUpdater';
import { calculateSpellSlots } from '../../spellcasting/SlotHandler';
import { calculateExploitDice } from '../../exploits/ExploitDiceHandler';
import { calculateSavingThrows } from '../../saves/SavingThrowCalculator';

export function confirmMulticlassSelection(character, selectedOption, closeOverlayFn, saveCharacter) {
  if (!selectedOption || character.totalLevel >= 20) return;

  const classPackage = classPackages[selectedOption.packageKey];
  if (!classPackage) return;

  const levelData = classPackage.progressionTable?.[0] || {};
  const newClassEntry = classPackage.createClassEntry(levelData, character.stats, true);
  const leveledClassEntry = classPackage.handleLevelUp(
    { ...newClassEntry },
    1,
    classPackage.progressionTable,
    character.stats
  );

  const updatedClasses = [...character.classes, leveledClassEntry];
  const tempCharacter = initializeHPState({
    ...character,
    classes: updatedClasses,
    totalLevel: updatedClasses.reduce((sum, cls) => sum + cls.level, 0),
    spellSlots: calculateSpellSlots(updatedClasses),
    exploits: calculateExploitDice({ ...character, classes: updatedClasses }),
  });

  tempCharacter.saves = calculateSavingThrows(tempCharacter);

  const updatedCharacter = prepareCharacter(updateProficiencies(tempCharacter));
  saveCharacter(updatedCharacter);
  closeOverlayFn();
}