//texto.js - metodos de las cadenas y plantillas
const escrito = " retrato familiar "; //con espacios de más
const servicios = escrito.trim(); //quita espacios
console.log(escrito.length, servicios.length); //cantidad de letras
console.log(servicios.toUpperCase()); //todo en mayuscula
console.log(servicios.includes("familiar")); //contiene?
console.log(servicios.slice(0, 7)); //de la letra 0 a la 6
console.log(`Servicio: ${servicios}`); //plantilla con ${}
