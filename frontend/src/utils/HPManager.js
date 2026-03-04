import { calculateModifier } from './characteredits/CharacterFactory';

/**
 * Recalculates the base max HP based on classHP and current Constitution modifier.
 */
export function calculateBaseMaxHP(character) {
  if (!character.classes || character.classes.length === 0) {
    return 0; // Prevents reduce on undefined
  }

  const conMod = calculateModifier(character.stats.constitution);
  return character.classes.reduce((sum, cls) => {
    return sum + cls.classHP.reduce((clsSum, hp) => clsSum + hp + conMod, 0);
  }, 0);
}

/**
 * Initializes HP state if not already set.
 */
export function initializeHPState(character) {
  const baseMaxHP = calculateBaseMaxHP(character);

  return {
    ...character,
    hpState: {
      baseMaxHP: baseMaxHP,
      tempMaxHP: 0,
      currentHP: baseMaxHP,
      tempHP: 0
    }
  };
}

/**
 * Updates current HP, ensuring it doesn’t exceed max HP.
 */
export function updateCurrentHP(character, newCurrentHP) {
  const maxHP = getEffectiveMaxHP(character);
  return {
    ...character,
    hpState: {
      ...character.hpState,
      currentHP: Math.min(newCurrentHP, maxHP)
    }
  };
}

/**
 * Updates temporary HP.
 */
export function updateTempHP(character, tempHP) {
  return {
    ...character,
    hpState: {
      ...character.hpState,
      tempHP: tempHP
    }
  };
}

/**
 * Updates temporary max HP adjustment (e.g., from Bloodhunter abilities).
 */
export function updateTempMaxHP(character, tempMaxHP) {
  const maxHP = calculateBaseMaxHP(character) + tempMaxHP;
  const currentHP = Math.min(character.hpState?.currentHP || maxHP, maxHP);

  return {
    ...character,
    hpState: {
      ...character.hpState,
      baseMaxHP: calculateBaseMaxHP(character),
      tempMaxHP: tempMaxHP,
      currentHP: currentHP
    }
  };
}

/**
 * Returns the effective maximum HP, including temporary adjustments.
 */
export function getEffectiveMaxHP(character) {
  const baseMax = calculateBaseMaxHP(character);
  const tempAdjustment = character.hpState?.tempMaxHP || 0;
  return baseMax + tempAdjustment;
}