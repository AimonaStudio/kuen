// eslint-disable-next-line
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const initStore = (conf) => {
  const store = new Vuex.Store({
    ...conf
  })
  return store
}

export { initStore }
