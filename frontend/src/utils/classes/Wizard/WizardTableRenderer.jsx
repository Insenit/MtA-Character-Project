export default function WizardTableRenderer({ progressionTable, features }) {
  return (
    <div className="progression-scroll-wrapper">
      <table className="progression-table">
        <thead>
          <tr>
            <th>Level</th>
            <th>Prof Bonus</th>
            <th>Features</th>
            <th>Cantrips Known</th>
            <th>1st</th>
            <th>2nd</th>
            <th>3rd</th>
            <th>4th</th>
            <th>5th</th>
            <th>6th</th>
            <th>7th</th>
            <th>8th</th>
            <th>9th</th>
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
                <td>{row.spellSlots?.[1] ?? '-'}</td>
                <td>{row.spellSlots?.[2] ?? '-'}</td>
                <td>{row.spellSlots?.[3] ?? '-'}</td>
                <td>{row.spellSlots?.[4] ?? '-'}</td>
                <td>{row.spellSlots?.[5] ?? '-'}</td>
                <td>{row.spellSlots?.[6] ?? '-'}</td>
                <td>{row.spellSlots?.[7] ?? '-'}</td>
                <td>{row.spellSlots?.[8] ?? '-'}</td>
                <td>{row.spellSlots?.[9] ?? '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}