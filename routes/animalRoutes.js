
const express = require("express");


const router = express.Router();

const animalController = require("../controllers/animalController");


router.get("/animales", animalController.listarAnimales);


module.exports = router;