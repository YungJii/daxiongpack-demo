const baseURL = process.env.NUXT_APP_BASE_URL || '/';

export default defineNuxtConfig({
  compatibilityDate: '2026-07-23',
  devtools: { enabled: false },
  experimental: {
    payloadExtraction: false,
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      demoMode: false,
    },
  },
  app: {
    baseURL,
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'theme-color', content: '#f3b900' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: `${baseURL}media/logo.png` },
        { rel: 'preload', as: 'image', href: `${baseURL}media/printing.png` },
      ],
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/aboutus.html', '/products.html', '/Support.html', '/news.html'],
    },
  },
  routeRules: {
    '/**': { static: true },
  },
});
