<template>
  <div :class="classes" :style="styles" />
</template>

<script>
export default {
  name: 'BMedia',
  props: {
    type: { type: String, required: true }
  },
  computed: {
    classes () {
      return {
        'b-media': true
      }
    },
    styles () {
      return {}
    }
  }
}
</script>

<style lang="stylus" src="./BMedia.styl"></style>
