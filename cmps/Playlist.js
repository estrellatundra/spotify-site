window.cmps.Playlist = (() => {
  async function getPlaylistMeta(playlistNum) {
    const raw = await fetch(`/playlists/${playlistNum}.txt`).then((res) => {
      return res.text()
    })
    return parsePlaylistMeta(raw)
  }

  function parsePlaylistMeta(raw) {
    // Map file format to obj
    let splitRaw = raw.split('---')

    return {
      title: splitRaw[0].trim(),
      url: splitRaw[1].trim(),
      desc: splitRaw[2].trim(),
      tracks: splitRaw[3].split(/\r?\n/).filter((x) => x !== ''),
    }
  }

  return Vue.component('Playlist', {
    props: {
      number: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        title: '',
        url: '',
        desc: '',
        tracks: [],
      }
    },
    async created() {
      const data = await getPlaylistMeta(this.$props.number)
      this.title = data.title
      this.url = data.url
      this.desc = data.desc
      this.tracks = data.tracks
    },
    template: `
      <div class="playlist">
        <h2>{{ title }}</h2>
        <a :href="url" target="_blank" rel="noopener">Play on Spotify</a>
        <p>{{ desc }}</p>
        <ul>
          <li v-for="track in tracks" :key="track">
            <a :href="track" target="_blank" rel="noopener">Play on Spotify</a>
          </li>
        </ul>
      </div>
    `,
  })
})()
