import { buildStat } from '../CharacterFactory';
import { calculateBaseMaxHP } from '../../HPManager';
import { updateProficiencies } from '../../proficiencies/ProficiencyUpdater';
import { calculateSavingThrows } from '../../saves/SavingThrowCalculator';
import { prepareCharacter } from '../CharacterFormatHandler';

export function saveStatChange(character, statKey, newBaseValue, saveCharacter) {
  const updatedStats = { ...character.stats, [statKey]: buildStat(newBaseValue) };
  const safeHpState = character.hpState || {};

  const recalculatedBaseMaxHP = calculateBaseMaxHP({
    ...character,
    stats: updatedStats,
  });

  const tempCharacter = {
    ...character,
    stats: updatedStats,
    hpState: {
      ...safeHpState,
      baseMaxHP: recalculatedBaseMaxHP,
      currentHP: Math.min(safeHpState.currentHP || recalculatedBaseMaxHP, recalculatedBaseMaxHP),
      tempMaxHP: safeHpState.tempMaxHP || 0,
      tempHP: safeHpState.tempHP || 0,
    },
  };

  tempCharacter.saves = calculateSavingThrows(tempCharacter);

  const updatedCharacter = prepareCharacter(updateProficiencies(tempCharacter));

  saveCharacter(updatedCharacter);
  return updatedCharacter;
}