import React from 'react';

function formatOrdinal(level) {
  if (level === 1) return '1st';
  if (level === 2) return '2nd';
  if (level === 3) return '3rd';
  return `${level}th`;
}

export default function VesselTableRenderer({ progressionTable, features }) {
  return (
    <div className="progression-scroll-wrapper">
      <table className="progression-table">
        <thead>
          <tr>
            <th>Level</th>
            <th>Prof Bonus</th>
            <th>Features</th>
            <th>Cantrips Known</th>
            <th>Spells Known</th>
            <th>Spell Slots</th>
            <th>Slot Level</th>
            <th>Unsealed Aspects</th>
          </tr>
        </thead>
        <tbody>
          {progressionTable.map(row => (
            <tr key={row.level}>
              <td>{row.level}</td>
              <td>+{row.proficiencyBonus}</td>
              <td>
                {features[row.level]
                  ? features[row.level].map(f => f.name).join(', ')
                  : '-'}
              </td>
              <td>{row.cantripsKnown ?? '-'}</td>
              <td>{row.spellsKnown ?? '-'}</td>
              <td>{row.spellSlots ?? '-'}</td>
              <td>{row.slotLevel ? formatOrdinal(row.slotLevel) : '-'}</td>
              <td>{row.unsealedAspects}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}