const pkg = require('./package')
const path = require('path')

module.exports = {
  server: {
    host: '127.0.0.1',
    port: '3000'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'inoongt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      const alias = (config.resolve.alias = config.resolve.alias || {})
      alias['scss'] = path.resolve(__dirname, 'assets/scss')
    }
  },

  axios: {
    proxy: true, // 表示开启代理
    credentials: true // 表示跨域请求时是否需要使用凭证
  },
  // 代理请求
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:3333', // 目标接口
      pathRewrite: {
        changeOrigin: true // 表示是否跨域
      }
    }
  }
}
