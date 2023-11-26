// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express();
const port = 4000;

app.use(cors());

// Conexión a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/local');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Importar y utilizar las rutas
const newsRoutes = require('./routes/newsRoutes');
app.use('/news', newsRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
