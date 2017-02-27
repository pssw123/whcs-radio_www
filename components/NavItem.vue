<template lang="pug">
  nuxt-link.nav-item(
    :class="{'is-active': selected}",
    :to="to",
    ): slot
</template>

<script>
export default {
  props: {
    'to': { required: true }
  },
  data () {
    return {
      selected: false
    }
  },
  computed: {
    isSelected () {
      this.selected = (this.to === this.$route.path)
      if (this.selected) {
        this.$parent.$emit('close_nav')
      }
    }
  }
}
</script>

<style>
</style>
