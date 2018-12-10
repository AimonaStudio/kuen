import routeConf from './router'
import App from './App.vue'
import { startApp } from '../backpacks/loader/src'

startApp({
  routerConf: routeConf,
  appView: App
})
