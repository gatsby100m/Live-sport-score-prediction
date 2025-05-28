import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabase'
import { fetchLiveMatches } from '../utils/football'

export default function LiveMatches() {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      // From API
      const liveMatches = await fetchLiveMatches()
      // From Supabase
      const { data: dbMatches } = await supabase.from('matches').select('*')
      setMatches([...liveMatches, ...dbMatches])
    }
    fetchData()
  }, [])

  return (
    <div>
      {matches.map(match => (
        <div key={match.id}>
          {match.home} vs {match.away}: {match.score}
        </div>
      ))}
    </div>
  )
}
