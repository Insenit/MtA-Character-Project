import WarlordFeatures from './WarlordFeatures';
import WarlordTable from './WarlordTable';
import { calculateModifier } from '../../characteredits/CharacterFactory';
import { gamingSets } from '../../../data/ToolOptions';
import { cleanInvalidExploits } from '../../exploits/ExploitCleaner';

export const warlordPackage = {
  name: "Warlord",
  subclassKey: "academy",
  hitDie: 8,
  savingThrows: ["Wisdom", "Charisma"],
  proficiencies: {
    armor: ["Light Armor", "Medium Armor", "Shields"],
    weapons: ["Simple Weapons", "Hand crossbows", "Longbows", "Longswords", "Rapiers", "Scimitars", "Shortswords"],
    tools: ["One type of Gaming Set"],
    skills: ["Choose two from Athletics, Deception, History, Insight, Intimidation, Investigation, or Persuasion"]
  },
  proficiencyChoices: {
    gamingSets: {
      label: "Gaming Set",
      groupKey: "tools",
      choose: 1,
      options: gamingSets
    },
    warlordSkills: {
      label: "Skills",
      groupKey: "skills",
      choose: 2,
      options: ["Athletics", "Deception", "History", "Insight", "Intimidation", "Investigation", "Persuasion"]
    }
  },
  multiclassProficiencies: {
    armor: ["Light Armor", "Medium Armor", "Shields"],
    weapons: ["Simple Weapons"],
    tools: ["One type of Gaming Set"],
    skills: []
  },
  multiclassProficiencyChoices: {
    gamingSets: {
      label: "Gaming Set",
      groupKey: "tools",
      choose: 1,
      options: gamingSets
    }
  },
  
  features: WarlordFeatures,
  progressionTable: WarlordTable,

  createClassEntry: (levelData = {}, stats, isMulticlass = false) => {
    const conMod = calculateModifier(stats.constitution);
    return {
      name: "Warlord",
      level: 1,
      features: WarlordFeatures?.[1]?.map(f => f.name) || [],
      inspiringWord: 3,
      academy: null,
      classHP: [],
      staticProficiencies: isMulticlass
        ? {
        armor: ["Light Armor", "Medium Armor", "Shields"],
        weapons: ["Simple Weapons"]
         }
        : {
        armor: ["Light Armor", "Medium Armor", "Shields"],
        weapons: ["Simple Weapons", "Hand crossbows", "Longbows", "Longswords", "Rapiers", "Scimitars", "Shortswords"],
        tools: [],
        savingThrows: ["Wisdom", "Charisma"],
        },
      proficiencyChoices: isMulticlass
        ? warlordPackage.multiclassProficiencyChoices || {}
        : warlordPackage.proficiencyChoices || {}
    };
  },

  handleLevelUp: (classEntry, newLevel, progressionTable, stats) => {
    const levelData = progressionTable?.[newLevel - 1] || {};
    classEntry.level = newLevel;

    classEntry.inspiringWord = levelData.inspiringWord || 0;

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
      classEntry.exploitSet = "warlord";
      classEntry.exploitsKnown = levelData.exploitsKnown || 0;
      classEntry.warlord_exploits = true;
      classEntry.exploitsSelected = classEntry.exploitsSelected || {};
    }

    const accumulatedFeatures = [];
    for (let lvl = 1; lvl <= newLevel; lvl++) {
      const levelFeatures = WarlordFeatures?.[lvl] || [];
      levelFeatures.forEach(feature => {
        accumulatedFeatures.push({ level: lvl, name: feature.name });
      });
    }
    classEntry.features = accumulatedFeatures;

    classEntry.academy = classEntry.academy || null;

    const fixedHPGain = Math.floor(8 / 2) + 1;
    const conMod = calculateModifier(stats.constitution);
    const totalHPGain = fixedHPGain + conMod;

    let newClassHP = [...(classEntry.classHP || [])];
    while (newClassHP.length < newLevel) newClassHP.push(totalHPGain);
    if (newClassHP.length > newLevel) newClassHP = newClassHP.slice(0, newLevel);

    classEntry.classHP = newClassHP;

    return cleanInvalidExploits(classEntry, 'class');
  }
};