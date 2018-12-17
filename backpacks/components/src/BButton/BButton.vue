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
  name: 'b-button',

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
    round: { type: Boolean, default: false },
    flat: { type: Boolean, default: true },
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
        'b-button--block': this.block,
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

  methods: {
    click (e) {
      this.$el.blur()
      this.$emit('click', e)
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
      on: {
        ...this.$listeners,
        'click': this.click
      },
      type: this.submit
    }

    if (this.flat) {
      this.setTextColor(this.color || this.backgroundColor, data)
    } else {
      this.setBackgroundColor(this.backgroundColor, data)
      this.setTextColor(this.color, data)
    }

    return (<button {...data}>
      <div class="b-button--body">
        {this.$slots.default}
      </div>
    </button>)
  }
}
</script>

<style lang="stylus" src="./BButton.styl"></style>
