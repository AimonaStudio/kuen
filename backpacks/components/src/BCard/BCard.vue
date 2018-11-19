<template>
  <!-- fixme: background-color -->
  <div :class="[classes, setBackgroundColor(backgroundColor)]" :style="styles">
    <div
      v-if="this.$slots.header"
      :class="isMediaElementHeader ? 'b-card--header--media' : 'b-card--header'"
    >
      <slot name="header" />
    </div>
    <div class="b-card--body">
      <slot />
    </div>
    <div v-if="this.$slots.footer" class="b-card--footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
// helpers
import { convertToUnit, isMediaElement } from '../utils/helpers'

// mixins
import Colorable from '../mixins/colorable'
import Themeable from '../mixins/themeable'

export default {
  name: 'BCard',

  mixins: [Colorable, Themeable],

  props: {
    width: { type: Number, default: 320 },
    backgroundColor: { type: String | Number, default: undefined },
    tile: { type: Boolean, default: false }
  },

  computed: {
    classes () {
      const classes = {
        ...this.themeClasses,
        'b-card': true,
        'b-card--tile': this.tile
      }

      return classes
    },

    styles () {
      const styles = {
        'width': convertToUnit(this.width)
      }
      return styles
    },

    isMediaElementHeader () {
      return isMediaElement(this.$slots.header)
    }
  },

  methods: {
    isMediaElement
  }
}
</script>

<style lang="stylus" src="./BCard.styl"></style>
