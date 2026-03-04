export default function WarlordTableRenderer({ progressionTable, features }) {
  return (
    <div className="progression-scroll-wrapper">
      <table className="progression-table">
        <thead>
          <tr>
            <th>Level</th>
            <th>Prof Bonus</th>
            <th>Features</th>
            <th>Inspiring Word</th>
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
              <td>{row.inspiringWord}</td>
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