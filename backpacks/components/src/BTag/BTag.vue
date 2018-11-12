<template>
  <div :class="classes" />
</template>

<script>
import Colorable from '../mixins/colorable'
import { convertToUnit } from '../utils/helpers'

export default {
  name: 'BTag',
  mixins: [Colorable],

  props: {
    circle: { type: Boolean, default: false },
    size: { type: String, default: undefined }
  },

  computed: {
    styles () {
      return {
        'height': convertToUnit(this.size),
        'width': convertToUnit(this.size)
      }
    },
    classes () {
      return {
        'b-tag': true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .b-tag {

  }
</style>
