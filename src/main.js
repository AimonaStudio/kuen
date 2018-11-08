import Vue from 'vue'
import '../backpacks/components/src/stylus/app.styl'
import App from './dev/App.vue'
import VueRouter from 'vue-router'

import router from './dev/router'

Vue.use(VueRouter)

const components = require('../backpacks/components/src/index')

// Registration
for (const key in components) {
  const component = components[key]
  Vue.component(key, component)
}

Vue.config.productionTip = false

const vm = new Vue({
  data: () => ({ isLoaded: document.readyState === 'complete' }),
  render: h => h(App),
  router
}).$mount('#app')

// Prevent layout jump while waiting for styles
vm.isLoaded || window.addEventListener('load', () => {
  vm.isLoaded = true
  console.log('BFF DEV LOADED')
})
