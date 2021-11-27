const path = require('path');
const axios = require('axios');
require('dotenv').config();

exports.index = function(req, res, next) {
    console.log("pasa index");

    res.sendFile(path.join(__dirname + '/../views/pages/index.html'));
};

exports.buscarTemperatura = function(req, res, next) {
    console.log("pasa obtenerTemperatura");

    console.log("req es : ", req.params);

    ciudad = req.params.q;
    API_KEY = process.env.API_KEY;
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}`;

    axios.get(url)
        .then(function(response) {
            // handle success
            console.log("respuesta es : ", response.data.main.temp);
            // res.send('ok');
            console.log("entra then : ");
            // res.statusText('Actualizado');
            res.json({ respuesta: response.data.main.temp }) // Restar 273.15 para obtener la temperatura en grados centigrados

        })
        .catch(function(error) {
            console.log("entra catch : ");
            res.send('error');
        })
        .then(function() {
            // always executed
        });


};