import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const nav = useNavigate()

  function fakeLogin(e) {
    e.preventDefault()
    // temporary: in-memory fake login, will be replaced with Supabase later
    localStorage.setItem('mta-user', JSON.stringify({ id: 'user-1', email: 'you@example.com' }))
    nav('/dashboard')
  }

  return (
    <div style={{ maxWidth: 520 }}>
      <h2>Login</h2>
      <form onSubmit={fakeLogin}>
        <div style={{ marginBottom: 8 }}>
          <label>Email</label>
          <input type="email" required style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: 8 }}>
          <label>Password</label>
          <input type="password" required style={{ width: '100%' }} />
        </div>
        <button type="submit">Sign in (fake)</button>
      </form>
    </div>
  )
}
