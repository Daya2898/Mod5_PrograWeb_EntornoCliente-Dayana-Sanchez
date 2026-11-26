 // promocion.js - Descuento según el monto (final de index.html)
 const monto = 113000; // familiar + perfil (S4)
 let descuento = 0; // empieza sin descuento
 if (monto >= 100000) { // ¿compra grande?
 descuento = 10;
 } else if (monto >= 50000) { // ¿compra mediana?
 descuento = 5;
 } else { // compra pequeña
 descuento = 0;
 }
 const total = monto - (monto * descuento) / 100;
 console.log(`Descuento: ${descuento} %`);
 console.log(`Total: ${total}`);
 console.log(total > 90000 ? "Pago en dos tractos" : "Pago de contado");

 //con monto de = 60000 dio 5%
 //con 30000 dio 0% descuento 