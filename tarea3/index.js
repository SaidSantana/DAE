const express = require('express');
const routes = require('./src/rutas')
const rutas = require('./rutas');

const { engine } = require('express-handlebars');

const port= 3000;
const app=express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

rutas(app);
app.use('', routes);

app.get("*", function (req, res) {
    res.status(404).send("Pagina no encontrada");
}
);

app.listen(port,()=> {
    console.log('app is running in port ' + port);
}); 

