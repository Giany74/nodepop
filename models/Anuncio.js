const mongoose = require('mongoose');

const anuncioSchema = mongoose.Schema({
    name: { type: String, index: true },
    buySell: { type: String, index: true },
    price: { type: String },
    foto: String,
    tags: { type: [String], index: true }
}, {
    // collection: 'anuncios' // para forzar un nombre concreto de colección
});

// Tipos de métodos:
//  - Estático: método que está en el modelo (p.e. Agente.lista())
//  - De instancia: método que tienen las instancias (p.e. agente.saluda())
anuncioSchema.statics.lista = function(filtro, skip, limit, fields) {
  const query = Anuncio.find(filtro);
  query.skip(skip);
  query.limit(limit);
  query.select(fields);

  return query.exec();
}

const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;




