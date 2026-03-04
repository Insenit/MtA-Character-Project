export default function SelectionBox({ label, value, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        border: '2px solid #ccc',
        borderRadius: '8px',
        padding: '12px',
        marginBottom: '10px',
        cursor: 'pointer',
        backgroundColor: '#0b1120',
        color: '#fff',
        transition: 'border-color 0.2s',
      }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#ff5722'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#ccc'}
    >
      <strong>{label}</strong>
      <div>{value || 'Not selected'}</div>
    </div>
  );
}