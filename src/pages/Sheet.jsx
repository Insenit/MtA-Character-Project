import React from 'react'
import { useParams } from 'react-router-dom'
import TabbedSheet from '../components/TabbedSheet'

export default function SheetPage() {
  const { id } = useParams()

  return (
    <div>
      <h2>Character Sheet</h2>
      <p>Sheet ID: {id}</p>
      <TabbedSheet sheetId={id} initial={[{ id: 'tab-1', title: 'Main', content: 'Notes go here' }]} />
    </div>
  )
}
