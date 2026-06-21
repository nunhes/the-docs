export default defineNuxtConfig({
  extends: ['docus'],
  modules: ['@nuxtjs/i18n', 'nuxt-studio'],
  i18n: {
    defaultLocale: 'gl',
    locales: [{
      code: 'en',
      name: 'English',
    }, {
      code: 'gl',
      name: 'Galego',
    }, {
      code: 'es',
      name: 'Español',
    }],
  },
  llms: {
    domain: 'localhost',
  },
})