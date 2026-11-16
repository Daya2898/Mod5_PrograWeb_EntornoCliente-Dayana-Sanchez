//pago.js - plan de pago del taller
console.log("Taller: PANADERÍA: MASA MADRE");
const sesion = new Date(2026, 10, 21);
console.log(
  "Inicia:",
  sesion.toLocaleDateString("es-CR", { dateStyle: "full" }),
);
const total = 105000;
const opciones = { style: "currency", currency: "CRC" };
const colones = new Intl.NumberFormat("es-CR", opciones);
console.log("Total:", colones.format(total));
