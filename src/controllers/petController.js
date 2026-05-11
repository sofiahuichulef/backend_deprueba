const Pet = require("../models/Pet");

// Listar todas las mascotas
exports.getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener mascotas" });
  }
};

// Obtener mascota por ID
exports.getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ error: "Mascota no encontrada" });
    res.json(pet);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener mascota" });
  }
};

// Crear nueva mascota
exports.createPet = async (req, res) => {
  try {
    const newPet = new Pet(req.body);
    await newPet.save();
    res.status(201).json(newPet);
  } catch (error) {
    res.status(400).json({ error: "Error al crear mascota" });
  }
};

// Actualizar mascota
exports.updatePet = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pet) return res.status(404).json({ error: "Mascota no encontrada" });
    res.json(pet);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar mascota" });
  }
};

// Eliminar mascota
exports.deletePet = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndDelete(req.params.id);
    if (!pet) return res.status(404).json({ error: "Mascota no encontrada" });
    res.json({ message: "Mascota eliminada" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar mascota" });
  }
};

