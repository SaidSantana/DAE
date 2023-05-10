const path=require('path');
const express = require('express');

module.exports = function (app) {
    app.get('/', function(req,res){
        res.status(200);
    });
    app.get("*", function (req, res) {
        res.status(404).send("Pagina no encontrada");
    });
}