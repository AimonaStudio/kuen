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

const mediaElementTag = ['img', 'video', 'b-video', 'b-image', 'b-media']

export function isMediaElement (VNode) {
  if (!VNode) {
    return false
  } else if (isArray(VNode) && VNode.length === 1) {
    return mediaElementTag.indexOf(VNode[0].tag) !== -1
  } else {
    return mediaElementTag.indexOf(VNode.tag) !== -1 // todo
  }
}
