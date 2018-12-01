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
