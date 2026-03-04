import OverlayWrapper from './OverlayWrapper';
import { subclassPackages } from '../../utils/subclasses/SubclassPackages';

export default function SubclassOverlay({
  className,
  selected,
  setSelected,
  onConfirm,
  onCancel
}) {
  const subclasses = subclassPackages[className] || {};
  const selectedSubclass = selected ? subclasses[selected] : null;

  return (
    <OverlayWrapper onCancel={onCancel} onConfirm={() => onConfirm(selected)}>
      <div className="overlay-list">
        {Object.keys(subclasses).map(key => (
          <div
            key={key}
            onClick={() => setSelected(key)}
            className={selected === key ? 'selected' : ''}
          >
            {subclasses[key].name}
          </div>
        ))}
      </div>

      <div className="overlay-details">
        {selectedSubclass && (
          <>
            <h2>{selectedSubclass.name}</h2>
            {selectedSubclass.descriptionSections?.map((s, i) => (
              <div key={i}>
                <h3>{s.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: s.description }} />
              </div>
            ))}

            <div className="feature-block">
                {Object.entries(selectedSubclass.featuresByLevel || {}).map(([level, features]) => (
                    <div key={level} style={{ marginBottom: '2rem' }}>
                    <h2 style={{ marginBottom: '0.5rem', color: '#ff5722' }}>Level {level}</h2>
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
    </OverlayWrapper>
  );
}