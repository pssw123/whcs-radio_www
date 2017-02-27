<template lang="pug">
  div
    span Total duration: {{ duration }} seconds
    span Progress: {{ (progress * 100) }}%
    button(@click='togglePlayback') {{ playing ? 'Pause' : 'Play' }}
    button(@click='stop') Stop
</template>

<script>
import VueHowler from 'vue-howler'

export default {
  mixins: [VueHowler]
}
</script>

<style lang="sass" scoped>
</style>
