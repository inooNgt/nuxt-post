console.log('NODE_ENV:', process.env.NODE_ENV)
const isProd = process.env.NODE_ENV === 'production'
const config = {
  // 发送到nuxt代理
  host: isProd ? 'http://inoongt.tech' : 'http://127.0.0.1:3000',
  keys: {
    token: 'app.login.token'
  }
}

export default config
