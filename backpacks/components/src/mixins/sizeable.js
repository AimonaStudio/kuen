import { getSizeKey } from '../utils/componentsUtils'

export default {
  name: 'sizeable',

  props: {
    large: { type: Boolean, default: false },
    medium: { type: Boolean, default: false },
    size: { type: [Number, String], default: undefined },
    small: { type: Boolean, default: false },
    xLarge: { type: Boolean, default: false }
  },

  method: { getSizeKey }
}
