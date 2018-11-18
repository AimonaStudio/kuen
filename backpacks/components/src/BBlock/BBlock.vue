<template>
  <div :class="classes" :style="styles">
    <template>
      <strong>{{ status }}</strong>
      <small>
        <slot class="info" />
      </small>
    </template>
  </div>
</template>

<script>
import { convertToUnit } from '../utils/helpers'
import Colorable from '../mixins/colorable'

export default {
  name: 'BBlock',
  mixins: [Colorable],

  props: {
    size: { type: Number, default: 90 },
    disabled: { type: Boolean, default: false },
    status: { type: String, default: '' }
  },
  computed: {
    classes () {
      const classes = this.setBackgroundColor(this.color, {
        'b-block': true,
        'b-block--disabled': this.disabled,
        'status': true // todo: merge status color to common colors like 'light', 'dark' .etc
      })
      this.setBackgroundColor(this.color, classes)
      return classes
    },
    styles () {
      const style = this.setBackgroundColor(this.color, {
        'height': convertToUnit(this.size),
        'width': convertToUnit(this.size)
      })

      return style
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../../stylus/settings/_colors.styl"

  .b-block {
    display: flex
    flex-direction: column
    justify-content: center
    color: $white
    &--disabled {
      opacity: 0.65;
      cursor: not-allowed;
    }

    strong {
      font-size: 1.3rem
    }

    small {
      font-size: .7rem
    }
  }
</style>
