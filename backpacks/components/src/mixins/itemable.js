import isString from 'lodash/isString'

export default function (name) {
  const mixin = {
    name: 'itemable'
  }

  if (!isString(name)) {
    console.error(`field name should be a String, but ${typeof name}.`)
    return {
      ...mixin
    }
  }

  return {
    ...mixin,

    props: {
      activeClass: { type: String, default: `b-${name}--active` },
      groupClasses: { type: Object, default: undefined }
    },

    data () {
      return {
        isActive: { type: Boolean, default: false }
      }
    },

    method: {
      toggle () {
        this.$emit('change')
      }
    }
  }
}
