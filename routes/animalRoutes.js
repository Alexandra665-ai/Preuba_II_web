// Importamos express para crear rutas
const express = require("express");

// Creamos el router de express
const router = express.Router();

// Importamos el controlador de animales
const animalController = require("../controllers/animalController");

// Creamos la ruta GET /animales
router.get("/animales", animalController.listarAnimales);

// Exportamos el router para usarlo en app.js
module.exports = router;