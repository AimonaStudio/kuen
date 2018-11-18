function isCssColor (color) {
  return !!color && !!color.match(/^(#|(rgb|hsl)a?\()/)
}

export default {
  name: 'colorable',

  props: {
    color: { type: String, default: undefined }
  },

  methods: {
    setBackgroundColor (color, data = {}) {
      if (isCssColor(color)) {
        data = {
          ...data,
          'background-color': `${color}`,
          'border-color': `${color}`
        }
      } else {
        data = {
          ...data,
          [color]: true
        }
      }
      return data
    },

    setTextColor (color, data) {
      if (isCssColor(color)) {
        data = {
          ...data,
          'color': `${color}`,
          'caret-color': `${color}`
        }
      } else if (color) {
        const [colorName, colorModifier] = color.toString().trim().split(' ', 2)
        data = {
          ...data,
          [`${colorName}--text`]: true
        }
        if (colorModifier) {
          data[`text--${colorModifier}`] = true
        }
      }
      return data
    }
  }
}
