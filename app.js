
const express = require("express");

const animalRoutes = require("./routes/animalRoutes");

const app = express();

const puerto = 3000;

app.use(express.json());

app.use("/", animalRoutes);

app.get("/", function (req, res) {

    res.send("Servidor funcionando. Ingresa a /animales para ver los datos.");

});

app.use(function (req, res) {

    res.status(404).json({
        ok: false,
        mensaje: "Ruta no encontrada"
    });

});


app.listen(puerto, function () {
    console.log("Servidor corriendo en http://localhost:" + puerto);
});
