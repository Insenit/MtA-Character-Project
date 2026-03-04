import React from 'react';

function formatOrdinal(level) {
  if (level === 1) return '1st';
  if (level === 2) return '2nd';
  if (level === 3) return '3rd';
  if (level === 4) return '4th';
  if (level === 5) return '5th';
  return `${level}th`;
}

export default function SorcererTableRenderer({ progressionTable, features }) {
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
            <th>Sorcery Points</th>
            <th>Spell Limit</th>
            <th>Meta Magics</th>
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
                <td>{row.sorceryPoints ?? '-'}</td>
                <td>{row.spellLimit ? formatOrdinal(row.spellLimit) : '-'}</td>
                <td>{row.metamagics ?? '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}