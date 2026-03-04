import React from 'react';
import '../../styles/overlay.css';

export default function OverlayWrapper({ onCancel, onConfirm, extraButtons, children }) {
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('overlay-backdrop')) {
      onCancel();
    }
  };

  return (
    <div className="overlay-backdrop" onClick={handleBackdropClick}>
      <div className="overlay-modal" onClick={(e) => e.stopPropagation()}>
        
        {/* Main content: list and details side-by-side */}
        <div className="overlay-body">
          {children}
        </div>

        {/* Bottom bar with controls */}
        <div className="overlay-bottom-bar">
          <div className="left-buttons">
            {extraButtons}
          </div>
          <div className="right-buttons">
            <button onClick={onCancel} className="overlay-button">Cancel</button>
            <button onClick={onConfirm} className="overlay-button">Accept</button>
          </div>
        </div>
      </div>
    </div>
  );
}