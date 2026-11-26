// nombre.js - Controles con el mismo name (final de contacto.html)

const lugares = document.getElementsByName("lugar");
console.log(`Opciones de "lugar": ${lugares.length}`);
lugares.forEach((r) => console.log(`value de una opción: ${r.value}`));

const etiquetas = document.querySelectorAll(".opcion-etiqueta");
console.log(`Texto de la 1.ª opción: ${etiquetas[0].textContent}`);
