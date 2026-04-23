
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { crearUsuario, UsuarioPorEmail } = require('../models/usuarios.models');



const registrar = async (req, res, next) => {

    try{
    const { nombre, email, password } = req.body;


    const usuario = await crearUsuario({ nombre, email, password });

    res.status(201).json({
        message: 'Usuario registrado exitosamente',
        id:usuario._id
    })

    //VALIDACION 
   } catch (error) {
    next(error);
}
}


const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        //validacion 

        // consulta al modelo para verificar el usuario
        const usuario = await UsuarioPorEmail(email);

        if (!usuario) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const passwordValido = await bcrypt.compare(password, usuario.password);

        if (!passwordValido) {
            return res.status(401).json({ message: 'Credenciales inválidas' });

        }


        // generar token JWT si es necesario
        const token = jwt.sign({ id: usuario._id, rol: usuario.rol }, "secret_key", { expiresIn: '8h' });

        res.status(200).json({
            message: 'Login exitoso',
            id: usuario._id
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    registrar,
    login
}