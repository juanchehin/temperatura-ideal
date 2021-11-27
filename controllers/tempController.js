const path = require('path');
const axios = require('axios');

exports.index = function(req, res, next) {
    console.log("pasa index");

    res.sendFile(path.join(__dirname + '/../views/pages/index.html'));
};

exports.buscarTemperatura = function(req, res, next) {
    console.log("pasa obtenerTemperatura");

    // console.log("req es : ", req.params);

    // var url = 'http://api.openweathermap.org/data/2.5/weather';
    var urlHarcodeado = 'http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=c53be32b7bfe4bdf45b05c02e8e5a5ab';

    axios.get(urlHarcodeado)
        .then(function(response) {
            // handle success
            console.log(response);
        })
        .catch(function(error) {
            // handle error
            console.log(error);
        })
        .then(function() {
            // always executed
        });

};