// global
import Vue from 'vue'
// local
import routerConf from './router'
import App from './App.vue'
import { startApp } from '../backpacks/loader/src'
import Kuen from '../backpacks/components/src'

Vue.use(Kuen)

startApp({
  routerConf: routerConf,
  appView: App,
  appConf: {
    minify: false
  }
})
