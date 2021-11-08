export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      'data-theme': 'light'
    },
    target: 'server',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './styles/index.pcss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-carousel.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/apollo'

  ],
  apollo: {
    tokenName: 'nuxt-apollo', // specify token name
    cookieAttributes: {
      expires: 7 // optional, default: 7 (days)
    },
    defaultOptions: {
      $query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all'
      }
    },
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BASE_URL
      }
    }
  },
  axios: {
    proxy: true,
    proxyHeaders: false,
    credentials: false,
    headers: { 'Access-Control-Allow-Origin': '*' },
    baseURL: 'http://proxy_nginx',
    browserBaseURL: 'http://localhost'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: process.env.NODE_ENV === 'production',
    postcss: {
      plugins: {
        'postcss-nested': {},
        autoprefixer: {}
      }
    }
  }

}
