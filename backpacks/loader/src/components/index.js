import Vue from 'vue'
import Kuen from '@kuen/components'

const initComponents = (conf) => {
  const { theme, config } = conf
  Vue.prototype.$kuenGetTheme = theme
  Vue.prototype.$kuenGetConfig = config
  Vue.use(Kuen)
}

export { initComponents }
