<template>
  <div :class="classes" :style="styles" />
</template>

<script>
export default {
  name: 'BVideo',
  computed: {
    classes () {
      return {
        'b-video': true
      }
    },
    styles () {
      return {

      }
    }
  }
}
</script>

<style scoped>

</style>
