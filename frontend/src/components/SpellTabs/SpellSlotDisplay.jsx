import React from 'react';

const levelSuffix = (level) => {
  const suffixes = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'];
  return suffixes[level - 1] || `${level}th`;
};

export default function SpellSlotDisplay({ slots }) {
  if (!slots || typeof slots !== 'object') {
    return <p>No spell slots available.</p>;
  }

  return (
    <div>
      {Object.entries(slots)
        .filter(([_, count]) => count > 0)
        .map(([level, count]) => (
          <div key={level} style={{ marginBottom: '1rem' }}>
            <h4>{levelSuffix(Number(level))} Level</h4>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              {[...Array(count)].map((_, i) => (
                <input key={i} type="checkbox" />
              ))}
              <span style={{ fontWeight: 'bold' }}>SLOTS</span>
            </div>
            <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>
              You do not have any known or prepared spells at this level,
              but you can cast lower level spells using your {levelSuffix(Number(level))} level spell slots.
            </p>
          </div>
        ))}
    </div>
  );
}