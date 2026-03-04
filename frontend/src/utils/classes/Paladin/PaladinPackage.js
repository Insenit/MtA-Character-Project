import PaladinFeatures from './PaladinFeatures';
import PaladinTable from './PaladinTable';
import { calculateModifier } from '../../characteredits/CharacterFactory';

export const paladinPackage = {
  name: "Paladin",
  subclassKey: "oath",
  hitDie: 10,
  savingThrows: ["Wisdom", "Charisma"],
  proficiencies: {
    armor: ["All Armor", "Shields"],
    weapons: ["Simple Weapons", "Martial Weapons"],
    tools: [],
    skills: ["Choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, or Religion"]
  },
  proficiencyChoices: {
      paladinSkills: {
        label: "Skills",
        groupKey: "skills",
        choose: 2,
        options: ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"]
      }
    },
    multiclassProficiencies: {
      armor: ["Light Armor", "Medium Armor", "Shields"],
        weapons: ["Simple Weapons", "Martial Weapons"],
      tools: [],
      skills: []
    },
    multiclassProficiencyChoices: {},
  
  features: PaladinFeatures,
  progressionTable: PaladinTable,

  createClassEntry: (levelData = {}, stats, isMulticlass = false) => {
    const conMod = calculateModifier(stats.constitution);
    return {
      name: "Paladin",
      level: 1,
      features: PaladinFeatures?.[1]?.map(f => f.name) || [],
      oath: null,
      auraRadius: null,
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
        savingThrows: ["Wisdom", "Charisma"],
        },
      proficiencyChoices: isMulticlass
        ? paladinPackage.multiclassProficiencyChoices || {}
        : paladinPackage.proficiencyChoices || {}
    };
  },

  handleLevelUp: (classEntry, newLevel, progressionTable, stats) => {
    const levelData = progressionTable?.[newLevel - 1] || {};
    classEntry.level = newLevel;

    if (newLevel === 1){
      delete classEntry.paladin_spellcasting;
    }
    if (newLevel >= 2) {
      classEntry.paladin_spellcasting = true; // Adjust name based on class
      classEntry.spellsKnown = levelData.spellsKnown || 0;
    }
    classEntry.auraRadius = levelData.auraRadius || null;

    const accumulatedFeatures = [];
    for (let lvl = 1; lvl <= newLevel; lvl++) {
      const levelFeatures = PaladinFeatures?.[lvl] || [];
      levelFeatures.forEach(feature => {
        accumulatedFeatures.push({ level: lvl, name: feature.name });
      });
    }
    classEntry.features = accumulatedFeatures;

    classEntry.sacredOath = classEntry.sacredOath || null;

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