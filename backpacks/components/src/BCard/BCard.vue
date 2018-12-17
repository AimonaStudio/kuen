<script>
// mixins
import Colorable from '../mixins/colorable'
import Themeable from '../mixins/themeable'

export default {
  name: 'b-card',

  mixins: [Colorable, Themeable],

  props: {
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
      return {

      }
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

    this.setBackgroundColor(this.backgroundColor, data)

    return (
      <div {...data}>
        {this.$slots.default}
      </div>)
  }
}
</script>

<style lang="stylus" src="./BCard.styl"></style>
