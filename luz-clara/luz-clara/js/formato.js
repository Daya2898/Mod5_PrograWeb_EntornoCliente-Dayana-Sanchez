//formato.js - Numeros con formatos de Costa Rica (Intl)
const precio = 45000; //número
console.log(precio.toLocaleString("es-CR")); //separa miles
const opciones = { style: "currency", currency: "CRC" }; //Colones
const colones = new Intl.NumberFormat("es-CR", opciones);
console.log(colones.format(precio)); // ¢ y decimales
console.log(colones.format(75000 * 1.13)); //redondea solo
