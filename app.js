const express = require('express')
const app = express()
const path = require('path');
const index = require('./routes/index.js');

// Archivos estaticos
app.use(express.static('public'));

// Carpeta de las vistas
app.set('views', path.join(__dirname, './views'))

// Archivo de las rutas
app.use('/', index);

// Servidor y puerto
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
    console.log('El servidor esta funcionando');
});