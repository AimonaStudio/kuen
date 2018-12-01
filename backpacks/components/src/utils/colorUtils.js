export function isCssColor (color) {
  return !!color && !!color.match(/^(#|(rgb|hsl)a?\()/)
}

export function setBackgroundColor (color, data = {}, styleField = 'style', classField = 'class') {
  if (isCssColor(color)) {
    data[styleField] = {
      ...data[styleField],
      'background-color': `${color}`,
      'border-color': `${color}`
    }
  } else if (color) {
    data[classField] = {
      ...data[classField],
      [color]: true
    }
  }

  return data
}

export function setTextColor (color, data, styleField = 'style', classField = 'class') {
  if (isCssColor(color)) {
    data[styleField] = {
      ...data[styleField],
      'color': `${color}`,
      'caret-color': `${color}`
    }
  } else if (color) {
    const [colorName, colorModifier] = color.toString().trim().split(' ', 2)
    data[classField] = {
      ...data[classField],
      [colorName + '--text']: true
    }
    if (colorModifier) {
      data[classField]['text--' + colorModifier] = true
    }
  }
  return data
}
