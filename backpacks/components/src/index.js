import BAvatar from './BAvatar'
import BBadge from './BBadge'
import BBlock from './BBlock'
import BButton from './BButton'
import BCard from './BCard'
import BHover from './BHover'
import {
  BMedia,
  BImage,
  BVideo
} from './BMedia'
import {
  BProgress,
  BProgressLinear
} from './BProgress'
import BTag from './BTag'

const components = {
  BAvatar,
  BBadge,
  BBlock,
  BButton,
  BCard,
  BHover,
  BMedia,
  BImage,
  BVideo,
  BProgress,
  BProgressLinear,
  BTag
}

const Kuen = {
  install: (Vue, args) => {
    for (const key in components) {
      const component = components[key]
      Vue.component(key, component)
    }
    Vue.use({
      ...args
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Kuen)
}

export default Kuen
export { Kuen, components }
