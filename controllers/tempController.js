const path = require('path');
const axios = require('axios');
require('dotenv').config();

exports.index = function(req, res, next) {
    console.log("pasa index");

    res.sendFile(path.join(__dirname + '/../views/pages/index.html'));
};

exports.buscarTemperatura = function(req, res) {

    ciudad = req.params.q;
    API_KEY = process.env.API_KEY;
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}`;

    axios.get(url)
        .then(function(response) {
            // handle success
            temperatura = response.data.main.temp;
            temperaturaGrados = temperatura - 273 - 12; // Temperatura en grados y con 12° de diferencia que en el ambiente
            temperaturaGrados = Math.trunc(temperaturaGrados);
            res.json({ respuesta: temperaturaGrados })
        })
        .catch(function(error) {
            res.send('error');
        })
        .then(function() {
            // always executed
        });


};