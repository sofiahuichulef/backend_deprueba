const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/cowork')
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1);
    }
}

module.exports = { connectDB };