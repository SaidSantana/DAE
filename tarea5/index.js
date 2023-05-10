const express = require('express');
const rutas=require('./rutas');
const apiRoutes=require('./src/rutas');
const mongoose= require('mongoose');
require("dotenv").config();

const swaggerJsDoc= require('swagger-jsdoc');
const swaggerUI= require('swagger-ui-express');
const swaggerOptions= require('./swagger.config');

const port= process.env.PORT || 3000;
const app=express();

const mongoUrl= process.env.MONGO_URL;

const swaggerDocs= swaggerJsDoc(swaggerOptions);
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

rutas(app);
app.use('',apiRoutes);

mongoose.connect(mongoUrl).then(()=>{
    console.log('Se conecto correctamente a la base de datos');
    app.listen(port,()=> {
        console.log('app is running in port ' + port);
    }); 
}).catch(err =>{
    console.log('No se pudo conectar a la base de datos');
});


app.get("*", function (req, res) {
    res.status(404).send("Pagina no encontrada");
});

