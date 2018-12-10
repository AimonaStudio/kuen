import Vue from 'vue'
import { initComponents } from './components'
import { initRouter } from './router'
import { initStore } from './store'
import '@kuen/components/dist/kuen.css'

function startApp (conf) {
  initComponents(Vue)
  const store = initStore(conf.store)
  const router = initRouter(conf.router)
  const Kuen = new Vue({
    data: () => ({ isLoaded: document.readyState === 'complete' }),
    render: h => h(conf.appView),
    store,
    router
  }).$mount(conf.appName || '#app')

  Kuen.isLoaded || window.addEventListener('load', () => {
    Kuen.isLoaded = true
    console.log('Kuen App loaded')
  })
}

export { startApp }
