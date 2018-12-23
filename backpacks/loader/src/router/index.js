import Vue from 'vue'
import VueRouter from 'vue-router'

import {
  get,
  updateAppData
} from '../utils'

Vue.use(VueRouter)

const initRouter = async (conf, { appView, appName }) => {
  const router = new VueRouter({
    ...conf
  })

  // hooks
  router.beforeEach(async (to, from, next) => {
    const data = get(to.fullPath, to.query,
      {
        headers: {
          [`X-${appName}-Type`]: 'json-only'
        }
      })

    await updateAppData(appView, data)
  })

  return router
}

export { initRouter }
