// pago.js - plan de pago del taller
const nombre = " panadería: masa madre ".trim().toUpperCase(); // Limpia espacios y pasa a mayúsculas
console.log(`Taller: ${nombre}`); // Muestra el nombre plantilla

const sesion = new Date(2026, 10, 21); // Fecha fija
const largo = { dateStyle: "full" }; //  fecha completa
console.log(`Inicia: ${sesion.toLocaleDateString("es-CR", largo)}`); // Imprime fecha larga 
const total = 105000; // Monto total del taller + matrícula
const cuotas = 4; // cuotas
const cuota = total / cuotas; // Valor de cada cuota
const opciones = { style: "currency", currency: "CRC" }; //  moneda en colones
const colones = new Intl.NumberFormat("es-CR", opciones); // Formateador reutilizable 

console.log(`Total: ${colones.format(total)}`); 
console.log(`${cuotas} cuotas de ${colones.format(cuota)}`); // Muestra cuotas y monto de cada una
console.log(`¿Cuota exacta? ${Number.isInteger(cuota)}`); // Indica si la cuota es un entero exacto
console.log(`Con 3 cuotas: ${Math.ceil(total / 3)} cada una`); // Calcula pago 3 cuotas redondeando hacia arriba