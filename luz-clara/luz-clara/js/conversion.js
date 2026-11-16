//conversion.js - Convertir entre texto y número
console.log(Number("45000.5")); //texto a numero
console.log(parseInt("45000.5")); //solo la parte entera
console.log(parseFloat("45000.5")); //con decimales
console.log(parseInt("3 fotos")); //lee hasta donde puede
console.log(Number("3 fotos")); //NaN: no es un número
const precio = 75000 * 1.13; //84749.99999999999
console.log(precio); //decimales de más
console.log(precio.toFixed(2)); // 2 decimales (texto)
console.log(typeof precio.toFixed(2)); //string
console.log(precio.toPrecision(3)); //3 cifras
console.log(precio.toExponential(1)); //notación cientifica
console.log((45000).toString() + 1); //número a texto: une
