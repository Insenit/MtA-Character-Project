import React, { useState, useEffect } from 'react';
import SpellSlotDisplay from './SpellSlotDisplay';
import PactSlotDisplay from './PactSlotDisplay';
import ConduitSlotDisplay from './ConduitSlotDisplay';

export default function SpellcastingTab({ character }) {
  const warlockClass = character.classes?.find(cls => cls.name === 'Warlock');
  const warlockLevel = warlockClass?.level ?? 0;

  const baseSources = character.spellSlots || {};
  const sources = Object.keys(baseSources);

  if (warlockLevel === 1 && !baseSources.pact && !sources.includes('warlock')) {
    sources.push('warlock');
  }

  // Set initial tab
  const [activeSource, setActiveSource] = useState(sources[0] || null);

  // Re-sync active tab if spell slot data changes
  useEffect(() => {
    if (!sources.includes(activeSource)) {
      setActiveSource(sources[0] || null);
    }
  }, [JSON.stringify(sources), warlockLevel]);

  if (!activeSource) {
    return <p>No spellcasting source found.</p>;
  }

  const displayNameMap = {
    standard: 'Spellcasting',
    pact: 'Pact Casting',
    warlock: 'Warlock',
    conduit: 'Conduit Casting'
  };

  const displayComponentMap = {
    standard: <SpellSlotDisplay slots={baseSources.standard} />,
    pact: <PactSlotDisplay slots={baseSources.pact} />,
    conduit: <ConduitSlotDisplay slots={baseSources.conduit} />,
    warlock: (
      <div style={{ padding: '1rem' }}>
        <h4>Eldritch Blast</h4>
        <p>
          You can cast <strong>Eldritch Blast</strong> as part of your Warlock training.
          This spell scales with your Warlock level.
        </p>
      </div>
    ),
    shaman: (
      <div style={{ padding: '1rem' }}>
        <h4>Totemic Assault</h4>
        <p>
          You can cast <strong>Totemic Assault</strong> as part of your Shaman training.
          This spell scales with your Shaman level.
        </p>
      </div>
    ),
  };

  return (
  <div className="spells-tab">
    <div className="tab-bar" style={{ borderBottom: '2px solid #ff5722', marginBottom: '1rem' }}>
      {sources.map(source => (
        <button
          key={source}
          className={`tab-button ${source === activeSource ? 'active' : ''}`}
          onClick={() => setActiveSource(source)}
        >
          {displayNameMap[source] || source}
        </button>
      ))}
    </div>

    {/* Only render the selected tab's content here */}
    <div className="tab-content">
      {displayComponentMap[activeSource] || <p>No data available for this source.</p>}
    </div>
  </div>
);
}