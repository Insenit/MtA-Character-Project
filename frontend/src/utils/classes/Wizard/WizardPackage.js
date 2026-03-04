import WizardFeatures from './WizardFeatures';
import WizardTable from './WizardTable';
import { calculateModifier } from '../../characteredits/CharacterFactory';

export const wizardPackage = {
  name: "Wizard",
  subclassKey: "tradition",
  hitDie: 6,
  savingThrows: ["Intelligence", "Wisdom"],
  proficiencies: {
    armor: [],
    weapons: ["Daggers", "Quarterstaffs"],
    tools: ["Calligrapher's Supplies"],
    skills: ["Choose three from Arcana, History, Insight, Investigation, Medicine, Nature, or Religion"]
  },
  proficiencyChoices: {
    wizardSkills: {
      label: "Skills",
      groupKey: "skills",
      choose: 2,
      options: ["Arcana", "History", "Insight", "Investigation", "Medicine", "Nature", "Religion"]
    }
  },
  multiclassProficiencies: {},
  multiclassProficiencyChoices: {},
  
  features: WizardFeatures,
  progressionTable: WizardTable,

  createClassEntry: (levelData = {}, stats, isMulticlass = false) => {
    const conMod = calculateModifier(stats.constitution);
    return {
      name: "Wizard",
      level: 1,
      features: WizardFeatures?.[1]?.map(f => f.name) || [],
      wizard_spellcasting: true,
      cantripsKnown: 3,
      tradition: null,
      classHP: [],
      staticProficiencies: isMulticlass
        ? {
        armor: []
         }
        : {
        armor: [],
        weapons: ["Daggers", "Quarterstaffs"],
        tools: [],
        savingThrows: ["Intelligence", "Wisdom"],
        },
      proficiencyChoices: isMulticlass
        ? wizardPackage.multiclassProficiencyChoices || {}
        : wizardPackage.proficiencyChoices || {}
    };
  },

  handleLevelUp: (classEntry, newLevel, progressionTable, stats) => {
    const levelData = progressionTable?.[newLevel - 1] || {};
    classEntry.level = newLevel;

    classEntry.cantripsKnown = levelData.cantripsKnown || 0;
    classEntry.spellsKnown = levelData.spellsKnown || 0;

    const accumulatedFeatures = [];
    for (let lvl = 1; lvl <= newLevel; lvl++) {
      const levelFeatures = WizardFeatures?.[lvl] || [];
      levelFeatures.forEach(feature => {
        accumulatedFeatures.push({ level: lvl, name: feature.name });
      });
    }
    classEntry.features = accumulatedFeatures;

    classEntry.tradition = classEntry.tradition || null;

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