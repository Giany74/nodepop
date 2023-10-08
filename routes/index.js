const express = require('express');
const router = express.Router();
const axios = require('axios');

// Ruta para la página inicial
router.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://127.0.0.1:3000/api/anuncios'); // Reemplaza con la URL correcta de la API
    console.log(response.data)
    const data = response.data; // Obtiene los datos de la respuesta

    res.render('index', { data: data }); // Pasa los datos al archivo index.ejs
  } catch (error) {
    console.error('Error al obtener los datos de la API:', error);
    res.status(500).send('Error al obtener los datos de la API');
  }
});

module.exports = router;