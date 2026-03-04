import OverlayWrapper from './OverlayWrapper';
import { classPackages } from '../../utils/classes';
import { classTableRenderers } from '../../utils/classes/TableRenderers';
import { classDescriptions } from '../../utils/classes/ClassDescriptions';

function loadClassDescription(packageKey) {
  return classDescriptions[packageKey] || [];
}

export default function ClassOverlay({
  options,
  selected,
  setSelected,
  onConfirm,
  onCancel,
  allowMulticlass,
  onMulticlass,
  replaceIndex
}) 

{
  const classPackage = selected ? classPackages[selected.packageKey] : null;
  const descriptionSections = selected ? loadClassDescription(selected.packageKey) : [];
  const Table = selected ? classTableRenderers[selected.packageKey] : null;

return (
    <OverlayWrapper onCancel={onCancel} onConfirm={() => onConfirm(replaceIndex)} extraButtons={allowMulticlass && onMulticlass && <button onClick={onMulticlass} className="overlay-button">Multiclass</button>}>
        <>
        <div className="overlay-list">
          {options.map(opt => (
            <div
              key={opt.id}
              onClick={() => setSelected(opt)}
              className={selected?.id === opt.id ? 'selected' : ''}
            >
              {opt.name}
            </div>
          ))}
        </div>

        <div className="overlay-details">
          {selected && classPackage && (
            <>
              <h2>{classPackage.name}</h2>
              {descriptionSections.map((section, index) => (
                <div key={index}>
                  <h3>{section.title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: section.description }} />
                </div>
              ))}

              <h3>Progression Table</h3>
              {Table ? <Table progressionTable={classPackage.progressionTable} features={classPackage.features} /> : <p>No table available.</p>}

              <h2>Class Features</h2>
              <p><strong>Hit Die:</strong> d{classPackage.hitDie}</p>
              <p><strong>Saving Throws:</strong> {classPackage.savingThrows.join(', ')}</p>

              <h3>Proficiencies</h3>
              <ul>
                <li><strong>Armor:</strong> {classPackage.proficiencies.armor.join(', ')}</li>
                <li><strong>Weapons:</strong> {classPackage.proficiencies.weapons.join(', ')}</li>
                {classPackage.proficiencies.tools.length > 0 && (
                  <li><strong>Tools:</strong> {classPackage.proficiencies.tools.join(', ')}</li>
                )}
                <li><strong>Skills:</strong> {classPackage.proficiencies.skills.join(', ')}</li>
              </ul>
              
                <div className="feature-block">
                {Object.entries(classPackage.features).map(([level, features]) => (
                    <div key={level} style={{ marginBottom: '1.5rem' }}>
                    {features.filter(f => !f.tableOnly).map(f => (
                        <div key={f.name} style={{ marginBottom: '1rem' }}>
                        <h3 style={{ margin: '0 0 0.5rem 0' }}>{f.name}</h3>
                        <div dangerouslySetInnerHTML={{ __html: f.description }} />
                        </div>
                    ))}
                    </div>
                ))}
                </div>

            </>
          )}
        </div>
      </>
    </OverlayWrapper>
  );
}