import RouterConf from './router'
import App from './App.vue'
import { startApp } from '../backpacks/loader/src'

startApp({
  router: RouterConf,
  appView: App
})
