import OverlayWrapper from './OverlayWrapper';

export default function BackgroundOverlay({ options, selected, setSelected, onConfirm, onCancel }) {
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
          {selected ? (
            <>
              <h2>{selected.name}</h2>
              <p>{selected.description}</p>
            </>
          ) : (
            <p>Select a background to see its description.</p>
          )}
        </div>
      </>
    </OverlayWrapper>
  );
}