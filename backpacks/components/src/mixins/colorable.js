import { isCssColor, setBackgroundColor, setTextColor } from '../utils/colorUtils'

export default {
  name: 'colorable',

  props: {
    color: { type: String, default: undefined },
    backgroundColor: { type: String, default: undefined }
  },

  methods: { isCssColor, setBackgroundColor, setTextColor }
}
