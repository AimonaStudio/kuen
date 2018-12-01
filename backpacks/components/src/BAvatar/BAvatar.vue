<template>
  <div :class="classes" :style="styles">
    <b-image />
  </div>
</template>

<script>
import { convertToUnit } from '../utils/helpers'
// mixins
import Colorable from '../mixins/colorable'

// components
import BImage from '../BMedia/BImage'

export default {
  name: 'BAvatar',
  components: { BImage },
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

<style lang="stylus" src="./BAvatar.styl"></style>
