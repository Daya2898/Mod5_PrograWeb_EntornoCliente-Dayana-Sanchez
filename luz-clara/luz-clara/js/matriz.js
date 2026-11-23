// matriz.js - Una matriz es un vector de vectores (filas y columnas)
const dias = ["Lunes", "Martes"]; // el nombre de cada fila
const agenda = [
  // filas: días · columnas: horas
  ["Retrato", "Libre", "Perfil"], // fila 0: lunes
  ["Libre", "Familiar", "Libre"], // fila 1: martes
];
console.log(agenda[1][1]); // fila 1, columna 1
for (let f = 0; f < agenda.length; f++) {
  // recorre las filas
  console.log(`${dias[f]}: ${agenda[f].join(" | ")}`); // misma posición f
}
