const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 4000;

const cors = require('cors');

app.use(cors()); // Permitir todas las solicitudes durante el desarrollo

// Conexión a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/local');

// Definir esquemas y modelos de MongoDB aquí
const newsSchema = new mongoose.Schema({
  id: Number,
  data: {
    title: String,
    text: String,
    type: String,
    author: String,
    date: {
      type: Date,
      default: Date.now, 
    },
  }
});

const NewsList = mongoose.model('news_notes', newsSchema);

app.get('/news', async (req, res) => {
  try {
    let query = {};

    // Filtrar por autor si se llega
    if (req.query.author) {
      query['data.author'] = req.query.author;
    }

    // Filtrar por tipo si se llega
    if (req.query.type) {
      query['data.type'] = req.query.type;
    }

    // Ordenar por fecha descendente si llega el parámetro
    const sortBy = req.query.sortBy || 'date';
    const sortOrder = req.query.sortOrder === 'asc' ? 1 : -1;

    const news = await NewsList.find(query).sort({ [sortBy]: sortOrder });
    res.json(news);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
});



// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
