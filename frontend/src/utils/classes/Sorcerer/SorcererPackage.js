import SorcererFeatures from './SorcererFeatures';
import SorcererTable from './SorcererTable';
import { calculateModifier } from '../../characteredits/CharacterFactory';

export const sorcererPackage = {
  name: "Sorcerer",
  subclassKey: "origin",
  hitDie: 6,
  savingThrows: ["Constitution", "Charisma"],
  proficiencies: {
    armor: [],
    weapons: ["Daggers", "Darts", "Light Crossbows", "Slings", "Quarterstaffs"],
    tools: [],
    skills: ["Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, or Religion"]
  },
  proficiencyChoices: {
    sorcererSkills: {
      label: "Skills",
      groupKey: "skills",
      choose: 2,
      options: ["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"]
    }
  },
  multiclassProficiencies: {},
  multiclassProficiencyChoices: {},

  features: SorcererFeatures,
  progressionTable: SorcererTable,

  createClassEntry: (levelData = {}, stats, isMulticlass = false) => {
    const conMod = calculateModifier(stats.constitution);
    return {
      name: "Sorcerer",
      level: 1,
      features: SorcererFeatures?.[1]?.map(f => f.name) || [],
      sorcererSpellcasting: true,
      cantripsKnown: 4,
      spellsKnown: 2,
      origin: null,
      classHP: [],
      staticProficiencies: isMulticlass
        ? {
        armor: []
         }
        : {
        armor: [],
        weapons: ["Daggers", "Darts", "Light Crossbows", "Slings", "Quarterstaffs"],
        tools: [],
        savingThrows: ["Constitution", "Charisma"],
        },
      proficiencyChoices: isMulticlass
        ? sorcererPackage.multiclassProficiencyChoices || {}
        : sorcererPackage.proficiencyChoices || {}
    };
  },

  handleLevelUp: (classEntry, newLevel, progressionTable, stats) => {
    const levelData = progressionTable?.[newLevel - 1] || {};

    classEntry.cantripsKnown = levelData.cantripsKnown || 0;
    classEntry.spellsKnown = levelData.spellsKnown || 0;

    if (newLevel === 1){
      delete classEntry.metamagics;
    }
    if (newLevel >= 2) {
      classEntry.metamagics = levelData.metamagics || 0;
    }

    const accumulatedFeatures = [];
    for (let lvl = 1; lvl <= newLevel; lvl++) {
      const levelFeatures = SorcererFeatures?.[lvl] || [];
      levelFeatures.forEach(feature => {
        accumulatedFeatures.push({ level: lvl, name: feature.name });
      });
    }
    classEntry.features = accumulatedFeatures;

    classEntry.origin = classEntry.origin || null;

    const fixedHPGain = Math.floor(6 / 2) + 1;
    const conMod = calculateModifier(stats.constitution);
    const totalHPGain = fixedHPGain + conMod;

    let newClassHP = [...(classEntry.classHP || [])];
    while (newClassHP.length < newLevel) newClassHP.push(totalHPGain);
    if (newClassHP.length > newLevel) newClassHP = newClassHP.slice(0, newLevel);

    classEntry.classHP = newClassHP;

    return classEntry;
  }
};