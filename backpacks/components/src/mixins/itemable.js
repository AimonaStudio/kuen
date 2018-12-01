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
      isActive: { type: Boolean, default: false },
      groupClasses: { type: Object, default: undefined }
    },

    method: {
      toggle () {
        this.$emit('change')
      }
    }
  }
}
