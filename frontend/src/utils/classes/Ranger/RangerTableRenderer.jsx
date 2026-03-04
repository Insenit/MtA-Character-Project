export default function RangerTableRenderer({ progressionTable, features }) {
  return (
    <div className="progression-scroll-wrapper">
      <table className="progression-table">
        <thead>
          <tr>
            <th>Level</th>
            <th>Prof Bonus</th>
            <th>Features</th>
            <th>Knacks Known</th>
            <th>1st</th>
            <th>2nd</th>
            <th>3rd</th>
            <th>4th</th>
            <th>5th</th>
            <th>Quarry Die</th>
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
                <td>{row.knacksKnown ?? '-'}</td>
                <td>{row.spellSlots?.[1] ?? '-'}</td>
                <td>{row.spellSlots?.[2] ?? '-'}</td>
                <td>{row.spellSlots?.[3] ?? '-'}</td>
                <td>{row.spellSlots?.[4] ?? '-'}</td>
                <td>{row.spellSlots?.[5] ?? '-'}</td>
                <td>{row.quarryDie ?? "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}