import Card from './card'

const components = {
  Card: Card
}

const bff = {
  ...components
}

const install = function (Vue, opts = {}) {
  if (install.installed) return
  Object.keys(bff).forEach(key => {
    Vue.component(key, bff[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  install: install,
  ...components
}

module.exports.default = module.exports = API
