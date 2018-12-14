import BCard from './BCard.vue'
import BCardHeader from './BCardHeader.vue'
import BCardFooter from './BCardFooter.vue'
import BCardBody from './BCardBody.vue'

export default Vue => {
  Vue.component(BCard.name, BCard)
  Vue.component(BCardHeader.name, BCardHeader)
  Vue.component(BCardFooter.name, BCardFooter)
  Vue.component(BCardBody.name, BCardBody)
}
