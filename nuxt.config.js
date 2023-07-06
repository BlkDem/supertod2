export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Umolab Supertod (BlkDem)',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description',
          content: 'Supertod, SuperTOD II, SuperTOD III, купить супертод, купить супертод 2, купить супертод 3, купить супертод дешево' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/apple-icon-57x57.png', size: '57x57' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/apple-icon-60x60.png', size: '60x60' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/apple-icon-72x72.png', size: '72x72' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/apple-icon-76x76.png', size: '76x76' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/apple-icon-114x114.png', size: '114x114' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/apple-icon-120x120.png', size: '120x120' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/apple-icon-144x144.png', size: '144x144' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/apple-icon-152x152.png', size: '152x152' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/apple-icon-180x180.png', size: '180x180' },
      { rel: 'icon', type: 'image/png', href: '/android-icon-192x192.png', size: '192x192' },
      { rel: 'icon', type: 'image/png', href: '/android-icon-144x144.png', size: '144x144' },
      { rel: 'icon', type: 'image/png', href: '/android-icon-96x96.png', size: '96x96' },
      { rel: 'icon', type: 'image/png', href: '/android-icon-72x72.png', size: '72x72' },
      { rel: 'icon', type: 'image/png', href: '/android-icon-48x48.png', size: '48x48' },
      { rel: 'icon', type: 'image/png', href: '/ms-icon-70x70.png', size: '70x70' },
      { rel: 'icon', type: 'image/png', href: '/ms-icon-144x144.png', size: '144x144' },
      { rel: 'icon', type: 'image/png', href: '/ms-icon-150x150.png', size: '150x150' },
      { rel: 'icon', type: 'image/png', href: '/ms-icon-310x310.png', size: '310x310' },
      { rel: 'manifest', href: '/manifest.json'},

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '@fortawesome/fontawesome-svg-core/styles.css',
    '@assets/css/app.scss',
    '@assets/css/consts.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/fontawesome.js'
    '~/plugins/axios.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/robots',
    '@nuxtjs/proxy',
  ],

  axios: {
    proxy: true
  },

  proxy: {
    '/api/': { target: 'https://iotman.blkdem.ru/', pathRewrite: {'^/api/': ''}, changeOrigin: true }
  },

  bootstrapVue: {
    icons: true
  },

  styleResources: {
    scss: [
        '~/assets/css/consts.scss',
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
