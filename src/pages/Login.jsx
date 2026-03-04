import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
  const nav = useNavigate()
  const { user, signUp, signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState('login') // or 'signup'
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  if (user) {
    nav('/dashboard')
    return null
  }

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      if (mode === 'signup') {
        const res = await signUp(email, password)
        if (res.error) {
          setError(res.error.message)
        } else {
          // If Supabase requires email confirmation, signUp may succeed but no session is returned.
          // In that case, instruct the user to check their email rather than trying to navigate immediately.
          const hasSession = res.data?.session ?? false
          if (hasSession) {
            nav('/dashboard')
          } else {
            setError('A confirmation email was sent. Please check your inbox and confirm your account before signing in.')
          }
        }
      } else {
        const res = await signIn(email, password)
        if (res.error) setError(res.error.message)
        else nav('/dashboard')
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: 520 }}>
      <h2>{mode === 'signup' ? 'Sign up' : 'Sign in'}</h2>
      <form onSubmit={onSubmit}>
        <div style={{ marginBottom: 8 }}>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: 8 }}>
          <label>Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required style={{ width: '100%' }} />
        </div>
        {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
        <button type="submit" disabled={loading}>{loading ? 'Please wait…' : (mode === 'signup' ? 'Create account' : 'Sign in')}</button>
      </form>
      <div style={{ marginTop: 12 }}>
        <button onClick={() => setMode(mode === 'signup' ? 'login' : 'signup')}>
          {mode === 'signup' ? 'Have an account? Sign in' : "Don't have an account? Sign up"}
        </button>
      </div>
    </div>
  )
}
