module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - WHCS Radio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'WHCS Radio website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/styles/main.sass', lang: 'sass' }
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT & STYLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(scss|vue)$/,
        //   loader: 'stylefmt-loader',
        //   exclude: /(node_modules)/,
        //   query: { config: '.stylelintrc' }
        // })
      }
    },
    vendor: ['vue-howler']
  },
  router: {
    linkActiveClass: 'is-active'
  }
}
