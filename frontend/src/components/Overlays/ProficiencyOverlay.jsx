import { useState, useEffect } from 'react';

export default function ProficiencyOverlay({
  isOpen,
  onCancel,
  onConfirm,
  proficiencySets = {},
  globalSelections = {},
  initialSelections = {}
}) {
  const [localSelections, setLocalSelections] = useState({});

  useEffect(() => {
    if (isOpen) {
      const fresh = Object.fromEntries(
        Object.entries(proficiencySets).map(([containerKey]) => [
          containerKey,
          initialSelections?.[containerKey] || []
        ])
      );
      setLocalSelections(fresh);
    }
  }, [isOpen, proficiencySets, initialSelections]);

  function toggleSelection(containerKey, option, limit) {
    setLocalSelections(prev => {
      const current = prev[containerKey] || [];
      const updated = current.includes(option)
        ? current.filter(o => o !== option)
        : current.length < limit
          ? [...current, option]
          : current;
      return { ...prev, [containerKey]: updated };
    });
  }

  function handleAccept() {
    onConfirm(localSelections);
    onCancel();
  }

  if (!isOpen) return null;

  return (
    <div className="overlay-backdrop" onClick={(e) => {
      if (e.target.classList.contains('overlay-backdrop')) onCancel();
    }}>
      <div className="overlay-modal" style={{ width: '500px' }} onClick={e => e.stopPropagation()}>
        <div style={{ padding: '20px 10px 0 15px' }}>
          <h2 style={{ margin: 0 }}>Select Proficiencies</h2>
        </div>

        <div className="overlay-body" style={{ padding: '0px 10px 10px 15px' }}>
          <div className="proficiency-set-wrapper" style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem',  overflowY: "auto" }}>
            {Object.entries(proficiencySets).map(([containerKey, { label, groupKey, choose, options }]) => {
              const selected = localSelections[containerKey] || [];
              const initiallySelected = new Set(initialSelections[containerKey] || []);
              const globallyTaken = globalSelections[groupKey] || [];

              return (
                <div key={containerKey} className="proficiency-group">
                  <h4 className="group-label">{label} ({selected.length}/{choose})</h4>
                  <div className="option-grid">
                    {options.map(opt => {
                      const isSelected = selected.includes(opt);
                      const isBlocked = globallyTaken.includes(opt) && !initiallySelected.has(opt);
                      const disable = isBlocked || (!isSelected && selected.length >= choose);

                      return (
                        <button
                          key={opt}
                          className={`option-button ${isSelected ? 'selected' : ''} ${disable ? 'disabled' : ''}`}
                          disabled={disable}
                          onClick={() => !disable && toggleSelection(containerKey, opt, choose)}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="overlay-bottom-bar">
          <div></div>
          <div className="right-buttons" style={{ justifyContent: 'right' }}>
            <button onClick={onCancel} className="overlay-button">Cancel</button>
            <button onClick={handleAccept} className="overlay-button">Accept</button>
          </div>
        </div>
      </div>
    </div>
  );
}