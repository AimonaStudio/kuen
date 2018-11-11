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
      if (isCssColor(color)) {
        data['color'] = `${color}`
        data['caret-color'] = `${color}`
      } else if (color) {
        const [colorName, colorModifier] = color.toString().trim().split(' ', 2)
        data[`${colorName}--text`] = true
        if (colorModifier) {
          data.class[`text--${colorModifier}`] = true
        }
      }
      return data
    }
  }
}
