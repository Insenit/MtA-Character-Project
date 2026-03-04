export default function CharacterHeader({ character, saveCharacter }) {
  const classSummary = character.classes
    .map(cls => `${cls.name} ${cls.level}`)
    .join(' / ');

  return (
    <div className="character-header">
      <div>
        <label>Character Name:</label>
        <input
          type="text"
          value={character.name}
          onChange={(e) => saveCharacter({ ...character, name: e.target.value })}
        />
      </div>
      <div>
        <strong>Class:</strong> {classSummary || "None"} (Total Level {character.totalLevel || 1})
      </div>
    </div>
  );
}