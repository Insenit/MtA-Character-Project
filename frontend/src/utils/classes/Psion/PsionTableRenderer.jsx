import React from 'react';

function formatOrdinal(level) {
  if (level === 1) return '1st';
  if (level === 2) return '2nd';
  if (level === 3) return '3rd';
  if (level === 4) return '4th';
  if (level === 5) return '5th';
  return `${level}th`;
}

export default function PsionTableRenderer({ progressionTable, features }) {
  return (
    <div className="progression-scroll-wrapper">
      <table className="progression-table">
        <thead>
          <tr>
            <th>Level</th>
            <th>Prof Bonus</th>
            <th>Features</th>
            <th>Cantrips Known</th>
            <th>Psi Points</th>
            <th>Spells Known</th>
            <th>Mental Limit</th>
            <th>Mystic Talents</th>
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
                <td>{row.psiPoints ?? '-'}</td>
                <td>{row.spellsKnown ?? '-'}</td>
                <td>{row.mentalLimit ? formatOrdinal(row.mentalLimit) : '-'}</td>
                <td>{row.mysticTalents ?? '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}