window.cmps.Playlist = (() => {
  async function getPlaylistMeta(playlistNum) {
    const { data } = await fetch(`/playlists/${playlistNum}`)
    console.log('fetched')
    debugger
  }

  function parsePlaylistMeta(raw) {
    console.log('parse raw')
  }

  return {
    props: {
      number: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        playlistMeta: null,
      }
    },
    async created() {
      this.playlistMeta = await getPlaylistMeta(this.$props.number)
    },
    template: `
      <ul>
        <li>Something here</li>
      </ul>
    `,
  }
})()
