const express = require('express');

// Archivos de rutas para sección usuarios
const usersR = require('./usersR.js');
const commentsR = require('./commentsR.js');

function routerApi(app) {
    const router = express.Router(); // Indicamos el uso de express router
    app.use('/wapi/dev', router); // Parte de la ruta para entorno dev
    router.use('/usens', usersR); // Parte de la ruta para sección usuarios
    router.use('/comments', commentsR); // Parte de la ruta para sección comentarios
}

// Exportamos la función para usarla donde sea necesario
module.exports = routerApi;


