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
    this.setBackgroundColor(this.backgroundColor, data)
    return (
      <div
        class={data.class}
        style={data.style}
      >
        <div class={this.isMediaElementHeader ? 'b-card--header--media' : 'b-card--header'}>
          {this.$slots.header}
        </div>
        <div class="b-card--body">
          {this.$slots.default}
        </div>
        <div class="b-card--footer">
          {this.$slots.footer}
        </div>
      </div>)
  }
}
</script>

<style lang="stylus" src="./BCard.styl"></style>
