import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabaseClient'

export default function Dashboard() {
  const { user, loading } = useAuth()
  const nav = useNavigate()
  const [sheets, setSheets] = useState([])
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    if (!loading && !user) {
      nav('/login')
      return
    }
    if (!user) return

    let mounted = true
    async function load() {
      const { data, error } = await supabase.from('sheets').select('*').order('created_at', { ascending: false })
      if (error) console.error('Failed to load sheets', error)
      if (mounted) setSheets(data || [])
    }
    load()
    return () => { mounted = false }
  }, [user, loading, nav])

  async function createSheet() {
    if (!user) return nav('/login')
    setBusy(true)
    try {
      const insert = { owner: user.id, title: 'New Character', tabs: [] }
      const { data, error } = await supabase.from('sheets').insert([insert]).select()
      if (error) throw error
      const created = data[0]
      setSheets(prev => [created, ...prev])
      nav(`/sheet/${created.id}`)
    } catch (err) {
      console.error(err)
      alert('Failed to create sheet: ' + err.message)
    } finally { setBusy(false) }
  }

  async function deleteSheet(id) {
    if (!confirm('Delete this sheet?')) return
    const { error } = await supabase.from('sheets').delete().eq('id', id)
    if (error) return alert('Delete failed: ' + error.message)
    setSheets(prev => prev.filter(s => s.id !== id))
  }

  return (
    <div>
      <h2>Your Characters</h2>
      <button onClick={createSheet} disabled={busy}>+ New Character</button>
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
