<script>
// todo: dynamic add staticClass to class or style, and maybe it's a wrong design (x
// import { setTextColor } from '../utils/colorUtils'
import Titleable from '../mixins/titleable'

export default {
  name: 'BCardHeader',
  functional: true,
  mixins: [Titleable],
  props: {
    src: { type: String, default: undefined }
  },
  render (_, { data, props, children }) {
    if (props.src) {
      const style = {
        'background-image': `url(${props.src})`,
        'padding-bottom': '33.333%'
      }
      const [colorName, colorModifier] = props.titleColor.toString().trim().split(' ', 2)
      const titleClass = {
        'b-el-title': true,
        [`${colorName}--text`]: true,
        [`text--${colorModifier}`]: true
      }
      console.log(props)
      return (
        <div
          class="b-card--header--media"
        >
          <div style={style}>
            <div class={titleClass}>
              <h1 class={props.titleShadow ? 'elevation--text-1' : ''}>{props.title}</h1>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div class="b-card--header">
          {children}
        </div>
      )
    }
  }
}
</script>
