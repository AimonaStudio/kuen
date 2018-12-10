import Vue from 'vue'
import { initComponents } from './components'
import { initRouter } from './router'
import { initStore } from './store'
import { get, post } from './utils'
import { KUEN_DEFAULT_THEME } from './utils/shared'
import '@kuen/components/src/stylus/app.styl'

import Appable from './app'

const setup = async function (fns = {}) {
  for (const name in fns) {
    const fn = fns[name]
    Vue.prototype[`$${name}`] = fn
  }
}

const startApp = async conf => {
  const {
    storeConf = {},
    routerConf = {},
    appConf = {
      scpNonce: 'himself65'
    },
    methods = {},
    appName = 'app',
    theme = KUEN_DEFAULT_THEME,
    globalConf
  } = conf

  initComponents({
    theme: theme,
    conf: globalConf
  })

  const store = await initStore(storeConf)
  const router = await initRouter(routerConf)
  await setup({
    'get': get,
    'post': post,
    ...methods
  })

  const Kuen = new Vue({
    name: `Kuen`,

    mixins: [Appable({
      ...appConf, theme
    })],

    data: () => ({
      isLoaded: document.readyState === 'complete'
    }),

    render: h => h(conf.appView),
    store,
    router
  }).$mount(`#${appName}`)

  Kuen.isLoaded || window.addEventListener('load', () => {
    Kuen.isLoaded = true
    console.log('Kuen App loaded')
  })
}

export { startApp }
