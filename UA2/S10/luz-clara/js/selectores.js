// selectores.js - Seis formas de buscar nodos (final de index.html)

//getElementById:un nodo por su id (Sin #). <header id="cabecera">
const cabecera = document.getElementById("cabecera");
console.log(`Por id "cabecera": <${cabecera.tagName}>`);

//getElementsByClassName. Todos los que tienen esta clase Un nodo por su clase(Sin .)
const tarjetas = document.getElementsByClassName("tarjeta");
//length:cuantas tarjetas de servicio encontro
console.log(`Por clase "tarjeta": ${tarjetas.length} tarjetas`);

//getElementsByTagName: TODAS las etiquetas <section>
const secciones = document.getElementsByTagName("section");
console.log(`Por etiqueta <section>: ${secciones.length} secciones`);

//querySelector: el primer nodo que cumple el selector css( .con punto)
const titulo = document.querySelector(".tarjeta-titulo");
console.log(`El primer .tarjeta-titulo dice: ${titulo.textContent}`);

//querySelectorAll:TODOS los que cumplen.
const todos = document.querySelectorAll(".tarjeta-titulo");
todos.forEach((t) => console.log(`Título de tarjeta: ${t.textContent}`));

//querySelector("#portada h1"): selector css compuesto accede al <h1> de #portada
const h1 = document.querySelector("#portada h1");
console.log(`El <h1> de la portada dice: ${h1.textContent}`);
