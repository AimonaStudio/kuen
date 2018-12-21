import Vue from 'vue'
import VueMeta from 'vue-meta'
import { initComponents } from './components'
import { initRouter } from './router'
import { initStore } from './store'
import { get, post } from './utils'
import { KUEN_DEFAULT_THEME } from './utils/shared'
import '@kuen/components/dist/kuen.css'

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
    appName = 'Kuen',
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
  });

  // todo: abstract a new function
  // tag: load node packages
  (() => {
    Vue.use(VueMeta, {
      keyName: 'kuenInfo',
      attribute: 'data-kuen-meta'
    })
  })()
  const mixinData = (app) => {
    // todo
  }

  const Kuen = new Vue({
    el: '#app',

    name: appName,

    mixins: [Appable({
      ...appConf, theme
    })],

    props: {
      currentData: { type: Object, default: undefined },
      currentUser: { type: Object, default: undefined }
    },

    data: () => ({
      isLoaded: document.readyState === 'complete'
    }),

    render: h => h(conf.appView),
    store,
    router
  })

  mixinData(Kuen)

  Kuen.isLoaded || window.addEventListener('load', () => {
    Kuen.isLoaded = true
    console.log('Kuen App loaded')
  })
}

export { startApp }
