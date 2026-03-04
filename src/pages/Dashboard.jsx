import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function getSheets() {
  try {
    const raw = localStorage.getItem('mta-sheets')
    return raw ? JSON.parse(raw) : []
  } catch (e) { return [] }
}

function saveSheets(sheets) {
  try { localStorage.setItem('mta-sheets', JSON.stringify(sheets)) } catch (e) {}
}

export default function Dashboard() {
  const [sheets, setSheets] = useState(getSheets)

  useEffect(() => saveSheets(sheets), [sheets])

  function createSheet() {
    const id = `sheet-${Date.now()}`
    const sheet = { id, title: 'New Character', created: Date.now() }
    setSheets(prev => [sheet, ...prev])
  }

  function deleteSheet(id) {
    if (!confirm('Delete this sheet?')) return
    setSheets(prev => prev.filter(s => s.id !== id))
    localStorage.removeItem(`sheet-${id}`)
  }

  return (
    <div>
      <h2>Your Characters</h2>
      <button onClick={createSheet}>+ New Character</button>
      <ul>
        {sheets.map(s => (
          <li key={s.id} style={{ marginTop: 8 }}>
            <Link to={`/sheet/${s.id}`}>{s.title}</Link>
            <button style={{ marginLeft: 8 }} onClick={() => deleteSheet(s.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
