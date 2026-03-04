import React, { useState } from 'react';
import OverlayWrapper from './OverlayWrapper';
import ExploitCard from '../Exploits/ExploitCard';
import ExploitsByDegree from '../../utils/exploits/Exploits';

export default function ExploitOverlay({ character, sources = [], onCancel, onConfirm, applyImmediateUpdate }) {
  const [selectedSource, setSelectedSource] = useState(sources[0]?.id || null);
  const [selectedDegree, setSelectedDegree] = useState(1);
  const [selectedExploits, setSelectedExploits] = useState([]);
  const [triggerRerender, setTriggerRerender] = useState(false);

  const allExploits = Object.values(ExploitsByDegree).flat();
  const visibleExploits = allExploits.filter(
    e => e.degree === selectedDegree && e.classes?.includes(selectedSource)
  );

  const currentClassIndex = character.classes.findIndex(cls => cls.exploitSet === selectedSource);
  const currentClass = character.classes[currentClassIndex];

  const unlocks = currentClass?.exploitDegreeUnlocks || {
    1: 1,
    2: 5,
    3: 9,
    4: 13,
    5: 17
  };

  const highestDegree = Object.entries(unlocks).reduce((max, [deg, lvl]) =>
    currentClass.level >= lvl ? Math.max(max, parseInt(deg)) : max, 0
  );

  const sourceKnownMax = currentClass?.exploitsKnown || 0;

  const known = currentClass?.exploitsSelected?.[selectedDegree] || [];
  const exploitsFromCurrentSource = known.map(name => allExploits.find(e => e.name === name)).filter(Boolean);

  const togglePreview = (exp) => {
    setSelectedExploits(prev =>
      prev.some(e => e.name === exp.name)
        ? prev.filter(e => e.name !== exp.name)
        : [...prev, exp]
    );
  };

  const persist = (nextClassData) => {
    if (typeof applyImmediateUpdate === 'function') {
      applyImmediateUpdate(prev => {
        const updated = JSON.parse(JSON.stringify(prev));
        updated.classes[currentClassIndex] = {
          ...updated.classes[currentClassIndex],
          ...nextClassData
        };
        return updated;
      });
    }
  };

  const handleAddExploit = (exp) => {
    const selectedMap = currentClass.exploitsSelected || {};
    const list = selectedMap[selectedDegree] || [];
    if (!list.includes(exp.name) && list.length < sourceKnownMax) {
      const updatedList = [...list, exp.name];
      const updatedMap = { ...selectedMap, [selectedDegree]: updatedList };
      persist({ ...currentClass, exploitsSelected: updatedMap });
      setTriggerRerender(prev => !prev);
    }
  };

  const handleRemoveExploit = (exp) => {
    const selectedMap = currentClass.exploitsSelected || {};
    const list = selectedMap[selectedDegree] || [];
    const updatedList = list.filter(name => name !== exp.name);
    const updatedMap = { ...selectedMap, [selectedDegree]: updatedList };
    persist({ ...currentClass, exploitsSelected: updatedMap });
    setTriggerRerender(prev => !prev);
  };

  const handleClosePreview = (exp) => {
    setSelectedExploits(prev => prev.filter(e => e.name !== exp.name));
  };

  const degreeSuffixes = {
    1: '1st',
    2: '2nd',
    3: '3rd',
    4: '4th',
    5: '5th'
  };

  return (
    <OverlayWrapper
      onCancel={onCancel}
      onConfirm={onConfirm}
      extraButtons={
        <div style={{ fontSize: '0.875rem', color: '#ccc', paddingLeft: '1rem' }}>
          Exploits Known: {exploitsFromCurrentSource.length}/{sourceKnownMax}
        </div>
      }
    >
      <div className="overlay-details" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div className="exploit-source-tabs" style={{ display: 'flex', borderBottom: '1px solid #333', paddingBottom: '0.5rem', marginBottom: '0.5rem', gap: '1rem' }}>
          {sources.map(source => (
            <button
              key={source.id}
              className={`tab-button ${selectedSource === source.id ? 'active' : ''}`}
              onClick={() => setSelectedSource(source.id)}
            >
              {source.label}
            </button>
          ))}
        </div>

        <div className="degree-tabs" style={{ display: 'flex', gap: '1rem', margin: '0.75rem 0', borderBottom: '1px solid #333' }}>
          {[1, 2, 3, 4, 5]
            .filter(degree => highestDegree >= degree)
            .map(degree => (
              <button
                key={degree}
                className={`tab-button ${selectedDegree === degree ? 'active' : ''}`}
                onClick={() => setSelectedDegree(degree)}
              >
                {degreeSuffixes[degree]} Degree
              </button>
          ))}
        </div>

        <div className="exploit-overlay-body" style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          <div className="exploit-option-list" style={{ flex: '0 0 225px', overflowY: 'auto', borderRight: '1px solid #333', paddingRight: '1rem', paddingBottom: '1.75rem' }}>
            {visibleExploits.map(exp => (
              <div
                key={exp.name}
                className="exploit-option-entry"
                style={{ padding: '0.5rem 0', cursor: 'pointer' }}
                onClick={() => togglePreview(exp)}
              >
                {exp.name}
              </div>
            ))}
          </div>

          <div className="exploit-overlay-details" style={{ flex: 1, paddingLeft: '1rem', overflowY: 'auto' }}>
            {selectedExploits.map(exp => (
              <ExploitCard
                key={exp.name}
                exploit={exp}
                isSelected={known.includes(exp.name)}
                isMaxedOut={!known.includes(exp.name) && known.length >= sourceKnownMax}
                onAdd={() => handleAddExploit(exp)}
                onRemove={() => handleRemoveExploit(exp)}
                onClose={() => handleClosePreview(exp)}
              />
            ))}
          </div>
        </div>
      </div>
    </OverlayWrapper>
  );
}