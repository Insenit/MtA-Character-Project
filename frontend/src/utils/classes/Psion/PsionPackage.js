import PsionFeatures from './PsionFeatures';
import PsionTable from './PsionTable';
import { calculateModifier } from '../../characteredits/CharacterFactory';

export const psionPackage = {
  name: "Psion",
  subclassKey: "awakening",
  hitDie: 6,
  savingThrows: ["Intelligence", "Wisdom"],
  proficiencies: {
    armor: ["Light Armor"],
    weapons: ["Simple Weapons"],
    tools: [],
    skills: ["Choose two from Arcana, History, Insight, Investigation, Medicine, Nature, Perception, or Religion"]
  },
    proficiencyChoices: {
      psionSkills: {
        label: "Skills",
        groupKey: "skills",
        choose: 2,
        options: ["Arcana", "History", "Insight", "Investigation", "Medicine", "Nature", "Perception", "Religion"]
      }
    },
    multiclassProficiencies: {
      armor: ["Light Armor"],
      weapons: ["Simple Weapons"],
      tools: [],
      skills: []
    },
    multiclassProficiencyChoices: {},
  
  features: PsionFeatures,
  progressionTable: PsionTable,

  createClassEntry: (levelData = {}, stats, isMulticlass = false) => {
    const conMod = calculateModifier(stats.constitution);
    return {
      name: "Psion",
      level: 1,
      features: PsionFeatures?.[1]?.map(f => f.name) || [],
      psionSpellcasting: true,
      cantripsKnown: 2,
      spellsKnown: 2,
      awakening: null,
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
        savingThrows: ["Intelligence", "Wisdom"],
        },
      proficiencyChoices: isMulticlass
        ? psionPackage.multiclassProficiencyChoices || {}
        : psionPackage.proficiencyChoices || {}
    };
  },

  handleLevelUp: (classEntry, newLevel, progressionTable, stats) => {
    const levelData = progressionTable?.[newLevel - 1] || {};

    classEntry.cantripsKnown = levelData.cantripsKnown || 0;
    classEntry.spellsKnown = levelData.spellsKnown || 0;

    if (newLevel === 1){
      delete classEntry.mysticTalents;
    }
    if (newLevel >= 2) {
      classEntry.mysticTalents = levelData.mysticTalents || 0;
    }

    const accumulatedFeatures = [];
    for (let lvl = 1; lvl <= newLevel; lvl++) {
      const levelFeatures = PsionFeatures?.[lvl] || [];
      levelFeatures.forEach(feature => {
        accumulatedFeatures.push({ level: lvl, name: feature.name });
      });
    }
    classEntry.features = accumulatedFeatures;

    classEntry.awakening = classEntry.awakening || null;

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