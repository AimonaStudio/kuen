<script>
// todo: dynamic add staticClass to class or style, and maybe it's a wrong design (x
// import { setTextColor } from '../utils/colorUtils'
import { getSizeKey } from '../utils/componentsUtils'
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
  render (_, { data, props, children }) {
    const sizeTemplate = {
      'xLarge': 'calc(1/3*100%)',
      'large': 'calc(1/5*100%)',
      'medium': 'calc(1/7*100%)',
      'small': 'calc(1/10*100%)',
      'size': `${convertToUnit(props.size)})`
    }

    const isShadow = {
      'elevation--text-1': props.titleShadow
    }

    if (props.src) {
      const mediaSize = sizeTemplate[getSizeKey(props)]

      const style = {
        'background-image': `url(${props.src})`,
        'padding-bottom': `${mediaSize}`
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
