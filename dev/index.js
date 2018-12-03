import Vue from 'vue'
import '../backpacks/components/src/stylus/app.styl'
import Kuen from '../backpacks/components/src'
import App from './App.vue'
import VueRouter from 'vue-router'

import router from './router'

Vue.use(VueRouter)

Vue.use(Kuen)

Vue.config.productionTip = false

const vm = new Vue({
  data: () => ({ isLoaded: document.readyState === 'complete' }),
  render: h => h(App),
  router
}).$mount('#app')

// Prevent layout jump while waiting for styles
vm.isLoaded || window.addEventListener('load', () => {
  vm.isLoaded = true
  console.log('Kuen DEV LOADED')
})
