// eslint-disable-next-line
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const initRouter = async (conf) => {
  return new VueRouter({
    ...conf
  })
}

export { initRouter }
