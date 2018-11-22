<template>
  <div :class="classes" :style="styles" />
</template>

<script>
export default {
  name: 'BImage',
  computed: {
    classes () {
      return {
        'b-image': true
      }
    },
    styles () {
      return {

      }
    }
  }
}
</script>

<style  scoped>

</style>
