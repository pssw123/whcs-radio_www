<template lang="pug">
  nuxt-link.nav-item(:to="to"): span(@click="closeNav"): slot
</template>

<script>
export default {
  props: {
    'to': { required: true }
  },

  methods: {
    closeNav (event) {
      this.$parent.$emit('closeNav')
    }
  }
}
</script>

<style lang="sass" scoped>
span
  width: 100%
  display: inline-block
@media screen and (max-width: 768px)
  .nav-item
    padding: 0
  span
    padding: 0.75em
</style>
