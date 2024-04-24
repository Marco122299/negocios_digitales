const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;


//Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.status(200).send({
        message: 'La ruta home esta trabajando correctamente!'
    });
});

app.listen(port, function(){
    console.log(`Servidor corriendo en http://localhost:${port}`);
    console.log('Servicio configurado inicial:');
    console.log(`   [GET]http://localhost:${port}/` );

});

