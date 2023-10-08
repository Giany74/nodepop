const express = require('express');
const router = express.Router();
const Anuncio = require('../../models/Anuncio');

// GET api/anuncios -> devuelve lista de agentes
router.get('/', async (req, res, next) => {

    try {
        const anuncios = await Anuncio.find();

        // throw new Error('fallo forzado');

        res.json({ results: anuncios }) 
    } catch (err) {
        next(err);
    }
});

// GET /api/anuncios/(_id)
router.get('/:id', async (req,res,next) => {
    try {
        const id = req.params.id;

        const anuncio = await Anuncio.findById(id);

        res.json({ result: anuncio});
    } catch (err) {
        next(err);
    }
});

// PUT /api/anuncios/(_id) -> actualiza un agente

router.put('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;

        const anuncioActuaizado = await Anuncio.findByIdAndUpdate(id, data, { new: true });

        res.json({ result: anuncioActuaizado });

    } catch (err) {
        next(err);
    }
})

// POST 7api/anuncios/ -> crea un agente con body

router.post('/', async (req, res, next) => {
    try {
      const anuncioData = req.body;
  
      // creamos una instancia de agente en memoria
      const anuncio = new Anuncio(anuncioData);
  
      // la persistimos en la BD
      const anuncioGuardado = await anuncio.save();
  
      res.json({ result: anuncioGuardado });
  
    } catch (err) {
      next(err);
    }
  });


// DELETE /api/agentes/(_id)
// Elimina un agente
router.delete('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
  
      await Anuncio.deleteOne({ _id: id });
  
      res.json();
    } catch (err) {
      next(err);
    }
  })

module.exports = router