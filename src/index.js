require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const petRoutes = require("./routes/petRoutes");

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware para parsear JSON
app.use(express.json());

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB - mascotas_virtuales"))
  .catch((err) => console.error("❌ Error al conectar a MongoDB:", err));

// Ruta de bienvenida
app.get("/", (req, res) => {
  res.json({
    message: "🐾 Bienvenido a la API de Mascotas Virtuales",
    endpoints: {
      "GET /pets": "Listar todas las mascotas",
      "GET /pets/:id": "Obtener una mascota por ID",
      "POST /pets": "Crear una nueva mascota",
      "PUT /pets/:id": "Actualizar una mascota",
      "DELETE /pets/:id": "Eliminar una mascota",
    },
  });
});

// Rutas de mascotas
app.use("/pets", petRoutes);

// Middleware para rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});