import MagusFeatures from './MagusFeatures';
import MagusTable from './MagusTable';
import { calculateModifier } from '../../characteredits/CharacterFactory';

export const magusPackage = {
  name: "Magus",
  subclassKey: "order",
  hitDie: 10,
  savingThrows: ["Constitution", "Intelligence"],
  proficiencies: {
    armor: ["Light Armor", "Medium Armor", "Shields"],
    weapons: ["Simple Weapons", "Martial Weapons"],
    tools: [],
    skills: ["Choose two from Acrobatics, Arcana, Athletics, History, Investigation, Nature, or Performance"]
  },
  proficiencyChoices: {
    magusSkills: {
      label: "Skills",
      groupKey: "skills",
      choose: 2,
      options: ["Acrobatics", "Arcana", "Athletics", "History", "Investigation", "Nature", "Performance"]
    }
  },
  multiclassProficiencies: {
    armor: ["Light Armor", "Medium Armor", "Shields"],
      weapons: ["Simple Weapons", "Martial Weapons"],
    tools: [],
    skills: []
  },
  multiclassProficiencyChoices: {},

  features: MagusFeatures,
  progressionTable: MagusTable,

  createClassEntry: (levelData = {}, stats, isMulticlass = false) => {
    const conMod = calculateModifier(stats.constitution);
    return {
      name: "Magus",
      level: 1,
      features: MagusFeatures?.[1]?.map(f => f.name) || [],
      order: null,
      classHP: [],
      staticProficiencies: isMulticlass
        ? {
        armor: ["Light Armor", "Medium Armor", "Shields"],
        weapons: ["Simple Weapons", "Martial Weapons"],
         }
        : {
        armor: ["Light Armor", "Medium Armor", "Shields"],
        weapons: ["Simple Weapons", "Martial Weapons"],
        tools: [],
        savingThrows: ["Constitution", "Intelligence"],
        },
      proficiencyChoices: isMulticlass
        ? magusPackage.multiclassProficiencyChoices || {}
        : magusPackage.proficiencyChoices || {}
    };
  },

  handleLevelUp: (classEntry, newLevel, progressionTable, stats) => {
    const levelData = progressionTable?.[newLevel - 1] || {};
    classEntry.level = newLevel;

    if (newLevel === 1){
      delete classEntry.magus_spellcasting;
    }
    if (newLevel >= 2) {
      classEntry.magus_spellcasting = true; // Adjust name based on class
      classEntry.cantripsKnown = levelData.cantripsKnown || 0;
      classEntry.spellsKnown = levelData.spellsKnown || 0;
    }

    const accumulatedFeatures = [];
    for (let lvl = 1; lvl <= newLevel; lvl++) {
      const levelFeatures = MagusFeatures?.[lvl] || [];
      levelFeatures.forEach(feature => {
        accumulatedFeatures.push({ level: lvl, name: feature.name });
      });
    }
    classEntry.features = accumulatedFeatures;

    classEntry.order = classEntry.order || null;

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