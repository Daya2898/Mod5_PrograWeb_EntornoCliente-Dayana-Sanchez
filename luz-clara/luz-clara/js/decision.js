// decision.js - if, else if y else
const horas = 2; //Duracion de la sesion

if (horas <= 1) {
  //1 hora o menos
  console.log("Sesion corta");
} else if (horas <= 3) {
  //3 horas o menos
  console.log("Sesion media");
} else {
  console.log("Sesion larga"); //Cualquier otro caso
}
console.log("Fin de la decision"); //Se ejecuta siempre
