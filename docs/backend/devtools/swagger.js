const swaggerJsdoc = require('swagger-jsdoc')

const options = {
  swaggerDefinition: {
    info: {
      title: 'Meine API',
      version: '1.0.0',
      description: 'API-Dokumentation mit Swagger (AdonisJS 4.1)',
    },
    basePath: '/',
  },
  apis: ['./start/routes.js'], // oder andere Pfade zu deinen Routen/Controllern
}

module.exports = swaggerJsdoc(options)
