import './stylus/app.styl'

import BAvatar from './BAvatar'
import BBadge from './BBadge'
import BBlock from './BBlock'
import BButton from './BButton'
import BCard from './BCard'
import BContainer from './BContainer'
import BFooter from './BFooter'
import BHeader from './BHeader'
import BHover from './BHover'
import BMedia from './BMedia'
import BProgress from './BProgress'
import BTag from './BTag'
import BText from './BText'

// layout part
import BWidthWrap from './Layout/BWidthWrap'

const kuenComponents = {
  ...BAvatar,
  ...BBadge,
  ...BBlock,
  ...BButton,
  ...BCard,
  ...BContainer,
  ...BFooter,
  ...BHeader,
  ...BHover,
  ...BMedia,
  ...BProgress,
  ...BTag,
  ...BText,

  ...BWidthWrap
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

export { kuenComponents }
