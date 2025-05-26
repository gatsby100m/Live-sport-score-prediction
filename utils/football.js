export const fetchLiveMatches = async () => {
  const res = await fetch('https://v3.football.api-sports.io/fixtures?live=all', {
    headers: { 'x-apisports-key': '407ac7fdde57217877e224cf7ed3d66d' }
  })
  return (await res.json()).response || []
}
