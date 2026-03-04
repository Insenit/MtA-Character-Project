import ShifterFeatures from './ShifterFeatures';
import ShifterTable from './ShifterTable';
import { calculateModifier } from '../../characteredits/CharacterFactory';

export const shifterPackage = {
  name: "Shifter",
  subclassKey: "bloodline",
  hitDie: 10,
  savingThrows: ["Strength", "Dexterity"],
  proficiencies: {
    armor: ["Light Armor"],
    weapons: ["Simple Weapons", "Blowguns", "Longbows", "Nets"],
    tools: [],
    skills: ["Choose two from Acrobatics, Animal Handling, Athletics, Nature, Perception, Stealth, or Survival"]
  },
  proficiencyChoices: {
    shifterSkills: {
      label: "Skills",
      groupKey: "skills",
      choose: 2,
      options: ["Acrobatics", "Animal Handling", "Athletics", "Nature", "Perception", "Stealth", "Survival"]
    }
  },
  multiclassProficiencies: {
    weapons: ["Simple Weapons"],
    tools: [],
    skills: ["Choose one from Acrobatics, Animal Handling, Athletics, Nature, Perception, Stealth, or Survival"]
  },
  multiclassProficiencyChoices: {
    shifterSkills: {
      label: "Skill",
      groupKey: "skills",
      choose: 1,
      options: ["Acrobatics", "Animal Handling", "Athletics", "Nature", "Perception", "Stealth", "Survival"]
    }
  },

  features: ShifterFeatures,
  progressionTable: ShifterTable,

  createClassEntry: (levelData = {}, stats) => {
    const conMod = calculateModifier(stats.constitution);
    return {
      name: "Shifter",
      level: 1,
      features: ShifterFeatures?.[1]?.map(f => f.name) || [],
      maxCR: null,
      bloodline: null,
      classHP: [],
      staticProficiencies: isMulticlass
        ? {
        weapons: ["Simple Weapons"]
         }
        : {
        armor: ["Light Armor"],
        weapons: ["Simple Weapons", "Blowguns", "Longbows", "Nets"],
        tools: [],
        savingThrows: ["Strength", "Dexterity"],
        },
      proficiencyChoices: isMulticlass
        ? shifterPackage.multiclassProficiencyChoices || {}
        : shifterPackage.proficiencyChoices || {}
    };
  },

  handleLevelUp: (classEntry, newLevel, progressionTable, stats) => {
    const levelData = progressionTable?.[newLevel - 1] || {};
    classEntry.level = newLevel;

    classEntry.maxCR = levelData.maxCR || null;

    const accumulatedFeatures = [];
    for (let lvl = 1; lvl <= newLevel; lvl++) {
      const levelFeatures = ShifterFeatures?.[lvl] || [];
      levelFeatures.forEach(feature => {
        accumulatedFeatures.push({ level: lvl, name: feature.name });
      });
    }
    classEntry.features = accumulatedFeatures;

    classEntry.bloodline = classEntry.bloodline || null;

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