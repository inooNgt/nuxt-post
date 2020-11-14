import axios from 'axios'
import config from '~/utils/config'
import APIMAP from '~/utils/apimap'
import Qs from 'qs'

const instance = axios.create({
  baseURL: config.host
})

const get = (url, options) => {
  options = setHeaders(url, options)
  return instance.get(url, options)
}

const del = (url, options) => {
  options = setHeaders(url, options)
  return instance.delete(url, options)
}

const post = (url, data, options) => {
  options = setHeaders(url, options)
  let disableQs =
    options &&
    options.headers &&
    options.headers['Content-Type'] === 'image/png'

  if (typeof data === 'object' && !disableQs) data = Qs.stringify(data)
  return instance.post(url, data, options)
}

function setHeaders(url, options) {
  const isAuth = checkAuth(url)
  const token =
    typeof localStorage !== 'undefined' &&
    (localStorage.getItem(config.keys.token) || '').replace(/^"|"$/g, '')

  options = options || {}
  if (isAuth) {
    if (!options.headers) options.headers = {}
    options.headers = Object.assign(options.headers, {
      Authorization: 'Bearer ' + token
    })
  }
  return options
}

function checkAuth(url) {
  let result = false
  for (let key in APIMAP.auth) {
    if (APIMAP.auth[key] === url) {
      result = true
      break
    }
  }
  return result
}

export { get, post, del }
