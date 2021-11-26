const express = require('express')
const app = express()
const path = require('path');

app.get('/', (req, res) => {
    // res.sendFile('./views/pages/index.html');
    console.log('dirname es : ', __dirname);
    res.sendFile(path.join(__dirname + '/views/pages/index.html'));
})

// Servidor y puerto
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
    console.log('El servidor esta funcionando');
});