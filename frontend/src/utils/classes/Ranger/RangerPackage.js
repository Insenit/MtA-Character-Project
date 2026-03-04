import RangerFeatures from './RangerFeatures';
import RangerTable from './RangerTable';
import { calculateModifier } from '../../characteredits/CharacterFactory';

export const rangerPackage = {
  name: "Ranger",
  subclassKey: "conclave",
  hitDie: 10,
  savingThrows: ["Strength", "Dexterity"],
  proficiencies: {
    armor: ["Light Armor", "Medium Armor", "Shields"],
    weapons: ["Simple Weapons", "Martial Weapons"],
    tools: [],
    skills: ["Choose three from Animal Handling, Athletics, Insight, Investigation, Medicine, Nature, Perception, Sleight of Hand, Stealth, or Survival"]
  },
    proficiencyChoices: {
      rangerSkills: {
        label: "Skills",
        groupKey: "skills",
        choose: 3,
        options: ["Animal Handling", "Athletics", "Insight", "Investigation", "Medicine", "Nature", "Perception", "Sleight of Hand", "Stealth", "Survival"]
      }
    },
    multiclassProficiencies: {
      armor: ["Light Armor", "Medium Armor", "Shields"],
      weapons: ["Simple Weapons", "Martial Weapons"],
      skills: ["Choose one from Animal Handling, Athletics, Insight, Investigation, Medicine, Nature, Perception, Sleight of Hand, Stealth, or Survival"]
    },
    multiclassProficiencyChoices: {
      rangerSkills: {
        label: "Skill",
        groupKey: "skills",
        choose: 1,
        options: ["Animal Handling", "Athletics", "Insight", "Investigation", "Medicine", "Nature", "Perception", "Sleight of Hand", "Stealth", "Survival"]
      }
    },
  
  features: RangerFeatures,
  progressionTable: RangerTable,

  createClassEntry: (levelData = {}, stats, isMulticlass = false) => {
    const conMod = calculateModifier(stats.constitution);
    return {
      name: "Ranger",
      level: 1,
      features: RangerFeatures?.[1]?.map(f => f.name) || [],
      conclave: null,
      knacksKnown: 1,
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
        savingThrows: ["Strength", "Dexterity"],
        },
      proficiencyChoices: isMulticlass
        ? rangerPackage.multiclassProficiencyChoices || {}
        : rangerPackage.proficiencyChoices || {}
    };
  },

  handleLevelUp: (classEntry, newLevel, progressionTable, stats) => {
    const levelData = progressionTable?.[newLevel - 1] || {};
    classEntry.level = newLevel;

    if (newLevel === 1){
      delete classEntry.ranger_spellcasting;
      delete classEntry.preparedSpells;
      delete classEntry.quarryDie;
    }
    if (newLevel >= 2) {
      classEntry.ranger_spellcasting = true; // Adjust name based on class

      const wisMod = typeof stats?.wisdom?.modifier === 'number'
      ? stats.wisdom.modifier
      : 0;

      const halfLevel = Math.floor(newLevel / 2); // Rules say "rounded down"

      classEntry.preparedSpells = Math.max(0, wisMod + halfLevel);
      classEntry.quarryDie = levelData.quarryDie;
    }

    const accumulatedFeatures = [];
    for (let lvl = 1; lvl <= newLevel; lvl++) {
      const levelFeatures = RangerFeatures?.[lvl] || [];
      levelFeatures.forEach(feature => {
        accumulatedFeatures.push({ level: lvl, name: feature.name });
      });
    }
    classEntry.features = accumulatedFeatures;

    classEntry.conclave = classEntry.conclave || null;

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