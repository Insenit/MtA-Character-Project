import WarlockFeatures from './WarlockFeatures';
import WarlockTable from './WarlockTable';
import { calculateModifier } from '../../characteredits/CharacterFactory';

export const warlockPackage = {
  name: "Warlock",
  subclassKey: "patron",
  hitDie: 8,
  savingThrows: ["Wisdom", "Intelligence"],
  proficiencies: {
    armor: ["Light Armor"],
    weapons: ["Simple Weapons"],
    tools: [],
    skills: ["Choose two from Arcana, Deception, History, Intimidation, Investigation, Nature, or Religion"]
  },
  proficiencyChoices: {
    warlockSkills: {
      label: "Skills",
      groupKey: "skills",
      choose: 2,
      options: ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"]
    }
  },
  multiclassProficiencies: {
    armor: ["Light Armor"],
    weapons: ["Simple Weapons"],
    tools: [],
    skills: []
  },
  multiclassProficiencyChoices: {},
  
  features: WarlockFeatures,
  progressionTable: WarlockTable,

  createClassEntry: (levelData = {}, stats, isMulticlass = false) => {
    const conMod = calculateModifier(stats.constitution);
    return {
      name: "Warlock",
      level: 1,
      features: WarlockFeatures?.[1]?.map(f => f.name) || [],
      invocationsKnown: 2,
      patron: null,
      classHP: [],
      staticProficiencies: isMulticlass
        ? {
        armor: ["Light Armor"],
        weapons: ["Simple Weapons"]
         }
        : {
        armor: ["Light Armor"],
        weapons: ["Simple Weapons"],
        tools: [],
        savingThrows: ["Wisdom", "Intelligence"],
        },
      proficiencyChoices: isMulticlass
        ? warlockPackage.multiclassProficiencyChoices || {}
        : warlockPackage.proficiencyChoices || {}
    };
  },

  handleLevelUp: (classEntry, newLevel, progressionTable, stats) => {
    const levelData = progressionTable?.[newLevel - 1] || {};
    classEntry.level = newLevel;

    classEntry.invocationsKnown = levelData.invocationsKnown || 0;

    if (newLevel === 1){
      delete classEntry.warlock_spellcasting;
      classEntry.warlockBlast = true;
    }
    if (newLevel >= 2) {
      delete classEntry.warlockBlast;
      classEntry.warlock_spellcasting = true;
      classEntry.cantripsKnown = levelData.cantripsKnown || 0;
      classEntry.spellsKnown = levelData.spellsKnown || 0;
    }

    const accumulatedFeatures = [];
    for (let lvl = 1; lvl <= newLevel; lvl++) {
      const levelFeatures = WarlockFeatures?.[lvl] || [];
      levelFeatures.forEach(feature => {
        accumulatedFeatures.push({ level: lvl, name: feature.name });
      });
    }
    classEntry.features = accumulatedFeatures;

    classEntry.patron = classEntry.patron || null;

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