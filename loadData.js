// loadData.js
const mongoose = require('mongoose');
const Article = require('./models/article');
const defaultData = require('./scriptmongo.json');

async function loadData() {
  try {
    // Conectarse a la base de datos
    await mongoose.connect('mongodb://127.0.0.1:27017/local');

    // Convertir fechas al formato de objeto Date
    const convertedData = defaultData.map(item => {
      return {
        ...item,
        date: new Date(item.date.$date),
      };
    });

    // Insertar datos en la base de datos
    await Article.insertMany(convertedData);

    console.log('Datos cargados con éxito.');
  } catch (error) {
    console.error('Error al cargar datos:', error);
  } finally {
    // Desconectar de la base de datos al finalizar
    await mongoose.disconnect();
  }
}

// Llamada a la función para cargar los datos
loadData();
