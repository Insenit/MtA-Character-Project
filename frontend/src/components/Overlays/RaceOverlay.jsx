import OverlayWrapper from './OverlayWrapper';
import { subracePackages } from '../../utils/Subraces';

export default function RaceOverlay({ options, selected, setSelected, selectedSubrace, setSelectedSubrace, onConfirm, onCancel }) {
  const subraces = selected
    ? Object.entries(subracePackages)
        .filter(([_, pkg]) => pkg.parentRace === selected.name)
        .map(([name]) => name)
    : [];

  return (
    <OverlayWrapper onCancel={onCancel} onConfirm={onConfirm}>
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
          {selected && (
            <>
              <h2>{selected.name}</h2>
              <p>{selected.description}</p>
              {subraces.length > 0 && (
                <>
                  <h3>Subraces</h3>
                  {subraces.map(name => (
                    <button
                      key={name}
                      onClick={() => setSelectedSubrace(name)}
                      className={`subrace-button ${selectedSubrace === name ? 'active' : ''}`}
                    >
                      {name}
                    </button>
                  ))}
                </>
              )}
            </>
          )}
        </div>
      </>
    </OverlayWrapper>
  );
}