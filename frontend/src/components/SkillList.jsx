import { SKILL_LIST, calculateSkillBonus } from "../utils/proficiencies/SkillCalculator";

export default function SkillList({ character }) {
  return (
    <div className="skill-list">
      <ul>
        {SKILL_LIST.map(skill => {
          const bonus = calculateSkillBonus(skill.name, skill.stat, character);
          return (
            <li key={skill.name}>
              {bonus >= 0 ? '+' : ''}{bonus}: {skill.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}