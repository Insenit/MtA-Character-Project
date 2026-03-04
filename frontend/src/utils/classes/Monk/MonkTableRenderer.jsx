export default function MonkTableRenderer({ progressionTable, features }) {
  return (
    <div className="progression-scroll-wrapper">
      <table className="progression-table">
        <thead>
          <tr>
            <th>Level</th>
            <th>Prof Bonus</th>
            <th>Features</th>
            <th>Martial Arts</th>
            <th>Unarmored Movement</th>
            <th>Techniques Known</th>
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
              <td>{row.martialArts}</td>
              <td>{row.unarmoredMovement ? `+${row.unarmoredMovement} ft.` : '—'}</td>
              <td>{row.techniquesKnown || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}