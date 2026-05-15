
const fs = require("fs");


const path = require("path");

// cheerio para procesar HTML
const cheerio = require("cheerio");

// función para obtener los animales
function obtenerAnimales() {

    const rutaArchivo = path.join(__dirname, "../data/animales.html");

    // archivo HTML
    const html = fs.readFileSync(rutaArchivo, "utf8");

    // Ver si el archivo está vacío
    if (!html) {

        throw new Error("El archivo HTML está vacío");
    }
    const $ = cheerio.load(html);

    // arreglo vacío para guardar los animales
    const animales = [];

    $(".animal").each(function () {
        const nombre = $(this).find(".nombre").text();
        const tipo = $(this).find(".tipo").text();
        const edad = $(this).find(".edad").text();
        const estado = $(this).find(".estado").text();

        // Guardamos los datos en el arreglo
        animales.push({
            nombre: nombre,
            tipo: tipo,
            edad: edad,
            estado: estado
        });
    });

    if (animales.length === 0) {
        throw new Error("No se encontraron animales en el HTML");
    }
    return animales;
}
module.exports = {
    obtenerAnimales
};