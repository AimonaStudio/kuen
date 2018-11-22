// eslint-disable-next-line
import Vue from 'vue'
import { initComponents } from './components'
import { initRoute } from './router'
import { initStore } from './store'

// todo
const startApp = async (Vue, conf) => {
  initComponents(Vue)
  initStore({

  })
  initRoute({

  })
}

export { startApp }
