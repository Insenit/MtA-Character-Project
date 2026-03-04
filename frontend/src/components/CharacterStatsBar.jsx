export default function CharacterStatsBar({ character, onClick }) {
  const { stats, hpState } = character;

  function formatSave(value) {
    if (value === undefined || value === null) return '—';
    return `${value >= 0 ? '+' : ''}${value}`;
  }

  return (
    <div className="character-stats-bar">
      <div className="panel-box defense-panel">
        <div className="hp-display">HP: {character.hpState.currentHP} / {character.hpState.baseMaxHP}</div>
        <div className="ac-display">AC: {character.ac?.value ?? '—'}</div>

        <div className="saves">
          <div>Strength: {formatSave(character.saves?.strength)}</div>
          <div>Dexterity: {formatSave(character.saves?.dexterity)}</div>
          <div>Constitution: {formatSave(character.saves?.constitution)}</div>
          <div>Intelligence: {formatSave(character.saves?.intelligence)}</div>
          <div>Wisdom: {formatSave(character.saves?.wisdom)}</div>
          <div>Charisma: {formatSave(character.saves?.charisma)}</div>
        </div>
      </div>

      <div className="panel-box stats-panel">
        <div className="ability-column">
          {Object.entries(stats).map(([statKey, statObj]) => (
            <div key={statKey} className="stat-box" onClick={onClick} style={{ cursor: 'pointer' }}>
              <div className="stat-label">{statKey.toUpperCase()}</div>
              <div className="stat-modifier">
                {statObj.modifier >= 0 ? '+' : ''}{statObj.modifier}
              </div>
              <div className="stat-base">
                {statObj.finalBase}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}