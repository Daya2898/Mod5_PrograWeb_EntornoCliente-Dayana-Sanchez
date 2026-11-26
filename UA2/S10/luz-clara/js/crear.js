// crear.js - Crear un nodo nuevo y agregarlo (final de contacto.html)

const horario = document.querySelector(".lista-simple");
console.log(`Renglones del horario antes: ${horario.children.length}`);

const nuevo = document.createElement("li");
nuevo.textContent = "Feriados: cerrado";
horario.append(nuevo);

console.log(`Renglones del horario después: ${horario.children.length}`);
