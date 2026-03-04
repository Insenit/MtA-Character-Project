import ShamanFeatures from './ShamanFeatures';
import ShamanTable from './ShamanTable';
import { calculateModifier } from '../../characteredits/CharacterFactory';

export const shamanPackage = {
  name: "Shaman",
  subclassKey: "spirituality",
  hitDie: 8,
  savingThrows: ["Wisdom", "Charisma"],
  proficiencies: {
    armor: ["Light Armor", "Shields"],
    weapons: ["Simple Weapons", "Blowguns", "Nets"],
    tools: [],
    skills: ["Choose two from Animal Handling, Arcana, Insight, Medicine, Nature, Performance, or Religion"]
  },
  proficiencyChoices: {
    shamanSkills: {
      label: "Skills",
      groupKey: "skills",
      choose: 2,
      options: ["Animal Handling", "Arcana", "Insight", "Medicine", "Nature", "Performance", "Religion"]
    }
  },
  multiclassProficiencies: {
    armor: ["Light Armor"],
    weapons: ["Simple Weapons"],
    tools: [],
    skills: []
  },
  multiclassProficiencyChoices: {},

  features: ShamanFeatures,
  progressionTable: ShamanTable,

  createClassEntry: (levelData = {}, stats) => {
    const conMod = calculateModifier(stats.constitution);
    return {
      name: "Shaman",
      level: 1,
      features: ShamanFeatures?.[1]?.map(f => f.name) || [],
      boundSpirits: 2,
      spirituality: null,
      classHP: [],
      staticProficiencies: isMulticlass
        ? {
        armor: ["Light Armor"],
        weapons: ["Simple Weapons"]
         }
        : {
        armor: ["Light Armor", "Shields"],
        weapons: ["Simple Weapons", "Blowguns", "Nets"],
        tools: [],
        savingThrows: ["Wisdom", "Charisma"],
        },
      proficiencyChoices: isMulticlass
        ? shamanPackage.multiclassProficiencyChoices || {}
        : shamanPackage.proficiencyChoices || {}
    };
  },

  handleLevelUp: (classEntry, newLevel, progressionTable, stats) => {
    const levelData = progressionTable?.[newLevel - 1] || {};
    classEntry.level = newLevel;

    classEntry.boundSpirits = levelData.boundSpirits || 0;

    if (newLevel === 1){
      delete classEntry.shaman_spellcasting;
      classEntry.totemicAssault = true;
    }
    if (newLevel >= 2) {
      delete classEntry.totemicAssault;
      classEntry.shaman_spellcasting = true;
      classEntry.cantripsKnown = levelData.cantripsKnown || 0;
      const wisMod = typeof stats?.wisdom?.modifier === 'number'
      ? stats.wisdom.modifier
      : 0;

      const Level = newLevel

      classEntry.preparedSpells = Math.max(0, wisMod + Level);
    }

    const accumulatedFeatures = [];
    for (let lvl = 1; lvl <= newLevel; lvl++) {
      const levelFeatures = ShamanFeatures?.[lvl] || [];
      levelFeatures.forEach(feature => {
        accumulatedFeatures.push({ level: lvl, name: feature.name });
      });
    }
    classEntry.features = accumulatedFeatures;

    classEntry.spirituality = classEntry.spirituality || null;

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