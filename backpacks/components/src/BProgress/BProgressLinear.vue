<template>
  <div :class="classes">
    <span />
    <!-- todo -->
  </div>
</template>

<script>
export default {
  props: {
    value: { type: Number, required: true },
    color: { type: String, default: 'blue' },
    backgroundColor: { type: String, default: 'blue' },
    height: { type: Number, default: 5 }
  },
  computed: {
    classes () {
      return {
        'b-progress-linear': true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .b-progress-linear {
    display: flex
    flex-direction: column
  }
</style>
