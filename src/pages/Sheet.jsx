import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import TabbedSheet from '../components/TabbedSheet'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../contexts/AuthContext'

export default function SheetPage() {
  const { id } = useParams()
  const { user, loading } = useAuth()
  const nav = useNavigate()
  const [sheet, setSheet] = useState(null)

  useEffect(() => {
    if (!loading && !user) {
      nav('/login')
      return
    }
    if (!user) return

    let mounted = true
    async function load() {
      const { data, error } = await supabase.from('sheets').select('*').eq('id', id).limit(1)
      if (error) return console.error(error)
      if (mounted) setSheet(data?.[0] ?? null)
    }
    load()
    return () => { mounted = false }
  }, [id, user, loading, nav])

  async function saveTabs(tabs) {
    if (!sheet) return
    const { error } = await supabase.from('sheets').update({ tabs }).eq('id', sheet.id)
    if (error) console.error('Failed to save tabs', error)
    else setSheet(prev => ({ ...prev, tabs }))
  }

  return (
    <div>
      <h2>Character Sheet</h2>
      <p>Sheet ID: {id}</p>
      {sheet ? (
        <div>
          <TabbedSheet sheetId={id} initial={sheet.tabs} onChange={(tabs) => setSheet(prev => ({ ...prev, tabs }))} />
          <div style={{ marginTop: 8 }}>
            <button onClick={() => saveTabs(sheet.tabs)}>Save</button>
          </div>
        </div>
      ) : (
        <p>Loading…</p>
      )}
    </div>
  )
}
