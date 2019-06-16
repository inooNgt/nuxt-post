const pkg = require('./package')
const path = require('path')

module.exports = {
  mode: 'universal',
  server: {
    host: '127.0.0.1'
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
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true
  },

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
  }
  // 已废弃，使用nginx代理
  // proxy: {
  //   '/api': {
  //     target: 'http://inoongt.tech/',
  //     changeOrigin: true
  //   }
  // }
}
