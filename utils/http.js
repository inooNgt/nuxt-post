import axios from 'axios'
import config from '~/utils/config'
import APIMAP from '~/utils/apimap'
import Qs from 'qs'

const http = options => {
  options = setHeaders('', options)

  return axios(options)
}

const get = (url, options, fromServer = false) => {
  options = setHeaders(url, options)

  if (fromServer) {
    url = config.host + url
  }
  console.log('url', url, fromServer)
  return axios.get(url, options)
}

const del = (url, options, fromServer = false) => {
  options = setHeaders(url, options)
  if (fromServer) {
    url = config.host + url
  }

  return axios.delete(url, options)
}

const post = (url, data, options, fromServer = false) => {
  options = setHeaders(url, options)
  if (fromServer) {
    url = config.host + url
  }

  let disableQs =
    options &&
    options.headers &&
    options.headers['Content-Type'] === 'image/png'

  if (typeof data === 'object' && !disableQs) data = Qs.stringify(data)

  return axios.post(url, data, options)
}

const serviceGet = (url, options) => {
  console.log('serviceGet', url)
  return get(url, options, true)
}
const serviceDel = (url, options) => {
  return del(url, options, true)
}
const servicePost = (url, data, options) => {
  return post(url, data, options, true)
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

const servive = { get: serviceGet, del: serviceDel, post: servicePost }

export { http, get, post, del, servive }
