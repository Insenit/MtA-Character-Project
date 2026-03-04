import { useState } from 'react';
import ArtificerFeatures from './ArtificerFeatures';
import FeatureCard from '../../../components/FeatureCard';
import { buildClassOverviewFeature } from '../BuildClassOverview';
import { classPackages } from '../../../utils/classes';
import { subclassPackages } from '../../subclasses/SubclassPackages';
import ProficiencyOverlay from '../../../components/Overlays/ProficiencyOverlay';
import { aggregateProficiencies } from '../../proficiencies/ProficiencyAggregator';

export default function ArtificerPanel({
  character,
  setCharacter,
  applyImmediateUpdate,
  openSubclassOverlay
}) {
  const [expanded, setExpanded] = useState(false);
  const [proficiencyOverlayData, setProficiencyOverlayData] = useState(null);

  const classEntry = character.classes.find(c => c.name === 'Artificer');
  const artificerLevel = classEntry?.level || 1;
  const subclassKey = classEntry?.specialization;
  const subclassData = subclassPackages.Artificer?.[subclassKey];

  const toggleExpanded = () => setExpanded(!expanded);
  const classPackage = classPackages.artificerPackage;

  const handleOpenSubclassOverlay = () => {
    const index = character.classes.findIndex(c => c.name === "Artificer");
    if (typeof openSubclassOverlay === 'function') {
      openSubclassOverlay("Artificer", index);
    } else {
      console.warn("openSubclassOverlay is not a function:", openSubclassOverlay);
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#0b1120',
        borderRadius: '5px',
        padding: '10px 0',
        marginTop: '10px',
        marginBottom: '10px',
      }}
    >
      <div className="panel-header" onClick={toggleExpanded}>
        <h4 style={{ margin: 0 }}>Artificer Features</h4>
        <span style={{ marginRight: '6px' }}>{expanded ? '▾' : '▸'}</span>
      </div>

      {expanded && (
        <div style={{ marginTop: '10px' }}>
          {[...Array(artificerLevel)].map((_, i) => {
            const level = i + 1;
            const baseFeatures = ArtificerFeatures[level] || [];

            let features =
              level === 1
                ? [
                    buildClassOverviewFeature(
                      classPackage,
                      character,
                      applyImmediateUpdate,
                      setProficiencyOverlayData
                    ),
                    ...baseFeatures
                  ]
                : baseFeatures.map(feature => {
                    if (feature.name?.trim().toLowerCase() === "specialization") {
                      return {
                        ...feature,
                        customButton: (
                          <div>
                            {subclassKey && (
                              <div
                                style={{
                                  fontStyle: 'italic',
                                  color: '#ccc',
                                  marginBottom: '0.5rem'
                                }}
                              >
                                Specialization: <strong>{subclassKey}</strong>
                              </div>
                            )}
                            <button
                              style={{
                                padding: '6px 12px',
                                borderRadius: '6px',
                                backgroundColor: '#ff5722',
                                color: 'white',
                                border: 'none',
                                cursor: 'pointer'
                              }}
                              onClick={handleOpenSubclassOverlay}
                            >
                              {subclassKey ? "Change Specialization" : "Choose Specialization"}
                            </button>
                          </div>
                        )
                      };
                    }
                    return feature;
                  });

            if (subclassData?.featuresByLevel?.[level]) {
              features = [...features, ...subclassData.featuresByLevel[level]];
            }

            const visibleFeatures = features.filter(f => !f.tableOnly);

            return (
              <FeatureCard
                key={level}
                level={level}
                features={visibleFeatures}
                className="Artificer"
              />
            );
          })}

          {proficiencyOverlayData && (
            <ProficiencyOverlay
              isOpen={!!proficiencyOverlayData}
              proficiencySets={proficiencyOverlayData.sets}
              globalSelections={proficiencyOverlayData.used}
              initialSelections={proficiencyOverlayData.initial}
              onCancel={() => setProficiencyOverlayData(null)}
              onConfirm={(selectedBySetKey) => {
                applyImmediateUpdate(prev => {
                  const updatedClasses = prev.classes.map(c =>
                    c.name === proficiencyOverlayData.className
                      ? { ...c, proficiencyChoices: selectedBySetKey }
                      : c
                  );

                  const newCharacter = {
                    ...prev,
                    classes: updatedClasses
                  };

                  const proficiencies = aggregateProficiencies(newCharacter);

                  return {
                    ...newCharacter,
                    proficiencies
                  };
                });

                setProficiencyOverlayData(null);
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}