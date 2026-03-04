export default function CurrencyDisplay({ currency, onEdit }) {
  const denominations = [
    { key: 'pp', label: 'Platinum' },
    { key: 'gp', label: 'Gold' },
    { key: 'ep', label: 'Electrum'},
    { key: 'sp', label: 'Silver' },
    { key: 'cp', label: 'Copper' },
  ];

  return (
    <div className="currency-panel">
      {denominations.map(({ key, label }) => (
        <div
          key={key}
          className="currency-box clickable"
          onClick={() => onEdit(key)}
        >
          <div className="currency-label">{label}</div>
          <div className="currency-amount">{currency?.[key] ?? 0}</div>
        </div>
      ))}
    </div>
  );
}