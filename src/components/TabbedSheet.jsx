import React, { useState, useEffect } from 'react'

function useAutosave(key, state) {
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state))
    } catch (e) {
      // ignore
    }
  }, [key, state])
}

export default function TabbedSheet({ sheetId, initial, onChange }) {
  const storageKey = `sheet-${sheetId}`
  const [tabs, setTabs] = useState(() => {
    try {
      const raw = localStorage.getItem(storageKey)
      if (raw) return JSON.parse(raw)
    } catch (e) {}
    return initial || [{ id: 'tab-1', title: 'Main', content: '' }]
  })
  const [active, setActive] = useState(tabs[0]?.id)

  useAutosave(storageKey, tabs)

  useEffect(() => {
    if (onChange) onChange(tabs)
  }, [tabs])

  useEffect(() => {
    if (!tabs.find(t => t.id === active)) setActive(tabs[0]?.id)
  }, [tabs, active])

  function addTab() {
    const id = `tab-${Date.now()}`
    setTabs(prev => [...prev, { id, title: 'New Tab', content: '' }])
    setActive(id)
  }

  function updateTab(id, patch) {
    setTabs(prev => prev.map(t => (t.id === id ? { ...t, ...patch } : t)))
  }

  function removeTab(id) {
    setTabs(prev => prev.filter(t => t.id !== id))
  }

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 6 }}>
      <div style={{ display: 'flex', gap: 8, padding: 8, background: '#f8fafc' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            style={{
              padding: '6px 10px',
              borderRadius: 4,
              border: active === tab.id ? '2px solid #0ea5e9' : '1px solid #e6e6e6',
              background: active === tab.id ? 'white' : 'transparent'
            }}
          >
            {tab.title}
            <span style={{ marginLeft: 8 }} onClick={(e) => { e.stopPropagation(); removeTab(tab.id) }}>✕</span>
          </button>
        ))}
        <button onClick={addTab} style={{ marginLeft: 'auto' }}>+ Add tab</button>
      </div>

      <div style={{ padding: 12 }}>
        {tabs.map(tab => (
          <div key={tab.id} style={{ display: tab.id === active ? 'block' : 'none' }}>
            <input
              value={tab.title}
              onChange={(e) => updateTab(tab.id, { title: e.target.value })}
              style={{ fontSize: 18, width: '100%', marginBottom: 8 }}
            />
            <textarea
              value={tab.content}
              onChange={(e) => updateTab(tab.id, { content: e.target.value })}
              rows={10}
              style={{ width: '100%' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
