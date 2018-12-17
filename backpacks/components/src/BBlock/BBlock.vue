<script>
import { convertToUnit } from '../utils/helpers'
import Colorable from '../mixins/colorable'
import Themeable from '../mixins/themeable'

export default {
  name: 'b-block',
  mixins: [Colorable, Themeable],

  props: {
    size: { type: Number, default: 90 },
    disabled: { type: Boolean, default: false },
    status: { type: String, default: '' },
    tile: { type: Boolean, default: true }
  },
  computed: {
    classes () {
      const classes = {
        ...this.themeClasses,
        'b-block': true,
        'b-block--disabled': this.disabled,
        'b-block--tile': this.tile,
        'status': true
      }

      return classes
    },
    styles () {
      const style = {
        'height': convertToUnit(this.size),
        'width': convertToUnit(this.size)
      }

      return style
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
    return (
      <div {...data}>
        <strong>
          {this.status}
        </strong>
        <small>
          <div class="info">
            {this.$slots.default}
          </div>
        </small>
      </div>
    )
  }
}
</script>

<style lang="stylus" src="./BBlock.styl"></style>
