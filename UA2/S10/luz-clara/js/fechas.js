//fechas.js - Fechas con Date
const hoy = new Date(); //fehca y hora de ahora actuales
console.log(hoy.getFullYear()); //año =2026
console.log(hoy.getMonth() + 1); //mes: empieza en 0
console.log(hoy.getDate()); //dia del mes
console.log(hoy.toLocaleDateString("es-CR")); //formarto de Costa Rica
const sesion = new Date(2026, 11, 5); //5 de diciembre (mes 11)
console.log(sesion.toLocaleDateString("es-CR", { dateStyle: "full" })); // año =año = 2026
