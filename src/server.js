//load env
process.loadEnvFile();

const app = require('./app');
const { connectDB } = require('./database/mongoose');
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto en http://localhost:${PORT}`);
    });
});