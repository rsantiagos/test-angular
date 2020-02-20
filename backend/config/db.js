const mongoose = require('mongoose');
const urlDB = require('./properties').DB;

module.exports = () => {
  mongoose.connect(urlDB, { useNewUrlParser: true })
    .then(() => console.log(`Mongo conectado en ${urlDB}`))
    .catch(err => console.log(`Ha ocurrido un error en la conexion ${err}`))

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log(`Mongo esta desconectado`);
      process.exit(0)
    });
  });
}