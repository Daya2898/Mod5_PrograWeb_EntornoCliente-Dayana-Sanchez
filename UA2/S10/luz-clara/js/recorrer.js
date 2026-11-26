//recorrer.js - Recorrer un vector con for y con for ... of
const precios = [45000, 75000, 38000]; //tarifas de Luz clara
let total = 0; //acumulador
for (let i = 0; i < precios.length; i++) {
  //indices 0, 1 y 2
  total += precios[i]; //suma cada precio
}
console.log("Total:", total);
for (const precio of precios) {
  console.log("Precio:", precio); //cada elemento, sin indice
}
