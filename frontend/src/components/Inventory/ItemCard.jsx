import React, { useState, useEffect } from 'react';
import { getItemDetailsById } from '../../utils/loaders/ItemLoader';

export default function ItemCard({ item, onIncrease, onDecrease, onRemove }) {
  const [fullItem, setFullItem] = useState(null);

  useEffect(() => {
    async function fetchItem() {
      const detailed = await getItemDetailsById(item.id);
      setFullItem(detailed);
    }

    fetchItem();
  }, [item.id]);

  if (!fullItem) return <div>Loading item data...</div>;

  return (
    <div className="item-card" style={{ border: '1px solid #444', borderRadius: '8px', padding: '1rem', paddingTop: '0', marginBottom: '1rem' }}>
      <h3>{fullItem.name}</h3>
      <p><strong>Type:</strong> {fullItem.type}</p>
      <p><strong>Weight:</strong> {fullItem.weight ?? '—'}</p>
      <p><strong>Cost:</strong> {
        fullItem.cost
          ? Object.entries(fullItem.cost).map(([k, v]) => `${v} ${k}`).join(', ')
          : '—'
      }</p>
      <div className="item-description">
        <p>{fullItem.description}</p>
      </div>
      {(onIncrease || onDecrease || onRemove) && (
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <button onClick={onDecrease}>-</button>
          <span>x{item.quantity}</span>
          <button onClick={onIncrease}>+</button>
          <button onClick={onRemove} style={{ marginLeft: 'auto' }}>Remove</button>
        </div>
      )}
    </div>
  );
}