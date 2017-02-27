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

<style lang="sass">
span
  width: 100%
  display: inline-block
</style>
