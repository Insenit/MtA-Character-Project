import { useEffect, useRef } from 'react';
import SelectionBox from './SelectionBox';
import { classPanels } from '../utils/classes/ClassPanels';

export default function CharacterSidebar({
  character,
  setCharacter,
  characters,
  setCharacters,
  pendingLevels,
  adjustClassLevel,
  saveLevelChange,
  cancelLevelChange,
  removeClass,
  openOverlay,
  confirmingLevelChangeIndex,
  applyImmediateUpdate,
  openSubclassOverlay
}) {
  const previousProficiencies = useRef(character.proficiencies);

  useEffect(() => {
    const hasChanged =
      JSON.stringify(previousProficiencies.current) !== JSON.stringify(character.proficiencies);
    if (hasChanged) {
      previousProficiencies.current = character.proficiencies;

      const updatedList = characters.map(c =>
        c.id === character.id ? character : c
      );
      localStorage.setItem('characters', JSON.stringify(updatedList));
      setCharacters(updatedList);
    }
  }, [character.proficiencies]);

  // Global sidebar debug
  console.log("🧭 CharacterSidebar loaded with character:", character.name);
  console.log("🔧 openSubclassOverlay typeof:", typeof openSubclassOverlay);

  return (
    <div className="character-sidebar">
      <SelectionBox
        label="Race"
        value={character.race}
        onClick={() => openOverlay('race')}
      />
      <SelectionBox
        label="Background"
        value={character.background}
        onClick={() => openOverlay('background')}
      />

      {character.classes.map((cls, index) => {
        const panelKey = cls.name.replace(/\s+/g, '');
        const PanelComponent = classPanels[panelKey];

        console.log("🧪 PanelComponent:", {
          panelKey,
          hasPanel: !!PanelComponent,
          PanelComponent,
          openSubclassOverlayType: typeof openSubclassOverlay
        });

        console.log(`🧩 Rendering PanelComponent for "${cls.name}"`, {
          panelKey,
          hasPanel: !!PanelComponent,
          hasOpenSubclassOverlay: typeof openSubclassOverlay === 'function',
          openSubclassOverlay
        });

        return (
          <div key={index} style={{ marginBottom: '15px' }}>
            <SelectionBox
              label={`Class`}
              value={cls.name || 'Not selected'}
              onClick={() => openOverlay('class', index)}
            />

            <div style={{ marginTop: '5px' }}>
              <strong>Level:</strong> {pendingLevels[index]}
              <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
                <button onClick={() => adjustClassLevel(index, -1)}>-</button>
                <button onClick={() => adjustClassLevel(index, 1)}>+</button>
                {index > 0 && (
                  <button
                    onClick={() => removeClass(index)}
                    style={{ marginLeft: 'auto', color: 'red' }}
                  >
                    Delete
                  </button>
                )}
              </div>

              {confirmingLevelChangeIndex === index && (
                <div style={{ marginTop: '5px' }}>
                  <button onClick={() => saveLevelChange(index)}>
                    Save Level Change
                  </button>
                  <button onClick={() => cancelLevelChange(index)}>
                    Cancel
                  </button>
                </div>
              )}

              {/* Render the panel for this specific class */}
              {PanelComponent && (
                <PanelComponent
                  character={character}
                  setCharacter={setCharacter}
                  applyImmediateUpdate={applyImmediateUpdate}
                  openSubclassOverlay={
                    typeof openSubclassOverlay === 'function'
                      ? openSubclassOverlay
                      : () => console.warn("⚠️ openSubclassOverlay is not a function")
                  }
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}