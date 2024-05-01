const express = require('express');
const router = express.Router();

const userClass = require('../services/usersS');
const userService = new userClass();

router.get('/', async(req,res,next) => {
    let result = {
        "Message": "Servicio de pruebas de rutas de usuarios"
    }
    res.json(result);
});

router.get('/getUsers',async(req,res,next) => {
    let result = "";
    let myRequest = await userService.getUsers();
    result = {
        "status":200,
        "Mensaje":"Se obtuvieron los usuarios",
        "data":myRequest
    }
    res.json(result);
});

router.get('/getUser/:id', async (req, res, next) => {
    const id = req.params;
    let myRequest = await userService.getUser(id);
    result = {
        "status": "200",
        "Mensaje": "Se obtuvo el usuario",
        "data": myRequest
    }
    res.json(result)
});

router.get('/login', async (req, res, next) => {
    const body = req.body;
    let result = "";
    let myRequest = await userService.login(body);
    result = {
        "Status": "200",
        "Mensaje": "Usuario permitido",
        "data": myRequest
    }
    res.json(result)
});

router.post('/register', async (req, res, next) => {
    const body = req.body;
    let result = "";
    let myRequest = await userService.register(body);
    if (myRequest = 1){
        result = {
            "status": 200,
            "Mensaje": "Usuario registrado"
        };
    }
    res.json(result);
});

module.exports = router;

