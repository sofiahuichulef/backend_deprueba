const express = require('express');
const { model } = require('mongoose');

const router = express.Router();

// Rutas para usuarios

//crear nuevo usuario
router.post('registro',registrar);

router.post('login', login);



router.get('/', (req, res) => {
    res.send('Obtener todos los usuarios');
});


module.exports = router;