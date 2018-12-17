<script>
// mixins
import Colorable from '../mixins/colorable'
import Themeable from '../mixins/themeable'

export default {
  name: 'b-container',

  mixins: [Colorable, Themeable],

  computed: {
    classes () {
      return {
        ...this.themeClasses,
        'b-container': true
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

    this.setBackgroundColor(this.backgroundColor, data)

    return (
      <div {...data}>
        {this.$slots.default}
      </div>
    )
  }
}
</script>

<style lang="stylus" src="./BContainer.styl"></style>
