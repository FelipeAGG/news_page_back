// routes/newsRoutes.js
const express = require('express');
const router = express.Router();

// Importar el modelo
const NewsList = require('../models/article');

/**
 * @swagger
 * /news:
 *   get:
 *     summary: Se obtiene un listado de noticias o articulos
 *     description: Se puede obtener un listado de noticias y articulos, permitiendo ordenar por diferentes atributos.
 *     parameters:
 *       - in: query
 *         name: author
 *         schema:
 *           type: string
 *         description: Filtra noticias por author.
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: Filtra noticias por type.
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: Se especifica el valor a filtrar (default 'date').
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *         description: Especifica el orden de la lista ('asc' ascending, 'desc' descending).
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 data:
 *                   title: "News Title"
 *                   text: "News content..."
 *                   type: "Breaking"
 *                   author: "John Doe"
 *                   date: "2023-11-25T12:00:00Z"
 *       500:
 *         description: Internal server error
 */
router.get('/', async (req, res) => {
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

module.exports = router;
