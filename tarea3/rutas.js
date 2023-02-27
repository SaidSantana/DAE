const path = require('path');
const express = require('express');

module.exports = function (app) {

    app.use('/output', express.static(path.join(__dirname, 'output')))

    app.get("/", function (req, res) {
        res.render('inicio', {
            nombre: 'Said Gabriel Santana García'
        });
    });

}