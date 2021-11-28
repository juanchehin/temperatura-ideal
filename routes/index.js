const express = require('express');
const router = express.Router();

// Importar el controlador
const tempController = require('../controllers/tempController');

// Ruta principal - index
router.get('/',
    tempController.index
);

// 
router.post('/buscar-temperatura/:q',
    tempController.buscarTemperatura
);

module.exports = router;