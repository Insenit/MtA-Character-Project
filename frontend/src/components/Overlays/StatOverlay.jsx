import { useState } from 'react';

export default function StatEditorOverlay({ character, characterUpdater, closeOverlay, onCharacterUpdate }) {
  const [localStats, setLocalStats] = useState(character.stats);
  const statEntries = Object.entries(localStats);

  const handleChange = (statKey, newValue) => {
    const stat = { 
      ...localStats[statKey],
      base: parseInt(newValue) || 0
    };
    stat.finalBase = stat.base + stat.raceBonus + stat.subraceBonus + stat.otherBonus;
    stat.modifier = Math.floor((stat.finalBase - 10) / 2);

    setLocalStats({
      ...localStats,
      [statKey]: stat
    });
  };

  const handleSaveAndClose = () => {
    let updatedCharacter = character;
    Object.entries(localStats).forEach(([statKey, statObj]) => {
      updatedCharacter = characterUpdater.saveStatChange(updatedCharacter, statKey, statObj.base);
    });

    if (onCharacterUpdate) {
      onCharacterUpdate(updatedCharacter);  // ✅ Actually update live state
    }

    closeOverlay();
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('overlay-backdrop')) {
      closeOverlay();
    }
  };

  return (
    <div className="overlay-backdrop" style={overlayStyles} onClick={handleBackdropClick}>
      <div style={modalStyles} onClick={(e) => e.stopPropagation()}>
        <h2>Edit Stats</h2>
        <div style={gridStyles}>
          {statEntries.map(([statKey, statObj]) => (
            <div key={statKey} style={statBlockStyles}>
              <h3>{statKey.toUpperCase()} {statObj.finalBase} ({statObj.modifier >= 0 ? '+' : ''}{statObj.modifier})</h3>
              <div>
                <strong>Base:</strong>
                <input
                  type="number"
                  value={statObj.base}
                  onChange={(e) => handleChange(statKey, e.target.value)}
                  style={{ width: '50px', marginLeft: '10px' }}
                />
              </div>
              <div><strong>Race Bonus:</strong> {statObj.raceBonus}</div>
              <div><strong>Subrace Bonus:</strong> {statObj.subraceBonus}</div>
              <div><strong>Other Bonus:</strong> {statObj.otherBonus}</div>
              <div style={{ marginTop: '5px' }}>
                <strong>Final Base:</strong> {statObj.finalBase}
                <br />
                <strong>Modifier:</strong> {statObj.modifier >= 0 ? '+' : ''}{statObj.modifier}
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleSaveAndClose} style={buttonStyles} className="overlay-button">Done</button>
      </div>
    </div>
  );
}

const overlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000
};

const modalStyles = {
  backgroundColor: '#0b1120',
  color: '#fff',
  padding: '20px',
  borderRadius: '8px',
  maxHeight: '80vh',
  overflowY: 'auto',
  width: '70%'
};

const gridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px'
};

const statBlockStyles = {
  borderBottom: '1px solid #333',
  paddingBottom: '10px'
};

const buttonStyles = {
  marginTop: '20px',
  padding: '8px 16px',
  cursor: 'pointer'
};