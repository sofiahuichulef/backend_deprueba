const { getAllEspacios} = require('../services/espacios.models');
const Espacio = require('../models/espacios.mongoose');

const obtenerEspacios = async (req, res, next) => {

    try {
        const espacios = await TodosLosEspacios()
        res.json(espacios);
    } catch (error) {
        next(error);
    }
}

const crearEspacios = async (req,res)=> {
    

}