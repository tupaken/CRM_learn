export default {
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true,
  },
  proxy: {
    '/api/': {
      target: 'http://erp-backend:3333',
      pathRewrite: { '^/api/': '/api/' },
      changeOrigin: true
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8000,
  },
}
