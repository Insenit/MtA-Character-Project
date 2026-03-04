import React, { useState } from 'react';
import OverlayWrapper from './OverlayWrapper';

const denominations = [
  { key: 'pp', label: 'Platinum' },
  { key: 'gp', label: 'Gold' },
  { key: 'ep', label: 'Electrum' },
  { key: 'sp', label: 'Silver' },
  { key: 'cp', label: 'Copper' },
];

export default function CurrencyOverlay({ character, onConfirm, onCancel, characterUpdater, onCharacterUpdate }) {
  const originalCurrency = character.inventory.currency || {};
  const [currency, setCurrency] = useState({ ...originalCurrency });
  const [inputs, setInputs] = useState({});

  const handleInputChange = (key, value) => {
    setInputs({
      ...inputs,
      [key]: parseInt(value) || 0
    });
  };

  const applyChange = (key, type) => {
    const amount = parseInt(inputs[key]) || 0;
    const original = originalCurrency[key] || 0;
    let newValue = currency[key] || 0;

    if (type === 'add') newValue += amount;
    if (type === 'remove') newValue = Math.max(0, newValue - amount);
    if (type === 'set') newValue = amount;

    setCurrency({
      ...currency,
      [key]: newValue
    });
  };

  const handleConfirm = () => {
    const updatedCharacter = {
      ...character,
      inventory: {
        ...character.inventory,
        currency,
      },
    };

    characterUpdater.saveCharacter(updatedCharacter);
    if (onCharacterUpdate) onCharacterUpdate(updatedCharacter);
    onConfirm(currency);
  };

  return (
    <OverlayWrapper onCancel={onCancel} onConfirm={handleConfirm}>
      <div className="overlay-details">
        <h2>Edit Currency</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {denominations.map(({ key, label }) => {
            const original = originalCurrency[key] || 0;
            const updated = currency[key] || 0;
            const change = updated - original;

            return (
              <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <strong style={{ width: '140px' }}>{label}: {original}</strong>
                <input
                  type="number"
                  value={inputs[key] ?? ''}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                  style={{ width: '60px' }}
                />
                <button onClick={() => applyChange(key, 'set')} className="overlay-button">Set</button>
                <button onClick={() => applyChange(key, 'add')} className="overlay-button">Add</button>
                <button onClick={() => applyChange(key, 'remove')} className="overlay-button">Remove</button>
                <div style={{ width: '150px', fontWeight: 'bold', color: change > 0 ? 'limegreen' : change < 0 ? 'crimson' : 'white' }}>
                  New {label}: {updated}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </OverlayWrapper>
  );
}