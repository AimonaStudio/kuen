<script>
import { defaultContentParser } from 'markdown-palettes'

// mixins
import Themeable from '../mixins/themeable'
import Colorable from '../mixins/colorable'

export default {
  name: 'BText',

  mixins: [Themeable, Colorable],

  props: {
    content: { type: String, default: '' },
    rate: { type: Number, default: 1 }
  },

  computed: {
    parsedText () {
      return defaultContentParser(this.content)
    },

    classes () {
      return {
        ...this.themeClasses,
        'b-text': true
      }
    },

    styles () {
      return {
        'font-size': `${this.rate * 1}rem`
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

    this.setBackgroundColor(this.data)

    return (
      <div {...data}
        domPropsInnerHTML={this.parsedText}>
      </div>
    )
  }
}
</script>

<style lang="stylus" src="./BText.styl"></style>
