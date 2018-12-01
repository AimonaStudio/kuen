import { isArray, isObjectLike } from 'lodash'

export function convertToUnit (str, unit = 'px') {
  if (str == null || str === '') {
    return undefined
  } else if (isNaN(str)) {
    return String(str)
  } else if (str < 0) {
    return undefined
  } else {
    return `${Number(str)}${unit}`
  }
}

const mediaElementTag = ['img', 'video', 'b-video', 'b-image', 'b-media']

/**
 *
 * @returns {boolean}
 * @param {*} VNodeLike is media element which have 'b-image', 'b-media'.etc
 */
export function isMediaElement (VNodeLike) {
  if (!VNodeLike) {
    return false
  } else if (isArray(VNodeLike) && VNodeLike.length === 1) {
    return mediaElementTag.indexOf(VNodeLike[0].tag) !== -1
  } else {
    return mediaElementTag.indexOf(VNodeLike.tag) !== -1 // todo
  }
}

/**
 *
 * @param {*} value The value to check.
 * @returns {boolean}
 */
export function onlyOneElement (value) {
  if (!isObjectLike(value)) {
    return false
  } else if (isArray(value)) {
    return value.length === 1
  } else {
    return true
  }
}
