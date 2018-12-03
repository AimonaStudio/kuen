import BAvatar from './BAvatar'
import BBadge from './BBadge'
import BBlock from './BBlock'
import BButton from './BButton'
import BCard from './BCard'
import BHover from './BHover'
import BMedia from './BMedia'
import BProgress from './BProgress'
import BTag from './BTag'

const kuenComponents = {
  ...BAvatar,
  ...BBadge,
  ...BBlock,
  ...BButton,
  ...BCard,
  ...BHover,
  ...BMedia,
  ...BProgress,
  ...BTag
}

const Kuen = {
  install: (Vue, args) => {
    for (const key in kuenComponents) {
      const component = kuenComponents[key]
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
