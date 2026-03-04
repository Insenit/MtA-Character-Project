import React from 'react';

const levelSuffix = (level) => {
  const suffixes = ['1st', '2nd', '3rd', '4th', '5th'];
  return suffixes[level - 1] || `${level}th`;
};

export default function ConduitSlotDisplay({ slots }) {
  if (!slots || typeof slots !== 'object') {
    return <p>No conduit spell slots available.</p>;
  }

  return (
    <div>
      {Object.entries(slots)
        .filter(([_, count]) => count > 0)
        .map(([level, count]) => (
          <div key={level} style={{ marginBottom: '1rem' }}>
            <h4>Conduit Level {level}</h4>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              {[...Array(count)].map((_, i) => (
                <input key={i} type="checkbox" />
              ))}
              <span style={{ fontWeight: 'bold' }}>SLOTS</span>
            </div>
            <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>
              These slots recharge on a short rest.
            </p>
          </div>
        ))}
    </div>
  );
}