<template lang="pug">
  header.hero-head
    .container
      nav.nav
        .nav-left
          nuxt-link.nav-item(to="/")
            img(src='http://bulma.io/images/bulma-logo.png', alt='Bulma logo')
        .nav-center
          a.nav-item(href="https://www.facebook.com/WHCSRadio/" target="_blank")
            span.icon
              i.fa.fa-facebook
          a.nav-item(href="https://twitter.com/whcsradio" target="_blank")
            span.icon
              i.fa.fa-twitter
          a.nav-item(href="https://www.instagram.com/whcsradio/?hl=en" target="_blank")
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
          slot
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
header
  z-index: 1
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.4)
  position: fixed
  top: 0
  width: 100%
  background-color: white
</style>
