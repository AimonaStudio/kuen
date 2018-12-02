<script>
// todo: dynamic add staticClass to class or style, and maybe it's a wrong design (x
// import { setTextColor } from '../utils/colorUtils'
import { convertToUnit } from '../utils/helpers'
import Headerable from '../mixins/headerable'
import Sizeable from '../mixins/sizeable'

export default {
  name: 'BCardHeader',
  functional: true,
  mixins: [Headerable, Sizeable],
  props: {
    src: { type: String, default: undefined }
  },
  beforeCreate () {
    console.log()
  },
  render (_, { data, props, children }) {
    const isShadow = {
      'elevation--text-1': props.titleShadow
    }

    if (props.src) {
      // todo: Please simplify the code here
      const mediaSize = (() => {
        const handle = (val) => {
          return { 'padding-bottom': `${val}` }
        }
        if (props.xLarge) {
          return handle('calc(2/3*100%)')
        } else if (props.large) {
          return handle('calc(1/3*100%)')
        } else if (props.medium) {
          return handle('calc(1/5*100%)')
        } else if (props.small) {
          return handle('calc(1/7*100%)')
        } else {
          return handle(convertToUnit(props.size))
        }
      })()

      const style = {
        'background-image': `url(${props.src})`,
        'padding-bottom': `100%`,
        ...mediaSize
      }

      const [colorName, colorModifier] = props.titleColor.toString().trim().split(' ', 2)
      const titleClass = {
        'b-el-title': true,
        [`${colorName}--text`]: true,
        [`text--${colorModifier}`]: true
      }

      return (
        <div class="b-card--header--media">
          <div style={style}>
            <div class={titleClass}>
              <h1 class={isShadow}>{props.title}</h1>
            </div>
          </div>
        </div>
      )
    } else {
      const data = {
        style: {},
        class: {
          'b-card--header': true
        }
      }
      return (
        <div {...data}>
          <h1 class={isShadow}>{props.title}</h1>
        </div>
      )
    }
  }
}
</script>

<style lang="stylus">

</style>
