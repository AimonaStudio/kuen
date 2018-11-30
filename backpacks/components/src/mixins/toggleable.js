export default function Toggleable (prop = 'value', event = 'input') {
  return {
    name: 'Toggleable',

    model: { prop, event },

    props: {
      [prop]: { type: Boolean, default: false }
    },

    data () {
      return {
        isActive: this[prop]
      }
    },

    watch: {
      [prop] (val) {
        this.isActive = val
      },
      isActive (val) {
        val !== this[prop] && this.$emit(event, val)
      }
    }
  }
}
