import SavantFeatures from './SavantFeatures';
import SavantTable from './SavantTable';
import { calculateModifier } from '../../characteredits/CharacterFactory';
import { artisanTools } from '../../../data/ToolOptions';

export const savantPackage = {
  name: "Savant",
  subclassKey: "discipline",
  hitDie: 8,
  savingThrows: ["Intelligence", "Wisdom"],
  proficiencies: {
    armor: ["Light Armor"],
    weapons: ["Simple Weapons", "Shortswords", "Rapiers", "Whips"],
    tools: ["One type of Artisan's Tool"],
    skills: ["Choose two from Arcana, History, Insight, Investigation, Medicine, Nature, Persuasion, or Religion"]
  },
  proficiencyChoices: {
    artisansTools: {
      label: "Artisan's Tool",
      groupKey: "tools",
      choose: 1,
      options: artisanTools
    },
    savantSkills: {
      label: "Skills",
      groupKey: "skills",
      choose: 2,
      options: ["Arcana", "History", "Insight", "Investigation", "Medicine", "Nature", "Persuasion", "Religion"]
    }
  },
  multiclassProficiencies: {
    armor: ["Light Armor"],
    tools: ["One type of Artisan's Tool"],
    skills: ["Choose one from Arcana, History, Insight, Investigation, Medicine, Nature, Persuasion, or Religion"]
  },
  multiclassProficiencyChoices: {
    artisansTools: {
      label: "Artisan's Tool",
      groupKey: "tools",
      choose: 1,
      options: artisanTools
    },
    savantSkills: {
      label: "Skill",
      groupKey: "skills",
      choose: 1,
      options: ["Arcana", "History", "Insight", "Investigation", "Medicine", "Nature", "Persuasion", "Religion"]
    }
  },
  
  features: SavantFeatures,
  progressionTable: SavantTable,

  createClassEntry: (levelData = {}, stats, isMulticlass = false) => {
    const conMod = calculateModifier(stats.constitution);
    return {
      name: "Savant",
      level: 1,
      features: SavantFeatures?.[1]?.map(f => f.name) || [],
      intellectDie: null,
      discipline: null,
      classHP: [],
      staticProficiencies: isMulticlass
        ? {
        armor: ["Light Armor"]
         }
        : {
        armor: ["Light Armor"],
        weapons: ["Simple Weapons", "Shortswords", "Rapiers", "Whips"],
        tools: [],
        savingThrows: ["Intelligence", "Wisdom"],
        },
      proficiencyChoices: isMulticlass
        ? savantPackage.multiclassProficiencyChoices || {}
        : savantPackage.proficiencyChoices || {}
    };
  },

  handleLevelUp: (classEntry, newLevel, progressionTable, stats) => {
    const levelData = progressionTable?.[newLevel - 1] || {};
    classEntry.level = newLevel;

    classEntry.intellectDie = levelData.intellectDie || null;

    const accumulatedFeatures = [];
    for (let lvl = 1; lvl <= newLevel; lvl++) {
      const levelFeatures = SavantFeatures?.[lvl] || [];
      levelFeatures.forEach(feature => {
        accumulatedFeatures.push({ level: lvl, name: feature.name });
      });
    }
    classEntry.features = accumulatedFeatures;

    classEntry.discipline = classEntry.discipline || null;

    const fixedHPGain = Math.floor(8 / 2) + 1;
    const conMod = calculateModifier(stats.constitution);
    const totalHPGain = fixedHPGain + conMod;

    let newClassHP = [...(classEntry.classHP || [])];
    while (newClassHP.length < newLevel) newClassHP.push(totalHPGain);
    if (newClassHP.length > newLevel) newClassHP = newClassHP.slice(0, newLevel);

    classEntry.classHP = newClassHP;

    return classEntry;
  }
};