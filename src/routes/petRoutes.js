const express = require("express");
const router = express.Router();
const {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  deletePet,
} = require("../controllers/petController");

// GET /pets
router.get("/", getAllPets);

// GET /pets/:id
router.get("/:id", getPetById);

// POST /pets
router.post("/", createPet);

// PUT /pets/:id
router.put("/:id", updatePet);

// DELETE /pets/:id
router.delete("/:id", deletePet);

module.exports = router;