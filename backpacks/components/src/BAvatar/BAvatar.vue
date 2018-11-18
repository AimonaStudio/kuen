<template>
  <div>
    <div />
  </div>
</template>

<script>
import { convertToUnit } from '../utils/helpers'
// mixins
import Colorable from '../mixins/colorable'

export default {
  mixins: [Colorable],

  props: {
    size: { type: Number, default: 48 },
    tile: { type: Boolean, default: false }
  },

  computed: {
    classes () {
      return {
        'b-avatar': true,
        'b-avatar--tile': this.tile
      }
    },
    styles () {
      const size = convertToUnit(this.size)

      return {
        'width': size,
        'height': size
      }
    }
  }
}
</script>

<style scoped>
  .b-avatar {
    border-radius: 50%;

    &--tile {

    }
  }
</style>
