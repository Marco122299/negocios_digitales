// Importamos las dependencias y archivos necesarios para el funcionamiento
const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { config } = require('./config/config');

const port = config.apiPort; // Variable del archivo de configuración para el puerto a usar
const app = express(); // Variable general de nuestra API la cual usaremos mucho

app.use(express.json()); // Le indicamos que use la estructura JSON de Express

// Configuraciones del filtro de CORS inicio
// URL con acceso permitido
const whitelist = [
  'http://192.132.1.201', // URL fake
  '193.23.34.72:513', // URL fake
  '*%config.corsApi%', // Observe que la que usaremos proviene del archivo config
  'https://www.algunapaginacualquiera.com' // Un dominio fake
];
// Configuración de las respuestas del filtro de CORS en caso de que
// una URL no permitida o no permitida quieran acceder a los recursos
const options = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('no permitido'));
        }
    }
}

// Configuraciones del filtro de cors fin--------------------------------------

// Integramos a nuestra variable general las configuraciones de cors
app.use(cors(options));

// Configuración de ruta general del proyecto, note que este no accede ni al archivo de rutas ni por consiguiente a ningún servicio.
app.get('/', (req, res) => {
    res.json({
        "Equipo": "Profesor",
        "Integrantes": "Profesor",
        "Proyecto": "Proyecto de ejemplo del profesor"
    });
});

// Enviamos nuestra variable general al administrador de rutas
// donde se encuentra la ruta general y le agregaremos las porciones
// faltantes

routerApi(app);

// Lo que se mostrará en la consola al iniciar el servidor

app.listen(port, () => {
    console.log('Api escuchando en el puerto ${port}');
});

