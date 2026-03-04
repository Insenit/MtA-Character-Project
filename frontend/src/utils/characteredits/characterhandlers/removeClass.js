import { calculateBaseMaxHP, initializeHPState } from '../../HPManager';
import { prepareCharacter } from '../CharacterFormatHandler';
import { calculateSpellSlots } from '../../spellcasting/SlotHandler';
import { calculateExploitDice } from '../../exploits/ExploitDiceHandler';
import { updateProficiencies } from '../../proficiencies/ProficiencyUpdater';
import { calculateSavingThrows } from '../../saves/SavingThrowCalculator';

export function removeClass(character, pendingLevels, index, saveCharacter) {
  const updatedClasses = character.classes.filter((_, i) => i !== index);
  const updatedLevels = pendingLevels.filter((_, i) => i !== index);

  const newTotalLevel = updatedClasses.reduce((sum, cls) => sum + cls.level, 0);

  const spellSlots = calculateSpellSlots(updatedClasses);

  const tempCharacter = initializeHPState({
    ...character,
    classes: updatedClasses,
    totalLevel: newTotalLevel,
    spellSlots,
    exploits: calculateExploitDice({ ...character, classes: updatedClasses })
  });

  tempCharacter.saves = calculateSavingThrows(tempCharacter);

  const recalculatedCharacter = prepareCharacter(updateProficiencies(tempCharacter));
  saveCharacter(recalculatedCharacter);
  return updatedLevels;
}