<template lang="pug">
  .container
    nav.nav
      .nav-left
        a.nav-item
          img(src='http://bulma.io/images/bulma-logo.png', alt='Bulma logo')
      .nav-center
        a.nav-item
          span.icon
            i.fa.fa-facebook
        a.nav-item
          span.icon
            i.fa.fa-twitter
        a.nav-item
          span.icon
            i.fa.fa-instagram
      // This "nav-toggle" hamburger menu is only visible on mobile
      // You need JavaScript to toggle the "is-active" class on "nav-menu"
      span.nav-toggle(:class="{'is-active': isActive}" @click="clickNav")
        span
        span
        span
      // This "nav-menu" is hidden on mobile
      // Add the modifier "is-active" to display it on mobile
      .nav-right.nav-menu(:class="{'is-active': isActive}")
        a.nav-item Schedule
        a.nav-item Shows
        a.nav-item Playlists
        a.nav-item Team
        a.nav-item Mission
</template>


<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    clickNav (event) {
      event.preventDefault()
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
