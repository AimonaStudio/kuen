function isCssColor (color) {
  return !!color && !!color.match(/^(#|(rgb|hsl)a?\()/)
}

export default {
  name: 'colorable',

  props: {
    color: { type: String, required: true }
  },

  methods: {
    setBackgroundColor (color, data) {
      if (isCssColor(color)) {
        data['background-color'] = `${color}`
        data['border-color'] = `${color}`
      } else {
        data[color] = true
      }
      return data
    },

    setTextColor (color, data) {
      // TODO
    }
  }
}
