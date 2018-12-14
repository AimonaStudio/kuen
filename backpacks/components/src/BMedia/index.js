import BImage from './BImage'
import BVideo from './BVideo'
import BMedia from './BMedia.vue'

export default Vue => {
  Vue.component(BImage.name, BImage)
  Vue.component(BVideo.name, BVideo)
  Vue.component(BMedia.name, BMedia)
}
