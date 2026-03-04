import BardFeatures from './BardFeatures';
import BardTable from './BardTable';
import { calculateModifier } from '../../characteredits/CharacterFactory';
import { musicalInstruments, allToolOptions } from '../../../data/ToolOptions';

export const bardPackage = {
  name: "Bard",
  subclassKey: "tradition",
  hitDie: 8,
  savingThrows: ["Dexterity", "Charisma"],
  proficiencies: {
    armor: ["Light Armor", "Medium Armor"],
    weapons: ["Simple Weapons", "Rapiers", "Shortswords"],
    tools: ["One type of Musical Instrument", "One type of Tool"],
    skills: ["Choose three from Acrobatics, Arcana, Deception, History, Insight, Investigation, Perception, Performance, Persuasion, Religion, Sleight of Hand, or Stealth"]
  },
  proficiencyChoices: {
    musicalInstruments: {
      label: "Instrument",
      groupKey: "tools",
      choose: 1,
      options: musicalInstruments
    },
    bardTools: {
      label: "Tool",
      groupKey: "tools",
      choose: 1,
      options: allToolOptions
    },
    bardSkills: {
      label: "Skills",
      groupKey: "skills",
      choose: 3,
      options: ["Acrobatics", "Arcana", "Deception", "History", "Insight", "Investigation", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth"]
    }
  },
  multiclassProficiencies: {
    armor: ["Light Armor"],
    tools: ["One type of Musical Instrument"],
    skills: ["Choose one from Acrobatics, Arcana, Deception, History, Insight, Investigation, Perception, Performance, Persuasion, Religion, Sleight of Hand, or Stealth"]
  },
  multiclassProficiencyChoices: {
    musicalInstruments: {
      label: "Instrument",
      groupKey: "tools",
      choose: 1,
      options: musicalInstruments
    },
    bardSkills: {
      label: "Skill",
      groupKey: "skills",
      choose: 1,
      options: ["Acrobatics", "Arcana", "Deception", "History", "Insight", "Investigation", "Perception", "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth"]
    }
  },

  features: BardFeatures,
  progressionTable: BardTable,

  createClassEntry: (levelData = {}, stats, isMulticlass = false) => {
    const conMod = calculateModifier(stats.constitution);
    return {
      name: "Bard",
      level: 1,
      features: BardFeatures?.[1]?.map(f => f.name) || [],
      bardicInspirationDie: "d4",
      chordsKnown: 2,
      tradition: null,
      classHP: [],
      staticProficiencies: isMulticlass
        ? {
        armor: ["Light Armor"]
         }
        : {
        armor: ["Light Armor", "Medium Armor"],
        weapons: ["Simple Weapons", "Rapiers", "Shortswords"],
        tools: [],
        savingThrows: ["Dexterity", "Charisma"],
        },
      proficiencyChoices: isMulticlass
        ? bardPackage.multiclassProficiencyChoices || {}
        : bardPackage.proficiencyChoices || {}
    };
  },

  handleLevelUp: (classEntry, newLevel, progressionTable, stats) => {
    const levelData = progressionTable?.[newLevel - 1] || {};
    classEntry.level = newLevel;

    classEntry.bardicInspirationDie = levelData.bardicInspiration || "d4";
    classEntry.chordsKnown = levelData.chordsKnown || 0;

    if (newLevel === 1){
      delete classEntry.bard_spellcasting;
    }
    if (newLevel >= 2) {
      classEntry.bard_spellcasting = true;
      classEntry.cantripsKnown = levelData.cantripsKnown || 0;
      classEntry.spellsKnown = levelData.spellsKnown || 0;
    }

    const accumulatedFeatures = [];
    for (let lvl = 1; lvl <= newLevel; lvl++) {
      const levelFeatures = BardFeatures?.[lvl] || [];
      levelFeatures.forEach(feature => {
        accumulatedFeatures.push({ level: lvl, name: feature.name });
      });
    }
    classEntry.features = accumulatedFeatures;

    classEntry.tradition = classEntry.tradition || null;

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