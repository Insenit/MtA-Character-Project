export default function BloodHunterTableRenderer({ progressionTable, features }) {
  return (
    <div className="progression-scroll-wrapper">
      <table className="progression-table">
        <thead>
          <tr>
            <th>Level</th>
            <th>Prof Bonus</th>
            <th>Features</th>
            <th>Rite Die</th>
            <th>Rites Known</th>
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
                <td>{row.riteDie ?? "-"}</td>
                <td>{row.ritesKnown ?? '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}