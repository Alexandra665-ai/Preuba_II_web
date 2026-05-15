# Prueba II Web — Extracción de datos con Cheerio

## Objetivo

Este proyecto extrae información desde un archivo HTML local usando **Cheerio**, una librería de Node.js que permite leer y manipular HTML de forma similar a jQuery. Los datos extraídos se entregan a través de una API REST construida con **Express**.

En este caso, la fuente de datos es un refugio de animales ficticio (`animales.html`), y el endpoint retorna información de cada animal registrado: nombre, tipo, edad y estado de adopción.

## Tecnologías usadas

- Node.js
- Express
- Cheerio
- HTML (archivo local como fuente de datos)

---
## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/Preuba_II_web.git
cd Preuba_II_web
```

2. Instala las dependencias:

```bash
npm install
```

---

## Ejecución

```bash
node app.js
```

El servidor quedará corriendo en `http://localhost:3000`

---

## Endpoints

### `GET /animales`

Extrae y retorna la lista de animales desde el archivo HTML local usando Cheerio.

**URL:**
```
http://localhost:3000/animales
```

**Respuesta exitosa (200):**

```json
{
  "ok": true,
  "mensaje": "Animales extraídos correctamente",
  "datos": [
    {
      "nombre": "Luna",
      "tipo": "Perro",
      "edad": "3 años",
      "estado": "En adopción"
    },
    {
      "nombre": "Nur",
      "tipo": "Gato",
      "edad": "2 años",
      "estado": "Disponible"
    },
    {
      "nombre": "Capitán",
      "tipo": "Perro",
      "edad": "5 años",
      "estado": "Adoptado"
    }
  ]
}
```

**Respuesta con error (500):**

```json
{
  "ok": false,
  "mensaje": "No se encontraron animales en el HTML"
}
```

