const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre de la mascota es obligatorio"],
      trim: true,
    },
    species: {
      type: String,
      required: [true, "La especie es obligatoria"],
      trim: true,
    },
    mood: {
      type: String,
      default: "feliz",
      trim: true,
    },
    age: {
      type: Number,
      required: [true, "La edad es obligatoria"],
      min: [0, "La edad no puede ser negativa"],
    },
  },
  {
    timestamps: true, // agrega createdAt y updatedAt automáticamente
  }
);

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;