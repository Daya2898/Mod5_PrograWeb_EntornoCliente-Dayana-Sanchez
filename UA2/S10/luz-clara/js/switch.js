// switch.js - Elegir entre varios casos
 const dia = "sábado"; // día de la sesión
 switch (dia) { // compara dia con cada case
 case "sábado":
 console.log("Tarifa de fin de semana");
 break; // sale del switch
 case "domingo":
 console.log("Estudio cerrado");
 break;
 default: // ningún case coincidió
 console.log("Tarifa normal");
 }