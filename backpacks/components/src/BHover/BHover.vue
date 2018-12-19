<script>
// mixins
import Toggleable from '../mixins/toggleable'

import isNil from 'lodash/isNil'

export default {
  name: 'b-hover',

  mixins: [Toggleable()],

  props: {
    disabled: { type: Boolean, default: false },
    delay: { type: Number, default: 0 },
    enter: { type: Function, default: undefined },
    leave: { type: Function, default: undefined }
  },

  data () {
    return {
      openTimeout: undefined,
      closeTimeout: undefined
    }
  },

  methods: {
    isNil,
    cleanHandle () {
      clearTimeout(this.openTimeout)
      clearTimeout(this.closeTimeout)
    },

    runHandle (type, cb) {
      this.cleanHandle()

      const delay = this.delay

      this[`${type}Timeout`] = setTimeout(cb, delay)
    },

    onMouseEnter () {
      this.cleanHandle()

      const fn = this.enter || (() => {
        this.isActive = true
      })
      this.runHandle('open', fn)
    },
    onMouseLeave () {
      this.cleanHandle()

      const fn = this.leave || (() => {
        this.isActive = false
      })
      this.runHandle('close', fn)
    }
  },

  render () {
    let ele
    if (this.$scopedSlots.default) {
      ele = this.$scopedSlots.default({ hover: this.isActive })
    } else if (this.$slots.default.length > 1) {
      console.error(`ERROR ${this.name} should have only one child.`)
    } else {
      ele = this.$slots.default[0]
    }

    if (isNil(ele)) {
      console.error(`ERROR ${this.name} have no child.`)
      return (<div></div>)
    }

    this._g(ele.data, {
      mouseenter: this.onMouseEnter,
      mouseleave: this.onMouseLeave
    })
    return (ele)
  }
}
</script>

<style lang="stylus" src="./BHover.styl"></style>
