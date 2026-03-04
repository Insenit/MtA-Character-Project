import { useState } from 'react';
import BardFeatures from './BardFeatures';
import FeatureCard from '../../../components/FeatureCard';
import { buildClassOverviewFeature } from '../BuildClassOverview';
import { classPackages } from '../../../utils/classes';
import ProficiencyOverlay from '../../../components/Overlays/ProficiencyOverlay';
import { aggregateProficiencies } from '../../proficiencies/ProficiencyAggregator';

export default function BardPanel({ character, setCharacter, applyImmediateUpdate }) {
  const [expanded, setExpanded] = useState(false);
  const [proficiencyOverlayData, setProficiencyOverlayData] = useState(null);
  const classEntry = character.classes.find(c => c.name === 'Bard');
  const bardLevel = classEntry?.level || 1;
  const toggleExpanded = () => setExpanded(!expanded);

  const classPackage = classPackages.bardPackage;

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
        <h4 style={{ margin: 0 }}>Bard Features</h4>
        <span style={{ marginRight: '6px' }}>{expanded ? '▾' : '▸'}</span>
      </div>

      {expanded && (
        <div style={{ marginTop: '10px' }}>
          {[...Array(bardLevel)].map((_, i) => {
            const level = i + 1;
            const baseFeatures = BardFeatures[level] || [];

            const features =
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
                : baseFeatures;

            return (
              <FeatureCard
                key={level}
                level={level}
                features={features}
                className="Bard"
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

                  console.log("💾 Setting proficiencies to:", proficiencies); 
                  
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