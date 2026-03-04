import { classPackages } from '../../utils/classes/index';

export function aggregateProficiencies(character) {
  const collected = {
    armor: new Set(),
    weapons: new Set(),
    tools: new Set(),
    skills: new Set(),
    savingThrows: new Set()
  };

  function addProficiencies(source, label = 'unknown') {
    if (!source) return;
    for (const type of Object.keys(collected)) {
      const entries = Array.isArray(source[type]) ? source[type] : [];
      entries.forEach(p => {
        collected[type].add(p);
        console.log(`🧩 ${label}: +${p} → ${type}`);
      });
    }
  }

  console.log("▶ Starting aggregation for:", character.name);

  character.classes?.forEach(cls => {
    const normalizedClassName = cls.name.replace(/\s+/g, '').toLowerCase();
    const packageKey = `${normalizedClassName}Package`;
    const classPackage = classPackages?.[packageKey];

    console.log(`📦 Using packageKey: ${packageKey}`, classPackage);

    console.log("▶ Class:", cls.name);

    addProficiencies(cls.staticProficiencies, `${cls.name} (static)`);

    if (!classPackage) {
      console.warn(`⚠️ No classPackage found for ${cls.name}`);
      return;
    }

    const isMulticlass = character.classes.length > 1 && character.classes[0].name !== cls.name;

    const effectiveChoices = isMulticlass
      ? classPackage.multiclassProficiencyChoices || {}
      : classPackage.proficiencyChoices || {};

    const packageChoices = Object.entries(effectiveChoices);

    const selections = cls.proficiencyChoices || {};

    console.log("📦 Class package choices:", packageChoices.map(([key, val]) => `${key} → ${val.groupKey}`));
    console.log("📨 Saved class selections:", selections);

    for (const key in selections) {
      const index = parseInt(key, 10);
      const fromIndex = !isNaN(index) && packageChoices?.[index];
      const groupKey = fromIndex
        ? packageChoices[index][1]?.groupKey
        : classPackage.proficiencyChoices?.[key]?.groupKey;

      const raw = selections[key];
      const values = Array.isArray(raw)
        ? raw
        : Array.isArray(raw?.selected)
        ? raw.selected
        : [];

      console.log(`🔎 Processing "${key}" (group: ${groupKey}):`, values);

      if (groupKey && collected[groupKey]) {
        values.forEach(p => {
          collected[groupKey].add(p);
          console.log(`✅ Added ${p} → ${groupKey}`);
        });
      } else {
        console.warn(`⚠️ No valid groupKey for key "${key}"`);
      }
    }
  });

  // ✅ Other sources
  addProficiencies(character.raceProficiencies, 'Race');
  addProficiencies(character.subraceProficiencies, 'Subrace');
  addProficiencies(character.backgroundProficiencies, 'Background');
  character.features?.forEach((f, i) => addProficiencies(f.proficiencies, `Feature[${i}]`));

  // ✅ Final result
  const result = {
    armor: Array.from(collected.armor),
    weapons: Array.from(collected.weapons),
    tools: Array.from(collected.tools),
    skills: Array.from(collected.skills),
    savingThrows: Array.from(collected.savingThrows)
  };

  console.log("✅ Final aggregated proficiencies:", result);
  return result;
}

export function applyAggregatedProficiencies(character) {
  return {
    ...character,
    proficiencies: aggregateProficiencies(character)
  };
}