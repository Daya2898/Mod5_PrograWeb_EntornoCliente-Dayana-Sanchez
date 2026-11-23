// descuento.js - corregido valuando 1° monto mayor-100000
 const monto = 120000; // una compra grande
 let descuento = 0;//descuento inicial

 if (monto >= 100000) { // ¿compra mediana?=50000 dato anterior
 descuento = 10;//10%asignado si es 100000 o + -dato anterior 5
 } else if (monto >= 50000) { // ¿compra grande? evalua compra mediana -100000 dato anterior
 descuento = 5; //5% asignado si entre 50000 - 99999 -10dato anterior
 }
 console.log(`Descuento: ${descuento} %`); // debería ser 10 %-ahora lo muestra