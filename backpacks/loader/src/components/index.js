// eslint-disable-next-line
import Vue from 'vue'

const initComponents = (Vue) => {
  const components = require('@kuen/components')
  for (const key in components) {
    const component = components[key]
    Vue.component(key, component)
  }
}

export { initComponents }
