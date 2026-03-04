import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import SheetPage from './pages/Sheet'

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main style={{ padding: 20 }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sheet/:id" element={<SheetPage />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </main>
    </div>
  )
}
