const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

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
    const news = await NewsList.find({}, function(err, notas) {
      if (err) throw err;
      console.log(notas);
    });
    
    res.json(news);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
