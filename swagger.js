const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'News API',
      version: '1.0.0',
      description: 'API for managing news',
    },
  },
  apis: ['./routes/*.js'], // Rutas de tu API
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
