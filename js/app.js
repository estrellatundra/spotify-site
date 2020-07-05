window.addEventListener('DOMContentLoaded', () => {
  window.viaje.vueInstance = new Vue({
    el: '#app',
    components: window.viaje.cmps,
    async created() {
      // const playlistTest = await window.viaje.lib.spotify.getPlaylistFull(
      //   '6cjzG9nwYuTf222Q1U7h1H'
      // )
      // debugger
    },
  })
})
