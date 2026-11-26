// cupos.js - Estado de cupos y mensaje según nivel
const nivel = "Inicial"; // Nivel del taller para probar
const cupos = 2; // Cupos disponibles

if (cupos === 0) {
  console.error("Taller lleno"); // Avisa error si no hay cupos
} else if (cupos <= 2) {
  console.warn("¡Últimos cupos!"); // Aviso amarillo si hay 1 o 2 cupos
} else {
  console.log("Hay cupos disponibles"); // Mensaje normal si hay más de 2 cupos
}

const textCupos = cupos === 1 ? "Queda 1 cupo" : `Quedan ${cupos} cupos`; // Elige singular o plural con texto completo
console.log(textCupos); // Muestra cantidad de cupos

switch (nivel) {
  case "Inicial":
    console.log("No necesita experiencia"); // Msj nivel inicial
    break; // Cierra Inicial
  case "Intermedio":
    console.log("Requiere el nivel inicial"); // Msj nivel intermedio
    break; // Cierra Intermedio
  default:
    console.log("Consulte con la escuela"); // Msj cualquier otro nivel
}
