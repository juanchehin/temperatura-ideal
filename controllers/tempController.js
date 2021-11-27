const path = require('path');

exports.index = function(req, res, next) {
    console.log("pasa index");

    res.sendFile(path.join(__dirname + '/../views/pages/index.html'));
};

exports.buscarTemperatura = function(req, res, next) {
    console.log("pasa obtenerTemperatura");

    console.log("req es : ", req.params);


};