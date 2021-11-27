const path = require('path');

exports.index = function(req, res, next) {
    res.sendFile(path.join(__dirname + '/../views/pages/index.html'));
};