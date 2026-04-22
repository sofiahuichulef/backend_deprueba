import mongoose from "mongoose";

const moongoose = require('mongoose');

//crear el esquema

const espacioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    ubicacion: { type: String, required: true },
    capacidad: { type: Number, required: true },
    disponibilidad: { type: Boolean, default: true },
    precio: { type: Number, required: true },
    descripcion: { type: String },
    imagenUrl: { type: String }
});

//crear el modelo
const Espacio = mongoose.model('Espacio', espacioSchema);

//modelo espacio -------> mongo db espacios

//obtner todos los espacios

async function TodosLosEspacios(){
    return await Espacio.find({ 
        }
    )
       
}

async function obtenerEspacioId(id) {
    return await Espacio.findById(id);
}


//validar parametros
async function encontrarReserva(espacioId, fecha, horaInicio, horaFin) {
    return await Reserva.findOne({ espacioId: espacioId, fecha: fecha, horaInicio: { $lt: horaFin }, horaFin: { $gte: horaFin } });
}



module.exports = {

    TodosLosEspacios,
    obtenerEspacioId
}