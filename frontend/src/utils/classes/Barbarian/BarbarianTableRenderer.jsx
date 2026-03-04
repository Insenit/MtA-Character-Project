export default function BarbarianTableRenderer({ progressionTable, features }) {
  return (
    <div className="progression-scroll-wrapper">
      <table className="progression-table">
        <thead>
          <tr>
            <th>Level</th>
            <th>Prof Bonus</th>
            <th>Features</th>
            <th>Rages</th>
            <th>Exploits Known</th>
            <th>Exploit Die</th>
            <th>Exploit Dice</th>
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
              <td>{row.rages === Infinity ? 'Unlimited' : row.rages}</td>
              <td>{row.exploitsKnown || '-'}</td>
              <td>{row.exploitDie || '-'}</td>
              <td>{row.exploitDice || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}