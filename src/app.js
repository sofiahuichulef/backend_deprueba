const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const usuarioRouter = require("./routes/user.routes");
const espacioRouter = require("./routes/espacios.routes");
const reservaRouter = require("./routes/reservas.routes");







app.use("/usuario", usuarioRouter);
app.use("/espacio", espacioRouter);
app.use("/reserva", reservaRouter);