import FighterFeatures from './FighterFeatures';
import FighterTable from './FighterTable';
import { calculateModifier } from '../../characteredits/CharacterFactory';
import { artisanTools } from '../../../data/ToolOptions';
import { cleanInvalidExploits } from '../../exploits/ExploitCleaner';

export const fighterPackage = {
  name: "Fighter",
  subclassKey: "archetype",
  hitDie: 10,
  savingThrows: ["Strength", "Constitution"],
  proficiencies: {
    armor: ["All Armor", "Shields"],
    weapons: ["Simple Weapons", "Martial Weapons"],
    tools: ["One type of Artisan's Tool"],
    skills: ["Choose two from Acrobatics, Animal Handling, Athletics, History, Intimidation, Perception, Stealth, or Survival"]
  },
  proficiencyChoices: {
    artisansTool: {
      label: "Artisan's Tool",
      groupKey: "tools",
      choose: 1,
      options: artisanTools
    },
    fighterSkills: {
      label: "Skills",
      groupKey: "skills",
      choose: 2,
      options: ["Acrobatics", "Animal Handling", "Athletics", "History", "Intimidation", "Perception", "Stealth", "Survival"]
    }
  },
  multiclassProficiencies: {
    armor: ["Light Armor", "Medium Armor", "Shields"],
    weapons: ["Simple Weapons", "Martial Weapons"],
    tools: [],
    skills: []
  },
  multiclassProficiencyChoices: {},

  features: FighterFeatures,
  progressionTable: FighterTable,

  createClassEntry: (levelData = {}, stats, isMulticlass = false) => {
    const conMod = calculateModifier(stats.constitution);
    return {
      name: "Fighter",
      level: 1,
      features: FighterFeatures?.[1]?.map(f => f.name) || [],
      fightingStyles: [],
      archetype: null,
      classHP: [],
      staticProficiencies: isMulticlass
        ? {
        armor: ["Light Armor", "Medium Armor", "Shields"],
        weapons: ["Simple Weapons", "Martial Weapons"],
         }
        : {
        armor: ["All Armor", "Shields"],
        weapons: ["Simple Weapons", "Martial Weapons"],
        tools: [],
        savingThrows: ["Strength", "Constitution"],
        },
      proficiencyChoices: isMulticlass
        ? fighterPackage.multiclassProficiencyChoices || {}
        : fighterPackage.proficiencyChoices || {}
    };
  },

  handleLevelUp: (classEntry, newLevel, progressionTable, stats) => {
    const levelData = progressionTable?.[newLevel - 1] || {};
    classEntry.level = newLevel;

    classEntry.fightingStylesKnown = levelData.fightingStyles || 0;

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
      classEntry.exploitSet = "fighter";
      classEntry.exploitsKnown = levelData.exploitsKnown || 0;
      classEntry.fighter_exploits = true;
      classEntry.exploitsSelected = classEntry.exploitsSelected || {};
    }

    const accumulatedFeatures = [];
    for (let lvl = 1; lvl <= newLevel; lvl++) {
      const levelFeatures = FighterFeatures?.[lvl] || [];
      levelFeatures.forEach(feature => {
        accumulatedFeatures.push({ level: lvl, name: feature.name });
      });
    }
    classEntry.features = accumulatedFeatures;

    classEntry.archetype = classEntry.archetype || null;

    const fixedHPGain = Math.floor(10 / 2) + 1;
    const conMod = calculateModifier(stats.constitution);
    const totalHPGain = fixedHPGain + conMod;

    let newClassHP = [...(classEntry.classHP || [])];
    while (newClassHP.length < newLevel) newClassHP.push(totalHPGain);
    if (newClassHP.length > newLevel) newClassHP = newClassHP.slice(0, newLevel);

    classEntry.classHP = newClassHP;

    return cleanInvalidExploits(classEntry, 'class');
  }
};