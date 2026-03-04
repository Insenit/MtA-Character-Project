export default function DebugView() {
  const characters = JSON.parse(localStorage.getItem('characters')) || [];

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Stored Character Data</h1>
      <pre style={{ whiteSpace: 'pre-wrap', backgroundColor: '#1c2433', color: '#fff', padding: '1rem', borderRadius: '8px' }}>
        {JSON.stringify(characters, null, 2)}
      </pre>
    </div>
  );
}