import Kuen from '@kuen/components/src/module.js'
import { KUEN_DEFAULT_THEME } from './shared'

export function genComponentStyles (components = Kuen, theme = KUEN_DEFAULT_THEME, minify = true) {
  const endl = minify ? '' : '\n'
  let css = ''

  const genStyles = (name) => {
    let styl = ''
    for (const key in theme) {
      const color = theme[key]
      styl = `${styl}.${name}.${key}{background-color:${color}!important;}${endl}`
    }
    return styl
  }

  components.forEach(item => {
    const name = item.name
    css = `${css}${genStyles(name)}`
  })

  return css
}
