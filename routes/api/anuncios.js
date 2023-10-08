const express = require('express');
const router = express.Router();
const Anuncio = require('../../models/Anuncio');

// GET api/anuncios -> devuelve lista de agentes
router.get('/', async (req, res, next) => {

    try {
      // http://localhost:3000/api/anuncios?name=Taladro
      const filterByName = req.query.name;
      // http://localhost:3000/api/anuncios?buySell=busqueda
      // http://localhost:3000/api/anuncios?buySell=venta
      const filterBybuySell = req.query.buySell;
      // http://localhost:3000/api/anuncios?tags=motor
      const filterBytag = req.query.tags;
      //  http://localhost:3000/api/anuncios?price=50 -> sin rango de precio
      const filterByprice = req.query.price;
      // http://localhost:3000/api/anuncios?skip=2
      const skip = req.query.skip;
      // http://localhost:3000/api/anuncios?skip=0&limit=1
      const limit = req.query.limit;
      // http://localhost:3000/api/anuncios?fields=tags%20-_id
      const fields = req.query.fields;

      const filtro = {};

      if (filterByName) {
        filtro.name = filterByName;
      }

      if (filterBybuySell) {
        filtro.buySell = filterBybuySell;
      }

      if (filterBytag) {
        filtro.tags = filterBytag;
      }

      if (filterByprice) {
        filtro.price = filterByprice;
      }

        const anuncios = await Anuncio.lista(filtro, skip, limit, fields);

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

// POST api/anuncios/ -> crea un agente con body

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