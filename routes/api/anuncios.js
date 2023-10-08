const express = require('express');
const router = express.Router();
const Anuncio = require('../../models/Anuncio');

router.get('/', async (req, res, next) => {

    try {
        const anuncios = await Anuncio.find(); 
        res.json({ results: anuncios }) 
    } catch (err) {
        next(err);
    }
});

module.exports = router