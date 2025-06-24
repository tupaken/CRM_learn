export default {
  // falls du @nuxtjs/axios einsetzt
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: process.env.API_BASE_URL || 'http://localhost:3333',
  },
  publicRuntimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3333',
  },
  server: {
    host: '0.0.0.0',
    port: 8000,
  },
}
