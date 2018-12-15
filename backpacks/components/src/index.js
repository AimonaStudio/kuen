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

const kuenComponents = [
  BAvatar,
  BBadge,
  BBlock,
  BButton,
  BCard,
  BContainer,
  BFooter,
  BHeader,
  BHover,
  BMedia,
  BProgress,
  BTag,
  BText,

  BWidthWrap
]

const install = (Vue, opt = {}) => {
  Object.values(kuenComponents).forEach(component => {
    Vue.use(component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '__VERSION__',
  install
}
