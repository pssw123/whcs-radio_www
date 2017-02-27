<template lang="pug">
  div
    nav-bar
      nav-item(to="/schedule") Schedule
      nav-item(to="/shows") Shows
      nav-item(to="/playlists") Playlists
      nav-item(to="/events") Events
      nav-item(to="/mission") Mission
      nav-item(to="/team") Team
    main
      nuxt
    my-footer
</template>

<script>
import MyFooter from '~components/Footer'
import NavBar from '~components/NavBar'
import NavItem from '~components/NavItem'
export default {
  components: {
    MyFooter,
    NavBar,
    NavItem
  }
}
</script>

<style scoped lang="sass">

</style>
