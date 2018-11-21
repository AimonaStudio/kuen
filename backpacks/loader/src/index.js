import Vue from 'vue'
import route from './router'
import components from '@kuen/components'
import __KUEN__ from '../package'

const Kuen = {
  install: (Vue, args) => {
    Vue.use({
      components,
      route,
      ...args.components
    })
  },
  version: __KUEN__.version
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Kuen)
}

export default Kuen
