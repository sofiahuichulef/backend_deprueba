const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const usuarioRouter = require("./routes/user.routes");
const espacioRouter = require("./routes/espacios.routes");
const reservaRouter = require("./routes/reservas.routes");
const auth = require("./middlewares/auth");







app.use("/usuario", usuarioRouter);
app.use("/espacio",auth, espacioRouter);
app.use("/reserva", auth, reservaRouter);

app.use(notFound);
app.use(errorHandler);