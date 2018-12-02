<script>
// mixins
import Colorable from '../mixins/colorable'
import Themeable from '../mixins/themeable'
import Sizeable from '../mixins/sizeable'
import Toggleable from '../mixins/toggleable'
import Itemable from '../mixins/itemable'

// helpers
import { convertToUnit } from '../utils/helpers'

export default {
  name: 'BButton',

  mixins: [
    Colorable,
    Themeable,
    Sizeable,
    Toggleable('inputValue'),
    Itemable('BButton')
  ],

  props: {
    disabled: { type: Boolean, default: false },
    submit: { type: Boolean, default: false },
    round: { type: Boolean, default: true },
    flat: { type: Boolean, default: false },
    block: { type: Boolean, default: false }
  },

  computed: {
    classes () {
      return {
        ...this.themeClasses,
        [this.classSize]: convertToUnit(this.size),
        'b-button': true,
        'b-button--round': this.round,
        'b-button--disabled': this.disabled,
        'b-button--flat': this.flat,
        'b-button--small': this.small,
        'b-button--large': this.large,
        'b-button--medium': this.medium
      }
    },

    styles () {
      return {}
    },

    classSize () {
      return `b-button--${this.size}`
    }
  },

  render () {
    const data = {
      class: {
        ...this.classes
      },
      style: {
        ...this.styles
      },
      disabled: this.disable,
      on: this.$listeners,
      type: this.submit
    }

    this.setBackgroundColor(this.color, data)

    return (<button {...data}>
      <div class="b-button--body">
        {this.$slots.default}
      </div>
    </button>)
  }
}
</script>

<style lang="stylus" src="./BButton.styl"></style>
