const 








const crearReserva = async (req, res, next) =>({

    const { espacioId, fecha, horaInicio, horaFin } = req.body;

    try {
        const nuevaReserva = await crearReserva({ espacioId, fecha, horaInicio, horaFin });
        res.status(201).json(nuevaReserva);
    } catch (error) {
        next(error);
    }
})