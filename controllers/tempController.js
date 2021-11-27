const path = require('path');
const axios = require('axios');
require('dotenv').config();
const Swal = require('sweetalert2')


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

    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
    })

    axios.get(url)
        .then(function(response) {
            // handle success
            // console.log("respuesta es : ", response);
        })
        .catch(function(error) {})
        .then(function() {
            // always executed
        });


};