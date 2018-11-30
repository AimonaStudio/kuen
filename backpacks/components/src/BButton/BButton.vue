<script>
import Colorable from '../mixins/colorable'
import Themeable from '../mixins/themeable'
import Toggleable from '../mixins/toggleable'

export default {
  name: 'BButton',

  mixins: [Colorable, Themeable, Toggleable('inputValue')],

  props: {
    activeClass: { type: String, default: 'b-button--active' },
    size: { type: String, default: 'medium' },
    round: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
    flat: { type: Boolean, default: false },
    block: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
    small: { type: Boolean, default: false }
  },

  computed: {
    classes () {
      return {
        ...this.themeClasses,
        'b-button': true,
        [this.activeClass]: this.isActive,
        'b-button--round': this.round,
        'b-button--disabled': this.disabled,
        'b-button--flat': this.flat,
        'b-button--small': this.small,
        'b-button--large': this.large
      }
    },
    styles () {
      return {}
    }
  },

  render () {
    const data = {
      class: {
        ...this.classes
      },
      style: {
        ...this.styles
      }
    }
    this.setBackgroundColor(this.color, data)
    return (<button
      disabled={this.disable}
      class={data.class}
      style={data.style}
    >
      <div class="b-button--body">
        {this.$slots.default}
      </div>
    </button>)
  }
}
</script>

<style lang="stylus" src="./BButton.styl"></style>
