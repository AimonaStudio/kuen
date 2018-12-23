import Vue from 'vue'

export function initComponents (conf) {
  const { theme, config } = conf
  Vue.prototype.$kuenGetTheme = theme
  Vue.prototype.$kuenGetConfig = config
}
