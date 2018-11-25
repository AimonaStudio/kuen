function isCssColor (color) {
  return !!color && !!color.match(/^(#|(rgb|hsl)a?\()/)
}

export default {
  name: 'colorable',

  props: {
    color: { type: String, default: undefined },
    backgroundColor: { type: String, default: undefined }
  },

  methods: {
    setBackgroundColor (color, data = {}) {
      if (isCssColor(color)) {
        data.style = {
          ...data.style,
          'background-color': `${color}`,
          'border-color': `${color}`
        }
      } else if (color) {
        data.class = {
          ...data.class,
          [color]: true
        }
      }

      return data
    },

    setTextColor (color, data) {
      if (isCssColor(color)) {
        data.style = {
          ...data.style,
          'color': `${color}`,
          'caret-color': `${color}`
        }
      } else if (color) {
        const [colorName, colorModifier] = color.toString().trim().split(' ', 2)
        data.class = {
          ...data.class,
          [colorName + '--text']: true
        }
        if (colorModifier) {
          data.class['text--' + colorModifier] = true
        }
      }
      return data
    }
  }
}
