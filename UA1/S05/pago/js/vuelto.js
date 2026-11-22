//vuelto.js - Cálculo de vuelto con conversion de datos
const totlPersona = 105000; //Monto fijo persona inscrita
const pagoText = prompt("¿Con cuánto cancela?"); //se pide monto pg como text
const personasText = prompt("¿Cuántas personas se inscriben?");//pide personas
const pago = parseFloat(pagoText); //pago a numero con decimales
const personas = parseInt(personasText); // extrae numero entero nd mas
const aPagar = totlPersona * personas; //calc monto total pagar

console.log(`Personas: ${personas}`); // Muestra cantidad de personas
console.log(`A pagar: ${aPagar.toLocaleString("es-CR")}`); // Muestra total con formato de miles de CR
console.log(`Pagó: ${pago.toFixed(2)}`); // Muestra pago con dos decimales
console.log(`Vuelto: ${(pago - aPagar).toFixed(2)}`); // Resta y luego formatea vuelto a dos decimales