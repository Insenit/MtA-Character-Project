import BloodHunterFeatures from './BloodHunterFeatures';
import BloodHunterTable from './BloodHunterTable';
import { calculateModifier } from '../../characteredits/CharacterFactory';

export const bloodhunterPackage = {
  name: "Blood Hunter",
  subclassKey: "order",
  hitDie: 12,
  savingThrows: ["Constitution", "Charisma"],
  proficiencies: {
    armor: ["Light Armor", "Medium Armor", "Shields"],
    weapons: ["Simple Weapons", "Martial Weapons"],
    tools: ["Alchemist's Supplies"],
    skills: ["Choose two from Athletics, Acrobatics, Arcana, History, Insight, Investigation, Nature, Religion, or Survival"]
  },
  proficiencyChoices: {
    bloodhunterSkills: {
      label: "Skills",
      groupKey: "skills",
      choose: 2,
      options: ["Athletics", "Acrobatics", "Arcana", "History", "Insight", "Investigation", "Nature", "Religion", "Survival"]
    }
  },
  multiclassProficiencies: {
    armor: ["Light Armor", "Medium Armor", "Shields"],
    weapons: ["Simple Weapons", "Martial Weapons"],
    tools: ["Alchemist's Supplies"]
  },
  multiclassProficiencyChoices: {},

  features: BloodHunterFeatures,
  progressionTable: BloodHunterTable,

  createClassEntry: (levelData = {}, stats, isMulticlass = false) => {
    const conMod = calculateModifier(stats.constitution);
    return {
      name: "Blood Hunter",
      level: 1,
      features: BloodHunterFeatures?.[1]?.map(f => f.name) || [],
      riteDie: "-",
      ritesKnown: 2,
      order: null,
      classHP: [],
      staticProficiencies: isMulticlass
        ? {
        armor: ["Light Armor", "Medium Armor", "Shields"],
        weapons: ["Simple Weapons", "Martial Weapons"],
        tools: ["Alchemist's Supplies"],
         }
        : {
        armor: ["Light Armor", "Medium Armor", "Shields"],
        weapons: ["Simple Weapons", "Martial Weapons"],
        tools: ["Alchemist's Supplies"],
        savingThrows: ["Constitution", "Charisma"],
        },
      proficiencyChoices: isMulticlass
        ? bloodhunterPackage.multiclassProficiencyChoices || {}
        : bloodhunterPackage.proficiencyChoices || {}
    };
  },

  handleLevelUp: (classEntry, newLevel, progressionTable, stats) => {
    const levelData = progressionTable?.[newLevel - 1] || {};
    classEntry.level = newLevel;

    classEntry.riteDie = levelData.riteDie || "d4";
    classEntry.ritesKnown = levelData.ritesKnown || 0;

    const accumulatedFeatures = [];
    for (let lvl = 1; lvl <= newLevel; lvl++) {
      const levelFeatures = BloodHunterFeatures?.[lvl] || [];
      levelFeatures.forEach(feature => {
        accumulatedFeatures.push({ level: lvl, name: feature.name });
      });
    }
    classEntry.features = accumulatedFeatures;

    classEntry.order = classEntry.order || null;

    const fixedHPGain = Math.floor(12 / 2) + 1;
    const conMod = calculateModifier(stats.constitution);
    const totalHPGain = fixedHPGain + conMod;

    let newClassHP = [...(classEntry.classHP || [])];
    while (newClassHP.length < newLevel) newClassHP.push(totalHPGain);
    if (newClassHP.length > newLevel) newClassHP = newClassHP.slice(0, newLevel);

    classEntry.classHP = newClassHP;

    return classEntry;
  }
};