;(() => {
  const AUTH_TOKEN_PAGE = 'https://open.spotify.com'
  const CORS_BYPASS_SERVICE = 'https://cors-anywhere.herokuapp.com'
  const ENDPOINT_PLAYLIST_TRACKS = (playlistId) =>
    `https://api.spotify.com/v1/playlists/${playlistId}`
  const TEMP_TOKEN =
    'BQDPSUBHOwPzJB4nQgdL95rvpK6LFZN0-9wznCpx1SKpKsNj-YyE5UCDpuadEypPs021zKNMCUojR6N4Xyo'

  async function getPlaylistFull(playlistId) {
    const json = await fetch(ENDPOINT_PLAYLIST_TRACKS(playlistId), {
      headers: {
        Authorization: `Bearer ${TEMP_TOKEN}`,
      },
    })
      .then((res) => {
        return res.json()
      })
      .catch((err) => {
        debugger
        console.error(err)
      })
    return json
  }

  window.viaje.lib.spotify.getPlaylistFull = getPlaylistFull
})()
