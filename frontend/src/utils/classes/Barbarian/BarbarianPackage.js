import BarbarianFeatures from './BarbarianFeatures';
import BarbarianTable from './BarbarianTable';
import { calculateModifier } from '../../characteredits/CharacterFactory';
import { cleanInvalidExploits } from '../../exploits/ExploitCleaner';

export const barbarianPackage = {
  name: "Barbarian",
  subclassKey: "path",
  hitDie: 12,
  savingThrows: ["Strength", "Constitution"],
  proficiencies: {
    armor: ["Light Armor", "Medium Armor", "Shields"],
    weapons: ["Simple Weapons", "Martial Weapons"],
    tools: [],
    skills: ["Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, or Survival"]
  },
  proficiencyChoices: {
    barbarianSkills: {
      label: "Skills",
      groupKey: "skills",
      choose: 2,
      options: ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"]
    }
  },
  multiclassProficiencies: {
    armor: ["Shields"],
    weapons: ["Simple Weapons", "Martial Weapons"]
  },
  multiclassProficiencyChoices: {},
  features: BarbarianFeatures,
  progressionTable: BarbarianTable,

  createClassEntry: (levelData = {}, stats, isMulticlass = false) => {
    const conMod = calculateModifier(stats.constitution);
    return {
      name: "Barbarian",
      level: 1,
      features: BarbarianFeatures?.[1]?.map(f => f.name) || [],
      rages: 2,
      path: null,
      classHP: [],
      staticProficiencies: isMulticlass
        ? { ...barbarianPackage.multiclassProficiencies }
        : {
        armor: ["Light Armor", "Medium Armor", "Shields"],
        weapons: ["Simple Weapons", "Martial Weapons"],
        tools: [],
        savingThrows: ["Strength", "Constitution"],
        },
      proficiencyChoices: isMulticlass
        ? barbarianPackage.multiclassProficiencyChoices || {}
        : barbarianPackage.proficiencyChoices || {}
    };
  },

  handleLevelUp: (classEntry, newLevel, progressionTable, stats) => {
    const levelData = progressionTable?.[newLevel - 1] || {};
    classEntry.level = newLevel;

    classEntry.rages = levelData.rages !== undefined ? levelData.rages : 0;

    if (newLevel === 1) {
      delete classEntry.exploitSet;
      delete classEntry.exploitsKnown;
      for (const key in classEntry) {
        if (key.endsWith('_exploits')) {
          delete classEntry[key];
        }
      }
    }

    if (newLevel >= 2) {
      classEntry.exploits = true;
      classEntry.exploitSet = "barbarian";
      classEntry.exploitsKnown = levelData.exploitsKnown || 0;
      classEntry.barbarian_exploits = true;
      classEntry.exploitsSelected = classEntry.exploitsSelected || {};
    }

    const accumulatedFeatures = [];
    for (let lvl = 1; lvl <= newLevel; lvl++) {
      const levelFeatures = BarbarianFeatures?.[lvl] || [];
      levelFeatures.forEach(feature => {
        accumulatedFeatures.push({ level: lvl, name: feature.name });
      });
    }
    classEntry.features = accumulatedFeatures;

    classEntry.path = classEntry.path || null;

    const fixedHPGain = Math.floor(12 / 2) + 1;
    const conMod = calculateModifier(stats.constitution);
    const totalHPGain = fixedHPGain + conMod;

    let newClassHP = [...(classEntry.classHP || [])];
    while (newClassHP.length < newLevel) newClassHP.push(totalHPGain);
    if (newClassHP.length > newLevel) newClassHP = newClassHP.slice(0, newLevel);

    classEntry.classHP = newClassHP;

    return cleanInvalidExploits(classEntry, 'class');
  }

};