<template lang="pug">
  div(@click="closeNav")
    nuxt-link.nav-item(:to="to"): slot
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
  },

  computed: {
    isSelected  () {
      const select = this.to === this.$route.path
      if (select) this.closeNav()
      return select
    }
  }
}
</script>

<style>
</style>
