import Vue from 'vue'

const initComponents = (conf) => {
  const { theme, config } = conf
  Vue.prototype.$kuenGetTheme = theme
  Vue.prototype.$kuenGetConfig = config
}

export { initComponents }
