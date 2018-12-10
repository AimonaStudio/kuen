import routerConf from './router'
import App from './App.vue'
import { startApp } from '../backpacks/loader/src'

startApp({
  routerConf: routerConf,
  appView: App
})
