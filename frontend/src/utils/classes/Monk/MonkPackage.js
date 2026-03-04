import MonkFeatures from './MonkFeatures';
import MonkTable from './MonkTable';
import { calculateModifier } from '../../characteredits/CharacterFactory';
import { artisansAndInstrumentOptions } from '../../../data/ToolOptions';

export const monkPackage = {
  name: "Monk",
  subclassKey: "tradition",
  hitDie: 10,
  savingThrows: ["Strength", "Dexterity"],
  proficiencies: {
    armor: [],
    weapons: ["Simple Weapons", "Shortswords"],
    tools: ["One type of artisan’s tool or a musical instrument"],
    skills: ["Choose two from Acrobatics, Athletics, History, Insight, Nature, Religion, or Stealth"]
  },
    proficiencyChoices: {
      monkTools: {
        label: "Tool or Instrument",
        groupKey: "tools",
        choose: 1,
        options: artisansAndInstrumentOptions
      },
      monkSkills: {
        label: "Skills",
        groupKey: "skills",
        choose: 2,
        options: ["Acrobatics", "Athletics", "History", "Insight", "Nature", "Religion", "Stealth"]
      }
    },
    multiclassProficiencies: {
      armor: [],
      weapons: ["Simple Weapons", "Shortswords"],
      tools: [],
      skills: []
    },
    multiclassProficiencyChoices: {},
  
  features: MonkFeatures,
  progressionTable: MonkTable,

  createClassEntry: (levelData = {}, stats, isMulticlass = false) => {
    const conMod = calculateModifier(stats.constitution);
    return{
    name: "Monk",
    level: 1,
    features: MonkFeatures?.[1]?.map(f => f.name) || [],
    martialArts: "1d6",
    unarmoredMovement: null,
    techniquesKnown: null,
    tradition: null,
    classHP: [],
    staticProficiencies: isMulticlass
        ? {
        weapons: ["Simple Weapons", "Shortswords"],
         }
        : {
        armor: [],
        weapons: ["Simple Weapons", "Shortswords"],
        tools: [],
        savingThrows: ["Strength", "Dexterity"],
        },
      proficiencyChoices: isMulticlass
        ? monkPackage.multiclassProficiencyChoices || {}
        : monkPackage.proficiencyChoices || {}
    };
  },

  handleLevelUp: (classEntry, newLevel, progressionTable, stats) => {
    const levelData = progressionTable?.[newLevel - 1] || {};
    classEntry.level = newLevel;

    classEntry.martialArts = levelData.martialArts || null;
    classEntry.unarmoredMovement = levelData.unarmoredMovement || null;
    classEntry.techniquesKnown = levelData.techniquesKnown || 0;

    const accumulatedFeatures = [];
    for (let lvl = 1; lvl <= newLevel; lvl++) {
      const levelFeatures = MonkFeatures?.[lvl] || [];
      levelFeatures.forEach(feature => {
        accumulatedFeatures.push({ level: lvl, name: feature.name });
      });
    }
    classEntry.features = accumulatedFeatures;

    classEntry.tradition = classEntry.tradition || null;

    classEntry.exploitSet = "Monk";

    const fixedHPGain = Math.floor(10 / 2) + 1;
    const conMod = calculateModifier(stats.constitution);
    const totalHPGain = fixedHPGain + conMod;

    let newClassHP = [...(classEntry.classHP || [])];
    while (newClassHP.length < newLevel) newClassHP.push(totalHPGain);
    if (newClassHP.length > newLevel) newClassHP = newClassHP.slice(0, newLevel);

    classEntry.classHP = newClassHP;

    return classEntry;
  }
};