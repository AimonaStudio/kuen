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
import { convertToUnit, isMediaElement } from '../utils/helpers'
// mixins
import Colorable from '../mixins/colorable'

export default {
  name: 'BCard',

  mixins: [Colorable],

  props: {
    width: { type: Number, default: 320 },
    backgroundColor: { type: String | Number, default: undefined },
    tile: { type: Boolean, default: false }
  },

  computed: {
    classes () {
      const classes = {
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

  mounted () {
    console.log(this.$slots)
  },

  methods: {
    isMediaElement
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../../stylus/settings/_variables.styl"
  @import "../../../stylus/settings/_elevations.styl"

  .b-card {
    display flex
    flex-direction column
    flex-wrap nowrap
    padding 0
    margin 0 16px 0 16px
    border-radius $border-radius-default
    text-align left
    elevation(1)

    &--tile {
      border-radius 0
    }

    &--header {
      display flex
      flex-direction row
      flex-wrap nowrap
      align-items center
      padding 16px 20px 16px 20px
      background-color rgba(0, 0, 0, .03)
      border 0

      &--media {
        padding 0
        border-radius $border-radius-default
        margin 0
        img {
          border-top-right-radius $border-radius-default
          border-top-left-radius $border-radius-default
          display inline-block
          height auto
          max-width 100%
        }
      }
    }

    &--footer {
      padding 16px 20px 16px 20px
    }

    &--body {
      padding 20px
      text-align left
    }

    @media $display-breakpoints.xs-only {
      margin 0
    }
  }
</style>
