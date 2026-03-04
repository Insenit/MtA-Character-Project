import RogueFeatures from './RogueFeatures';
import RogueTable from './RogueTable';
import { calculateModifier } from '../../characteredits/CharacterFactory';
import { allToolOptions } from '../../../data/ToolOptions';
import { cleanInvalidExploits } from '../../exploits/ExploitCleaner';

export const roguePackage = {
  name: "Rogue",
  subclassKey: "archetype",
  hitDie: 8,
  savingThrows: ["Dexterity", "Intelligence"],
  proficiencies: {
    armor: ["Light Armor"],
    weapons: ["Simple Weapons", "Blowguns", "Hand Crossbows", "Scimitars", "Shortswords", "Rapiers", "Whips"],
    tools: ["One type of Tool"],
    skills: ["Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, or Stealth"]
  },
  proficiencyChoices: {
    rogueTools: {
      label: "Tool",
      groupKey: "tools",
      choose: 1,
      options: allToolOptions
    },
    rogueSkills: {
      label: "Skills",
      groupKey: "skills",
      choose: 4,
      options: ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"]
    }
  },
  multiclassProficiencies: {
    armor: ["Light Armor"],
    tools: ["One type of Tool"],
    skills: ["Choose one from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, or Stealth"]
  },
  multiclassProficiencyChoices: {
    rogueTools: {
      label: "Tool",
      groupKey: "tools",
      choose: 1,
      options: allToolOptions
    },
    rogueSkills: {
      label: "Skill",
      groupKey: "skills",
      choose: 1,
      options: ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"]
    }
  },

  features: RogueFeatures,
  progressionTable: RogueTable,

  createClassEntry: (levelData = {}, stats, isMulticlass = false) => {
    const conMod = calculateModifier(stats.constitution);
    return {
      name: "Rogue",
      level: 1,
      features: RogueFeatures?.[1]?.map(f => f.name) || [],
      sneakAttack: "1d6",
      archetype: null,
      classHP: [],
      staticProficiencies: isMulticlass
        ? {
        armor: ["Light Armor"]
         }
        : {
        armor: ["Light Armor"],
        weapons: ["Simple Weapons", "Blowguns", "Hand Crossbows", "Scimitars", "Shortswords", "Rapiers", "Whips"],
        tools: [],
        savingThrows: ["Dexterity", "Intelligence"],
        },
      proficiencyChoices: isMulticlass
        ? roguePackage.multiclassProficiencyChoices || {}
        : roguePackage.proficiencyChoices || {}
    };
  },

  handleLevelUp: (classEntry, newLevel, progressionTable, stats) => {
    const levelData = progressionTable?.[newLevel - 1] || {};
    classEntry.level = newLevel;

    classEntry.sneakAttack = levelData.sneakAttack || 0;

    if (newLevel === 1) {
      delete classEntry.exploitSet;
      delete classEntry.exploitsKnown;
      for (const key in classEntry) {
        if (key.endsWith('_exploits')) {
          delete classEntry[key];
        }
      }
    }

    if (newLevel >= 2) {
      classEntry.exploits = true;
      classEntry.exploitSet = "rogue";
      classEntry.exploitsKnown = levelData.exploitsKnown || 0;
      classEntry.rogue_exploits = true;
      classEntry.exploitsSelected = classEntry.exploitsSelected || {};
    }

    const accumulatedFeatures = [];
    for (let lvl = 1; lvl <= newLevel; lvl++) {
      const levelFeatures = RogueFeatures?.[lvl] || [];
      levelFeatures.forEach(feature => {
        accumulatedFeatures.push({ level: lvl, name: feature.name });
      });
    }
    classEntry.features = accumulatedFeatures;

    classEntry.archetype = classEntry.archetype || null;

    const fixedHPGain = Math.floor(8 / 2) + 1;
    const conMod = calculateModifier(stats.constitution);
    const totalHPGain = fixedHPGain + conMod;

    let newClassHP = [...(classEntry.classHP || [])];
    while (newClassHP.length < newLevel) newClassHP.push(totalHPGain);
    if (newClassHP.length > newLevel) newClassHP = newClassHP.slice(0, newLevel);

    classEntry.classHP = newClassHP;

    return cleanInvalidExploits(classEntry, 'class');
  }
};