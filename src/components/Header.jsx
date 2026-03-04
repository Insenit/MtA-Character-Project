import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header style={{ background: '#0f172a', color: 'white', padding: '10px 20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <h1 style={{ margin: 0, fontSize: 18 }}>MtA Character Project</h1>
        <nav>
          <Link to="/dashboard" style={{ color: '#cbd5e1', marginRight: 12 }}>Dashboard</Link>
          <Link to="/login" style={{ color: '#cbd5e1' }}>Login</Link>
        </nav>
      </div>
    </header>
  )
}
