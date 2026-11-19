// nombre.js - Atrapar el error cuando se cancela prompt
 try {
 const nombre = prompt("¿Cuál es su nombre?"); // null si cancela
 const limpio = nombre.trim().toUpperCase(); // falla con null
 console.log(`Reserva a nombre de ${limpio}`);
 } catch (error) {
 console.warn("No se escribió un nombre."); // aviso amarillo
 console.log("Detalle:", error.message); // el error real
 } finally {
 console.log("Gracias por visitar Luz Clara");
 }