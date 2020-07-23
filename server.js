
const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helper');

/**
 * Los middleware siempre se crean antes declarar lo siguiente
 */
app.use( express.static(__dirname + '/public' ) );

// Express HBS engine
// Using hbs as the default view engine requires just one line of code in your app setup. This will render .hbs files when res.render is called.
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


// Obtener puerto desde heroku
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {

  res.render('home', {
    nombre: 'seBastian bAlanta',
  });
});

app.get('/about', (req, res) => {

  res.render('about', {});
});
 
app.listen(port, ()=> {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});