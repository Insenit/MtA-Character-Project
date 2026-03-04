import { aggregateProficiencies } from '../proficiencies/ProficiencyAggregator';

export function buildClassOverviewFeature(classPackage, character, applyImmediateUpdate, setProficiencyOverlayData) {
  const classEntry = character.classes.find(c => c.name === classPackage.name);
  if (!classEntry) {
    return {
      name: "Class Overview",
      description: "Class entry not found.",
      render: () => null
    };
  }

  const isMulticlass = character.classes.length > 1 && character.classes[0].name !== classPackage.name;
  const hitDie = classPackage.hitDie;
  const savingThrows = classPackage.savingThrows;

  const baseProficiencies = isMulticlass
    ? classPackage.multiclassProficiencies || {}
    : classPackage.proficiencies || {};

  const effectiveChoices = isMulticlass
    ? classPackage.multiclassProficiencyChoices || {}
    : classPackage.proficiencyChoices || {};

  const selectedChoices = classEntry.proficiencyChoices || {};

  function formatTypeLabel(label) {
    return label.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, str => str.toUpperCase());
  }

  function renderLine(label, list) {
    return Array.isArray(list) && list.length
      ? `<li><strong>${label}:</strong> ${list.join(', ')}</li>`
      : '';
  }

  function generateStaticList() {
    return [
      renderLine('Armor', baseProficiencies.armor),
      renderLine('Weapons', baseProficiencies.weapons),
      renderLine('Tools', baseProficiencies.tools),
      renderLine('Skills', baseProficiencies.skills)
    ].filter(Boolean).join('');
  }

  const staticDescription = `
    <p><strong>Hit Die:</strong> d${hitDie}</p>
    ${!isMulticlass ? `<p><strong>Saving Throws:</strong> ${(savingThrows ?? []).join(', ')}</p>` : ''}
    <h4>Proficiencies</h4>
    <ul>
      ${generateStaticList()}
    </ul>
  `;

  return {
    name: "Class Overview",
    description: staticDescription,
    render: () => {
      const summary = Object.entries(selectedChoices).map(([containerKey, values]) => {
        return Array.isArray(values) && values.length > 0 ? (
          <div key={containerKey} style={{ fontSize: '0.9rem', marginTop: '4px' }}>
            <strong>{formatTypeLabel(containerKey)}:</strong> {values.join(', ')}
          </div>
        ) : null;
      });

      return (
        <div>
          {Object.keys(effectiveChoices).length > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();

                const rawSelections = classEntry.proficiencyChoices || {};
                const selected = {};
                for (const key in rawSelections) {
                  const entry = rawSelections[key];
                  selected[key] = Array.isArray(entry)
                    ? entry
                    : Array.isArray(entry?.selected)
                    ? entry.selected
                    : [];
                }

                const { flat: aggregate = aggregateProficiencies(character) } = aggregateProficiencies(character);
                const filteredUsed = {};

                for (const [groupKey, takenList] of Object.entries(aggregate)) {
                  const taken = new Set(takenList);
                  const ownSelections = new Set();

                  for (const [containerKey, set] of Object.entries(effectiveChoices)) {
                    if (set.groupKey === groupKey) {
                      const selectedInThisSet = selected[containerKey] || [];
                      selectedInThisSet.forEach(p => ownSelections.add(p));
                    }
                  }

                  filteredUsed[groupKey] = Array.from(taken).filter(p => !ownSelections.has(p));
                }

                // ⬇️ Send to overlay — real update logic must be handled in the panel
                setProficiencyOverlayData({
                  className: classPackage.name,
                  sets: Object.entries(effectiveChoices).map(([key, value]) => ({
                    containerKey: key,
                    label: value.label || formatTypeLabel(key),
                    groupKey: value.groupKey,
                    choose: value.choose,
                    options: value.options
                  })),
                  initial: selected,
                  used: filteredUsed
                });
              }}
              style={{
                margin: '8px 0',
                padding: '6px 12px',
                borderRadius: '6px',
                backgroundColor: '#ff5722',
                color: 'white',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Choose Proficiencies
            </button>
          )}

          {summary}
        </div>
      );
    }
  };
}