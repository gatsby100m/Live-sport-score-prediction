import { useEffect, useState } from 'react'
import { supabase } from './utils/supabase'
import LiveMatches from './components/LiveMatches'

export default function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
    })
  }, [])

  return (
    <div className="app">
      <LiveMatches />
    </div>
  )
}
