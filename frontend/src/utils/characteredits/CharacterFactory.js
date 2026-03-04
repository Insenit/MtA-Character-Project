import { classPackages } from '../classes';
import { reorderCharacter } from './CharacterFormatHandler';
import { initializeHPState } from '../HPManager';
import calculateFinalAC from '../ac/calculateFinalAC';
import { calculateSavingThrows } from '../saves/SavingThrowCalculator';
import { calculateSpellSlots } from '../spellcasting/SlotHandler.js';
import { calculateExploitDice } from '../exploits/ExploitDiceHandler';
import { applyProficiencies } from '../proficiencies/ProficiencyApplier';

export const calculateFinalBase = (statObj) =>
  statObj.base + statObj.raceBonus + statObj.subraceBonus + statObj.otherBonus;

export const calculateModifier = (statObj) =>
  Math.floor((calculateFinalBase(statObj) - 10) / 2);

export function buildStat(base = 10) {
  const stat = {
    base,
    raceBonus: 0,
    subraceBonus: 0,
    otherBonus: 0,
  };
  return {
    ...stat,
    finalBase: calculateFinalBase(stat),
    modifier: calculateModifier(stat),
  };
}

export function applyInitialClassHP(classEntry, stats, isMulticlass = false, hitDie = 8) {
  const conMod = calculateModifier(stats.constitution);
  const hpGain = isMulticlass
    ? Math.floor(hitDie / 2) + 1 + conMod
    : hitDie + conMod;

  return {
    ...classEntry,
    classHP: [hpGain]
  };
}

export function createNewCharacter(name = "Unknown Adventurer", classPackageKey = "fighterPackage") {
  const classPackage = classPackages[classPackageKey];
  if (!classPackage) throw new Error(`Unknown class: ${classPackageKey}`);

  const stats = {
    strength: buildStat(),
    dexterity: buildStat(),
    constitution: buildStat(),
    intelligence: buildStat(),
    wisdom: buildStat(),
    charisma: buildStat(),
  };

  const levelData = classPackage.progressionTable?.[0] || {};
  let classEntry = classPackage.createClassEntry(levelData, stats);

  let character = {
    id: Date.now(),
    name,
    race: "Human",
    background: "Soldier",
    totalLevel: 1,
    stats,
    proficiencies: {
      armor: [],
      weapons: [],
      tools: [],
      skills: [],
      savingThrows: []
    },
    features: [],
    inventory: {
      currency: { cp: 0, sp: 0, ep: 0, gp: 0, pp: 0 },
      containers: [
        {
          id: 'main',
          name: 'Main Inventory',
          items: []
        }
      ]
    },
    spells: [],
    classes: [],
    spellSlots: []
  };

  if (classEntry.staticProficiencies) {
    character = applyProficiencies(character, classEntry.staticProficiencies);
  }

  let leveledClassEntry = classPackage.handleLevelUp(
    { ...classEntry },
    1,
    classPackage.progressionTable,
    character.stats
  );

  // Starting HP for 1st level
  leveledClassEntry = applyInitialClassHP(
    leveledClassEntry,
    character.stats,
    false,
    classPackage.hitDie
  );

  character.classes = [leveledClassEntry];
  character.spellSlots = calculateSpellSlots([leveledClassEntry]);
  character.exploits = {
    ...character.exploits,
    ...calculateExploitDice(character)
  };

  if (typeof classPackage.setupCharacter === 'function') {
    character = classPackage.setupCharacter(character);
  }

  character = initializeHPState(character);
  character.ac = { value: calculateFinalAC(character) };
  character.saves = calculateSavingThrows(character);

  return reorderCharacter(character);
}

export function addMulticlass(character, classPackageKey) {
  const classPackage = classPackages[classPackageKey];
  if (!classPackage) throw new Error(`Unknown class: ${classPackageKey}`);

  const levelData = classPackage.progressionTable?.[0] || {};
  let newClassEntry = classPackage.createClassEntry(levelData, character.stats, true);

  let leveledClassEntry = classPackage.handleLevelUp(
    { ...newClassEntry },
    1,
    classPackage.progressionTable,
    character.stats
  );

  // Multiclass HP at 1st Level
  leveledClassEntry = applyInitialClassHP(
    leveledClassEntry,
    character.stats,
    true,
    classPackage.hitDie
  );

  const updatedClasses = [...character.classes, leveledClassEntry];

  const updatedCharacter = {
    ...character,
    classes: updatedClasses,
    totalLevel: updatedClasses.reduce((sum, cls) => sum + cls.level, 0),
    spellSlots: calculateSpellSlots(updatedClasses),
    exploits: calculateExploitDice({ ...character, classes: updatedClasses })
  };

  const tempCharacter = initializeHPState(updatedCharacter);
  tempCharacter.ac = { value: calculateFinalAC(tempCharacter) };
  tempCharacter.saves = calculateSavingThrows(tempCharacter);

  return reorderCharacter(tempCharacter);
}