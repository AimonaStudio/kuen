import { isObjectLike } from 'lodash'

export function getSizeKey (props = this.$props) {
  if (!isObjectLike(props)) {
    return undefined
  }
  if (props.xLarge) {
    return 'xLarge'
  } else if (props.large) {
    return 'large'
  } else if (props.medium) {
    return 'medium'
  } else if (props.small) {
    return 'small'
  } else {
    return 'size'
  }
}
