import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import { getItemDetailsById } from '../../utils/loaders/ItemLoader';

export default function ContainerDisplay({ containers, onAddItem, onIncrementItem, onDecrementItem }) {
  const [expandedItem, setExpandedItem] = useState({ containerId: null, index: null });
  const [enrichedItems, setEnrichedItems] = useState({});

  useEffect(() => {
    // Load item details for all container items
    async function loadAllItemDetails() {
      const updates = {};

      for (const container of containers) {
        for (let i = 0; i < container.items.length; i++) {
          const item = container.items[i];
          if (!enrichedItems[item.id]) {
            const fullItem = await getItemDetailsById(item.id);
            if (fullItem) {
              updates[item.id] = fullItem;
            }
          }
        }
      }

      if (Object.keys(updates).length > 0) {
        setEnrichedItems(prev => ({ ...prev, ...updates }));
      }
    }

    loadAllItemDetails();
  }, [containers]);

  const handleToggleExpand = (containerId, index) => {
    setExpandedItem(prev =>
      prev.containerId === containerId && prev.index === index
        ? { containerId: null, index: null }
        : { containerId, index }
    );
  };

  if (!containers || containers.length === 0) return <p>No containers available.</p>;

  return (
    <div className="container-display">
      {containers.map(container => (
        <div key={container.id} className="inventory-container">
          <div className="container-header">
            <h3>{container.name}</h3>
          </div>

          <div className="container-items">
            {container.items.length === 0 ? (
              <p className="empty-text">No items</p>
            ) : (
              container.items.map((item, idx) => {
                const full = enrichedItems[item.id] || {};
                return (
                  <React.Fragment key={idx}>
                    <div className="item-row">
                      <button className="qty-button" onClick={() => onDecrementItem(container.id, idx)}>-</button>
                      <span className="item-qty">Qty {item.quantity}</span>
                      <button className="qty-button" onClick={() => onIncrementItem(container.id, idx)}>+</button>
                      <span
                        className="item-name hoverable"
                        onClick={() => handleToggleExpand(container.id, idx)}
                        style={{
                          cursor: 'pointer',
                          color:
                            expandedItem.containerId === container.id && expandedItem.index === idx
                              ? '#ff5722'
                              : undefined
                        }}
                        onMouseOver={e => (e.target.style.color = '#ff5722')}
                        onMouseOut={e =>
                          (e.target.style.color =
                            expandedItem.containerId === container.id && expandedItem.index === idx ? '#ff5722' : '')
                        }
                      >
                        {item.name}
                      </span>
                      <span className="item-weight">{full.weight ?? '—'} lb.</span>
                      <span className="item-cost">
                        {full.cost
                          ? Object.entries(full.cost)
                              .map(([k, v]) => `${v} ${k}`)
                              .join(', ')
                          : '—'}
                      </span>
                    </div>
                    {expandedItem.containerId === container.id && expandedItem.index === idx && (
                      <div className="item-card-expanded">
                        <ItemCard item={{ ...full, quantity: item.quantity }} />
                      </div>
                    )}
                  </React.Fragment>
                );
              })
            )}

            <button className="add-item-button" onClick={() => onAddItem(container.id)}>
              + Add Item
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}