import Vue from 'vue'
import App from './dev/App.vue'
import VueRouter from 'vue-router'

import router from './dev/router'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
