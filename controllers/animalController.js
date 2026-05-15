
const animalService = require("../services/animalService");

function listarAnimales(req, res) {

    try {
        const animales = animalService.obtenerAnimales();
        res.status(200).json({
            ok: true,
            mensaje: "Animales extraídos correctamente",
            datos: animales
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            mensaje: error.message
        });
    }
}

module.exports = {
    listarAnimales
};