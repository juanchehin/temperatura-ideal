const express = require('express');
const router = express.Router();

// Importar el controlador
const tempController = require('../controllers/tempController');

// Ruta principal - index
router.get('/',
    tempController.index
);

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname + '/views/pages/index.html'));
// })

module.exports = router;