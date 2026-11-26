// selectores.js - Seis formas de buscar nodos (final de index.html)

const cabecera = document.getElementById("cabecera");
console.log(`Por id "cabecera": <${cabecera.tagName}>`);

const tarjetas = document.getElementsByClassName("tarjeta");
console.log(`Por clase "tarjeta": ${tarjetas.length} tarjetas`);

const secciones = document.getElementsByTagName("section");
console.log(`Por etiqueta <section>: ${secciones.length} secciones`);

const titulo = document.querySelector(".tarjeta-titulo");
console.log(`El primer .tarjeta-titulo dice: ${titulo.textContent}`);

const todos = document.querySelectorAll(".tarjeta-titulo");
todos.forEach((t) => console.log(`Título de tarjeta: ${t.textContent}`));

const h1 = document.querySelector("#portada h1");
console.log(`El <h1> de la portada dice: ${h1.textContent}`);
