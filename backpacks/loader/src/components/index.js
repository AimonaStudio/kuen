import Vue from 'vue'
import Kuen from '@kuen/components'

const initComponents = () => {
  console.log(Kuen)
  Vue.use(Kuen)
}

export { initComponents }
