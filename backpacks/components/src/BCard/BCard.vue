<template>
  <div :class="classes" />
</template>

<script>
export default {
  name: 'BCard',
  computed: {
    classes () {
      return ['b-card']
    }
  }
}
</script>

<style lang="stylus" scoped>
  .b-card {
  }
</style>
