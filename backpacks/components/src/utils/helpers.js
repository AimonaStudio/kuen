import isArray from 'lodash/isArray'

export function convertToUnit (str, unit = 'px') {
  if (str == null || str === '') {
    return undefined
  } else if (isNaN(str)) {
    return String(str)
  } else {
    return `${Number(str)}${unit}`
  }
}
export function isMediaElement (VNode) {
  if (!VNode) {
    return false
  } else if (isArray(VNode)) {
    return VNode[0].tag === 'img'
  } else {
    return VNode.tag === 'img' // todo
  }
}
