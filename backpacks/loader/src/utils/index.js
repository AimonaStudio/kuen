import axios from 'axios'

export function get (url, data, ...conf) {
  axios.get(url, { data: { data }, conf })
}

export function post (url, query, ...conf) {
  axios.post(url, query, conf)
}

export function updateAppData (appView, data) {
  // todo
  appView.$props.data = data
}
