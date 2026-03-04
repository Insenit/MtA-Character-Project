import { useState } from 'react';

export default function FeatureCard({ level, features, className }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div
      style={{
        backgroundColor: '#1c2433',
        padding: '12px',
        borderRadius: '10px',
        marginTop: '10px',
        color: '#fff',
      }}
    >
      <div
        style={{
          fontWeight: 'bold',
          fontSize: '16px',
          color: '#ff5722',
          marginBottom: '6px',
        }}
      >
        Level {level}
      </div>

      {features.map((f, idx) => {
        const isSelected = idx === selectedIndex;

        return (
          <div
            key={idx}
            onClick={() => setSelectedIndex(isSelected ? null : idx)}
            style={{
              padding: '10px 8px 6px 8px',
              borderRadius: '6px',
              backgroundColor: isSelected ? '#263445' : 'transparent',
              color: isSelected ? '#ff5722' : '#ffffff',
              cursor: 'pointer',
              marginBottom: '4px',
              transition: 'background-color 0.2s ease',
            }}
          >
            {f.name}

            {isSelected && (
              <div
                style={{
                  marginTop: '-6px',
                  padding: '8px',
                  borderRadius: '4px',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                }}
              >
                {f.description && (
                  <div
                    dangerouslySetInnerHTML={{ __html: f.description }}
                  />
                )}

                {f.render && (
                  <div
                    style={{ marginTop: '10px' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {f.render()}
                  </div>
                )}

                {f.customButton && (
                  <div style={{ marginTop: '10px' }} onClick={(e) => e.stopPropagation()}>
                    {f.customButton}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
