const mongoose = require("mongoose")

//schema 
const reservasSchema = new mongoose.Schema({

    "espacioId": {type: mongoose.Schema.Types.ObjectId, require: true, ref: 'Espacio'},
    "fecha": {type: Date, required: true},
    "horaInicio": {type: String, required: true},
    "horaFin": {type: String, required: true},
   
})


//model 
const Reserva = mongoose.model("Reserva", reservasSchema)


//obtener todas las reservas
async function obtenerTodasLasReservas() {
    return await Reserva.find({}).populate('espacioId');
    
    
}


async function obtenerReservaPorId(id){
    return await Reserva.findById(id);
}


//funciones personalizadas
async function crearReserva(reserva){
    const reserva = new Reserva(reserva)
    return await reserva.save()
}

async function obtenerReservas(){
    return await Reserva.find({});
}

async function eliminarReserva(id){
    return await Reserva.findByIdAndDelete(id);
}



module.exports = {
    obtenerTodasLasReservas,
    obtenerReservaPorId,
    crearReserva,
    obtenerReservas,
    eliminarReserva
}
