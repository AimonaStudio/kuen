<script>
import Colorable from '../mixins/colorable'
import Themeable from '../mixins/themeable'
import Toggleable from '../mixins/toggleable'
import Itemable from '../mixins/itemable'

export default {
  name: 'BButton',

  mixins: [
    Colorable,
    Themeable,
    Toggleable('inputValue'),
    Itemable('b-button')
  ],

  props: {
    disabled: { type: Boolean, default: false },
    size: {
      type: String,
      default: 'medium',
      validator (val) {
        return ['small', 'medium', 'large'].indexOf(val) !== -1
      }
    },
    submit: { type: Boolean, default: false },
    round: { type: Boolean, default: true },
    flat: { type: Boolean, default: false },
    block: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
    small: { type: Boolean, default: false }
  },

  computed: {
    classes () {
      return {
        ...this.themeClasses,
        [this.classSize]: this.size,
        'b-button': true,
        'b-button--round': this.round,
        'b-button--disabled': this.disabled,
        'b-button--flat': this.flat,
        'b-button--small': this.small,
        'b-button--large': this.large
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
