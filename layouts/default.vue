<template lang="pug">
  div
    nav-bar
    nuxt
    my-footer
</template>

<script>
import MyFooter from '~components/Footer'
import NavBar from '~components/NavBar'

export default {
  components: {
    MyFooter,
    NavBar
  }
}
</script>

<style scoped lang="sass">

</style>
