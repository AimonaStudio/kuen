export default {
  name: 'routable',

  props: {
    to: { type: String | Object, default: undefined },
    disable: { type: Boolean, default: false },
    blank: { type: Boolean, default: false }
  },

  method: {
    createRouteLink (data) {
      // todo
      return data
    }
  }
}
