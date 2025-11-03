module.exports = {
  target: 'static',
  head: {
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0',
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lora',
      },
    ],
  },
  css: [
    'normalize.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/sass/base.sass',
  ],
  loading: '~/components/the-loader.vue',
  plugins: [
    '~/plugins/font-awesome-icon',
  ],
  build: {},
  generate: {
    fallback: true,
    routes: [
      '/',
    ],
  },
}
