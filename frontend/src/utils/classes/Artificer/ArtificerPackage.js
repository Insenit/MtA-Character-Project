import ArtificerFeatures from './ArtificerFeatures';
import ArtificerTable from './ArtificerTable';
import { calculateModifier } from '../../characteredits/CharacterFactory';
import { artisanTools } from '../../../data/ToolOptions';

export const artificerPackage = {
  name: "Artificer",
  subclassKey: "specialization",
  hitDie: 8,
  savingThrows: ["Constitution", "Intelligence"],
  proficiencies: {
    armor: ["Light Armor", "Medium Armor", "Shields"],
    weapons: ["Simple Weapons", "Hand Crossbows", "(Firearms)"],
    tools: ["Tinker's Tools", "One type of Artisan's Tool"],
    skills: ["Choose two from Arcana, History, Insight, Investigation, Medicine, Nature, or Sleight of Hand"]
  },
  proficiencyChoices: {
    artisansTools: {
      label: "Artisan's Tool",
      groupKey: "tools",
      choose: 1,
      options: artisanTools
    },
    artificerSkills: {
      label: "Skills",
      groupKey: "skills",
      choose: 2,
      options: ["Arcana", "History", "Insight", "Investigation", "Medicine", "Nature", "Sleight of Hand"]
    }
  },
  multiclassProficiencies: {
    armor: ["Light Armor", "Medium Armor", "Shields"],
    tools: ["Tinker's Tools"]
  },
  multiclassProficiencyChoices: {
  },

  features: ArtificerFeatures,
  progressionTable: ArtificerTable,

  createClassEntry: (levelData = {}, stats, isMulticlass = false) => {
    const conMod = calculateModifier(stats.constitution);
    return {
      name: "Artificer",
      level: 1,
      features: ArtificerFeatures?.[1]?.map(f => f.name) || [],
      infusionsKnown: 2,
      infusedItems: [],
      attunementSlots: 3,
      specialization: null,
      classHP: [],
      staticProficiencies: isMulticlass
        ? { ...artificerPackage.multiclassProficiencies }
        : {
        armor: ["Light Armor", "Medium Armor", "Shields"],
        weapons: ["Simple Weapons", "Hand Crossbows", "Firearms"],
        tools: ["Tinker's Tools"],
        savingThrows: ["Constitution", "Intelligence"],
        },
      proficiencyChoices: isMulticlass
        ? artificerPackage.multiclassProficiencyChoices || {}
        : artificerPackage.proficiencyChoices || {}
    };
  },


  handleLevelUp: (classEntry, newLevel, progressionTable, stats) => {
    const levelData = progressionTable?.[newLevel - 1] || {};
    classEntry.level = newLevel;

    classEntry.infusionsKnown = levelData.infusionsKnown || 0;

    if (newLevel === 1){
      delete classEntry.artificer_spellcasting;
    }
    if (newLevel >= 2) {
      classEntry.artificer_spellcasting = true;
      classEntry.cantripsKnown = levelData.cantripsKnown || 0;
      classEntry.spellsKnown = levelData.spellsKnown || 0;
    }

    const accumulatedFeatures = [];
    for (let lvl = 1; lvl <= newLevel; lvl++) {
      const levelFeatures = ArtificerFeatures?.[lvl] || [];
      levelFeatures.forEach(feature => {
        accumulatedFeatures.push({ level: lvl, name: feature.name });
      });
    }
    classEntry.features = accumulatedFeatures;

    if (newLevel >= 18) {
      classEntry.attunementSlots = 6;
    } else if (newLevel >= 14) {
      classEntry.attunementSlots = 5;
    } else if (newLevel >= 9) {
      classEntry.attunementSlots = 4;
    } else {
      classEntry.attunementSlots = 3;
    }

    classEntry.specialization = classEntry.specialization || null;

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