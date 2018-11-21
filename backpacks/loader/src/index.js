// eslint-disable-next-line
import Vue from 'vue'
import { initComponents } from './components'
import { initRoute } from './router'
import { initStore } from './store'
import __KUEN__ from '../package'

const Kuen = {
  install: (Vue, args) => {
    initComponents(Vue)

    Vue.use({
      ...args
    })
  },
  version: __KUEN__.version
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Kuen)
}

// todo
const startApp = async (Vue, conf) => {
  initComponents(Vue)
  initStore({

  })
  initRoute({

  })
}

export { Kuen, startApp }
