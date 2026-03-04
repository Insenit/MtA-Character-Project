import VesselFeatures from './VesselFeatures';
import VesselTable from './VesselTable';
import { calculateModifier } from '../../characteredits/CharacterFactory';

export const vesselPackage = {
  name: "Vessel",
  subclassKey: "spirit",
  hitDie: 10,
  savingThrows: ["Constitution", "Charisma"],
  proficiencies: {
    armor: ["Light Armor"],
    weapons: ["Simple Weapons", "Scimitars", "Shortswords"],
    tools: [],
    skills: ["Choose two from Acrobatics, Athletics, Insight, Intimidation, Perception, Religion, or Survival"]
  },
  proficiencyChoices: {
    vesselSkills: {
      label: "Skills",
      groupKey: "skills",
      choose: 2,
      options: ["Acrobatics", "Athletics", "Insight", "Intimidation", "Perception", "Religion", "Survival"]
    }
  },
  multiclassProficiencies: {
    armor: ["Light Armor"],
    weapons: ["Simple Weapons"],
    tools: [],
    skills: []
  },
  multiclassProficiencyChoices: {},
  
  features: VesselFeatures,
  progressionTable: VesselTable,

  createClassEntry: (levelData = {}, stats, isMulticlass = false) => {
    const conMod = calculateModifier(stats.constitution);
    return {
      name: "Vessel",
      level: 1,
      features: VesselFeatures?.[1]?.map(f => f.name) || [],
      unsealedAspects: 2,
      spirit: null,
      classHP: [],
      staticProficiencies: isMulticlass
        ? {
        armor: ["Light Armor"],
        weapons: ["Simple Weapons"]
         }
        : {
        armor: ["Light Armor"],
        weapons: ["Simple Weapons", "Scimitars", "Shortswords"],
        tools: [],
        savingThrows: ["Constitution", "Charisma"],
        },
      proficiencyChoices: isMulticlass
        ? vesselPackage.multiclassProficiencyChoices || {}
        : vesselPackage.proficiencyChoices || {}
    };
  },

  handleLevelUp: (classEntry, newLevel, progressionTable, stats) => {
    const levelData = progressionTable?.[newLevel - 1] || {};
    classEntry.level = newLevel;

    classEntry.unsealedAspects = levelData.unsealedAspects || 0;

    if (newLevel === 1){
      delete classEntry.vessel_spellcasting;
    }
    if (newLevel >= 2) {
      classEntry.vessel_spellcasting = true;
    }

    const accumulatedFeatures = [];
    for (let lvl = 1; lvl <= newLevel; lvl++) {
      const levelFeatures = VesselFeatures?.[lvl] || [];
      levelFeatures.forEach(feature => {
        accumulatedFeatures.push({ level: lvl, name: feature.name });
      });
    }
    classEntry.features = accumulatedFeatures;

    classEntry.spirit = classEntry.spirit || null;

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