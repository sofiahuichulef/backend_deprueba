const 








const crearReserva = async (req, res, next) =>({

    

    try {
         const { usuario, espacioId, fecha, horaInicio, horaFin } = req.body;

        res.status(201).json(nuevaReserva);
    } catch (error) {
        next(error);
    }
})