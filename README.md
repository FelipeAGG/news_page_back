# News Page Back

## Descripción
Este es un proyecto simple para una página de noticias con un backend construido utilizando Node.js v18, Express, y MongoDB. El servidor proporciona una API para obtener noticias almacenadas en una base de datos MongoDB local.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/news_page_back.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd news_page_back
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

## Configuración

Asegúrate de tener MongoDB instalado localmente y ejecutándose en `mongodb://127.0.0.1:27017/local`.

## Estructura del Proyecto

- **index.js**: El archivo principal que inicia el servidor Express y define la conexión a la base de datos.
  
- **loadData.js**: Un script para cargar datos de ejemplo en la base de datos MongoDB.

- **models/Article.js**: Define el esquema de datos para las noticias y exporta el modelo de artículo de la base de datos.

## Dependencias

- **body-parser**: Middleware para analizar el cuerpo de las solicitudes HTTP.
- **cors**: Middleware para habilitar el acceso a recursos desde cualquier origen.
- **express**: Marco de aplicación web para Node.js.
- **mongoose**: Biblioteca de modelado de objetos MongoDB para Node.js.

## Uso

1. Inicia el servidor:

   ```bash
   npm start
   ```

2. Accede a la API de noticias en [http://localhost:4000/news](http://localhost:4000/news).

## Cargar Datos de Ejemplo

Para cargar datos de ejemplo en la base de datos, ejecuta:

```bash
node loadData.js
```

Esto insertará datos de `scriptmongo.json` en la base de datos.

## Autor

- **Felipe Gallardo**

## Licencia

Este proyecto está bajo la Licencia ISC.

## Requisitos del Sistema

- Node.js v18
